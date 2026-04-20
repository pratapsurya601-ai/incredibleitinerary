import type { Metadata } from "next";
import MunichClient from "./MunichClient";

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Munich 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan the perfect 3 days in Munich with our complete 2026 guide — Oktoberfest, Marienplatz, Neuschwanstein day trip, beer gardens, and budgets from €65/day.",
  keywords: [
    "Munich 3 days itinerary",
    "Munich travel guide 2026",
    "Oktoberfest Munich",
    "Neuschwanstein day trip from Munich",
    "Munich beer garden",
    "Marienplatz Munich",
    "Bavaria Germany travel",
    "Munich budget guide",
  ],
  openGraph: {
    title: "Munich 3-Day Itinerary 2026: Trip Planner",
    description:
      "Beer halls, baroque palaces, and Bavarian Alps day trips — your ultimate 3-day Munich itinerary from €65/day to luxury.",
    url: "https://incredibleitinerary.com/blog/munich-3-days",
    siteName: "IncredibleItinerary",
    type: "article",
    publishedTime: "2026-01-10T08:00:00Z",
    modifiedTime: "2026-04-05T08:00:00Z",
    images: [
      {
        url: "https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Munich Marienplatz with Glockenspiel tower and New Town Hall Bavaria Germany",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Munich 3-Day Itinerary 2026: Trip Planner",
    description:
      "Beer halls, baroque palaces, and Bavarian Alps day trips — your ultimate 3-day Munich itinerary from €65/day to luxury.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/munich-3-days",
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Munich in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "Plan the perfect 3 days in Munich — Oktoberfest, Marienplatz, Neuschwanstein, beer gardens, and budgets from €65/day.",
    image: "https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?w=1200&q=80",
    datePublished: "2026-01-10T08:00:00Z",
    dateModified: "2026-04-05T08:00:00Z",
    author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://incredibleitinerary.com/blog/munich-3-days" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", position: 3, name: "Munich 3-Day Guide", item: "https://incredibleitinerary.com/blog/munich-3-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Munich",
    description: "Bavaria's capital city, famous for Oktoberfest, Marienplatz, the English Garden, and proximity to Neuschwanstein Castle.",
    url: "https://incredibleitinerary.com/blog/munich-3-days",
    touristType: ["Cultural tourists", "Beer enthusiasts", "History lovers", "Architecture fans"],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.1351,
      longitude: 11.582,
    },
    containedInPlace: {
      "@type": "Country",
      name: "Germany",
    },
  },
];

/* ── Page Component ───────────────────────────────────────────────────────── */
export default function MunichPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MunichClient />
    </>
  );
}
