import type { Metadata } from "next";
import AzoresClient from "./AzoresClient";

export const metadata: Metadata = {
  title: "Azores in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 5-day Azores itinerary — Sao Miguel calderas, Sete Cidades twin lakes, Furnas thermal pools, whale watching, hydrangea roads, and seafood caldeirada. Budget €50/day to luxury quintas. Full visa info included.",
  keywords: [
    "Azores itinerary",
    "Azores 5 days",
    "Azores travel guide 2026",
    "Sao Miguel Azores",
    "Sete Cidades twin lakes",
    "Furnas thermal pools",
    "whale watching Azores",
    "Azores visa Indian passport",
    "blue hydrangea roads Azores",
    "seafood caldeirada Azores",
  ],
  openGraph: {
    title: "Azores in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Sete Cidades twin lakes, Furnas thermal pools, whale watching, and hydrangea roads — Azores in 5 days from €50/day to luxury quintas.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/azores-5-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azores in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Sete Cidades, Furnas, whale watching, and hydrangea roads — your complete Azores Sao Miguel guide for 2026.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/azores-5-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Azores in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Azores in 5 Days",
          item: "https://www.incredibleitinerary.com/blog/azores-5-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Azores",
      description:
        "Azores, Portugal — volcanic Sao Miguel island with Sete Cidades twin lakes, Furnas thermal pools, whale watching, hydrangea roads, and Atlantic seafood.",
      geo: { "@type": "GeoCoordinates", latitude: 37.7412, longitude: -25.6756 },
    },
  ],
};

export default function AzoresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AzoresClient />
    </>
  );
}
