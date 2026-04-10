import type { Metadata } from "next";
import EgyptClient from "./EgyptClient";

export const metadata: Metadata = {
  title: "Egypt in 7 Days: Pyramids, Luxor, Nile Cruise & Abu Simbel (2026)",
  description: "Complete 7-day Egypt itinerary covering Cairo pyramids, Luxor temples, Aswan Nubian culture, and Abu Simbel — with real costs in EGP and USD, visa info for Indian travelers, and expert tips.",
  keywords: ["egypt itinerary 7 days", "egypt travel guide 2026", "pyramids giza guide", "luxor valley of the kings", "abu simbel tour", "nile cruise budget", "egypt budget travel"],
  openGraph: {
    title: "Egypt in 7 Days: Pyramids, Luxor, Nile & Abu Simbel (2026)",
    description: "7-day Egypt guide covering every major site from Cairo to Aswan — real costs, visa info, scam warnings, and the Abu Simbel secret no guide mentions.",
    images: [{ url: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&q=80", width: 1200, height: 630, alt: "Great Pyramids of Giza Egypt at sunset" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Egypt in 7 Days (2026)", description: "Pyramids, Karnak, Abu Simbel, and the Nile — complete costs and route." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/egypt-7-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Egypt in 7 Days: Pyramids, Luxor, Nile Cruise & Abu Simbel (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&q=80",
      description: "Complete 7-day Egypt itinerary covering Cairo pyramids, Luxor temples, Aswan Nubian culture, and Abu Simbel with real costs and visa info.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Egypt 7 Days", item: "https://www.incredibleitinerary.com/blog/egypt-7-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Egypt",
      description: "One of the world's oldest civilisations — home to the Great Pyramids of Giza, the temples of Luxor and Karnak, the Nile Valley, and the Nubian wonders of Abu Simbel.",
      touristType: ["History enthusiasts", "Archaeological travelers", "Cultural tourists", "Adventure travelers"],
      geo: { "@type": "GeoCoordinates", latitude: 26.8206, longitude: 30.8025 },
    },
  ],
};

export default function EgyptPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EgyptClient />
    </>
  );
}
