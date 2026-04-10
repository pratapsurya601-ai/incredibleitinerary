import type { Metadata } from "next";
import HakoneClient from "./HakoneClient";

export const metadata: Metadata = {
  title: "Hakone in 2 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 2-day Hakone itinerary — Mount Fuji views, Hakone Ropeway over Owakudani, black eggs, Lake Ashi pirate ship cruise, and ryokan onsen. Budget ¥8,000/day to luxury ryokan. All visa info included.",
  keywords: [
    "Hakone itinerary",
    "Hakone 2 days",
    "Hakone travel guide 2026",
    "Mount Fuji Hakone",
    "Hakone ropeway",
    "Owakudani black eggs",
    "Lake Ashi pirate ship",
    "Hakone ryokan onsen",
    "Hakone visa Indian passport",
  ],
  openGraph: {
    title: "Hakone in 2 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Mount Fuji views, Owakudani black eggs, Lake Ashi pirate ship, and ryokan onsen — Hakone in 2 days from ¥8,000/day to luxury.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/hakone-2-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hakone in 2 Days: Complete 2026 Itinerary",
    description:
      "Mount Fuji views, Owakudani black eggs, Lake Ashi pirate ship, and ryokan onsen — Hakone in 2 days from ¥8,000/day.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/hakone-2-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Hakone in 2 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Hakone in 2 Days",
          item: "https://www.incredibleitinerary.com/blog/hakone-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Hakone",
      description:
        "Hakone, Japan — volcanic valleys, Mount Fuji views, ryokan onsen, the Hakone Ropeway over Owakudani, and Lake Ashi pirate ship cruises.",
      geo: { "@type": "GeoCoordinates", latitude: 35.2323, longitude: 139.1069 },
    },
  ],
};

export default function HakonePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HakoneClient />
    </>
  );
}
