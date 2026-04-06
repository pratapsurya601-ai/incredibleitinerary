import type { Metadata } from "next";
import CorbettClient from "./CorbettClient";

export const metadata: Metadata = {
  title: "Jim Corbett 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Jim Corbett trip in 3 days. 3 complete Jim Corbett plans — Budget, Wildlife, Premium Lodge — with Dhikala zone booking tips, jeep vs canter.",
  keywords: [
    "jim corbett itinerary 3 days",
    "jim corbett safari booking",
    "dhikala zone corbett",
    "bijrani zone corbett",
    "jim corbett tiger safari",
    "corbett national park guide 2026",
    "jim corbett budget trip",
    "ramnagar corbett travel",
  ],
  openGraph: {
    title: "Jim Corbett 3-Day Itinerary 2026: Trip Planner",
    description:
      "Dhikala zone secrets, jeep vs canter, real budgets. 3 complete plans for every type of wildlife traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1561731216-c3a4d514e4b1?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Jim Corbett National Park tiger in forest",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Jim Corbett", "India", "Wildlife", "Safari", "Tiger"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jim Corbett 3-Day Itinerary 2026: Trip Planner",
    description: "3 plans, real costs, Dhikala booking secrets, zone comparison.",
    images: ["https://images.unsplash.com/photo-1561731216-c3a4d514e4b1?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/jim-corbett-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/jim-corbett-3-days#article",
      "headline": "Jim Corbett in 3 Days: Safari Zones, Tiger Sightings & Complete Itinerary (2026)",
      "description": "3 complete Jim Corbett plans — Budget, Wildlife, Premium Lodge — with Dhikala zone booking tips, jeep vs canter safari guide, and real costs.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1561731216-c3a4d514e4b1?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/jim-corbett-3-days",
      },
      "keywords": "jim corbett itinerary, corbett safari, dhikala zone, tiger safari india, bijrani zone",
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
          "name": "Jim Corbett 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/jim-corbett-3-days",
        },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Jim Corbett National Park, Uttarakhand, India",
      "description": "India's oldest national park, established in 1936, known for Bengal tigers, elephants, and diverse wildlife across the Ramganga River valley in the Himalayan foothills.",
      "url": "https://www.incredibleitinerary.com/blog/jim-corbett-3-days",
      "touristType": ["Wildlife Tourism", "Nature Tourism", "Adventure Tourism"],
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
          "name": "What is the best time to visit Jim Corbett National Park?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "November to June is the best time. The park is closed July to October for monsoon. November-February is excellent for birdwatching and cooler weather. March-June offers the best tiger sighting probability as animals come to waterholes in the dry heat.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I book a Dhikala zone safari in Corbett?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Book on the official Uttarakhand forest department portal (corbettonline.uk.gov.in) exactly 45 days in advance. Bookings open at midnight and sell out within minutes. Set an alarm, have your ID details ready, and use a fast internet connection.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a Jim Corbett safari cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A jeep safari costs ₹4,500-₹6,500 per vehicle (6 seats). A canter safari costs ₹1,500-₹2,000 per person (16-20 seats). Dhikala zone accommodation inside the park ranges from ₹1,500-₹5,000 per night. Budget trips start at ₹8,000 for 3 days.",
          },
        },
        {
          "@type": "Question",
          "name": "Which zone is best for tiger sighting in Jim Corbett?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dhikala zone has the highest tiger density and best grassland visibility, but requires advance booking and staying inside the park. Bijrani zone is the most popular alternative with good tiger sighting probability and easier access from Ramnagar. Jhirna zone is open year-round and good for elephants.",
          },
        },
        {
          "@type": "Question",
          "name": "Is jeep safari or canter safari better in Corbett?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jeep safari is significantly better for serious wildlife viewing — smaller group (6 people), more maneuverable, quieter, and can access narrower trails. Canter safari (16-20 people) is cheaper but noisier and less flexible. If budget allows, always choose jeep.",
          },
        },
        {
          "@type": "Question",
          "name": "How many days are enough for Jim Corbett?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is ideal for most visitors — enough for 2-3 safaris across different zones plus Corbett Falls and Garjia Temple. If you get a Dhikala booking, plan 4 days to include 2 nights inside the park. A single day trip from Delhi is not recommended as the drive is 6+ hours each way.",
          },
        },
      ],
};

export default function CorbettBlogPage() {
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
      <CorbettClient />
    </>
  );
}
