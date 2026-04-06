import type { Metadata } from "next";
import BadrinathClient from "./BadrinathClient";

export const metadata: Metadata = {
  title: "Badrinath Temple Guide 2026: Darshan, Route & Tips",
  description:
    "Complete Badrinath Dham guide. Darshan timings, Mana village, Vasudhara Falls, registration, best time to visit. Final stop of Char Dham Yatra.",
  keywords: [
    "badrinath temple guide",
    "badrinath darshan timings",
    "badrinath 2026",
    "mana village india last village",
    "vasudhara falls badrinath",
    "tapt kund badrinath",
    "char dham yatra badrinath",
    "badrinath registration",
    "badrinath best time to visit",
    "badrinath helicopter",
    "joshimath badrinath",
    "badrinath temple uttarakhand",
  ],
  openGraph: {
    title: "Badrinath Temple Guide 2026: Darshan, Route & Tips",
    description:
      "Complete Badrinath Dham guide. Darshan timings, Mana village, Vasudhara Falls, registration, best time to visit. Final stop of Char Dham Yatra.",
    images: [
      {
        url: "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Himalayan mountain valley Badrinath Uttarakhand India",
      },
    ],
    type: "article",
    publishedTime: "2026-04-06T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Badrinath", "Char Dham", "Uttarakhand", "Pilgrimage", "Vishnu", "Himalaya"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Badrinath Temple Guide 2026: Darshan, Route & Tips",
    description:
      "Darshan timings, Tapt Kund bath, Mana village, Vasudhara Falls. Complete guide to the final and most important Char Dham.",
    images: [
      "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/badrinath-temple-guide",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/badrinath-temple-guide#article",
      "headline": "Badrinath Temple Guide 2026: Darshan, Route & Tips",
      "description":
        "Complete Badrinath Dham guide. Darshan timings, Mana village, Vasudhara Falls, registration, best time to visit. Final stop of Char Dham Yatra.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/badrinath-temple-guide",
      },
      "keywords":
        "badrinath temple, badrinath darshan timings, mana village, tapt kund, vasudhara falls, char dham yatra, uttarakhand pilgrimage",
      "articleSection": "Pilgrimage Guides",
      "inLanguage": "en-IN",
      "wordCount": 4500,
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
          "name": "Badrinath Temple Guide",
          "item": "https://www.incredibleitinerary.com/blog/badrinath-temple-guide",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Badrinath Temple, Uttarakhand, India",
      "description":
        "Badrinath is the most sacred of the four Char Dhams, situated at 3,133m in the Garhwal Himalayas. Dedicated to Lord Vishnu, it is one of the 108 Divya Desams and the final stop of the traditional Char Dham Yatra. The Mana village nearby is India's last village before the Tibet border.",
      "url": "https://www.incredibleitinerary.com/blog/badrinath-temple-guide",
      "touristType": [
        "Pilgrimage Tourism",
        "Spiritual Tourism",
        "Adventure Tourism",
        "Cultural Tourism",
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
      "name": "How do I reach Badrinath?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Badrinath is 298km from Rishikesh (8-9 hours by road via Devprayag, Rudraprayag, Joshimath). Shared taxis from Rishikesh cost ₹600-800 per person. The nearest railway station is Rishikesh; nearest airport is Jolly Grant, Dehradun (320km). Helicopter services operate from Phata and Sersi helipad near Rudraprayag (₹4,500-6,000 one way). The road is open from May to November only.",
      },
    },
    {
      "@type": "Question",
      "name": "What are the Badrinath temple darshan timings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Badrinath temple opens at 4:30am for Mahabhishek (special puja, ₹1,500). Regular darshan: 6am-12pm, then 3pm-9pm (timings change seasonally — confirm on arrival). The Brahma Muhurta darshan at 4:30am is the most auspicious. Book VIP darshan online through the Char Dham Devasthanam Board portal to skip queues. Free darshan may involve 2-4 hour waits in peak season.",
      },
    },
    {
      "@type": "Question",
      "name": "What is Mana Village and why should I visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mana, 3km from Badrinath temple, is India's last village before the Tibet border. It's also among the world's highest inhabited villages (3,200m). Visit the Bhim Pul (a massive natural rock bridge over the Saraswati river), Vyas Gufa (cave where sage Vyasa is said to have composed the Mahabharata), and Ganesh Gufa. The village has local women selling woollen crafts — perfect for authentic souvenirs. Auto from Badrinath: ₹20-30.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the Tapt Kund and should I take a dip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tapt Kund is a natural thermal spring just below the Badrinath temple with water at 45°C. Pilgrims traditionally bathe here before entering the temple for darshan — the hot sulphur water is believed to cure skin diseases and purify the body. It is considered mandatory for the complete Badrinath pilgrimage experience. Changing rooms are available. Entry is free.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the opening date for Badrinath 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Badrinath temple typically opens on Akshaya Tritiya (late April/early May) — the exact 2026 opening date will be announced by the Char Dham Devasthanam Board around February 2026. The temple closes around Diwali (October/November) when the idol is moved to Joshimath for winter. Check the official Char Dham portal for confirmed 2026 dates.",
      },
    },
  ],
};

export default function BadrinathTempleGuidePage() {
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
      <BadrinathClient faqData={faqLd.mainEntity} />
    </>
  );
}
