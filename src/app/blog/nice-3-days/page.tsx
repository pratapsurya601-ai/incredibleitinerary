import type { Metadata } from "next";
import NiceClient from "./NiceClient";

export const metadata: Metadata = {
  title: "Nice in 3 Days: French Riviera Itinerary 2026 (Budget to Luxury)",
  description: "3 days in Nice with the French Riviera's best day trips — Monaco, Èze, Antibes. Real costs, socca spots, beach guide, and the Promenade timing secret.",
  keywords: ["nice itinerary 3 days", "nice france travel guide", "french riviera itinerary", "monaco day trip from nice", "nice budget travel"],
  openGraph: {
    title: "Nice in 3 Days: French Riviera 2026 Itinerary",
    description: "Monaco day trips, Èze village, socca guide, real euro costs — complete Nice itinerary from budget to luxury.",
    images: [{ url: "https://images.unsplash.com/photo-1491166617655-0723a0567989?w=1200&q=80", width: 1200, height: 630, alt: "Nice France Promenade des Anglais Mediterranean coast" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Nice in 3 Days (2026)", description: "Monaco, Èze, socca, real euro costs — the complete French Riviera itinerary." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/nice-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Nice in 3 Days: French Riviera Itinerary 2026 (Budget to Luxury)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1491166617655-0723a0567989?w=1200&q=80",
      description: "3 days in Nice with the French Riviera's best day trips — Monaco, Èze, Antibes. Real costs, socca spots, and beach guide.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Nice 3 Days", item: "https://www.incredibleitinerary.com/blog/nice-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Nice, France",
      description: "The capital of the French Riviera — a city of Baroque churches, pebble beaches, morning flower markets, socca street food, and the turquoise Mediterranean.",
      touristType: ["Beach travelers", "Cultural tourists", "Food lovers", "Day-trippers to Monaco and Èze"],
    },
  ],
};

export default function NicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <NiceClient />
    </>
  );
}
