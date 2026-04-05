import type { Metadata } from "next";
import { Suspense } from "react";
import ThankYouClient from "./ThankYouClient";

export const metadata: Metadata = {
  title: "Download Your Guides — IncredibleItinerary",
  description: "Your PDF travel guides are ready. Download them now.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-parchment flex items-center justify-center">
        <p className="text-muted text-sm font-light animate-pulse">Loading your guides...</p>
      </main>
    }>
      <ThankYouClient />
    </Suspense>
  );
}
