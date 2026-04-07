import type { Metadata } from "next";
import PeriyarClient from "./PeriyarClient";

export const metadata: Metadata = {
  title: "Periyar Wildlife Sanctuary in 3 Days: Lake Safari, Elephants & Spice Estates (2026)",
  description:
    "3-day Periyar Thekkady travel guide — bamboo raft lake safari, elephant sightings, night patrol trekking, Kumily spice market, cardamom estates and best jungle camps for 2026.",
  keywords: [
    "periyar wildlife sanctuary guide",
    "thekkady lake safari",
    "periyar elephant sighting",
    "kumily spice market thekkady",
    "periyar national park itinerary 2026",
  ],
  openGraph: {
    title: "Periyar Wildlife Sanctuary in 3 Days: Lake Safari, Elephants & Spice Estates (2026)",
    description:
      "3-day Periyar Thekkady travel guide — bamboo raft lake safari, elephant sightings, night patrol trekking, Kumily spice market, cardamom estates and best jungle camps for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Periyar Lake elephant sighting Kerala wildlife sanctuary",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Periyar", "Thekkady", "Kerala", "Wildlife", "Safari", "Spice Estates"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Periyar Wildlife Sanctuary in 3 Days: Lake Safari, Elephants & Spice Estates (2026)",
    description:
      "3-day Periyar Thekkady guide — bamboo raft safari, elephant sightings, night patrol, Kumily spice market.",
    images: ["https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/periyar-wildlife-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/periyar-wildlife-3-days#article",
      "headline": "Periyar Wildlife Sanctuary in 3 Days: Lake Safari, Elephants & Spice Estates (2026)",
      "description":
        "3-day Periyar Thekkady travel guide — bamboo raft lake safari, elephant sightings, night patrol trekking, Kumily spice market, cardamom estates and best jungle camps for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/periyar-wildlife-3-days",
      },
      "keywords":
        "periyar wildlife sanctuary guide, thekkady lake safari, periyar elephant sighting, kumily spice market thekkady, periyar national park itinerary 2026",
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
          "name": "Periyar Wildlife in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/periyar-wildlife-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Periyar Wildlife Sanctuary, Thekkady, Kerala, India",
      "description":
        "Kerala's most accessible wildlife destination — Periyar Lake bamboo raft safaris, elephant sightings, night patrol, and the spice estates of Kumily.",
      "url": "https://www.incredibleitinerary.com/blog/periyar-wildlife-3-days",
      "touristType": ["Wildlife Tourism", "Eco Tourism", "Nature Tourism", "Cultural Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What wildlife can I see in Periyar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Elephant (most commonly seen from boats), tiger (rarely, they avoid the lake), leopard (buffer zone night patrol), gaur (Indian bison), sambar deer, wild boar, Nilgiri langur, lion-tailed macaque, giant Malabar squirrel, and 266+ bird species. The Periyar Lake boat/raft offers unique elephant and waterbird viewing.",
      },
    },
    {
      "@type": "Question",
      "name": "How is Periyar different from Nagarhole for wildlife?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Nagarhole has higher tiger and leopard density and the spectacular Kabini elephant crossing. Periyar offers a unique lake-based wildlife experience (bamboo rafting), stronger spice estate culture, and better accessibility from both Kerala coasts. Nagarhole is better for pure big-cat safari; Periyar is better for the complete Kerala eco-experience.",
      },
    },
    {
      "@type": "Question",
      "name": "Is the night patrol at Periyar safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes — the Night Patrol is led by trained forest guards carrying torches and first aid. You stay on established paths. The most common encounters are with gaur (intimidating but not aggressive if approached quietly), porcupines, and giant flying squirrels. Bear encounters are rare; tigers are very rarely seen.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I combine Periyar with Munnar and Alleppey?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "The classic Kerala triangle: Kochi → Munnar (2 days tea estates, 4 hrs from Kochi) → Periyar/Thekkady (2 days wildlife, 3 hrs from Munnar) → Alleppey houseboat (1 night, 3 hrs from Thekkady) → Kochi (2.5 hrs). 6–7 days total — one of India's best road trips.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the Periyar Tiger Reserve Night Patrol booking process?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "At the Eco Tourism Centre in Kumily, book in person on the day (opens 9 AM). The patrol goes from approximately 7–10 PM. Limited to 6–8 visitors per group, 2 groups per night. Cost: approximately ₹600/person. Sometimes available to book online at periyartigerreserve.com — check in advance.",
      },
    },
  ],
};

export default function PeriyarBlogPage() {
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
      <PeriyarClient />
    </>
  );
}
