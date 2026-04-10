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
import { usePageUrl } from "@/lib/hooks";

const COONOOR_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "tea",       emoji: "🍵", label: "Tea Guide" },
  { id: "budget",    emoji: "💰", label: "Budget Breakdown" },
  { id: "mistakes",  emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",      emoji: "💡", label: "Pro Tips" },
  { id: "faq",       emoji: "❓", label: "FAQ" },
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
        className="h-full bg-gold transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ── Share Button ──────────────────────────────────────────────────────────────
function ShareBar() {
  const pageUrl = usePageUrl();
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Coonoor 2-Day Itinerary&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Coonoor in 2 Days guide&url=${pageUrl}` },
      ].map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}>
          {s.label}
        </a>
      ))}
      <button onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">
        {copied ? "✓ Copied" : "Copy Link"}
      </button>
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
function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
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
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">●</span>
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

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function CoonoorClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹4k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹4k–10k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={COONOOR_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Coonoor" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="nilgiri tea estate coonoor green hills misty"
            fallback="https://images.unsplash.com/photo-1544948503-7ad532b5cc6c?w=1600&q=85"
            alt="Nilgiri tea estate Coonoor green terraced hills mist"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          {/* Breadcrumb overlay */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Coonoor 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Nilgiris Tea Country
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Coonoor in 2 Days: Tea Estates,
                <em className="italic text-gold-light"> Toy Train &amp; Dolphin&apos;s Nose</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The quieter Nilgiris town with better tea, better views, and the UNESCO rack railway that climbs through the mist. Two complete plans — one that starts on the train, one that doesn&apos;t.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇮🇳 Tamil Nadu</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹2,500</span>
            </div>
          </div>

          {/* Intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The toy train pulled out of Coonoor station at 7 AM into solid white mist. By the time we cleared the first tunnel, the valley had opened up below and the tea estates were glowing green. An hour later, Ooty. I took the bus back.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Coonoor sits at 1,850m in the Nilgiris, 19 km below Ooty but far less crowded. Most visitors treat it as a stop on the toy train route — but Coonoor deserves 2 full days. Sim&apos;s Park (1874, 1,000+ plant species), Dolphin&apos;s Nose viewpoint (best before 9 AM when the valley fills with mist), and the tea estates that produce some of India&apos;s finest Orthodox teas. The toy train is the experience — but so is staying still and watching the mist move through the Nilgiris.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="☀️" label="Best Season" value="Oct–May" />
            <StatCard icon="⛰️" label="Altitude" value="1,850 m" />
            <StatCard icon="🚗" label="Distance from Coimbatore" value="75 km" />
            <StatCard icon="⭐" label="Rating" value="4.5★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Coonoor is pleasant year-round but has a clear best season and a rainy one that&apos;s still beautiful.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Feb", emoji: "✅", title: "Peak Season", desc: "12–22°C. Best clarity for Dolphin's Nose views. Mild weather for walking through estates. Fewer crowds than March–May. The most reliably clear days of the year.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Mar–May", emoji: "☀️", title: "Warm & Pleasant", desc: "15–25°C. Busiest period (Indian school holidays). Book accommodation ahead. Toy train sells out. Still very beautiful — the tea estates are lush and the mornings are clear.", color: "bg-amber-50 border-amber-200" },
                { season: "Jun–Sep", emoji: "🌧️", title: "Monsoon", desc: "Heavy rain, waterfalls at their fullest, estates intensely green. Rates drop 30–40%. Roads can be slippery. Toy train cancels in heavy showers. Carry waterproof gear.", color: "bg-blue-50 border-blue-200" },
              ].map((s) => (
                <div key={s.season} className={`rounded-xl border p-5 ${s.color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{s.emoji}</span>
                    <span className="text-xs font-semibold tracking-widest uppercase text-muted">{s.season}</span>
                  </div>
                  <p className="font-serif text-base text-ink mb-2">{s.title}</p>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── PICK YOUR PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Pick Your Plan</h2>
            <p className="text-sm text-muted font-light mb-6">Same 2-day route, two comfort levels. Coonoor has some of India&apos;s finest colonial heritage accommodation at mid-range prices.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-5 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan →</p>
                </button>
              ))}
            </div>

            {/* Plan comparison */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-parchment-2">
                    <th className="text-left py-3 pr-4 text-muted font-medium uppercase tracking-wider">Category</th>
                    <th className="text-left py-3 px-4 text-amber-700 font-medium">Budget</th>
                    <th className="text-left py-3 px-4 text-teal font-medium">Comfortable</th>
                  </tr>
                </thead>
                <tbody className="text-muted font-light">
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Guesthouses (₹700–1200/night)</td><td className="py-2.5 px-4">Heritage bungalow / Prospect Hotel (₹2500–5000/night)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Train</td><td className="py-2.5 px-4">2nd class toy train (₹30)</td><td className="py-2.5 px-4">1st class toy train (₹100) + plantation tour</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Tea</td><td className="py-2.5 px-4">Estate shop / Co-op tasting</td><td className="py-2.5 px-4">Private plantation tour + curated tasting</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹4,000</td><td className="py-2.5 px-4 font-medium text-teal">₹4,000–10,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive (toy train or bus), Sim&apos;s Park, Lamb&apos;s Rock, tea tasting. Day 2: Dolphin&apos;s Nose (morning), Law&apos;s Falls, optional Ooty day trip.
            </p>

            {/* Plan tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                    activeTab === p.id
                      ? `${p.color} shadow-sm`
                      : "bg-white border border-parchment-2 text-muted hover:border-gold"
                  }`}>
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {/* ── Day 1 ── */}
              <DayCard
                day="Day 1"
                title="Arrive + Sim's Park + Lamb's Rock + Tea Tasting"
                items={[
                  activeTab === "A"
                    ? "Arrive by TNSTC bus from Coimbatore (2–2.5 hrs, ₹80–100, regular service). Or take the Nilgiri Mountain Railway from Mettupalayam: 2nd class ₹30 (book IRCTC in advance — it sells out). The toy train takes 3 hours to Coonoor on India's steepest rack railway."
                    : "Take the Nilgiri Mountain Railway 1st class (₹100, book IRCTC 60 days ahead — it sells out instantly). The Mettupalayam–Coonoor stretch is the most dramatic: the train climbs 1,200m in 45 km using a rack-and-pinion system. Or hire a private car from Coimbatore (₹1500–2000, 2 hrs).",
                  activeTab === "A"
                    ? "Check in to guesthouse (₹700–1200). Several decent options near Coonoor Town and Upper Coonoor."
                    : "Check in to Prospect Hotel (heritage, ₹2500–4000) or The Bungalow on the Hill (₹5000–9000). Heritage properties in Coonoor are exceptional value compared to similar stays in Ooty.",
                  "Sim's Park (established 1874) — a 12-acre botanical garden on a terraced hillside. Over 1,000 plant species including rare tree ferns, magnolias, and Nilgiris endemic plants. Entry ₹30. Allow 1.5 hours. The rose garden peaks in May.",
                  "Lamb's Rock viewpoint (3 km from Sim's Park) — stands above a deep mist valley. On clear days, the plains far below are visible. On misty days, you look down into white cloud. Both are beautiful.",
                  "Evening: tea tasting at an estate shop. Any Nilgiris Cooperative store carries reliable quality. Buy loose-leaf 'Nilgiri Orthodox' (not CTC dust) for the finest flavour.",
                  activeTab === "A" ? "Dinner at a local restaurant near the market. Filter coffee is exceptional in Coonoor — have it after dinner." : "Dinner at The Only Place or your heritage hotel restaurant. The Continental food in Coonoor is a holdover from the British planter era and surprisingly good.",
                ]}
                cost={activeTab === "A" ? "₹2,000" : "₹4,000–7,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Dolphin's Nose (Early) + Law's Falls + Optional Ooty"
                items={[
                  "7:00am: Depart for Dolphin's Nose viewpoint (14 km by road). Go now — by noon the valley fills with mist and the view disappears completely.",
                  activeTab === "A"
                    ? "Take a shared auto or taxi to the trailhead (₹200–300 shared). The Dolphin's Nose trek (6 km one way through tea estates) is beautiful if you have energy — hire a local guide (₹200) or follow the estate roads. Otherwise drive directly."
                    : "Private taxi to the viewpoint (₹400–600). If you prefer the trek, arrange for the taxi to meet you at the far end. The 6 km walk through tea estates is one of Coonoor's finest experiences.",
                  "Dolphin's Nose: named for its shape, a rocky outcrop jutting over the valley. On a clear morning, Catherine Falls (one of Tamil Nadu's highest) is visible in the distance across the gorge.",
                  "Law's Falls (on the return route) — a 180ft waterfall that flows year-round. Most dramatic in monsoon but still impressive in the dry season.",
                  activeTab === "A"
                    ? "Optional: bus to Ooty (19 km, 45 min, ₹30). The Government Botanical Garden (₹30 entry) is worth 1 hour. Return by the last toy train (2 hrs) or bus (45 min). Total Ooty detour: 4–5 hours."
                    : "Optional: toy train from Coonoor to Ooty (2 hrs, ₹100, book IRCTC). Walk Ooty's Botanical Garden and Charing Cross market. Return by taxi (₹600). Or stay in Coonoor and book a private plantation tour — Chamraj Estate and Korakundah offer guided visits (₹500–1000, call ahead).",
                  "Depart for Coimbatore by bus (₹80–100, 2.5 hrs) or private taxi (₹1500–2000). Coimbatore airport has flights to Chennai, Mumbai, Bangalore.",
                ]}
                cost={activeTab === "A" ? "₹1,800" : "₹3,500–6,000"}
              />
            </div>
          </section>

          {/* ── TEA GUIDE ── */}
          <section id="tea" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🍵 Nilgiris Tea Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Nilgiri tea is India&apos;s most underrated — lighter and more floral than Darjeeling, with a bright, brisk character. Here&apos;s what to buy and where.
            </p>
            <div className="space-y-4">
              {[
                { rank: "#1", name: "Nilgiri FTGFOP1", type: "Whole-leaf Orthodox", price: "₹400–800/100g", note: "Finest Tippy Golden Flowery Orange Pekoe — the highest Nilgiri grade. Bright, brisk, slightly floral. Best drunk without milk. Look for it at estate shops and the Nilgiris Co-operative store. Not available in most supermarkets.", emoji: "🍵", color: "bg-emerald-50 border-emerald-200" },
                { rank: "#2", name: "Korakundah Estate", type: "High-altitude Orthodox", price: "₹600–1200/100g", note: "Produces tea at 2,400m — among the highest-altitude gardens in India. Extremely delicate flavour. Ask for it specifically at the estate or co-op. A distinctive Coonoor buy.", emoji: "🌿", color: "bg-amber-50 border-amber-200" },
                { rank: "#3", name: "Chamraj Estate", type: "Direct estate purchase", price: "₹300–600/100g", note: "One of the best estate-direct purchases in Coonoor. Consistent quality, good packaging for gifting. Tours available if booked in advance. The estate tea is reliably fresher than anything on the market.", emoji: "🫖", color: "bg-amber-50 border-amber-200" },
                { rank: "#4", name: "Nilgiris Co-operative Store", type: "Fixed price, reliable", price: "₹200–500/100g", note: "Fixed prices mean no bargaining anxiety. Quality is vetted. Good for gifting — they have proper packaging. Located in Coonoor Town. The safest choice for first-time tea buyers.", emoji: "🏪", color: "bg-teal-50 border-teal-200" },
              ].map((t) => (
                <div key={t.name} className={`rounded-xl border p-5 ${t.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{t.emoji}</span>
                      <span className="text-xs font-bold text-gold-dark mt-1 block">{t.rank}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{t.name}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{t.type} · {t.price}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{t.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── TEA IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="tea plantation workers picking leaves south india"
              fallback="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=900&q=80"
              alt="Tea plantation workers picking leaves Nilgiris Coonoor"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Nilgiris produces over 25% of India&apos;s tea. What you buy in the bazaar is often repackaged CTC dust. Go to the estate shops or the Co-operative store for genuine Orthodox whole-leaf tea.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹4,000", color: "bg-amber-50 border-amber-200",
                  items: [["Stays (1 night)", "₹700–1,200"], ["Transport (bus + auto)", "₹500–800"], ["Food (2 days)", "₹600–1,000"], ["Toy train (2nd class)", "₹30–60"], ["Sim's Park + misc", "₹200–400"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹4,000–10,000", color: "bg-teal-50 border-teal-200",
                  items: [["Heritage stay (1 night)", "₹2,500–5,000"], ["Private taxi (2 days)", "₹1,500–2,500"], ["Food + café dining", "₹1,000–2,000"], ["1st class toy train", "₹100–200"], ["Tea + plantation tour", "₹500–1,200"]] },
              ].map((b) => (
                <div key={b.plan} className={`rounded-xl border p-5 ${b.color}`}>
                  <div className="text-center mb-4">
                    <span className="text-2xl">{b.emoji}</span>
                    <p className="font-serif text-base text-ink mt-1">{b.plan}</p>
                    <p className="font-serif text-xl text-ink font-medium mt-1">{b.total}</p>
                    <p className="text-xs text-muted uppercase tracking-wider">per person</p>
                  </div>
                  <div className="space-y-2">
                    {b.items.map(([k, v]) => (
                      <div key={k} className="flex justify-between text-xs">
                        <span className="text-muted font-light">{k}</span>
                        <span className="text-ink font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted font-light mt-4 italic">
              * All prices per person. Does not include travel from Coimbatore (₹80–100 bus, ₹1500–2000 taxi). Toy train must be booked at IRCTC.co.in — not available at the station on the day.
            </p>
          </section>

          <AffiliateBlock destination="Coonoor" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Going to Dolphin's Nose after 10 AM", desc: "By noon, the valley fills with mist and the view is completely obscured. This is one of the most common tourist disappointments in Coonoor. Go at 7–9 AM or not at all.", icon: "⏰" },
                { title: "Trying to book the toy train at the station", desc: "The Nilgiri Mountain Railway sells out weeks ahead, especially in peak season. Book at IRCTC.co.in at least 30–60 days ahead. There is no queue system at the station — if it's sold out, it's sold out.", icon: "🚂" },
                { title: "Buying tea at touristy shops on the main road", desc: "Most roadside shops near the station sell repackaged CTC dust as 'premium Nilgiri tea'. Go to the Nilgiris Co-operative store, Chamraj Estate, or Korakundah Estate for authentic Orthodox tea.", icon: "🍵" },
                { title: "Skipping Coonoor to spend all time in Ooty", desc: "Ooty is 19 km away and easy to visit as a day trip from Coonoor. But Coonoor has the better tea estates, heritage stays, and Dolphin's Nose. Don't use Coonoor as a base for Ooty and miss what makes Coonoor itself worthwhile.", icon: "🗺️" },
                { title: "Visiting in July–August expecting clear views", desc: "Monsoon brings heavy cloud cover. Dolphin's Nose, Lamb's Rock, and the valley views are all obscured for days at a time. If you come in monsoon, adjust expectations — the tea is greenest but the views are least reliable.", icon: "🌧️" },
                { title: "Not pre-booking heritage accommodation", desc: "Coonoor's colonial heritage properties (Taj Coonoor, The Bungalow on the Hill, Prospect Hotel) are limited in inventory. They fill 2–4 weeks ahead in peak season. Book as early as possible.", icon: "🏡" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🚂", title: "Toy Train is Unmissable", desc: "The Nilgiri Mountain Railway (Mettupalayam to Ooty via Coonoor) is UNESCO World Heritage and India's steepest rack railway (1:12.5 gradient). Book at IRCTC 60 days ahead — it sells out. The stretch from Mettupalayam to Coonoor is the most dramatic.", color: "bg-amber-50 border-amber-200" },
                { icon: "🍵", title: "Buy Tea at the Factory, Not Shops", desc: "Nilgiris Cooperative store, Chamraj Estate, and Korakundah Estate sell direct. Avoid touristy shops on the main road — they often repackage cheaper CTC tea as premium. Ask for 'Nilgiri Orthodox' (whole-leaf, not dust) for the finest flavour.", color: "bg-amber-50 border-amber-200" },
                { icon: "🌅", title: "Dolphin's Nose: Morning Only", desc: "By noon, mist fills the valley and the viewpoint is completely obscured. Go at 8–9 AM. The trek through tea estates (6 km, 2 hrs) is beautiful — hire a local guide (₹200) or follow the estate roads.", color: "bg-teal-50 border-teal-200" },
                { icon: "🍽️", title: "Coonoor vs Ooty for Food", desc: "Coonoor has fewer restaurants but better quality. Try Pastry Corner for Nilgiris shortbread, The Only Place for Continental, and any estate café for fresh filter coffee (better than anywhere in Tamil Nadu's plains).", color: "bg-teal-50 border-teal-200" },
                { icon: "🌧️", title: "Monsoon in Coonoor (Jun–Sep)", desc: "Coonoor gets heavy rainfall. The tea is greenest, waterfalls are fullest, and rates drop 30–40%. Roads can be slippery. Carry a waterproof jacket. Toy train runs in light rain but cancels in heavy showers.", color: "bg-rose-50 border-rose-200" },
                { icon: "🏡", title: "Heritage Stays in Coonoor", desc: "Coonoor has some of India's finest colonial bungalow stays: Taj Coonoor (₹8000–15000), The Bungalow on the Hill (₹5000–9000), or Prospect Hotel (heritage, ₹2500–4000). These are Coonoor's main attraction for discerning travelers.", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates and group — we&apos;ll send a personalised Coonoor itinerary with toy train booking tips within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Coonoor Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Is Coonoor or Ooty better?", a: "Ooty is busier — the lake, botanical garden, and Charing Cross market draw heavy crowds. Coonoor is quieter with better tea estates and more authentic plantation experiences. Most travelers do Ooty as a day trip from Coonoor. If you can only choose one: Ooty for first-timers; Coonoor for returning visitors or those wanting peace." },
                { q: "How long does the Nilgiri Mountain Toy Train take?", a: "Mettupalayam to Coonoor: approximately 3 hours (45 km). Coonoor to Ooty: approximately 2 hours (19 km). The entire Mettupalayam–Ooty journey takes 5 hours. Most travelers take the train one way and bus the other. Book on IRCTC.co.in — it sells out weeks ahead." },
                { q: "What tea should I buy in Coonoor?", a: "Look for 'Nilgiri FTGFOP1' (Finest Tippy Golden Flowery Orange Pekoe) — the highest Nilgiri grade. Korakundah Estate produces some of the highest-altitude tea in India (2,400m). For gifting: the Nilgiris Co-operative store at Coonoor has fixed prices and reliable quality." },
                { q: "How to reach Coonoor from Coimbatore?", a: "Bus: Coimbatore to Coonoor (2–2.5 hrs, ₹80–100, regular TNSTC buses). Train: Coimbatore to Mettupalayam (45 min) then Nilgiri Railway to Coonoor (3 hrs). By road via taxi: 75 km, 2 hrs (₹1500–2000 private). Coimbatore airport has flights from Chennai, Mumbai, Bangalore." },
                { q: "What is the best trek near Coonoor?", a: "Dolphin's Nose trek (6 km through tea estates, moderate) is the most scenic. Lambsrock to Dolphin's Nose circuit (10 km, half-day) is excellent for birding. Kodanad Viewpoint trek (moderate, 8 km) offers views of the Moyar River gorge." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Coonoor — Highlights"
            subtitle="The best of Coonoor in photos."
            spots={[
              { name: "Coonoor Landscape", query: "coonoor india landscape scenic beautiful travel", desc: "The stunning landscapes of Coonoor." },
              { name: "Coonoor Temple", query: "coonoor temple architecture heritage india", desc: "Historic temples and architecture in Coonoor." },
              { name: "Coonoor Street Scene", query: "coonoor street market local culture india", desc: "Local life and culture in Coonoor." },
              { name: "Coonoor Nature", query: "coonoor nature hills forest river india", desc: "Natural beauty around Coonoor." },
              { name: "Coonoor Sunset", query: "coonoor sunset golden hour india travel", desc: "Coonoor at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Exploring the Nilgiris?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Ooty — 3 Days Complete Guide", href: "/blog/ooty-3-days" },
                { label: "Coimbatore — 2 Days City Guide", href: "/blog/coimbatore-2-days" },
                { label: "Kodaikanal — 3 Days Tamil Nadu Hills", href: "/blog/kodaikanal-3-days" },
                { label: "Browse All India Packages", href: "/#packages" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="coonoor-2-days" />
          <RelatedGuides currentSlug="coonoor-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
