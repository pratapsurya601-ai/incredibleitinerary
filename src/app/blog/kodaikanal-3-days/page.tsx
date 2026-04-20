import type { Metadata } from "next";
import KodaikanalClient from "./KodaikanalClient";

export const metadata: Metadata = {
  title: "Kodaikanal 3 Day Itinerary (2026): How to Reach, Flight & Off Season",
  description:
    "Complete Kodaikanal 3 day itinerary — how to reach Kodaikanal (Kodaikanal flight, train, bus), Kodaikanal off season tips, Kodai Lake, real timings and Google Maps routes.",
  keywords: [
    "kodaikanal itinerary 3 days",
    "kodaikanal travel guide 2026",
    "kodaikanal budget travel",
    "kodaikanal couple trip",
    "kodai lake",
    "kodaikanal hill station",
    "kodaikanal packages india",
    "kodaikanal trip planner",
    "kodaikanal 3 day itinerary",
    "how to reach kodaikanal",
    "kodaikanal flight",
    "kodaikanal off season",
  ],
  openGraph: {
    title: "Kodaikanal 3 Day Itinerary (2026): How to Reach, Flight & Off Season",
    description:
      "How to reach Kodaikanal, Kodaikanal off season tips, real timings, actual budgets, Google Maps routes. 3 complete plans for every traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Kodaikanal lake surrounded by misty hills",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Kodaikanal", "India", "Travel", "Itinerary", "Hill Station"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kodaikanal 3-Day Itinerary 2026: Trip Planner",
    description: "3 plans, real timings, actual costs, Google Maps routes.",
    images: ["https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/kodaikanal-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/kodaikanal-3-days#article",
      "headline": "Kodaikanal in 3 Days: Complete Hill Station Guide (Budget to Premium, 2026)",
      "description": "3 complete Kodaikanal plans — Budget, Couple, Premium — with real timings, costs, Google Maps routes and the insider tips most guides miss.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/kodaikanal-3-days",
      },
      "keywords": "kodaikanal itinerary, kodaikanal 3 days, kodai lake, coakers walk, pillar rocks, berijam lake",
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
          "name": "Kodaikanal in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/kodaikanal-3-days",
        },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Kodaikanal, Tamil Nadu, India",
      "description": "The Princess of Hill Stations — a pristine hill town at 2,133m in the Palani Hills of Tamil Nadu, known for its star-shaped lake, shola forests, and misty viewpoints.",
      "url": "https://www.incredibleitinerary.com/blog/kodaikanal-3-days",
      "touristType": ["Nature Tourism", "Hill Station Tourism", "Eco Tourism"],
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
          "name": "How many days are enough for Kodaikanal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is ideal to cover all major attractions including Kodai Lake, Coaker's Walk, Bryant Park, Pillar Rocks, Berijam Lake, and a day trip to Vattakanal. 2 days works if you skip Berijam Lake. 4-5 days allows a relaxed pace with trekking options.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Kodaikanal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to March is the best time. October-November has post-monsoon freshness with fewer crowds. December-January is peak season with the coldest weather (5-15°C). February-March offers clear skies and pleasant temperatures. April-June is summer rush. July-September brings heavy monsoon rains.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Kodaikanal trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget solo: under ₹6,000 including accommodation. Couple mid-range: ₹8,000-₹18,000 for two. Premium: ₹18,000-₹30,000 for two. All prices include accommodation, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I get a Berijam Lake permit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Berijam Lake requires a free forest permit from the District Forest Office near the Kodaikanal bus stand. Reach by 9am as only 100 vehicles are allowed per day. Carry ID proof. The permit is valid for one day only. No permit is issued after 12pm.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Kodaikanal better than Ooty?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kodaikanal is higher (2,133m vs 2,240m for Ooty), less commercialised, and more naturally beautiful. Ooty has better infrastructure and the Nilgiri Mountain Railway. Kodaikanal wins for couples and nature lovers; Ooty is better for families with kids who want easier access.",
          },
        },
        {
          "@type": "Question",
          "name": "What should I pack for Kodaikanal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Layer clothing — mornings and evenings drop to 5-10°C even when afternoons are 20°C. Essentials: warm jacket, rain poncho (mist rolls in daily at 4pm), comfortable walking shoes with grip, sunscreen for high-altitude UV, and a power bank as phone batteries drain faster in cold.",
          },
        },
      ],
};

export default function KodaikanalBlogPage() {
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
      <KodaikanalClient />
    </>
  );
}
