import type { Metadata } from "next";
import BelgradeClient from "./BelgradeClient";

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Belgrade in 3 Days: The Complete Guide (Budget to Luxury, 2026)",
    "description":
      "Plan the perfect 3 days in Belgrade, Serbia — from Kalemegdan Fortress and Skadarlija to the legendary splavovi river-boat nightlife and a day trip to Novi Sad. Budget from €35/day.",
    "author": { "@type": "Person", "name": "Surya Pratap", "url": "https://www.incredibleitinerary.com/about" },
    "publisher": {
      "@type": "Organization",
      "name": "IncredibleItinerary",
      "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" },
    },
    "datePublished": "2026-01-20",
    "dateModified": "2026-04-05",
    "image": "https://incredibleitinerary.com/images/belgrade-kalemegdan-fortress-danube.jpg",
    "mainEntityOfPage": "https://incredibleitinerary.com/blog/belgrade-3-days",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Belgrade 3 Days", "item": "https://incredibleitinerary.com/blog/belgrade-3-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Belgrade",
    "description": "Europe's most underrated capital — 7,000 years of history, a fortress rebuilt 38 times, legendary river-boat nightlife, and extraordinary warmth of hospitality.",
    "geo": { "@type": "GeoCoordinates", "latitude": 44.8176, "longitude": 20.4569 },
    "touristType": ["Party traveller", "History enthusiast", "Budget traveller", "Food lover"],
    "url": "https://incredibleitinerary.com/blog/belgrade-3-days",
  },
];

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Belgrade 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Belgrade trip in 3 days. The ultimate Belgrade 3-day itinerary — Kalemegdan Fortress, Skadarlija bohemian quarter, St Sava Temple, splavovi.",
  keywords: [
    "Belgrade itinerary 3 days",
    "Belgrade travel guide 2026",
    "Belgrade budget travel",
    "Kalemegdan Fortress",
    "Belgrade nightlife splavovi",
    "Novi Sad day trip",
    "Serbia travel guide",
    "Belgrade things to do",
    "Skadarlija bohemian quarter",
    "Balkans travel",
  ],
  openGraph: {
    title: "Belgrade 3-Day Itinerary 2026: Trip Planner",
    description:
      "A fortress rebuilt 38 times, river-boat clubs that don't open until 1am, and rakija before hello — Belgrade is Europe's most underrated and most alive capital.",
    url: "https://incredibleitinerary.com/blog/belgrade-3-days",
    siteName: "IncredibleItinerary",
    type: "article",
    images: [
      {
        url: "https://incredibleitinerary.com/images/belgrade-kalemegdan-fortress-danube.jpg",
        width: 1200,
        height: 630,
        alt: "Belgrade Serbia Kalemegdan Fortress overlooking confluence of Danube and Sava rivers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Belgrade 3-Day Itinerary 2026: Trip Planner",
    description:
      "Kalemegdan, splavovi nightlife, Tesla Museum, bohemian Skadarlija, and a day trip to Novi Sad — Europe's most underrated capital from €35/day.",
  },
  alternates: { canonical: "https://incredibleitinerary.com/blog/belgrade-3-days" },
};

/* ── Page component ──────────────────────────────────────────────────────── */
export default function BelgradePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BelgradeClient />
    </>
  );
}
