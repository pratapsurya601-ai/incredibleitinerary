import type { Metadata } from "next";
import HampiClient from "./HampiClient";

export const metadata: Metadata = {
  title: "Hampi 3-Day Itinerary 2026: India's Most Surreal Landscape (2026)",
  description:
    "Plan your Hampi trip in 3 days. Complete Hampi travel guide — Virupaksha Temple, Vittala Temple stone chariot, boulder treks, Sanapur Lake, hippie island..",
  keywords: [
    "hampi itinerary 3 days",
    "hampi travel guide 2026",
    "hampi ruins karnataka",
    "vittala temple hampi",
    "virupaksha temple hampi",
    "hampi bouldering",
    "hippie island hampi",
    "hampi from bangalore",
  ],
  openGraph: {
    title: "Hampi 3-Day Itinerary 2026: India's Most Surreal Landscape (2026)",
    description:
      "Vittala Temple · Boulder Treks · Hippie Island — complete guide with real costs.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600100317816-0a8b8a4fba14?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Hampi ruins Karnataka boulder landscape",
      },
    ],
    type: "article",
    publishedTime: "2026-03-21T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Hampi", "India", "Travel", "Itinerary", "Heritage"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hampi 3-Day Itinerary 2026: Trip Planner",
    description: "Virupaksha Temple, Vittala Temple, boulder treks — 4 plans, real costs.",
    images: ["https://images.unsplash.com/photo-1600100317816-0a8b8a4fba14?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/hampi-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/hampi-3-days#article",
      "headline": "Hampi in 3 Days: Complete Guide to India's Most Surreal Landscape (2026)",
      "description":
        "Complete Hampi travel guide with Virupaksha Temple, Vittala Temple stone chariot, boulder treks, Sanapur Lake and hippie island. 4 plans for every type of traveller.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1600100317816-0a8b8a4fba14?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-03-21T00:00:00Z",
      "dateModified": "2026-03-21T00:00:00Z",
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
        "@id": "https://www.incredibleitinerary.com/blog/hampi-3-days",
      },
      "keywords": "hampi itinerary, hampi 3 days, vittala temple, virupaksha temple, hampi bouldering, hippie island",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5400,
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
          "name": "Travel Guides",
          "item": "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Hampi in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/hampi-3-days",
        },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Hampi, Karnataka, India",
      "description": "A UNESCO World Heritage Site and the ruins of the Vijayanagara Empire, known for its surreal boulder landscape, ancient temples, and one of India's best backpacker scenes.",
      "url": "https://www.incredibleitinerary.com/blog/hampi-3-days",
      "touristType": ["Heritage Tourism", "Cultural Tourism", "Adventure Tourism"],
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
          "name": "How to reach Hampi from Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hosapete Junction is the nearest railway station (13km from Hampi). Trains from Bangalore to Hosapete: 7-8hrs (Rs.200-Rs.600). Overnight buses from Bangalore to Hosapete (Rs.400-Rs.900, 8hrs). From Hosapete auto/taxi to Hampi: Rs.200-Rs.300.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Hampi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to February is ideal — cool 20-28°C, comfortable for exploring ruins. Hampi is extremely hot March-June (40°C+). Manageable in light rain October-November. Avoid May-June heat completely.",
          },
        },
        {
          "@type": "Question",
          "name": "How many days are enough for Hampi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is ideal for Hampi. Day 1 covers the Royal Enclosure and south-side ruins. Day 2 is for Vittala Temple, Achyutaraya Temple and the iconic stone chariot. Day 3 is for Hippie Island (Virupapur Gaddi), Sanapur Lake and bouldering. 2 days is the absolute minimum.",
          },
        },
        {
          "@type": "Question",
          "name": "What is Hippie Island in Hampi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hippie Island (officially Virupapur Gaddi) is the area across the Tungabhadra River from the main ruins. It has cheap guesthouses (Rs.300-Rs.800/night), riverside cafes, rice paddies, and a laid-back backpacker vibe. Cross the river by coracle boat (Rs.50) or the footbridge. Most solo and budget travellers stay here.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Hampi good for solo travellers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hampi is one of India's best solo travel destinations. Hippie Island is full of backpackers, the ruins are safe to explore alone, distances are walkable or cyclable, and budget accommodation is plentiful. Rent a bicycle (Rs.100-Rs.150/day) or moped (Rs.250-Rs.400/day) to explore at your own pace.",
          },
        },
        {
          "@type": "Question",
          "name": "What should I not miss in Hampi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The absolute must-sees are: Vittala Temple and its iconic stone chariot, Virupaksha Temple (still active, 7th century), the Elephant Stables, sunrise from Matanga Hill (the best viewpoint in Hampi), a coracle ride on the Tungabhadra River, and Sanapur Lake for cliff jumping and swimming. Do not skip Matanga Hill sunrise.",
          },
        },
      ],
};

export default function HampiPage() {
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
      <HampiClient />
    </>
  );
}
