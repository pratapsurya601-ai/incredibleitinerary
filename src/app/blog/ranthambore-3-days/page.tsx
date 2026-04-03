import type { Metadata } from "next";
import RanthamboreClient from "./RanthamboreClient";

export const metadata: Metadata = {
  title: "Ranthambore in 3 Days: Tiger Safari Guide (Budget to Luxury, 2026)",
  description:
    "3 complete Ranthambore plans — Budget, Safari, Luxury Lodge — with zone tips, safari booking strategy, fort visit, and real costs for 2026.",
  keywords: [
    "ranthambore itinerary 3 days",
    "ranthambore tiger safari 2026",
    "ranthambore budget travel",
    "ranthambore fort UNESCO",
    "ranthambore national park zones",
    "sawai madhopur travel guide",
    "ranthambore safari booking",
    "rajasthan wildlife trip",
  ],
  openGraph: {
    title: "Ranthambore in 3 Days: Tiger Safari Guide 2026",
    description:
      "Real safari zone tips, actual budgets, booking strategy. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1615824996195-f780bba7cfab?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Ranthambore Fort ruins with lake in Rajasthan",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Ranthambore", "India", "Tiger Safari", "Wildlife", "Rajasthan"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranthambore in 3 Days: Tiger Safari Guide (2026)",
    description: "3 plans, zone strategy, real costs, safari booking tips.",
    images: ["https://images.unsplash.com/photo-1615824996195-f780bba7cfab?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/ranthambore-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/ranthambore-3-days#article",
      "headline": "Ranthambore in 3 Days: Tiger Safari Guide (Budget to Luxury, 2026)",
      "description": "3 complete Ranthambore plans — Budget, Safari, Luxury Lodge — with zone tips, safari booking strategy, fort visit, and real costs for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1615824996195-f780bba7cfab?w=1200&q=80",
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
        "@id": "https://incredibleitinerary.com/blog/ranthambore-3-days",
      },
      "keywords": "ranthambore safari, ranthambore 3 days, tiger safari india, ranthambore fort, rajasthan wildlife",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4800,
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
          "name": "Ranthambore in 3 Days",
          "item": "https://incredibleitinerary.com/blog/ranthambore-3-days",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best time to visit Ranthambore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to June is when the park is open. October-November and February-March offer the best weather. April-June is hot but tiger sighting odds are highest because animals gather near waterholes. The park is closed July to September for monsoon.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I book a Ranthambore safari?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Book on the Rajasthan tourism portal exactly 120 days before your visit date. Zones 1-5 are premium zones with the highest tiger sighting odds. Morning safaris (6:30am) have better sighting rates than afternoon ones. Jeep safaris cost around ₹2,500 and canters cost ₹750 per person.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Ranthambore trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A budget traveller can do 3 days for under ₹8,000 using canter safaris and basic guesthouses. A safari-focused trip with jeep safaris runs ₹10,000-₹25,000. Luxury lodge stays with private jeeps and naturalists cost ₹25,000-₹60,000 per person.",
          },
        },
        {
          "@type": "Question",
          "name": "Which zone is best for tiger sighting in Ranthambore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zones 1-5 are premium zones with the highest tiger sighting probability. Zone 3 near Padam Talao and Zone 4 are considered the best. Zones 6-10 are buffer zones with lower sighting odds and are cheaper but less rewarding for first-time visitors.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Ranthambore Fort worth visiting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Ranthambore Fort is a UNESCO World Heritage Site dating to the 10th century, older than most European castles. It sits inside the national park with stunning views over the lakes and forest. Most safari-goers skip it because they focus only on tigers, but it deserves a separate half-day visit.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Ranthambore from Jaipur or Delhi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sawai Madhopur is the nearest railhead, well-connected to Jaipur (2.5 hours by train) and Delhi (5-6 hours). The fastest option from Jaipur is the Jan Shatabdi Express. From Delhi, take the Kota Jan Shatabdi or drive via NH48 (6-7 hours). The nearest airport is Jaipur (160km).",
          },
        },
      ],
    },

    {
      "@type": "TouristDestination",
      "name": "Ranthambore National Park, Rajasthan, India",
      "description": "One of India's most famous tiger reserves, home to the UNESCO-listed Ranthambore Fort and known for bold, vehicle-habituated Bengal tigers.",
      "url": "https://incredibleitinerary.com/blog/ranthambore-3-days",
      "touristType": ["Wildlife Tourism", "Cultural Tourism", "Nature Tourism"],
    },
  ],
};

export default function RanthamboreBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RanthamboreClient />
    </>
  );
}
