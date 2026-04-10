import type { Metadata } from "next";
import MalaysiaClient from "./MalaysiaClient";

export const metadata: Metadata = {
  title: "Malaysia in 7 Days: Complete Itinerary — KL, Penang & Langkawi (2026)",
  description:
    "7-day Malaysia itinerary for Indian travellers — visa-free entry, Petronas Towers, Penang street food, Langkawi beaches. Budget ₹3,500–6,000/day with real prices in MYR and ₹.",
  keywords: [
    "malaysia itinerary 7 days",
    "malaysia travel guide 2026",
    "kuala lumpur penang langkawi itinerary",
    "malaysia visa for indians",
    "malaysia budget travel india",
    "petronas towers guide",
    "penang hawker food",
  ],
  openGraph: {
    title: "Malaysia in 7 Days: KL, Penang & Langkawi 2026",
    description:
      "Visa-free for Indians, ₹3,500/day budget, Petronas Twin Towers, Penang street food & Langkawi duty-free beaches.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Petronas Twin Towers Kuala Lumpur Malaysia at night",
      },
    ],
    type: "article",
    publishedTime: "2026-04-06T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Malaysia", "Southeast Asia", "Travel", "Itinerary", "Kuala Lumpur"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malaysia in 7 Days: KL, Penang & Langkawi (2026)",
    description:
      "Visa-free for Indians. Hawker food, Petronas Towers, and Langkawi duty-free beaches.",
    images: ["https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/malaysia-7-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/malaysia-7-days#article",
      headline:
        "Malaysia in 7 Days: Complete Itinerary for Indian Travellers — KL, Penang & Langkawi 2026",
      description:
        "7-day Malaysia itinerary covering Kuala Lumpur, Penang, and Langkawi. Visa-free for Indians, real prices in MYR, Petronas Towers Skybridge, Penang street food and Langkawi cable car.",
      image: {
        "@type": "ImageObject",
        url: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=80",
        width: 1200,
        height: 630,
      },
      datePublished: "2026-04-06T00:00:00Z",
      dateModified: "2026-04-06T00:00:00Z",
      author: {
        "@type": "Person",
        name: "Surya Pratap",
        url: "https://www.incredibleitinerary.com/about",
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
        "@id": "https://www.incredibleitinerary.com/blog/malaysia-7-days",
      },
      keywords:
        "malaysia itinerary 7 days, kuala lumpur penang langkawi, petronas towers, penang hawker food, langkawi beaches, malaysia visa indians",
      articleSection: "Travel Guides",
      inLanguage: "en-IN",
      wordCount: 6200,
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
          name: "Travel Guides",
          item: "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Malaysia 7 Days",
          item: "https://www.incredibleitinerary.com/blog/malaysia-7-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Malaysia",
      description:
        "Southeast Asian country known for the Petronas Twin Towers in Kuala Lumpur, Penang's UNESCO-listed street food culture, and Langkawi's duty-free beach island.",
      url: "https://www.incredibleitinerary.com/blog/malaysia-7-days",
      touristType: ["Cultural Tourism", "Beach Tourism", "Food Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do Indians need a visa for Malaysia in 2025–2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indian passport holders receive 30-day visa-free entry to Malaysia as of 2024. No eNTRI or prior application needed. Arrive with a valid passport (6 months validity), confirmed return ticket and hotel bookings. Check imi.gov.my before travel for current status.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best time to visit Malaysia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "November to March is the best time for West Malaysia (KL, Penang, Langkawi) — drier with less rain. December–January is peak season. KL is viable year-round. Avoid Langkawi beach trips in May–September when rain increases.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a 7-day Malaysia trip cost from India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flights from India to KL cost Rs.8,000–18,000 return on AirAsia. On-ground budget: RM 200/day (Rs.3,600/day) = RM 1,400 for 7 days (Rs.25,200). Add inter-city flights KL–Penang–Langkawi RM 150–250. Total budget trip including flights: Rs.40,000–55,000.",
      },
    },
    {
      "@type": "Question",
      name: "Is Malaysia vegetarian-friendly for Indian tourists?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Very. Indian-Muslim mamak restaurants serve vegetarian roti canai, dal, and banana-leaf meals. Indian restaurants in Brickfields (KL) and Penang serve pure vegetarian South Indian food. Chinese Buddhist restaurants also serve mock-meat vegetarian options.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get from KL to Penang and Penang to Langkawi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KL to Penang: AirAsia flight (55 mins, RM 40–80 booked ahead) or bus from TBS bus station (4.5 hrs, RM 35). Penang to Langkawi: AirAsia flight (45 mins, RM 50–100) or ferry from Penang Jetty (3 hrs, RM 60).",
      },
    },
    {
      "@type": "Question",
      name: "Is Petronas Towers free to visit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The exterior of Petronas Twin Towers and KLCC Park are completely free. The Skybridge (41st floor) and Observation Deck (86th floor) cost RM 85 (approx Rs.1,530) and must be booked in advance at petronastwintowers.com.my — they sell out weeks ahead.",
      },
    },
  ],
};

export default function Malaysia7DaysPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <MalaysiaClient />
    </>
  );
}
