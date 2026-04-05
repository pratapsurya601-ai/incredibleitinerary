import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";

const count = blogPosts.length;

export const metadata: Metadata = {
  title: `${count} Free Travel Guides — India, Japan, Europe, Southeast Asia & More | IncredibleItinerary`,
  description: `Browse ${count} free destination guides with real budgets, day-by-day itineraries, and local insider tips. India, Thailand, Japan, Vietnam, Greece, Italy, Spain, Portugal, UAE, Morocco, Kenya & more.`,
  keywords: [
    "free travel guides",
    "destination itineraries",
    "India travel guide",
    "Japan itinerary",
    "Thailand travel",
    "Europe travel guide",
    "Southeast Asia itinerary",
    "budget travel guides",
    "day by day itinerary",
  ],
  openGraph: {
    title: `${count} Free Travel Guides Worldwide | IncredibleItinerary`,
    description: `Real budgets. Real timings. Real routes. ${count} destination guides covering India, Japan, Thailand, Vietnam, Greece, Italy, Spain, Portugal, UAE, Morocco & more.`,
    url: "https://www.incredibleitinerary.com/blog",
    type: "website",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
