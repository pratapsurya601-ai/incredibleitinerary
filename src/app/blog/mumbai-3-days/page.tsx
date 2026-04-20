import type { Metadata } from "next";
import MumbaiClient from "./MumbaiClient";

export const metadata: Metadata = {
  title: "Mumbai in 3 Days: Complete 2026 Itinerary for Indian Travellers (Budget to Luxury)",
  description: "3 complete Mumbai plans with Gateway of India, Elephanta, Dharavi, Marine Drive, real rupee costs, local train tips, and the best vada pav spots — for every budget.",
  keywords: ["mumbai itinerary 3 days", "mumbai travel guide 2026", "mumbai budget travel", "gateway of india guide", "mumbai street food", "elephanta caves", "dharavi tour"],
  openGraph: {
    title: "Mumbai in 3 Days: Budget to Luxury 2026 Itinerary",
    description: "Gateway, Elephanta, Dharavi, Marine Drive and the best street food in India — real rupee costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80", width: 1200, height: 630, alt: "Mumbai Marine Drive Gateway of India skyline India" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Mumbai in 3 Days (2026)", description: "3 plans, real rupee costs, local train tips, best vada pav spots." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/mumbai-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Mumbai in 3 Days: Complete 2026 Itinerary for Indian Travellers (Budget to Luxury)",
      datePublished: "2026-04-06T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80",
      description: "3 complete Mumbai itinerary plans with Gateway of India, Elephanta Caves, Dharavi, Marine Drive, and real rupee costs for budget, mid-range, and luxury travellers.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Mumbai 3 Days", item: "https://www.incredibleitinerary.com/blog/mumbai-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Mumbai, India",
      description: "India's financial capital and maximum city — home to the Gateway of India, Elephanta Caves, Dharavi, Marine Drive, Bollywood, and the world's best street food.",
      touristType: ["Cultural tourists", "Food lovers", "History buffs", "Architecture enthusiasts"],
    },
  ],
};

export default function MumbaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MumbaiClient />
    </>
  );
}
