import type { Metadata } from "next";
import HampiClient from "./HampiClient";
export const metadata: Metadata = {
  title: "Hampi in 3 Days: Complete Guide to India's Most Surreal Landscape (2026)",
  description: "Complete Hampi travel guide — Virupaksha Temple, Vittala Temple stone chariot, boulder treks, Sanapur Lake, hippie island. 4 plans for budget, solo, couple and group travellers.",
  keywords: ["hampi itinerary 3 days","hampi travel guide 2026","hampi ruins karnataka","vittala temple hampi","virupaksha temple hampi","hampi bouldering","hippie island hampi","hampi from bangalore"],
  openGraph: { title: "Hampi in 3 Days: India's Most Surreal Landscape (2026)", description: "Vittala Temple · Boulder Treks · Hippie Island — complete guide.", images: [{ url: "https://images.unsplash.com/photo-1600100317816-0a8b8a4fba14?w=1200&q=80", width: 1200, height: 630 }], type: "article" },
  alternates: { canonical: "https://incredibleitinerary.com/blog/hampi-3-days" },
};
const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "Article", "headline": "Hampi in 3 Days (2026)", "datePublished": "2026-03-21T00:00:00Z", "author": { "@type": "Organization", "name": "IncredibleItinerary" }, "publisher": { "@type": "Organization", "name": "IncredibleItinerary" } },
  { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },{ "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },{ "@type": "ListItem", "position": 3, "name": "Hampi 3 Days", "item": "https://incredibleitinerary.com/blog/hampi-3-days" }] },
  { "@type": "FAQPage", "mainEntity": [
    { "@type": "Question", "name": "How to reach Hampi from Bangalore?", "acceptedAnswer": { "@type": "Answer", "text": "Hosapete Junction is the nearest railway station (13km from Hampi). Trains from Bangalore to Hosapete: 7–8hrs (Rs.200–Rs.600). Overnight buses from Bangalore to Hosapete (Rs.400–Rs.900, 8hrs). From Hosapete auto/taxi to Hampi: Rs.200–Rs.300." } },
    { "@type": "Question", "name": "Best time to visit Hampi?", "acceptedAnswer": { "@type": "Answer", "text": "October to February is ideal — cool 20–28°C, comfortable for exploring ruins. Hampi is extremely hot March–June (40°C+). Manageable in light rain October–November. Avoid May–June heat completely." } },
  ]}
]};
export default function HampiPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><HampiClient /></>);
}
