import type { Metadata } from "next";
import AndamanClient from "./AndamanClient";

export const metadata: Metadata = {
  title: "Andaman Islands 5-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Andaman Islands trip in 5 days. The complete Andaman itinerary — Radhanagar Beach, Havelock Island scuba diving, Neil Island, Cellular Jail. 4.",
  keywords: [
    "andaman islands itinerary 5 days",
    "andaman travel guide 2026",
    "havelock island radhanagar beach",
    "andaman scuba diving snorkeling",
    "neil island andaman",
    "port blair cellular jail",
    "andaman budget travel",
    "andaman honeymoon trip",
    "andaman nicobar islands guide",
  ],
  openGraph: {
    title: "Andaman Islands 5-Day Itinerary 2026: Trip Planner",
    description: "Port Blair · Havelock · Neil Island — 4 plans, real budgets, ferry guide.",
    images: [{ url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80", width: 1200, height: 630, alt: "Radhanagar Beach Havelock Island Andaman" }],
    type: "article", publishedTime: "2026-03-21T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andaman Islands 5-Day Itinerary 2026: Trip Planner",
    description: "Havelock, Neil Island, Port Blair — 4 plans, real budgets, ferry guide.",
    images: ["https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/andaman-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Andaman Islands in 5 Days: Havelock, Neil & Port Blair (2026)",
      "description": "Complete Andaman travel guide — Radhanagar Beach, scuba diving, Neil Island, Cellular Jail. 4 plans with real budgets and ferry timings.",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80" },
      "datePublished": "2026-03-21T00:00:00Z",
      "dateModified": "2026-03-21T00:00:00Z",
      "author": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com" },
      "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com" },
      "keywords": "andaman islands, havelock island, radhanagar beach, andaman scuba diving, neil island, port blair",
      "wordCount": 5500,
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Andaman 5 Days", "item": "https://www.incredibleitinerary.com/blog/andaman-5-days" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question", "name": "How many days are enough for Andaman?",
          "acceptedAnswer": { "@type": "Answer", "text": "5 days is ideal — 1 day Port Blair, 2 days Havelock, 1 day Neil Island, 1 day return via Port Blair. 7 days lets you add Baratang Island (limestone caves) or do more diving. 3 days is the absolute minimum but very rushed." }
        },
        {
          "@type": "Question", "name": "What is the best time to visit Andaman?",
          "acceptedAnswer": { "@type": "Answer", "text": "October to May is best — clear water, calm seas, excellent visibility for snorkeling and diving. November to February is peak season with the best weather. June to September is monsoon — ferries get cancelled, water visibility drops. December and January are the busiest months." }
        },
        {
          "@type": "Question", "name": "How do I get to Andaman?",
          "acceptedAnswer": { "@type": "Answer", "text": "Fly to Veer Savarkar International Airport, Port Blair (IXZ). Direct flights from Chennai (1hr 15min), Kolkata (2hrs), Delhi (3hrs via Chennai or Kolkata), Bangalore (2.5hrs). IndiGo, Air India and SpiceJet all fly there. Book 4-6 weeks ahead — flights fill up fast and prices spike." }
        },
        {
          "@type": "Question", "name": "Is Radhanagar Beach really Asia's best beach?",
          "acceptedAnswer": { "@type": "Answer", "text": "Time magazine named it Asia's Best Beach in 2004 and the title has stuck. It's a 2km crescent of white sand with turquoise water and a forest backdrop — entirely undeveloped. No shacks, no touts, no beach chairs for hire. It's genuinely extraordinary. Arrive by 6am for sunrise and an empty beach." }
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Andaman Islands, India",
      "description": "India's tropical island archipelago in the Bay of Bengal — known for white sand beaches, coral reefs, scuba diving, and the historic Cellular Jail.",
      "url": "https://www.incredibleitinerary.com/blog/andaman-5-days",
    },
  ],
};

export default function AndamanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AndamanClient />
    </>
  );
}
