import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const ALL_SLUGS = [
  // ₹99
  "goa-3-days", "india-budget-guide", "varanasi-3-days",
  "mumbai-3-days", "delhi-3-days", "agra-2-days",
  "amritsar-2-days", "hyderabad-2-days", "pune-2-days", "mysore-2-days",
  // ₹149
  "rajasthan-7-days", "kerala-5-days", "kashmir-6-days", "manali-5-days", "andaman-5-days",
  "jaipur-3-days", "rishikesh-3-days", "coorg-3-days",
  "darjeeling-3-days", "hampi-3-days", "ooty-3-days",
  "meghalaya-5-days", "northeast-india-10-days",
  // ₹199
  "leh-ladakh-7-days", "bangkok-4-days", "bali-5-days", "singapore-4-days", "sri-lanka-7-days",
  "spiti-valley-7-days", "char-dham-7-days", "kedarnath-trek-3-days", "gujarat-7-days",
  "malaysia-7-days", "nepal-7-days", "turkey-7-days", "amsterdam-4-days",
  // ₹199 P3
  "vietnam-10-days", "thailand-10-days", "bhutan-5-days",
  // ₹249
  "dubai-4-days", "portugal-7-days",
  "paris-5-days", "barcelona-5-days", "rome-5-days",
  "london-5-days", "maldives-5-days", "new-york-5-days",
  // ₹299
  "japan-10-days", "greece-10-days", "switzerland-7-days",
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
