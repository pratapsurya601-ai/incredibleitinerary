import type { Metadata } from "next";
import MawlynnongClient from "./MawlynnongClient";

export const metadata: Metadata = {
  title: "Mawlynnong in 2 Days: Asia's Cleanest Village & Living Root Bridges (2026)",
  description:
    "2-day Mawlynnong travel guide — living root bridge, Dawki crystal clear river, Sky Walk bamboo platform, how to reach from Shillong, best time to visit Meghalaya 2026.",
  keywords: [
    "mawlynnong travel guide",
    "mawlynnong living root bridge",
    "dawki river meghalaya",
    "mawlynnong cleanest village asia",
    "meghalaya northeast india guide 2026",
  ],
  openGraph: {
    title: "Mawlynnong in 2 Days: Asia's Cleanest Village & Living Root Bridges (2026)",
    description:
      "2-day Mawlynnong travel guide — living root bridge, Dawki crystal clear river, Sky Walk bamboo platform, how to reach from Shillong, best time to visit Meghalaya 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518639192441-5b9e9eea7faf?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Living root bridge in the forests of Meghalaya northeast India",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Mawlynnong", "Meghalaya", "Northeast India", "Travel", "Living Root Bridge", "Dawki"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mawlynnong in 2 Days: Asia's Cleanest Village & Living Root Bridges (2026)",
    description:
      "2-day Mawlynnong guide — cleanest village, living root bridge, Dawki river, Sky Walk.",
    images: ["https://images.unsplash.com/photo-1518639192441-5b9e9eea7faf?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/mawlynnong-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/mawlynnong-2-days#article",
      "headline": "Mawlynnong in 2 Days: Asia's Cleanest Village & Living Root Bridges (2026)",
      "description":
        "2-day Mawlynnong travel guide — living root bridge, Dawki crystal clear river, Sky Walk bamboo platform, how to reach from Shillong, best time to visit Meghalaya 2026.",
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
        "@id": "https://www.incredibleitinerary.com/blog/mawlynnong-2-days",
      },
      "keywords":
        "mawlynnong travel guide, mawlynnong living root bridge, dawki river meghalaya, mawlynnong cleanest village asia, meghalaya northeast india guide 2026",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 3600,
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
          "name": "Mawlynnong in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/mawlynnong-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Mawlynnong, Meghalaya, India",
      "description":
        "Asia's cleanest village in the East Khasi Hills of Meghalaya — home to a living root bridge, an 85-foot Sky Walk bamboo platform, and day-trip access to the crystal-clear Dawki (Umngot) River.",
      "url": "https://www.incredibleitinerary.com/blog/mawlynnong-2-days",
      "touristType": ["Eco Tourism", "Cultural Tourism", "Adventure Tourism", "Nature Tourism"],
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
      "name": "Why is Mawlynnong called Asia's Cleanest Village?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Discover India magazine first awarded it the title in 2003. The Khasi community has maintained a self-imposed cleanliness culture for generations — bamboo dustbins on every corner, a stream that flows through the village kept clean by community effort, and a ban on plastic. The award brought tourism, which the village has managed carefully.",
      },
    },
    {
      "@type": "Question",
      "name": "Is the Mawlynnong Living Root Bridge double-decker?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — Mawlynnong has a single-root bridge. The famous double-decker root bridge is in Nongriat (near Cherrapunji, 3 km hike). Both are extraordinary examples of bioengineering. If you can manage the 6 km round-trip hike to Nongriat, it's worth combining both.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I swim in the Dawki River?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — the river is clean and shallow (1–3m in most places). Locals swim near Shnongpdeng. However, the border zone is sensitive — stay away from the Bangladesh side and don't photograph border installations.",
      },
    },
    {
      "@type": "Question",
      "name": "How far is Mawlynnong from Shillong?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "90 km (2.5–3 hrs by road via Pynursla). The route passes through East Khasi Hills — beautiful but winding. Private taxi: ₹2,000–2,500 for the full day (Mawlynnong + Dawki). Shared transport takes longer but costs ₹150–200 total.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best base for exploring Meghalaya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shillong is the best base — it has hotels for all budgets, good connectivity, and is central for Mawlynnong (90 km), Cherrapunji (55 km), Dawki (95 km), and Nongkhnum Island (75 km). Most travelers spend 2 nights in Shillong and take day trips.",
      },
    },
  ],
};

export default function MawlynnongBlogPage() {
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
      <MawlynnongClient />
    </>
  );
}
