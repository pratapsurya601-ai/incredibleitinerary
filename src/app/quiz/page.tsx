import type { Metadata } from "next";
import QuizClient from "./QuizClient";

export const metadata: Metadata = {
  title: "Where Should You Travel Next? — Free Destination Quiz (2026)",
  description:
    "Answer 5 quick questions and get your perfect travel destination — personalised itinerary, real budget, best time to visit. Covers India, Japan, Thailand, Europe & more. Takes 60 seconds.",
  keywords: [
    "travel destination quiz", "where should i travel", "travel planner quiz",
    "best destination for me", "travel recommendation quiz",
    "india travel quiz", "where to go on holiday 2026", "travel quiz 2026",
  ],
  openGraph: {
    title: "Where Should You Travel Next? — Free Destination Quiz",
    description: "5 questions → your perfect destination + free personalised itinerary. India, Japan, Thailand, Europe & more.",
    images: [{ url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/quiz" },
};

export default function QuizPage() {
  return <QuizClient />;
}
