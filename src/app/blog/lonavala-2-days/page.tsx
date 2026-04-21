import type { Metadata } from "next";
import LonavalaClient from "./LonavalaClient";

export const metadata: Metadata = {
  title: "Lonavala in 2 Days (2026): Monsoon Plan + Real Costs Under ₹4,000",
  description:
    "Lonavala 2-day itinerary 2026 — Bhushi Dam, Rajmachi Fort trek, Karla Caves, Tiger's Leap. Monsoon vs winter timing, real budgets from ₹3,500, trains from Mumbai & Pune, and spots most tourists miss.",
  keywords: [
    "lonavala itinerary 2 days",
    "lonavala travel guide 2026",
    "lonavala budget travel",
    "lonavala weekend trip",
    "bhushi dam lonavala",
    "rajmachi fort trek",
    "karla bhaja caves",
    "lonavala monsoon trip",
  ],
  openGraph: {
    title: "Lonavala in 2 Days (2026): Monsoon Plan + Real Costs Under ₹4,000",
    description:
      "Bhushi Dam, Rajmachi trek, Karla Caves, Tiger's Leap. Monsoon vs winter timing, real budgets, the spots most tourists miss.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600011247426-3bca6e68e678?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Lonavala green hills in monsoon",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Lonavala", "India", "Travel", "Itinerary", "Hill Station", "Western Ghats"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lonavala in 2 Days (2026): Monsoon Plan Under ₹4,000",
    description: "Bhushi Dam, Rajmachi trek, Karla Caves, real budgets, monsoon tips.",
    images: ["https://images.unsplash.com/photo-1600011247426-3bca6e68e678?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/lonavala-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/lonavala-2-days#article",
      "headline": "Lonavala in 2 Days: Complete Hill Station Guide (Budget & Weekend, 2026)",
      "description": "2 complete Lonavala plans — Budget and Weekend Getaway — with real timings, costs, monsoon tips, trek routes, and the spots most tourists miss.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1600011247426-3bca6e68e678?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/lonavala-2-days",
      },
      "keywords": "lonavala itinerary, lonavala 2 days, lonavala travel guide, bhushi dam, rajmachi fort trek, karla caves",
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
          "name": "Lonavala in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/lonavala-2-days",
        },
      ],
    },

        {
      "@type": "TouristDestination",
      "name": "Lonavala, Maharashtra, India",
      "description": "A popular hill station in the Western Ghats of Maharashtra, known for its monsoon beauty, ancient Buddhist caves, Shivaji-era forts, and proximity to Mumbai and Pune.",
      "url": "https://www.incredibleitinerary.com/blog/lonavala-2-days",
      "touristType": ["Hill Station Tourism", "Adventure Tourism", "Cultural Tourism", "Weekend Getaway"],
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
          "name": "How many days are enough for Lonavala?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2 days is ideal for Lonavala if you want to cover the key viewpoints, caves, and a trek. 1 day works as a rushed day trip from Mumbai or Pune. 3 days allows for the full Rajmachi Fort trek and a relaxed pace with Della Adventure Park.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Lonavala?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "July to September (monsoon) is when Lonavala is most spectacular — waterfalls, green valleys, and misty ghats. October to February offers pleasant weather and clear views. March to June is hot and dry with limited appeal. Avoid weekends in monsoon as crowds are extreme.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 2-day Lonavala trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A budget trip costs under ₹4,000 per person including transport from Pune, food, and basic accommodation. A weekend getaway with a good hotel, Della Adventure Park, and dining out costs ₹5,000 to ₹15,000 per person.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Lonavala worth visiting outside monsoon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but the experience is very different. October to February has clear skies and cooler weather — ideal for trekking Rajmachi Fort and visiting Karla and Bhaja Caves without rain. The waterfalls dry up though, and the landscape turns brown by March.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Lonavala from Mumbai or Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "From Mumbai: 83km via the Mumbai-Pune Expressway, about 2 hours by car or 2.5 hours by train from CSMT. From Pune: 65km, about 1.5 hours by car or 1 hour by train. Trains are cheap (₹50-150) and frequent. Lonavala station is centrally located.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Rajmachi Fort trek difficult?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Moderately difficult — 14km round trip from Lonavala side with about 600m elevation gain. Takes 5-7 hours total. The trail is well-marked but rocky and slippery in monsoon. Carry 2 litres of water and wear proper trekking shoes. Not recommended for young children or elderly.",
          },
        },
      ],
};

export default function LonavalaBlogPage() {
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
      <LonavalaClient />
    </>
  );
}
