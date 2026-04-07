import type { Metadata } from "next";
import ImphalClient from "./ImphalClient";

export const metadata: Metadata = {
  title: "Imphal in 3 Days: Kangla Fort, Loktak Lake & Manipur's Cultural Heart (2026)",
  description:
    "3-day Imphal travel guide — Kangla Fort history, Loktak floating lake phumdis, Ima Keithel women's market, Keibul Lamjao National Park, Manipur dance and ILP permit for 2026.",
  keywords: [
    "imphal travel guide",
    "kangla fort imphal",
    "loktak lake manipur",
    "ima keithel women's market imphal",
    "imphal manipur itinerary 2026",
  ],
  openGraph: {
    title: "Imphal in 3 Days: Kangla Fort, Loktak Lake & Manipur's Cultural Heart (2026)",
    description:
      "Kangla Fort, Loktak floating lake phumdis, Ima Keithel women's market, sangai deer at Keibul Lamjao, INA flag at Moirang. 2 complete plans for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518639192441-5b9e9eea7faf?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Imphal Manipur landscape northeast India",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Imphal", "India", "Travel", "Manipur", "Northeast India", "Cultural"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imphal in 3 Days: Kangla Fort, Loktak Lake & Manipur's Cultural Heart (2026)",
    description: "Kangla Fort, Loktak Lake, Ima Keithel, sangai deer, INA Moirang. 2 plans.",
    images: ["https://images.unsplash.com/photo-1518639192441-5b9e9eea7faf?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/imphal-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/imphal-3-days#article",
      "headline": "Imphal in 3 Days: Kangla Fort, Loktak Lake & Manipur's Cultural Heart (2026)",
      "description":
        "3-day Imphal travel guide — Kangla Fort history, Loktak floating lake phumdis, Ima Keithel women's market, Keibul Lamjao National Park, Manipur dance and ILP permit for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1518639192441-5b9e9eea7faf?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/imphal-3-days",
      },
      "keywords":
        "imphal travel guide, kangla fort imphal, loktak lake manipur, ima keithel women's market imphal, imphal manipur itinerary 2026",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4200,
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
          "name": "Imphal in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/imphal-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Imphal, Manipur, India",
      "description":
        "The capital of Manipur — home to Kangla Fort (2,000 years of history), Loktak Lake with its floating phumdis, the world's only women-run market, and one of India's 8 classical dance forms.",
      "url": "https://www.incredibleitinerary.com/blog/imphal-3-days",
      "touristType": ["Cultural Tourism", "Heritage Tourism", "Wildlife Tourism", "Historical Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Manipur safe for tourists in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Imphal Valley (where tourists visit) is generally safe. Check current advisories before travel — Manipur has had periodic unrest in hill districts. The Imphal area itself (Kangla Fort, Loktak Lake, Ima Keithel, airport) has no active restrictions for tourists. Stay informed and register with your hotel.",
      },
    },
    {
      "@type": "Question",
      "name": "What is Kangla Fort's historical significance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kangla was the seat of the Manipur kingdom for 2,000 years. The British seized it in 1891 after the Anglo-Manipuri War and turned it into a military base. It was returned to Manipur only in 2004. The fort contains the Kangjeibung (sacred grove), ancient temples, and the Kangla Sha (mythological serpent-dragon guardians).",
      },
    },
    {
      "@type": "Question",
      "name": "What makes Loktak Lake unique?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Loktak is the largest freshwater lake in Northeast India (287 km²) and the only lake in the world with floating islands of biomass (phumdis). These phumdis (up to 2.5m thick) are so stable that fishermen build huts and live on them year-round. The Keibul Lamjao National Park on the lake is the world's only floating national park.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the story of the INA flag at Moirang?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In 1944, Subhas Chandra Bose's Indian National Army (INA), advancing from Burma with Japanese support, hoisted the Indian tricolor at Moirang (45 km from Imphal) — the first time the Indian flag was raised on Indian soil (before independence). The INA Museum at Moirang tells this story with artifacts and photographs.",
      },
    },
    {
      "@type": "Question",
      "name": "How many days do I need in Manipur/Imphal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "3 days covers Imphal city (Kangla, Ima Keithel, museums), Loktak Lake + Keibul Lamjao, and a Moirang day trip. Add 2 more days for Dzükou Valley (shared with Kohima), Ukhrul, or Shirui Lily Festival (April) if interested in deeper exploration.",
      },
    },
  ],
};

export default function ImphalBlogPage() {
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
      <ImphalClient />
    </>
  );
}
