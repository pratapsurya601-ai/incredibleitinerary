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

const JAIPUR_TOC = [
  { id: "decision",    emoji: "\u26A1", label: "Which Plan Are You?" },
  { id: "overview",    emoji: "\uD83D\uDCCD", label: "Jaipur at a Glance" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",      emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "mistakes",    emoji: "\u274C", label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "\uD83D\uDCA1", label: "Pro Tips" },
  { id: "faq",         emoji: "\u2753", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Jaipur 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Jaipur in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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

// ── Tip Card ──────────────────────────────────────────────────────────────────
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

// ── FAQ Item accordion ────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-gold text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function JaipurClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under \u20B96k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83C\uDFDB\uFE0F", label: "Heritage", sub: "\u20B98k\u201320k total", color: "border-rose-300 bg-rose-50 text-rose-800" },
    { id: "C" as const, emoji: "\uD83D\uDC51", label: "Royal", sub: "\u20B920k\u201350k total", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={JAIPUR_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Jaipur" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="hawa mahal jaipur pink city rajasthan"
            fallback="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1600&q=85"
            alt="Hawa Mahal Jaipur pink city at golden hour"
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
              <span className="text-white/70">Jaipur 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Heritage & Culture
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/30">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/30">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Jaipur in 3 Days: The Only Guide You Need
                <em className="italic text-gold-light"> (Budget to Royal, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, actual costs, Google Maps routes — and the insider tips that separate a forgettable trip from an unforgettable one.
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
              <span>{"\uD83C\uDDEE\uD83C\uDDF3"} India</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDDD3"} 3 Days</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDCB0"} From \u20B96,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Amber Fort at 6am with nobody else there is a completely different experience than the 11am tourist crush — set one alarm, it&apos;s worth it. Most people see Jaipur through an auto-rickshaw window, overpay at tourist traps near City Palace, and leave thinking it was just &ldquo;pretty buildings.&rdquo; This guide fixes that.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\u26A1"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your style — jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} {"\u2192"}</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── JAIPUR OVERVIEW ── */}
          <section id="overview" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCCD"} Jaipur at a Glance</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The Pink City is more than Hawa Mahal selfies. It&apos;s a living, breathing Rajasthani capital with 600 years of history crammed into streets that also sell the best dal baati churma in India.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Old City (Walled)", emoji: "\uD83C\uDFDB\uFE0F", bg: "bg-rose-50 border-rose-200", th: "text-rose-800",
                  rows: [["Best for","First-timers, culture, photography"],["Sights","Hawa Mahal, City Palace, Jantar Mantar"],["Budget","Entry fees \u20B950\u2013\u20B9500"],["Vibe","Chaotic, colourful, sensory overload"]],
                  note: "Walk the old city before 9am — shops are closed but the pink walls glow in morning light." },
                { title: "Fort Circuit (Hills)", emoji: "\uD83C\uDFF0", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Best for","History buffs, photographers, sunset chasers"],["Sights","Amber Fort, Nahargarh Fort, Jaigarh Fort"],["Budget","Cab \u20B91,200\u2013\u20B91,800/day"],["Vibe","Grand, panoramic, less crowded early morning"]],
                  note: "All three forts connect via a ridge road. Amber at sunrise, Nahargarh at sunset is the perfect bookend." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/60 w-16 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">{"\u26A0\uFE0F"} {area.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Smart move:</strong> Buy the composite ticket on Day 1. It covers Amber Fort, Hawa Mahal, City Palace, Jantar Mantar, Albert Hall Museum and Nahargarh Fort — saves 40-60% over individual tickets.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="3 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"\u20B96,000"} />
            <StatCard icon={"\uD83C\uDF21"} label="Best Months" value="Oct \u2013 Mar" />
            <StatCard icon={"\u2708\uFE0F"} label="Airport" value="JAI (Jaipur)" />
          </div>

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Jaipur — Must-See Places"
            subtitle="Click each thumbnail to explore Jaipur's most iconic forts, palaces and landmarks."
            spots={[
              { name: "Amber Fort",            query: "amber fort jaipur rajasthan sandstone architecture hills",         desc: "Jaipur's crown jewel. A sprawling hilltop fortress with mirror-work halls, courtyards, and panoramic valley views. Arrive at 6am opening to have it nearly to yourself." },
              { name: "Hawa Mahal",             query: "hawa mahal jaipur pink facade honeycomb windows street view",     desc: "The iconic 953-window pink sandstone facade. Best photographed from the cafe across the street in early morning light. Inside takes only 20 minutes." },
              { name: "City Palace",            query: "city palace jaipur courtyard ornate architecture rajasthan",      desc: "A still-functioning royal palace in the heart of the old city. The Peacock Gate alone is worth the visit. Allow 1.5 hours minimum." },
              { name: "Jantar Mantar",          query: "jantar mantar jaipur astronomical instruments stone observatory", desc: "The world's largest stone astronomical observatory, built in 1734. UNESCO World Heritage Site. The giant sundial is accurate to 2 seconds." },
              { name: "Nahargarh Fort",         query: "nahargarh fort jaipur hilltop sunset panoramic city view",        desc: "The sunset fort. Perched on Aravalli hills with the entire pink city spread below. Far fewer tourists than Amber Fort. Come at 5pm." },
              { name: "Jal Mahal",              query: "jal mahal jaipur water palace lake mountains evening",            desc: "The floating palace in Man Sagar Lake. You cannot enter, but the photo from the roadside with Aravalli hills behind is one of Jaipur's best. Free." },
              { name: "Albert Hall Museum",     query: "albert hall museum jaipur indo saracenic architecture garden",    desc: "Stunning Indo-Saracenic architecture housing Rajasthani art, Egyptian mummies, and folk costumes. Beautiful at night when illuminated." },
              { name: "Johari Bazaar",          query: "johari bazaar jaipur colorful market traditional shopping rajasthan", desc: "Jaipur's oldest jewellery market. Come for the architecture and atmosphere, not necessarily to buy. Lac bangles start at 50 rupees." },
            ]}
          />

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} The Itineraries</h2>
            <p className="text-sm text-muted font-light mb-6">Click a plan — days are expandable/collapsible.</p>

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

            {/* ── PLAN A: Budget ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDCB0"}</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Under {"\u20B9"}6,000 Total</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Hostel/guesthouse near MI Road {"\u00B7"} {"\u20B9"}400{"\u2013"}{"\u20B9"}800/night {"\u00B7"} Transport: City bus + shared autos</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Amber Fort at Dawn + Old City Immersion"
                  items={[
                    "5:45am: Cab to Amber Fort (shared auto \u20B930 from Hawa Mahal stop). Arrive for 6am opening \u2014 you\u2019ll share it with maybe 20 people instead of 2,000.",
                    "Spend 2.5 hours inside. Sheesh Mahal mirror room, Diwan-i-Khas, the step-well. No guide needed \u2014 signboards are excellent.",
                    "9am: Walk downhill (don\u2019t ride elephants). Stop at Jal Mahal for photos from the road. Free, 5 minutes.",
                    "10:30am: Hawa Mahal (\u20B950 entry or composite ticket). Go inside \u2014 the rooftop view over the bazaar is the real attraction, not the facade.",
                    "12pm: Lunch at LMB (Laxmi Mishthan Bhandar) on Johari Bazaar. Dal baati churma is non-negotiable. Don\u2019t leave Jaipur without it. \u20B9200\u2013\u20B9350 for a full thali.",
                    "2pm: City Palace (\u20B9200 entry or composite). 1.5 hours minimum. Peacock Gate is the highlight.",
                    "4pm: Jantar Mantar next door (\u20B950 or composite). Giant sundial, surprisingly fascinating. 45 minutes.",
                    "5pm: Walk Johari Bazaar and Bapu Bazaar. Window shop \u2014 lac bangles from \u20B950, block-print fabric from \u20B9150/metre.",
                    "Evening: Street food dinner at Rawat Mishthan Bhandar \u2014 pyaaz kachori (\u20B930) that\u2019s been famous for 50 years."
                  ]}
                  cost={"\u20B9800\u2013\u20B91,200 excluding accommodation"} />
                <DayCard day="Day 2" title="Nahargarh Sunrise + Culture Circuit"
                  items={[
                    "5:30am: Cab to Nahargarh Fort (\u20B9250\u2013\u20B9350 by auto). Watch sunrise over the entire pink city below \u2014 this is the Jaipur photo nobody takes because they\u2019re all at Hawa Mahal.",
                    "7:30am: Breakfast at the fort\u2019s rooftop cafe. Chai + paratha with a view. \u20B9100\u2013\u20B9150.",
                    "9:30am: Albert Hall Museum (\u20B940 entry or composite). Indo-Saracenic architecture alone is worth the visit. Egyptian mummy room, Rajasthani folk art. 1.5 hours.",
                    "11:30am: Birla Mandir (free entry). White marble temple with stained glass and mountain views. 30 minutes, remove shoes.",
                    "1pm: Lunch at a local dhaba near Sindhi Camp. Non-veg thali \u20B9120\u2013\u20B9180.",
                    "3pm: Galta Ji (Monkey Temple). 4km east of city centre. Free entry, real pilgrimage site, not a tourist attraction. Water tanks carved into hillside. 1 hour.",
                    "6pm: Chokhi Dhani for dinner (\u20B9800\u2013\u20B91,000 entry includes buffet). Rajasthani village experience \u2014 folk dancers, puppet shows, camel rides, unlimited food. Touristy? Yes. Worth it on a budget? Absolutely.",
                  ]}
                  cost={"\u20B91,500\u2013\u20B92,000 excluding accommodation"} />
                <DayCard day="Day 3" title="Food Walk + Hidden Gems + Departure"
                  items={[
                    "7am: Walk the old city pink walls in morning light. Shops are closed, streets are empty, the city is yours.",
                    "8:30am: Breakfast kachori run \u2014 Samrat Restaurant near Chand Pole for mirchi vada and lassi. \u20B960\u2013\u20B9100.",
                    "10am: Anokhi Museum of Hand Printing, Amber (near the fort). \u20B930 entry. Learn how Rajasthani block-printing actually works. Small, beautiful, always empty. 45 minutes.",
                    "12pm: Final shopping. Bapu Bazaar for textiles, Tripolia Bazaar for bangles. Bargain hard \u2014 first price is always 3x the real price.",
                    "1:30pm: Farewell lunch. Thali at Santosh Bhojnalaya \u2014 locals-only joint, unlimited refills, \u20B9100.",
                    "3pm: Depart for airport/station."
                  ]}
                  cost={"\u20B9500\u2013\u20B9800 excluding accommodation"} />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">{"\u20B9"}4,500{"\u2013"}{"\u20B9"}6,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: Heritage ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83C\uDFDB\uFE0F"}</span>
                  <div>
                    <p className="text-sm font-medium text-rose-800">Heritage Plan — {"\u20B9"}8,000{"\u2013"}{"\u20B9"}20,000 Total</p>
                    <p className="text-xs text-rose-600 font-light">Stay: Heritage haveli or boutique hotel {"\u00B7"} {"\u20B9"}2,000{"\u2013"}{"\u20B9"}5,000/night {"\u00B7"} Transport: Full-day cab</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Amber Fort at Dawn + Royal Jaipur"
                  items={[
                    "5:45am: Private cab to Amber Fort. Arrive 6am opening. The Sheesh Mahal with morning light streaming through \u2014 the mirrors ignite like fireflies. You\u2019ll understand why maharajas built this.",
                    "Hire a guide at the gate (\u20B9500\u2013\u20B9700 for 2 hours). Unlike most Indian monuments, Amber Fort genuinely benefits from one \u2014 the hidden passages and stories aren\u2019t on any signboard.",
                    "9am: Drive down. Photo stop at Jal Mahal \u2014 the floating palace is best in morning light with Aravalli reflections.",
                    "10am: Hawa Mahal. Skip the selfie crowd at the front. Cross the street, go to Wind View Cafe rooftop \u2014 the facade with chai is the real experience.",
                    "11:30am: City Palace. Budget 2 hours. The textile gallery and armoury are undervisited. Peacock Gate is peak Jaipur.",
                    "1:30pm: Lunch at 1135 AD inside Amber Fort area or Suvarna Mahal at Rambagh Palace (\u20B92,500\u2013\u20B93,500 for two). Once-in-a-lifetime dining in a former maharaja\u2019s banquet hall.",
                    "3:30pm: Jantar Mantar. Hire the site guide (\u20B9200) \u2014 the instruments are meaningless without explanation. The giant sundial reads time to 2-second accuracy.",
                    "5pm: Johari Bazaar walk. The \u2018government approved\u2019 gem shops near City Palace are 100% scams \u2014 I\u2019ve seen tourists drop \u20B950k on worthless stones. Buy from established shops with GST bills only.",
                    "7pm: Dinner at Bar Palladio. Italian food in a Mughal palace. Blue interiors, lanterns, outstanding cocktails. \u20B92,000\u2013\u20B93,000 for two."
                  ]}
                  cost={"\u20B94,000\u2013\u20B97,000 for two excluding accommodation"} />
                <DayCard day="Day 2" title="Nahargarh Sunset + Culture Deep Dive"
                  items={[
                    "8am: Relaxed breakfast at your haveli. Most heritage hotels include breakfast \u2014 enjoy it on the rooftop.",
                    "10am: Albert Hall Museum. The building itself is photographed more than the exhibits. Go inside anyway \u2014 the Rajasthani folk gallery and Egyptian mummy are genuinely surprising.",
                    "12pm: Jantar Mantar if you skipped it, or revisit City Palace gardens.",
                    "1pm: Lunch at Tapri Central \u2014 Jaipur\u2019s best rooftop cafe. Rajasthani food with a modern twist. \u20B9800\u2013\u20B91,200 for two.",
                    "2:30pm: Birla Temple. White marble against the brown Aravalli hills is stunning. Free entry, 30 minutes.",
                    "3:30pm: Drive to Nahargarh Fort. Take the scenic road through Jaipur\u2019s ridge.",
                    "4:30pm: Nahargarh Fort at sunset with the entire pink city below you \u2014 this is the Jaipur photo nobody takes because they\u2019re all at Hawa Mahal. Stay until the city lights come on.",
                    "7:30pm: Chokhi Dhani dinner. \u20B91,200\u2013\u20B91,800/person for the premium experience. Folk dance, puppet shows, traditional Rajasthani thali. It\u2019s touristy and it\u2019s wonderful."
                  ]}
                  cost={"\u20B94,000\u2013\u20B96,000 for two excluding accommodation"} />
                <DayCard day="Day 3" title="Local Food Walk + Anokhi Museum + Departure"
                  items={[
                    "7am: Morning walk through the old city. Pink walls, chai stalls, temple bells. This is Jaipur before the tour buses arrive.",
                    "8:30am: Food walk. Start at Rawat Mishthan Bhandar for pyaaz kachori. Move to LMB for lassi. End at Lassiwala on MI Road \u2014 they\u2019ve been making one product for 80 years and it\u2019s perfect.",
                    "10:30am: Anokhi Museum of Hand Printing, Amber. A restored haveli showcasing Rajasthani block-printing with live demonstrations. \u20B930 entry. Beautiful gift shop with authentic prints.",
                    "12pm: Last-minute shopping. Johari Bazaar for silver jewellery (real), Tripolia Bazaar for lac bangles, Bapu Bazaar for textiles. Get GST bills for anything over \u20B9500.",
                    "1:30pm: Farewell lunch at Niros on MI Road \u2014 Jaipur institution since 1949. \u20B91,000\u2013\u20B91,500 for two.",
                    "3pm: Depart."
                  ]}
                  cost={"\u20B92,000\u2013\u20B93,500 for two excluding accommodation"} />
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-rose-700 uppercase tracking-wide">Total 3-Day Cost (for two) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">{"\u20B9"}16,000{"\u2013"}{"\u20B9"}30,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: Royal ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDC51"}</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Royal Plan — {"\u20B9"}20,000{"\u2013"}{"\u20B9"}50,000 Total</p>
                    <p className="text-xs text-purple-600 font-light">Stay: Rambagh Palace / Taj Jai Mahal / Samode Haveli {"\u00B7"} {"\u20B9"}8,000{"\u2013"}{"\u20B9"}20,000/night</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Private Amber Fort + Royal Dining"
                  items={[
                    "6am: Private car to Amber Fort. Your hotel concierge arranges this. Private guide waiting at entrance (\u20B91,500\u2013\u20B92,000, hotel-vetted).",
                    "Amber Fort without crowds is genuinely one of India\u2019s great experiences. The Sheesh Mahal, Diwan-i-Aam, the hidden stepwell \u2014 budget 3 hours.",
                    "9:30am: Drive to Jaigarh Fort (5 min from Amber). World\u2019s largest cannon on wheels. Almost always empty. Incredible views back over Amber Fort.",
                    "11am: Photo stop at Jal Mahal, then Hawa Mahal. Skip the inside \u2014 the Wind View Cafe across the street is the move.",
                    "12:30pm: City Palace. Ask for the Maharaja\u2019s private collection tour (\u20B92,500 extra) \u2014 textiles, weapons, manuscripts not shown to regular visitors.",
                    "2pm: Lunch at Suvarna Mahal, Rambagh Palace. Gold-leaf ceiling, crystal chandeliers, Rajasthani cuisine. \u20B94,000\u2013\u20B96,000 for two. This is where actual royalty ate.",
                    "4pm: Jantar Mantar with private guide. Then walk to Johari Bazaar \u2014 your hotel concierge can recommend legitimate jewellers (not the \u2018government approved\u2019 scams).",
                    "7:30pm: Dinner at Steam, Rambagh Palace or The Verandah at Taj Jai Mahal. \u20B95,000\u2013\u20B98,000 for two with wine."
                  ]}
                  cost={"\u20B912,000\u2013\u20B918,000 for two excluding accommodation"} />
                <DayCard day="Day 2" title="Hot Air Balloon + Nahargarh Private Sunset"
                  items={[
                    "6am: Hot air balloon ride over Jaipur (\u20B98,000\u2013\u20B912,000/person, Oct\u2013Mar only). Seeing the pink city from above at sunrise is extraordinary. Book via SkyWaltz.",
                    "9:30am: Return to hotel. Leisurely breakfast.",
                    "11am: Albert Hall Museum. The Indo-Saracenic building photographs beautifully from Ram Niwas Garden.",
                    "12:30pm: Birla Temple. White marble Laxmi Narayan temple with mountain backdrop.",
                    "1:30pm: Lunch at Caffe Palladio or Tapri Central.",
                    "3pm: Private car to Nahargarh Fort via the scenic ridge road. Stop at viewpoints.",
                    "4:30pm: Nahargarh Fort. Walk the ramparts. The Madhavendra Bhawan inside has rooms that are frozen in time.",
                    "5:30pm: Sunset from the fort walls with pink city panorama below. Padao restaurant at the fort for sundowner drinks.",
                    "8pm: Chokhi Dhani Royal Experience (\u20B92,000/person). Private table, premium folk performances, unlimited royal Rajasthani thali."
                  ]}
                  cost={"\u20B915,000\u2013\u20B925,000 for two excluding accommodation"} />
                <DayCard day="Day 3" title="Curated Food Tour + Anokhi + Departure"
                  items={[
                    "7am: Private guided food walk through old city (\u20B92,000\u2013\u20B93,000 for two, book via hotel). Pyaaz kachori, lassi, jalebi, samosa — all from the right stalls, not the tourist ones.",
                    "10am: Anokhi Museum of Hand Printing, Amber. Small but exquisite. The gift shop has the most authentic block-print textiles in Jaipur.",
                    "11:30am: Private shopping tour. Your guide takes you to actual artisan workshops \u2014 where the block-printers, jewellers, and miniature painters actually work. No middlemen, fair prices.",
                    "1pm: Farewell lunch at The Rajput Room, Taj Jai Mahal Palace. Colonial-era grandeur, Rajasthani and European cuisine. \u20B94,000\u2013\u20B96,000 for two.",
                    "3pm: Spa at your hotel (most luxury hotels offer 60-min treatments \u20B93,000\u2013\u20B95,000). Or depart for airport."
                  ]}
                  cost={"\u20B910,000\u2013\u20B916,000 for two excluding accommodation"} />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 3-Day Cost (for two) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">{"\u20B9"}40,000{"\u2013"}{"\u20B9"}95,000 including accommodation</span>
                </div>
              </div>
            )}
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment">
                    <th className="text-left p-3.5 text-xs font-medium text-muted">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-700 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-700 text-center">{"\uD83C\uDFDB\uFE0F"} Heritage</th>
                    <th className="p-3.5 text-xs font-medium text-purple-700 text-center">{"\uD83D\uDC51"} Royal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "\u20B91,200\u2013\u20B92,400", "\u20B96,000\u2013\u20B915,000", "\u20B924,000\u2013\u20B960,000"],
                    ["\uD83C\uDF7D Food & Drinks", "\u20B9800\u2013\u20B91,200", "\u20B93,000\u2013\u20B96,000", "\u20B98,000\u2013\u20B916,000"],
                    ["\uD83D\uDE95 Transport", "\u20B9400\u2013\u20B9600", "\u20B91,800\u2013\u20B93,000", "\u20B93,000\u2013\u20B95,000"],
                    ["\uD83C\uDFAF Entry Fees", "\u20B9200\u2013\u20B9500", "\u20B9500\u2013\u20B92,000", "\u20B92,000\u2013\u20B95,000"],
                    ["\uD83D\uDECD Shopping", "\u20B9500\u2013\u20B91,000", "\u20B92,000\u2013\u20B95,000", "\u20B95,000\u2013\u20B915,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["\u20B94,500\u2013\u20B96,000","\u20B98,000\u2013\u20B920,000","\u20B920,000\u2013\u20B950,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Jaipur is one of India&apos;s most budget-friendly cities — even &ldquo;luxury&rdquo; here costs a fraction of what it would in Europe.
            </p>
          </section>

          {/* ── JAIPUR AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Jaipur"
            hotels={[
              { name: "Zostel Jaipur", type: "Budget Hostel \u00B7 MI Road", price: "From \u20B9500/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/zostel-jaipur.html?aid=YOUR_AFFILIATE_ID" },
              { name: "Samode Haveli", type: "Heritage Haveli \u00B7 Old City", price: "From \u20B94,500/night", rating: "5", badge: "Heritage pick", url: "https://www.booking.com/hotel/in/samode-haveli.html?aid=YOUR_AFFILIATE_ID" },
              { name: "Rambagh Palace", type: "Royal Palace Hotel \u00B7 Taj", price: "From \u20B918,000/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/in/rambagh-palace.html?aid=YOUR_AFFILIATE_ID" },
            ]}
            activities={[
              { name: "Amber Fort & Jaipur City Tour", duration: "Full day", price: "From \u20B91,200/person", badge: "Must do", url: "https://www.getyourguide.com/jaipur-l288/amber-fort/?partner_id=PSZA5UI" },
              { name: "Hot Air Balloon Ride", duration: "1 hour", price: "From \u20B98,000/person", badge: "Premium", url: "https://www.getyourguide.com/jaipur-l288/balloon/?partner_id=PSZA5UI" },
              { name: "Old City Food Walking Tour", duration: "3 hours", price: "From \u20B91,500/person", badge: "Cultural", url: "https://www.getyourguide.com/jaipur-l288/food-tour/?partner_id=PSZA5UI" },
              { name: "Block Printing Workshop", duration: "2 hours", price: "From \u20B9800/person", url: "https://www.getyourguide.com/jaipur-l288/workshop/?partner_id=PSZA5UI" },
            ]}
            pdfProductId="jaipur-3-days-pdf"
          />

          {/* ── AMBER FORT IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="amber fort jaipur sunrise golden light rajasthan architecture"
              fallback="https://images.unsplash.com/photo-1603204077809-06a5344fdd12?w=900&q=80"
              alt="Amber Fort Jaipur at sunrise"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Amber Fort at 6am — the Sheesh Mahal mirrors catch the first light while the rest of Jaipur is still asleep. This is why you set that alarm.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Riding elephants at Amber Fort", desc: "Cruel, slow, expensive (\u20B91,200), and there's a well-maintained path that takes 15 minutes on foot. Walk up.", icon: "\uD83D\uDC18" },
                { title: "Buying gems near City Palace", desc: "The 'government approved' gem shops near City Palace are 100% scams. Tourists routinely lose \u20B950,000+ on worthless stones. If someone approaches you on the street offering gems, walk away.", icon: "\uD83D\uDC8E" },
                { title: "Visiting Amber Fort after 10am", desc: "Tour buses arrive at 10am. By 11am it's shoulder-to-shoulder. Go at 6am opening or skip it entirely.", icon: "\u23F0" },
                { title: "Skipping the composite ticket", desc: "Individual tickets cost 40-60% more. The composite covers 7 major monuments for \u20B9100 (Indian) or \u20B91,000 (foreign). Buy at Amber Fort on Day 1.", icon: "\uD83C\uDFAB" },
                { title: "Auto-rickshaw without fixing price", desc: "Always agree on price before getting in. Jaipur autos don't use meters. Uber/Ola are more reliable and usually cheaper.", icon: "\uD83D\uDE9C" },
                { title: "Only seeing Hawa Mahal from outside", desc: "Everyone photographs the facade and leaves. The rooftop view looking OUT over the bazaar is the actual highlight. \u20B950 entry, 20 minutes.", icon: "\uD83D\uDCF7" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── FOOD IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="dal baati churma rajasthani food thali traditional jaipur"
              fallback="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&q=80"
              alt="Traditional Rajasthani dal baati churma thali"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Dal baati churma at LMB is non-negotiable. Don&apos;t leave Jaipur without it. {"\u20B9"}200 for a meal that defines Rajasthani cuisine.
              </p>
            </div>
          </div>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\uD83C\uDF05", title: "The 6am Fort Rule", desc: "Amber Fort at 6am opening with nobody else there is a completely different experience than the 11am tourist crush. Set one alarm. It's worth it.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF1F", title: "Nahargarh > Hawa Mahal for Photos", desc: "Nahargarh Fort at sunset with the entire pink city below you \u2014 this is the Jaipur photo nobody takes because they're all at Hawa Mahal fighting for selfies.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF7D", title: "LMB is Non-Negotiable", desc: "Dal baati churma at LMB (Laxmi Mishthan Bhandar) on Johari Bazaar. Don't leave Jaipur without eating here. The pyaaz kachori at Rawat is the other must-eat.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDED2", title: "Shopping Rules", desc: "Never buy from anyone who approaches you on the street. Always ask for GST bill. First quoted price is 3x real price. Bapu Bazaar for textiles, Johari Bazaar for silver.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDCF1", title: "Use Uber/Ola, Not Street Autos", desc: "Jaipur auto-rickshaw drivers are aggressive negotiators. Uber and Ola are cheaper, air-conditioned, and stress-free. Book a full-day cab for Day 1 (\u20B91,200\u2013\u20B91,800).", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83D\uDCC6", title: "Best Month by Month", desc: "Oct\u2013Nov \u2705 perfect weather, fewer crowds | Dec\u2013Jan \u2705 cool mornings, peak season | Feb\u2013Mar \u2705 Holi festival | Apr\u2013Jun \u2614 45\u00B0C, avoid | Jul\u2013Sep \uD83C\uDF27\uFE0F monsoon, skip", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/55 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group and budget — we&apos;ll send a personalised Jaipur itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Jaipur Trip {"\u2192"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"\u2192"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Jaipur?", a: "3 days is ideal. Day 1 covers Amber Fort and the old city, Day 2 handles forts and cultural sights, Day 3 allows for food, shopping and hidden gems. If you have 5 days, add day trips to Pushkar and Ranthambore." },
                { q: "What is the best time to visit Jaipur?", a: "October\u2013March is best. October\u2013November has pleasant weather and fewer crowds. December\u2013January is cool but peak season. February\u2013March brings Holi and ideal temperatures. Avoid April\u2013June when it exceeds 45\u00B0C." },
                { q: "How much does a 3-day Jaipur trip cost?", a: "Budget solo: \u20B94,500\u2013\u20B96,000 including accommodation. Heritage mid-range for two: \u20B916,000\u2013\u20B930,000. Royal luxury for two: \u20B940,000\u2013\u20B995,000. All include accommodation, food, transport and entry fees." },
                { q: "Is the composite ticket worth it?", a: "Absolutely. \u20B9100 for Indians, \u20B91,000 for foreigners. Covers Amber Fort, Hawa Mahal, City Palace, Jantar Mantar, Albert Hall Museum, Nahargarh Fort and more. Valid 2 days. Saves 40\u201360% over individual tickets. Buy at Amber Fort on Day 1." },
                { q: "Is Jaipur safe for solo female travellers?", a: "Generally yes, especially in tourist areas. Use Uber/Ola instead of random autos, stick to well-lit areas at night, dress modestly at temples. The old city is busiest and safest during morning hours. Many women travel solo here without issues." },
                { q: "What is the best way to get around Jaipur?", a: "Uber and Ola are most reliable. For Day 1 with Amber Fort, hire a full-day cab (\u20B91,200\u2013\u20B91,800) as sights are spread out. The old city on Day 2 is walkable. Avoid renting a scooter \u2014 Jaipur traffic is genuinely chaotic." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer India Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Goa in 3 Days \u2014 Beach to Luxury", href: "/blog/goa-3-days", soon: false },
                { label: "Golden Triangle \u2014 Delhi, Agra, Jaipur", href: "/blog/golden-triangle-7-days", soon: true },
                { label: "Rajasthan \u2014 7 Day Royal Circuit", href: "/blog/rajasthan-7-days", soon: true },
                { label: "Browse All India Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon \u2192" : "View \u2192"}</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="jaipur-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
