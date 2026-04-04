import type { Metadata } from "next";
import TokyoClient from "./TokyoClient";

export const metadata: Metadata = {
  title: "Tokyo in 5 Days: The Only Itinerary Guide You Need (Budget to Luxury, 2026)",
  description:
    "3 complete Tokyo plans — Budget, Mid-Range, Luxury — with real timings, costs in yen and the mistakes every first-timer makes.",
  keywords: [
    "tokyo itinerary 5 days",
    "tokyo travel guide 2026",
    "tokyo budget travel",
    "tokyo japan trip",
    "shibuya shinjuku harajuku",
    "tokyo things to do",
    "japan travel guide",
    "tokyo trip planner",
  ],
  openGraph: {
    title: "Tokyo in 5 Days: Budget to Luxury Itinerary 2026",
    description:
      "Real timings, actual budgets, transit tips. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Tokyo Shibuya Crossing neon lights at night",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Tokyo", "Japan", "Travel", "Itinerary", "City"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tokyo in 5 Days: The Only Guide You Need (2026)",
    description: "3 plans, real timings, actual costs, transit tips.",
    images: ["https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/tokyo-5-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/tokyo-5-days#article",
      "headline": "Tokyo in 5 Days: The Only Itinerary Guide You Need (Budget to Luxury, 2026)",
      "description": "3 complete Tokyo plans — Budget, Mid-Range, Luxury — with real timings, costs in yen and the mistakes every first-timer makes.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
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
        "@id": "https://incredibleitinerary.com/blog/tokyo-5-days",
      },
      "keywords": "tokyo itinerary, tokyo 5 days, japan travel guide, shibuya crossing, shinjuku",
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
          "item": "https://incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Tokyo in 5 Days",
          "item": "https://incredibleitinerary.com/blog/tokyo-5-days",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days do you need in Tokyo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "5 days is ideal to cover Tokyo's main highlights without rushing. 3 days works if you skip day trips. 7 days lets you add Hakone, Yokohama, and explore neighbourhoods at a relaxed pace.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Tokyo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Late March to mid-April for cherry blossoms, or mid-October to November for autumn foliage. May and September-October offer mild weather with fewer tourists. Avoid Golden Week (late April to early May) and Obon (mid-August) when domestic travel peaks.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 5-day Tokyo trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget: around 8,000-12,000 yen per day (approximately 53-80 USD). Mid-range: 15,000-25,000 yen per day (100-167 USD). Luxury: 40,000 yen and above per day (267+ USD). All figures exclude flights and include accommodation, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need a Japan Rail Pass for Tokyo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For Tokyo only, no. A Suica or Pasmo IC card is cheaper and more convenient for metro and buses. The JR Pass only makes sense if you are also travelling to Kyoto, Osaka or other cities by bullet train.",
          },
        },
        {
          "@type": "Question",
          "name": "Do Indian passport holders need a visa for Japan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Indian passport holders need to apply for a tourist visa at the Japanese Embassy or Consulate. Processing takes 5-7 working days. Most Western passport holders (US, UK, EU, Australia) get visa-free entry for up to 90 days.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Tokyo easy to navigate without speaking Japanese?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Tokyo's metro has English signage everywhere, Google Maps works perfectly for transit directions, and most restaurants have picture menus or plastic food displays. Download Google Translate with the Japanese offline pack for menus and signs.",
          },
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Tokyo, Japan",
      "description": "Japan's capital and the world's largest metropolitan area, blending ancient temples with cutting-edge technology, world-class cuisine, and vibrant street culture.",
      "url": "https://incredibleitinerary.com/blog/tokyo-5-days",
      "touristType": ["City Tourism", "Cultural Tourism", "Food Tourism"],
    },
  ],
};

export default function TokyoBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TokyoClient />
    </>
  );
}
