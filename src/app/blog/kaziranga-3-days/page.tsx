import type { Metadata } from "next";
import KazirangaClient from "./KazirangaClient";

export const metadata: Metadata = {
  title: "Kaziranga 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Kaziranga trip in 3 days. Budget, Safari-Focused, Premium Lodge — with safari booking tips, rhino sighting strategy, range-by-range breakdown.",
  keywords: [
    "kaziranga national park itinerary",
    "kaziranga safari booking 2026",
    "kaziranga rhino safari",
    "kaziranga 3 days plan",
    "kaziranga travel guide",
    "kaziranga elephant safari",
    "kaziranga jeep safari",
    "assam wildlife tourism",
  ],
  openGraph: {
    title: "Kaziranga 3-Day Itinerary 2026: Trip Planner",
    description:
      "Range-by-range breakdown, safari booking strategy, real costs. 3 complete plans from budget to premium lodge.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1585063560582-52e578c02953?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Kaziranga National Park grassland with one-horned rhinoceros",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Kaziranga", "Assam", "India", "Wildlife", "Safari", "Rhino"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaziranga 3-Day Itinerary 2026: Trip Planner",
    description: "3 plans, range-by-range breakdown, real safari costs, booking tips.",
    images: ["https://images.unsplash.com/photo-1585063560582-52e578c02953?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/kaziranga-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/kaziranga-3-days#article",
      "headline": "Kaziranga in 3 Days: Safari Guide for Every Budget (2026)",
      "description": "3 complete Kaziranga plans — Budget, Safari-Focused, Premium Lodge — with safari booking tips, rhino sighting strategy, range-by-range breakdown and real costs.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1585063560582-52e578c02953?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/kaziranga-3-days",
      },
      "keywords": "kaziranga itinerary, kaziranga 3 days, kaziranga safari, one-horned rhinoceros, assam wildlife",
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
          "name": "Kaziranga in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/kaziranga-3-days",
        },
      ],
    },

        {
      "@type": "TouristDestination",
      "name": "Kaziranga National Park, Assam, India",
      "description": "UNESCO World Heritage Site and home to two-thirds of the world's one-horned rhinoceros population, along with tigers, elephants, wild water buffalo, and over 480 bird species.",
      "url": "https://www.incredibleitinerary.com/blog/kaziranga-3-days",
      "touristType": ["Wildlife Tourism", "Eco Tourism", "Nature Tourism"],
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
          "name": "When is Kaziranga National Park open?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kaziranga is open from November to April. The park closes May through October because the Brahmaputra floods the entire park during monsoon season. The best months for rhino sightings are February and March when the grass is short after controlled burning.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I book a safari in Kaziranga?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jeep safaris are booked online at kaziranga.assam.gov.in. Slots open 1-2 weeks in advance. Book the 5:30am or 6am morning slot for the best wildlife sighting chances. Elephant safaris are booked at the park gate the previous evening. Indian nationals pay around ₹1,100 per jeep safari and ₹1,200 for elephant safari. Foreign nationals pay more.",
          },
        },
        {
          "@type": "Question",
          "name": "Which range is best for rhino sighting in Kaziranga?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Western Range (Bagori) has the highest density of one-horned rhinoceroses. If you only do one safari, do the early morning jeep safari at Bagori. Central Range (Kohora) is also excellent and more popular. Eastern Range (Agoratoli) is best for birds and has fewer crowds.",
          },
        },
        {
          "@type": "Question",
          "name": "Is elephant safari or jeep safari better in Kaziranga?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They offer different experiences. Elephant safari gives you an eye-level view of the tall grassland and animals do not flee from elephants, allowing closer encounters. Jeep safari covers more ground and lets you see more species in one trip. Ideally, do both — elephant safari at dawn in Central Range and jeep safaris in Western and Eastern ranges.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a Kaziranga trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget travellers can do 3 days for under ₹8,000 including basic accommodation and 2 safaris. A safari-focused trip with 4-5 safaris and mid-range stays costs ₹10,000-₹25,000. Premium lodge stays with all safaris and guided experiences run ₹25,000-₹40,000 per person.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Kaziranga National Park?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fly to Jorhat Airport (97km, 2hr drive) or Guwahati Airport (230km, 4.5hr drive). Guwahati has more flight options and cheaper fares. State buses run from Guwahati to Kohora Gate. The nearest railway station is Furkating (75km). Most visitors base themselves in Kohora, the main town at the Central Range gate.",
          },
        },
      ],
};

export default function KazirangaBlogPage() {
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
      <KazirangaClient />
    </>
  );
}
