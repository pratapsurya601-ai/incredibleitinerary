"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import SmartImage from "@/components/ui/SmartImage";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import RelatedGuides from "@/components/blog/RelatedGuides";
import CombineWith from "@/components/blog/CombineWith";
import Breadcrumb from "@/components/blog/Breadcrumb";

const CHERRAPUNJI_TOC = [
  { id: "plans",      emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary",  emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "waterfalls", emoji: "💧", label: "Waterfalls & Sights" },
  { id: "budget",     emoji: "💰", label: "Budget Breakdown" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Cherrapunji 2-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Cherrapunji in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function CherrapunjiClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹5k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹5k–12k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={CHERRAPUNJI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Cherrapunji" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="nohkalikai falls cherrapunji meghalaya waterfall gorge mist"
            fallback="https://images.unsplash.com/photo-1698429358246-807d8972da9a?w=1600&q=85"
            alt="Nohkalikai Falls 340m Cherrapunji Meghalaya India tallest plunge waterfall"
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
              <span className="text-white/70">Cherrapunji 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Nature & Adventure
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Cherrapunji in 2 Days: Nohkalikai Falls,
                <em className="italic text-gold-light"> Root Bridges &amp; the World&apos;s Wettest Place</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                A 340m waterfall named after a woman who jumped. A bridge grown from rubber fig roots over 500 years. The plateau that receives 11,000mm of rain per year. Cherrapunji is Meghalaya&apos;s most layered destination.
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
              <span>🇮🇳 Meghalaya</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹3,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              At the bottom of 3,500 steps, after two hours of descent, the double-decker root bridge appeared through the jungle. Both levels, grown from a single rubber fig tree by Khasi villagers over five centuries. I swam in the pool below it for an hour. The climb back up took everything I had. It was worth every step.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Cherrapunji (officially Sohra) sits on Meghalaya&apos;s southern plateau, 1,484m above sea level, at the edge of the Khasi Hills. Below it, the plains of Bangladesh stretch flat to the horizon. The plateau receives 11,777mm of rain per year — the second-highest recorded in the world — and every drop carves something: 340m waterfalls, limestone caves, gorges. The living root bridges are a Khasi response to this landscape, grown by hand over centuries where conventional bridges would be swept away. This is the complete 2-day guide.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌿" label="Best Season" value="Oct–May" />
            <StatCard icon="💧" label="Rainfall" value="11,777 mm/year" />
            <StatCard icon="🚗" label="Distance from Shillong" value="55 km" />
            <StatCard icon="⭐" label="Rating" value="4.7★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The paradox of Cherrapunji: the most dramatic waterfalls are in monsoon, but monsoon makes travel the hardest.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–May", emoji: "✅", title: "Best for Travel", desc: "Dry, safe, and accessible. Waterfalls are still impressive from residual flow (October–December are especially good). Nongriat trail is manageable. Cool temperatures (12–22°C on the plateau). October is the sweet spot: post-monsoon lushness with manageable conditions.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Jun–Sep", emoji: "💧", title: "Waterfall Peak (But Difficult)", desc: "The 10,000+mm monsoon fills every waterfall to maximum volume — Nohkalikai and Seven Sisters are extraordinary. But roads flood, the Nongriat trail gets dangerous with leeches and slippery steps, and visibility is often zero. For experienced monsoon travellers only.", color: "bg-amber-50 border-amber-200" },
                { season: "Dec–Feb", emoji: "❄️", title: "Coldest & Clearest", desc: "December–February is cold (4–15°C) with crystal-clear views when not overcast. Waterfalls are lower but the landscape is misty and atmospheric. The Nongriat trek is easiest (dry steps, no leeches). Pack warm layers — the plateau gets genuinely cold.", color: "bg-blue-50 border-blue-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 2-day Cherrapunji experience, two comfort levels. The Nongriat trek and waterfalls are the same for both.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Base</td><td className="py-2.5 px-4">Shillong (55 km, shared taxi ₹100)</td><td className="py-2.5 px-4">Stay overnight in Cherrapunji for early trek start</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Shillong guesthouse (₹500–1000) or Cherrapunji (₹700–1500)</td><td className="py-2.5 px-4">Cherrapunji Holiday Resort or Polo Orchid (₹2500–4500)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Shared taxis + walking</td><td className="py-2.5 px-4">Private taxi for Day 1 sightseeing circuit</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (2 days)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹5,000</td><td className="py-2.5 px-4 font-medium text-teal">₹5,000–12,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive Cherrapunji + waterfall circuit (Nohkalikai, Seven Sisters, Mawsmai Cave). Day 2: Nongriat double-decker root bridge trek (start by 7 AM).
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
                title="Waterfalls, Caves & the Plateau Circuit"
                items={[
                  activeTab === "A"
                    ? "Bus or shared taxi from Shillong (55 km, 1.5 hrs, ₹100 shared). The road descends through pine forests and Khasi villages before the plateau opens up. Arrive by 10 AM."
                    : "Private taxi from Shillong (₹1,500–2,000 for the full day circuit). Allows you to stop at all viewpoints and control your timing. Arrive early to avoid afternoon clouds.",
                  activeTab === "A"
                    ? "Check in to Cherrapunji Holiday Resort (₹1,500–3,000, valley views) or a Sohra town guesthouse (₹700–1,000). Staying overnight is essential for the early Day 2 trek start."
                    : "Check in to Polo Orchid Resort (₹2,500–4,500) or Cherrapunji Holiday Resort (₹1,500–3,000). Both have outstanding valley views and the Polo Orchid has the best service in the area.",
                  "Nohkalikai Falls (340m drop, India's tallest plunge waterfall): view from the Eco Park viewpoint (₹50 entry). The waterfall plunges into a gorge and the pool at the bottom is a vivid turquoise-green. The legend: Ka Likai jumped here after discovering her husband had cooked her daughter. The falls are most powerful June–October but visible year-round.",
                  "Seven Sisters Waterfalls viewpoint (free, 2 km from the main Cherrapunji town): seven parallel waterfalls tumbling off the plateau edge, visible side by side during monsoon. Post-monsoon (October–November) still shows impressive flow. The Bangladesh plains are visible on clear days.",
                  "Mawsmai Cave (150m limestone cave, ₹50 entry, open 9 AM–5 PM): stalactites, stalagmites, and some narrow passages requiring ducking. Well-lit and accessible for most fitness levels. About 30 minutes inside.",
                  "Dain-Thlen Falls (free, 3 km from town): a serpent legend — Ka Dain-Thlen, a man-eating serpent, was killed here by the Khasi hero U Syngkai who cut it into pieces, ending its reign. The falls are modest but the legend and the gorge setting are atmospheric.",
                ]}
                cost={activeTab === "A" ? "₹2,000" : "₹4,000–6,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Nongriat Double-Decker Root Bridge Trek"
                items={[
                  "Start by 7 AM. This is non-negotiable. The Nongriat double-decker root bridge trek is 14 km round trip with 3,500 steps down and 3,500 steps back up. Starting at 7 AM means arriving at the bridge by 9 AM (before day-trippers), swimming, and returning to the top by 1–2 PM before afternoon heat and clouds.",
                  "Drive or walk 4 km to Tyrna village (the trailhead). Hire a local guide from Tyrna village (₹300–500) — mandatory for the trail and the guide knows the route and the 30+ root bridges along the way.",
                  "The descent: 3,500 steps, 5 km, 2 hours. The path passes through dense jungle, crosses single-root bridges, and passes Nongriat village (where there are basic guesthouses for those who stay overnight). The forest is extraordinary — tree ferns, orchids, and the sound of water everywhere.",
                  "The double-decker root bridge: a two-storey living bridge, 500 years old, grown from a single rubber fig (Ficus elastica) tree by the Khasi people. The roots are trained over bamboo scaffolding and take 10–15 years to become load-bearing. The lower level crosses the stream; the upper level crosses at a higher point. Both are strong enough for 50+ people.",
                  "Swimming: the natural pool below the bridge is crystal clear and cold. Swimming here is the reward for the 3,500-step descent. Allow 30–45 minutes. Rainbow Falls (an additional 30-minute walk from the root bridge) is also beautiful — a waterfall into a jade pool.",
                  activeTab === "A"
                    ? "Ascent: 2.5 hours back up 3,500 steps. Pace yourself — it's cardiovascular. Return to Cherrapunji by 2 PM. Shared taxi back to Shillong (₹100) by 3–4 PM."
                    : "Ascent: 2.5 hours. Private taxi waiting at Tyrna. Return to resort for shower and lunch. Evening drive back to Shillong or continue to Dawki (crystal-clear river, 2 hrs from Cherrapunji).",
                ]}
                cost={activeTab === "A" ? "₹2,500" : "₹3,000–5,000"}
              />
            </div>
          </section>

          {/* ── WATERFALLS & SIGHTS ── */}
          <section id="waterfalls" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">💧 Waterfalls & Sights Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Cherrapunji&apos;s sights in order of priority — plan your Day 1 around these.
            </p>
            <div className="space-y-4">
              {[
                { rank: "Nohkalikai Falls", icon: "💧", where: "Eco Park, Cherrapunji (₹50 entry)", price: "Best: Oct–Nov (post-monsoon), Jun–Sep (maximum flow)", note: "India's tallest plunge waterfall at 340m. The turquoise pool at the base is visible from the viewpoint. Named for Ka Likai — a Khasi woman who jumped after discovering her husband had cooked her daughter. Most powerful June–September; still impressive October–May.", color: "bg-amber-50 border-amber-200" },
                { rank: "Nongriat Root Bridge", icon: "🌿", where: "Nongriat Village (5 km trek from Tyrna)", price: "No entry fee; guide ₹300–500 from Tyrna", note: "The double-decker living root bridge — 500 years old, two storeys, grown from a single rubber fig tree. The most extraordinary piece of living architecture in India. Requires a 2-hour descent (3,500 steps) and 2.5-hour ascent. Start by 7 AM. Swimming pool below the bridge.", color: "bg-amber-50 border-amber-200" },
                { rank: "Seven Sisters Falls", icon: "🌊", where: "2 km from Cherrapunji town (free viewpoint)", price: "Best: Jun–Oct (full flow), Oct–Nov (still good)", note: "Seven parallel waterfalls visible side by side from the plateau edge. The view extends to the Bangladesh plains on clear days. Best in and just after monsoon. A free viewpoint accessible without a ticket.", color: "bg-teal-50 border-teal-200" },
                { rank: "Mawsmai Cave", icon: "🦇", where: "150m limestone cave, near Cherrapunji (₹50)", price: "Open 9 AM–5 PM, 30 minutes inside", note: "Well-lit limestone cave with stalactites and stalagmites. Some passages are narrow (you need to duck). Accessible for most fitness levels. Part of the Cherrapunji waterfall circuit — combine with Nohkalikai and Seven Sisters on Day 1.", color: "bg-teal-50 border-teal-200" },
              ].map((f) => (
                <div key={f.rank} className={`rounded-xl border p-5 ${f.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{f.icon}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{f.rank}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{f.where} · {f.price}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{f.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── WATERFALL IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="living root bridge meghalaya khasi jungle green steps"
              fallback="https://images.unsplash.com/photo-1698429358246-807d8972da9a?w=900&q=80"
              alt="Double-decker living root bridge Nongriat Meghalaya"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Nongriat double-decker root bridge: 500 years old, grown by Khasi villagers from a single rubber fig tree. 3,500 steps down to reach it. Worth every one of them.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹5,000", color: "bg-amber-50 border-amber-200",
                  items: [["Accommodation (2 nights)", "₹1,400–3,000"], ["Shillong–Cherrapunji transport", "₹200–400"], ["Entry fees (Eco Park, cave etc)", "₹150–300"], ["Guide for Nongriat trek", "₹300–500"], ["Food (2 days)", "₹600–1,000"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹5,000–12,000", color: "bg-teal-50 border-teal-200",
                  items: [["Polo Orchid/Holiday Resort (2 nights)", "₹5,000–9,000"], ["Private taxi Day 1 circuit", "₹1,500–2,000"], ["Nongriat guide + porter", "₹500–800"], ["Food & beverages", "₹1,000–2,000"], ["Entry fees", "₹200–400"]] },
              ].map((b) => (
                <div key={b.plan} className={`rounded-xl border p-5 ${b.color}`}>
                  <div className="text-center mb-4">
                    <span className="text-2xl">{b.emoji}</span>
                    <p className="font-serif text-base text-ink mt-1">{b.plan}</p>
                    <p className="font-serif text-xl text-ink font-medium mt-1">{b.total}</p>
                    <p className="text-xs text-muted uppercase tracking-wider">per person (2 days)</p>
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
              * Does not include travel from Guwahati to Shillong. Seven Sisters Falls viewpoint is free. Nongriat trek has no entry fee — guide cost only. Trekking poles (rent in Tyrna village, ₹50–100) are highly recommended for the ascent.
            </p>
          </section>

          <AffiliateBlock destination="Cherrapunji" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Starting the Nongriat trek after 9 AM", desc: "The 3,500-step descent takes 2 hours. If you start at 9 AM, you arrive at the bridge at 11 AM — when day-trippers are already there and the afternoon heat is building. Start at 7 AM: arrive at 9 AM, swim in peace, be back up by 1–2 PM.", icon: "⏰" },
                { title: "Visiting Cherrapunji as a day trip from Shillong without staying over", desc: "Day-trippers do the waterfalls on Day 1 and miss the Nongriat trek entirely. The trek requires an early start — impossible from Shillong. Stay 1–2 nights in Cherrapunji to do it properly.", icon: "🏨" },
                { title: "Underestimating the Nongriat ascent", desc: "The descent is hard on knees; the ascent is cardiovascular and demanding. Fit trekkers take 2.5 hours. Less fit trekkers: 3–4 hours. Carry 2+ litres of water, trail snacks, and trekking poles. Don't attempt in monsoon or if you have knee problems.", icon: "🥾" },
                { title: "Not downloading offline maps before leaving Shillong", desc: "Cherrapunji has limited signal (BSNL works best). The Nongriat trail has virtually no signal. Download Google Maps offline for Cherrapunji and Tyrna-Nongriat before you leave. The trail is well-marked but offline maps are a safety essential.", icon: "📱" },
                { title: "Visiting in peak monsoon expecting to see the falls and trek", desc: "June–September is maximum waterfall season but the Nongriat trail is dangerous (slippery steps, leeches, flooding streams). For first-time visitors, October–May is the correct window. If you specifically want monsoon drama, book a knowledgeable guide.", icon: "🌧️" },
                { title: "Not bringing rain gear even in 'dry season'", desc: "Cherrapunji can receive rain any month — even February. The plateau clouds roll in without warning. A light waterproof layer and a dry bag for electronics are essential regardless of forecast.", icon: "🌂" },
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
                { icon: "💧", title: "Best Season Paradox", desc: "Cherrapunji's waterfalls are most powerful during monsoon (June–September) when it receives 10,000+ mm of rain — but travel is difficult (flooded roads, slippery trails, leeches). October–May is safer travel with still-impressive waterfalls. Visit just after monsoon (October) for both dramatic falls AND manageable conditions.", color: "bg-amber-50 border-amber-200" },
                { icon: "🥾", title: "Nongriat Trek: Start Early", desc: "The 3,500-step descent to the double-decker root bridge takes 2 hours each way. Start by 7 AM to arrive early morning (before day-trippers), swim in the cool pool, and be back up by 1–2 PM. Hire a local guide (₹300–500) from Tyrna village — they know the 30+ bridges along the route.", color: "bg-amber-50 border-amber-200" },
                { icon: "🐛", title: "Leech Season (June–September)", desc: "During monsoon, the Nongriat trail and forest paths have abundant leeches. Salt or tobacco in socks helps. Tuck trousers into socks. After the walk, check your skin carefully. Not dangerous, just unpleasant. October–May has minimal leeches.", color: "bg-teal-50 border-teal-200" },
                { icon: "📱", title: "Connectivity Warning", desc: "Shillong has good connectivity; Cherrapunji (especially Nongriat) has very limited signal (BSNL works best). Download offline maps before leaving Shillong. The trail to Nongriat has no signal for most of the route.", color: "bg-teal-50 border-teal-200" },
                { icon: "🌊", title: "Nohkalikai: Best View Points", desc: "The main viewpoint (paid Eco Park) is the standard option. Walk 200m south along the rim for a free angle showing more of the surrounding gorge. Don't lean on the fence — it's an unfenced drop beyond the marked area.", color: "bg-rose-50 border-rose-200" },
                { icon: "🏡", title: "Where to Stay", desc: "Cherrapunji Holiday Resort (₹1,500–3,000, valley views) is the most established option. Polo Orchid Resort (₹2,500–4,500) has the best service. Budget guesthouses in Sohra town (₹500–900). Most visitors day-trip from Shillong — staying overnight gives you the early start for Nongriat.", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Planning a Meghalaya Trip?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates — we&apos;ll send a personalised Meghalaya itinerary (Shillong + Cherrapunji + Mawlynnong + Dawki) within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Meghalaya Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Is Cherrapunji or Mawsynram wetter?", a: "Both claim the title of 'world's wettest place' — Mawsynram (15 km from Cherrapunji) has slightly higher average annual rainfall in most years. Cherrapunji held the record longer and has more tourist infrastructure. For travelers: Cherrapunji is far more accessible and has better sights (Nohkalikai, root bridges, caves)." },
                { q: "How difficult is the Nongriat root bridge trek?", a: "Challenging but accessible for reasonably fit people. The path is 5 km one way with 3,500 steps — mostly downhill going (easier on legs, harder on knees), uphill returning (cardiovascular). No technical climbing required. Trekking poles recommended. The 10-hour round trip (including swimming time) is better split as a half-day with an early start." },
                { q: "What is the legend of Nohkalikai Falls?", a: "'Nohkalikai' means 'jump of Ka Likai' in Khasi. Legend: Ka Likai (a Khasi woman) was a devoted mother who was remarried. Her new husband, jealous of her attention to her daughter, killed and cooked the child. Ka Likai, unaware, ate the meal. When she found her daughter's fingers (the only remains), she went mad and jumped off the plateau. The falls bear her name." },
                { q: "Can I combine Cherrapunji and Mawlynnong in 2 days?", a: "Yes — from Shillong: Day 1 Cherrapunji (55 km west), Day 2 Mawlynnong (90 km east). Both are accessible from Shillong as day trips. The Nongriat root bridge trek requires a full day — it cannot be combined with Mawlynnong. If doing both root bridges (Nongriat + Mawlynnong), allocate separate full days from Shillong." },
                { q: "What is the best base for visiting Cherrapunji?", a: "Shillong (55 km, 1.5 hrs) is the best base — it has accommodation for all budgets, good connectivity, and works as a base for Mawlynnong, Dawki, and Cherrapunji. Staying in Cherrapunji itself is better for the Nongriat trek (early start) but has limited accommodation options." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Continuing Your Meghalaya Journey?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Shillong — 3 Days in the Scotland of the East", href: "/blog/shillong-3-days" },
                { label: "Mawlynnong — Asia's Cleanest Village", href: "/blog/mawlynnong-2-days" },
                { label: "Kaziranga — 3 Days with the One-Horned Rhino", href: "/blog/kaziranga-3-days" },
                { label: "Browse All Northeast India Guides", href: "/#packages" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="cherrapunji-2-days" />
          <RelatedGuides currentSlug="cherrapunji-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
