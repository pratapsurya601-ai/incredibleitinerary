import type { Metadata } from "next";
import SantoriniClient from "./SantoriniClient";

export const metadata: Metadata = {
  title: "Santorini in 4 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description: "4-day Santorini guide with Oia sunset timing secrets, best beaches, volcano tour, wine guide, and how to do it on a budget vs luxury cave hotel. Real costs included.",
  keywords: ["santorini itinerary 4 days", "santorini travel guide 2026", "oia sunset guide", "santorini budget travel", "santorini things to do", "greece island travel"],
  openGraph: { title: "Santorini in 4 Days: Budget to Luxury 2026", description: "Oia sunset timing, volcano tour, wine guide, real euro costs.", images: [{ url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80", width: 1200, height: 630, alt: "Santorini Oia blue domes Greece" }], type: "article" },
  twitter: { card: "summary_large_image", title: "Santorini in 4 Days (2026)", description: "Oia sunset secrets, volcano tour, wine guide." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/santorini-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Santorini in 4 Days: Complete Itinerary Guide (Budget to Luxury, 2026)", datePublished: "2026-04-04T00:00:00Z", author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" }, { "@type": "ListItem", position: 3, name: "Santorini 4 Days", item: "https://www.incredibleitinerary.com/blog/santorini-4-days" }] },
    { "@type": "TouristDestination", name: "Santorini, Greece", description: "Greek island in the Cyclades known for its white cubic architecture, blue-domed churches, caldera views, and volcanic black sand beaches." },
  ],
};

export default function SantoriniPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SantoriniClient />
    </>
  );
}
