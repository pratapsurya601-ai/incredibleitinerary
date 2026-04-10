import type { Metadata } from "next";
import FijiClient from "./FijiClient";

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Fiji 5-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Fiji trip in 5 days. Plan the perfect 5 days in Fiji — Yasawa island hopping, Mamanuca resorts, kava ceremonies, coral reef diving, and budgets.",
  keywords: [
    "Fiji 5 days itinerary",
    "Fiji travel guide 2026",
    "Mamanuca Islands Fiji",
    "Yasawa Islands backpacking Fiji",
    "Fiji overwater bungalow",
    "Fiji kava ceremony",
    "Great Astrolabe Reef Fiji",
    "Fiji budget guide",
  ],
  openGraph: {
    title: "Fiji 5-Day Itinerary 2026: Trip Planner",
    description:
      "Coral reefs, kava ceremonies, island hopping and the warmest people on earth — your ultimate 5-day Fiji itinerary from $100/day to overwater luxury.",
    url: "https://incredibleitinerary.com/blog/fiji-5-days",
    siteName: "IncredibleItinerary",
    type: "article",
    publishedTime: "2026-01-20T08:00:00Z",
    modifiedTime: "2026-04-05T08:00:00Z",
    images: [
      {
        url: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Fiji overwater bungalows with crystal clear turquoise lagoon and coral reefs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiji 5-Day Itinerary 2026: Trip Planner",
    description:
      "Coral reefs, kava ceremonies, island hopping and the warmest people on earth — your ultimate 5-day Fiji itinerary from $100/day to overwater luxury.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/fiji-5-days",
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Fiji in 5 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "Plan the perfect 5 days in Fiji — Yasawa island hopping, Mamanuca resorts, kava ceremonies, coral reef diving, and budgets from $100/day to overwater bungalows.",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1200&q=80",
    datePublished: "2026-01-20T08:00:00Z",
    dateModified: "2026-04-05T08:00:00Z",
    author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://incredibleitinerary.com/blog/fiji-5-days" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", position: 3, name: "Fiji 5-Day Guide", item: "https://incredibleitinerary.com/blog/fiji-5-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Fiji",
    description:
      "An archipelago of over 300 islands in the South Pacific, famous for world-class coral reefs, warm Melanesian hospitality, overwater bungalows, and pristine beaches.",
    url: "https://incredibleitinerary.com/blog/fiji-5-days",
    touristType: ["Beach lovers", "Snorkellers and divers", "Honeymooners", "Island hoppers", "Backpackers"],
    geo: {
      "@type": "GeoCoordinates",
      latitude: -17.7134,
      longitude: 178.065,
    },
    containedInPlace: {
      "@type": "Country",
      name: "Fiji",
    },
  },
];

/* ── Page Component ───────────────────────────────────────────────────────── */
export default function FijiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FijiClient />
    </>
  );
}
