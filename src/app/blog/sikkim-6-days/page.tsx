import type { Metadata } from "next";
import SikkimClient from "./SikkimClient";

export const metadata: Metadata = {
  title: "Sikkim in 6 Days: Complete Itinerary from Gangtok to Pelling (Budget to Premium, 2026)",
  description:
    "3 complete Sikkim plans — Budget, Comfortable, Premium — with day-by-day routes through Gangtok, Tsomgo Lake, Nathula Pass, Ravangla and Pelling. Real costs, permit info, altitude tips.",
  keywords: [
    "sikkim itinerary 6 days",
    "sikkim travel guide 2026",
    "gangtok itinerary",
    "nathula pass permit",
    "pelling sikkim",
    "tsomgo lake sikkim",
    "sikkim budget travel",
    "sikkim trip planner",
    "ravangla sikkim",
    "kangchenjunga view",
  ],
  openGraph: {
    title: "Sikkim in 6 Days: Gangtok to Pelling Itinerary 2026",
    description:
      "Real timings, actual budgets, permit details. 3 complete plans for every type of traveller visiting Sikkim.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Kangchenjunga mountain view from Sikkim",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Sikkim", "India", "Travel", "Itinerary", "Mountains", "Himalayas"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sikkim in 6 Days: The Complete Guide (2026)",
    description: "3 plans, real timings, permit info, altitude tips, actual costs.",
    images: ["https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/sikkim-6-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/sikkim-6-days#article",
      "headline": "Sikkim in 6 Days: Complete Itinerary from Gangtok to Pelling (Budget to Premium, 2026)",
      "description": "3 complete Sikkim plans — Budget, Comfortable, Premium — with day-by-day routes through Gangtok, Tsomgo Lake, Nathula Pass, Ravangla and Pelling.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-04T00:00:00Z",
      "dateModified": "2026-04-04T00:00:00Z",
      "author": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://incredibleitinerary.com",
      },
      "publisher": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://incredibleitinerary.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://incredibleitinerary.com/logo.png",
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://incredibleitinerary.com/blog/sikkim-6-days",
      },
      "keywords": "sikkim itinerary, sikkim 6 days, gangtok, nathula pass, pelling, tsomgo lake, ravangla, kangchenjunga",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5200,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Sikkim in 6 Days",
          "item": "https://incredibleitinerary.com/blog/sikkim-6-days",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I get an Inner Line Permit for Sikkim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Indian nationals need an Inner Line Permit (ILP) for Nathula Pass and Tsomgo Lake. Apply online at sikkimtourism.gov.in or get it at the Sikkim Tourism counter at Rangpo checkpost or MG Marg in Gangtok. You need 2 passport photos and a valid ID. Takes 1-2 hours. Foreign nationals need a Protected Area Permit (PAP) which requires a registered travel agent.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Sikkim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "March to June and September to November are the best times. March-April brings rhododendron blooms. October-November has the clearest mountain views. July-August is monsoon season with heavy rain and landslides. December-February is very cold with some roads closed, but offers snow views.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 6-day Sikkim trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget travellers can do 6 days for under 18,000 rupees including shared cabs, homestays and local food. A comfortable trip runs 18,000-35,000 rupees with private cabs, mid-range hotels, and guided excursions. Premium trips start at 35,000 rupees with luxury stays, private vehicles, and curated experiences.",
          },
        },
        {
          "@type": "Question",
          "name": "Is altitude sickness a concern in Sikkim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, especially at Nathula Pass (14,140 feet) and Tsomgo Lake (12,313 feet). Spend at least one full day acclimatizing in Gangtok (5,410 feet) before heading higher. Walk slowly at high-altitude points, stay hydrated, and avoid alcohol the night before. Carry Diamox if you are prone to altitude sickness.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I drive my own car in Sikkim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can drive to Gangtok in your own car, but for Nathula Pass and Tsomgo Lake you must use a local registered vehicle with a local driver. Roads beyond Gangtok are narrow mountain roads and local drivers know the conditions. Shared jeeps are the most common and affordable transport between towns.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Sikkim safe for solo female travellers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sikkim is consistently ranked among India's safest states for solo travellers. The crime rate is exceptionally low. Gangtok and Pelling have a relaxed, welcoming atmosphere. Homestays are a great option for solo travellers. The main concern is road conditions during monsoon, not safety.",
          },
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Sikkim, India",
      "description": "A small Himalayan state in northeast India known for its Buddhist monasteries, Kangchenjunga views, rhododendron forests, and organic farming. India's cleanest and one of its safest states.",
      "url": "https://incredibleitinerary.com/blog/sikkim-6-days",
      "touristType": ["Mountain Tourism", "Cultural Tourism", "Adventure Tourism", "Eco Tourism"],
    },
  ],
};

export default function SikkimBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SikkimClient />
    </>
  );
}
