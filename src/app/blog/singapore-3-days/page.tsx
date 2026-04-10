import type { Metadata } from "next";
import SingaporeClient from "./SingaporeClient";

export const metadata: Metadata = {
  title: "Singapore in 3 Days: Complete Guide (Hawker Food, Gardens by the Bay & Singapore Zoo, 2026)",
  description: "3-day Singapore itinerary — Gardens by the Bay free show, Maxwell hawker chicken rice, Singapore Zoo vs Universal Studios, EZ-Link card guide, and budget vs luxury costs in SGD.",
  keywords: ["singapore itinerary 3 days", "singapore travel guide 2026", "gardens by the bay guide", "singapore hawker centres", "singapore budget travel", "singapore zoo guide"],
  openGraph: {
    title: "Singapore in 3 Days: Hawker Food, Gardens & Skyline 2026",
    description: "Free Supertree show, Michelin hawker food, and the world's best zoo.",
    images: [{ url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80", width: 1200, height: 630, alt: "Singapore Marina Bay Sands skyline night" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Singapore in 3 Days (2026)", description: "Hawker Michelin food, free Supertree show, Singapore Zoo guide." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/singapore-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Singapore in 3 Days: Complete Guide (Hawker Food, Gardens by the Bay & Singapore Zoo, 2026)",
      datePublished: "2026-04-04T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Singapore 3 Days", item: "https://www.incredibleitinerary.com/blog/singapore-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Singapore",
      description: "City-state in Southeast Asia known for Gardens by the Bay, hawker centres with Michelin-starred food, one of the world's best zoos, and Changi Airport.",
    },
  ],
};

export default function SingaporePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SingaporeClient />
    </>
  );
}
