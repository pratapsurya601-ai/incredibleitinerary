import type { Metadata } from "next";
import KomodoClient from "./KomodoClient";

export const metadata: Metadata = {
  title: "Komodo in 4 Days: Dragons, Pink Beach & World-Class Diving (2026 Guide)",
  description:
    "Complete Komodo 4-day itinerary: trek with Komodo dragons, dive Castle Rock, snorkel Manta Point, hike Padar Island, and sail a phinisi between volcanic islands. Budget to luxury.",
  keywords: [
    "komodo itinerary 4 days",
    "komodo travel guide 2026",
    "komodo dragon trek",
    "komodo national park diving",
    "castle rock komodo diving",
    "pink beach komodo",
    "padar island viewpoint",
    "labuan bajo flores guide",
    "manta ray snorkeling komodo",
    "phinisi boat komodo",
  ],
  openGraph: {
    title: "Komodo in 4 Days: Dragons, Pink Beach & World-Class Diving (2026)",
    description:
      "Walk with the world's largest lizard, dive Castle Rock with manta rays and reef sharks, swim at a pink sand beach, and sleep on a wooden phinisi under Flores stars.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Komodo dragon on Komodo Island Indonesia with pink sand beach",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Komodo in 4 Days — Dragons, Diving & Pink Beach (2026)",
    description: "The world's largest lizard, Castle Rock's reef sharks, and Indonesia's wildest corner. Complete guide.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/komodo-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Komodo in 4 Days: Dragons, Pink Beach & World-Class Diving (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1200&q=80",
      description:
        "A complete 4-day Komodo itinerary covering Komodo Island dragon treks, Rinca Island, Pink Beach, Padar Island viewpoint, Castle Rock diving, Manta Point snorkeling, Batu Bolong reef, and Labuan Bajo town.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Komodo 4 Days",
          item: "https://www.incredibleitinerary.com/blog/komodo-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Komodo National Park, Indonesia",
      description:
        "A UNESCO World Heritage Site in eastern Indonesia encompassing Komodo, Rinca, and Padar islands — home to the world's largest lizard, one of the world's best dive destinations, pink sand beaches, and volcanic island scenery.",
      touristType: ["Wildlife enthusiasts", "Scuba divers", "Adventure travellers", "Nature photographers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -8.5425,
        longitude: 119.4833,
      },
    },
  ],
};

export default function KomodoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KomodoClient />
    </>
  );
}
