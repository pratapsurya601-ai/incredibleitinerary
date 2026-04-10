import type { Metadata } from "next";
import GalwayClient from "./GalwayClient";

export const metadata: Metadata = {
  title: "Galway in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The ultimate 3-day Galway itinerary — Latin Quarter, Connemara National Park, Aran Islands ferry, Galway Bay oysters, Salthill promenade, and trad music pubs. Budget €55/day to luxury castle hotels. All visa info included.",
  keywords: [
    "Galway itinerary",
    "Galway 3 days",
    "Galway travel guide 2026",
    "Connemara day trip",
    "Aran Islands ferry",
    "Galway oysters",
    "trad music Galway",
    "Galway visa Indian passport",
  ],
  openGraph: {
    title: "Galway in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Latin Quarter cobblestones, Connemara, Aran Islands, and Galway Bay oysters — Ireland's west coast in 3 days from €55/day to luxury castle hotels.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/galway-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galway in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Connemara, Aran Islands, Galway Bay oysters, and the best trad music in Ireland — the complete Galway travel guide for 2026.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/galway-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Galway in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Galway in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/galway-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Galway",
      description:
        "Galway, Ireland — the capital of the Irish west, with cobblestone Latin Quarter streets, Connemara, Aran Islands, Galway Bay oysters, and nightly traditional music.",
      geo: { "@type": "GeoCoordinates", latitude: 53.2707, longitude: -9.0568 },
    },
  ],
};

export default function GalwayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GalwayClient />
    </>
  );
}
