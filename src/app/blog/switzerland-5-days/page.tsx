import type { Metadata } from "next";
import SwitzerlandClient from "./SwitzerlandClient";

export const metadata: Metadata = {
  title: "Switzerland in 5 Days: Jungfrau, Interlaken, Lucerne & Alps on a Budget (2026)",
  description: "Complete 5-day Switzerland guide with Half Fare Card strategy, Jungfraujoch vs Harder Kulm, Lauterbrunnen, Mürren, Zermatt, and real CHF costs for every budget.",
  keywords: ["switzerland itinerary 5 days", "switzerland travel guide 2026", "jungfraujoch guide", "interlaken travel guide", "lucerne day trip", "switzerland budget travel", "swiss half fare card"],
  openGraph: {
    title: "Switzerland in 5 Days: Alps, Jungfrau & Budget Tips",
    description: "Half Fare Card secrets, Jungfraujoch vs Harder Kulm, free lake swimming, and real CHF costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200&q=80", width: 1200, height: 630, alt: "Switzerland Alps Jungfrau Interlaken panorama" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Switzerland in 5 Days (2026)", description: "Alps, Jungfraujoch, Lucerne, and Matterhorn — real CHF costs." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/switzerland-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Switzerland in 5 Days: Jungfrau, Interlaken, Lucerne & Alps on a Budget (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200&q=80",
      description: "Complete 5-day Switzerland guide with Half Fare Card strategy, Jungfraujoch, Lauterbrunnen, Mürren, Zermatt, and real CHF costs for every budget.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Switzerland 5 Days", item: "https://www.incredibleitinerary.com/blog/switzerland-5-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Switzerland",
      description: "Central European country renowned for the Alps, precision engineering, chocolate, cheese, and some of the world's most spectacular mountain scenery.",
      touristType: ["Adventure travelers", "Skiing enthusiasts", "Hiking lovers", "Luxury travelers"],
      geo: { "@type": "GeoCoordinates", latitude: 46.8182, longitude: 8.2275 },
    },
  ],
};

export default function SwitzerlandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SwitzerlandClient />
    </>
  );
}
