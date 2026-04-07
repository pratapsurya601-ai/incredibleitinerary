import type { Metadata } from "next";
import DibrugarhClient from "./DibrugarhClient";

export const metadata: Metadata = {
  title: "Dibrugarh in 3 Days: Assam's Tea City, Brahmaputra & Majuli Island (2026)",
  description:
    "3-day Dibrugarh travel guide — tea estate tours, Brahmaputra river sunset, Majuli ferry, Dehing Patkai elephant reserve, Ahom heritage and best hotels for 2026.",
  keywords: [
    "dibrugarh travel guide",
    "dibrugarh tea garden tour",
    "majuli island from dibrugarh",
    "brahmaputra dibrugarh",
    "dibrugarh assam itinerary 2026",
  ],
  openGraph: {
    title: "Dibrugarh in 3 Days: Assam's Tea City, Brahmaputra & Majuli Island (2026)",
    description:
      "Tea estate tours, Brahmaputra river sunset, Majuli ferry, Dehing Patkai elephant reserve, Ahom heritage — complete 3-day Dibrugarh guide for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Tea gardens and green landscape in Assam India",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Dibrugarh", "India", "Travel", "Assam", "Tea Garden", "Brahmaputra"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dibrugarh in 3 Days: Assam's Tea City, Brahmaputra & Majuli Island (2026)",
    description: "Tea estates, Brahmaputra sunset, Majuli ferry, Ahom heritage — Assam's tea capital.",
    images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/dibrugarh-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/dibrugarh-3-days#article",
      "headline": "Dibrugarh in 3 Days: Assam's Tea City, Brahmaputra & Majuli Island (2026)",
      "description": "3-day Dibrugarh travel guide — tea estate tours, Brahmaputra river sunset, Majuli ferry, Dehing Patkai elephant reserve, Ahom heritage and best hotels for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/dibrugarh-3-days",
      },
      "keywords": "dibrugarh travel guide, dibrugarh tea garden tour, majuli island from dibrugarh, brahmaputra dibrugarh, dibrugarh assam itinerary 2026",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4300,
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
          "name": "Dibrugarh in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/dibrugarh-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Dibrugarh, Assam, India",
      "description": "The tea capital of the world — Dibrugarh district produces more tea than any other single district globally. Gateway to Majuli River Island and the Brahmaputra, in the heart of Ahom Kingdom heritage.",
      "url": "https://www.incredibleitinerary.com/blog/dibrugarh-3-days",
      "touristType": ["Cultural Tourism", "Nature Tourism", "Tea Tourism", "Heritage Tourism"],
    },
  ],
};

// FAQPage schema — separate block
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is Dibrugarh the tea capital of Assam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dibrugarh district has 160+ tea gardens producing 150+ million kg of tea annually — more than any other single district globally outside Darjeeling. The Brahmaputra Valley's flat alluvial soil, high humidity, and consistent rainfall create the ideal environment for Camellia sinensis var. assamica, the Assam tea variety.",
      },
    },
    {
      "@type": "Question",
      "name": "How to reach Majuli Island from Dibrugarh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drive from Dibrugarh to Jorhat (90 min, 85 km) → Nimati Ghat (15 min from Jorhat) → Ferry to Majuli (1–1.5 hrs, ₹15 for pedestrians, ₹100+ for vehicles). Ferries run throughout the day but schedule changes seasonally — check with your hotel. The ferry crossing is itself a highlight (Brahmaputra is extraordinarily wide).",
      },
    },
    {
      "@type": "Question",
      "name": "What should I buy in Dibrugarh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Assam Orthodox tea directly from estates or the Dibrugarh Tea Auction Centre shop (TGFOP grade, ₹300–600/250g). Assam silk (muga — golden natural silk, unique to Assam). Bihu handicrafts (bamboo). Jaapi (traditional conical hat — a beautiful decorative piece). Gamosa (Assamese ceremonial towel).",
      },
    },
    {
      "@type": "Question",
      "name": "Is Dehing Patkai better than Kaziranga for wildlife?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Different ecosystems. Kaziranga (300 km west) is the world's best for one-horned rhinos and has more open terrain. Dehing Patkai is a dense tropical rainforest — better for primates, birds, and elephants in forest settings. Both are excellent; Kaziranga is more accessible for first-timers.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the Ahom Kingdom's connection to Dibrugarh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Ahom Kingdom ruled Assam for 600 years (1228–1826) — one of the longest-surviving kingdoms in Indian history. Dibrugarh and surrounding Upper Assam were the heartland of Ahom civilization. The Rang Ghar (royal sports pavilion, 25 km from Sibasagar), Kareng Ghar (palace), and Ahom graves are nearby. The Ahoms were originally Tai people who migrated from Southeast Asia.",
      },
    },
  ],
};

export default function DibrugarhBlogPage() {
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
      <DibrugarhClient />
    </>
  );
}
