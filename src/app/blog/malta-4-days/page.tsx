import type { Metadata } from "next";
import MaltaClient from "./MaltaClient";

/* ── SEO Metadata ───────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Malta 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Malta trip in 4 days. Plan the perfect 4-day Malta itinerary — Valletta, Mdina, Blue Lagoon, Gozo, and the Hypogeum. Visa info, budget.",
  keywords: [
    "Malta travel guide",
    "Malta 4 days itinerary",
    "Valletta travel guide",
    "Blue Lagoon Malta",
    "Mdina silent city",
    "Gozo island Malta",
    "Malta budget travel 2026",
    "Hal Saflieni Hypogeum",
  ],
  openGraph: {
    title: "Malta 4-Day Itinerary 2026: Trip Planner",
    description:
      "The world's most concentrated history: Valletta's Baroque grandeur, Mdina's medieval streets, the Blue Lagoon on Comino, and a 5,000-year-old underground temple.",
    url: "https://incredibleitinerary.com/blog/malta-4-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555629151-5738e6afe3a7?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Valletta Malta baroque capital city with Grand Harbour Mediterranean sea",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malta 4-Day Itinerary 2026: Trip Planner",
    description:
      "Day-by-day Malta itinerary — Valletta, Mdina, Blue Lagoon, Gozo, Hypogeum. Budget from €55/day.",
    images: ["https://images.unsplash.com/photo-1555629151-5738e6afe3a7?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/malta-4-days",
  },
};

/* ── JSON-LD Structured Data ────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Malta in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "Complete 4-day Malta travel guide covering Valletta, Mdina, Blue Lagoon, Gozo, and the Ħal Saflieni Hypogeum across all budgets.",
      image: "https://images.unsplash.com/photo-1555629151-5738e6afe3a7?w=1200&q=80",
      datePublished: "2026-01-20",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/malta-4-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Malta 4 Days",
          item: "https://incredibleitinerary.com/blog/malta-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Malta",
      description:
        "The smallest EU capital in the world with more UNESCO World Heritage sites per square kilometre than any country on Earth. Home to Valletta, Mdina, the Blue Lagoon, Gozo, and the world's only prehistoric underground temple.",
      url: "https://incredibleitinerary.com/blog/malta-4-days",
      touristType: ["History Enthusiasts", "Diving", "Mediterranean Travellers", "Culture Seekers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 35.9375,
        longitude: 14.3754,
      },
      containedInPlace: {
        "@type": "Country",
        name: "Malta",
      },
    },
  ],
};

/* ── Page Component ─────────────────────────────────────────────────────── */
export default function MaltaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MaltaClient />
    </>
  );
}
