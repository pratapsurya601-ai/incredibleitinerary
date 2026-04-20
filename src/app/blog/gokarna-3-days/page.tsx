import type { Metadata } from "next";
import GokarnaBlogClient from "./GokarnaClient";

export const metadata: Metadata = {
  title: "Gokarna Itinerary 3 Days (2026): How to Reach, Trip Cost & Beaches",
  description:
    "Complete Gokarna 3-day itinerary — how to reach Gokarna (flight, train, bus), Gokarna trip cost, beach trek routes, Om Beach, Kudle & Half Moon. Budget to comfortable plans.",
  keywords: [
    "gokarna itinerary 3 days",
    "gokarna travel guide 2026",
    "gokarna budget travel",
    "om beach gokarna",
    "kudle beach gokarna",
    "half moon beach gokarna",
    "gokarna beach trek",
    "gokarna trip planner",
    "gokarna trip cost",
    "gokarna flight",
    "gokarna how to reach",
  ],
  openGraph: {
    title: "Gokarna Itinerary 3 Days (2026): How to Reach, Trip Cost & Beaches",
    description:
      "How to reach Gokarna, real trip cost, beach trek routes, Om Beach & Kudle. 3 complete Gokarna plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Gokarna Om Beach at sunset",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Gokarna", "India", "Travel", "Itinerary", "Beach", "Karnataka"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gokarna 3-Day Itinerary 2026: Trip Planner",
    description: "3 plans, real timings, actual costs, beach trek routes.",
    images: ["https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/gokarna-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/gokarna-3-days#article",
      "headline": "Gokarna in 3 Days: Beach Treks, Temples & Budget Guide (2026)",
      "description": "3 complete Gokarna plans — Budget, Backpacker, Comfortable — with real timings, costs, beach trek routes and the spots most tourists never find.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/gokarna-3-days",
      },
      "keywords": "gokarna itinerary, gokarna 3 days, gokarna travel guide, om beach, kudle beach, half moon beach, beach trek",
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
          "name": "Gokarna in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/gokarna-3-days",
        },
      ],
    },

        {
      "@type": "TouristDestination",
      "name": "Gokarna, Karnataka, India",
      "description": "A laid-back temple town on Karnataka's coast, known for pristine beaches, cliff-top treks, and the ancient Mahabaleshwar Temple. Often called what Goa was 20 years ago.",
      "url": "https://www.incredibleitinerary.com/blog/gokarna-3-days",
      "touristType": ["Beach Tourism", "Pilgrimage Tourism", "Adventure Tourism"],
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
          "name": "How many days are enough for Gokarna?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is ideal for Gokarna. Day 1 for town and temple exploration, Day 2 for the famous beach trek from Kudle to Paradise Beach, and Day 3 for Mirjan Fort and a relaxed final beach day. 2 days feels rushed, 4 days is perfect if you want full rest days.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Gokarna?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to March is the best time to visit Gokarna. October-November has the fewest crowds and best value. December-January has perfect weather but higher prices. February-March is warm but still pleasant. Avoid June-September when monsoon makes beach treks dangerous.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Gokarna trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget travellers can do 3 days in Gokarna for under 5,000 rupees staying in beach huts and eating at local shacks. Backpackers should budget 5,000-12,000 rupees with decent guesthouses. Comfortable travellers spending 12,000-22,000 rupees get beachfront resorts and private transport.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Gokarna beach trek safe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The beach trek from Kudle Beach to Paradise Beach is safe October-March with proper shoes and water. The trail is well-marked but rocky in sections. Avoid during monsoon when paths are slippery and waves are dangerous. Start before 8am to avoid midday heat. The full trek takes 2-3 hours one way.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Gokarna?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nearest airport is Dabolim (Goa) at 140km or Hubli at 160km. Gokarna has its own railway station on the Konkan line with direct trains from Mumbai, Goa, and Mangalore. From Bangalore, overnight buses take 8-9 hours. From Goa, local buses or taxis take 3-4 hours.",
          },
        },
        {
          "@type": "Question",
          "name": "Which is the best beach in Gokarna?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Om Beach is the most iconic with its Om-shaped coastline and best sunsets. Kudle Beach is the most social with cafes and hammocks. Half Moon Beach is the most secluded and beautiful. Paradise Beach is the most remote — true isolation. Gokarna Main Beach is the least touristy, used mainly by locals and pilgrims.",
          },
        },
      ],
};

export default function GokarnaBlogPage() {
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
      <GokarnaBlogClient />
    </>
  );
}
