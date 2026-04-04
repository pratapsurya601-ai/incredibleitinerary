import type { Metadata } from "next";
import QuizClient from "./QuizClient";

export const metadata: Metadata = {
  title: "Where Should You Travel in India? — Free Trip Planner Quiz (2026)",
  description:
    "Answer 5 quick questions and get your perfect India destination — personalised itinerary, real budget, best time to visit. Takes 60 seconds.",
  keywords: [
    "india travel quiz", "where to travel in india", "india trip planner",
    "best india destination for me", "india travel recommendation",
    "goa vs kashmir vs rajasthan", "india holiday quiz 2026",
  ],
  openGraph: {
    title: "Where Should You Travel in India? — Free Quiz",
    description: "5 questions → your perfect India destination + free personalised itinerary.",
    images: [{ url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/quiz" },
};

export default function QuizPage() {
  return <QuizClient />;
}
