import type { Metadata } from "next";
import UjjainClient from "./UjjainClient";

export const metadata: Metadata = {
  title: "Ujjain in 2 Days: Mahakaleshwar Bhasma Aarti & Complete Guide (2026)",
  description:
    "2-day Ujjain itinerary — Mahakaleshwar Bhasma Aarti booking, Ram Ghat sunrise, Kal Bhairav temple, Kshipra boat ride, Kumbh Mela history and budget breakdown for 2026.",
  keywords: [
    "ujjain travel guide",
    "mahakaleshwar bhasma aarti booking",
    "ujjain itinerary 2 days",
    "ujjain kumbh mela",
    "ram ghat ujjain aarti",
  ],
  openGraph: {
    title: "Ujjain in 2 Days: Mahakaleshwar Bhasma Aarti & Complete Guide (2026)",
    description:
      "2-day Ujjain itinerary — Mahakaleshwar Bhasma Aarti booking, Ram Ghat sunrise, Kal Bhairav temple, Kshipra boat ride, Kumbh Mela history and budget breakdown for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1576467757232-fd5fc0e09f6c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Mahakaleshwar temple Ujjain at dawn",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Ujjain", "India", "Travel", "Itinerary", "Madhya Pradesh", "Mahakaleshwar"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ujjain in 2 Days: Mahakaleshwar Bhasma Aarti & Complete Guide (2026)",
    description:
      "Bhasma Aarti booking, Ram Ghat aarti, Kal Bhairav temple, Kshipra boat ride, budget breakdown.",
    images: [
      "https://images.unsplash.com/photo-1576467757232-fd5fc0e09f6c?w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/ujjain-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/ujjain-2-days#article",
      headline:
        "Ujjain in 2 Days: Mahakaleshwar Bhasma Aarti & Complete Guide (2026)",
      description:
        "2-day Ujjain itinerary — Mahakaleshwar Bhasma Aarti booking, Ram Ghat sunrise, Kal Bhairav temple, Kshipra boat ride, Kumbh Mela history and budget breakdown for 2026.",
      image: {
        "@type": "ImageObject",
        url: "https://images.unsplash.com/photo-1576467757232-fd5fc0e09f6c?w=1200&q=80",
        width: 1200,
        height: 630,
      },
      datePublished: "2026-04-07T00:00:00Z",
      dateModified: "2026-04-07T00:00:00Z",
      author: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.incredibleitinerary.com/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.incredibleitinerary.com/blog/ujjain-2-days",
      },
      keywords:
        "ujjain travel guide, mahakaleshwar bhasma aarti booking, ujjain itinerary 2 days, ujjain kumbh mela, ram ghat ujjain aarti",
      articleSection: "Travel Guides",
      inLanguage: "en-IN",
      wordCount: 3800,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ujjain in 2 Days",
          item: "https://www.incredibleitinerary.com/blog/ujjain-2-days",
        },
      ],
    },
  ],
};

// FAQPage schema — separate block
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How to book Mahakaleshwar Bhasma Aarti online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Go to mahakaleshwar.org.in → 'Darshan Booking' → select Bhasma Aarti (4 AM slot). It's free. Male devotees must wear a dhoti (available at the temple). The aarti is limited to ~200 people — it fills fast.",
      },
    },
    {
      "@type": "Question",
      name: "What is the significance of the Bhasma Aarti?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mahakaleshwar is the only Jyotirlinga where Shiva is worshipped in 'vama' form (south-facing) and is offered bhasma (sacred ash from funeral pyres). This ritual symbolizes that death is not the end — it's Shiva's cosmic dance.",
      },
    },
    {
      "@type": "Question",
      name: "Is Ujjain safe for solo female travelers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Ujjain is a pilgrimage city with a large police presence near all ghats and major temples. The Mahakal Lok corridor is well-lit and patrolled. The city is generally conservative — dress modestly.",
      },
    },
    {
      "@type": "Question",
      name: "Can I combine Ujjain and Indore in one trip?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Easily. Indore is 55 km (1 hr by road). The ideal combination: Day 1 Indore food tour (best street food in MP — Sarafa Bazaar, Chappan Dukan), Day 2–3 Ujjain. Or vice versa.",
      },
    },
    {
      "@type": "Question",
      name: "What are the 12 Jyotirlingas and why is Mahakaleshwar special?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 12 Jyotirlingas are Shiva's most sacred shrines across India. Mahakaleshwar is one of only two 'Swayambhu' (self-manifested) Jyotirlingas — the lingam was not installed by humans. It's also the only Jyotirlinga in the 'vama' (south-facing) form, considered uniquely powerful.",
      },
    },
  ],
};

export default function UjjainBlogPage() {
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
      <UjjainClient />
    </>
  );
}
