import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { DRIP_STEPS, getDestinationName, type DripContext } from "@/lib/drip-templates";

/**
 * Vercel Cron endpoint — runs daily at 09:00 IST (03:30 UTC)
 * Processes email drip queue stored in Redis.
 *
 * Redis schema:
 *   drip:{email} → JSON: { slug, step, enrolledAt (ISO string) }
 *   dl:{email}   → JSON: { slugs, premium } (existing download tracking)
 */

const SITE = "https://www.incredibleitinerary.com";

async function getRedis() {
  const url = process.env.REDIS_URL || process.env.KV_REST_API_URL;
  if (!url) return null;
  try {
    const { default: Redis } = await import("ioredis");
    return new Redis(url, { lazyConnect: true, connectTimeout: 3000, maxRetriesPerRequest: 1 });
  } catch {
    return null;
  }
}

interface DripEntry {
  slug: string;
  step: number;           // next step to send (0 = welcome not yet sent)
  enrolledAt: string;     // ISO timestamp of PDF download
  sentAt?: string[];      // ISO timestamps of each step sent
}

export async function GET(req: NextRequest) {
  // Verify this is called by Vercel Cron (not public)
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const redis = await getRedis();
  if (!redis) {
    return NextResponse.json({ skipped: true, reason: "Redis not configured" });
  }

  let cursor = "0";
  let processed = 0;
  let sent = 0;
  const errors: string[] = [];

  try {
    // Scan all drip:* keys
    do {
      const [nextCursor, keys] = await redis.scan(cursor, "MATCH", "drip:*", "COUNT", 100);
      cursor = nextCursor;

      for (const key of keys) {
        const raw = await redis.get(key);
        if (!raw) continue;

        let entry: DripEntry;
        try {
          entry = JSON.parse(raw);
        } catch {
          continue;
        }

        processed++;

        const enrolledAt = new Date(entry.enrolledAt).getTime();
        const now = Date.now();
        const daysSince = (now - enrolledAt) / (1000 * 60 * 60 * 24);

        // Find which steps are due
        const stepsDue = DRIP_STEPS.filter(
          (s) => s.step >= entry.step && s.delayDays <= daysSince
        );

        if (stepsDue.length === 0) continue;

        const email = key.replace("drip:", "");
        const destination = getDestinationName(entry.slug);
        const ctx: DripContext = {
          email,
          slug: entry.slug,
          destination,
          pdfUrl: `${SITE}/thank-you?flow=lookup`,
          allAccessUrl: "https://rzp.io/rzp/oUANvqjl",
          guidesUrl: `${SITE}/guides`,
        };

        // Send each due step in order
        for (const step of stepsDue.sort((a, b) => a.step - b.step)) {
          const subject = step.subject.replace(/\{\{destination\}\}/g, destination);
          const html = step.html(ctx);

          const ok = await sendEmail({ to: email, subject, html });
          if (ok) {
            sent++;
            entry.step = step.step + 1;
            entry.sentAt = [...(entry.sentAt ?? []), new Date().toISOString()];
          } else {
            errors.push(`Failed to send step ${step.step} to ${email}`);
            break; // stop this email on first failure
          }

          // Small delay between sends to respect rate limits
          await new Promise((r) => setTimeout(r, 100));
        }

        // Update Redis entry (or delete if sequence complete)
        if (entry.step >= DRIP_STEPS.length) {
          await redis.del(key);
        } else {
          await redis.set(key, JSON.stringify(entry), "KEEPTTL");
        }
      }
    } while (cursor !== "0");

  } catch (err) {
    console.error("[drip cron] Error:", err);
  } finally {
    redis.disconnect();
  }

  return NextResponse.json({ processed, sent, errors: errors.slice(0, 10) });
}
