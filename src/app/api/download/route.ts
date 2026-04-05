import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const MAX_FREE = 2;
const SECRET = process.env.DOWNLOAD_SECRET || "dev-secret-please-change";

// Available guides
const VALID_SLUGS = ["rajasthan-7-days"];

// ── Token generation (15-min windows, valid for 30 min) ──────────────────────
export function generateToken(slug: string): string {
  const window = Math.floor(Date.now() / 1000 / 900);
  return crypto
    .createHmac("sha256", SECRET)
    .update(`${slug}:${window}`)
    .digest("hex")
    .slice(0, 40);
}

// ── KV helpers (graceful fallback if KV not configured) ──────────────────────
async function getDownloads(email: string): Promise<{ slugs: string[]; premium: boolean }> {
  try {
    const { kv } = await import("@vercel/kv");
    const data = await kv.get<{ slugs: string[]; premium: boolean }>(`dl:${email}`);
    return data ?? { slugs: [], premium: false };
  } catch {
    return { slugs: [], premium: false };
  }
}

async function saveDownloads(
  email: string,
  data: { slugs: string[]; premium: boolean }
): Promise<void> {
  try {
    const { kv } = await import("@vercel/kv");
    await kv.set(`dl:${email}`, data, { ex: 60 * 60 * 24 * 365 }); // 1 year TTL
  } catch {
    // KV not configured — dev mode, allow download anyway
    console.warn("[download] Vercel KV not configured — running without download tracking");
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

  // Validate inputs
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

  // Premium users get unlimited access
  if (data.premium) {
    const token = generateToken(slug);
    return NextResponse.json({
      success: true,
      token,
      slug,
      premium: true,
      remaining: 999,
    });
  }

  // Already downloaded this guide — give them the link again (no extra charge)
  if (data.slugs.includes(slug)) {
    const token = generateToken(slug);
    return NextResponse.json({
      success: true,
      token,
      slug,
      alreadyOwned: true,
      remaining: MAX_FREE - data.slugs.length,
    });
  }

  // Hit the free limit — show paywall
  if (data.slugs.length >= MAX_FREE) {
    return NextResponse.json(
      {
        paywall: true,
        count: data.slugs.length,
        downloaded: data.slugs,
      },
      { status: 402 }
    );
  }

  // Grant download — add slug to their list
  data.slugs.push(slug);
  await saveDownloads(normalizedEmail, data);

  // Also silently subscribe to Mailchimp (fire-and-forget)
  try {
    fetch(`${req.nextUrl.origin}/api/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: normalizedEmail }),
    }).catch(() => {});
  } catch {
    // ignore
  }

  const token = generateToken(slug);
  const remaining = MAX_FREE - data.slugs.length;

  return NextResponse.json({
    success: true,
    token,
    slug,
    remaining,
    isLast: remaining === 0,
    total: data.slugs.length,
  });
}
