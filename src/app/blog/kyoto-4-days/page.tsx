import type { Metadata } from "next";
import KyotoClient from "./KyotoClient";

export const metadata: Metadata = {
  title: "4 Days in Kyoto: Kyoto 4 Day Itinerary (2026 Trip Planner)",
  description:
    "4 days itinerary Kyoto — complete Kyoto 4 day itinerary with Budget, Mid-Range, Luxury plans, real timings, yen costs, temple strategies and first-timer tips.",
  keywords: [
    "kyoto itinerary 4 days",
    "kyoto travel guide 2026",
    "kyoto budget travel",
    "fushimi inari shrine",
    "arashiyama bamboo grove",
    "kyoto temples guide",
    "japan travel guide",
    "kyoto trip planner",
    "4 days in kyoto",
    "kyoto 4 day itinerary",
    "4 days itinerary kyoto",
  ],
  openGraph: {
    title: "4 Days in Kyoto: Kyoto 4 Day Itinerary (2026 Trip Planner)",
    description:
      "Kyoto 4 day itinerary — real timings, actual budgets, temple strategies. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Fushimi Inari torii gates shrine Kyoto",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Kyoto", "Japan", "Travel", "Itinerary", "Temples"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyoto 4-Day Itinerary 2026: Trip Planner",
    description: "3 plans, real timings, actual costs, temple strategies.",
    images: ["https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/kyoto-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/kyoto-4-days#article",
      "headline": "Kyoto in 4 Days: The Only Itinerary Guide You Need (Budget to Luxury, 2026)",
      "description": "3 complete Kyoto plans — Budget, Mid-Range, Luxury — with real timings, costs in yen, temple strategies and the mistakes every first-timer makes.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/kyoto-4-days",
      },
      "keywords": "kyoto itinerary, kyoto 4 days, japan travel guide, fushimi inari, arashiyama",
      "articleSection": "Travel Guides",
      "inLanguage": "en",
      "wordCount": 5800,
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
          "name": "Kyoto in 4 Days",
          "item": "https://www.incredibleitinerary.com/blog/kyoto-4-days",
        },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Kyoto, Japan",
      "description": "Japan's ancient capital with over 2,000 temples and shrines, traditional geisha districts, bamboo groves, and the finest examples of Japanese garden design.",
      "url": "https://www.incredibleitinerary.com/blog/kyoto-4-days",
      "touristType": ["Cultural Tourism", "Temple Tourism", "Heritage Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days do you need in Kyoto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "4 days is ideal to cover Kyoto's major temples, Arashiyama, and a day trip to Nara without rushing. 2-3 days works if you're selective. 5-6 days lets you explore hidden temples, tea houses, and the outskirts.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Kyoto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Late March to mid-April for cherry blossoms, or mid-November for peak autumn colours. May and October offer pleasant weather with fewer tourists. Avoid Golden Week (late April to early May) and Obon (mid-August).",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 4-day Kyoto trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget: 7,000-10,000 yen per day (47-67 USD). Mid-range: 12,000-20,000 yen per day (80-133 USD). Luxury: 35,000 yen and above per day (233+ USD). Excludes travel to Kyoto from other cities.",
          },
        },
        {
          "@type": "Question",
          "name": "Should I rent a bicycle in Kyoto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely yes. Kyoto is flat and compact. Renting a bicycle for 800-1,000 yen per day will triple the number of temples you can visit compared to buses. Most guesthouses offer rental or can point you to nearby shops.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I get from Tokyo to Kyoto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Shinkansen (bullet train) takes 2 hours 15 minutes and costs around 13,320 yen one way. If buying a JR Pass for wider Japan travel, the Tokyo-Kyoto route alone almost justifies the cost. Budget alternative: highway bus for 3,000-5,000 yen, takes 7-8 hours.",
          },
        },
        {
          "@type": "Question",
          "name": "What time should I arrive at Fushimi Inari?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "6am. The shrine is open 24/7 and free. At 6am you'll have the iconic torii gate tunnel nearly to yourself for photos. By 10am it becomes a crowded selfie queue. The full hike to the summit takes about 2 hours.",
          },
        },
      ],
};

export default function KyotoBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <KyotoClient />
    </>
  );
}
