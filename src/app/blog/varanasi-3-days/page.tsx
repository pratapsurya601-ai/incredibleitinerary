import type { Metadata } from "next";
import VaranasiClient from "./VaranasiClient";

export const metadata: Metadata = {
  title: "Varanasi in 3 Days: The Complete Guide (Ghats, Ganga Aarti & More, 2026)",
  description:
    "The complete Varanasi travel guide — Ganga Aarti, Kashi Vishwanath Temple, morning boat ride on the Ganges. What to expect, what shocks you and what stays with you forever.",
  keywords: [
    "varanasi itinerary 3 days", "varanasi travel guide 2026", "ganga aarti varanasi",
    "kashi vishwanath temple", "varanasi ghats guide", "sarnath day trip",
    "varanasi morning boat ride", "oldest city in world india",
  ],
  openGraph: {
    title: "Varanasi in 3 Days: Ghats, Ganga Aarti & Ganges Guide (2026)",
    description: "The most intense city in India — Dashashwamedh Ghat, Manikarnika, Sarnath, morning Ganges boat ride.",
    images: [{ url: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80", width: 1200, height: 630, alt: "Varanasi ghats Ganges river sunset" }],
    type: "article", publishedTime: "2026-03-21T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varanasi in 3 Days: Ghats, Ganga Aarti & More (2026)",
    description: "Dashashwamedh Ghat, Manikarnika, Sarnath, morning Ganges boat ride.",
    images: ["https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/varanasi-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Varanasi in 3 Days: Ghats, Ganga Aarti & Ganges Guide (2026)",
      "description": "Complete Varanasi travel guide with Ganga Aarti, morning boat ride, Kashi Vishwanath Temple and Sarnath day trip.",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80" },
      "datePublished": "2026-03-21T00:00:00Z",
      "dateModified": "2026-03-21T00:00:00Z",
      "author": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com" },
      "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com" },
      "keywords": "varanasi, ganga aarti, kashi vishwanath, varanasi ghats, sarnath, ganges boat ride",
      "wordCount": 5000,
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Travel Guides", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Varanasi in 3 Days", "item": "https://www.incredibleitinerary.com/blog/varanasi-3-days" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is Varanasi safe for tourists?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Varanasi is safe for tourists with normal precautions. The ghats are busy and well-populated at all hours. Watch your belongings in crowded areas. Avoid isolated alleys at night. The main tourist areas (ghats, Vishwanath Gali, Assi Ghat) are safe and well-patrolled." } },
        { "@type": "Question", "name": "What time is the Ganga Aarti in Varanasi?", "acceptedAnswer": { "@type": "Answer", "text": "The evening Ganga Aarti at Dashashwamedh Ghat happens at sunset — approximately 6:30pm in winter and 7pm in summer. Arrive 30–45 minutes early for a good spot. The ceremony lasts 45 minutes. There is also a smaller morning aarti at sunrise which is far less crowded." } },
        { "@type": "Question", "name": "How do I get to Varanasi?", "acceptedAnswer": { "@type": "Answer", "text": "By train: Varanasi Junction (BSB) has direct trains from Delhi (8–12hrs, Rs.500–Rs.1,500), Mumbai (22hrs) and Kolkata (12hrs). The Vande Bharat Express from Delhi is the fastest (8hrs). By air: Lal Bahadur Shastri International Airport (VNS) has flights from Delhi (1hr 20min), Mumbai (2hrs), Bangalore (2.5hrs)." } },
        { "@type": "Question", "name": "Should I see the burning ghats?", "acceptedAnswer": { "@type": "Answer", "text": "Manikarnika Ghat (the main burning ghat) is a significant part of Varanasi's identity — cremations have happened here continuously for over 3,000 years. You can observe respectfully from the steps or a boat on the river. Photography is strictly forbidden. Many visitors find it sobering but deeply moving rather than disturbing." } },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Varanasi, Uttar Pradesh, India",
      "description": "One of the oldest continuously inhabited cities in the world and the spiritual capital of India — known for the ghats along the Ganges, the evening Ganga Aarti, Kashi Vishwanath Temple and the nearby Buddhist pilgrimage site of Sarnath.",
      "url": "https://www.incredibleitinerary.com/blog/varanasi-3-days",
      "touristType": ["Spiritual Tourism", "Cultural Tourism", "Heritage Tourism"],
    },
  ],
};

export default function VaranasiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <VaranasiClient />
    </>
  );
}
