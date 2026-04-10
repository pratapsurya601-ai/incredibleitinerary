import type { Metadata } from "next";
import ChilePatagoniaClient from "./ChilePatagoniaClient";

export const metadata: Metadata = {
  title: "Patagonia in 7 Days: Torres del Paine, W Trek, Glaciers & Penguins (2026)",
  description: "Complete 7-day Patagonia itinerary: W Trek booking secrets, Glaciar Grey, penguin colonies, real USD costs from $70/day, and everything Indians need to know about Chile visas.",
  keywords: [
    "patagonia itinerary 7 days",
    "torres del paine w trek",
    "chile travel guide 2026",
    "patagonia trekking guide",
    "glaciar grey chile",
    "torres del paine budget",
  ],
  openGraph: {
    title: "Patagonia in 7 Days: W Trek, Torres del Paine & Glaciers (2026)",
    description: "W Trek booking secrets, refugio reservations, Glaciar Grey, and real costs — complete 7-day Patagonia travel guide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1531761535209-180857e963b9?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Torres del Paine granite towers Patagonia Chile",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patagonia 7 Days (2026)",
    description: "W Trek booking secrets, Glaciar Grey, penguins — complete Chile Patagonia guide.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/chile-patagonia-7-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Patagonia in 7 Days: Torres del Paine, W Trek, Glaciers & Penguins (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1531761535209-180857e963b9?w=1200&q=80",
      description:
        "Complete 7-day Patagonia itinerary covering W Trek, Glaciar Grey, Torres del Paine, and the Punta Arenas penguin colony.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Patagonia 7 Days",
          item: "https://www.incredibleitinerary.com/blog/chile-patagonia-7-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Torres del Paine, Patagonia, Chile",
      description:
        "One of the last genuinely wild places on earth — granite towers, blue glaciers, and the W Trek, the most iconic multi-day hike in the Americas.",
      geo: { "@type": "GeoCoordinates", latitude: -51.2538, longitude: -72.9249 },
      touristType: ["Adventure travelers", "Trekkers", "Wildlife enthusiasts", "Photographers"],
    },
  ],
};

export default function ChilePatagoniaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ChilePatagoniaClient />
    </>
  );
}
