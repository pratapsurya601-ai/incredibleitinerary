import type { Metadata } from "next";
import NortheastCircuitClient from "./NortheastCircuitClient";

export const metadata: Metadata = {
  title: "Northeast India 10 Days: Shillong, Kaziranga, Majuli & Tawang (2026)",
  description:
    "The hardest circuit in India — Meghalaya's living root bridges, Kaziranga rhinos, Majuli river island, Tawang monastery. Real logistics, ILP permits, honest costs.",
  keywords: [
    "northeast india itinerary 10 days",
    "shillong cherrapunji",
    "kaziranga national park",
    "tawang monastery",
    "majuli island",
    "arunachal pradesh ilp permit",
    "northeast india road trip",
  ],
  openGraph: {
    title: "Northeast India 10 Days: Shillong, Kaziranga, Majuli & Tawang (2026)",
    description: "Living root bridges, one-horned rhinos, river island monasteries, and India's largest monastery.",
    images: [{ url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", width: 1200, height: 630, alt: "Northeast India mountains mist valley" }],
    type: "article",
    publishedTime: "2026-04-08T00:00:00Z",
    authors: ["Surya Pratap"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northeast India 10 Days: Shillong, Kaziranga, Majuli & Tawang (2026)",
    description: "Shillong → Cherrapunji → Kaziranga → Majuli → Tawang. The hard circuit.",
    images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/northeast-india-10-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Northeast India in 10 Days: Shillong, Kaziranga, Majuli & Tawang (2026)",
      description: "The hardest circuit in India — living root bridges, one-horned rhinos, Majuli river island, Tawang monastery. Real logistics, permits, costs.",
      image: { "@type": "ImageObject", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80" },
      datePublished: "2026-04-08T00:00:00Z",
      dateModified: "2026-04-08T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      keywords: "northeast india, shillong, cherrapunji, kaziranga, tawang, majuli, arunachal pradesh, meghalaya",
      articleSection: "Travel Guides",
      inLanguage: "en-IN",
      wordCount: 7500,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Northeast India 10 Days", item: "https://www.incredibleitinerary.com/blog/northeast-india-10-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Northeast India",
      description: "India's least-visited frontier — seven sister states with living root bridges, one-horned rhinos, river island monasteries and the second-largest Buddhist monastery in the world.",
      url: "https://www.incredibleitinerary.com/blog/northeast-india-10-days",
      touristType: ["Adventure Tourism", "Nature Tourism", "Cultural Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do I need a permit for Northeast India?", acceptedAnswer: { "@type": "Answer", text: "Arunachal Pradesh requires an Inner Line Permit (ILP) for all Indian citizens and a Protected Area Permit (PAP) for foreigners. Apply online at arunachalilp.com — ₹100 fee, 24–72 hour processing. Meghalaya and Assam do not require permits. Nagaland requires an ILP (apply at irlp.nagaland.gov.in or at Dimapur/Kohima entry checkpoints)." } },
    { "@type": "Question", name: "Is 10 days enough for Northeast India?", acceptedAnswer: { "@type": "Answer", text: "10 days is tight but covers Meghalaya (Shillong + Cherrapunji), Assam (Kaziranga + Majuli) and either Tawang (Arunachal, 2 long driving days) or Kohima + Dzukou Valley (Nagaland). You cannot do both Tawang and Nagaland in 10 days without exhausting yourself." } },
    { "@type": "Question", name: "How do I reach Northeast India?", acceptedAnswer: { "@type": "Answer", text: "Fly to Guwahati (Lokpriya Gopinath Bordoloi Airport) — daily flights from Delhi (2.5hrs), Kolkata (1.5hrs), Mumbai (3hrs), Bangalore (3.5hrs). Guwahati is the gateway to all Northeast states. By train: Rajdhani Express from Delhi (27hrs) or trains from Kolkata (18hrs)." } },
    { "@type": "Question", name: "What is the best time to visit Northeast India?", acceptedAnswer: { "@type": "Answer", text: "October to April is best. October–November: post-monsoon green, pleasant temperatures. December–February: cold in hills but clear skies, Kaziranga open. March–April: rhododendron blooms in Arunachal. May–September: heavy monsoon — many roads close, landslides common." } },
    { "@type": "Question", name: "Are the roads really that bad?", acceptedAnswer: { "@type": "Answer", text: "Yes. The Tezpur–Tawang road (Arunachal) takes 12–14 hours for 350km. Sela Pass (4,170m) can be blocked by snow. Many roads are single-lane with drop-offs. Guwahati–Shillong is good (3hrs, NH6). Kaziranga highway is decent. Plan for slow driving and bring motion sickness medication." } },
  ],
};

export default function NortheastIndiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <NortheastCircuitClient />
    </>
  );
}
