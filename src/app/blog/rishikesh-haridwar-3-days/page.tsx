import type { Metadata } from "next";
import RishikeshClient from "./RishikeshClient";

export const metadata: Metadata = {
  title: "Best Time to Visit Rishikesh Haridwar: 3-Day Itinerary (2026)",
  description:
    "Best time to visit Rishikesh Haridwar plus complete 3-day itinerary — white water rafting, Beatles Ashram, Ganga Aarti at Har Ki Pauri, real costs from Delhi.",
  keywords: [
    "rishikesh itinerary 3 days",
    "haridwar travel guide",
    "rishikesh rafting",
    "ganga aarti haridwar",
    "beatles ashram rishikesh",
    "rishikesh yoga",
    "rishikesh from delhi",
    "best time to visit rishikesh haridwar",
  ],
  openGraph: {
    title: "Best Time to Visit Rishikesh Haridwar: 3-Day Itinerary (2026)",
    description:
      "Best time to visit Rishikesh Haridwar — rafting, Ganga Aarti, Beatles Ashram. Real costs from Delhi, 4 complete plans.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1593765390540-1c3d1e0a8c3a?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Rishikesh Lakshman Jhula Ganges river",
      },
    ],
    type: "article",
    publishedTime: "2026-03-21T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Rishikesh", "Haridwar", "India", "Travel", "Adventure", "Yoga"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishikesh & Haridwar 3-Day Itinerary 2026: Trip Planner",
    description: "Rafting, Beatles Ashram, Ganga Aarti — 4 plans, real costs from Delhi.",
    images: ["https://images.unsplash.com/photo-1593765390540-1c3d1e0a8c3a?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/rishikesh-haridwar-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/rishikesh-haridwar-3-days#article",
      "headline": "Rishikesh & Haridwar in 3 Days: Rafting, Yoga & Ganga Aarti (2026)",
      "description":
        "Complete Rishikesh and Haridwar itinerary with white water rafting, Beatles Ashram, Ganga Aarti at Har Ki Pauri and yoga retreats. 4 plans with real costs from Delhi.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1593765390540-1c3d1e0a8c3a?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-03-21T00:00:00Z",
      "dateModified": "2026-03-21T00:00:00Z",
      "author": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://www.incredibleitinerary.com",
      },
      "publisher": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://www.incredibleitinerary.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.incredibleitinerary.com/logo.png",
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.incredibleitinerary.com/blog/rishikesh-haridwar-3-days",
      },
      "keywords": "rishikesh itinerary, haridwar ganga aarti, rishikesh rafting, beatles ashram, yoga rishikesh",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5200,
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
          "name": "Travel Guides",
          "item": "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Rishikesh & Haridwar in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/rishikesh-haridwar-3-days",
        },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Rishikesh & Haridwar, Uttarakhand, India",
      "description": "Twin holy cities on the Ganges in the foothills of the Himalayas — Rishikesh is the Yoga Capital of the World and India's adventure sports hub, while Haridwar is one of the seven holiest cities in Hinduism.",
      "url": "https://www.incredibleitinerary.com/blog/rishikesh-haridwar-3-days",
      "touristType": ["Adventure Tourism", "Spiritual Tourism", "Wellness Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
        {
          "@type": "Question",
          "name": "How far is Rishikesh from Delhi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "249km from Delhi — 5-6 hours by road. Overnight buses from Kashmere Gate ISBT (Rs.400-Rs.800). Trains to Haridwar then 24km further to Rishikesh.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Rishikesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October-June for rafting. September-November and February-April for yoga and sightseeing. Avoid July-August monsoon — Ganges floods and rafting stops.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does white water rafting cost in Rishikesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 16km Shivpuri to Nim Beach stretch costs Rs.600-Rs.1,200 per person (most popular, Grade 3 rapids). The 26km Marine Drive stretch costs Rs.1,200-Rs.2,000 (Grade 3-4, more intense). The 36km Kaudiyala stretch costs Rs.2,000-Rs.3,500 (Grade 4, for experienced rafters). Book directly at the camp — avoid touts on the road.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Beatles Ashram worth visiting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — officially Chaurasi Kutia, this is where The Beatles stayed in 1968 with Maharishi Mahesh Yogi. The abandoned ashram has incredible street art, meditation caves and a peaceful atmosphere. Entry is Rs.150 for Indians and Rs.600 for foreigners. Allow 1.5-2 hours. Best in the morning when it is less crowded.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Ganga Aarti timing in Haridwar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Ganga Aarti at Har Ki Pauri in Haridwar happens every evening at sunset — approximately 6pm in winter and 7pm in summer. Arrive 30-45 minutes early to get a spot on the steps. The ceremony lasts 30-40 minutes. The Triveni Ghat aarti in Rishikesh is at the same time and is smaller but more intimate.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I do bungee jumping in Rishikesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — Jumpin Heights in Mohan Chatti operates India's highest bungee jump (83m). The cost is Rs.3,550 per person. They also offer the Giant Swing (Rs.3,550) and Flying Fox zipline (Rs.2,000). Book online in advance — slots fill up on weekends. The facility is 16km from Rishikesh and they provide shuttle buses.",
          },
        },
      ],
};

export default function RishikeshPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <RishikeshClient />
    </>
  );
}
