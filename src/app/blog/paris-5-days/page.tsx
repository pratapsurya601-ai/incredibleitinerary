import type { Metadata } from "next";
import ParisClient from "./ParisClient";

export const metadata: Metadata = {
  title: "Paris in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description: "5 complete Paris plans with Eiffel Tower booking secrets, Louvre strategy, real euro costs, and the Paris only locals know — from croissant spots to hidden Métro hacks.",
  keywords: ["paris itinerary 5 days", "paris travel guide 2026", "paris budget travel", "eiffel tower guide", "paris things to do", "france travel guide"],
  openGraph: {
    title: "Paris in 5 Days: Budget to Luxury 2026 Itinerary",
    description: "Eiffel Tower booking secrets, Louvre strategy, Versailles tips, and real euro costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80", width: 1200, height: 630, alt: "Paris Eiffel Tower Seine River France" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Paris in 5 Days (2026)", description: "5 plans, Eiffel Tower secrets, real euro costs, Louvre strategy." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/paris-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Paris in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
      description: "5 complete Paris plans with Eiffel Tower booking secrets, Louvre strategy, real euro costs, and the Paris only locals know.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Paris 5 Days", item: "https://www.incredibleitinerary.com/blog/paris-5-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Paris, France",
      description: "The capital of France and one of the world's great cities — home to the Eiffel Tower, the Louvre, Notre-Dame, Versailles, and an unmatched café culture.",
      touristType: ["Cultural tourists", "Architecture enthusiasts", "Food lovers", "History buffs"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many days do I need in Paris?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "5 days is the ideal first visit — it covers the Eiffel Tower, Louvre, Versailles day trip, Montmartre, and Le Marais without rushing. 3 days is the minimum but forces hard choices. Extend to 7+ days if you want Giverny, the Champagne region, or deeper neighbourhood exploration.",
      },
    },
    {
      "@type": "Question",
      name: "When is the best time to visit Paris?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "April–June and September–October. Spring brings chestnut blossoms, outdoor café culture, and moderate crowds. September is arguably the best month — summer heat gone, tourist volumes down 30%, the city returns to locals.",
      },
    },
    {
      "@type": "Question",
      name: "Is Paris safe for tourists?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paris is generally safe. The main practical risks are pickpockets at the Eiffel Tower, Louvre, Sacré-Cœur, and on Métro line 1. Use an anti-theft bag or keep wallets in front pockets. Women travelling solo report Paris as safe with standard precautions.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get from CDG Airport to central Paris?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The RER B train is the best option: €12.10, runs every 10–15 minutes, takes 35 minutes to central Paris (Châtelet-Les Halles, Luxembourg, Saint-Michel). A taxi costs €50–70 fixed fare to Paris.",
      },
    },
    {
      "@type": "Question",
      name: "What should I eat in Paris?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A croissant from a proper boulangerie, steak frites at a classic bistro like Le Relais de l'Entrecôte, French onion soup at a brasserie, crêpes in Montmartre, macarons from Pierre Hermé, and at least one supermarket picnic on the Seine.",
      },
    },
  ],
};

export default function ParisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <ParisClient />
    </>
  );
}
