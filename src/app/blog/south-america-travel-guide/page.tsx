import type { Metadata } from "next";
import SouthAmericaGuideClient from "./SouthAmericaGuideClient";

export const metadata: Metadata = {
  title: "South America Travel Guide: Peru, Brazil, Colombia, Argentina & More (2026)",
  description:
    "Plan your South America trip with itineraries for Peru, Brazil, Colombia, Argentina, Chile and more. Budget tips, visa info and routes.",
  keywords: [
    "south america travel guide 2026",
    "south america itinerary",
    "peru travel guide",
    "brazil travel guide",
    "colombia travel guide",
    "argentina travel guide",
    "south america budget travel",
    "south america visa for indians",
  ],
  openGraph: {
    title: "South America Travel Guide: Peru, Brazil, Colombia, Argentina & More (2026)",
    description: "25+ guides across 10+ countries. Budget breakdowns, visa tips and proven routes for South America.",
    images: [{ url: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=80", width: 1200, height: 630, alt: "Machu Picchu Peru sunrise Andes mountains" }],
    type: "article", publishedTime: "2026-04-09T00:00:00Z", authors: ["IncredibleItinerary"],
    tags: ["South America", "Travel Guide", "Itinerary", "Peru", "Brazil", "Colombia", "Argentina"],
  },
  twitter: {
    card: "summary_large_image",
    title: "South America Travel Guide: Peru, Brazil, Colombia, Argentina & More (2026)",
    description: "25+ guides, visa tips, budget breakdowns, multi-country routes.",
    images: ["https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/south-america-travel-guide" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/south-america-travel-guide#article",
      "headline": "South America Travel Guide: Peru, Brazil, Colombia, Argentina & More (2026)",
      "description": "Plan your South America trip with itineraries for Peru, Brazil, Colombia, Argentina, Chile and more. Budget tips, visa info and routes.",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=80", "width": 1200, "height": 630 },
      "datePublished": "2026-04-09T00:00:00Z", "dateModified": "2026-04-09T00:00:00Z",
      "author": { "@type": "Person", "name": "Surya Pratap", "url": "https://www.incredibleitinerary.com/about" },
      "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com", "logo": { "@type": "ImageObject", "url": "https://www.incredibleitinerary.com/logo.png" } },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.incredibleitinerary.com/blog/south-america-travel-guide" },
      "keywords": "south america travel guide, peru itinerary, brazil travel, colombia guide, argentina travel, south america budget",
      "articleSection": "Travel Guides", "inLanguage": "en", "wordCount": 7200,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "South America Travel Guide", "item": "https://www.incredibleitinerary.com/blog/south-america-travel-guide" },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "South America",
      "description": "A continent of ancient civilizations, Amazon rainforest, Andean peaks, vibrant cities, and some of the most diverse landscapes on Earth.",
      "url": "https://www.incredibleitinerary.com/blog/south-america-travel-guide",
      "touristType": ["Adventure Tourism", "Cultural Tourism", "Ecotourism", "Historical Tourism", "Beach Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is South America safe for tourists?", "acceptedAnswer": { "@type": "Answer", "text": "Most tourist areas in South America are safe with standard precautions. Colombia, Peru, Argentina, and Chile have well-developed tourism infrastructure. Avoid flashing valuables, use registered taxis, stay in tourist zones at night, and keep copies of your passport. Petty theft is the main risk — violent crime against tourists is rare in popular destinations." } },
    { "@type": "Question", "name": "How much does a South America trip cost per day?", "acceptedAnswer": { "@type": "Answer", "text": "Daily costs vary by country. Bolivia and Guatemala are cheapest at $20-50/day. Colombia, Peru, and Ecuador average $25-80/day. Brazil, Argentina, and Chile cost $35-100/day. Budget travelers can manage most countries on $30-50/day with hostels, local food, and buses. The Galapagos and Patagonia are premium destinations costing $100-300/day." } },
    { "@type": "Question", "name": "What is the best time to visit South America?", "acceptedAnswer": { "@type": "Answer", "text": "South America spans both hemispheres so there is no single best time. For Peru and the Andes: May-September (dry season). For Patagonia: November-March (summer). For Brazil and Colombia: year-round, with December-March being peak summer in Brazil. For the Amazon: June-November (lower water, easier wildlife spotting). Shoulder months offer fewer crowds and lower prices." } },
    { "@type": "Question", "name": "Do Indians need a visa for South America?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on the country. Indian passport holders can visit Ecuador, El Salvador, and Haiti visa-free. Brazil offers e-visas. Argentina, Colombia, Chile, and Peru require tourist visas — apply at the respective embassy. Bolivia offers visa on arrival for some nationalities but Indians should apply in advance. Processing takes 1-4 weeks depending on the country." } },
    { "@type": "Question", "name": "What are the must-see places in South America?", "acceptedAnswer": { "@type": "Answer", "text": "The essential South America list includes Machu Picchu (Peru), Rio de Janeiro and Iguazu Falls (Brazil), Salar de Uyuni salt flats (Bolivia), Patagonia glaciers (Argentina/Chile), Galapagos Islands (Ecuador), Cartagena old town (Colombia), and Buenos Aires (Argentina). Two to three weeks covers 2-3 countries comfortably without rushing." } },
  ],
};

export default function SouthAmericaTravelGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <SouthAmericaGuideClient />
    </>
  );
}
