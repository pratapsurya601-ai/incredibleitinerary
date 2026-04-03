import type { Metadata } from "next";
import MysoreClient from "./MysoreClient";

export const metadata: Metadata = {
  title: "Mysore in 3 Days: Palace, Hills & Heritage (Budget to Royal, 2026)",
  description:
    "3 complete Mysore plans — Budget, Heritage, Royal — with real timings, costs, Google Maps routes and the spots only locals know.",
  keywords: [
    "mysore itinerary 3 days",
    "mysore travel guide 2026",
    "mysore palace visit",
    "chamundi hills mysore",
    "brindavan gardens mysore",
    "mysore budget travel",
    "mysore heritage tour",
    "srirangapatna day trip",
    "mysore silk saree shopping",
    "mysore pak sweets",
  ],
  openGraph: {
    title: "Mysore in 3 Days: Palace, Hills & Heritage (2026)",
    description:
      "Real timings, actual budgets, Google Maps routes. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600112356882-3fef0bb2e495?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Mysore Palace illuminated at night",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Mysore", "India", "Travel", "Itinerary", "Heritage", "Karnataka"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mysore in 3 Days: The Only Guide You Need (2026)",
    description: "3 plans, real timings, actual costs, Google Maps routes.",
    images: ["https://images.unsplash.com/photo-1600112356882-3fef0bb2e495?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/mysore-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/mysore-3-days#article",
      "headline": "Mysore in 3 Days: Palace, Hills & Heritage (Budget to Royal, 2026)",
      "description": "3 complete Mysore plans — Budget, Heritage, Royal — with real timings, costs, Google Maps routes and the spots only locals know.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1600112356882-3fef0bb2e495?w=1200&q=80",
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
        "@id": "https://incredibleitinerary.com/blog/mysore-3-days",
      },
      "keywords": "mysore itinerary, mysore 3 days, mysore palace, chamundi hills, brindavan gardens, mysore travel guide",
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
          "name": "Mysore in 3 Days",
          "item": "https://incredibleitinerary.com/blog/mysore-3-days",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days are enough for Mysore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is ideal to cover Mysore Palace, Chamundi Hills, Brindavan Gardens, Devaraja Market, and a day trip to Srirangapatna. 2 days works if you skip Srirangapatna. 4-5 days lets you add Coorg or Kabini as an extension.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Mysore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to February is the best time to visit Mysore. October is peak season due to Dasara festivities when the city is spectacularly decorated. November to February offers pleasant weather (18-28°C) and fewer crowds. March to May is hot (35°C+). June to September brings monsoon rains.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Mysore trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A budget traveller can do 3 days in Mysore for under ₹6,000 including accommodation. A heritage-focused trip costs ₹8,000-18,000. A royal luxury experience runs ₹18,000-35,000. All prices include accommodation, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Mysore Palace worth visiting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Mysore Palace is one of India's most visited monuments after the Taj Mahal. Visit on a Sunday evening when 100,000 bulbs illuminate the palace from 7-8pm — it is genuinely one of India's great visual spectacles. Entry is ₹100 for Indian visitors and ₹200 for international visitors.",
          },
        },
        {
          "@type": "Question",
          "name": "What should I buy in Mysore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mysore is famous for silk sarees (buy from KSIC government showroom for guaranteed purity), Mysore Pak sweets (Guru Sweet Mart near Devaraja Market for the original), sandalwood products (Cauvery Arts & Crafts for authentic items), and Mysore agarbatti (incense). Devaraja Market is the best place for spices and local goods.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I get to Mysore from Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mysore is 150km from Bangalore. The fastest option is the Shatabdi Express train (2 hours, ₹300-700). KSRTC Airavat buses run every 15 minutes (3-3.5 hours, ₹300-500). Driving takes 3 hours via the Mysore Expressway. Flights are not recommended — the time saved is negligible after airport transfers.",
          },
        },
      ],
    },

    {
      "@type": "TouristDestination",
      "name": "Mysore (Mysuru), Karnataka, India",
      "description": "The City of Palaces — known for its royal heritage, grand Mysore Palace, Chamundi Hills, silk sarees, Mysore Pak sweets, and the spectacular Dasara festival.",
      "url": "https://incredibleitinerary.com/blog/mysore-3-days",
      "touristType": ["Cultural Tourism", "Heritage Tourism", "Food Tourism"],
    },
  ],
};

export default function MysoreBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MysoreClient />
    </>
  );
}
