import type { Metadata } from "next";
import AngkorWatClient from "./AngkorWatClient";


export const metadata: Metadata = {
  title: "Angkor Wat in 4 Days: Sunrise, Bayon, Ta Prohm & Siem Reap (2026)",
  description: "4 complete Angkor Wat itineraries with sunrise reflection secrets, Bayon face-tower strategy, Ta Prohm timing tips, and real USD costs from $35/day.",
  keywords: ["angkor wat itinerary 4 days", "angkor wat sunrise tips", "siem reap travel guide 2026", "cambodia temple guide", "bayon temple", "ta prohm tomb raider", "angkor pass cost"],
  openGraph: {
    title: "Angkor Wat in 4 Days: Sunrise, Bayon & Ta Prohm (2026)",
    description: "Sunrise reflection secrets, Bayon face-tower strategy, Ta Prohm timing, and real USD costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1200&q=80", width: 1200, height: 630, alt: "Angkor Wat Cambodia sunrise temple reflection" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Angkor Wat in 4 Days (2026)", description: "Sunrise, Bayon, Ta Prohm, Banteay Srei — complete strategy for every budget." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/angkor-wat-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Angkor Wat in 4 Days: Sunrise, Bayon, Ta Prohm & Siem Reap (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1200&q=80",
      description: "4 complete Angkor Wat itineraries with sunrise reflection secrets, Bayon face-tower strategy, Ta Prohm timing tips, and real USD costs.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Angkor Wat 4 Days", item: "https://www.incredibleitinerary.com/blog/angkor-wat-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Angkor Wat, Siem Reap, Cambodia",
      geo: { "@type": "GeoCoordinates", latitude: 13.4125, longitude: 103.8670 },
      description: "Angkor Wat is the largest religious monument in the world, a 12th-century Khmer temple complex and UNESCO World Heritage Site in northwest Cambodia.",
      touristType: ["Cultural tourists", "Architecture enthusiasts", "Photography enthusiasts", "History buffs"],
    },
  ],
};

export default function AngkorWatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AngkorWatClient />
    </>
  );
}
