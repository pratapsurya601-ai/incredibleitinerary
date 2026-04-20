import type { Metadata } from "next";
import MiamiClient from "./MiamiClient";

export const metadata: Metadata = {
  title: "Miami in 4 Days: South Beach, Little Havana, Wynwood & Everglades (2026)",
  description: "Complete 4-day Miami itinerary covering South Beach Art Deco, Wynwood Walls, Little Havana café cubano, Everglades day trip, Design District, and PAMM — budget to luxury.",
  keywords: ["miami itinerary 4 days", "miami travel guide 2026", "miami budget travel", "south beach art deco guide", "miami things to do", "wynwood walls guide", "everglades day trip from miami", "little havana guide"],
  openGraph: {
    title: "Miami in 4 Days: South Beach, Little Havana & Everglades (2026)",
    description: "Art Deco architecture, Wynwood murals, $1 café cubano in Little Havana, and the Everglades — complete Miami guide for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80", width: 1200, height: 630, alt: "Miami South Beach Ocean Drive Art Deco Florida USA" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Miami in 4 Days (2026)", description: "South Beach, Wynwood, Little Havana, Everglades — complete Miami itinerary for every budget." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/miami-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Miami in 4 Days: South Beach, Little Havana, Wynwood & Everglades (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80",
      description: "Complete 4-day Miami itinerary from South Beach Art Deco and Wynwood Walls to Little Havana and the Everglades National Park.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Miami 4 Days", item: "https://www.incredibleitinerary.com/blog/miami-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Miami, Florida, USA",
      description: "The Magic City — home to South Beach Art Deco architecture, Wynwood street art, Little Havana Cuban culture, and the gateway to the Everglades National Park.",
      touristType: ["Beach lovers", "Art and culture enthusiasts", "Food travelers", "Nature and wildlife visitors", "Nightlife seekers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
  ],
};

export default function MiamiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MiamiClient />
    </>
  );
}
