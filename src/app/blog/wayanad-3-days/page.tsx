import type { Metadata } from "next";
import WayanadClient from "./WayanadClient";

export const metadata: Metadata = {
  title: "Wayanad in 3 Days: Treehouses, Treks & Hidden Caves (Budget to Premium, 2026)",
  description:
    "3 complete Wayanad plans — Budget, Nature Explorer, Premium Treehouse — with trek timings, real costs, Google Maps routes and the spots most tourists miss.",
  keywords: [
    "wayanad itinerary 3 days",
    "wayanad travel guide 2026",
    "wayanad budget travel",
    "wayanad treehouse stay",
    "chembra peak heart shaped lake",
    "edakkal caves wayanad",
    "wayanad wildlife sanctuary",
    "wayanad trip planner",
  ],
  openGraph: {
    title: "Wayanad in 3 Days: Treehouses, Treks & Hidden Caves (2026)",
    description:
      "Real trek timings, actual budgets, Google Maps routes. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Wayanad green hills and tea plantations in misty morning light",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Wayanad", "Kerala", "India", "Travel", "Trekking", "Nature"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wayanad in 3 Days: The Only Guide You Need (2026)",
    description: "3 plans, real timings, actual costs, Google Maps routes.",
    images: ["https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/wayanad-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/wayanad-3-days#article",
      "headline": "Wayanad in 3 Days: Treehouses, Treks & Hidden Caves (Budget to Premium, 2026)",
      "description": "3 complete Wayanad plans — Budget, Nature Explorer, Premium Treehouse — with trek timings, real costs, Google Maps routes and the spots most tourists miss.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/wayanad-3-days",
      },
      "keywords": "wayanad itinerary, wayanad 3 days, wayanad treehouse, chembra peak, edakkal caves, wayanad wildlife sanctuary",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5200,
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
          "name": "Wayanad in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/wayanad-3-days",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days are enough for Wayanad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is ideal to cover the major attractions — Chembra Peak, Edakkal Caves, Banasura Sagar Dam, and a wildlife safari. 2 days works if you skip one trek. 4-5 days lets you add Meenmutty Falls, spice plantation visits, and a relaxed pace.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Wayanad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to May is the best time. October-December has the clearest skies and driest trails after monsoon. January-March is peak season with comfortable weather. April-May is warm but still good. June-September brings heavy monsoon rain — many treks close and leeches are everywhere.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Wayanad trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget traveller: under ₹6,000 including homestay accommodation. Nature explorer: ₹8,000-₹18,000 with mid-range resorts. Premium treehouse experience: ₹18,000-₹35,000 with luxury treehouse stays. All prices per person including accommodation, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Chembra Peak trek difficult?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The trek to the heart-shaped lake is moderate — about 3km one way with steep sections. It takes 2-3 hours round trip. The full summit trek (5km) is harder and requires a full day. Go October-December when the trail is dry. Monsoon season makes it dangerously slippery and it is officially closed June-September.",
          },
        },
        {
          "@type": "Question",
          "name": "Are treehouse stays in Wayanad worth the price?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Wayanad has some of the best treehouse accommodations in India. Properties like Vythiri Resort and Rainforest Treehouse offer stays 40-80 feet above ground with misty valley views. Budget ₹5,000-₹12,000 per night. Book 2-3 weeks ahead for weekends October-March.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Wayanad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nearest airport is Calicut (CCJ), 85km away — about 2.5 hours by road through the Thamarassery Ghat pass. Nearest railway station is Kozhikode. From Bangalore, it is a 6-hour drive via Mysore. From Kochi, about 5 hours. KSRTC buses run regularly from Kozhikode and Bangalore.",
          },
        },
      ],
    },

    {
      "@type": "TouristDestination",
      "name": "Wayanad, Kerala, India",
      "description": "A lush hill district in Kerala's Western Ghats known for ancient caves, misty treehouses, wildlife sanctuaries, and some of the best trekking trails in South India.",
      "url": "https://www.incredibleitinerary.com/blog/wayanad-3-days",
      "touristType": ["Nature Tourism", "Adventure Tourism", "Wildlife Tourism", "Eco Tourism"],
    },
  ],
};

export default function WayanadBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WayanadClient />
    </>
  );
}
