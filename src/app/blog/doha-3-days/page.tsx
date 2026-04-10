import type { Metadata } from "next";
import DohaClient from "./DohaClient";

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Doha 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Doha trip in 3 days. Plan the perfect 3 days in Doha, Qatar — Museum of Islamic Art, Souq Waqif, The Pearl, desert safaris, and the world's.",
  keywords: [
    "Doha 3 days itinerary",
    "Doha travel guide 2026",
    "Qatar tourism",
    "Museum of Islamic Art Doha",
    "Souq Waqif",
    "The Pearl Qatar",
    "Doha budget travel",
    "Doha luxury hotels",
    "Qatar visa on arrival Indian",
    "Doha desert safari",
  ],
  openGraph: {
    title: "Doha 3-Day Itinerary 2026: Trip Planner",
    description:
      "One of the world's newest mega-cities rising from a desert peninsula — Museum of Islamic Art, Souq Waqif, Corniche, and the fastest-growing skyline on Earth.",
    url: "https://incredibleitinerary.com/blog/doha-3-days",
    siteName: "IncredibleItinerary",
    type: "article",
    publishedTime: "2026-04-05T00:00:00Z",
    images: [
      {
        url: "https://source.unsplash.com/1200x630/?doha+qatar+skyline+corniche+west+bay+towers+night",
        width: 1200,
        height: 630,
        alt: "Doha Qatar skyline West Bay skyscrapers reflected in Corniche waterfront at night",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doha 3-Day Itinerary 2026: Trip Planner",
    description:
      "Museum of Islamic Art, Souq Waqif, The Pearl, and a desert safari — all in 3 days in Doha, Qatar.",
    images: [
      "https://source.unsplash.com/1200x630/?doha+qatar+skyline+corniche+west+bay+towers+night",
    ],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/doha-3-days",
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Doha in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "Plan the perfect 3 days in Doha, Qatar — from the Museum of Islamic Art to Souq Waqif and a desert safari.",
    image:
      "https://source.unsplash.com/1200x630/?doha+qatar+skyline+corniche+west+bay+towers+night",
    datePublished: "2026-04-05T00:00:00Z",
    dateModified: "2026-04-05T00:00:00Z",
    author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      logo: {
        "@type": "ImageObject",
        url: "https://incredibleitinerary.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://incredibleitinerary.com/blog/doha-3-days",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", position: 3, name: "Doha 3 Days", item: "https://incredibleitinerary.com/blog/doha-3-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Doha",
    description:
      "The capital of Qatar — one of the world's newest mega-cities with a world-class museum, restored ancient souq, and the fastest-growing skyline on Earth.",
    geo: { "@type": "GeoCoordinates", latitude: 25.2854, longitude: 51.531 },
    touristType: "Culture, Luxury, Architecture, History",
    url: "https://incredibleitinerary.com/blog/doha-3-days",
  },
];

/* ── Page component ───────────────────────────────────────────────────────── */
export default function DohaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DohaClient />
    </>
  );
}
