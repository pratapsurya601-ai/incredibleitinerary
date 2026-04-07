import type { Metadata } from "next";
import TrichyClient from "./TrichyClient";

export const metadata: Metadata = {
  title: "Trichy 2 Days: The Ultimate Itinerary (Rockfort, Srirangam & More)",
  description:
    "The complete 2-day Trichy itinerary — Rockfort Temple, Srirangam Island, Grand Anicut, budget breakdown from ₹3,000/day, and what to skip.",
  keywords: [
    "trichy itinerary 2 days",
    "tiruchirappalli travel guide 2026",
    "rockfort temple trichy",
    "srirangam ranganathaswamy temple",
    "grand anicut kallanai dam",
    "trichy budget travel",
    "tamil nadu temples",
    "jambukeswarar temple thiruvanaikaval",
    "trichy 2 day itinerary",
    "tiruchirappalli sightseeing",
  ],
  openGraph: {
    title: "Trichy 2 Days: The Ultimate Itinerary (Rockfort, Srirangam & More)",
    description:
      "Rockfort Temple, Srirangam — the world's largest functioning Hindu temple — Grand Anicut, real budgets. Your complete 2-day Trichy guide.",
    images: [
      {
        url: "https://www.incredibleitinerary.com/images/blog/trichy-rockfort.jpg",
        width: 1200,
        height: 630,
        alt: "Rockfort Temple Trichy Tamil Nadu at dawn",
      },
    ],
    type: "article",
    publishedTime: "2026-03-20T00:00:00Z",
    authors: ["Surya Pratap"],
    tags: ["Trichy", "Tamil Nadu", "India", "Temples", "History", "Budget Travel"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trichy 2 Days: The Ultimate Itinerary (Rockfort, Srirangam & More)",
    description: "Rockfort, Srirangam, Grand Anicut — 2 days, real budgets, no fluff.",
    images: ["https://www.incredibleitinerary.com/images/blog/trichy-rockfort.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/trichy-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/trichy-2-days#article",
      "headline": "Trichy 2 Days: The Ultimate Itinerary (Rockfort, Srirangam & More)",
      "description":
        "The complete 2-day Trichy itinerary — Rockfort Temple, Srirangam Island, Grand Anicut, budget breakdown from ₹3,000/day, and what to skip.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/trichy-rockfort.jpg",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-03-20T00:00:00Z",
      "dateModified": "2026-04-01T00:00:00Z",
      "author": {
        "@type": "Person",
        "name": "Surya Pratap",
        "url": "https://www.incredibleitinerary.com/about",
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
        "@id": "https://www.incredibleitinerary.com/blog/trichy-2-days",
      },
      "keywords":
        "trichy itinerary, trichy 2 days, rockfort temple, srirangam temple, grand anicut, tiruchirappalli travel guide",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 3800,
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
          "name": "Trichy in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/trichy-2-days",
        },
      ],
    },

    {
      "@type": "TouristDestination",
      "name": "Trichy (Tiruchirappalli), Tamil Nadu, India",
      "description":
        "A city of ancient temple heritage — home to Rockfort Temple atop an 83m granite rock, Srirangam Ranganathaswamy Temple (the largest functioning Hindu temple in the world), and the 2,000-year-old Grand Anicut dam built by Karikala Chola.",
      "url": "https://www.incredibleitinerary.com/blog/trichy-2-days",
      "touristType": ["Cultural Tourism", "Pilgrimage Tourism", "Heritage Tourism"],
    },
  ],
};

// FAQPage schema — separate block (must NOT be inside @graph with Article)
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many days are enough for Trichy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2 days is sufficient to cover Rockfort Temple, Srirangam Ranganathaswamy Temple (including evening aarti), Grand Anicut dam, and Jambukeswarar Temple. A single day is possible but rushed — you will miss the Srirangam evening aarti, which is the highlight.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Srirangam Temple open to non-Hindus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non-Hindus can enter most areas of Srirangam Ranganathaswamy Temple including the outer prakarams (corridors), gopurams, and the famous 21-gopuram complex. However, the inner sanctum (garbhagriha) where the main deity resides is restricted to Hindus only. The outer areas alone take 1-2 hours to explore.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit Trichy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "October to February is the best time. Temperatures stay between 22-32°C and it is dry. March to May is brutal with 38-42°C heat — temple stone floors barefoot become unbearable. June to September has some rain but manageable heat.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does a 2-day Trichy trip cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Budget travellers can do 2 days for ₹2,500-3,500/day per person including guesthouse (₹500-900/night), meals (₹150-300/meal), and auto-rickshaws (₹200-400/day). Most temples have free entry or nominal fees of ₹10-50. Mid-range travellers spending ₹5,000-8,000/day get comfortable hotels and hired autos.",
      },
    },
    {
      "@type": "Question",
      "name": "What time is the Srirangam aarti?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Srirangam Ranganathaswamy Temple has multiple aarti timings. The most spectacular are the evening aartis at approximately 6pm and 8pm. The 8pm aarti with the deity being carried in procession is particularly impressive. Timings can vary slightly by season and festival calendar — confirm at the temple on arrival.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I get to Trichy from Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trichy is 330km south of Chennai. The best option is train — multiple trains run daily including the Rockfort Express and Vaigai Express, taking approximately 5-5.5 hours. Trichy Junction (station code TPJ) is the main railway station. Trichy airport also has direct flights from Chennai (1 hour), Bangalore, and Mumbai.",
      },
    },
  ],
};

export default function TrichyBlogPage() {
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
      <TrichyClient />
    </>
  );
}
