import type { Metadata } from "next";
import IndoreClient from "./IndoreClient";

export const metadata: Metadata = {
  title: "Indore in 2 Days: India's Cleanest City, Street Food & Sarafa Bazaar (2026)",
  description:
    "2-day Indore travel guide — Sarafa Bazaar midnight street food, 56 Dukan chaat, Rajwada Palace, Lal Bagh Palace, poha-jalebi breakfast, best hotels and travel tips for 2026.",
  keywords: [
    "indore travel guide",
    "sarafa bazaar indore night market",
    "indore street food guide",
    "indore itinerary 2 days",
    "rajwada palace indore 2026",
  ],
  openGraph: {
    title: "Indore in 2 Days: India's Cleanest City, Street Food & Sarafa Bazaar (2026)",
    description:
      "Sarafa Bazaar midnight food, 56 Dukan chaat, Rajwada Palace, poha-jalebi breakfast — complete 2-day Indore guide for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Indian street food market at night with colorful stalls",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Indore", "India", "Travel", "Street Food", "Madhya Pradesh", "Food Tourism"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indore in 2 Days: India's Cleanest City, Street Food & Sarafa Bazaar (2026)",
    description: "Sarafa Bazaar, 56 Dukan, poha-jalebi, garadu chaat — India's food capital guide.",
    images: ["https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/indore-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/indore-2-days#article",
      "headline": "Indore in 2 Days: India's Cleanest City, Street Food & Sarafa Bazaar (2026)",
      "description": "2-day Indore travel guide — Sarafa Bazaar midnight street food, 56 Dukan chaat, Rajwada Palace, Lal Bagh Palace, poha-jalebi breakfast, best hotels and travel tips for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/indore-2-days",
      },
      "keywords": "indore travel guide, sarafa bazaar indore night market, indore street food guide, indore itinerary 2 days, rajwada palace indore 2026",
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
          "name": "Indore in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/indore-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Indore, Madhya Pradesh, India",
      "description": "India's cleanest city for 7 consecutive years, home to the world-class Sarafa Bazaar night food market, 56 Dukan, and a rich Holkar dynasty heritage.",
      "url": "https://www.incredibleitinerary.com/blog/indore-2-days",
      "touristType": ["Food Tourism", "Heritage Tourism", "Cultural Tourism", "Urban Tourism"],
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
      "name": "Why is Indore called India's food capital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Indore has the highest density of quality street food per square km of any Indian city. Its 56 Dukan market operates all day; Sarafa operates all night. The city has over 4,000 registered eateries. Unique dishes — garadu, bhutte ki kees, sabudana khichdi, malpua — are not available this well anywhere else in India.",
      },
    },
    {
      "@type": "Question",
      "name": "How to reach Indore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Devi Ahilya Bai Holkar Airport (IDR) has direct flights from Delhi (1.5 hrs), Mumbai (1 hr), Bangalore (1.5 hrs), and 20+ other cities. By train: Indore Junction has connections to Mumbai (13 hrs), Delhi (16 hrs), Bhopal (3.5 hrs). By road: Bhopal is 200 km (3.5 hrs), Ujjain 55 km (1 hr).",
      },
    },
    {
      "@type": "Question",
      "name": "What is garadu chaat and where do I find it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Garadu is purple yam, a root vegetable fried and spiced with rock salt, lime, and special masalas. It's unique to Indore and found only in winter (November–February) on Sarafa and select street stalls. Outside Indore, it's nearly impossible to find authentic garadu chaat.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Indore worth visiting for history?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — Indore has a rich Holkar dynasty heritage: Rajwada Palace (7-storey, 200 years old), Lal Bagh Palace (Versailles-inspired, Italian marble), Krishnapura Chhatris (cenotaphs), and the Holkar-era temples. The Central Museum has the best Holkar artifact collection.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I do Indore as a day trip from Bhopal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Easily — 200 km (3.5 hrs by car or 2.5 hrs by express train). A day trip covering Rajwada, Lal Bagh, and an evening at Sarafa is very doable. However, if you want both Sarafa (night) AND Ujjain (day trip), staying overnight in Indore makes more sense.",
      },
    },
  ],
};

export default function IndoreBlogPage() {
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
      <IndoreClient />
    </>
  );
}
