import type { Metadata } from "next";
import EthiopiaLalibelaClient from "./EthiopiaLalibelaClient";

/* ── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Lalibela, Ethiopia 5-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Lalibela, Ethiopia trip in 5 days. Complete Lalibela 5-day itinerary covering the 11 UNESCO rock-hewn churches, Bet Giyorgis, Timkat Festival,.",
  keywords: [
    "Lalibela Ethiopia travel guide",
    "Lalibela rock churches",
    "Ethiopia 5 day itinerary",
    "Bet Giyorgis church",
    "Timkat festival Ethiopia",
    "Ethiopia travel guide 2026",
    "Lalibela budget itinerary",
    "Ethiopia e-visa",
    "Addis Ababa travel",
    "Ethiopia UNESCO churches",
  ],
  openGraph: {
    title: "Lalibela, Ethiopia 5-Day Itinerary 2026: Trip Planner",
    description:
      "Eleven medieval churches carved from solid volcanic rock 800 years ago by a king who wanted to build a New Jerusalem in Africa. Complete 5-day Ethiopia itinerary from $80/day.",
    url: "https://incredibleitinerary.com/blog/ethiopia-lalibela-5-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://incredibleitinerary.com/og/ethiopia-lalibela-5-days.jpg",
        width: 1200,
        height: 630,
        alt: "Lalibela rock-hewn church Bet Giyorgis carved from solid rock Ethiopia",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lalibela, Ethiopia 5-Day Itinerary 2026: Trip Planner",
    description:
      "Complete Lalibela itinerary from $80/day. 11 rock-hewn churches, Timkat Festival, Addis Ababa — day-by-day plans for every budget.",
    images: ["https://incredibleitinerary.com/og/ethiopia-lalibela-5-days.jpg"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/ethiopia-lalibela-5-days",
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Lalibela, Ethiopia in 5 Days: The Complete Rock Church Guide (Budget to Luxury, 2026)",
    description:
      "Complete Lalibela 5-day itinerary covering the 11 UNESCO rock-hewn churches, Addis Ababa, and Ethiopian culture with budget to luxury plans.",
    image: "https://incredibleitinerary.com/og/ethiopia-lalibela-5-days.jpg",
    datePublished: "2026-01-10",
    dateModified: "2026-04-01",
    author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://incredibleitinerary.com/blog/ethiopia-lalibela-5-days" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", position: 3, name: "Ethiopia Lalibela 5 Days", item: "https://incredibleitinerary.com/blog/ethiopia-lalibela-5-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Lalibela — Rock-Hewn Churches, Ethiopia",
    description:
      "Home to eleven medieval churches carved from solid volcanic rock in the 12th century, Lalibela is one of Africa's greatest UNESCO World Heritage Sites and the holiest city in Ethiopian Orthodox Christianity.",
    url: "https://incredibleitinerary.com/blog/ethiopia-lalibela-5-days",
    touristType: ["Cultural Traveller", "Religious Pilgrim", "History Enthusiast"],
    geo: { "@type": "GeoCoordinates", latitude: 12.0317, longitude: 39.0472 },
    includesAttraction: [
      { "@type": "TouristAttraction", name: "Bet Giyorgis (Church of St George)" },
      { "@type": "TouristAttraction", name: "Bet Medhane Alem" },
      { "@type": "TouristAttraction", name: "Lalibela Rock-Hewn Churches (UNESCO)" },
      { "@type": "TouristAttraction", name: "Timkat Festival" },
    ],
  },
];

/* ── Page Component ───────────────────────────────────────────────────────── */
export default function EthiopiaLalibelaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EthiopiaLalibelaClient />
    </>
  );
}
