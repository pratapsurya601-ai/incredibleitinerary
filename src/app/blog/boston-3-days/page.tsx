import type { Metadata } from "next";
import BostonClient from "./BostonClient";

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Boston 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Boston trip in 3 days. Plan the perfect 3-day Boston trip. Walk the Freedom Trail, eat clam chowder at Faneuil Hall, visit Harvard, and catch.",
  keywords: [
    "Boston travel guide",
    "Boston 3 days",
    "Freedom Trail Boston",
    "Faneuil Hall Boston",
    "Fenway Park visit",
    "Harvard University Cambridge",
    "Boston clam chowder",
    "Boston budget travel",
    "Boston itinerary 2026",
    "North End Boston Little Italy",
  ],
  alternates: { canonical: "https://incredibleitinerary.com/blog/boston-3-days" },
  openGraph: {
    title: "Boston 3-Day Itinerary 2026: Trip Planner",
    description:
      "Walk the 2.5-mile red-brick Freedom Trail, eat clam chowder at Faneuil Hall, catch a Red Sox game at Fenway Park, and punt around Harvard Yard — your complete 3-day Boston itinerary.",
    url: "https://incredibleitinerary.com/blog/boston-3-days",
    siteName: "IncredibleItinerary",
    type: "article",
    publishedTime: "2026-04-05T00:00:00Z",
    images: [
      {
        url: "https://incredibleitinerary.com/og/boston-3-days.jpg",
        width: 1200,
        height: 630,
        alt: "Boston Freedom Trail historic buildings Massachusetts USA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boston 3-Day Itinerary 2026: Trip Planner",
    description:
      "The Freedom Trail, Fenway Park, Harvard, and the best clam chowder in New England — your 3-day Boston travel guide.",
    images: ["https://incredibleitinerary.com/og/boston-3-days.jpg"],
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Boston in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "A complete 3-day Boston itinerary covering the Freedom Trail, Faneuil Hall, Fenway Park, Harvard University, the North End, Boston Common, and everything from budget hostels to luxury hotels.",
    datePublished: "2026-04-05T00:00:00Z",
    dateModified: "2026-04-05T00:00:00Z",
    author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      url: "https://incredibleitinerary.com",
    },
    url: "https://incredibleitinerary.com/blog/boston-3-days",
    image: "https://incredibleitinerary.com/og/boston-3-days.jpg",
    mainEntityOfPage: "https://incredibleitinerary.com/blog/boston-3-days",
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
        name: "Boston 3-Day Guide",
        item: "https://incredibleitinerary.com/blog/boston-3-days",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Boston",
    description:
      "America's most walkable and most historic city, home to the Freedom Trail, Fenway Park, Harvard University, the North End, and some of the finest clam chowder on the planet.",
    url: "https://incredibleitinerary.com/blog/boston-3-days",
    touristType: ["CulturalTourist", "HistoryTourist", "SportsEnthusiast"],
    hasMap: "https://maps.google.com/?q=Boston+Massachusetts",
  },
];

/* ── Page component ───────────────────────────────────────────────────────── */
export default function BostonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BostonClient />
    </>
  );
}
