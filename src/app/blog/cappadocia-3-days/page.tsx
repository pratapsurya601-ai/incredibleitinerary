import type { Metadata } from "next";
import CappadociaClient from "./CappadociaClient";

export const metadata: Metadata = {
  title: "Cappadocia in 3 Days: Complete Guide (Hot Air Balloons, Cave Hotels & Underground Cities, 2026)",
  description: "How to do Cappadocia in 3 days — balloon flight booking tips, best cave hotels, Rose Valley hike, Derinkuyu underground city, and real Turkish Lira costs.",
  keywords: ["cappadocia itinerary 3 days", "cappadocia balloon flight guide", "cappadocia travel guide 2026", "goreme cave hotel", "cappadocia underground city"],
  openGraph: {
    title: "Cappadocia in 3 Days: Balloons, Caves & Fairy Chimneys 2026",
    description: "Balloon booking guide, cave hotels, real costs in TRY.",
    images: [{ url: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=1200&q=80", width: 1200, height: 630, alt: "Cappadocia hot air balloons Turkey" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Cappadocia in 3 Days (2026)", description: "Balloon booking guide, cave hotels, underground cities." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/cappadocia-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cappadocia in 3 Days: Complete Guide (2026)",
      datePublished: "2026-04-04T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Cappadocia 3 Days", item: "https://www.incredibleitinerary.com/blog/cappadocia-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Cappadocia, Turkey",
      description: "Region in central Turkey with unique volcanic rock formations, cave dwellings, underground cities, and hot air balloon flights.",
    },
  ],
};

export default function CappadociaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CappadociaClient />
    </>
  );
}
