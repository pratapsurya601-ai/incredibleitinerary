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

const BANGKOK_TOC = [
  { id: "plans",     emoji: "\u26A1", label: "Which Plan Are You?" },
  { id: "visa",      emoji: "\uD83D\uDCCB", label: "Visa & Entry" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",    emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "mistakes",  emoji: "\u274C", label: "Mistakes to Avoid" },
  { id: "tips",      emoji: "\uD83D\uDCA1", label: "Pro Tips" },
  { id: "faq",       emoji: "\u2753", label: "FAQ" },
];

/* ── Reading-progress bar ─────────────────────────────────────────────── */
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
      <div className="h-full bg-gold transition-all duration-100" style={{ width: `${progress}%` }} />
    </div>
  );
}

/* ── Share bar ─────────────────────────────────────────────────────────── */
function ShareBar() {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      {[
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Bangkok 4-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Bangkok in 4 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
      ].map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}>
          {s.label}
        </a>
      ))}
      <button onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">
        {copied ? "\u2713 Copied" : "Copy Link"}
      </button>
    </div>
  );
}

/* ── Stat card ─────────────────────────────────────────────────────────── */
function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="font-serif text-lg font-light text-ink">{value}</p>
      <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  );
}

/* ── Day card (collapsible) ───────────────────────────────────────────── */
function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors">
        <div className="flex items-center gap-3 text-left">
          <span className="font-serif text-xl text-gold-dark font-light">{day}</span>
          <span className="text-sm text-ink font-medium">{title}</span>
        </div>
        <span className="text-muted text-lg">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-gold mt-1 flex-shrink-0 text-xs">{"\u25CF"}</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">{"\uD83D\uDCB0"}</span>
            <span className="text-xs text-muted font-light">Est. cost: </span>
            <span className="text-xs font-medium text-ink">{cost}</span>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Tip card ──────────────────────────────────────────────────────────── */
