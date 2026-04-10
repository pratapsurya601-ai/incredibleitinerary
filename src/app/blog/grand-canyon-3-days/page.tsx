import type { Metadata } from "next";
import GrandCanyonClient from "./GrandCanyonClient";

export const metadata: Metadata = {
  title: "Grand Canyon in 3 Days: Hiking, Viewpoints & Everything You Need to Know (2026)",
  description: "Complete 3-day Grand Canyon guide with Bright Angel Trail hike safety rules, best viewpoints, Desert View Drive, helicopter tours, Havasupai permits, and real USD costs for every budget.",
  keywords: [
    "grand canyon itinerary 3 days",
    "grand canyon travel guide 2026",
    "bright angel trail hike",
    "grand canyon viewpoints",
    "desert view drive grand canyon",
    "havasupai falls permit",
    "grand canyon south rim",
    "arizona travel guide",
  ],
  openGraph: {
    title: "Grand Canyon in 3 Days: Hiking, Viewpoints & Everything You Need to Know (2026)",
    description: "Bright Angel Trail safety rules, best viewpoints, Desert View Drive, helicopter tours, and real costs for budget to luxury at the Grand Canyon.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Grand Canyon South Rim sunset Colorado River Arizona USA",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grand Canyon in 3 Days (2026)",
    description: "Hike safety rules, best viewpoints, Desert View Drive, helicopter tours, real USD costs.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/grand-canyon-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Grand Canyon in 3 Days: Hiking, Viewpoints & Everything You Need to Know (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      dateModified: "2026-04-05T00:00:00Z",
      author: {
        "@type": "Organization",
        name: "IncredibleItinerary",
      },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=1200&q=80",
      description:
        "Complete 3-day Grand Canyon travel guide: Bright Angel Trail safety, best viewpoints, Desert View Drive, helicopter tours, Havasupai Falls permit guide, and full budget breakdown for 2026.",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.incredibleitinerary.com/blog/grand-canyon-3-days",
      },
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
          name: "Grand Canyon 3 Days",
          item: "https://www.incredibleitinerary.com/blog/grand-canyon-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Grand Canyon, Arizona, USA",
      description:
        "One of the world's great natural wonders — a 446 km long, 1,800 metre deep canyon carved by the Colorado River over 5–6 million years, exposing nearly two billion years of geological history. A UNESCO World Heritage Site and one of the most visited national parks in the United States.",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.1069,
        longitude: -112.1129,
      },
      touristType: [
        "Hikers",
        "Nature enthusiasts",
        "Photographers",
        "Adventure travelers",
        "Geology enthusiasts",
        "Family travelers",
      ],
      hasMap: "https://www.google.com/maps/place/Grand+Canyon+National+Park",
      url: "https://www.nps.gov/grca/",
    },
  ],
};

export default function GrandCanyonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GrandCanyonClient />
    </>
  );
}
