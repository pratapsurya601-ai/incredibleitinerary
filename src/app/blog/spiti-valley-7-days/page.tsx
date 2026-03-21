import type { Metadata } from "next";
import SpitiClient from "./SpitiClient";
export const metadata: Metadata = {
  title: "Spiti Valley in 7 Days: The Complete Road Trip Guide (2026)",
  description: "Complete Spiti Valley travel guide — Key Monastery, Chandratal Lake, Kaza, Pin Valley, Kunzum Pass. Manali to Spiti circuit with real costs, permit guide and acclimatisation tips.",
  keywords: ["spiti valley itinerary 7 days","spiti valley travel guide 2026","key monastery spiti","chandratal lake spiti","kaza spiti valley","manali to spiti road trip","spiti valley permit","kunzum pass spiti"],
  openGraph: { title: "Spiti Valley 7 Days: Complete Road Trip Guide (2026)", description: "Key Monastery · Chandratal Lake · Kaza — the complete Spiti circuit.", images: [{ url: "https://images.unsplash.com/photo-1598977580666-2a2e33f1e1f6?w=1200&q=80", width: 1200, height: 630 }], type: "article" },
  alternates: { canonical: "https://incredibleitinerary.com/blog/spiti-valley-7-days" },
};
const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "Article", "headline": "Spiti Valley in 7 Days (2026)", "datePublished": "2026-03-21T00:00:00Z", "author": { "@type": "Organization", "name": "IncredibleItinerary" }, "publisher": { "@type": "Organization", "name": "IncredibleItinerary" } },
  { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },{ "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },{ "@type": "ListItem", "position": 3, "name": "Spiti Valley 7 Days", "item": "https://incredibleitinerary.com/blog/spiti-valley-7-days" }] },
  { "@type": "FAQPage", "mainEntity": [
    { "@type": "Question", "name": "When is Spiti Valley open?", "acceptedAnswer": { "@type": "Answer", "text": "June to October only. The Manali–Spiti road (via Rohtang/Kunzum) opens late May–June and closes in October. The Shimla–Kinnaur–Spiti route is open slightly longer (May–November) and is safer in early/late season. The valley is completely snow-locked November–May." } },
    { "@type": "Question", "name": "Is Spiti Valley harder than Ladakh?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Spiti is more remote and roads are rougher than Ladakh. Kaza is at 3,800m. Chandratal is at 4,300m. Kunzum Pass is 4,551m. Medical facilities are extremely limited — carry altitude sickness medicine (Diamox) and a first aid kit. Mobile network is patchy — only BSNL works in most areas." } },
  ]}
]};
export default function SpitiPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><SpitiClient /></>);
}
