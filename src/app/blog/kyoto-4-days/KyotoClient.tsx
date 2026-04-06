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

const KYOTO_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "timing",      emoji: "\u23F0", label: "Temple Timing Strategy" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",      emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "\uD83D\uDCA1", label: "Pro Tips" },
  { id: "faq",         emoji: "❓", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Kyoto 4-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Kyoto in 4 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
        <span className="text-muted text-lg">{open ? "\u2212" : "+"}</span>
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
            <span className="text-lg">\uD83D\uDCB0</span>
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
          <p className="font-medium text-sm text-ink mb-1">{title}</p>
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
export default function KyotoClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "\u00A57,000–10,000/day ($47–67)", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "✨", label: "Mid-Range", sub: "\u00A512,000–20,000/day ($80–133)", color: "border-emerald-300 bg-emerald-50 text-emerald-800" },
    { id: "C" as const, emoji: "\uD83D\uDC8E", label: "Luxury", sub: "\u00A535,000+/day ($233+)", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KYOTO_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Kyoto" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="kyoto fushimi inari torii gates shrine japan"
            alt="Fushimi Inari torii gates shrine in Kyoto Japan"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Kyoto 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Temples & Heritage
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">15 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Kyoto in 4 Days: The Only Guide You Need
                <em className="italic text-gold-light"> (Budget to Luxury, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, costs in yen, temple strategies &mdash; and the timing tricks that separate great Kyoto trips from mediocre ones.
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
              <span>\uD83C\uDDEF\uD83C\uDDF5 Japan</span>
              <span>·</span>
              <span>\uD83D\uDDD3 4 Days</span>
              <span>·</span>
              <span>\uD83D\uDCB0 From \u00A57,000/day ($47)</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Fushimi Inari at 6am is a completely different temple than Fushimi Inari at 10am. At 6am it&apos;s just you, 10,000 orange torii gates, and absolute silence. At 10am it&apos;s a selfie queue. Everything about Kyoto comes down to timing &mdash; this guide gets yours right.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your budget &mdash; jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} →</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── TEMPLE TIMING STRATEGY ── */}
          <section id="timing" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\u23F0 Temple Timing Strategy</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Kyoto has 2,000+ temples. You cannot see them all. The secret is not which temples you visit &mdash; it&apos;s what time you arrive.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Go Early (Before 8am)", emoji: "\uD83C\uDF05", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Fushimi Inari","6am — open 24/7, free, empty at dawn"],["Arashiyama Bamboo","7am — by 9am it’s shoulder-to-shoulder"],["Kiyomizu-dera","6am opening — the terrace view is unreal at sunrise"],["Kinkaku-ji","9am opening — arrive at 8:50, be first in line"]],
                  note: "Rent a bicycle. Kyoto is flat. This single decision will triple the number of temples you see." },
                { title: "Go Late (After 4pm)", emoji: "\uD83C\uDF05", bg: "bg-purple-50 border-purple-200", th: "text-purple-800",
                  rows: [["Gion district","5pm–8pm — best chance of spotting geiko/maiko"],["Nishiki Market","4pm — vendors start discounting"],["Philosopher’s Path","4:30pm — golden hour light through cherry trees"],["Pontocho Alley","6pm onwards — lanterns lit along the canal"]],
                  note: "Most temples close at 5pm. Plan afternoon for markets, walks, and the Gion district." },
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
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">\uD83D\uDCA1 {area.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="\uD83D\uDDD3" label="Duration" value="4 Days" />
            <StatCard icon="\uD83D\uDCB0" label="Budget From" value="\u00A57,000/day" />
            <StatCard icon="\uD83C\uDF41" label="Best Months" value="Mar–Apr, Oct–Nov" />
            <StatCard icon="\uD83D\uDE85" label="From Tokyo" value="2hr 15min" />
          </div>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\uD83D\uDCC5 The Itineraries</h2>
            <p className="text-sm text-muted font-light mb-6">Click a plan &mdash; days are expandable/collapsible.</p>

            {/* Tab switcher */}
            <div className="flex gap-2 flex-wrap mb-8 p-1 bg-parchment rounded-xl">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 ${
                    activeTab === p.id ? "bg-white shadow text-ink border border-parchment-2" : "text-muted hover:text-ink"
                  }`}>
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>

            {/* ── PLAN A: BUDGET ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">\uD83D\uDCB0</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; \u00A57,000–10,000/day ($47–67)</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Guesthouse or hostel near Kyoto Station &middot; \u00A53,000–4,500/night ($20–30)</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Fushimi Inari (6AM!), Kiyomizu-dera, Gion Evening"
                  items={[
                    "6am: Fushimi Inari Taisha — free, open 24/7. The 10,000 vermillion torii gates are nearly empty at dawn. Full hike to summit: 2 hours. Half-loop: 45 min.",
                    "9am: Walk to Tofuku-ji Temple if energy permits (\u00A5500/$3) — one stop south on the JR line. Incredible zen gardens.",
                    "11am: Kiyomizu-dera Temple — \u00A5400 ($3). The wooden terrace overlooking Kyoto is the city’s most iconic view.",
                    "Walk down through Ninenzaka and Sannenzaka — the most photographed lanes in Kyoto. Free, beautiful, touristy by noon.",
                    "Lunch: Nishiki Market — grilled mochi \u00A5200, takoyaki \u00A5400, matcha soft serve \u00A5350. Graze your way through for \u00A51,000–1,500.",
                    "5pm: Walk through Gion district — free. Hanami-koji street for tea houses. Stay until dusk for the best atmosphere.",
                    "Dinner: Yoshinoya or a local udon shop near Gion — \u00A5500–800 ($3–5)."
                  ]}
                  cost="\u00A57,000–9,500 ($47–63) including transport" />
                <DayCard day="Day 2" title="Arashiyama Bamboo Grove (Early), Monkey Park, Tenryu-ji"
                  items={[
                    "7am: Arashiyama Bamboo Grove — free. By 9am the pathway is packed. At 7am it’s just you and towering bamboo in every direction.",
                    "8:30am: Tenryu-ji Temple — \u00A5500 ($3). One of Kyoto’s five great zen temples. The garden alone is worth the entry.",
                    "10am: Iwatayama Monkey Park — \u00A5550 ($4). Climb 20 minutes to the hilltop where wild monkeys roam free. Panoramic city views.",
                    "12pm: Lunch at Arashiyama — yudofu (simmered tofu) is the local speciality. Budget spots from \u00A5900 ($6).",
                    "2pm: Togetsukyo Bridge — iconic arched bridge. Walk across, free. Rent a rowing boat for \u00A51,500 ($10) if you want.",
                    "3:30pm: Rent a bicycle (\u00A5800–1,000/day) and ride back to central Kyoto along the Katsura River. 30 min, flat, beautiful.",
                    "Evening: Pontocho Alley — narrow lantern-lit alley along the Kamo River. Window shop, then eat at a cheap izakaya."
                  ]}
                  cost="\u00A57,500–10,000 ($50–67) including transport" />
                <DayCard day="Day 3" title="Kinkaku-ji, Ryoan-ji, Nishiki Market"
                  items={[
                    "9am: Kinkaku-ji (Golden Pavilion) — \u00A5500 ($3). Arrive at opening to see the reflection on the mirror pond without crowds. 30–45 min.",
                    "10:30am: Walk to Ryoan-ji — \u00A5500 ($3). The rock garden is Japan’s most famous zen garden. Sit and stare. 30 min minimum.",
                    "12pm: Ninna-ji Temple — \u00A5800 ($5). Less famous, less crowded, equally stunning. Five-storey pagoda and cherry tree garden.",
                    "Lunch: Ramen near Kitaoji Station — \u00A5800–1,000 ($5–7). Kyoto-style ramen is lighter, chicken-based.",
                    "2:30pm: Nishiki Market deep dive — 2 hours of food stalls. Try yuba (tofu skin), Kyoto pickles, and dashi stock.",
                    "5pm: Philosopher’s Path — 2km canal-side walk between Ginkaku-ji and Nanzen-ji. Free. Best in late afternoon light.",
                    "Dinner: Conveyor belt sushi at Musashi Sushi near Sanjo — \u00A51,200–1,800 ($8–12)."
                  ]}
                  cost="\u00A57,000–9,000 ($47–60) including transport" />
                <DayCard day="Day 4" title="Nara Day Trip OR Tea Ceremony Experience"
                  items={[
                    "Option A — Nara (45 min from Kyoto by train, \u00A5720/$5 each way):",
                    "Todai-ji Temple — \u00A5600 ($4). Houses the largest bronze Buddha in the world. The building itself is the world’s largest wooden structure.",
                    "Nara Park — free. 1,200+ wild deer roam freely. Buy deer crackers \u00A5200 and bow to them (they bow back).",
                    "Kasuga Taisha Shrine — \u00A5500 ($3). 3,000 stone and bronze lanterns. Incredible atmosphere.",
                    "Option B — Stay in Kyoto: Book a tea ceremony (\u00A52,000–4,000/$13–27) in Gion. Visit Toji Temple flea market (21st of each month, free).",
                    "Afternoon: Return to any temple you rushed through, or explore the Fushimi sake district — Gekkeikan Okura Museum \u00A5400 includes tastings."
                  ]}
                  cost="\u00A56,000–9,000 ($40–60) including transport" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 4-Day Cost &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u00A528,000–40,000 ($187–267) including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: MID-RANGE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-6">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="text-sm font-medium text-emerald-800">Mid-Range Plan &mdash; \u00A512,000–20,000/day ($80–133)</p>
                    <p className="text-xs text-emerald-600 font-light">Stay: Machiya guesthouse or boutique hotel &middot; \u00A58,000–15,000/night ($53–100)</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Fushimi Inari (6AM!), Kiyomizu-dera, Gion Evening"
                  items={[
                    "6am: Fushimi Inari — full hike to the summit. The views from the top are worth the climb. Pack a convenience store breakfast.",
                    "9:30am: Tofuku-ji Temple — \u00A5500. The Tsutenkyo Bridge view in autumn is Kyoto’s best-kept secret.",
                    "11am: Kiyomizu-dera — \u00A5400. Walk the full hillside path through Ninenzaka and Sannenzaka lanes.",
                    "Lunch: Omen Kodaiji for handmade udon — \u00A51,500–2,200 ($10–15). Beautiful setting, excellent quality.",
                    "2pm: Kodai-ji Temple — \u00A5600 ($4). Less crowded than Kiyomizu, stunning bamboo grove and zen gardens.",
                    "5pm: Gion district walk. Book a Gion evening walking tour with an English-speaking guide — \u00A54,000–6,000 ($27–40).",
                    "Dinner: Gion Nanba for tempura kaiseki — \u00A54,000–6,000 ($27–40). Reserve ahead."
                  ]}
                  cost="\u00A513,000–18,000 ($87–120) including transport" />
                <DayCard day="Day 2" title="Arashiyama: Bamboo, Temples, River"
                  items={[
                    "7am: Bamboo Grove — the early morning light filtering through is genuinely magical. Photos here sell the trip.",
                    "8:30am: Tenryu-ji Temple and garden — \u00A5500. Enter from the north gate to walk through the garden to the bamboo.",
                    "10am: Monkey Park — \u00A5550. The hilltop view of Kyoto is the real reason to go. Monkeys are a bonus.",
                    "11:30am: Sagano scenic railway (Romantic Train) — \u00A5880 ($6) one way. 25 min along the Hozu River gorge. Pre-book seats.",
                    "1pm: Lunch at Arashiyama — yudofu set at Shoraian (\u00A52,500/$17, riverside terrace, stunning).",
                    "3pm: Rent a bicycle and ride to Daikaku-ji Temple (\u00A5500) — 10 min north, almost no tourists, beautiful lake.",
                    "Evening: Ride back to central Kyoto. Pontocho Alley for dinner — riverside seating (kawadoko) May–Sep. \u00A53,000–5,000."
                  ]}
                  cost="\u00A514,000–19,000 ($93–127) including transport" />
                <DayCard day="Day 3" title="Golden Route: Kinkaku-ji, Ryoan-ji, Nishiki, Philosopher’s Path"
                  items={[
                    "9am: Kinkaku-ji — \u00A5500. The gold-leafed pavilion reflecting in the pond is even more stunning in person.",
                    "10:30am: Ryoan-ji — \u00A5500. Sit on the wooden platform facing the rock garden. The longer you stare, the more you see.",
                    "12pm: Taxi or bus to Ginkaku-ji (Silver Pavilion) — \u00A5500. Less flashy than Kinkaku-ji but more refined. Moss garden is incredible.",
                    "1pm: Walk the Philosopher’s Path south to Nanzen-ji — free, 2km, lined with cherry trees and small temples.",
                    "2:30pm: Nanzen-ji Temple — free grounds, \u00A5600 for Sanmon gate (climb for panoramic views). The aqueduct is photogenic.",
                    "4pm: Nishiki Market — 2hr food crawl. Splurge on A5 wagyu skewer (\u00A52,000/$13) and matcha everything.",
                    "Dinner: Nishiki Warai for Kyoto-style okonomiyaki — \u00A51,800–2,500 ($12–17)."
                  ]}
                  cost="\u00A513,000–18,000 ($87–120) including transport" />
                <DayCard day="Day 4" title="Nara Day Trip OR Tea Ceremony + Hidden Temples"
                  items={[
                    "Nara option: Todai-ji + Nara Park + Kasuga Taisha + Naramachi old town. Full day, back by 5pm.",
                    "Mid-range Nara lunch: Kakinoha-zushi (persimmon leaf sushi) — \u00A51,500–2,200 ($10–15). Nara’s signature dish.",
                    "Kyoto option: Morning tea ceremony in a Gion machiya — \u00A54,000–6,000 ($27–40). Learn to whisk matcha properly.",
                    "11am: Shimogamo Shrine — free. Set in an ancient forest, one of Kyoto’s oldest shrines. Almost no tourists.",
                    "2pm: Fushimi sake brewery district — Gekkeikan Museum \u00A5400 (includes tastings). Walk the canal with sake warehouses.",
                    "Final evening: Splurge dinner at a kaiseki restaurant — \u00A58,000–12,000 ($53–80) for a multi-course traditional meal."
                  ]}
                  cost="\u00A514,000–22,000 ($93–147) including transport" />
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-emerald-700 uppercase tracking-wide">Total 4-Day Cost &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u00A548,000–80,000 ($320–533) including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: LUXURY ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">\uD83D\uDC8E</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Luxury Plan &mdash; \u00A535,000+/day ($233+)</p>
                    <p className="text-xs text-purple-600 font-light">Stay: Ryokan with private onsen or Aman Kyoto &middot; \u00A540,000–120,000/night ($267–800)</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Private Fushimi Inari, Kiyomizu-dera, Gion Dinner"
                  items={[
                    "6am: Fushimi Inari with a private guide — \u00A515,000–20,000 ($100–133). Guide explains the symbolism and takes you to hidden sub-shrines.",
                    "10am: Kiyomizu-dera — private tour focusing on the engineering of the wooden stage (no nails in the entire structure).",
                    "12pm: Lunch at Kikunoi Roan — Michelin-starred kaiseki lunch \u00A58,000–12,000 ($53–80). Book 1 month ahead.",
                    "3pm: Private kimono fitting and photoshoot in Higashiyama — \u00A515,000–25,000 ($100–167). Professional quality.",
                    "5pm: Exclusive Gion walk with a retired geiko (geisha) guide — \u00A530,000–50,000 ($200–333). Rarely available, book through hotel.",
                    "Dinner: Hyotei — 400-year-old kaiseki restaurant. \u00A520,000–35,000 ($133–233). One of Japan’s most renowned dining experiences."
                  ]}
                  cost="\u00A590,000–140,000 ($600–933) including transport" />
                <DayCard day="Day 2" title="Arashiyama: Private Bamboo, Temple Gardens"
                  items={[
                    "7am: Private early-access bamboo grove experience (some luxury ryokans arrange this). Otherwise, just be there at opening.",
                    "9am: Tenryu-ji Temple with garden meditation session — \u00A55,000 ($33) for private meditation. Book through temple office.",
                    "11am: Okochi Sanso Garden — \u00A51,000 ($7) includes matcha. One of Kyoto’s most beautiful private gardens. Panoramic mountain views.",
                    "1pm: Lunch at Unagi no Hirokawa — grilled freshwater eel, Arashiyama’s finest. \u00A54,000–6,000 ($27–40).",
                    "3pm: Private boat ride on Hozu River — \u00A520,000–30,000 ($133–200) for a chartered boat through the gorge.",
                    "Evening: Return to ryokan for kaiseki dinner and private onsen. Most luxury ryokans include dinner (\u00A520,000–40,000)."
                  ]}
                  cost="\u00A555,000–85,000 ($367–567) including transport" />
                <DayCard day="Day 3" title="Golden Temples, Zen Gardens, Nishiki"
                  items={[
                    "9am: Kinkaku-ji with a private cultural guide — \u00A515,000 ($100). Understanding the three architectural styles changes everything.",
                    "10:30am: Ryoan-ji — the guide explains the 15 stones (you can only see 14 from any angle). Intentional incompleteness.",
                    "12pm: Private Zen meditation session at Shunko-in Temple — \u00A55,000 ($33). English-speaking monk. Deeply worthwhile.",
                    "1:30pm: Luxury kaiseki lunch at Kitcho Arashiyama — \u00A530,000–50,000 ($200–333). Book 2 months ahead.",
                    "4pm: Nishiki Market with a food guide — \u00A510,000–15,000 ($67–100). Tastings at stalls tourists walk past.",
                    "Evening: Private dinner at a machiya townhouse — \u00A525,000–40,000 ($167–267) through hotel concierge."
                  ]}
                  cost="\u00A5100,000–145,000 ($667–967) including transport" />
                <DayCard day="Day 4" title="Nara Private Tour OR Exclusive Tea Ceremony"
                  items={[
                    "Nara option: Private car and guide for Todai-ji, Kasuga Taisha, and lunch at a traditional restaurant. \u00A550,000–70,000 all-in.",
                    "Tea option: Urasenke school private tea ceremony — \u00A520,000–30,000 ($133–200). The most authentic tea experience in Japan.",
                    "11am: Daigo-ji Temple — \u00A51,500 ($10). UNESCO site, almost tourist-free, gardens rival any in Kyoto.",
                    "2pm: Incense ceremony (kodo) at Shoyeido — \u00A55,000 ($33). One of Japan’s rarest traditional arts.",
                    "Final afternoon: Return to ryokan for onsen and a quiet evening.",
                    "Farewell dinner: Gion Maruyama — sukiyaki with A5 Omi beef. \u00A515,000–25,000 ($100–167)."
                  ]}
                  cost="\u00A590,000–130,000 ($600–867) including transport" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 4-Day Cost &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u00A5500,000–900,000 ($3,333–6,000) including accommodation</span>
                </div>
              </div>
            )}
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\uD83D\uDCB0 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">\uD83D\uDCB0 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-emerald-700 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">\uD83D\uDC8E Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (4N)", "\u00A512,000–18,000 ($80–120)", "\u00A532,000–60,000 ($213–400)", "\u00A5160,000–480,000 ($1,067–3,200)"],
                    ["\uD83C\uDF5C Food & Drinks", "\u00A58,000–12,000 ($53–80)", "\u00A520,000–32,000 ($133–213)", "\u00A580,000–160,000 ($533–1,067)"],
                    ["\uD83D\uDE8C Transport", "\u00A53,000–5,000 ($20–33)", "\u00A55,000–8,000 ($33–53)", "\u00A515,000–30,000 ($100–200)"],
                    ["\u26E9\uFE0F Temples & Activities", "\u00A54,000–6,000 ($27–40)", "\u00A510,000–18,000 ($67–120)", "\u00A580,000–150,000 ($533–1,000)"],
                    ["\uD83C\uDF75 Extras", "\u00A51,000–2,000 ($7–13)", "\u00A53,000–5,000 ($20–33)", "\u00A510,000–30,000 ($67–200)"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (4 days)</td>
                    {["\u00A528,000–40,000 ($187–267)","\u00A548,000–80,000 ($320–533)","\u00A5500,000–900,000 ($3,333–6,000)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices in \u00A5 (Japanese Yen), 2026. USD equivalent at ~\u00A5150/$1. Excludes travel to Kyoto from other cities.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Kyoto"
            hotels={[
              { name: "Piece Hostel Sanjo", type: "Design Hostel · Central", price: "From \u00A53,500/night ($23)", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/jp/piece-hostel-sanjo.html?aid=2820480" },
              { name: "Noku Kyoto", type: "Boutique · Gion area", price: "From \u00A512,000/night ($80)", rating: "4", badge: "Mid-range pick", url: "https://www.booking.com/hotel/jp/noku-kyoto.html?aid=2820480" },
              { name: "Aman Kyoto", type: "Luxury Resort · Mountains", price: "From \u00A5100,000/night ($667)", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/jp/aman-kyoto.html?aid=2820480" },
            ]}
            activities={[
              { name: "Fushimi Inari Early Morning Tour", duration: "3 hours", price: "From \u00A56,000 ($40)", badge: "Must do", url: "https://www.getyourguide.com/s/?q=kyoto&partner_id=PSZA5UI" },
              { name: "Traditional Tea Ceremony in Gion", duration: "1.5 hours", price: "From \u00A54,000 ($27)", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=kyoto&partner_id=PSZA5UI" },
              { name: "Arashiyama Bamboo & Monkey Park", duration: "4 hours", price: "From \u00A55,000 ($33)", url: "https://www.getyourguide.com/s/?q=kyoto&partner_id=PSZA5UI" },
              { name: "Nara Day Trip with Guide", duration: "Full day", price: "From \u00A58,000 ($53)", url: "https://www.getyourguide.com/s/?q=kyoto&partner_id=PSZA5UI" },
            ]}
            pdfProductId="kyoto-4-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Kyoto — Must-See Places"
            subtitle="Click each thumbnail to explore Kyoto’s most iconic temples and streets."
            spots={[
              { name: "Fushimi Inari",       query: "fushimi inari shrine torii gates tunnel orange kyoto japan",     desc: "10,000 vermillion torii gates winding up Mount Inari. Free, open 24/7. Go at 6am for near-empty photos that will define your trip." },
              { name: "Arashiyama Bamboo",    query: "arashiyama bamboo grove path kyoto japan green tall",            desc: "Towering bamboo forest on Kyoto’s western edge. The rustling sound alone is worth the early wake-up. Best before 8am." },
              { name: "Kinkaku-ji",           query: "kinkaku-ji golden pavilion kyoto japan pond reflection",         desc: "The Gold Pavilion reflecting in its mirror pond. One of Japan’s most photographed buildings. Entry \u00A5500." },
              { name: "Gion District",        query: "gion kyoto traditional street wooden buildings lanterns evening", desc: "Kyoto’s geisha district. Walk Hanami-koji in the early evening for a chance to spot geiko and maiko in traditional dress." },
              { name: "Nishiki Market",       query: "nishiki market kyoto japan food stalls narrow covered street",    desc: "Kyoto’s kitchen — five blocks of food stalls selling pickles, mochi, wagyu skewers, and matcha everything." },
            ]}
          />

          {/* ── MID-ARTICLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="arashiyama bamboo grove path kyoto japan morning light"
              alt="Arashiyama Bamboo Grove path in Kyoto Japan"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Arashiyama Bamboo Grove at 7am &mdash; by 9am this path is shoulder-to-shoulder. The early alarm is non-negotiable.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting Fushimi Inari after 9am", desc: "At 6am: silence, empty torii tunnels, magical photos. At 10am: wall-to-wall crowds and a 20-minute wait for a clear shot. The shrine is open 24/7 and free. Go early.", icon: "\u26E9\uFE0F" },
                { title: "Trying to see too many temples", desc: "Kyoto has 2,000+ temples. Seeing 3–4 per day with proper time at each beats rushing through 8. Quality over quantity. Sit in the gardens.", icon: "\uD83D\uDE35" },
                { title: "Taking buses for everything", desc: "Kyoto buses are slow and packed with tourists. Rent a bicycle (\u00A5800–1,000/day/$5–7) — the city is flat and compact. You’ll see 3x more.", icon: "\uD83D\uDE8C" },
                { title: "Skipping Nara", desc: "Only 45 minutes from Kyoto. Wild deer that bow, the world’s largest wooden building, and far fewer tourists than Kyoto. Don’t skip it.", icon: "\uD83E\uDD8C" },
                { title: "Wearing shoes in the wrong places", desc: "Many temples require shoe removal. Wear easy slip-on shoes. Bring socks. Nothing ruins a zen moment like fumbling with laces at every entrance.", icon: "\uD83D\uDC5E" },
                { title: "Not carrying cash", desc: "Temple entry fees, small restaurants, market stalls, and bicycle rentals are cash-only. Withdraw \u00A520,000–30,000 ($133–200) from a 7-Eleven ATM.", icon: "\uD83D\uDCB4" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\uD83D\uDCA1 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\uD83D\uDEB2", title: "Rent a Bicycle", desc: "Kyoto is flat. This single decision will triple the number of temples you see. Most guesthouses offer rental or can point you to nearby shops. \u00A5800–1,000/day ($5–7).", color: "bg-emerald-50 border-emerald-200" },
                { icon: "\uD83C\uDF38", title: "Cherry Blossom Strategy", desc: "Late March to mid-April. Best spots: Philosopher’s Path, Maruyama Park, Keage Incline. Check japan-guide.com/sakura for real-time bloom reports.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "\uD83C\uDF41", title: "Autumn Colours Strategy", desc: "Mid-November to early December. Tofuku-ji, Eikan-do, and Kiyomizu-dera are the top three. Evening illuminations at Kodai-ji are spectacular.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF75", title: "Matcha Everything", desc: "Kyoto is the capital of Japanese tea culture. Try matcha at Ippodo Tea (since 1717) in central Kyoto. \u00A5600–1,000 ($4–7) for a proper ceremony-grade bowl.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDCF1", title: "Kyoto Bus Day Pass", desc: "Only \u00A5700 ($5) for unlimited city bus rides. Worth it if you’re not cycling. Buy at Kyoto Station bus terminal. Covers 90% of tourist routes.", color: "bg-purple-50 border-purple-200" },
                { icon: "\uD83C\uDF19", title: "Gion After Dark", desc: "The best time to walk Gion is 6pm–8pm when the lanterns are lit and geiko head to appointments. Hanami-koji and Shirakawa areas. Be respectful — no chasing for photos.", color: "bg-purple-50 border-purple-200" },
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
              Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Kyoto itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Kyoto Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days do you need in Kyoto?", a: "4 days is ideal to cover the major temples, Arashiyama, and a day trip to Nara without rushing. 2–3 days works if you’re selective. 5–6 days lets you explore hidden temples and take things slow." },
                { q: "What is the best time to visit Kyoto?", a: "Late March to mid-April for cherry blossoms, or mid-November for peak autumn colours. May and October offer pleasant weather with fewer tourists. Avoid Golden Week (late April to early May)." },
                { q: "How much does a 4-day Kyoto trip cost?", a: "Budget: \u00A528,000–40,000 ($187–267). Mid-range: \u00A548,000–80,000 ($320–533). Luxury: \u00A5500,000+ ($3,333+). All figures exclude travel to Kyoto and include accommodation, food, transport and activities." },
                { q: "Should I rent a bicycle in Kyoto?", a: "Absolutely. Kyoto is flat and compact. A bicycle (\u00A5800–1,000/day) will let you see 3x more temples than buses. Most guesthouses have rental or can direct you to nearby shops." },
                { q: "How do I get from Tokyo to Kyoto?", a: "Shinkansen bullet train: 2 hours 15 minutes, \u00A513,320 ($89) one way. If buying a JR Pass for wider Japan travel, this route alone nearly justifies the cost. Budget option: highway bus for \u00A53,000–5,000 ($20–33), takes 7–8 hours." },
                { q: "What time should I arrive at Fushimi Inari?", a: "6am. The shrine is open 24/7 and free. At 6am the iconic torii gate tunnel is nearly empty. By 10am it’s a crowded queue. The full hike takes about 2 hours." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Japan Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Tokyo — 5 Day City Guide", href: "/blog/tokyo-5-days", soon: false },
                { label: "Osaka — 3 Day Food & Fun Guide", href: "/blog/osaka-3-days", soon: false },
                { label: "Goa — 3 Day Beach Guide", href: "/blog/goa-3-days", soon: false },
                { label: "Browse All Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="kyoto-4-days" />
          <RelatedGuides currentSlug="kyoto-4-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
