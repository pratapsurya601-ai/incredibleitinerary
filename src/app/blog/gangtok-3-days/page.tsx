import type { Metadata } from "next";
import GangtokClient from "./GangtokClient";

export const metadata: Metadata = {
  title: "Gangtok 3 Days: Tsomgo Lake, Rumtek Monastery & Himalayan Views (Complete Guide)",
  description:
    "Complete 3-day Gangtok itinerary — Tsomgo Lake at 3,753m, Baba Mandir, Rumtek Monastery, MG Marg, Namgyal Institute. Inner Line Permit guide included. Budget from ₹5,000 for 3 days.",
  keywords: [
    "gangtok 3 days itinerary",
    "gangtok sikkim travel guide 2026",
    "tsomgo lake changu lake",
    "rumtek monastery sikkim",
    "gangtok inner line permit",
    "baba mandir sikkim",
    "namgyal institute of tibetology",
    "gangtok budget travel",
    "mg marg gangtok",
    "kanchenjunga views sikkim",
  ],
  openGraph: {
    title: "Gangtok 3 Days: Tsomgo Lake, Rumtek Monastery & Himalayan Views (Complete Guide)",
    description:
      "3-day Gangtok guide — Tsomgo Lake at 3,753m, Baba Mandir at 4,310m, Rumtek Monastery, Kanchenjunga views. Permit guide and real costs.",
    images: [
      {
        url: "/images/blog/gangtok-kanchenjunga.jpg",
        width: 1200,
        height: 630,
        alt: "Kanchenjunga view from Gangtok Sikkim Himalayas",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["https://www.incredibleitinerary.com/about"],
    tags: ["Gangtok", "Sikkim", "India", "Himalayas", "Buddhist", "Permits"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gangtok 3 Days: Tsomgo Lake, Rumtek Monastery & Himalayan Views",
    description: "Tsomgo Lake at 3,753m, Baba Mandir shrine, Rumtek Monastery, momos. 3-day Gangtok guide with permits.",
    images: ["/images/blog/gangtok-kanchenjunga.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/gangtok-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/gangtok-3-days#article",
      "headline": "Gangtok 3 Days: Tsomgo Lake, Rumtek Monastery & Himalayan Views (Complete Guide)",
      "description": "Complete 3-day Gangtok itinerary with Inner Line Permit guide, Tsomgo Lake, Baba Mandir, Rumtek Monastery, and Kanchenjunga viewpoints.",
      "datePublished": "2026-04-07T00:00:00Z",
      "dateModified": "2026-04-07T00:00:00Z",
      "author": {
        "@type": "Person",
        "name": "Surya Pratap",
        "url": "https://www.incredibleitinerary.com/about",
      },
      "publisher": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://www.incredibleitinerary.com",
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.incredibleitinerary.com/blog/gangtok-3-days",
      },
      "keywords": "gangtok itinerary, gangtok 3 days, tsomgo lake, rumtek monastery, inner line permit sikkim, baba mandir",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5000,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Gangtok 3 Days", "item": "https://www.incredibleitinerary.com/blog/gangtok-3-days" },
      ],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need a permit for Tsomgo Lake from Gangtok?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Tsomgo Lake requires an Inner Line Permit (ILP) which costs ₹100. Arrange it through your hotel or a local travel agent (₹200 agent fee) the day before you want to visit. The permit office in Gangtok is at the Sikkim Tourism Development Corporation. Bring your original ID proof." },
    },
    {
      "@type": "Question",
      "name": "When can you see Kanchenjunga from Gangtok?",
      "acceptedAnswer": { "@type": "Answer", "text": "Clear Kanchenjunga views from Gangtok are most reliable in October–November and March–April. During monsoon (June–September), cloud cover makes views nearly impossible for weeks at a stretch. Even in the best months, early morning (6–9am) offers the clearest views before clouds build up." },
    },
    {
      "@type": "Question",
      "name": "How do I get from Bagdogra airport to Gangtok?",
      "acceptedAnswer": { "@type": "Answer", "text": "Bagdogra airport is 120km from Gangtok — roughly 4 hours by road. Shared taxis run from the airport and cost ₹250–₹350 per person. Private taxis cost ₹2,500–₹3,500. Helicopter service from Bagdogra to Gangtok operates seasonally (₹3,000–₹4,000, 30 minutes) when weather permits." },
    },
    {
      "@type": "Question",
      "name": "Is altitude sickness a concern in Gangtok?",
      "acceptedAnswer": { "@type": "Answer", "text": "Gangtok city is at 1,650m — most people acclimatize without issues. The real concern is Day 2 when you drive to Tsomgo Lake at 3,753m and potentially Baba Mandir at 4,310m. If you've come directly from sea level, take it slow, avoid alcohol the night before, and don't run at altitude. Symptoms to watch: persistent headache, nausea, dizziness." },
    },
  ],
};

export default function GangtokBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <GangtokClient />
    </>
  );
}
