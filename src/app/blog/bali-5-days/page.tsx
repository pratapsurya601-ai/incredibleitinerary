import type { Metadata } from "next";
import BaliClient from "./BaliClient";

export const metadata: Metadata = {
  title: "Bali in 5 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description:
    "3 complete Bali plans — Budget, Mid-Range, Luxury — with real timings, costs in IDR & USD, temple routes, rice terrace timings and the mistakes every first-timer makes.",
  keywords: [
    "bali itinerary 5 days",
    "bali travel guide 2026",
    "bali budget travel",
    "ubud rice terraces",
    "uluwatu temple bali",
    "nusa penida day trip",
    "bali trip planner",
    "seminyak canggu guide",
  ],
  openGraph: {
    title: "Bali in 5 Days: Budget to Luxury Itinerary 2026",
    description:
      "Real timings, actual budgets in IDR & USD, temple routes. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Bali Uluwatu temple cliff sunset",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Bali", "Indonesia", "Travel", "Itinerary", "Temples"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bali in 5 Days: The Only Guide You Need (2026)",
    description: "3 plans, real timings, actual costs in IDR & USD.",
    images: ["https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/bali-5-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/bali-5-days#article",
      "headline": "Bali in 5 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      "description": "3 complete Bali plans — Budget, Mid-Range, Luxury — with real timings, costs in IDR & USD, temple routes, rice terrace timings and the mistakes every first-timer makes.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/bali-5-days",
      },
      "keywords": "bali itinerary, bali 5 days, ubud rice terraces, uluwatu temple, nusa penida, seminyak canggu",
      "articleSection": "Travel Guides",
      "inLanguage": "en",
      "wordCount": 6200,
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
          "name": "Bali in 5 Days",
          "item": "https://www.incredibleitinerary.com/blog/bali-5-days",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days do you need in Bali?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "5 days is ideal to cover Ubud, Uluwatu, a Nusa Penida day trip and a beach day. 3 days works if you pick either Ubud or the south coast. 7-10 days lets you add Sidemen, Amed or the Gili Islands.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 5-day Bali trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget travellers can do 5 days for Rp1.5M-3M/day (USD $95-190 total). Mid-range travellers should budget Rp4M-7.5M/day (USD $250-475 total). Luxury travellers will spend Rp12.5M+/day (USD $790+ total). All prices include accommodation, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Bali?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "April to October is dry season and best overall. May-June and September offer the best value with fewer crowds. July-August is peak season with highest prices. November-March is wet season but still warm, with lower prices and dramatic green landscapes.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need a visa for Bali?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Indian passport holders get a free 30-day visa on arrival. Most Western passports (USA, UK, EU, Australia, Canada) also get 30 days visa-free. Both can extend by 30 days at an immigration office for Rp500,000. Passport must be valid for 6+ months with at least 2 blank pages.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Ubud or Seminyak better for first-timers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ubud is better for culture, rice terraces, yoga and spiritual experiences. Seminyak and Canggu are better for beach clubs, surfing and nightlife. The smartest approach is to split your time: 2-3 nights in Ubud, then move south to Uluwatu or Seminyak.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Nusa Penida worth a day trip from Bali?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely yes. Kelingking Beach, Angel's Billabong and Broken Beach are among the most dramatic coastal scenery in Southeast Asia. The fast boat takes 30-45 minutes from Sanur. Book a private driver on the island (Rp600,000-800,000 for a full day) as roads are rough.",
          },
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Bali, Indonesia",
      "description": "Indonesia's most famous island, known for its terraced rice paddies, ancient Hindu temples, volcanic landscapes, world-class surf breaks and vibrant wellness culture.",
      "url": "https://www.incredibleitinerary.com/blog/bali-5-days",
      "touristType": ["Cultural Tourism", "Beach Tourism", "Wellness Tourism", "Adventure Tourism"],
    },
  ],
};

export default function BaliBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BaliClient />
    </>
  );
}
