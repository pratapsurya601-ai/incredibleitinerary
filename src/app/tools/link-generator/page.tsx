import type { Metadata } from "next";
import LinkGeneratorClient from "./LinkGeneratorClient";

export const metadata: Metadata = {
  title: "UTM Link Generator — IncredibleItinerary Internal Tool",
  description: "Generate UTM-tagged links for distribution across Quora, Reddit, Twitter, Medium and more.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.incredibleitinerary.com/tools/link-generator" },
};

export default function LinkGeneratorPage() {
  return <LinkGeneratorClient />;
}
