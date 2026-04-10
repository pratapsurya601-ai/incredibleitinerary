import type { Metadata } from "next";
import ChicagoClient from "./ChicagoClient";


export const metadata: Metadata = {
  title: "Chicago in 3 Days: Cloud Gate, Architecture, Deep Dish Pizza & Blues (2026)",
  description: "Complete 3-day Chicago travel guide: Architecture River Cruise secrets, Cloud Gate at sunrise, deep dish pizza debate, Kingston Mines blues — real USD costs from $80/day.",
  keywords: [
    "chicago itinerary 3 days",
    "chicago travel guide 2026",
    "architecture river cruise chicago",
    "cloud gate millennium park",
    "chicago deep dish pizza",
    "chicago blues bars",
  ],
  openGraph: {
    title: "Chicago in 3 Days: Architecture, Deep Dish Pizza & Blues (2026)",
    description: "Architecture River Cruise secrets, Cloud Gate sunrise, Kingston Mines blues, and real costs — complete 3-day Chicago guide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Chicago skyline Cloud Gate Millennium Park Lake Michigan",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chicago 3 Days (2026)",
    description: "Architecture cruise secrets, Cloud Gate at sunrise, deep dish pizza — complete Chicago guide.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/chicago-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Chicago in 3 Days: Cloud Gate, Architecture, Deep Dish Pizza & Blues (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
      description:
        "Complete 3-day Chicago travel guide covering Architecture River Cruise, Cloud Gate, Art Institute, deep dish pizza, and Kingston Mines blues.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Chicago 3 Days",
          item: "https://www.incredibleitinerary.com/blog/chicago-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Chicago, Illinois, USA",
      description:
        "America's great inland city — extraordinary architecture, world-class art, Chicago blues, deep dish pizza, and the magnificent lakefront of Lake Michigan.",
      geo: { "@type": "GeoCoordinates", latitude: 41.8781, longitude: -87.6298 },
      touristType: ["Architecture enthusiasts", "Food lovers", "Music fans", "Art museum visitors"],
    },
  ],
};

export default function ChicagoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ChicagoClient />
    </>
  );
}
