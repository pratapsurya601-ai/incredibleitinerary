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
import Breadcrumb from "@/components/blog/Breadcrumb";

const COIMBATORE_TOC = [
  { id: "decision",   emoji: "⚡",  label: "Which Traveller Are You?" },
  { id: "highlights", emoji: "🌿", label: "Why Coimbatore?" },
  { id: "itinerary",  emoji: "📅", label: "2-Day Itinerary" },
  { id: "budget",     emoji: "💰", label: "Budget Breakdown" },
  { id: "food",       emoji: "🍛", label: "Food & Filter Coffee" },
  { id: "isha",       emoji: "🙏", label: "Isha Yoga Center Guide" },
  { id: "mistakes",   emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "💡", label: "Pro Tips" },
  { id: "faq",        emoji: "❓", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Coimbatore 2-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Coimbatore in 2 Days — Adiyogi, Isha Yoga & Filter Coffee&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">{"●"}</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">{"💰"}</span>
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
export default function CoimbatoreClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={COIMBATORE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Coimbatore" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="coimbatore isha yoga center adiyogi tamil nadu india"
            alt="Adiyogi 34-metre face sculpture at Isha Yoga Center Coimbatore Tamil Nadu at sunrise"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Coimbatore 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  South India
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">8 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Coimbatore in 2 Days: Adiyogi, Isha Yoga & Filter Coffee
                <em className="italic text-gold-light"> (Complete Guide)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The world&apos;s largest bust sculpture, Asia&apos;s largest yoga centre, Tamil Nadu&apos;s finest cotton textiles, and a filter coffee culture that takes itself as seriously as Milan takes espresso.
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
              <span>{"·"}</span>
              <span>🗓 2 Days</span>
              <span>{"·"}</span>
              <span>💰 From ₹1,500/day</span>
            </div>
          </div>

          {/* Intro quote */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Most people pass through Coimbatore on the way to Ooty or Munnar. This is a mistake. The Isha Yoga Center at the Velliangiri foothills 30km from the city centre is one of the most thoughtfully designed spaces in India. The 34-metre Adiyogi face is the world&apos;s largest bust sculpture — and the Dhyanalinga inside is something that is genuinely difficult to explain in print.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Which Traveller Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your style to jump to the right section.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { emoji: "🙏", label: "Spiritual Seeker", sub: "₹1,500–₹2,500/day", desc: "Isha full visit + Dhyanalinga + Velliangiri foothills", color: "border-amber-200 hover:border-amber-400", id: "isha" },
                { emoji: "☕", label: "Culture Explorer", sub: "₹2,000–₹3,500/day", desc: "Filter coffee culture + textile markets + temples", color: "border-teal-200 hover:border-teal-400", id: "food" },
                { emoji: "🚂", label: "Transit Optimiser", sub: "₹1,500–₹2,500/day", desc: "Isha + quick market + onward to Ooty or Munnar", color: "border-emerald-200 hover:border-emerald-400", id: "itinerary" },
              ].map((p) => (
                <button key={p.label} onClick={() => document.getElementById(p.id)?.scrollIntoView({ behavior: "smooth" })}
                  className={`p-4 rounded-xl border-2 border-parchment-2 bg-white hover:shadow-md transition-all duration-200 text-center group ${p.color}`}>
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-amber-700 mt-0.5 font-medium">{p.sub}</p>
                  <p className="text-[0.65rem] text-muted mt-1 font-light">{p.desc}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan {"→"}</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── WHY COIMBATORE ── */}
          <section id="highlights" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"🌿"} Why Coimbatore?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Coimbatore is Tamil Nadu&apos;s second-largest city — an industrial centre known for textile manufacturing and engineering. On the surface, this sounds like the wrong destination. In practice, it sits at the foot of the Nilgiri Hills with Asia&apos;s largest yoga centre 30km away, India&apos;s finest cotton textiles at source prices, and a food culture that takes filter coffee as seriously as Milan takes espresso.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                {
                  title: "The Spiritual Side", emoji: "🙏", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [
                    ["Isha Yoga Center", "30km from city, Velliangiri foothills"],
                    ["Adiyogi", "34m face — world's largest bust sculpture"],
                    ["Dhyanalinga", "Unique energy temple, no photography"],
                    ["Entry", "Free, dress code enforced"],
                  ],
                  note: "Plan 3–4 hours minimum for Isha. Rushing through defeats the purpose entirely. The Dhyanalinga requires 5+ minutes of sitting meditation — no exceptions."
                },
                {
                  title: "The Culture Side", emoji: "☕", bg: "bg-emerald-50 border-emerald-200", th: "text-emerald-800",
                  rows: [
                    ["Filter coffee", "As serious as espresso in Milan"],
                    ["Cotton textiles", "30–50% below other city prices"],
                    ["Suppan Chetty St.", "Spices, coffee powder, pappadums"],
                    ["City character", "Industrial but has real substance"],
                  ],
                  note: "Never order instant coffee in Coimbatore. Estate-grown, freshly ground filter coffee from Coffee Basket or Vaisali Coffee is a separate thing entirely."
                },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/80 w-28 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">{"⚠️"} {area.note}</p>
                </div>
              ))}
            </div>

            <h3 className="font-serif text-lg font-light text-ink mb-4 mt-8">Key Attractions at a Glance</h3>
            <div className="space-y-3">
              {[
                { name: "Isha Yoga Center & Adiyogi", detail: "Asia's largest yoga centre on the Velliangiri foothills, 30km from city. The 34m Adiyogi steel sculpture — world's largest bust — is visible from a distance. Free entry, strict traditional dress code. Sattvic restaurant on campus with ₹120 thali.", tag: "Spiritual", color: "border-amber-200 bg-amber-50" },
                { name: "Dhyanalinga Temple", detail: "A consecrated energy space within the Isha complex — no religious rituals, no idols. Sit in silence for a minimum of 5 minutes. No photography permitted inside. Most visitors describe the experience as unusual and quieting.", tag: "Spiritual", color: "border-amber-200 bg-amber-50" },
                { name: "Marudamalai Murugan Temple", detail: "11km from city on the Nilgiris foothills — an active Murugan temple (dedicated to Kartikeya). Hilltop position. Peaceful early mornings before tourist crowds arrive. Auto from city ₹100–₹150.", tag: "Temple", color: "border-yellow-200 bg-yellow-50" },
                { name: "Kovai Kutralam (Siruvani Falls)", detail: "38km from Coimbatore — best October to January. Waterfall fed by the Siruvani reservoir. Swimming possible in season. The Siruvani Dam reservoir itself is one of the cleanest in India.", tag: "Nature", color: "border-teal-200 bg-teal-50" },
                { name: "Eachanari Vinayagar Temple", detail: "13km from city — one of Tamil Nadu's most important Ganesh temples. Peaceful morning visits before 8am. Free entry. The main idol is believed to be over 1,000 years old.", tag: "Temple", color: "border-yellow-200 bg-yellow-50" },
                { name: "RS Puram Textile Market", detail: "Coimbatore is Tamil Nadu's 'Manchester' — the cotton handloom textile industry here is centuries old. RS Puram area has retail shops with cotton textiles 30–50% cheaper than Chennai or Bangalore.", tag: "Shopping", color: "border-purple-200 bg-purple-50" },
              ].map((attr) => (
                <div key={attr.name} className={`rounded-xl border p-4 ${attr.color}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-sm text-ink">{attr.name}</p>
                        <span className="text-[0.6rem] bg-white/70 border border-white/60 px-2 py-0.5 rounded-full text-muted uppercase tracking-wide">{attr.tag}</span>
                      </div>
                      <p className="text-xs text-muted font-light leading-relaxed">{attr.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Circuit tip:</strong> Coimbatore connects to Ooty (86km, 2 hours) and Munnar (160km, 4 hours) — making it a natural junction on a South India hill station circuit. A 2-day stop here between coastal and hill destinations adds genuine depth to the trip.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"🗓️"} label="Best Time" value="Nov – Feb" />
            <StatCard icon={"🏔️"} label="Altitude" value="416m" />
            <StatCard icon={"🚂"} label="From Chennai" value="500km · 7hr train" />
            <StatCard icon={"🚗"} label="To Ooty" value="86km · 2hrs" />
          </div>

          {/* ── 2-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"📅"} The 2-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">
              Coimbatore city centre is your base. All distances are from the main railway station unless noted.
            </p>

            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Marudamalai Temple · Isha Yoga Center · Adiyogi · Dhyanalinga"
                items={[
                  "7am: Marudamalai Murugan Temple (11km from city, auto ₹100–₹150). Start early for the peaceful pre-crowd morning. The Nilgiris foothills rise behind the temple and the morning light on the gopuram is excellent for photography. 45–60 minutes here is sufficient.",
                  "10am: Drive to Isha Yoga Center (30km, 45–60 minutes from city, taxi ₹300–₹400 one way). The complex sits on the Velliangiri foothills — the road approaching it through open farmland has a distinct feeling of entering a different space.",
                  "At Isha: the 34-metre Adiyogi steel face is the first structure you encounter. The scale is more impactful than photographs suggest — it is the world's largest bust sculpture. Walk around the full perimeter.",
                  "Dhyanalinga Temple: the energy space within the Isha complex. No photography inside. No religious rituals or idols. Sit quietly for at least 5 minutes — the minimum asked. Take longer if you can. The space has an unusual quality that is difficult to articulate and best experienced without expectations.",
                  "Theerthakund: the sacred tank adjacent to Dhyanalinga, available for ritual bathing. Register at the reception on entry (₹50 deposit, refundable). Bring a change of clothes. The bathing is outdoor, structured, and accompanied by chanting.",
                  "Isha Restaurant: sattvic (pure vegetarian) food prepared according to yogic principles. The full thali ₹120 is genuinely excellent — possibly the best value meal in Coimbatore. The sambar here is different from city restaurants. Budget 45 minutes for lunch.",
                  "Return to Coimbatore city by 4pm. Evening: RS Puram area for a first look at the cotton textile markets. Cotton handloom textiles here are 30–50% cheaper than in Chennai or Bangalore.",
                  "Dinner in RS Puram or Gandhipuram — South Indian thali ₹100–₹150. Coimbatore's restaurant food is straightforward, honest South Indian: no fusion, strong filter coffee after every meal.",
                ]}
                cost="₹700–₹1,200 excluding accommodation" />

              <DayCard
                day="Day 2"
                title="Kovai Kutralam Falls · Textile Shopping · Suppan Chetty Market · Filter Coffee"
                items={[
                  "8am: Eachanari Vinayagar Temple (13km) — significant Ganesh temple, peaceful morning hour. The main idol's age is disputed but the temple complex dates to at least the 13th century. Auto ₹80–₹120. 30–45 minutes.",
                  "Kovai Kutralam / Siruvani area (38km, 1 hour): If visiting October–January, the Kovai Kutralam falls (also called Siruvani Falls) are at peak flow and beautiful. Swimming is possible. The Siruvani Reservoir road drive is excellent — the dam is one of India's cleanest reservoirs. Total 3 hours including travel.",
                  "Or (if visiting outside Oct–Jan): Siruvani Dam viewpoint alone is worth the drive — the reservoir surrounded by Nilgiris forest is striking even without waterfall flow.",
                  "Return by 1pm: lunch at a Saravana Bhavan-style restaurant in the city — full South Indian meal for ₹100–₹150. The idli-sambar breakfast culture in Coimbatore is serious — each restaurant has its own idli recipe, fermented overnight, slightly different from Chennai.",
                  "2:30pm: Textile shopping — RS Puram or Gandhipuram market. Coimbatore cotton is a distinct regional product: lightweight, densely woven, long-lasting. Handloom cotton sarees, lungis, and dress materials are all significantly cheaper here than elsewhere in Tamil Nadu.",
                  "4pm: Suppan Chetty Street market — South Indian spice bazaar. Fresh-ground filter coffee powder from estate sources (buy 200–500g, sealed bag, not branded), dried red chillies, tamarind, pappadums, and sesame oil. The spice quality is significantly better than supermarket products.",
                  "Evening: Filter coffee ritual. Coffee Basket (multiple outlets) serves estate-grown, freshly roasted, ground-per-order coffee in the traditional davara-tumbler set. The stainless steel tumbler-and-saucer pour is the correct way. Vaisali Coffee and Blue Tokai are the more upscale local options. Budget ₹40–₹80 per cup.",
                  "Depart Coimbatore or stay for a night — Ooty is 86km (2 hours) and an easy onward destination.",
                ]}
                cost="₹600–₹1,100 excluding accommodation" />
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mt-4">
              <span className="text-xs text-green-700 uppercase tracking-wide">Total 2-Day Cost (per person) {"·"} </span>
              <span className="font-serif text-base text-ink font-light">₹3,000–₹5,500 budget · ₹7,000–₹12,000 mid-range</span>
            </div>
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"💰"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">🏡 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">🏨 Mid-Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Hotel (2N)", "₹1,400–₹2,400", "₹3,600–₹6,000"],
                    ["🍛 Meals (2 days)", "₹480–₹900", "₹1,200–₹2,000"],
                    ["🚕 Local transport", "₹400–₹700", "₹1,000–₹2,000"],
                    ["🙏 Isha Yoga Center", "Free entry", "Free entry"],
                    ["☕ Filter coffee", "₹80–₹160", "₹160–₹320"],
                    ["🧵 Textile shopping (optional)", "₹500–₹2,000", "₹2,000–₹6,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 2 days)</td>
                    {["₹3,000–₹5,500", "₹8,000–₹16,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Isha Yoga Center is entirely free — the largest cost variable is textile shopping, which is optional. Hotels near the railway station area are better value than near the bus stand.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Coimbatore"
            hotels={[
              { name: "Heritage Inn Coimbatore", type: "Hotel · RS Puram area", price: "From ₹1,200/night", rating: "3", badge: "Value", url: "https://www.booking.com/searchresults.en-gb.html?ss=coimbatore+hotel+rs+puram&aid=2820480" },
              { name: "The Residency Coimbatore", type: "Business Hotel · City centre", price: "From ₹2,500/night", rating: "4", badge: "Mid-range", url: "https://www.booking.com/hotel/in/residency-coimbatore.html?aid=2820480" },
              { name: "Vivanta Coimbatore", type: "Luxury Hotel · Avinashi Rd", price: "From ₹5,500/night", rating: "5", badge: "Top pick", url: "https://www.booking.com/searchresults.en-gb.html?ss=vivanta+coimbatore&aid=2820480" },
            ]}
            activities={[
              { name: "Isha Yoga Center & Adiyogi Private Tour", duration: "Half day", price: "From ₹800/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=isha+yoga+center+coimbatore+tour&partner_id=PSZA5UI" },
              { name: "Coimbatore Heritage & Temple Walk", duration: "3 hours", price: "From ₹500/person", badge: "Culture", url: "https://www.getyourguide.com/s/?q=coimbatore+temple+walk+tour&partner_id=PSZA5UI" },
              { name: "Nilgiris Day Trip from Coimbatore", duration: "Full day", price: "From ₹1,200/person", url: "https://www.getyourguide.com/s/?q=coimbatore+ooty+day+trip&partner_id=PSZA5UI" },
            ]}
            pdfProductId="coimbatore-2-days-pdf"
          />

          {/* ── GALLERY ── */}
          <DestinationGallery
            title="Coimbatore — Must-See Places"
            subtitle="Click each thumbnail to explore the Adiyogi, Isha complex, waterfalls, and market culture."
            spots={[
              { name: "Adiyogi — 34m Sculpture", query: "adiyogi 34m face sculpture isha yoga center coimbatore steel", desc: "The world's largest bust sculpture — 34 metres of brushed steel. The scale is more impactful in person than photographs suggest. Set against the Velliangiri Hills at sunrise or golden hour." },
              { name: "Dhyanalinga", query: "dhyanalinga isha yoga center interior meditation energy temple", desc: "The consecrated energy space within the Isha complex. No photography inside. A single linga form with no religious iconography. Most visitors report an unusual stillness here." },
              { name: "Kovai Kutralam Falls", query: "kovai kutralam siruvani falls coimbatore waterfalls swimming", desc: "Seasonal waterfall (Oct–Jan) fed by the Siruvani Reservoir. Swimming possible in the natural pool. 38km from Coimbatore city centre through the Nilgiris foothills." },
              { name: "Coimbatore Filter Coffee", query: "south indian filter coffee davara tumbler stainless steel pour coimbatore", desc: "Coimbatore's filter coffee is estate-grown, freshly roasted, and poured in the traditional davara-tumbler set. The stainless steel tumbler-and-saucer pour aerates the coffee. Coffee Basket is the standard reference." },
              { name: "Marudamalai Temple", query: "marudamalai murugan temple coimbatore hill temple nilgiris morning", desc: "A hilltop Murugan temple on the Nilgiris foothills, 11km from the city. The gopuram is visible from a distance. Peaceful before 8am." },
            ]}
          />

          {/* ── INLINE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="isha yoga center complex velliangiri hills sunset coimbatore grounds"
              alt="Isha Yoga Center campus at sunset with the Velliangiri foothills and Adiyogi visible"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Isha Yoga Center campus at sunset — Asia&apos;s largest yoga centre is 30km from Coimbatore city on the Velliangiri foothills. Entry is free. Plan 3–4 hours minimum.
              </p>
            </div>
          </div>

          {/* ── FOOD & FILTER COFFEE ── */}
          <section id="food" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"🍛"} Food & Filter Coffee — The Coimbatore Circuit</h2>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <h3 className="font-serif text-lg text-amber-800 mb-4">Where to Eat</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { place: "Isha Restaurant (Isha complex)", detail: "Sattvic vegetarian thali ₹120. The sambar is exceptional. Meal includes rice, multiple curries, rasam, and payasam. Worth the trip alone." },
                  { place: "Annapoorna (multiple outlets)", detail: "Coimbatore institution since 1946. The best idli-vada-sambar breakfast in the city. ₹80–₹120. Opens 6am." },
                  { place: "Hot Chips Coimbatore", detail: "Famous for its murukku and traditional South Indian snacks. The fried snacks here (chakli, ribbon pakoda, mixture) are made fresh daily — ₹80–₹150/packet." },
                  { place: "Hotel Shree Annapoorna (Suppan Chetty area)", detail: "Authentic Coimbatore home-style food. Kuzhambu rice, kootu, thuvaiyal — local dishes not found on restaurant menus elsewhere. ₹80–₹120." },
                ].map((item) => (
                  <div key={item.place} className="bg-white/60 rounded-lg p-3">
                    <p className="font-medium text-sm text-ink mb-1">{item.place}</p>
                    <p className="text-xs text-muted font-light">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brown-50 border border-amber-300 rounded-xl p-5 mb-4" style={{ background: "#fef9f0" }}>
              <h3 className="font-serif text-lg text-amber-900 mb-4">The Filter Coffee Guide</h3>
              <div className="space-y-3 text-xs text-muted font-light">
                <p><strong className="text-ink">What makes it different:</strong> Coimbatore filter coffee uses chicory-blended decoction extracted through a steel percolator (the "filter"). The decoction is then mixed with full-fat boiled milk and sugar to taste, then poured between the tumbler and davara (saucer) to cool and aerate. The pour is an art form — the stream of coffee from tumbler to saucer creates a froth. Never ask for it without the pour.</p>
                <p><strong className="text-ink">Coffee Basket:</strong> Multiple outlets in the city. Estate-grown beans, freshly roasted, ground per order on request. The "filter kaapi decoction" served here is significantly stronger than standard cafe variants.</p>
                <p><strong className="text-ink">Vaisali Coffee:</strong> More upscale, excellent single-estate options. Located near the commercial areas.</p>
                <p><strong className="text-ink">What to buy to take home:</strong> From Suppan Chetty Street — ask for freshly ground filter coffee blend (60% coffee, 40% chicory is the Coimbatore standard). Buy 250–500g sealed. Will last 3–4 weeks. Significantly better than branded versions.</p>
                <p><strong className="text-ink">Never do:</strong> Order instant coffee ("Nescafé"). This is the fastest way to mark yourself as someone who does not understand what they are in.</p>
              </div>
            </div>
          </section>

          {/* ── ISHA GUIDE ── */}
          <section id="isha" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"🙏"} Isha Yoga Center — Complete Visitor Guide</h2>

            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-amber-800 mb-3">What to Know Before You Go</h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Location:</strong> Velliangiri foothills, Poondi, Coimbatore — 30km from city centre. Taxi ₹300–₹400 one way, 45–60 minutes.</p>
                  <p><strong className="text-ink">Entry:</strong> Free. No tickets required. Registration needed for Theerthakund bathing — do this at the reception on arrival.</p>
                  <p><strong className="text-ink">Dress code:</strong> Traditional Indian clothing strictly enforced — no shorts, no sleeveless, no western casual. Men: dhoti or pyjama-kurta. Women: saree, salwar kameez, or similar. If you arrive incorrectly dressed, wraps are available to borrow.</p>
                  <p><strong className="text-ink">Photography:</strong> Permitted outside at the Adiyogi and campus. Strictly NO photography inside the Dhyanalinga, Linga Bhairavi, or meditation spaces.</p>
                  <p><strong className="text-ink">Time required:</strong> 3–4 hours minimum. The Dhyanalinga meditation (20–30 minutes), Theerthakund bathing (45 minutes), Adiyogi walk (30 minutes), and Isha restaurant (45 minutes) add up quickly.</p>
                </div>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-teal-800 mb-3">What to Do and in What Order</h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">1. Adiyogi first (arrival):</strong> Walk around the full 34-metre steel face. The engineering is extraordinary — 500 tonnes of steel in a single lifelike face. See it in the morning light before the crowds build.</p>
                  <p><strong className="text-ink">2. Register for Theerthakund at Reception.</strong> The queue can be 30–45 minutes in peak season. Register early and be given a time slot.</p>
                  <p><strong className="text-ink">3. Dhyanalinga (before the queue builds):</strong> Enter the dome-shaped space, sit, be quiet. 5 minutes minimum — more if possible. This is not a touring exercise; it is the centrepiece of the campus.</p>
                  <p><strong className="text-ink">4. Theerthakund bathing (at your time slot):</strong> Bring a change of clothes. The bathing is outdoor, structured, and conducted in a group. The tank is cold.</p>
                  <p><strong className="text-ink">5. Isha Restaurant for lunch:</strong> Sattvic thali ₹120. The best meal available in the Coimbatore area for the price.</p>
                  <p><strong className="text-ink">6. Linga Bhairavi:</strong> Adjacent temple dedicated to the feminine aspect. More accessible and visually striking than the Dhyanalinga for first-time visitors.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Treating Coimbatore as only a transit city", desc: "Most tourists pass through to Ooty or Munnar without stopping. This is a mistake. The Isha Yoga Center alone justifies a 2-day stop. Combined with the textile culture and filter coffee, Coimbatore has a distinct character that most South India circuits miss entirely.", icon: "🚂" },
                { title: "Visiting Isha without enough time", desc: "The Isha complex needs 3–4 hours minimum. Visitors who plan '1 hour for Adiyogi and move on' miss the Dhyanalinga, the Theerthakund, and the restaurant entirely. Do not schedule Isha as a 60-minute stop.", icon: "⏰" },
                { title: "Missing the textile markets", desc: "Coimbatore cotton is legitimately different from textiles sold elsewhere — the handloom weave is a distinct regional product and significantly cheaper at source. RS Puram area is the retail hub. Bring an extra bag.", icon: "🧵" },
                { title: "Going in peak summer May–June", desc: "Coimbatore at 416m is genuinely hot in summer — 38–40°C, dry heat. Not dangerous but all outdoor activities become uncomfortable. November–February is the right time for comfortable outdoor exploration.", icon: "🌡️" },
                { title: "Not trying filter coffee", desc: "Ordering instant coffee in Coimbatore is a missed opportunity and a minor social faux pas. Any dhaba or restaurant serves proper filter kaapi for ₹20–₹40. Coffee Basket serves the premium version. Make time for at least two or three cups.", icon: "☕" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"💡"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🌅", title: "Visit Isha at Opening Time (6am)", desc: "The Isha complex opens at 6am. Arriving at opening means the Adiyogi in morning light without tourists, the Dhyanalinga in silence, and the first Theerthakund bathing slot. By 10am the complex fills significantly.", color: "bg-amber-50 border-amber-200" },
                { icon: "🚕", title: "Book a Full-Day Auto or Cab", desc: "Coimbatore's sights are spread across a 40km radius. A full-day auto (₹600–₹900) or taxi (₹1,200–₹1,800) that takes you to Marudamalai → Isha → Siruvani → city market is more efficient than arranging separate transport for each leg.", color: "bg-amber-50 border-amber-200" },
                { icon: "🧵", title: "Buy Cotton Direct at RS Puram", desc: "The Coimbatore cotton handloom market is at its best in RS Puram. Look for the co-operative stores which stock directly from weavers at the lowest prices. Fine cotton shirting and dress materials from ₹80/metre.", color: "bg-teal-50 border-teal-200" },
                { icon: "🛕", title: "Attend Evening Aarti at Eachanari", desc: "The evening aarti at Eachanari Vinayagar Temple (around 7pm) is attended primarily by local families. The oil lamp ceremony in the inner sanctum is the most atmospheric Ganesh temple experience in the Coimbatore area.", color: "bg-teal-50 border-teal-200" },
                { icon: "🏔️", title: "Coimbatore to Ooty is the Best Drive in Tamil Nadu", desc: "The 86km drive from Coimbatore to Ooty via the Mettupalayam ghat road is one of the finest drives in South India. Alternatively, the Nilgiri Mountain Railway from Mettupalayam to Ooty (UNESCO listed) takes 4.5 hours and is extraordinary.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "☕", title: "The Filter Coffee Morning Ritual", desc: "The standard morning routine in Coimbatore: strong filter kaapi before 8am, idli-vada at Annapoorna, read the Tamil newspaper. Even if you don't read Tamil, sitting in a local Coimbatore coffee shop at 7am is an immersion in South Indian daily life that no hotel breakfast matches.", color: "bg-emerald-50 border-emerald-200" },
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
              Tell us your dates, group size, and interests — we&apos;ll send a personalised Coimbatore itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Coimbatore Trip {"→"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Is Isha Yoga Center free to visit?", a: "Yes, entry to the Isha Yoga Center campus is entirely free. The Dhyanalinga meditation space requires a minimum 5-minute silent sitting — no photography inside. Theerthakund bathing requires registration at reception (₹50 refundable deposit). Traditional Indian dress code is strictly enforced at all times." },
                { q: "How long does the Isha Yoga Center visit take?", a: "3–4 hours minimum to do it properly. The Dhyanalinga meditation (20–30 minutes), Theerthakund bathing (45 minutes including waiting), Adiyogi walk (30 minutes), Linga Bhairavi temple (20 minutes), and Isha restaurant thali (45 minutes) add up to 3+ hours easily. Do not plan Isha as a one-hour stop." },
                { q: "What is the best time to visit Coimbatore?", a: "November to February is the most comfortable time — temperatures are 18–28°C. Kovai Kutralam waterfall is at peak flow October–January. March–April is warm but manageable. May–June sees 38–40°C which makes outdoor exploration uncomfortable." },
                { q: "Is Coimbatore worth visiting or just a transit city?", a: "Coimbatore is worth a dedicated 2-day stop for the right traveller. The Isha Yoga Center alone justifies the stop. The textile markets and filter coffee culture add genuine character. Most South India circuits miss Coimbatore entirely and are poorer for it." },
                { q: "What should I buy in Coimbatore?", a: "Cotton handloom textiles in RS Puram (30–50% cheaper than Chennai or Bangalore), estate-ground filter coffee powder from Suppan Chetty Street (ask for 60/40 blend), South Indian spices and pappadums from the market. Avoid branded textiles in tourist-facing stores — go to the cooperative-linked shops for best quality and price." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a South India Circuit?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Ooty — 3 Day Hill Station Guide", href: "/blog/ooty-3-days" },
                { label: "Munnar — 3 Day Tea Estate Guide", href: "/blog/munnar-3-days" },
                { label: "Wayanad — 3 Day Wildlife & Trek Guide", href: "/blog/wayanad-3-days" },
                { label: "Pondicherry — 3 Day Heritage Guide", href: "/blog/pondicherry-3-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{"View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="coimbatore-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
