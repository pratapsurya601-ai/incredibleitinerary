import type { Metadata } from "next";
import MeenakshiClient from "./MeenakshiClient";

export const metadata: Metadata = {
  title: "Meenakshi Temple Madurai in 2 Days: South India's Greatest Temple (2026)",
  description:
    "2-day Meenakshi Temple Madurai guide — 14 gopurams, Hall of a Thousand Pillars, evening ceremony, Thirumalai Nayakkar Palace, Madurai street food and best hotels for 2026.",
  keywords: [
    "meenakshi temple madurai guide",
    "meenakshi amman temple itinerary",
    "madurai 2 days temple",
    "hall of thousand pillars madurai",
    "meenakshi temple timings 2026",
  ],
  openGraph: {
    title: "Meenakshi Temple Madurai in 2 Days: South India's Greatest Temple (2026)",
    description:
      "14 gopurams, Hall of a Thousand Pillars, the 9 PM bedchamber ceremony, and Madurai street food. 2 complete plans for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Meenakshi Amman Temple gopurams Madurai",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Madurai", "India", "Travel", "Temple", "Tamil Nadu", "South India"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meenakshi Temple Madurai in 2 Days: South India's Greatest Temple (2026)",
    description: "14 gopurams, Hall of 1000 Pillars, 9 PM ceremony, Madurai food. 2 plans.",
    images: ["https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/meenakshi-temple-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/meenakshi-temple-2-days#article",
      "headline": "Meenakshi Temple Madurai in 2 Days: South India's Greatest Temple (2026)",
      "description":
        "2-day Meenakshi Temple Madurai guide — 14 gopurams, Hall of a Thousand Pillars, evening ceremony, Thirumalai Nayakkar Palace, Madurai street food and best hotels for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/meenakshi-temple-2-days",
      },
      "keywords":
        "meenakshi temple madurai guide, meenakshi amman temple itinerary, madurai 2 days temple, hall of thousand pillars madurai, meenakshi temple timings 2026",
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
          "name": "Meenakshi Temple Madurai in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/meenakshi-temple-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Madurai, Tamil Nadu, India",
      "description":
        "Home to the Meenakshi Amman Temple — one of the greatest Dravidian temple complexes on earth, with 14 gopurams, 33,000 sculptures, and a daily bedchamber ceremony.",
      "url": "https://www.incredibleitinerary.com/blog/meenakshi-temple-2-days",
      "touristType": ["Religious Tourism", "Cultural Tourism", "Heritage Tourism", "Food Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can non-Hindus enter Meenakshi Temple?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non-Hindus can access the temple's outer corridors, all 4 entrances, the Potramarai tank area, the Hall of 1000 Pillars, and the temple museum. The innermost sanctuaries of Meenakshi and Sundareswarar are restricted to Hindus only. This still gives access to roughly 80% of the complex.",
      },
    },
    {
      "@type": "Question",
      "name": "What are the 14 gopurams of Meenakshi Temple?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gopurams are the ornate gateway towers covered in thousands of brightly painted sculptures. The 14 gopurams at Meenakshi range from 45m (southern gopuram, tallest) to smaller inner ones. They depict scenes from Hindu mythology. The colors are repainted every 12 years.",
      },
    },
    {
      "@type": "Question",
      "name": "How many sculptures does Meenakshi Temple have?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The temple complex has approximately 33,000 sculptures. The 985 pillars in the Hall of Pillars alone have over 4,500 individual sculptures. The entire complex took 2,000 years to build starting from the 6th century CE under successive Pandya and Nayak dynasties.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit Madurai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "October to March is most comfortable (25–32°C). The Chithirai Festival (April–May) is the biggest annual celebration — the celestial wedding of Meenakshi and Sundareswarar, with processions through all 4 madas. Avoid May–June (hottest, 38–42°C).",
      },
    },
    {
      "@type": "Question",
      "name": "How far is Madurai from Chennai and Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chennai: 460 km (7 hrs by road, 8.5 hrs by express train). Coimbatore: 210 km (4 hrs). Trichy: 135 km (3 hrs). Madurai has its own airport with direct flights from Chennai, Bangalore, Mumbai, Delhi, and Coimbatore.",
      },
    },
  ],
};

export default function MeenakshiBlogPage() {
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
      <MeenakshiClient />
    </>
  );
}
