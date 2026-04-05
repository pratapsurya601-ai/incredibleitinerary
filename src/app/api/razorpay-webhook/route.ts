import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || "";

// ── Tier → slugs map (mirrors /api/verify-payment) ───────────────────────────
const TIER_SLUGS: Record<string, string[]> = {
  "II-PDF-99":        ["goa-3-days", "india-budget-guide", "varanasi-3-days"],
  "II-PDF-149":       ["rajasthan-7-days", "kerala-5-days", "kashmir-6-days", "manali-5-days", "andaman-5-days"],
  "II-PDF-199":       ["leh-ladakh-7-days", "bangkok-4-days", "bali-5-days", "singapore-4-days", "sri-lanka-7-days"],
  "II-PDF-249":       ["dubai-4-days", "portugal-7-days"],
  "II-PDF-299":       ["japan-10-days", "greece-10-days"],
  "II-PDF-199-P3":    ["vietnam-10-days", "thailand-10-days", "bhutan-5-days"],
  "II-INDIAPACK-001": [
    "rajasthan-7-days", "kerala-5-days", "goa-3-days", "india-budget-guide",
    "leh-ladakh-7-days", "kashmir-6-days", "manali-5-days", "andaman-5-days", "varanasi-3-days",
    "bhutan-5-days",
  ],
  "II-ALLGUIDES-001": [],
};

// ── Redis helpers ─────────────────────────────────────────────────────────────
type DownloadData = { slugs: string[]; premium: boolean };

async function getRedis() {
  const url = process.env.REDIS_URL || process.env.KV_REST_API_URL;
  if (!url) return null;
  try {
    const { default: Redis } = await import("ioredis");
    return new Redis(url, { lazyConnect: true, connectTimeout: 3000, maxRetriesPerRequest: 1 });
  } catch { return null; }
}

async function getDownloads(email: string): Promise<DownloadData> {
  const redis = await getRedis();
  if (!redis) return { slugs: [], premium: false };
  try {
    const raw = await redis.get(`dl:${email}`);
    redis.disconnect();
    if (!raw) return { slugs: [], premium: false };
    return JSON.parse(raw) as DownloadData;
  } catch { return { slugs: [], premium: false }; }
}

async function saveDownloads(email: string, data: DownloadData) {
  const redis = await getRedis();
  if (!redis) return;
  try {
    await redis.set(`dl:${email}`, JSON.stringify(data), "EX", 60 * 60 * 24 * 365);
    redis.disconnect();
  } catch { /* ignore */ }
}

// ── POST /api/razorpay-webhook ────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const rawBody = await req.text();

  // ── Verify webhook signature ─────────────────────────────────────────────────
  if (WEBHOOK_SECRET) {
    const signature = req.headers.get("x-razorpay-signature") || "";
    const expectedSig = crypto
      .createHmac("sha256", WEBHOOK_SECRET)
      .update(rawBody)
      .digest("hex");

    if (expectedSig !== signature) {
      console.warn("[webhook] Invalid Razorpay signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
    }
  } else {
    console.warn("[webhook] RAZORPAY_WEBHOOK_SECRET not set — skipping signature check");
  }

  let event: Record<string, unknown>;
  try { event = JSON.parse(rawBody); }
  catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }

  const eventType = event.event as string;

  // ── Handle payment_link.paid ──────────────────────────────────────────────────
  if (eventType === "payment_link.paid") {
    try {
      const payload = event.payload as Record<string, unknown>;
      const paymentLink = (payload.payment_link as Record<string, unknown>)?.entity as Record<string, unknown>;
      const payment = (payload.payment as Record<string, unknown>)?.entity as Record<string, unknown>;

      const email = (payment?.email as string || "").toLowerCase().trim();
      const referenceId = paymentLink?.reference_id as string || "";

      if (!email) {
        console.warn("[webhook] No email in payment payload");
        return NextResponse.json({ received: true });
      }

      const isAllAccess = referenceId === "II-ALLGUIDES-001";
      const slugsToUnlock = TIER_SLUGS[referenceId] ?? [];

      const data = await getDownloads(email);

      if (isAllAccess) {
        data.premium = true;
      } else {
        for (const slug of slugsToUnlock) {
          if (!data.slugs.includes(slug)) data.slugs.push(slug);
        }
      }

      await saveDownloads(email, data);

      // Subscribe to Mailchimp
      try {
        fetch(`${req.nextUrl.origin}/api/subscribe`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }).catch(() => {});
      } catch { /* ignore */ }

      console.log(`[webhook] Granted access for ${email} — ref: ${referenceId}, premium: ${data.premium}`);
    } catch (err) {
      console.error("[webhook] Error processing payment_link.paid:", err);
    }
  }

  // Always return 200 so Razorpay doesn't retry
  return NextResponse.json({ received: true });
}
