import type { Metadata } from "next";
import BestMayClient from "./BestMayClient";

export const metadata: Metadata = {
  title: "Best Places to Visit in India in May 2026: 15 Destinations That Actually Work",
  description:
    "Where to go in India in May — Himachal Pradesh, Ladakh, Spiti, Andaman, Kerala before monsoon. Real breakdown by weather, crowd levels, and who each place suits. Not just a list.",
  keywords: [
    "best places to visit in india in may",
    "india travel may",
    "himachal pradesh may",
    "ladakh may",
    "spiti valley may",
    "andaman islands may",
    "hill stations india may",
    "india summer travel",
    "where to go in india in may",
    "india may destinations",
  ],
  openGraph: {
    title: "Best Places to Visit in India in May 2026: 15 Destinations That Actually Work",
    description:
      "May in India is mountains and beaches — not plains. Himachal opens up, Andaman is peak season, and the hill stations are crowd-free. 15 honest picks.",
    images: [
      {
        url: "/images/blog/india-may-travel.jpg",
        width: 1200,
        height: 630,
        alt: "Spiti Valley Himachal Pradesh India May travel mountains snow",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Places to Visit in India in May 2026",
    description:
      "May in India is mountains and beaches — not plains. 15 honest picks for May travel.",
    images: ["/images/blog/india-may-travel.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/best-places-india-may",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Places to Visit in India in May 2026: 15 Destinations That Actually Work",
      "description":
        "Where to go in India in May — Himachal Pradesh, Ladakh, Spiti, Andaman. Real breakdown by weather, crowd levels, and who each place suits.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/india-may-travel.jpg",
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
      "keywords": "india may travel, himachal pradesh, spiti valley, andaman, hill stations summer",
      "wordCount": 3200,
      "articleSection": "Travel Planning",
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
          "name": "Best Places India May",
          "item": "https://www.incredibleitinerary.com/blog/best-places-india-may",
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
      "name": "Is May a good time to visit India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "May is excellent for mountains and beaches — terrible for plains. If you're going to Himachal Pradesh, Ladakh, Uttarakhand, Andaman, or Lakshadweep, May is actually one of the best months. If you're going to Delhi, Agra, Rajasthan, or most of South India, May is brutal (40–45°C). The key is knowing which India you're visiting.",
      },
    },
    {
      "@type": "Question",
      "name": "Which hill station is best to visit in May?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spiti Valley (roads just opening, dramatic snow-patched landscapes), Kasol and Parvati Valley (18–22°C, best month for Kheerganga trek), and Jibhi-Tirthan Valley (apple blossoms, peaceful) are the top picks for May. Manali and Dharamshala are also excellent — pre-peak season so fewer crowds than June-July.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Andaman good to visit in May?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — April-May is actually Andaman's peak season. The waters are calmest, visibility for snorkeling and diving is best (15–20m), and temperatures are a comfortable 28–30°C. The southwest monsoon hits Andaman around late May to early June, so early-to-mid May is ideal.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I visit Spiti Valley in May?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but with caveats. The Manali–Spiti road (via Kunzum Pass) usually opens in late May — check conditions before you go. The Shimla–Spiti road (via Kinnaur) is generally open by early May. If you go in May, expect snow patches at higher elevations, possibly cold nights (0–5°C), and dramatic, crowd-free landscapes. It's one of the best times to visit.",
      },
    },
    {
      "@type": "Question",
      "name": "What should I avoid in India in May?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Avoid Delhi (42°C+), Agra, Varanasi, most of Rajasthan (45°C in Jaisalmer), Goa (off-season, humid, most good places closed), and the Kerala backwaters (hot and humid before monsoon). Darjeeling and Sikkim are also problematic in May — pre-monsoon fog blocks all the mountain views.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Leh Ladakh open in May?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Leh town is accessible year-round by flight. The Manali–Leh highway typically opens in late May (check road conditions). The Srinagar–Leh highway is usually open from April. By late May, most attractions are accessible, passes are opening, and you're ahead of the June–August peak crowds. Temperature in Leh in May: 15–20°C days, 5–8°C nights.",
      },
    },
  ],
};

export default function BestPlacesIndiaMayPage() {
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
      <BestMayClient />
    </>
  );
}
