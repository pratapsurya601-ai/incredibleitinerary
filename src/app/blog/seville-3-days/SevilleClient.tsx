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

const SEVILLE_TOC = [
  { id: "plans",       emoji: "⚡", label: "Which Plan Are You?" },
  { id: "practical",   emoji: "✧", label: "Practical Info" },
  { id: "itineraries", emoji: "✧", label: "The Itineraries" },
  { id: "budget",      emoji: "✧", label: "Budget Breakdown" },
  { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "✧", label: "Pro Tips" },
  { id: "faq",         emoji: "❓", label: "FAQ" },
];

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => { const el = document.documentElement; setProgress(Math.min(100, (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100)); };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (<div className="fixed top-0 left-0 right-0 z-[300] h-1 bg-parchment-2"><div className="h-full bg-gold transition-all duration-100" style={{ width: `${progress}%` }} /></div>);
}

function ShareBar() {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      {[
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Seville 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Seville in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
      ].map((s) => (<a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}>{s.label}</a>))}
      <button onClick={copy} className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">{copied ? "✓ Copied" : "Copy Link"}</button>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (<div className="bg-white rounded-xl border border-parchment-2 p-4 text-center"><div className="text-2xl mb-1">{icon}</div><p className="font-serif text-lg font-light text-ink">{value}</p><p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{label}</p></div>);
}

