import type { Metadata } from "next";
import GirClient from "./GirClient";

export const metadata: Metadata = {
  title: "Gir National Park in 3 Days: Last Wild Asiatic Lions on Earth (2026)",
  description:
    "Complete Gir National Park guide for 2026 — safari zones, Devalia safari park, booking Asiatic lion safari, best season, how to reach Sasan Gir, hotels and what to expect.",
  keywords: [
    "gir national park safari",
    "asiatic lion gir gujarat",
    "gir lion reserve booking",
    "sasan gir itinerary",
    "gir wildlife sanctuary guide 2026",
  ],
  openGraph: {
    title: "Gir National Park in 3 Days: Last Wild Asiatic Lions on Earth (2026)",
    description:
      "Safari zones, Devalia safari park, booking Asiatic lion safari, best season, how to reach Sasan Gir, hotels and what to expect in 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Asiatic lion in Gir National Park Gujarat",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Gir", "Gujarat", "India", "Wildlife", "Safari", "Asiatic Lion"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gir National Park in 3 Days: Last Wild Asiatic Lions on Earth (2026)",
    description: "674 Asiatic lions, Devalia guaranteed sightings, Somnath combo — complete 2026 safari guide.",
    images: ["https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/gir-national-park-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/gir-national-park-3-days#article",
      "headline": "Gir National Park in 3 Days: Last Wild Asiatic Lions on Earth (2026)",
      "description":
        "Complete Gir National Park guide for 2026 — safari zones, Devalia safari park, booking Asiatic lion safari, best season, how to reach Sasan Gir, hotels and what to expect.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/gir-national-park-3-days",
      },
      "keywords": "gir national park safari, asiatic lion gir gujarat, gir lion reserve booking, sasan gir itinerary, gir wildlife sanctuary",
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
          "name": "Gir National Park in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/gir-national-park-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Gir National Park, Gujarat, India",
      "description":
        "The last refuge of the Asiatic lion — 674 wild lions in 1,412 km² of dry deciduous forest in Gujarat. The world's only wild population of Panthera leo persica.",
      "url": "https://www.incredibleitinerary.com/blog/gir-national-park-3-days",
      "touristType": ["Wildlife Tourism", "Safari Tourism", "Nature Tourism", "Conservation Tourism"],
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
      "name": "What are the chances of seeing lions in Gir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Core zone safaris have a 70–80% sighting probability in peak season. Devalia (interpretation zone) has near-100% sighting probability — lions are resident and regularly visible. Morning safaris have higher sighting rates.",
      },
    },
    {
      "@type": "Question",
      "name": "How many Asiatic lions are left in the wild?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 2023 census counted 674 Asiatic lions in Gir — up from 523 in 2015. This is the entire world population of wild Asiatic lions. The recovery from fewer than 20 lions in 1900 to 674 in 2023 is one of conservation's great success stories.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Gir National Park open all year?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — the park closes mid-June to mid-October for the monsoon and mating season. Open October 16 – June 15. Peak season: December–April.",
      },
    },
    {
      "@type": "Question",
      "name": "How to reach Sasan Gir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nearest railway: Sasan Gir has its own small station (trains from Veraval, Rajkot, Ahmedabad). Nearest airport: Rajkot (160 km, 3 hrs) or Diu Airport (65 km, faster). From Ahmedabad: 360 km (6 hrs by road) or train (7–9 hrs to Veraval/Sasan).",
      },
    },
    {
      "@type": "Question",
      "name": "What is the difference between the core zone and buffer zone at Gir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Core zone (sanctuary): jeep safaris only, strictly managed, no human settlements — highest lion density. Buffer zone: surrounding 1,153 km², some villages, less restricted — good for leopard, birds, and secondary wildlife. Devalia is within the core zone boundary but manages as a separate interpretation area.",
      },
    },
  ],
};

export default function GirBlogPage() {
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
      <GirClient />
    </>
  );
}
