import type { Metadata } from "next";
import CoimbatoreClient from "./CoimbatoreClient";

export const metadata: Metadata = {
  title: "Coimbatore 2 Days: Adiyogi, Isha Yoga & Filter Coffee (Complete Guide)",
  description:
    "Complete 2-day Coimbatore itinerary — Adiyogi statue and Dhyanalinga at Isha Yoga Center, Kovai Kutralam falls, textile markets, Tamil Nadu filter coffee culture. Budget from ₹1,500/day.",
  keywords: [
    "coimbatore 2 days itinerary",
    "isha yoga center coimbatore guide",
    "adiyogi statue coimbatore",
    "dhyanalinga temple isha",
    "coimbatore travel guide 2026",
    "kovai kutralam falls coimbatore",
    "coimbatore filter coffee culture",
    "coimbatore textile shopping",
    "siruvani dam coimbatore",
    "marudamalai temple coimbatore",
  ],
  openGraph: {
    title: "Coimbatore 2 Days: Adiyogi, Isha Yoga & Filter Coffee (Complete Guide)",
    description:
      "World's largest bust sculpture, Dhyanalinga meditation, Kovai falls, Tamil cotton textiles 40% cheaper. Real costs, Isha dress code, filter coffee guide.",
    images: [
      {
        url: "/images/blog/coimbatore-adiyogi-isha.jpg",
        width: 1200,
        height: 630,
        alt: "Adiyogi statue at Isha Yoga Center Coimbatore Tamil Nadu India",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["https://www.incredibleitinerary.com/about"],
    tags: ["Coimbatore", "Tamil Nadu", "India", "Isha Yoga", "Temples", "Culture"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coimbatore 2 Days: Adiyogi, Isha Yoga & Filter Coffee (Complete Guide)",
    description: "34m Adiyogi statue, Dhyanalinga meditation, Kovai falls, Tamil cotton markets. 2-day Coimbatore guide.",
    images: ["/images/blog/coimbatore-adiyogi-isha.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/coimbatore-2-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/coimbatore-2-days#article",
      "headline": "Coimbatore 2 Days: Adiyogi, Isha Yoga & Filter Coffee (Complete Guide)",
      "description": "Complete 2-day Coimbatore itinerary — Adiyogi statue, Dhyanalinga temple, Kovai Kutralam, textile shopping, filter coffee culture. Budget from ₹1,500/day.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/coimbatore-adiyogi-isha.jpg",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-07T00:00:00Z",
      "dateModified": "2026-04-07T00:00:00Z",
      "author": {
        "@type": "Person",
        "name": "Surya Pratap",
        "url": "https://www.incredibleitinerary.com/about",
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
        "@id": "https://www.incredibleitinerary.com/blog/coimbatore-2-days",
      },
      "keywords": "coimbatore travel guide, isha yoga center, adiyogi statue, dhyanalinga, coimbatore filter coffee, textile shopping coimbatore",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4200,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Coimbatore 2 Days", "item": "https://www.incredibleitinerary.com/blog/coimbatore-2-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Coimbatore, Tamil Nadu, India",
      "description": "Tamil Nadu's industrial capital at 416m on the Nilgiri foothills — home to Asia's largest yoga centre, the world's largest bust sculpture (Adiyogi), India's finest cotton textiles, and a serious filter coffee culture.",
      "url": "https://www.incredibleitinerary.com/blog/coimbatore-2-days",
      "touristType": ["Spiritual Tourism", "Cultural Tourism", "Shopping", "Nature Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Isha Yoga Center free to visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, entry to the Isha Yoga Center campus is free. The Dhyanalinga temple requires a minimum 5-minute silent meditation — photography is not permitted inside. Theerthakund (sacred tank) bathing is free but requires prior registration at the reception. Traditional Indian dress code is strictly enforced.",
      },
    },
    {
      "@type": "Question",
      "name": "How long does the Isha Yoga Center visit take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Isha Yoga Center needs 3–4 hours minimum to do justice. The Dhyanalinga temple meditation takes 20–30 minutes if you want the full experience. Add Theerthakund bathing (45 minutes), the Adiyogi statue walk, and the Isha restaurant thali — and 4 hours goes quickly. Do not rush it.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "November to February is the most comfortable time — temperatures are 18–28°C. March–April is warm but manageable. May–June sees temperatures reaching 38–40°C, which makes outdoor exploration uncomfortable. July–September brings moderate rainfall.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Coimbatore worth visiting or just a transit city?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Coimbatore is worth a dedicated 2-day stop. Most visitors use it as a transit to Ooty or Munnar without exploring the city itself — this is a mistake. The Isha Yoga Center alone justifies the stop. Combined with the textile markets and filter coffee culture, Coimbatore has a distinct character that most South India circuits miss entirely.",
      },
    },
    {
      "@type": "Question",
      "name": "What should I buy in Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cotton handloom textiles are 30–50% cheaper in Coimbatore than in other cities. The Suppan Chetty Street market has South Indian spices, filter coffee powder (buy estate-ground, not branded), pappadums, and dry goods. Coimbatore is also known for wet grinders and engineering goods, though these are impractical to carry.",
      },
    },
  ],
};

export default function CoimbatoreBlogPage() {
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
      <CoimbatoreClient />
    </>
  );
}
