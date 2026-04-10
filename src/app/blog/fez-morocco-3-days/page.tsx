import type { Metadata } from "next";
import FezMoroccoClient from "./FezMoroccoClient";

export const metadata: Metadata = {
  title: "Fez Morocco in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The ultimate 3-day Fez itinerary — UNESCO medina, Chouara tanneries, Al-Qarawiyyin University, Medersa Bou Inania, pastilla, spice souks, and hammam. Indian passport visa info included.",
  keywords: [
    "Fez Morocco itinerary",
    "Fez 3 days",
    "Fez travel guide 2026",
    "Fez medina UNESCO",
    "Chouara tannery",
    "Al-Qarawiyyin university",
    "Medersa Bou Inania",
    "Morocco budget travel",
    "Fez visa Indian passport",
    "Fez el-Bali",
  ],
  openGraph: {
    title: "Fez Morocco in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "UNESCO medina, ancient tanneries, the world's oldest university, spice souks, and hammam rituals — Fez in 3 days from $30/day.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/fez-morocco-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fez Morocco in 3 Days: Complete 2026 Itinerary",
    description:
      "UNESCO medina, Chouara tanneries, Al-Qarawiyyin, and hammam rituals — the definitive Fez guide for 2026.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/fez-morocco-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Fez Morocco in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Fez Morocco in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/fez-morocco-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Fez, Morocco",
      description:
        "Fez el-Bali, the world's largest car-free urban area and a UNESCO World Heritage Site — medieval medina, ancient tanneries, and the world's oldest university.",
      geo: { "@type": "GeoCoordinates", latitude: 34.0181, longitude: -5.0078 },
    },
  ],
};

export default function FezMoroccoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FezMoroccoClient />
    </>
  );
}
