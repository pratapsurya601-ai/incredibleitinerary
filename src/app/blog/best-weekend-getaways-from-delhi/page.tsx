import type { Metadata } from "next";
import DelhiGetawaysClient from "./DelhiGetawaysClient";

export const metadata: Metadata = {
  title: "20 Best Weekend Getaways from Delhi (2026): Hills, Temples & Desert",
  description:
    "Every weekend trip worth making from Delhi — 20 destinations sorted by drive time with honest assessments. Agra at 3hrs, Jaipur at 4.5hrs, Rishikesh at 5hrs, Shimla at 7hrs. Which ones to skip, best seasons, and where to stay.",
  keywords: [
    "weekend getaways from delhi",
    "places to visit near delhi",
    "delhi weekend trip",
    "short trips from delhi",
    "places near delhi for weekend",
    "delhi to jaipur weekend",
    "delhi to rishikesh trip",
    "delhi to shimla trip",
    "north india weekend trips",
    "road trips from delhi",
  ],
  openGraph: {
    title: "20 Best Weekend Getaways from Delhi (2026)",
    description: "From Agra at 3hrs to Spiti at 14hrs — every Delhi weekend trip sorted by distance with drive times, best months, and honest verdicts.",
    images: [{ url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80", width: 1200, height: 630, alt: "Rishikesh Ganga river bridge weekend trip from Delhi Uttarakhand" }],
    type: "article", publishedTime: "2026-04-07T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "20 Best Weekend Getaways from Delhi (2026)",
    description: "Every Delhi weekend trip sorted by drive time — Agra, Jaipur, Rishikesh, Shimla, Jim Corbett and more.",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/best-weekend-getaways-from-delhi" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "20 Best Weekend Getaways from Delhi (2026)",
      "description": "Complete guide to weekend trips from Delhi — 20 destinations sorted by drive time with honest assessments, best seasons, and accommodation.",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80" },
      "datePublished": "2026-04-07T00:00:00Z",
      "dateModified": "2026-04-07T00:00:00Z",
      "author": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com" },
      "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com" },
      "keywords": "delhi weekend trips, agra jaipur rishikesh shimla jim corbett manali, north india getaways",
      "wordCount": 3600,
      "articleSection": "Weekend Trips",
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Weekend Getaways from Delhi", "item": "https://www.incredibleitinerary.com/blog/best-weekend-getaways-from-delhi" },
      ],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best weekend trip from Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For history: Agra (3hrs, Taj Mahal). For royalty: Jaipur (4.5hrs). For nature + yoga: Rishikesh (5hrs). For mountains: Shimla (7hrs). The best all-round weekend trip from Delhi is Rishikesh — river rafting, yoga, evening aarti at Triveni Ghat, and genuinely beautiful Ganga scenery. For a purely historical trip, Agra + Mathura as a loop is the most efficient.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I do Agra as a day trip from Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — Agra is the classic Delhi day trip. Yamuna Expressway is 165km, takes 2.5–3 hours. Leave by 5:30am, be at Taj Mahal for sunrise, see Agra Fort by 11am, have lunch at Pind Baluchi, and be back in Delhi by 7pm. Train option: Gatimaan Express from Hazrat Nizamuddin (100 min), book 4–6 weeks ahead.",
      },
    },
    {
      "@type": "Question",
      "name": "How far is Rishikesh from Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rishikesh is 240km from Delhi — approximately 5–6 hours by road via NH58 through Haridwar. The road is well-maintained through Meerut and Muzaffarnagar, then winds along the Ganga foothills. Volvo buses from ISBT Kashmiri Gate run nightly (₹500–900). Train: Delhi to Haridwar (then 20km cab to Rishikesh) — Shatabdi is fastest at 4.5 hours.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best hill station near Delhi for a weekend trip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a proper weekend: Shimla (380km, 7hrs) is the classic but can be crowded. Mussoorie (290km, 5.5hrs) is less commercial and easier from Delhi. Lansdowne (250km, 5hrs) is underrated — very quiet army cantonment town with good views and almost no tourist infrastructure. Chakrata (330km, 6hrs) is for serious trekkers. Kasol (520km, 10hrs) is best as an overnight bus trip.",
      },
    },
  ],
};

export default function DelhiGetawaysPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <DelhiGetawaysClient />
    </>
  );
}
