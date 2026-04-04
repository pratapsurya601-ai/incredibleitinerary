import type { Metadata } from "next";
import GoldenTriangleClient from "./GoldenTriangleClient";

export const metadata: Metadata = {
  title: "Golden Triangle in 7 Days: Delhi, Agra & Jaipur (The Only Guide You Need, 2026)",
  description:
    "The complete Golden Triangle itinerary — Delhi, Agra Taj Mahal & Jaipur. 4 plans, real budgets, Google Maps routes and the timing mistake that ruins most Taj Mahal visits.",
  keywords: [
    "golden triangle india itinerary",
    "delhi agra jaipur 7 days",
    "taj mahal visit guide 2026",
    "golden triangle budget travel",
    "golden triangle honeymoon",
    "delhi travel guide",
    "agra taj mahal tips",
    "jaipur amber fort",
    "india first trip itinerary",
  ],
  openGraph: {
    title: "Golden Triangle in 7 Days: Delhi, Agra & Jaipur (2026)",
    description: "Delhi · Agra · Jaipur — 4 plans, real budgets, Google Maps routes.",
    images: [{
      url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80",
      width: 1200, height: 630,
      alt: "Taj Mahal at sunrise Agra India",
    }],
    type: "article",
    publishedTime: "2026-03-21T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Triangle in 7 Days: Delhi, Agra & Jaipur (2026)",
    description: "Delhi, Agra, Jaipur — 4 plans, real budgets, Taj Mahal timing guide.",
    images: ["https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/golden-triangle-7-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/golden-triangle-7-days#article",
      "headline": "Golden Triangle in 7 Days: Delhi, Agra & Jaipur (2026)",
      "description": "Complete Golden Triangle itinerary — Delhi, Agra and Jaipur with 4 plans, real budgets, Google Maps routes and the Taj Mahal timing guide.",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80", "width": 1200, "height": 630 },
      "datePublished": "2026-03-21T00:00:00Z",
      "dateModified": "2026-03-21T00:00:00Z",
      "author": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com" },
      "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com" },
      "keywords": "golden triangle, delhi agra jaipur, taj mahal, india itinerary, amber fort jaipur",
      "wordCount": 6200,
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Golden Triangle 7 Days", "item": "https://www.incredibleitinerary.com/blog/golden-triangle-7-days" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question", "name": "How many days for the Golden Triangle?",
          "acceptedAnswer": { "@type": "Answer", "text": "7 days is ideal for the Golden Triangle — 2-3 days in Delhi, 1-2 days in Agra, and 2-3 days in Jaipur. 5 days is the minimum if you're short on time. 10 days lets you add Fatehpur Sikri, Mathura, Pushkar and a slower pace." }
        },
        {
          "@type": "Question", "name": "What is the best time to see the Taj Mahal?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sunrise is the best time — arrive 30 minutes before opening (6am in summer, 6:30am in winter). The Taj Mahal is empty, the light is pink-gold, and the marble glows. By 9am it's crowded. By 11am it's unbearably hot and very crowded. Book your entry ticket online the night before at asi.payumoney.com." }
        },
        {
          "@type": "Question", "name": "How much does the Golden Triangle cost?",
          "acceptedAnswer": { "@type": "Answer", "text": "A budget solo traveller can do 7 days for Rs.18,000-Rs.28,000 including accommodation, transport and entry fees. A couple on a mid-range trip should budget Rs.55,000-Rs.85,000 for two. A luxury trip with palace hotels costs Rs.2,00,000-Rs.5,00,000 for two." }
        },
        {
          "@type": "Question", "name": "Is Delhi safe for tourists?",
          "acceptedAnswer": { "@type": "Answer", "text": "Delhi is safe for tourists with basic precautions. Use Metro or pre-booked Ola/Uber — never negotiate with auto-rickshaw drivers at tourist spots. Keep your hotel card with you. Avoid isolated areas at night. The tourist areas (Connaught Place, Karol Bagh, South Delhi) are all safe and well-policed." }
        },
        {
          "@type": "Question", "name": "What is the best way to get from Delhi to Agra?",
          "acceptedAnswer": { "@type": "Answer", "text": "The Gatimaan Express is the best option — India's fastest train, Delhi to Agra in 1hr 40min (Rs.750 in Chair Car, Rs.1,505 in Executive). Book at irctc.co.in. Alternatively, the Shatabdi Express takes 2hrs. By road it's 3-4hrs depending on traffic. Never take a taxi from Delhi to Agra unless pre-booked — roadside touts will overcharge severely." }
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Golden Triangle, India",
      "description": "India's most famous tourist circuit connecting Delhi, Agra and Jaipur — encompassing the Taj Mahal, Amber Fort, Red Fort and some of the world's greatest Mughal and Rajput heritage.",
      "url": "https://www.incredibleitinerary.com/blog/golden-triangle-7-days",
    },
  ],
};

export default function GoldenTrianglePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GoldenTriangleClient />
    </>
  );
}
