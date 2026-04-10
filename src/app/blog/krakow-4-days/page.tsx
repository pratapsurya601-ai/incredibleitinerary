import type { Metadata } from "next";
import KrakowClient from "./KrakowClient";

export const metadata: Metadata = {
  title: "Krakow in 4 Days: Old Town, Auschwitz, Salt Mine & Kazimierz (2026)",
  description: "4 complete Krakow plans: Wawel Castle, Auschwitz-Birkenau booking guide, Wieliczka Salt Mine, Kazimierz Jewish Quarter, Schindler's Factory — with real PLN costs, Schengen visa info for Indians, and pierogi milk bar tips.",
  keywords: ["krakow itinerary 4 days", "krakow travel guide 2026", "auschwitz booking guide", "wieliczka salt mine", "kazimierz krakow", "poland travel guide", "krakow budget travel"],
  openGraph: {
    title: "Krakow in 4 Days: Budget to Luxury 2026 Itinerary",
    description: "Old Town, Auschwitz, Wieliczka Salt Mine, Kazimierz — real PLN costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1562619425-c307bb637f05?w=1200&q=80", width: 1200, height: 630, alt: "Krakow Old Town Market Square Poland" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Krakow in 4 Days (2026)", description: "Auschwitz, Wieliczka, Kazimierz, real PLN costs." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/krakow-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Krakow in 4 Days: Old Town, Auschwitz, Salt Mine & Kazimierz (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1562619425-c307bb637f05?w=1200&q=80",
      description: "4 complete Krakow plans with Auschwitz booking guide, Wieliczka Salt Mine details, Kazimierz Jewish Quarter depth, and Polish visa information for every passport.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Krakow 4 Days", item: "https://www.incredibleitinerary.com/blog/krakow-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Krakow, Poland",
      description: "The best-preserved medieval city in Poland and gateway to Auschwitz-Birkenau and the Wieliczka Salt Mine — two UNESCO World Heritage Sites that between them tell the most important chapters of 20th-century human history.",
      geo: { "@type": "GeoCoordinates", latitude: 50.0647, longitude: 19.9450 },
      touristType: ["Cultural tourists", "History buffs", "Heritage travellers", "Budget travellers"],
    },
  ],
};

export default function KrakowPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <KrakowClient />
    </>
  );
}
