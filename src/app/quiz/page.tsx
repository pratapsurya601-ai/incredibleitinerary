import type { Metadata } from "next";
import QuizClient from "./QuizClient";

export const metadata: Metadata = {
  title: "Trip Finder Quiz (2026): Where Should I Travel Next? 60-Second Test",
  description:
    "Free 60-second trip finder quiz — 5 tap-to-select questions match you to your perfect destination from 377+ guides. No signup, no email. India, SE Asia, Europe, Japan, more.",
  keywords: [
    "trip finder quiz",
    "travel quiz",
    "destination quiz",
    "where should i travel",
    "find my trip",
    "travel destination finder",
    "what trip is right for me",
    "travel destination quiz",
    "travel planner quiz",
    "best destination for me",
    "india travel quiz",
    "where to go on holiday 2026",
    "travel recommendation engine",
  ],
  openGraph: {
    title: "Trip Finder Quiz (2026): Where Should I Travel Next?",
    description:
      "Free 60-second quiz — 5 questions match you to your perfect destination from 377+ guides. No signup.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trip Finder Quiz (2026): Where Should I Travel Next?",
    description:
      "Free 60-second travel destination quiz — 5 questions, 377+ guides. No signup.",
    images: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
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
      name: "What is the trip finder quiz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The trip finder quiz is a free 60-second travel destination finder that matches you to your perfect itinerary. Answer 5 quick questions about your style, region, budget, and duration, and we score all 375+ guides to rank the best destinations for you.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the trip finder quiz take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "60 seconds or less. Most people finish the trip finder quiz in under a minute — it is just 5 tap-to-select questions with no typing or signup required.",
      },
    },
    {
      "@type": "Question",
      name: "Is the trip finder quiz free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, completely free with no signup, email, or payment required. Every travel guide the quiz recommends is also free to read in full.",
      },
    },
    {
      "@type": "Question",
      name: "How does the trip finder quiz work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You answer 5 questions about your preferences — experience type, region, trip duration, budget, and travel style. Our scoring engine rates all 375+ destination guides against your answers and ranks them by match percentage. Everything runs in your browser — no data is sent to a server.",
      },
    },
    {
      "@type": "Question",
      name: "How many destinations does the travel quiz match against?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The quiz scores all 375+ destination guides on IncredibleItinerary, covering India, Southeast Asia, Japan, Europe, Middle East, Americas, and Africa.",
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
