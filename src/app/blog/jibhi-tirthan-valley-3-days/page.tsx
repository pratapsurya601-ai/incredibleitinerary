import type { Metadata } from "next";
import JibhiClient from "./JibhiClient";
export const metadata: Metadata = {
  title: "Jibhi & Tirthan Valley in 3 Days: Himachal's Hidden Gem (2026 Guide)",
  description: "Complete Jibhi and Tirthan Valley travel guide — Great Himalayan National Park, Jalori Pass, Serolsar Lake, trout fishing, homestays. The most peaceful hidden destination in Himachal Pradesh.",
  keywords: ["jibhi travel guide","tirthan valley itinerary","jibhi himachal pradesh","jalori pass trek","serolsar lake jibhi","great himalayan national park","jibhi homestay","hidden himachal destination"],
  openGraph: { title: "Jibhi & Tirthan Valley 3 Days (2026)", description: "Jalori Pass · Serolsar Lake · GHNP — Himachal's best kept secret.", images: [{ url: "https://images.unsplash.com/photo-1585087905632-6e3af9e60baf?w=1200&q=80", width: 1200, height: 630 }], type: "article" },
  alternates: { canonical: "https://incredibleitinerary.com/blog/jibhi-tirthan-valley-3-days" },
};
const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "Article", "headline": "Jibhi & Tirthan Valley in 3 Days (2026)", "datePublished": "2026-03-21T00:00:00Z", "author": { "@type": "Organization", "name": "IncredibleItinerary" }, "publisher": { "@type": "Organization", "name": "IncredibleItinerary" } },
  { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },{ "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },{ "@type": "ListItem", "position": 3, "name": "Jibhi Tirthan 3 Days", "item": "https://incredibleitinerary.com/blog/jibhi-tirthan-valley-3-days" }] },
  { "@type": "FAQPage", "mainEntity": [
    { "@type": "Question", "name": "How to reach Jibhi from Delhi?", "acceptedAnswer": { "@type": "Answer", "text": "Delhi to Jibhi: 510km, 10–12 hours by road via Chandigarh–Shimla–Aut–Banjar. Overnight bus from Delhi to Kullu/Bhuntar (Rs.600–Rs.1,200), then local taxi to Jibhi (Rs.800–Rs.1,200, 1.5hrs). Best to drive." } },
    { "@type": "Question", "name": "What is Jibhi known for?", "acceptedAnswer": { "@type": "Answer", "text": "Jibhi is a small village in the Tirthan Valley, known for its extreme peace and quiet, traditional Himachali wooden houses, the Tirthan River for trout fishing, Jalori Pass (3,120m) just 8km away, and the Great Himalayan National Park buffer zone. Very few tourists compared to Manali or Shimla." } },
  ]}
]};
export default function JibhiPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><JibhiClient /></>);
}
