import type { Metadata } from "next";
import WayanadClient from "./WayanadClient";

export const metadata: Metadata = {
  title: "Wayanad 3 Days: Waterfalls, Wildlife & Tea Estates (Complete Guide)",
  description:
    "Complete 3-day Wayanad itinerary — Chembra Peak, Soochipara Falls, Edakkal Caves, Muthanga Wildlife Sanctuary, Banasura Sagar Dam, budget from ₹2,500/day. Kerala's most underrated hill district.",
  keywords: [
    "wayanad 3 days itinerary",
    "wayanad travel guide 2026",
    "chembra peak heart shaped lake",
    "soochipara falls wayanad",
    "edakkal caves neolithic",
    "muthanga wildlife sanctuary safari",
    "banasura sagar dam",
    "wayanad budget travel",
    "wayanad kerala hill station",
    "wayanad trekking guide",
  ],
  openGraph: {
    title: "Wayanad 3 Days: Waterfalls, Wildlife & Tea Estates (Complete Guide)",
    description:
      "Complete 3-day Wayanad itinerary — Chembra Peak heart lake, Edakkal Caves petroglyphs, jungle safari, waterfalls. Real costs from ₹2,500/day.",
    images: [
      {
        url: "/images/blog/wayanad-chembra-peak.jpg",
        width: 1200,
        height: 630,
        alt: "Chembra Peak heart-shaped lake Wayanad Kerala",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["https://www.incredibleitinerary.com/about"],
    tags: ["Wayanad", "Kerala", "India", "Trekking", "Wildlife", "Hill Station"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wayanad 3 Days: Waterfalls, Wildlife & Tea Estates (Complete Guide)",
    description: "Chembra Peak heart lake, neolithic caves, jungle safari, waterfalls. 3-day Wayanad guide.",
    images: ["/images/blog/wayanad-chembra-peak.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/wayanad-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/wayanad-3-days#article",
      "headline": "Wayanad 3 Days: Waterfalls, Wildlife & Tea Estates (Complete Guide)",
      "description": "Complete 3-day Wayanad itinerary — Chembra Peak, Soochipara Falls, Edakkal Caves, Muthanga Wildlife Sanctuary, Banasura Sagar Dam, budget from ₹2,500/day. Kerala's most underrated hill district.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/wayanad-chembra-peak.jpg",
        "width": 1200,
        "height": 630,
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
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.incredibleitinerary.com/logo.png",
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.incredibleitinerary.com/blog/wayanad-3-days",
      },
      "keywords": "wayanad itinerary, wayanad 3 days, chembra peak, edakkal caves, muthanga safari, soochipara falls, banasura sagar dam, wayanad travel guide",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5000,
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
          "name": "Wayanad 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/wayanad-3-days",
        },
      ],
    },

    {
      "@type": "TouristDestination",
      "name": "Wayanad, Kerala, India",
      "description": "Kerala's most underrated hill district — 900–2,100m in the Western Ghats, with neolithic cave petroglyphs, India's largest earthen dam, heart-shaped lake trekking, wildlife safaris, and three-tiered waterfalls.",
      "url": "https://www.incredibleitinerary.com/blog/wayanad-3-days",
      "touristType": ["Nature Tourism", "Adventure Tourism", "Wildlife Tourism", "Trekking"],
    },
  ],
};

// FAQPage schema — separate block (must NOT be inside @graph with Article)
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many days are enough for Wayanad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "3 days is ideal to cover Chembra Peak trek, Edakkal Caves, Soochipara Falls, Muthanga Wildlife Sanctuary safari, and Banasura Sagar Dam. 2 days works if you skip the Chembra trek. 4–5 days lets you add Meenmutty Falls, Thirunelli Temple, and spice plantation tours at a relaxed pace.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit Wayanad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "October to May is the best time to visit Wayanad. October–February offers the clearest skies and driest trails, with comfortable temperatures of 15–25°C. March–May is warmer but still manageable. June–September brings heavy monsoon — many treks including Chembra Peak close officially, leeches are everywhere on trails, and roads can be slippery.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does a 3-day Wayanad trip cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Budget travellers can do 3 days in Wayanad for ₹7,500–₹10,500 (₹2,500–₹3,500/day) including homestay, meals, entry fees and Chembra permit. Mid-range with a resort runs ₹15,000–₹24,000 for three days. Muthanga safari costs ₹1,500–₹2,000 per vehicle and should be booked in advance.",
      },
    },
    {
      "@type": "Question",
      "name": "Is the Chembra Peak trek difficult?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chembra Peak trek is moderate difficulty. The trail to the heart-shaped lake (Hridaya Thadakam) at 1,800m is about 4km one way with steep sections — most people reach the lake in 2–3 hours. A Forest Department guide is mandatory (₹500), and a permit of ₹250 is required. Start by 7am to complete the round trip before noon heat. The full summit at 2,100m is harder and requires more fitness.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I reach Wayanad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The nearest airport is Calicut (Kozhikode) at 75km — about 2 hours by road through the Thamarassery Ghat. From Mysore it is 120km (2.5 hours). From Ooty it is 97km (2.5 hours). There is no direct train to Wayanad — KSRTC buses run from Kozhikode, Mysore, and Ooty to Kalpetta. Kalpetta is the main town and best base for the district.",
      },
    },
    {
      "@type": "Question",
      "name": "What are the Edakkal Caves and why are they significant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Edakkal Caves are two natural rock shelter caves in Wayanad containing neolithic petroglyphs (rock engravings) estimated to be 6,000+ years old. The carvings include human figures, animals, and symbols that are among the oldest evidence of human settlement in South India. Entry is ₹60 for Indians and ₹300 for foreign nationals. The caves are a 1km uphill walk from the base. Arrive before 2pm as they close at 5pm.",
      },
    },
  ],
};

export default function WayanadBlogPage() {
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
      <WayanadClient />
    </>
  );
}
