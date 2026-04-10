import type { Metadata } from "next";
import AntalyaClient from "./AntalyaClient";

export const metadata: Metadata = {
  title: "Antalya in 3 Days: Complete Guide (Kaleiçi, Aspendos & Turkish Riviera, 2026)",
  description: "3-day Antalya itinerary — Hadrian's Gate, Aspendos Roman Theatre, Düden Waterfalls, boat trips along the coast, and local seafood. Budget to luxury in Turkish Lira.",
  keywords: ["antalya itinerary 3 days", "antalya travel guide 2026", "aspendos roman theatre", "antalya old city", "turkish riviera guide", "kaleiçi antalya"],
  openGraph: {
    title: "Antalya in 3 Days: Turkish Riviera Complete Guide 2026",
    description: "Hadrian's Gate, Aspendos Theatre, Düden Waterfalls, and coastal boat trips.",
    images: [{ url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80", width: 1200, height: 630, alt: "Antalya old harbour Turkey" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Antalya in 3 Days (2026)", description: "Kaleiçi, Aspendos, waterfalls, and the Turkish Riviera." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/antalya-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Antalya in 3 Days: Complete Guide (Kaleiçi, Aspendos & Turkish Riviera, 2026)",
      datePublished: "2026-04-04T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Antalya 3 Days", item: "https://www.incredibleitinerary.com/blog/antalya-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Antalya, Turkey",
      description: "Turkish Riviera city with a Roman harbour, Hadrian's Gate, the world-class Aspendos theatre, and the clearest turquoise water in Turkey.",
    },
  ],
};

export default function AntalyaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AntalyaClient />
    </>
  );
}
