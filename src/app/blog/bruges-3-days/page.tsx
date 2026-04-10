import type { Metadata } from "next";
import BrugesClient from "./BrugesClient";

export const metadata: Metadata = {
  title: "Bruges in 3 Days: Medieval Canals, Belgian Chocolate, Brugse Zot & Flemish Art (2026)",
  description:
    "Complete 3-day Bruges guide with Belfry, canal boat tours, Groeningemuseum Flemish masters, Halve Maan underground beer pipeline, Begijnhof, Minnewater lake, and Ghent day trip — real euro costs for every budget.",
  keywords: [
    "bruges itinerary 3 days",
    "bruges travel guide 2026",
    "belgium travel guide",
    "bruges chocolate",
    "bruges beer brugse zot",
    "ghent day trip from bruges",
    "bruges budget travel",
    "bruges visa indian passport",
  ],
  openGraph: {
    title: "Bruges in 3 Days: Budget to Luxury 2026 Itinerary",
    description:
      "Medieval canals, Flemish Primitive paintings, underground beer pipeline, Belgian chocolate — real euro costs for every budget.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/bruges-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruges in 3 Days (2026)",
    description: "Canals, Belfry, Brugse Zot beer pipeline, chocolate, and Flemish art — real costs.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/bruges-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Bruges in 3 Days: Medieval Canals, Belgian Chocolate, Brugse Zot & Flemish Art (2026)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bruges in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/bruges-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Bruges",
      description:
        "The best-preserved medieval city in northern Europe — 14th-century canals, Flemish Primitive paintings, world-class chocolate, and Belgian beer culture including the Halve Maan underground beer pipeline.",
      geo: { "@type": "GeoCoordinates", latitude: 51.2093, longitude: 3.2247 },
    },
  ],
};

export default function BrugesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BrugesClient />
    </>
  );
}
