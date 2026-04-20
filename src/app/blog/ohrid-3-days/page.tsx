import type { Metadata } from "next";
import OhridClient from "./OhridClient";

const siteUrl = "https://www.incredibleitinerary.com";

export const metadata: Metadata = {
  title: "Ohrid in 3 Days: Complete 2026 Travel Guide (Budget to Luxury)",
  description:
    "The perfect 3-day Ohrid itinerary — Lake Ohrid UNESCO, St John at Kaneo church, Samuel's Fortress, Ohrid trout restaurants, old bazaar, and boat tours to Sv Naum. From €22/day. Full visa info.",
  keywords: [
    "Ohrid itinerary",
    "Ohrid 3 days",
    "Ohrid travel guide 2026",
    "Lake Ohrid UNESCO",
    "North Macedonia travel",
    "St John at Kaneo",
    "Samuel's Fortress Ohrid",
    "Ohrid trout restaurants",
    "Ohrid visa Indian passport",
    "Sv Naum monastery",
  ],
  openGraph: {
    title: "Ohrid in 3 Days: Complete 2026 Travel Guide (Budget to Luxury)",
    description:
      "Lake Ohrid UNESCO, St John at Kaneo, Samuel's Fortress, Ohrid trout, and boat tours to Sv Naum — 3 days from €22/day.",
    type: "article",
    url: `${siteUrl}/blog/ohrid-3-days`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ohrid in 3 Days: Complete 2026 Travel Guide",
    description:
      "North Macedonia's UNESCO lake city — St John at Kaneo, medieval fortress, Ohrid trout, and lake boat tours from €22/day.",
  },
  alternates: {
    canonical: `${siteUrl}/blog/ohrid-3-days`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Ohrid in 3 Days: Complete 2026 Travel Guide (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: siteUrl,
      },
      description:
        "A complete 3-day Ohrid itinerary covering Lake Ohrid UNESCO site, St John at Kaneo church, Samuel's Fortress, the old bazaar, Ohrid trout restaurants, boat tours, and the Sv Naum monastery.",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${siteUrl}/blog/ohrid-3-days`,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ohrid in 3 Days",
          item: `${siteUrl}/blog/ohrid-3-days`,
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Ohrid",
      description:
        "Ohrid, North Macedonia — a UNESCO World Heritage city on the shores of ancient Lake Ohrid, with Byzantine churches, a medieval fortress, endemic trout, and pearl jewellery.",
      geo: { "@type": "GeoCoordinates", latitude: 41.1172, longitude: 20.8016 },
      touristType: ["History Enthusiasts", "Nature Lovers", "Cultural Tourists", "Budget Travellers"],
    },
  ],
};

export default function OhridPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OhridClient />
    </>
  );
}
