import type { Metadata } from "next";
import HimachalCircuitClient from "./HimachalCircuitClient";

export const metadata: Metadata = {
  title: "Himachal Pradesh 14 Days: Shimla → Manali → Kasol → Dharamshala → Spiti (2026)",
  description:
    "Complete Himachal circuit in 14 days — Shimla Toy Train, Old Manali, Kheerganga trek, Dharamshala monasteries, Spiti Valley. Real costs and route logic.",
  keywords: [
    "himachal pradesh itinerary 14 days",
    "himachal pradesh complete circuit",
    "shimla manali kasol dharamshala spiti",
    "himachal road trip",
    "himachal pradesh travel guide 2026",
    "best of himachal pradesh",
    "himachal pradesh budget trip",
    "hill station circuit india",
  ],
  openGraph: {
    title: "Himachal Pradesh 14 Days: Shimla → Manali → Kasol → Dharamshala → Spiti (2026)",
    description: "6 regions, 14 days, 1 mountain state — the complete Himachal circuit with real costs.",
    images: [{ url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80", width: 1200, height: 630, alt: "Himachal Pradesh mountains and valleys" }],
    type: "article",
    publishedTime: "2026-04-09T00:00:00Z",
    authors: ["Surya Pratap"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himachal Pradesh 14 Days: Complete Mountain Circuit (2026)",
    description: "Shimla → Jibhi → Manali → Kasol → Dharamshala → Bir Billing → Spiti Valley.",
    images: ["https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/himachal-pradesh-14-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Himachal Pradesh in 14 Days: The Complete Mountain Circuit (2026)",
      description: "Complete Himachal Pradesh circuit — Shimla, Jibhi/Tirthan, Manali, Kasol/Kheerganga, Dharamshala, Bir Billing, Spiti Valley. 14 days, real costs, route logic.",
      image: { "@type": "ImageObject", url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80" },
      datePublished: "2026-04-09T00:00:00Z",
      dateModified: "2026-04-09T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      keywords: "Himachal Pradesh, 14 days, Shimla, Manali, Kasol, Dharamshala, Spiti Valley, Kheerganga",
      articleSection: "Travel Guides",
      inLanguage: "en-IN",
      wordCount: 9000,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Himachal Pradesh 14 Days", item: "https://www.incredibleitinerary.com/blog/himachal-pradesh-14-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Himachal Pradesh, India",
      description: "A 14-day circuit through India's most diverse mountain state — colonial hill stations, hidden valleys, Himalayan treks, Tibetan monasteries, paragliding, and a cold desert at 4,500m.",
      url: "https://www.incredibleitinerary.com/blog/himachal-pradesh-14-days",
      touristType: ["Adventure Tourism", "Hill Station", "Trekking", "Cultural Tourism", "Road Trip"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many days do you need for Himachal Pradesh?", acceptedAnswer: { "@type": "Answer", text: "14 days covers the complete circuit: Shimla, Jibhi/Tirthan Valley, Manali, Kasol/Kheerganga, Dharamshala, and Bir Billing. Add 7 more days for Spiti Valley (June–October only). 7 days covers 2–3 regions comfortably." } },
    { "@type": "Question", name: "What is the best time to visit Himachal Pradesh?", acceptedAnswer: { "@type": "Answer", text: "March–June for pleasant weather and snow on passes. September–November for clear skies and trekking. December–February for snow sports. Avoid July–August (heavy monsoon rain, landslides). Spiti Valley is only accessible June–October." } },
    { "@type": "Question", name: "How much does a 14-day Himachal trip cost?", acceptedAnswer: { "@type": "Answer", text: "Budget: ₹20,000–₹35,000 per person (buses, hostels, dhabas). Mid-range: ₹50,000–₹80,000 (private car for some legs, 3-star hotels). Premium: ₹1,00,000+ (private car throughout, boutique stays). Overnight Volvo buses from Delhi cost ₹800–₹1,500." } },
    { "@type": "Question", name: "Can I do Himachal by public transport?", acceptedAnswer: { "@type": "Answer", text: "Yes — HRTC government buses connect all major towns cheaply. The Kalka–Shimla Toy Train is UNESCO-listed. Manali, Dharamshala, and Kasol all have direct overnight Volvo buses from Delhi. Only Spiti Valley is difficult without a private vehicle." } },
    { "@type": "Question", name: "Is Spiti Valley worth adding to the Himachal circuit?", acceptedAnswer: { "@type": "Answer", text: "Absolutely — but it needs 7 days minimum and is only accessible June–October. The Manali–Kaza route via Kunzum Pass (4,590m) is one of India's most dramatic drives. Key Monastery, Chandratal Lake, and Langza fossil village are extraordinary. Altitude sickness is real above 4,000m." } },
  ],
};

export default function HimachalCircuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <HimachalCircuitClient />
    </>
  );
}
