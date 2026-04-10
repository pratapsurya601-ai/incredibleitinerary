import type { Metadata } from "next";
import MaldivesClient from "./MaldivesClient";

export const metadata: Metadata = {
  title: "Maldives in 5 Days: Complete Guide (Local Islands vs Resorts, Budget to Luxury, 2026)",
  description: "5-day Maldives guide — local island option for $80/day vs overwater villa resorts, Maafushi snorkelling, whale sharks, and the free 30-day visa on arrival.",
  keywords: ["maldives itinerary 5 days", "maldives budget travel", "maldives local islands guide", "maafushi travel guide", "maldives overwater bungalow", "maldives travel 2026"],
  openGraph: {
    title: "Maldives in 5 Days: Local Islands vs Resorts 2026",
    description: "The $80/day local island secret, house reef snorkelling, and overwater villa guide.",
    images: [{ url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80", width: 1200, height: 630, alt: "Maldives overwater bungalow turquoise lagoon" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Maldives in 5 Days (2026)", description: "Local islands vs resorts — the complete guide." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/maldives-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Maldives in 5 Days: Complete Guide (Local Islands vs Resorts, Budget to Luxury, 2026)",
      datePublished: "2026-04-04T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Maldives 5 Days", item: "https://www.incredibleitinerary.com/blog/maldives-5-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Maldives",
      description: "Archipelago nation of 1,200 islands in the Indian Ocean, famous for overwater bungalows, coral reefs, and the clearest turquoise water in the world.",
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I visit the Maldives on a budget?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the local island option makes the Maldives accessible for $80–150/day total including accommodation, food, transport, and activities. Stay on local islands like Maafushi, Thulusdhoo, or Dhigurah.",
      },
    },
    {
      "@type": "Question",
      name: "When is the best time to visit the Maldives?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "November to April is the dry season — calm seas, excellent visibility (20–30m), and reliable sunshine. December–February are the busiest and most expensive months. April is excellent value with fewer crowds.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get from Male airport to my island?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local islands within 1 hour: speedboat ($10–25 per person, 20–90 min). Resort islands: seaplane ($300–500 return per person) or speedboat. Book transfers in advance.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Maldives good for snorkelling or only diving?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both — but snorkelling is excellent even without diving. The house reefs at most local islands and resorts have turtles, reef sharks, rays, and dense coral at 2–5m depth — accessible to any swimmer.",
      },
    },
    {
      "@type": "Question",
      name: "What is the alcohol situation in the Maldives?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alcohol is strictly prohibited on local islands. Resorts on private uninhabited islands are exempt and serve alcohol freely. This is the main practical difference between local island and resort experiences.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a visa for the Maldives?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No pre-arranged visa is needed. The Maldives offers a free 30-day visa on arrival for all nationalities — no exceptions, no pre-approval.",
      },
    },
  ],
};

export default function MaldivesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <MaldivesClient />
    </>
  );
}
