import type { Metadata } from "next";
import MarseilleClient from "./MarseilleClient";

export const metadata: Metadata = {
  title: "Marseille in 3 Days: Complete Travel Guide 2026 (Budget to Luxury)",
  description:
    "3 days in Marseille with bouillabaisse guides, Calanques boat tours, Château d'If, MuCEM, and Le Panier. Real euro costs, practical timings, and honest tips.",
  keywords: [
    "marseille itinerary 3 days",
    "marseille travel guide 2026",
    "calanques marseille",
    "bouillabaisse marseille",
    "marseille france things to do",
    "chateau d'if marseille",
    "mucem marseille",
    "marseille budget travel",
  ],
  openGraph: {
    title: "Marseille in 3 Days: Complete France Travel Guide 2026",
    description:
      "Calanques boat tours, Château d'If, authentic bouillabaisse, and Le Panier street art — the complete Marseille itinerary from budget to luxury.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Marseille Vieux-Port with Notre-Dame de la Garde basilica France",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marseille in 3 Days (2026)",
    description:
      "Calanques, bouillabaisse, Château d'If, Le Panier — the complete Marseille itinerary with real costs.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/marseille-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Marseille in 3 Days: Complete Travel Guide 2026 (Budget to Luxury)",
      datePublished: "2026-04-05T00:00:00Z",
      dateModified: "2026-04-05T00:00:00Z",
      author: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.incredibleitinerary.com/logo.png",
        },
      },
      image:
        "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80",
      description:
        "3 days in Marseille with bouillabaisse guides, Calanques boat tours, Château d'If, MuCEM, Le Panier street art, and Aix-en-Provence day trip options.",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.incredibleitinerary.com/blog/marseille-3-days",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Marseille 3 Days",
          item: "https://www.incredibleitinerary.com/blog/marseille-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Marseille, France",
      description:
        "France's oldest city and second-largest — a Mediterranean port of 900,000 people with the Calanques National Park, the Vieux-Port fish market, Le Panier street art district, MuCEM, Château d'If island fortress, and the world's finest bouillabaisse.",
      touristType: [
        "Food lovers",
        "Hikers and outdoor enthusiasts",
        "Cultural tourists",
        "Beach travellers",
        "History and architecture enthusiasts",
      ],
      hasMap: "https://maps.google.com/?q=Marseille,France",
    },
  ],
};

export default function MarseillePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MarseilleClient />
    </>
  );
}
