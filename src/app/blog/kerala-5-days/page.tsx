import type { Metadata } from "next";
import KeralaClient from "./KeralaClient";

export const metadata: Metadata = {
  title: "Kerala in 5 Days: The Backwaters, Hills & Beach Guide (2026)",
  description:
    "The only Kerala itinerary you need — Kochi, Munnar, Alleppey backwaters and Varkala beach. 4 plans, real budgets, Google Maps routes.",
  keywords: [
    "kerala itinerary 5 days",
    "kerala travel guide 2026",
    "alleppey backwaters houseboat",
    "munnar tea gardens",
    "kochi fort cochin",
    "varkala beach kerala",
    "kerala budget travel",
    "kerala honeymoon trip",
  ],
  openGraph: {
    title: "Kerala in 5 Days: Backwaters, Hills & Beach (2026)",
    description: "Kochi · Munnar · Alleppey · Varkala — 4 plans, real budgets, Google Maps routes.",
    images: [{
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
      width: 1200, height: 630,
      alt: "Kerala backwaters houseboat",
    }],
    type: "article",
    publishedTime: "2026-03-21T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerala in 5 Days: Backwaters, Hills & Beach (2026)",
    description: "Kochi, Munnar, Alleppey backwaters, Varkala — 4 plans, real budgets.",
    images: ["https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80"],
  },
  alternates: { canonical: "https://incredibleitinerary.com/blog/kerala-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/kerala-5-days#article",
      "headline": "Kerala in 5 Days: The Backwaters, Hills & Beach Guide (2026)",
      "description": "Complete Kerala itinerary — Kochi, Munnar, Alleppey backwaters and Varkala beach with 4 plans, real budgets and Google Maps routes.",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80", "width": 1200, "height": 630 },
      "datePublished": "2026-03-21T00:00:00Z",
      "dateModified": "2026-03-21T00:00:00Z",
      "author": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://incredibleitinerary.com" },
      "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://incredibleitinerary.com" },
      "keywords": "kerala itinerary, kerala 5 days, alleppey backwaters, munnar tea gardens, varkala beach",
      "wordCount": 5800,
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",  "item": "https://incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog",  "item": "https://incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Kerala 5 Days", "item": "https://incredibleitinerary.com/blog/kerala-5-days" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question", "name": "How many days are enough for Kerala?",
          "acceptedAnswer": { "@type": "Answer", "text": "5 days is the minimum to cover the best of Kerala — Kochi, Munnar, and the Alleppey backwaters. 7 days lets you add Varkala beach. 10 days allows for Thekkady wildlife, Kovalam and a truly relaxed pace." }
        },
        {
          "@type": "Question", "name": "What is the best time to visit Kerala?",
          "acceptedAnswer": { "@type": "Answer", "text": "October to March is best. September–November is ideal — post-monsoon greenery is at its peak and prices are lower. December–January is peak season. The monsoon (June–August) is actually beautiful in Kerala's highlands but tough for beach travel." }
        },
        {
          "@type": "Question", "name": "How much does a Kerala houseboat cost?",
          "acceptedAnswer": { "@type": "Answer", "text": "A shared houseboat in Alleppey starts at Rs.3,500–Rs.5,000/person per night including all meals. A private houseboat for two costs Rs.8,000–Rs.15,000/night. A luxury private houseboat with AC rooms and chef costs Rs.20,000–Rs.40,000/night." }
        },
        {
          "@type": "Question", "name": "Is Kerala good for solo travellers?",
          "acceptedAnswer": { "@type": "Answer", "text": "Kerala is one of India's most solo-friendly states — high literacy, relatively safe, great public transport, and a well-developed backpacker circuit. The overnight train from Kochi to Varkala costs Rs.150 and is perfectly safe. Munnar has several good solo guesthouses." }
        },
        {
          "@type": "Question", "name": "What is Kerala famous for?",
          "acceptedAnswer": { "@type": "Answer", "text": "Kerala is famous for its backwater houseboat network (700km of interconnected lakes and canals), Munnar's tea gardens (the best in India), Ayurvedic wellness retreats, Kathakali dance, seafood, and some of India's most beautiful beaches at Varkala and Kovalam." }
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Kerala, India",
      "description": "India's southernmost coastal state — known as God's Own Country — famous for backwaters, tea gardens, spice plantations, Ayurveda and beaches.",
      "url": "https://incredibleitinerary.com/blog/kerala-5-days",
    },
  ],
};

export default function KeralaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <KeralaClient />
    </>
  );
}
