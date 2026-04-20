import type { Metadata } from "next";
import MykonosClient from "./MykonosClient";

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Mykonos in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    "description": "Your complete Mykonos 4-day itinerary covering Mykonos Town, Little Venice, the famous windmills, Paradise beach, the Delos day trip, and the Armenistis Lighthouse — across budget, mid-range, and luxury plans.",
    "image": "https://incredibleitinerary.com/og/mykonos-4-days.jpg",
    "author": { "@type": "Person", "name": "Surya Pratap", "url": "https://www.incredibleitinerary.com/about" },
    "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" } },
    "datePublished": "2026-01-20",
    "dateModified": "2026-04-01",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://incredibleitinerary.com/blog/mykonos-4-days" }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Mykonos 4 Days", "item": "https://incredibleitinerary.com/blog/mykonos-4-days" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Mykonos",
    "description": "The Cyclades island where glamour meets Cycladic magic — famous for its windmills, whitewashed maze streets, Little Venice waterfront, party beaches, and the UNESCO Delos ruins nearby.",
    "url": "https://incredibleitinerary.com/blog/mykonos-4-days",
    "touristType": ["Beach Tourism", "Cultural Tourism", "Luxury Tourism", "Nightlife Tourism"],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.4467,
      "longitude": 25.3289
    },
    "containedInPlace": {
      "@type": "Country",
      "name": "Greece"
    }
  }
];

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Mykonos 4-Day Itinerary 2026: Trip Planner",
  description: "Plan your Mykonos trip in 4 days. Plan the perfect 4-day Mykonos trip: windmills, Little Venice, Delos ruins, Paradise beach & Armenistis Lighthouse..",
  keywords: ["Mykonos travel guide", "Mykonos 4 days itinerary", "Mykonos windmills", "Little Venice Mykonos", "Delos day trip", "Paradise beach Mykonos", "Mykonos budget travel", "Cyclades Greece", "Mykonos luxury hotels"],
  openGraph: {
    title: "Mykonos 4-Day Itinerary 2026: Trip Planner",
    description: "Windmills above a maze designed to confuse pirates, Little Venice waves lapping at sunset café tables, party beaches with DJs, and a pelican strutting through the square — 4 days in Mykonos.",
    url: "https://incredibleitinerary.com/blog/mykonos-4-days",
    siteName: "IncredibleItinerary",
    images: [{ url: "https://incredibleitinerary.com/og/mykonos-4-days.jpg", width: 1200, height: 630, alt: "Mykonos windmills and whitewashed houses with blue doors Cyclades Greece" }],
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mykonos 4-Day Itinerary 2026: Trip Planner",
    description: "Budget €80/day to luxury €500/day — complete Mykonos 4-day itinerary with windmills, Delos, party beaches, and the best sunsets in the Cyclades.",
    images: ["https://incredibleitinerary.com/og/mykonos-4-days.jpg"],
  },
  alternates: { canonical: "https://incredibleitinerary.com/blog/mykonos-4-days" },
};

/* ── Page component ──────────────────────────────────────────────────────── */
export default function MykonosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MykonosClient />
    </>
  );
}
