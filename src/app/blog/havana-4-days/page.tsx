import type { Metadata } from "next";
import HavanaClient from "./HavanaClient";

export const metadata: Metadata = {
  title: "Havana in 4 Days: Classic Cars, Colonial Havana, Rum & Trinidad (2026)",
  description: "Complete 4-day Havana travel guide: casa particulares, vintage car tours, Trinidad day trip, Hemingway bars, real costs from $60/day, and Cuba tourist card explained.",
  keywords: [
    "havana itinerary 4 days",
    "cuba travel guide 2026",
    "havana travel tips",
    "trinidad cuba day trip",
    "cuba tourist card",
    "havana budget travel",
  ],
  openGraph: {
    title: "Havana in 4 Days: Classic Cars, Rum & Trinidad (2026)",
    description: "Vintage car tours, Trinidad day trip, Hemingway bars, and real costs — complete 4-day Havana travel guide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Classic vintage cars on Havana Malecón Cuba",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Havana 4 Days (2026)",
    description: "Classic cars, Hemingway bars, Trinidad — complete Cuba travel guide.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/havana-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Havana in 4 Days: Classic Cars, Colonial Havana, Rum & Trinidad (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?w=1200&q=80",
      description:
        "Complete 4-day Havana travel guide covering Old Havana, the Malecón, Trinidad day trip, Hemingway bars, and Cuba tourist card requirements.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Havana 4 Days",
          item: "https://www.incredibleitinerary.com/blog/havana-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Havana, Cuba",
      description:
        "A perfectly preserved time capsule — 1950s American cars, colonial palaces, Hemingway's favourite bars, and the best live music in the Caribbean.",
      geo: { "@type": "GeoCoordinates", latitude: 23.1136, longitude: -82.3666 },
      touristType: ["History enthusiasts", "Music lovers", "Architecture fans", "Food and rum tourists"],
    },
  ],
};

export default function HavanaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HavanaClient />
    </>
  );
}
