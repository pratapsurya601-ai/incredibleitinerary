import type { Metadata } from "next";
import OotyBlogClient from "./OotyClient";

export const metadata: Metadata = {
  title: "Ooty in 3 Days: Complete Hill Station Itinerary (Budget to Premium, 2026)",
  description:
    "3 complete Ooty plans — Budget, Family, Premium — with the Nilgiri Mountain Railway, Botanical Gardens, Doddabetta Peak, tea factories and the mistakes every first-timer makes.",
  keywords: [
    "ooty itinerary 3 days",
    "ooty travel guide 2026",
    "ooty budget travel",
    "ooty family trip",
    "nilgiri mountain railway",
    "ooty hill station",
    "ooty tea plantation",
    "ooty trip planner",
    "coonoor travel guide",
    "doddabetta peak ooty",
  ],
  openGraph: {
    title: "Ooty in 3 Days: Budget to Premium Hill Station Itinerary 2026",
    description:
      "Real timings, actual budgets, the Nilgiri toy train, tea factories and Doddabetta sunrise. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Ooty Nilgiri hills tea plantation landscape",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Ooty", "India", "Travel", "Itinerary", "Hill Station", "Nilgiri"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ooty in 3 Days: The Only Guide You Need (2026)",
    description: "3 plans, real timings, actual costs, Nilgiri toy train and tea plantation routes.",
    images: ["https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/ooty-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/ooty-3-days#article",
      "headline": "Ooty in 3 Days: Complete Hill Station Itinerary (Budget to Premium, 2026)",
      "description": "3 complete Ooty plans — Budget, Family, Premium — with the Nilgiri Mountain Railway, Botanical Gardens, Doddabetta Peak, tea factories and the mistakes every first-timer makes.",
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
        "@id": "https://www.incredibleitinerary.com/blog/ooty-3-days",
      },
      "keywords": "ooty itinerary, ooty 3 days, ooty travel guide, nilgiri mountain railway, doddabetta peak, ooty tea plantation",
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
          "name": "Ooty in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/ooty-3-days",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days are enough for Ooty?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is ideal to cover Ooty, Coonoor and the Nilgiri Mountain Railway without rushing. 2 days feels cramped because the toy train alone takes half a day. 4-5 days lets you add Kotagiri and the deeper Nilgiri villages.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Ooty?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "September to March is the best time. September-November offers emerald green hills after the monsoon with very few tourists. December-February is cooler (5-15°C) and great for trekking. Avoid April-June when 30,000+ tourists descend on a town built for 3,000 — traffic jams, inflated prices and no parking.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Ooty trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget solo or couple: under ₹7,000 per person including accommodation. Family of 4 mid-range: ₹8,000-₹18,000 total. Premium: ₹18,000-₹35,000 for two. All prices include stay, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I book the Nilgiri Mountain Railway toy train?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Book on the IRCTC website at least 2 weeks in advance. The full Mettupalayam to Ooty run departs at 7:10am daily. First class costs ₹300 extra and is absolutely worth it for the open windows. If the full run is sold out, the Coonoor to Ooty segment is easier to get and still covers the most scenic stretch.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Ooty worth visiting with kids?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ooty is one of the best hill station trips for families. The toy train is a guaranteed hit with children, Ooty Lake has pedal boats, the Botanical Gardens have open lawns, and the chocolate shops in town keep everyone happy. Avoid steep treks with young kids — stick to Doddabetta viewpoint and Sim's Park instead.",
          },
        },
        {
          "@type": "Question",
          "name": "Should I stay in Ooty or Coonoor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Coonoor is quieter, less crowded and has better homestays with valley views. Ooty town has more restaurants, shops and is the transport hub. Best strategy: stay in Ooty for convenience but spend a full day exploring Coonoor. If you want peace and don't mind fewer restaurant options, base yourself in Coonoor.",
          },
        },
      ],
    },

    {
      "@type": "TouristDestination",
      "name": "Ooty (Udhagamandalam), Tamil Nadu, India",
      "description": "The Queen of Hill Stations in the Nilgiri Mountains, known for the UNESCO Heritage Nilgiri Mountain Railway, tea plantations, botanical gardens and colonial-era charm.",
      "url": "https://www.incredibleitinerary.com/blog/ooty-3-days",
      "touristType": ["Hill Station Tourism", "Nature Tourism", "Heritage Tourism", "Family Tourism"],
    },
  ],
};

export default function OotyBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OotyBlogClient />
    </>
  );
}
