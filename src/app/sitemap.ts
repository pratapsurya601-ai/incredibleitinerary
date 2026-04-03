import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://incredibleitinerary.com";
  const now = new Date();

  return [
    { url: base,                                      lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/blog`,                            lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/quiz`,                            lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/shop`,                            lastModified: now, changeFrequency: "weekly",  priority: 0.85 },
    { url: `${base}/about`,                           lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`,                         lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`,                         lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms`,                           lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/cookies`,                         lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/blog/kashmir-6-days`,             lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/leh-ladakh-7-days`,          lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/manali-5-days`,              lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/golden-triangle-7-days`,     lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/rajasthan-7-days`,           lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/andaman-5-days`,             lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/kerala-5-days`,              lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/goa-3-days`,                 lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/varanasi-3-days`,            lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/coorg-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/rishikesh-haridwar-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/jibhi-tirthan-valley-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/hampi-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/spiti-valley-7-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/meghalaya-5-days`, lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/sikkim-6-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/pondicherry-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/gujarat-7-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/amritsar-2-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/dharamshala-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/udaipur-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/jaipur-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/ooty-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.86 },
    { url: `${base}/blog/darjeeling-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/mysore-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.86 },
    { url: `${base}/blog/gokarna-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/shimla-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/kasol-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.86 },
    { url: `${base}/blog/nainital-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.86 },
  ];
}
