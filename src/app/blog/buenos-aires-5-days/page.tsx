import type { Metadata } from "next";
import BuenosAiresClient from "./BuenosAiresClient";


export const metadata: Metadata = {
  title: "Buenos Aires in 5 Days: Tango, Steak, Recoleta & La Boca (2026)",
  description: "Complete 5-day Buenos Aires guide covering San Telmo markets, Recoleta Cemetery, Palermo design district, authentic milonga tango, and the world's best beef — with real costs and visa-free entry info for Indians.",
  keywords: ["buenos aires itinerary 5 days", "buenos aires travel guide 2026", "argentina tango guide", "recoleta cemetery", "buenos aires budget travel", "india visa argentina", "buenos aires steak restaurants"],
  openGraph: {
    title: "Buenos Aires in 5 Days: Tango, Steak & Recoleta (2026)",
    description: "From the Sunday San Telmo market to a midnight milonga — 5-day Buenos Aires guide with real costs, authentic experiences, and visa-free entry for Indians.",
    images: [{ url: "https://images.unsplash.com/photo-1583997683064-7bde4a0c3428?w=1200&q=80", width: 1200, height: 630, alt: "La Boca colourful neighbourhood Buenos Aires Argentina" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Buenos Aires in 5 Days (2026)", description: "Tango, steak, Recoleta, La Boca — complete guide with real costs." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/buenos-aires-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Buenos Aires in 5 Days: Tango, Steak, Recoleta & La Boca (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1583997683064-7bde4a0c3428?w=1200&q=80",
      description: "Complete 5-day Buenos Aires guide with tango, steak, markets, and museum recommendations at every budget level.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Buenos Aires 5 Days", item: "https://www.incredibleitinerary.com/blog/buenos-aires-5-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Buenos Aires, Argentina",
      description: "South America's most European city — home to world-class tango, the finest beef on the planet, grand belle-époque architecture, and one of the world's most vibrant cultural scenes.",
      touristType: ["Food lovers", "Cultural tourists", "Dance enthusiasts", "Architecture enthusiasts"],
      geo: { "@type": "GeoCoordinates", latitude: -34.6037, longitude: -58.3816 },
    },
  ],
};

export default function BuenosAiresPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BuenosAiresClient />
    </>
  );
}
