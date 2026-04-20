import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      // Block AI training crawlers
      {
        userAgent: ["GPTBot", "CCBot", "anthropic-ai", "Claude-Web", "Google-Extended"],
        disallow: "/",
      },
    ],
    sitemap: "https://www.incredibleitinerary.com/sitemap.xml",
  };
}
