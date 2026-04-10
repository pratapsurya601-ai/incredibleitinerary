import type { Metadata } from "next";
import KrugerParkClient from "./KrugerParkClient";

/* ── Metadata ──────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Kruger National Park 5-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Kruger National Park trip in 5 days. Plan the perfect 5-day Kruger National Park safari. Big Five game drives, best camps, self-drive tips, Sabi.",
  keywords: [
    "Kruger National Park guide",
    "Kruger 5 days itinerary",
    "Kruger self-drive safari",
    "Big Five safari South Africa",
    "Kruger Park camps Satara Lower Sabie",
    "Sabi Sands game reserve",
    "Panorama Route Blyde River Canyon",
    "South Africa safari budget",
    "South Africa visa Indian passport",
    "Kruger National Park tips",
  ],
  openGraph: {
    title: "Kruger National Park 5-Day Itinerary 2026: Trip Planner",
    description:
      "Africa's greatest self-drive safari — 20,000 sq km, the Big Five, and lions crossing the road at dawn. Our complete 5-day guide from $120/day.",
    url: "https://www.incredibleitinerary.com/blog/kruger-park-5-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Kruger National Park South Africa lion pride sunset safari game drive",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kruger National Park 5-Day Itinerary 2026: Trip Planner",
    description:
      "Self-drive the Big Five in Africa's most iconic national park. Complete 5-day itinerary from $120/day.",
    images: ["https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/kruger-park-5-days",
  },
};

/* ── JSON-LD ────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Kruger National Park in 5 Days: The Complete Safari Guide (Budget to Luxury, 2026)",
      description:
        "A complete 5-day Kruger National Park safari guide covering self-drive game drives, the Big Five, best camps, Sabi Sands, and the Panorama Route — for every budget.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" },
      },
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      url: "https://www.incredibleitinerary.com/blog/kruger-park-5-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Kruger Park 5-Day Guide",
          item: "https://www.incredibleitinerary.com/blog/kruger-park-5-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Kruger National Park",
      description:
        "Africa's original and greatest safari park — 20,000 sq km of wilderness in South Africa hosting the Big Five and over 500 bird species, best experienced by self-drive or guided game drive.",
      url: "https://www.incredibleitinerary.com/blog/kruger-park-5-days",
      touristType: ["Safari Traveller", "Wildlife Photographer", "Adventure Traveller"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -23.9884,
        longitude: 31.5547,
      },
      containedInPlace: {
        "@type": "Country",
        name: "South Africa",
      },
    },
  ],
};

/* ── Page Component ─────────────────────────────────────────────────────── */
export default function KrugerParkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KrugerParkClient />
    </>
  );
}
