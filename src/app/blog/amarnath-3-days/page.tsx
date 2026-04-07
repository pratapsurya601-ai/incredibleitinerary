import type { Metadata } from "next";
import AmarnathClient from "./AmarnathClient";

export const metadata: Metadata = {
  title: "Amarnath Yatra in 3 Days: Ice Shiva Lingam & High-Altitude Pilgrimage (2026)",
  description:
    "Complete Amarnath Yatra guide for 2026 — helicopter vs trek route, Pahalgam vs Baltal base camps, RFID registration, medical certificate, yatra timing and budget breakdown.",
  keywords: [
    "amarnath yatra guide 2026",
    "amarnath helicopter booking",
    "amarnath trek pahalgam baltal",
    "amarnath cave shrine",
    "amarnath yatra registration",
  ],
  openGraph: {
    title: "Amarnath Yatra in 3 Days: Ice Shiva Lingam & High-Altitude Pilgrimage (2026)",
    description:
      "Complete Amarnath Yatra guide for 2026 — helicopter vs trek route, Pahalgam vs Baltal base camps, RFID registration, medical certificate, yatra timing and budget breakdown.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "High altitude mountain snow landscape for Amarnath Yatra",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Amarnath", "India", "Travel", "Pilgrimage", "Kashmir", "Yatra"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amarnath Yatra in 3 Days: Ice Shiva Lingam & High-Altitude Pilgrimage (2026)",
    description: "Helicopter vs trek, Pahalgam vs Baltal, RFID registration, budget breakdown.",
    images: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/amarnath-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/amarnath-3-days#article",
      "headline": "Amarnath Yatra in 3 Days: Ice Shiva Lingam & High-Altitude Pilgrimage (2026)",
      "description": "Complete Amarnath Yatra guide for 2026 — helicopter vs trek route, Pahalgam vs Baltal base camps, RFID registration, medical certificate, yatra timing and budget breakdown.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/amarnath-3-days",
      },
      "keywords": "amarnath yatra guide 2026, amarnath helicopter booking, amarnath trek pahalgam baltal, amarnath cave shrine, amarnath yatra registration",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4500,
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
          "name": "Amarnath in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/amarnath-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Amarnath Cave Shrine, Jammu & Kashmir, India",
      "description": "One of the holiest Hindu pilgrimage sites in India, the Amarnath Cave houses a naturally formed ice Shiva lingam at 3,888m altitude in the Himalayas.",
      "url": "https://www.incredibleitinerary.com/blog/amarnath-3-days",
      "touristType": ["Religious Tourism", "Adventure Tourism", "Pilgrimage Tourism", "Trekking"],
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
      "name": "What is the ice lingam at Amarnath Cave?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Amarnath Shiva lingam is a naturally occurring ice formation inside the cave at 3,888m. Dripping water freezes into a roughly cylindrical shape resembling Shiva's lingam. It grows and shrinks with the lunar cycle — largest at full moon. The lingam sometimes reaches 6 feet tall. It's considered one of the holiest sites in Hinduism.",
      },
    },
    {
      "@type": "Question",
      "name": "How difficult is the Amarnath Yatra trek?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Pahalgam route (36 km one way over 3 days) is a moderate-to-strenuous mountain trek with significant altitude gain. The most challenging section is Mahagunus Pass (14,500 ft). Age limit enforced: 13–70 years. Those above 70 or with health conditions must take the helicopter. Good physical fitness required.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I do Amarnath Yatra without prior trekking experience?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but physical preparation is essential. Training: 3 months of cardio, hill walking, and breathing exercises before the yatra. The route is well-maintained with rest camps, medical posts, langars (free food stalls), and rescue teams. Thousands of first-timers complete it every year.",
      },
    },
    {
      "@type": "Question",
      "name": "What should I carry for the Amarnath Yatra?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Essentials: RFID registration slip + medical certificate (both mandatory), thermal underwear, waterproof jacket, trekking shoes (ankle support), trekking poles, high-altitude sunscreen (SPF 50+), glucose + dry fruits, personal medication, and a torch. Emergency: Diamox, basic first aid kit.",
      },
    },
    {
      "@type": "Question",
      "name": "Are there free facilities (langars) on the Amarnath route?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — langars (community kitchens) run by various organizations serve free food and hot drinks at every major rest point along both routes. You will not go hungry on the Amarnath route. The langar system is one of the most organized community service efforts in Indian pilgrimage.",
      },
    },
  ],
};

export default function AmarnathBlogPage() {
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
      <AmarnathClient />
    </>
  );
}
