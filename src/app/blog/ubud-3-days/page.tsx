import type { Metadata } from "next";
import UbudClient from "./UbudClient";

export const metadata: Metadata = {
  title: "Ubud in 3 Days: Complete Itinerary Guide (Budget & Comfortable, 2026)",
  description:
    "2 complete Ubud plans — Budget and Comfortable — with real timings, costs in IDR & USD, rice terrace routes, temple guides and the mistakes every first-timer makes.",
  keywords: [
    "ubud itinerary 3 days",
    "ubud travel guide 2026",
    "ubud budget travel",
    "tegallalang rice terraces",
    "tirta empul temple",
    "ubud monkey forest",
    "ubud yoga retreat",
    "ubud trip planner",
  ],
  openGraph: {
    title: "Ubud in 3 Days: Budget & Comfortable Itinerary 2026",
    description:
      "Real timings, actual budgets in IDR & USD, rice terrace routes. 2 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Ubud rice terraces green valley Bali",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Ubud", "Bali", "Indonesia", "Travel", "Itinerary", "Culture"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ubud in 3 Days: The Only Guide You Need (2026)",
    description: "2 plans, real timings, actual costs in IDR & USD.",
    images: ["https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/ubud-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/ubud-3-days#article",
      "headline": "Ubud in 3 Days: Complete Itinerary Guide (Budget & Comfortable, 2026)",
      "description": "2 complete Ubud plans — Budget and Comfortable — with real timings, costs in IDR & USD, rice terrace routes, temple guides and the mistakes every first-timer makes.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/ubud-3-days",
      },
      "keywords": "ubud itinerary, ubud 3 days, tegallalang, tirta empul, monkey forest, campuhan ridge walk",
      "articleSection": "Travel Guides",
      "inLanguage": "en",
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
          "name": "Ubud in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/ubud-3-days",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days are enough for Ubud?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is perfect for Ubud's highlights: Monkey Forest, rice terraces, temples, and the Campuhan Ridge Walk. 5 days lets you add Mount Batur sunrise trek, cooking classes, and a deeper yoga/wellness immersion.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Ubud trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget travellers can do 3 days in Ubud for Rp750k-1.5M/day ($47-95 total). Comfortable travellers should budget Rp1.8M-3.6M/day ($114-228 total). Both include accommodation, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Ubud?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "April to October is dry season and best overall. May-June offers the best value. July-August is peak season. November-March is wet season but the rice terraces are at their greenest and prices drop 30-50%.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need a visa for Ubud / Bali?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Indian passport holders get a free 30-day visa on arrival. Most Western passports (USA, UK, EU, Australia, Canada) get 30 days visa-free. Both can extend by 30 days at immigration for Rp500,000.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Ubud safe for solo travellers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Ubud is one of the safest destinations in Southeast Asia for solo travellers. The main concerns are scooter accidents (wear a helmet, drive slowly) and monkeys stealing belongings at the Monkey Forest. Crime against tourists is extremely rare.",
          },
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Ubud, Bali, Indonesia",
      "description": "The cultural heart of Bali, known for its terraced rice paddies, Hindu temples, traditional arts, yoga retreats and lush jungle valleys.",
      "url": "https://www.incredibleitinerary.com/blog/ubud-3-days",
      "touristType": ["Cultural Tourism", "Wellness Tourism", "Eco Tourism"],
    },
  ],
};

export default function UbudBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UbudClient />
    </>
  );
}
