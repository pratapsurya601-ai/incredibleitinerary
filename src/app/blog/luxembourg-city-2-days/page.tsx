import type { Metadata } from "next";
import LuxembourgCityClient from "./LuxembourgCityClient";

export const metadata: Metadata = {
  title: "Luxembourg City in 2 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 2-day Luxembourg City itinerary — Bock Casemates tunnels, Grund quarter, Grand Ducal Palace, Vianden Castle day trip, Mullerthal fairy-tale forest, and judd mat gaardebounen. Budget €55/day. All transport is free.",
  keywords: [
    "Luxembourg City itinerary",
    "Luxembourg 2 days",
    "Luxembourg travel guide 2026",
    "Bock Casemates",
    "Vianden Castle",
    "Mullerthal hiking",
    "Luxembourg free transport",
    "Luxembourg visa Indian passport",
  ],
  openGraph: {
    title: "Luxembourg City in 2 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Bock Casemates, Grund quarter, Vianden Castle, Mullerthal forest, and judd mat gaardebounen — Luxembourg in 2 days from €55/day. All public transport is free.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/luxembourg-city-2-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxembourg City in 2 Days: Complete 2026 Itinerary",
    description: "Bock Casemates, Vianden Castle, Mullerthal forest — all in 2 days from €55/day with free transport.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/luxembourg-city-2-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Luxembourg City in 2 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Luxembourg City in 2 Days",
          item: "https://www.incredibleitinerary.com/blog/luxembourg-city-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Luxembourg City",
      description:
        "Luxembourg City, Luxembourg — UNESCO-listed fortress city with Bock Casemates underground tunnels, the Grund river valley quarter, and gateway to Vianden Castle and Mullerthal forest.",
      geo: { "@type": "GeoCoordinates", latitude: 49.6116, longitude: 6.1319 },
    },
  ],
};

export default function LuxembourgCityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LuxembourgCityClient />
    </>
  );
}
