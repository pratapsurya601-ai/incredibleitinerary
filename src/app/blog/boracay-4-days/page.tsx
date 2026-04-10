import type { Metadata } from "next";
import BoracayClient from "./BoracayClient";

export const metadata: Metadata = {
  title: "Boracay in 4 Days: White Beach, Sunsets & Asia's Best Kitesurfing (2026 Guide)",
  description:
    "Complete Boracay 4-day itinerary: White Beach sunrise, paraw sunset sails, island hopping to Crystal Cove, Ariel's Point cliff diving, and kitesurfing on Bulabog Beach. Budget to Shangri-La luxury.",
  keywords: [
    "boracay itinerary 4 days",
    "boracay travel guide 2026",
    "white beach boracay",
    "boracay island hopping",
    "boracay kitesurfing windsurfing",
    "paraw sunset boracay",
    "ariel's point boracay",
    "puka shell beach boracay",
    "boracay best resorts",
    "philippines beach guide",
  ],
  openGraph: {
    title: "Boracay in 4 Days: White Beach, Sunsets & Asia's Best Kitesurfing (2026)",
    description:
      "Asia's most photographed beach, paraw silhouettes at sunset, cliff diving at Ariel's Point, world-class kitesurfing, and staying from budget homestay to Shangri-La — the complete Boracay guide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Boracay White Beach Philippines crystal clear water sunset paraw",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boracay in 4 Days — Philippines' Crown Jewel (2026)",
    description: "White Beach, paraw sunsets, cliff diving, kitesurfing, Puka Shell Beach. The complete guide, budget to luxury.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/boracay-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Boracay in 4 Days: White Beach, Sunsets & Asia's Best Kitesurfing (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1200&q=80",
      description:
        "A complete 4-day Boracay itinerary covering White Beach at all three stations, paraw sailing, island hopping to Crystal Cove and Magic Island, Ariel's Point cliff diving, Bulabog Beach kitesurfing, Puka Shell Beach, Diniwid Beach, and Willy's Rock.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Boracay 4 Days",
          item: "https://www.incredibleitinerary.com/blog/boracay-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Boracay, Philippines",
      description:
        "A 10km island in the Western Visayas, Philippines, home to White Beach — 4km of powdery white sand rated among the world's best — paraw outrigger sailing, world-class kitesurfing and windsurfing at Bulabog Beach, and vibrant beach resort culture rehabilitated after a landmark 2018 environmental closure.",
      touristType: ["Beach lovers", "Watersports enthusiasts", "Couples", "Adventure travellers", "Luxury resort guests"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 11.9674,
        longitude: 121.9248,
      },
    },
  ],
};

export default function BoracayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BoracayClient />
    </>
  );
}
