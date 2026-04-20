import type { Metadata } from "next";
import AmsterdamClient from "./AmsterdamClient";

export const metadata: Metadata = {
  title: "4 Days in Amsterdam: Amsterdam 4 Days Itinerary (2026)",
  description: "4 days in Amsterdam — complete 4 day Amsterdam itinerary with Anne Frank House booking secrets, Rijksmuseum strategy, Keukenhof tulips, canal tours and real euro costs.",
  keywords: ["amsterdam itinerary 4 days", "amsterdam travel guide 2026", "anne frank house tickets", "keukenhof tulips", "amsterdam things to do", "netherlands travel guide", "rijksmuseum night watch", "4 days in amsterdam", "amsterdam 4 days itinerary", "4 day amsterdam itinerary"],
  openGraph: {
    title: "4 Days in Amsterdam: Amsterdam 4 Days Itinerary (2026)",
    description: "4 day Amsterdam itinerary — Anne Frank House booking secrets, Rijksmuseum strategy, Keukenhof tulips, and real euro costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=1200&q=80", width: 1200, height: 630, alt: "Amsterdam canal houses bicycles Netherlands" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Amsterdam in 4 Days (2026)", description: "4 plans, Anne Frank secrets, Keukenhof tulips, canal tours, and real euro costs." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/amsterdam-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Amsterdam in 4 Days: Anne Frank, Rijksmuseum, Tulips & Canal Life (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=1200&q=80",
      description: "4 complete Amsterdam itineraries with Anne Frank booking secrets, Rijksmuseum strategy, Keukenhof tulip gardens, and real euro costs.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Amsterdam 4 Days", item: "https://www.incredibleitinerary.com/blog/amsterdam-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Amsterdam, Netherlands",
      description: "The capital of the Netherlands — a city of 165 canals, Golden Age gabled houses, world-class museums, and 800,000 bicycles.",
      geo: { "@type": "GeoCoordinates", latitude: 52.3676, longitude: 4.9041 },
      touristType: ["Cultural tourists", "History buffs", "Art lovers", "Architecture enthusiasts"],
    },
  ],
};

export default function AmsterdamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AmsterdamClient />
    </>
  );
}
