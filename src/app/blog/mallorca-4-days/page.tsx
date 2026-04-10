import type { Metadata } from "next";
import MallorcaClient from "./MallorcaClient";

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Mallorca in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    "description": "Your complete Mallorca 4-day itinerary covering Palma Cathedral, Serra de Tramuntana, Cap de Formentor, Es Trenc beach, and the Caves of Drach — across budget, mid-range, and luxury plans.",
    "image": "https://incredibleitinerary.com/og/mallorca-4-days.jpg",
    "author": { "@type": "Person", "name": "Surya Pratap", "url": "https://www.incredibleitinerary.com/about" },
    "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" } },
    "datePublished": "2026-01-10",
    "dateModified": "2026-04-01",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://incredibleitinerary.com/blog/mallorca-4-days" }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Mallorca 4 Days", "item": "https://incredibleitinerary.com/blog/mallorca-4-days" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Mallorca",
    "description": "Spain's largest Balearic island, home to Palma Cathedral, the UNESCO Serra de Tramuntana, Cap de Formentor, Es Trenc beach, and the Caves of Drach.",
    "url": "https://incredibleitinerary.com/blog/mallorca-4-days",
    "touristType": ["Beach Tourism", "Cultural Tourism", "Adventure Tourism", "Gastronomic Tourism"],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.5696,
      "longitude": 2.6502
    },
    "containedInPlace": {
      "@type": "Country",
      "name": "Spain"
    }
  }
];

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Mallorca 4-Day Itinerary 2026: Trip Planner",
  description: "Plan your Mallorca trip in 4 days. Plan the perfect 4-day Mallorca trip: Palma Cathedral, Serra de Tramuntana, Cap de Formentor, Es Trenc beach & Caves of.",
  keywords: ["Mallorca travel guide", "Mallorca 4 days itinerary", "Palma Cathedral", "Serra de Tramuntana", "Cap de Formentor", "Es Trenc beach", "Caves of Drach", "Mallorca budget travel", "Balearic Islands Spain"],
  openGraph: {
    title: "Mallorca 4-Day Itinerary 2026: Trip Planner",
    description: "A Gothic cathedral rising from the seafront, limestone cliffs of Tramuntana at dawn, sea caves only accessible by kayak — complete 4-day Mallorca itinerary for every budget.",
    url: "https://incredibleitinerary.com/blog/mallorca-4-days",
    siteName: "IncredibleItinerary",
    images: [{ url: "https://incredibleitinerary.com/og/mallorca-4-days.jpg", width: 1200, height: 630, alt: "Mallorca Palma Cathedral La Seu overlooking Mediterranean sea Spain" }],
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mallorca 4-Day Itinerary 2026: Trip Planner",
    description: "Budget €55/day to luxury €300/day — complete Mallorca 4-day itinerary with Palma, Tramuntana, Formentor & more.",
    images: ["https://incredibleitinerary.com/og/mallorca-4-days.jpg"],
  },
  alternates: { canonical: "https://incredibleitinerary.com/blog/mallorca-4-days" },
};

/* ── Page component ──────────────────────────────────────────────────────── */
export default function MallorcaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MallorcaClient />
    </>
  );
}
