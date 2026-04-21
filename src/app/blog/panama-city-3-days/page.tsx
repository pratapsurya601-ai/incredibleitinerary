import type { Metadata } from "next";
import PanamaCityClient from "./PanamaCityClient";

/* ── JSON-LD ────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/panama-city-3-days#article",
      "headline": "Panama City in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      "description":
        "Complete 3-day Panama City itinerary covering budget, mid-range and luxury options — Panama Canal, Casco Viejo, Soberanía birding, San Blas Islands, visa info and insider tips.",
      "image": "https://incredibleitinerary.com/og/panama-city-3-days.jpg",
      "author": { "@type": "Person", "name": "Surya Pratap", "url": "https://www.incredibleitinerary.com/about" },
      "publisher": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" },
      },
      "datePublished": "2026-01-15",
      "dateModified": "2026-04-05",
      "url": "https://incredibleitinerary.com/blog/panama-city-3-days",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Panama City 3-Day Guide", "item": "https://incredibleitinerary.com/blog/panama-city-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Panama City",
      "description":
        "The Hub of the Americas — where supertankers cross a continent through a canal that took 25,000 workers' lives to build, where a UNESCO colonial old town sits minutes from a glass-tower skyline, and where the largest urban rainforest in the world provides harpy eagles and 525 bird species within city limits.",
      "url": "https://incredibleitinerary.com/blog/panama-city-3-days",
      "touristType": ["Adventure Tourist", "Cultural Tourist", "History Enthusiast", "Birdwatcher"],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 8.9936,
        "longitude": -79.5197,
      },
      "containedInPlace": { "@type": "Country", "name": "Panama" },
    },
  ],
};


/* ── Metadata ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Panama City 3-Day Itinerary (2026): Canal, Casco Viejo + San Blas Day Trip",
  description:
    "3-day Panama City guide — watch supertankers cross at Miraflores Locks, UNESCO Casco Viejo, fly to 365-island San Blas, Soberanía birding. Budget from $60/day, Indian visa info included.",
  keywords: [
    "Panama City travel guide",
    "Panama City 3 days",
    "Panama Canal visit",
    "Casco Viejo Panama",
    "San Blas Islands day trip",
    "Soberania National Park birding",
    "Panama travel 2026",
    "Panama City itinerary",
    "Miraflores Locks",
    "Panama tourist visa India",
  ],
  openGraph: {
    title: "Panama City 3-Day Itinerary (2026): Canal, Casco Viejo + San Blas",
    description:
      "Watch supertankers cross at Miraflores, UNESCO Casco Viejo, fly to 365-island San Blas. Budget from $60/day, Indian visa info.",
    url: "https://incredibleitinerary.com/blog/panama-city-3-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://incredibleitinerary.com/og/panama-city-3-days.jpg",
        width: 1200,
        height: 630,
        alt: "Panama Canal Miraflores Locks with ships passing and Panama City skyline",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panama City in 3 Days: Complete Travel Guide 2026",
    description:
      "From the Canal to Casco Viejo to the San Blas Islands — the complete 3-day Panama City guide for every budget.",
    images: ["https://incredibleitinerary.com/og/panama-city-3-days.jpg"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/panama-city-3-days",
  },
};

/* ── Page component ─────────────────────────────────────────────────────── */
export default function PanamaCityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PanamaCityClient />
    </>
  );
}
