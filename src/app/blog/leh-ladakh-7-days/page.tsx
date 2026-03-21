import type { Metadata } from "next";
import LehLadakhClient from "./LehLadakhClient";

export const metadata: Metadata = {
  title: "Leh Ladakh in 7 Days: The Complete Road Trip Guide (2026)",
  description:
    "The complete Leh Ladakh itinerary — Pangong Lake, Nubra Valley, Khardung La, Magnetic Hill. 4 plans, real acclimatisation guide, road trip vs flight, actual costs for 2026.",
  keywords: [
    "leh ladakh itinerary 7 days",
    "leh ladakh travel guide 2026",
    "pangong lake itinerary",
    "nubra valley ladakh guide",
    "ladakh road trip manali to leh",
    "ladakh bike trip",
    "leh ladakh budget trip",
    "ladakh acclimatisation guide",
    "khardung la pass",
    "ladakh honeymoon",
  ],
  openGraph: {
    title: "Leh Ladakh in 7 Days: Complete Guide (2026)",
    description: "Pangong Lake · Nubra Valley · Khardung La — 4 plans, acclimatisation guide, real costs.",
    images: [{ url: "https://images.unsplash.com/photo-1574482620826-903a9948f5cb?w=1200&q=80", width: 1200, height: 630, alt: "Pangong Lake Ladakh blue water mountains" }],
    type: "article", publishedTime: "2026-03-21T00:00:00Z",
  },
  alternates: { canonical: "https://incredibleitinerary.com/blog/leh-ladakh-7-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Leh Ladakh in 7 Days: The Complete Road Trip Guide (2026)",
      "description": "Complete Leh Ladakh travel guide — Pangong Lake, Nubra Valley, Khardung La. 4 plans with acclimatisation guide, road trip tips and real 2026 budgets.",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1574482620826-903a9948f5cb?w=1200&q=80" },
      "datePublished": "2026-03-21T00:00:00Z",
      "dateModified": "2026-03-21T00:00:00Z",
      "author": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://incredibleitinerary.com" },
      "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://incredibleitinerary.com" },
      "keywords": "leh ladakh, pangong lake, nubra valley, khardung la, ladakh road trip, ladakh bike trip",
      "wordCount": 6500,
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Leh Ladakh 7 Days", "item": "https://incredibleitinerary.com/blog/leh-ladakh-7-days" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question", "name": "How many days do you need for Leh Ladakh?",
          "acceptedAnswer": { "@type": "Answer", "text": "7 days minimum — 2 days acclimatisation in Leh, 2 days Nubra Valley, 2 days Pangong Lake, 1 day return. 10 days is ideal and lets you add Tso Moriri, Zanskar Valley or the Sham Valley trek. Never rush acclimatisation — altitude sickness at 3,500m is serious." }
        },
        {
          "@type": "Question", "name": "What is the best time to visit Leh Ladakh?",
          "acceptedAnswer": { "@type": "Answer", "text": "June to September is the only reliable window for road access. July–August is peak season (festivals, crowded). June and September are ideal — fewer tourists, roads open, good weather. The Manali–Leh highway opens in late May. The Srinagar–Leh highway is open slightly earlier (May) and later (October)." }
        },
        {
          "@type": "Question", "name": "Should I fly or take the road to Leh?",
          "acceptedAnswer": { "@type": "Answer", "text": "Fly if you have limited time (1hr from Delhi). Drive if you want the experience — Manali to Leh is one of the world's great road trips (2 days, 479km). The problem with flying is acute mountain sickness — you go from sea level to 3,500m in 1 hour. Rest for 2 full days before any activity." }
        },
        {
          "@type": "Question", "name": "How serious is altitude sickness in Ladakh?",
          "acceptedAnswer": { "@type": "Answer", "text": "Very serious if ignored. Leh is at 3,524m. Khardung La is 5,359m. Symptoms: headache, nausea, dizziness, breathlessness. Treatment: rest, hydration, descend if severe. Prevention: fly in, rest Day 1 and Day 2 completely, no alcohol first 48hrs, drink 3–4L water daily. Diamox (acetazolamide) helps but consult a doctor first." }
        },
      ],
    },
  ],
};

export default function LehLadakhPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LehLadakhClient />
    </>
  );
}
