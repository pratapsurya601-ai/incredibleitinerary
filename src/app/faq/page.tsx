import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQ — IncredibleItinerary",
  description: "Frequently asked questions about IncredibleItinerary — free travel guides, PDF downloads, payment, custom itineraries and more.",
  alternates: { canonical: "https://www.incredibleitinerary.com/faq" },
};

export default function FaqPage() {
  return <FaqClient />;
}
