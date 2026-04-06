import type { Metadata } from "next";
import MadridClient from "./MadridClient";

export const metadata: Metadata = {
  title: "Madrid 3-Day Itinerary 2026: Trip Planner",
  description:
    "2 complete Madrid plans — Budget, Comfortable — with real timings, costs in EUR/USD, Prado Museum tips and the mistakes every first-timer makes.",
  keywords: [
    "madrid itinerary 3 days",
    "madrid travel guide 2026",
    "prado museum tickets",
    "madrid budget travel",
    "royal palace madrid",
    "madrid food guide",
    "madrid trip planner",
    "spain travel guide",
  ],
  openGraph: {
    title: "Madrid 3-Day Itinerary 2026: Trip Planner",
    description: "Real timings, actual budgets in EUR/USD, Prado tips. 2 complete plans.",
    images: [{ url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=80", width: 1200, height: 630, alt: "Madrid Royal Palace" }],
    type: "article", publishedTime: "2026-04-04T00:00:00Z", authors: ["IncredibleItinerary"],
    tags: ["Madrid", "Spain", "Travel", "Itinerary", "Europe"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madrid 3-Day Itinerary 2026: Trip Planner",
    description: "2 plans, real timings, actual costs, Prado Museum tips.",
    images: ["https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/madrid-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/madrid-3-days#article",
      "headline": "Madrid in 3 Days: Complete Itinerary Guide (Budget to Comfortable, 2026)",
      "description": "2 complete Madrid plans with real timings, costs in EUR/USD, Prado tips.",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=80", "width": 1200, "height": 630 },
      "datePublished": "2026-04-04T00:00:00Z", "dateModified": "2026-04-04T00:00:00Z",
      "author": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com" },
      "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com", "logo": { "@type": "ImageObject", "url": "https://www.incredibleitinerary.com/logo.png" } },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.incredibleitinerary.com/blog/madrid-3-days" },
      "keywords": "madrid itinerary, madrid 3 days, prado museum, royal palace madrid, retiro park",
      "articleSection": "Travel Guides", "inLanguage": "en", "wordCount": 4000,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Madrid in 3 Days", "item": "https://www.incredibleitinerary.com/blog/madrid-3-days" },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Madrid, Spain",
      "description": "Spain's capital, known for world-class art museums, the Royal Palace, vibrant tapas culture, and a nightlife that doesn't start until midnight.",
      "url": "https://www.incredibleitinerary.com/blog/madrid-3-days",
      "touristType": ["Cultural Tourism", "Culinary Tourism", "Urban Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
        { "@type": "Question", "name": "How many days are enough for Madrid?", "acceptedAnswer": { "@type": "Answer", "text": "3 days is ideal. Covers the Prado, Royal Palace, Retiro Park, and neighbourhood exploration. 4-5 days lets you add Toledo and deeper museum visits." } },
        { "@type": "Question", "name": "How much does a 3-day Madrid trip cost?", "acceptedAnswer": { "@type": "Answer", "text": "Budget: EUR 45-80/day ($49-86 USD). Comfortable: EUR 90-170/day ($97-184 USD). Madrid is one of the most affordable Western European capitals." } },
        { "@type": "Question", "name": "Do I need a visa for Spain?", "acceptedAnswer": { "@type": "Answer", "text": "Indian passport holders need a Schengen visa (EUR 80 fee, apply at BLS/VFS 3 months ahead). US, UK, AU, CA citizens visit visa-free for 90 days within 180 days." } },
        { "@type": "Question", "name": "What is the best time to visit Madrid?", "acceptedAnswer": { "@type": "Answer", "text": "April-June and September-November. July-August is brutally hot (40C+). Winter is mild but can be cold. Spring and autumn have perfect weather for walking." } },
        { "@type": "Question", "name": "What time do Spaniards eat dinner?", "acceptedAnswer": { "@type": "Answer", "text": "Dinner in Madrid starts at 9:30-10pm. Restaurants are empty before 9pm. Adjust your schedule or you'll be eating alone. Lunch is 2-3:30pm." } },
      ],
};

export default function MadridBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <MadridClient />
    </>
  );
}
