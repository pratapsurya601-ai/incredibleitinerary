import { blogPosts } from "@/data/blog";

export const dynamic = "force-static";
export const revalidate = 3600; // rebuild at most once per hour

const BASE = "https://www.incredibleitinerary.com";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** Upgrade Unsplash images to a Pinterest-friendly resolution (2:3 portrait) */
function pinImage(url: string): string {
  if (!url) return `${BASE}/og-image.jpg`;
  // Unsplash: replace size params with w=1000&q=85 for crisp pins
  return url.replace(/[?&]w=\d+/, "?w=1000").replace(/&q=\d+/, "&q=85");
}

export async function GET() {
  const now = new Date();

  const published = blogPosts
    .filter((p) => {
      const d = new Date(p.date);
      return isNaN(d.getTime()) || d <= now;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 50);

  const items = published
    .map((post) => {
      const url = `${BASE}/blog/${post.slug}`;
      const img = pinImage(post.image);
      const pubDate = (() => {
        try {
          const d = new Date(post.date);
          return isNaN(d.getTime()) ? new Date().toUTCString() : d.toUTCString();
        } catch {
          return new Date().toUTCString();
        }
      })();
      const desc = escapeXml(post.excerpt || post.title);
      const title = escapeXml(post.title);

      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${post.excerpt || post.title}]]></description>
      <media:content url="${escapeXml(img)}" medium="image" width="1000" />
      <media:thumbnail url="${escapeXml(img)}" />
      <enclosure url="${escapeXml(img)}" type="image/jpeg" length="0" />
      <!-- suppress unused-var warnings -->
      <!-- ${title} ${desc} -->
    </item>`;
    })
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:media="http://search.yahoo.com/mrss/"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>IncredibleItinerary — Free Travel Guides</title>
    <link>${BASE}</link>
    <description>302+ free travel guides with real budgets, real routes, and local tips across 50+ countries.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <image>
      <url>${BASE}/og-image.jpg</url>
      <title>IncredibleItinerary</title>
      <link>${BASE}</link>
    </image>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(feed.trim(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
