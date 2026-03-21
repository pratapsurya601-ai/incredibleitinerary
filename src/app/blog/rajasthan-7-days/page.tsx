import type { Metadata } from "next";
import RajasthanBlogClient from "./RajasthanBlogClient";

export const metadata: Metadata = {
  title: "Rajasthan in 7 Days: The Royal Circuit That Actually Works (2026)",
  description:
    "The only Rajasthan itinerary you need — Jaipur, Jodhpur, Jaisalmer & Udaipur with real timings, budgets, Google Maps routes and mistakes to avoid.",
  keywords: [
    "rajasthan itinerary 7 days",
    "rajasthan travel guide 2026",
    "jaipur jodhpur jaisalmer udaipur route",
    "rajasthan budget travel",
    "amber fort jaipur",
    "mehrangarh fort jodhpur",
    "jaisalmer desert safari",
    "udaipur lake palace",
    "rajasthan honeymoon trip",
  ],
  openGraph: {
    title: "Rajasthan in 7 Days: The Royal Circuit That Actually Works (2026)",
    description:
      "Jaipur · Jodhpur · Jaisalmer · Udaipur — 4 plans, real budgets, Google Maps routes.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Amber Fort Jaipur Rajasthan",
      },
    ],
    type: "article",
    publishedTime: "2026-03-20T00:00:00Z",
    authors: ["IncredibleItinerary"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajasthan in 7 Days: The Only Guide You Need (2026)",
    description: "4 plans, real timings, actual budgets, Google Maps routes.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/rajasthan-7-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/rajasthan-7-days#article",
      "headline": "Rajasthan in 7 Days: The Royal Circuit That Actually Works (Budget to Luxury, 2026)",
      "description": "The only Rajasthan itinerary you need — Jaipur, Jodhpur, Jaisalmer & Udaipur with 4 complete plans, real timings, budgets and Google Maps routes.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-03-20T00:00:00Z",
      "dateModified": "2026-03-20T00:00:00Z",
      "author": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://incredibleitinerary.com",
      },
      "publisher": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://incredibleitinerary.com",
      },
      "keywords": "rajasthan itinerary, 7 days rajasthan, jaipur jodhpur jaisalmer udaipur, amber fort, mehrangarh fort",
      "wordCount": 6000,
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Rajasthan 7 Days", "item": "https://incredibleitinerary.com/blog/rajasthan-7-days" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days are enough for Rajasthan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "7 days is perfect for the main Rajasthan circuit — Jaipur, Jodhpur, Jaisalmer and Udaipur. 10 days allows you to add Pushkar and slow down. 14 days lets you include Bikaner, Ranthambhore wildlife reserve and village experiences.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Rajasthan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to March is the best time to visit Rajasthan. October-November is ideal with pleasant weather and fewer crowds. December-January is peak season with great weather but high prices. February-March is the sweet spot — good weather, lower prices, fewer tourists. Avoid April-September due to extreme heat (40-48°C).",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 7-day Rajasthan trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A budget solo traveller can complete 7 days in Rajasthan for ₹20,000-₹30,000 including accommodation, transport and activities. A couple on a mid-range trip should budget ₹60,000-₹90,000 for two. A family of four should plan for ₹45,000-₹70,000. Luxury palace hotel experiences start at ₹3,00,000 for two.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best route for Rajasthan in 7 days?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best route is Jaipur → Jodhpur → Jaisalmer → Udaipur. Never reverse this — the reverse adds 4-5 hours of unnecessary backtracking. This route flows logically across Rajasthan from east to west and back south. Total distance is approximately 1,430km and is best covered with a private car and driver.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Rajasthan safe for solo female travellers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rajasthan is one of India's most visited states and generally safe for solo female travellers. Stick to well-travelled routes, book accommodation in advance, avoid isolated areas at night, dress modestly in religious sites, and use pre-booked transport rather than negotiating with unknown drivers. The main tourist cities of Jaipur, Udaipur, Jodhpur and Jaisalmer all have well-developed tourist infrastructure.",
          },
        },
        {
          "@type": "Question",
          "name": "Should I hire a private car or take trains in Rajasthan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For budget travellers: trains between cities (book 2AC or 3AC class) plus autos locally works well. For couples and families: a private car with driver for the full 7 days costs ₹12,000-₹18,000 total and is far more convenient. The Jaisalmer to Udaipur leg has no direct train, so a private car is necessary for that segment regardless of your budget.",
          },
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Rajasthan, India",
      "description": "India's largest state, known as the Land of Kings, famous for its royal heritage, Thar Desert, magnificent forts, lake palaces and vibrant culture.",
      "url": "https://incredibleitinerary.com/blog/rajasthan-7-days",
    },
  ],
};

export default function RajasthanBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RajasthanBlogClient />
    </>
  );
}
