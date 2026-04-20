import type { Metadata } from "next";
import MontrealClient from "./MontrealClient";

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Montreal 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Montreal trip in 4 days. Plan your perfect Montreal trip with our 4-day itinerary covering budget, mid-range, and luxury options. Notre-Dame.",
  keywords: [
    "Montreal travel guide",
    "Montreal 4 days itinerary",
    "Montreal budget travel",
    "Old Montreal things to do",
    "Notre-Dame Basilica Montreal",
    "Schwartz's deli Montreal",
    "Montreal bagels",
    "Montreal Jazz Festival",
    "Canada travel 2026",
  ],
  openGraph: {
    title: "Montreal 4-Day Itinerary 2026: Trip Planner",
    description:
      "From Notre-Dame Basilica's 10,000-star ceiling to midnight smoked meat at Schwartz's — the only Montreal guide you need.",
    url: "https://incredibleitinerary.com/blog/montreal-4-days",
    siteName: "IncredibleItinerary",
    type: "article",
    publishedTime: "2026-04-05T00:00:00Z",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
        width: 1200,
        height: 630,
        alt: "Montreal Old Port with Notre-Dame Basilica illuminated at night",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Montreal 4-Day Itinerary 2026: Trip Planner",
    description:
      "Budget to luxury 4-day Montreal itinerary — Old Port, bagels, smoked meat, and bilingual magic.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/montreal-4-days",
  },
};

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Montreal in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "A complete 4-day Montreal travel guide covering budget, mid-range, and luxury itineraries, visa requirements, budget breakdown, and insider tips.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
    author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
    },
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://incredibleitinerary.com/blog/montreal-4-days" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", position: 3, name: "Montreal 4 Days", item: "https://incredibleitinerary.com/blog/montreal-4-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Montreal",
    description:
      "Montreal is Canada's most European city — a bilingual metropolis where French café culture collides with North American energy, world-class jazz, legendary bagels, and smoked meat sandwiches.",
    url: "https://incredibleitinerary.com/blog/montreal-4-days",
    touristType: ["Culture", "Gastronomy", "Architecture", "Festivals"],
    geo: { "@type": "GeoCoordinates", latitude: 45.5017, longitude: -73.5673 },
    containedInPlace: { "@type": "Country", name: "Canada" },
  },
];

/* ── Page Component ──────────────────────────────────────────────────────── */
export default function MontrealPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MontrealClient />
    </>
  );
}
