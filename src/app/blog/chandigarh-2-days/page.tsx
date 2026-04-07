import type { Metadata } from "next";
import ChandigarhClient from "./ChandigarhClient";

export const metadata: Metadata = {
  title: "Chandigarh in 2 Days: Le Corbusier's Planned City & Rock Garden Guide (2026)",
  description:
    "2-day Chandigarh travel guide — Capitol Complex UNESCO, Rock Garden 5000 sculptures, Sukhna Lake, Rose Garden, Sector 17 café culture, best hotels and travel tips for 2026.",
  keywords: [
    "chandigarh travel guide",
    "chandigarh rock garden",
    "le corbusier chandigarh",
    "chandigarh itinerary 2 days",
    "sukhna lake chandigarh 2026",
  ],
  openGraph: {
    title: "Chandigarh in 2 Days: Le Corbusier's Planned City & Rock Garden Guide (2026)",
    description:
      "Capitol Complex UNESCO, Rock Garden 5000 sculptures, Sukhna Lake, Rose Garden, Sector 17 café culture — complete 2-day Chandigarh guide for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Chandigarh Rock Garden sculptures and modernist architecture",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Chandigarh", "India", "Travel", "Architecture", "Punjab", "UNESCO"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandigarh in 2 Days: Le Corbusier's Planned City & Rock Garden Guide (2026)",
    description: "Capitol Complex UNESCO, Rock Garden, Sukhna Lake, Le Corbusier's masterwork.",
    images: ["https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/chandigarh-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/chandigarh-2-days#article",
      "headline": "Chandigarh in 2 Days: Le Corbusier's Planned City & Rock Garden Guide (2026)",
      "description": "2-day Chandigarh travel guide — Capitol Complex UNESCO, Rock Garden 5000 sculptures, Sukhna Lake, Rose Garden, Sector 17 café culture, best hotels and travel tips for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/chandigarh-2-days",
      },
      "keywords": "chandigarh travel guide, chandigarh rock garden, le corbusier chandigarh, chandigarh itinerary 2 days, sukhna lake chandigarh 2026",
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
          "name": "Chandigarh in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/chandigarh-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Chandigarh, India",
      "description": "India's first planned city, designed by Le Corbusier in the 1950s. Home to the UNESCO-listed Capitol Complex, the Rock Garden (5,000 sculptures from waste), and Sukhna Lake.",
      "url": "https://www.incredibleitinerary.com/blog/chandigarh-2-days",
      "touristType": ["Architecture Tourism", "Cultural Tourism", "Heritage Tourism", "Urban Tourism"],
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
      "name": "Why is the Capitol Complex a UNESCO site?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Capitol Complex (High Court, Secretariat, and Legislative Assembly) was inscribed as UNESCO World Heritage in 2016 as part of 'The Architectural Work of Le Corbusier.' It's one of 17 Le Corbusier sites across 7 countries recognized as an 'outstanding contribution to the Modern Movement.' The brutalist concrete forms, crafted in raw béton brut (raw concrete), were revolutionary in the 1950s.",
      },
    },
    {
      "@type": "Question",
      "name": "Who is Nek Chand and why is his garden famous?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nek Chand (1924–2015) was a road inspector in Chandigarh's Public Works Department. Starting in 1958, he secretly built a fantastical garden from the rubble of demolished villages, using broken crockery, tiles, bangles, and electrical waste. The 40-acre Rock Garden he created is now visited by over 5,000 people daily and is one of India's most-visited outdoor attractions.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Chandigarh expensive compared to other Indian cities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chandigarh is moderately expensive — reflecting Punjab's prosperity. Budget accommodation runs ₹700–1500/night. Restaurant meals ₹150–400/person. Dhabas are cheap (₹100–200/person). Chandigarh has no heavy tourist premium — prices are driven by the local economy.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I do a day trip from Delhi to Chandigarh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — 260 km, 4–5 hours by Shatabdi Express (fastest, Delhi to Chandigarh: 3.5 hrs, ₹550–1200). Volvo bus: 5 hrs (₹450–600). By car: 4–5 hrs on NH44. However, 2 days is better to cover Rock Garden, Capitol Complex, Sukhna Lake, and Sector 17 at a comfortable pace.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Chandigarh good for families with children?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Excellent — Rock Garden is extraordinary for children (sculpture maze, waterfalls, arched corridors). Sukhna Lake has paddleboats, promenade, and bird watching. The Rose Garden is stroller-friendly. The Government Museum has galleries accessible for all ages. Chandigarh is India's most family-friendly planned city.",
      },
    },
  ],
};

export default function ChandigarhBlogPage() {
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
      <ChandigarhClient />
    </>
  );
}
