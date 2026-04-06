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

const BARCELONA_TOC = [
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Barcelona 4-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Barcelona in 4 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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

export default function BarcelonaClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "€50–90/day ($54–$97)", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "✨", label: "Mid-Range", sub: "€100–180/day ($108–$194)", color: "border-blue-300 bg-blue-50 text-blue-800" },
    { id: "C" as const, emoji: "\uD83D\uDC8E", label: "Luxury", sub: "€250+/day ($270+)", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BARCELONA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Barcelona" />

      <main className="bg-cream min-h-screen">
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="barcelona sagrada familia gaudi architecture"
            fallback="https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1600&q=85"
            alt="Sagrada Familia Barcelona"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link><span>/</span>
              <span className="text-white/70">Barcelona 4 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Architecture & Beach</span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">{"·"}</span><span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/50">{"·"}</span><span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Barcelona in 4 Days: The Only Guide You Need
                <em className="italic text-gold-light"> (Budget to Luxury, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, actual costs in EUR and USD, Sagrada Familia secrets &mdash; and the tapas spots locals actually eat at.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>{"\uD83C\uDDEA\uD83C\uDDF8"} Spain</span><span>{"·"}</span>
              <span>{"\uD83D\uDDD3"} 4 Days</span><span>{"·"}</span>
              <span>{"\uD83D\uDCB0"} From €200</span>
            </div>
          </div>

          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Sagrada Familia without advance booking = 2&ndash;3 hour queue. With a &euro;26 timed ticket = walk straight in. This is non-negotiable. Book at sagradafamilia.org, not third-party resellers who mark up 40%.
            </p>
          </blockquote>

          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your budget level &mdash; jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">Essential Barcelona info.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Visa Requirements", emoji: "\uD83D\uDCC4", bg: "bg-blue-50 border-blue-200", th: "text-blue-800",
                  rows: [["Indian passport","Schengen visa required — apply at BLS/VFS, €80 fee, 15 working days. Book appointment 2–3 months ahead."],["US / UK / AU / CA","Visa-free for 90 days within any 180-day period"],["Documents","Return flight, hotel booking, travel insurance (€30k medical minimum), bank statements (3 months)"]],
                  note: "Spain VFS appointments fill fast in peak season. Apply 3 months before your trip." },
                { title: "Getting Around", emoji: "\uD83D\uDE87", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Metro","8 lines, €2.40 single or T-Casual 10-trip card €11.35. Covers most tourist areas."],["Walking","Central Barcelona is very walkable. Gothic Quarter to Sagrada Familia = 30 min walk."],["Airport","BCN Aerobus to Placa Catalunya: €7.75, 35 min. Metro L9 Sud: €5.15, 45 min. Skip taxis (€40+)."],["Pickpockets","La Rambla, metro, and tourist crowds are hotspots. Use a cross-body bag with zip. Leave passport at hotel."]],
                  note: "T-Casual is the best value for 4 days. 10 rides = €11.35, covers metro + bus + tram within Zone 1." },
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
                <strong className="font-medium text-ink">Timing note:</strong> Barcelona runs on Spanish time. Lunch is 2&ndash;3:30pm, dinner is 9&ndash;11pm. Shops close 2&ndash;5pm for siesta. Adjust your clock or eat alone at 7pm.
              </p>
            </div>
          </section>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="4 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="€200" />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Apr – Jun" />
            <StatCard icon={"\u2708\uFE0F"} label="Airport" value="BCN" />
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
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; Gothic Quarter / El Raval Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Hostel or budget hotel &middot; &euro;25&ndash;50/night &middot; T-Casual + walking</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Sagrada Familia + Park Guell + Gracia"
                  items={[
                    "9am: Sagrada Familia — €26 timed entry (BOOK 2 MONTHS AHEAD). The morning light through the east-facing stained glass turns the interior into a forest of colour.",
                    "Budget 1.5–2 hours inside. The Nativity facade tower add-on (€36 total) is worth it for the spiral staircase views.",
                    "11:30am: Walk to Park Guell (25 min uphill). Monumental Zone: €10 timed entry. Book online. The mosaic bench terrace with city + sea views is the iconic photo spot.",
                    "1:30pm: Walk down into Gracia neighbourhood for lunch. La Pepita for tapas — €8–15 for pintxos and a beer.",
                    "Gracia has the best independent shops and cafes in Barcelona. Wander Placa del Sol and the side streets.",
                    "5pm: Walk La Rambla from top (Placa Catalunya) to bottom (Columbus statue). 20 minutes, free, just don’t buy anything — it’s all tourist traps.",
                    "8pm: Dinner at a budget tapas bar in El Raval — €10–18 for patatas bravas, pan con tomate, and croquetas",
                  ]}
                  cost="€50–80 excluding accommodation" />
                <DayCard day="Day 2" title="Gothic Quarter + La Boqueria + Barceloneta Beach"
                  items={[
                    "9am: Gothic Quarter walking tour (free walking tours available, tip-based). Barcelona Cathedral (free before 12:30pm, €9 after), Roman walls, Placa Reial.",
                    "11am: La Boqueria market — free to enter. Walk past the fruit juice stands at the entrance to the seafood counters in the back. That’s where locals eat.",
                    "La Boqueria is 50% tourist trap near the entrance and 50% genuine food heaven in the back. The counter at El Quim de la Boqueria is legendary — arrive before 12:30pm.",
                    "1pm: Lunch at the market or a side-street restaurant in El Raval — €8–15 for menu del dia (3-course set lunch with drink)",
                    "3pm: Walk to Barceloneta Beach (15 min from Gothic Quarter). Free, clean, people-watching is half the fun.",
                    "5pm: Tapas crawl starting at La Cova Fumada (bomba potato — the original) then Bar Electricitat for vermouth",
                    "9pm: Dinner at a Gothic Quarter restaurant — €12–20",
                  ]}
                  cost="€30–60 excluding accommodation" />
                <DayCard day="Day 3" title="Montjuic + Fundacio Miro + Sunset Drinks"
                  items={[
                    "9am: Teleferic de Montjuic cable car (€13 return) or walk up through the gardens (free, 30 min)",
                    "10am: Fundacio Joan Miro — €15 entry. Bright, joyful art in a stunning building with city views.",
                    "11:30am: Walk to Montjuic Castle — €5 entry, panoramic 360-degree views of the city, port, and mountains",
                    "1pm: Lunch at one of the Olympic Ring area restaurants — €10–18",
                    "3pm: Explore the Olympic area — Palau Sant Jordi, Calatrava’s communications tower, the diving pool with city views",
                    "5pm: Sunset drinks at a Poble Sec terrace. Carrer Blai for €1 pintxos and cheap vermouth.",
                    "9pm: If it’s summer, the Magic Fountain light show runs Thursday–Sunday evenings (free). Check schedule online.",
                  ]}
                  cost="€35–65 excluding accommodation" />
                <DayCard day="Day 4" title="Day Trip: Montserrat OR More Gaudi"
                  items={[
                    "Option A — Montserrat: Train from Placa Espanya (R5, €23 round trip including cable car). 1-hour ride to a monastery carved into jagged mountains at 1,200m.",
                    "The Black Madonna, boys’ choir (1pm daily), and Sant Joan hike with views to the Pyrenees. Budget 5–6 hours.",
                    "Option B — More Gaudi: Casa Batllo (€35, book online) morning light is best, then La Pedrera/Casa Mila (€25), then Palau Guell (€12).",
                    "2pm: Lunch in Eixample — €10–18 for menu del dia at a neighbourhood restaurant",
                    "4pm: Last shopping on Passeig de Gracia or independent shops in El Born quarter",
                    "7pm: Farewell sunset from Bunkers del Carmel (free) — the best panoramic view in Barcelona. Locals bring wine. 15-min uphill walk from metro Alfons X.",
                  ]}
                  cost="€40–80 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 4-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">€200–360 ($216–$389 USD) including accommodation</span>
                </div>
              </div>
            )}

            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">{"✨"}</span>
                  <div>
                    <p className="text-sm font-medium text-blue-800">Mid-Range Plan &mdash; Eixample / El Born Base</p>
                    <p className="text-xs text-blue-600 font-light">Stay: Boutique hotel &middot; &euro;80&ndash;140/night &middot; T-Casual + occasional taxi</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Sagrada Familia + Park Guell + Gracia Dinner"
                  items={[
                    "9am: Sagrada Familia — €36 with tower access. The Nativity facade tower spiral staircase is unforgettable. Book the earliest slot.",
                    "11:30am: Taxi or metro to Park Guell (€10, book timed entry). Explore the monumental zone, Gaudi’s house museum (€5.50 extra).",
                    "1:30pm: Lunch in Gracia at Can Culleretes or Botafumeiro — €20–35 for seafood lunch",
                    "3pm: Wander Gracia’s plazas. Coffee at Federal Cafe. Browse independent boutiques on Carrer de Verdi.",
                    "5pm: Casa Vicens (Gaudi’s first house, €18) in Gracia — often overlooked, rarely crowded, stunning Moorish-inspired tile work",
                    "8pm: Cerveceria Catalana in Eixample for dinner tapas — €25–40/person. One of Barcelona’s best tapas spots. No reservations, queue from 8pm.",
                  ]}
                  cost="€90–150 excluding accommodation" />
                <DayCard day="Day 2" title="Gothic Quarter + La Boqueria + Barceloneta"
                  items={[
                    "9am: Private Gothic Quarter tour or self-guided walk. Placa del Rei (medieval royal palace), Barcelona Cathedral rooftop (€9), Temple of Augustus remains (free, hidden in a courtyard).",
                    "11am: La Boqueria — skip the front, go to El Quim counter for fried eggs with baby squid (€12–18). Arrive before 12:30.",
                    "1pm: El Born neighbourhood — Picasso Museum (€12, book online), Santa Maria del Mar basilica (free), Passeig del Born for cocktails later.",
                    "3:30pm: Barceloneta Beach. Rent a paddleboard (€15/hr) or just swim. The beach is better after 4pm when day-trippers leave.",
                    "7pm: Sunset from W Hotel terrace bar — €12–18 for cocktails with the city behind you",
                    "9:30pm: Dinner at Can Paixano (La Xampanyeria) — cava and cured meats, €15–25/person. Standing room only, loud, authentic.",
                  ]}
                  cost="€70–120 excluding accommodation" />
                <DayCard day="Day 3" title="Montjuic + Fundacio Miro + Poble Sec"
                  items={[
                    "9am: Cable car to Montjuic (€13) for aerial views over the port and city",
                    "10am: Fundacio Joan Miro — €15. The building and rooftop sculpture garden are as good as the art inside.",
                    "11:30am: Montjuic Castle (€5) for 360-degree views",
                    "1pm: Walk down through the Botanical Garden (€5) to Poble Sec",
                    "2pm: Lunch on Carrer Blai — the pintxos strip. €1 pintxos on toothpicks, pick and eat, they count the sticks at the end. Budget €10–18.",
                    "4pm: MNAC (Museu Nacional d’Art de Catalunya) — €12. The Romanesque murals are extraordinary. Free on Saturdays after 3pm.",
                    "8pm: Cocktails at Dry Martini (Eixample) then dinner at Tickets (molecular tapas by the Adrià brothers, €40–60, book 2 months ahead) or Cal Pep (€30–45)",
                  ]}
                  cost="€80–140 excluding accommodation" />
                <DayCard day="Day 4" title="Montserrat Day Trip OR Casa Batllo + La Pedrera"
                  items={[
                    "Option A — Montserrat: Tot Montserrat package (€50) includes train, cable car, museum, lunch, and boys’ choir. Leave by 8:30am from Placa Espanya.",
                    "Option B — More Gaudi: Casa Batllo first slot (€35), then La Pedrera (€25) with the rooftop warriors. Hospital de Sant Pau (€15) — a modernist masterpiece most tourists miss.",
                    "2pm: Lunch at a neighbourhood restaurant in Eixample — menu del dia €12–20",
                    "4pm: Shopping in El Born or Passeig de Gracia",
                    "6pm: Bunkers del Carmel for sunset — free, bring wine, the best farewell view of Barcelona",
                    "9:30pm: Final dinner at a vermuteria in Poble Sec or Gracia — €25–40/person",
                  ]}
                  cost="€80–140 excluding accommodation" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-blue-700 uppercase tracking-wide">Total 4-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">€640–1,200 ($691–$1,296 USD) including accommodation</span>
                </div>
              </div>
            )}

            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDC8E"}</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Luxury Plan &mdash; Passeig de Gracia / El Born Base</p>
                    <p className="text-xs text-purple-600 font-light">Stay: 5-star hotel &middot; &euro;200&ndash;500+/night &middot; Private tours + fine dining</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Private Gaudi Tour + Michelin Dinner"
                  items={[
                    "9am: Sagrada Familia private guided tour (€80–120/person including skip-the-line). The guide unlocks details you’d never notice alone.",
                    "11:30am: Private car to Park Guell. VIP entry to monumental zone + Gaudi’s house.",
                    "1:30pm: Lunch at ABaC (3 Michelin stars) — €180–250 tasting menu. Book 1 month ahead.",
                    "4pm: Casa Mila/La Pedrera private evening tour (€39) — the rooftop at golden hour with champagne",
                    "6pm: Shopping on Passeig de Gracia — Loewe, Hermes, Chanel, all in modernist buildings",
                    "9pm: Dinner at Disfrutar (2 Michelin stars, €200–280) — book 2 months ahead. One of the world’s best restaurants.",
                  ]}
                  cost="€350–600 excluding accommodation" />
                <DayCard day="Day 2" title="Old City + Private Food Tour + Beach Club"
                  items={[
                    "10am: Private Gothic Quarter + El Born food tour (€80–120/person) — market stops, hidden tapas bars, wine tasting",
                    "1pm: Picasso Museum private tour (€40 + €12 entry) — skip the queue, context for each room",
                    "3pm: W Barcelona rooftop for lunch and cocktails — €60–90",
                    "5pm: Sunset sailing along the coast (€80–150/person, 2 hours with cava and snacks)",
                    "9:30pm: Dinner at Alkimia (€120–180) or Cinc Sentits (€130–200) for modern Catalan fine dining",
                  ]}
                  cost="€300–500 excluding accommodation" />
                <DayCard day="Day 3" title="Montjuic + Private Wine Experience"
                  items={[
                    "9am: MNAC private tour — the Romanesque collection is world-class",
                    "11am: Fundacio Joan Miro with private guide",
                    "1pm: Lunch at Martinez (seafood with panoramic views) — €50–80",
                    "3pm: Wine tour to Penedes region (1 hour from Barcelona) — €150–250/person for private car + 2 wineries + tasting",
                    "8pm: Return to Barcelona. Cocktails at Paradiso (hidden speakeasy in El Born, ring the doorbell)",
                    "10pm: Dinner at Moments (2 Michelin stars in Mandarin Oriental) — €150–220",
                  ]}
                  cost="€350–600 excluding accommodation" />
                <DayCard day="Day 4" title="Montserrat Private + Farewell"
                  items={[
                    "8am: Private car to Montserrat (€200–300 for car + guide). Skip the crowds, access private monastery areas.",
                    "12pm: Boys’ choir performance at 1pm — arrive early for front seats",
                    "2pm: Lunch at the monastery restaurant or picnic prepared by your hotel",
                    "5pm: Return to Barcelona. Last shopping or spa treatment at your hotel",
                    "8pm: Bunkers del Carmel sunset (free) with a bottle from the Penedes trip",
                    "10pm: Farewell dinner at Lasarte (3 Michelin stars, €230–320) or intimate dinner at Enigma",
                  ]}
                  cost="€400–700 excluding accommodation" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 4-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">€2,200–4,500+ ($2,376–$4,860+ USD) including accommodation</span>
                </div>
              </div>
            )}
          </section>

          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">{"✨"} Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">{"\uD83D\uDC8E"} Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (4N)", "€100–200", "€320–560", "€800–2,000+"],
                    ["\uD83C\uDF7D Food & Drinks", "€50–90", "€120–200", "€400–800"],
                    ["\uD83D\uDE87 Transport", "€15–30", "€30–60", "€100–300"],
                    ["\uD83C\uDFAF Activities", "€40–80", "€100–200", "€500–1,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["€200–360\n($216–$389)","€640–1,200\n($691–$1,296)","€2,200–4,500+\n($2,376–$4,860+)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center whitespace-pre-line">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">All prices in EUR (2026). 1 EUR = ~$1.08 USD = ~90 INR.</p>
          </section>

          <DestinationGallery
            title="Barcelona — Must-See Places"
            subtitle="Click each thumbnail to explore Barcelona's most iconic landmarks."
            spots={[
              { name: "Sagrada Familia",   query: "sagrada familia barcelona interior stained glass light architecture", desc: "Gaudi's unfinished masterpiece. Book 2 months ahead. The morning light through the east stained glass is extraordinary." },
              { name: "Park Guell",        query: "park guell barcelona mosaic bench gaudi terrace city view",           desc: "Gaudi's mosaic wonderland overlooking the city. EUR 10 timed entry. The main terrace with its undulating bench is iconic." },
              { name: "Gothic Quarter",    query: "barcelona gothic quarter narrow street architecture medieval",         desc: "Medieval streets, Roman walls, and the cathedral. Free to explore. Best in the morning before tour groups arrive." },
              { name: "La Boqueria",       query: "la boqueria barcelona market food stalls colorful fruit seafood",     desc: "Barcelona's legendary food market on La Rambla. Skip the front tourist stalls — the real food is at the back counters." },
              { name: "Montserrat",        query: "montserrat monastery mountain barcelona catalonia dramatic cliffs",    desc: "Jagged mountain monastery 1 hour from Barcelona. Boys' choir at 1pm daily. The hike to Sant Joan summit is unforgettable." },
            ]}
          />

          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="barcelona gothic quarter narrow medieval street architecture"
              fallback="https://images.unsplash.com/photo-1583422409516-2895a77efded?w=900&q=80"
              alt="Barcelona Gothic Quarter narrow medieval street"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Gothic Quarter before 9am: empty medieval streets, morning light, and coffee shops opening. A different city entirely.
              </p>
            </div>
          </div>

          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Not booking Sagrada Familia ahead", desc: "2–3 hour walk-up queue vs walk-straight-in with a €26 timed ticket. Book at sagradafamilia.org 2 months ahead. This is non-negotiable.", icon: "\u26EA" },
                { title: "Eating on La Rambla", desc: "Tourist-trap restaurants with bad food at double the price. Walk one block to either side and the quality doubles while prices halve.", icon: "\uD83C\uDF7D" },
                { title: "Skipping the menu del dia", desc: "Nearly every neighbourhood restaurant offers a 3-course lunch with drink for €10–18 on weekdays. This is how Barcelona eats affordably.", icon: "\uD83D\uDCB0" },
                { title: "Visiting Park Guell without a ticket", desc: "The monumental zone (the good part) requires a €10 timed ticket. Without it you’ll see the park but miss the mosaics, bench, and Gaudi features.", icon: "\uD83C\uDFAB" },
                { title: "Ignoring pickpockets", desc: "La Rambla, metro L3, La Boqueria entrance, and Sagrada Familia queue are hotspots. Cross-body bag with zip, phone in front pocket, passport at the hotel.", icon: "\u26A0\uFE0F" },
                { title: "Eating dinner at 7pm", desc: "You’ll be eating alone in an empty restaurant. Locals eat at 9:30–10:30pm. Tapas bars start filling at 8:30pm. Adjust your clock.", icon: "\u23F0" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\uD83C\uDFAB", title: "T-Casual is Essential", desc: "10 rides for €11.35 on metro, bus, and tram (Zone 1). Covers all tourist areas. Buy at any metro station. Each ride is €1.14 vs €2.40 single.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF1F", title: "Bunkers del Carmel", desc: "Free. The best panoramic view in Barcelona and it’s not even in most guidebooks. Locals bring wine for sunset. Metro Alfons X, 15-min uphill walk.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83E\uDD42", title: "Vermouth Hour", desc: "Saturday and Sunday 12–2pm is ‘la hora del vermut’ in Barcelona. Vermouth + olives + chips at any traditional bar for €3–5. Join the locals.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDF7D", title: "Carrer Blai Pintxos", desc: "Poble Sec’s pintxos street. €1 per toothpick tapas. Walk the strip, eat at 3–4 places. The best budget dinner experience in Barcelona.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDFD6\uFE0F", title: "Better Beaches Exist", desc: "Barceloneta is the most famous but most crowded. Bogatell (5 min further) is cleaner and calmer. Mar Bella (10 min further) is the locals’ beach.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83D\uDCC5", title: "Free Museum Days", desc: "Many museums free on first Sunday of month and Saturday after 3pm. MNAC, Picasso Museum, and City History Museum all participate.", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want This Planned for You?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Barcelona itinerary within 24 hours. Free.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Barcelona Trip {"→"}</button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days do you need in Barcelona?", a: "4 days is ideal. Covers Sagrada Familia, Park Guell, Gothic Quarter, Barceloneta, Montjuic, plus a day trip to Montserrat or more Gaudi houses. 3 days is possible but tight." },
                { q: "How much does a 4-day trip cost?", a: "Budget: €200–360 ($216–$389). Mid-range: €640–1,200 ($691–$1,296). Luxury: €2,200–4,500+ ($2,376–$4,860+). All include accommodation, food, transport and activities." },
                { q: "Do I need a visa for Spain?", a: "Indian passport holders need a Schengen visa (€80, apply 3 months ahead at BLS/VFS). US, UK, AU, CA citizens visit visa-free for 90 days within 180 days." },
                { q: "Is Barcelona safe?", a: "Generally very safe. The main concern is pickpocketing, not violent crime. La Rambla, Metro L3, and tourist queues are hotspots. Cross-body bag, phone in front pocket, passport at hotel." },
                { q: "What is the best time to visit?", a: "April–June and September–October are ideal. July–August is hot (35°C+) and packed. November–March is mild and cheapest with smaller crowds." },
                { q: "Should I book Sagrada Familia in advance?", a: "Non-negotiable. Book at sagradafamilia.org 2 months ahead for peak season. EUR 26 for timed entry vs 2–3 hour walk-up queue. Don’t use third-party sites that mark up 40%." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <AffiliateBlock
            destination="Barcelona"
            hotels={[
              { name: "Generator Barcelona", type: "Design Hostel · Gracia", price: "From €28/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/es/generator-barcelona.html?aid=2820480" },
              { name: "Hotel Neri", type: "Boutique · Gothic Quarter", price: "From €180/night", rating: "5", badge: "Best value", url: "https://www.booking.com/hotel/es/neri.html?aid=2820480" },
              { name: "Mandarin Oriental", type: "Ultra-Luxury · Passeig de Gracia", price: "From €450/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/es/mandarin-oriental-barcelona.html?aid=2820480" },
            ]}
            activities={[
              { name: "Sagrada Familia Skip-the-Line", duration: "1.5 hours", price: "From €26", badge: "Must do", url: "https://www.getyourguide.com/s/?q=barcelona&partner_id=PSZA5UI" },
              { name: "Montserrat Half-Day Tour", duration: "5 hours", price: "From €50", badge: "Day trip", url: "https://www.getyourguide.com/s/?q=barcelona&partner_id=PSZA5UI" },
              { name: "Gothic Quarter Food Tour", duration: "3 hours", price: "From €65", badge: "Foodie", url: "https://www.getyourguide.com/s/?q=barcelona&partner_id=PSZA5UI" },
              { name: "Sunset Sailing Experience", duration: "2 hours", price: "From €45", url: "https://www.getyourguide.com/s/?q=barcelona&partner_id=PSZA5UI" },
            ]}
          />

          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Spain Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Madrid — 3 Day Guide", href: "/blog/madrid-3-days" },
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

          <CombineWith currentSlug="barcelona-4-days" />
          <RelatedGuides currentSlug="barcelona-4-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
