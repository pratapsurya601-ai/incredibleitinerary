import type { Metadata } from "next";
import OaxacaClient from "./OaxacaClient";

/* ── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Oaxaca 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Oaxaca trip in 4 days. Plan the perfect 4-day Oaxaca trip — Monte Albán ruins, mole negro, mezcal tastings, Día de los Muertos, and Hierve el.",
  keywords: [
    "Oaxaca itinerary",
    "Oaxaca 4 days",
    "Oaxaca travel guide",
    "Monte Albán day trip",
    "Oaxaca mole food guide",
    "Día de los Muertos Oaxaca",
    "Oaxaca mezcal",
    "Oaxaca 2026",
    "Mexico travel guide",
    "North America travel",
  ],
  openGraph: {
    title: "Oaxaca 4-Day Itinerary 2026: Trip Planner",
    description:
      "30-ingredient mole negro, Zapotec pyramids on a mountaintop, mezcal that shames tequila, and a Día de los Muertos that will change you. Your complete 4-day Oaxaca guide.",
    url: "https://incredibleitinerary.com/blog/oaxaca-4-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://source.unsplash.com/1200x630/?oaxaca+mexico+colonial+streets",
        width: 1200,
        height: 630,
        alt: "Oaxaca Mexico colonial streets with colorful buildings and Monte Albán ruins",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oaxaca 4-Day Itinerary 2026: Trip Planner",
    description:
      "Budget to luxury itineraries, visa info, food guide, and insider tips for Oaxaca, Mexico. From $45/day.",
    images: [
      "https://source.unsplash.com/1200x630/?oaxaca+mexico+colonial+streets",
    ],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/oaxaca-4-days",
  },
};

/* ── JSON-LD Structured Data ──────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/oaxaca-4-days#article",
      headline:
        "Oaxaca in 4 Days: The Complete Guide (Budget to Luxury, 2026)",
      description:
        "A complete 4-day Oaxaca itinerary covering Monte Albán, mole negro, mezcal culture, Hierve el Agua, and the most atmospheric Día de los Muertos celebrations in Mexico.",
      image:
        "https://source.unsplash.com/1200x630/?oaxaca+mexico+colonial+streets",
      datePublished: "2026-01-20",
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
        "https://incredibleitinerary.com/blog/oaxaca-4-days",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://incredibleitinerary.com/blog/oaxaca-4-days#breadcrumb",
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
          name: "Oaxaca 4-Day Guide",
          item: "https://incredibleitinerary.com/blog/oaxaca-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "@id": "https://incredibleitinerary.com/blog/oaxaca-4-days#destination",
      name: "Oaxaca",
      description:
        "Mexico's most culturally rich city — Zapotec heritage, the world's most complex cuisine, mezcal culture, and the planet's most atmospheric Día de los Muertos celebrations.",
      url: "https://incredibleitinerary.com/blog/oaxaca-4-days",
      touristType: [
        "Cultural tourists",
        "Food and drink enthusiasts",
        "Festival travelers",
        "Archaeology lovers",
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.0669,
        longitude: -96.7203,
      },
      containedInPlace: {
        "@type": "Country",
        name: "Mexico",
      },
    },
  ],
};

/* ── Page Component ───────────────────────────────────────────────────────── */
export default function OaxacaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OaxacaClient />
    </>
  );
}
