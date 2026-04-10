import type { Metadata } from "next";
import HanoiClient from "./HanoiClient";

export const metadata: Metadata = {
  title: "Hanoi in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description: "3 complete Hanoi plans — Budget, Mid-Range, Luxury — with real timings, Vietnamese Dong costs, Old Quarter map, street food guide and the mistakes every first-timer makes.",
  keywords: ["hanoi itinerary 3 days", "hanoi travel guide 2026", "hanoi budget travel", "hanoi old quarter", "hoan kiem lake", "hanoi street food", "vietnam travel guide"],
  openGraph: {
    title: "Hanoi in 3 Days: Budget to Luxury Itinerary 2026",
    description: "Real timings, actual budgets in VND, Old Quarter map. 3 complete plans for every type of traveller.",
    images: [{ url: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1200&q=80", width: 1200, height: 630, alt: "Hanoi Old Quarter street Vietnam" }],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
  },
  twitter: { card: "summary_large_image", title: "Hanoi in 3 Days: The Only Guide You Need (2026)", description: "3 plans, real timings, actual costs in VND." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/hanoi-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Hanoi in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)", description: "3 complete Hanoi plans with real timings and costs.", datePublished: "2026-04-04T00:00:00Z", dateModified: "2026-04-04T00:00:00Z", author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" }, publisher: { "@type": "Organization", name: "IncredibleItinerary", logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" } } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" }, { "@type": "ListItem", position: 3, name: "Hanoi in 3 Days", item: "https://www.incredibleitinerary.com/blog/hanoi-3-days" }] },
        { "@type": "TouristDestination", name: "Hanoi, Vietnam", description: "Vietnam's capital city known for its centuries-old architecture, Old Quarter streets, Hoan Kiem Lake, and distinctive street food culture.", url: "https://www.incredibleitinerary.com/blog/hanoi-3-days" },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
   "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Is Hanoi safe for solo female travellers?", acceptedAnswer: { "@type": "Answer", text: "Yes — Hanoi is one of Southeast Asia's safer capitals. Keep bags on the inside of your body, away from the road to avoid motorbike snatching." } }, { "@type": "Question", name: "How much does a 3-day Hanoi trip cost?", acceptedAnswer: { "@type": "Answer", text: "Budget travellers can manage ₫500,000–800,000 per day ($20–32). Mid-range is ₫1,500,000–2,500,000 ($60–100) per day including accommodation, food, transport and activities." } }]
};

export default function HanoiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <HanoiClient />
    </>
  );
}
