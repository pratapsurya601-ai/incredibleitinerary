import type { Metadata } from "next";
import NorwayFjordsClient from "./NorwayFjordsClient";

export const metadata: Metadata = {
  title: "Norway in 6 Days: Bergen, Geirangerfjord, Flåm Railway & Fjords (2026)",
  description: "The complete Norway fjords itinerary: Bergen, Nærøyfjord, Flåm Railway, Geirangerfjord, Ålesund, and Oslo in 6 days. Real costs, budget hacks, and the best fjord secrets.",
  keywords: ["norway fjords itinerary", "bergen travel guide 2026", "geirangerfjord guide", "flam railway booking", "norway budget travel", "nærøyfjord boat trip", "norway 6 days"],
  openGraph: {
    title: "Norway in 6 Days: Bergen, Geirangerfjord & Flåm Railway (2026)",
    description: "The complete Norway fjords guide with real costs, Flåm Railway booking secrets, Geirangerfjord ferry tips, and how to survive Norway's prices.",
    images: [{ url: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=1200&q=80", width: 1200, height: 630, alt: "Norway Geirangerfjord Seven Sisters waterfall" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Norway in 6 Days (2026)", description: "Fjords, Flåm Railway, Geirangerfjord — real costs and how to survive Norway's prices." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/norway-fjords-6-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Norway in 6 Days: Bergen, Geirangerfjord, Flåm Railway & Fjords (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=1200&q=80",
      description: "The complete Norway fjords itinerary covering Bergen, Nærøyfjord, Flåm Railway, Geirangerfjord, and Oslo in 6 days.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Norway Fjords 6 Days", item: "https://www.incredibleitinerary.com/blog/norway-fjords-6-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Norway",
      description: "The land of fjords — vertical mountain walls, UNESCO-listed waterways, the Flåm Railway, and the midnight sun above the Arctic Circle.",
      touristType: ["Nature lovers", "Hiking enthusiasts", "Fjord photographers", "Scandinavia travelers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 60.4720,
        longitude: 8.4689,
      },
    },
  ],
};

export default function NorwayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <NorwayFjordsClient />
    </>
  );
}
