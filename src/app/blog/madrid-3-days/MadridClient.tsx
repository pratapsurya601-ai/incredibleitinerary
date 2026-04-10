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

const MADRID_TOC = [
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
  const pageUrl = usePageUrl();
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      {[
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Madrid 3-Day Itinerary&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Madrid in 3 Days guide&url=${pageUrl}` },
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

export default function MadridClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "€45–80/day ($49–$86)", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "✨", label: "Comfortable", sub: "€90–170/day ($97–$184)", color: "border-blue-300 bg-blue-50 text-blue-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MADRID_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Madrid" />

      <main id="main-content" className="bg-cream min-h-screen">
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="madrid royal palace architecture spain"
            fallback="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1600&q=85"
            alt="Madrid Royal Palace"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link><span>/</span>
              <span className="text-white/70">Madrid 3 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Art & Culture</span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">{"·"}</span><span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">{"·"}</span><span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Madrid in 3 Days: The Only Guide You Need
                <em className="italic text-gold-light"> (Budget to Comfortable, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                2 complete plans with real timings, actual costs in EUR and USD &mdash; and the tapas bars, art, and rhythms of the city that never sleeps until 3am.
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
              <span>{"\uD83D\uDCB0"} From €135</span>
            </div>
          </div>

          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Madrid doesn&apos;t eat dinner until 10pm and doesn&apos;t go out until midnight. If you&apos;re eating at 7pm, you&apos;re eating alone. Adjust your clock or miss the real city.
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
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">Essential Madrid info.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Visa Requirements", emoji: "\uD83D\uDCC4", bg: "bg-blue-50 border-blue-200", th: "text-blue-800",
                  rows: [["Indian passport","Schengen visa required — apply at BLS/VFS, €80 fee, 15 working days"],["US / UK / AU / CA","Visa-free for 90 days within any 180-day period"],["Documents","Return flight, hotel booking, travel insurance (€30k medical minimum), bank statements"]],
                  note: "Same Schengen visa covers all of Spain, France, Italy, Germany, etc. One visa = 27 countries." },
                { title: "Getting Around", emoji: "\uD83D\uDE87", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Metro","13 lines, €1.50–2 single ride. 10-trip Metrobus card €12.20. Covers all tourist areas."],["Walking","Central Madrid is very walkable. Prado to Royal Palace = 25 min walk through the heart of the city."],["Airport","MAD Cercanias C1 to Sol: €2.60, 25 min. Express bus: €5. Avoid taxis (€30+)."],["Tipping","Not expected in Spain. Rounding up or leaving small change is appreciated but optional."]],
                  note: "The 10-trip Metrobus card works on both metro and bus. Best value for 3 days." },
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
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Madrid schedule:</strong> Breakfast 8&ndash;10am. Lunch 2&ndash;3:30pm (the big meal). Siesta 3:30&ndash;5pm (shops close). Merienda (snack) 5&ndash;7pm. Dinner 9:30&ndash;11pm. Nightlife starts after midnight.
              </p>
            </div>
          </section>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="3 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="€135" />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Apr – Jun" />
            <StatCard icon={"\u2708\uFE0F"} label="Airport" value="MAD" />
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
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; Sol / La Latina Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Hostel or budget hotel &middot; &euro;25&ndash;45/night &middot; Metrobus + walking</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Royal Palace + Old Madrid + Tapas Crawl"
                  items={[
                    "9am: Royal Palace of Madrid — €12 entry (free Mon–Sat 5–7pm for EU citizens). Arrive at 9am for the shortest queue. Budget 1.5 hours.",
                    "The armoury collection and throne room are the highlights. Skip the guided tour — the audio guide (€4) is better.",
                    "11am: Walk to Plaza Mayor through the old town (10 min). Coffee at a side-street cafe, not on the plaza (€2 vs €5).",
                    "12pm: Mercado de San Miguel — free to enter, gourmet tapas market. Beautiful but touristy. Good for one visit.",
                    "1:30pm: Walk to La Latina neighbourhood for lunch. Menu del dia at a local restaurant — €10–14 for 3 courses + wine.",
                    "4pm: Retiro Park — free. The Crystal Palace (free, check if exhibition is on), the lake (rowboat €6 for 45 min), and the Rosaleda garden.",
                    "7pm: Sunset from Templo de Debod — free, Egyptian temple donated to Spain. The best sunset viewpoint in central Madrid.",
                    "9:30pm: Tapas crawl in La Latina. Start at Casa Lucio (famous huevos rotos, €12) then Juana la Loca (€2–4 per pintxo).",
                  ]}
                  cost="€30–55 excluding accommodation" />
                <DayCard day="Day 2" title="Prado + Reina Sofia + Literary Quarter"
                  items={[
                    "9:30am: Prado Museum — €15 entry (free Mon–Sat 6–8pm). Book online to skip the queue. The Velazquez and Goya rooms alone justify the visit.",
                    "Budget 2–3 hours. Get the floor plan at the entrance. Don’t try to see everything — focus on the Spanish Masters wing.",
                    "12:30pm: Walk through the Paseo del Arte to Reina Sofia (15 min). €12 entry (free Mon + Wed–Sat 7–9pm).",
                    "Guernica by Picasso is here. It’s bigger than you expect and more powerful in person. Room 206.",
                    "2:30pm: Lunch in Barrio de las Letras (Literary Quarter) — €10–15 menu del dia. Streets named after Cervantes, Lope de Vega.",
                    "5pm: Explore Malasaña neighbourhood — Madrid’s coolest barrio. Vintage shops, street art, independent cafes on every corner.",
                    "8pm: Vermouth hour at a traditional bar on Calle Cava Baja — vermouth + olives €3–5",
                    "10pm: Dinner at Casa Toni for patatas bravas (€3) then La Barraca for paella (€14 sharing portion)",
                  ]}
                  cost="€35–60 excluding accommodation" />
                <DayCard day="Day 3" title="Day Trip to Toledo OR Madrid Deep Dive"
                  items={[
                    "Option A — Toledo: Train from Atocha (€13 return, 33 min). A UNESCO World Heritage city where Christian, Muslim, and Jewish heritage blend.",
                    "Toledo Cathedral (€12.50), Alcazar (free with EU ID), and the old town streets are the highlights. Budget the full day.",
                    "Option B — Madrid: Thyssen-Bornemisza Museum (€13, free Mondays), Salamanca district for shopping, Chueca for lunch.",
                    "2pm: Lunch — Toledo: Restaurante Adolfo or budget spots in the Jewish Quarter. Madrid: Mercado de San Anton in Chueca.",
                    "5pm: Return to Madrid if in Toledo. Gran Via walk — Madrid’s Broadway, great for window shopping and architecture.",
                    "7:30pm: Sunset at Circulo de Bellas Artes rooftop (€5 entry) — panoramic views of the entire city",
                    "10pm: Final dinner in Sol area. If Sunday: El Rastro flea market morning (free, 9am–3pm) replaces Toledo/museum.",
                  ]}
                  cost="€40–70 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">€135–240 ($146–$259 USD) including accommodation</span>
                </div>
              </div>
            )}

            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">{"✨"}</span>
                  <div>
                    <p className="text-sm font-medium text-blue-800">Comfortable Plan &mdash; Chueca / Malasa&ntilde;a Base</p>
                    <p className="text-xs text-blue-600 font-light">Stay: Boutique hotel &middot; &euro;70&ndash;120/night &middot; Metro + occasional taxi</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Royal Palace + Art Walk + Rooftop Sunset"
                  items={[
                    "9am: Royal Palace — €12. The State Rooms, Royal Pharmacy, and Crown Jewels. Budget 2 hours.",
                    "11:30am: Almudena Cathedral (free, next to palace) then walk through Plaza de Oriente",
                    "12:30pm: Mercado de San Miguel for gourmet tapas sampling — €15–25 for a few plates and cava",
                    "2pm: Lunch at Sobrino de Botín (world’s oldest restaurant, €30–45) or Botín-adjacent La Posada de la Villa (€20–30)",
                    "4:30pm: Retiro Park — rowboat on the lake (€6), Crystal Palace, then walk through the Rosaleda at golden hour",
                    "7pm: Templo de Debod sunset (free) — the sky behind the Egyptian temple turns orange and pink",
                    "9pm: Cocktails at Salmon Guru (one of the world’s best cocktail bars, €12–16)",
                    "10pm: Dinner at StreetXO (Dabiz Muñoz’s casual concept, €25–40) or Lateral for modern Spanish (€20–35)",
                  ]}
                  cost="€80–140 excluding accommodation" />
                <DayCard day="Day 2" title="Prado + Reina Sofia + Food Market + Flamenco"
                  items={[
                    "9:30am: Prado Museum — €15, book the first slot online. The Velazquez rooms (Las Meninas), Goya’s Black Paintings, and El Greco deserve 2–3 focused hours.",
                    "12:30pm: Walk to Reina Sofia (€12). Guernica, Dali, and Miro. Budget 1.5 hours focused on the 2nd floor.",
                    "2:30pm: Lunch at Taberna de la Daniela for cocido madrileño (Madrid’s signature chickpea stew, €20–28)",
                    "4:30pm: Barrio de las Letras + Huertas neighbourhood walk. Bookshops, wine bars, and literary history on every corner.",
                    "6pm: Shopping in Salamanca district or vintage shopping in Malasaña",
                    "8:30pm: Flamenco show at Corral de la Moreria or Cardamomo (€40–55 with drink). Book 1 week ahead.",
                    "10:30pm: Late dinner in La Latina — Casa Lucio for huevos rotos (€15–25) or Cava Baja tapas crawl",
                  ]}
                  cost="€100–170 excluding accommodation" />
                <DayCard day="Day 3" title="Toledo Day Trip OR Thyssen + Neighbourhoods"
                  items={[
                    "Option A — Toledo: High-speed AVE train (€13 return, 33 min). Cathedral, Alcázar, and wandering the UNESCO old town.",
                    "Lunch at a toledo restaurant — €15–25 for carcamusas (pork stew) and local wine",
                    "Option B: Thyssen-Bornemisza Museum (€13) morning, then Chueca + Malasaña neighbourhood exploration",
                    "4pm: Return from Toledo. Gran Via walk for architecture and energy",
                    "6pm: Sunset from Círculo de Bellas Artes rooftop (€5) — best panorama in Madrid",
                    "8pm: Vermouth and olives at any traditional bar near Sol",
                    "10pm: Farewell dinner at DSTAgE (2 Michelin stars, €120–180, book 2 weeks ahead) or La Barraca for paella (€18–28)",
                  ]}
                  cost="€80–150 excluding accommodation" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-blue-700 uppercase tracking-wide">Total 3-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">€480–870 ($518–$940 USD) including accommodation</span>
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
                    ["\uD83C\uDFE8 Accommodation (3N)", "€75–135", "€210–360"],
                    ["\uD83C\uDF7D Food & Drinks", "€35–60", "€80–150"],
                    ["\uD83D\uDE87 Transport", "€10–20", "€25–50"],
                    ["\uD83C\uDFAF Activities", "€15–40", "€60–120"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["€135–240\n($146–$259)","€480–870\n($518–$940)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center whitespace-pre-line">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">All prices in EUR (2026). Madrid is one of the most affordable Western European capitals.</p>
          </section>

          <DestinationGallery
            title="Madrid — Must-See Places"
            subtitle="Click each thumbnail to explore Madrid's most iconic landmarks."
            spots={[
              { name: "Royal Palace",     query: "madrid royal palace exterior architecture plaza armeria",               desc: "Europe's largest functioning royal palace. EUR 12 entry. Arrive at 9am for the shortest queues." },
              { name: "Prado Museum",     query: "prado museum madrid interior gallery paintings architecture",           desc: "One of the world's greatest art collections. Velazquez, Goya, El Greco. Free Mon-Sat 6-8pm." },
              { name: "Retiro Park",      query: "retiro park madrid crystal palace lake rowboat nature",                 desc: "Madrid's green heart. Free entry. The Crystal Palace and rowboats on the lake are highlights." },
              { name: "Plaza Mayor",      query: "plaza mayor madrid architecture square historic buildings",              desc: "Madrid's grand central square. Best for a morning coffee from a side street, not the overpriced plaza cafes." },
              { name: "Templo de Debod",  query: "templo de debod madrid sunset egyptian temple silhouette",              desc: "An actual Egyptian temple in Madrid. Free entry. The best sunset viewpoint in the city." },
            ]}
          />

          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="madrid retiro park crystal palace lake autumn architecture"
              fallback="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=900&q=80"
              alt="Retiro Park Crystal Palace Madrid"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Retiro Park &mdash; free entry, rowboats for EUR 6, and the Crystal Palace hosts rotating exhibitions. The locals&apos; living room on weekends.
              </p>
            </div>
          </div>

          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Eating dinner before 9pm", desc: "You’ll be sitting alone in an empty restaurant. Madrid doesn’t eat until 9:30–10:30pm. Plan your day accordingly.", icon: "\u23F0" },
                { title: "Eating on Plaza Mayor", desc: "EUR 15 for a bad bocadillo. Walk 2 blocks to any side street and get the same (better) food for EUR 5. The plaza is for photos, not food.", icon: "\uD83C\uDF54" },
                { title: "Trying to see the entire Prado", desc: "The Prado has 8,000+ works. Pick 2–3 rooms you care about most and go deep, rather than speed-walking through everything.", icon: "\uD83C\uDFDB\uFE0F" },
                { title: "Skipping the menu del dia", desc: "3-course lunch with bread and drink for €10–15 at nearly every neighbourhood restaurant on weekdays. This is how Madrid eats affordably.", icon: "\uD83D\uDCB0" },
                { title: "Visiting in July/August", desc: "40°C+ heat. The city empties as locals flee to the coast. Many neighbourhood restaurants close for August. April–June is ideal.", icon: "\u2600\uFE0F" },
              ].map((m) => (<TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />))}
            </div>
          </section>

          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\uD83C\uDF7A", title: "Free Tapas with Drinks", desc: "Many bars in La Latina and Lavapiés serve free tapas with every beer or wine (€2.50–4). Order 3 drinks, get 3 tapas. A genuine Madrid tradition.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDFDB\uFE0F", title: "Free Museum Hours", desc: "Prado: free Mon–Sat 6–8pm. Reina Sofia: free Mon + Wed–Sat 7–9pm. Royal Palace: free Mon–Sat 5–7pm (EU citizens). Plan around these.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF05", title: "Templo de Debod Sunset", desc: "An actual Egyptian temple with the best sunset view in central Madrid. Free. Arrive 30 min before sunset to get a good spot on the wall.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDF77", title: "Vermouth Culture", desc: "Sunday noon vermouth at a traditional bar is a Madrid institution. Vermouth on tap + olives + conservas (tinned seafood) for €5–8. Join the locals.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDE87", title: "10-Trip Metrobus Card", desc: "€12.20 for 10 rides on metro + bus. Shareable between travellers. Each ride costs €1.22 vs €1.50–2 for single tickets.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83C\uDF1F", title: "El Rastro on Sunday", desc: "Madrid’s famous flea market, every Sunday 9am–3pm in La Latina. Free. Even if you don’t buy anything, the atmosphere is pure Madrid.", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want This Planned for You?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Madrid itinerary within 24 hours. Free.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Madrid Trip {"→"}</button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days do you need in Madrid?", a: "3 days is ideal for the museums, Royal Palace, neighbourhoods, and a day trip to Toledo. 4–5 days lets you go deeper into the art scene and add Segovia." },
                { q: "Is Madrid cheaper than Barcelona?", a: "Generally yes. Accommodation is 10–20% cheaper, food is 10–15% cheaper, and Madrid has more free attractions and free museum hours. The menu del dia culture is stronger in Madrid." },
                { q: "What time does Madrid eat dinner?", a: "9:30–10:30pm is normal dinner time. Restaurants are empty before 9pm. Adjust your schedule: big lunch at 2pm, merienda at 5pm, late dinner at 10pm." },
                { q: "Do I need a visa for Spain?", a: "Indian passport holders need a Schengen visa (€80, apply 3 months ahead). US, UK, AU, CA citizens visit visa-free for 90 days within 180 days." },
                { q: "Is the Toledo day trip worth it?", a: "Absolutely. 33 minutes by high-speed train, €13 return. A UNESCO city where three religions coexisted. The cathedral alone is worth the trip. Budget a full day." },
                { q: "What is the best time to visit Madrid?", a: "April–June and September–November. Perfect walking weather (18–28°C). July–August is 40°C+ and locals flee. December–March is mild but can be cold." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <AffiliateBlock
            destination="Madrid"
            hotels={[
              { name: "The Hat Madrid", type: "Design Hostel · Sol", price: "From €28/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/es/the-hat-madrid.html?aid=2820480" },
              { name: "Only YOU Atocha", type: "Boutique Hotel · Atocha", price: "From €120/night", rating: "5", badge: "Best value", url: "https://www.booking.com/hotel/es/only-you-atocha.html?aid=2820480" },
              { name: "Four Seasons Madrid", type: "Ultra-Luxury · Sol", price: "From €500/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/es/four-seasons-madrid.html?aid=2820480" },
            ]}
            activities={[
              { name: "Prado Museum Skip-the-Line", duration: "2.5 hours", price: "From €15", badge: "Must do", url: "https://www.getyourguide.com/s/?q=madrid&partner_id=PSZA5UI" },
              { name: "Toledo Full Day Trip", duration: "8 hours", price: "From €25", badge: "Day trip", url: "https://www.getyourguide.com/s/?q=madrid&partner_id=PSZA5UI" },
              { name: "Flamenco Show + Tapas Dinner", duration: "3 hours", price: "From €55", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=madrid&partner_id=PSZA5UI" },
              { name: "Madrid Tapas Walking Tour", duration: "3 hours", price: "From €35", url: "https://www.getyourguide.com/s/?q=madrid&partner_id=PSZA5UI" },
            ]}
          />

          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Spain Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Barcelona — 4 Day Guide", href: "/blog/barcelona-4-days" },
                { label: "Seville — 3 Day Guide", href: "/blog/seville-3-days" },
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

          <CombineWith currentSlug="madrid-3-days" />
          <RelatedGuides currentSlug="madrid-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
