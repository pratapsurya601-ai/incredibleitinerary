import type { Metadata } from "next";
import AmritsarClient from "./AmritsarClient";

export const metadata: Metadata = {
  title: "Amritsar 2-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Amritsar trip in 2 days. Budget and Comfortable — with real timings for the Golden Temple, Wagah Border ceremony, Partition Museum, and an.",
  keywords: [
    "amritsar itinerary 2 days",
    "golden temple amritsar",
    "wagah border ceremony",
    "amritsar street food",
    "amritsar travel guide 2026",
    "partition museum amritsar",
    "jallianwala bagh",
    "amritsar trip planner",
    "amritsar budget travel",
    "punjab tourism",
  ],
  openGraph: {
    title: "Amritsar 2-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, street food guide. 2 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Golden Temple Amritsar at night with reflection",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Amritsar", "India", "Travel", "Itinerary", "Punjab", "Golden Temple"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amritsar 2-Day Itinerary 2026: Trip Planner",
    description: "2 plans, real timings, street food guide, actual costs.",
    images: ["https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/amritsar-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/amritsar-2-days#article",
      "headline": "Amritsar in 2 Days: Golden Temple, Wagah Border & the Best Street Food in India (2026)",
      "description": "2 complete Amritsar plans — Budget and Comfortable — with real timings for the Golden Temple, Wagah Border ceremony, Partition Museum, and street food guide.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/amritsar-2-days",
      },
      "keywords": "amritsar itinerary, golden temple, wagah border, amritsar street food, jallianwala bagh, partition museum",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4200,
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
          "name": "Amritsar in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/amritsar-2-days",
        },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Amritsar, Punjab, India",
      "description": "The spiritual capital of Sikhism, home to the Golden Temple (Harmandir Sahib), the Wagah Border ceremony, and some of the best street food in India.",
      "url": "https://www.incredibleitinerary.com/blog/amritsar-2-days",
      "touristType": ["Religious Tourism", "Cultural Tourism", "Food Tourism", "Heritage Tourism"],
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
          "name": "How many days are enough for Amritsar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2 days is the sweet spot for Amritsar. Day 1 covers the Golden Temple, Jallianwala Bagh, old city food walk, and Wagah Border. Day 2 covers the Langar kitchen, Partition Museum, and shopping. 1 day is possible but rushed. 3 days lets you add Gobindgarh Fort and a day trip to Khatkar Kalan.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Amritsar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to March is the best time. November to February has pleasant weather between 5-20 degrees Celsius. Avoid April to June when temperatures regularly hit 42-47 degrees Celsius. The Golden Temple is beautiful year-round but summer heat makes walking the old city miserable.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 2-day Amritsar trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget travellers can do 2 days for under 5,000 rupees including accommodation, food, and transport. A comfortable trip costs 5,000-12,000 rupees with mid-range hotels, auto-rickshaws, and sit-down restaurants. The Golden Temple, Jallianwala Bagh, and Wagah Border are all free entry.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Golden Temple free to visit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the Golden Temple (Harmandir Sahib) is completely free. Entry is free, the Langar (community kitchen) serves free meals to everyone regardless of religion, and the Sarai (guesthouse) offers free accommodation. You need to cover your head (scarves available at the entrance) and remove your shoes.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I get to the Wagah Border ceremony?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wagah Border is 28 km from Amritsar city center, about 45 minutes by auto or cab. The ceremony starts before sunset (timings vary by season). Arrive 2 hours early for a good seat. Shared autos from Hall Gate cost around 50-80 rupees. Private auto is 400-600 rupees return with waiting.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best street food in Amritsar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amritsar has arguably the best street food in India. Must-try items: Amritsari kulcha at Bharawan Da Dhaba, lassi at Ahuja Milk Bhandar (since 1957), amritsari fish at Makhan Fish Corner, and chole bhature at Kesar Da Dhaba. Most iconic food spots are in the old city near the Golden Temple.",
          },
        },
      ],
};

export default function AmritsarBlogPage() {
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
      <AmritsarClient />
    </>
  );
}
