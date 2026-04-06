import type { Metadata } from "next";
import PondicherryClient from "./PondicherryClient";

export const metadata: Metadata = {
  title: "Pondicherry 3-Day Itinerary 2026: Trip Planner",
  description:
    "3 complete Pondicherry plans — Budget, Couple, Relaxed — with real timings, costs, and the French Quarter tips no travel blog will tell you.",
  keywords: [
    "pondicherry itinerary 3 days",
    "pondicherry travel guide 2026",
    "pondicherry budget travel",
    "pondicherry couple trip",
    "french quarter pondicherry",
    "auroville visit guide",
    "pondicherry beach guide",
    "pondicherry trip planner",
  ],
  openGraph: {
    title: "Pondicherry 3-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, and the honest tips that make a Pondicherry trip actually work.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Pondicherry French Quarter colorful street",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Pondicherry", "India", "Travel", "Itinerary", "French Quarter"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pondicherry 3-Day Itinerary 2026: Trip Planner",
    description: "3 plans, real timings, actual costs, honest opinions.",
    images: ["https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/pondicherry-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Article schema
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/pondicherry-3-days#article",
      "headline": "Pondicherry in 3 Days: Budget to Relaxed Itinerary Guide (2026)",
      "description": "3 complete Pondicherry plans — Budget, Couple, Relaxed — with real timings, costs, and the French Quarter tips no travel blog will tell you.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/pondicherry-3-days",
      },
      "keywords": "pondicherry itinerary, pondicherry 3 days, french quarter, auroville, paradise beach, promenade beach",
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
          "name": "Pondicherry in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/pondicherry-3-days",
        },
      ],
    },    // TouristDestination
    {
      "@type": "TouristDestination",
      "name": "Pondicherry (Puducherry), India",
      "description": "A former French colonial territory on India's southeast coast, known for its French Quarter, Auroville township, beaches, Sri Aurobindo Ashram, and unique Franco-Tamil cuisine.",
      "url": "https://www.incredibleitinerary.com/blog/pondicherry-3-days",
      "touristType": ["Cultural Tourism", "Beach Tourism", "Spiritual Tourism"],
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
          "name": "How many days are enough for Pondicherry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is the sweet spot for Pondicherry. You get the French Quarter, Auroville, beaches, and food scene without rushing. 2 days feels cramped because Auroville alone needs half a day. 4-5 days is ideal if you want to add Pichavaram mangrove forest or a yoga retreat.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Pondicherry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to March is the best time to visit Pondicherry. November-February has the most pleasant weather at 22-30 degrees. April-June is brutally hot (38-42 degrees) and should be avoided. October-December carries some cyclone risk on the east coast but usually just means a day or two of rain.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Pondicherry trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A budget traveller can do 3 days in Pondicherry for under 8,000 rupees including accommodation. A couple on a mid-range trip should budget 8,000-20,000 rupees for two. A relaxed luxury trip runs 15,000-25,000 rupees for two. All prices include accommodation, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Pondicherry worth visiting from Chennai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Pondicherry is just 150km from Chennai, roughly 2.5-3 hours by road via the ECR coastal highway. The ECR drive itself is scenic with stops at Mahabalipuram and Crocodile Bank. Weekend trips from Chennai are very common and entirely doable.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need to book Auroville in advance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No advance booking is needed for Auroville itself, but the Matrimandir inner chamber meditation requires booking 2-3 days in advance at the Auroville Visitors Centre. The outer viewing of Matrimandir is free and walk-in. Give Auroville at least 3 hours to explore properly.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best beach in Pondicherry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Paradise Beach is the most beautiful — take the boat from Chunnambar Boat House for the best experience. Serenity Beach is best for surfing and has a laid-back vibe. Promenade Beach is best for evening walks but not great for swimming. Rock Beach has the iconic pier and French Quarter backdrop.",
          },
        },
      ],
};

export default function PondicherryBlogPage() {
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
      <PondicherryClient />
    </>
  );
}
