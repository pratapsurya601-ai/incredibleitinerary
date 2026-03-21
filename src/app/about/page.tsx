import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us — IncredibleItinerary",
  description:
    "IncredibleItinerary is a personal travel planning service for India. We craft handmade itineraries for curious travellers — not cookie-cutter tours.",
  alternates: { canonical: "https://incredibleitinerary.com/about" },
};

export default function AboutPage() {
  return <AboutClient />;
}
