import type { Metadata } from "next";
import KashmirClient from "./KashmirClient";

export const metadata: Metadata = {
  title: "Kashmir 6-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Kashmir trip in 6 days. The complete Kashmir itinerary — Srinagar Dal Lake, Gulmarg snow, Pahalgam valleys. 4 plans including honeymoon, budget.",
  keywords: [
    "kashmir itinerary 6 days", "kashmir travel guide 2026", "srinagar dal lake houseboat",
    "gulmarg skiing snowfall", "pahalgam betaab valley", "kashmir honeymoon trip",
    "kashmir budget travel", "kashmir tour package",
  ],
  openGraph: {
    title: "Kashmir 6-Day Itinerary 2026: Trip Planner",
    description: "Srinagar · Gulmarg · Pahalgam · Sonamarg — 4 plans, real budgets, houseboat guide.",
    images: [{ url: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1200&q=80", width: 1200, height: 630, alt: "Dal Lake Kashmir houseboat" }],
    type: "article", publishedTime: "2026-03-21T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashmir 6-Day Itinerary 2026: Trip Planner",
    description: "Dal Lake houseboat, Gulmarg snow, Pahalgam valleys — 4 plans, real budgets.",
    images: ["https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/kashmir-6-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Kashmir in 6 Days: Srinagar, Gulmarg & Pahalgam (2026)",
      "description": "Complete Kashmir travel guide with Dal Lake houseboat, Gulmarg snow, Pahalgam valleys. 4 itinerary plans with real budgets.",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1200&q=80" },
      "datePublished": "2026-03-21T00:00:00Z",
      "dateModified": "2026-03-21T00:00:00Z",
      "author": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com" },
      "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com" },
      "keywords": "kashmir, srinagar, dal lake, gulmarg, pahalgam, kashmir houseboat, kashmir honeymoon",
      "wordCount": 6000,
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Kashmir 6 Days", "item": "https://www.incredibleitinerary.com/blog/kashmir-6-days" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is Kashmir safe to visit in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Kashmir has been welcoming tourists in large numbers since 2019. The main tourist areas (Srinagar, Gulmarg, Pahalgam, Sonamarg) are safe and well-patrolled. Over 2 crore tourists visited Kashmir in 2023-24, a record high. Exercise normal travel precautions and stay updated via local advisories." } },
        { "@type": "Question", "name": "What is the best time to visit Kashmir?", "acceptedAnswer": { "@type": "Answer", "text": "Kashmir has two peak seasons: April-June (spring flowers, green valleys, mild weather 15-25°C) and December-February (snow in Gulmarg and Pahalgam, skiing). September-October is the best overall — post-monsoon clarity, golden chinar trees, fewer crowds. July-August is monsoon season — avoid for outdoor activities." } },
        { "@type": "Question", "name": "How much does a Dal Lake houseboat cost?", "acceptedAnswer": { "@type": "Answer", "text": "Budget houseboats start at Rs.1,500-Rs.2,500/night including breakfast. Mid-range heritage houseboats cost Rs.3,500-Rs.6,000/night with all meals. Luxury category (5-star rated) run Rs.8,000-Rs.20,000/night. Always inspect the houseboat before paying — photos online are often misleading." } },
        { "@type": "Question", "name": "How do I get to Kashmir?", "acceptedAnswer": { "@type": "Answer", "text": "Fly to Sheikh ul-Alam International Airport, Srinagar (SXR). Direct flights from Delhi (1hr 15min), Mumbai (2hr 30min), Bangalore (3hrs). IndiGo, Air India and SpiceJet all fly there. Book 2-3 weeks ahead — flights fill up fast during peak season. There is no practical road or rail route for most visitors." } },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Kashmir, India",
      "description": "Paradise on Earth — India's northernmost region known for Dal Lake houseboats, snow-covered Gulmarg, the green valleys of Pahalgam and Sonamarg, and Mughal gardens.",
      "url": "https://www.incredibleitinerary.com/blog/kashmir-6-days",
      "touristType": ["Snow Tourism", "Honeymoon Tourism", "Adventure Tourism"],
    },
  ],
};

export default function KashmirPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <KashmirClient />
    </>
  );
}
