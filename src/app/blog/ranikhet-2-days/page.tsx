import type { Metadata } from "next";
import RanikhetClient from "./RanikhetClient";

export const metadata: Metadata = {
  title: "Ranikhet in 2 Days: Uttarakhand's Quietest Colonial Hill Station (2026)",
  description:
    "2-day Ranikhet travel guide — Chaubatia apple orchards, the Kumaon Regiment golf course, Binsar Mahadev temple, Uttarakhand hill station with Himalayan views and best hotels for 2026.",
  keywords: [
    "ranikhet travel guide",
    "ranikhet uttarakhand itinerary",
    "ranikhet hill station 2 days",
    "chaubatia orchards ranikhet",
    "ranikhet kumaon 2026",
  ],
  openGraph: {
    title: "Ranikhet in 2 Days: Uttarakhand's Quietest Colonial Hill Station (2026)",
    description:
      "2-day Ranikhet travel guide — Chaubatia apple orchards, the Kumaon Regiment golf course, Binsar Mahadev temple, Uttarakhand hill station with Himalayan views and best hotels for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Himalayan mountain landscape Ranikhet Uttarakhand",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Ranikhet", "India", "Travel", "Uttarakhand", "Kumaon", "Hill Station"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranikhet in 2 Days: Uttarakhand's Quietest Colonial Hill Station (2026)",
    description: "2-day Ranikhet guide: Chaubatia orchards, golf course views, Binsar Mahadev and Himalayan panoramas.",
    images: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/ranikhet-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/ranikhet-2-days#article",
      "headline": "Ranikhet in 2 Days: Uttarakhand's Quietest Colonial Hill Station (2026)",
      "description":
        "2-day Ranikhet travel guide — Chaubatia apple orchards, the Kumaon Regiment golf course, Binsar Mahadev temple, Uttarakhand hill station with Himalayan views and best hotels for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/ranikhet-2-days",
      },
      "keywords": "ranikhet travel guide, ranikhet uttarakhand itinerary, ranikhet hill station 2 days, chaubatia orchards ranikhet, ranikhet kumaon 2026",
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
          "name": "Ranikhet in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/ranikhet-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Ranikhet, Uttarakhand, India",
      "description":
        "An active Army cantonment hill station at 1,829m with Chaubatia orchards, a scenic golf course, and views of Nanda Devi — one of Kumaon's most peaceful destinations.",
      "url": "https://www.incredibleitinerary.com/blog/ranikhet-2-days",
      "touristType": ["Nature Tourism", "Heritage Tourism", "Leisure Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Ranikhet better than Mussoorie or Shimla?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ranikhet has far fewer tourists, better Himalayan views (Nanda Devi visible on clear days), and a genuinely quiet atmosphere due to the Army cantonment. It's not better for shopping, restaurants, or nightlife — it's better for peace. Choose Ranikhet if you want to actually rest; choose Mussoorie if you want entertainment.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the story behind the name Ranikhet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "'Ranikhet' means 'Queen's Meadow' in Hindi. Legend says Queen Padmini of a local raja was enchanted by the meadow here, and the king built a palace for her. The British established it as an Army cantonment in 1869, which is why it retains its colonial character intact.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I do Ranikhet in 1 day from Kathgodam or Nainital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's possible as a day trip (Kathgodam is 75 km, Nainital 53 km) but not recommended. The drive takes 2.5 hrs each way, leaving you only 4–5 hours. Ranikhet rewards a slow overnight stay — the morning light on Nanda Devi from Chaubatia is the main attraction.",
      },
    },
    {
      "@type": "Question",
      "name": "Is there trekking from Ranikhet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Ranikhet–Doonagiri trek (15 km one way) passes through oak forests to a 2,650m summit with Trishul peak views. It's a 2-day moderate trek. Shorter walks: Binsar Mahadev forest trail (5 km), and the Chaubatia circuit (6 km through orchards).",
      },
    },
    {
      "@type": "Question",
      "name": "Best time to visit Ranikhet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "March–June (flowers, 12–22°C) and September–November (clear skies, 8–20°C). Avoid December–February unless you want snow (roads can close). Monsoon (July–August) is green but very rainy. Apple season (June–October) adds the Chaubatia orchard experience.",
      },
    },
  ],
};

export default function RanikhetBlogPage() {
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
      <RanikhetClient />
    </>
  );
}
