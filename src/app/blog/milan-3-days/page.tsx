import type { Metadata } from "next";
import MilanClient from "./MilanClient";

/* ── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Milan 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Milan trip in 3 days. Everything you need for 3 days in Milan — the Duomo, Leonardo's Last Supper, Galleria Vittorio Emanuele II, Navigli canals.",
  keywords: [
    "Milan 3 days itinerary",
    "Milan travel guide 2026",
    "Milan Duomo",
    "Last Supper Milan",
    "Galleria Vittorio Emanuele II",
    "Lake Como day trip",
    "Milan budget travel",
    "Milan luxury travel",
  ],
  openGraph: {
    title: "Milan 3-Day Itinerary 2026: Trip Planner",
    description:
      "Duomo rooftop walks, Leonardo's Last Supper, Navigli aperitivo hour, and a day trip to Lake Como — the definitive 3-day Milan itinerary.",
    url: "https://incredibleitinerary.com/blog/milan-3-days",
    siteName: "IncredibleItinerary",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Milan Duomo Cathedral with Galleria Vittorio Emanuele II arcade Italy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milan 3-Day Itinerary 2026: Trip Planner",
    description:
      "Duomo rooftop walks, Leonardo's Last Supper, Navigli aperitivo hour, and a day trip to Lake Como.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/milan-3-days",
  },
};

/* ── JSON-LD ───────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/milan-3-days#article",
      headline: "Milan in 3 Days: The Complete Guide (Budget to Luxury, 2026)",
      description:
        "Everything you need for 3 perfect days in Milan — the Duomo, Leonardo's Last Supper, Galleria Vittorio Emanuele II, Navigli canals, and day trips to Lake Como and Verona.",
      image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=1200&q=80",
      datePublished: "2026-01-15",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/milan-3-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Milan 3 Days", item: "https://incredibleitinerary.com/blog/milan-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Milan",
      description:
        "Milan is Italy's capital of fashion, finance, and culture — home to the Duomo Cathedral, Leonardo da Vinci's Last Supper, and the world-famous Galleria Vittorio Emanuele II.",
      geo: { "@type": "GeoCoordinates", latitude: 45.4654219, longitude: 9.1859243 },
      touristType: ["Cultural tourists", "Fashion travelers", "Art lovers", "Foodies"],
      hasMap: "https://maps.google.com/?q=Milan,Italy",
    },
  ],
};

/* ── Page component ───────────────────────────────────────────────────────── */
export default function MilanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MilanClient />
    </>
  );
}
