import type { Metadata } from "next";
import GermanyClient from "./GermanyClient";

export const metadata: Metadata = {
  title: "Germany in 7 Days: Munich, Neuschwanstein, Rothenburg, Cologne & Berlin (2026)",
  description: "Complete 7-day Germany itinerary from Munich to Berlin: Neuschwanstein booking secrets, Bavaria Ticket transport hack, Night Watchman tour, Oktoberfest tips, and real euro costs for every budget.",
  keywords: ["germany itinerary 7 days", "germany travel guide 2026", "neuschwanstein castle booking", "munich oktoberfest", "berlin travel guide", "germany budget travel", "bavaria ticket"],
  openGraph: {
    title: "Germany in 7 Days: Munich to Berlin 2026 Itinerary",
    description: "Neuschwanstein booking secrets, Bavaria Ticket hack, Night Watchman tour, Oktoberfest tips, and real euro costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80", width: 1200, height: 630, alt: "Neuschwanstein Castle Bavaria Germany Alps" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Germany in 7 Days (2026)", description: "Munich to Berlin, Neuschwanstein secrets, Bavaria Ticket, Oktoberfest tips." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/germany-7-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Germany in 7 Days: Munich, Neuschwanstein, Rothenburg, Cologne & Berlin (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80",
      description: "Complete 7-day Germany travel guide: Munich beer halls, Neuschwanstein Castle, medieval Rothenburg, Frankfurt, Cologne Cathedral, and Berlin Wall history.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Germany 7 Days", item: "https://www.incredibleitinerary.com/blog/germany-7-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Germany",
      description: "Europe's largest economy and a country of extraordinary cultural, historical, and natural diversity — from Bavarian Alpine castles to the divided-and-reunified streets of Berlin.",
      geo: { "@type": "GeoCoordinates", latitude: 51.1657, longitude: 10.4515 },
      touristType: ["History buffs", "Architecture enthusiasts", "Beer culture", "Art lovers", "Outdoor adventurers"],
    },
  ],
};

export default function GermanyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GermanyClient />
    </>
  );
}
