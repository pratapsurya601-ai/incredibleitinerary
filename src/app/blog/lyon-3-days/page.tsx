import type { Metadata } from "next";
import LyonClient from "./LyonClient";

export const metadata: Metadata = {
  title: "Lyon in 3 Days: Gastronomic Capital Itinerary 2026 (Budget to Luxury)",
  description:
    "Lyon in 3 days — bouchon lunches, UNESCO Vieux-Lyon traboules, Beaujolais day trip, and why France's food capital beats Paris for value. Real prices, honest guide.",
  keywords: [
    "lyon itinerary 3 days",
    "lyon france travel guide 2026",
    "lyon food travel",
    "bouchon lyonnais guide",
    "vieux lyon guide",
    "france gastronomic travel",
  ],
  openGraph: {
    title: "Lyon in 3 Days: Gastronomic Capital Itinerary 2026 (Budget to Luxury)",
    description:
      "Bouchon lunches, UNESCO Vieux-Lyon traboules, Beaujolais day trip, and why Lyon beats Paris for value. Real prices, honest guide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1603384699007-e2c1e43b4f53?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Lyon France Vieux Lyon district and Fourvière Basilica at sunset",
      },
    ],
    type: "article",
    publishedTime: "2026-04-05T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Lyon", "France", "Travel", "Itinerary", "Europe", "Food Travel"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyon in 3 Days: The Only Guide You Need (2026)",
    description: "3 plans, bouchon lunches, Vieux-Lyon traboules, Beaujolais day trip. Real euro costs.",
    images: ["https://images.unsplash.com/photo-1603384699007-e2c1e43b4f53?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/lyon-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/lyon-3-days#article",
      headline: "Lyon in 3 Days: Gastronomic Capital Itinerary 2026 (Budget to Luxury)",
      description:
        "3 complete Lyon plans — Budget, Mid-Range, Luxury — with bouchon restaurant guide, Vieux-Lyon traboules, Beaujolais day trip, and real euro costs.",
      image: {
        "@type": "ImageObject",
        url: "https://images.unsplash.com/photo-1603384699007-e2c1e43b4f53?w=1200&q=80",
        width: 1200,
        height: 630,
      },
      datePublished: "2026-04-05T00:00:00Z",
      dateModified: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
        logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.incredibleitinerary.com/blog/lyon-3-days" },
      keywords:
        "lyon itinerary, lyon 3 days, bouchon lyonnais, vieux lyon, traboules, fourviere, beaujolais day trip, paul bocuse, lyon food",
      articleSection: "Travel Guides",
      inLanguage: "en",
      wordCount: 4900,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Lyon in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/lyon-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Lyon, France",
      description:
        "France's gastronomic capital, known for the bouchon lyonnais dining tradition, the UNESCO-listed Vieux-Lyon Renaissance old town, the Fourvière Basilica, the Les Halles Paul Bocuse market, and the Beaujolais wine region on its doorstep.",
      url: "https://www.incredibleitinerary.com/blog/lyon-3-days",
      touristType: ["Culinary Tourism", "Cultural Tourism", "Heritage Tourism", "Wine Tourism"],
    },
  ],
};

// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is Lyon the gastronomic capital of France?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lyon produced more great chefs than any other French city — Paul Bocuse trained here, the bouchon tradition dates to the 19th century mères lyonnaises who cooked for silk workers, and Les Halles Paul Bocuse is the finest indoor food market in France.",
      },
    },
    {
      "@type": "Question",
      name: "What is a bouchon lyonnais?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A traditional Lyonnais bistro serving hearty local cuisine: quenelles de brochet, saucisson chaud, andouillette, salade lyonnaise, and cervelle de canut. Wine is served in a pot lyonnais (46cl clay carafe). Informal, communal, and excellent value.",
      },
    },
    {
      "@type": "Question",
      name: "How many days do I need in Lyon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3 days is ideal — Vieux-Lyon and Fourvière on Day 1, Les Halles and museums on Day 2, Beaujolais or Pérouges day trip on Day 3. Two days is possible but rushed if you want to eat well.",
      },
    },
    {
      "@type": "Question",
      name: "Is Lyon safe for tourists?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Very safe. The historic areas of Vieux-Lyon, Presqu'île, and Fourvière are among the most pleasant urban environments in France. Standard city precautions apply on the metro.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best day trips from Lyon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pérouges medieval village (1 hour, €5–8 return) for atmosphere; Beaujolais wine region (40 min, €10 return) for wine; Annecy (2 hours, €25–35 return) for lakes; Vienne (30 min, €7 return) for Roman ruins. All accessible by public transport.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get from Paris to Lyon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TGV from Paris Gare de Lyon to Lyon Part-Dieu: exactly 2 hours, €20–60 depending on advance booking. Up to 20 daily departures. Book on sncf-connect.com at least 3 weeks ahead for the cheapest fares.",
      },
    },
  ],
};

export default function LyonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <LyonClient />
    </>
  );
}
