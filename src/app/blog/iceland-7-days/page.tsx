import type { Metadata } from "next";
import IcelandClient from "./IcelandClient";

export const metadata: Metadata = {
  title: "Iceland in 7 Days: Northern Lights, Ring Road, Glaciers & Waterfalls (2026)",
  description: "The complete Iceland Ring Road guide: 7-day itinerary from Reykjavík to Jökulsárlón, Mývatn, and Snæfellsnes with real costs, northern lights tips, and glacier hiking. Budget to luxury.",
  keywords: ["iceland itinerary 7 days", "iceland ring road guide", "northern lights iceland", "iceland travel guide 2026", "jokulsarlon glacier lagoon", "iceland budget travel", "snæfellsnes peninsula"],
  openGraph: {
    title: "Iceland in 7 Days: Ring Road, Northern Lights & Glaciers (2026)",
    description: "Ring Road route with real costs, northern lights secrets, glacier hike logistics, and sneaker wave warnings — everything for an unforgettable Iceland trip.",
    images: [{ url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80", width: 1200, height: 630, alt: "Iceland aurora borealis northern lights over glacier" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Iceland in 7 Days (2026)", description: "Ring Road route, northern lights secrets, glacier hike costs, real ISK prices." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/iceland-7-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Iceland in 7 Days: Northern Lights, Ring Road, Glaciers & Waterfalls (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80",
      description: "The complete Iceland Ring Road itinerary — 7 days from Reykjavík to glaciers, waterfalls, and the northern lights.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Iceland 7 Days", item: "https://www.incredibleitinerary.com/blog/iceland-7-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Iceland",
      description: "A sub-Arctic island nation of volcanoes, geysers, glaciers, and northern lights — one of the most dramatic landscapes on earth.",
      touristType: ["Adventure travelers", "Nature photographers", "Northern lights seekers", "Hiking enthusiasts"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 64.9631,
        longitude: -19.0208,
      },
    },
  ],
};

export default function IcelandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <IcelandClient />
    </>
  );
}
