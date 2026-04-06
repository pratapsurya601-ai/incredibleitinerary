import type { Metadata } from "next";
import MuscatClient from "./MuscatClient";

export const metadata: Metadata = {
  title: "Muscat 3-Day Itinerary 2026: Trip Planner",
  description:
    "2 complete Muscat plans — Budget, Comfortable — with real timings, costs in OMR/USD, Sultan Qaboos Mosque tips and the mistakes every first-timer makes.",
  keywords: [
    "muscat itinerary 3 days",
    "muscat travel guide 2026",
    "oman travel guide",
    "sultan qaboos mosque",
    "muscat budget travel",
    "mutrah souq",
    "wadi shab oman",
    "muscat trip planner",
  ],
  openGraph: {
    title: "Muscat 3-Day Itinerary 2026: Trip Planner",
    description: "Real timings, actual budgets in OMR/USD. 2 complete plans for the anti-Dubai Middle East experience.",
    images: [{ url: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=1200&q=80", width: 1200, height: 630, alt: "Muscat Oman mosque with mountains" }],
    type: "article", publishedTime: "2026-04-04T00:00:00Z", authors: ["IncredibleItinerary"],
    tags: ["Muscat", "Oman", "Travel", "Itinerary", "Middle East"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muscat 3-Day Itinerary 2026: Trip Planner",
    description: "2 plans, real timings, actual costs, wadi adventure tips.",
    images: ["https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/muscat-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/muscat-3-days#article",
      "headline": "Muscat in 3 Days: Complete Itinerary Guide (Budget to Comfortable, 2026)",
      "description": "2 complete Muscat plans with real timings, costs in OMR/USD, wadi tips and the mistakes every first-timer makes.",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=1200&q=80", "width": 1200, "height": 630 },
      "datePublished": "2026-04-04T00:00:00Z", "dateModified": "2026-04-04T00:00:00Z",
      "author": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com" },
      "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com", "logo": { "@type": "ImageObject", "url": "https://www.incredibleitinerary.com/logo.png" } },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.incredibleitinerary.com/blog/muscat-3-days" },
      "keywords": "muscat itinerary, muscat 3 days, oman travel, sultan qaboos mosque, mutrah souq, wadi shab",
      "articleSection": "Travel Guides", "inLanguage": "en", "wordCount": 4000,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Muscat in 3 Days", "item": "https://www.incredibleitinerary.com/blog/muscat-3-days" },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Muscat, Oman",
      "description": "Oman's capital city, known for the Sultan Qaboos Grand Mosque, dramatic mountain-backed coastline, traditional souqs, and an authentic Arabian hospitality that contrasts with Dubai's commercialism.",
      "url": "https://www.incredibleitinerary.com/blog/muscat-3-days",
      "touristType": ["Cultural Tourism", "Adventure Tourism", "Nature Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
        { "@type": "Question", "name": "How many days are enough for Muscat?", "acceptedAnswer": { "@type": "Answer", "text": "3 days covers the city, a wadi day trip, and the coastline perfectly. 5 days lets you add Nizwa, Jebel Akhdar, and the Wahiba Sands desert." } },
        { "@type": "Question", "name": "How much does a 3-day Muscat trip cost?", "acceptedAnswer": { "@type": "Answer", "text": "Budget: OMR 20-40/day ($52-104 USD). Comfortable: OMR 40-80/day ($104-208 USD). Oman is more affordable than Dubai for most travellers." } },
        { "@type": "Question", "name": "Do I need a visa for Oman?", "acceptedAnswer": { "@type": "Answer", "text": "Indian passport holders need an Oman e-visa (apply online, OMR 20/$52, 1-3 days processing). US, UK, EU citizens can get visa-on-arrival (OMR 20, 30 days). A UAE visa does NOT cover Oman." } },
        { "@type": "Question", "name": "Is Oman safe?", "acceptedAnswer": { "@type": "Answer", "text": "Extremely safe. Oman consistently ranks as one of the safest countries in the world. Solo female travellers report feeling very comfortable. The culture of hospitality is genuine." } },
        { "@type": "Question", "name": "What is the best time to visit Muscat?", "acceptedAnswer": { "@type": "Answer", "text": "October to March for comfortable weather (22-30C). November and February are ideal. April-September is extremely hot (40C+). Ramadan dates vary but offer a unique cultural experience." } },
      ],
};

export default function MuscatBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <MuscatClient />
    </>
  );
}
