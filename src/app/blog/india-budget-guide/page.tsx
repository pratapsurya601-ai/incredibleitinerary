import type { Metadata } from "next";
import IndiaBudgetGuideClient from "./IndiaBudgetGuideClient";

export const metadata: Metadata = {
  title: "India Budget Travel Guide: ₹3,000/Day Formula for Backpackers (2026)",
  description: "How to travel India on ₹1,500–3,000 per day — budget breakdown for accommodation, food, transport and activities across 8 major cities. Scam alerts, best apps and money-saving hacks included.",
  keywords: ["india budget travel", "india backpacker guide", "india travel cost per day", "cheap travel india", "india on a budget 2026"],
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/india-budget-guide" },
  openGraph: {
    title: "India Budget Travel Guide 2026: ₹3,000/Day Formula",
    description: "The complete budget breakdown for travelling India — accommodation, food, transport, scam alerts and money-saving hacks.",
    url: "https://www.incredibleitinerary.com/blog/india-budget-guide",
    type: "article",
  },
};

export default function IndiaBudgetGuidePage() {
  return <IndiaBudgetGuideClient />;
}
