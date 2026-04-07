import type { Metadata } from "next";
import BarcelonaClient from "./BarcelonaClient";

export const metadata: Metadata = {
  title: "Barcelona 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Barcelona trip in 4 days. Budget, Mid-Range, Luxury — with real timings, costs in EUR/USD, Sagrada Familia booking tips and the mistakes every.",
  keywords: [
    "barcelona itinerary 4 days",
    "barcelona travel guide 2026",
    "sagrada familia tickets",
    "barcelona budget travel",
    "la boqueria market",
    "park guell tickets",
    "barcelona trip planner",
    "spain travel guide",
  ],
  openGraph: {
    title: "Barcelona 4-Day Itinerary 2026: Trip Planner",
    description: "Real timings, actual budgets in EUR/USD, Sagrada Familia booking tips. 3 complete plans.",
    images: [{ url: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=80", width: 1200, height: 630, alt: "Sagrada Familia Barcelona" }],
    type: "article", publishedTime: "2026-04-04T00:00:00Z", authors: ["IncredibleItinerary"],
    tags: ["Barcelona", "Spain", "Travel", "Itinerary", "Europe"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barcelona 4-Day Itinerary 2026: Trip Planner",
    description: "3 plans, real timings, actual costs, Sagrada Familia tips.",
    images: ["https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/barcelona-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/barcelona-4-days#article",
      "headline": "Barcelona in 4 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      "description": "3 complete Barcelona plans with real timings, costs in EUR/USD, Sagrada Familia booking tips.",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=80", "width": 1200, "height": 630 },
      "datePublished": "2026-04-04T00:00:00Z", "dateModified": "2026-04-04T00:00:00Z",
      "author": { "@type": "Person", "name": "Surya Pratap", "url": "https://www.incredibleitinerary.com/about" },
      "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com", "logo": { "@type": "ImageObject", "url": "https://www.incredibleitinerary.com/logo.png" } },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.incredibleitinerary.com/blog/barcelona-4-days" },
      "keywords": "barcelona itinerary, barcelona 4 days, sagrada familia, la boqueria, park guell, gaudi",
      "articleSection": "Travel Guides", "inLanguage": "en", "wordCount": 5400,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Barcelona in 4 Days", "item": "https://www.incredibleitinerary.com/blog/barcelona-4-days" },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Barcelona, Spain",
      "description": "Catalonia's capital, known for Gaudi's architectural masterpieces, vibrant food markets, Mediterranean beaches, and a nightlife that doesn't start until midnight.",
      "url": "https://www.incredibleitinerary.com/blog/barcelona-4-days",
      "touristType": ["Cultural Tourism", "Beach Tourism", "Culinary Tourism", "Architecture Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
        { "@type": "Question", "name": "How many days are enough for Barcelona?", "acceptedAnswer": { "@type": "Answer", "text": "4 days is ideal. You can cover Sagrada Familia, Park Guell, Gothic Quarter, Barceloneta Beach, and Montjuic plus a day trip. 3 days is possible but rushed. 5+ days lets you explore neighbourhoods deeply." } },
        { "@type": "Question", "name": "How much does a 4-day Barcelona trip cost?", "acceptedAnswer": { "@type": "Answer", "text": "Budget: 50-90 EUR/day ($54-97 USD). Mid-range: 100-180 EUR/day ($108-194 USD). Luxury: 250+ EUR/day ($270+ USD). Includes accommodation, food, transport and activities." } },
        { "@type": "Question", "name": "Do I need a visa for Spain?", "acceptedAnswer": { "@type": "Answer", "text": "Indian passport holders need a Schengen visa (apply at BLS/VFS, EUR 80 fee, 15 working days). US, UK, AU, CA citizens visit visa-free for 90 days within 180 days." } },
        { "@type": "Question", "name": "Should I book Sagrada Familia tickets in advance?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely non-negotiable. Book 2 months ahead for peak season, minimum 2 weeks in off-season. EUR 26 timed ticket vs 2-3 hour walk-up queue. Book at sagradafamilia.org only." } },
        { "@type": "Question", "name": "What is the best time to visit Barcelona?", "acceptedAnswer": { "@type": "Answer", "text": "April-June and September-October are ideal. July-August is hot (35C+) and packed with tourists. November-March is mild and cheapest, but some outdoor attractions have reduced hours." } },
      ],
};

export default function BarcelonaBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <BarcelonaClient />
    </>
  );
}
