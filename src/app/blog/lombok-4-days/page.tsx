import type { Metadata } from "next";
import LombokClient from "./LombokClient";

export const metadata: Metadata = {
  title: "Lombok in 4 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description:
    "3 complete Lombok plans — Budget, Mid-Range, Luxury — with real timings, costs in IDR & USD, Gili Islands route, south coast beaches and the mistakes every first-timer makes.",
  keywords: [
    "lombok itinerary 4 days",
    "lombok travel guide 2026",
    "lombok budget travel",
    "gili trawangan guide",
    "kuta lombok beaches",
    "senggigi beach lombok",
    "lombok trip planner",
    "gili islands snorkelling",
  ],
  openGraph: {
    title: "Lombok in 4 Days: Budget to Luxury Itinerary 2026",
    description:
      "Real timings, actual budgets in IDR & USD, Gili Island routes. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1570789210967-2cac24home73?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Lombok Gili Islands turquoise water beach",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Lombok", "Indonesia", "Travel", "Itinerary", "Beach", "Gili Islands"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lombok in 4 Days: The Only Guide You Need (2026)",
    description: "3 plans, real timings, actual costs in IDR & USD.",
    images: ["https://images.unsplash.com/photo-1570789210967-2cac24home73?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/lombok-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/lombok-4-days#article",
      "headline": "Lombok in 4 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      "description": "3 complete Lombok plans — Budget, Mid-Range, Luxury — with real timings, costs in IDR & USD, Gili Islands route, south coast beaches and the mistakes every first-timer makes.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1570789210967-2cac24home73?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/lombok-4-days",
      },
      "keywords": "lombok itinerary, lombok 4 days, gili trawangan, kuta lombok, senggigi, sendang gile waterfall",
      "articleSection": "Travel Guides",
      "inLanguage": "en",
      "wordCount": 5000,
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
          "name": "Lombok in 4 Days",
          "item": "https://www.incredibleitinerary.com/blog/lombok-4-days",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days do you need in Lombok?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "4 days is ideal to cover Senggigi, a Gili Island day trip or overnight, the south coast beaches and a waterfall visit. 7 days lets you add Mount Rinjani trekking and explore more of the Gili Islands.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 4-day Lombok trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget travellers can do 4 days for Rp1M-2M/day ($63-127 total). Mid-range travellers should budget Rp2.4M-4.8M/day ($152-304 total). Luxury travellers will spend Rp6M+/day ($380+ total). All include accommodation, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Lombok?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "May to September is dry season and best overall. June-August is peak season with best diving visibility. October-November and March-April are shoulder seasons with fewer crowds. December-February is wet season with occasional heavy rain.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need a visa for Lombok?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Same rules as Bali. Indian passport holders get a free 30-day visa on arrival. Most Western passports (USA, UK, EU, Australia, Canada) get 30 days visa-free. Both can extend by 30 days at immigration for Rp500,000.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Lombok better than Bali?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lombok is less developed, less crowded and more affordable than Bali. It's better for beaches, snorkelling, and travellers seeking an unspoiled island experience. Bali is better for culture, nightlife, restaurants and infrastructure. Many travellers combine both.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I get to the Gili Islands from Lombok?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Public boats leave from Bangsal harbour (30 min, Rp15,000-20,000). Fast boats from Senggigi or Teluk Nare are more comfortable (15-20 min, Rp85,000-150,000). Avoid Bangsal harbour touts — buy tickets only from the official booth.",
          },
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Lombok, Indonesia",
      "description": "Bali's quieter neighbour, known for pristine beaches, the Gili Islands, Mount Rinjani volcano, and a fraction of the tourist crowds.",
      "url": "https://www.incredibleitinerary.com/blog/lombok-4-days",
      "touristType": ["Beach Tourism", "Adventure Tourism", "Diving & Snorkelling"],
    },
  ],
};

export default function LombokBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LombokClient />
    </>
  );
}
