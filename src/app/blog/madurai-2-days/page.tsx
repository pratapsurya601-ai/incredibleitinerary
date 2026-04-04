import type { Metadata } from "next";
import MaduraiClient from "./MaduraiClient";

export const metadata: Metadata = {
  title: "Madurai in 2 Days: Meenakshi Temple, Flower Market & South Indian Food Trail (2026)",
  description:
    "Complete Madurai guide — Meenakshi Amman Temple at dawn, Thirumalai Nayakkar Palace, Gandhi Museum, 4am flower market, Jigarthanda trail. 2 plans: Budget and Heritage with real costs.",
  keywords: [
    "madurai itinerary 2 days",
    "madurai travel guide 2026",
    "meenakshi amman temple madurai",
    "madurai flower market",
    "thirumalai nayakkar palace",
    "gandhi museum madurai",
    "madurai food trail jigarthanda",
    "madurai tamil nadu trip",
  ],
  openGraph: {
    title: "Madurai in 2 Days: Temples, Markets & Food Trail (2026)",
    description:
      "Meenakshi Temple at dawn, 4am flower market, Jigarthanda trail — 2 complete plans with real costs.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Meenakshi Amman Temple gopuram Madurai Tamil Nadu",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Madurai", "India", "Travel", "Itinerary", "Temple", "Tamil Nadu"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madurai in 2 Days: Complete Guide (2026)",
    description: "Meenakshi Temple, flower market, food trail — 2 plans, real costs.",
    images: ["https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/madurai-2-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/madurai-2-days#article",
      "headline": "Madurai in 2 Days: Meenakshi Temple, Flower Market & South Indian Food Trail (2026)",
      "description": "Complete Madurai guide — Meenakshi Amman Temple at dawn, Thirumalai Nayakkar Palace, Gandhi Museum, 4am flower market, Jigarthanda trail. 2 plans with real costs.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80",
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
        "@id": "https://incredibleitinerary.com/blog/madurai-2-days",
      },
      "keywords": "madurai itinerary, madurai 2 days, meenakshi temple, madurai food trail, jigarthanda, flower market madurai",
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
          "name": "Madurai in 2 Days",
          "item": "https://incredibleitinerary.com/blog/madurai-2-days",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days are enough for Madurai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2 days is ideal for Madurai. Day 1 covers Meenakshi Amman Temple, Thirumalai Nayakkar Palace, Gandhi Museum and the food trail. Day 2 covers the 4am flower market, banana market, Pudhu Mandapam and rooftop temple views. A single day trip misses too much — spend 2 nights.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Madurai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to March is the best time to visit Madurai. The weather is cooler (25-32°C) and temple festivals are frequent. April to June is extremely hot (38-42°C). The Chithirai Festival in April-May is spectacular but the heat is brutal. Monsoon (July-September) brings occasional rain but the city is lush and uncrowded.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 2-day Madurai trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget travellers can do 2 days in Madurai for under ₹4,000 including accommodation, food, transport and entry fees. A Heritage comfort plan costs ₹5,000-₹12,000 for two including heritage hotels, guided temple visits and a food walk. Madurai is one of the most affordable cities in South India.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Madurai flower market worth visiting at 4am?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely — the Madurai flower market (Mattuthavani) at 4am is one of the most extraordinary sensory experiences in Tamil Nadu. Mountains of jasmine, marigold and lotus are traded before dawn. By 7am the best stock is gone and the energy dies down. Go between 4-5:30am for the full experience.",
          },
        },
        {
          "@type": "Question",
          "name": "What food should I try in Madurai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jigarthanda (a cold drink unique to Madurai) at Famous Jigarthanda near Meenakshi Temple is the must-try. Other essentials: Madurai idli at Murugan Idli Shop, kothu parotta late at night, filter coffee anywhere, banana leaf meals at any local mess, and Madurai's famous non-veg biryani at Sree Sabarees or Kumar Mess.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I visit Meenakshi Temple during evening puja?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — the evening puja ceremony at Meenakshi Temple (around 9-9:30pm) is one of the most powerful rituals in South India. Lord Sundareswarar is carried in a palanquin to Meenakshi's chamber. The temple is open 5am-12:30pm and 4pm-9:30pm. Morning puja at 5am is equally special with fewer crowds.",
          },
        },
      ],
    },

    {
      "@type": "TouristDestination",
      "name": "Madurai, Tamil Nadu, India",
      "description": "One of the oldest continuously inhabited cities in the world, known for the magnificent Meenakshi Amman Temple, vibrant flower markets, and legendary South Indian food.",
      "url": "https://incredibleitinerary.com/blog/madurai-2-days",
      "touristType": ["Cultural Tourism", "Religious Tourism", "Food Tourism"],
    },
  ],
};

export default function MaduraiBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MaduraiClient />
    </>
  );
}
