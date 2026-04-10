import type { Metadata } from "next";
import CopenhagenClient from "./CopenhagenClient";

export const metadata: Metadata = {
  title: "Copenhagen in 3 Days: Nyhavn, Tivoli, Freetown & Danish Design (2026)",
  description: "The complete Copenhagen 3-day itinerary: Nyhavn at dawn, Tivoli at night, Freetown Christiania, Louisiana Museum, a Malmö day trip, and where to eat smørrebrød. Real DKK costs.",
  keywords: ["copenhagen itinerary 3 days", "copenhagen travel guide 2026", "nyhavn guide", "tivoli gardens tips", "freetown christiania", "denmark travel guide", "copenhagen budget"],
  openGraph: {
    title: "Copenhagen in 3 Days: Nyhavn, Tivoli & Danish Design (2026)",
    description: "Nyhavn at 6am, Tivoli at night, Freetown Christiania, and the world's best smørrebrød — Copenhagen done right with real DKK costs.",
    images: [{ url: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1200&q=80", width: 1200, height: 630, alt: "Copenhagen Nyhavn colourful canal houses Denmark" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Copenhagen in 3 Days (2026)", description: "Nyhavn secrets, Tivoli at night, Freetown Christiania — real costs and timings." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/copenhagen-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Copenhagen in 3 Days: Nyhavn, Tivoli, Freetown & Danish Design (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1200&q=80",
      description: "The complete Copenhagen 3-day itinerary covering Nyhavn, Rosenborg, Tivoli, Christiania, Louisiana Museum, and Danish design.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Copenhagen 3 Days", item: "https://www.incredibleitinerary.com/blog/copenhagen-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Copenhagen, Denmark",
      description: "The world's most bicycle-friendly city — home to Nyhavn, Tivoli Gardens, Freetown Christiania, New Nordic cuisine, and the world's happiest population.",
      touristType: ["City break travelers", "Design enthusiasts", "Food lovers", "Scandinavia explorers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 55.6761,
        longitude: 12.5683,
      },
    },
  ],
};

export default function CopenhagenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CopenhagenClient />
    </>
  );
}
