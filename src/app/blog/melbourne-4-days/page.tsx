import type { Metadata } from "next";
import MelbourneClient from "./MelbourneClient";

export const metadata: Metadata = {
  title: "Melbourne in 4 Days: Great Ocean Road, Street Art, Coffee & Culture (2026)",
  description: "4 complete Melbourne itineraries from A$80/day to A$2,000+. Great Ocean Road guide, Twelve Apostles, Hosier Lane street art, flat white culture, and real A$ costs for every budget.",
  keywords: ["melbourne itinerary 4 days", "melbourne travel guide 2026", "great ocean road guide", "twelve apostles", "melbourne coffee guide", "australia travel guide", "melbourne budget travel"],
  openGraph: {
    title: "Melbourne in 4 Days: Budget to Luxury 2026 Itinerary",
    description: "Great Ocean Road, Twelve Apostles, street art laneways, flat white coffee culture, and real A$ costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1545044846-351ba102b6d5?w=1200&q=80", width: 1200, height: 630, alt: "Melbourne Flinders Street Station at dusk Australia" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Melbourne in 4 Days (2026)", description: "4 plans, Great Ocean Road guide, coffee culture, real A$ costs." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/melbourne-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Melbourne in 4 Days: Great Ocean Road, Street Art, Coffee & Culture (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1545044846-351ba102b6d5?w=1200&q=80",
      description: "4 complete Melbourne plans from budget to luxury with Great Ocean Road, street art, coffee culture, and NGV galleries.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Melbourne 4 Days", item: "https://www.incredibleitinerary.com/blog/melbourne-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Melbourne, Australia",
      description: "Australia's cultural capital — home to world-class coffee, street art laneways, the National Gallery of Victoria, and the gateway to the Great Ocean Road.",
      touristType: ["Food lovers", "Coffee enthusiasts", "Art lovers", "Adventure seekers"],
      geo: { "@type": "GeoCoordinates", latitude: -37.8136, longitude: 144.9631 },
    },
  ],
};

export default function MelbournePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MelbourneClient />
    </>
  );
}
