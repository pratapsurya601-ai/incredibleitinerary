import type { Metadata } from "next";
import BeirutClient from "./BeirutClient";

export const metadata: Metadata = {
  title: "Beirut in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The complete 4-day Beirut itinerary — Gemmayzeh nightlife, Pigeon Rocks, National Museum, Corniche, Jeita Grotto, Byblos day trip, mezze culture, and Lebanon's resilient city story. Budget $60/day to luxury hotels.",
  keywords: [
    "Beirut itinerary",
    "Beirut 4 days",
    "Beirut travel guide 2026",
    "Lebanon travel",
    "Jeita Grotto",
    "Byblos Lebanon",
    "Lebanese mezze",
    "Gemmayzeh",
    "Pigeon Rocks Beirut",
    "Beirut visa Indian passport",
  ],
  openGraph: {
    title: "Beirut in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Gemmayzeh art streets, El Morro-level fortress walls, glowing Jeita Grotto, ancient Byblos, and the world's greatest mezze feast — Beirut in 4 days from $60/day.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/beirut-4-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beirut in 4 Days: Complete 2026 Itinerary",
    description:
      "The complete Beirut 4-day guide — Gemmayzeh, Corniche, Jeita Grotto, Byblos, mezze, Lebanese wine. Budget to luxury.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/beirut-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Beirut in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Beirut in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/beirut-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Beirut",
      description:
        "Beirut, Lebanon — the resilient Phoenix city of the Mediterranean; Ottoman architecture, Roman ruins, French balconies, Jeita Grotto, Byblos, and the world's greatest mezze culture.",
      geo: { "@type": "GeoCoordinates", latitude: 33.8886, longitude: 35.4955 },
    },
  ],
};

export default function BeirutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BeirutClient />
    </>
  );
}
