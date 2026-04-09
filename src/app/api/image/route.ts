import { NextRequest, NextResponse } from "next/server";
import { getPexelsPhoto, IMAGE_QUERIES, type ImageQueryKey } from "@/lib/pexels";

// ── In-memory cache — survives across requests within the same serverless instance ──
const cache = new Map<string, { data: object; timestamp: number }>();
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get("key") as ImageQueryKey | null;
  const query = searchParams.get("q");

  // Use a predefined key or a custom query
  const searchQuery = key ? IMAGE_QUERIES[key] : query;

  if (!searchQuery) {
    return NextResponse.json({ error: "Missing key or q param" }, { status: 400 });
  }

  // Check in-memory cache first
  const cacheKey = searchQuery.toLowerCase().trim();
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return NextResponse.json(cached.data, {
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
        "X-Cache": "HIT",
      },
    });
  }

  if (!process.env.PEXELS_API_KEY) {
    return NextResponse.json(
      { error: "PEXELS_API_KEY not set in environment variables" },
      { status: 500 }
    );
  }

  const photo = await getPexelsPhoto(searchQuery);

  if (!photo) {
    // Cache the miss too — don't keep hitting Pexels for bad queries
    return NextResponse.json({ error: "No photo found" }, { status: 404 });
  }

  const data = {
    url: photo.src.large2x,
    alt: photo.alt || searchQuery,
    photographer: photo.photographer,
    photographer_url: photo.photographer_url,
    pexels_url: photo.url,
    avg_color: photo.avg_color,
  };

  // Store in cache
  cache.set(cacheKey, { data, timestamp: Date.now() });

  // Clean old entries if cache gets too large (prevent memory leak)
  if (cache.size > 2000) {
    const now = Date.now();
    const keys = Array.from(cache.keys());
    for (const k of keys) {
      const v = cache.get(k);
      if (v && now - v.timestamp > CACHE_TTL) cache.delete(k);
    }
  }

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
      "X-Cache": "MISS",
    },
  });
}
