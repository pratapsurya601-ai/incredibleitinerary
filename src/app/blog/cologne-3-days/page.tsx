import type { Metadata } from "next";
import CologneClient from "./CologneClient";

export const metadata: Metadata = {
  title: "Cologne in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Cologne itinerary — Cologne Cathedral, Rhine promenade, Kölsch beer halls, Chocolate Museum, Carnival culture, and Roman history. Budget €50/day to luxury grand hotels. All visa info included.",
  keywords: [
    "Cologne itinerary",
    "Cologne 3 days",
    "Cologne travel guide 2026",
    "Cologne Cathedral",
    "Kölsch beer Cologne",
    "Cologne Chocolate Museum",
    "Cologne Carnival",
    "Cologne visa Indian passport",
  ],
  openGraph: {
    title: "Cologne in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Cologne Cathedral, Rhine promenade, Kölsch beer halls, Chocolate Museum, Carnival culture, and Roman history — Cologne in 3 days from €50/day to luxury.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/cologne-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cologne in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Cologne Cathedral, Rhine promenade, Kölsch beer halls, Chocolate Museum — Cologne in 3 days from €50/day.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/cologne-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cologne in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Cologne in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/cologne-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Cologne",
      description:
        "Cologne, Germany — home to Europe's most visited Gothic cathedral, the UNESCO Rhine valley, Kölsch beer culture, the Chocolate Museum, and legendary Carnival celebrations.",
      geo: { "@type": "GeoCoordinates", latitude: 50.9333, longitude: 6.9500 },
    },
  ],
};

export default function ColognePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CologneClient />
    </>
  );
}
