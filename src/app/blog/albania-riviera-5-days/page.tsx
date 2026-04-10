import type { Metadata } from "next";
import AlbaniaRivieraClient from "./AlbaniaRivieraClient";

const siteUrl = "https://www.incredibleitinerary.com";

export const metadata: Metadata = {
  title: "Albania Riviera in 5 Days: Complete 2026 Guide (Budget to Luxury)",
  description:
    "The perfect 5-day Albania Riviera itinerary — Himara, Dhermi beach, Ksamil, Sarandë, Butrint UNESCO ruins, and Gjirokastra. Europe's best-value beach destination from €20/day. Full visa info.",
  keywords: [
    "Albania Riviera itinerary",
    "Albania Riviera 5 days",
    "Albania travel guide 2026",
    "Dhermi beach Albania",
    "Sarandë Albania",
    "Butrint UNESCO ruins",
    "Gjirokastra UNESCO",
    "Albania budget travel",
    "Albanian Riviera visa",
    "Ksamil beach Albania",
  ],
  openGraph: {
    title: "Albania Riviera in 5 Days: Complete 2026 Guide (Budget to Luxury)",
    description:
      "Himara cliffs, Dhermi beach, Ksamil islands, Butrint ruins, and Gjirokastra — Albania's Riviera in 5 days from €20/day.",
    type: "article",
    url: `${siteUrl}/blog/albania-riviera-5-days`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Albania Riviera in 5 Days: Complete 2026 Travel Guide",
    description:
      "Europe's most underrated coastline — Dhermi, Ksamil, Butrint ruins, and Gjirokastra from €20/day. Full itinerary.",
  },
  alternates: {
    canonical: `${siteUrl}/blog/albania-riviera-5-days`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Albania Riviera in 5 Days: Complete 2026 Travel Guide (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: siteUrl,
      },
      description:
        "A complete 5-day Albania Riviera itinerary covering Himara, Dhermi, Palasë, Sarandë, Ksamil, Butrint UNESCO ruins, and the UNESCO old city of Gjirokastra.",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${siteUrl}/blog/albania-riviera-5-days`,
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
          name: "Albania Riviera in 5 Days",
          item: `${siteUrl}/blog/albania-riviera-5-days`,
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Albanian Riviera",
      description:
        "The Albanian Riviera — pristine Ionian beaches from Himara to Sarandë, with UNESCO sites at Butrint and Gjirokastra, and some of Europe's most affordable travel.",
      geo: { "@type": "GeoCoordinates", latitude: 40.0088, longitude: 19.9722 },
      touristType: ["Beach Travellers", "Budget Travellers", "History Enthusiasts", "Adventure Seekers"],
    },
  ],
};

export default function AlbaniaRivieraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AlbaniaRivieraClient />
    </>
  );
}
