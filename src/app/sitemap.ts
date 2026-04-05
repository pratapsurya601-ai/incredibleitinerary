import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.incredibleitinerary.com";
  const now = new Date();

  // ── Static pages ──────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                                   lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/blog`,                         lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/quiz`,                         lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/shop`,                         lastModified: now, changeFrequency: "weekly",  priority: 0.85 },
    { url: `${base}/about`,                        lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`,                      lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/tools/trip-calculator`,        lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/visa-checker`,           lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/currency-converter`,     lastModified: now, changeFrequency: "monthly", priority: 0.88 },
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

  // ── Blog posts — auto-generated from data, always complete ─────────────────
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: post.featured ? 0.95 : 0.85,
  }));

  return [...staticPages, ...comparePages, ...blogPages];
}
