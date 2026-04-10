import type { Metadata } from "next";
import LjubljanaClient from "./LjubljanaClient";

/* ── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Ljubljana 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Ljubljana trip in 3 days. The definitive 3-day Ljubljana guide — Ljubljana Castle, Triple Bridge, Dragon Bridge, Old Town cafes, Lake Bled,.",
  keywords: [
    "Ljubljana 3 days itinerary",
    "Ljubljana travel guide 2026",
    "Lake Bled day trip",
    "Ljubljana Castle",
    "Postojna Cave",
    "Dragon Bridge Ljubljana",
    "Slovenia travel",
    "Ljubljana budget travel",
  ],
  openGraph: {
    title: "Ljubljana 3-Day Itinerary 2026: Trip Planner",
    description:
      "Dragon bridges, a castle on a hill, Lake Bled's island church, and the most sustainable city in Europe — the definitive 3-day Ljubljana guide.",
    url: "https://incredibleitinerary.com/blog/ljubljana-3-days",
    siteName: "IncredibleItinerary",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555993539-0a3b0b57f4e1?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Ljubljana Slovenia Old Town with castle on hill and Triple Bridge over Ljubljanica River",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ljubljana 3-Day Itinerary 2026: Trip Planner",
    description:
      "Dragon bridges, castle on a hill, Lake Bled, and the most sustainable capital in Europe.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/ljubljana-3-days",
  },
};

/* ── JSON-LD ───────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/ljubljana-3-days#article",
      headline: "Ljubljana in 3 Days: The Complete Guide (Budget to Luxury, 2026)",
      description:
        "Ljubljana — Europe's most sustainable capital, with a pedestrianized old town, dragons on every bridge, a castle on a hill, and Lake Bled 55 minutes away. The complete 3-day guide.",
      image: "https://images.unsplash.com/photo-1555993539-0a3b0b57f4e1?w=1200&q=80",
      datePublished: "2026-02-01",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/ljubljana-3-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Ljubljana 3 Days", item: "https://incredibleitinerary.com/blog/ljubljana-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Ljubljana",
      description:
        "Ljubljana is Slovenia's compact, walkable, and extraordinarily liveable capital — with a baroque old town, a hilltop castle, the Plečnik-designed riverside market, and Lake Bled just 55 minutes away.",
      geo: { "@type": "GeoCoordinates", latitude: 46.0569465, longitude: 14.5057515 },
      touristType: ["Sustainable travelers", "City break tourists", "Outdoor enthusiasts", "Food lovers"],
      hasMap: "https://maps.google.com/?q=Ljubljana,Slovenia",
    },
  ],
};

/* ── Page component ───────────────────────────────────────────────────────── */
export default function LjubljanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LjubljanaClient />
    </>
  );
}
