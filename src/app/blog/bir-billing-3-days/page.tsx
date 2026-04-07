import type { Metadata } from "next";
import BirBillingClient from "./BirBillingClient";

export const metadata: Metadata = {
  title: "Bir Billing 3 Days: Paragliding Capital of India (Complete Guide)",
  description:
    "Complete 3-day Bir Billing itinerary — tandem paragliding from Billing (2,400m), Tibetan Colony monasteries, Barot Valley, safety guide. Budget from ₹3,000/day including paragliding.",
  keywords: [
    "bir billing paragliding guide",
    "bir billing 3 days itinerary",
    "billing launch site himachal pradesh",
    "tandem paragliding bir billing cost",
    "bir tibetan colony monastery",
    "bir billing paragliding association",
    "barot valley himachal",
    "bir billing world paragliding championship",
    "himachal pradesh adventure travel",
    "bir billing budget trip",
  ],
  openGraph: {
    title: "Bir Billing 3 Days: Paragliding Capital of India (Complete Guide)",
    description:
      "Tandem flights from 2,400m, Tibetan monasteries, Barot Valley gorge. Real costs, safety guide, certified operators only. Budget from ₹3,000/day.",
    images: [
      {
        url: "/images/blog/bir-billing-paragliding.jpg",
        width: 1200,
        height: 630,
        alt: "Paraglider launching from Billing launch site over Himalayan valley Himachal Pradesh",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["https://www.incredibleitinerary.com/about"],
    tags: ["Bir Billing", "Himachal Pradesh", "India", "Paragliding", "Adventure", "Monasteries"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bir Billing 3 Days: Paragliding Capital of India (Complete Guide)",
    description: "Tandem paragliding from 2,400m, Tibetan Colony, Barot Valley. 3-day Bir Billing guide.",
    images: ["/images/blog/bir-billing-paragliding.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/bir-billing-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/bir-billing-3-days#article",
      "headline": "Bir Billing 3 Days: Paragliding Capital of India (Complete Guide)",
      "description": "Complete 3-day Bir Billing itinerary — tandem paragliding from Billing (2,400m), Tibetan Colony monasteries, Barot Valley. Budget from ₹3,000/day including paragliding.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/bir-billing-paragliding.jpg",
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
        "@id": "https://www.incredibleitinerary.com/blog/bir-billing-3-days",
      },
      "keywords": "bir billing paragliding, bir billing itinerary, billing launch site, tibetan colony bir, barot valley, himachal pradesh adventure",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5200,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Bir Billing 3 Days", "item": "https://www.incredibleitinerary.com/blog/bir-billing-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Bir Billing, Himachal Pradesh, India",
      "description": "The paragliding capital of India — Bir is the landing site at 1,400m, Billing is the launch site at 2,400m. Home to the World Paragliding Championship and a genuine Tibetan refugee colony with active monasteries.",
      "url": "https://www.incredibleitinerary.com/blog/bir-billing-3-days",
      "touristType": ["Adventure Tourism", "Cultural Tourism", "Nature Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does paragliding cost at Bir Billing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tandem paragliding at Bir Billing costs ₹2,500–₹3,500 for a standard 20–30 minute flight. A longer thermal ride of 45–60 minutes costs ₹4,500–₹6,000. GoPro rental is ₹500 extra. Always book through Bir Billing Paragliding Association certified pilots only.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit Bir Billing for paragliding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "March to June and September to November are the best months for paragliding at Bir Billing. July–August monsoon season brings dangerous landslides on the Billing road and unpredictable flying conditions. October is the peak season coinciding with the best thermals.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Bir Billing safe for paragliding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bir Billing is safe when you use certified pilots from the Bir Billing Paragliding Association (BBPA). Never book through WhatsApp strangers or unlicensed operators who use unserviced equipment. Check pilot BHPA certification. Cancel if wind exceeds 30km/h — ask the pilot directly.",
      },
    },
    {
      "@type": "Question",
      "name": "How far is Bir from Billing launch site?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bir (landing site, 1,400m) and Billing (launch site, 2,400m) are 14km apart on the same road. A shared taxi from Bir to Billing costs ₹300–₹400 one way and takes 40–50 minutes on a steep winding mountain road.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I reach Bir from Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bir is 530km from Delhi — approximately 10 hours by bus or car. HRTC deluxe buses run from ISBT Kashmere Gate to Baijnath (5km from Bir) overnight, arriving by 6–7am. The nearest railway station is Ahju (3km from Bir) on the narrow gauge Kangra Valley Railway from Pathankot.",
      },
    },
  ],
};

export default function BirBillingBlogPage() {
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
      <BirBillingClient />
    </>
  );
}
