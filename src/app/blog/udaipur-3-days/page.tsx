import type { Metadata } from "next";
import UdaipurClient from "./UdaipurClient";

export const metadata: Metadata = {
  title: "Udaipur in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description:
    "3 complete Udaipur plans — Budget, Couple/Romantic, Luxury — with real timings, costs, Lake Pichola boat rides and the mistakes every first-timer makes.",
  keywords: [
    "udaipur itinerary 3 days",
    "udaipur travel guide 2026",
    "udaipur budget travel",
    "udaipur couple trip",
    "city palace udaipur",
    "lake pichola boat ride",
    "udaipur packages india",
    "udaipur trip planner",
  ],
  openGraph: {
    title: "Udaipur in 3 Days: Budget to Luxury Itinerary 2026",
    description:
      "Real timings, actual budgets, rooftop restaurant picks. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "City Palace and Lake Pichola Udaipur at sunset",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Udaipur", "India", "Travel", "Itinerary", "Rajasthan", "Romantic"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Udaipur in 3 Days: The Only Guide You Need (2026)",
    description: "3 plans, real timings, actual costs, rooftop picks.",
    images: ["https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/udaipur-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Article schema
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/udaipur-3-days#article",
      "headline": "Udaipur in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      "description": "3 complete Udaipur plans — Budget, Couple/Romantic, Luxury — with real timings, costs, Lake Pichola boat rides and the mistakes every first-timer makes.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-04T00:00:00Z",
      "dateModified": "2026-04-04T00:00:00Z",
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
        "@id": "https://www.incredibleitinerary.com/blog/udaipur-3-days",
      },
      "keywords": "udaipur itinerary, udaipur 3 days, udaipur travel guide, city palace, lake pichola, jag mandir",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5200,
    },

    // BreadcrumbList
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
          "name": "Udaipur in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/udaipur-3-days",
        },
      ],
    },

    // FAQPage — 6 FAQs
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days are enough for Udaipur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is perfect to cover all the major palaces, lakes and temples without rushing. 2 days is too tight if you want to do the Jag Mandir boat ride and a day trip to Haldighati or Kumbhalgarh. 4-5 days lets you add Chittorgarh Fort and Nathdwara temple at a relaxed pace.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Udaipur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to March is the best time to visit Udaipur. October-November has pleasant weather with fewer crowds. December-January is peak season with the best weather but highest hotel prices. February-March offers warm days and lower prices. Avoid April-June when temperatures cross 40 degrees Celsius.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Udaipur trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A budget traveller can do 3 days in Udaipur for under 8,000 rupees including accommodation. A couple on a romantic trip should budget 10,000-25,000 rupees for two. A luxury experience with heritage hotels and private dining runs 25,000-60,000 rupees for two. All prices include accommodation, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Lake Pichola boat ride worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely worth it. The sunset boat ride costs 400-800 rupees per person and gives you views of City Palace, Jag Mandir and Lake Palace Hotel that you cannot get from shore. Book the 4:30-5pm slot for best light. The Jag Mandir island stop lets you explore the palace and have drinks at the restaurant there.",
          },
        },
        {
          "@type": "Question",
          "name": "What should I not miss in Udaipur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "City Palace at 9am opening before tour groups arrive, Lake Pichola sunset boat ride to Jag Mandir, Ambrai Ghat for the best sunset view with dinner, Saheliyon ki Bari gardens in the morning, and at least one rooftop dinner overlooking the lake. Most people skip Bagore ki Haveli — the evening cultural show is one of the best in Rajasthan.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I get around Udaipur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The old city is compact and walkable. For longer distances use auto-rickshaws — always fix the fare before getting in. A full-day auto costs 800-1200 rupees. Uber and Ola work in Udaipur but availability drops after 9pm. Renting a scooter costs 300-400 rupees per day and is the fastest way to reach Fateh Sagar Lake and the outskirts.",
          },
        },
      ],
    },

    // TouristDestination
    {
      "@type": "TouristDestination",
      "name": "Udaipur, Rajasthan, India",
      "description": "Known as the City of Lakes, Udaipur is India's most romantic city, famous for its ornate palaces, shimmering lakes, Rajput heritage, and rooftop restaurants overlooking Lake Pichola.",
      "url": "https://www.incredibleitinerary.com/blog/udaipur-3-days",
      "touristType": ["Cultural Tourism", "Heritage Tourism", "Romantic Tourism", "Lake Tourism"],
    },
  ],
};

export default function UdaipurBlogPage() {
  return (
    <>
      {/* Inject JSON-LD into page head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UdaipurClient />
    </>
  );
}
