import type { Metadata } from "next";
import MendozaArgentinaClient from "./MendozaArgentinaClient";

export const metadata: Metadata = {
  title: "Mendoza Argentina in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Mendoza itinerary — Malbec wine at Lujan de Cuyo bodegas, Aconcagua views, bike-and-wine tours, asado culture, olive oil estates, and Clos de los Siete. Budget $45/day to The Vines Resort luxury.",
  keywords: [
    "Mendoza Argentina itinerary",
    "Mendoza 4 days",
    "Mendoza wine tour",
    "Malbec tasting Mendoza",
    "Lujan de Cuyo bodegas",
    "Aconcagua day trip",
    "Clos de los Siete",
    "Mendoza visa Indian passport",
    "bike wine tour Mendoza",
    "Argentine wine guide 2026",
  ],
  openGraph: {
    title: "Mendoza Argentina in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Malbec at Lujan de Cuyo, Aconcagua views, bike-and-wine tours, asado culture, olive oil estates, and Clos de los Siete — Mendoza in 4 days from $45/day.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/mendoza-argentina-4-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mendoza Argentina in 4 Days: Complete 2026 Itinerary",
    description: "The wine capital of the southern hemisphere in 4 days — Malbec bodegas, Aconcagua, bike tours, asado, and Clos de los Siete.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/mendoza-argentina-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Mendoza Argentina in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Mendoza Argentina in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/mendoza-argentina-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Mendoza",
      description:
        "Mendoza, Argentina — the wine capital of the southern hemisphere, home to 1,800 Malbec bodegas in the shadow of Aconcagua, the highest peak outside Asia, with world-ranked Zuccardi and the extraordinary Clos de los Siete estate.",
      geo: { "@type": "GeoCoordinates", latitude: -32.8908, longitude: -68.8272 },
    },
  ],
};

export default function MendozaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MendozaArgentinaClient />
    </>
  );
}
