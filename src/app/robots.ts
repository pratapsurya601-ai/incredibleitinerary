import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: [
      "https://www.incredibleitinerary.com/sitemap.xml",
      "https://www.incredibleitinerary.com/sitemap-images.xml",
    ],
  };
}
