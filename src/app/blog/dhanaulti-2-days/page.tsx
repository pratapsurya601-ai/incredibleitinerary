import type { Metadata } from "next";
import DhanaultiClient from "./DhanaultiClient";

export const metadata: Metadata = {
  title: "Dhanaulti in 2 Days: Uttarakhand's Best Eco Retreat & Cedar Forest (2026)",
  description:
    "2-day Dhanaulti travel guide — Eco Park deodar cedar forest, Surkanda Devi Temple trek, snow in winter, Mussoorie day trip, apple orchards and best cottages for 2026.",
  keywords: [
    "dhanaulti travel guide",
    "dhanaulti eco park",
    "dhanaulti uttarakhand itinerary",
    "surkanda devi temple trek",
    "dhanaulti mussoorie 2026",
  ],
  openGraph: {
    title: "Dhanaulti in 2 Days: Uttarakhand's Best Eco Retreat & Cedar Forest (2026)",
    description:
      "2-day Dhanaulti travel guide — Eco Park deodar cedar forest, Surkanda Devi Temple trek, snow in winter, Mussoorie day trip, apple orchards and best cottages for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Deodar cedar forest in Uttarakhand",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Dhanaulti", "India", "Travel", "Uttarakhand", "Eco Park", "Cedar Forest"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanaulti in 2 Days: Uttarakhand's Best Eco Retreat & Cedar Forest (2026)",
    description:
      "2-day Dhanaulti travel guide — Eco Park cedar forest, Surkanda Devi trek, snow, Mussoorie day trip.",
    images: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/dhanaulti-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/dhanaulti-2-days#article",
      "headline": "Dhanaulti in 2 Days: Uttarakhand's Best Eco Retreat & Cedar Forest (2026)",
      "description":
        "2-day Dhanaulti travel guide — Eco Park deodar cedar forest, Surkanda Devi Temple trek, snow in winter, Mussoorie day trip, apple orchards and best cottages for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/dhanaulti-2-days",
      },
      "keywords":
        "dhanaulti travel guide, dhanaulti eco park, dhanaulti uttarakhand itinerary, surkanda devi temple trek, dhanaulti mussoorie 2026",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 3800,
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
          "name": "Dhanaulti in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/dhanaulti-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Dhanaulti, Uttarakhand, India",
      "description":
        "A quiet hill station in Uttarakhand at 2,286m, famous for its deodar cedar Eco Park, Surkanda Devi Temple trek, winter snow, and proximity to Mussoorie.",
      "url": "https://www.incredibleitinerary.com/blog/dhanaulti-2-days",
      "touristType": ["Nature Tourism", "Adventure Tourism", "Family Tourism", "Winter Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I see snow in Dhanaulti?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — December to February regularly brings 1–3 feet of snow, covering the eco park and cottages. The nearest guaranteed snow-road experience to Delhi (only 9 hrs). March can have residual snow.",
      },
    },
    {
      "@type": "Question",
      "name": "How to reach Dhanaulti from Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Train from Delhi to Dehradun (overnight, 5.5 hrs) then taxi (₹1200–1500, 2.5 hrs) or shared taxi (₹200, 3 hrs) to Dhanaulti. Alternatively: Delhi → Mussoorie (taxi) → Dhanaulti (25 km, 1 hr). Total: 9–10 hours from Delhi.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Dhanaulti good for families with children?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Excellent — the Eco Park has play equipment, safe paved trails, and the forest is child-friendly. Snow in winter is an added attraction. No nightlife (not a concern for families). Most resorts have campfire facilities.",
      },
    },
    {
      "@type": "Question",
      "name": "What are the two Eco Park sections?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eco Park has two separate sections (₹25 entry each): Section 1 has the denser cedar forest with more walking trails. Section 2 has better Himalayan viewpoints. Both are worth visiting — buy a combined ticket.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I combine Dhanaulti with Mussoorie or Rishikesh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dhanaulti is 25 km from Mussoorie (1 hr) and 60 km from Rishikesh (2.5 hrs). A 3-night circuit: Delhi → Dhanaulti (night 1) → Mussoorie (night 2) → Rishikesh (night 3) → Delhi is very doable. The scenery changes dramatically between all three.",
      },
    },
  ],
};

export default function DhanaultiBlogPage() {
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
      <DhanaultiClient />
    </>
  );
}
