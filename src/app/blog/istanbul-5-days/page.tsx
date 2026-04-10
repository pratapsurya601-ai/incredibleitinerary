import type { Metadata } from "next";
import IstanbulClient from "./IstanbulClient";

export const metadata: Metadata = {
  title: "Istanbul in 5 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description: "5-day Istanbul guide — Hagia Sophia timing, Grand Bazaar survival guide, Bosphorus ferry routes, Asian side highlights, and the Turkish street food you must eat.",
  keywords: ["istanbul itinerary 5 days", "istanbul travel guide 2026", "hagia sophia guide", "istanbul budget travel", "turkey travel", "bosphorus cruise"],
  openGraph: {
    title: "Istanbul in 5 Days: Budget to Luxury 2026",
    description: "Hagia Sophia timing, Grand Bazaar guide, Bosphorus ferry routes.",
    images: [{ url: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=80", width: 1200, height: 630, alt: "Istanbul Hagia Sophia Turkey" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Istanbul in 5 Days (2026)", description: "5 plans, Grand Bazaar guide, Bosphorus routes." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/istanbul-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Istanbul in 5 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      datePublished: "2026-04-04T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Istanbul 5 Days", item: "https://www.incredibleitinerary.com/blog/istanbul-5-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Istanbul, Turkey",
      description: "City spanning two continents with 1,500 years of Byzantine and Ottoman heritage, from Hagia Sophia to the Grand Bazaar.",
    },
  ],
};

export default function IstanbulPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <IstanbulClient />
    </>
  );
}
