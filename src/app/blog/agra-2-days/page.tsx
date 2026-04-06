import type { Metadata } from "next";
import AgraClient from "./AgraClient";

export const metadata: Metadata = {
  title: "Agra 2-Day Itinerary 2026: Trip Planner",
  description:
    "3 complete Agra plans — Budget, Heritage, Luxury — with sunrise timings, real costs, Google Maps routes and the tourist traps every first-timer falls for.",
  keywords: [
    "agra itinerary 2 days",
    "taj mahal sunrise guide",
    "agra travel guide 2026",
    "agra budget travel",
    "fatehpur sikri day trip",
    "agra fort guide",
    "mehtab bagh sunset",
    "agra trip planner",
  ],
  openGraph: {
    title: "Agra 2-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, Google Maps routes. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Taj Mahal at sunrise with morning mist",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Agra", "India", "Travel", "Itinerary", "Taj Mahal", "Heritage"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agra 2-Day Itinerary 2026: Trip Planner",
    description: "3 plans, sunrise timings, actual costs, Google Maps routes.",
    images: ["https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/agra-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Article schema
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/agra-2-days#article",
      "headline": "Agra in 2 Days: Taj Mahal Sunrise to Fatehpur Sikri (Budget to Luxury, 2026)",
      "description": "3 complete Agra plans — Budget, Heritage, Luxury — with sunrise timings, real costs, Google Maps routes and the tourist traps every first-timer falls for.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/agra-2-days",
      },
      "keywords": "agra itinerary, taj mahal sunrise, agra 2 days, agra fort, fatehpur sikri, mehtab bagh",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4800,
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
          "name": "Agra in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/agra-2-days",
        },
      ],
    },    // TouristDestination
    {
      "@type": "TouristDestination",
      "name": "Agra, India",
      "description": "Home to the Taj Mahal, Agra Fort, and Fatehpur Sikri — three UNESCO World Heritage Sites within a single city. The heart of Mughal architecture in India.",
      "url": "https://www.incredibleitinerary.com/blog/agra-2-days",
      "touristType": ["Cultural Tourism", "Heritage Tourism", "Historical Tourism"],
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
          "name": "How many days are enough for Agra?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2 days is the sweet spot for Agra. Day 1 covers Taj Mahal at sunrise, Agra Fort, and Mehtab Bagh at sunset. Day 2 covers Fatehpur Sikri, Kinari Bazaar shopping, and Itimad-ud-Daulah. 1 day is too rushed to enjoy the Taj properly. 3 days only if you want to include Mathura-Vrindavan.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit the Taj Mahal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sunrise is the only correct answer. Gates open at 6am (5:30am in summer). Arrive by 5:50am to be first in line. You get 20 minutes of near-empty Taj before tour groups arrive at 6:30am. October to March offers the best weather with morning mist that makes the marble glow.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 2-day Agra trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget solo: under ₹5,000 including accommodation. Heritage mid-range: ₹5,000-₹15,000. Luxury: ₹15,000-₹40,000. The biggest cost is Taj Mahal entry — ₹50 for Indians, ₹1,100 for foreigners. All prices include accommodation, food, transport and entry fees.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Agra safe for solo travellers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Agra is safe for solo travellers if you use common sense. The main annoyance is touts and unofficial guides near the Taj. Say no firmly and keep walking. Use pre-booked transport or Uber/Ola instead of negotiating with auto-rickshaw drivers. Avoid the lanes behind the east gate of the Taj after dark.",
          },
        },
        {
          "@type": "Question",
          "name": "Should I visit Agra as a day trip from Delhi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A day trip is possible but you miss the best part — Taj Mahal at sunrise. The Delhi-Agra Gatimaan Express takes 1hr 40min. If you must do a day trip, take the 8:10am train, but you will see the Taj in peak heat with maximum crowds. Stay one night to see it at sunrise.",
          },
        },
        {
          "@type": "Question",
          "name": "What food is Agra famous for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Agra is famous for Petha (a translucent pumpkin sweet — buy from Panchhi Petha on MG Road, not the shops near the Taj), Bedai-Jalebi for breakfast (spiced puri with curry), Mughlai cuisine (try Pinch of Spice or Dasaprakash), and chaat at Kinari Bazaar. Budget ₹200-₹400 per meal at local spots.",
          },
        },
      ],
};

export default function AgraBlogPage() {
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
      <AgraClient />
    </>
  );
}
