import type { Metadata } from "next";
import CreteClient from "./CreteClient";

export const metadata: Metadata = {
  title: "Crete in 5 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description: "5-day Crete guide covering Knossos, Samaria Gorge, Balos Lagoon, Chania old town, mountain villages. Real costs, car rental advice, and the Cretan food you must try.",
  keywords: ["crete itinerary 5 days", "crete travel guide 2026", "samaria gorge guide", "balos lagoon crete", "chania travel guide", "greece crete"],
  openGraph: { title: "Crete in 5 Days: Budget to Luxury 2026", description: "Samaria Gorge, Balos Lagoon, Knossos — real euro costs.", images: [{ url: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=1200&q=80", width: 1200, height: 630, alt: "Crete Greece coast beach" }], type: "article" },
  twitter: { card: "summary_large_image", title: "Crete in 5 Days (2026)", description: "Samaria Gorge, Balos Lagoon, Knossos guide." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/crete-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Crete in 5 Days: Complete Itinerary Guide (Budget to Luxury, 2026)", datePublished: "2026-04-04T00:00:00Z", author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" }, { "@type": "ListItem", position: 3, name: "Crete 5 Days", item: "https://www.incredibleitinerary.com/blog/crete-5-days" }] },
    { "@type": "TouristDestination", name: "Crete, Greece", description: "Greece's largest island with Minoan ruins at Knossos, Europe's longest gorge at Samaria, and the pink sand lagoon at Balos." },
  ],
};

export default function CretePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CreteClient />
    </>
  );
}
