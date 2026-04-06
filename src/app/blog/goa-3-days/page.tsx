import type { Metadata } from "next";
import GoaBlogClient from "./GoaBlogClient";

export const metadata: Metadata = {
  title: "Goa 3-Day Itinerary 2026: Trip Planner",
  description:
    "4 complete Goa plans — Budget, Couple, Party, Relaxed — with real timings, costs, Google Maps routes and the mistakes every first-timer makes.",
  keywords: [
    "goa itinerary 3 days",
    "goa travel guide 2026",
    "goa budget travel",
    "goa couple trip",
    "north goa south goa",
    "palolem beach goa",
    "goa packages india",
    "goa trip planner",
  ],
  openGraph: {
    title: "Goa 3-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, Google Maps routes. 4 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Goa beach at golden hour",
      },
    ],
    type: "article",
    publishedTime: "2026-03-19T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Goa", "India", "Travel", "Itinerary", "Beach"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goa 3-Day Itinerary 2026: Trip Planner",
    description: "4 plans, real timings, actual costs, Google Maps routes.",
    images: ["https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/goa-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
// This tells Google rich details about this article so it can show:
// - Star ratings in search results
// - FAQ dropdowns directly in Google
// - Breadcrumb trail under the search result
// - Article date and author
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Article schema — shows author, date, image in Google
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/goa-3-days#article",
      "headline": "Goa in 3 Days: The Only Itinerary Guide You Need (Budget to Luxury, 2026)",
      "description": "4 complete Goa plans — Budget, Couple, Party, Relaxed — with real timings, costs, Google Maps routes and the mistakes every first-timer makes.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-03-19T00:00:00Z",
      "dateModified": "2026-03-19T00:00:00Z",
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
        "@id": "https://www.incredibleitinerary.com/blog/goa-3-days",
      },
      "keywords": "goa itinerary, goa 3 days, goa travel guide, palolem beach, north goa south goa",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5600,
    },

    // BreadcrumbList — shows Home > Blog > Goa under search result
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
          "name": "Goa in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/goa-3-days",
        },
      ],
    },

    // FAQPage — shows expandable Q&A directly in Google search results
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days are enough for Goa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is the minimum to see the best of Goa without rushing. 5 days is ideal if you want to explore both North and South Goa thoroughly. 7 days allows for day trips to Dudhsagar Falls, spice plantations, and a relaxed pace.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Goa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to March is the best time to visit Goa. October-November offers the best value with fewer crowds and lower prices. December-January has the best weather but highest prices and most tourists. February-March is a sweet spot with good weather and falling prices.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Goa trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A budget solo traveller can do 3 days in Goa for ₹7,200-₹11,700 including accommodation. A couple on a mid-range trip should budget ₹35,000-₹55,000 for two. A party group per person should expect ₹12,750-₹24,500. All prices include accommodation, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "Is North Goa or South Goa better?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "North Goa is better for first-timers, groups, nightlife, water sports and budget travellers. South Goa is better for couples, relaxed travellers, luxury stays and quiet beaches like Palolem and Agonda. The smartest approach is to stay in North Goa and do a day trip to South Goa.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need a rental car or scooter in Goa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A scooter is strongly recommended over a car for most travellers in Goa. Goa's beach roads are narrow, parking is difficult, and a scooter costs just ₹300-₹400 per day. A full tank costs ₹150 and lasts 2 days of normal riding. The only exceptions are monsoon season or groups of 4 or more people.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best beach in Goa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For couples and relaxed travellers: Palolem and Agonda in South Goa are the most beautiful. For swimming: Palolem has the calmest waters. For water sports: Baga in North Goa has the most operators. For a hidden gem: Butterfly Beach near Palolem, accessible only by kayak. For sunrise: Morjim beach in North Goa faces east.",
          },
        },
      ],
    },

    // TouristAttraction for Goa itself
    {
      "@type": "TouristDestination",
      "name": "Goa, India",
      "description": "India's smallest state and most famous beach destination, known for its Portuguese heritage, beaches, nightlife, and cuisine.",
      "url": "https://www.incredibleitinerary.com/blog/goa-3-days",
      "touristType": ["Beach Tourism", "Cultural Tourism", "Adventure Tourism"],
    },
  ],
};

export default function GoaBlogPage() {
  return (
    <>
      {/* Inject JSON-LD into page head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GoaBlogClient />
    </>
  );
}
