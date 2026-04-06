import type { Metadata } from "next";
import GujaratClient from "./GujaratClient";

export const metadata: Metadata = {
  title: "Gujarat 7-Day Itinerary 2026: India's Most Underrated State (Budget to Premium, 2026)",
  description:
    "Plan your Gujarat trip in 7 days. The complete Gujarat itinerary — Ahmedabad, Rann of Kutch, Gir National Park, Somnath & Diu with real budgets, timings,.",
  keywords: [
    "gujarat itinerary 7 days",
    "gujarat travel guide 2026",
    "rann of kutch trip",
    "gir national park safari",
    "ahmedabad heritage city",
    "somnath temple",
    "dwarka temple gujarat",
    "kutch handicrafts bhuj",
    "gujarat vegetarian food",
    "rann utsav festival",
    "diu island beach",
    "gujarat budget travel",
  ],
  openGraph: {
    title: "Gujarat 7-Day Itinerary 2026: India's Most Underrated State (Budget to Premium, 2026)",
    description:
      "Ahmedabad · Kutch · Gir · Somnath · Diu — 3 plans, real budgets, day-by-day routes.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Rann of Kutch white salt desert Gujarat India",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gujarat 7-Day Itinerary 2026: Trip Planner",
    description: "3 plans, real timings, actual budgets, best vegetarian food in India.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/gujarat-7-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/gujarat-7-days#article",
      "headline": "Gujarat in 7 Days: India's Most Underrated State (Budget to Premium, 2026)",
      "description": "The complete Gujarat itinerary — Ahmedabad, Rann of Kutch, Gir National Park, Somnath & Diu with real budgets, timings, and the best vegetarian food in India.",
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
      },
      "keywords": "gujarat itinerary, 7 days gujarat, rann of kutch, gir national park, ahmedabad, somnath temple, dwarka, diu",
      "wordCount": 5500,
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Gujarat 7 Days", "item": "https://www.incredibleitinerary.com/blog/gujarat-7-days" },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Gujarat, India",
      "description": "India's westernmost state, home to the only wild Asiatic Lions at Gir, the surreal white salt desert of the Rann of Kutch, UNESCO heritage city of Ahmedabad, sacred temples of Somnath and Dwarka, and arguably the best vegetarian cuisine in the country.",
      "url": "https://www.incredibleitinerary.com/blog/gujarat-7-days",
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
          "name": "How many days are enough for Gujarat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "7 days is ideal for the main Gujarat circuit — Ahmedabad, Kutch, Gir and Somnath/Diu. 10 days lets you add Vadodara and Saputara hill station. 14 days covers the full state including Mandvi beach, Palitana temples and the tribal regions of Dang.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Gujarat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "November to February is the best time to visit Gujarat. This coincides with Rann Utsav at the Rann of Kutch (Nov-Feb), pleasant weather across the state (20-30°C), and the best wildlife sighting season at Gir. Avoid April-June when temperatures regularly exceed 45°C.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 7-day Gujarat trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A budget traveller can complete 7 days in Gujarat for under ₹20,000 including accommodation, transport and activities. A heritage-focused mid-range trip costs ₹20,000-₹40,000 per person. Premium experiences with luxury tented camps at the Rann and heritage hotels start at ₹40,000+ per person.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Gujarat really fully vegetarian?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gujarat is predominantly vegetarian — most restaurants serve only vegetarian food and you will not find non-veg food easily outside major hotel chains. This is not a limitation but a strength: Gujarati thalis are among the best meals in India, with 15-20 items per plate. Street food is world-class. Embrace it.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I book a Gir National Park safari?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Book your Gir safari permit online at girlion.in at least 30 days in advance — permits sell out fast, especially on weekends and holidays. Morning safaris (6:30am) have the best lion sighting probability. The permit costs ₹800-₹1,500 per person depending on the zone. You must also hire a registered jeep (₹2,500-₹3,500) and a guide.",
          },
        },
        {
          "@type": "Question",
          "name": "What is Rann Utsav and is it worth visiting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rann Utsav is an annual cultural festival held at the Great Rann of Kutch from November to February. It features luxury tent accommodation on the edge of the white salt desert, cultural performances, handicraft stalls, and full moon desert walks. A full moon night at the Rann is genuinely one of India's most extraordinary experiences — the white desert stretches to the horizon under moonlight. Book tents at rannutsav.com well in advance.",
          },
        },
      ],
};

export default function GujaratBlogPage() {
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
      <GujaratClient />
    </>
  );
}
