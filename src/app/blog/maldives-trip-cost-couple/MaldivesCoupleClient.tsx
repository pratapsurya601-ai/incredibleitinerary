"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import DestinationGallery from "@/components/blog/DestinationGallery";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import SmartImage from "@/components/ui/SmartImage";
import Breadcrumb from "@/components/blog/Breadcrumb";
import InlineCTA from "@/components/blog/InlineCTA";

const MALDIVES_TOC = [
  { id: "costs-overview",   emoji: "💰", label: "Cost Overview" },
  { id: "flights",          emoji: "✈️", label: "Flights from India" },
  { id: "resorts",          emoji: "🏨", label: "Resort Costs by Tier" },
  { id: "itinerary",        emoji: "📅", label: "7-Day Itinerary" },
  { id: "atolls",           emoji: "🏝️", label: "Best Atolls for Couples" },
  { id: "best-time",        emoji: "🌤️", label: "Best Time to Visit" },
  { id: "how-to-reach",     emoji: "🛫", label: "How to Reach" },
  { id: "packages",         emoji: "📦", label: "What&apos;s Included vs Extra" },
  { id: "top-resorts",      emoji: "⭐", label: "Top Resorts by Budget" },
  { id: "saving-tips",      emoji: "💡", label: "Money-Saving Tips" },
  { id: "faq",              emoji: "❓", label: "FAQ" },
];

function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      setP(Math.min(100, (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100));
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[300] h-1 bg-parchment-2">
      <div className="h-full bg-gold transition-all duration-100" style={{ width: `${p}%` }} />
    </div>
  );
}

function ShareBar() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      <a
        href={`mailto:?subject=Maldives Trip Cost for Couples from India&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`}
        className="bg-ink text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity"
      >
        Email
      </a>
      <a
        href={`https://x.com/intent/tweet?text=Maldives%20Trip%20Cost%20for%20Couples%20from%20India&url=${typeof window !== "undefined" ? window.location.href : ""}`}
        target="_blank" rel="noopener noreferrer"
        className="bg-[#1DA1F2] text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity"
      >
        Twitter
      </a>
      <button
        onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted"
      >
        {copied ? "✓ Copied" : "Copy Link"}
      </button>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="font-serif text-lg font-light text-ink">{value}</p>
      <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  );
}

