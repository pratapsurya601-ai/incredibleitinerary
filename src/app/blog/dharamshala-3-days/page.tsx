import type { Metadata } from "next";
import DharamshalaClient from "./DharamshalaClient";

export const metadata: Metadata = {
  title: "Dharamshala & McLeodGanj in 3 Days: Budget to Spiritual Retreat Guide (2026)",
  description:
    "3 complete Dharamshala plans — Budget, Comfortable, Spiritual — with real costs, Triund trek tips, Tibetan food spots, and monastery timings. The only guide that doesn't oversell it.",
  keywords: [
    "dharamshala itinerary 3 days",
    "mcleodganj travel guide 2026",
    "dharamshala budget travel",
    "triund trek guide",
    "mcleodganj monasteries",
    "dharamshala trip planner",
    "dalai lama temple mcleodganj",
    "dharamkot cafes",
  ],
  openGraph: {
    title: "Dharamshala & McLeodGanj in 3 Days: Complete Guide 2026",
    description:
      "Real costs, honest trek reviews, Tibetan food spots. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "McLeodGanj valley with Himalayan mountains and monastery rooftops",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Dharamshala", "McLeodGanj", "India", "Travel", "Himalayas", "Trekking"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dharamshala & McLeodGanj in 3 Days (2026)",
    description: "3 plans, real costs, honest Triund review, Tibetan food spots.",
    images: ["https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/dharamshala-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Article schema
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/dharamshala-3-days#article",
      "headline": "Dharamshala & McLeodGanj in 3 Days: Budget to Spiritual Retreat Guide (2026)",
      "description": "3 complete Dharamshala plans — Budget, Comfortable, Spiritual — with real costs, Triund trek tips, Tibetan food spots, and monastery timings.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-04T00:00:00Z",
      "dateModified": "2026-04-04T00:00:00Z",
      "author": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://incredibleitinerary.com",
      },
      "publisher": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://incredibleitinerary.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://incredibleitinerary.com/logo.png",
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://incredibleitinerary.com/blog/dharamshala-3-days",
      },
      "keywords": "dharamshala itinerary, mcleodganj 3 days, triund trek, dalai lama temple, dharamkot, tibetan food",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4800,
    },

    // BreadcrumbList
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dharamshala & McLeodGanj in 3 Days",
          "item": "https://incredibleitinerary.com/blog/dharamshala-3-days",
        },
      ],
    },

    // FAQPage
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best time to visit Dharamshala and McLeodGanj?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "March to June and September to November are the best months. March-April has clear skies and snow-capped peaks. May-June is pleasant but crowded. July-August monsoon brings heavy rain, landslides, and road closures — avoid completely. September-November has clear post-monsoon air and fewer tourists.",
          },
        },
        {
          "@type": "Question",
          "name": "How difficult is the Triund Trek?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Triund is a moderate 9km trek from McLeodGanj (6km from Galu Devi temple). It takes 4-5 hours up and 2.5-3 hours down. The first 4km are easy forest trail, the last 2km are steep rocky switchbacks. Anyone with basic fitness can do it. Carry at least 2 litres of water and start before 8am to avoid afternoon heat.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Dharamshala trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget solo traveller: under ₹8,000 for 3 days including hostel accommodation. Comfortable mid-range: ₹8,000-₹18,000 per person. Spiritual retreat style with yoga and meditation courses: ₹12,000-₹25,000. All prices include accommodation, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Dharamshala from Delhi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "By air: Gaggal Airport (DHM) is 15km from Dharamshala with daily flights from Delhi (1.5hrs). By bus: HRTC Volvo overnight from Delhi ISBT (12hrs, ₹1,200-₹1,800). By train: Nearest station is Pathankot (90km away), then 3hr bus to Dharamshala. Best option for most: overnight Volvo bus, arrive by 6am.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the difference between Dharamshala and McLeodGanj?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dharamshala is the main town at 1,457m elevation — it's a regular Himachali town with the cricket stadium and government offices. McLeodGanj is 9km uphill at 1,770m — this is where the Dalai Lama lives, where all the Tibetan culture is, and where 95% of tourists stay. When people say 'Dharamshala trip' they usually mean McLeodGanj.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Dharamshala safe for solo female travellers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "McLeodGanj is one of the safest places in India for solo female travellers. The area has a large international community, well-lit main streets, and a strong police presence. Dharamkot village nearby is especially popular with solo women travellers. Standard precautions apply for late-night walks on isolated mountain roads.",
          },
        },
      ],
    },

    // TouristDestination
    {
      "@type": "TouristDestination",
      "name": "Dharamshala & McLeodGanj, Himachal Pradesh, India",
      "description": "Hill station in the Kangra Valley known as the residence of the Dalai Lama, Tibetan Buddhist monasteries, Himalayan treks, and a thriving cafe culture blending Indian and Tibetan influences.",
      "url": "https://incredibleitinerary.com/blog/dharamshala-3-days",
      "touristType": ["Cultural Tourism", "Spiritual Tourism", "Adventure Tourism", "Trekking"],
    },
  ],
};

export default function DharamshalaPage() {
  return (
    <>
      {/* Inject JSON-LD into page head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DharamshalaClient />
    </>
  );
}
