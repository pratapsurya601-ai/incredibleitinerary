import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || "";

// ── Which slugs each payment tier unlocks ─────────────────────────────────────
const TIER_SLUGS: Record<string, string[]> = {
  // ₹99 — short India city breaks
  "II-PDF-99":    ["goa-3-days", "india-budget-guide", "varanasi-3-days",
                   "mumbai-3-days", "delhi-3-days", "agra-2-days",
                   "amritsar-2-days", "hyderabad-2-days", "pune-2-days", "mysore-2-days"],
  "II-PDF-99-V2": ["goa-3-days", "india-budget-guide", "varanasi-3-days",
                   "mumbai-3-days", "delhi-3-days", "agra-2-days",
                   "amritsar-2-days", "hyderabad-2-days", "pune-2-days", "mysore-2-days"],
  // ₹149 — week-long India + hill stations
  "II-PDF-149":   ["rajasthan-7-days", "kerala-5-days", "kashmir-6-days", "manali-5-days", "andaman-5-days",
                   "jaipur-3-days", "rishikesh-3-days", "coorg-3-days",
                   "darjeeling-3-days", "hampi-3-days", "ooty-3-days",
                   "meghalaya-5-days", "north-east-india-10-days"],
  // ₹199 — complex India + SE Asia + budget Europe
  "II-PDF-199":   ["leh-ladakh-7-days", "bangkok-4-days", "bali-5-days", "singapore-4-days", "sri-lanka-7-days",
                   "spiti-valley-7-days", "char-dham-7-days", "kedarnath-trek-3-days", "gujarat-7-days",
                   "malaysia-7-days", "nepal-7-days", "turkey-7-days", "amsterdam-4-days"],
  // ₹199 Phase 3
  "II-PDF-199-P3": ["vietnam-10-days", "thailand-10-days", "bhutan-5-days"],
  // ₹249 — premium international + Europe capitals
  "II-PDF-249":   ["dubai-4-days", "portugal-7-days",
                   "paris-5-days", "barcelona-5-days", "rome-5-days",
                   "london-5-days", "maldives-5-days", "new-york-5-days"],
  // ₹299 — ultra-premium long-haul
  "II-PDF-299":   ["japan-10-days", "greece-10-days", "switzerland-7-days"],
  // India Pack — ALL India guides
  "II-INDIAPACK-001": [
    "rajasthan-7-days", "kerala-5-days", "goa-3-days", "india-budget-guide",
    "leh-ladakh-7-days", "kashmir-6-days", "manali-5-days", "andaman-5-days",
    "varanasi-3-days", "bhutan-5-days",
    "mumbai-3-days", "delhi-3-days", "agra-2-days", "jaipur-3-days",
    "rishikesh-3-days", "coorg-3-days", "darjeeling-3-days", "amritsar-2-days",
    "hampi-3-days", "mysore-2-days", "spiti-valley-7-days", "char-dham-7-days",
    "kedarnath-trek-3-days", "meghalaya-5-days", "north-east-india-10-days",
    "ooty-3-days", "hyderabad-2-days", "pune-2-days", "gujarat-7-days",
  ],
  // All Access — premium: true covers every slug
  "II-ALLGUIDES-001": [],
};

// ── Redis helpers (same pattern as /api/download) ─────────────────────────────
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

// ── Token generation (matches /api/download) ──────────────────────────────────
function generateToken(slug: string): string {
  const secret = process.env.DOWNLOAD_SECRET || "dev-secret-please-change";
  const window = Math.floor(Date.now() / 1000 / 900);
  return crypto
    .createHmac("sha256", secret)
    .update(`${slug}:${window}`)
    .digest("hex")
    .slice(0, 40);
}

// ── POST /api/verify-payment ──────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  let body: {
    email?: string;
    razorpay_payment_id?: string;
    razorpay_payment_link_id?: string;
    razorpay_payment_link_reference_id?: string;
    razorpay_payment_link_status?: string;
    razorpay_signature?: string;
  };

  try { body = await req.json(); }
  catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }); }

  const {
    email,
    razorpay_payment_id,
    razorpay_payment_link_id,
    razorpay_payment_link_reference_id,
    razorpay_payment_link_status,
    razorpay_signature,
  } = body;

  // ── Basic validation ────────────────────────────────────────────────────────
  if (!email || !razorpay_payment_id || !razorpay_payment_link_id || !razorpay_signature) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (razorpay_payment_link_status !== "paid") {
    return NextResponse.json({ error: "Payment not completed" }, { status: 402 });
  }

  // ── Verify Razorpay signature ────────────────────────────────────────────────
  // Signature = HMAC-SHA256(payment_link_id + "|" + payment_link_reference_id + "|" + payment_id, key_secret)
  if (KEY_SECRET) {
    const expectedSig = crypto
      .createHmac("sha256", KEY_SECRET)
      .update(`${razorpay_payment_link_id}|${razorpay_payment_link_reference_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expectedSig !== razorpay_signature) {
      return NextResponse.json({ error: "Invalid payment signature" }, { status: 403 });
    }
  } else {
    console.warn("[verify-payment] RAZORPAY_KEY_SECRET not set — skipping signature check");
  }

  // ── Determine which slugs to unlock ─────────────────────────────────────────
  const referenceId = razorpay_payment_link_reference_id || "";
  const isAllAccess = referenceId === "II-ALLGUIDES-001";
  const slugsToUnlock = TIER_SLUGS[referenceId] ?? [];

  const normalizedEmail = email.toLowerCase().trim();
  const data = await getDownloads(normalizedEmail);

  if (isAllAccess) {
    data.premium = true;
  } else {
    // Merge new slugs (no duplicates)
    for (const slug of slugsToUnlock) {
      if (!data.slugs.includes(slug)) data.slugs.push(slug);
    }
  }

  await saveDownloads(normalizedEmail, data);

  // ── Also subscribe to Mailchimp ──────────────────────────────────────────────
  try {
    fetch(`${req.nextUrl.origin}/api/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: normalizedEmail }),
    }).catch(() => {});
  } catch { /* ignore */ }

  // ── Build download tokens for unlocked guides ────────────────────────────────
  // For All Access, return every slug across all tiers
  const ALL_SLUGS = Array.from(
    new Set(Object.values(TIER_SLUGS).flat())
  );
  const allUnlocked = isAllAccess ? ALL_SLUGS : Array.from(new Set(data.slugs));

  const tokens: Record<string, string> = {};
  for (const slug of allUnlocked) {
    tokens[slug] = generateToken(slug);
  }

  return NextResponse.json({
    success: true,
    premium: data.premium,
    unlockedSlugs: allUnlocked,
    tokens,
    referenceId,
  });
}
