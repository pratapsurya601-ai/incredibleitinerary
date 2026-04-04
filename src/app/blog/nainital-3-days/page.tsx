import type { Metadata } from "next";
import NainitalClient from "./NainitalClient";

export const metadata: Metadata = {
  title: "Nainital in 3 Days: Complete Hill Station Guide (Budget to Premium, 2026)",
  description:
    "3 complete Nainital plans — Budget, Family, Premium — with real timings, costs, Google Maps routes and the mistakes every first-timer makes.",
  keywords: [
    "nainital itinerary 3 days",
    "nainital travel guide 2026",
    "nainital budget travel",
    "nainital family trip",
    "naini lake boating",
    "nainital hill station",
    "nainital packages india",
    "nainital trip planner",
  ],
  openGraph: {
    title: "Nainital in 3 Days: Budget to Premium Itinerary 2026",
    description:
      "Real timings, actual budgets, Google Maps routes. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Nainital lake surrounded by mountains",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Nainital", "India", "Travel", "Itinerary", "Hill Station"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nainital in 3 Days: The Only Guide You Need (2026)",
    description: "3 plans, real timings, actual costs, Google Maps routes.",
    images: ["https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/nainital-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/nainital-3-days#article",
      "headline": "Nainital in 3 Days: Complete Hill Station Guide (Budget to Premium, 2026)",
      "description": "3 complete Nainital plans — Budget, Family, Premium — with real timings, costs, Google Maps routes and the mistakes every first-timer makes.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/nainital-3-days",
      },
      "keywords": "nainital itinerary, nainital 3 days, nainital travel guide, naini lake, snow view point, bhimtal",
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
          "name": "Nainital in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/nainital-3-days",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days are enough for Nainital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is the sweet spot for Nainital — enough for Naini Lake, Snow View Point, Bhimtal, Sattal, and the caves. 2 days feels rushed. 4-5 days lets you add Mukteshwar, Ranikhet, or a jungle trek.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Nainital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "March to June for pleasant weather (15-27°C) and clear mountain views. October to November for post-monsoon clarity and fewer crowds. Avoid July-September (heavy rain, landslides) and December-February unless you want snowfall (roads may close).",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Nainital trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget solo: under ₹6,000 including accommodation. Family of 4: ₹8,000-₹18,000 total. Premium couple: ₹18,000-₹30,000 for two. All prices include stay, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Nainital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nearest airport: Pantnagar (65km, 2hrs). Nearest railway station: Kathgodam (34km, 1.5hrs). Most people take a train to Kathgodam from Delhi (6-7hrs) and then a shared taxi or bus to Nainital. Delhi to Nainital by road is 300km, about 7-8 hours.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Nainital safe for solo female travellers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Nainital is one of the safest hill stations in India for solo travellers. Mall Road is well-lit and busy until 10pm. Stick to registered hotels, avoid isolated trails after dark, and use pre-booked taxis rather than hitchhiking.",
          },
        },
        {
          "@type": "Question",
          "name": "Which is better — Nainital or Mussoorie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nainital wins for natural beauty (the lake is stunning), nearby lake districts (Bhimtal, Sattal, Naukuchiatal), and a less commercialised feel. Mussoorie wins for Mall Road shopping and closer proximity to Dehradun airport. For a first-time hill station trip, Nainital edges ahead.",
          },
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Nainital, Uttarakhand, India",
      "description": "A stunning lake city nestled in the Kumaon Hills of Uttarakhand, known for Naini Lake, panoramic Himalayan views, and nearby lake districts.",
      "url": "https://www.incredibleitinerary.com/blog/nainital-3-days",
      "touristType": ["Hill Station Tourism", "Nature Tourism", "Family Tourism"],
    },
  ],
};

export default function NainitalBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NainitalClient />
    </>
  );
}
