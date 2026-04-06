import type { Metadata } from "next";
import MeghalayaClient from "./MeghalayaClient";

export const metadata: Metadata = {
  title: "Meghalaya Trip Planner 2026: 5-Day Itinerary + Real Costs",
  description:
    "Plan your Meghalaya trip right. 5-day route: Shillong → Cherrapunji → Dawki → Living Root Bridges. Real budgets from ₹8,000. Honest tips, no fluff.",
  keywords: [
    "planning meghalaya trip",
    "meghalaya itinerary 5 days",
    "meghalaya trip planner 2026",
    "cherrapunji travel guide",
    "living root bridges meghalaya",
    "dawki river meghalaya",
    "shillong travel guide",
    "mawlynnong cleanest village",
    "meghalaya budget travel",
    "laitlum canyons meghalaya",
    "meghalaya travel guide 2026",
  ],
  openGraph: {
    title: "Meghalaya Trip Planner 2026: 5-Day Itinerary + Real Costs",
    description:
      "Plan your Meghalaya trip right. 5-day route: Shillong → Cherrapunji → Dawki → Living Root Bridges. Real budgets from ₹8,000. Honest tips, no fluff.",
    images: [
      {
        url: "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Living Root Bridges in Meghalaya surrounded by lush green forests",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Meghalaya", "India", "Travel", "Itinerary", "Northeast India", "Cherrapunji"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meghalaya Trip Planner 2026: 5-Day Itinerary + Real Costs",
    description:
      "5-day route: Shillong → Cherrapunji → Dawki → Living Root Bridges. Real budgets from ₹8,000. No fluff.",
    images: ["https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/meghalaya-5-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Article schema
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/meghalaya-5-days#article",
      "headline": "Meghalaya in 5 Days: Complete Itinerary Guide (Budget to Premium, 2026)",
      "description": "3 complete Meghalaya plans — Budget, Comfortable, Premium — with real timings, costs, and the honest advice most travel blogs skip.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/meghalaya-5-days",
      },
      "keywords": "meghalaya itinerary, meghalaya 5 days, cherrapunji, living root bridges, dawki river, shillong, mawlynnong",
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
          "name": "Meghalaya in 5 Days",
          "item": "https://www.incredibleitinerary.com/blog/meghalaya-5-days",
        },
      ],
    },

    // TouristDestination
    {
      "@type": "TouristDestination",
      "name": "Meghalaya, India",
      "description": "The Abode of Clouds — India's northeastern gem known for living root bridges, the wettest place on earth, crystal-clear rivers, sacred forests, and the matrilineal Khasi culture.",
      "url": "https://www.incredibleitinerary.com/blog/meghalaya-5-days",
      "touristType": ["Adventure Tourism", "Eco Tourism", "Cultural Tourism", "Nature Tourism"],
    },
  ],
};

// Separate FAQPage schema — must NOT be nested in @graph alongside Article
// to avoid "Duplicate field FAQPage" in Google Rich Results Test
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How many days are enough for Meghalaya?", "acceptedAnswer": { "@type": "Answer", "text": "5 days is the sweet spot for Meghalaya. 3 days is too rushed — you'll skip either Cherrapunji or the Jaintia Hills. 5 days lets you cover Shillong, Cherrapunji (with the living root bridges trek), Dawki, Mawlynnong, and Laitlum Canyons without burning out. 7 days is ideal if you want to add Nongriat's double-decker root bridge and the Jaintia Hills caves." } },
    { "@type": "Question", "name": "What is the best time to visit Meghalaya?", "acceptedAnswer": { "@type": "Answer", "text": "October-November is the best time — post-monsoon waterfalls are still thundering, skies are clear, and the hills are impossibly green. March-May is also excellent for trekking with dry trails and warm days. Avoid June-September unless you want to experience Cherrapunji's legendary rainfall firsthand — roads get washed out and treks become dangerous." } },
    { "@type": "Question", "name": "How much does a 5-day Meghalaya trip cost?", "acceptedAnswer": { "@type": "Answer", "text": "Budget travellers can do 5 days for under ₹15,000 per person using shared transport, homestays, and local dhabas. A comfortable mid-range trip costs ₹15,000-₹30,000 per person with private cabs and 3-star hotels. Premium travellers should budget ₹30,000-₹50,000+ for boutique stays, private guides, and curated experiences." } },
    { "@type": "Question", "name": "Is Meghalaya safe for solo travellers and women?", "acceptedAnswer": { "@type": "Answer", "text": "Meghalaya is one of the safest states in India for solo and women travellers. The Khasi and Jaintia communities are matrilineal — property and surnames pass through women. Locals are genuinely welcoming, violent crime is extremely rare, and the tourist infrastructure in Shillong and Cherrapunji is well-developed. Standard travel precautions apply, especially on remote treks." } },
    { "@type": "Question", "name": "How do I reach Meghalaya from other cities?", "acceptedAnswer": { "@type": "Answer", "text": "Fly into Guwahati (Assam) — it has the nearest major airport with direct flights from Delhi, Mumbai, Kolkata, and Bangalore. From Guwahati, Shillong is a 3-hour drive via NH6. Shared Sumos from Paltan Bazaar cost ₹400-500 per person. Pre-booked cabs cost ₹2,500-3,500. There's no railway station in Meghalaya." } },
    { "@type": "Question", "name": "Do I need a guide for the Living Root Bridges trek?", "acceptedAnswer": { "@type": "Answer", "text": "For the single-decker root bridge at Mawlynnong or Riwai, no guide needed — it's a short 10-minute walk. For the double-decker living root bridge at Nongriat, a guide isn't mandatory but is recommended for first-timers. The trail has 3,500+ steps and takes 3-4 hours round trip. Local guides charge ₹500-800 and know the shortcuts. Wear proper trekking shoes — the stone steps get slippery." } },
  ],
};

export default function MeghalayaBlogPage() {
  return (
    <>
      {/* Article + Breadcrumb + TouristDestination schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* FAQPage schema — separate block to avoid duplicate collision */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <MeghalayaClient />
    </>
  );
}
