import type { Metadata } from "next";
import MexicoCityClient from "./MexicoCityClient";

/* ── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Mexico City 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Mexico City trip in 4 days. Plan the perfect 4-day Mexico City trip — Zócalo, Teotihuacan pyramids, Frida Kahlo Museum, tacos al pastor, and.",
  keywords: [
    "Mexico City itinerary",
    "Mexico City 4 days",
    "Mexico City travel guide",
    "CDMX budget travel",
    "Teotihuacan day trip",
    "Frida Kahlo Museum",
    "Mexico City 2026",
    "North America travel",
  ],
  openGraph: {
    title: "Mexico City 4-Day Itinerary 2026: Trip Planner",
    description:
      "22 million people, Diego Rivera murals, the world's best tacos al pastor, and a neighbourhood that out-Brooklyns Brooklyn. Your complete 4-day Mexico City guide.",
    url: "https://incredibleitinerary.com/blog/mexico-city-4-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://source.unsplash.com/1200x630/?mexico+city+zocalo+cathedral",
        width: 1200,
        height: 630,
        alt: "Mexico City Zócalo with Metropolitan Cathedral and National Palace",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mexico City 4-Day Itinerary 2026: Trip Planner",
    description:
      "Budget to luxury itineraries, visa info, budget breakdown, and insider tips for Mexico City. From $50/day.",
    images: [
      "https://source.unsplash.com/1200x630/?mexico+city+zocalo+cathedral",
    ],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/mexico-city-4-days",
  },
};

/* ── JSON-LD Structured Data ──────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/mexico-city-4-days#article",
      headline:
        "Mexico City in 4 Days: The Complete Guide (Budget to Luxury, 2026)",
      description:
        "A complete 4-day Mexico City itinerary covering the Zócalo, Teotihuacan, Frida Kahlo Museum, Xochimilco, and the best tacos al pastor on earth — for every budget.",
      image:
        "https://source.unsplash.com/1200x630/?mexico+city+zocalo+cathedral",
      datePublished: "2026-01-15",
      dateModified: "2026-04-05",
      author: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://incredibleitinerary.com",
      },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: {
          "@type": "ImageObject",
          url: "https://incredibleitinerary.com/logo.png",
        },
      },
      mainEntityOfPage:
        "https://incredibleitinerary.com/blog/mexico-city-4-days",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://incredibleitinerary.com/blog/mexico-city-4-days#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mexico City 4-Day Guide",
          item: "https://incredibleitinerary.com/blog/mexico-city-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "@id":
        "https://incredibleitinerary.com/blog/mexico-city-4-days#destination",
      name: "Mexico City",
      description:
        "A megalopolis of 22 million built on a drained Aztec lake, home to world-class museums, Diego Rivera murals, and some of the planet's finest street food.",
      url: "https://incredibleitinerary.com/blog/mexico-city-4-days",
      touristType: ["Cultural tourists", "Food lovers", "History enthusiasts"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.4326,
        longitude: -99.1332,
      },
      containedInPlace: {
        "@type": "Country",
        name: "Mexico",
      },
    },
  ],
};

/* ── Page Component ───────────────────────────────────────────────────────── */
export default function MexicoCityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MexicoCityClient />
    </>
  );
}
