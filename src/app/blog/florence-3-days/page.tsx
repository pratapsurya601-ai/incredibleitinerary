import type { Metadata } from "next";
import FlorenceClient from "./FlorenceClient";

export const metadata: Metadata = {
  title: "Florence in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description:
    "3 complete Florence plans — Budget, Mid-Range, Luxury — with real timings, costs in EUR/USD, advance booking tips and the mistakes every first-timer makes.",
  keywords: [
    "florence itinerary 3 days",
    "florence travel guide 2026",
    "florence budget travel",
    "uffizi gallery tickets",
    "duomo dome climb",
    "florence trip planner",
    "tuscany travel guide",
    "accademia david tickets",
  ],
  openGraph: {
    title: "Florence in 3 Days: Budget to Luxury Itinerary 2026",
    description:
      "Real timings, actual budgets, advance booking tips. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Florence Duomo cathedral dome at sunrise",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Florence", "Italy", "Travel", "Itinerary", "Tuscany"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Florence in 3 Days: The Only Guide You Need (2026)",
    description: "3 plans, real timings, actual costs, advance booking tips.",
    images: ["https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/florence-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/florence-3-days#article",
      "headline": "Florence in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      "description": "3 complete Florence plans — Budget, Mid-Range, Luxury — with real timings, costs in EUR/USD, advance booking tips and the mistakes every first-timer makes.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-04T00:00:00Z",
      "dateModified": "2026-04-04T00:00:00Z",
      "author": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://www.incredibleitinerary.com",
      },
      "publisher": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://www.incredibleitinerary.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.incredibleitinerary.com/logo.png",
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.incredibleitinerary.com/blog/florence-3-days",
      },
      "keywords": "florence itinerary, florence 3 days, florence travel guide, uffizi, duomo, accademia, tuscany",
      "articleSection": "Travel Guides",
      "inLanguage": "en",
      "wordCount": 5200,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Florence in 3 Days", "item": "https://www.incredibleitinerary.com/blog/florence-3-days" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days do you need in Florence?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is perfect for Florence. You can cover the Duomo, Uffizi, Accademia, Ponte Vecchio, and a sunset at Piazzale Michelangelo without rushing. Add a 4th day for a Chianti wine country day trip.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Florence trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget: \u20ac70-110/day ($76-119 USD). Mid-range: \u20ac130-220/day ($140-238 USD). Luxury: \u20ac350+/day ($378+ USD). This includes accommodation, food, transport and museum entries.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need to book Uffizi tickets in advance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, absolutely. In peak season (April-October), the Uffizi queue can be 2-3 hours without a reservation. Book online at least a week ahead. Timed entry costs \u20ac20-25 and saves hours.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Florence?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "April-May and September-October are ideal. The weather is warm, crowds are manageable, and prices are moderate. Summer (June-August) is hot and extremely crowded. Winter is cheapest but some attractions have reduced hours.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Florence walkable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Florence is one of the most walkable cities in Europe. The historic centre is compact \u2014 you can walk from the Duomo to Pitti Palace in 15 minutes. No metro, no need for taxis within the centre. Comfortable shoes are the only transport you need.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I do a Chianti wine day trip from Florence?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Chianti wine region is 30-60 minutes from Florence. Organised tours (\u20ac60-120) visit 2-3 wineries with tastings and lunch. You can also rent a car and self-drive, but the designated driver misses the wine. Book a tour.",
          },
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Florence, Italy",
      "description": "The birthplace of the Renaissance, home to Michelangelo's David, the Uffizi Gallery, and some of the finest food and wine in Italy.",
      "url": "https://www.incredibleitinerary.com/blog/florence-3-days",
      "touristType": ["Cultural Tourism", "Art Tourism", "Food & Wine Tourism"],
    },
  ],
};

export default function FlorenceBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FlorenceClient />
    </>
  );
}
