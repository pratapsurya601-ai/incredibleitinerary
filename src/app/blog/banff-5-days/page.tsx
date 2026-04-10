import type { Metadata } from "next";
import BanffClient from "./BanffClient";

export const metadata: Metadata = {
  title: "Banff in 5 Days: Lake Louise, Moraine Lake, Icefields Parkway & Wildlife (2026)",
  description: "Complete Banff National Park 5-day guide — Moraine Lake shuttle booking secrets, Lake Louise hikes, Icefields Parkway stops, bear safety, and real Canadian dollar costs for every budget.",
  keywords: ["banff itinerary 5 days", "banff national park guide 2026", "moraine lake shuttle booking", "lake louise hike", "banff budget travel", "canada national park"],
  openGraph: {
    title: "Banff in 5 Days: Lake Louise, Moraine Lake & Icefields Parkway (2026)",
    description: "Moraine Lake sunrise, Icefields Parkway stops, bear spray essentials, and real C$ costs for every budget in Banff.",
    images: [{ url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80", width: 1200, height: 630, alt: "Banff National Park Lake Louise turquoise water mountains Canada" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Banff in 5 Days (2026)", description: "Lake Louise, Moraine Lake, Icefields Parkway — 5 plans with real C$ costs." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/banff-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Banff in 5 Days: Lake Louise, Moraine Lake, Icefields Parkway & Wildlife (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80",
      description: "Complete Banff 5-day itinerary with Moraine Lake shuttle guide, Lake Louise hikes, Icefields Parkway, and wildlife safety for every budget.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Banff 5 Days", item: "https://www.incredibleitinerary.com/blog/banff-5-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Banff, Canada",
      description: "Canada's first national park in the Canadian Rockies — home to Lake Louise, Moraine Lake, the Icefields Parkway, grizzly bears, elk, and the most dramatically beautiful mountain landscapes in North America.",
      touristType: ["Nature lovers", "Hikers", "Wildlife photographers", "Ski tourists"],
      geo: { "@type": "GeoCoordinates", latitude: 51.1784, longitude: -115.5708 },
    },
  ],
};

export default function BanffPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BanffClient />
    </>
  );
}
