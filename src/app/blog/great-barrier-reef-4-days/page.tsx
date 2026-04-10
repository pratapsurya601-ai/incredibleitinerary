import type { Metadata } from "next";
import GreatBarrierReefClient from "./GreatBarrierReefClient";

export const metadata: Metadata = {
  title: "Great Barrier Reef in 4 Days: Snorkeling, Daintree & Cairns Complete Guide (2026)",
  description:
    "4-day Great Barrier Reef guide from Cairns — outer reef snorkeling, Daintree Rainforest, intro scuba diving, Atherton Tablelands platypus, and budget breakdowns for every travel style.",
  keywords: [
    "great barrier reef itinerary 4 days",
    "cairns travel guide 2026",
    "great barrier reef snorkeling",
    "daintree rainforest day trip",
    "cairns budget travel",
    "australia reef guide",
  ],
  openGraph: {
    title: "Great Barrier Reef in 4 Days: Snorkeling, Daintree & Cairns (2026)",
    description:
      "Outer reef snorkeling secrets, Daintree Rainforest guide, intro scuba diving tips, and real A$ costs for every budget.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Great Barrier Reef coral snorkeling Queensland Australia",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Great Barrier Reef in 4 Days (2026)",
    description: "Outer reef, Daintree Rainforest, intro dives, and real A$ costs.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/great-barrier-reef-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Great Barrier Reef in 4 Days: Snorkeling, Daintree & Cairns Complete Guide (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: {
        "@type": "Person",
        name: "Surya Pratap",
        url: "https://www.incredibleitinerary.com/about",
      },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1200&q=80",
      description:
        "4-day Great Barrier Reef itinerary with outer reef snorkeling, Daintree Rainforest, intro scuba diving, and A$ costs for budget to luxury travellers.",
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
          name: "Great Barrier Reef 4 Days",
          item: "https://www.incredibleitinerary.com/blog/great-barrier-reef-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Great Barrier Reef, Queensland, Australia",
      description:
        "The world's largest coral reef system, stretching 2,300km along the Queensland coast. A UNESCO World Heritage Site and one of the seven natural wonders of the world.",
      touristType: [
        "Snorkelers",
        "Scuba divers",
        "Nature lovers",
        "Wildlife enthusiasts",
        "Adventure travellers",
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -16.9186,
        longitude: 145.7781,
      },
    },
  ],
};

export default function GreatBarrierReefPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GreatBarrierReefClient />
    </>
  );
}
