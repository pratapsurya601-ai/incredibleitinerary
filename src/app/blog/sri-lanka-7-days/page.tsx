import type { Metadata } from "next";
import SriLankaClient from "./SriLankaClient";

export const metadata: Metadata = {
  title: "Sri Lanka in 7 Days: Sigiriya, Kandy, Galle & the Scenic Tea Train (2026)",
  description: "Complete 7-day Sri Lanka itinerary covering Sigiriya Rock, Dambulla caves, Kandy tooth temple, the most scenic train in Asia, Galle Fort, and whale watching — real costs, ETA visa info.",
  keywords: [
    "sri lanka itinerary 7 days",
    "sri lanka travel guide 2026",
    "sigiriya rock fortress",
    "kandy ella scenic train",
    "galle fort sri lanka",
    "sri lanka budget travel",
    "do indians need visa for sri lanka",
  ],
  openGraph: {
    title: "Sri Lanka in 7 Days: Sigiriya, Tea Train & Galle Fort (2026)",
    description: "Lion Rock fortress at 6am, the most scenic train in Asia, stilt fishermen at dawn — complete Sri Lanka guide from $30/day.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Sri Lanka Sigiriya Lion Rock fortress above jungle at sunrise",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Lanka in 7 Days (2026)",
    description: "Sigiriya, Kandy, tea train, Galle Fort — real costs, ETA visa info, train booking tips.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/sri-lanka-7-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Sri Lanka in 7 Days: Sigiriya, Kandy, Galle & the Scenic Tea Train (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=1200&q=80",
      description:
        "7-day Sri Lanka itinerary covering Sigiriya Rock, Dambulla Cave Temple, Kandy Tooth Temple, the scenic hill country train, Galle Fort, and south coast beaches.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Sri Lanka 7 Days",
          item: "https://www.incredibleitinerary.com/blog/sri-lanka-7-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Sri Lanka",
      description:
        "Island nation off the southern tip of India with ancient Buddhist temples, colonial-era fortresses, scenic hill country train routes, and pristine Indian Ocean beaches.",
      touristType: ["Cultural tourists", "Beach travelers", "Wildlife enthusiasts", "History buffs", "Adventure travelers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 7.8731,
        longitude: 80.7718,
      },
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do Indians need an ETA visa for Sri Lanka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Indian passport holders require an Electronic Travel Authorization (ETA) to enter Sri Lanka. Apply at VisaOnline.gov.lk before your flight. Cost: $35 USD. Processing is usually within 24–48 hours. The ETA allows 30 days stay.",
      },
    },
    {
      "@type": "Question",
      name: "When is the best time to visit Sri Lanka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The west and south coasts (Colombo, Galle, Mirissa) are best December–April. The east coast (Trincomalee, Arugam Bay) is best May–September. The Cultural Triangle and Hill Country are accessible year-round.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book the Sri Lanka scenic train?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Go to raildna.com, search Kandy–Ella, and book second-class reserved ($4–$6) or first-class ($8–$15) seats 2–4 weeks ahead. Seats are limited, especially December–April.",
      },
    },
    {
      "@type": "Question",
      name: "Sri Lanka vs Maldives — which should I choose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sri Lanka offers culture, wildlife, temples, train journeys, and beaches for $30–150/day. The Maldives offers overwater villa seclusion with diving for $300–2,000+/day. Combine them: 7 days Sri Lanka then 5 days Maldives.",
      },
    },
    {
      "@type": "Question",
      name: "Is Sri Lanka safe to visit after the 2022 economic crisis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Tourism infrastructure is fully operational, fuel is available, and the political situation has stabilized. Travelers report normal conditions at all tourist destinations.",
      },
    },
    {
      "@type": "Question",
      name: "Is Pinnawala Elephant Orphanage ethical to visit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pinnawala has been criticized for chaining elephants and overcrowding. For ethical encounters, prefer wild elephant safaris at Minneriya or Udawalawe National Parks.",
      },
    },
  ],
};

export default function SriLankaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <SriLankaClient />
    </>
  );
}
