import type { Metadata } from "next";
import MedellinClient from "./MedellinClient";

/* ── JSON-LD ────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/medellin-4-days#article",
      "headline": "Medellín in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      "description":
        "Complete 4-day Medellín itinerary covering budget, mid-range and luxury options — El Poblado, Guatapé, Comuna 13, Botero Plaza, Metrocable views, visa info and insider tips.",
      "image": "https://incredibleitinerary.com/og/medellin-4-days.jpg",
      "author": { "@type": "Person", "name": "Surya Pratap", "url": "https://www.incredibleitinerary.com/about" },
      "publisher": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" },
      },
      "datePublished": "2026-01-10",
      "dateModified": "2026-04-05",
      "url": "https://incredibleitinerary.com/blog/medellin-4-days",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Medellín 4-Day Guide", "item": "https://incredibleitinerary.com/blog/medellin-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Medellín",
      "description":
        "Colombia's second city — winner of the Wall Street Journal Most Innovative City award, famous for its cable cars, eternal spring climate, Botero sculptures, flower festival, and the most dramatic urban transformation story of the 21st century.",
      "url": "https://incredibleitinerary.com/blog/medellin-4-days",
      "touristType": ["Adventure Tourist", "Cultural Tourist", "Budget Traveller", "Luxury Traveller"],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 6.2442,
        "longitude": -75.5812,
      },
      "containedInPlace": { "@type": "Country", "name": "Colombia" },
    },
  ],
};

/* ── Metadata ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Medellín in 4 Days: Complete Travel Guide 2026 (Budget to Luxury) | IncredibleItinerary",
  description:
    "Your complete 4-day Medellín itinerary: cable cars over the comunas, Guatapé rock climb, Botero Plaza, Comuna 13 graffiti tours, visa info, budget breakdown and pro tips for 2026.",
  keywords: [
    "Medellín travel guide",
    "Medellín 4 days",
    "Medellín itinerary 2026",
    "Guatapé El Peñol",
    "Medellín cable car",
    "Comuna 13 graffiti tour",
    "Colombia travel",
    "Medellín budget guide",
    "Feria de las Flores",
    "Botero Plaza Medellín",
  ],
  openGraph: {
    title: "Medellín in 4 Days: Complete Travel Guide 2026 | IncredibleItinerary",
    description:
      "From cable cars over the hillside comunas to 740 steps up El Peñol rock — the complete 4-day Medellín guide for every budget.",
    url: "https://incredibleitinerary.com/blog/medellin-4-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://incredibleitinerary.com/og/medellin-4-days.jpg",
        width: 1200,
        height: 630,
        alt: "Medellín Colombia cable car over hillside comunas with city skyline below",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medellín in 4 Days: Complete Travel Guide 2026",
    description:
      "Cable cars, graffiti tours, orchids and the world's most remarkable urban transformation — 4-day Medellín guide for every budget.",
    images: ["https://incredibleitinerary.com/og/medellin-4-days.jpg"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/medellin-4-days",
  },
};

/* ── Page component ─────────────────────────────────────────────────────── */
export default function MedellinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MedellinClient />
    </>
  );
}
