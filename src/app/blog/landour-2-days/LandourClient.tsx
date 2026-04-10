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

const LANDOUR_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "sights",    emoji: "🏔️", label: "What to Do" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Landour 2-Day Itinerary&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Landour in 2 Days guide&url=${pageUrl}` },
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
export default function LandourClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹4k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹4k–10k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={LANDOUR_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Landour" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="mussoorie landour hill station mountains misty valley uttarakhand"
            fallback="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85"
            alt="Misty Himalayan valley Landour Mussoorie hills Uttarakhand"
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
              <span className="text-white/70">Landour 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Literary Hill Station
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Landour in 2 Days: Char Dukan,
                <em className="italic text-gold-light"> Ruskin Bond &amp; Above the Clouds</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Three km above Mussoorie and a world apart. The town that kept its colonial character, its literary soul, and its extraordinary quiet. Two complete plans for India&apos;s most underrated hill retreat.
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
              <span>🇮🇳 Uttarakhand</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹2,500</span>
            </div>
          </div>

          {/* Intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Char Dukan at 7 AM: ginger cake still warm from the oven, a cup of chai, the Himalayas pink in the first light below the Camel&apos;s Back road. Not another tourist in sight. Mussoorie was already gridlocked a kilometre below.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Landour is technically part of Mussoorie — but Mussoorie is 1 km below and a different world. Landour is a pedestrian-only cantonment at 2,275m, with no vehicles beyond the Sisters&apos; Bazaar junction, a population of a few thousand, and extraordinary views of both the Himalayan peaks to the north and the Doon Valley to the south. Ruskin Bond has lived here since the 1960s. The Char Dukan bakery has been open since the early 20th century. The Camel&apos;s Back Road — 3 km of Victorian-era ridge path — has no traffic. Two days here feels like a week of rest.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌸" label="Best Season" value="Mar–Jun, Oct–Nov" />
            <StatCard icon="⛰️" label="Altitude" value="2,275 m" />
            <StatCard icon="📏" label="Distance from Mussoorie" value="3 km uphill" />
            <StatCard icon="⭐" label="Rating" value="4.6★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Landour is pleasant most of the year. The views and the bakery are the constants.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Mar–Jun", emoji: "🌸", title: "Spring & Summer", desc: "15–25°C. Rhododendrons in March–April, clear mornings for Himalayan views. Peak season (May) is crowded in Mussoorie but not in Landour itself — one of its advantages. Char Dukan is at its busiest and most charming.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Oct–Nov", emoji: "✅", title: "Autumn Peak", desc: "8–20°C. Crystal clear skies, best visibility for Lal Tibba binoculars. The Camel's Back road in autumn light is extraordinary. Fewer tourists than summer. The finest season for photography.", color: "bg-amber-50 border-amber-200" },
                { season: "Dec–Feb", emoji: "❄️", title: "Winter — Snow Possible", desc: "0–10°C, snow occasional. The town looks magical under snow. The Char Dukan bakery is warmest and most atmospheric in winter. Roads can be icy — bring proper footwear and check conditions.", color: "bg-blue-50 border-blue-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 2-day experience, two comfort levels. Landour is genuinely affordable — the best things here are free or nearly so.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Char Dukan area homestays (₹700–1200)</td><td className="py-2.5 px-4">Rokeby Manor or colonial cottage (₹2500–7000)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Walk everywhere + shared taxi</td><td className="py-2.5 px-4">Private guide for heritage walk + taxi</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Food</td><td className="py-2.5 px-4">Char Dukan bakery + simple cafes</td><td className="py-2.5 px-4">Heritage hotel meals + Char Dukan</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹4,000</td><td className="py-2.5 px-4 font-medium text-teal">₹4,000–10,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive, Char Dukan, Camel&apos;s Back Road, Clouds End. Day 2: Lal Tibba, Landour Bazaar, Kellogg&apos;s Church, optional Mussoorie walk.
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
                title="Char Dukan + Camel's Back Road + Clouds End"
                items={[
                  activeTab === "A"
                    ? "Train from Delhi to Dehradun (5.5 hrs overnight, ₹200–400). Taxi from Dehradun to Mussoorie (35 km, 1.5 hrs, ₹500 shared or ₹900 private). From Mussoorie Gandhi Chowk, walk uphill to Landour (40–45 min, steep) or take a local taxi (₹50–100 per person)."
                    : "Train from Delhi to Dehradun (AC overnight, ₹600–1200). Private taxi from Dehradun to Landour directly (₹1000–1400, 1.5 hrs). Drop your bags and start walking immediately.",
                  activeTab === "A"
                    ? "Check in to homestay near the Char Dukan (₹700–1200/night). Several options around the Sisters' Bazaar — ask locally or book ahead on booking platforms."
                    : "Check in to Rokeby Manor (heritage, ₹4000–7000) or a colonial cottage (₹1500–3000). The fireplace rooms at Rokeby Manor in October–February are Landour at its finest.",
                  "Char Dukan — the four shops at Sisters' Bazaar, open since the early 20th century. The bakery (Anil's) is famous for ginger cake, plum cake, and Tibetan bread. Arrive before 10 AM for fresh-from-the-oven items. Sit outside with a chai and watch the mist move through the pines.",
                  "Camel's Back Road — the 3 km Victorian-era pedestrian ridge road. No vehicles allowed. Starts near the Char Dukan end. Walk it counterclockwise: views of the Doon Valley on one side, snow peaks on the other. The road hugs the ridge — you're between the clouds. Allow 45–60 minutes.",
                  "Clouds End viewpoint — at the far end of the Camel's Back road. A colonial bungalow (now a small hotel) at the edge of the ridge, with a sheer drop into the forest. Tea here is the thing to do.",
                  activeTab === "A" ? "Dinner at a simple café near the bazaar (₹150–300). The bakery sells ginger cake that makes an excellent light dinner with tea." : "Dinner at your heritage hotel or a sit-down restaurant (₹400–800). End the evening with the Milky Way from Lal Tibba if skies are clear.",
                ]}
                cost={activeTab === "A" ? "₹2,000" : "₹4,000–7,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Lal Tibba + Landour Bazaar + Kellogg's Church"
                items={[
                  "7:00am: Walk up to Lal Tibba (1 km uphill from the Char Dukan). At 2,275m, it's the highest point of Landour. The binocular station (₹10, operated by a local man) shows Kedarnath and Badrinath on very clear winter days. October–December is the clearest window.",
                  "Allow 45–60 minutes at Lal Tibba. The sunrise over the snow peaks is the finest moment in all of Landour.",
                  "9:00am: Second visit to Char Dukan for breakfast. By now you should order the Tibetan bread with butter and honey — it's the best thing they make and it goes by 10 AM.",
                  "Landour Bazaar walk — smaller and more authentic than Mussoorie's Mall Road. An old pharmacy (in operation since British times), a cobbler, a hardware shop unchanged since the 1970s, and a few tea vendors. No tourist shops. Buy postcards and local honey.",
                  "Kellogg's Church (1903) — a Methodist mission church, one of the finest colonial churches in the Uttarakhand hills. Small, stone-built, with original wooden pews and stained glass. Named after Samuel Henry Kellogg, the American missionary who compiled the first comprehensive grammar of Hindi.",
                  activeTab === "A"
                    ? "Afternoon: optional walk down to Mussoorie (40–45 min downhill) for company, shopping, or a restaurant meal. Return to Landour by local taxi (₹50–100) before dark — the path is steep and poorly lit at night. Depart next morning."
                    : "Afternoon: private heritage walk with a local guide (₹500–800, 2 hrs). The guide can show you the Landour Language School (still teaching Hindi to diplomats and missionaries), Ruskin Bond's neighbourhood (he lives near the Char Dukan), and colonial bungalows with histories. Depart next morning or stay a third night.",
                ]}
                cost={activeTab === "A" ? "₹1,500" : "₹2,500–4,000"}
              />
            </div>
          </section>

          {/* ── WHAT TO DO ── */}
          <section id="sights" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏔️ What to Do in Landour</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Landour rewards walking, sitting, and looking. Here are the specific things worth your time.
            </p>
            <div className="space-y-4">
              {[
                { rank: "#1", name: "Char Dukan", type: "Bakery + café", hours: "7 AM – 2 PM", note: "The 'four shops' at Sisters' Bazaar — Anil's bakery, a chemist, a tailor, and a general store. Open since the early 20th century. Come before 10 AM for fresh ginger cake and Tibetan bread. Have your chai here and watch Mussoorie disappear into the mist below.", emoji: "☕", color: "bg-amber-50 border-amber-200" },
                { rank: "#2", name: "Camel's Back Road", type: "Walking path", hours: "All day", note: "The 3 km Victorian-era ridge road with no vehicles. The finest walk in the Mussoorie-Landour area. Views of the Doon Valley to the south and snow peaks to the north. Allow 45–60 min. Best in morning light before the haze builds.", emoji: "🚶", color: "bg-amber-50 border-amber-200" },
                { rank: "#3", name: "Lal Tibba", type: "Viewpoint", hours: "Sunrise – sunset", note: "The highest point of Landour at 2,275m. Binoculars at the viewpoint (₹10) show Kedarnath and Badrinath on clear days. October–December is the clearest window. Go at sunrise for the snow peaks in pink light.", emoji: "🔭", color: "bg-teal-50 border-teal-200" },
                { rank: "#4", name: "Kellogg's Church", type: "Colonial heritage", hours: "7 AM – 5 PM (open for visitors)", note: "1903 Methodist mission church, stone-built with original wooden pews. Named after Samuel Henry Kellogg who compiled the first comprehensive Hindi grammar. One of the best colonial churches in Uttarakhand.", emoji: "⛪", color: "bg-teal-50 border-teal-200" },
                { rank: "#5", name: "Landour Language School", type: "Historic institution", hours: "Visible from outside", note: "Still operating since the 19th century, teaching Hindi to diplomats, missionaries, and researchers. Explains the small international community in Landour. Walking past it and imagining its 150-year history of foreigners learning Hindi here is worth a moment.", emoji: "📚", color: "bg-rose-50 border-rose-200" },
              ].map((s) => (
                <div key={s.name} className={`rounded-xl border p-5 ${s.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{s.emoji}</span>
                      <span className="text-xs font-bold text-gold-dark mt-1 block">{s.rank}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{s.name}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{s.type} · {s.hours}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{s.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="colonial hill station bakery cafe mountains india"
              fallback="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=900&q=80"
              alt="Colonial bakery café in Landour Mussoorie hills"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Char Dukan at 7 AM: ginger cake ₹40, chai ₹20, Himalayan view free. This is Landour&apos;s entire pitch, and it works perfectly.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹4,000", color: "bg-amber-50 border-amber-200",
                  items: [["Stays (1 night)", "₹700–1,200"], ["Transport (train + taxi)", "₹600–1,000"], ["Food (2 days)", "₹600–1,000"], ["Bakery + café", "₹200–400"], ["Misc (binoculars etc)", "₹100–200"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹4,000–10,000", color: "bg-teal-50 border-teal-200",
                  items: [["Heritage stay (1 night)", "₹2,500–7,000"], ["Transport (private taxi)", "₹1,000–1,500"], ["Food + hotel meals", "₹1,000–2,000"], ["Heritage walk guide", "₹500–800"], ["Misc + shopping", "₹300–700"]] },
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
              * All prices per person. Does not include train from Delhi to Dehradun (₹200–1200 depending on class). Camel&apos;s Back Road and Lal Tibba are free. Kellogg&apos;s Church is free.
            </p>
          </section>

          <AffiliateBlock destination="Landour" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Arriving at Char Dukan after 10 AM", desc: "The freshest ginger cake and Tibetan bread sell out by 10–11 AM. The bakery closes by 2 PM. Come at 7–8 AM to get the best of the baking and have the ridge to yourself before the day visitors arrive.", icon: "⏰" },
                { title: "Staying in Mussoorie and trying to day-trip Landour", desc: "You can day-trip Landour from Mussoorie, but you miss the entire point: the quiet evenings above the clouds, the dark skies at Lal Tibba, the 5 AM Char Dukan with no one else around. Stay in Landour itself for at least one night.", icon: "🏨" },
                { title: "Trying to reach Landour by vehicle", desc: "Vehicles cannot go beyond the Sisters' Bazaar junction — the roads above are too narrow and the cantonment controls access. Walk from that point (10 min) or take a local porter for your bags. This is not a limitation — it's the reason Landour is so peaceful.", icon: "🚗" },
                { title: "Being too aggressive about Ruskin Bond", desc: "Ruskin Bond is in his late 80s and values his privacy. If you happen to see him at the Char Dukan or the bazaar, a respectful nod is appropriate. He doesn't do autograph sessions. Cambridge Book Depot in Mussoorie often has signed copies of his books — better than ambushing the man.", icon: "📚" },
                { title: "Walking the path from Mussoorie after dark", desc: "The steep path from Mussoorie to Landour is poorly lit and can be slippery. If you go down to Mussoorie during the day, take a local taxi back up after dark (₹50–100). The path is fine in daylight.", icon: "🌙" },
                { title: "Expecting Landour to have restaurants and shops", desc: "Landour has the Char Dukan bakery, a few small cafes, and a small bazaar with basics. There are no restaurants in the Mussoorie sense. Stock up on provisions from the bakery, carry a water bottle, and embrace the simplicity.", icon: "🍽️" },
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
                { icon: "📚", title: "Ruskin Bond Lives Here", desc: "India's most beloved English-language author (The Room on the Roof, The Blue Umbrella) has lived in Landour since the 1960s. He sometimes appears at the Char Dukan bakery on weekend mornings. Cambridge Book Depot in Mussoorie stocks signed copies.", color: "bg-amber-50 border-amber-200" },
                { icon: "🥐", title: "Char Dukan: Arrive Before 10 AM", desc: "The four shops include a bakery (Anil's) famous for ginger cake, plum cake, and Tibetan bread. By 11 AM, the freshest items are gone. Buy two days' worth. The bakery closes by 2 PM.", color: "bg-amber-50 border-amber-200" },
                { icon: "🚫", title: "No Vehicles in Camel's Back Road", desc: "The 3 km Victorian-era road is pedestrian only. Start at the Char Dukan end and walk counterclockwise. The road hugs the ridge — views to the plains on one side, snow peaks on the other. Allow 45–60 minutes.", color: "bg-teal-50 border-teal-200" },
                { icon: "🏔️", title: "When Lal Tibba Has Himalayan Views", desc: "October–December is clearest. March is good after winter snow. Summer (May–June) has morning views that cloud over by noon. The binoculars at the viewpoint (₹10, operated by local man) are worth using.", color: "bg-teal-50 border-teal-200" },
                { icon: "🆚", title: "Why Landour Instead of Mussoorie", desc: "Mussoorie (1 km below) has malls, crowded Mall Road, overpriced food, and traffic jams in summer. Landour is pedestrian-only, has 1/5th the tourists, better views, and a literary/colonial atmosphere that Mussoorie lost decades ago. The price difference is minimal.", color: "bg-rose-50 border-rose-200" },
                { icon: "🌙", title: "Landour at Night", desc: "Above the clouds and noise of Mussoorie, Landour's nights are extraordinarily quiet and dark. The Milky Way is visible most of the year. Stars visible from Lal Tibba at 9 PM (bring warm clothes — it drops to 5°C even in May).", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates and group — we&apos;ll send a personalised Landour itinerary with Mussoorie loop options within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Landour Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How do I get to Landour from Mussoorie?", a: "Landour is 3 km uphill from Mussoorie's Kulri/Gandhi Chowk. Walk uphill (40–45 min, steep) or share a local taxi (₹50–100 per person). Many travelers base themselves in Mussoorie and walk up to Landour for the day — perfectly manageable." },
                { q: "Is there accommodation in Landour itself?", a: "Yes — several homestays and small guesthouses: Rokeby Manor (heritage, ₹4000–7000), Char Dukan area homestays (₹800–1500), and colonial-style cottages (₹1500–3000). Staying in Landour rather than Mussoorie gives you the quiet evenings and dark-sky nights." },
                { q: "Can I meet Ruskin Bond?", a: "Ruskin Bond doesn't do formal meet-and-greets, but he is sometimes spotted at the Char Dukan or local bookshops. Cambridge Book Depot in Mussoorie often has information. Don't approach him aggressively if you see him — he's in his late 80s and values his privacy." },
                { q: "Is Landour safe for solo women?", a: "Yes — it's one of India's safest hill stations. The small, walking-only paths, active community of residents (including many expats and retirees), and Army presence nearby make it extremely secure. The main caution is the steep, unlit path back from Mussoorie after dark — take a taxi after 8 PM." },
                { q: "What is the Landour Language School?", a: "The Landour Language School has been teaching Hindi to foreigners (missionaries, diplomats, researchers) since the 19th century. It's still operational today. The school's presence explains why Landour has a small expat/international community despite its small size." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Landour — Highlights"
            subtitle="The best of Landour in photos."
            spots={[
              { name: "Landour Landscape", query: "landour india landscape scenic beautiful travel", desc: "The stunning landscapes of Landour." },
              { name: "Landour Temple", query: "landour temple architecture heritage india", desc: "Historic temples and architecture in Landour." },
              { name: "Landour Street Scene", query: "landour street market local culture india", desc: "Local life and culture in Landour." },
              { name: "Landour Nature", query: "landour nature hills forest river india", desc: "Natural beauty around Landour." },
              { name: "Landour Sunset", query: "landour sunset golden hour india travel", desc: "Landour at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Exploring the Garhwal Hills?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Mussoorie — 3 Days Complete Guide", href: "/blog/mussoorie-3-days" },
                { label: "Dhanaulti — 2 Days Pine Forest Retreat", href: "/blog/dhanaulti-2-days" },
                { label: "Chakrata — Uttarakhand's Hidden Hill Town", href: "/blog/chakrata-2-days" },
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

          <CombineWith currentSlug="landour-2-days" />
          <RelatedGuides currentSlug="landour-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
