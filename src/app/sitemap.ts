import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.incredibleitinerary.com";
  const now = new Date();

  // ── Static pages ──────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                                   lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/blog`,                         lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/honeymoon`,                    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/quiz`,                         lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/shop`,                         lastModified: now, changeFrequency: "weekly",  priority: 0.85 },
    { url: `${base}/about`,                        lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`,                      lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/tools/trip-calculator`,        lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // visa-checker excluded: noindex (thin static lookup table, no live data)
    // currency-converter excluded: noindex (hardcoded rates, no original content)
    { url: `${base}/tools/packing-list`,           lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/privacy`,                      lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms`,                        lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/cookies`,                      lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];

  // ── Compare pages ──────────────────────────────────────────────────────────
  const compareSlugs = [
    "goa-vs-pondicherry", "shimla-vs-manali", "kashmir-vs-ladakh",
    "jaipur-vs-udaipur", "ooty-vs-kodaikanal", "thailand-vs-bali",
    "goa-vs-phuket", "tokyo-vs-kyoto", "dubai-vs-singapore", "barcelona-vs-rome",
  ];
  const comparePages: MetadataRoute.Sitemap = compareSlugs.map((slug) => ({
    url: `${base}/compare/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // ── Blog posts — use actual publish date so Google tracks freshness correctly
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => {
    const postDate = post.date ? new Date(post.date) : now;
    return {
      url: `${base}/blog/${post.slug}`,
      lastModified: isNaN(postDate.getTime()) ? now : postDate,
      changeFrequency: "monthly",
      priority: post.featured ? 0.95 : 0.85,
    };
  });

  // Note: generated posts (/blog/[slug] from generated-posts.ts) are excluded —
  // they are noindexed via robots metadata and should not be submitted to search engines.
  // Sub-pages (/best-time, /couples-guide, /packing-list) are also excluded for
  // the same reason — they are template-generated and noindexed.

  return [...staticPages, ...comparePages, ...blogPages];
}
