import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const MAX_FREE = 2;
const SECRET = process.env.DOWNLOAD_SECRET || "dev-secret-please-change";

// Available guides
const VALID_SLUGS = ["rajasthan-7-days"];

// ── Token generation (15-min windows, valid for 30 min) ──────────────────────
function generateToken(slug: string): string {
  const window = Math.floor(Date.now() / 1000 / 900);
  return crypto
    .createHmac("sha256", SECRET)
    .update(`${slug}:${window}`)
    .digest("hex")
    .slice(0, 40);
}

// ── Redis helpers (lazy singleton, graceful fallback) ─────────────────────────
type DownloadData = { slugs: string[]; premium: boolean };

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

async function getDownloads(email: string): Promise<DownloadData> {
  const redis = await getRedis();
  if (!redis) return { slugs: [], premium: false };
  try {
    const raw = await redis.get(`dl:${email}`);
    redis.disconnect();
    if (!raw) return { slugs: [], premium: false };
    return JSON.parse(raw) as DownloadData;
  } catch {
    return { slugs: [], premium: false };
  }
}

async function saveDownloads(email: string, data: DownloadData): Promise<void> {
  const redis = await getRedis();
  if (!redis) {
    console.warn("[download] Redis not configured — running without download tracking");
    return;
  }
  try {
    await redis.set(`dl:${email}`, JSON.stringify(data), "EX", 60 * 60 * 24 * 365);
    redis.disconnect();
  } catch {
    console.warn("[download] Redis write failed");
  }
}

// ── POST /api/download ────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  let body: { email?: string; slug?: string };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { email, slug } = body;

  if (!email || !slug) {
    return NextResponse.json({ error: "Email and guide slug are required" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
  }

  if (!VALID_SLUGS.includes(slug)) {
    return NextResponse.json({ error: "Guide not found" }, { status: 404 });
  }

  const normalizedEmail = email.toLowerCase().trim();
  const data = await getDownloads(normalizedEmail);

  // Premium — unlimited access
  if (data.premium) {
    const token = generateToken(slug);
    return NextResponse.json({ success: true, token, slug, premium: true, remaining: 999 });
  }

  // Already downloaded this guide — re-issue token (no charge)
  if (data.slugs.includes(slug)) {
    const token = generateToken(slug);
    return NextResponse.json({
      success: true, token, slug,
      alreadyOwned: true,
      remaining: MAX_FREE - data.slugs.length,
    });
  }

  // Hit the free limit — paywall
  if (data.slugs.length >= MAX_FREE) {
    return NextResponse.json(
      { paywall: true, count: data.slugs.length, downloaded: data.slugs },
      { status: 402 }
    );
  }

  // Grant download
  data.slugs.push(slug);
  await saveDownloads(normalizedEmail, data);

  // Silently subscribe to Mailchimp (fire-and-forget)
  try {
    fetch(`${req.nextUrl.origin}/api/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: normalizedEmail }),
    }).catch(() => {});
  } catch { /* ignore */ }

  const token = generateToken(slug);
  const remaining = MAX_FREE - data.slugs.length;

  return NextResponse.json({
    success: true, token, slug,
    remaining,
    isLast: remaining === 0,
    total: data.slugs.length,
  });
}
