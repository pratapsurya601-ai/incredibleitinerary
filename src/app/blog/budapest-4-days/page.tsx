import type { Metadata } from "next";
import BudapestClient from "./BudapestClient";

export const metadata: Metadata = {
  title: "Budapest in 4 Days: Thermal Baths, Ruin Bars, Parliament & the Danube (2026)",
  description: "4 complete Budapest itineraries — Budget (€38/day) to Luxury — with thermal bath guide (Széchenyi vs Gellért vs Rudas), ruin bar advice, Parliament interior tickets, and the Eger wine day trip.",
  keywords: ["budapest itinerary 4 days", "budapest travel guide 2026", "szechenyi baths guide", "budapest ruin bars", "budapest parliament tour", "hungary travel", "eger wine tour"],
  openGraph: {
    title: "Budapest in 4 Days: Thermal Baths, Ruin Bars & the Danube (2026)",
    description: "Thermal bath guide, ruin bars, Parliament tour, and Eger wine day trip — 4 complete plans from €38/day.",
    images: [{ url: "https://images.unsplash.com/photo-1549944850-84e00be4203b?w=1200&q=80", width: 1200, height: 630, alt: "Budapest Parliament Building at night reflecting in the Danube" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Budapest in 4 Days (2026)", description: "Thermal baths, ruin bars, Parliament, Danube — full itinerary." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/budapest-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Budapest in 4 Days: Thermal Baths, Ruin Bars, Parliament & the Danube (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1549944850-84e00be4203b?w=1200&q=80",
      description: "4 complete Budapest itineraries — budget to luxury — with thermal bath guide, ruin bars, Parliament tour, and Eger day trip.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Budapest 4 Days", item: "https://www.incredibleitinerary.com/blog/budapest-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Budapest, Hungary",
      description: "The capital of Hungary — a city of thermal baths, ruin bars, a magnificent Parliament on the Danube, Buda Castle, and one of Europe's most dramatic urban skylines.",
      touristType: ["Cultural tourists", "Spa enthusiasts", "Nightlife travelers", "Architecture enthusiasts", "Food lovers"],
      geo: { "@type": "GeoCoordinates", latitude: 47.4979, longitude: 19.0402 },
    },
  ],
};

export default function BudapestPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BudapestClient />
    </>
  );
}
