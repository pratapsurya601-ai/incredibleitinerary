import type { Metadata } from "next";
import OrchhaClient from "./OrchhaClient";

export const metadata: Metadata = {
  title: "Orchha 2-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Orchha trip in 2 days. Budget and Heritage — with real timings, costs, Google Maps routes. Orchha Fort, Jehangir Mahal, Ram Raja Temple, Betwa.",
  keywords: [
    "orchha itinerary 2 days",
    "orchha travel guide 2026",
    "orchha fort complex",
    "jehangir mahal orchha",
    "orchha madhya pradesh",
    "betwa river orchha",
    "orchha cenotaphs sunset",
    "orchha budget travel",
  ],
  openGraph: {
    title: "Orchha 2-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, Google Maps routes. 2 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600850056064-a8b380df8395?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Orchha Fort Complex and Jehangir Mahal at sunset",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Orchha", "Madhya Pradesh", "India", "Travel", "Heritage"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orchha 2-Day Itinerary 2026: Trip Planner",
    description: "2 plans, real timings, actual costs, Google Maps routes.",
    images: ["https://images.unsplash.com/photo-1600850056064-a8b380df8395?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/orchha-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/orchha-2-days#article",
      "headline": "Orchha in 2 Days: Medieval Palaces, River Sunsets & Vultures (Budget to Heritage, 2026)",
      "description": "2 complete Orchha plans — Budget and Heritage — with real timings, costs, Google Maps routes. Orchha Fort Complex, Jehangir Mahal, Ram Raja Temple, Betwa River cenotaphs and vulture spotting.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1600850056064-a8b380df8395?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/orchha-2-days",
      },
      "keywords": "orchha itinerary, orchha 2 days, orchha fort complex, jehangir mahal, betwa river, orchha madhya pradesh",
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
          "name": "Orchha in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/orchha-2-days",
        },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Orchha, Madhya Pradesh, India",
      "description": "A medieval Bundela Rajput town on the banks of the Betwa River, known for its fort complex, Jehangir Mahal, riverside cenotaphs, and vulture colonies — one of India's most underrated heritage destinations.",
      "url": "https://www.incredibleitinerary.com/blog/orchha-2-days",
      "touristType": ["Heritage Tourism", "Cultural Tourism", "Wildlife Tourism"],
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
          "name": "How many days are enough for Orchha?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2 days is ideal to cover all major monuments, the Betwa River cenotaphs at sunset, and vulture spotting without rushing. A single day works if you arrive early and skip the nature walks, but you will miss the best light at the cenotaphs.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Orchha?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to March is the best time. October-November has pleasant weather and thinner crowds. December-January is peak season with cool mornings ideal for fort exploration. February-March is warm but still comfortable. Avoid April-June when temperatures cross 45 degrees Celsius.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Orchha?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Orchha is 16km from Jhansi, which is on the Delhi-Mumbai railway line. Take a train to Jhansi (4-5 hours from Delhi, 10 hours from Mumbai) and then an auto-rickshaw or shared tempo to Orchha for 30-50 rupees. Orchha is also a 3-hour detour on the Jhansi-Khajuraho highway.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 2-day Orchha trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A budget traveller can do 2 days in Orchha for under 4,000 rupees including accommodation, food, entry tickets and transport. A heritage-focused trip with guided tours and better accommodation costs 5,000-12,000 rupees. Orchha is one of the cheapest heritage destinations in India.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Orchha safe for solo travellers and women?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Orchha is a small, quiet temple town and generally very safe. The main monuments are well-maintained by ASI and MP Tourism. Solo women travellers should stick to the main areas after dark and use MP Tourism accommodation for reliable security. The town shuts down early so plan accordingly.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I combine Orchha with Khajuraho?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Orchha to Khajuraho is about 180km and takes 3-4 hours by road. The smartest route is Delhi or Agra to Jhansi by train, auto to Orchha for 2 days, then a bus or cab to Khajuraho. This covers two of Madhya Pradesh's greatest heritage sites in one trip.",
          },
        },
      ],
};

export default function OrchhaPage() {
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
      <OrchhaClient />
    </>
  );
}
