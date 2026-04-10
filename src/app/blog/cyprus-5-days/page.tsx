import type { Metadata } from "next";
import CyprusClient from "./CyprusClient";

export const metadata: Metadata = {
  title: "Cyprus in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 5-day Cyprus itinerary — Paphos Archaeological Park, Troodos Mountains, Limassol wine villages, Nicosia divided capital, and Aphrodite's Rock. Budget €55/day to luxury villas. Full visa info included.",
  keywords: [
    "Cyprus itinerary",
    "Cyprus 5 days",
    "Cyprus travel guide 2026",
    "Paphos archaeological park",
    "Troodos Mountains",
    "Limassol wine villages",
    "Nicosia divided capital",
    "Cyprus visa Indian passport",
    "halloumi meze Cyprus",
    "Aphrodite Rock Cyprus",
  ],
  openGraph: {
    title: "Cyprus in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Paphos ruins, Troodos Mountains, Limassol wine villages, Nicosia, and Aphrodite's Rock — Cyprus in 5 days from €55/day to luxury villas.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/cyprus-5-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyprus in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Paphos ruins, Troodos Mountains, Limassol wine villages, and the world's last divided capital — your complete Cyprus guide.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/cyprus-5-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cyprus in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Cyprus in 5 Days",
          item: "https://www.incredibleitinerary.com/blog/cyprus-5-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Cyprus",
      description:
        "Cyprus — Paphos Archaeological Park UNESCO mosaics, Troodos Mountains, Limassol wine villages, Nicosia divided capital, and Aphrodite's Rock on the eastern Mediterranean.",
      geo: { "@type": "GeoCoordinates", latitude: 34.9229, longitude: 33.4299 },
    },
  ],
};

export default function CyprusPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CyprusClient />
    </>
  );
}
