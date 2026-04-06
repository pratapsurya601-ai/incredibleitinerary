import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us — IncredibleItinerary",
  description:
    "IncredibleItinerary is a personal travel planning service for India. We craft handmade itineraries for curious travellers — not cookie-cutter tours.",
  alternates: { canonical: "https://www.incredibleitinerary.com/about" },
  openGraph: {
    title: "About Us — IncredibleItinerary",
    description: "IncredibleItinerary is a personal travel planning service for India. We craft handmade itineraries for curious travellers — not cookie-cutter tours.",
    url: "https://www.incredibleitinerary.com/about",
    type: "website",
    images: [{ url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80", width: 1200, height: 630, alt: "IncredibleItinerary — Free Travel Guides" }],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
