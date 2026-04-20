import type { Metadata } from "next";
import NashvilleClient from "./NashvilleClient";

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Nashville 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Nashville trip in 3 days. Plan the perfect 3-day Nashville trip. Honky tonk bars on Broadway, the Grand Ole Opry, hot chicken, RCA Studio B.",
  keywords: [
    "Nashville travel guide",
    "Nashville 3 days",
    "Broadway Nashville honky tonk",
    "Grand Ole Opry visit",
    "Nashville hot chicken",
    "Country Music Hall of Fame",
    "RCA Studio B Elvis",
    "Ryman Auditorium Nashville",
    "Nashville itinerary 2026",
    "Music City USA guide",
  ],
  alternates: { canonical: "https://incredibleitinerary.com/blog/nashville-3-days" },
  openGraph: {
    title: "Nashville 3-Day Itinerary 2026: Trip Planner",
    description:
      "Live country music at noon on Broadway, hot chicken with a spice warning, the Grand Ole Opry, and RCA Studio B where Elvis recorded — your complete 3-day Nashville, Music City USA itinerary.",
    url: "https://incredibleitinerary.com/blog/nashville-3-days",
    siteName: "IncredibleItinerary",
    type: "article",
    publishedTime: "2026-04-05T00:00:00Z",
    images: [
      {
        url: "https://incredibleitinerary.com/og/nashville-3-days.jpg",
        width: 1200,
        height: 630,
        alt: "Nashville Broadway honky tonk bars with live country music Tennessee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nashville 3-Day Itinerary 2026: Trip Planner",
    description:
      "Honky tonk bars, hot chicken, the Grand Ole Opry, and RCA Studio B — your 3-day Music City USA travel guide.",
    images: ["https://incredibleitinerary.com/og/nashville-3-days.jpg"],
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Nashville in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "A complete 3-day Nashville itinerary covering Broadway honky tonk bars, the Grand Ole Opry, Country Music Hall of Fame, RCA Studio B, Ryman Auditorium, the Bluebird Cafe, hot chicken, and the Jack Daniel's Distillery day trip.",
    datePublished: "2026-04-05T00:00:00Z",
    dateModified: "2026-04-05T00:00:00Z",
    author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      url: "https://incredibleitinerary.com",
    },
    url: "https://incredibleitinerary.com/blog/nashville-3-days",
    image: "https://incredibleitinerary.com/og/nashville-3-days.jpg",
    mainEntityOfPage: "https://incredibleitinerary.com/blog/nashville-3-days",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Nashville 3-Day Guide",
        item: "https://incredibleitinerary.com/blog/nashville-3-days",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Nashville",
    description:
      "Music City USA — home to the Grand Ole Opry, Broadway honky tonk bars, the Country Music Hall of Fame, RCA Studio B, the Ryman Auditorium, and the hottest hot chicken on the planet.",
    url: "https://incredibleitinerary.com/blog/nashville-3-days",
    touristType: ["MusicTourist", "CulturalTourist", "FoodTourist"],
    hasMap: "https://maps.google.com/?q=Nashville+Tennessee",
  },
];

/* ── Page component ───────────────────────────────────────────────────────── */
export default function NashvillePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NashvilleClient />
    </>
  );
}
