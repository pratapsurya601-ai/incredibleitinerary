import type { Metadata } from "next";
import SpitiClient from "./SpitiClient";

export const metadata: Metadata = {
  title: "Spiti Valley 7-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Spiti Valley trip in 7 days. Complete Spiti Valley travel guide — Key Monastery, Chandratal Lake, Kaza, Pin Valley, Kunzum Pass. Manali to Spiti.",
  keywords: [
    "spiti valley itinerary 7 days",
    "spiti valley travel guide 2026",
    "key monastery spiti",
    "chandratal lake spiti",
    "kaza spiti valley",
    "manali to spiti road trip",
    "spiti valley permit",
    "kunzum pass spiti",
  ],
  openGraph: {
    title: "Spiti Valley 7 Days: Complete Road Trip Guide (2026)",
    description:
      "Key Monastery · Chandratal Lake · Kaza — the complete Spiti circuit with real costs.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1598977580666-2a2e33f1e1f6?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Spiti Valley Key Monastery Himachal Pradesh",
      },
    ],
    type: "article",
    publishedTime: "2026-03-21T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Spiti Valley", "India", "Travel", "Road Trip", "Himachal Pradesh"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spiti Valley 7 Days: Complete Road Trip Guide (2026)",
    description: "Key Monastery, Chandratal Lake, Kunzum Pass — real costs, permit guide.",
    images: ["https://images.unsplash.com/photo-1598977580666-2a2e33f1e1f6?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/spiti-valley-7-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/spiti-valley-7-days#article",
      "headline": "Spiti Valley in 7 Days: The Complete Road Trip Guide (2026)",
      "description":
        "Complete Spiti Valley travel guide with Key Monastery, Chandratal Lake, Kaza, Pin Valley and Kunzum Pass. Manali to Spiti circuit with real costs and permit guide.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1598977580666-2a2e33f1e1f6?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-03-21T00:00:00Z",
      "dateModified": "2026-03-21T00:00:00Z",
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
        "@id": "https://www.incredibleitinerary.com/blog/spiti-valley-7-days",
      },
      "keywords": "spiti valley, key monastery, chandratal lake, kaza, kunzum pass, manali to spiti",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 6200,
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
          "name": "Travel Guides",
          "item": "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Spiti Valley in 7 Days",
          "item": "https://www.incredibleitinerary.com/blog/spiti-valley-7-days",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When is Spiti Valley open?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "June to October only. The Manali-Spiti road (via Rohtang/Kunzum) opens late May-June and closes in October. The Shimla-Kinnaur-Spiti route is open slightly longer (May-November) and is safer in early/late season. The valley is completely snow-locked November-May.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Spiti Valley harder than Ladakh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — Spiti is more remote and roads are rougher than Ladakh. Kaza is at 3,800m. Chandratal is at 4,300m. Kunzum Pass is 4,551m. Medical facilities are extremely limited — carry altitude sickness medicine (Diamox) and a first aid kit. Mobile network is patchy — only BSNL works in most areas.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 7-day Spiti trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A budget traveller on shared transport and homestays can do 7 days for Rs.12,000-Rs.18,000. A mid-range trip with a rented car costs Rs.35,000-Rs.50,000 per person. A self-drive road trip in a rented SUV costs Rs.25,000-Rs.40,000 per person for a group of 4. Fuel, permits, and accommodation in Kaza are cheap but getting there is expensive.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need a permit for Spiti Valley?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Indian nationals do not need a permit for Spiti Valley. Foreign nationals need an Inner Line Permit (ILP) which can be obtained at the SDM office in Kaza or Reckong Peo. Carry 4-6 passport-size photos and photocopies of your passport and visa. The permit is free and takes 1-2 hours to process.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best route for Spiti — Manali or Shimla?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The ideal circuit is Shimla-Kinnaur-Kaza-Chandratal-Manali (or reverse). This way you acclimatise gradually via Shimla-Kinnaur, and the dramatic Kunzum Pass and Chandratal come at the end. Manali to Kaza direct is a brutal 12-14 hour drive over two 4,500m+ passes — not recommended on Day 1.",
          },
        },
        {
          "@type": "Question",
          "name": "What should I not miss in Spiti Valley?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The must-sees are: Key Monastery (1,000+ years old, dramatically perched on a hilltop), Chandratal Lake (the crescent-shaped high-altitude lake at 4,300m), Dhankar Monastery and its cliff-edge position, Tabo Monastery (the Ajanta of the Himalayas), and the fossil-rich village of Langza with its giant Buddha statue overlooking the valley.",
          },
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Spiti Valley, Himachal Pradesh, India",
      "description": "A remote high-altitude desert valley in the Himalayas, known for ancient Buddhist monasteries, dramatic mountain passes, and some of the most stunning landscapes in India.",
      "url": "https://www.incredibleitinerary.com/blog/spiti-valley-7-days",
      "touristType": ["Adventure Tourism", "Cultural Tourism", "Road Trip Tourism"],
    },
  ],
};

export default function SpitiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SpitiClient />
    </>
  );
}
