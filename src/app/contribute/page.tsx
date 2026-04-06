import type { Metadata } from "next";
import ContributeClient from "./ContributeClient";

export const metadata: Metadata = {
  title: "Share Your Travel Photos — IncredibleItinerary",
  description:
    "Travelled somewhere recently? Share your photos and get featured in our free travel guides with full photo credit. Help real travellers plan better trips.",
  alternates: { canonical: "https://www.incredibleitinerary.com/contribute" },
};

export default function ContributePage() {
  return <ContributeClient />;
}
