import type { Metadata } from "next";
import SundarbansClient from "./SundarbansClient";

export const metadata: Metadata = {
  title: "Sundarbans 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Sundarbans trip in 3 days. Budget, Safari, Premium Houseboat — with boat routes, tiger reserve permits, best watchtowers and the mangrove.",
  keywords: [
    "sundarbans itinerary 3 days",
    "sundarbans travel guide 2026",
    "sundarbans tiger reserve",
    "sundarbans boat safari",
    "sundarbans houseboat",
    "sajnekhali wildlife sanctuary",
    "dobanki canopy walk",
    "sundarbans west bengal",
  ],
  openGraph: {
    title: "Sundarbans 3-Day Itinerary 2026: Trip Planner",
    description:
      "Real boat routes, actual costs, permit details. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1596587984190-acc4b7257cfc?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Sundarbans mangrove forest river channels",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Sundarbans", "India", "Travel", "Wildlife", "Safari"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sundarbans 3-Day Itinerary 2026: Trip Planner",
    description: "3 plans, real boat routes, actual costs, permit details.",
    images: ["https://images.unsplash.com/photo-1596587984190-acc4b7257cfc?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/sundarbans-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/sundarbans-3-days#article",
      "headline": "Sundarbans in 3 Days: Complete Safari Guide (Budget to Premium Houseboat, 2026)",
      "description": "3 complete Sundarbans plans — Budget, Safari, Premium Houseboat — with boat routes, tiger reserve permits, best watchtowers and the mangrove experiences most tourists miss.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1596587984190-acc4b7257cfc?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/sundarbans-3-days",
      },
      "keywords": "sundarbans itinerary, sundarbans 3 days, sundarbans safari, royal bengal tiger, mangrove forest, dobanki canopy walk",
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
          "name": "Sundarbans in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/sundarbans-3-days",
        },
      ],
    },

        {
      "@type": "TouristDestination",
      "name": "Sundarbans, West Bengal, India",
      "description": "The world's largest mangrove forest and a UNESCO World Heritage Site, home to the Royal Bengal Tiger, spanning the delta of the Ganges, Brahmaputra, and Meghna rivers.",
      "url": "https://www.incredibleitinerary.com/blog/sundarbans-3-days",
      "touristType": ["Wildlife Tourism", "Eco Tourism", "Adventure Tourism"],
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
          "name": "What is the best time to visit Sundarbans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "November to March is the best time to visit Sundarbans. Winter months (December-February) offer the highest wildlife sighting chances as animals come to riverbanks for warmth. Avoid June-September when heavy monsoon rains make boat navigation difficult and most lodges close.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Sundarbans trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget shared boat: under ₹6,000 per person for 3 days. Safari private boat: ₹8,000-₹18,000 per person. Premium houseboat: ₹18,000-₹30,000 per person. All prices include boat transport, meals, accommodation and forest permits.",
          },
        },
        {
          "@type": "Question",
          "name": "Can you see Royal Bengal Tigers in Sundarbans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tiger sightings are rare — roughly 1 in 20 trips results in a direct sighting. However, pug marks, scratch marks and territorial signs are commonly seen. The Sudhanyakhali and Sajnekhali watchtowers offer the best chances. The mangrove ecosystem, bird life and other wildlife make the trip worthwhile even without a tiger sighting.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Sundarbans from Kolkata?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Drive or take a bus from Kolkata to Godkhali via Canning (100km, 3-4 hours). From Godkhali, take a motorboat to your lodge or starting point. Most tour operators arrange pickup from Kolkata. The cheapest route is Sealdah train to Canning (₹15-₹30), then shared auto to Godkhali (₹50-₹80).",
          },
        },
        {
          "@type": "Question",
          "name": "Is Sundarbans safe for tourists?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Sundarbans is safe with a licensed operator. All tourist boats stay on designated routes and watchtowers have proper fencing. Never leave the boat in core tiger reserve zones. The Dobanki canopy walk has safety railings. Choose operators registered with the Sundarban Tiger Reserve authority — they carry proper permits and trained guides.",
          },
        },
        {
          "@type": "Question",
          "name": "What should I pack for a Sundarbans trip?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Essentials: strong insect repellent (non-negotiable), sunscreen SPF 50+, full-sleeve lightweight clothing, binoculars, waterproof bag for electronics, torch/headlamp, basic medicines. Mosquitoes are aggressive especially at dawn and dusk. Carry a power bank — there is no charging on most boats.",
          },
        },
      ],
};

export default function SundarbansBlogPage() {
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
      <SundarbansClient />
    </>
  );
}
