import { NextRequest, NextResponse } from "next/server";
import { getPexelsPhoto, IMAGE_QUERIES, type ImageQueryKey } from "@/lib/pexels";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get("key") as ImageQueryKey | null;
  const query = searchParams.get("q");

  // Use a predefined key or a custom query
  const searchQuery = key ? IMAGE_QUERIES[key] : query;

  if (!searchQuery) {
    return NextResponse.json({ error: "Missing key or q param" }, { status: 400 });
  }

  if (!process.env.PEXELS_API_KEY) {
    return NextResponse.json(
      { error: "PEXELS_API_KEY not set in environment variables" },
      { status: 500 }
    );
  }

  const photo = await getPexelsPhoto(searchQuery);

  if (!photo) {
    return NextResponse.json({ error: "No photo found" }, { status: 404 });
  }

  return NextResponse.json(
    {
      url: photo.src.large2x,
      alt: photo.alt || searchQuery,
      photographer: photo.photographer,
      photographer_url: photo.photographer_url,
      pexels_url: photo.url,
      avg_color: photo.avg_color,
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
      },
    }
  );
}
