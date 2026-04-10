import type { Metadata } from "next";
import CostaRicaClient from "./CostaRicaClient";

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Costa Rica in 7 Days: The Complete Guide (Budget to Luxury, 2026)",
    "description": "A complete 7-day Costa Rica travel guide covering Arenal Volcano, Monteverde Cloud Forest, Manuel Antonio, surfing and wildlife — for every budget from $75/day to $380/day.",
    "image": "https://incredibleitinerary.com/og/costa-rica-7-days.jpg",
    "author": { "@type": "Person", "name": "Surya Pratap", "url": "https://www.incredibleitinerary.com/about" },
    "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" } },
    "datePublished": "2026-01-15",
    "dateModified": "2026-04-01",
    "mainEntityOfPage": "https://incredibleitinerary.com/blog/costa-rica-7-days"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Costa Rica 7 Days", "item": "https://incredibleitinerary.com/blog/costa-rica-7-days" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Costa Rica",
    "description": "A Central American nation renowned for biodiversity, active volcanoes, cloud forests, and the Pura Vida philosophy.",
    "geo": { "@type": "GeoCoordinates", "latitude": 9.7489, "longitude": -83.7534 },
    "touristType": ["Nature Traveller", "Adventure Traveller", "Wildlife Enthusiast"],
    "url": "https://incredibleitinerary.com/blog/costa-rica-7-days"
  }
];

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Costa Rica 7-Day Itinerary 2026: Trip Planner",
  description: "Plan your Costa Rica trip in 7 days. 7-day Costa Rica itinerary covering Arenal Volcano, Monteverde Cloud Forest, Manuel Antonio and more — from $75/day.",
  keywords: ["Costa Rica itinerary", "Costa Rica 7 days", "Arenal Volcano", "Monteverde Cloud Forest", "Manuel Antonio", "Costa Rica budget travel", "Pura Vida"],
  openGraph: {
    title: "Costa Rica 7-Day Itinerary 2026: Trip Planner",
    description: "7-day Costa Rica itinerary covering Arenal Volcano, Monteverde Cloud Forest, Manuel Antonio — from $75/day to $380/day.",
    url: "https://incredibleitinerary.com/blog/costa-rica-7-days",
    siteName: "IncredibleItinerary",
    images: [{ url: "https://incredibleitinerary.com/og/costa-rica-7-days.jpg", width: 1200, height: 630, alt: "Costa Rica Arenal Volcano with rainforest and cloud forest wildlife" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Costa Rica 7-Day Itinerary 2026: Trip Planner",
    description: "7-day Costa Rica itinerary — Arenal, Monteverde, Manuel Antonio, $75–$380/day.",
    images: ["https://incredibleitinerary.com/og/costa-rica-7-days.jpg"],
  },
  alternates: { canonical: "https://incredibleitinerary.com/blog/costa-rica-7-days" },
};

/* ── Page Component ───────────────────────────────────────────────────────── */
export default function CostaRicaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CostaRicaClient />
    </>
  );
}
