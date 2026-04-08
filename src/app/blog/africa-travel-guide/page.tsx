import type { Metadata } from "next";
import AfricaGuideClient from "./AfricaGuideClient";

export const metadata: Metadata = {
  title: "Africa Travel Guide: Safari, Cape Town, Morocco, Egypt & More (2026)",
  description:
    "Plan your Africa trip with safari guides, Cape Town itineraries, Morocco routes, Egypt plans. Budget tips, visa info and health advice.",
  keywords: [
    "africa travel guide 2026",
    "africa safari guide",
    "kenya safari itinerary",
    "cape town travel guide",
    "morocco itinerary",
    "egypt travel guide",
    "africa budget travel",
    "africa visa for indians",
  ],
  openGraph: {
    title: "Africa Travel Guide: Safari, Cape Town, Morocco, Egypt & More (2026)",
    description: "15+ guides across 10+ countries. Safari tips, visa advice, health info and proven routes for Africa.",
    images: [{ url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80", width: 1200, height: 630, alt: "Kenya safari elephant Kilimanjaro sunset Africa" }],
    type: "article", publishedTime: "2026-04-09T00:00:00Z", authors: ["IncredibleItinerary"],
    tags: ["Africa", "Travel Guide", "Safari", "Cape Town", "Morocco", "Egypt", "Kenya"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Africa Travel Guide: Safari, Cape Town, Morocco, Egypt & More (2026)",
    description: "15+ guides, safari tips, visa advice, health info, multi-country routes.",
    images: ["https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/africa-travel-guide" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/africa-travel-guide#article",
      "headline": "Africa Travel Guide: Safari, Cape Town, Morocco, Egypt & More (2026)",
      "description": "Plan your Africa trip with safari guides, Cape Town itineraries, Morocco routes, Egypt plans. Budget tips, visa info and health advice.",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80", "width": 1200, "height": 630 },
      "datePublished": "2026-04-09T00:00:00Z", "dateModified": "2026-04-09T00:00:00Z",
      "author": { "@type": "Person", "name": "Surya Pratap", "url": "https://www.incredibleitinerary.com/about" },
      "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com", "logo": { "@type": "ImageObject", "url": "https://www.incredibleitinerary.com/logo.png" } },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.incredibleitinerary.com/blog/africa-travel-guide" },
      "keywords": "africa travel guide, kenya safari, cape town itinerary, morocco guide, egypt travel, africa budget",
      "articleSection": "Travel Guides", "inLanguage": "en", "wordCount": 7000,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Africa Travel Guide", "item": "https://www.incredibleitinerary.com/blog/africa-travel-guide" },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Africa",
      "description": "A continent of 54 countries offering world-class safaris, ancient civilizations, Saharan deserts, tropical islands, and some of the most diverse wildlife on Earth.",
      "url": "https://www.incredibleitinerary.com/blog/africa-travel-guide",
      "touristType": ["Wildlife Tourism", "Adventure Tourism", "Cultural Tourism", "Historical Tourism", "Beach Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is Africa safe for tourists?", "acceptedAnswer": { "@type": "Answer", "text": "Most popular tourist destinations in Africa are safe with standard precautions. Kenya, Tanzania, South Africa, Morocco, and Egypt have well-developed tourism infrastructure. Stick to tourist areas, use reputable safari operators, avoid walking alone at night in cities, and follow your guide's advice in wildlife areas. Safari lodges and camps are extremely safe." } },
    { "@type": "Question", "name": "How much does an African safari cost?", "acceptedAnswer": { "@type": "Answer", "text": "Safari costs vary enormously. Budget safaris in Kenya and Tanzania start at $150-200/day including transport, park fees, accommodation, and meals. Mid-range safaris cost $250-400/day. Luxury lodges run $500-1,500/day. Gorilla trekking in Rwanda requires a $1,500 permit alone. Botswana is the most expensive safari destination at $300-800/day. Self-drive safaris in South Africa and Namibia can cut costs to $80-150/day." } },
    { "@type": "Question", "name": "What is the best time to visit Africa for safari?", "acceptedAnswer": { "@type": "Answer", "text": "For East Africa (Kenya, Tanzania): June-October for the Great Migration and dry season game viewing. For Southern Africa (South Africa, Botswana): May-October (dry winter) when animals gather at water sources. For North Africa (Morocco, Egypt): October-April to avoid extreme heat. The Serengeti wildebeest migration peaks in July-August in Kenya's Masai Mara." } },
    { "@type": "Question", "name": "Do Indians need a visa for Africa?", "acceptedAnswer": { "@type": "Answer", "text": "Most African countries require visas for Indian passport holders. Kenya, Tanzania, and Ethiopia offer e-visas (apply online, $50-80). South Africa requires a visa from the embassy (allow 2-3 weeks). Morocco offers visa-free entry for up to 90 days. Egypt offers visa on arrival ($25). Rwanda offers visa on arrival for all nationalities. Always check the latest requirements before booking." } },
    { "@type": "Question", "name": "Do I need malaria medication for Africa?", "acceptedAnswer": { "@type": "Answer", "text": "Malaria risk exists in most sub-Saharan African countries, especially in safari areas. Consult a travel doctor 4-6 weeks before departure. Common prophylaxis options include Malarone (atovaquone-proguanil), doxycycline, and mefloquine. Use DEET insect repellent, wear long sleeves at dusk, and sleep under treated mosquito nets. Morocco, Egypt, and South Africa's Cape Town are malaria-free." } },
  ],
};

export default function AfricaTravelGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <AfricaGuideClient />
    </>
  );
}
