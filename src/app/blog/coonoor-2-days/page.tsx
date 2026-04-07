import type { Metadata } from "next";
import CoonoorClient from "./CoonoorClient";

export const metadata: Metadata = {
  title: "Coonoor in 2 Days: Nilgiris Tea Estates & Toy Train Guide (2026)",
  description:
    "2-day Coonoor travel guide — Nilgiri Mountain Railway UNESCO toy train, Sim's Park botanical garden, Dolphin's Nose viewpoint, Nilgiris tea tasting, best hotels near Ooty for 2026.",
  keywords: [
    "coonoor travel guide",
    "coonoor nilgiris itinerary",
    "ooty coonoor toy train",
    "coonoor tea estate tour",
    "nilgiris hill station 2026",
  ],
  openGraph: {
    title: "Coonoor in 2 Days: Nilgiris Tea Estates & Toy Train Guide (2026)",
    description:
      "2-day Coonoor travel guide — Nilgiri Mountain Railway UNESCO toy train, Sim's Park botanical garden, Dolphin's Nose viewpoint, Nilgiris tea tasting, best hotels near Ooty for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544948503-7ad532b5cc6c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Nilgiri tea estates Coonoor green hills",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Coonoor", "India", "Travel", "Tamil Nadu", "Nilgiris", "Tea"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coonoor in 2 Days: Nilgiris Tea Estates & Toy Train Guide (2026)",
    description: "2-day Coonoor guide: UNESCO toy train, tea estates, Dolphin's Nose and Sim's Park.",
    images: ["https://images.unsplash.com/photo-1544948503-7ad532b5cc6c?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/coonoor-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/coonoor-2-days#article",
      "headline": "Coonoor in 2 Days: Nilgiris Tea Estates & Toy Train Guide (2026)",
      "description":
        "2-day Coonoor travel guide — Nilgiri Mountain Railway UNESCO toy train, Sim's Park botanical garden, Dolphin's Nose viewpoint, Nilgiris tea tasting, best hotels near Ooty for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1544948503-7ad532b5cc6c?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/coonoor-2-days",
      },
      "keywords": "coonoor travel guide, coonoor nilgiris itinerary, ooty coonoor toy train, coonoor tea estate tour, nilgiris hill station 2026",
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
          "name": "Coonoor in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/coonoor-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Coonoor, Tamil Nadu, India",
      "description":
        "A Nilgiris hill station at 1,850m, quieter than Ooty, known for tea estates, the UNESCO Nilgiri Mountain Railway, Sim's Park, and Dolphin's Nose viewpoint.",
      "url": "https://www.incredibleitinerary.com/blog/coonoor-2-days",
      "touristType": ["Nature Tourism", "Heritage Tourism", "Food Tourism", "Leisure Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Coonoor or Ooty better?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ooty is busier — the lake, botanical garden, and Charing Cross market draw heavy crowds. Coonoor is quieter with better tea estates and more authentic plantation experiences. Most travelers do Ooty as a day trip from Coonoor. If you can only choose one: Ooty for first-timers; Coonoor for returning visitors or those wanting peace.",
      },
    },
    {
      "@type": "Question",
      "name": "How long does the Nilgiri Mountain Toy Train take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mettupalayam to Coonoor: approximately 3 hours (45 km). Coonoor to Ooty: approximately 2 hours (19 km). The entire Mettupalayam–Ooty journey takes 5 hours. Most travelers take the train one way and bus the other. Book on IRCTC.co.in — it sells out weeks ahead.",
      },
    },
    {
      "@type": "Question",
      "name": "What tea should I buy in Coonoor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Look for 'Nilgiri FTGFOP1' (Finest Tippy Golden Flowery Orange Pekoe) — the highest Nilgiri grade. Korakundah Estate produces some of the highest-altitude tea in India (2,400m). For gifting: the Nilgiris Co-operative store at Coonoor has fixed prices and reliable quality.",
      },
    },
    {
      "@type": "Question",
      "name": "How to reach Coonoor from Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bus: Coimbatore to Coonoor (2–2.5 hrs, ₹80–100, regular TNSTC buses). Train: Coimbatore to Mettupalayam (45 min) then Nilgiri Railway to Coonoor (3 hrs). By road via taxi: 75 km, 2 hrs (₹1500–2000 private). Coimbatore airport has flights from Chennai, Mumbai, Bangalore.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best trek near Coonoor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dolphin's Nose trek (6 km through tea estates, moderate) is the most scenic. Lambsrock to Dolphin's Nose circuit (10 km, half-day) is excellent for birding. Kodanad Viewpoint trek (moderate, 8 km) offers views of the Moyar River gorge.",
      },
    },
  ],
};

export default function CoonoorBlogPage() {
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
      <CoonoorClient />
    </>
  );
}
