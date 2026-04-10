import type { Metadata } from "next";
import BerlinClient from "./BerlinClient";

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Berlin 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan the perfect 4 days in Berlin — the Berlin Wall, Brandenburg Gate, Museum Island, Kreuzberg street food, techno clubs, and budgets from €55/day.",
  keywords: [
    "Berlin 4 days itinerary",
    "Berlin travel guide 2026",
    "Berlin Wall East Side Gallery",
    "Brandenburg Gate Berlin",
    "Museum Island Berlin",
    "Berlin budget guide",
    "Kreuzberg Berlin",
    "Berlin nightlife Berghain",
  ],
  openGraph: {
    title: "Berlin 4-Day Itinerary 2026: Trip Planner",
    description:
      "History, street art, world-class museums and Europe's most creative nightlife — your ultimate 4-day Berlin itinerary from €55/day to luxury.",
    url: "https://incredibleitinerary.com/blog/berlin-4-days",
    siteName: "IncredibleItinerary",
    type: "article",
    publishedTime: "2026-01-15T08:00:00Z",
    modifiedTime: "2026-04-05T08:00:00Z",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Berlin Brandenburg Gate illuminated at night with Unter den Linden boulevard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Berlin 4-Day Itinerary 2026: Trip Planner",
    description:
      "History, street art, world-class museums and Europe's most creative nightlife — your ultimate 4-day Berlin itinerary from €55/day to luxury.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/berlin-4-days",
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Berlin in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "Plan the perfect 4 days in Berlin — the Berlin Wall, Brandenburg Gate, Museum Island, Kreuzberg, techno clubs, and budgets from €55/day.",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=80",
    datePublished: "2026-01-15T08:00:00Z",
    dateModified: "2026-04-05T08:00:00Z",
    author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://incredibleitinerary.com/blog/berlin-4-days" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", position: 3, name: "Berlin 4-Day Guide", item: "https://incredibleitinerary.com/blog/berlin-4-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Berlin",
    description:
      "Germany's capital and most fascinating city — where Cold War history, world-class museums, street art, multicultural food, and Europe's most legendary nightlife converge.",
    url: "https://incredibleitinerary.com/blog/berlin-4-days",
    touristType: ["History enthusiasts", "Art lovers", "Nightlife seekers", "Food travellers", "Architecture fans"],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.52,
      longitude: 13.405,
    },
    containedInPlace: {
      "@type": "Country",
      name: "Germany",
    },
  },
];

/* ── Page Component ───────────────────────────────────────────────────────── */
export default function BerlinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BerlinClient />
    </>
  );
}
