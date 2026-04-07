import type { Metadata } from "next";
import TarkarliClient from "./TarkarliClient";

export const metadata: Metadata = {
  title: "Tarkarli in 2 Days: Scuba Diving, Sindhudurg Fort & Malvan Coast (2026)",
  description:
    "2-day Tarkarli travel guide — scuba diving and snorkeling, Sindhudurg Fort on water, Malvani fish thali, how to reach from Goa or Mumbai, best time to visit for 2026.",
  keywords: [
    "tarkarli travel guide",
    "tarkarli scuba diving",
    "sindhudurg fort tarkarli",
    "malvan beach tarkarli",
    "tarkarli konkan maharashtra 2026",
  ],
  openGraph: {
    title: "Tarkarli in 2 Days: Scuba Diving, Sindhudurg Fort & Malvan Coast (2026)",
    description:
      "Scuba diving at Rock Garden, Sindhudurg Fort built by Shivaji, Malvani fish thali, dolphins at Devbagh. 2 complete plans for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Tarkarli beach scuba diving Konkan coast Maharashtra",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Tarkarli", "India", "Travel", "Maharashtra", "Scuba Diving", "Konkan"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarkarli in 2 Days: Scuba Diving, Sindhudurg Fort & Malvan Coast (2026)",
    description: "Scuba diving, Sindhudurg Fort, Malvani food, dolphins at Devbagh. 2 plans.",
    images: ["https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/tarkarli-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/tarkarli-2-days#article",
      "headline": "Tarkarli in 2 Days: Scuba Diving, Sindhudurg Fort & Malvan Coast (2026)",
      "description":
        "2-day Tarkarli travel guide — scuba diving and snorkeling, Sindhudurg Fort on water, Malvani fish thali, how to reach from Goa or Mumbai, best time to visit for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/tarkarli-2-days",
      },
      "keywords":
        "tarkarli travel guide, tarkarli scuba diving, sindhudurg fort tarkarli, malvan beach tarkarli, tarkarli konkan maharashtra 2026",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 3900,
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
          "name": "Tarkarli in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/tarkarli-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Tarkarli, Malvan, Maharashtra, India",
      "description":
        "India's best mainland scuba diving destination on the Konkan coast — with Sindhudurg Fort, dolphin spotting at Devbagh, and exceptional Malvani cuisine.",
      "url": "https://www.incredibleitinerary.com/blog/tarkarli-2-days",
      "touristType": ["Adventure Tourism", "Beach Tourism", "Heritage Tourism", "Food Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Tarkarli good for non-swimmers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — snorkeling in Tarkarli's sheltered cove is very gentle (calm, 1–2m depth, supervised by MTDC staff). Even children can participate. Scuba intro dives for non-swimmers are done in a controlled setting — the instructor is with you at all times. Devbagh boat rides and fort visits require no swimming.",
      },
    },
    {
      "@type": "Question",
      "name": "Is the scuba diving in Tarkarli as good as Andaman or Lakshadweep?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — Andaman and Lakshadweep have visibility of 30–40 feet vs Tarkarli's 10–15 feet. Tarkarli is India's best mainland scuba destination. For someone who can't travel to islands, Tarkarli is the best accessible option.",
      },
    },
    {
      "@type": "Question",
      "name": "What is Sindhudurg Fort and how do I reach it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sindhudurg is a 17th-century island fort 0.8 km offshore from Malvan town (5 km from Tarkarli). Boat from Malvan jetty: ₹200 return, 10-minute crossing. The fort has a freshwater well, Shivaji's handprints in the stone, temples, and the original walls.",
      },
    },
    {
      "@type": "Question",
      "name": "How far is Tarkarli from Goa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "110 km from Goa (Mapusa/Panaji), approximately 3 hours by road via NH66. From Madgaon Railway Station by train: 1.5 hrs to Kudal, then 30 km to Tarkarli. Many Goa visitors add Tarkarli as a 1-night extension.",
      },
    },
    {
      "@type": "Question",
      "name": "What time of year is best for Tarkarli scuba?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "November to April is best — sea is calm, water clarity is 10–15 feet, marine life is active. December–February has the highest visibility. October is good but can have late monsoon swells. May: slightly rougher but diving continues.",
      },
    },
  ],
};

export default function TarkarliBlogPage() {
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
      <TarkarliClient />
    </>
  );
}