function TipCard({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
  return (
    <div className={`rounded-xl p-5 border ${color}`}>
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0">{icon}</span>
        <div>
          <p className="font-medium text-sm text-ink mb-1">{title}</p>
          <p className="text-xs text-muted font-light leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

/* ── FAQ accordion ─────────────────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors">
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-gold text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-parchment-2">
          <p className="text-sm text-muted font-light leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════════════════ */
export default function BangkokClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget",   sub: "\u0E3F800\u20131,500/day", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\u2728",        label: "Mid-Range", sub: "\u0E3F2,000\u20134,000/day", color: "border-blue-300 bg-blue-50 text-blue-800" },
    { id: "C" as const, emoji: "\uD83D\uDC8E",  label: "Luxury",   sub: "\u0E3F6,000+/day", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BANGKOK_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Bangkok" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="bangkok grand palace temple golden thailand"
            alt="Bangkok Grand Palace golden spires against blue sky"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Bangkok 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Temples & Street Food
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/30">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/30">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Bangkok in 4 Days: The Complete Guide
                <em className="italic text-gold-light"> (Budget to Luxury, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, costs in Thai Baht, BTS routes &mdash; and the scams every first-timer falls for.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE BODY ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>{"\uD83C\uDDF9\uD83C\uDDED"} Thailand</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDDD3"} 4 Days</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDCB0"} From \u0E3F800/day</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Bangkok street food at 11pm from a cart with a 40-person queue is better than any Michelin restaurant I&apos;ve been to. This city rewards the curious and punishes the lazy planner. Here&apos;s how to be the first kind.
            </p>
          </blockquote>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="4 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="\u0E3F800/day" />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Nov \u2013 Feb" />
            <StatCard icon={"\u2708\uFE0F"} label="Airport" value="BKK / DMK" />
          </div>

          {/* ── VISA & ENTRY ── */}
          <section id="visa" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCCB"} Visa &amp; Entry Info</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">Thailand has different rules depending on your passport. Here&apos;s the 2026 breakdown.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border p-5 bg-amber-50 border-amber-200">
                <h3 className="font-serif text-lg font-normal mb-3 flex items-center gap-2 text-amber-800">
                  <span>{"\uD83C\uDDEE\uD83C\uDDF3"}</span> Indian Passport Holders
                </h3>
                <div className="space-y-2">
                  {[
                    ["eVisa", "Apply online at thaievisa.go.th \u2014 processed in 5\u20137 business days. Single entry, up to 60 days."],
                    ["Visa on Arrival", "15-day stay, \u0E3F2,000 fee. Queues can be 45\u201390 min at BKK. Carry 10,000 THB cash as proof of funds."],
                    ["Tourist Visa", "Apply at Thai embassy for 60-day stay. Extendable by 30 days at immigration office for \u0E3F1,900."],
                    ["Documents", "Passport valid 6+ months, return ticket, hotel booking confirmation, passport-size photos."],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-2 text-xs">
                      <span className="font-medium text-ink/60 w-24 flex-shrink-0">{k}</span>
                      <span className="text-muted font-light">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border p-5 bg-teal-50 border-teal-200">
                <h3 className="font-serif text-lg font-normal mb-3 flex items-center gap-2 text-teal-800">
                  <span>{"\uD83C\uDF0D"}</span> Most Western Passports
                </h3>
                <div className="space-y-2">
                  {[
                    ["Visa-Free", "30\u201360 days depending on nationality. USA, UK, EU, Australia, Canada all get 60 days visa-free."],
                    ["Extension", "Extend by 30 days at any immigration office for \u0E3F1,900. Bangkok Chaeng Wattana office is fastest."],
                    ["Land Border", "Visa-free entries via land crossings may be limited to 30 days depending on nationality."],
                    ["Tip", "Always carry a printed return ticket and hotel booking \u2014 airlines sometimes check before boarding."],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-2 text-xs">
                      <span className="font-medium text-ink/60 w-24 flex-shrink-0">{k}</span>
                      <span className="text-muted font-light">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── WHICH PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\u26A1"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your budget level &mdash; jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan {"\u2192"}</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} The Itineraries</h2>
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

            {/* ── BUDGET PLAN ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDCB0"}</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; Khao San Road / Banglamphu Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Hostels / guesthouses {"\u00B7"} \u0E3F300\u2013\u0E3F800/night {"\u00B7"} Transport: BTS + boats + walking</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Grand Palace, Wat Pho, Wat Arun, Khao San Road"
                  items={[
                    "8am: Grand Palace \u2014 arrive RIGHT when it opens. By 10am the tour-bus crowds arrive and it\u2019s unbearable. Entry \u0E3F500 (~$14). Dress code enforced: cover shoulders and knees.",
                    "10:30am: Walk to Wat Pho (5 min) \u2014 home of the giant reclining Buddha. Entry \u0E3F200 (~$5.50). Get the \u0E3F300 Thai massage inside \u2014 it\u2019s the original Thai massage school.",
                    "12:30pm: Cross-river ferry to Wat Arun \u2014 \u0E3F4 ferry. Entry \u0E3F100. Climb the steep central prang for river views. Best photos FROM here looking back at the Grand Palace.",
                    "2pm: Lunch at Tha Tien area \u2014 pad thai from street carts \u0E3F50\u201380 (~$1.50\u20132.25). The stalls between Wat Pho and the ferry pier are legit.",
                    "5pm: Tuk-tuk or bus to Khao San Road \u2014 evening walk, mango sticky rice \u0E3F60, pad see ew \u0E3F50. Street food is dinner.",
                    "BTS Skytrain is king \u2014 never take a tuk-tuk to a \u2018special price\u2019 gem shop. It\u2019s always a scam. Always.",
                  ]}
                  cost="\u0E3F900\u20131,200 (~$25\u201334) excl. accommodation" />
                <DayCard day="Day 2" title="Chatuchak Market, Jim Thompson House"
                  items={[
                    "8am: BTS to Mo Chit \u2014 Chatuchak Weekend Market opens at 9am. Go early before the heat.",
                    "Chatuchak has 15,000 stalls. You need a strategy or you\u2019ll just walk in circles for 5 hours. Download the Chatuchak Guide app. Sections 2\u20134 for clothes, 7\u20139 for decor, 17\u201319 for art.",
                    "Lunch inside the market \u2014 coconut ice cream \u0E3F30, pad kra pao \u0E3F50, mango sticky rice \u0E3F40. Bring cash, most stalls don\u2019t take cards.",
                    "2pm: BTS to National Stadium \u2014 Jim Thompson House. Entry \u0E3F200 (~$5.50). Beautiful teak houses with Thai silk history. Guided tour only, runs every 20 min.",
                    "Alternative to Chatuchak (if not weekend): Damnoen Saduak or Amphawa floating market \u2014 \u0E3F500\u2013800 for minibus tour. Amphawa is more authentic, less touristy.",
                    "Evening: Chinatown (Yaowarat) for dinner walk \u2014 grilled seafood stalls fire up at 6pm. Budget \u0E3F200\u2013300 for a feast.",
                  ]}
                  cost="\u0E3F600\u20131,000 (~$17\u201328) excl. accommodation" />
                <DayCard day="Day 3" title="Chinatown Food Walk, Wat Traimit, Rooftop Bar, Asiatique"
                  items={[
                    "9am: Chinatown morning \u2014 Sampeng Lane for cheap everything. Walk the alleyways \u2014 real Bangkok lives here.",
                    "10:30am: Wat Traimit (Golden Buddha Temple) \u2014 \u0E3F100 entry. 5.5-tonne solid gold Buddha, accidentally discovered under plaster in 1955.",
                    "12pm: Chinatown food walk \u2014 ba mee (egg noodles) at Nai Ek Roll Noodles, hoy tod (mussel omelette) from street vendors. Budget \u0E3F150\u2013250.",
                    "3pm: Rest at hostel \u2014 Bangkok heat peaks 1\u20134pm. This is not laziness, it\u2019s survival.",
                    "6pm: Rooftop bar sunset \u2014 Above Eleven (budget-friendliest rooftop). Cocktails \u0E3F300\u2013400. One drink for the view, then leave.",
                    "8pm: Asiatique the Riverfront \u2014 free shuttle boat from Saphan Taksin BTS. Night market + dinner. Budget \u0E3F200\u2013400 for food.",
                  ]}
                  cost="\u0E3F800\u20131,300 (~$23\u201337) excl. accommodation" />
                <DayCard day="Day 4" title="Ayutthaya Day Trip OR MBK/Siam Shopping"
                  items={[
                    "OPTION A \u2014 Ayutthaya Day Trip (recommended): Train from Hua Lamphong at 6:40am, \u0E3F20 3rd class. 2 hours. Rent bicycle at station \u0E3F50/day.",
                    "Must-see ruins: Wat Mahathat (Buddha head in tree roots), Wat Phra Si Sanphet, Wat Chaiwatthanaram. Entry \u0E3F50 each or \u0E3F220 day pass.",
                    "Lunch at Roti Sai Mai market \u2014 famous Ayutthaya dessert, \u0E3F20/bag. Pad thai at the market \u0E3F40.",
                    "Return train at 3\u20134pm. Total day cost: \u0E3F400\u2013600 (~$11\u201317).",
                    "OPTION B \u2014 Shopping: MBK Center (budget shopping, bargain hard), then walk to Siam Paragon and CentralWorld. Air-conditioned, free entry, window shopping costs nothing.",
                    "Last meal: Midnight street food on Sukhumvit Soi 38 \u2014 moo ping (grilled pork skewers) \u0E3F10 each. The perfect Bangkok goodbye.",
                  ]}
                  cost="\u0E3F500\u20131,100 (~$14\u201331) excl. accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 4-Day Cost (solo) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">\u0E3F3,200\u2013\u0E3F6,000 (~$90\u2013$170) including accommodation</span>
                </div>
              </div>
            )}

            {/* ── MID-RANGE PLAN ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\u2728"}</span>
                  <div>
                    <p className="text-sm font-medium text-blue-800">Mid-Range Plan &mdash; Sukhumvit / Silom Base</p>
                    <p className="text-xs text-blue-600 font-light">Stay: 3-star hotel near BTS {"\u00B7"} \u0E3F1,200\u2013\u0E3F2,500/night {"\u00B7"} Transport: BTS + Grab</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Grand Palace, Wat Pho, Wat Arun, Riverside Dinner"
                  items={[
                    "7:30am: Grab to Grand Palace \u2014 beat the 9am rush. Entry \u0E3F500 (~$14). Hire an audio guide \u0E3F200 inside \u2014 makes the visit 3x more interesting.",
                    "10am: Wat Pho \u2014 the reclining Buddha is stunning but also get the traditional Thai massage here (\u0E3F300/30min). It\u2019s the birthplace of Thai massage.",
                    "11:30am: Cross-river ferry (\u0E3F4) to Wat Arun \u2014 \u0E3F100 entry. The riverside cafe opposite has excellent Thai iced tea (\u0E3F60).",
                    "1pm: Lunch at Supanniga Eating Room, Tha Tien \u2014 modern Thai, \u0E3F250\u2013400/person. Book ahead on weekends.",
                    "4pm: Khao San Road walk \u2014 don\u2019t eat here, just absorb the chaos. It\u2019s a Bangkok rite of passage.",
                    "7pm: Dinner at Sala Rattanakosin rooftop \u2014 Wat Arun view at sunset. Mains \u0E3F350\u2013600. Reservation essential.",
                  ]}
                  cost="\u0E3F2,000\u20133,200 (~$56\u201390) excl. accommodation" />
                <DayCard day="Day 2" title="Chatuchak Market OR Floating Market, Jim Thompson House"
                  items={[
                    "Weekend: Chatuchak Market via BTS Mo Chit. Arrive 9am. Budget 3\u20134 hours max. Coconut ice cream, handmade crafts, vintage clothing.",
                    "Weekday alternative: Amphawa Floating Market (Fri\u2013Sun only) or Taling Chan Floating Market (Sat\u2013Sun). If weekday, go to Or Tor Kor market next to Chatuchak \u2014 open daily, best fresh food market in Bangkok.",
                    "1pm: Grab to Jim Thompson House \u2014 \u0E3F200 entry. Stunning teak architecture and Thai silk collection. Guided tour every 20 min.",
                    "3pm: Walk to Siam area \u2014 Siam Paragon, CentralWorld for air-conditioned wandering. Good coffee at Roots Coffee.",
                    "6pm: Dinner at Thipsamai (pad thai institution) on Maha Chai Road \u2014 queue from 5pm, pad thai wrapped in egg \u0E3F80\u2013130. Worth the wait.",
                    "8pm: Talad Rot Fai (Train Night Market) near Ratchada MRT \u2014 vintage cars, street food, craft beer. Free entry.",
                  ]}
                  cost="\u0E3F1,800\u20132,800 (~$50\u201380) excl. accommodation" />
                <DayCard day="Day 3" title="Chinatown, Wat Traimit, Rooftop Bar, Asiatique"
                  items={[
                    "9am: MRT to Wat Mangkon \u2014 walk through Chinatown\u2019s morning markets. The sights and smells are peak Bangkok.",
                    "10:30am: Wat Traimit \u2014 \u0E3F100 entry. The world\u2019s largest solid-gold Buddha statue. Museum on lower floors explains the incredible discovery story.",
                    "12pm: Chinatown food crawl \u2014 hoy tod (crispy mussel omelette) \u0E3F80, guay jab (rolled noodle soup) \u0E3F60, mango sticky rice \u0E3F60.",
                    "2pm: Back to hotel for the afternoon heat break. Bangkok veterans know: 1\u20134pm is for air conditioning.",
                    "5:30pm: Octave Rooftop Lounge at Bangkok Marriott Sukhumvit \u2014 cocktails \u0E3F350\u2013500 with 360-degree city views. Dress smart casual.",
                    "8pm: Asiatique the Riverfront \u2014 free boat from BTS Saphan Taksin. Dinner + shopping. Great for a final Bangkok evening.",
                  ]}
                  cost="\u0E3F2,200\u20133,500 (~$62\u201398) excl. accommodation" />
                <DayCard day="Day 4" title="Ayutthaya Day Trip OR MBK/Siam Shopping"
                  items={[
                    "OPTION A \u2014 Ayutthaya: Book a private minivan tour (\u0E3F1,500\u20132,500/person, includes transport + guide + lunch). Covers Wat Mahathat, Wat Phra Si Sanphet, Wat Chaiwatthanaram, Bang Pa-In Palace.",
                    "Or take the train (\u0E3F345 2nd class AC, 1.5hrs) and hire a tuk-tuk at the station (\u0E3F200/hr) for a self-guided temple circuit.",
                    "OPTION B \u2014 Shopping Day: MBK Center (bargain everything), Siam Discovery (design), Terminal 21 (themed floors, great food court \u0E3F40\u201360/dish).",
                    "3pm: Traditional Thai massage at Health Land \u2014 \u0E3F600 for 2 hours. Book ahead. Best value quality massage in Bangkok.",
                    "6pm: Last dinner at Err Urban Rustic Thai near the Grand Palace area \u2014 creative Thai street food done fine-dining style. Mains \u0E3F200\u2013400.",
                    "Final stop: 7-Eleven run for Thai snacks to take home \u2014 dried mango (\u0E3F35), instant tom yum (\u0E3F12), Lay\u2019s Nori Seaweed chips. The real souvenirs.",
                  ]}
                  cost="\u0E3F2,000\u20134,000 (~$56\u2013$112) excl. accommodation" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-blue-700 uppercase tracking-wide">Total 4-Day Cost (per person) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">\u0E3F8,000\u2013\u0E3F16,000 (~$225\u2013$450) including accommodation</span>
                </div>
              </div>
            )}

            {/* ── LUXURY PLAN ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDC8E"}</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Luxury Plan &mdash; Riverside / Sathorn Base</p>
                    <p className="text-xs text-purple-600 font-light">Stay: 5-star riverside hotel {"\u00B7"} \u0E3F6,000\u2013\u0E3F15,000/night {"\u00B7"} Transport: Hotel car + BTS</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Private Temple Tour, Spa, Fine Dining"
                  items={[
                    "8am: Private guided tour of Grand Palace + Wat Pho + Wat Arun \u2014 \u0E3F3,000\u20135,000/person for guide, skip-the-line knowledge, and context you\u2019d never get alone.",
                    "12pm: Lunch at Paste Bangkok (1 Michelin star) \u2014 royal Thai cuisine, set lunch \u0E3F1,200\u20131,800. Reservations mandatory.",
                    "3pm: Oriental Spa at Mandarin Oriental \u2014 2-hour traditional Thai treatment from \u0E3F5,500. Book 2 weeks ahead.",
                    "7pm: Sunset drinks at Sky Bar (Lebua) \u2014 the Hangover II bar. Cocktails \u0E3F600\u2013900. Dress code enforced. Go at 5:30pm for a table.",
                    "9pm: Dinner at Gaggan Anand \u2014 progressive Indian, Asia\u2019s most famous restaurant. 25-course menu from \u0E3F9,500. Book 2\u20133 months ahead.",
                  ]}
                  cost="\u0E3F8,000\u201315,000 (~$225\u2013$420) excl. accommodation" />
                <DayCard day="Day 2" title="Private Floating Market, Jim Thompson, Rooftop Evening"
                  items={[
                    "6am: Private longtail boat tour of Damnoen Saduak or Maeklong Railway Market + floating market combo \u2014 \u0E3F3,000\u20135,000/person all-inclusive.",
                    "12pm: Lunch at Bo.Lan (sustainable Thai fine dining) \u2014 tasting menu \u0E3F2,500\u20133,500. Seasonal ingredients, zero-waste kitchen.",
                    "3pm: Jim Thompson House private tour + surrounding Baan Krua silk weaving community walk.",
                    "5pm: ICONSIAM luxury mall \u2014 SookSiam indoor floating market on ground floor is spectacular even if you don\u2019t buy anything.",
                    "8pm: Dinner at Le Du (1 Michelin star) \u2014 modern Thai seasonal cuisine. Set menu \u0E3F3,500. Book ahead.",
                  ]}
                  cost="\u0E3F10,000\u201318,000 (~$280\u2013$505) excl. accommodation" />
                <DayCard day="Day 3" title="Chinatown Private Food Tour, Golden Buddha, Spa"
                  items={[
                    "9am: Private Chinatown food tour with a local chef guide \u2014 \u0E3F2,500\u20134,000/person. 3 hours, 10+ tastings. Worth every Baht.",
                    "12pm: Wat Traimit (Golden Buddha) \u2014 \u0E3F100 entry. Your guide adds context about the discovery story.",
                    "2pm: Return to hotel for pool time. Riverside infinity pools at The Peninsula or Capella are spectacular.",
                    "5pm: Muay Thai live at Rajadamnern Stadium \u2014 ringside seats \u0E3F2,000. Authentic, not tourist-show. Friday nights are best.",
                    "8pm: Dinner at Sorn (2 Michelin stars) \u2014 Southern Thai cuisine, only 30 seats. \u0E3F6,000+ per person. Book 1+ month ahead.",
                  ]}
                  cost="\u0E3F12,000\u201322,000 (~$340\u2013$620) excl. accommodation" />
                <DayCard day="Day 4" title="Ayutthaya Private Tour OR Luxury Shopping"
                  items={[
                    "OPTION A \u2014 Ayutthaya: Private car + historian guide. Full-day tour with lunch at a heritage restaurant. \u0E3F5,000\u20138,000/person all-inclusive.",
                    "OPTION B \u2014 Shopping: Siam Paragon (designer brands), Gaysorn Village (luxury Thai designers), then bespoke tailoring fitting at Raja\u2019s Fashions on Sukhumvit.",
                    "2pm: Traditional Thai cooking class at Blue Elephant \u2014 \u0E3F2,800/person. In a gorgeous 1903 colonial mansion. You keep the recipes and eat everything you cook.",
                    "5pm: Farewell drinks at Vertigo at Banyan Tree \u2014 61st floor open-air rooftop. Cocktails \u0E3F500\u2013700.",
                    "8pm: Last dinner at Nahm (Thai fine dining at COMO Metropolitan) \u2014 set menu from \u0E3F2,800.",
                  ]}
                  cost="\u0E3F10,000\u201320,000 (~$280\u2013$560) excl. accommodation" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 4-Day Cost (per person) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">\u0E3F24,000+ (~$680+) including accommodation</span>
                </div>
              </div>
            )}
          </section>

          {/* ── INLINE CTA ── */}
          <InlineCTA destination="Bangkok" onPlanTrip={() => setModalOpen(true)} />

          {/* ── GALLERY ── */}
          <DestinationGallery
            title="Bangkok &mdash; Must-See Places"
            subtitle="Click each thumbnail to explore Bangkok&apos;s most iconic temples, markets and riverside landmarks."
            spots={[
              { name: "Grand Palace",       query: "bangkok grand palace ornate architecture golden roof no people",     desc: "Thailand\u2019s most sacred site. Arrive at 8am sharp to beat crowds. Entry \u0E3F500. Strict dress code \u2014 cover shoulders and knees." },
              { name: "Wat Arun",            query: "wat arun bangkok temple dawn river ceramic spires",                 desc: "The Temple of Dawn on the Chao Phraya River. Best photographed from the opposite bank at sunset. \u0E3F100 entry." },
              { name: "Chatuchak Market",    query: "chatuchak weekend market bangkok stalls colorful overhead",         desc: "15,000 stalls on 35 acres. Open weekends only. Go early, bring cash, download the map app." },
              { name: "Chinatown Yaowarat",  query: "bangkok chinatown yaowarat neon street food night stalls",         desc: "Bangkok\u2019s oldest neighbourhood transforms at night into the city\u2019s best street food corridor." },
              { name: "Ayutthaya Ruins",     query: "ayutthaya ruins ancient temple buddha head tree roots thailand",    desc: "Former Siamese capital, 80km north of Bangkok. The Buddha head entwined in tree roots at Wat Mahathat is iconic." },
            ]}
          />

          {/* ── MID-ARTICLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="bangkok street food night market stalls steam noodles thailand"
              alt="Bangkok street food stalls at night"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Bangkok street food at 11pm from a cart with a 40-person queue is better than any Michelin restaurant. Walk to where the locals are lining up.
              </p>
            </div>
          </div>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Bangkok"
            hotels={[
              { name: "NapPark Hostel", type: "Budget Hostel \u00B7 Khao San", price: "From \u0E3F350/night (~$10)", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/th/nappark-hostel.html?aid=YOUR_AFFILIATE_ID" },
              { name: "Riva Surya Bangkok", type: "Boutique Riverside \u00B7 Old Town", price: "From \u0E3F2,800/night (~$79)", rating: "5", badge: "Mid-range pick", url: "https://www.booking.com/hotel/th/riva-surya-bangkok.html?aid=YOUR_AFFILIATE_ID" },
              { name: "Mandarin Oriental", type: "Iconic Luxury \u00B7 Riverside", price: "From \u0E3F12,000/night (~$340)", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/th/mandarin-oriental-bangkok.html?aid=YOUR_AFFILIATE_ID" },
            ]}
            activities={[
              { name: "Grand Palace & Temple Tour", duration: "Half day", price: "From \u0E3F800/person (~$23)", badge: "Must do", url: "https://www.getyourguide.com/bangkok-l169/?partner_id=PSZA5UI" },
              { name: "Floating Market & Railway Market", duration: "Full day", price: "From \u0E3F1,500/person (~$42)", badge: "Popular", url: "https://www.getyourguide.com/bangkok-l169/floating-market/?partner_id=PSZA5UI" },
              { name: "Ayutthaya Ancient Ruins Day Trip", duration: "Full day", price: "From \u0E3F1,200/person (~$34)", badge: "Day trip", url: "https://www.getyourguide.com/bangkok-l169/ayutthaya/?partner_id=PSZA5UI" },
              { name: "Bangkok Street Food Tour by Night", duration: "4 hours", price: "From \u0E3F1,800/person (~$50)", url: "https://www.getyourguide.com/bangkok-l169/food/?partner_id=PSZA5UI" },
            ]}
            pdfProductId="bangkok-4-days-pdf"
          />

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment">
                    <th className="text-left p-3.5 text-xs font-medium text-muted">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-700 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-700 text-center">{"\u2728"} Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-700 text-center">{"\uD83D\uDC8E"} Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (4N)",  "\u0E3F1,200\u20133,200",   "\u0E3F4,800\u201310,000",  "\u0E3F24,000\u201360,000"],
                    ["\uD83C\uDF5C Food & Drinks",        "\u0E3F800\u20131,600",     "\u0E3F3,200\u20136,000",   "\u0E3F12,000\u201328,000"],
                    ["\uD83D\uDE89 Transport",             "\u0E3F400\u2013800",       "\u0E3F1,200\u20132,400",   "\u0E3F4,000\u201310,000"],
                    ["\uD83C\uDFAF Activities & Entry",    "\u0E3F800\u20131,400",     "\u0E3F2,000\u20134,000",   "\u0E3F15,000\u201335,000"],
                    ["\uD83D\uDED2 Shopping",              "\u0E3F0\u20131,000",       "\u0E3F2,000\u20135,000",   "\u0E3F5,000\u201320,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["\u0E3F3,200\u20136,000 (~$90\u2013170)", "\u0E3F8,000\u201316,000 (~$225\u2013450)", "\u0E3F24,000+ (~$680+)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices Thai Baht (\u0E3F) 2026. USD conversions approximate at \u0E3F35.5 = $1. International flights not included.
            </p>
          </section>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Taking a tuk-tuk to a \u2018special price\u2019 gem shop", desc: "The #1 Bangkok scam. Tuk-tuk driver offers a \u0E3F20 ride but stops at a gem shop \u2018on the way.\u2019 The gems are worthless glass. Use BTS, MRT, or Grab instead.", icon: "\uD83D\uDEBA" },
                { title: "Visiting Grand Palace after 10am", desc: "Tour buses arrive at 10am and it becomes unbearable. Gate opens at 8:30am \u2014 be there at 8:15. You\u2019ll have the place nearly to yourself for 90 minutes.", icon: "\uD83C\uDFDB\uFE0F" },
                { title: "Only eating on Khao San Road", desc: "Khao San food is overpriced and mediocre. Walk 2 blocks in any direction for real Thai food at half the price. Soi Rambuttri (parallel street) is already much better.", icon: "\uD83C\uDF5C" },
                { title: "Ignoring the dress code at temples", desc: "Grand Palace and Wat Pho enforce dress codes strictly \u2014 no shorts, no sleeveless tops, no flip-flops. They rent cover-ups but the queue wastes 20\u201330 minutes.", icon: "\uD83D\uDC54" },
                { title: "Taking taxis without the meter", desc: "Always say \u2018meter, krap/ka\u2019 when getting in. If the driver refuses, get out and take the next one. A metered ride from airport to Sukhumvit is ~\u0E3F300\u2013400. Without meter they\u2019ll quote \u0E3F800+.", icon: "\uD83D\uDE95" },
                { title: "Skipping Ayutthaya", desc: "80km from Bangkok, reachable by \u0E3F20 train. A UNESCO World Heritage Site of ancient Siamese ruins. Budget one full day \u2014 you won\u2019t regret it.", icon: "\uD83C\uDFDB\uFE0F" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\uD83D\uDE87", title: "BTS/MRT Is Everything", desc: "Buy a Rabbit Card at any BTS station (\u0E3F200 + top-up). Covers BTS Skytrain, some river boats, and 7-Eleven. Bangkok traffic is brutal \u2014 BTS beats Grab 9 times out of 10.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDCF1", title: "Get Grab Immediately", desc: "Grab is Southeast Asia\u2019s Uber. Fixed prices, no scams, AC, GPS-tracked. Use for anything the BTS doesn\u2019t cover. Also delivers food.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF5C", title: "Follow the Queue", desc: "If there\u2019s a 30-person queue at a street stall, join it. Thais know food. The best pad thai, khao man gai, and som tam are always at stalls with long lines and tiny seats.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDFE6", title: "ATM Fee Hack", desc: "Thai ATMs charge \u0E3F220/withdrawal. Withdraw \u0E3F10,000+ each time to minimize fees. Better: bring a Wise or Revolut card for zero-fee transactions.", color: "bg-teal-50 border-teal-200" },
                { icon: "\u2614", title: "Embrace the Afternoon Break", desc: "1\u20134pm is dangerously hot (35\u201340\u00B0C). Plan temples and markets for mornings, air-conditioned malls or spa for afternoons, street food for evenings.", color: "bg-blue-50 border-blue-200" },
                { icon: "\uD83D\uDE4F", title: "Temple Etiquette", desc: "Remove shoes before entering any temple building. Never point feet at Buddha images. Don\u2019t touch monks (especially women). Small acts of respect go a very long way.", color: "bg-blue-50 border-blue-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA (dark) ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/55 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Bangkok itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Bangkok Trip {"\u2192"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"\u2192"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Bangkok?", a: "4 days is ideal to cover temples, markets, food scene and an Ayutthaya day trip. 2\u20133 days works if you skip Ayutthaya. 5\u20136 days lets you add Kanchanaburi or slow down." },
                { q: "What is the best time to visit Bangkok?", a: "November\u2013February is the cool dry season (25\u201332\u00B0C). March\u2013May is extremely hot (35\u201340\u00B0C). June\u2013October is monsoon season with afternoon downpours but lower prices and fewer crowds." },
                { q: "How much does a 4-day Bangkok trip cost?", a: "Budget: \u0E3F3,200\u20136,000 ($90\u2013170) per day including accommodation. Mid-range: \u0E3F8,000\u201316,000 ($225\u2013450). Luxury: \u0E3F24,000+ ($680+). All include accommodation, food, transport and activities. Flights not included." },
                { q: "Do Indian passport holders need a visa for Thailand?", a: "Yes. Options: eVisa (apply online, 5\u20137 days processing, 60-day stay), Visa on Arrival (15-day stay, \u0E3F2,000 fee, carry \u0E3F10,000 cash proof), or Tourist Visa from Thai embassy (60 days, extendable 30 more)." },
                { q: "Is Bangkok safe for solo travellers?", a: "Very safe. Violent crime against tourists is rare. Main scams: tuk-tuk gem shops, inflated taxi meters, jet ski damage claims. Use BTS/MRT and Grab for safe transport. Khao San area can be chaotic but not dangerous." },
                { q: "What is the best area to stay in Bangkok?", a: "First-timers: Sukhumvit (BTS Nana to Ekkamai) for convenience. Temples: Khao San Road / Banglamphu. Luxury: Riverside near ICONSIAM. Budget: Khao San Road or Silom. Always stay near a BTS or MRT station." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Thailand Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Phuket \u2014 5 Day Island Guide", href: "/blog/phuket-5-days", soon: false },
                { label: "Chiang Mai \u2014 4 Day Culture Guide", href: "/blog/chiang-mai-4-days", soon: false },
                { label: "Browse All Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View {"\u2192"}</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="bangkok-4-days" />
          <RelatedGuides currentSlug="bangkok-4-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
