import type { Metadata } from "next";
import GhentClient from "./GhentClient";

export const metadata: Metadata = {
  title: "Ghent in 3 Days: Gravensteen, Ghent Altarpiece, Graslei & Belgian Food (2026)",
  description:
    "Complete 3-day Ghent guide covering Gravensteen Castle, the Mystic Lamb Altarpiece, Graslei waterfront, Gentse Stoverij beef stew, witloof, SMAK modern art, and student city energy — real euro costs for every budget.",
  keywords: [
    "ghent itinerary 3 days",
    "ghent travel guide 2026",
    "ghent altarpiece mystic lamb",
    "gravensteen castle ghent",
    "graslei waterfront ghent",
    "gentse stoverij recipe",
    "ghent budget travel",
    "belgium travel guide 2026",
  ],
  openGraph: {
    title: "Ghent in 3 Days: Altarpiece, Castle & Belgian Food (2026)",
    description:
      "Gravensteen Castle, the Ghent Altarpiece, Graslei waterfront, Gentse Stoverij, and the real Belgium tourists miss — real euro costs for every budget.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/ghent-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghent in 3 Days (2026)",
    description: "Gravensteen, Mystic Lamb, Graslei, Gentse Stoverij — the real Belgium.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/ghent-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Ghent in 3 Days: Gravensteen, Ghent Altarpiece, Graslei & Belgian Food (2026)",
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
          name: "Ghent in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/ghent-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Ghent",
      description:
        "A fully living medieval Belgian city with the Gravensteen Castle, the Ghent Altarpiece (Mystic Lamb), the Graslei waterfront, Gentse Stoverij beef stew, and a 60,000-strong student population keeping the city vibrant.",
      geo: { "@type": "GeoCoordinates", latitude: 51.0543, longitude: 3.7174 },
    },
  ],
};

export default function GhentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GhentClient />
    </>
  );
}
