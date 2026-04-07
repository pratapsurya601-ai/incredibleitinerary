import type { Metadata } from "next";
import RanakpurClient from "./RanakpurClient";

export const metadata: Metadata = {
  title: "Ranakpur in 1 Day: 1,444 Marble Pillars & Jainism's Finest Temple (2026)",
  description:
    "Complete Ranakpur Jain temple guide — the 15th-century Chaturmukha Dharana Vihara, 1444 unique marble pillars, visiting rules, location between Udaipur and Jodhpur, and how to reach for 2026.",
  keywords: [
    "ranakpur jain temple guide",
    "ranakpur marble pillars",
    "ranakpur udaipur day trip",
    "ranakpur 1 day itinerary",
    "chaturmukha dharana vihara ranakpur 2026",
  ],
  openGraph: {
    title: "Ranakpur in 1 Day: 1,444 Marble Pillars & Jainism's Finest Temple (2026)",
    description:
      "Complete Ranakpur Jain temple guide — the 15th-century Chaturmukha Dharana Vihara, 1444 unique marble pillars, visiting rules, and how to reach for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Marble temple pillars and architecture in Rajasthan India",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Ranakpur", "India", "Travel", "Jainism", "Rajasthan", "Architecture"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranakpur in 1 Day: 1,444 Marble Pillars & Jainism's Finest Temple (2026)",
    description: "1,444 unique marble pillars, 15th-century Jain masterpiece, day trip from Udaipur.",
    images: ["https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/ranakpur-1-day",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/ranakpur-1-day#article",
      "headline": "Ranakpur in 1 Day: 1,444 Marble Pillars & Jainism's Finest Temple (2026)",
      "description": "Complete Ranakpur Jain temple guide — the 15th-century Chaturmukha Dharana Vihara, 1444 unique marble pillars, visiting rules, location between Udaipur and Jodhpur, and how to reach for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/ranakpur-1-day",
      },
      "keywords": "ranakpur jain temple guide, ranakpur marble pillars, ranakpur udaipur day trip, ranakpur 1 day itinerary, chaturmukha dharana vihara ranakpur 2026",
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
          "name": "Ranakpur in 1 Day",
          "item": "https://www.incredibleitinerary.com/blog/ranakpur-1-day",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Ranakpur, Rajasthan, India",
      "description": "Home to the 15th-century Chaturmukha Dharana Vihara — the finest Jain temple in India, featuring 1,444 intricately carved marble pillars no two of which are alike.",
      "url": "https://www.incredibleitinerary.com/blog/ranakpur-1-day",
      "touristType": ["Heritage Tourism", "Architecture Tourism", "Religious Tourism", "Cultural Tourism"],
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
      "name": "How is Ranakpur different from Dilwara Temple (Mount Abu)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both are masterpieces of Jain marble architecture. Dilwara (5th–13th century) is older and has more intricate ceiling work. Ranakpur (15th century) is larger and has the extraordinary pillar system. Both are must-visits for architecture lovers — Ranakpur wins on scale; Dilwara on ceiling detail.",
      },
    },
    {
      "@type": "Question",
      "name": "Can non-Jains visit Ranakpur Temple?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — non-Jains are welcome from 12 PM–5 PM daily. Morning hours (7 AM–12 PM) are reserved for Jain worshippers. Remove all leather items before entry and dress modestly. The temple complex is managed by the Shri Vardhman Sthanik Jain Shravak Sangh Trust.",
      },
    },
    {
      "@type": "Question",
      "name": "How long does it take to properly see Ranakpur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minimum 2 hours for the main temple, another 30 minutes for the Surya Narayan Temple. Add 30 minutes for photography. 3 hours total is ideal. If you're an architecture enthusiast, you could spend 5+ hours here.",
      },
    },
    {
      "@type": "Question",
      "name": "Is there accommodation near Ranakpur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ranakpur Hill Resort (₹3500–6000) is the main option near the temple. The Maharani Bagh Orchard Retreat (heritage property, ₹4000–7000) is 5 km away. Most travelers make it a day trip from Udaipur. If staying overnight, book well ahead — options are limited.",
      },
    },
    {
      "@type": "Question",
      "name": "What are the rules about photography inside Ranakpur temple?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Photography is allowed in the outer courtyards and from outside the main sanctum. Inside the inner sanctum and near the main idol, photography is restricted. Camera/video fees apply (₹100–200). Drone photography is not permitted in or around the temple complex.",
      },
    },
  ],
};

export default function RanakpurBlogPage() {
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
      <RanakpurClient />
    </>
  );
}
