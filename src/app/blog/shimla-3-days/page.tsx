import type { Metadata } from "next";
import ShimlaClient from "./ShimlaClient";

export const metadata: Metadata = {
  title: "Shimla in 3 Days: Complete Hill Station Guide (Budget to Premium, 2026)",
  description:
    "3 complete Shimla plans — Budget, Family, Premium — with real timings, costs, toy train tips and the mistakes every first-timer makes.",
  keywords: [
    "shimla itinerary 3 days",
    "shimla travel guide 2026",
    "shimla budget travel",
    "shimla family trip",
    "kalka shimla toy train",
    "mall road shimla",
    "kufri shimla",
    "shimla trip planner",
  ],
  openGraph: {
    title: "Shimla in 3 Days: Budget to Premium Itinerary 2026",
    description:
      "Real timings, actual budgets, toy train logistics. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1597074866923-dc0589150e44?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Shimla Christ Church and Mall Road with mountain views",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Shimla", "India", "Travel", "Itinerary", "Hill Station", "Himachal Pradesh"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shimla in 3 Days: The Only Guide You Need (2026)",
    description: "3 plans, real timings, actual costs, toy train logistics.",
    images: ["https://images.unsplash.com/photo-1597074866923-dc0589150e44?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/shimla-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/shimla-3-days#article",
      "headline": "Shimla in 3 Days: Complete Hill Station Guide (Budget to Premium, 2026)",
      "description": "3 complete Shimla plans — Budget, Family, Premium — with real timings, costs, toy train tips and the mistakes every first-timer makes.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1597074866923-dc0589150e44?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/shimla-3-days",
      },
      "keywords": "shimla itinerary, shimla 3 days, shimla travel guide, mall road shimla, kalka shimla toy train, kufri",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4800,
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
          "name": "Shimla in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/shimla-3-days",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days are enough for Shimla?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is ideal to cover Shimla's main sights including Mall Road, Ridge, Jakhu Temple, Christ Church, and a day trip to Kufri or Mashobra. 5 days lets you add Naldehra, Chail, and a more relaxed pace.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Shimla?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "November to February for snow and winter charm — December-January sees the most snowfall. March to June for pleasant weather ideal for families and outdoor activities. Avoid monsoon (July-September) due to landslides.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Shimla trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget solo or couple: under 7,000 rupees including accommodation. Family of four mid-range: 8,000-20,000 rupees. Premium experience: 20,000-35,000 rupees. All prices include stay, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Kalka-Shimla toy train worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely — it is a UNESCO World Heritage ride through 102 tunnels and over 800 bridges. However it takes about 5 hours. The smart move is to take the train one way for the experience and a bus or taxi the other way to save time.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Kufri worth visiting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kufri is worth it only if there is snow — typically December to February. In summer, it is honestly overrated with pony rides and tourist traps. Mashobra, 20 minutes from Shimla, is quieter and prettier as an alternative.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Shimla from Delhi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Three main options: Volvo bus from Delhi ISBT (9-10 hours, 800-1200 rupees), Kalka-Shimla toy train from Kalka station after a Shatabdi from Delhi (total 10-11 hours), or drive/taxi via Chandigarh (7-8 hours, 350km).",
          },
        },
      ],
    },

    {
      "@type": "TouristDestination",
      "name": "Shimla, Himachal Pradesh, India",
      "description": "The former summer capital of British India, known for its colonial architecture, Mall Road promenade, snow-covered peaks, and the UNESCO-listed Kalka-Shimla toy train.",
      "url": "https://www.incredibleitinerary.com/blog/shimla-3-days",
      "touristType": ["Hill Station Tourism", "Cultural Tourism", "Heritage Tourism"],
    },
  ],
};

export default function ShimlaBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ShimlaClient />
    </>
  );
}
