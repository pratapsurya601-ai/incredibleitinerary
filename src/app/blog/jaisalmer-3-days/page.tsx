import type { Metadata } from "next";
import JaisalmerClient from "./JaisalmerClient";

export const metadata: Metadata = {
  title: "Jaisalmer 3-Day Itinerary 2026: Trip Planner",
  description:
    "3 complete Jaisalmer plans — Budget, Desert Experience, Luxury Camp — with real timings, costs, and the insider tips that most guides skip.",
  keywords: [
    "jaisalmer itinerary 3 days",
    "jaisalmer travel guide 2026",
    "jaisalmer budget travel",
    "sam sand dunes jaisalmer",
    "jaisalmer fort living fort",
    "kuldhara ghost village",
    "desert camp jaisalmer",
    "jaisalmer trip planner",
  ],
  openGraph: {
    title: "Jaisalmer 3-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, insider tips. 3 complete plans for every type of traveller to the Golden City.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Jaisalmer Fort golden sandstone at sunset",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Jaisalmer", "Rajasthan", "India", "Travel", "Desert", "Itinerary"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaisalmer 3-Day Itinerary 2026: Trip Planner",
    description: "3 plans, real timings, actual costs, desert camp insider tips.",
    images: ["https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/jaisalmer-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/jaisalmer-3-days#article",
      "headline": "Jaisalmer in 3 Days: Golden City Itinerary (Budget to Luxury Camp, 2026)",
      "description": "3 complete Jaisalmer plans — Budget, Desert Experience, Luxury Camp — with real timings, costs, and the insider tips that most guides skip.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/jaisalmer-3-days",
      },
      "keywords": "jaisalmer itinerary, jaisalmer 3 days, jaisalmer fort, sam sand dunes, kuldhara ghost village, desert camp rajasthan",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4800,
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
          "name": "Jaisalmer in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/jaisalmer-3-days",
        },
      ],
    },

        {
      "@type": "TouristDestination",
      "name": "Jaisalmer, Rajasthan, India",
      "description": "The Golden City of India, known for its massive sandstone fort, ornate havelis, Thar Desert sand dunes, and living Rajasthani culture.",
      "url": "https://www.incredibleitinerary.com/blog/jaisalmer-3-days",
      "touristType": ["Desert Tourism", "Cultural Tourism", "Heritage Tourism"],
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
          "name": "How many days are enough for Jaisalmer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is the sweet spot for Jaisalmer. Day 1 for the fort and havelis, Day 2 for the desert safari and dunes, Day 3 for Kuldhara, Bada Bagh, and Gadisar Lake. Add a 4th day if you want to visit the Desert National Park at a relaxed pace.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Jaisalmer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to March is the best time to visit Jaisalmer. November to February offers the most comfortable desert weather at 10-25°C. Avoid April to September — daytime temperatures cross 45°C and the desert becomes unbearable. The Desert Festival in February is a bonus if you time it right.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Jaisalmer trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget travellers can do 3 days for under ₹7,000 including hostel stays and a basic desert camp. A mid-range desert experience costs ₹8,000-₹20,000 per person with a good Swiss tent camp. Luxury desert camps with private tents and gourmet dining start at ₹20,000 and go up to ₹50,000 per person for 3 days.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Sam Sand Dunes camel safari worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Sam Sand Dunes area is the most popular but also the most crowded and overpriced. For a more authentic desert experience at half the cost, book a camp at Khuri dunes — 40km from Jaisalmer with far fewer tourists. If you do go to Sam, book directly with a camp, not through a city tour operator who takes a 40-50% commission.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Jaisalmer Fort safe to visit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jaisalmer Fort is completely safe and is one of the few living forts in the world — thousands of people actually live inside it. The narrow lanes can be confusing but you cannot really get lost since the fort is not that large. Visit early morning or late afternoon to avoid the midday heat and tour groups.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Jaisalmer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The nearest airport is Jaisalmer Airport (JSA) with limited flights from Delhi and Jaipur. Most travellers take an overnight train from Jodhpur (5-6 hours) or Jaipur (11-12 hours). The Delhi-Jaisalmer Express is the most popular route. From Jodhpur, you can also drive — it's about 285km, roughly 5 hours by road.",
          },
        },
      ],
};

export default function JaisalmerBlogPage() {
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
      <JaisalmerClient />
    </>
  );
}
