import type { Metadata } from "next";
import LasVegasClient from "./LasVegasClient";

export const metadata: Metadata = {
  title: "Las Vegas in 4 Days: The Strip, Grand Canyon & What to Actually Spend (2026)",
  description: "4 complete Las Vegas plans — budget to luxury — covering the Bellagio fountains, Grand Canyon day trip, best shows, resort fee traps, and real dollar costs for every activity.",
  keywords: [
    "las vegas itinerary 4 days",
    "las vegas travel guide 2026",
    "las vegas budget travel",
    "grand canyon day trip from las vegas",
    "las vegas strip guide",
    "what to do in las vegas",
    "las vegas trip planning",
  ],
  openGraph: {
    title: "Las Vegas in 4 Days: The Strip, Grand Canyon & What to Actually Spend (2026)",
    description: "Bellagio fountains, Grand Canyon day trip, best shows, resort fee traps, and real dollar costs for every Las Vegas budget.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Las Vegas Strip at Night Neon Lights Nevada USA",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Las Vegas in 4 Days (2026)",
    description: "4 plans, resort fee traps, Grand Canyon tips, and real dollar costs.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/las-vegas-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Las Vegas in 4 Days: The Strip, Grand Canyon & What to Actually Spend (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=1200&q=80",
      description:
        "4 complete Las Vegas plans with Bellagio fountain guides, Grand Canyon day trip options, best shows, resort fee warnings, and real dollar costs for every budget.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Las Vegas 4 Days",
          item: "https://www.incredibleitinerary.com/blog/las-vegas-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Las Vegas, Nevada, USA",
      description:
        "The entertainment capital of the world — 4.2 miles of casino resorts, world-class shows, celebrity chef restaurants, and the gateway to the Grand Canyon, Hoover Dam, and Valley of Fire.",
      touristType: ["Entertainment seekers", "Foodies", "Gamblers", "Architecture enthusiasts", "Adventure travelers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.1699,
        longitude: -115.1398,
      },
    },
  ],
};

export default function LasVegasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LasVegasClient />
    </>
  );
}
