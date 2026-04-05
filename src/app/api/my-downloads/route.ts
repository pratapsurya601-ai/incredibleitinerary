import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const ALL_SLUGS = [
  "rajasthan-7-days",
  "kerala-5-days",
  "goa-3-days",
  "india-budget-guide",
  "leh-ladakh-7-days",
  "bangkok-4-days",
  "kashmir-6-days",
  "manali-5-days",
  "bali-5-days",
  "dubai-4-days",
];

function generateToken(slug: string): string {
  const secret = process.env.DOWNLOAD_SECRET || "dev-secret-please-change";
  const window = Math.floor(Date.now() / 1000 / 900);
  return crypto
    .createHmac("sha256", secret)
    .update(`${slug}:${window}`)
    .digest("hex")
    .slice(0, 40);
}

async function getRedis() {
  const url = process.env.REDIS_URL || process.env.KV_REST_API_URL;
  if (!url) return null;
  try {
    const { default: Redis } = await import("ioredis");
    return new Redis(url, { lazyConnect: true, connectTimeout: 3000, maxRetriesPerRequest: 1 });
  } catch { return null; }
}

// POST /api/my-downloads — look up what a given email has access to
export async function POST(req: NextRequest) {
  let body: { email?: string };
  try { body = await req.json(); }
  catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }); }

  const { email } = body;
  if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const normalizedEmail = email.toLowerCase().trim();
  const redis = await getRedis();

  if (!redis) {
    return NextResponse.json({ error: "Service unavailable" }, { status: 503 });
  }

  let data: { slugs: string[]; premium: boolean } = { slugs: [], premium: false };
  try {
    const raw = await redis.get(`dl:${normalizedEmail}`);
    redis.disconnect();
    if (raw) data = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Lookup failed" }, { status: 500 });
  }

  if (!data.premium && data.slugs.length === 0) {
    return NextResponse.json({ found: false });
  }

  const unlockedSlugs = data.premium ? ALL_SLUGS : data.slugs;

  const tokens: Record<string, string> = {};
  for (const slug of unlockedSlugs) {
    tokens[slug] = generateToken(slug);
  }

  return NextResponse.json({
    found: true,
    premium: data.premium,
    unlockedSlugs,
    tokens,
  });
}
