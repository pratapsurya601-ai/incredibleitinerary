import type { Metadata } from "next";
import NepalClient from "./NepalClient";

export const metadata: Metadata = {
  title: "Nepal in 7 Days: Kathmandu, Pokhara, Chitwan & Himalayan Sunrise (2026)",
  description: "Complete 7-day Nepal itinerary covering Kathmandu temples, Pokhara Himalayan sunrise, Chitwan wildlife safaris, real dollar costs for every budget, and visa info for Indians.",
  keywords: [
    "nepal itinerary 7 days",
    "nepal travel guide 2026",
    "kathmandu pokhara chitwan itinerary",
    "sarangkot sunrise nepal",
    "nepal budget travel",
    "do indians need visa for nepal",
    "everest base camp trek",
  ],
  openGraph: {
    title: "Nepal in 7 Days: Kathmandu, Pokhara & Himalayan Sunrise (2026)",
    description: "Temples, Himalayan sunrises, jungle safaris, dal bhat for $2 — complete Nepal guide from $25/day.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Nepal Annapurna Himalayas sunrise from Sarangkot Pokhara",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nepal in 7 Days (2026)",
    description: "Kathmandu, Pokhara, Chitwan — real costs, Himalayan sunrise tips, visa info for Indians.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/nepal-7-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Nepal in 7 Days: Kathmandu, Pokhara, Chitwan & Himalayan Sunrise (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80",
      description:
        "Complete 7-day Nepal itinerary with Kathmandu temples, Pokhara Himalayan sunrise, Chitwan wildlife safaris, and real costs for every budget.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Nepal 7 Days",
          item: "https://www.incredibleitinerary.com/blog/nepal-7-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Nepal",
      description:
        "The Himalayan kingdom home to eight of the world's ten highest peaks, ancient Hindu and Buddhist temple cities, and the world's finest trekking routes.",
      touristType: ["Trekkers", "Cultural tourists", "Wildlife enthusiasts", "Adventure travelers", "Spiritual seekers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.3949,
        longitude: 84.124,
      },
    },
  ],
};

export default function NepalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <NepalClient />
    </>
  );
}
