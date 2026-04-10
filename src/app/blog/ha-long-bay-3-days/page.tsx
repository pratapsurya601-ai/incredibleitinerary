import type { Metadata } from "next";
import HaLongBayClient from "./HaLongBayClient";

export const metadata: Metadata = {
  title: "Ha Long Bay in 3 Days: Complete Cruise Guide (Budget to Luxury, 2026)",
  description: "Everything you need for Ha Long Bay — which cruise to book, how to avoid crowds, best time to visit, sunrise spots, and whether it's worth the hype (it is).",
  keywords: ["ha long bay cruise guide", "ha long bay itinerary", "ha long bay best cruise 2026", "vietnam ha long bay", "lan ha bay guide"],
  openGraph: { title: "Ha Long Bay in 3 Days: Complete Cruise Guide 2026", description: "Which cruise to book, how to avoid crowds, sunrise spots.", images: [{ url: "https://images.unsplash.com/photo-1573270689103-d7a4e42b609a?w=1200&q=80", width: 1200, height: 630, alt: "Ha Long Bay limestone karsts emerald water Vietnam" }], type: "article" },
  twitter: { card: "summary_large_image", title: "Ha Long Bay in 3 Days (2026)", description: "Complete cruise guide — which boat, how to avoid crowds, sunrise secrets." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/ha-long-bay-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Ha Long Bay in 3 Days: Complete Cruise Guide (Budget to Luxury, 2026)", datePublished: "2026-04-04T00:00:00Z", author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" }, { "@type": "ListItem", position: 3, name: "Ha Long Bay 3 Days", item: "https://www.incredibleitinerary.com/blog/ha-long-bay-3-days" }] },
    { "@type": "TouristDestination", name: "Ha Long Bay, Vietnam", description: "UNESCO World Heritage Site with 1,600 limestone islands and islets in the Gulf of Tonkin, Vietnam." },
  ],
};

export default function HaLongBayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HaLongBayClient />
    </>
  );
}
