import type { Metadata } from "next";
import NagaraholeClient from "./NagaraholeClient";

export const metadata: Metadata = {
  title: "Nagarhole in 3 Days: Kabini Backwaters, Elephants & Karnataka's Best Safari (2026)",
  description:
    "Complete Nagarhole National Park and Kabini safari guide for 2026 — elephant crossing at dusk, tiger and leopard sightings, where to stay near Kabini, jungle lodges and how to reach.",
  keywords: [
    "nagarhole national park safari",
    "kabini safari nagarhole",
    "nagarhole karnataka itinerary",
    "kabini backwaters elephant",
    "nagarhole tiger reserve 2026",
  ],
  openGraph: {
    title: "Nagarhole in 3 Days: Kabini Backwaters, Elephants & Karnataka's Best Safari (2026)",
    description:
      "Complete Nagarhole National Park and Kabini safari guide for 2026 — elephant crossing at dusk, tiger and leopard sightings, where to stay near Kabini, jungle lodges and how to reach.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516426122078-a8e4ee10e986?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Elephants at Kabini reservoir Nagarhole Karnataka",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Nagarhole", "Kabini", "Karnataka", "Safari", "Wildlife", "India"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nagarhole in 3 Days: Kabini Backwaters, Elephants & Karnataka's Best Safari (2026)",
    description:
      "Complete Nagarhole National Park and Kabini safari guide — elephant crossing at dusk, tiger sightings, jungle lodges.",
    images: ["https://images.unsplash.com/photo-1516426122078-a8e4ee10e986?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/nagarhole-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/nagarhole-3-days#article",
      "headline": "Nagarhole in 3 Days: Kabini Backwaters, Elephants & Karnataka's Best Safari (2026)",
      "description":
        "Complete Nagarhole National Park and Kabini safari guide for 2026 — elephant crossing at dusk, tiger and leopard sightings, where to stay near Kabini, jungle lodges and how to reach.",
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
        "@id": "https://www.incredibleitinerary.com/blog/nagarhole-3-days",
      },
      "keywords":
        "nagarhole national park safari, kabini safari nagarhole, nagarhole karnataka itinerary, kabini backwaters elephant, nagarhole tiger reserve 2026",
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
          "name": "Nagarhole in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/nagarhole-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Nagarhole National Park, Karnataka, India",
      "description":
        "Karnataka's premier wildlife destination featuring Kabini reservoir elephant crossings, tiger and leopard safaris, and unique boat safaris on the Kabini backwaters.",
      "url": "https://www.incredibleitinerary.com/blog/nagarhole-3-days",
      "touristType": ["Wildlife Tourism", "Safari Tourism", "Nature Tourism", "Eco Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes Kabini different from other South India wildlife destinations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Kabini's reservoir creates a unique edge habitat where forest meets water — elephant herds cross daily, crocodiles bask on banks, and the open water allows 270° views unavailable in dense forest reserves. Combined with Nagarhole's core forest tiger population, it offers both landscape and wildlife photography unmatched in South India.",
      },
    },
    {
      "@type": "Question",
      "name": "How to reach Kabini / Nagarhole?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Nearest city: Mysore (80 km, 2 hrs by road). From Bangalore: 220 km (4 hrs). The Kabini Dam area has the most lodges — most GPS-navigate to 'Kabini Jungle Lodge' or 'Kabini Bridge'. No direct public transport; hire a taxi from Mysore.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit Nagarhole / Kabini?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "October–November: lush greenery, post-monsoon freshness, active wildlife. March–May: summer — elephants congregate at water sources, the Kabini crossing is most dramatic. June–September: monsoon, park partially closed, very wet. Best overall: April–May for elephant spectacle; November for green forest.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Nagarhole good for bird watching?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Outstanding — 270+ species including Malabar pied hornbill, crested serpent eagle, Indian grey hornbill, brown fish owl, and the rare Malabar trogon. Winter (November–February) brings migratory species. The Brahmagiri hills adjacent to Nagarhole add Nilgiri biome specialties.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I combine Nagarhole with Coorg and Mysore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "The classic Karnataka circuit: Bangalore → Mysore (3 hrs, palaces) → Kabini/Nagarhole (2 hrs from Mysore, wildlife 2 nights) → Coorg (1 hr from Kabini, coffee + hills 1–2 nights) → Bangalore. 5–6 days covers the full southern Karnataka experience.",
      },
    },
  ],
};

export default function NagarholesBlogPage() {
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
      <NagaraholeClient />
    </>
  );
}
