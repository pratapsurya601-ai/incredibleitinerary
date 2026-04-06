import type { Metadata } from "next";
import DiuClient from "./DiuClient";

export const metadata: Metadata = {
  title: "Diu 2-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Diu trip in 2 days. Budget and Comfortable — with real timings, costs, Google Maps routes and the things nobody tells you about this hidden.",
  keywords: [
    "diu itinerary 2 days",
    "diu travel guide 2026",
    "diu budget travel",
    "diu island trip",
    "diu fort beach",
    "naida caves diu",
    "diu trip planner",
    "diu gujarat weekend",
  ],
  openGraph: {
    title: "Diu 2-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, Google Maps routes. 2 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Diu Fort coastal view",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Diu", "India", "Travel", "Itinerary", "Beach", "Gujarat"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diu 2-Day Itinerary 2026: Trip Planner",
    description: "2 plans, real timings, actual costs, Google Maps routes.",
    images: ["https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/diu-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/diu-2-days#article",
      "headline": "Diu in 2 Days: Complete Itinerary Guide (Budget & Comfortable, 2026)",
      "description": "2 complete Diu plans — Budget and Comfortable — with real timings, costs, Google Maps routes and the things nobody tells you about this hidden union territory.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/diu-2-days",
      },
      "keywords": "diu itinerary, diu 2 days, diu travel guide, diu fort, naida caves, nagoa beach",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 3800,
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
          "name": "Diu in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/diu-2-days",
        },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Diu, India",
      "description": "A small island union territory off the coast of Gujarat, known for its Portuguese colonial architecture, pristine beaches, ancient forts, and unique status as a liquor-friendly enclave in dry Gujarat.",
      "url": "https://www.incredibleitinerary.com/blog/diu-2-days",
      "touristType": ["Beach Tourism", "Cultural Tourism", "Heritage Tourism"],
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
          "name": "How many days are enough for Diu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2 days is the sweet spot for Diu. You can comfortably cover Diu Fort, Naida Caves, Nagoa Beach, Gangeshwar Temple, INS Khukri Memorial, and St Paul's Church in 2 full days. Add a third day only if you want to linger on beaches or take a day trip to Somnath.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Diu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to March is the best time to visit Diu. November to February offers the most pleasant weather with temperatures between 20-30°C. Avoid April to June when temperatures cross 40°C. Monsoon (July-September) brings rough seas but dramatic scenery.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 2-day Diu trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A budget traveller can do 2 days in Diu for under ₹4,000 including accommodation. A comfortable mid-range trip costs ₹5,000-12,000 per person. Diu is one of the cheapest beach destinations in India — food, alcohol and accommodation are all significantly cheaper than Goa.",
          },
        },
        {
          "@type": "Question",
          "name": "Is alcohol legal in Diu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, alcohol is completely legal in Diu since it is a union territory, not part of Gujarat where alcohol is prohibited. This makes Diu a popular weekend destination for Gujaratis. Bars and liquor shops are open and prices are very reasonable — a beer costs ₹60-100.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Diu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Diu has a small airport with limited flights from Mumbai. Most travellers fly to Ahmedabad (340km, 6hrs by road) or Rajkot (210km, 4hrs). Alternatively, take a train to Veraval (90km) or Una (12km from Diu). State buses run regularly from Ahmedabad, Rajkot, and Junagadh.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best beach in Diu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nagoa Beach is the most popular and best maintained with water sports and beach shacks. Ghoghla Beach (technically on the mainland, just before the bridge) is the longest and least crowded. Jallandhar Beach near town is good for sunset views but not ideal for swimming.",
          },
        },
      ],
};

export default function DiuBlogPage() {
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
      <DiuClient />
    </>
  );
}
