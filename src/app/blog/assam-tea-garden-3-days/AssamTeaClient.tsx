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

const ASSAM_TEA_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "tea",       emoji: "🍵", label: "Tea Estate Guide" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Assam Tea Garden Circuit Guide&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Assam Tea Garden Circuit in 3 Days guide&url=${pageUrl}` },
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
export default function AssamTeaClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹8k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏡", label: "Comfortable", sub: "₹8k–20k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={ASSAM_TEA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Assam Tea Circuit" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="Assam tea garden estate green rows workers plucking"
            fallback="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1600&q=85"
            alt="Assam tea garden estate green rows with workers plucking leaves"
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
              <span className="text-white/70">Assam Tea Garden Circuit</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Tea & Heritage
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Assam Tea Garden Circuit in 3 Days:
                <em className="italic text-gold-light"> Colonial Bungalows &amp; the World&apos;s Strongest Brew</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                800 tea estates in the Brahmaputra Valley. Colonial bungalows with teak floors. A cupping session where the estate manager explains why your morning chai tastes like it does. And Kaziranga — 2,600 rhinos — two hours away.
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
              <span>🇮🇳 Assam</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹5,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              I sat on the verandah of Mancotta Bungalow at 6 AM, watching the mist lift off the tea rows, holding a cup of second flush Orthodox that the estate manager had cupped 20 minutes earlier. I understood, finally, why people talk about tea the way wine people talk about wine.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            India produces 1.3 billion kilograms of tea per year. Over half comes from Assam — from the Brahmaputra Valley, where 800 estates spread across the lowlands between the river and the hills. This is where chai was born in its commercial form: the British set up the first estates here in the 1840s after discovering wild tea plants in the jungle. The colonial bungalows are still there, with teak floors and four-poster beds and wide verandahs facing the garden. You can stay in them.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌤️" label="Best Season" value="Mar–Nov (First Flush: Mar–Apr)" />
            <StatCard icon="🌿" label="No. of Tea Gardens" value="800+ in Assam" />
            <StatCard icon="🗺️" label="Distance from Dibrugarh" value="30 km to nearest estate" />
            <StatCard icon="⭐" label="Rating" value="4.7★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Assam tea has four flushes. When you visit determines what you see — and what you taste.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Mar–Jun", emoji: "✅", title: "First & Second Flush", desc: "March–April (First Flush): the most delicate tea, light and floral — the garden is at its most active. May–June (Second Flush): the strongest, maltiest Assam tea. Active plucking teams, factory running full capacity.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Oct–Nov", emoji: "🟡", title: "Autumn Flush", desc: "October–November: cooler, lighter autumn flush tea. The estates are active but less intensely so than First or Second Flush. Excellent time for the Brahmaputra river activities and combining with Kaziranga (open post-monsoon).", color: "bg-amber-50 border-amber-200" },
                { season: "Dec–Feb", emoji: "❄️", title: "Winter Dormancy", desc: "December–February: no plucking — the tea bushes are dormant. The bungalows are still available and the weather is cool and clear (ideal for Kaziranga). You can visit estates but there is no plucking or active factory to see.", color: "bg-blue-50 border-blue-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 3-day circuit, two comfort levels. The main difference is whether you stay in a colonial bungalow or a town guesthouse.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Dibrugarh town guesthouse (₹700–1200)</td><td className="py-2.5 px-4">Mancotta Bungalow or Thengal Manor (₹5000–8000 full board)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Estate access</td><td className="py-2.5 px-4">Free visit during working hours</td><td className="py-2.5 px-4">Private estate tour + cupping session</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Kaziranga</td><td className="py-2.5 px-4">Day trip (₹2000–3000 jeep safari)</td><td className="py-2.5 px-4">Day trip or overnight at park edge</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹8,000</td><td className="py-2.5 px-4 font-medium text-teal">₹8,000–20,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Dibrugarh → Tea estate immersion → Brahmaputra sunset. Day 2: Jorhat → Tocklai Institute → factory tour → Majuli Island. Day 3: Kaziranga rhino safari → depart.
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
                title="Dibrugarh, Tea Estate & Brahmaputra"
                items={[
                  "Fly to Dibrugarh (direct from Delhi, Mumbai, Kolkata, Guwahati — flight from Delhi is 2 hrs vs 36 hrs by train). The Dibrugarh Valley is the heart of Assam's premium tea district.",
                  activeTab === "A"
                    ? "Check in to a Dibrugarh town guesthouse (₹700–1200). The town is small and well connected to the estates."
                    : "Check in to Mancotta Chang Bungalow or Thengal Manor in Jorhat (₹5000–8000 full board, 3 meals + unlimited tea included). The colonial bungalows have teak floors, four-poster beds, and wide verandahs facing the garden. Book in advance.",
                  "Afternoon: Mancotta Chang Bungalow or Aideobarie Tea Estate (30 km from Dibrugarh) — free visit during working hours. Arrive at the estate in time for the afternoon plucking. Watch the women pluckers (in Assam, tea plucking is traditionally done by women workers) move through the rows with their bamboo baskets.",
                  "Tea plucking experience: ask to join a plucking team — two leaves and a bud, the universal standard. The speed and precision of experienced pluckers is extraordinary. Most estates welcome visitors joining briefly.",
                  "Golden Mahseer fishing at the Burhi Dihing River (the Mahseer is Assam's famous freshwater sport fish — large, powerful, caught catch-and-release by serious anglers worldwide). Ask your guesthouse or estate for a local guide (₹300–500).",
                  "Sunset: Dibrugarh Ghat on the Brahmaputra. The Brahmaputra is the world's 9th largest river — its scale at sunset, with the light on the water and the hills in the distance, is genuinely humbling. River cruises available (ask at the ghat).",
                ]}
                cost={activeTab === "A" ? "₹3,000" : "₹7,000–9,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Jorhat, Tocklai Tea Institute & Majuli Island"
                items={[
                  "Drive to Jorhat (1 hr from Dibrugarh). Jorhat is the centre of Assam's tea trade — the Tocklai Tea Research Institute here is India's oldest and largest tea research station, founded 1911.",
                  "Tocklai Tea Research Institute (open to visitors during working hours, no formal entry charge but get permission in advance). The institute's museum explains the history of Assam tea from the 1840s to the present — cultivation, pest management, new cultivar development. Excellent context for everything you're seeing in the estates.",
                  "Full-day tea estate immersion — attach to a plucking team for 2 hours in the morning. Then the factory tour: withering (fresh leaf spread on racks for 12–18 hours), rolling (leaf cells broken to begin oxidation), oxidizing (the fermentation that gives black tea its color and malt), firing (drying to stop oxidation and lock flavor). The smell of a firing room is extraordinary.",
                  "Cupping session with the estate manager: the systematic tasting of tea for quality grading. The GFOP (Golden Flowery Orange Pekoe) grade and TGFOP grades explained with the actual leaf in your hand.",
                  activeTab === "B"
                    ? "Private estate tour arranged through your bungalow — includes meeting the estate manager, walking the entire production chain, and a cupping of first vs second flush side by side."
                    : "Buy tea directly at the estate: premium first or second flush Orthodox at ₹200–600 for 250g (vs ₹800–1500+ retail). Ask for GFOP or TGFOP grade.",
                  "Afternoon: Majuli Island day trip (35 km from Jorhat, ferry from Nimati Ghat: 1–2 hours). Majuli is the world's largest river island, in the Brahmaputra. Home to 22 Vaishnavite Satras — monastery-villages with unique Assamese cultural traditions, classical mask-dance performances, and hand-printed textiles. Walk the Satra grounds at golden hour.",
                ]}
                cost={activeTab === "A" ? "₹3,500" : "₹8,000–12,000"}
              />

              {/* ── Day 3 ── */}
              <DayCard
                day="Day 3"
                title="Kaziranga National Park & Departure"
                items={[
                  "Early start: Kaziranga National Park (80 km from Jorhat, 2 hrs). Arrive for the morning jeep safari — this is non-negotiable. The Central Range opens at 7:30 AM and the first 2 hours have the best wildlife activity.",
                  "Kaziranga is the world's largest single-horned rhinoceros habitat: 2,600+ rhinos. The concentration is extraordinary — on a good morning jeep safari, you may see 15–20 rhinos in 3 hours. Plus elephants, wild water buffalo, swamp deer, and excellent birdwatching.",
                  "Jeep safari: ₹2000–3000 per jeep (4–6 passengers). Book through the park authority or a local operator at the park entrance. Multiple ranges (Central, Western, Eastern) — each has different density. Central is most reliable for rhinos.",
                  activeTab === "B"
                    ? "Optional: elephant safari at dawn (₹1000–1500/person, book 2 days ahead through the forest department). A completely different perspective — quieter, closer to the animals, moving through the tall elephant grass."
                    : "After the morning jeep safari, take a short break at a dhaba near the park gate for Assamese rice and dal before departure.",
                  "Return to Jorhat or Dibrugarh airport. Flights to Guwahati connect to all major cities. Or take the overnight train from Dibrugarh.",
                ]}
                cost={activeTab === "A" ? "₹4,000" : "₹7,000–10,000"}
              />
            </div>
          </section>

          {/* ── TEA ESTATE GUIDE ── */}
          <section id="tea" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🍵 Tea Estate Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              What to look for, what to taste, and what to buy. The four flushes of Assam tea.
            </p>
            <div className="space-y-4">
              {[
                { flush: "First Flush (Mar–Apr)", desc: "The season's first harvest. Light, floral, delicate. Much lower theaflavin than Second Flush. Prized by tea connoisseurs globally — comparable to Darjeeling First Flush in rarity. Drink it without milk.", emoji: "🌱", color: "bg-emerald-50 border-emerald-200" },
                { flush: "Second Flush (May–Jun)", desc: "The strongest, most characteristic Assam tea. High theaflavin content gives the malt, body, and the coppery brightness in the cup. This is the base of English Breakfast blends worldwide. Excellent with full-fat milk.", emoji: "🫖", color: "bg-amber-50 border-amber-200" },
                { flush: "Autumn Flush (Oct–Nov)", desc: "Lighter than Second Flush, more body than First Flush. The 'between seasons' tea. Often underrated and available at lower prices at the estate. A good pick if visiting in October–November.", emoji: "🍂", color: "bg-amber-50 border-amber-200" },
                { flush: "Grades to Ask For", desc: "TGFOP (Tippy Golden Flowery Orange Pekoe): highest whole-leaf Orthodox grade. GFOP: slightly lower but still excellent. FTGFOP1: finest in the range. CTC (Crush-Tear-Curl): the industrial process for tea bags and mass chai. For estate buying, ask for Orthodox, not CTC.", emoji: "📋", color: "bg-teal-50 border-teal-200" },
              ].map((t) => (
                <div key={t.flush} className={`rounded-xl border p-5 ${t.color}`}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{t.emoji}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{t.flush}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-1">{t.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── TEA IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="Assam tea plucking woman worker basket rows green"
              fallback="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=80"
              alt="Tea plucking in Assam estate women workers green rows"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Two leaves and a bud: the universal standard for quality tea plucking. Assam&apos;s 800 estates produce half of India&apos;s tea — the Brahmaputra Valley&apos;s lowland heat and monsoon rainfall create the world&apos;s boldest black tea.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹8,000", color: "bg-amber-50 border-amber-200",
                  items: [["Guesthouse (2–3 nights)", "₹700–1,200/night"], ["Local transport", "₹800–1,200"], ["Food (3 days)", "₹1,000–1,500"], ["Kaziranga jeep safari", "₹2,000–3,000"], ["Tea to take home (250g)", "₹200–600"]] },
                { plan: "Comfortable", emoji: "🏡", total: "₹8,000–20,000", color: "bg-teal-50 border-teal-200",
                  items: [["Colonial bungalow full board (2–3 nights)", "₹5,000–8,000/night"], ["Private car / driver", "₹1,500–2,500"], ["Private estate tour", "₹1,000–2,000"], ["Kaziranga jeep + elephant safari", "₹3,000–5,000"], ["Premium tea (500g TGFOP)", "₹800–1,500"]] },
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
              * All prices per person. Does not include flights to Dibrugarh. Colonial bungalow stays are full board — meals and tea are included, which significantly reduces day-to-day costs.
            </p>
          </section>

          <AffiliateBlock destination="Assam Tea Circuit" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting in December–February expecting active estates", desc: "The tea bushes are dormant December–February. No plucking, no active factory. The bungalows are open and Kaziranga is excellent in winter, but the core tea experience (plucking, factory, cupping fresh leaf) only happens March–November.", icon: "❄️" },
                { title: "Buying tea at the airport or in supermarkets", desc: "Estate tea bought directly costs ₹200–600 for 250g of premium Orthodox. The same tea in Delhi or Mumbai specialty stores is ₹800–1500+. Carry enough luggage allowance to take tea home.", icon: "🛒" },
                { title: "Not calling ahead to arrange an estate visit", desc: "While most estates welcome visitors, showing up unannounced at a large commercial estate can result in being turned away. A 10-minute call or a hotel concierge connection makes the difference between a tour and being stopped at the gate.", icon: "📞" },
                { title: "Skipping Majuli Island", desc: "Most Assam tea itineraries stop at the estates. Majuli — 35 km from Jorhat — is the world's largest river island and has a unique living culture that exists nowhere else in India. The day trip adds little cost and enormous depth.", icon: "🏝️" },
                { title: "Trying to drive from Guwahati instead of flying", desc: "Guwahati to Dibrugarh is 450 km — 7–8 hours by road. The flight is 1 hour and costs ₹1500–3000. For a 3-day trip, burning 1.5 days on road travel is a poor trade. Fly.", icon: "✈️" },
                { title: "Booking only a 'tea tasting' without a factory tour", desc: "A cupping session without the factory context is just drinking tea. The full experience — walking the rows, seeing the withering room, the rolling machines, the firing ovens — is what makes the cupping meaningful. Insist on the full process visit.", icon: "🏭" },
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
                { icon: "🌿", title: "When to Visit for First Flush Tea", desc: "Assam has 4 flushes: First Flush (March–April, delicate, light), Second Flush (May–June, strongest, malty), Autumn Flush (October–November, lighter), Winter Dormancy (December–February, no plucking). Visit March–June to see active plucking.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏡", title: "Colonial Bungalow Stays", desc: "Assam's tea estates maintain original colonial bungalows with teak floors, four-poster beds, and wide verandahs. Mancotta Chang Bungalow and Thengal Manor in Jorhat are the most authentic. They offer full-board (3 meals + all teas) and include estate walks.", color: "bg-amber-50 border-amber-200" },
                { icon: "🍵", title: "What Makes Assam Tea Different", desc: "Assam's Brahmaputra Valley has unique conditions: lowland elevation (50–200m), strong sunlight, monsoon rainfall (250cm/year), and the local assamica cultivar. The result: black tea with the highest theaflavin content of any tea in the world — malty, bold, perfect with milk.", color: "bg-teal-50 border-teal-200" },
                { icon: "🐘", title: "Combine with Kaziranga", desc: "Kaziranga National Park is 80 km from Jorhat (2 hrs). Home to the world's largest one-horned rhino population (2,600+). A day trip or overnight from the tea garden circuit adds one of India's finest wildlife experiences.", color: "bg-teal-50 border-teal-200" },
                { icon: "🚁", title: "Best Way to Reach Dibrugarh", desc: "Dibrugarh Airport has direct flights from Delhi, Kolkata, Guwahati, and Bangalore. From Guwahati by road/rail: 450 km (7–8 hrs). The flight (1 hr) is worth it. Northeast Frontier Railway also connects Dibrugarh to Kolkata (18 hrs) and Delhi (36 hrs).", color: "bg-rose-50 border-rose-200" },
                { icon: "🌊", title: "Brahmaputra River Activities", desc: "River cruises on the Brahmaputra (ask at Dibrugarh Ghat), fishing for Golden Mahseer (catch-and-release), and watching river dolphins are all available near Dibrugarh. The Brahmaputra is the world's 9th largest river — its scale is humbling.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates and group — we&apos;ll send a personalised Assam tea circuit itinerary including estate contacts and Kaziranga logistics within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Assam Tea Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Can I visit Assam tea estates without a formal tour?", a: "Most large estates welcome independent visitors during working hours (6 AM–5 PM). Call ahead or ask your Dibrugarh hotel to arrange it. The Tocklai Tea Research Institute in Jorhat is open to the public and has excellent exhibits on tea history, cultivation, and processing." },
                { q: "What is the difference between Assam tea and Darjeeling tea?", a: "Assam tea (CTC or Orthodox, lowland, bold/malty/strong) is the base of most Indian chai and English breakfast blends. Darjeeling tea (high-altitude, delicate, muscatel flavor, often called champagne of teas) is milder and usually drunk without milk. Assam tea has higher caffeine and theaflavin; Darjeeling has more nuanced terroir." },
                { q: "What is Majuli Island and how do I reach it?", a: "Majuli (near Jorhat) is the world's largest river island, in the Brahmaputra River. It's home to 22 Vaishnavite Satras (monastery-villages) with unique Assamese cultural traditions. Ferry from Nimati Ghat (Jorhat) to Majuli: 1–2 hours depending on water level. Best visited October–March." },
                { q: "Is Assam tea available to buy at the estates?", a: "Yes — virtually all estates sell directly at much lower prices than retail. Expect to pay ₹200–600 for 250g of premium first or second flush Orthodox tea (vs ₹800–1500+ in specialty stores). Whole-leaf GFOP or TGFOP grades are the best to ask for." },
                { q: "What is Kaziranga like to combine with a tea garden trip?", a: "Kaziranga (2.5 hrs from Jorhat) has the world's largest one-horned rhino concentration (2,600+), plus tigers, elephants, wild buffalo, and excellent birdwatching. Jeep safari (₹2000–3000 per jeep) covers multiple zones. Best time: October–April. Closed July–October." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Assam Tea Garden — Highlights"
            subtitle="The best of Assam Tea Garden in photos."
            spots={[
              { name: "Assam Tea Garden Landscape", query: "assam tea garden india landscape scenic beautiful travel", desc: "The stunning landscapes of Assam Tea Garden." },
              { name: "Assam Tea Garden Temple", query: "assam tea garden temple architecture heritage india", desc: "Historic temples and architecture in Assam Tea Garden." },
              { name: "Assam Tea Garden Street Scene", query: "assam tea garden street market local culture india", desc: "Local life and culture in Assam Tea Garden." },
              { name: "Assam Tea Garden Nature", query: "assam tea garden nature hills forest river india", desc: "Natural beauty around Assam Tea Garden." },
              { name: "Assam Tea Garden Sunset", query: "assam tea garden sunset golden hour india travel", desc: "Assam Tea Garden at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Continue Exploring Northeast India</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kaziranga — Rhino Safari & Wildlife", href: "/blog/kaziranga-3-days" },
                { label: "Guwahati — Northeast India Gateway", href: "/blog/guwahati-2-days" },
                { label: "Dibrugarh — 3 Days in Tea Country", href: "/blog/dibrugarh-3-days" },
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

          <CombineWith currentSlug="assam-tea-garden-3-days" />
          <RelatedGuides currentSlug="assam-tea-garden-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
