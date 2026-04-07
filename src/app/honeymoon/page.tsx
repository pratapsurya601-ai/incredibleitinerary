import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Honeymoon Travel Guides India 2026 | Incredible Itinerary",
  description:
    "India's most detailed honeymoon destination guides — Kashmir, Kerala, Goa, Maldives, Bali and 600+ couple trip itineraries with real budgets, romantic hotels, and day-by-day plans.",
  keywords: [
    "honeymoon destinations India",
    "best honeymoon places India 2026",
    "honeymoon trip planner India",
    "Kerala honeymoon guide",
    "Kashmir honeymoon itinerary",
    "Goa honeymoon budget",
    "couple trip ideas India",
    "romantic getaways India",
  ],
  alternates: { canonical: "https://www.incredibleitinerary.com/honeymoon" },
  openGraph: {
    title: "Honeymoon Travel Guides India 2026 | Incredible Itinerary",
    description:
      "600+ couple trip guides — real budgets, romantic stays, and day-by-day itineraries for every honeymoon destination in India and beyond.",
    url: "https://www.incredibleitinerary.com/honeymoon",
    siteName: "Incredible Itinerary",
    images: [
      {
        url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Romantic honeymoon destination India couple travel",
      },
    ],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const DESTINATIONS = [
  {
    name: "Kashmir",
    tag: "Mountains & Lakes",
    emoji: "🏔️",
    slug: "kashmir-trip-cost-couple",
    image: "https://images.unsplash.com/photo-1566837497312-7be7830ae9b3?w=600&q=80",
    highlight: "Dal Lake houseboat nights",
  },
  {
    name: "Kerala",
    tag: "Backwaters & Beaches",
    emoji: "🌴",
    slug: "kerala-trip-cost-couple",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    highlight: "Private houseboat for two",
  },
  {
    name: "Goa",
    tag: "Beach & Sunsets",
    emoji: "🌅",
    slug: "goa-trip-cost-couple",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
    highlight: "South Goa's quietest beaches",
  },
  {
    name: "Rajasthan",
    tag: "Palaces & Desert",
    emoji: "🏯",
    slug: "rajasthan-trip-cost-couple",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
    highlight: "Heritage hotel candlelight dinners",
  },
  {
    name: "Manali",
    tag: "Snow & Mountains",
    emoji: "❄️",
    slug: "manali-trip-cost-couple",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    highlight: "Solang Valley snowfall",
  },
  {
    name: "Andaman",
    tag: "Islands & Diving",
    emoji: "🤿",
    slug: "andaman-trip-cost-couple",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80",
    highlight: "Radhanagar Beach at sunset",
  },
  {
    name: "Udaipur",
    tag: "City of Lakes",
    emoji: "🛶",
    slug: "udaipur-trip-cost-couple",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
    highlight: "Lake Pichola boat ride",
  },
  {
    name: "Coorg",
    tag: "Coffee & Mist",
    emoji: "☕",
    slug: "coorg-trip-cost-couple",
    image: "https://images.unsplash.com/photo-1544948503-7ad532b5cc6c?w=600&q=80",
    highlight: "Estate bungalow fireplace stays",
  },
];

const FAQS = [
  {
    q: "What is the best honeymoon destination in India?",
    a: "Kashmir, Kerala, and Goa consistently top the list. Kashmir offers Dal Lake houseboats and snow peaks. Kerala gives you private backwater houseboats and Ayurveda. Goa has beach resorts and sunsets. The best pick depends on your season — Kashmir (April–October), Kerala (September–March), Goa (November–February).",
  },
  {
    q: "How much does a honeymoon trip in India cost?",
    a: "Budget honeymoon (Goa, Coorg, Pondicherry): ₹20,000–40,000 for 5 nights including travel. Mid-range (Kashmir, Kerala, Rajasthan): ₹50,000–1,00,000 for 7 nights. Luxury (Maldives, Andaman, Heritage palaces): ₹1,50,000–3,00,000+. Our couple guides include exact costs for both budget and comfortable plans.",
  },
  {
    q: "Which is the best month for a honeymoon in India?",
    a: "October–March is ideal for most destinations (Kashmir excluded — best April–September). December–February is peak honeymoon season for Kerala backwaters, Goa beaches, and Rajasthan palaces. For snow, visit Manali or Shimla in January–February.",
  },
  {
    q: "How do I plan a honeymoon trip from scratch?",
    a: "Step 1: Pick season (weather determines destination). Step 2: Set budget (₹/person/day). Step 3: Choose destination type (beach, mountains, heritage). Step 4: Book accommodation first (romantic stays book out fast). Step 5: Use our day-by-day itineraries for each destination — each guide covers transfers, timing, and what to avoid.",
  },
];

export default function HoneymoonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Honeymoon Travel Guides India 2026",
    description:
      "600+ couple and honeymoon trip itineraries for India and international destinations with real budgets, romantic hotels, and day-by-day plans.",
    url: "https://www.incredibleitinerary.com/honeymoon",
    publisher: {
      "@type": "Organization",
      name: "Incredible Itinerary",
      url: "https://www.incredibleitinerary.com",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

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
      <Navbar />

      <main className="min-h-screen bg-cream">
        {/* ── HERO ── */}
        <section className="relative bg-ink overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink/80" />
          <div className="relative z-10 max-w-[860px] mx-auto px-6 py-28 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs tracking-[0.18em] uppercase text-white/70 mb-6">
              💑 Honeymoon & Couples Travel
            </div>
            <h1 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-light text-white leading-tight mb-4">
              Plan Your Perfect Honeymoon
            </h1>
            <p className="text-white/60 text-base font-light max-w-[520px] mx-auto leading-relaxed mb-10">
              600+ couple trip guides — real budgets, romantic stays, and
              day-by-day itineraries. No fluff. Just the trip you actually want.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/blog?mainTab=honeymoon"
                className="bg-gold text-ink text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-gold/90 transition-all"
              >
                Browse All Honeymoon Guides
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 border border-white/30 text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-white/20 transition-all"
              >
                Plan My Honeymoon Trip →
              </Link>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section className="bg-white border-b border-parchment-2">
          <div className="max-w-[1100px] mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "600+", label: "Couple Trip Guides" },
              { value: "40+", label: "Destinations Covered" },
              { value: "₹20k–3L", label: "All Budget Ranges" },
              { value: "Free", label: "No Paywall, Ever" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-serif text-2xl font-light text-gold">{value}</p>
                <p className="text-xs text-muted uppercase tracking-widest mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TOP DESTINATIONS ── */}
        <section className="max-w-[1180px] mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <span className="section-label">Top Picks</span>
            <h2 className="serif-title text-[clamp(1.8rem,3vw,2.6rem)] text-ink">
              Most Popular Honeymoon Destinations
            </h2>
            <p className="text-sm text-muted font-light mt-2">
              Curated for couples — with honest costs, romantic stays, and what to skip.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DESTINATIONS.map((dest) => (
              <Link
                key={dest.slug}
                href={`/blog/${dest.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-parchment-2 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={`${dest.name} honeymoon`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[0.65rem] tracking-wide uppercase px-2 py-1 rounded-full">
                      {dest.emoji} {dest.tag}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-light text-ink group-hover:text-gold transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-muted font-light mt-1 leading-snug">
                    ✨ {dest.highlight}
                  </p>
                  <span className="inline-block mt-3 text-xs text-gold-dark font-medium">
                    View couple guide →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/blog?mainTab=honeymoon"
              className="inline-flex items-center gap-2 border-2 border-ink text-ink text-sm font-medium px-8 py-3 rounded-full hover:bg-ink hover:text-white transition-all duration-200"
            >
              See all 600+ honeymoon guides ↗
            </Link>
          </div>
        </section>

        {/* ── WHY PLAN WITH US ── */}
        <section className="bg-parchment border-y border-parchment-2 py-16 px-6">
          <div className="max-w-[900px] mx-auto text-center mb-10">
            <span className="section-label">Why Couples Trust Us</span>
            <h2 className="serif-title text-[clamp(1.8rem,3vw,2.6rem)] text-ink">
              Honeymoon Planning, Done Right
            </h2>
          </div>
          <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💰",
                title: "Real Budgets for Couples",
                desc: "Every guide shows exact costs for two — accommodation, food, travel, and experiences. No vague estimates.",
              },
              {
                icon: "🗓️",
                title: "Day-by-Day Plans",
                desc: "Detailed itineraries with morning-to-night scheduling. You just follow the plan — no research required.",
              },
              {
                icon: "🏨",
                title: "Romantic Stay Picks",
                desc: "Budget guesthouses to palace hotels — honest reviews of where to stay for the most romantic experience.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-parchment-2 text-center">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-medium text-ink text-base mb-2">{title}</h3>
                <p className="text-sm text-muted font-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="max-w-[760px] mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <span className="section-label">Questions</span>
            <h2 className="serif-title text-[clamp(1.8rem,3vw,2.4rem)] text-ink">
              Honeymoon Planning FAQ
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                className="bg-white border border-parchment-2 rounded-2xl overflow-hidden group"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none hover:bg-parchment transition-colors">
                  <span className="font-medium text-sm text-ink pr-4">{q}</span>
                  <span className="text-amber-800 text-lg flex-shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-5 pt-1 border-t border-parchment-2">
                  <p className="text-sm text-muted font-light leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-ink py-16 px-6 text-center">
          <div className="max-w-[600px] mx-auto">
            <p className="text-white/50 text-xs tracking-[0.18em] uppercase mb-3">
              Want a custom plan?
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] font-light text-white mb-4">
              Let Us Plan Your Honeymoon
            </h2>
            <p className="text-white/55 text-sm font-light leading-relaxed mb-8 max-w-[420px] mx-auto">
              Tell us your dates, budget, and vibe — we&apos;ll send a personalised
              honeymoon itinerary within 24 hours. Free.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold text-ink text-sm font-semibold px-10 py-4 rounded-full hover:bg-gold/90 transition-all"
            >
              Plan My Honeymoon Trip →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
