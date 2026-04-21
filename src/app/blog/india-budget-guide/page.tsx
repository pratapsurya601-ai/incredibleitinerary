import type { Metadata } from "next";
import IndiaBudgetGuideClient from "./IndiaBudgetGuideClient";

export const metadata: Metadata = {
  title: "India Budget Travel Guide (2026): Real ₹1,500–3,000/Day Backpacker Formula",
  description: "Travel India on ₹1,500–3,000/day — honest cost breakdown for hostels, food, trains & sightseeing across 8 cities. Scam alerts, the apps locals actually use, and the money-saving hacks that work.",
  keywords: ["india budget travel", "india backpacker guide", "india travel cost per day", "cheap travel india", "india on a budget 2026"],
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/india-budget-guide" },
  openGraph: {
    title: "India Budget Travel Guide (2026): ₹1,500–3,000/Day Formula",
    description: "Honest cost breakdown for hostels, food, trains & sightseeing across 8 cities. Scam alerts + money-saving hacks that actually work.",
    url: "https://www.incredibleitinerary.com/blog/india-budget-guide",
    type: "article",
  },
};

export default function IndiaBudgetGuidePage() {
  return <IndiaBudgetGuideClient />;
}
