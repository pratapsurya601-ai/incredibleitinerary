import type { Metadata } from "next";
import VizagClient from "./VizagClient";

export const metadata: Metadata = {
  title: "Vizag 3-Day Itinerary 2026: Trip Planner",
  description:
    "3 complete Vizag plans — Budget, Nature, Premium — with real timings, costs, Google Maps routes and the spots most tourists miss entirely.",
  keywords: [
    "vizag itinerary 3 days",
    "visakhapatnam travel guide 2026",
    "vizag budget travel",
    "araku valley train ride",
    "borra caves vizag",
    "rk beach visakhapatnam",
    "vizag trip planner",
    "andhra pradesh tourism",
  ],
  openGraph: {
    title: "Vizag 3-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, Google Maps routes. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Visakhapatnam coastline at golden hour",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Vizag", "Visakhapatnam", "India", "Travel", "Itinerary", "Beach", "Andhra Pradesh"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vizag 3-Day Itinerary 2026: Trip Planner",
    description: "3 plans, real timings, actual costs, Google Maps routes.",
    images: ["https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/vizag-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/vizag-3-days#article",
      "headline": "Vizag in 3 Days: Complete Itinerary Guide (Budget to Premium, 2026)",
      "description": "3 complete Vizag plans — Budget, Nature, Premium — with real timings, costs, Google Maps routes and the spots most tourists miss entirely.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/vizag-3-days",
      },
      "keywords": "vizag itinerary, vizag 3 days, visakhapatnam travel guide, araku valley, borra caves, rk beach",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4800,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Vizag in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/vizag-3-days",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days are enough for Vizag?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is the sweet spot — Day 1 for city beaches and landmarks, Day 2 for the Araku Valley train ride and Borra Caves, Day 3 for Yarada Beach, Simhachalam Temple and departure. 4-5 days lets you add Rushikonda water sports and a second Araku day.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Vizag?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to March is the best time. October-November has pleasant weather and fewer crowds. December-January is peak season with the best weather but slightly higher hotel prices. February-March stays comfortable before the summer heat arrives in April.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Vizag trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget solo: under ₹6,000 including accommodation. Nature-focused mid-range: ₹8,000-₹18,000. Premium with Vistadome and resorts: ₹18,000-₹30,000. All prices include accommodation, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Araku Valley train ride worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely — it is India's most underrated scenic train ride. The journey covers 128km through 58 tunnels and across the Eastern Ghats. Book the Vistadome coach for ₹500 extra — glass ceiling, panoramic windows, worth every rupee. The train departs Vizag at 6:45am and reaches Araku by 11am.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I get to Vizag?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visakhapatnam Airport (VTZ) has direct flights from Delhi, Mumbai, Hyderabad, Bangalore, Chennai and Kolkata. IndiGo and Air India fly most routes. From the airport, the city centre is 12km — auto ₹200-₹300, Ola/Uber ₹150-₹250. Vizag also has a major railway station with trains from all metros.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I visit Borra Caves and Araku Valley in one day?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but you need to start very early. Take the 6:45am train to Araku, explore Araku Valley until 1pm, hire a cab to Borra Caves (90km, 2 hours), spend an hour at the caves, then drive back to Vizag (3 hours). Most day-trippers skip Borra Caves — don't, they are a million years old and genuinely spectacular.",
          },
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Visakhapatnam (Vizag), India",
      "description": "Andhra Pradesh's coastal jewel — known for its beaches, the Eastern Ghats, Araku Valley coffee plantations, and one of India's best scenic train rides.",
      "url": "https://www.incredibleitinerary.com/blog/vizag-3-days",
      "touristType": ["Beach Tourism", "Nature Tourism", "Cultural Tourism"],
    },
  ],
};

export default function VizagBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VizagClient />
    </>
  );
}
