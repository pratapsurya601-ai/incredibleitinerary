import type { Metadata } from "next";
import PenchClient from "./PenchClient";

export const metadata: Metadata = {
  title: "Pench in 3 Days: The Real Jungle Book Tiger Reserve & Safari Guide (2026)",
  description:
    "Complete Pench National Park safari guide for 2026 — zones, jeep booking, Jungle Book connection, tiger and wild dog sightings, where to stay near Pench and how to reach.",
  keywords: [
    "pench national park safari",
    "pench tiger reserve guide",
    "pench madhya pradesh itinerary",
    "jungle book pench",
    "pench wildlife sanctuary 2026",
  ],
  openGraph: {
    title: "Pench in 3 Days: The Real Jungle Book Tiger Reserve & Safari Guide (2026)",
    description:
      "Complete Pench National Park safari guide for 2026 — zones, jeep booking, Jungle Book connection, tiger and wild dog sightings, where to stay near Pench and how to reach.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516426122078-a8e4ee10e986?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Tiger in Pench National Park jungle",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Pench", "India", "Travel", "Madhya Pradesh", "Safari", "Wildlife", "Jungle Book"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pench in 3 Days: The Real Jungle Book Tiger Reserve & Safari Guide (2026)",
    description:
      "Complete Pench National Park safari guide — tiger sightings, zones, Jungle Book connection, best lodges.",
    images: ["https://images.unsplash.com/photo-1516426122078-a8e4ee10e986?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/pench-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/pench-3-days#article",
      "headline": "Pench in 3 Days: The Real Jungle Book Tiger Reserve & Safari Guide (2026)",
      "description":
        "Complete Pench National Park safari guide for 2026 — zones, jeep booking, Jungle Book connection, tiger and wild dog sightings, where to stay near Pench and how to reach.",
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
        "@id": "https://www.incredibleitinerary.com/blog/pench-3-days",
      },
      "keywords":
        "pench national park safari, pench tiger reserve guide, pench madhya pradesh itinerary, jungle book pench, pench wildlife sanctuary 2026",
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
          "name": "Pench in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/pench-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Pench National Park, Madhya Pradesh, India",
      "description":
        "The Jungle Book tiger reserve straddling Madhya Pradesh and Maharashtra, with 80+ tigers, stable dhole populations, and the strongest Kipling connection of any Indian wildlife reserve.",
      "url": "https://www.incredibleitinerary.com/blog/pench-3-days",
      "touristType": ["Wildlife Tourism", "Adventure Tourism", "Nature Tourism", "Safari Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does Pench compare to Kanha and Bandhavgarh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All three are MP tiger reserves. Bandhavgarh: highest tiger density, smaller area. Kanha: largest meadows, barasingha. Pench: most accessible from Nagpur, best wild dog sightings, strongest Jungle Book connection. For a first MP wildlife trip, the order is usually Bandhavgarh → Kanha → Pench.",
      },
    },
    {
      "@type": "Question",
      "name": "How to reach Pench National Park?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nearest airport/railway: Nagpur (75 km, 2 hrs). Transfer by private cab (₹2000–2500) or shared taxi. Pench has two entry gates: Turia (MP) and Navegaon (Maharashtra). Turia has more accommodation options.",
      },
    },
    {
      "@type": "Question",
      "name": "Is there a real Mowgli village near Pench?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seoni village (the town in Kipling's book) is near Pench. While there's no 'official' Mowgli village, the Seoni forest was Kipling's named inspiration. Some lodges offer cultural visits to surrounding Gond tribal villages whose oral traditions may have inspired the wolf-pack narrative.",
      },
    },
    {
      "@type": "Question",
      "name": "What other wildlife can I see besides tigers in Pench?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gaur (Indian bison — massive), sambar deer, spotted deer, nilgai, wild boar, sloth bear, Indian wolf, dhole (wild dogs), leopard, Indian python, monitor lizard, and 325+ bird species. The diverse birdlife makes Pench exceptional even on tiger-free safaris.",
      },
    },
    {
      "@type": "Question",
      "name": "When should I book Pench safari?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Book at mpecotourism.in 60 days ahead for peak season (Nov–Feb). October and March–April are easier to book. Turia Zone is most competitive — book Karmajhiri as backup.",
      },
    },
  ],
};

export default function PenchBlogPage() {
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
      <PenchClient />
    </>
  );
}
