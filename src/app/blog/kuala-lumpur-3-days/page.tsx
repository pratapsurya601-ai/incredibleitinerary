import type { Metadata } from "next";
import KualaLumpurClient from "./KualaLumpurClient";

export const metadata: Metadata = {
  title: "Kuala Lumpur in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description: "3 complete KL plans — Budget, Mid-Range, Luxury — with Petronas Towers booking secrets, Batu Caves guide, best hawker food, and Grab vs taxi tips.",
  keywords: [
    "kuala lumpur itinerary 3 days",
    "kuala lumpur travel guide 2026",
    "petronas twin towers tickets",
    "batu caves kuala lumpur",
    "malaysia visa free india",
    "kl budget travel",
    "jalan alor food street",
    "malaysia travel guide",
  ],
  openGraph: {
    title: "Kuala Lumpur in 3 Days: Budget to Luxury Itinerary 2026",
    description: "Petronas Towers, Batu Caves, Jalan Alor — 3 complete KL plans with real costs in Malaysian Ringgit.",
    images: [{ url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80", width: 1200, height: 630, alt: "Kuala Lumpur Petronas Twin Towers night skyline Malaysia" }],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Kuala Lumpur", "Malaysia", "Travel", "Itinerary", "Asia"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuala Lumpur in 3 Days: The Only Guide You Need (2026)",
    description: "3 plans, Petronas booking tips, Batu Caves, hawker food guide — real RM costs.",
    images: ["https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/kuala-lumpur-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/kuala-lumpur-3-days#article",
      headline: "Kuala Lumpur in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      description: "3 complete KL plans with Petronas Towers booking secrets, Batu Caves guide, best hawker food, and Grab vs taxi tips.",
      image: { "@type": "ImageObject", url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80", width: 1200, height: 630 },
      datePublished: "2026-04-04T00:00:00Z",
      dateModified: "2026-04-04T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com", logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" } },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.incredibleitinerary.com/blog/kuala-lumpur-3-days" },
      keywords: "kuala lumpur itinerary, petronas towers, batu caves, jalan alor, nasi lemak, malaysia visa india, grab kl",
      articleSection: "Travel Guides",
      inLanguage: "en",
      wordCount: 4900,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Kuala Lumpur in 3 Days", item: "https://www.incredibleitinerary.com/blog/kuala-lumpur-3-days" },
      ],
    },
        {
      "@type": "TouristDestination",
      name: "Kuala Lumpur, Malaysia",
      description: "Malaysia's capital, home to the Petronas Twin Towers, Batu Caves Hindu temple, and one of the best hawker food scenes in Southeast Asia.",
      url: "https://www.incredibleitinerary.com/blog/kuala-lumpur-3-days",
      touristType: ["Urban Tourism", "Cultural Tourism", "Culinary Tourism", "Architecture Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Is Kuala Lumpur visa-free for Indians?", acceptedAnswer: { "@type": "Answer", text: "Yes — since the 2024 India-Malaysia visa-free agreement, Indian passport holders get 30 days visa-free. No prior application required. Confirm current policy at the Malaysian Immigration Department website." } },
        { "@type": "Question", name: "What is the best food to try in Kuala Lumpur?", acceptedAnswer: { "@type": "Answer", text: "Nasi lemak, char kway teow, roti canai, laksa, cendol, and satay. Best eaten at hawker stalls and kopitiams, not hotel restaurants." } },
        { "@type": "Question", name: "What time do Batu Caves open and is it worth going early?", acceptedAnswer: { "@type": "Answer", text: "Open from 6am, free entry. Go at 7–8am for cooler temperatures, golden morning light, and smaller crowds. KTM Komuter from KL Sentral, 30 minutes, RM 2." } },
        { "@type": "Question", name: "KL vs Singapore — which should I visit?", acceptedAnswer: { "@type": "Answer", text: "Both if possible — 4 hours by train. KL is cheaper, more culturally layered (Malay, Chinese, Indian), with better food value. Singapore is cleaner and more efficient. KL wins on atmosphere and price." } },
        { "@type": "Question", name: "What is the budget for 3 days in Kuala Lumpur?", acceptedAnswer: { "@type": "Answer", text: "Budget: RM 85–195/day (€17–39). Mid-range: RM 340–710/day. Luxury: RM 1,000+/day. Excellent value compared to Singapore, Bangkok, or Bali." } },
      ],
};

export default function KualaLumpurPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <KualaLumpurClient />
    </>
  );
}
