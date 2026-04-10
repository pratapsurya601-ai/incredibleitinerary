"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import SmartImage from "@/components/ui/SmartImage";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import DestinationGallery from "@/components/blog/DestinationGallery";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import RelatedGuides from "@/components/blog/RelatedGuides";
import CombineWith from "@/components/blog/CombineWith";
import Breadcrumb from "@/components/blog/Breadcrumb";
import InlineCTA from "@/components/blog/InlineCTA";
import PhotoCta from "@/components/blog/PhotoCta";
import AuthorByline from "@/components/blog/AuthorByline";
import InlineSignup from "@/components/email/InlineSignup";
import PinterestSaveButton from "@/components/ui/PinterestSaveButton";

// ── Table of Contents ─────────────────────────────────────────────────────────
const HANOI_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Hanoi Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",  emoji: "🏛️", label: "Landmark Guide" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",        emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",   emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "💡",  label: "Pro Tips" },
  { id: "faq",        emoji: "❓",  label: "FAQ" },
];

// ── Reading Progress Bar ──────────────────────────────────────────────────────
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(Math.min(100, pct));
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[300] h-1 bg-parchment-2">
      <div
        className="h-full bg-amber-600 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ── Share Bar ─────────────────────────────────────────────────────────────────
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
      {[
        {
          label: "Email",
          color: "bg-ink text-white",
          href: `mailto:?subject=Hanoi 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Hanoi in 3 Days — Old Quarter, street food and the complete itinerary&url=${typeof window !== "undefined" ? window.location.href : ""}`,
        },
      ].map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}
        >
          {s.label}
        </a>
      ))}
      <button
        onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted"
      >
        {copied ? "✓ Copied" : "Copy Link"}
      </button>
      <PinterestSaveButton
        pageUrl="https://www.incredibleitinerary.com/blog/hanoi-3-days"
        imageUrl="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1200&q=80"
        description="Hanoi in 3 Days: Old Quarter, Hoan Kiem Lake, Ho Chi Minh Mausoleum, Temple of Literature, street food and egg coffee — complete travel guide with budget breakdown."
      />
    </div>
  );
}

// ── Stat Card ─────────────────────────────────────────────────────────────────
function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="font-serif text-lg font-light text-ink">{value}</p>
      <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  );
}

