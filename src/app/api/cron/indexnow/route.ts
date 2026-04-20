import { NextRequest, NextResponse } from "next/server";
import { generatedPosts } from "@/data/generated-posts";

const HOST = "www.incredibleitinerary.com";
const BASE = `https://${HOST}`;
const INDEXNOW_KEY = "dca821dbfe47496e8a954260064bd47a";
const CRON_SECRET = process.env.CRON_SECRET;

export async function GET(req: NextRequest) {
  // Verify cron secret — Vercel cron jobs send this as Authorization header
  const authHeader = req.headers.get("authorization");
  if (CRON_SECRET && authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  // Calculate today's batch (10 posts/day from 2026-03-01)
  const START = new Date("2026-03-01T00:00:00Z");
  const now = new Date();
  const daysSinceStart = Math.floor((now.getTime() - START.getTime()) / 86_400_000);

  const todayStart = Math.max(0, daysSinceStart * 10);
  const todayEnd = Math.min(todayStart + 10, generatedPosts.length);
  const todaysBatch = generatedPosts.slice(todayStart, todayEnd).map(
    (p) => `${BASE}/blog/${p.slug}`
  );

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
      ok: true,
      submitted: todaysBatch.length,
      indexNowStatus: res.status,
      urls: todaysBatch,
    });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
