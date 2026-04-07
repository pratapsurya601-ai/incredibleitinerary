import type { Metadata } from "next";
import NashikClient from "./NashikClient";

export const metadata: Metadata = {
  title: "Nashik in 2 Days: Sula Vineyards, Wine & Trimbakeshwar Guide (2026)",
  description:
    "2-day Nashik travel guide — Sula Vineyards wine tour, Trimbakeshwar Jyotirlinga, Pandavleni caves, Nashik wine harvest festival, best hotels and travel tips for 2026.",
  keywords: [
    "nashik travel guide",
    "sula vineyards nashik",
    "trimbakeshwar jyotirlinga nashik",
    "nashik wine tour",
    "nashik itinerary 2 days 2026",
  ],
  openGraph: {
    title: "Nashik in 2 Days: Sula Vineyards, Wine & Trimbakeshwar Guide (2026)",
    description:
      "2-day Nashik travel guide — Sula Vineyards wine tour, Trimbakeshwar Jyotirlinga, Pandavleni caves, Nashik wine harvest festival, best hotels and travel tips for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Sula Vineyards Nashik wine estate",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Nashik", "India", "Travel", "Wine", "Maharashtra", "Trimbakeshwar"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nashik in 2 Days: Sula Vineyards, Wine & Trimbakeshwar Guide (2026)",
    description: "2-day Nashik guide: Sula Vineyards, Trimbakeshwar Jyotirlinga, Pandavleni caves and travel tips.",
    images: ["https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/nashik-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/nashik-2-days#article",
      "headline": "Nashik in 2 Days: Sula Vineyards, Wine & Trimbakeshwar Guide (2026)",
      "description":
        "2-day Nashik travel guide — Sula Vineyards wine tour, Trimbakeshwar Jyotirlinga, Pandavleni caves, Nashik wine harvest festival, best hotels and travel tips for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-07T00:00:00Z",
      "dateModified": "2026-04-07T00:00:00Z",
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
        "@id": "https://www.incredibleitinerary.com/blog/nashik-2-days",
      },
      "keywords": "nashik travel guide, sula vineyards nashik, trimbakeshwar jyotirlinga nashik, nashik wine tour, nashik itinerary 2 days 2026",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4000,
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
          "name": "Nashik in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/nashik-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Nashik, Maharashtra, India",
      "description":
        "India's wine capital, home to Sula Vineyards, the Trimbakeshwar Jyotirlinga, Pandavleni Buddhist caves, and one of the four Kumbh Mela sites.",
      "url": "https://www.incredibleitinerary.com/blog/nashik-2-days",
      "touristType": ["Wine Tourism", "Religious Tourism", "Heritage Tourism", "Cultural Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Nashik good for non-wine drinkers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — Trimbakeshwar Jyotirlinga, Pandavleni Buddhist caves, Kalaram Temple, and Ram Kund are all excellent non-wine attractions. The city also has one of Maharashtra's best pilgrimage circuits and hosts the Simhastha Kumbh Mela every 12 years.",
      },
    },
    {
      "@type": "Question",
      "name": "How to book Sula Vineyards wine tasting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Book online at sulawines.com or just walk in (walk-ins usually accommodated, except on peak weekends). The standard tasting (₹400–600) includes 3 wines. Premium tasting (₹800–1200) includes food pairing. Open 11 AM – 10 PM.",
      },
    },
    {
      "@type": "Question",
      "name": "What is Nashik known for besides wine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nashik is India's wine capital AND one of four Kumbh Mela sites (next Simhastha 2027). It hosts Trimbakeshwar Jyotirlinga, the source of the Godavari River (India's second-longest), and 2nd-century BCE Buddhist caves. It's also India's largest onion and grape export hub.",
      },
    },
    {
      "@type": "Question",
      "name": "When does SulaFest happen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SulaFest is Nashik's annual 2-day music festival at Sula Vineyards, usually the first weekend of February. It features live music (folk, electronic, world music), wine, and food. Tickets ₹2,500–5,000/day. Book 2–3 months ahead — it sells out completely.",
      },
    },
    {
      "@type": "Question",
      "name": "How far is Nashik from Mumbai and Pune?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mumbai: 170 km (3 hrs on NH3). Pune: 210 km (4 hrs). Both connections are by well-maintained highways. Nashik also has an airport (Mumbai–Nashik flights, 45 min).",
      },
    },
  ],
};

export default function NashikBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <NashikClient />
    </>
  );
}
