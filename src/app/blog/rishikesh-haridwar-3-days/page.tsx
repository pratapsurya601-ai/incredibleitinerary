import type { Metadata } from "next";
import RishikeshClient from "./RishikeshClient";
export const metadata: Metadata = {
  title: "Rishikesh & Haridwar in 3 Days: Rafting, Yoga & Ganga Aarti (2026 Guide)",
  description: "Complete Rishikesh and Haridwar itinerary — white water rafting, Beatles Ashram, Ganga Aarti at Har Ki Pauri, yoga retreats. 4 plans with real costs from Delhi.",
  keywords: ["rishikesh itinerary 3 days","haridwar travel guide","rishikesh rafting","ganga aarti haridwar","beatles ashram rishikesh","rishikesh yoga","rishikesh from delhi"],
  openGraph: { title: "Rishikesh & Haridwar 3 Days (2026)", description: "Rafting · Ganga Aarti · Beatles Ashram — real costs from Delhi.", images: [{ url: "https://images.unsplash.com/photo-1593765390540-1c3d1e0a8c3a?w=1200&q=80", width: 1200, height: 630 }], type: "article" },
  alternates: { canonical: "https://incredibleitinerary.com/blog/rishikesh-haridwar-3-days" },
};
const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "Article", "headline": "Rishikesh & Haridwar in 3 Days (2026)", "datePublished": "2026-03-21T00:00:00Z", "author": { "@type": "Organization", "name": "IncredibleItinerary" }, "publisher": { "@type": "Organization", "name": "IncredibleItinerary" } },
  { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },{ "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },{ "@type": "ListItem", "position": 3, "name": "Rishikesh Haridwar 3 Days", "item": "https://incredibleitinerary.com/blog/rishikesh-haridwar-3-days" }] },
  { "@type": "FAQPage", "mainEntity": [
    { "@type": "Question", "name": "How far is Rishikesh from Delhi?", "acceptedAnswer": { "@type": "Answer", "text": "249km from Delhi — 5–6 hours by road. Overnight buses from Kashmere Gate ISBT (Rs.400–Rs.800). Trains to Haridwar then 24km further to Rishikesh." } },
    { "@type": "Question", "name": "Best time to visit Rishikesh?", "acceptedAnswer": { "@type": "Answer", "text": "October–June for rafting. September–November and February–April for yoga and sightseeing. Avoid July–August monsoon — Ganges floods and rafting stops." } },
  ]}
]};
export default function RishikeshPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><RishikeshClient /></>);
}
