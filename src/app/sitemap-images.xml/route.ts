import { blogPosts } from "@/data/blog";

const BASE = "https://www.incredibleitinerary.com";

function esc(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function GET() {
  const entries = blogPosts
    .map((post) => {
      const imgUrl = post.image.startsWith("http")
        ? post.image
        : `${BASE}${post.image}`;
      return `  <url>
    <loc>${BASE}/blog/${post.slug}</loc>
    <image:image>
      <image:loc>${esc(imgUrl)}</image:loc>
      <image:title>${esc(post.imageAlt)}</image:title>
      <image:caption>${esc(`${post.destination} ${post.duration} travel guide — IncredibleItinerary`)}</image:caption>
      <image:geo_location>${esc(post.destination)}${post.country ? `, ${esc(post.country)}` : ""}</image:geo_location>
    </image:image>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    },
  });
}
