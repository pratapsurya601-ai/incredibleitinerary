import type { Metadata } from "next";
import AntiguaGuatemalaClient from "./AntiguaGuatemalaClient";

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Antigua Guatemala in 4 Days: The Complete Guide (Budget to Luxury, 2026)",
    "description": "A complete 4-day Antigua Guatemala travel guide covering colonial ruins, volcanic hikes, Lake Atitlán day trips, language schools, and Semana Santa — from $40/day to $200/day.",
    "image": "https://incredibleitinerary.com/og/antigua-guatemala-4-days.jpg",
    "author": { "@type": "Person", "name": "Surya Pratap", "url": "https://www.incredibleitinerary.com/about" },
    "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" } },
    "datePublished": "2026-01-20",
    "dateModified": "2026-04-01",
    "mainEntityOfPage": "https://incredibleitinerary.com/blog/antigua-guatemala-4-days"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Antigua Guatemala 4 Days", "item": "https://incredibleitinerary.com/blog/antigua-guatemala-4-days" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Antigua Guatemala",
    "description": "A UNESCO World Heritage colonial city at 1,500m altitude surrounded by three volcanoes, famous for preserved Spanish Baroque architecture, ruins, and Semana Santa processions.",
    "geo": { "@type": "GeoCoordinates", "latitude": 14.5586, "longitude": -90.7295 },
    "touristType": ["Cultural Traveller", "History Enthusiast", "Adventure Traveller", "Language Student"],
    "url": "https://incredibleitinerary.com/blog/antigua-guatemala-4-days"
  }
];

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Antigua Guatemala 4-Day Itinerary 2026: Trip Planner",
  description: "Plan your Antigua Guatemala trip in 4 days. 4-day Antigua Guatemala itinerary covering colonial ruins, Volcán Acatenango, coffee fincas, language schools, and Semana Santa — from $40/day to $200/day.",
  keywords: ["Antigua Guatemala itinerary", "Antigua 4 days", "Volcán Acatenango hike", "Lake Atitlán day trip", "Semana Santa Antigua", "Guatemala travel guide", "colonial ruins Guatemala"],
  openGraph: {
    title: "Antigua Guatemala 4-Day Itinerary 2026: Trip Planner",
    description: "4-day Antigua Guatemala itinerary — colonial ruins, volcanoes, Lake Atitlán — from $40/day to $200/day.",
    url: "https://incredibleitinerary.com/blog/antigua-guatemala-4-days",
    siteName: "IncredibleItinerary",
    images: [{ url: "https://incredibleitinerary.com/og/antigua-guatemala-4-days.jpg", width: 1200, height: 630, alt: "Antigua Guatemala colonial yellow arch with Agua Volcano in background" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antigua Guatemala 4-Day Itinerary 2026: Trip Planner",
    description: "4-day Antigua Guatemala itinerary — ruins, volcanoes, Lake Atitlán, $40–$200/day.",
    images: ["https://incredibleitinerary.com/og/antigua-guatemala-4-days.jpg"],
  },
  alternates: { canonical: "https://incredibleitinerary.com/blog/antigua-guatemala-4-days" },
};

/* ── Page Component ───────────────────────────────────────────────────────── */
export default function AntiguaGuatemalaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AntiguaGuatemalaClient />
    </>
  );
}
