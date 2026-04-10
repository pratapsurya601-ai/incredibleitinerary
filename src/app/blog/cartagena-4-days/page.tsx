import type { Metadata } from "next";
import CartagenaClient from "./CartagenaClient";

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cartagena Colombia in 4 Days: The Complete Guide (Budget to Luxury, 2026)",
    "description": "A complete 4-day Cartagena Colombia travel guide covering the walled city, San Felipe fort, Getsemaní, Rosario Islands, and Caribbean food — from $55/day to $300/day.",
    "image": "https://incredibleitinerary.com/og/cartagena-4-days.jpg",
    "author": { "@type": "Person", "name": "Surya Pratap", "url": "https://www.incredibleitinerary.com/about" },
    "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" } },
    "datePublished": "2026-02-01",
    "dateModified": "2026-04-01",
    "mainEntityOfPage": "https://incredibleitinerary.com/blog/cartagena-4-days"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Cartagena 4 Days", "item": "https://incredibleitinerary.com/blog/cartagena-4-days" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Cartagena",
    "description": "A UNESCO-listed walled colonial city on Colombia's Caribbean coast, famous for colourful architecture, the Castle of San Felipe, the Rosario Islands, and vibrant Getsemaní neighbourhood.",
    "geo": { "@type": "GeoCoordinates", "latitude": 10.3910, "longitude": -75.4794 },
    "touristType": ["Cultural Traveller", "Beach Lover", "History Enthusiast", "Foodie"],
    "url": "https://incredibleitinerary.com/blog/cartagena-4-days"
  }
];

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Cartagena Colombia 4-Day Itinerary 2026: Trip Planner",
  description: "Plan your Cartagena Colombia trip in 4 days. 4-day Cartagena Colombia itinerary covering the walled city, Castle of San Felipe, Getsemaní, Rosario.",
  keywords: ["Cartagena Colombia itinerary", "Cartagena 4 days", "Ciudad Amurallada", "Rosario Islands", "Getsemaní", "Castle San Felipe", "Colombia travel guide", "Cartagena walled city"],
  openGraph: {
    title: "Cartagena Colombia 4-Day Itinerary 2026: Trip Planner",
    description: "4-day Cartagena Colombia itinerary — walled city, San Felipe, Rosario Islands — from $55/day to $300/day.",
    url: "https://incredibleitinerary.com/blog/cartagena-4-days",
    siteName: "IncredibleItinerary",
    images: [{ url: "https://incredibleitinerary.com/og/cartagena-4-days.jpg", width: 1200, height: 630, alt: "Cartagena Colombia colorful colonial buildings walled city Old Town Caribbean" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cartagena Colombia 4-Day Itinerary 2026: Trip Planner",
    description: "4-day Cartagena Colombia itinerary — walled city, San Felipe, Rosario Islands, $55–$300/day.",
    images: ["https://incredibleitinerary.com/og/cartagena-4-days.jpg"],
  },
  alternates: { canonical: "https://incredibleitinerary.com/blog/cartagena-4-days" },
};

/* ── Page Component ───────────────────────────────────────────────────────── */
export default function CartagenaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CartagenaClient />
    </>
  );
}
