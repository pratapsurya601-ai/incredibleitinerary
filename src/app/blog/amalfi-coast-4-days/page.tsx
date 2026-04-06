import type { Metadata } from "next";
import AmalfiClient from "./AmalfiClient";

export const metadata: Metadata = {
  title: "Amalfi Coast 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Amalfi Coast trip in 4 days. 3 complete Amalfi Coast plans — Budget, Mid-Range, Luxury — with real timings, costs in EUR/USD, Path of the Gods.",
  keywords: [
    "amalfi coast itinerary 4 days",
    "amalfi coast travel guide 2026",
    "amalfi coast budget travel",
    "positano guide",
    "path of the gods hike",
    "capri day trip",
    "ravello villa rufolo",
    "amalfi coast trip planner",
  ],
  openGraph: {
    title: "Amalfi Coast 4-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, Path of the Gods tips. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Positano colorful houses on the Amalfi Coast",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Amalfi Coast", "Italy", "Travel", "Itinerary", "Coastal"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amalfi Coast 4-Day Itinerary 2026: Trip Planner",
    description: "3 plans, real timings, actual costs, Path of the Gods tips.",
    images: ["https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/amalfi-coast-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/amalfi-coast-4-days#article",
      "headline": "Amalfi Coast in 4 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      "description": "3 complete Amalfi Coast plans — Budget, Mid-Range, Luxury — with real timings, costs in EUR/USD, Path of the Gods tips and the mistakes every first-timer makes.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/amalfi-coast-4-days",
      },
      "keywords": "amalfi coast itinerary, amalfi coast 4 days, positano, ravello, path of the gods, capri day trip",
      "articleSection": "Travel Guides",
      "inLanguage": "en",
      "wordCount": 5800,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Amalfi Coast in 4 Days", "item": "https://www.incredibleitinerary.com/blog/amalfi-coast-4-days" },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Amalfi Coast, Italy",
      "description": "A UNESCO World Heritage coastline in southern Italy, famous for its dramatic cliffs, colourful villages, lemon groves, and Mediterranean cuisine.",
      "url": "https://www.incredibleitinerary.com/blog/amalfi-coast-4-days",
      "touristType": ["Coastal Tourism", "Hiking Tourism", "Food & Wine Tourism"],
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
          "name": "How many days do you need for the Amalfi Coast?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "4 days is ideal for the Amalfi Coast. This gives you time for Positano, Amalfi town, Ravello, the Path of the Gods hike, and a Capri day trip. 3 days works if you skip either the hike or Capri.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 4-day Amalfi Coast trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget: \u20ac80-130/day ($86-140 USD). Mid-range: \u20ac150-280/day ($162-302 USD). Luxury: \u20ac400+/day ($432+ USD). Positano is the most expensive base — staying in Amalfi town or Minori saves 30-50%.",
          },
        },
        {
          "@type": "Question",
          "name": "Where should I stay on the Amalfi Coast?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Positano is the most photogenic but most expensive. Amalfi town is centrally located with the best ferry connections. Minori and Maiori offer the best value — half the price, excellent food, local feel. Ravello is peaceful but isolated up in the hills.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I get around the Amalfi Coast?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ferries between towns are the fastest and most scenic option (\u20ac8-15 per trip). SITA buses are cheap (\u20ac2-3) but the cliffside road is narrow and terrifying. Private boats are luxury (\u20ac150-300/day). Never rent a car — the road is single-lane with no parking.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Path of the Gods hike difficult?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Moderate difficulty. 7km, 4-5 hours, with some steep descents and exposed sections. Start from Bomerano (bus from Amalfi) and hike down to Nocelle/Positano. Bring 2L water, sun protection, and proper shoes. Not suitable for those with vertigo — some sections have steep cliff drops.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Blue Grotto worth visiting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but manage expectations. Entry costs \u20ac18 plus the rowboat (\u20ac15), and you get about 5 minutes inside. The neon-blue water is genuinely magical. Skip it on rough sea days (boats can't enter). Go early morning for shorter queues.",
          },
        },
      ],
};

export default function AmalfiCoastBlogPage() {
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
      <AmalfiClient />
    </>
  );
}
