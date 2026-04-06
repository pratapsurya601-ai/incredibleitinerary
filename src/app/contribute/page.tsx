import type { Metadata } from "next";
import ContributeClient from "./ContributeClient";

export const metadata: Metadata = {
  title: "Share Your Travel Photos — IncredibleItinerary",
  description:
    "Travelled somewhere recently? Share your photos and get featured in our free travel guides with full photo credit. Help real travellers plan better trips.",
  alternates: { canonical: "https://www.incredibleitinerary.com/contribute" },
  openGraph: {
    title: "Share Your Travel Photos — IncredibleItinerary",
    description: "Share your travel photos and get featured in our free travel guides with full photo credit.",
    url: "https://www.incredibleitinerary.com/contribute",
    type: "website",
    images: [{ url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80", width: 1200, height: 630, alt: "Share your travel photos — IncredibleItinerary" }],
  },
};

export default function ContributePage() {
  return <ContributeClient />;
}
