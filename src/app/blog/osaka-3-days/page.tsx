import type { Metadata } from "next";
import OsakaClient from "./OsakaClient";

export const metadata: Metadata = {
  title: "Osaka in 3 Days: The Only Itinerary Guide You Need (Budget to Luxury, 2026)",
  description:
    "3 complete Osaka plans — Budget, Mid-Range, Luxury — with real timings, costs in yen, street food maps and the mistakes every first-timer makes.",
  keywords: [
    "osaka itinerary 3 days",
    "osaka travel guide 2026",
    "osaka budget travel",
    "dotonbori osaka",
    "osaka street food guide",
    "osaka castle",
    "japan travel guide",
    "osaka trip planner",
  ],
  openGraph: {
    title: "Osaka in 3 Days: Budget to Luxury Itinerary 2026",
    description:
      "Real timings, actual budgets, street food crawls. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Osaka Dotonbori canal neon signs at night",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Osaka", "Japan", "Travel", "Itinerary", "Food"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Osaka in 3 Days: The Only Guide You Need (2026)",
    description: "3 plans, real timings, actual costs, street food maps.",
    images: ["https://images.unsplash.com/photo-1590559899731-a382839e5549?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/osaka-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/osaka-3-days#article",
      "headline": "Osaka in 3 Days: The Only Itinerary Guide You Need (Budget to Luxury, 2026)",
      "description": "3 complete Osaka plans — Budget, Mid-Range, Luxury — with real timings, costs in yen, street food maps and the mistakes every first-timer makes.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/osaka-3-days",
      },
      "keywords": "osaka itinerary, osaka 3 days, japan travel guide, dotonbori, osaka street food",
      "articleSection": "Travel Guides",
      "inLanguage": "en",
      "wordCount": 5200,
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
          "name": "Osaka in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/osaka-3-days",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days do you need in Osaka?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is perfect for Osaka's highlights including Osaka Castle, Dotonbori, Kuromon Market, and a day for either Universal Studios or deeper neighbourhood exploration. 2 days works if you skip Universal. 4-5 days lets you add day trips to Kobe or Himeji.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Osaka?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Late March to May for cherry blossoms and pleasant weather, or October to November for autumn colours. Summer (June-August) is hot and humid. Avoid Golden Week (late April to early May) and Obon (mid-August) when prices spike.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Osaka trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget: 7,000-10,000 yen per day (47-67 USD). Mid-range: 12,000-18,000 yen per day (80-120 USD). Luxury: 30,000 yen and above per day (200+ USD). Excludes travel to Osaka from other cities.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Osaka worth visiting if I'm already going to Tokyo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Osaka has a completely different energy from Tokyo — louder, funnier, more food-obsessed. The street food scene is unmatched anywhere in Japan. And it's only 2.5 hours from Tokyo by bullet train, making it an easy addition to any Japan trip.",
          },
        },
        {
          "@type": "Question",
          "name": "What food must I try in Osaka?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Takoyaki (octopus balls) and okonomiyaki (savoury pancakes) are the two must-eats. Also try kushikatsu (deep-fried skewers), gyoza at Chibo, and a full Kuromon Market breakfast with fresh sashimi and grilled seafood. Budget at least 3,000-5,000 yen per day just for food.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I get from Kyoto to Osaka?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Multiple fast options: JR Special Rapid train takes 29 minutes for 580 yen. Hankyu Railway takes 43 minutes for 410 yen. Keihan Railway is similar. All are covered by IC cards (Suica/ICOCA). No bullet train needed for this short distance.",
          },
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Osaka, Japan",
      "description": "Japan's kitchen and comedy capital, known for world-class street food, neon-lit Dotonbori canal, historic castle, and the warmest people in Japan.",
      "url": "https://www.incredibleitinerary.com/blog/osaka-3-days",
      "touristType": ["Food Tourism", "City Tourism", "Cultural Tourism"],
    },
  ],
};

export default function OsakaBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OsakaClient />
    </>
  );
}
