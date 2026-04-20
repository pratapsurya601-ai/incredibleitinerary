import type { Metadata } from "next";
import MauritiusClient from "./MauritiusClient";

/* ── Page metadata ──────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Mauritius 5-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Mauritius trip in 5 days. Plan the perfect 5-day Mauritius itinerary — from the underwater waterfall illusion to Île aux Cerfs, Black River.",
  keywords: [
    "Mauritius travel guide",
    "Mauritius 5 days itinerary",
    "Mauritius underwater waterfall",
    "Île aux Cerfs Mauritius",
    "Black River Gorges",
    "Chamarel Seven Coloured Earths",
    "Mauritius budget travel",
    "Mauritius luxury resorts",
    "Indian Ocean islands",
    "Africa travel guide",
  ],
  openGraph: {
    title: "Mauritius 5-Day Itinerary 2026: Trip Planner",
    description:
      "An underwater waterfall that isn't really a waterfall, 7 cuisines on one island, and beaches where the ocean gradient goes turquoise to cobalt in 10 metres. Your complete 2026 Mauritius guide.",
    url: "https://incredibleitinerary.com/blog/mauritius-5-days",
    siteName: "IncredibleItinerary",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Mauritius turquoise lagoon with underwater waterfall illusion and tropical beach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mauritius 5-Day Itinerary 2026: Trip Planner",
    description:
      "Underwater waterfall, 7 cuisines, Île aux Cerfs lagoon — your complete Mauritius itinerary from $130/day budget to One&Only luxury.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/mauritius-5-days",
  },
};

/* ── JSON-LD structured data ────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Mauritius in 5 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "A complete 5-day Mauritius itinerary covering Île aux Cerfs, Black River Gorges, the underwater waterfall, Chamarel, Port Louis, and Blue Bay Marine Park — with budget plans from $130 to $700/day.",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://incredibleitinerary.com",
      },
      datePublished: "2026-01-20",
      dateModified: "2026-04-05",
      url: "https://incredibleitinerary.com/blog/mauritius-5-days",
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mauritius 5 Days",
          item: "https://incredibleitinerary.com/blog/mauritius-5-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Mauritius",
      description:
        "A diverse island nation in the Indian Ocean known for its lagoons, reefs, beaches, and remarkable multicultural cuisine blending Indian, Chinese, French, and Creole influences.",
      url: "https://incredibleitinerary.com/blog/mauritius-5-days",
      touristType: ["Beach lovers", "Foodies", "Water sports enthusiasts", "Nature lovers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -20.3484,
        longitude: 57.5522,
      },
      containedInPlace: {
        "@type": "Country",
        name: "Mauritius",
      },
    },
  ],
};

/* ── Page component ─────────────────────────────────────────────────────── */
export default function MauritiusPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MauritiusClient />
    </>
  );
}
