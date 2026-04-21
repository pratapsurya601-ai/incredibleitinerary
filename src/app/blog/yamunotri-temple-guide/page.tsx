import type { Metadata } from "next";
import YamunotriClient from "./YamunotriClient";

export const metadata: Metadata = {
  title: "Yamunotri Temple Guide (2026): Trek, Palki/Doli/Pony Rates + Weight Limits",
  description:
    "Complete 2026 Yamunotri Dham guide — 6km trek from Janki Chatti, Surya Kund hot spring, official palki/doli/pony rates with weight limits (up to 100 kg), Char Dham registration, helicopter costs.",
  keywords: [
    "yamunotri temple guide",
    "yamunotri trek",
    "janki chatti to yamunotri",
    "char dham yatra yamunotri",
    "yamunotri palki doli weight limit 2026",
    "yamunotri palki rates 2026",
    "yamunotri doli charges",
    "yamunotri pony rates",
    "yamunotri kandi rates",
    "yamunotri janki chatti pony dandi kandi rates 2026",
    "yamunotri hot springs",
    "surya kund yamunotri",
    "yamunotri registration 2026",
    "yamunotri best time to visit",
    "divya shila yamunotri",
    "yamunotri helicopter",
    "yamunotri dham uttarakhand",
  ],
  openGraph: {
    title: "Yamunotri Temple Guide (2026): Palki/Doli/Pony Rates + Weight Limits",
    description:
      "6km trek from Janki Chatti, Surya Kund hot spring, official palki/doli/pony rates, weight limits up to 100 kg, Char Dham 2026 registration, helicopter.",
    images: [
      {
        url: "https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Himalayan mountain landscape near Yamunotri Uttarakhand",
      },
    ],
    type: "article",
    publishedTime: "2026-04-06T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Yamunotri", "Char Dham", "Uttarakhand", "Pilgrimage", "Trek", "Himalaya"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yamunotri Guide (2026): Palki/Doli/Pony Rates + Weight Limits",
    description:
      "6km trek, Surya Kund hot spring, official 2026 palki/doli/pony rates & weight limits, Char Dham registration.",
    images: [
      "https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/yamunotri-temple-guide",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/yamunotri-temple-guide#article",
      "headline": "Yamunotri Temple Guide 2026: Trek, Route & Tips",
      "description":
        "Complete Yamunotri Dham guide. 6km trek from Janki Chatti, best time, registration, hot springs, prasad. First stop of Char Dham Yatra.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-06T00:00:00Z",
      "dateModified": "2026-04-06T00:00:00Z",
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
        "@id": "https://www.incredibleitinerary.com/blog/yamunotri-temple-guide",
      },
      "keywords":
        "yamunotri temple, yamunotri trek, janki chatti, char dham yatra, surya kund, divya shila, uttarakhand pilgrimage",
      "articleSection": "Pilgrimage Guides",
      "inLanguage": "en-IN",
      "wordCount": 4200,
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
          "name": "Yamunotri Temple Guide",
          "item": "https://www.incredibleitinerary.com/blog/yamunotri-temple-guide",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Yamunotri Temple, Uttarakhand, India",
      "description":
        "Yamunotri is the first of the four sacred Char Dhams, situated at 3,293m in the Garhwal Himalayas. It is the source of the Yamuna river and one of India's most revered pilgrimage sites, accessible via a 6km trek from Janki Chatti.",
      "url": "https://www.incredibleitinerary.com/blog/yamunotri-temple-guide",
      "touristType": [
        "Pilgrimage Tourism",
        "Adventure Tourism",
        "Spiritual Tourism",
        "Trek Tourism",
      ],
    },
  ],
};

// Separate FAQPage schema — must NOT be nested in @graph alongside Article
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I reach Yamunotri?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yamunotri is accessible via Janki Chatti, 221km from Rishikesh (6-7 hours by road). From Janki Chatti, trek 6km to the temple (2-3 hours one way). Shared jeeps from Rishikesh to Janki Chatti cost ₹400-600 per person. Helicopter service is also available from Kharsali (₹3,000-4,000 one way) during the Yatra season.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit Yamunotri?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yamunotri temple opens in late April/early May (Akshaya Tritiya) and closes on Diwali (October/November). May-June and September-October are the best months. July-August (monsoon) brings heavy rainfall and landslide risk — avoid if possible. The temple is completely closed in winter as it's buried under snow.",
      },
    },
    {
      "@type": "Question",
      "name": "Is the Yamunotri trek difficult?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 6km trek from Janki Chatti to Yamunotri temple is moderate — suitable for most people if you go at a steady pace. The altitude ranges from 2,650m to 3,293m. Ponies (₹700-900 one way) and dolis (palanquins, ₹2,500-3,500) are available for those unable to walk. Acclimatise in Rishikesh or Uttarkashi for a day before the trek.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the weight limit for Yamunotri palki, doli, pony and kandi in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2026 weight limits for Yamunotri Char Dham transport: Pony (ghoda) up to 85 kg rider weight at ₹700–900 one way. Kandi (back basket, for children only) up to 40 kg at ₹2,000–2,500. Doli (chair palanquin, 4 porters) up to 90 kg at ₹2,500–3,500. Palki (full palanquin, 4–6 porters) up to 100 kg at ₹4,500–6,000. Exceeding the weight limit adds a 20–30% surcharge. All operators must be registered with Uttarakhand Tourism.",
      },
    },
    {
      "@type": "Question",
      "name": "What are the 2026 palki doli pony rates from Janki Chatti to Yamunotri?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Official 2026 Janki Chatti to Yamunotri one-way rates: Pony ₹700–900, Kandi (for children) ₹2,000–2,500, Doli ₹2,500–3,500, Palki ₹4,500–6,000. Round-trip roughly 1.8× when booked together. Overweight surcharge 20–30%. Tipping ₹50–100 per porter is customary. Registration at registrationandtouristcare.uk.gov.in is mandatory for all Char Dham pilgrims.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the Divya Shila and why is it important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Divya Shila is a sacred rock pillar located just before the Yamunotri temple entrance. Pilgrims must first worship at the Divya Shila before entering the main temple to seek darshan of Goddess Yamuna. This is an important ritual that most guidebooks miss.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I cook rice in the Surya Kund hot spring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — this is one of Yamunotri's most unique experiences. The Surya Kund hot spring near the temple reaches temperatures of 88°C. Pilgrims traditionally cook rice and potatoes in cloth bags in the spring, offer it to the goddess, and take it home as prasad. Ask locals for the cloth bags (available nearby for ₹20-30).",
      },
    },
  ],
};

export default function YamunotriTempleGuidePage() {
  return (
    <>
      {/* Article + Breadcrumb + TouristDestination schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* FAQPage schema — separate block to avoid duplicate collision */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <YamunotriClient faqData={faqLd.mainEntity} />
    </>
  );
}
