import type { Metadata } from "next";
import BaganClient from "./BaganClient";

export const metadata: Metadata = {
  title: "Bagan in 4 Days: 2,000 Temples, Hot Air Balloons & Myanmar's Ancient Capital (2026)",
  description: "4 complete Bagan itineraries with e-bike sunrise secrets, hot air balloon booking tips, Popa Mountain guide, and real USD costs from $40/day. Includes 2026 safety information.",
  keywords: ["bagan itinerary 4 days", "bagan myanmar travel guide", "bagan hot air balloon booking", "myanmar temples 2026", "popa mountain myanmar", "bagan sunrise tips", "myanmar travel advisory"],
  openGraph: {
    title: "Bagan in 4 Days: Temples, Balloons & Ancient Myanmar (2026)",
    description: "E-bike sunrise secrets, hot air balloon booking tips, Popa Mountain, and real budget costs for Bagan.",
    images: [{ url: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=80", width: 1200, height: 630, alt: "Bagan Myanmar temples and pagodas at sunrise" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Bagan in 4 Days (2026)", description: "2,000 temples, hot air balloons, e-bike secrets, and $40/day budget breakdown." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/bagan-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Bagan in 4 Days: 2,000 Temples, Hot Air Balloons & Myanmar's Ancient Capital (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=80",
      description: "4 complete Bagan itineraries with e-bike sunrise secrets, hot air balloon booking tips, Popa Mountain guide, and real USD costs.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Bagan 4 Days", item: "https://www.incredibleitinerary.com/blog/bagan-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Bagan, Myanmar",
      geo: { "@type": "GeoCoordinates", latitude: 21.1717, longitude: 94.8585 },
      description: "Bagan is an ancient city in Myanmar containing over 2,000 Buddhist temples and pagodas built between the 9th and 13th centuries, one of Asia's most remarkable archaeological sites.",
      touristType: ["Cultural tourists", "Photography enthusiasts", "History buffs", "Adventure tourists"],
    },
  ],
};

export default function BaganPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BaganClient />
    </>
  );
}
