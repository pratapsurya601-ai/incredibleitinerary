import type { Metadata } from "next";
import QuizClient from "./QuizClient";

export const metadata: Metadata = {
  title: "Destination Matcher — Find Your Perfect Trip",
  description:
    "Answer 5 questions and get matched with the perfect travel destination from 305+ guides. Personalized match scores, real budgets, free itineraries.",
  keywords: [
    "travel destination quiz",
    "where should i travel",
    "travel planner quiz",
    "best destination for me",
    "trip finder quiz",
    "india travel quiz",
    "where to go on holiday 2026",
    "travel recommendation engine",
  ],
  openGraph: {
    title: "Find Your Perfect Trip — Destination Matcher",
    description:
      "5 questions → 305+ destinations scored to your exact preferences. Free, instant, no signup required.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/quiz" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the trip matcher work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You answer 5 questions about your preferences — experience type, region, trip duration, budget, and travel style. Our scoring engine rates all 305+ destination guides against your answers and ranks them by match percentage. Everything runs in your browser — no data is sent to a server.",
      },
    },
    {
      "@type": "Question",
      name: "Is the quiz free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, completely free with no signup required. All 305+ travel guides on IncredibleItinerary are free to read.",
      },
    },
    {
      "@type": "Question",
      name: "How many destinations does it match against?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The quiz scores all 305+ destination guides on IncredibleItinerary, covering India, Southeast Asia, Japan, Europe, Middle East, Americas, and Africa.",
      },
    },
    {
      "@type": "Question",
      name: "Can I retake the quiz with different answers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. After seeing your results, click 'Retake Quiz' to start fresh. You can also remove individual filter chips on the results page to re-score in real time without retaking the whole quiz.",
      },
    },
  ],
};

export default function QuizPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <QuizClient />
    </>
  );
}
