import type { Metadata } from "next";
import KasolClient from "./KasolClient";

export const metadata: Metadata = {
  title: "Kasol & Kheerganga 3-Day Itinerary 2026: Trip Planner",
  description:
    "3 complete Kasol plans — Budget, Backpacker, Comfortable — with Kheerganga trek details, real costs, Tosh & Chalal walks, and the cafes worth finding.",
  keywords: [
    "kasol itinerary 3 days",
    "kheerganga trek guide 2026",
    "kasol travel guide",
    "parvati valley backpacking",
    "kasol budget trip",
    "tosh village himachal",
    "manikaran sahib gurudwara",
    "kasol trip planner",
    "chalal village kasol",
    "malana village",
  ],
  openGraph: {
    title: "Kasol & Kheerganga 3-Day Itinerary 2026: Trip Planner",
    description:
      "Real trek timings, actual budgets, cafe recommendations. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Parvati Valley mountains and river in Kasol Himachal Pradesh",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Kasol", "Kheerganga", "Himachal Pradesh", "India", "Trekking", "Parvati Valley"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kasol & Kheerganga 3-Day Itinerary 2026: Trip Planner",
    description: "3 plans, real trek timings, actual costs, Parvati Valley cafes.",
    images: ["https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/kasol-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/kasol-3-days#article",
      "headline": "Kasol & Kheerganga in 3 Days: Complete Parvati Valley Guide (Budget to Comfortable, 2026)",
      "description": "3 complete Kasol plans — Budget, Backpacker, Comfortable — with Kheerganga trek details, real costs, Tosh & Chalal walks, and the cafes worth finding.",
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
        "@id": "https://www.incredibleitinerary.com/blog/kasol-3-days",
      },
      "keywords": "kasol itinerary, kheerganga trek, parvati valley, tosh village, kasol travel guide",
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
          "name": "Kasol & Kheerganga in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/kasol-3-days",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How difficult is the Kheerganga trek?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kheerganga is a moderate trek — 12km one way with about 1,500m elevation gain. Anyone with basic fitness can do it. The trail from Barshaini takes 5–7 hours up and 3–4 hours down. The first half is easy forest walking, the second half gets steep. Carry at least 2 litres of water and start by 7am.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Kasol?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "March to June and September to November are best. March–April brings wildflowers and snowmelt rivers. May–June is peak season with warm days and cool nights. July–August monsoon brings landslides and trail closures. September–October has clear skies and fewer crowds. November is cold but stunning. December–February is freezing with snow above Kasol.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Kasol trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget solo: under ₹5,000 including hostel stays and basic food. Backpacker mid-range: ₹5,000–₹12,000 with guesthouse rooms and cafe meals. Comfortable: ₹10,000–₹20,000 with good hotels, restaurant dining and guided treks. All prices exclude transport to Kasol from Delhi.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Kasol safe for solo travellers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Kasol is one of the safest destinations in India for solo travellers including solo women. The backpacker community is welcoming, locals are friendly, and the village is small enough that everyone recognises faces quickly. Standard precautions apply — don't trek alone after dark, tell your guesthouse your plans, and keep your phone charged.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Kasol from Delhi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Overnight Volvo bus from Delhi ISBT to Bhuntar (10–12 hours, ₹800–₹1,500). From Bhuntar, local bus or taxi to Kasol (30km, 1 hour, ₹50 bus or ₹800–₹1,000 taxi). Alternatively, fly to Bhuntar airport (Kullu) and taxi to Kasol. No direct trains — nearest railway station is Joginder Nagar (150km away).",
          },
        },
        {
          "@type": "Question",
          "name": "Can I visit Malana from Kasol?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Malana is accessible as a day trip from Kasol but requires a 4km trek from the road. The village has strict rules — do not touch any walls, structures, or people. Photography restrictions apply. It is a culturally sensitive area so go with a local guide and respect all customs. The trek itself is easy, about 1.5 hours each way from the road head near Jari.",
          },
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Kasol, Parvati Valley, Himachal Pradesh",
      "description": "India's backpacker capital in the Parvati Valley, known for trekking, Israeli cafes, hot springs, and mountain village culture.",
      "url": "https://www.incredibleitinerary.com/blog/kasol-3-days",
      "touristType": ["Adventure Tourism", "Trekking", "Backpacking", "Cultural Tourism"],
    },
  ],
};

export default function KasolBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KasolClient />
    </>
  );
}
