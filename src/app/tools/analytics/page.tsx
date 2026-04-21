import type { Metadata } from "next";
import AnalyticsDashboardClient from "./AnalyticsDashboardClient";

export const metadata: Metadata = {
  title: "Analytics Dashboard — IncredibleItinerary Internal Tool",
  description: "Paste GA4 CSV exports to see traffic breakdowns by channel, page, source — for internal distribution tracking.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.incredibleitinerary.com/tools/analytics" },
};

export default function AnalyticsPage() {
  return <AnalyticsDashboardClient />;
}
