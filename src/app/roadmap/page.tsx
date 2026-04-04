import type { Metadata } from "next";
import RoadmapClient from "./RoadmapClient";

export const metadata: Metadata = {
  title: "Monetization Roadmap — IncredibleItinerary",
  description: "Strategic plan to grow IncredibleItinerary to ₹5L/month.",
  robots: { index: false, follow: false },
};

export default function RoadmapPage() {
  return <RoadmapClient />;
}
