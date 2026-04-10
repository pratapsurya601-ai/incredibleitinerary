import type { Metadata } from "next";
import AmmanClient from "./AmmanClient";

const siteUrl = "https://www.incredibleitinerary.com";

export const metadata: Metadata = {
  title: "Amman in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Amman itinerary — Citadel, downtown souks, Petra day trip, Wadi Rum desert camp, Dead Sea float, mansaf lamb, and Rainbow Street cafes. Budget JOD 30/day to luxury. All visa info included.",
  keywords: [
    "Amman itinerary",
    "Amman 4 days",
    "Jordan travel guide 2026",
    "Petra day trip from Amman",
    "Wadi Rum desert camp",
    "Dead Sea Jordan",
    "mansaf Jordan",
    "Amman visa Indian passport",
  ],
  openGraph: {
    title: "Amman in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Citadel, Petra, Wadi Rum, Dead Sea, mansaf, and Rainbow Street — Amman and Jordan in 4 days from JOD 30/day to luxury camps.",
    type: "article",
    url: `${siteUrl}/blog/amman-4-days`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Amman in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Citadel, Petra, Wadi Rum, Dead Sea, mansaf, and Rainbow Street — Amman and Jordan in 4 days from JOD 30/day to luxury camps.",
  },
  alternates: {
    canonical: `${siteUrl}/blog/amman-4-days`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Amman in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: siteUrl,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Amman in 4 Days",
          item: `${siteUrl}/blog/amman-4-days`,
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Amman",
      description:
        "Amman, Jordan — Roman Citadel, downtown souks, gateway to Petra and Wadi Rum, mansaf cuisine, Dead Sea, and Rainbow Street cafe culture.",
      geo: { "@type": "GeoCoordinates", latitude: 31.9539, longitude: 35.9106 },
    },
  ],
};

export default function AmmanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AmmanClient />
    </>
  );
}
