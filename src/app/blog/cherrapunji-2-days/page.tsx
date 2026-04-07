import type { Metadata } from "next";
import CherrapunjiClient from "./CherrapunjiClient";

export const metadata: Metadata = {
  title: "Cherrapunji in 2 Days: World's Wettest Place, Nohkalikai Falls & Root Bridges (2026)",
  description:
    "2-day Cherrapunji (Sohra) travel guide — Nohkalikai Falls 340m, Seven Sisters waterfall, double-decker living root bridge at Nongriat, Mawsmai cave and best time to visit Meghalaya 2026.",
  keywords: [
    "cherrapunji travel guide",
    "nohkalikai falls cherrapunji",
    "cherrapunji sohra itinerary",
    "living root bridge nongriat",
    "cherrapunji meghalaya 2026",
  ],
  openGraph: {
    title: "Cherrapunji in 2 Days: World's Wettest Place, Nohkalikai Falls & Root Bridges (2026)",
    description:
      "2-day Cherrapunji (Sohra) travel guide — Nohkalikai Falls 340m, Seven Sisters waterfall, double-decker living root bridge at Nongriat, Mawsmai cave and best time to visit Meghalaya 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1698429358246-807d8972da9a?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Nohkalikai Falls Cherrapunji Meghalaya tallest plunge waterfall India",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Cherrapunji", "Sohra", "Meghalaya", "Nohkalikai Falls", "Living Root Bridge", "Northeast India"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cherrapunji in 2 Days: World's Wettest Place, Nohkalikai Falls & Root Bridges (2026)",
    description:
      "2-day Cherrapunji guide — Nohkalikai Falls, double-decker root bridge at Nongriat, Seven Sisters, Mawsmai Cave.",
    images: ["https://images.unsplash.com/photo-1698429358246-807d8972da9a?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/cherrapunji-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/cherrapunji-2-days#article",
      "headline": "Cherrapunji in 2 Days: World's Wettest Place, Nohkalikai Falls & Root Bridges (2026)",
      "description":
        "2-day Cherrapunji (Sohra) travel guide — Nohkalikai Falls 340m, Seven Sisters waterfall, double-decker living root bridge at Nongriat, Mawsmai cave and best time to visit Meghalaya 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1698429358246-807d8972da9a?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/cherrapunji-2-days",
      },
      "keywords":
        "cherrapunji travel guide, nohkalikai falls cherrapunji, cherrapunji sohra itinerary, living root bridge nongriat, cherrapunji meghalaya 2026",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 3800,
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
          "name": "Cherrapunji in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/cherrapunji-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Cherrapunji (Sohra), Meghalaya, India",
      "description":
        "One of the world's wettest places — home to Nohkalikai Falls (340m), the double-decker living root bridge at Nongriat, Seven Sisters Falls, and the limestone caves of Mawsmai.",
      "url": "https://www.incredibleitinerary.com/blog/cherrapunji-2-days",
      "touristType": ["Nature Tourism", "Adventure Tourism", "Trekking", "Eco Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Cherrapunji or Mawsynram wetter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Both claim the title of 'world's wettest place' — Mawsynram (15 km from Cherrapunji) has slightly higher average annual rainfall in most years. Cherrapunji held the record longer and has more tourist infrastructure. For travelers: Cherrapunji is far more accessible and has better sights (Nohkalikai, root bridges, caves).",
      },
    },
    {
      "@type": "Question",
      "name": "How difficult is the Nongriat root bridge trek?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Challenging but accessible for reasonably fit people. The path is 5 km one way with 3,500 steps — mostly downhill going (easier on legs, harder on knees), uphill returning (cardiovascular). No technical climbing required. Trekking poles recommended. The 10-hour round trip (including swimming time) is better split as a half-day with an early start.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the legend of Nohkalikai Falls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "'Nohkalikai' means 'jump of Ka Likai' in Khasi. Legend: Ka Likai (a Khasi woman) was a devoted mother who was remarried. Her new husband, jealous of her attention to her daughter, killed and cooked the child. Ka Likai, unaware, ate the meal. When she found her daughter's fingers (the only remains), she went mad and jumped off the plateau. The falls bear her name.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I combine Cherrapunji and Mawlynnong in 2 days?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes — from Shillong: Day 1 Cherrapunji (55 km west), Day 2 Mawlynnong (90 km east). Both are accessible from Shillong as day trips. The Nongriat root bridge trek requires a full day — it cannot be combined with Mawlynnong. If doing both root bridges (Nongriat + Mawlynnong), allocate separate full days from Shillong.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best base for visiting Cherrapunji?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Shillong (55 km, 1.5 hrs) is the best base — it has accommodation for all budgets, good connectivity, and works as a base for Mawlynnong, Dawki, and Cherrapunji. Staying in Cherrapunji itself is better for the Nongriat trek (early start) but has limited accommodation options.",
      },
    },
  ],
};

export default function CherrapunjiBlogPage() {
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
      <CherrapunjiClient />
    </>
  );
}