// ── Day Card ──────────────────────────────────────────────────────────────────
function DayCard({
  day,
  title,
  items,
  cost,
}: {
  day: string;
  title: string;
  items: string[];
  cost: string;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden">
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
                <span className="text-amber-500 mt-1 flex-shrink-0 text-xs">●</span>
                {item}
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

// ── Tip Card ──────────────────────────────────────────────────────────────────
function TipCard({
  icon,
  title,
  desc,
  color,
}: {
  icon: string;
  title: string;
  desc: string;
  color: string;
}) {
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

// ── FAQ Accordion ─────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-600 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-parchment-2">
          <p className="text-sm text-muted font-light leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function HanoiClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={HANOI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Hanoi" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="hanoi old quarter street vietnam lanterns motorbikes"
            fallback="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1600&q=80"
            alt="Hanoi Old Quarter street with motorbikes and lanterns Vietnam"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Hanoi 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Old Quarter &amp; Street Food
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Hanoi in 3 Days:
                <em className="italic text-amber-300"> Street Food, Temples &amp; the Real Capital</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Hoan Kiem Lake at dawn, 36 guild streets of the Old Quarter, egg coffee in a hidden rooftop cafe, and pho at 7am with locals who&apos;ve eaten at the same stall for 20 years. The complete guide with real timings, costs in VND &amp; USD, and the mistakes every first-timer makes.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="12 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇻🇳 Vietnam</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₫400,000/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Hoan Kiem Lake at 6am before the joggers arrive is a genuinely spiritual moment — mist rising off the water, elderly couples doing tai chi under the banyan trees, and food carts setting up for the day. By 9am it&apos;s full of tourists. Set one alarm. This guide tells you exactly when to set it for every single stop.
            </p>
          </blockquote>

          {/* ── WHAT HANOI ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Hanoi Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Hanoi is one of the oldest capitals in Southeast Asia, with over a thousand years of continuous history. The Old Quarter&apos;s 36 guild streets — each originally dedicated to a single trade — still largely follow that pattern today: Hang Gai for silk, Hang Bac for silver, Hang Ma for paper offerings. The city runs on motorbikes, street food, and a pace of life that rewards slow walking far more than rushing between tourist attractions.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The food reality: Hanoi is arguably the best street food city in the world. Pho originated here, bun cha is a Hanoian invention, and egg coffee exists nowhere else in quite the same form. The best meals cost ₫50,000–70,000 ($2–3) and are served on plastic stools at stalls that have been cooking the same dish for three generations. If you eat at restaurants with English menus, you are missing the entire point of eating in Hanoi.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Three days is enough to cover the Old Quarter, the major cultural sites, and a day trip to either Ninh Binh or Bat Trang pottery village. If you want Halong Bay, you need a fourth day minimum — overnight cruises leave early morning and return late the following afternoon.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="HAN (Noi Bai)" />
              <StatCard icon="🌡️" label="Best Season" value="Oct–Apr" />
              <StatCard icon="🍜" label="Famous For" value="Street Food" />
              <StatCard icon="💰" label="Budget From" value="₫400k/day (~$16)" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Hanoi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Oct–Dec",
                  i: "☀️",
                  t: "Autumn — Best Overall",
                  d: "20–28°C with low humidity and clear skies. The air is crisp, Hoan Kiem Lake is at its most photogenic, and the Old Quarter streets are comfortable for walking. November is arguably the best month — warm enough for short sleeves during the day, cool enough for a light jacket in the evening.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jan–Mar",
                  i: "🌧️",
                  t: "Winter — Cool & Drizzly",
                  d: "15–22°C with frequent drizzle and grey skies. Hanoi winters are genuinely cold by Southeast Asian standards — you will need a warm jacket. The upside: fewer tourists, lower prices, and the atmosphere in the Old Quarter on a misty morning is unforgettable. Pack layers and a waterproof.",
                  b: "Fewer crowds, cooler",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Apr–May",
                  i: "🌸",
                  t: "Spring — Warm & Pleasant",
                  d: "22–30°C with occasional showers. Spring is warm and green, with lotus flowers beginning to bloom on West Lake. April is comfortable; May starts getting hot and humid. A good shoulder-season option with reasonable prices and manageable weather.",
                  b: "Good value",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Sep",
                  i: "🌧️",
                  t: "Summer — Hot & Rainy",
                  d: "30–38°C with high humidity and heavy afternoon thunderstorms. July and August are the wettest months, and the heat can be oppressive. Walking the Old Quarter becomes tiring by midday. If visiting in summer, plan sightseeing for early morning and late afternoon, and carry a rain jacket everywhere.",
                  b: "Avoid if possible",
                  c: "bg-blue-50 border-blue-200",
                },
              ].map((s) => (
                <div key={s.s} className={`rounded-xl p-4 border ${s.c}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.i}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{s.s} — {s.t}</p>
                      <p className="text-[0.65rem] font-medium text-teal">{s.b}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── GETTING THERE ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Hanoi</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Hanoi&apos;s Noi Bai International Airport (HAN) is 25km north of the Old Quarter — about 45 minutes by car without traffic. <strong className="font-medium">Indian passport holders need an E-Visa ($25 USD, apply at evisa.xuatnhapcanh.gov.vn).</strong> Many Western passports get 45 days visa-free.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Flights from India",
                  d: "IndiGo and VietJet fly from Delhi and Mumbai to Hanoi with one stop (via Bangkok or Ho Chi Minh City). Flight time: 5–7 hours total. Fares: Rs12,000–Rs22,000 return booked 2–3 months ahead. Kolkata to Hanoi via Bangkok is often the cheapest routing. Direct flights are limited — most routes involve a connection in a Southeast Asian hub.",
                  b: "From India",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "From Southeast Asia",
                  d: "Budget airlines (VietJet, AirAsia, Scoot) connect Hanoi to Bangkok (2 hrs, $40–$90), Singapore (3.5 hrs, $50–$120), Kuala Lumpur (3.5 hrs, $40–$100), and Ho Chi Minh City (2 hrs, $25–$60 domestic). VietJet runs multiple daily Hanoi–HCMC flights from $25 one-way if booked early.",
                  b: "Cheapest flights",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Airport to Old Quarter (Grab)",
                  d: "Pre-book a Grab from the arrivals area (₫200,000–300,000, ~$8–12, 45 minutes). Airport bus 86 runs directly to Hoan Kiem area every 20 minutes from 5am–11pm (₫35,000, ~$1.40). Avoid unmarked taxis outside arrivals — they will charge 3–5x the fair price. Download the Grab app before landing and buy a local SIM at the airport (₫100,000–150,000 for 30-day data).",
                  b: "Use Grab or Bus 86",
                  c: "bg-amber-50 border-amber-200",
                },
              ].map((t) => (
                <div key={t.t} className={`rounded-xl p-4 border ${t.c}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{t.i}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p className="font-semibold text-sm text-ink">{t.t}</p>
                        <span className="text-xs bg-white/70 text-muted px-2.5 py-1 rounded-full border border-white/50">{t.b}</span>
                      </div>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{t.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 3-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Hanoi Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary covers mid-range spending (₫800,000–1,500,000/day, ~$32–60). Each day card is expandable. Budget and luxury alternatives are noted in the cost estimates. All prices in Vietnamese Dong (VND) with USD equivalents at ~₫25,000 = $1.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Old Quarter & Hoan Kiem Lake"
                cost="₫600,000–1,000,000 (~$24–40) excluding accommodation"
                items={[
                  "7:00am — Pho bo (beef pho) breakfast at a street stall in the Old Quarter. Follow the queues, not the reviews. A bowl of proper Hanoian pho costs ₫50,000–70,000 (~$2–3) and is a fundamentally different dish from what you get anywhere else in the world.",
                  "8:30am — Walk around Hoan Kiem Lake before the crowds. Ngoc Son Temple sits on Jade Island, connected by the iconic red Huc Bridge (₫30,000 entry, ~$1.20). The temple is dedicated to a 13th-century military hero and a giant turtle — yes, real turtles lived in the lake until recently.",
                  "10:00am — Explore the 36 guild streets of the Old Quarter on foot. Hang Gai for silk, Hang Bac for silver, Hang Ma for paper offerings. Each street was originally dedicated to a single craft guild — many still are. The best way to understand the grid is to get intentionally lost.",
                  "12:30pm — Bun cha lunch at a local spot — grilled pork patties with rice noodles and herbs, served with a sweet dipping broth. ₫60,000–80,000 (~$2.50–3). This is the dish Obama famously ate with Anthony Bourdain at Bun Cha Huong Lien on Le Van Huu street.",
                  "3:00pm — Bach Ma Temple (free) — the oldest temple in Hanoi, dating to 1010 AD, tucked away on Hang Buom street in the heart of the Old Quarter.",
                  "5:00pm — Hoa Lo Prison Museum (₫30,000, ~$1.20). Originally a French colonial prison, later used during the Vietnam War to hold American prisoners of war. Sobering, well-curated, and essential for understanding Hanoi&apos;s history.",
                  "7:00pm — Bia hoi corner at the junction of Ta Hien and Luong Ngoc Quyen streets. Freshly brewed draught beer served on the pavement for ₫10,000 per glass (~$0.40). This is the cheapest beer in the world and the atmosphere on a warm evening is one of the best in Southeast Asia.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Ho Chi Minh Mausoleum, Temple of Literature & West Lake"
                cost="₫500,000–900,000 (~$20–36) excluding accommodation"
                items={[
                  "7:30am — Ho Chi Minh Mausoleum (free, open Tues/Thurs/Sat/Sun 7:30–10:30am only). Arrive early — the queue can stretch for 30+ minutes. Dress modestly (no shorts or tank tops), no cameras inside. The preserved body of Ho Chi Minh lies in a glass case in a massive Soviet-style structure.",
                  "9:30am — One Pillar Pagoda (free) — a 5-minute walk from the mausoleum. Built in 1049, this tiny wooden pagoda on a single stone pillar rising from a lotus pond is one of Hanoi&apos;s most iconic images.",
                  "10:30am — Ho Chi Minh Museum (₫40,000, ~$1.60). Well-curated exhibits on the revolutionary leader&apos;s life and Vietnam&apos;s independence movement. Allow 1–1.5 hours.",
                  "12:00pm — Pho ga (chicken pho) lunch in Ba Dinh district, ₫60,000–80,000 (~$2.50–3). Chicken pho is lighter than the beef version and a perfect midday meal in warm weather.",
                  "2:00pm — Temple of Literature (₫30,000, ~$1.20). Vietnam&apos;s first university, founded in 1070, with peaceful gardens, a lotus pond, and 82 stone stelae listing the names of doctoral graduates spanning centuries. The most beautiful and peaceful cultural site in Hanoi.",
                  "4:00pm — Tay Ho (West Lake) walk along the shore. Visit Tran Quoc Pagoda (free), the oldest Buddhist pagoda in Hanoi, sitting on a small island connected to the shore. The late afternoon light on the water is excellent for photography.",
                  "7:00pm — Egg coffee (ca phe trung) at Giang Cafe (₫35,000 per cup, ~$1.40). Head upstairs in the alley off Nguyen Huu Huan street. Whipped egg yolk, sugar and condensed milk over strong Vietnamese coffee — it tastes like liquid tiramisu. This cafe invented the drink in 1946.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Train Street, Day Trip Options & Farewell"
                cost="₫500,000–800,000 (~$20–32) excluding accommodation and day trip"
                items={[
                  "7:00am — Breakfast banh mi from a street vendor (₫25,000–40,000, ~$1–1.60). The Hanoi-style banh mi is smaller and simpler than the southern version — pate, pickled vegetables, herbs, and chilli in a crispy French-style baguette.",
                  "8:30am — Train Street (Phung Hung) — the narrow residential street where trains pass within centimetres of houses. Cafes line the tracks. Note: access is periodically restricted by police; check current status. Trains pass at roughly 3:30pm and 7:30pm daily. Morning visits are for the atmosphere; afternoon for the actual train.",
                  "Option A: Ninh Binh day trip — bus from My Dinh station (₫70,000 each way, ~$3, 2.5 hours). Rent a bicycle (₫50,000, ~$2) to explore Tam Coc rice fields and take a boat through the limestone caves. Known as Halong Bay on land — the same dramatic karst landscape without the overnight cruise commitment.",
                  "Option B: Bat Trang Pottery Village — 45 minutes by bus or Grab (₫100,000–150,000 round trip, ~$4–6). Make your own ceramic at family workshops that have been producing pottery for over 500 years. A hands-on, less touristy half-day experience.",
                  "Return by 5pm — Browse Dong Xuan Market, Hanoi&apos;s largest covered market (est. 1889). Better prices on lacquerware, silk, and ceramics than the tourist shops. Bargain hard — start at 40% of asking price.",
                  "7:00pm — Final dinner: banh cuon (steamed rice rolls filled with minced pork and wood ear mushrooms) at a local restaurant, ₫50,000–70,000 (~$2–3). One of Hanoi&apos;s most delicate and underappreciated dishes.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Hanoi" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important landmarks and cultural sites in order of priority. Entry fees are as of early 2026. Most sites close by 5pm — plan accordingly.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Hoan Kiem Lake & Ngoc Son Temple",
                  e: "₫30,000 (~$1.20)",
                  d: "The spiritual heart of Hanoi. The lake sits at the centre of the Old Quarter, and Ngoc Son Temple on Jade Island is reached via the red-painted Huc Bridge. Visit at dawn (6am) for tai chi practitioners and mist on the water, or at dusk for golden light on the bridge. The temple honours Tran Hung Dao, the 13th-century general who repelled the Mongol invasion.",
                  t: "Must see · Dawn/Dusk · 1 hr",
                },
                {
                  n: "Ho Chi Minh Mausoleum",
                  e: "Free",
                  d: "The preserved body of Ho Chi Minh in a glass case inside a massive Soviet-style granite structure. Open Tues/Thurs/Sat/Sun 7:30–10:30am only — closed for maintenance September–November. No cameras, no shorts, no tank tops. The queue moves quickly but arrive by 7:30am. Regardless of politics, it is a significant cultural experience.",
                  t: "Must see · Morning only · 1 hr",
                },
                {
                  n: "Temple of Literature (Van Mieu)",
                  e: "₫30,000 (~$1.20)",
                  d: "Vietnam&apos;s first university, founded in 1070 and dedicated to Confucius. Five courtyards lead through gardens, lotus ponds, and halls containing 82 stone stelae on the backs of stone turtles — each listing the names and birthplaces of doctoral graduates. The most peaceful and architecturally beautiful site in Hanoi.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Old Quarter — 36 Guild Streets",
                  e: "Free",
                  d: "Hanoi&apos;s historic commercial heart, where each street was dedicated to a single trade guild. Hang Gai (silk), Hang Bac (silver), Hang Ma (paper goods), Hang Thiec (tinware). The narrow streets are packed with motorbikes, street vendors, and tiny shopfronts. Best explored on foot with no particular plan — getting lost is the point.",
                  t: "Must see · Half day",
                },
                {
                  n: "Hoa Lo Prison (Hanoi Hilton)",
                  e: "₫30,000 (~$1.20)",
                  d: "Built by French colonists in 1896 to hold Vietnamese political prisoners, later used during the Vietnam War for American prisoners of war (who nicknamed it the Hanoi Hilton). Well-curated exhibits cover both periods. Sobering and essential for understanding Hanoi&apos;s 20th-century history.",
                  t: "Important · 1 hr",
                },
                {
                  n: "Train Street (Phung Hung)",
                  e: "Free",
                  d: "A narrow residential street where the national railway passes within centimetres of front doors. Cafes line the tracks and tourists gather to watch the train rumble through. Access is periodically restricted by police for safety. Trains pass at approximately 3:30pm and 7:30pm daily. Check locally before visiting.",
                  t: "Unique · Check access · 30 min",
                },
              ].map((place) => (
                <div key={place.n} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-stone-900">{place.n}</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs text-teal font-medium bg-teal/10 px-2 py-0.5 rounded-full">{place.e}</span>
                      <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">{place.t}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{place.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <DestinationGallery
            title="Hanoi — Old Quarter, Temples &amp; Street Life"
            subtitle="A thousand-year-old capital where every street corner has a story and every alley hides a food stall."
            spots={[
              {
                name: "Hoan Kiem Lake at Dawn",
                query: "hoan kiem lake hanoi sunrise red bridge temple mist morning",
                desc: "The spiritual heart of Hanoi at its most peaceful — tai chi practitioners, mist on the water, and the red Huc Bridge catching the first light.",
              },
              {
                name: "Old Quarter Guild Streets",
                query: "hanoi old quarter street motorbikes lanterns narrow alley vietnam",
                desc: "Thirty-six guild streets dating back centuries — each dedicated to a single trade, now a sensory overload of commerce, street food, and motorbikes.",
              },
              {
                name: "Temple of Literature",
                query: "temple of literature hanoi vietnam garden courtyard stone stele",
                desc: "Vietnam&apos;s first university, founded in 1070 — peaceful gardens, lotus ponds, and 82 stone stelae listing centuries of doctoral graduates.",
              },
              {
                name: "Ho Chi Minh Mausoleum",
                query: "ho chi minh mausoleum hanoi vietnam ba dinh square granite",
                desc: "The imposing Soviet-style granite structure in Ba Dinh Square, where the preserved body of Ho Chi Minh lies in state.",
              },
              {
                name: "Street Food Culture",
                query: "hanoi street food pho bun cha plastic stools vendor vietnam",
                desc: "The world&apos;s best street food city — plastic stools, three-generation pho stalls, and meals that cost less than a coffee back home.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Hanoi is one of the cheapest capital cities in Southeast Asia. Budget travellers can live well on ₫500,000–800,000/day ($20–32), mid-range on ₫1,500,000–2,500,000/day ($60–100), and luxury on ₫4,000,000+/day ($160+). All prices in Vietnamese Dong (VND) and USD at ~₫25,000 = $1.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category (per day)</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">💎 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation", "₫250,000–400,000 ($10–16)", "₫700,000–1,200,000 ($28–48)", "₫2,500,000–6,000,000 ($100–240)"],
                    ["🍽 Food & Drinks", "₫100,000–150,000 ($4–6)", "₫300,000–600,000 ($12–24)", "₫800,000–2,000,000 ($32–80)"],
                    ["🚗 Transport", "₫50,000–100,000 ($2–4)", "₫200,000–400,000 ($8–16)", "₫500,000–1,500,000 ($20–60)"],
                    ["🎯 Activities", "₫50,000–100,000 ($2–4)", "₫200,000–400,000 ($8–16)", "₫500,000–1,000,000 ($20–40)"],
                    ["TOTAL (per day)", "₫450,000–750,000 ($18–30)", "₫1,400,000–2,600,000 ($56–104)", "₫4,300,000–10,500,000 ($172–420)"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (₫450k–750k/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostels and guesthouses (₫150,000–300,000/night), street food meals (₫40,000–70,000), local buses and walking. Hanoi is one of the cheapest backpacker destinations in Asia — a full day of sightseeing, three meals, and a bed costs less than a single restaurant meal in most Western capitals.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">✨ Mid-Range (₫1.4M–2.6M/day)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">Boutique hotels in the Old Quarter (₫700,000–1,200,000/night), a mix of street food and restaurant dining, Grab rides, and guided tours. The sweet spot for comfort and authentic experience without budget anxiety.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (₫4.3M+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">5-star hotels like the Sofitel Legend Metropole (₫5,000,000+/night), private tours, fine dining at French-Vietnamese fusion restaurants, and spa treatments. Hanoi luxury is exceptional value — $200/night gets you what would cost $600+ in Europe or Japan.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Hanoi</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key decision is which neighbourhood to base yourself. The Old Quarter puts you at the centre of the action — street food, Hoan Kiem Lake, and nightlife are all on your doorstep. The French Quarter is quieter with wider streets and colonial architecture. West Lake (Tay Ho) is the expat neighbourhood with lakeside dining and a more relaxed pace.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Old Quarter Guesthouses",
                  type: "Budget · Old Quarter",
                  price: "From ₫200,000/night (~$8)",
                  badge: "Best budget",
                  desc: "Dozens of family-run guesthouses on Ma May, Hang Bac, and surrounding streets. Clean rooms with air conditioning, hot water, and often breakfast included. You are 5 minutes walk from Hoan Kiem Lake, surrounded by street food, and the bia hoi corner is on your doorstep. The noise is real — bring earplugs for early nights.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Hanoi La Siesta Hotel & Spa",
                  type: "Boutique · Old Quarter",
                  price: "From ₫1,000,000/night (~$40)",
                  badge: "Mid-range pick",
                  desc: "Consistently rated one of the best boutique hotels in the Old Quarter. Beautiful rooms with Vietnamese design touches, excellent breakfast, rooftop bar with lake views, and a spa. The staff are exceptionally helpful with restaurant recommendations and transport. Walking distance to everything in the Old Quarter.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Sofitel Legend Metropole Hanoi",
                  type: "Luxury · French Quarter",
                  price: "From ₫5,000,000/night (~$200)",
                  badge: "Luxury pick",
                  desc: "The most historic hotel in Vietnam, operating since 1901. French colonial architecture, impeccable service, the Bamboo Bar for afternoon tea, and Le Beaulieu restaurant for fine dining. Graham Greene, Charlie Chaplin, and Jane Fonda all stayed here. The bomb shelter beneath the hotel is open for tours. Worth the splurge for at least one night.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "West Lake (Tay Ho) area",
                  type: "Mid-range · West Lake",
                  price: "From ₫600,000/night (~$24)",
                  badge: "Quiet retreat",
                  desc: "The expat neighbourhood around West Lake has boutique hotels, serviced apartments, and lakeside dining. Quieter than the Old Quarter, with excellent restaurants and cafes along Xuan Dieu street. You are 15 minutes by Grab from the Old Quarter. Best for travellers who want a calmer base with easy access to the centre.",
                  color: "border-teal-200 bg-teal-50",
                },
              ].map((stay) => (
                <div key={stay.name} className={`rounded-xl p-4 border ${stay.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{stay.name}</p>
                      <p className="text-xs text-muted font-light">{stay.type}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs bg-white/80 text-ink px-2.5 py-1 rounded-full border border-white/60">{stay.price}</span>
                      <span className="text-xs bg-gold/15 text-gold-dark px-2 py-0.5 rounded-full font-medium">{stay.badge}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{stay.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHERE TO EAT ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Hanoi</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Hanoi is arguably the best street food city in the world. The single most important rule: the best food is at the stalls with plastic stools and no English menu. Follow the queues, not the Google reviews. Here are the dishes and spots worth seeking out.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Pho Thin (Pho Bo)",
                  t: "Beef pho · 13 Lo Duc Street",
                  d: "Widely regarded as the best pho in Hanoi. The broth has been simmered for 12+ hours with star anise, cinnamon, and charred ginger. Thin slices of beef are cooked by the boiling broth as it is poured into your bowl. ₫50,000–70,000 (~$2–3). Open from 6am. The queue is long but moves fast — eat standing at the counter like the locals.",
                  b: "Must eat",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Bun Cha Huong Lien (Obama Bun Cha)",
                  t: "Bun cha · 24 Le Van Huu Street",
                  d: "The restaurant where Barack Obama and Anthony Bourdain ate bun cha on camera. The table they sat at is now behind glass. The food is genuinely excellent — smoky grilled pork patties, fresh rice noodles, herbs, and a sweet-sour dipping broth. ₫60,000–80,000 (~$2.50–3). Lunch only — arrive before noon to avoid the wait.",
                  b: "Iconic",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Giang Cafe (Egg Coffee)",
                  t: "Ca phe trung · 39 Nguyen Huu Huan",
                  d: "The cafe that invented egg coffee in 1946. Whipped egg yolk, sugar, and condensed milk over strong Vietnamese drip coffee — it tastes like liquid tiramisu. ₫35,000 per cup (~$1.40). Head upstairs through the narrow alley entrance. The original recipe has never changed. Every other egg coffee in Hanoi is a copy of this one.",
                  b: "Must drink",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Banh Mi 25",
                  t: "Banh mi · 25 Hang Ca Street",
                  d: "One of the best banh mi spots in the Old Quarter. Crispy baguette, pate, pickled vegetables, fresh herbs, chilli, and your choice of filling. ₫25,000–40,000 (~$1–1.60). The Hanoi-style banh mi is smaller and more delicate than the southern version — pate-forward rather than meat-heavy. Open from 7am.",
                  b: "Quick bite",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Bia Hoi Corner (Ta Hien Street)",
                  t: "Street beer · Ta Hien & Luong Ngoc Quyen",
                  d: "The cheapest beer in the world. Bia hoi is freshly brewed draught beer served from metal kegs on the pavement, ₫10,000 per glass (~$0.40). The corner where Ta Hien meets Luong Ngoc Quyen is the most famous spot — plastic stools, no menu, just point at what your neighbour is drinking. The beer is light (3–4% ABV) and surprisingly refreshing.",
                  b: "Iconic",
                  c: "bg-parchment border-parchment-2",
                },
              ].map((r) => (
                <div key={r.n} className={`rounded-xl p-4 border ${r.c}`}>
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{r.n}</p>
                      <p className="text-xs text-muted font-light">{r.t}</p>
                    </div>
                    <span className="text-xs bg-white/80 text-amber-700 px-2.5 py-1 rounded-full border border-amber-200 font-medium">{r.b}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{r.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate Block */}
          <AffiliateBlock
            destination="Hanoi Vietnam"
            hotels={[
              {
                name: "Old Quarter Guesthouse",
                type: "Budget Guesthouse · Old Quarter",
                price: "From ₫200,000/night (~$8)",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/city/vn/hanoi.html?aid=2820480",
              },
              {
                name: "Hanoi La Siesta Hotel & Spa",
                type: "Boutique Hotel · Old Quarter",
                price: "From ₫1,000,000/night (~$40)",
                rating: "5",
                badge: "Mid-range pick",
                url: "https://www.booking.com/hotel/vn/hanoi-la-siesta.html?aid=2820480",
              },
              {
                name: "Sofitel Legend Metropole Hanoi",
                type: "Luxury Historic Hotel · French Quarter",
                price: "From ₫5,000,000/night (~$200)",
                rating: "5",
                badge: "Luxury pick",
                url: "https://www.booking.com/hotel/vn/sofitel-legend-metropole-hanoi.html?aid=2820480",
              },
              {
                name: "West Lake Boutique Hotels",
                type: "Mid-Range · Tay Ho District",
                price: "From ₫600,000/night (~$24)",
                rating: "4",
                badge: "Quiet retreat",
                url: "https://www.booking.com/district/vn/hanoi/tayho.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Hanoi Street Food Walking Tour",
                duration: "3 hours",
                price: "From ₫500,000/person (~$20)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=hanoi+street+food+tour&partner_id=PSZA5UI",
              },
              {
                name: "Ninh Binh Day Trip from Hanoi",
                duration: "Full day",
                price: "From ₫600,000/person (~$24)",
                badge: "Day trip",
                url: "https://www.getyourguide.com/s/?q=ninh+binh+day+trip+from+hanoi&partner_id=PSZA5UI",
              },
              {
                name: "Halong Bay Day Cruise",
                duration: "Full day",
                price: "From ₫1,200,000/person (~$48)",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=halong+bay+day+trip+from+hanoi&partner_id=PSZA5UI",
              },
              {
                name: "Hanoian Cooking Class",
                duration: "Half day",
                price: "From ₫800,000/person (~$32)",
                url: "https://www.getyourguide.com/s/?q=hanoi+cooking+class&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🛵",
                  title: "Not using Grab for transport",
                  desc: "Xe om (motorbike taxis) and unmarked taxis will negotiate 3–5x the fair price. Always use the Grab app — transparent pricing, safe drivers, no haggling. Download it before you land. Airport taxis are the worst offenders — use Grab or Bus 86 instead.",
                },
                {
                  icon: "🌧️",
                  title: "Visiting in July–August without preparation",
                  desc: "Peak summer brings 35°C+ heat, high humidity, and heavy afternoon thunderstorms. The Old Quarter becomes tiring to walk by midday. If you must visit in summer, plan sightseeing for 6–10am and 4–7pm, carry a rain jacket, and rest during the afternoon heat.",
                },
                {
                  icon: "💵",
                  title: "Using USD when VND is better",
                  desc: "While USD is accepted in tourist areas, you always get a worse exchange rate. Withdraw Vietnamese Dong from Techcombank or Vietcombank ATMs — they have the lowest fees. Avoid airport exchange counters. ₫25,000 = approximately $1 USD. Carry small bills — street vendors rarely have change for ₫500,000 notes.",
                },
                {
                  icon: "🍜",
                  title: "Eating only at tourist restaurants",
                  desc: "The best pho in Hanoi is at street stalls with plastic stools, not restaurants with English menus and air conditioning. Tourist-facing restaurants on the main Old Quarter streets charge 3–5x local prices for inferior food. Follow the queues, not the Google reviews. Ask your hotel staff where they eat lunch — that is where the real food is.",
                },
                {
                  icon: "🚶",
                  title: "Trying to cross the road like back home",
                  desc: "Hanoi traffic does not stop for pedestrians. The technique: walk at a steady, predictable pace and the motorbikes will flow around you. Do not stop, run, or make sudden movements. It feels terrifying the first time and completely natural by the third crossing. Watch locals and copy their pace.",
                },
              ].map((m) => (
                <TipCard
                  key={m.title}
                  icon={m.icon}
                  title={m.title}
                  desc={m.desc}
                  color="bg-white border-parchment-2"
                />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Hanoi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "☕",
                  title: "Find egg coffee before you leave",
                  desc: "Egg coffee (ca phe trung) is a Hanoi invention — whipped egg yolk, sugar and condensed milk over strong coffee. Giang Cafe is the original (since 1946). It tastes like liquid tiramisu and exists nowhere else in quite the same form. Do not leave Hanoi without trying it at least once.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🕐",
                  title: "Visit Hoan Kiem Lake at 6am",
                  desc: "By 9am it is full of tourists. At 6am, it is locals doing tai chi, elderly couples walking, and food carts setting up. The best street photography window of the day. The mist on the water and the red bridge in the morning light is the most atmospheric scene in Hanoi.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🛍️",
                  title: "Dong Xuan Market for real shopping",
                  desc: "Skip the tourist shops on Hang Gai. Dong Xuan covered market (est. 1889) has better prices on lacquerware, silk, ceramics, and Vietnamese coffee. Bargain hard — start at 40% of asking price. The upper floors have fewer tourists and better deals than the ground floor.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🚌",
                  title: "Ninh Binh over Halong Bay for 3-day trips",
                  desc: "If you only have 3 days, Ninh Binh (2.5 hrs by bus) gives the same limestone karst landscape as Halong Bay without the overnight cruise commitment and at a fraction of the cost. Save Halong Bay for a trip with 4+ days — the overnight cruises are worth it but need a full extra day.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "📱",
                  title: "Buy a local SIM at the airport",
                  desc: "Viettel or Mobifone SIMs cost ₫100,000–150,000 (~$4–6) for 30 days of data at the airport counters. You need data for Grab, Google Maps, and Google Translate (the camera translation feature is invaluable for menus). Do not leave the airport without a working SIM.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "💧",
                  title: "Never drink tap water",
                  desc: "Tap water in Hanoi is not safe to drink. Buy bottled water (₫10,000–15,000 per 1.5L at convenience stores) or use a filtered bottle. Most hotels provide free filtered water. Ice in restaurants is generally safe — it is made from purified water in factories. Street-side ice (irregular chunks) may not be.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Hanoi" />

          {/* Combine With */}
          <CombineWith currentSlug="hanoi-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Hanoi safe for solo female travellers?",
                  a: "Yes — Hanoi is one of Southeast Asia's safer capitals. Petty theft (bag snatching by motorbike) does happen on busy streets. Keep bags on the inside of your body, away from the road. The Old Quarter night areas around Ta Hien street are well-lit and busy until late. Use Grab for transport at night rather than walking alone in quiet areas.",
                },
                {
                  q: "What's the best way to get from Hanoi airport to the city?",
                  a: "Grab taxi app is the easiest — around ₫200,000–300,000 (~$8–12) to the Old Quarter, 45 minutes. Airport bus 86 (₫35,000, ~$1.40) runs directly to Hoan Kiem area every 20 minutes from 5am–11pm. Avoid unmarked taxis outside arrivals — they charge 3–5x the fair price.",
                },
                {
                  q: "How much should I budget for Hanoi per day?",
                  a: "Budget travellers can manage on ₫500,000–800,000 per day ($20–32) including hostel dorm, street food, and local transport. Mid-range is ₫1,500,000–2,500,000 ($60–100) with boutique hotel, restaurant meals, and Grab rides. Luxury hotels alone start at ₫2,500,000/night ($100+).",
                },
                {
                  q: "Can I drink tap water in Hanoi?",
                  a: "No — tap water is not safe to drink. Buy bottled water (₫10,000–15,000 per 1.5L at convenience stores) or use a filtered bottle. Most guesthouses and hotels provide free filtered water. Ice in established restaurants is safe (factory-made from purified water).",
                },
                {
                  q: "What's the difference between Hanoi and Ho Chi Minh City?",
                  a: "Hanoi (north) is older, slower, more traditional, and has the best street food in Vietnam — especially pho and bun cha. Ho Chi Minh City (south) is faster, more modern, more international, and has better nightlife. First-time Vietnam visitors should ideally see both — they are connected by multiple daily flights (2 hours, from $25 one-way).",
                },
                {
                  q: "Do I need to tip in Hanoi restaurants?",
                  a: "Tipping is not expected at street food stalls. At mid-range restaurants, rounding up the bill or leaving 5–10% is appreciated but not mandatory. High-end restaurants may include a 5–10% service charge on the bill. Tip tour guides (₫100,000–200,000 per day) and drivers (₫50,000–100,000) separately.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto px-6 md:px-8 mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Hanoi trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-vietnam", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/vietnam-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-hanoi", label: "How to get there", icon: "✈️" },
                { href: "/blog/vietnam-travel-tips", label: "Travel tips", icon: "📋" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-parchment border border-parchment-2 rounded-xl hover:border-gold hover:shadow-sm transition-all text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-ink leading-tight">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Guides */}
          <RelatedGuides currentSlug="hanoi-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Southeast Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Ho Chi Minh City &mdash; 3 Day Guide", href: "/blog/ho-chi-minh-city-3-days" },
                { label: "Ha Long Bay &mdash; 3 Day Guide", href: "/blog/ha-long-bay-3-days" },
                { label: "Bangkok &mdash; 4 Day Guide", href: "/blog/bangkok-4-days" },
                { label: "Singapore &mdash; 3 Day Guide", href: "/blog/singapore-3-days" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group"
                >
                  <span
                    className="text-sm text-ink font-light group-hover:text-teal transition-colors"
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  />
                  <span className="text-xs text-muted">Read →</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
