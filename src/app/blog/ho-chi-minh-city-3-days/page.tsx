import type { Metadata } from "next";
import HoChiMinhClient from "./HoChiMinhClient";

export const metadata: Metadata = {
  title: "Ho Chi Minh City in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description: "3 complete Ho Chi Minh City plans with real timings, VND costs, Cu Chi Tunnels guide, street food trail and the mistakes every first-timer makes in Saigon.",
  keywords: ["ho chi minh city itinerary", "saigon travel guide 2026", "cu chi tunnels guide", "ho chi minh city budget travel", "vietnam travel"],
  openGraph: { title: "Ho Chi Minh City in 3 Days: Budget to Luxury 2026", description: "Real timings, VND costs, Cu Chi Tunnels guide.", images: [{ url: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&q=80", width: 1200, height: 630, alt: "Ho Chi Minh City skyline Vietnam" }], type: "article" },
  twitter: { card: "summary_large_image", title: "Ho Chi Minh City in 3 Days (2026)", description: "3 plans, real costs in VND, Cu Chi Tunnels guide." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/ho-chi-minh-city-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Ho Chi Minh City in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)", datePublished: "2026-04-04T00:00:00Z", author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" }, { "@type": "ListItem", position: 3, name: "Ho Chi Minh City", item: "https://www.incredibleitinerary.com/blog/ho-chi-minh-city-3-days" }] },
    { "@type": "TouristDestination", name: "Ho Chi Minh City, Vietnam", description: "Vietnam's largest city and economic hub, known as Saigon, with French colonial architecture, Cu Chi Tunnels, and world-famous street food." },
  ],
};

export default function HCMCPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HoChiMinhClient />
    </>
  );
}
