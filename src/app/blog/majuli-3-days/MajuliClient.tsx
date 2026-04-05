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


const MAJULI_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "getting-there", emoji: "⛴", label: "Getting There" },
  { id: "itineraries", emoji: "📅", label: "The Itineraries" },
  { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
  { id: "satras",      emoji: "🛕", label: "The Satras" },
  { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "💡", label: "Pro Tips" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Majuli Island 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Majuli Island in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
          <span className="font-serif text-xl text-gold-dark font-light">{day}</span>
          <span className="text-sm text-ink font-medium">{title}</span>
        </div>
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-gold mt-1 flex-shrink-0 text-xs">●</span>
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
export default function MajuliClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹5k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🎭", label: "Cultural Immersion", sub: "₹6k–15k", color: "border-violet-300 bg-violet-50 text-violet-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MAJULI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Majuli Island" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="majuli island assam brahmaputra river boat india"
            fallback="https://images.unsplash.com/photo-1615466459632-4e14e0e2a1f0?w=1600&q=85"
            alt="Majuli island on the Brahmaputra river in Assam"
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
              <span className="text-white/70">Majuli Island 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Culture & Heritage
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Majuli Island in 3 Days
                <em className="italic text-gold-light"> — Before It Disappears</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The world&apos;s largest river island is shrinking every monsoon. 2 complete plans with ferry timings, Satra visits, tribal villages and real costs.
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
              <span>🇮🇳 Assam, India</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹4,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Majuli is shrinking — literally. The Brahmaputra erodes more of the island every monsoon. Visit now because in 20 years this place may not exist in its current form.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your situation — jump straight to your itinerary.</p>
            <div className="grid grid-cols-2 gap-3">
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

          {/* ── GETTING THERE ── */}
          <section id="getting-there" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⛴ Getting There — The Ferry</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              There are no bridges to Majuli. The ferry is the only way in — and that&apos;s part of the magic.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div className="rounded-xl border p-5 bg-teal-50 border-teal-200">
                <h3 className="font-serif text-lg font-normal mb-4 flex items-center gap-2 text-teal-800">
                  <span>✈️</span>Getting to Jorhat
                </h3>
                <div className="space-y-2 mb-4">
                  {[
                    ["By Air", "Fly to Jorhat Airport (JRH). Direct flights from Kolkata & Guwahati."],
                    ["By Rail", "Jorhat Town station. Trains from Guwahati (6-7hrs), Delhi (30hrs)."],
                    ["By Road", "Guwahati → Jorhat: 310km, ~6hrs by bus or cab."],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-2 text-xs">
                      <span className="font-medium text-ink/60 w-16 flex-shrink-0">{k}</span>
                      <span className="text-muted font-light">{v}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">⚠️ Book Jorhat flights early — limited frequency, prices spike in peak season.</p>
              </div>
              <div className="rounded-xl border p-5 bg-amber-50 border-amber-200">
                <h3 className="font-serif text-lg font-normal mb-4 flex items-center gap-2 text-amber-800">
                  <span>⛴</span>The Brahmaputra Ferry
                </h3>
                <div className="space-y-2 mb-4">
                  {[
                    ["From", "Nimati Ghat, Jorhat (14km from town)"],
                    ["To", "Kamalabari Ghat, Majuli"],
                    ["Duration", "~1 hour on a flat-bottomed boat"],
                    ["Cost", "₹15-20 per person, ₹150-200 for bikes/scooters"],
                    ["Schedule", "First ferry ~10am, last return ~3pm"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-2 text-xs">
                      <span className="font-medium text-ink/60 w-16 flex-shrink-0">{k}</span>
                      <span className="text-muted font-light">{v}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">⚠️ Ferries don&apos;t run in heavy rain or floods. Jun-Sep is unreliable. Always confirm timings at Nimati Ghat.</p>
              </div>
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">The ferry from Jorhat is the only way in</strong> — 1 hour across the Brahmaputra on a flat-bottomed boat with your vehicle. There are no bridges and that&apos;s part of the magic.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Duration" value="3 Days" />
            <StatCard icon="💰" label="Budget From" value="₹4,500" />
            <StatCard icon="🌡" label="Best Months" value="Oct – Mar" />
            <StatCard icon="⛴" label="Access" value="Ferry Only" />
          </div>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 The Itineraries</h2>
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

            {/* ── PLAN A — Budget ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">💰</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Cycle the Island</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Basic guesthouse · ₹400–₹800/night · Bicycle: ₹150/day</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Ferry In, Kamalabari Satra, Sunset"
                  items={[
                    "Reach Nimati Ghat by 9:30am — first ferry leaves around 10am. Buy ticket at the counter, no advance booking needed.",
                    "1-hour crossing. Arrive Kamalabari Ghat around 11am. Rent bicycle from any guesthouse (₹150/day).",
                    "Check into guesthouse near Kamalabari — ₹400–₹800/night for a clean room with fan.",
                    "12:30pm: Kamalabari Satra — the most accessible Satra, active monks, prayer halls with 500-year-old manuscripts. Free entry, ₹50 donation appreciated.",
                    "3pm: Auniati Satra (4km cycle) — oldest Satra on the island, museum with ancient artifacts and royal Ahom relics.",
                    "5:30pm: Cycle to the southern bank for sunset over the Brahmaputra. Bring chai from a roadside stall (₹10).",
                    "Dinner at a local dhaba — fish curry with rice ₹80–₹120."
                  ]}
                  cost="₹800–₹1,200 excluding accommodation" />
                <DayCard day="Day 2" title="Mask-Making, Pottery, Mishing Village"
                  items={[
                    "8am: Cycle to Samaguri Satra (8km from Kamalabari) — this is where the famous mask-makers work.",
                    "The mask-making artisans at Samaguri Satra spend months creating a single mask for the Raas Leela dance-drama. Watching them work is watching a 500-year-old art form survive.",
                    "Small masks start at ₹200–₹500. Large ceremonial masks ₹2,000+. Buy directly from the artisans.",
                    "11am: Salmora pottery village (6km further). Potters here use no wheel — everything is hand-shaped and pit-fired. Watch the process, buy pieces from ₹50.",
                    "1pm: Lunch at a Mishing tribal village — ask your guesthouse to arrange. Rice beer (apong), smoked fish, bamboo-shoot curry. ₹100–₹200 per meal.",
                    "3pm: Explore the Mishing stilt houses. The architecture is built for annual floods — bamboo on stilts, detachable walls.",
                    "5pm: Cycle back via the paddy fields. The flat terrain and empty roads make this effortless."
                  ]}
                  cost="₹600–₹1,000 excluding accommodation" />
                <DayCard day="Day 3" title="Morning Satra, Island Cycling, Ferry Out"
                  items={[
                    "7am: Dakhinpat Satra (6km) — quieter, more spiritual. Morning prayers if you arrive by 7:30am.",
                    "9am: Cycle the island perimeter — flat terrain, no traffic, and every village has a different craft. This is the best way to see Majuli.",
                    "11am: Bengenaati Satra — known for its Bhaona (traditional theatre) performances. Check if any rehearsals are happening.",
                    "12:30pm: Lunch at guesthouse. Pack up and cycle to Kamalabari Ghat.",
                    "Catch the 2–3pm ferry back to Nimati Ghat. Don't miss the last boat.",
                    "Optional: Stay a night in Jorhat if your onward flight is next morning."
                  ]}
                  cost="₹500–₹800 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) · </span>
                  <span className="font-serif text-base text-ink font-light">₹3,500–₹5,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B — Cultural Immersion ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-violet-50 border border-violet-200 rounded-xl mb-6">
                  <span className="text-2xl">🎭</span>
                  <div>
                    <p className="text-sm font-medium text-violet-800">Cultural Immersion — Guided Satra Circuit + Homestay</p>
                    <p className="text-xs text-violet-600 font-light">Stay: Homestay or eco-lodge · ₹1,200–₹3,000/night · Guide: ₹800–₹1,500/day</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Ferry, Private Satra Tour, Evening Prayer Ceremony"
                  items={[
                    "Hire a local guide from Jorhat or arrange through your homestay (₹800–₹1,500/day). They know which monks speak English and which Satras allow photography.",
                    "10am ferry from Nimati Ghat. Your guide meets you at Kamalabari Ghat.",
                    "12pm: Kamalabari Satra — guided walkthrough of the prayer hall, manuscript room, and living quarters. Your guide explains the neo-Vaishnavite tradition and its 500-year lineage.",
                    "2pm: Lunch at homestay — traditional Assamese thali with local river fish, khar (alkaline curry), and pitika. ₹200–₹350.",
                    "4pm: Auniati Satra — the museum here has royal Ahom-era artifacts. Your guide provides context that you'd completely miss alone.",
                    "6pm: Evening prayer ceremony (naam prasanga) at Kamalabari — rhythmic chanting, cymbals, devotional dance. One of the most moving experiences on the island.",
                    "Dinner at homestay — home-cooked Assamese meal. ₹250–₹400."
                  ]}
                  cost="₹2,500–₹4,500 excluding accommodation" />
                <DayCard day="Day 2" title="Mask Workshop, Pottery Masterclass, Mishing Feast"
                  items={[
                    "8am: Drive to Samaguri Satra for a hands-on mask-making workshop (₹500–₹1,000). Artisans teach you the bamboo-frame technique and natural pigments.",
                    "The masks take months to complete. But in 2–3 hours you'll shape a small one and understand why UNESCO is watching this tradition.",
                    "11am: Salmora pottery village — arrange a pottery session with a local family. They teach the coil-and-pat method unique to Majuli. ₹200–₹400 including your pot.",
                    "1:30pm: Lunch hosted by a Mishing family. This isn't a restaurant — it's a home. Apong (rice beer), smoked pork, bamboo shoot curry, served on banana leaves.",
                    "3pm: Walk through the Mishing settlement. Stilt houses, weaving looms, children playing. Your guide translates conversations with village elders.",
                    "5:30pm: Sunset from the eroding southern bank. You can see where the Brahmaputra has eaten into farmland. The scale of erosion is staggering.",
                    "Evening: Storytelling session at homestay — some hosts share oral histories of the island's shrinking geography."
                  ]}
                  cost="₹3,000–₹5,000 excluding accommodation" />
                <DayCard day="Day 3" title="Dawn Prayer, Weaving Village, Departure"
                  items={[
                    "5:30am: Optional dawn prayer at Dakhinpat Satra — monks begin before sunrise. The silence and mist off the Brahmaputra make this unforgettable.",
                    "8am: Breakfast at homestay. Visit a Mishing weaving village — women weave mekhela chadors (traditional Assamese sarees) on backstrap looms. ₹800–₹3,000 to buy directly.",
                    "10am: Bengenaati Satra — if Bhaona rehearsals are happening, your guide will know. Traditional theatre combining dance, music and mythology.",
                    "12pm: Final lunch on the island. Exchange contacts with your homestay host — many travellers return.",
                    "1:30pm: Head to Kamalabari Ghat. 2pm ferry to Nimati Ghat.",
                    "Optional: Visit Gibbon Wildlife Sanctuary near Jorhat (30km, 45min) — hoolock gibbons, the only ape species in India."
                  ]}
                  cost="₹2,000–₹3,500 excluding accommodation" />
                <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-violet-700 uppercase tracking-wide">Total 3-Day Cost (per person) · </span>
                  <span className="font-serif text-base text-ink font-light">₹6,000–₹15,000 including accommodation</span>
                </div>
              </div>
            )}
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment">
                    <th className="text-left p-3.5 text-xs font-medium text-muted">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-700 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-violet-700 text-center">🎭 Cultural</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (3N)", "₹1,200–₹2,400", "₹3,600–₹9,000"],
                    ["🍽 Food & Drinks", "₹600–₹1,000", "₹1,500–₹3,000"],
                    ["⛴ Ferry (return)", "₹40–₹50", "₹40–₹50"],
                    ["🚲 Transport on Island", "₹450 (bicycle)", "₹2,400–₹4,500 (guide + auto)"],
                    ["🎯 Activities & Crafts", "₹200–₹500", "₹1,500–₹3,500"],
                    ["✈️ Flights (Kolkata–Jorhat)", "₹4,000–₹7,000", "₹4,000–₹7,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (excl. flights)</td>
                    {["₹3,500–₹5,000", "₹6,000–₹15,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Majuli is one of the cheapest destinations in India — even the &quot;cultural immersion&quot; plan costs less than a budget day in Goa.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Majuli Island"
            hotels={[
              { name: "La Maison de Ananda", type: "Eco Lodge · Kamalabari", price: "From ₹1,800/night", rating: "4", badge: "Top pick", url: "https://www.booking.com/hotel/in/la-maison-de-ananda-majuli.html?aid=2820480" },
              { name: "Majuli Island Homestay", type: "Homestay · Near Kamalabari", price: "From ₹800/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/majuli-homestay.html?aid=2820480" },
              { name: "Ygdrasill Bamboo Cottage", type: "Eco Cottage · Majuli", price: "From ₹2,500/night", rating: "5", badge: "Cultural", url: "https://www.booking.com/hotel/in/ygdrasill-bamboo-cottage-majuli.html?aid=2820480" },
            ]}
            activities={[
              { name: "Guided Satra Heritage Walk", duration: "Full day", price: "From ₹1,200/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=assam&partner_id=PSZA5UI" },
              { name: "Mask-Making Workshop", duration: "3 hours", price: "From ₹500/person", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=assam&partner_id=PSZA5UI" },
              { name: "Mishing Village & Pottery Tour", duration: "Half day", price: "From ₹400/person", url: "https://www.getyourguide.com/s/?q=assam&partner_id=PSZA5UI" },
              { name: "Brahmaputra Sunset Boat Ride", duration: "2 hours", price: "From ₹300/person", url: "https://www.getyourguide.com/s/?q=assam&partner_id=PSZA5UI" },
            ]}
            pdfProductId="majuli-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Majuli — Must-See Places"
            subtitle="Click each thumbnail to explore Majuli's monasteries, villages and river landscapes."
            spots={[
              { name: "Kamalabari Satra",     query: "vaishnavite monastery assam traditional architecture prayer hall",    desc: "The most visited Satra on the island. Active monastery with morning and evening prayer ceremonies, 500-year-old manuscripts, and welcoming monks." },
              { name: "Samaguri Satra Masks",  query: "traditional handmade colorful craft mask workshop artisan india",     desc: "Where Majuli's legendary mask-makers create faces for the Raas Leela dance-drama. Each mask takes months of work with bamboo, clay, and natural pigments." },
              { name: "Salmora Pottery",       query: "traditional handmade pottery clay village rural india craft",          desc: "A pottery village where artisans use no wheel. Everything is hand-shaped using coil-and-pat technique and pit-fired — unchanged for centuries." },
              { name: "Mishing Stilt Village",  query: "bamboo stilt houses rural village green paddy field northeast india", desc: "Mishing tribal settlements built on bamboo stilts to survive the annual Brahmaputra floods. Weaving, rice beer, and warm hospitality." },
              { name: "Brahmaputra Sunset",    query: "sunset over wide river golden sky boat silhouette india landscape",   desc: "The Brahmaputra is 10km wide near Majuli. Sunset from the southern bank — watching the river that is slowly consuming the island — is unforgettable." },
            ]}
          />

          {/* ── SATRA IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="traditional monastery prayer hall incense candles india heritage architecture"
              fallback="https://images.unsplash.com/photo-1590766940554-634858e5c1ab?w=900&q=80"
              alt="Interior of a Vaishnavite Satra monastery in Majuli"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Majuli&apos;s 22 Satras are not museums — they are living monasteries where monks still chant, dance, and create art exactly as they did five centuries ago.
              </p>
            </div>
          </div>

          {/* ── THE SATRAS ── */}
          <section id="satras" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🛕 The Satras — Living Monasteries</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Majuli has 22 active Satras, each preserving a different aspect of neo-Vaishnavite culture. Here are the four you should not miss.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Kamalabari Satra", emoji: "🙏", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  what: "Most accessible, active monks, prayer ceremonies", visit: "1–2 hours", tip: "Arrive for evening prayers at 6pm — the cymbal-and-chanting ceremony is extraordinary." },
                { name: "Auniati Satra", emoji: "📜", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  what: "Oldest Satra, museum with Ahom-era royal artifacts", visit: "1–1.5 hours", tip: "The manuscript room has texts in Assamese, Sanskrit and palm-leaf scripts. Ask the monk to show you." },
                { name: "Samaguri Satra", emoji: "🎭", bg: "bg-violet-50 border-violet-200", th: "text-violet-800",
                  what: "Famous mask-making centre, workshops available", visit: "2–3 hours", tip: "Come in the morning — artisans work by natural light. Afternoon visits mean finished products, not the process." },
                { name: "Dakhinpat Satra", emoji: "🌅", bg: "bg-rose-50 border-rose-200", th: "text-rose-800",
                  what: "Quietest, most spiritual, pre-dawn prayers", visit: "1 hour", tip: "Visit at 5:30am for dawn prayers. The mist off the Brahmaputra and monk chants in the silence — transformative." },
              ].map((satra) => (
                <div key={satra.name} className={`rounded-xl border p-5 ${satra.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${satra.th}`}>
                    <span>{satra.emoji}</span>{satra.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {[
                      ["Known for", satra.what],
                      ["Time needed", satra.visit],
                    ].map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/60 w-20 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">💡 {satra.tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── MASK-MAKING IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="traditional handmade colorful craft mask workshop artisan tools india"
              fallback="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=900&q=80"
              alt="Traditional mask-making craft at Samaguri Satra Majuli"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The mask-making artisans at Samaguri Satra spend months creating a single mask for the Raas Leela dance-drama. Watching them work is watching a 500-year-old art form survive.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Coming in monsoon season (Jun-Sep)", desc: "Ferries become unreliable or stop entirely. Large parts of the island flood. Roads turn to mud. October is the earliest safe window.", icon: "🌧" },
                { title: "Only 1 day on the island", desc: "You can't see the Satras, mask-makers, pottery village AND Mishing settlements in one day. 2 nights minimum or you leave frustrated.", icon: "⏰" },
                { title: "Skipping the guide (Cultural Plan)", desc: "Monks and artisans open up differently with a local guide who speaks Assamese. The cultural context you miss alone is the entire point of Majuli.", icon: "🗣" },
                { title: "Expecting hotel-level accommodation", desc: "Majuli has guesthouses and homestays, not hotels. Embrace it — the simplicity is part of the island's character. Carry a power bank.", icon: "🏨" },
                { title: "Missing the last ferry", desc: "Last ferry back to Jorhat leaves around 3pm. Miss it and you're spending another night. Plan accordingly or enjoy the surprise.", icon: "⛴" },
                { title: "Not carrying cash", desc: "There are 1-2 ATMs on the island and they frequently run out. Carry enough cash from Jorhat for your entire stay. Cards won't work anywhere.", icon: "💳" },
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
                { icon: "🚲", title: "Cycle Everything", desc: "Cycling the island is the best way to see it — flat terrain, no traffic, and every village has a different craft. Rent from any guesthouse for ₹150/day.", color: "bg-amber-50 border-amber-200" },
                { icon: "🎭", title: "Time Your Visit for Raas Leela", desc: "The Raas Leela festival in November is Majuli's biggest cultural event — dance-drama performances across multiple Satras using those famous masks. Book accommodation a month ahead.", color: "bg-violet-50 border-violet-200" },
                { icon: "🍺", title: "Try Apong (Rice Beer)", desc: "Mishing families brew apong at home. It's mild, slightly sweet, and offered to guests as a welcome drink. Saying yes is the right answer.", color: "bg-amber-50 border-amber-200" },
                { icon: "📷", title: "Photography Etiquette", desc: "Always ask before photographing monks, artisans or tribal families. Most will say yes, but asking first changes the entire interaction. Never photograph prayer ceremonies without permission.", color: "bg-teal-50 border-teal-200" },
                { icon: "🔋", title: "Carry Power Banks", desc: "Electricity on Majuli is inconsistent. Power cuts are common, especially in the evening. Carry at least one fully charged power bank. Solar-charged options available at some eco-lodges.", color: "bg-teal-50 border-teal-200" },
                { icon: "📆", title: "Best Month by Month", desc: "Oct ✅ post-monsoon green | Nov ✅ Raas Leela festival | Dec–Feb ✅ clear, cool | Mar ☀️ warm but fine | Apr–May ☀️ hot | Jun–Sep 🌧 avoid — floods", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Majuli itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Majuli Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How do I reach Majuli Island?", a: "Fly to Jorhat Airport (JRH), drive 14km to Nimati Ghat, then take the government ferry (1 hour, ₹15-20 per person) to Kamalabari Ghat on Majuli. Ferries run from about 10am to 3pm. There are no bridges to the island." },
                { q: "What is the best time to visit Majuli?", a: "October to March is best. November is ideal if you want to see the Raas Leela festival. June to September is monsoon season — ferries become unreliable and large parts of the island flood. April-May is hot but still accessible." },
                { q: "How much does a 3-day Majuli trip cost?", a: "Budget travellers can do 3 days for ₹3,500-₹5,000 including basic accommodation, food, ferry and bicycle rental. Cultural immersion with guided Satra visits, homestays and craft workshops costs ₹6,000-₹15,000 per person. Both exclude flights to Jorhat." },
                { q: "Is Majuli Island really disappearing?", a: "Yes. Majuli has shrunk from roughly 1,255 sq km in the 1950s to about 352 sq km today due to Brahmaputra erosion. The island loses land every monsoon season, making it one of India's most time-sensitive travel destinations." },
                { q: "How many days are enough for Majuli?", a: "2-3 days is ideal. Day 1 for the major Satras and mask-making, Day 2 for tribal villages and pottery, Day 3 for cycling and the Brahmaputra sunset. One day is too rushed — you'll miss the cultural depth that makes Majuli special." },
                { q: "What are Satras and why are they important?", a: "Satras are Vaishnavite monasteries founded in the 15th-16th century by the saint Srimanta Sankardeva. They preserve neo-Vaishnavite dance, music, mask-making and theatre. Majuli has 22 active Satras — living centres of a 500-year-old cultural tradition, not just tourist sites." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Exploring Northeast India?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kaziranga — 3 Day Safari Guide", href: "/blog/kaziranga-3-days", soon: false },
                { label: "Meghalaya — 5 Day Guide", href: "/blog/meghalaya-5-days", soon: false },
                { label: "Tawang — 4 Day Guide", href: "/blog/tawang-4-days", soon: false },
                { label: "Browse All India Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="majuli-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
