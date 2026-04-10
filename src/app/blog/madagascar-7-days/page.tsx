import type { Metadata } from "next";
import MadagascarClient from "./MadagascarClient";

/* ── Metadata ──────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Madagascar 7-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Madagascar trip in 7 days. Plan the perfect 7-day Madagascar trip. Avenue of the Baobabs, Andasibe lemurs, Tsingy de Bemaraha, Nosy Be beaches —.",
  keywords: [
    "Madagascar travel guide",
    "Madagascar 7 days itinerary",
    "Avenue of the Baobabs",
    "ring-tailed lemurs Madagascar",
    "Andasibe-Mantadia National Park",
    "Tsingy de Bemaraha UNESCO",
    "Ranomafana National Park",
    "Madagascar budget travel",
    "Madagascar visa Indian passport",
    "Nosy Be Madagascar",
  ],
  openGraph: {
    title: "Madagascar 7-Day Itinerary 2026: Trip Planner",
    description:
      "90% of Madagascar's wildlife exists nowhere else on Earth. Our complete 7-day guide covers lemurs, baobabs, tsingy, and beaches — budget to luxury.",
    url: "https://www.incredibleitinerary.com/blog/madagascar-7-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Madagascar Avenue of the Baobabs ancient trees at sunset unique Africa",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madagascar 7-Day Itinerary 2026: Trip Planner",
    description:
      "Lemurs, baobabs, tsingy, and pristine beaches — your complete 7-day Madagascar itinerary from $80/day.",
    images: ["https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/madagascar-7-days",
  },
};

/* ── JSON-LD ────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Madagascar in 7 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "A complete 7-day Madagascar travel guide covering the Avenue of the Baobabs, lemur parks, Tsingy de Bemaraha, Nosy Be, and full itineraries for every budget.",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" },
      },
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      url: "https://www.incredibleitinerary.com/blog/madagascar-7-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Madagascar 7-Day Guide",
          item: "https://www.incredibleitinerary.com/blog/madagascar-7-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Madagascar",
      description:
        "The world's most biodiverse island per square kilometre, where 90% of wildlife exists nowhere else — ring-tailed lemurs, panther chameleons, baobab trees, and tsingy limestone karst.",
      url: "https://www.incredibleitinerary.com/blog/madagascar-7-days",
      touristType: ["Wildlife Traveller", "Adventure Traveller", "Nature Photographer"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -18.7669,
        longitude: 46.8691,
      },
      containedInPlace: {
        "@type": "Country",
        name: "Madagascar",
      },
    },
  ],
};

/* ── Page Component ─────────────────────────────────────────────────────── */
export default function MadagascarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MadagascarClient />
    </>
  );
}
