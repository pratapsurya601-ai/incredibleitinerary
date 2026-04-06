import type { Metadata } from "next";
import AuliClient from "./AuliClient";

export const metadata: Metadata = {
  title: "Auli 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Auli trip in 3 days. Budget, Skiing, Premium — with real costs, cable car timings, Gorson Bugyal trek guide, skiing tips, and the Himalayan.",
  keywords: [
    "auli itinerary 3 days",
    "auli travel guide 2026",
    "auli skiing india",
    "auli cable car joshimath",
    "gorson bugyal trek",
    "auli budget travel",
    "auli snow trip",
    "nanda devi view auli",
  ],
  openGraph: {
    title: "Auli 3-Day Itinerary 2026: Trip Planner",
    description:
      "Real costs, skiing tips, cable car timings, Gorson Bugyal trek. 3 complete plans for every budget.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Snow-covered Auli slopes with Himalayan peaks in the background",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Auli", "Uttarakhand", "India", "Travel", "Skiing", "Himalayas", "Snow"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auli 3-Day Itinerary 2026: Trip Planner"s Best Skiing Destination (2026)",
    description: "3 plans, real costs, cable car guide, Gorson Bugyal trek, skiing tips.",
    images: ["https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/auli-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Article schema
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/auli-3-days#article",
      "headline": "Auli in 3 Days: Skiing, Snow & Nanda Devi Views (Budget to Premium, 2026)",
      "description": "3 complete Auli plans — Budget, Skiing, Premium — with real costs, cable car timings, Gorson Bugyal trek guide, skiing tips, and Himalayan views.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/auli-3-days",
      },
      "keywords": "auli itinerary, auli skiing, auli 3 days, gorson bugyal, joshimath cable car, nanda devi view, kwani bugyal",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4600,
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
          "name": "Auli in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/auli-3-days",
        },
      ],
    },    // TouristDestination
    {
      "@type": "TouristDestination",
      "name": "Auli, Uttarakhand, India",
      "description": "Himalayan ski resort town at 2,500-3,050m known for Asia's longest cable car, panoramic Nanda Devi views, alpine meadows (bugyals), and India's best skiing slopes.",
      "url": "https://www.incredibleitinerary.com/blog/auli-3-days",
      "touristType": ["Adventure Tourism", "Skiing", "Trekking", "Mountain Tourism"],
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
          "name": "What is the best time to visit Auli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "December to March for snow and skiing — January-February has the best snow coverage. May to June for green meadows, wildflowers, and clear Himalayan views without snow. April is transition month with patchy snow. July-September monsoon brings heavy rain and landslides — avoid completely. October-November has clear skies but no snow and meadows are dry.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Auli trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget traveller: under ₹8,000 for 3 days including guesthouse accommodation and cable car. Skiing-focused trip: ₹10,000-₹25,000 depending on equipment rental and instructor costs. Premium with luxury resort: ₹25,000-₹40,000 per person. All prices include accommodation, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Auli from Delhi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "By road: Delhi to Joshimath is 500km via Rishikesh-Devprayag-Chamoli (12-14 hours by car, overnight bus ₹800-₹1,500). From Joshimath, take the cable car (4km, 25 minutes) or drive 12km up to Auli. By air: Nearest airport is Jolly Grant, Dehradun (280km from Joshimath), then 8-9 hours by road. There is no direct train to Joshimath — nearest station is Haridwar or Rishikesh.",
          },
        },
        {
          "@type": "Question",
          "name": "Is skiing in Auli good for beginners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Auli is one of the best places in India to learn skiing. The slopes range from beginner-friendly nursery slopes to intermediate runs. GMVN and private operators offer skiing courses from 7-day certified courses (₹5,000-₹8,000) to daily equipment rental with basic instruction (₹500-₹1,500/day). January-February has the most consistent snow for skiing.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Joshimath to Auli cable car like?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Joshimath-Auli cable car (gondola) is Asia's longest at 4km, covering an elevation gain of 1,110 metres in about 25 minutes. It operates 9:30am-1pm and 2pm-5pm (subject to weather). Ticket costs ₹1,000 return for tourists, ₹500 for Indians with state ID. The Nanda Devi views from the gondola cabin are spectacular — sit on the left side going up for the best views.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I visit Auli in summer without snow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. May-June transforms Auli into lush green meadows (bugyals) with wildflowers and crystal-clear Himalayan views. Gorson Bugyal and Kwani Bugyal are stunning summer treks. The cable car runs year-round. Summer is actually better for trekking and photography — fewer crowds, clearer skies, and temperatures around 10-20°C.",
          },
        },
      ],
};

export default function AuliBlogPage() {
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
      <AuliClient />
    </>
  );
}
