import type { Metadata } from "next";
import RameswaramClient from "./RameswaramClient";

export const metadata: Metadata = {
  title: "Rameswaram 2-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Rameswaram trip in 2 days. Budget and Pilgrimage — with real timings, costs, Google Maps routes and the spots most tourists miss at India's.",
  keywords: [
    "rameswaram itinerary 2 days",
    "rameswaram travel guide 2026",
    "ramanathaswamy temple guide",
    "pamban bridge rameswaram",
    "dhanushkodi ghost town",
    "ram setu viewpoint",
    "rameswaram budget travel",
    "rameswaram trip planner",
  ],
  openGraph: {
    title: "Rameswaram 2-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, Google Maps routes. 2 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Pamban Bridge over the sea at Rameswaram",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Rameswaram", "India", "Travel", "Itinerary", "Temple", "Pilgrimage"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rameswaram 2-Day Itinerary 2026: Trip Planner",
    description: "2 plans, real timings, actual costs, Google Maps routes.",
    images: ["https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/rameswaram-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Article schema
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/rameswaram-2-days#article",
      "headline": "Rameswaram in 2 Days: Temple Corridors to Pamban Bridge (Budget to Pilgrimage, 2026)",
      "description": "2 complete Rameswaram plans — Budget and Pilgrimage — with real timings, costs, Google Maps routes and the spots most tourists miss at India's sacred island.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/rameswaram-2-days",
      },
      "keywords": "rameswaram itinerary, ramanathaswamy temple, pamban bridge, dhanushkodi, ram setu, rameswaram 2 days",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4200,
    },

    // BreadcrumbList
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
          "name": "Rameswaram in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/rameswaram-2-days",
        },
      ],
    },    // TouristDestination
    {
      "@type": "TouristDestination",
      "name": "Rameswaram, India",
      "description": "A sacred island off the southeastern coast of Tamil Nadu, home to one of the twelve Jyotirlingas, the longest temple corridor in India, the iconic Pamban Bridge over the sea, and the ghost town of Dhanushkodi.",
      "url": "https://www.incredibleitinerary.com/blog/rameswaram-2-days",
      "touristType": ["Pilgrimage Tourism", "Cultural Tourism", "Heritage Tourism"],
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
          "name": "How many days are enough for Rameswaram?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2 days is the sweet spot for Rameswaram. Day 1 covers Ramanathaswamy Temple, Agni Theertham, and Pamban Bridge. Day 2 covers Dhanushkodi, Adam's Bridge viewpoint, and APJ Abdul Kalam Memorial. 1 day is too rushed if you want to do the full temple ritual. 3 days only if you want to include Rameshwaram's smaller islands and nearby Devipattinam.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Rameswaram?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to April is the best time to visit Rameswaram. October-December offers pleasant weather without extreme heat. January-February is the peak pilgrimage season with comfortable temperatures. March-April gets increasingly hot. Avoid May-September when temperatures cross 40°C and the monsoon brings heavy rain.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 2-day Rameswaram trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget solo: under ₹4,000 including accommodation. Pilgrimage mid-range: ₹5,000-₹12,000 per person. The temple entry is free. Dhanushkodi jeep costs ₹600-₹800 shared. All prices include accommodation, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Pamban Bridge safe for trains?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the Pamban Bridge is completely safe. The original bridge built in 1914 has been maintained and a new parallel bridge opened in 2024. The Rameswaram Express and other trains cross it daily. The opening mechanism lets ships pass underneath. Standing at the bridge viewpoint while a train crosses the sea is one of India's most dramatic railway experiences.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I visit Dhanushkodi by my own vehicle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Two-wheelers can go up to a point but the last stretch is sandy and difficult. The best option is the shared jeep service from Rameswaram — ₹600-₹800 per person round trip with stops at key ruins and the land's end where two oceans meet. Private jeeps cost ₹2,500-₹3,500. The road is only partially paved.",
          },
        },
        {
          "@type": "Question",
          "name": "What food is Rameswaram famous for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rameswaram is famous for fresh seafood — especially crab curry, fish fry, and prawn masala at small local eateries near the fishing harbour. Vegetarian pilgrims should try the temple prasadam and South Indian meals at the many veg restaurants on West Car Street. A full meal costs ₹80-₹150 at local joints.",
          },
        },
      ],
};

export default function RameswaramBlogPage() {
  return (
    <>
      {/* Inject JSON-LD into page head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <RameswaramClient />
    </>
  );
}
