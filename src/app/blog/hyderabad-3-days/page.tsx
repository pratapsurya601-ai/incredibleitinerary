import type { Metadata } from "next";
import HyderabadClient from "./HyderabadClient";

export const metadata: Metadata = {
  title: "Hyderabad in 3 Days: Biryani, Forts & Bazaars — Complete Itinerary (2026)",
  description:
    "3 complete Hyderabad plans — Budget, Heritage, Premium — covering Charminar, Golconda Fort, Hussain Sagar, Ramoji Film City, Salar Jung Museum, Chowmahalla Palace, Laad Bazaar bangles and the legendary biryani trail.",
  keywords: [
    "hyderabad itinerary 3 days",
    "hyderabad travel guide 2026",
    "hyderabad budget travel",
    "charminar hyderabad",
    "golconda fort hyderabad",
    "hyderabad biryani trail",
    "ramoji film city hyderabad",
    "hyderabad trip planner",
  ],
  openGraph: {
    title: "Hyderabad in 3 Days: Biryani, Forts & Bazaars (2026)",
    description:
      "Real timings, actual budgets, biryani trail. 3 complete plans from Budget to Premium.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1603813507806-0d8e1a22d22c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Charminar Hyderabad at night",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Hyderabad", "India", "Travel", "Itinerary", "Heritage", "Biryani"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyderabad in 3 Days: The Only Guide You Need (2026)",
    description: "3 plans, real timings, biryani trail, actual costs.",
    images: ["https://images.unsplash.com/photo-1603813507806-0d8e1a22d22c?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/hyderabad-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/hyderabad-3-days#article",
      "headline": "Hyderabad in 3 Days: Biryani, Forts & Bazaars — Complete Itinerary (2026)",
      "description": "3 complete Hyderabad plans — Budget, Heritage, Premium — covering Charminar, Golconda Fort, Hussain Sagar, Ramoji Film City, Salar Jung Museum, Chowmahalla Palace, Laad Bazaar and the biryani trail.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1603813507806-0d8e1a22d22c?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-04T00:00:00Z",
      "dateModified": "2026-04-04T00:00:00Z",
      "author": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://incredibleitinerary.com",
      },
      "publisher": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://incredibleitinerary.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://incredibleitinerary.com/logo.png",
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://incredibleitinerary.com/blog/hyderabad-3-days",
      },
      "keywords": "hyderabad itinerary, hyderabad 3 days, charminar, golconda fort, hyderabad biryani, ramoji film city",
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
          "item": "https://incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Hyderabad in 3 Days",
          "item": "https://incredibleitinerary.com/blog/hyderabad-3-days",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days are enough for Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is the sweet spot — enough for the Old City, Golconda Fort, Salar Jung Museum, Ramoji Film City and a proper biryani trail. 2 days feels rushed if you want Ramoji. 4-5 days lets you add Nagarjunasagar or the Outer Ring Road tech park area.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to March is the best time. October-November is ideal with pleasant weather and post-monsoon greenery. December-February brings cool evenings perfect for walking the Old City. Avoid April-June when temperatures regularly exceed 42 degrees Celsius.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Hyderabad trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget solo: under 6,000 rupees including accommodation. Heritage mid-range: 8,000-18,000 rupees. Premium with luxury hotels and Ramoji: 18,000-30,000 rupees. All prices include accommodation, food, transport and entry tickets.",
          },
        },
        {
          "@type": "Question",
          "name": "Which biryani restaurant is the best in Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Paradise is the most famous and best for flavour. Shadab near Charminar is best for authentic Hyderabadi style in a heritage setting. Bawarchi on RTC X Roads offers the best value. Hotel Nizam on Madina Road is the local secret. Try at least two to compare.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Ramoji Film City worth visiting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but only if you dedicate a full day. It is the world's largest film studio complex spread over 1,666 acres. The guided tour takes 6-7 hours minimum. Book the premium package for the best experience. Skip it if you only have 2 days in Hyderabad.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I get around Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Hyderabad Metro covers most tourist areas between Miyapur and LB Nagar via Ameerpet. For the Old City, use auto-rickshaws or Ola/Uber. The metro does not reach Charminar yet, so you will need a cab from the nearest metro station at MGBS. Ramoji Film City requires a cab or their shuttle service.",
          },
        },
      ],
    },

    {
      "@type": "TouristDestination",
      "name": "Hyderabad, India",
      "description": "The City of Pearls and Nizams — known for its 400-year-old Charminar, Golconda Fort, legendary biryani, and a unique blend of Deccani, Mughal and modern culture.",
      "url": "https://incredibleitinerary.com/blog/hyderabad-3-days",
      "touristType": ["Heritage Tourism", "Cultural Tourism", "Culinary Tourism"],
    },
  ],
};

export default function HyderabadBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HyderabadClient />
    </>
  );
}
