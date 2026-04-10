import type { Metadata } from "next";
import MadeiraClient from "./MadeiraClient";

export const metadata: Metadata = {
  title: "Madeira in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The ultimate 5-day Madeira travel guide — levada walks, Pico do Arieiro, Funchal old town, Monte toboggan, Cabo Girao skywalk, poncha cocktails, and tropical gardens. Budget €60/day to luxury Reid's Palace.",
  keywords: [
    "Madeira itinerary",
    "Madeira 5 days",
    "Madeira travel guide 2026",
    "levada walks Madeira",
    "Pico do Arieiro",
    "Funchal old town",
    "Monte toboggan",
    "Cabo Girao skywalk",
    "Madeira visa Indian passport",
    "Portugal islands",
  ],
  openGraph: {
    title: "Madeira in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Levada walks, Pico do Arieiro summits, Monte toboggan, Cabo Girao skywalk, and poncha cocktails — Madeira in 5 days from €60/day.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/madeira-5-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madeira in 5 Days: Complete 2026 Itinerary",
    description: "Levada walks, volcanic summits, tropical gardens, and the Monte toboggan — the complete Madeira guide.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/madeira-5-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Madeira in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Madeira in 5 Days",
          item: "https://www.incredibleitinerary.com/blog/madeira-5-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Madeira",
      description:
        "Madeira, Portugal — a volcanic Atlantic island with levada walking trails, tropical gardens, dramatic sea cliffs, and the famous Monte toboggan ride.",
      geo: { "@type": "GeoCoordinates", latitude: 32.7607, longitude: -16.9595 },
    },
  ],
};

export default function MadeiraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MadeiraClient />
    </>
  );
}
