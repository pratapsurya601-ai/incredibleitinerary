import type { Metadata } from "next";
import DaNangClient from "./DaNangClient";

export const metadata: Metadata = {
  title: "Da Nang in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Da Nang itinerary — Golden Bridge Ba Na Hills, Marble Mountains, My Khe Beach, Hoi An day trip, Dragon Bridge fire show, and My Son Sanctuary. Budget $35/day to luxury beach resorts. All visa info included.",
  keywords: [
    "Da Nang itinerary",
    "Da Nang 4 days",
    "Da Nang travel guide 2026",
    "Golden Bridge Ba Na Hills",
    "Marble Mountains Da Nang",
    "Hoi An day trip",
    "Dragon Bridge fire show",
    "My Son Sanctuary",
    "Da Nang visa Indian passport",
  ],
  openGraph: {
    title: "Da Nang in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Golden Bridge, Marble Mountains, My Khe Beach, Hoi An lanterns, Dragon Bridge fire — Da Nang in 4 days from $35/day to luxury.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/da-nang-4-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Da Nang in 4 Days: Complete 2026 Itinerary",
    description:
      "Golden Bridge, Marble Mountains, My Khe Beach, Hoi An lanterns — Da Nang in 4 days from $35/day.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/da-nang-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Da Nang in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Da Nang in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/da-nang-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Da Nang",
      description:
        "Da Nang, Vietnam — the Golden Bridge at Ba Na Hills, Marble Mountains, My Khe Beach, Dragon Bridge fire show, and a gateway to Hoi An and My Son Sanctuary.",
      geo: { "@type": "GeoCoordinates", latitude: 16.0544, longitude: 108.2022 },
    },
  ],
};

export default function DaNangPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DaNangClient />
    </>
  );
}