function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors"
      >
        <div className="flex items-center gap-3 text-left">
          <span className="font-serif text-xl text-amber-900 font-light">{day}</span>
          <span className="text-sm text-ink font-medium">{title}</span>
        </div>
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-teal mt-1 flex-shrink-0 text-xs">●</span>{item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">💰</span>
            <span className="text-xs text-muted font-light">Est. cost: </span>
            <span className="text-xs font-medium text-ink">{cost}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function TipCard({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
  return (
    <div className={`rounded-xl p-5 border ${color}`}>
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0">{icon}</span>
        <div>
          <p className="font-medium text-sm text-stone-900 mb-1">{title}</p>
          <p className="text-xs text-gray-700 font-light leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-parchment-2">
          <p className="text-sm text-muted font-light leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function MaldivesCoupleClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Maldives" />

      <main className="bg-cream min-h-screen">

        {/* HERO */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&q=80"
            alt="Maldives overwater bungalow couple honeymoon turquoise water"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Maldives Trip Cost Couple</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-teal text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Honeymoon &amp; Couples</span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Maldives Trip Cost for Couple
                <em className="italic text-teal-300"> from India 2026</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[580px] leading-relaxed">
                Real prices. No fluff. From budget guesthouses at ₹80k/couple to overwater villas at ₹6L+ — flights from Delhi, Mumbai &amp; Bangalore, resort tiers, food, activities and visa fees all broken down.
              </p>
            </div>
          </div>
        </div>

        {/* ARTICLE */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Share + meta */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🏝️ Maldives</span><span>·</span><span>🗓 7 Days</span><span>·</span><span>💰 From ₹80,000/couple</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-teal pl-6 mb-10 bg-teal/5 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Maldives has a reputation for being unreachably expensive. That reputation is half-deserved. Yes, a 5-star overwater villa costs ₹50,000+ per night. But the same turquoise lagoons, house reefs and powdery sand are 10 minutes away on a local island guesthouse for ₹4,000 per night. This guide tells you exactly what you will pay — at every budget level — from an Indian couple&apos;s perspective.
            </p>
          </blockquote>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="💸" label="Budget Couple"    value="₹80k–1.2L" />
            <StatCard icon="💑" label="Mid-Range Couple" value="₹1.5L–2.5L" />
            <StatCard icon="🌟" label="Luxury Couple"    value="₹3L–6L+" />
            <StatCard icon="🌤️" label="Best Months"      value="Nov – Apr" />
          </div>

          {/* Cost Overview */}
          <section id="costs-overview" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">💰 Total Cost Overview for Indian Couples</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Here is the complete picture — all costs in INR, per couple, for a 7-night trip from India. Use this table to set your budget before diving deeper.
            </p>

            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Cost Component</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">💑 Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-yellow-200 text-center">🌟 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["✈️ Return Flights (per couple)", "₹18,000–30,000", "₹28,000–50,000", "₹50,000–1,20,000"],
                    ["🏨 Accommodation (7 nights)", "₹28,000–42,000", "₹70,000–1,40,000", "₹1,50,000–4,00,000"],
                    ["🚤 Transfers (speedboat/seaplane)", "₹4,000–8,000", "₹8,000–18,000", "₹25,000–60,000"],
                    ["🍽️ Food & Drinks (7 days)", "₹10,000–18,000", "₹18,000–35,000", "₹35,000–80,000"],
                    ["🤿 Activities & Snorkelling", "₹5,000–10,000", "₹12,000–25,000", "₹20,000–50,000"],
                    ["🛂 Visa (free on arrival)", "₹0", "₹0", "₹0"],
                    ["🧳 Travel Insurance", "₹1,500–2,500", "₹2,000–3,500", "₹3,000–6,000"],
                    ["💊 Miscellaneous", "₹3,000–5,000", "₹5,000–10,000", "₹10,000–25,000"],
                  ].map(([cat, b, m, l], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-parchment/40"}>
                      <td className="p-3.5 text-xs text-ink font-light">{cat}</td>
                      <td className="p-3.5 text-xs text-center text-amber-800 font-medium">{b}</td>
                      <td className="p-3.5 text-xs text-center text-teal-800 font-medium">{m}</td>
                      <td className="p-3.5 text-xs text-center text-yellow-800 font-medium">{l}</td>
                    </tr>
                  ))}
                  <tr className="bg-ink/5 font-semibold">
                    <td className="p-3.5 text-xs text-ink font-semibold">TOTAL (per couple)</td>
                    <td className="p-3.5 text-xs text-center text-amber-800 font-bold">₹80,000–1,20,000</td>
                    <td className="p-3.5 text-xs text-center text-teal-800 font-bold">₹1,50,000–2,50,000</td>
                    <td className="p-3.5 text-xs text-center text-yellow-800 font-bold">₹3,00,000–6,00,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  tier: "Budget",
                  range: "₹80,000 – ₹1,20,000",
                  emoji: "💰",
                  color: "border-amber-300 bg-amber-50",
                  textColor: "text-amber-800",
                  points: [
                    "Stay on local islands: Maafushi, Thulusdhoo, Guraidhoo",
                    "Economy flights, book 2–3 months early",
                    "Eat at local restaurants (₹300–500 per meal/couple)",
                    "Speedboat transfers only",
                    "Free snorkelling from the beach",
                  ],
                },
                {
                  tier: "Mid-Range",
                  range: "₹1,50,000 – ₹2,50,000",
                  emoji: "💑",
                  color: "border-teal-300 bg-teal-50",
                  textColor: "text-teal-800",
                  points: [
                    "4-star resort on a private island",
                    "Beach villa or water bungalow entry-level",
                    "Half-board (breakfast + dinner included)",
                    "One or two guided excursions",
                    "Speedboat transfer from Malé",
                  ],
                },
                {
                  tier: "Luxury",
                  range: "₹3,00,000 – ₹6,00,000+",
                  emoji: "🌟",
                  color: "border-yellow-300 bg-yellow-50",
                  textColor: "text-yellow-800",
                  points: [
                    "5-star overwater villa with private pool",
                    "All-inclusive or full-board dining",
                    "Seaplane transfers (scenic 45-min flight)",
                    "Private snorkel excursions, diving, spa",
                    "Butler service, romantic beach dinners",
                  ],
                },
              ].map((t) => (
                <div key={t.tier} className={`rounded-xl border p-5 ${t.color}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{t.emoji}</span>
                    <div>
                      <p className={`font-semibold text-sm ${t.textColor}`}>{t.tier}</p>
                      <p className={`text-xs font-medium ${t.textColor}`}>{t.range}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {t.points.map((pt, i) => (
                      <li key={i} className="text-xs text-gray-700 font-light flex items-start gap-2">
                        <span className="text-[0.6rem] mt-1 flex-shrink-0">✓</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Flights */}
          <section id="flights" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">✈️ Flights from India to Maldives</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              All international flights land at Velana International Airport (MLE) in Malé. Direct flights are available from several Indian cities. Indirect flights via Dubai, Colombo or Singapore are cheaper but add 4–8 hours.
            </p>

            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">From City</th>
                    <th className="p-3.5 text-xs font-medium text-white/70 text-center">Airlines</th>
                    <th className="p-3.5 text-xs font-medium text-white/70 text-center">Flight Type</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Economy (per person)</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["Delhi (DEL)", "IndiGo, Air India, Emirates", "Indirect (1 stop)", "₹12,000–22,000", "6–10 hrs"],
                    ["Mumbai (BOM)", "IndiGo, Air India, Emirates", "Direct / 1 stop", "₹9,000–18,000", "3.5–8 hrs"],
                    ["Bangalore (BLR)", "IndiGo, Air India, Sri Lankan", "Direct / 1 stop", "₹10,000–20,000", "3–8 hrs"],
                    ["Chennai (MAA)", "IndiGo, Air India", "Direct / 1 stop", "₹9,000–17,000", "2.5–7 hrs"],
                    ["Kochi (COK)", "Air India, IndiGo", "1 stop (Colombo)", "₹11,000–19,000", "5–9 hrs"],
                    ["Hyderabad (HYD)", "IndiGo, Emirates", "1 stop", "₹12,000–21,000", "6–10 hrs"],
                  ].map(([city, airlines, type, price, duration], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-parchment/40"}>
                      <td className="p-3.5 text-xs text-ink font-medium">{city}</td>
                      <td className="p-3.5 text-xs text-muted font-light text-center">{airlines}</td>
                      <td className="p-3.5 text-xs text-muted font-light text-center">{type}</td>
                      <td className="p-3.5 text-xs text-amber-800 font-medium text-center">{price}</td>
                      <td className="p-3.5 text-xs text-teal-800 font-medium text-center">{duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-teal/10 border border-teal/30 rounded-xl p-4">
              <p className="text-xs text-teal-800 font-medium mb-1">Flight Booking Tips</p>
              <ul className="space-y-1">
                {[
                  "Book 2–3 months ahead for peak season (December–March) — prices surge 60–80% closer to date.",
                  "May–September (off-season) flights are 30–40% cheaper. Mid-week departures (Tue/Wed) save ₹2,000–4,000 per person.",
                  "Mumbai has the most direct flights — cheapest and fastest from India overall.",
                  "Emirates via Dubai is often the most comfortable option from Delhi/Hyderabad, adding only 2–3 hours.",
                  "Set a price alert on Google Flights for your route — Maldives flight prices fluctuate significantly week to week.",
                ].map((tip, i) => (
                  <li key={i} className="text-xs text-teal-700 font-light flex items-start gap-2">
                    <span className="flex-shrink-0 mt-0.5">•</span>{tip}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Resort Costs */}
          <section id="resorts" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏨 Resort &amp; Accommodation Costs by Budget Tier</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Accommodation is the biggest variable in your Maldives budget. Costs range from ₹4,000/night at a local island guesthouse to ₹1,50,000+/night at an ultra-luxury overwater villa. Here is the full spectrum for Indian couples.
            </p>

            <div className="space-y-5">
              {[
                {
                  tier: "Budget — Local Island Guesthouses",
                  range: "₹4,000 – ₹8,000 / night (couple)",
                  color: "border-amber-200 bg-amber-50",
                  badge: "Best value",
                  badgeColor: "bg-amber-100 text-amber-700",
                  islands: ["Maafushi", "Thulusdhoo", "Guraidhoo", "Dhiffushi"],
                  details: [
                    "Simple beach rooms with AC, private bathroom and sea view.",
                    "15–30 minute speedboat from Malé (₹800–1,500/person each way).",
                    "Local restaurants nearby — meals for ₹400–800/couple.",
                    "Bikini beach areas designated for tourists.",
                    "Free snorkelling direct from the beach — house reefs in Thulusdhoo and Guraidhoo are excellent.",
                    "Book directly with guesthouses for best rates — MakeMyTrip and Booking.com mark up 15–25%.",
                  ],
                },
                {
                  tier: "Mid-Range — 4-Star Private Island Resorts",
                  range: "₹10,000 – ₹20,000 / night (couple)",
                  color: "border-teal-200 bg-teal-50",
                  badge: "Most popular",
                  badgeColor: "bg-teal-100 text-teal-700",
                  islands: ["North Malé Atoll", "South Malé Atoll"],
                  details: [
                    "Beach villas or entry-level water bungalows with direct lagoon access.",
                    "Private island — no locals, just resort guests.",
                    "Half-board (breakfast + dinner) typically included or available as an add-on.",
                    "Infinity pool, water sports centre, dive school on-site.",
                    "Speedboat transfer from Malé airport (20–45 minutes), cost sometimes included.",
                    "Popular resorts: Centara Ras Fushi, Club Med Kani, Bandos Maldives.",
                  ],
                },
                {
                  tier: "Luxury — 5-Star Overwater Villas",
                  range: "₹25,000 – ₹1,50,000+ / night (couple)",
                  color: "border-yellow-200 bg-yellow-50",
                  badge: "Bucket list",
                  badgeColor: "bg-yellow-100 text-yellow-700",
                  islands: ["Baa Atoll", "Raa Atoll", "Lhaviyani Atoll"],
                  details: [
                    "Overwater villas with glass floor panels, private pool, and ladder into the lagoon.",
                    "All-inclusive packages available — meals, minibar, non-motorised water sports.",
                    "Seaplane transfer required (₹15,000–35,000/couple) — the scenic 45-minute flight is an experience itself.",
                    "Butler service, private beach dinners, sunset cruises on request.",
                    "Snorkelling, diving, kayaking typically included or at low extra cost.",
                    "Popular resorts: Soneva Fushi, Conrad Rangali, Anantara Dhigu, Niyama Private Islands.",
                  ],
                },
              ].map((tier) => (
                <div key={tier.tier} className={`rounded-xl border p-5 ${tier.color}`}>
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <div>
                      <p className="font-semibold text-sm text-stone-900">{tier.tier}</p>
                      <p className="text-xs text-muted font-medium mt-0.5">{tier.range}</p>
                    </div>
                    <span className={`text-[0.65rem] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide ${tier.badgeColor}`}>{tier.badge}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {tier.islands.map((isl) => (
                      <span key={isl} className="text-[0.65rem] bg-white/80 border border-white/60 text-stone-700 px-2.5 py-1 rounded-full">{isl}</span>
                    ))}
                  </div>
                  <ul className="space-y-1.5">
                    {tier.details.map((d, i) => (
                      <li key={i} className="text-xs text-gray-700 font-light flex items-start gap-2">
                        <span className="flex-shrink-0 mt-1 text-[0.55rem]">●</span>{d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* InlineCTA mid-article */}
          <InlineCTA destination="Maldives" onPlanTrip={() => setModalOpen(true)} />

          {/* 7-Day Itinerary */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 7-Day Maldives Itinerary for Couples</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary works across all budget levels — swap the accommodation tier to adjust costs. It balances relaxation, underwater exploration and romantic experiences.
            </p>

            <DayCard
              day="Day 1"
              title="Arrival in Malé — Transfer to Resort / Guesthouse"
              items={[
                "Land at Velana International Airport, Malé. Pass through free visa-on-arrival (takes 5–15 minutes).",
                "Budget: Take the public ferry to Maafushi (₹500/person, 1.5 hrs) — cheap and adventurous.",
                "Mid-range/Luxury: Your resort&apos;s speedboat or seaplane transfer meets you at the airport jetty.",
                "Check in, freshen up. First evening: watch the Maldivian sunset from your beach or villa deck.",
                "Dinner at the resort restaurant or a local café. Try the national dish — mas huni (smoked fish with coconut) and roshi flatbread.",
              ]}
              cost="Transfer: ₹500–35,000/couple depending on tier"
            />

            <DayCard
              day="Day 2"
              title="House Reef Snorkelling &amp; Lagoon Exploration"
              items={[
                "Morning: House reef snorkelling — most resorts and local islands have a reef within swimming distance. Look for sea turtles, reef sharks and clownfish.",
                "Budget travellers: Thulusdhoo and Guraidhoo have exceptional house reefs accessible for free.",
                "Mid/Luxury: Guided snorkel tour with marine biologist (₹1,500–3,000/couple).",
                "Afternoon: Kayak around the lagoon. The turquoise shallows are perfectly calm — ideal for beginners.",
                "Sunset: Couple&apos;s sandbank visit — a private sandbar in the middle of the ocean. Most resorts organise this for ₹3,000–8,000/couple.",
              ]}
              cost="₹3,000–10,000/couple for activities"
            />

            <DayCard
              day="Day 3"
              title="Dolphin Cruise &amp; Underwater Restaurant (Luxury) / Local Island Visit (Budget)"
              items={[
                "Morning dolphin cruise: ₹1,800–3,500/couple. Spinner dolphins are almost guaranteed in the North Malé Atoll.",
                "Budget/Mid: Take a day trip to a local inhabited island — visit a Maldivian village, see traditional boat-building (dhoni making), buy local crafts.",
                "Luxury: Book lunch at an underwater restaurant if staying at Conrad Rangali or similar — a once-in-a-lifetime experience.",
                "Afternoon: Overwater hammock time, couples&apos; massage (₹5,000–15,000 for 60 mins at luxury resorts), or simply float in your private pool.",
                "Evening: Bioluminescent beach walk — plankton light up the waves blue at night. Best in June–October.",
              ]}
              cost="₹2,000–15,000/couple for activities"
            />

            <DayCard
              day="Day 4"
              title="Scuba Diving or Full-Day Excursion"
              items={[
                "For divers: Try-dive or certified dive with resort&apos;s PADI dive school. Try-dive: ₹4,000–6,000/person. 2-tank certified dive: ₹5,000–8,000/person.",
                "Non-divers: Big game fishing trip (₹4,000–7,000/person) or whale shark excursion (Baa Atoll — guaranteed sightings June–November).",
                "Mid-afternoon: Return to resort. Lie on the beach. Read a book. This is the day to do absolutely nothing.",
                "Evening: Private beach dinner for two — most resorts offer a romantic setup on the beach with fairy lights, set menu, and a bottle of wine. ₹8,000–25,000/couple.",
              ]}
              cost="₹6,000–30,000/couple depending on activities"
            />

            <DayCard
              day="Day 5"
              title="Sandbank Picnic &amp; Water Sports"
              items={[
                "Morning: Private sandbank picnic — your resort arranges a speedboat drop-off on a deserted sandbar with a hamper of food and drinks. ₹5,000–15,000/couple. Absolutely worth it.",
                "Afternoon: Water sports — jet ski (₹2,000–3,000/30 mins), banana boat (₹500–800/person), wakeboarding. Most mid-range resorts include non-motorised sports (kayak, paddleboard) free.",
                "Sunset cruise: Sail on a traditional dhoni at sunset with champagne or mocktails. ₹2,000–5,000/couple.",
                "For budget travellers: Local island beach clubs often offer free lounge chairs — bring your own snacks and spend the full day there.",
              ]}
              cost="₹3,000–20,000/couple for activities"
            />

            <DayCard
              day="Day 6"
              title="Spa Day &amp; Relaxation"
              items={[
                "Morning: Sleep in. Long breakfast with a view of the lagoon.",
                "Mid-morning: Couples&apos; spa treatment — overwater spa at luxury resorts is unforgettable. 60-min couples massage: ₹6,000–18,000. Local island massage shops: ₹1,500–3,000.",
                "Afternoon: Last snorkel session — photograph the reef fish with an underwater camera (rent for ₹500–1,000/day).",
                "Evening: Dinner at the resort&apos;s finest restaurant or a beachfront local eatery. Splurge if on a budget trip — one nice dinner won&apos;t break the bank.",
                "Pack, sort souvenirs — dried fish (garudhiya), Maldivian sarongs, lacquerwork. Local islands have much better prices than airport shops.",
              ]}
              cost="₹2,000–20,000/couple for spa + dinner"
            />

            <DayCard
              day="Day 7"
              title="Departure Day — Back to Malé"
              items={[
                "Check out by 11am (most resorts). Store luggage and enjoy the pool/beach until your transfer.",
                "Transfer back to Velana Airport — speedboat or seaplane depending on your resort.",
                "If you have time before your flight: Malé city visit — Sultan Park, National Museum, the fish market at the harbour (fascinating to walk through).",
                "Airport souvenir shopping: Duty free is reasonably priced for Maldivian honey, black coral jewellery and themed T-shirts.",
                "Board your return flight. The Maldives will immediately begin planning how to get you back.",
              ]}
              cost="Transfer: ₹2,000–35,000/couple"
            />
          </section>

          {/* Best Atolls */}
          <section id="atolls" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏝️ Best Atolls for Couples — Honest Comparison</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The Maldives has 26 natural atolls. For couples, four stand out based on accessibility from India, romance factor, and value for money.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: "North Malé Atoll",
                  emoji: "🏙️",
                  budget: "Budget to Luxury",
                  transfer: "Speedboat (20–60 mins)",
                  color: "border-teal-200 bg-teal-50",
                  pros: [
                    "Closest to Malé airport — cheapest transfers",
                    "Most local islands (Maafushi, Thulusdhoo) are here",
                    "Great house reefs and snorkelling",
                    "Wide range of resort options at all price points",
                  ],
                  cons: ["More crowded than outer atolls", "Luxury resorts here cost more than outer atolls"],
                },
                {
                  name: "South Malé Atoll",
                  emoji: "🌊",
                  budget: "Mid-Range to Luxury",
                  transfer: "Speedboat (30–90 mins)",
                  color: "border-blue-200 bg-blue-50",
                  pros: [
                    "Slightly quieter than North Malé",
                    "Excellent visibility for snorkelling and diving",
                    "Good mid-range resorts (Anantara Dhigu, Taj Exotica)",
                    "Still accessible by speedboat — no seaplane needed",
                  ],
                  cons: ["Fewer budget guesthouse options", "Slightly longer transfer time"],
                },
                {
                  name: "Baa Atoll (UNESCO Biosphere)",
                  emoji: "🐋",
                  budget: "Luxury",
                  transfer: "Seaplane (35–45 mins)",
                  color: "border-green-200 bg-green-50",
                  pros: [
                    "UNESCO Biosphere Reserve — most pristine marine life",
                    "Hanifaru Bay: whale shark and manta ray feeding frenzy (June–Nov)",
                    "Dramatic lagoons and coral gardens",
                    "Some of the world&apos;s best luxury resorts (Soneva Fushi, Four Seasons)",
                  ],
                  cons: ["Seaplane required — adds ₹25,000–50,000/couple", "No budget options", "Seaplanes don&apos;t fly after dark"],
                },
                {
                  name: "Raa Atoll",
                  emoji: "🐠",
                  budget: "Mid-Range to Luxury",
                  transfer: "Seaplane (40–50 mins)",
                  color: "border-purple-200 bg-purple-50",
                  pros: [
                    "Very few tourists — most secluded of the four",
                    "Excellent diving — hammerhead sharks, whale sharks",
                    "Beautiful lagoons with some of the clearest water in Maldives",
                    "More affordable luxury than Baa Atoll",
                  ],
                  cons: ["Seaplane required", "Limited resort choices", "Further from Malé"],
                },
              ].map((atoll) => (
                <div key={atoll.name} className={`rounded-xl border p-5 ${atoll.color}`}>
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{atoll.emoji}</span>
                      <p className="font-semibold text-sm text-stone-900">{atoll.name}</p>
                    </div>
                    <span className="text-[0.62rem] bg-white/70 border border-white/50 text-stone-600 px-2 py-0.5 rounded-full">{atoll.budget}</span>
                  </div>
                  <p className="text-[0.65rem] text-muted mb-3 font-medium">Transfer: {atoll.transfer}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-[0.65rem] font-semibold text-green-700 uppercase tracking-wide mb-1">Pros</p>
                      <ul className="space-y-1">
                        {atoll.pros.map((p, i) => (
                          <li key={i} className="text-[0.65rem] text-gray-700 font-light flex items-start gap-1.5">
                            <span className="flex-shrink-0 text-green-500 mt-0.5">✓</span>{p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-semibold text-red-600 uppercase tracking-wide mb-1">Cons</p>
                      <ul className="space-y-1">
                        {atoll.cons.map((c, i) => (
                          <li key={i} className="text-[0.65rem] text-gray-700 font-light flex items-start gap-1.5">
                            <span className="flex-shrink-0 text-red-400 mt-0.5">✗</span>{c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Best Time */}
          <section id="best-time" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🌤️ Best Time to Visit Maldives from India</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The Maldives has two main seasons — peak (dry) and off-season (wet). Understanding this can save your couple ₹30,000–60,000 on the same trip.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  season: "Peak Season (November – April)",
                  emoji: "☀️",
                  color: "border-amber-200 bg-amber-50",
                  textColor: "text-amber-800",
                  points: [
                    "Best weather — clear skies, calm seas, 28–31°C",
                    "Visibility underwater at its best (30+ metres)",
                    "December–February is the absolute best — ideal for honeymoons",
                    "Prices 30–50% higher than off-season",
                    "Book resorts and flights 3–4 months in advance",
                    "Perfect for Indian couples on honeymoon after winter weddings",
                  ],
                },
                {
                  season: "Off-Season (May – October)",
                  emoji: "🌦️",
                  color: "border-blue-200 bg-blue-50",
                  textColor: "text-blue-800",
                  points: [
                    "30–40% cheaper flights and resorts — significant savings",
                    "Rain is sporadic — usually 1–2 hours then clear again",
                    "Baa Atoll whale sharks and mantas peak (June–November)",
                    "Bioluminescent beach phenomenon is more frequent",
                    "Fewer tourists — more private, more romantic",
                    "May and October are shoulder months — best value with acceptable weather",
                  ],
                },
              ].map((s) => (
                <div key={s.season} className={`rounded-xl border p-5 ${s.color}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{s.emoji}</span>
                    <p className={`font-semibold text-sm ${s.textColor}`}>{s.season}</p>
                  </div>
                  <ul className="space-y-1.5">
                    {s.points.map((pt, i) => (
                      <li key={i} className="text-xs text-gray-700 font-light flex items-start gap-2">
                        <span className="flex-shrink-0 mt-1 text-[0.55rem]">●</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Month</th>
                    <th className="p-3.5 text-xs font-medium text-white/70 text-center">Weather</th>
                    <th className="p-3.5 text-xs font-medium text-white/70 text-center">Crowd Level</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Cost Factor</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["November", "Good", "Medium", "+15%", "Early honeymoons"],
                    ["December", "Excellent", "Very High", "+40%", "Christmas honeymoon"],
                    ["January", "Excellent", "High", "+35%", "Winter honeymoon"],
                    ["February", "Excellent", "High", "+30%", "Valentine&apos;s Day trips"],
                    ["March", "Very Good", "Medium", "+15%", "Last peak season"],
                    ["April", "Good", "Low-Medium", "Base", "Value peak season"],
                    ["May", "Fair", "Low", "-20%", "Budget couples"],
                    ["June–Aug", "Variable", "Low", "-35%", "Marine life, bioluminescence"],
                    ["September", "Fair", "Low", "-40%", "Maximum savings"],
                    ["October", "Good", "Low-Medium", "-25%", "Best shoulder season"],
                  ].map(([month, weather, crowd, cost, best], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-parchment/40"}>
                      <td className="p-3.5 text-xs text-ink font-medium">{month}</td>
                      <td className="p-3.5 text-xs text-muted text-center">{weather}</td>
                      <td className="p-3.5 text-xs text-muted text-center">{crowd}</td>
                      <td className={`p-3.5 text-xs font-medium text-center ${cost.startsWith("+") ? "text-red-600" : cost.startsWith("-") ? "text-green-600" : "text-muted"}`}>{cost}</td>
                      <td className="p-3.5 text-xs text-teal-700 font-light text-center">{best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* How to Reach */}
          <section id="how-to-reach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🛫 How to Reach Maldives from India — Step by Step</h2>

            <div className="space-y-4">
              {[
                {
                  step: "Step 1",
                  title: "Book Your International Flight to Malé (MLE)",
                  color: "border-teal-200 bg-teal-50",
                  content: "All flights land at Velana International Airport (MLE) on Hulhulé Island, connected to Malé by bridge. Key routes: IndiGo from Delhi, Air India from Mumbai, Bangalore and Chennai. IndiGo offers the best value from most Indian cities. Emirates via Dubai is often the most comfortable. Book 6–8 weeks ahead for peak season, 2–3 weeks for off-season.",
                },
                {
                  step: "Step 2",
                  title: "Get Visa on Arrival (Free for Indians)",
                  color: "border-green-200 bg-green-50",
                  content: "Indians receive a free 30-day visa on arrival. You need: valid passport (6+ months validity), return air ticket, accommodation booking confirmation, proof of funds (~$100/day). The process takes 5–20 minutes at the immigration counter. No advance application or fee required.",
                },
                {
                  step: "Step 3",
                  title: "Transfer from Malé Airport to Your Resort",
                  color: "border-amber-200 bg-amber-50",
                  content: "This is where costs diverge: (a) Public ferry to local islands: ₹300–700/person. (b) Resort speedboat: ₹2,000–5,000/person, takes 20–90 mins depending on atoll. (c) Seaplane (TMA or Manta Air): ₹10,000–25,000/person — required for Baa and outer atolls, runs only during daylight. (d) Domestic flight to an outer atoll + speedboat: ₹4,000–8,000/person total. Note: Seaplanes are 15-seater turboprops — the scenic flight over atolls is an experience in itself.",
                },
                {
                  step: "Step 4",
                  title: "Maldivian Currency &amp; Payments",
                  color: "border-purple-200 bg-purple-50",
                  content: "USD is accepted everywhere in resorts. Maldivian Rufiyaa (MVR) is used on local islands. 1 USD ≈ 15.5 MVR ≈ ₹83 (April 2026). Carry USD cash for local islands — card machines are unreliable. Resorts bill in USD. Inform your bank before travel to avoid card blocks. Forex from India: buy USD before departure, get a better rate than at Malé airport.",
                },
              ].map((s) => (
                <div key={s.step} className={`rounded-xl border p-5 ${s.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="bg-white text-stone-900 text-[0.65rem] font-bold px-2.5 py-1 rounded-full border border-stone-200 flex-shrink-0 mt-0.5">{s.step}</span>
                    <div>
                      <p className="font-semibold text-sm text-stone-900 mb-1.5">{s.title}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{s.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What's included vs extra */}
          <section id="packages" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📦 Resort Packages — What&apos;s Included vs What Costs Extra</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Most Indian couples get caught by hidden costs in resort packages. Here is exactly what is — and is not — included in standard Maldives packages.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <p className="font-semibold text-sm text-green-800 mb-3 flex items-center gap-2">
                  <span>✅</span> Typically Included in Package
                </p>
                <ul className="space-y-2">
                  {[
                    "Villa/room accommodation",
                    "Breakfast (all packages)",
                    "Dinner (half-board and full-board packages)",
                    "Non-motorised water sports: kayak, paddleboard, snorkel gear",
                    "Access to main pool and beach",
                    "Wi-Fi (usually at extra cost in luxury resorts — check!)",
                    "House reef snorkelling (most resorts)",
                    "Resort speedboat transfer if stated in package",
                  ].map((item, i) => (
                    <li key={i} className="text-xs text-green-700 font-light flex items-start gap-2">
                      <span className="flex-shrink-0 mt-0.5">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <p className="font-semibold text-sm text-red-800 mb-3 flex items-center gap-2">
                  <span>❌</span> Almost Always Costs Extra
                </p>
                <ul className="space-y-2">
                  {[
                    "Seaplane or domestic flight transfers (₹15,000–35,000/couple)",
                    "Alcoholic beverages — very expensive in Maldives (₹1,500–3,000/cocktail)",
                    "Motorised water sports: jet ski, wakeboard, banana boat",
                    "Scuba diving: ₹4,000–8,000/person per dive",
                    "Spa treatments: ₹5,000–20,000/couple",
                    "Excursions: dolphin cruise, whale shark trip, sandbank picnic",
                    "Private beach or in-villa dinner: ₹8,000–30,000",
                    "Wi-Fi in many luxury resorts: USD 20–50/day",
                    "Green tax: USD 6/person/night (small but mandatory)",
                  ].map((item, i) => (
                    <li key={i} className="text-xs text-red-700 font-light flex items-start gap-2">
                      <span className="flex-shrink-0 mt-0.5">✗</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-xs text-amber-800 font-medium mb-1">💡 Important Note for Indian Couples</p>
              <p className="text-xs text-amber-700 font-light leading-relaxed">
                Maldives resorts price alcohol very high. If you plan to drink, add ₹5,000–15,000/couple/day to your budget. Alternatively, stock up at duty-free in India and declare it at customs (Maldives allows 4 litres of alcohol per tourist if declared). Non-drinkers save a significant amount.
              </p>
            </div>
          </section>

          {/* Top Resorts */}
          <section id="top-resorts" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⭐ Top Romantic Resorts for Indian Couples</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              These resorts are particularly popular with Indian honeymoon couples — good Hindi-speaking staff, Indian meal options, and excellent value within their tier.
            </p>

            <div className="space-y-3">
              {[
                {
                  tier: "Budget (Local Island)",
                  color: "border-amber-200",
                  resorts: [
                    { name: "Kaani Beach Hotel", island: "Maafushi", price: "₹4,500–7,000/night", why: "Most popular budget hotel on Maafushi — great house reef, helpful staff, good breakfast. 30 min speedboat from Malé." },
                    { name: "Maafushi Inn", island: "Maafushi", price: "₹3,500–5,500/night", why: "Basic but clean. The cheapest way to experience the Maldives. Bikini beach right outside. Snorkel gear rental available." },
                    { name: "Coral Beach Hotel & Spa", island: "Thulusdhoo", price: "₹4,000–6,500/night", why: "Thulusdhoo has one of the best free house reefs. This hotel has direct reef access — better snorkelling than Maafushi at similar price." },
                  ],
                },
                {
                  tier: "Mid-Range (4-Star Private Island)",
                  color: "border-teal-200",
                  resorts: [
                    { name: "Centara Ras Fushi Resort", island: "North Malé Atoll", price: "₹12,000–18,000/night", why: "Adults-only resort — perfect for honeymoons. Excellent house reef, overwater bar, consistently good reviews from Indian couples. 20 min speedboat." },
                    { name: "Club Med Kani", island: "North Malé Atoll", price: "₹14,000–22,000/night (all-inclusive)", why: "All-inclusive resort with excellent value — meals, alcohol, water sports, entertainment all included. Popular with Indian families and couples." },
                    { name: "Bandos Maldives", island: "North Malé Atoll", price: "₹10,000–16,000/night", why: "One of the oldest resorts in Maldives, recently renovated. Great dive school, good Indian restaurant on-site, only 15 min from airport." },
                  ],
                },
                {
                  tier: "Luxury (5-Star Overwater Villa)",
                  color: "border-yellow-200",
                  resorts: [
                    { name: "Anantara Dhigu Resort", island: "South Malé Atoll", price: "₹25,000–50,000/night", why: "Indian-owned luxury brand. Excellent Indian restaurant, Indian-speaking staff, superb overwater villas with private pools. 25 min speedboat from airport." },
                    { name: "Conrad Maldives Rangali Island", island: "South Ari Atoll", price: "₹40,000–1,00,000/night", why: "Home of the world-famous Ithaa Undersea Restaurant. Two separate islands connected by a footbridge. One of the most iconic resorts globally." },
                    { name: "Niyama Private Islands", island: "Dhaalu Atoll", price: "₹35,000–80,000/night", why: "Two private islands (Play and Chill). The party island and the wellness island. Underwater nightclub, excellent diving, very popular with young Indian couples." },
                  ],
                },
              ].map((tier) => (
                <div key={tier.tier} className={`rounded-xl border ${tier.color} overflow-hidden`}>
                  <div className="bg-ink/5 px-5 py-3 border-b border-parchment-2">
                    <p className="font-semibold text-sm text-ink">{tier.tier}</p>
                  </div>
                  <div className="divide-y divide-parchment-2">
                    {tier.resorts.map((r) => (
                      <div key={r.name} className="p-4 bg-white">
                        <div className="flex items-start justify-between flex-wrap gap-2 mb-1.5">
                          <p className="font-medium text-sm text-stone-900">{r.name}</p>
                          <span className="text-xs font-medium text-teal-700 bg-teal/10 px-2.5 py-0.5 rounded-full">{r.price}</span>
                        </div>
                        <p className="text-[0.65rem] text-muted font-light mb-1">📍 {r.island}</p>
                        <p className="text-xs text-gray-600 font-light leading-relaxed">{r.why}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Saving Tips */}
          <section id="saving-tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Money-Saving Tips for Indian Couples</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🗓️",
                  title: "Travel in shoulder season (May or October)",
                  desc: "May and October offer good weather with 20–30% lower prices than peak season. Flight prices drop significantly. You get near-empty beaches and the same turquoise water.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🏘️",
                  title: "Stay on a local island for 4–5 nights",
                  desc: "Maafushi, Thulusdhoo and Guraidhoo offer guesthouses from ₹4,000/night. The ocean is identical to what you see in resort photos. Save the resort experience for 1–2 nights if budget allows — the contrast makes both better.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "📦",
                  title: "Book package deals through Indian travel portals",
                  desc: "Thomas Cook, Cox & Kings and MakeMyTrip package deals often bundle flights + resort + transfers cheaper than booking separately. Compare with direct resort booking. Holiday packages from India typically save ₹15,000–30,000/couple.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🍽️",
                  title: "Eat at local island restaurants",
                  desc: "On local islands (Maafushi, Thulusdhoo), local restaurants charge ₹300–600 per meal for a couple. Resort buffets cost ₹2,000–4,000/couple per meal. Eating local for 7 days vs resort dining saves ₹20,000–40,000/couple.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "✈️",
                  title: "Avoid seaplane transfers unless going to Baa Atoll",
                  desc: "Seaplanes cost ₹15,000–35,000/couple each way. Choosing a North or South Malé Atoll resort means you only need a speedboat (₹3,000–8,000/couple each way). This single choice saves ₹25,000–60,000 per trip.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🎯",
                  title: "Book directly with resorts for better rates",
                  desc: "Many resorts offer 10–15% better rates when booked directly — plus free upgrades, honeymoon decorations, and complimentary meals as direct booking incentives. Email the resort after finding the price online — they will often beat any OTA price.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* SmartImage for coral reef */}
          <div className="rounded-2xl overflow-hidden mb-14 relative h-64">
            <SmartImage
              query="maldives coral reef underwater snorkelling tropical fish"
              fallback="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80"
              alt="Maldives coral reef snorkelling underwater"
              fill
              className="object-cover"
              sizes="(max-width: 860px) 100vw, 860px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white font-serif text-lg font-light">House Reef Snorkelling — Free with Most Resorts</p>
              <p className="text-white/60 text-xs font-light mt-1">Sea turtles, reef sharks and 500+ species of fish within swimming distance</p>
            </div>
          </div>

          {/* InlineCTA end of content */}
          <InlineCTA destination="Maldives honeymoon" onPlanTrip={() => setModalOpen(true)} />

          {/* FAQ */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "What is the total cost of a Maldives trip for a couple from India?",
                  a: "A budget Maldives trip for an Indian couple costs ₹80,000–₹1,20,000 total (local island guesthouse, economy flights, local food, speedboat transfers). Mid-range with a 4-star resort costs ₹1,50,000–₹2,50,000. Luxury with overwater villas and seaplane transfers costs ₹3,00,000–₹6,00,000+. All-in for 7 nights including flights from most Indian cities.",
                },
                {
                  q: "Is Maldives affordable for Indian couples on a honeymoon?",
                  a: "Yes — if you stay on local islands like Maafushi or Thulusdhoo, the Maldives is surprisingly affordable. A couple can do a 7-night trip including flights for ₹80,000–₹1,20,000. The turquoise water, white sand and snorkelling are identical to what you see in resort photos. The only difference is you share the island with local Maldivians.",
                },
                {
                  q: "Do Indians need a visa for the Maldives?",
                  a: "No. Indians get a free 30-day visa on arrival. You need a valid passport with at least 6 months validity, a return flight ticket, hotel/resort booking confirmation, and proof of sufficient funds. There is no advance application, no fee, and the immigration process takes 5–20 minutes.",
                },
                {
                  q: "When is the cheapest time to go to Maldives from India?",
                  a: "May through October is off-season with 30–40% lower resort rates and cheaper flights. The shoulder months of May and October offer the best combination — still reasonable weather and significantly lower prices. June–August has occasional rain but the bioluminescent beach and whale shark sightings at Baa Atoll peak during this period.",
                },
                {
                  q: "What is the cheapest way to reach Maldives from India?",
                  a: "IndiGo from Mumbai or Bangalore typically offers the cheapest flights to Malé. Book 2–3 months ahead for off-season, 4–6 months for December–January. Economy round-trip flights cost ₹9,000–18,000/person from Mumbai, ₹12,000–22,000/person from Delhi. Combine with a local island guesthouse reachable by public ferry (₹500/person) for maximum savings.",
                },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* CTA Block */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want Your Maldives Honeymoon Planned?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[400px] mx-auto leading-relaxed">
              Tell us your budget, travel dates, and what matters most — romantic, adventurous, or ultra-relaxing. We&apos;ll send a personalised plan within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Maldives Trip →
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Internal Links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More International Honeymoon Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Bali 5-Day Couple Itinerary",          href: "/blog/bali-5-days",         soon: false },
                { label: "Thailand Honeymoon — Phuket Guide",     href: "/blog/phuket-5-days",       soon: false },
                { label: "Kerala 5 Days — Backwaters &amp; Hills",    href: "/blog/kerala-5-days",       soon: false },
                { label: "Browse All Honeymoon Packages",         href: "/#packages",                soon: false },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group"
                >
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "Read →"}</span>
                </Link>
              ))}
            </div>
          </section>

        </div>

          <DestinationGallery
            title="Maldives — Paradise on Earth"
            subtitle="Overwater villas, crystal lagoons, and the ultimate honeymoon."
            spots={[
              { name: "Overwater Villa", query: "maldives overwater villa bungalow crystal blue lagoon luxury resort", desc: "The iconic Maldives overwater villa — glass floors, turquoise water below." },
              { name: "Underwater World", query: "maldives snorkeling coral reef tropical fish clear water indian ocean", desc: "Some of the best snorkeling on earth — coral reefs at your doorstep." },
              { name: "Maldives Sandbank", query: "maldives sandbank white sand turquoise water private island couple", desc: "A private sandbank in the middle of the Indian Ocean." },
              { name: "Sunset Dolphin Cruise", query: "maldives dolphin cruise sunset indian ocean boat couple romantic", desc: "Dolphins leaping at sunset — the classic Maldives evening experience." },
              { name: "Maldives Beach Dinner", query: "maldives beach dinner romantic candles sunset couple honeymoon", desc: "Private beach dinner under the stars — the Maldives honeymoon moment." },
            ]}
          />

         
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
