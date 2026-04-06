import type { Metadata } from "next";
import AlleppeyBlogClient from "./AlleppeyClient";

export const metadata: Metadata = {
  title: "Alleppey 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Alleppey trip in 3 days. Budget, Couple, Luxury Houseboat — with real timings, costs, Google Maps routes and insider tips for Kerala's backwater.",
  keywords: [
    "alleppey itinerary 3 days",
    "alleppey houseboat booking",
    "alleppey travel guide 2026",
    "alleppey budget travel",
    "alleppey couple trip",
    "kerala backwaters alleppey",
    "alappuzha beach",
    "marari beach kerala",
    "alleppey canoe ride",
    "kuttanad rice bowl",
  ],
  openGraph: {
    title: "Alleppey 3-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, Google Maps routes. 3 complete plans for every type of traveller exploring Kerala's backwater paradise.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Alleppey houseboat on Kerala backwaters",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Alleppey", "Kerala", "India", "Travel", "Itinerary", "Backwaters", "Houseboat"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alleppey 3-Day Itinerary 2026: Trip Planner",
    description: "3 plans, real timings, actual costs, Google Maps routes.",
    images: ["https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/alleppey-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/alleppey-3-days#article",
      "headline": "Alleppey in 3 Days: Houseboats, Backwaters & Beaches (Budget to Luxury, 2026)",
      "description": "3 complete Alleppey plans — Budget, Couple, Luxury Houseboat — with real timings, costs, Google Maps routes and insider tips for Kerala's backwater capital.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/alleppey-3-days",
      },
      "keywords": "alleppey itinerary, alleppey 3 days, alleppey houseboat, kerala backwaters, marari beach, alappuzha",
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
          "name": "Alleppey in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/alleppey-3-days",
        },
      ],
    },

        {
      "@type": "TouristDestination",
      "name": "Alleppey (Alappuzha), Kerala, India",
      "description": "Known as the Venice of the East, Alleppey is Kerala's backwater capital famous for houseboat cruises, canoe rides through narrow canals, palm-fringed waterways, and pristine beaches.",
      "url": "https://www.incredibleitinerary.com/blog/alleppey-3-days",
      "touristType": ["Backwater Tourism", "Beach Tourism", "Cultural Tourism", "Eco Tourism"],
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
          "name": "How many days are enough for Alleppey?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is ideal to experience the best of Alleppey — one day for a houseboat overnight stay, one for canoe rides and village exploration, and one for beaches. 2 days is doable if you skip beaches. 4-5 days lets you add Kumarakom and Mararikulam at a relaxed pace.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Alleppey?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "September to March is the best time. October-November offers lush green backwaters after the monsoon with fewer tourists. December-January is peak season with best weather but highest houseboat prices. February-March is a good balance of weather and crowds. Avoid April-May (extreme heat) and June-August (heavy monsoon).",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a houseboat in Alleppey cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget houseboats start at ₹5,000-₹7,000 for 1 bedroom overnight (21 hours). Mid-range boats with AC and better food cost ₹8,000-₹15,000. Premium luxury houseboats with upper deck, jacuzzi and private chef cost ₹20,000-₹45,000. All prices are for overnight stays including 3 meals. Walk-in rates at the jetty save ₹2,000-₹3,000 vs online booking.",
          },
        },
        {
          "@type": "Question",
          "name": "Is a houseboat or canoe ride better in Alleppey?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both are magical but different. Houseboats are floating hotels — comfortable overnight stays on wide canals with meals included. Canoe rides go through narrow canals that houseboats cannot enter, offering intimate village views and birdlife. A 2-hour canoe costs ₹500 vs ₹8,000+ for a houseboat. Ideally, do both — canoe in the morning and houseboat overnight.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Alleppey?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nearest airport is Cochin (Kochi) International Airport — 85km, 2-2.5 hours by road. Trains from Kochi (1.5hrs), Trivandrum (3hrs), and Bangalore (overnight). State buses run every 30 minutes from Kochi. Pre-book a taxi from Kochi airport for ₹2,000-₹2,500 or take the airport bus to Kochi and then a bus/train to Alleppey.",
          },
        },
        {
          "@type": "Question",
          "name": "What food should I try in Alleppey?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Must-try dishes: Karimeen (pearl spot fish) pollichathu wrapped in banana leaf — the signature Kerala backwater dish. Kerala fish curry with red rice. Appam with stew for breakfast. Fresh toddy from a toddy shop (₹30-₹50 per pot). Banana chips and tapioca chips from local shops. Houseboat meals usually include all these — specify when booking.",
          },
        },
      ],
};

export default function AlleppeyBlogPage() {
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
      <AlleppeyBlogClient />
    </>
  );
}
