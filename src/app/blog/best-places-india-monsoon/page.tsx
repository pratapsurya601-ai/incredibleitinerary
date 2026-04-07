import type { Metadata } from "next";
import BestMonsoonClient from "./BestMonsoonClient";

export const metadata: Metadata = {
  title: "Best Places to Visit in India in Monsoon (July-August 2026)",
  description:
    "Where to go in India during monsoon — Ladakh, Spiti, Kashmir, Meghalaya, Coorg, Kerala. Real breakdown of what stays dry, what gets beautiful in rain, and what to avoid completely.",
  keywords: [
    "best places india monsoon",
    "india travel july august",
    "ladakh monsoon",
    "meghalaya monsoon",
    "india rainy season travel",
    "where to go india july",
    "monsoon travel india",
    "rain shadow india",
    "coorg monsoon",
    "kashmir july august",
  ],
  openGraph: {
    title: "Best Places to Visit in India in Monsoon (July-August 2026)",
    description:
      "Ladakh stays dry, Meghalaya gets spectacular, Kashmir turns green. Honest guide to India in monsoon — where to go, where to avoid, and why rain shadow is your best friend.",
    images: [
      {
        url: "/images/blog/india-monsoon-travel.jpg",
        width: 1200,
        height: 630,
        alt: "Leh Ladakh India monsoon blue sky dry landscape July August",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Places to Visit in India in Monsoon (July-August 2026)",
    description:
      "Ladakh stays dry, Meghalaya gets spectacular, Kashmir turns green. Honest monsoon guide to India.",
    images: ["/images/blog/india-monsoon-travel.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/best-places-india-monsoon",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Places to Visit in India in Monsoon (July-August 2026)",
      "description":
        "Where to go in India during monsoon — Ladakh, Spiti, Kashmir, Meghalaya, Coorg. Real breakdown of rain shadow zones, beautiful-in-rain destinations, and what to avoid.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/india-monsoon-travel.jpg",
      },
      "datePublished": "2026-04-07T00:00:00Z",
      "dateModified": "2026-04-07T00:00:00Z",
      "author": {
        "@type": "Person",
        "name": "Surya Pratap",
        "url": "https://www.incredibleitinerary.com/about",
      },
      "publisher": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://www.incredibleitinerary.com",
      },
      "keywords": "india monsoon travel, ladakh july august, meghalaya monsoon, coorg monsoon, rain shadow india",
      "wordCount": 3200,
      "articleSection": "Travel Planning",
      "inLanguage": "en-IN",
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
          "name": "Best Places India Monsoon",
          "item": "https://www.incredibleitinerary.com/blog/best-places-india-monsoon",
        },
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
      "name": "Where should I travel in India in July and August?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Leh-Ladakh and Spiti Valley are the standout answers — both are in rain shadow zones that stay dry during the southwest monsoon, are at peak accessibility in July-August, and have blue skies while the rest of India is getting rained on. Meghalaya is the opposite answer — it's spectacular in monsoon because the waterfalls and living root bridges are at full glory. Kashmir is also excellent — lush green, manageable rain, comfortable temperatures.",
      },
    },
    {
      "@type": "Question",
      "name": "What is a rain shadow zone and why does it matter for monsoon travel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A rain shadow zone is an area shielded from rainfall by a mountain range. The Himalayas block the southwest monsoon from reaching Ladakh and Spiti — these areas sit to the north and east of the range and receive almost no rain. This is why Leh-Ladakh is sunny and dry in July-August while Mumbai is getting 500mm of rain. Knowing rain shadow zones is the key to planning a successful monsoon trip in India.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Meghalaya worth visiting in monsoon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — for certain travellers, Meghalaya in monsoon is the single best travel experience in India. The living root bridges are surrounded by roaring waterfalls, the double-decker root bridge at Nongriat is surrounded by lush jungle, and Mawsmai Cave has streams flowing through it. Cherrapunji's Seven Sisters Falls (Nohsngithiang) is only impressive in monsoon. That said, it's not for everyone — you will get wet, trails are slippery, leeches exist, and some access roads flood.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I drive to Ladakh in July and August?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — July-August is peak season for the Manali-Leh and Srinagar-Leh highways. Both are fully open, all high passes are accessible, and you can drive to Nubra Valley (Khardung La), Pangong Lake (Chang La), and Tso Moriri. The roads are maintained by BRO and are generally in good condition. July-August is actually the best time for the Manali-Leh drive — Rohtang Pass is clear, Baralacha La and Tanglang La are accessible.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Goa worth visiting in monsoon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends entirely on what you want. Beach Goa is closed — rough seas, closed shacks, no swimming. But cultural Goa is excellent: Old Goa's Portuguese churches in monsoon mist are atmospheric, Dudhsagar Falls (only accessible July-September) is India's most spectacular waterfall at full flow, and prices drop 50-70%. Go to Goa in monsoon for culture, waterfalls, and cheap eats at local places — not for beaches.",
      },
    },
    {
      "@type": "Question",
      "name": "What are the worst places to visit in India during monsoon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rajasthan (roads flood, Jaisalmer loses its desert logic in rain), Andaman (rough seas, poor diving visibility), Kerala backwaters (heavy rain, rough sea makes houseboat unpleasant), most Himalayan mountain roads except Ladakh-Spiti (landslide risk on Rohtang, NH3, NH58), and any destination whose main appeal is beaches (Goa, Varkala, Kovalam, Puri).",
      },
    },
  ],
};

export default function BestPlacesIndiaMonsoonPage() {
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
      <BestMonsoonClient />
    </>
  );
}
