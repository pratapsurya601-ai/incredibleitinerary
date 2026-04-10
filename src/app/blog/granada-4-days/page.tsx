import type { Metadata } from "next";
import GranadaClient from "./GranadaClient";

/* ── Metadata ──────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Granada 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Granada trip in 4 days. Plan the perfect 4-day Granada itinerary with our expert guide. Alhambra Palace, free tapas, Albaicín quarter,.",
  keywords: [
    "Granada travel guide",
    "Granada itinerary 4 days",
    "Alhambra Palace visit",
    "Granada Spain budget travel",
    "Albaicin quarter Granada",
    "Sacromonte flamenco",
    "free tapas Granada",
    "Generalife Gardens",
    "Granada visa requirements",
    "Schengen visa Spain",
    "Granada things to do",
    "Andalusia travel guide",
  ],
  openGraph: {
    title: "Granada 4-Day Itinerary 2026: Trip Planner",
    description:
      "Alhambra at golden hour, free tapas with every drink, flamenco in candlelit caves — Granada is Spain's most romantic city. Full itinerary from €45/day.",
    url: "https://incredibleitinerary.com/blog/granada-4-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://source.unsplash.com/1200x630/?granada,alhambra,spain",
        width: 1200,
        height: 630,
        alt: "Granada Alhambra Palace with Sierra Nevada mountains backdrop",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Granada 4-Day Itinerary 2026: Trip Planner",
    description:
      "Alhambra Palace, free tapas, Sacromonte flamenco caves — Granada's magic captured in a 4-day guide from €45/day.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/granada-4-days",
  },
};

/* ── JSON-LD ────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Granada in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "A comprehensive 4-day Granada itinerary covering the Alhambra, Albaicín, Sacromonte and Granada's legendary free tapas culture, with plans from €45 to €250 per day.",
      image: "https://source.unsplash.com/1200x630/?granada,alhambra,spain",
      datePublished: "2026-01-15",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/granada-4-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Granada 4-Day Guide",
          item: "https://incredibleitinerary.com/blog/granada-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Granada",
      description:
        "A historic Andalusian city in southern Spain, home to the UNESCO-listed Alhambra Palace, the Moorish Albaicín quarter, Sacromonte flamenco caves, and Spain's most celebrated free tapas culture.",
      url: "https://incredibleitinerary.com/blog/granada-4-days",
      touristType: ["Culture", "History", "Food & Wine", "Architecture", "Flamenco"],
      geo: { "@type": "GeoCoordinates", latitude: 37.1773, longitude: -3.5986 },
    },
  ],
};

/* ── Page component ────────────────────────────────────────────────────── */
export default function GranadaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GranadaClient />
    </>
  );
}
