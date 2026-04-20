import type { Metadata } from "next";
import NewYorkClient from "./NewYorkClient";

export const metadata: Metadata = {
  title: "New York City in 5 Days: Complete 2026 Itinerary (What to Do, See & Spend)",
  description: "5 complete New York City plans — budget to luxury — with Statue of Liberty booking secrets, NYC subway hacks, the best pizza and bagels, and real dollar costs for every activity.",
  keywords: [
    "new york city itinerary 5 days",
    "nyc travel guide 2026",
    "new york city budget travel",
    "statue of liberty tickets",
    "things to do new york",
    "new york city trip planning",
    "nyc itinerary first time",
  ],
  openGraph: {
    title: "New York City in 5 Days: Budget to Luxury 2026 Itinerary",
    description: "Statue of Liberty booking secrets, subway hacks, the best pizza, and real dollar costs for every NYC budget.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "New York City Manhattan Skyline Times Square USA",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "New York City in 5 Days (2026)",
    description: "5 plans, Statue of Liberty secrets, subway hacks, and real dollar costs.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/new-york-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "New York City in 5 Days: Complete 2026 Itinerary (What to Do, See & Spend)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80",
      description:
        "5 complete New York City plans with Statue of Liberty booking secrets, subway hacks, the best pizza and bagels, and real dollar costs for every budget.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "New York City 5 Days",
          item: "https://www.incredibleitinerary.com/blog/new-york-5-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "New York City, USA",
      description:
        "The most iconic city in the world — home to the Statue of Liberty, Central Park, the Brooklyn Bridge, Times Square, and an unmatched cultural and culinary landscape across five distinct boroughs.",
      touristType: ["Cultural tourists", "Food lovers", "Architecture enthusiasts", "History buffs", "City explorers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
  ],
};

export default function NewYorkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <NewYorkClient />
    </>
  );
}
