import type { Metadata } from "next";
import BandhavgarhClient from "./BandhavgarhClient";

export const metadata: Metadata = {
  title: "Bandhavgarh Tiger Reserve 3 Days: Core Zone Safari Guide (2026)",
  description:
    "Complete Bandhavgarh Tiger Reserve guide — Bandhavgarh core zone safari booking, highest tiger density in India, jeep safari tips, where to stay, how to reach for 2026.",
  keywords: [
    "bandhavgarh tiger reserve safari",
    "bandhavgarh itinerary",
    "bandhavgarh national park booking",
    "best tiger safari india",
    "bandhavgarh travel guide 2026",
    "bandhavgarh core zone",
    "bandhavgarh tiger reserve",
  ],
  openGraph: {
    title: "Bandhavgarh Tiger Reserve 3 Days: Core Zone Safari Guide (2026)",
    description:
      "Bandhavgarh Tiger Reserve guide — core zone safari booking, highest tiger density in India, jeep safari tips, where to stay, how to reach for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Bengal tiger in Bandhavgarh Tiger Reserve — highest tiger density in India",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Bandhavgarh", "Tiger Reserve", "Safari", "Madhya Pradesh", "Wildlife", "India"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bandhavgarh in 3 Days: India's Best Tiger Reserve Safari Guide (2026)",
    description: "Highest tiger density in India — zones, safari booking, Tala Village stays, and the 2,000-year-old fort inside the forest.",
    images: ["https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/bandhavgarh-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/bandhavgarh-3-days#article",
      "headline": "Bandhavgarh in 3 Days: India's Best Tiger Reserve Safari Guide (2026)",
      "description": "Complete Bandhavgarh tiger reserve guide — zones, safari booking, highest tiger density in India, jeep safari tips, where to stay, how to reach for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/bandhavgarh-3-days",
      },
      "keywords": "bandhavgarh tiger reserve safari, bandhavgarh itinerary, bandhavgarh national park booking, best tiger safari india, bandhavgarh travel guide 2026",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4400,
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
          "name": "Bandhavgarh",
          "item": "https://www.incredibleitinerary.com/blog/bandhavgarh-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Bandhavgarh National Park, Madhya Pradesh, India",
      "description": "India's tiger reserve with the highest tiger density — approximately 60–80 tigers in 716 km² core zone, home of the last wild white tiger ever captured, and a 2,000-year-old fort hidden inside the forest.",
      "url": "https://www.incredibleitinerary.com/blog/bandhavgarh-3-days",
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
      "name": "Does Bandhavgarh have the most tigers in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bandhavgarh has the highest tiger density (tigers per km²) in India — approximately 60–80 tigers in 716 km² core zone. This makes per-safari sighting rates the best in the country. Total tiger population including buffer: 150+.",
      },
    },
    {
      "@type": "Question",
      "name": "How to reach Bandhavgarh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nearest railway: Umaria (35 km) and Katni (100 km). Nearest airports: Jabalpur (200 km, 4 hrs) and Raipur (250 km). From Umaria, taxis to Tala gate (40 km, ₹700–900). Direct trains from Delhi, Mumbai, and Kolkata to Umaria.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the white tiger connection to Bandhavgarh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The last wild white tiger ever captured was from Bandhavgarh in 1951 — Mohan, who became the ancestor of all white tigers in captivity worldwide. Bandhavgarh Fort is where he was found. The reserve no longer has wild white tigers.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I stay inside Bandhavgarh reserve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — the MP Tourism's Bandhavgarh Jungle Camp is inside the buffer zone. However, most resorts are in Tala village outside the gate. Staying near the gate means earlier departures and less jeep travel to the safari entry.",
      },
    },
    {
      "@type": "Question",
      "name": "Best months for Bandhavgarh safari?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "October–November: lush greenery, fewer tourists. December–February: cold mornings, excellent photography light, tigers visible near water. March–June: hot (40°C+) but tigers at waterholes daily — surprisingly good sightings. Closed July 1 – October 14.",
      },
    },
  ],
};

export default function BandhavgarhBlogPage() {
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
      <BandhavgarhClient />
    </>
  );
}
