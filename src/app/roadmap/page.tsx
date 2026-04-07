import type { Metadata } from "next";
import RoadmapClient from "./RoadmapClient";

export const metadata: Metadata = {
  title: "Growth Roadmap — IncredibleItinerary",
  description: "Honest 24-month plan to grow IncredibleItinerary from 362 India guides to a global travel media business. Real revenue projections, backlink playbook, and weekly execution rhythm.",
  robots: { index: false, follow: false },
};

export default function RoadmapPage() {
  return <RoadmapClient />;
}
