import type { Metadata } from "next";
import GalapagosClient from "./GalapagosClient";

export const metadata: Metadata = {
  title: "Galápagos Islands 7-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Galápagos Islands trip in 7 days. The ultimate Galápagos Islands travel guide — giant tortoises, marine iguanas, blue-footed boobies, sea lions,.",
  keywords: [
    "Galapagos Islands travel guide",
    "Galapagos itinerary 7 days",
    "Galapagos cruise budget",
    "giant tortoises Santa Cruz",
    "blue footed booby North Seymour",
    "marine iguana Fernandina",
    "snorkelling Galapagos",
    "Charles Darwin Research Station",
    "Bartolome island",
    "Espanola albatross",
    "Ecuador travel 2026",
    "Galapagos live aboard",
    "Galapagos entrance fee",
    "sea lion Galapagos",
    "Galapagos National Park",
  ],
  openGraph: {
    title: "Galápagos Islands 7-Day Itinerary 2026: Trip Planner",
    description:
      "Where animals never learned to fear humans. Sea lions, giant tortoises, marine iguanas, and blue-footed boobies — your complete Galápagos itinerary from budget to luxury live-aboard.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/galapagos-7-days",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Galápagos Islands giant tortoise on Santa Cruz with volcanic landscape",
      },
    ],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/galapagos-7-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Galápagos Islands in 7 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "Swimming with sea lions, giant tortoises, marine iguanas, and blue-footed boobies — complete Galápagos itinerary from $180/day to $600/day.",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" },
      },
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      mainEntityOfPage: "https://www.incredibleitinerary.com/blog/galapagos-7-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Galápagos 7-Day Guide", item: "https://www.incredibleitinerary.com/blog/galapagos-7-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Galápagos Islands",
      description:
        "The volcanic archipelago 1,000km off Ecuador's coast that inspired Darwin's theory of evolution — a UNESCO World Heritage Site where animals have never learned to fear humans.",
      url: "https://www.incredibleitinerary.com/blog/galapagos-7-days",
      touristType: ["Wildlife enthusiasts", "Divers", "Snorkellers", "Eco-tourists", "Photographers", "Luxury travellers"],
    },
  ],
};


export default function GalapagosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GalapagosClient />
    </>
  );
}
