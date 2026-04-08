import type { Metadata } from "next";
import SoutheastAsiaClient from "./SoutheastAsiaClient";

export const metadata: Metadata = {
  title: "Southeast Asia Travel Guide: Thailand, Bali, Vietnam, Singapore & More (2026)",
  description:
    "Complete SE Asia guide for Indians: 10 countries, visa info, daily budgets, best routes & mistakes to avoid.",
  keywords: [
    "southeast asia travel guide",
    "southeast asia from india",
    "thailand bali vietnam guide",
    "southeast asia budget travel",
    "southeast asia visa for indians",
    "best southeast asia itinerary",
    "southeast asia backpacking",
    "asia travel guide 2026",
  ],
  openGraph: {
    title: "Southeast Asia Travel Guide: Thailand, Bali, Vietnam, Singapore & More (2026)",
    description:
      "10 countries, 30+ city guides, visa info, daily budgets and multi-country routes for Indian travellers.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Bali rice terrace temple sunset Indonesia Southeast Asia",
      },
    ],
    type: "article",
    publishedTime: "2026-04-09T00:00:00Z",
    authors: ["Surya Pratap"],
    tags: ["Southeast Asia", "Thailand", "Bali", "Vietnam", "Singapore", "Travel Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Southeast Asia Travel Guide (2026): Thailand, Bali, Vietnam & More",
    description: "10 countries, visa info, budgets & routes for Indian travellers.",
    images: ["https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/southeast-asia-travel-guide",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/southeast-asia-travel-guide#article",
      "headline": "Southeast Asia Travel Guide: Thailand, Bali, Vietnam, Singapore & More (2026)",
      "description": "Complete Southeast Asia travel guide covering 10 countries with visa information, daily budgets, multi-country routes and common mistakes to avoid for Indian travellers.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-09T00:00:00Z",
      "dateModified": "2026-04-09T00:00:00Z",
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
        "@id": "https://www.incredibleitinerary.com/blog/southeast-asia-travel-guide",
      },
      "keywords": "southeast asia travel, thailand bali vietnam singapore, SE asia from india, budget travel asia",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5500,
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
          "name": "Southeast Asia Travel Guide",
          "item": "https://www.incredibleitinerary.com/blog/southeast-asia-travel-guide",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Southeast Asia",
      "description": "A diverse region spanning 10+ countries known for ancient temples, tropical beaches, vibrant street food, affordable travel and welcoming cultures — the most popular first international trip for Indian travellers.",
      "url": "https://www.incredibleitinerary.com/blog/southeast-asia-travel-guide",
      "touristType": ["Cultural Tourism", "Beach Tourism", "Adventure Tourism", "Budget Tourism"],
    },
  ],
};

// FAQPage schema — standalone, must NOT be inside @graph with Article
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best time to visit Southeast Asia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "November to February is the best overall window for most of Southeast Asia. Thailand, Vietnam, Cambodia and Myanmar are cool and dry. Bali is in wet season but still warm with lower prices. Singapore and Malaysia are year-round destinations. Avoid June-September for mainland SE Asia (monsoon) but this is actually dry season for Bali and Indonesia.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does a Southeast Asia trip cost from India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Budget travellers can do Southeast Asia for ₹1,500-3,000 per day in Vietnam, Cambodia and Nepal. Mid-range is ₹3,000-6,000/day in Thailand, Bali and Malaysia. Singapore is the most expensive at ₹5,000-12,000/day. Return flights from India range from ₹8,000-25,000 depending on destination and booking time. A 2-week trip across 2-3 countries typically costs ₹60,000-1,50,000 all-inclusive.",
      },
    },
    {
      "@type": "Question",
      "name": "Which Southeast Asian countries offer visa on arrival for Indians?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Thailand, Indonesia (Bali), Cambodia, Nepal and Myanmar offer visa on arrival for Indian passport holders. Vietnam and Sri Lanka require an e-visa applied online before travel. Malaysia offers eNTRI or e-visa. Singapore requires a traditional visa application. Philippines offers visa-free entry for 30 days.",
      },
    },
    {
      "@type": "Question",
      "name": "Which Southeast Asian country is best for first-time international travellers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Thailand is the best first international trip from India. Visa on arrival makes entry effortless, flights from Delhi and Mumbai are ₹8,000-15,000 return, vegetarian food is widely available, tourist infrastructure is excellent, and daily budgets start at ₹2,000. Bangkok alone offers temples, street food, nightlife and shopping in one city. Bali is a close second for its spiritual culture and natural beauty.",
      },
    },
    {
      "@type": "Question",
      "name": "How many days do you need for a Southeast Asia trip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minimum 5-7 days for a single country. 10-14 days is ideal for 2-3 countries (the classic Bangkok-Siem Reap-Ho Chi Minh route). 3 weeks lets you cover 4-5 countries comfortably. Do not try to cover more than 3 countries in 2 weeks — you will spend more time in airports than at temples. Internal flights between SE Asian cities are cheap (₹2,000-5,000) on AirAsia and VietJet.",
      },
    },
  ],
};

export default function SoutheastAsiaTravelGuidePage() {
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
      <SoutheastAsiaClient />
    </>
  );
}
