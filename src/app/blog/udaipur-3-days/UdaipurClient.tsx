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


const UDAIPUR_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "overview",    emoji: "\uD83D\uDCCD", label: "Udaipur at a Glance" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Udaipur 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Udaipur in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
          <p className="font-medium text-sm text-stone-900 mb-1">{title}</p>
          <p className="text-xs text-gray-700 font-light leading-relaxed">{desc}</p>
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
export default function UdaipurClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under ₹8k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83D\uDC91", label: "Couple / Romantic", sub: "₹10k–25k", color: "border-rose-300 bg-rose-50 text-rose-800" },
    { id: "C" as const, emoji: "\uD83D\uDC51", label: "Luxury", sub: "₹25k–60k", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={UDAIPUR_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Udaipur" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="udaipur city palace lake pichola rajasthan"
            fallback="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=85"
            alt="City Palace and Lake Pichola Udaipur at sunset"
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
              <span className="text-white/70">Udaipur 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Heritage & Lakes
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">&middot;</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">&middot;</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Udaipur in 3 Days: The Only Guide You Need
                <em className="italic text-gold-light"> (Budget to Luxury, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, actual costs, rooftop picks &mdash; and the mistakes that ruin most Udaipur trips.
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
              <span>\uD83C\uDDEE\uD83C\uDDF3 Rajasthan, India</span>
              <span>&middot;</span>
              <span>\uD83D\uDDD3 3 Days</span>
              <span>&middot;</span>
              <span>\uD83D\uDCB0 From ₹8,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Udaipur is the most romantic city in India and it knows it &mdash; every rooftop has a Lake Pichola view and a candlelit table. But most first-timers waste their time at the wrong spots, overpay for mediocre food, and miss the places that actually make this city magical. This guide fixes all of that.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your situation &mdash; jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} →</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── UDAIPUR AT A GLANCE ── */}
          <section id="overview" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\uD83D\uDCCD Udaipur at a Glance</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The City of Lakes sits in a valley surrounded by the Aravalli Hills. Everything worth seeing is within a 5km radius of the old city. Walking is the best way to experience the narrow lanes, but you will need an auto or scooter for Fateh Sagar Lake, Sajjangarh, and day trips.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Old City (Lake Side)", emoji: "\uD83C\uDFF0", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Best for","First-timers, couples, culture lovers"],["Key sights","City Palace, Jagdish Temple, Bagore ki Haveli"],["Budget","Hostels ₹500–₹1,200 / Hotels ₹2,000–₹8,000"],["Vibe","Heritage, rooftop cafes, lake views"]],
                  note: "Stay near Gangaur Ghat or Lal Ghat for the best views and walking access to everything." },
                { title: "Fateh Sagar Side", emoji: "\uD83C\uDF0A", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  rows: [["Best for","Families, longer stays, local experience"],["Key sights","Fateh Sagar Lake, Nehru Garden, Saheliyon ki Bari"],["Budget","Hotels ₹1,500–₹4,000"],["Vibe","Quiet, residential, parks and promenades"]],
                  note: "More spread out. You will need an auto for Lake Pichola sights. Great for evening walks along the lake." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/80 w-16 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">\u26A0\uFE0F {area.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Smart move:</strong> Stay in the old city near Lal Ghat. You can walk to City Palace, lake ghats, and a dozen rooftop restaurants. Take an auto to Fateh Sagar side for half a day.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="\uD83D\uDDD3" label="Duration" value="3 Days" />
            <StatCard icon="\uD83D\uDCB0" label="Budget From" value="₹8,000" />
            <StatCard icon="\uD83C\uDF21" label="Best Months" value="Oct – Mar" />
            <StatCard icon="\u2708\uFE0F" label="Nearest Airport" value="Maharana Pratap" />
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
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; Old City Base (Lal Ghat / Gangaur Ghat)</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Hostels or budget guesthouses &middot; ₹500–₹1,200/night &middot; Auto/walking</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Palaces, Temples & Sunset at the Ghat"
                  items={[
                    "9:00am: City Palace (₹300 entry) — arrive at opening. City Palace at 9am opening is a different world than City Palace at 2pm with tour groups. Budget 2 hours.",
                    "11:30am: Jagdish Temple (free) — 5 min walk from City Palace. Stunning carved exterior, active prayer.",
                    "12:30pm: Lunch at a rooftop near Lal Ghat — thali for ₹150–₹250. Jheel Guest House rooftop is honest food, honest prices.",
                    "2:00pm: Bagore ki Haveli (₹60) — beautiful 18th-century haveli with turban gallery and Mewar art. 1 hour.",
                    "4:30pm: Walk to Ambrai Ghat — best free sunset viewpoint in Udaipur. City Palace lit up across the water.",
                    "7:00pm: Dinner at Grasswood Cafe — ₹200–₹350/person. Skip the overpriced Amet Haveli restaurant — walk to Ambrai Ghat for the same view and better food at 40% less.",
                  ]}
                  cost="₹1,200–₹1,800 excluding accommodation" />
                <DayCard day="Day 2" title="Lakes, Gardens & Local Udaipur"
                  items={[
                    "8:30am: Auto to Saheliyon ki Bari (₹10 entry) — fountains and marble kiosks. Beautiful in morning light. 45 min.",
                    "10:00am: Fateh Sagar Lake — walk the promenade, take the ₹30 boat to Nehru Island Garden. Very local, no tourists.",
                    "12:00pm: Lunch at a local dhaba near Sukhadia Circle — dal baati churma for ₹120–₹180. This is the dish you came to Rajasthan for.",
                    "2:00pm: Vintage Car Museum (₹250) — royal family’s collection. Quick but fun — 45 min.",
                    "3:30pm: Lake Pichola boat ride (₹400/person government boat) — catch the 4pm slot for best afternoon light.",
                    "6:30pm: Wander the old city lanes. Street food at Hathi Pol — kachori, mirchi vada, kulfi. Budget ₹100–₹150.",
                  ]}
                  cost="₹1,500–₹2,200 excluding accommodation" />
                <DayCard day="Day 3" title="Haldighati Day Trip + Departure"
                  items={[
                    "7:00am: Auto/bus to Haldighati (40km, 1hr) — the battlefield of Maharana Pratap. Museum entry ₹50.",
                    "9:30am: Explore the museum, Chetak memorial, and maharana statue. 1.5 hours.",
                    "11:00am: Drive back via Eklingji Temple (free, stunning 8th-century Shiva temple — opens Mon–Sat 10:30–13:00).",
                    "1:00pm: Last lunch at Natraj Dining Hall — unlimited Rajasthani thali for ₹250. An Udaipur institution.",
                    "3:00pm: Quick shopping at Hathi Pol for miniature paintings (₹200–₹800) and block-print fabric.",
                    "4:30pm: Head to airport or train station.",
                  ]}
                  cost="₹1,000–₹1,600 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">₹6,000–₹8,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: COUPLE / ROMANTIC ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl mb-6">
                  <span className="text-2xl">\uD83D\uDC91</span>
                  <div>
                    <p className="text-sm font-medium text-rose-800">Couple / Romantic Plan &mdash; Old City Heritage Stay</p>
                    <p className="text-xs text-rose-600 font-light">Stay: Heritage hotel or boutique haveli &middot; ₹3,000–₹8,000/night &middot; Lake-view room essential</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="City Palace + Jag Mandir Sunset"
                  items={[
                    "9:00am: City Palace (₹300 per person) — arrive at opening. The morning light through the colored glass in Mor Chowk is worth the early start. 2.5 hours.",
                    "11:30am: Late breakfast at Savage Garden — rooftop with lake view. ₹400–₹600 for two.",
                    "1:00pm: Rest at hotel — Udaipur punishes couples who try to do too much on Day 1.",
                    "3:30pm: Jagdish Temple (free) — beautiful carved Indo-Aryan temple. 30 min.",
                    "4:30pm: Boat ride to Jag Mandir (₹800/person with island stop). The boat ride to Jag Mandir at sunset is ₹800 well spent — this is what they show in the movies. Walk the palace, drinks at the island restaurant.",
                    "7:30pm: Dinner at Upre by 1559 AD — fine dining on the lake. ₹2,500–₹4,000 for two. Book ahead.",
                  ]}
                  cost="₹4,500–₹7,000 for two (excl. accommodation)" />
                <DayCard day="Day 2" title="Gardens, Galleries & Rooftop Evening"
                  items={[
                    "8:30am: Saheliyon ki Bari (₹10) — the Garden of Maidens. Fountains and lotus pools. Romantic in morning light. 1 hour.",
                    "10:00am: Fateh Sagar Lake promenade — walk along the water, take the boat to Nehru Island (₹30).",
                    "12:00pm: Lunch at Ambrai Restaurant — lakeside terrace facing City Palace. ₹1,200–₹1,800 for two. Arrive early for the best table.",
                    "2:30pm: Bagore ki Haveli (₹60) — the world’s largest turban and beautiful Mewar paintings.",
                    "4:00pm: Explore old city lanes together — miniature painting shops on Gangaur Ghat Road, silver jewellery near Bada Bazaar.",
                    "5:30pm: Sunset from any rooftop along Lal Ghat. Order chai and watch the palace light up.",
                    "7:30pm: Bagore ki Haveli cultural show (₹150/person, 7pm) — Rajasthani folk dance. One of the best in the state.",
                    "9:00pm: Dinner at Raas Leela — rooftop, lake view, candlelit tables. ₹1,500–₹2,500 for two.",
                  ]}
                  cost="₹4,000–₹6,500 for two (excl. accommodation)" />
                <DayCard day="Day 3" title="Sajjangarh Sunrise + Departure Day"
                  items={[
                    "6:00am: Drive up to Sajjangarh Palace (Monsoon Palace) — ₹80 entry + ₹30 vehicle. Panoramic sunrise over the city. 45 min.",
                    "8:00am: Breakfast at Millets of Mewar — healthy, local, ₹400–₹600 for two.",
                    "10:00am: Vintage Car Museum (₹250) — royal Rolls-Royces and vintage beauties. Quick visit, 45 min.",
                    "11:30am: Last walk through the old city. Pick up miniature paintings or silver jewellery.",
                    "1:00pm: Final lunch at Natraj Dining Hall — unlimited thali for ₹250/person. Don’t leave Udaipur without eating here.",
                    "3:00pm: Head to airport or train station.",
                  ]}
                  cost="₹2,500–₹4,000 for two (excl. accommodation)" />
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-rose-700 uppercase tracking-wide">Total 3-Day Cost (for two) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">₹10,000–₹25,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: LUXURY ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">\uD83D\uDC51</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Luxury Plan &mdash; Heritage Palace Hotel</p>
                    <p className="text-xs text-purple-600 font-light">Stay: Taj Lake Palace / Oberoi Udaivilas / Leela Palace &middot; ₹15,000–₹40,000/night</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Private Palace + Island Dinner"
                  items={[
                    "9:00am: Private guided City Palace tour (₹2,000–₹3,000 for private guide). Crystal Gallery extra ₹500. The guide makes all the difference — history comes alive.",
                    "12:00pm: Lunch at Sheesh Mahal at Leela Palace — lakefront fine dining, ₹4,000–₹6,000 for two.",
                    "2:00pm: Spa at your hotel — Oberoi Udaivilas spa is world-class. From ₹5,000/person.",
                    "4:30pm: Private boat to Jag Mandir (₹3,000–₹5,000). Sunset cocktails on the island. This is peak Udaipur.",
                    "8:00pm: Dinner at Ambrai — even luxury travellers eat here for the view. ₹3,000–₹4,500 for two with drinks.",
                  ]}
                  cost="₹18,000–₹28,000 for two (excl. accommodation)" />
                <DayCard day="Day 2" title="Kumbhalgarh Day Trip + Royal Evening"
                  items={[
                    "7:00am: Private car to Kumbhalgarh Fort (85km, 2hrs) — the Great Wall of India. Second longest wall in the world after China. Entry ₹300.",
                    "10:00am: Explore Kumbhalgarh — 36km of walls, 360 temples, panoramic Aravalli views. Budget 2.5 hours.",
                    "12:30pm: Lunch at a heritage hotel in Kumbhalgarh. Raas Devigarh if budget allows (₹3,000–₹5,000 for two).",
                    "2:00pm: Drive back via Ranakpur Jain Temple (free, one of the most ornate temples in India — 1,444 uniquely carved marble pillars).",
                    "5:00pm: Return to Udaipur.",
                    "7:30pm: Rooftop dinner at your palace hotel with private table arrangement.",
                  ]}
                  cost="₹12,000–₹18,000 for two (excl. accommodation)" />
                <DayCard day="Day 3" title="Helicopter View + Heritage Shopping + Departure"
                  items={[
                    "7:00am: Sajjangarh Palace sunrise (₹80 entry) — panoramic city views. Even luxury travellers should do this.",
                    "9:00am: Breakfast at hotel.",
                    "10:30am: Heritage walk with an art historian — miniature painting studios, silver artisans, textile workshops. Book through hotel concierge (₹3,000–₹5,000).",
                    "1:00pm: Farewell lunch at Udaimahal rooftop or Jaiwana Haveli.",
                    "3:00pm: Vintage Car Museum (₹250) — quick but delightful.",
                    "4:00pm: Airport transfer. Private car ₹800–₹1,200.",
                  ]}
                  cost="₹8,000–₹14,000 for two (excl. accommodation)" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 3-Day Cost (for two) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">₹25,000–₹60,000 including accommodation</span>
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
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">\uD83D\uDC91 Couple</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">\uD83D\uDC51 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "₹1,500–₹3,600", "₹9,000–₹24,000", "₹45,000–₹1,20,000"],
                    ["\uD83C\uDF7D Food & Drinks", "₹1,200–₹2,000", "₹4,000–₹8,000", "₹12,000–₹20,000"],
                    ["\uD83D\uDE95 Transport", "₹800–₹1,200", "₹1,500–₹3,000", "₹4,000–₹8,000"],
                    ["\uD83C\uDFAF Activities & Entry", "₹1,200–₹1,800", "₹2,500–₹4,500", "₹8,000–₹15,000"],
                    ["\uD83D\uDECD Shopping", "₹500–₹1,500", "₹1,500–₹3,000", "₹5,000–₹15,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["₹5,200–₹10,100","₹9,250–₹21,250","₹37,000–₹89,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Udaipur is significantly cheaper than Jaipur or Jodhpur for the same quality of heritage experience.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Udaipur"
            hotels={[
              { name: "Zostel Udaipur", type: "Budget Hostel · Lal Ghat", price: "From ₹600/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/zostel-udaipur.html?aid=2820480" },
              { name: "Jagat Niwas Palace", type: "Heritage Haveli · Lake View", price: "From ₹4,500/night", rating: "5", badge: "Couple pick", url: "https://www.booking.com/hotel/in/jagat-niwas-palace.html?aid=2820480" },
              { name: "Oberoi Udaivilas", type: "Luxury Palace · Lakefront", price: "From ₹35,000/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/in/the-oberoi-udaivilas.html?aid=2820480" },
            ]}
            activities={[
              { name: "Lake Pichola Sunset Boat Ride", duration: "1.5 hours", price: "From ₹400/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=udaipur&partner_id=PSZA5UI" },
              { name: "City Palace Guided Tour", duration: "2.5 hours", price: "From ₹1,500/person", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=udaipur&partner_id=PSZA5UI" },
              { name: "Kumbhalgarh Fort Day Trip", duration: "Full day", price: "From ₹2,500/person", url: "https://www.getyourguide.com/s/?q=udaipur&partner_id=PSZA5UI" },
              { name: "Rajasthani Cooking Class", duration: "3 hours", price: "From ₹1,200/person", url: "https://www.getyourguide.com/s/?q=udaipur&partner_id=PSZA5UI" },
            ]}
            pdfProductId="udaipur-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Udaipur — Must-See Places"
            subtitle="Click each thumbnail to explore Udaipur’s most iconic palaces, lakes and heritage sites."
            spots={[
              { name: "City Palace",           query: "udaipur city palace courtyard architecture ornate rajasthan",            desc: "The largest palace complex in Rajasthan — arrive at 9am opening for golden light and no crowds. The colored glass in Mor Chowk is extraordinary." },
              { name: "Lake Pichola",          query: "lake pichola udaipur boat ride sunset palace rajasthan",                desc: "The heart of Udaipur. Take the 4:30pm boat for the best light. City Palace and Jag Mandir from the water is unforgettable." },
              { name: "Jag Mandir",            query: "jag mandir island palace udaipur lake architecture",                    desc: "The island palace that inspired the Taj Mahal. Accessible only by boat — the sunset drinks here are peak Udaipur." },
              { name: "Saheliyon ki Bari",     query: "saheliyon ki bari udaipur fountain garden marble pavilion",             desc: "Garden of the Maidens — fountains, lotus pools, marble kiosks. Best visited in morning light. Entry just ₹10." },
              { name: "Ambrai Ghat",           query: "ambrai ghat udaipur sunset city palace view lake evening",              desc: "The best free viewpoint in Udaipur. City Palace glowing across the water at sunset — bring a camera and patience." },
              { name: "Fateh Sagar Lake",      query: "fateh sagar lake udaipur hills promenade evening rajasthan",            desc: "Udaipur’s second great lake. Walk the promenade, take the ₹30 boat to Nehru Island. Local Udaipur at its finest." },
            ]}
          />

          {/* ── LAKE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="lake pichola udaipur evening palace reflection water rajasthan"
              fallback="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&q=80"
              alt="Lake Pichola at evening with palace reflections"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Lake Pichola at sunset &mdash; every rooftop cafe along Lal Ghat has this view. The ₹150 chai beats the ₹800 cocktail.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting City Palace after 11am", desc: "Tour groups descend by 11am. At 9am opening you get the same palace in golden light with 20% of the people. Non-negotiable.", icon: "\uD83C\uDFF0" },
                { title: "Eating only at lake-view restaurants", desc: "Lake view = 40–60% markup. Natraj Dining Hall serves the best thali in the city for ₹250. Walk 200m from the lake — it matters.", icon: "\uD83C\uDF7D" },
                { title: "Skipping Ambrai Ghat", desc: "Free, best view of City Palace at sunset. Most tourists pay ₹1,500 at a rooftop restaurant for an inferior view. Walk to the ghat.", icon: "\uD83C\uDF05" },
                { title: "Taking the noon boat ride", desc: "Harsh light, no atmosphere. The 4:30–5pm boat is a completely different experience. Same price, ten times the beauty.", icon: "\u26F5" },
                { title: "Booking a hotel far from the lake", desc: "Udaipur’s magic is the old city lanes at night. Stay near Lal Ghat or Gangaur Ghat. A ₹500 savings on a distant hotel costs you ₹300/day in autos.", icon: "\uD83C\uDFE8" },
                { title: "Visiting April to June", desc: "Temperatures cross 42°C. Palaces become ovens. October–March is genuinely pleasant at 18–30°C.", icon: "\uD83C\uDF21" },
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
                { icon: "\uD83C\uDF05", title: "Sajjangarh at Sunrise", desc: "Most people go at sunset (crowded). Sunrise is empty, cooler, and the view of Udaipur waking up below you is extraordinary. Auto ₹250 return.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF75", title: "Chai, Not Cocktails", desc: "The ₹15 chai at a rooftop guesthouse has the exact same Lake Pichola view as the ₹800 cocktail at a luxury restaurant. Do both, but do the chai first.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDFA8", title: "Miniature Paintings", desc: "Buy from studios near Gangaur Ghat Road, not tourist shops. Ask to see the artist work. A genuine miniature starts at ₹1,500 — anything under ₹500 is a print.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDFB6", title: "Bagore ki Haveli Show", desc: "The 7pm Dharohar folk dance show (₹150) is the best cultural performance in Rajasthan after Jaisalmer. Go early for front seats.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDE95", title: "Fix Auto Fares First", desc: "Always negotiate before sitting in. Airport to old city: ₹250–₹350, not ₹600. Old city to Fateh Sagar: ₹80–₹120. Uber works but drops off after 9pm.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83D\uDCC6", title: "Best Month by Month", desc: "Oct–Nov \u2705 best value | Dec–Jan \u26A0\uFE0F best weather, peak prices | Feb–Mar \u2705 warm + uncrowded | Apr–Jun \u2615 too hot | Jul–Sep \uD83C\uDF27\uFE0F monsoon, lakes full", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Udaipur itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Udaipur Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Udaipur?", a: "3 days is perfect for all major palaces, lakes and temples. 2 days works if you skip day trips. 4–5 days lets you add Kumbhalgarh, Chittorgarh and Ranakpur at a relaxed pace." },
                { q: "What is the best time to visit Udaipur?", a: "October–March. October–November has pleasant weather with fewer crowds. December–January is peak season — best weather but highest prices. February–March is the sweet spot. Avoid April–June when temperatures cross 42°C." },
                { q: "How much does a 3-day Udaipur trip cost?", a: "Budget solo: ₹6,000–₹8,000 including accommodation. Couple romantic: ₹10,000–₹25,000 for two. Luxury: ₹25,000–₹60,000 for two. All include accommodation, food, transport and activities." },
                { q: "Is the Lake Pichola boat ride worth it?", a: "Absolutely. The sunset boat ride (₹400–₹800/person) gives you views of City Palace and Jag Mandir you cannot get from shore. Book the 4:30–5pm slot. The Jag Mandir island stop includes palace exploration and a restaurant." },
                { q: "What should I not miss in Udaipur?", a: "City Palace at 9am, Lake Pichola sunset boat ride, Ambrai Ghat sunset view, Saheliyon ki Bari in morning light, one rooftop dinner overlooking the lake, and Bagore ki Haveli cultural show at 7pm." },
                { q: "How do I get around Udaipur?", a: "Old city is walkable. For distances use auto-rickshaws — fix fare before getting in. Full-day auto: ₹800–₹1,200. Uber and Ola work but drop off after 9pm. Scooter rental: ₹300–₹400/day for Fateh Sagar and outskirts." },
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
                { label: "Goa — 3 Day Beach Guide", href: "/blog/goa-3-days", soon: false },
                { label: "Rajasthan — 7 Day Royal Circuit", href: "/blog/rajasthan-7-days", soon: true },
                { label: "Golden Triangle — Delhi, Agra, Jaipur", href: "/blog/golden-triangle-7-days", soon: true },
                { label: "Browse All India Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="udaipur-3-days" />
          <RelatedGuides currentSlug="udaipur-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
