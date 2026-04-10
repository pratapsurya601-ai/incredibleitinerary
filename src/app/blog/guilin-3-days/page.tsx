import type { Metadata } from "next";
import GuilinClient from "./GuilinClient";

/* ── Metadata ──────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Guilin 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Guilin trip in 3 days. Complete Guilin travel guide: Li River cruise, Longji Rice Terraces, Yangshuo cycling, karst peaks. Budget ¥250/day to.",
  keywords: [
    "Guilin travel guide",
    "Li River cruise",
    "Longji Rice Terraces",
    "Yangshuo",
    "karst mountains China",
    "Guilin itinerary 3 days",
    "Dragon's Backbone terraces",
    "Guilin budget travel",
  ],
  openGraph: {
    title: "Guilin 3-Day Itinerary 2026: Trip Planner",
    description:
      "The landscape on every Chinese scroll painting and every 20-yuan banknote. Limestone peaks, cormorant fishermen, 2,300-year-old rice terraces and cycling through Yangshuo. The complete Guilin guide.",
    url: "https://www.incredibleitinerary.com/blog/guilin-3-days",
    siteName: "IncredibleItinerary",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Guilin China karst limestone peaks reflected in Li River morning mist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guilin 3-Day Itinerary 2026: Trip Planner",
    description:
      "Li River cruise, Longji Rice Terraces and Yangshuo karst cycling. Budget to luxury day-by-day itineraries.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/guilin-3-days",
  },
};

/* ── JSON-LD ────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Guilin in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "A complete Guilin travel guide covering the Li River cruise, Yangshuo karst cycling, Longji Rice Terraces and the most photographed landscape in China — with day-by-day itineraries for every budget.",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
      datePublished: "2026-01-15",
      dateModified: "2026-04-01",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://www.incredibleitinerary.com/blog/guilin-3-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Guilin 3-Day Guide", item: "https://www.incredibleitinerary.com/blog/guilin-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Guilin",
      description:
        "Guilin is one of China's most iconic landscapes — limestone karst peaks rising from flat plains, the Li River winding between them, Longji Rice Terraces carved into mountainsides, and Yangshuo's cycling countryside.",
      touristType: ["Nature lovers", "Photographers", "Adventure travellers", "Culture enthusiasts"],
      geo: { "@type": "GeoCoordinates", latitude: 25.2736, longitude: 110.2907 },
      containedInPlace: { "@type": "Country", name: "China" },
    },
  ],
};

/* ── Page component ─────────────────────────────────────────────────────── */
export default function GuilinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuilinClient />
    </>
  );
}
