import type { Metadata } from "next";
import PushkarClient from "./PushkarClient";

export const metadata: Metadata = {
  title: "Pushkar 2-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Pushkar trip in 2 days. Budget and Comfortable — with real timings for Brahma Temple, Savitri Temple trek, Pushkar Lake, Camel Fair, and a day.",
  keywords: [
    "pushkar itinerary 2 days",
    "pushkar travel guide 2026",
    "brahma temple pushkar",
    "pushkar lake ghats",
    "pushkar camel fair",
    "savitri temple pushkar",
    "ajmer sharif dargah",
    "pushkar budget travel",
    "rajasthan trip planner",
    "pushkar rose garden",
  ],
  openGraph: {
    title: "Pushkar 2-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, honest cafe reviews. 2 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Pushkar Lake with ghats and temples at sunset",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Pushkar", "India", "Travel", "Itinerary", "Rajasthan", "Pilgrimage"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pushkar 2-Day Itinerary 2026: Trip Planner",
    description: "2 plans, real timings, honest food tips, actual costs.",
    images: ["https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/pushkar-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/pushkar-2-days#article",
      "headline": "Pushkar in 2 Days: Brahma Temple, Lake Ghats & Camel Fair Guide (2026)",
      "description": "2 complete Pushkar plans — Budget and Comfortable — with real timings for Brahma Temple, Savitri Temple trek, Pushkar Lake, and Camel Fair.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/pushkar-2-days",
      },
      "keywords": "pushkar itinerary, brahma temple, pushkar lake, camel fair, savitri temple, ajmer dargah, rajasthan travel",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4500,
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
          "name": "Pushkar in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/pushkar-2-days",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days are enough for Pushkar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2 days is the sweet spot for Pushkar. Day 1 covers Brahma Temple, Pushkar Lake ghats, Rose Garden, and the Savitri Temple sunset trek. Day 2 covers Old Rangji Temple, lakeside exploration, cafes, and a half-day trip to Ajmer Sharif Dargah. 1 day is rushed and 3 days means you'll run out of things to do.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Pushkar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to March is the best time to visit Pushkar. November is the absolute peak because of the Pushkar Camel Fair, the most spectacular cultural event in Rajasthan. December to February is pleasantly cool at 8-25 degrees Celsius. Avoid April to June when temperatures hit 40-45 degrees Celsius.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 2-day Pushkar trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget travellers can do 2 days in Pushkar for under 4,000 rupees including guesthouse accommodation, street food, and the Savitri Temple trek. A comfortable trip costs 5,000-12,000 rupees with heritage hotels, sit-down restaurants, and a cab to Ajmer. Pushkar is one of the cheapest tourist towns in Rajasthan.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Brahma Temple in Pushkar really the only one in the world?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the Jagatpita Brahma Temple in Pushkar is widely considered the only dedicated temple to Lord Brahma in the world. While a handful of small shrines exist elsewhere, this is the only significant, actively worshipped Brahma temple. It dates back to the 14th century and is one of the most important Hindu pilgrimage sites in India.",
          },
        },
        {
          "@type": "Question",
          "name": "When is the Pushkar Camel Fair?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Pushkar Camel Fair (Pushkar Mela) happens every November, timed to the Kartik Purnima full moon. Dates change each year based on the Hindu calendar. In 2026, it falls in early to mid November. The fair runs for about 5-7 days. Book accommodation months in advance as every room in Pushkar sells out.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I get from Pushkar to Ajmer Sharif Dargah?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ajmer is just 15 km from Pushkar, about 30 minutes by auto-rickshaw (150-200 rupees one way) or shared jeep (30-50 rupees). The Dargah of Khwaja Moinuddin Chishti is in the old city of Ajmer. Allow 2-3 hours for the Dargah visit including the walk through the bazaar. Pushkar to Ajmer buses run every 15 minutes from the bus stand.",
          },
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Pushkar, Rajasthan, India",
      "description": "One of the oldest cities in India, home to the world's only Brahma Temple, the sacred Pushkar Lake, and the famous annual Camel Fair.",
      "url": "https://www.incredibleitinerary.com/blog/pushkar-2-days",
      "touristType": ["Religious Tourism", "Cultural Tourism", "Heritage Tourism", "Festival Tourism"],
    },
  ],
};

export default function PushkarBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PushkarClient />
    </>
  );
}
