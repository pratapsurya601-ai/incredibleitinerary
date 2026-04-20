import type { Metadata } from "next";
import FirstSoloClient from "./FirstSoloClient";

export const metadata: Metadata = {
  title: "First Solo Trip in India: The Honest Beginner's Guide (2026)",
  description:
    "Planning your first solo trip in India? Best destinations for beginners, safety tips, budget breakdown, what to pack, how to book trains, and the 10 things nobody tells you. Real guide, no fluff.",
  keywords: [
    "first solo trip India",
    "solo travel India beginners",
    "safe places solo travel India",
    "solo trip India tips",
    "India solo travel guide 2026",
    "solo travel india",
    "travel india solo",
    "solo trip india",
    "solo backpacking india",
    "first solo trip",
  ],
  openGraph: {
    title: "First Solo Trip in India: The Honest Beginner's Guide (2026)",
    description:
      "Planning your first solo trip in India? Best destinations for beginners, honest safety advice, train booking, budget breakdown, and the 10 things nobody tells you.",
    images: [
      {
        url: "/images/blog/solo-travel-india.jpg",
        width: 1200,
        height: 630,
        alt: "Solo traveller with backpack on a mountain trail in India",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "First Solo Trip in India: The Honest Beginner's Guide (2026)",
    description:
      "Best beginner destinations, honest safety advice, train booking, and the 10 things nobody tells first-time solo travellers in India.",
    images: ["/images/blog/solo-travel-india.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/first-solo-trip-india",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "First Solo Trip in India: The Honest Beginner's Guide (2026)",
      "description":
        "Planning your first solo trip in India? Best destinations for beginners, safety tips, budget breakdown, what to pack, how to book trains, and the 10 things nobody tells you.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/solo-travel-india.jpg",
      },
      "datePublished": "2026-04-07T00:00:00Z",
      "dateModified": "2026-04-07T00:00:00Z",
      "author": {
        "@type": "Person",
        "name": "Surya Pratap",
        "url": "https://www.incredibleitinerary.com/about",
      },
      "publisher": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://www.incredibleitinerary.com",
      },
      "keywords":
        "first solo trip India, solo travel India beginners, safe places solo travel India, solo trip India tips, India solo travel guide 2026",
      "wordCount": 3200,
      "articleSection": "Travel Tips",
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "First Solo Trip India",
          "item": "https://www.incredibleitinerary.com/blog/first-solo-trip-india",
        },
      ],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is India safe for solo female travel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, with preparation. Kasol, Rishikesh, Varkala, and Jibhi are genuinely safe for solo female travellers with strong backpacker communities. Use Rapido or Ola instead of random autos, share your location with someone you trust, stay in well-reviewed hostels, and research your specific destination before going. The risk profile varies significantly between destinations — Rishikesh and Kasol are very different from Delhi at night.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best first solo trip in India for beginners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Kasol or Rishikesh for most beginners. Both have strong solo traveller infrastructure, English is widely spoken, safety is genuinely high, and it's easy to meet other travellers. Kasol (Himachal Pradesh) is beautiful, quiet, and has excellent budget accommodation. Rishikesh adds yoga, white-water rafting, and the Ganga aarti. Both trips can be done comfortably on ₹1,500–₹2,500/day.",
      },
    },
    {
      "@type": "Question",
      "name": "How much money do I need for a solo India trip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Shoestring: ₹1,500–₹2,000/day (hostel dorm, street food, local buses). Comfortable budget: ₹2,500–₹4,000/day (private room, decent meals, occasional cab). Mid-range: ₹5,000–₹8,000/day (hotel, restaurant meals, some activities). Himachal Pradesh and Uttarakhand are noticeably cheaper than metro cities. Budget at least ₹3,000–₹5,000 cash buffer for emergencies.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I book trains in India as a first-time traveller?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Use the IRCTC app (official Indian Railways app) or Cleartrip.com. Register with your passport. Book 30–60 days ahead for AC classes on popular routes. If quota is full, try the Tatkal quota (opens 1 day before departure at premium price). For long overnight journeys, 3AC is the best value — air-conditioned, comfortable, and safe. Download NTES app for live tracking.",
      },
    },
    {
      "@type": "Question",
      "name": "Is solo travel in India expensive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "India is one of the most affordable solo travel destinations in the world. ₹2,000–₹4,000/day covers comfortable accommodation, good food, and transport. Himalayan destinations (Kasol, Jibhi, Dharamshala) are cheaper than Goa or metro cities. Train travel is remarkably cheap — Delhi to Varanasi in 3AC sleeper is around ₹800–₹1,200.",
      },
    },
    {
      "@type": "Question",
      "name": "What should I pack for a solo trip to India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Keep it light: 40–50L backpack, 2–3 sets of quick-dry clothes, good walking shoes and flip flops, power bank, offline maps downloaded (Google Maps or Maps.me), Airtel or Jio SIM (buy at airport with passport), ₹3,000–₹5,000 cash, and stomach medicine (Norflox + ORS). Avoid suitcases — they are not practical on Indian trains or in mountain areas.",
      },
    },
  ],
};

export default function FirstSoloTripPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <FirstSoloClient />
    </>
  );
}
