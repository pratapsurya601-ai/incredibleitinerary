import type { Metadata } from "next";
import EuropeGuideClient from "./EuropeGuideClient";

export const metadata: Metadata = {
  title: "Europe Travel Guide: Best Itineraries for First-Timers (2026)",
  description:
    "Plan your first Europe trip with 80+ city guides, Schengen visa tips, budget breakdowns and multi-city routes across 25+ countries.",
  keywords: [
    "europe travel guide 2026",
    "europe itinerary first time",
    "schengen visa for indians",
    "europe budget travel",
    "europe trip planner",
    "best europe itinerary",
    "europe backpacking guide",
    "multi city europe route",
  ],
  openGraph: {
    title: "Europe Travel Guide: Best Itineraries for First-Timers (2026)",
    description: "80+ city guides, Schengen visa help, budget breakdowns and proven multi-city routes across 25+ countries.",
    images: [{ url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80", width: 1200, height: 630, alt: "Eiffel Tower Paris sunset" }],
    type: "article", publishedTime: "2026-04-09T00:00:00Z", authors: ["IncredibleItinerary"],
    tags: ["Europe", "Travel Guide", "Itinerary", "Schengen", "Budget Travel"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Europe Travel Guide: Best Itineraries for First-Timers (2026)",
    description: "80+ guides, Schengen visa tips, budget breakdowns, multi-city routes.",
    images: ["https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/europe-travel-guide" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/europe-travel-guide#article",
      "headline": "Europe Travel Guide: Best Itineraries for First-Timers (2026)",
      "description": "Plan your first Europe trip with 80+ city guides, Schengen visa tips, budget breakdowns and multi-city routes across 25+ countries.",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80", "width": 1200, "height": 630 },
      "datePublished": "2026-04-09T00:00:00Z", "dateModified": "2026-04-09T00:00:00Z",
      "author": { "@type": "Person", "name": "Surya Pratap", "url": "https://www.incredibleitinerary.com/about" },
      "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com", "logo": { "@type": "ImageObject", "url": "https://www.incredibleitinerary.com/logo.png" } },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.incredibleitinerary.com/blog/europe-travel-guide" },
      "keywords": "europe travel guide, europe itinerary, schengen visa, europe budget, first time europe, multi city europe",
      "articleSection": "Travel Guides", "inLanguage": "en", "wordCount": 6800,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Europe Travel Guide", "item": "https://www.incredibleitinerary.com/blog/europe-travel-guide" },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Europe",
      "description": "A continent of 44 countries offering world-class art, ancient history, stunning coastlines, Alpine peaks, and some of the best food and wine on the planet.",
      "url": "https://www.incredibleitinerary.com/blog/europe-travel-guide",
      "touristType": ["Cultural Tourism", "Historical Tourism", "Culinary Tourism", "Adventure Tourism", "Beach Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Do Indians need a visa for Europe?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Indian passport holders need a Schengen visa to visit 27 European countries. Apply at VFS/BLS, pay the EUR 80 fee, and allow 15-30 working days for processing. Book your appointment 2-3 months before travel." } },
    { "@type": "Question", "name": "How much does a Europe trip cost per day?", "acceptedAnswer": { "@type": "Answer", "text": "Daily costs vary hugely by region. Eastern Europe (Poland, Hungary, Balkans): EUR 25-80/day. Western Europe (France, Italy, Spain): EUR 60-200/day. Scandinavia (Norway, Iceland): EUR 100-250/day. Budget travelers can do Western Europe on EUR 60-80/day with hostels and cooking." } },
    { "@type": "Question", "name": "What is the best time to visit Europe?", "acceptedAnswer": { "@type": "Answer", "text": "April-June and September-October offer the best balance of weather, crowds, and prices. July-August is peak season with higher prices and larger crowds. November-March is cheapest but cold in most regions, though great for Christmas markets and winter sports." } },
    { "@type": "Question", "name": "What is the best route for a first trip to Europe?", "acceptedAnswer": { "@type": "Answer", "text": "The classic first-timer route is Paris, Amsterdam, Berlin, Prague, Vienna, Rome over 2-3 weeks. It covers iconic cities, mixes Western and Eastern Europe, and is well-connected by train. For 10 days, try Budapest, Prague, Krakow, Vienna for the best value." } },
    { "@type": "Question", "name": "How many days do you need for a Europe trip?", "acceptedAnswer": { "@type": "Answer", "text": "Minimum 10 days for 3-4 cities. 2 weeks is ideal for 5-6 cities without rushing. 3 weeks lets you explore a full region deeply. Avoid cramming more than one city per 2-3 days or you will spend your trip on trains instead of exploring." } },
  ],
};

export default function EuropeTravelGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <EuropeGuideClient />
    </>
  );
}
