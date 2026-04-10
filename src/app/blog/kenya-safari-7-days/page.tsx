import type { Metadata } from "next";
import KenyaClient from "./KenyaClient";

export const metadata: Metadata = {
  title: "Kenya Safari in 7 Days: Masai Mara, Amboseli & the Great Migration (2026)",
  description:
    "Complete Kenya safari itinerary: David Sheldrick Elephant Orphanage, Amboseli elephants against Kilimanjaro, Masai Mara wildebeest river crossings, and hot air balloon sunrise — with real costs from $150/day.",
  keywords: [
    "kenya safari itinerary 7 days",
    "masai mara safari guide 2026",
    "great migration kenya",
    "amboseli national park",
    "kenya travel guide",
    "big five safari kenya",
    "kenya budget safari",
  ],
  openGraph: {
    title: "Kenya Safari in 7 Days: Masai Mara, Amboseli & Great Migration (2026)",
    description:
      "Wildebeest river crossings, elephant herds against Kilimanjaro, hot air balloon sunrise — complete Kenya safari guide with real costs.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Lion pride resting on the Masai Mara savanna during Kenya safari at sunrise",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenya Safari in 7 Days (2026)",
    description:
      "Masai Mara, Amboseli, Great Migration — complete safari itinerary from $150/day to luxury lodges.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/kenya-safari-7-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Kenya Safari in 7 Days: Masai Mara, Amboseli & the Great Migration (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80",
      description:
        "Complete 7-day Kenya safari guide: Nairobi wildlife experiences, Amboseli elephants, Masai Mara migration, and hot air balloon sunrise — with real costs from $150/day.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Kenya Safari 7 Days",
          item: "https://www.incredibleitinerary.com/blog/kenya-safari-7-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Kenya",
      description:
        "East Africa's premier safari destination — home to the Great Migration, the Masai Mara, Mount Kilimanjaro views from Amboseli, and some of the world's finest wildlife lodges.",
      geo: {
        "@type": "GeoCoordinates",
        latitude: -0.0236,
        longitude: 37.9062,
      },
      touristType: [
        "Safari travellers",
        "Wildlife photographers",
        "Adventure seekers",
        "Conservation tourists",
        "Luxury lodge guests",
      ],
    },
  ],
};

export default function KenyaSafariPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KenyaClient />
    </>
  );
}
