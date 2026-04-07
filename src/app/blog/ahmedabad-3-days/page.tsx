import type { Metadata } from "next";
import AhmedabadClient from "./AhmedabadClient";

export const metadata: Metadata = {
  title: "Ahmedabad in 3 Days: UNESCO Heritage City & Stepwells Guide (2026)",
  description:
    "3-day Ahmedabad itinerary — heritage city walk, Adalaj Vav stepwell, Sabarmati Ashram, Sidi Saiyyed mosque, Manek Chowk midnight food, best hotels and travel tips for 2026.",
  keywords: [
    "ahmedabad travel guide",
    "ahmedabad heritage walk",
    "adalaj vav stepwell",
    "sabarmati ashram gandhi",
    "ahmedabad itinerary 3 days",
    "ahmedabad food guide 2026",
  ],
  openGraph: {
    title: "Ahmedabad in 3 Days: UNESCO Heritage City & Stepwells Guide (2026)",
    description:
      "3-day Ahmedabad itinerary — heritage city walk, Adalaj Vav stepwell, Sabarmati Ashram, Sidi Saiyyed mosque, Manek Chowk midnight food, best hotels and travel tips for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1599420773867-462d2791bab0?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Ahmedabad UNESCO Heritage City — Pol houses and stepwells",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Ahmedabad", "India", "Travel", "Heritage", "Gujarat", "UNESCO"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmedabad in 3 Days: UNESCO Heritage City & Stepwells Guide (2026)",
    description: "3-day itinerary: Adalaj Vav, Sabarmati Ashram, Sidi Saiyyed, Manek Chowk night market.",
    images: ["https://images.unsplash.com/photo-1599420773867-462d2791bab0?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/ahmedabad-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/ahmedabad-3-days#article",
      "headline": "Ahmedabad in 3 Days: UNESCO Heritage City & Stepwells Guide (2026)",
      "description": "3-day Ahmedabad itinerary — heritage city walk, Adalaj Vav stepwell, Sabarmati Ashram, Sidi Saiyyed mosque, Manek Chowk midnight food, best hotels and travel tips for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1599420773867-462d2791bab0?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/ahmedabad-3-days",
      },
      "keywords": "ahmedabad travel guide, ahmedabad heritage walk, adalaj vav stepwell, sabarmati ashram gandhi, ahmedabad itinerary 3 days, ahmedabad food guide 2026",
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
          "name": "Ahmedabad",
          "item": "https://www.incredibleitinerary.com/blog/ahmedabad-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Ahmedabad, Gujarat, India",
      "description": "India's first UNESCO World Heritage City, home to 600-year-old Pol houses, Adalaj Vav stepwell, Sabarmati Ashram, and the legendary Manek Chowk night food market.",
      "url": "https://www.incredibleitinerary.com/blog/ahmedabad-3-days",
      "touristType": ["Heritage Tourism", "Cultural Tourism", "Food Tourism", "Religious Tourism"],
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
      "name": "Why is Ahmedabad a UNESCO Heritage City?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ahmedabad was the first Indian city to receive UNESCO World Heritage City status (2017) for its 600-year-old walled city with Pol houses — a unique urban community layout with chowks, temples, stepwells, and mosques all interconnected. The Pol system allowed communities to defend themselves and live together across religious lines.",
      },
    },
    {
      "@type": "Question",
      "name": "How many days do I need in Ahmedabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2 full days for the key sights. 3 days if you include Adalaj, Gandhinagar's Akshardham, and the textile museum. 4 days if combining with a day trip to Modhera Sun Temple (90 km).",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best food in Ahmedabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gujarati thali (at Vishalla or Agashiye), Manek Chowk night market (bhel puri, pav bhaji, cold coffee), fafda-jalebi breakfast, and handvo (savory rice cake). Ahmedabad is largely vegetarian — finding non-veg can be difficult.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Ahmedabad good in summer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Avoid May–June (40–45°C). October to February is ideal. March–April is warm but manageable. The Uttarayan kite festival (January 14) is one of India's greatest festivals — the entire city flies kites for 2 days.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I visit Rann of Kutch from Ahmedabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kutch (Bhuj) is 330 km from Ahmedabad (6 hrs by road or a direct train). Most visitors do it as a separate 2–3 day trip. The Rann Utsav festival (November–February) is the peak season.",
      },
    },
  ],
};

export default function AhmedabadBlogPage() {
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
      <AhmedabadClient />
    </>
  );
}
