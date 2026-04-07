import type { Metadata } from "next";
import KohimaClient from "./KohimaClient";

export const metadata: Metadata = {
  title: "Kohima in 3 Days: WWII Battleground, Naga Culture & Dzükou Valley (2026)",
  description:
    "3-day Kohima travel guide — Battle of Kohima WWII war cemetery, Naga Heritage Village, Dzükou Valley trek, Hornbill Festival, Naga food and how to reach Nagaland 2026.",
  keywords: [
    "kohima travel guide",
    "kohima nagaland itinerary",
    "battle of kohima WWII",
    "dzukou valley trek",
    "hornbill festival kohima 2026",
  ],
  openGraph: {
    title: "Kohima in 3 Days: WWII Battleground, Naga Culture & Dzükou Valley (2026)",
    description:
      "3-day Kohima travel guide — Battle of Kohima WWII war cemetery, Naga Heritage Village, Dzükou Valley trek, Hornbill Festival, Naga food and how to reach Nagaland 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Kohima Nagaland landscape and cultural heritage",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Kohima", "India", "Travel", "Nagaland", "Northeast India", "WWII", "Hornbill Festival"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kohima in 3 Days: WWII Battleground, Naga Culture & Dzükou Valley (2026)",
    description:
      "3-day Kohima guide — WWII war cemetery, Naga Heritage Village, Dzükou Valley trek, Hornbill Festival.",
    images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/kohima-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/kohima-3-days#article",
      "headline": "Kohima in 3 Days: WWII Battleground, Naga Culture & Dzükou Valley (2026)",
      "description":
        "3-day Kohima travel guide — Battle of Kohima WWII war cemetery, Naga Heritage Village, Dzükou Valley trek, Hornbill Festival, Naga food and how to reach Nagaland 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/kohima-3-days",
      },
      "keywords":
        "kohima travel guide, kohima nagaland itinerary, battle of kohima WWII, dzukou valley trek, hornbill festival kohima 2026",
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
          "name": "Kohima in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/kohima-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Kohima, Nagaland, India",
      "description":
        "Capital of Nagaland and site of the pivotal 1944 Battle of Kohima, with extraordinary Naga tribal culture, the Dzükou Valley trek, and the annual Hornbill Festival showcasing all 16 Naga tribes.",
      "url": "https://www.incredibleitinerary.com/blog/kohima-3-days",
      "touristType": ["Heritage Tourism", "Cultural Tourism", "Adventure Tourism", "Historical Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Nagaland safe for tourists?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kohima and the main tourist areas are safe. The Northeast has complex history, but tourist violence is extremely rare. Local communities are generally welcoming. Avoid restricted areas near the Myanmar border (NAC zones) unless you have specific permits. The Nagaland government actively promotes tourism.",
      },
    },
    {
      "@type": "Question",
      "name": "When is the Hornbill Festival and how do I attend?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hornbill Festival runs December 1–10 every year at Kisama Heritage Village (12 km from Kohima). Entry: ₹200–500/day. Features all 16 Naga tribes' cultural performances. Book accommodation in Kohima 3 months ahead — rooms fill completely. December is also the most pleasant time weather-wise.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the ILP (Inner Line Permit) and where do I get it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The ILP is required for all non-Nagaland Indian citizens entering Nagaland. Get it online at nagalanditr.com (₹100, valid 15 days, instant). You can also get it at Dimapur airport/railway station entry points. Foreign tourists need an additional RAP from the Ministry of Home Affairs.",
      },
    },
    {
      "@type": "Question",
      "name": "How hard is the Dzükou Valley trek?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Moderate difficulty. The 9 km path (one way) has a 700m elevation gain. It takes 3–4 hours up and 2.5 hours down. The terrain is rocky, with a steep final climb. Good trekking shoes essential. Guides available in Kohima (₹800–1200/day). July–August: the Dzükou lily blooms. June–July: excellent views but trail can be slippery.",
      },
    },
    {
      "@type": "Question",
      "name": "What is unique about Naga cuisine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Naga food is unlike any other Indian regional cuisine — heavy use of smoked meats (pork, beef, dog), fermented ingredients (akhuni soybean, bamboo shoot), Bhut Jolokia chilies, and boiled/steamed preparation (not oily). It's protein-heavy and deeply umami. Most Nagas are Christian, so beef and pork are common (unlike much of India).",
      },
    },
  ],
};

export default function KohimaBlogPage() {
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
      <KohimaClient />
    </>
  );
}
