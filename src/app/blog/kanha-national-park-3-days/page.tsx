import type { Metadata } from "next";
import KanhaClient from "./KanhaClient";

export const metadata: Metadata = {
  title: "Kanha National Park in 3 Days: Tigers, Safari & Jungle Book Country (2026)",
  description:
    "Complete Kanha National Park safari guide for 2026 — zones, jeep safari booking, tiger spotting tips, best season, where to stay near Kanha and how to reach.",
  keywords: [
    "kanha national park safari",
    "kanha tiger reserve guide",
    "kanha itinerary 3 days",
    "kanha safari booking",
    "best wildlife reserve madhya pradesh",
  ],
  openGraph: {
    title: "Kanha National Park in 3 Days: Tigers, Safari & Jungle Book Country (2026)",
    description:
      "Complete Kanha National Park safari guide for 2026 — zones, jeep safari booking, tiger spotting tips, best season, where to stay near Kanha and how to reach.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516426122078-a8e4ee10e986?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Bengal tiger in Kanha National Park, Madhya Pradesh",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Kanha", "Tiger Reserve", "Safari", "Madhya Pradesh", "Wildlife", "India"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanha National Park in 3 Days: Tigers, Safari & Jungle Book Country (2026)",
    description: "Zones, safari booking, tiger spotting tips, best season and where to stay near Kanha.",
    images: ["https://images.unsplash.com/photo-1516426122078-a8e4ee10e986?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/kanha-national-park-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/kanha-national-park-3-days#article",
      "headline": "Kanha National Park in 3 Days: Tigers, Safari & Jungle Book Country (2026)",
      "description": "Complete Kanha National Park safari guide for 2026 — zones, jeep safari booking, tiger spotting tips, best season, where to stay near Kanha and how to reach.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1516426122078-a8e4ee10e986?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/kanha-national-park-3-days",
      },
      "keywords": "kanha national park safari, kanha tiger reserve guide, kanha itinerary 3 days, kanha safari booking, best wildlife reserve madhya pradesh",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4300,
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
          "name": "Kanha National Park",
          "item": "https://www.incredibleitinerary.com/blog/kanha-national-park-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Kanha National Park, Madhya Pradesh, India",
      "description": "One of India's finest tiger reserves and the setting for Kipling's Jungle Book — home to 100+ tigers, the rare barasingha deer, vast sal forest meadows, and some of India's best wildlife photography.",
      "url": "https://www.incredibleitinerary.com/blog/kanha-national-park-3-days",
      "touristType": ["Wildlife Tourism", "Adventure Tourism", "Photography Tourism", "Nature Tourism"],
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
      "name": "What are the chances of seeing a tiger in Kanha?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kanha has 100+ tigers in 945 km². Sighting probability in peak season (Oct–Mar) in the Central Zone is 60–70% per safari. Kanha has one of India's highest sighting rates outside Ranthambore.",
      },
    },
    {
      "@type": "Question",
      "name": "What are the different safari zones in Kanha?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Core zones: Kanha Zone (meadows, high deer), Kisli Zone (bamboo forest, tiger territory), Mukki Zone (south side, good for leopard). Buffer zones: Khatia, Sarhi. Kanha Zone + Kisli Zone offer the best tiger chances.",
      },
    },
    {
      "@type": "Question",
      "name": "How to reach Kanha National Park?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nearest airports: Jabalpur (170 km, 3.5 hrs) and Nagpur (270 km, 5 hrs). Nearest railway: Jabalpur or Gondia. From Jabalpur: jeep/cab to Khatia Gate (₹3,000–4,000 for private transfer).",
      },
    },
    {
      "@type": "Question",
      "name": "Is Kanha better than Bandhavgarh for tigers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bandhavgarh has higher tiger density (smallest area, most tigers). Kanha has more diverse wildlife, larger meadows, and the exclusive barasingha. Serious photographers prefer Kanha for its landscapes; first-time tiger hunters prefer Bandhavgarh for guaranteed sightings.",
      },
    },
    {
      "@type": "Question",
      "name": "When is Kanha National Park closed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kanha closes June 30 – October 15 (monsoon). Peak season is November–March. April–June is hot (40°C+) but tigers visit water holes frequently — some experienced travelers prefer it for concentrated sightings near waterholes.",
      },
    },
  ],
};

export default function KanhaBlogPage() {
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
      <KanhaClient />
    </>
  );
}
