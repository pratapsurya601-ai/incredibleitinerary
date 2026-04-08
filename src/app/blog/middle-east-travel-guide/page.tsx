import type { Metadata } from "next";
import MiddleEastGuideClient from "./MiddleEastGuideClient";

export const metadata: Metadata = {
  title: "Middle East Travel Guide: Dubai, Turkey, Jordan, Egypt & More (2026)",
  description:
    "Complete Middle East guide covering Dubai, Turkey, Jordan, Egypt, Oman, Qatar and Saudi Arabia with routes, budgets and visa info.",
  keywords: [
    "middle east travel guide",
    "dubai travel guide 2026",
    "turkey itinerary",
    "jordan petra travel",
    "egypt pyramids guide",
    "middle east visa for indians",
    "middle east trip planner",
    "middle east budget travel",
  ],
  openGraph: {
    title: "Middle East Travel Guide: Dubai, Turkey, Jordan, Egypt & More (2026)",
    description:
      "6 countries, 20+ guides, real budgets, visa info for Indians and the routes that actually work.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Dubai skyline with Burj Khalifa at sunset",
      },
    ],
    type: "article",
    publishedTime: "2026-04-09T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Middle East", "Dubai", "Turkey", "Jordan", "Egypt", "Travel"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Middle East Travel Guide: Dubai, Turkey, Jordan, Egypt & More (2026)",
    description: "6 countries, 20+ guides, real budgets, visa info.",
    images: ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/middle-east-travel-guide",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/middle-east-travel-guide#article",
      "headline": "Middle East Travel Guide: Dubai, Turkey, Jordan, Egypt & More (2026)",
      "description":
        "Complete Middle East guide covering Dubai, Turkey, Jordan, Egypt, Oman, Qatar and Saudi Arabia with routes, budgets and visa info.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-09T00:00:00Z",
      "dateModified": "2026-04-09T00:00:00Z",
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
        "@id": "https://www.incredibleitinerary.com/blog/middle-east-travel-guide",
      },
      "keywords": "middle east travel guide, dubai, turkey, jordan, egypt, oman, qatar, saudi arabia",
      "articleSection": "Travel Guides",
      "inLanguage": "en",
      "wordCount": 7200,
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
          "name": "Middle East Travel Guide",
          "item": "https://www.incredibleitinerary.com/blog/middle-east-travel-guide",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Middle East",
      "description":
        "A region spanning ancient wonders and ultramodern cities, from Dubai's skyscrapers to Petra's rose-red cliffs, Turkey's bazaars and Egypt's pyramids.",
      "url": "https://www.incredibleitinerary.com/blog/middle-east-travel-guide",
      "touristType": ["Cultural Tourism", "City Tourism", "Adventure Tourism", "Historical Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the Middle East safe for tourists in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The major tourist destinations covered in this guide — UAE, Turkey, Jordan, Egypt, Oman, Qatar and Saudi Arabia — are all safe for tourists with normal precautions. These countries have invested heavily in tourism infrastructure and security. Always check your government's travel advisory before booking.",
      },
    },
    {
      "@type": "Question",
      "name": "Do Indian passport holders need a visa for Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Indian passport holders can get a visa on arrival in the UAE for 14 days if they hold a valid US visa, UK residence permit, or EU residence permit. Otherwise, a pre-arranged tourist visa is required which takes 3-5 working days. Turkey offers an e-visa for Indians. Jordan offers visa on arrival for most nationalities.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit the Middle East?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "October to April is ideal for the Gulf countries (UAE, Oman, Qatar, Saudi Arabia) when temperatures are comfortable at 20-30 degrees Celsius. Turkey is best from April to June and September to November. Egypt is pleasant from October to April. Avoid the Gulf in summer when temperatures exceed 45 degrees Celsius.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does a Middle East trip cost per day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Costs vary hugely by country. Turkey and Egypt are budget-friendly at 25-80 USD per day. Jordan costs 40-100 USD per day. Dubai and Qatar are expensive at 80-300 USD per day. Oman falls in the middle at 50-120 USD per day. Budget travellers can find affordable options in every country except peak Dubai.",
      },
    },
    {
      "@type": "Question",
      "name": "What should women wear when travelling in the Middle East?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dress codes vary by country. In the UAE, Turkey and Jordan, modest casual clothing is fine — covering shoulders and knees in public areas and religious sites. In Saudi Arabia, an abaya is no longer mandatory for tourists but modest clothing is expected. In Egypt, lightweight loose clothing covering arms and legs is recommended. Istanbul and Dubai are quite liberal in tourist areas.",
      },
    },
  ],
};

export default function MiddleEastGuidePage() {
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
      <MiddleEastGuideClient />
    </>
  );
}
