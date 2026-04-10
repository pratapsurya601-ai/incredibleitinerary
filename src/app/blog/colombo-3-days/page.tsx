import type { Metadata } from "next";
import ColomboClient from "./ColomboClient";

const siteUrl = "https://www.incredibleitinerary.com";

export const metadata: Metadata = {
  title: "Colombo in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Colombo itinerary — Galle Face Green, National Museum, Pettah bazaar, Gangaramaya Temple, Dutch Hospital, kottu roti, crab curry at Ministry of Crab, and a day trip to Kandy. Budget $35/day to luxury. Visa info included.",
  keywords: [
    "Colombo itinerary",
    "Colombo 3 days",
    "Colombo travel guide 2026",
    "Ministry of Crab Colombo",
    "Galle Face Green",
    "Gangaramaya Temple",
    "kottu roti Sri Lanka",
    "Colombo visa Indian passport",
  ],
  openGraph: {
    title: "Colombo in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Galle Face Green sunset, Ministry of Crab, Gangaramaya Temple, Pettah market, and a scenic train to Kandy — Colombo in 3 days from $35/day.",
    type: "article",
    url: `${siteUrl}/blog/colombo-3-days`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Colombo in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Isso wade at sunset on Galle Face Green, whole crabs at Ministry of Crab, and the scenic train to Kandy — Colombo done right.",
  },
  alternates: {
    canonical: `${siteUrl}/blog/colombo-3-days`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Colombo in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Colombo in 3 Days",
          item: `${siteUrl}/blog/colombo-3-days`,
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Colombo",
      description:
        "Colombo, Sri Lanka — a layered colonial city of Dutch hospitals, Buddhist temples, chaotic bazaars, ocean promenades, and some of Asia's finest crab curry.",
      geo: { "@type": "GeoCoordinates", latitude: 6.9271, longitude: 79.8612 },
    },
  ],
};

export default function ColomboPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ColomboClient />
    </>
  );
}
