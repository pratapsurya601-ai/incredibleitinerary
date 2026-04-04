import type { Metadata } from "next";
import RomeClient from "./RomeClient";

export const metadata: Metadata = {
  title: "Rome in 4 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description:
    "3 complete Rome plans — Budget, Mid-Range, Luxury — with real timings, costs in EUR/USD, first-entry Vatican tips and the mistakes every first-timer makes.",
  keywords: [
    "rome itinerary 4 days",
    "rome travel guide 2026",
    "rome budget travel",
    "colosseum tickets",
    "vatican first entry",
    "rome trip planner",
    "italy travel guide",
    "rome pass worth it",
  ],
  openGraph: {
    title: "Rome in 4 Days: Budget to Luxury Itinerary 2026",
    description:
      "Real timings, actual budgets, first-entry Vatican tips. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Rome Colosseum at golden hour",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Rome", "Italy", "Travel", "Itinerary", "Europe"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rome in 4 Days: The Only Guide You Need (2026)",
    description: "3 plans, real timings, actual costs, first-entry Vatican tips.",
    images: ["https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/rome-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/rome-4-days#article",
      "headline": "Rome in 4 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      "description": "3 complete Rome plans — Budget, Mid-Range, Luxury — with real timings, costs in EUR/USD, first-entry Vatican tips and the mistakes every first-timer makes.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-04T00:00:00Z",
      "dateModified": "2026-04-04T00:00:00Z",
      "author": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://incredibleitinerary.com",
      },
      "publisher": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://incredibleitinerary.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://incredibleitinerary.com/logo.png",
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://incredibleitinerary.com/blog/rome-4-days",
      },
      "keywords": "rome itinerary, rome 4 days, rome travel guide, colosseum, vatican, sistine chapel",
      "articleSection": "Travel Guides",
      "inLanguage": "en",
      "wordCount": 6200,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Rome in 4 Days", "item": "https://incredibleitinerary.com/blog/rome-4-days" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days do you need in Rome?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "4 days is ideal for Rome. You can cover the Colosseum, Vatican, Trastevere, and Borghese Gallery without rushing. 3 days is possible but tight. 5+ days lets you add day trips to Pompeii or Tivoli.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 4-day Rome trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget: \u20ac60-100/day ($65-108 USD). Mid-range: \u20ac120-200/day ($130-216 USD). Luxury: \u20ac300+/day ($325+ USD). This includes accommodation, food, transport and museum entries.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Roma Pass worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 72-hour Roma Pass (\u20ac52) includes free metro/bus, free entry to 2 museums, and discounts on others. Worth it if you plan to use public transport frequently and visit at least 2 paid attractions. Skip it if you prefer walking and already have pre-booked skip-the-line tickets.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need a visa for Italy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Indian passport holders need a Schengen visa (apply 3 months ahead at VFS Global, \u20ac80 fee). US, UK, Australian, and Canadian citizens can visit visa-free for up to 90 days within any 180-day period. No pre-registration required.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Rome?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "April-May and September-October offer the best combination of weather, manageable crowds, and reasonable prices. June-August is hot (35\u00b0C+) and extremely crowded. November-March is cheapest but some days are rainy and cold.",
          },
        },
        {
          "@type": "Question",
          "name": "Should I book Vatican tickets in advance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. The Vatican Museums queue can be 3-4 hours in peak season. Book the 7:30am first entry slot online for \u20ac38 \u2014 you get the Sistine Chapel nearly empty before general admission opens at 9am. Book at least 2-3 weeks ahead.",
          },
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Rome, Italy",
      "description": "Italy's capital and a living museum spanning 2,800 years of history, from the Colosseum to the Vatican, known for its art, architecture, and cuisine.",
      "url": "https://incredibleitinerary.com/blog/rome-4-days",
      "touristType": ["Cultural Tourism", "Historical Tourism", "Food Tourism"],
    },
  ],
};

export default function RomeBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RomeClient />
    </>
  );
}
