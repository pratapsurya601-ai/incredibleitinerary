import type { Metadata } from "next";
import LangkawiClient from "./LangkawiClient";

export const metadata: Metadata = {
  title: "Langkawi in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description: "3 complete Langkawi plans — Budget, Mid-Range, Luxury — covering the cable car, mangrove eagle tours, Pantai Cenang beach, duty-free shopping, and the ferry to Koh Lipe.",
  keywords: [
    "langkawi itinerary 3 days",
    "langkawi travel guide 2026",
    "langkawi cable car sky bridge",
    "kilim geoforest park kayak",
    "langkawi duty free",
    "pantai cenang beach",
    "langkawi mangrove tour",
    "malaysia island holiday",
  ],
  openGraph: {
    title: "Langkawi in 3 Days: Budget to Luxury Itinerary 2026",
    description: "Cable car, mangrove eagle tours, Pantai Cenang beach, duty-free rum — 3 complete Langkawi plans with real RM costs.",
    images: [{ url: "https://images.unsplash.com/photo-1559628233-2b8ac8f3658f?w=1200&q=80", width: 1200, height: 630, alt: "Langkawi tropical beach turquoise water Malaysia island" }],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Langkawi", "Malaysia", "Travel", "Itinerary", "Asia", "Beaches"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Langkawi in 3 Days: The Only Guide You Need (2026)",
    description: "3 plans, cable car, mangrove eagles, duty-free tips — real RM costs.",
    images: ["https://images.unsplash.com/photo-1559628233-2b8ac8f3658f?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/langkawi-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/langkawi-3-days#article",
      headline: "Langkawi in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      description: "3 complete Langkawi plans covering the cable car, Kilim Geoforest mangrove tours, Pantai Cenang beach, duty-free shopping, and the Koh Lipe ferry.",
      image: { "@type": "ImageObject", url: "https://images.unsplash.com/photo-1559628233-2b8ac8f3658f?w=1200&q=80", width: 1200, height: 630 },
      datePublished: "2026-04-04T00:00:00Z",
      dateModified: "2026-04-04T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com", logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" } },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.incredibleitinerary.com/blog/langkawi-3-days" },
      keywords: "langkawi itinerary, langkawi cable car, kilim geoforest, pantai cenang, duty free langkawi, langkawi eagles, koh lipe ferry",
      articleSection: "Travel Guides",
      inLanguage: "en",
      wordCount: 4700,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Langkawi in 3 Days", item: "https://www.incredibleitinerary.com/blog/langkawi-3-days" },
      ],
    },
        {
      "@type": "TouristDestination",
      name: "Langkawi, Malaysia",
      description: "Malaysia's duty-free island archipelago, known for the cable car over Mat Cincang mountain, Kilim Geoforest mangrove eagle watching, and Pantai Cenang beach.",
      url: "https://www.incredibleitinerary.com/blog/langkawi-3-days",
      touristType: ["Beach Tourism", "Nature Tourism", "Wildlife Tourism", "Island Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "When is the best time to visit Langkawi?", acceptedAnswer: { "@type": "Answer", text: "November to April for dry season and calm seas. December–February is peak season. May–September is monsoon season — rough seas and cancelled boat tours on the west coast." } },
        { "@type": "Question", name: "Is Langkawi visa-free for Indian passport holders?", acceptedAnswer: { "@type": "Answer", text: "Yes — 30 days visa-free under the 2024 India-Malaysia agreement. Confirm current policy before travel." } },
        { "@type": "Question", name: "How do I get around Langkawi?", acceptedAnswer: { "@type": "Answer", text: "Rent a motorbike (RM 35/day) or car (RM 70–100/day). Public buses are minimal, taxis expensive. Almost all hotels can direct you to rentals." } },
        { "@type": "Question", name: "Is Langkawi good for families?", acceptedAnswer: { "@type": "Answer", text: "Yes — cable car, eagle watching, mangrove boat tours, duty-free chocolate, and calm beach swimming in dry season. Underwater World aquarium (RM 38 adults) popular with children." } },
        { "@type": "Question", name: "Langkawi vs Penang — which is better for 3 days?", acceptedAnswer: { "@type": "Answer", text: "Different destinations. Langkawi for beach and nature. Penang for UNESCO heritage, world-class street food, and culture. Most travellers do both in one Malaysia trip." } },
      ],
};

export default function LangkawiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <LangkawiClient />
    </>
  );
}
