import type { Metadata } from "next";
import BathClient from "./BathClient";

export const metadata: Metadata = {
  title: "Bath in 2 Days: Roman Baths, Thermae Spa & Stonehenge Day Trip (2026)",
  description: "The complete 2-day Bath guide: pre-booking the Roman Baths, Thermae Spa rooftop pool secrets, Stonehenge day trip logistics, Georgian architecture walks, and where to eat — budget to luxury.",
  keywords: ["bath itinerary 2 days", "bath england travel guide 2026", "roman baths tickets", "thermae bath spa", "stonehenge day trip from bath", "bath uk things to do", "georgian architecture bath"],
  openGraph: {
    title: "Bath in 2 Days: Roman Baths, Thermae Spa & Stonehenge (2026)",
    description: "Pre-booking secrets for Roman Baths and Thermae Spa, Stonehenge day trip logistics, and the best of Bath's Georgian architecture — from budget to luxury.",
    images: [{ url: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1200&q=80", width: 1200, height: 630, alt: "Roman Baths Bath England Georgian Architecture" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Bath in 2 Days (2026)", description: "Roman Baths booking secrets, Thermae Spa tips, Stonehenge day trip — complete guide." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/bath-2-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Bath in 2 Days: Roman Baths, Thermae Spa & Stonehenge Day Trip (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1200&q=80",
      description: "The complete 2-day Bath guide covering Roman Baths, Thermae Bath Spa, Stonehenge day trips, Georgian architecture, Jane Austen connections, and where to stay and eat at every budget.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Bath 2 Days", item: "https://www.incredibleitinerary.com/blog/bath-2-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Bath, England, UK",
      description: "A UNESCO World Heritage city in Somerset, England, famous for its Roman-built baths, Georgian architecture, Jane Austen connections, and the only natural thermal spa in the UK.",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.3811,
        longitude: -2.3590,
      },
      touristType: ["History enthusiasts", "Architecture lovers", "Wellness travelers", "Literary tourists", "Day-trippers from London"],
    },
  ],
};

export default function BathPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BathClient />
    </>
  );
}
