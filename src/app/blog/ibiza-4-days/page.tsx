import type { Metadata } from "next";
import IbizaClient from "./IbizaClient";

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Ibiza 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Ibiza trip in 4 days. Plan 4 days in Ibiza: Dalt Vila UNESCO old town, Café del Mar sunsets, world-famous clubs, hidden coves, Formentera day.",
  keywords: [
    "Ibiza travel guide",
    "Ibiza 4 days itinerary",
    "Dalt Vila UNESCO",
    "Ibiza clubs guide",
    "Café del Mar sunset",
    "Formentera day trip",
    "Ibiza hidden beaches",
    "Cala Conta Cala Bassa",
    "Es Vedrà Ibiza",
    "Ibiza budget travel",
  ],
  openGraph: {
    title: "Ibiza 4-Day Itinerary 2026: Trip Planner",
    description:
      "UNESCO fortress town by day, global electronic music capital by night — your complete 4-day Ibiza itinerary covering every budget.",
    url: "https://www.incredibleitinerary.com/blog/ibiza-4-days",
    siteName: "IncredibleItinerary",
    type: "article",
    locale: "en_GB",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Ibiza Dalt Vila old town at sunset with Mediterranean sea and harbour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibiza 4-Day Itinerary 2026: Trip Planner",
    description:
      "Dalt Vila, Café del Mar, hidden coves, Formentera, and the club scene — complete 4-day Ibiza guide.",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/ibiza-4-days",
  },
};

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Ibiza in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "Plan 4 days in Ibiza with day-by-day itineraries for budget, mid-range, and luxury travellers. Covers Dalt Vila, Café del Mar, clubs, Formentera, and secret beaches.",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      datePublished: "2026-01-15",
      dateModified: "2026-04-05",
      url: "https://www.incredibleitinerary.com/blog/ibiza-4-days",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Ibiza 4 Days", item: "https://www.incredibleitinerary.com/blog/ibiza-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Ibiza",
      description:
        "Ibiza is a Spanish Balearic island that exists simultaneously as a UNESCO World Heritage medieval fortress town and the global capital of electronic dance music, home to crystal-clear Mediterranean coves and world-famous clubs.",
      url: "https://www.incredibleitinerary.com/blog/ibiza-4-days",
      touristType: ["Club culture", "Beach traveller", "History lover", "Luxury traveller", "Budget traveller"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 38.9067,
        longitude: 1.4206,
      },
      containedInPlace: {
        "@type": "Country",
        name: "Spain",
      },
    },
  ],
};

/* ── Page component ──────────────────────────────────────────────────────── */
export default function IbizaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IbizaClient />
    </>
  );
}
