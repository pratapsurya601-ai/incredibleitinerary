import type { Metadata } from "next";
import JibhiClient from "./JibhiClient";
export const metadata: Metadata = {
  title: "Jibhi & Tirthan Valley in 4 Days: Himachal's Best Kept Secret (2026)",
  description: "Complete Jibhi and Tirthan Valley travel guide — Jalori Pass, Serolsar Lake, Great Himalayan National Park, trout fishing, wooden guesthouses. The hidden Himachal that Instagram just discovered.",
  keywords: ["jibhi itinerary","tirthan valley guide","jalori pass jibhi","serolsar lake trek","great himalayan national park","jibhi from delhi","tirthan valley hidden gem himachal","jibhi guesthouse","banjar valley"],
  openGraph: { title: "Jibhi & Tirthan Valley: Hidden Himachal (2026)", description: "Jalori Pass · Serolsar Lake · GHNP — the Himachal trip everyone is talking about.", images: [{ url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80", width: 1200, height: 630 }], type: "article", publishedTime: "2026-03-21T00:00:00Z" },
  alternates: { canonical: "https://incredibleitinerary.com/blog/jibhi-tirthan-4-days" },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", "headline": "Jibhi & Tirthan Valley 4 Days (2026)", "datePublished": "2026-03-21T00:00:00Z", "author": { "@type": "Organization", "name": "IncredibleItinerary" }, "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80" } },
    { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" }, { "@type": "ListItem", "position": 3, "name": "Jibhi Tirthan 4 Days", "item": "https://incredibleitinerary.com/blog/jibhi-tirthan-4-days" }] },
    { "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "How do I get to Jibhi from Delhi?", "acceptedAnswer": { "@type": "Answer", "text": "Overnight bus from Delhi to Aut (12–13hrs, Rs.600–Rs.900), then local bus or shared taxi to Jibhi (45min, Rs.100–Rs.200). Or drive Delhi → Chandigarh → Mandi → Aut → Jibhi (10–11hrs). Aut is the closest major junction, 20km from Jibhi." } },
      { "@type": "Question", "name": "What is Jibhi known for?", "acceptedAnswer": { "@type": "Answer", "text": "Jibhi is a small village in the Banjar Valley of Himachal Pradesh, known for dense deodar cedar forests, wooden guesthouses, the Tirthan River for trout fishing, Jalori Pass (3,120m), Serolsar Lake trek, and the Great Himalayan National Park (UNESCO World Heritage). It is the anti-Manali — no crowds, no tourist traps, genuine village life." } },
      { "@type": "Question", "name": "Is Jibhi worth visiting in winter?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — December to February brings snow to Jalori Pass and the surrounding mountains. The wooden guesthouses with fireplaces are extraordinary. However Jalori Pass road may be blocked by snow (check conditions). October–November and March–May are the most reliable seasons." } },
    ] },
  ],
};
export default function JibhiPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><JibhiClient /></>);
}
