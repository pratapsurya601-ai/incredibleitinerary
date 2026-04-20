import type { Metadata } from "next";
import NairobiClient from "./NairobiClient";

const siteUrl = "https://www.incredibleitinerary.com";

export const metadata: Metadata = {
  title: "Nairobi in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Nairobi itinerary — Giraffe Centre, David Sheldrick Elephant Orphanage, Nairobi National Park lions with skyline, Karen Blixen Museum, and Carnivore restaurant. Budget $45/day to luxury lodge. All visa info included.",
  keywords: [
    "Nairobi itinerary",
    "Nairobi 4 days",
    "Nairobi travel guide 2026",
    "Giraffe Centre Nairobi",
    "David Sheldrick Elephant Orphanage",
    "Nairobi National Park",
    "Karen Blixen Museum",
    "Nairobi visa Indian passport",
  ],
  openGraph: {
    title: "Nairobi in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Giraffe Centre, baby elephants, lions against the Nairobi skyline, Karen Blixen Museum, and Carnivore restaurant — Nairobi in 4 days from $45/day.",
    type: "article",
    url: `${siteUrl}/blog/nairobi-4-days`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nairobi in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Feed giraffes by hand, watch baby elephants play, and see lions with a city skyline backdrop — Nairobi in 4 days, all budgets covered.",
  },
  alternates: {
    canonical: `${siteUrl}/blog/nairobi-4-days`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Nairobi in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Nairobi in 4 Days",
          item: `${siteUrl}/blog/nairobi-4-days`,
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Nairobi",
      description:
        "Nairobi, Kenya — the world's only capital city with a national park featuring lions, black rhinos, and cheetahs within sight of glass skyscrapers.",
      geo: { "@type": "GeoCoordinates", latitude: -1.2921, longitude: 36.8219 },
    },
  ],
};

export default function NairobiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NairobiClient />
    </>
  );
}
