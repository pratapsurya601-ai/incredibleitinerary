import type { Metadata } from "next";
import HoneymoonBudgetClient from "./HoneymoonBudgetClient";

export const metadata: Metadata = {
  title: "Best Honeymoon Destinations Under ₹50,000 in India (2026) | Complete Guide",
  description:
    "8 stunning honeymoon destinations in India under ₹50,000 per couple — Pondicherry, Coorg, Mussoorie, Pushkar, Hampi, Kasol, Shillong & Alleppey. Real costs, romantic stays and day-by-day plans.",
  keywords: [
    "best honeymoon destinations under 50000 India",
    "budget honeymoon India 2026",
    "honeymoon under 50000 rupees",
    "cheap honeymoon places India",
    "romantic getaway budget India",
    "honeymoon destinations India couple",
    "budget honeymoon trip India",
    "affordable honeymoon India",
  ],
  openGraph: {
    title: "Best Honeymoon Destinations Under ₹50,000 in India (2026)",
    description:
      "8 romantic destinations for Indian couples on a budget — real costs, where to stay, what to eat and how to make ₹50,000 feel like a luxury honeymoon.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Budget honeymoon couple India romantic destination",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["Surya Pratap"],
    tags: ["Honeymoon", "Couple", "Budget", "India", "Under 50000", "Romantic"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Honeymoon Destinations Under ₹50,000 in India (2026)",
    description: "8 destinations, real costs, romantic stays — full guide for Indian couples.",
    images: ["https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/honeymoon-under-50000",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/honeymoon-under-50000#article",
      "headline": "Best Honeymoon Destinations Under ₹50,000 in India (2026) | Complete Guide",
      "description":
        "8 stunning honeymoon destinations in India under ₹50,000 per couple — with real costs, romantic stays, and day-by-day plans for every budget.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/honeymoon-under-50000",
      },
      "keywords":
        "best honeymoon destinations under 50000 India, budget honeymoon India, honeymoon under 50000 rupees, cheap honeymoon places India",
      "articleSection": "Honeymoon & Couples",
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
          "name": "Honeymoon Under ₹50,000",
          "item": "https://www.incredibleitinerary.com/blog/honeymoon-under-50000",
        },
      ],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you have a good honeymoon in India under ₹50,000?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — absolutely. India has dozens of destinations where ₹50,000 per couple covers 3–5 nights in a romantic homestay or boutique hotel, all meals, local transport and activities. The key is choosing the right destination, travelling in off-season and booking direct instead of through expensive tour operators.",
      },
    },
    {
      "@type": "Question",
      "name": "Which is the cheapest honeymoon destination in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pushkar (Rajasthan) is the cheapest romantic destination at ₹12,000–₹22,000 for 3 nights per couple including stay, food and activities. Kasol in Himachal Pradesh and Hampi in Karnataka are close seconds at ₹14,000–₹25,000 for 3–4 nights.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time for a budget honeymoon in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "March–June and September–October are the best months for a budget honeymoon. You avoid the December–February peak season when hotel prices double or triple. Hill stations like Mussoorie and Kasol are best in May–June. Southern destinations like Pondicherry and Alleppey are ideal in September–November.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I book budget-friendly romantic stays in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Book directly with homestays instead of through OTAs — you save 20–30% and often get better rooms. Use MakeMyTrip or Goibibo for flash deals (check Wednesday–Thursday for lowest prices). Search for 'couple-friendly' homestays on Airbnb for private rooms with character. Off-season deals on 3-star hotels can be 40–60% cheaper than peak rates.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Alleppey houseboat affordable for a budget honeymoon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A full-day Alleppey houseboat costs ₹6,000–₹10,000 per couple — this is for a shared or economy houseboat. An overnight private houseboat costs ₹8,000–₹14,000. As part of a 4-night Cochin–Alleppey trip, the total budget for two comes to ₹28,000–₹42,000 including flights from major cities, stay, food and the houseboat experience.",
      },
    },
  ],
};

export default function HoneymoonBudgetPage() {
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
      <HoneymoonBudgetClient />
    </>
  );
}
