import type { Metadata } from "next";
import TadobaClient from "./TadobaClient";

export const metadata: Metadata = {
  title: "Tadoba in 3 Days: Maharashtra's Tiger Reserve Safari Guide (2026)",
  description:
    "Complete Tadoba Andhari Tiger Reserve guide for 2026 — safari zones, jeep booking, tiger sighting frequency, where to stay near Tadoba, how to reach from Nagpur, best season.",
  keywords: [
    "tadoba tiger reserve safari",
    "tadoba andhari national park",
    "tadoba itinerary 3 days",
    "tadoba nagpur maharashtra",
    "best tiger reserve maharashtra 2026",
  ],
  openGraph: {
    title: "Tadoba in 3 Days: Maharashtra's Tiger Reserve Safari Guide (2026)",
    description:
      "Safari zones, jeep booking, tiger sighting frequency, where to stay near Tadoba, how to reach from Nagpur, best season — complete 2026 guide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Bengal tiger in Tadoba Andhari Tiger Reserve Maharashtra",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Tadoba", "Maharashtra", "India", "Tiger Safari", "Wildlife", "National Park"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tadoba in 3 Days: Maharashtra's Tiger Reserve Safari Guide (2026)",
    description: "Moharli zone tigers at the lake, Kolara leopards, 3-day safari strategy — complete 2026 guide.",
    images: ["https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/tadoba-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/tadoba-3-days#article",
      "headline": "Tadoba in 3 Days: Maharashtra's Tiger Reserve Safari Guide (2026)",
      "description":
        "Complete Tadoba Andhari Tiger Reserve guide for 2026 — safari zones, jeep booking, tiger sighting frequency, where to stay near Tadoba, how to reach from Nagpur, best season.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/tadoba-3-days",
      },
      "keywords": "tadoba tiger reserve safari, tadoba andhari national park, tadoba itinerary, tadoba nagpur maharashtra, tiger safari maharashtra",
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
          "name": "Tadoba in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/tadoba-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Tadoba Andhari Tiger Reserve, Maharashtra, India",
      "description":
        "Maharashtra's largest and oldest national park — Tadoba Andhari Tiger Reserve has 100+ tigers, the famous Tadoba Lake tiger sighting spot, and one of the best leopard frequencies in India at Kolara Gate.",
      "url": "https://www.incredibleitinerary.com/blog/tadoba-3-days",
      "touristType": ["Wildlife Tourism", "Tiger Safari", "Nature Tourism", "Photography Tourism"],
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
      "name": "Is Tadoba better than Ranthambore for tiger safaris?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Different strengths. Ranthambore (Rajasthan) has a higher profile and the famous tiger family lineages that are easier to track. Tadoba has similar sighting probability but less crowded, more open terrain, and the unique lake setting. Photographers often prefer Tadoba's natural light. For first-timers: both are excellent.",
      },
    },
    {
      "@type": "Question",
      "name": "What are the different safari gates at Tadoba?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Core zone gates: Moharli (northwest, highest tiger activity), Kolara (south, leopard frequency), Navegaon (north buffer). Buffer zone gates: Zari, Agarzari, Ramdegi. All offer wildlife — core zones have more restrictions and fewer vehicles per zone.",
      },
    },
    {
      "@type": "Question",
      "name": "How to reach Tadoba from Nagpur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nagpur is the nearest city (180 km, 3.5 hrs). Pre-book a taxi from Nagpur airport/station to Moharli Gate (₹2,500–3,000). Some resorts offer pickup. There's no direct public transport from Nagpur to Tadoba.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Tadoba open in summer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — Tadoba remains open October through June (unlike some parks). The summer months (April–June) have excellent sighting rates despite the heat. The park closes July 1 – September 30 for monsoon.",
      },
    },
    {
      "@type": "Question",
      "name": "What wildlife other than tigers can I see at Tadoba?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tadoba has leopards (particularly at Kolara), sloth bears, gaur (Indian bison — the world's largest wild cattle), wild dogs (dholes), sambar deer, spotted deer, nilgai, and 195+ bird species. The lake attracts painted storks and open-billed storks in winter.",
      },
    },
  ],
};

export default function TadobaBlogPage() {
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
      <TadobaClient />
    </>
  );
}
