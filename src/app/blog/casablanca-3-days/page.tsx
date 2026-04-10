import type { Metadata } from "next";
import CasablancaClient from "./CasablancaClient";

const siteUrl = "https://www.incredibleitinerary.com";

export const metadata: Metadata = {
  title: "Casablanca in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Casablanca itinerary — Hassan II Mosque, Corniche promenade, Art Deco architecture, Rick's Cafe, Central Market, Ain Diab beach, and bastilla pastry. Budget MAD 250/day to luxury. All visa info included.",
  keywords: [
    "Casablanca itinerary",
    "Casablanca 3 days",
    "Morocco travel guide 2026",
    "Hassan II Mosque Casablanca",
    "Art Deco Casablanca",
    "Rick's Cafe Casablanca",
    "bastilla Morocco",
    "Casablanca visa Indian passport",
  ],
  openGraph: {
    title: "Casablanca in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Hassan II Mosque, Corniche, Art Deco architecture, Rick's Cafe, Central Market, and bastilla pastry — Casablanca in 3 days from MAD 250/day to luxury.",
    type: "article",
    url: `${siteUrl}/blog/casablanca-3-days`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Casablanca in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Hassan II Mosque, Corniche, Art Deco architecture, Rick's Cafe, Central Market, and bastilla pastry — Casablanca in 3 days from MAD 250/day to luxury.",
  },
  alternates: {
    canonical: `${siteUrl}/blog/casablanca-3-days`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Casablanca in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Casablanca in 3 Days",
          item: `${siteUrl}/blog/casablanca-3-days`,
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Casablanca",
      description:
        "Casablanca, Morocco — Hassan II Mosque, Art Deco architecture, Corniche promenade, Ain Diab beach, Rick's Cafe, Central Market, and bastilla cuisine.",
      geo: { "@type": "GeoCoordinates", latitude: 33.5731, longitude: -7.5898 },
    },
  ],
};

export default function CasablancaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CasablancaClient />
    </>
  );
}
