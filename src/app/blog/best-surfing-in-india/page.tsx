import type { Metadata } from "next";
import SurfingIndiaClient from "./SurfingIndiaClient";

export const metadata: Metadata = {
  title: "Best Surfing in India 2026: Top Spots, Surf Schools & When to Go",
  description:
    "Complete guide to surfing in India — Mulki, Varkala, Gokarna, Covelong, Andaman. Best spots for beginners and experienced surfers, surf school costs, best season by location.",
  keywords: [
    "surfing in India",
    "best surf spots India",
    "Mulki surfing",
    "Covelong surf school",
    "India surf guide 2026",
    "indian surfing",
    "surfing schools in india",
    "surf schools india",
  ],
  openGraph: {
    title: "Best Surfing in India 2026: Top Spots, Surf Schools & When to Go",
    description:
      "Mulki is India's surfing capital, Covelong is the east coast's best, and Varkala has the most scenic waves. Complete guide with school costs and when to go.",
    images: [
      {
        url: "/images/blog/surfing-india-mulki.jpg",
        width: 1200,
        height: 630,
        alt: "Surfer riding a wave at Mulki beach Karnataka India",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Surfing in India 2026: Top Spots, Surf Schools & When to Go",
    description:
      "Mulki, Covelong, Varkala, Gokarna, Andaman — complete India surf guide with school costs, best seasons, and beginner tips.",
    images: ["/images/blog/surfing-india-mulki.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/best-surfing-in-india",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Surfing in India 2026: Top Spots, Surf Schools & When to Go",
      "description":
        "Complete guide to surfing in India — Mulki, Varkala, Gokarna, Covelong, Andaman. Best spots for beginners and experienced surfers, surf school costs, best season by location.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/surfing-india-mulki.jpg",
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
        "surfing India, best surf spots India, Mulki surfing Karnataka, Covelong surf school Tamil Nadu, India surf guide 2026",
      "wordCount": 2400,
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
          "name": "Best Surfing in India",
          "item": "https://www.incredibleitinerary.com/blog/best-surfing-in-india",
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
      "name": "Where is the best place to learn to surf in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Mulki (Karnataka, near Mangalore) is India's best place to learn to surf. Mantra Surf Club runs India's most reputable beginner courses — 5-day residential packages including accommodation cost ₹12,000–₹18,000. The waves are consistent, the school infrastructure is excellent, and it is Instagram-famous for the river-meets-sea geography. Covelong (Tamil Nadu, 40km from Chennai) is the second-best option with Covelong Point Surf School offering ₹3,000–₹5,000 lesson packages.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best season for surfing in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "West coast (Mulki, Varkala, Gokarna, Goa): June to September — monsoon swells create the best waves. East coast (Covelong, Mahabalipuram): October to March — northeast monsoon brings consistent swells. Andaman Islands (Diglipur): March to May and November to December. Overall best months for a surf trip covering multiple spots: September–October when both coasts have reasonable conditions.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does surfing in India cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Single lessons: ₹2,000–₹4,000/day including board rental. Beginner courses (3–5 days): ₹8,000–₹15,000 without accommodation, ₹12,000–₹25,000 with accommodation. Mulki's Mantra Surf Club 5-day residential package is around ₹12,000–₹18,000 — the best value for a proper beginner course in India.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Mulki the best surfing spot in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, Mulki is widely considered India's best and most consistent surf spot. The Mantra Surf Club is the country's most established school, the beach break is ideal for beginners, and the June–September monsoon swells are reliable. The location — river on one side of the road, sea on the other — makes it Instagram-famous beyond just surfing.",
      },
    },
    {
      "@type": "Question",
      "name": "Can beginners surf in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Absolutely. Mulki and Covelong are specifically set up for beginner instruction. Both have qualified instructors, board rentals, and calm enough conditions to learn on. Most people can stand up on a board within 2–3 lessons. The 5-day residential courses at Mulki are designed specifically for complete beginners.",
      },
    },
  ],
};

export default function SurfingIndiaPage() {
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
      <SurfingIndiaClient />
    </>
  );
}
