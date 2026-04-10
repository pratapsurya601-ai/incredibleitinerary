import type { Metadata } from "next";
import BilbaoClient from "./BilbaoClient";

export const metadata: Metadata = {
  title: "Bilbao in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Bilbao itinerary — Guggenheim Museum, pintxos bar-hopping, Gaztelugatxe island hermitage hike, La Ribera market, Rioja wine, and Txakoli. Budget €60/day to luxury hotel stays. Visa info for all passports.",
  keywords: [
    "Bilbao itinerary",
    "Bilbao 3 days",
    "Bilbao travel guide 2026",
    "Guggenheim Museum Bilbao",
    "pintxos Bilbao",
    "Gaztelugatxe",
    "Rioja wine day trip",
    "Bilbao visa Indian passport",
  ],
  openGraph: {
    title: "Bilbao in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Guggenheim Museum, pintxos, Gaztelugatxe, and Rioja wine — Bilbao and the Basque Country in 3 days from €60/day to luxury stays.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/bilbao-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilbao in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Guggenheim titanium curves, pintxos bar crawls, Gaztelugatxe cliffs, and Rioja wine — the complete Bilbao travel guide for 2026.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/bilbao-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Bilbao in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bilbao in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/bilbao-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Bilbao",
      description:
        "Bilbao, Spain — Basque capital famous for the Guggenheim Museum by Frank Gehry, world-class pintxos culture, Gaztelugatxe island, and proximity to Rioja wine country.",
      geo: { "@type": "GeoCoordinates", latitude: 43.263, longitude: -2.935 },
    },
  ],
};

export default function BilbaoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BilbaoClient />
    </>
  );
}