function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors">
        <div className="flex items-center gap-3 text-left"><span className="font-serif text-xl text-amber-900 font-light">{day}</span><span className="text-sm text-ink font-medium">{title}</span></div>
        <span className="text-muted text-lg">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (<div className="p-5"><ul className="space-y-2.5 mb-4">{items.map((item, i) => (<li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed"><span className="text-amber-800 mt-1 flex-shrink-0 text-xs">{"●"}</span>{item}</li>))}</ul><div className="pt-3 border-t border-parchment-2 flex items-center gap-2"><span className="text-lg">{"\uD83D\uDCB0"}</span><span className="text-xs text-muted font-light">Est. cost: </span><span className="text-xs font-medium text-ink">{cost}</span></div></div>)}
    </div>
  );
}

function TipCard({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
  return (<div className={`rounded-xl p-5 border ${color}`}><div className="flex items-start gap-3"><span className="text-xl flex-shrink-0">{icon}</span><div><p className="font-medium text-sm text-stone-900 mb-1">{title}</p><p className="text-xs text-gray-700 font-light leading-relaxed">{desc}</p></div></div></div>);
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors">
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (<div className="px-5 pb-5 pt-1 border-t border-parchment-2"><p className="text-sm text-muted font-light leading-relaxed">{a}</p></div>)}
    </div>
  );
}

export default function SevilleClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "€40–70/day ($43–$76)", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "✨", label: "Comfortable", sub: "€80–150/day ($86–$162)", color: "border-blue-300 bg-blue-50 text-blue-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={SEVILLE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Seville" />

      <main className="bg-cream min-h-screen">
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="seville plaza de espana architecture sunset"
            fallback="https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=1600&q=85"
            alt="Plaza de Espana Seville at sunset"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link><span>/</span>
              <span className="text-white/70">Seville 3 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Heritage & Flamenco</span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">{"·"}</span><span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">{"·"}</span><span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Seville in 3 Days: The Only Guide You Need
                <em className="italic text-gold-light"> (Budget to Comfortable, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                2 complete plans with real timings, actual costs in EUR and USD &mdash; the Alcazar, flamenco, and the orange-scented streets most tourists rush through.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>{"\uD83C\uDDEA\uD83C\uDDF8"} Spain</span><span>{"·"}</span>
              <span>{"\uD83D\uDDD3"} 3 Days</span><span>{"·"}</span>
              <span>{"\uD83D\uDCB0"} From €120</span>
            </div>
          </div>

          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Real Alcazar is more beautiful than the Alhambra and I will die on this hill. Book the upstairs Royal Apartments &mdash; &euro;4.50 extra and you&apos;ll have rooms to yourself while everyone else crowds the ground floor.
            </p>
          </blockquote>

          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your budget level.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} {"→"}</p>
                </button>
              ))}
            </div>
          </section>

          <section id="practical" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"✧"} Before You Go</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">Essential Seville info.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Visa Requirements", emoji: "\uD83D\uDCC4", bg: "bg-blue-50 border-blue-200", th: "text-blue-800",
                  rows: [["Indian passport","Schengen visa required — apply at BLS/VFS, €80 fee, 15 working days"],["US / UK / AU / CA","Visa-free for 90 days within 180 days"],["Documents","Return flight, hotel booking, travel insurance (€30k medical minimum), bank statements"]],
                  note: "Same Schengen visa covers Spain, France, Italy, etc. One visa = 27 countries." },
                { title: "Getting Around", emoji: "\uD83D\uDEB6", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Walking","Seville’s old town is entirely walkable. Cathedral to Plaza de Espana = 10 min walk."],["Metro/Tram","1 metro line + 1 tram line. €1.40 single ride. Useful for airport transfer only."],["Bike","Sevici bike-share: €13.33/week, first 30 min free each ride. Seville is flat = perfect for cycling."],["Airport","SVQ bus EA to city centre: €4, 35 min. Taxi: €22–30 fixed rate."]],
                  note: "Seville is small and flat. Walking + Sevici bikes covers 95% of what you need. Save money on transport." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}><span>{area.emoji}</span>{area.title}</h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (<div key={k} className="flex gap-2 text-xs"><span className="font-medium text-ink/80 w-24 flex-shrink-0">{k}</span><span className="text-muted font-light">{v}</span></div>))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">{"\u26A0\uFE0F"} {area.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink font-light leading-relaxed">
                <strong className="font-medium text-ink">Heat warning:</strong> Seville is the hottest city in continental Europe. July&ndash;August hits 40&ndash;45&deg;C regularly. Plan outdoor sightseeing before 11am or after 6pm. Siesta is not optional here &mdash; it&apos;s survival.
              </p>
            </div>
          </section>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="3 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="€120" />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Mar – May" />
            <StatCard icon={"\u2708\uFE0F"} label="Airport" value="SVQ" />
          </div>

          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"✧"} The Itineraries</h2>
            <p className="text-sm text-muted font-light mb-6">Click a plan &mdash; days are expandable/collapsible.</p>

            <div className="flex gap-2 flex-wrap mb-8 p-1 bg-parchment rounded-xl">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 ${activeTab === p.id ? "bg-white shadow text-ink border border-parchment-2" : "text-muted hover:text-ink"}`}>{p.emoji} {p.label}</button>
              ))}
            </div>

            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDCB0"}</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; Santa Cruz / Alameda Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Hostel or budget hotel &middot; &euro;20&ndash;40/night &middot; Walking + Sevici bike</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Real Alcazar + Cathedral + Santa Cruz"
                  items={[
                    "9am: Real Alcazar — €14.50 entry (book online for first slot). Arrive at opening for the Patio de las Doncellas nearly empty.",
                    "Add the Royal Apartments upstairs for €4.50 — most visitors don’t know they exist and you’ll have ornate rooms entirely to yourself.",
                    "The gardens are the highlight. Budget 2–2.5 hours total. The Alcazar was a filming location for Game of Thrones (Dorne).",
                    "11:30am: Seville Cathedral — €12 entry (includes Giralda tower climb). The world’s largest Gothic cathedral. Climb the 35 ramps to the top of the Giralda for 360-degree views.",
                    "1:30pm: Lunch in Santa Cruz neighbourhood — menu del dia €9–13 at a plaza restaurant. Try salmorejo (cold tomato soup) — Seville’s signature dish.",
                    "3pm: Siesta. Seriously. The afternoon heat will break you. Rest until 5:30pm.",
                    "6pm: Walk Santa Cruz’s narrow whitewashed streets — free, orange trees overhead, hidden plazas around every corner",
                    "9pm: Tapas in Alameda de Hercules area — €2–4 per tapa, beer €1.50–2",
                  ]}
                  cost="€35–60 excluding accommodation" />
                <DayCard day="Day 2" title="Plaza de Espana + Triana + Flamenco"
                  items={[
                    "9am: Plaza de Espana — free entry. The most stunning plaza in Europe. The ceramic tile alcoves represent each Spanish province. Arrive early for photos without crowds.",
                    "Rowboat on the canal (€6 for 35 min). Totally worth it for the perspective of the building from the water.",
                    "10:30am: Maria Luisa Park — free. Walk through the park to the Archaeological Museum (€1.50) or just enjoy the peacocks and gardens.",
                    "12pm: Walk across the Triana Bridge to Triana neighbourhood — the birthplace of flamenco and ceramic tiles",
                    "12:30pm: Mercado de Triana — food market built on the ruins of the Inquisition castle. Tapas at the counters, €6–12 for a plate and beer.",
                    "2pm: Explore Triana’s ceramic workshops on Calle Alfareria — free to browse, tiles from €3",
                    "4pm: Siesta or riverside walk along the Guadalquivir",
                    "9pm: Flamenco show at a peña (local club) in Triana — €10–20 entry with drink. More authentic than tourist venues.",
                  ]}
                  cost="€25–50 excluding accommodation" />
                <DayCard day="Day 3" title="Metropol Parasol + Macarena + Departure"
                  items={[
                    "9am: Metropol Parasol (Las Setas) — €5 entry to the rooftop walkway. The world’s largest wooden structure with sweeping city views.",
                    "The underground Antiquarium (€2) shows Roman ruins discovered during construction. Worth 20 minutes.",
                    "10:30am: Walk through Macarena neighbourhood — less touristy, more local. The old city walls and Basilica de la Macarena (free).",
                    "12pm: Lunch at Mercado de la Feria or a Macarena tapas bar — €8–14",
                    "2pm: Last walk through the centre. Pick up Turrón (Spanish nougat) or olive oil as gifts.",
                    "Optional: Casa de Pilatos (€12) — a stunning palace that combines Gothic, Renaissance, and Mudejar styles. Often empty.",
                    "4pm: Airport bus (€4, 35 min from Prado de San Sebastian station)",
                  ]}
                  cost="€25–45 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">€120–210 ($130–$227 USD) including accommodation</span>
                </div>
              </div>
            )}

            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">{"✨"}</span>
                  <div>
                    <p className="text-sm font-medium text-blue-800">Comfortable Plan &mdash; Santa Cruz / Centro Base</p>
                    <p className="text-xs text-blue-600 font-light">Stay: Boutique hotel or converted palace &middot; &euro;60&ndash;100/night &middot; Walking + occasional taxi</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Real Alcazar + Cathedral + Rooftop Sunset"
                  items={[
                    "9am: Real Alcazar first entry slot — €14.50 + €4.50 Royal Apartments. The upstairs apartments are the secret highlight. Book online.",
                    "The Patio de las Doncellas, Hall of Ambassadors, and the multi-layered gardens deserve 2.5–3 hours of slow exploration.",
                    "12pm: Cathedral + Giralda (€12). The Giralda was originally a minaret — you walk up ramps, not stairs. The Columbus tomb is in the south transept.",
                    "2pm: Lunch at Eslava (tapas with a Michelin recommendation, €15–25) or Enrique Becerra (€18–30 for traditional Andalusian)",
                    "4pm: Siesta or rooftop pool at your hotel (many boutique hotels in Santa Cruz have them)",
                    "6:30pm: Horse-drawn carriage tour through Maria Luisa Park (€45 for 45 min, up to 4 people)",
                    "8pm: Sunset drinks at EME Catedral rooftop bar — €10–15 for cocktails with the Cathedral right beside you",
                    "10pm: Dinner at Abantal (Michelin star, €50–80 tasting menu) or La Brunilda (€20–30 creative tapas, book ahead)",
                  ]}
                  cost="€70–120 excluding accommodation" />
                <DayCard day="Day 2" title="Plaza de Espana + Triana + Premium Flamenco"
                  items={[
                    "8:30am: Plaza de Espana at dawn — arrive before 9am for the light hitting the ceramic tiles. Empty except for joggers and photographers.",
                    "10am: Maria Luisa Park walk to the Museum of Popular Arts and Traditions (€1.50) for Andalusian culture",
                    "11:30am: Walk to Triana across Isabel II Bridge. Browse ceramic workshops on Calle Alfareria.",
                    "1pm: Lunch at Casa Cuesta (Triana’s oldest tapas bar, since 1880) — €12–20 for traditional plates",
                    "3pm: Triana ceramic museum (free) + river walk along the Guadalquivir",
                    "5pm: Wine tasting at a local bodega — €15–25 for manzanilla and fino sherry tasting with olives",
                    "7pm: Shopping in the centre or coffee at the Alfonso XIII hotel (the lobby is spectacular, free to enter)",
                    "9:30pm: Flamenco at La Casa del Flamenco (€22) or Museo del Baile Flamenco (€26) — intimate venues, real passion",
                    "11pm: Late dinner in Alameda de Hercules — €15–25",
                  ]}
                  cost="€60–110 excluding accommodation" />
                <DayCard day="Day 3" title="Metropol Parasol + Casa de Pilatos + Farewell"
                  items={[
                    "9am: Metropol Parasol rooftop (€5) for morning city views and the Antiquarium Roman ruins below",
                    "10:30am: Casa de Pilatos (€12) — a 16th-century palace with Mudejar tiles, Roman sculptures, and a courtyard that rivals the Alcazar. Usually empty.",
                    "12pm: Walk through the old Jewish quarter — narrow streets, hidden patios, Seville’s oldest neighbourhood",
                    "1:30pm: Farewell lunch at Contenedor (€15–25 for creative seasonal menu) or traditional at El Rinconcillo (Seville’s oldest bar, since 1670)",
                    "Optional: Archivo de Indias (free) — documents from the Spanish colonisation of the Americas, next to the Cathedral",
                    "4pm: Last orange-tree-lined walk through Santa Cruz before airport",
                    "Airport bus (€4) or taxi (€22–30 fixed rate)",
                  ]}
                  cost="€40–70 excluding accommodation" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-blue-700 uppercase tracking-wide">Total 3-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">€350–600 ($378–$648 USD) including accommodation</span>
                </div>
              </div>
            )}
          </section>

          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead><tr className="bg-ink"><th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th><th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"\uD83D\uDCB0"} Budget</th><th className="p-3.5 text-xs font-medium text-blue-300 text-center">{"✨"} Comfortable</th></tr></thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "€60–120", "€180–300"],
                    ["\uD83C\uDF7D Food & Drinks", "€30–50", "€70–130"],
                    ["\uD83D\uDEB6 Transport", "€5–15", "€15–35"],
                    ["\uD83C\uDFAF Activities", "€25–45", "€55–100"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["€120–210\n($130–$227)","€350–600\n($378–$648)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center whitespace-pre-line">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">All prices in EUR (2026). Seville is one of the cheapest major cities in Western Europe.</p>
          </section>

          <DestinationGallery
            title="Seville — Must-See Places"
            subtitle="Click each thumbnail to explore Seville's most beautiful landmarks."
            spots={[
              { name: "Real Alcazar",       query: "real alcazar seville patio doncellas moorish architecture tiles",       desc: "A royal palace more beautiful than the Alhambra. EUR 14.50 entry. Book the upstairs Royal Apartments for EUR 4.50 extra." },
              { name: "Plaza de Espana",    query: "plaza de espana seville semicircle architecture ceramic tiles canal",   desc: "The most stunning plaza in Europe. Free entry. Arrive at dawn for empty photos. Rowboat on the canal for EUR 6." },
              { name: "Seville Cathedral",  query: "seville cathedral interior gothic architecture columns light",           desc: "The world's largest Gothic cathedral. EUR 12 includes the Giralda tower climb with 360-degree views of the city." },
              { name: "Triana Bridge",      query: "triana bridge seville guadalquivir river sunset architecture",           desc: "The gateway to Triana, birthplace of flamenco. Cross at sunset for the best view of the old city reflected in the river." },
              { name: "Metropol Parasol",   query: "metropol parasol seville wooden structure modern architecture rooftop",  desc: "The world's largest wooden structure. EUR 5 for rooftop access with sweeping city views and an underground Roman museum." },
            ]}
          />

          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="real alcazar seville gardens palm trees architecture moorish"
              fallback="https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=900&q=80"
              alt="Real Alcazar gardens Seville"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Real Alcazar gardens &mdash; layers of Moorish, Gothic, and Renaissance design over 1,000 years. The upstairs Royal Apartments are the secret most visitors miss.
              </p>
            </div>
          </div>

          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting in July or August", desc: "40–45°C is not a joke. Outdoor sightseeing is genuinely dangerous between 12–5pm. March–May and October are infinitely better.", icon: "\u2600\uFE0F" },
                { title: "Not booking Alcazar online", desc: "Walk-up queue is 1–2 hours in spring. Book at alcazarsevilla.org for the first 9am slot. Same price, zero waiting.", icon: "\uD83C\uDFAB" },
                { title: "Skipping the Royal Apartments", desc: "EUR 4.50 extra at the Alcazar gets you the upstairs apartments that 80% of visitors miss. Ornate rooms, virtually empty, and the best views of the gardens.", icon: "\uD83C\uDFF0" },
                { title: "Tourist flamenco shows", desc: "The EUR 35–45 dinner shows are watered-down performances. Spend EUR 15–22 at a peña or intimate venue in Triana for genuine, passionate flamenco.", icon: "\uD83D\uDC83" },
                { title: "Eating at tourist restaurants on main plazas", desc: "Double the price, half the quality. Walk one street back from any major plaza and the food improves dramatically.", icon: "\uD83C\uDF7D" },
              ].map((m) => (<TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />))}
            </div>
          </section>

          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\uD83C\uDF05", title: "Plaza de Espana at Dawn", desc: "Arrive before 9am. The morning light hits the ceramic tiles perfectly, and you’ll have the entire plaza to yourself for photos.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF7A", title: "Tapas are Cheap Here", desc: "Seville has the cheapest tapas in Spain. EUR 2–4 per tapa, EUR 1.50–2 per beer. Many bars in Alameda and Triana serve free tapas with drinks.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDEB2", title: "Sevici Bike-Share", desc: "EUR 13.33/week, first 30 min free each ride. Seville is flat with dedicated bike lanes. Faster than walking, cheaper than taxis, and genuinely enjoyable.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDF4A", title: "Orange Trees Everywhere", desc: "The bitter oranges on Seville’s trees are not for eating — they’re for marmalade (exported to the UK). But the scent in spring is intoxicating.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDFB6", title: "Flamenco in Triana", desc: "Skip the big tourist venues. The peñas (local flamenco clubs) in Triana offer raw, passionate performances for EUR 10–20 with a drink included.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83E\uDD63", title: "Salmorejo, Not Gazpacho", desc: "Seville’s signature dish is salmorejo — a thicker, creamier cold tomato soup topped with ham and egg. Order it everywhere. It’s better than gazpacho.", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want This Planned for You?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Seville itinerary within 24 hours. Free.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Seville Trip {"→"}</button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days do you need in Seville?", a: "3 days is perfect. Covers Alcazar, Cathedral, Plaza de Espana, Triana, and flamenco. 4+ days lets you add day trips to Cordoba (45 min AVE) or Ronda (1.5 hrs)." },
                { q: "Is Seville expensive?", a: "One of the cheapest major cities in Western Europe. Tapas EUR 2–4, beer EUR 1.50–2, menu del dia EUR 9–13. You can eat well for under EUR 20/day." },
                { q: "Is the Real Alcazar worth it?", a: "Absolutely. Many visitors rank it above the Alhambra in Granada. Book the first 9am slot online and add the Royal Apartments for EUR 4.50 extra." },
                { q: "Do I need a visa for Spain?", a: "Indian passport holders need a Schengen visa (EUR 80, apply 3 months ahead). US, UK, AU, CA citizens visit visa-free for 90 days within 180 days." },
                { q: "What is the best time to visit Seville?", a: "March–May (Semana Santa in April, Feria in May) and October–November. June–August is 40–45°C. December–February is mild and cheapest." },
                { q: "Where should I watch flamenco?", a: "Triana neighbourhood peñas for authentic shows (EUR 10–20). La Casa del Flamenco and Museo del Baile Flamenco for intimate seated performances (EUR 22–26). Skip the big dinner shows." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <AffiliateBlock
            destination="Seville"
            hotels={[
              { name: "Oasis Backpackers", type: "Rooftop Hostel · Centro", price: "From €22/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/es/oasis-seville.html?aid=2820480" },
              { name: "Hotel Rey Alfonso X", type: "Boutique · Centro", price: "From €80/night", rating: "4", badge: "Best value", url: "https://www.booking.com/hotel/es/rey-alfonso-x.html?aid=2820480" },
              { name: "Hotel Alfonso XIII", type: "Historic Luxury · Centro", price: "From €350/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/es/alfonso-xiii.html?aid=2820480" },
            ]}
            activities={[
              { name: "Real Alcazar Skip-the-Line", duration: "2 hours", price: "From €14.50", badge: "Must do", url: "https://www.getyourguide.com/s/?q=seville&partner_id=PSZA5UI" },
              { name: "Authentic Flamenco Show", duration: "1.5 hours", price: "From €22", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=seville&partner_id=PSZA5UI" },
              { name: "Cordoba Day Trip by AVE", duration: "Full day", price: "From €40", badge: "Day trip", url: "https://www.getyourguide.com/s/?q=seville&partner_id=PSZA5UI" },
              { name: "Seville Tapas Walking Tour", duration: "3 hours", price: "From €30", url: "https://www.getyourguide.com/s/?q=seville&partner_id=PSZA5UI" },
            ]}
          />

          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Spain Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Barcelona — 4 Day Guide", href: "/blog/barcelona-4-days" },
                { label: "Madrid — 3 Day Guide", href: "/blog/madrid-3-days" },
                { label: "Browse All Itineraries", href: "/blog" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View {"→"}</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="seville-3-days" />
          <RelatedGuides currentSlug="seville-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
