import type { Metadata } from "next";
import NaplesPompeiiClient from "./NaplesPompeiiClient";

/* ── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Naples & Pompeii 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Naples & Pompeii trip in 4 days. The definitive 4-day Naples and Pompeii guide — Pompeii ruins, Mount Vesuvius hike, Amalfi Coast day trip,.",
  keywords: [
    "Naples Pompeii 4 days itinerary",
    "Naples travel guide 2026",
    "Pompeii day trip",
    "Mount Vesuvius hike",
    "Amalfi Coast day trip from Naples",
    "Capri day trip",
    "best pizza Naples",
    "Naples budget travel",
  ],
  openGraph: {
    title: "Naples & Pompeii 4-Day Itinerary 2026: Trip Planner",
    description:
      "Pompeii frozen in time, Vesuvius crater hike, the best pizza on Earth, and the Amalfi Coast — the definitive 4-day Naples guide.",
    url: "https://incredibleitinerary.com/blog/naples-pompeii-4-days",
    siteName: "IncredibleItinerary",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Pompeii ruins with Mount Vesuvius volcano backdrop Naples Italy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naples & Pompeii 4-Day Itinerary 2026: Trip Planner",
    description:
      "Pompeii frozen in time, Vesuvius crater hike, the best pizza on Earth, and the Amalfi Coast.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/naples-pompeii-4-days",
  },
};

/* ── JSON-LD ───────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/naples-pompeii-4-days#article",
      headline: "Naples & Pompeii in 4 Days: The Complete Guide (Budget to Luxury, 2026)",
      description:
        "Pompeii's 2,000-year-old streets, an active volcano hike, the world's best pizza, and the Amalfi Coast — 4 unforgettable days in southern Italy's most raw and beautiful city.",
      image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80",
      datePublished: "2026-01-20",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/naples-pompeii-4-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Naples & Pompeii 4 Days", item: "https://incredibleitinerary.com/blog/naples-pompeii-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Naples",
      description:
        "Naples is the chaotic, magnificent capital of southern Italy — birthplace of pizza, gateway to Pompeii and Vesuvius, and home to one of the world's greatest archaeological museums.",
      geo: { "@type": "GeoCoordinates", latitude: 40.8517793, longitude: 14.2681244 },
      touristType: ["History enthusiasts", "Foodies", "Adventure travelers", "Cultural tourists"],
      hasMap: "https://maps.google.com/?q=Naples,Italy",
    },
  ],
};

/* ── Page component ───────────────────────────────────────────────────────── */
export default function NaplesPompeiiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NaplesPompeiiClient />
    </>
  );
}
