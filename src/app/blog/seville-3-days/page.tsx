import type { Metadata } from "next";
import SevilleClient from "./SevilleClient";

export const metadata: Metadata = {
  title: "Seville in 3 Days: Complete Itinerary Guide (Budget to Comfortable, 2026)",
  description:
    "2 complete Seville plans — Budget, Comfortable — with real timings, costs in EUR/USD, Real Alcazar tips and the mistakes every first-timer makes.",
  keywords: [
    "seville itinerary 3 days",
    "seville travel guide 2026",
    "real alcazar tickets",
    "seville budget travel",
    "plaza de espana seville",
    "seville flamenco",
    "seville trip planner",
    "spain travel guide",
  ],
  openGraph: {
    title: "Seville in 3 Days: Budget to Comfortable Itinerary 2026",
    description: "Real timings, actual budgets in EUR/USD, Alcazar tips. 2 complete plans.",
    images: [{ url: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=1200&q=80", width: 1200, height: 630, alt: "Plaza de Espana Seville at sunset" }],
    type: "article", publishedTime: "2026-04-04T00:00:00Z", authors: ["IncredibleItinerary"],
    tags: ["Seville", "Spain", "Travel", "Itinerary", "Europe"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seville in 3 Days: The Only Guide You Need (2026)",
    description: "2 plans, real timings, actual costs, Alcazar booking tips.",
    images: ["https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/seville-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/seville-3-days#article",
      "headline": "Seville in 3 Days: Complete Itinerary Guide (Budget to Comfortable, 2026)",
      "description": "2 complete Seville plans with real timings, costs in EUR/USD, Real Alcazar tips.",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=1200&q=80", "width": 1200, "height": 630 },
      "datePublished": "2026-04-04T00:00:00Z", "dateModified": "2026-04-04T00:00:00Z",
      "author": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com" },
      "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com", "logo": { "@type": "ImageObject", "url": "https://www.incredibleitinerary.com/logo.png" } },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.incredibleitinerary.com/blog/seville-3-days" },
      "keywords": "seville itinerary, seville 3 days, real alcazar, plaza de espana, flamenco, seville cathedral",
      "articleSection": "Travel Guides", "inLanguage": "en", "wordCount": 4200,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Seville in 3 Days", "item": "https://www.incredibleitinerary.com/blog/seville-3-days" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How many days are enough for Seville?", "acceptedAnswer": { "@type": "Answer", "text": "3 days is perfect. Covers the Alcazar, Cathedral, Plaza de Espana, Triana, and a flamenco show. 2 days is rushed. 4+ lets you add Cordoba or Ronda day trips." } },
        { "@type": "Question", "name": "How much does a 3-day Seville trip cost?", "acceptedAnswer": { "@type": "Answer", "text": "Budget: EUR 40-70/day ($43-76 USD). Comfortable: EUR 80-150/day ($86-162 USD). Seville is one of the cheapest major cities in Western Europe." } },
        { "@type": "Question", "name": "Do I need a visa for Spain?", "acceptedAnswer": { "@type": "Answer", "text": "Indian passport holders need a Schengen visa (EUR 80, apply at BLS/VFS 3 months ahead). US, UK, AU, CA citizens visit visa-free for 90 days within 180 days." } },
        { "@type": "Question", "name": "What is the best time to visit Seville?", "acceptedAnswer": { "@type": "Answer", "text": "March-May (Semana Santa and Feria) and October-November. June-August is brutally hot (40-45C). December-February is mild and cheapest." } },
        { "@type": "Question", "name": "Should I book Real Alcazar tickets in advance?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Book at alcazarsevilla.org for the earliest slot. Walk-up queues can be 1-2 hours in spring. The upstairs Royal Apartments cost EUR 4.50 extra and are worth every cent." } },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Seville, Spain",
      "description": "The capital of Andalusia, known for the Real Alcazar, the Gothic Cathedral, flamenco in Triana, orange-tree-lined streets, and the most stunning plaza in Europe.",
      "url": "https://www.incredibleitinerary.com/blog/seville-3-days",
      "touristType": ["Cultural Tourism", "Culinary Tourism", "Heritage Tourism"],
    },
  ],
};

export default function SevilleBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SevilleClient />
    </>
  );
}
