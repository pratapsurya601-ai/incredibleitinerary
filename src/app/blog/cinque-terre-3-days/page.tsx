import type { Metadata } from "next";
import CinqueTerreClient from "./CinqueTerreClient";

export const metadata: Metadata = {
  title: "Cinque Terre in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Cinque Terre itinerary — hiking the Sentiero Azzurro, swimming in cliff coves, pesto pasta at the source, and all 5 villages. Budget €55/day to luxury cliff hotels.",
  keywords: [
    "Cinque Terre itinerary",
    "Cinque Terre 3 days",
    "Cinque Terre travel guide 2026",
    "Sentiero Azzurro hike",
    "Cinque Terre Card",
    "Vernazza Manarola",
    "Cinque Terre budget travel",
    "Ligurian coast Italy",
    "Cinque Terre visa Indian passport",
  ],
  openGraph: {
    title: "Cinque Terre in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Five cliff villages, the Sentiero Azzurro coastal trail, pesto pasta, and Ligurian swimming coves — Cinque Terre in 3 days from €55/day.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/cinque-terre-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cinque Terre in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Cinque Terre in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/cinque-terre-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Cinque Terre",
      description:
        "Cinque Terre, Liguria, Italy — five cliff-side fishing villages, the Sentiero Azzurro coastal trail, pesto pasta, and the Ligurian Sea.",
      geo: { "@type": "GeoCoordinates", latitude: 44.1277, longitude: 9.7073 },
    },
  ],
};

export default function CinqueTerrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CinqueTerreClient />
    </>
  );
}
