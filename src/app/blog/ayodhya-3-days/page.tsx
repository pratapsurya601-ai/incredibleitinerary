import type { Metadata } from "next";
import AyodhyaClient from "./AyodhyaClient";

export const metadata: Metadata = {
  title: "Ayodhya in 3 Days: Ram Mandir & Spiritual Itinerary (2026)",
  description:
    "Complete 3-day Ayodhya itinerary — Ram Mandir darshan, Saryu ghat aarti, Hanuman Garhi, Kanak Bhawan, hotels, travel tips and budget for 2026.",
  keywords: [
    "ayodhya travel guide",
    "ram mandir ayodhya",
    "ayodhya itinerary 3 days",
    "saryu ghat aarti",
    "ayodhya pilgrimage guide 2026",
  ],
  openGraph: {
    title: "Ayodhya in 3 Days: Ram Mandir & Spiritual Itinerary (2026)",
    description:
      "Complete 3-day Ayodhya itinerary — Ram Mandir darshan, Saryu ghat aarti, Hanuman Garhi, Kanak Bhawan, hotels, travel tips and budget for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1599030781658-4ad54a9d7261?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Ram Mandir Ayodhya temple spiritual pilgrimage",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Ayodhya", "India", "Travel", "Pilgrimage", "Ram Mandir", "Spiritual"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayodhya in 3 Days: Ram Mandir & Spiritual Itinerary (2026)",
    description:
      "Ram Mandir darshan, Saryu aarti, Hanuman Garhi — complete 3-day Ayodhya pilgrimage guide.",
    images: ["https://images.unsplash.com/photo-1599030781658-4ad54a9d7261?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/ayodhya-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/ayodhya-3-days#article",
      "headline": "Ayodhya in 3 Days: Ram Mandir & Spiritual Itinerary (2026)",
      "description":
        "Complete 3-day Ayodhya itinerary — Ram Mandir darshan, Saryu ghat aarti, Hanuman Garhi, Kanak Bhawan, hotels, travel tips and budget for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1599030781658-4ad54a9d7261?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-07T00:00:00Z",
      "dateModified": "2026-04-07T00:00:00Z",
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
        "@id": "https://www.incredibleitinerary.com/blog/ayodhya-3-days",
      },
      "keywords":
        "ayodhya travel guide, ram mandir ayodhya, ayodhya itinerary 3 days, saryu ghat aarti, ayodhya pilgrimage guide 2026",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4000,
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
          "name": "Ayodhya in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/ayodhya-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Ayodhya, Uttar Pradesh, India",
      "description":
        "The birthplace of Lord Ram, home to the newly built Ram Mandir, Saryu river ghats, Hanuman Garhi, and one of the most significant pilgrimage sites in Hinduism.",
      "url": "https://www.incredibleitinerary.com/blog/ayodhya-3-days",
      "touristType": ["Religious Tourism", "Pilgrimage Tourism", "Cultural Tourism", "Heritage Tourism"],
    },
  ],
};

// FAQPage schema — separate block
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Ram Mandir open for darshan in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — Ram Mandir is open daily 7 AM–11 PM with breaks for aarti. Online darshan slot booking at srjbtkshetra.up.gov.in is strongly recommended. Entry is free.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I reach Ayodhya from Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Best option: Vande Bharat Express (Lucknow–Ayodhya, 2 hrs from Lucknow) or Ayodhya Dham Express from Delhi (direct, 7–8 hrs). By road, NH27 from Lucknow takes 2 hrs.",
      },
    },
    {
      "@type": "Question",
      "name": "Can non-Hindus visit Ram Mandir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — Ram Mandir is open to all visitors regardless of religion. Dress modestly, follow the code of conduct, and respect the sanctity.",
      },
    },
    {
      "@type": "Question",
      "name": "What are Ayodhya's five must-visit temples?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "(1) Ram Mandir — new temple, (2) Hanuman Garhi — 76-step hilltop fortress, (3) Kanak Bhawan — ornate gold/silver interior, (4) Dashrath Mahal — King Dashrath's palace, (5) Nageshwarnath — oldest temple, established by Lord Ram's son Kush.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit Ayodhya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "October to March is ideal — cool weather, Ram Lila season, and Diwali (when 10 lakh diyas are lit on the ghats). Avoid May–June (extreme heat, 45°C+).",
      },
    },
  ],
};

export default function AyodhyaBlogPage() {
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
      <AyodhyaClient />
    </>
  );
}
