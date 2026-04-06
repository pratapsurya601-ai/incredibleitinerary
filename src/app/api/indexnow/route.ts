import { NextResponse } from "next/server";
import { generatedPosts } from "@/data/generated-posts";
import { blogPosts } from "@/data/blog";

const HOST = "www.incredibleitinerary.com";
const BASE = `https://${HOST}`;
const INDEXNOW_KEY = "dca821dbfe47496e8a954260064bd47a";

// Calculates which generated posts are "published today" using the 10/day schedule
function getTodaysBatch(): string[] {
  const START = new Date("2026-03-01T00:00:00Z");
  const now = new Date();
  const daysSinceStart = Math.floor((now.getTime() - START.getTime()) / 86_400_000);

  const todayStart = Math.max(0, daysSinceStart * 10);
  const todayEnd = Math.min(todayStart + 10, generatedPosts.length);

  return generatedPosts.slice(todayStart, todayEnd).map(
    (p) => `${BASE}/blog/${p.slug}`
  );
}

export async function GET(request: Request) {
  // Simple auth check — pass ?secret=YOUR_SECRET in cron call
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  if (secret !== process.env.INDEXNOW_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const todaysBatch = getTodaysBatch();

  if (todaysBatch.length === 0) {
    return NextResponse.json({ message: "No new posts today", submitted: 0 });
  }

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `${BASE}/${INDEXNOW_KEY}.txt`,
        urlList: todaysBatch,
      }),
    });

    return NextResponse.json({
      message: "IndexNow ping sent",
      status: res.status,
      submitted: todaysBatch.length,
      urls: todaysBatch,
    });
  } catch (err) {
    return NextResponse.json({ error: "IndexNow request failed", detail: String(err) }, { status: 500 });
  }
}

// POST — submit a custom list of URLs (e.g., from a deploy hook)
export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  if (secret !== process.env.INDEXNOW_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let urlList: string[] = [];
  try {
    const body = await request.json();
    urlList = body.urls ?? [];
  } catch {
    // If no body, fall back to today's batch + high-priority blog posts
    urlList = [
      `${BASE}/`,
      `${BASE}/blog`,
      ...blogPosts.slice(0, 10).map((p) => `${BASE}/blog/${p.slug}`),
      ...getTodaysBatch(),
    ];
  }

  if (urlList.length === 0) {
    return NextResponse.json({ message: "No URLs to submit", submitted: 0 });
  }

  // IndexNow max 10,000 URLs per request
  const batch = urlList.slice(0, 10_000);

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `${BASE}/${INDEXNOW_KEY}.txt`,
        urlList: batch,
      }),
    });

    return NextResponse.json({
      message: "IndexNow ping sent",
      status: res.status,
      submitted: batch.length,
    });
  } catch (err) {
    return NextResponse.json({ error: "IndexNow request failed", detail: String(err) }, { status: 500 });
  }
}
