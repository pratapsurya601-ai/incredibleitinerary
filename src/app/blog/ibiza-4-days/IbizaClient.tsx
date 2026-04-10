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
import PhotoCta from "@/components/blog/PhotoCta";
import AuthorByline from "@/components/blog/AuthorByline";
import InlineSignup from "@/components/email/InlineSignup";
import PinterestSaveButton from "@/components/ui/PinterestSaveButton";

// ── Table of Contents ─────────────────────────────────────────────────────────
const IBIZA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Ibiza Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",  emoji: "🏛️", label: "Landmark Guide" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",        emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",   emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "💡",  label: "Pro Tips" },
  { id: "faq",        emoji: "❓",  label: "FAQ" },
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
        className="h-full bg-amber-600 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ── Share Bar ─────────────────────────────────────────────────────────────────
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
        {
          label: "Email",
          color: "bg-ink text-white",
          href: `mailto:?subject=Ibiza 4-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Ibiza in 4 Days — Dalt Vila, Café del Mar, clubs and Formentera&url=${typeof window !== "undefined" ? window.location.href : ""}`,
        },
      ].map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}
        >
          {s.label}
        </a>
      ))}
      <button
        onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted"
      >
        {copied ? "✓ Copied" : "Copy Link"}
      </button>
      <PinterestSaveButton
        pageUrl="https://www.incredibleitinerary.com/blog/ibiza-4-days"
        imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
        description="Ibiza in 4 Days: Dalt Vila UNESCO old town, Café del Mar sunsets, Pacha and Amnesia clubs, Ses Salines beach, and Formentera day trip — complete travel guide."
      />
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
function DayCard({
  day,
  title,
  items,
  cost,
}: {
  day: string;
  title: string;
  items: string[];
  cost: string;
}) {
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
                <span className="text-amber-500 mt-1 flex-shrink-0 text-xs">●</span>
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
function TipCard({
  icon,
  title,
  desc,
  color,
}: {
  icon: string;
  title: string;
  desc: string;
  color: string;
}) {
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

// ── FAQ Accordion ─────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-600 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function IbizaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={IBIZA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Ibiza" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="ibiza dalt vila old town sunset white walls mediterranean sea harbour"
            fallback="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
            alt="Ibiza Dalt Vila UNESCO old town at sunset with the Mediterranean harbour below"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Ibiza 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">January 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Ibiza in 4 Days:
                <em className="italic text-amber-300"> Dalt Vila, Club Culture &amp; the Mediterranean</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                A UNESCO fortress town, Café del Mar sunsets, Pacha and Amnesia, hidden coves, and Formentera across the water. The complete guide for every budget.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="January 2026" readTime="13 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🏝️ Balearic Islands, Spain</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From €70/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Ibiza exists simultaneously as two completely different places: a UNESCO World Heritage medieval fortress town where whitewashed walls glow pink at dusk and everyone arrives at the sunset terrace holding a drink, and the global capital of electronic dance music where Pacha and Amnesia have been launching careers since 1973. The island refuses, gloriously, to be just one thing.
            </p>
          </blockquote>

          {/* ── WHAT IBIZA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Ibiza Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Ibiza is a Balearic island off Spain&apos;s eastern coast — roughly 40km long and 20km wide, with a permanent population of around 150,000 that swells to over a million in summer. The island&apos;s old town, Dalt Vila, is a UNESCO World Heritage Site: a walled medieval fortress perched on a hill above the harbour, its 16th-century ramparts still intact, its cobbled lanes winding up to a Gothic cathedral with views across the salt flats and out to the sea.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The club scene is real and genuinely extraordinary. Pacha opened in 1973 — its twin cherries logo is one of the most recognisable images in global dance music. Amnesia followed, then DC10 with its legendary Monday morning Circoloco parties, then Ushuaïa as the open-air dayclub on Playa d&apos;en Bossa. Hi Ibiza (the former Space) brought superclub production values in a relatively modern format. Each has its own character, loyal crowd, and resident DJ culture that has shaped electronic music globally.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              But Ibiza is also Ses Salines — a beach backed by a salt flat nature reserve where the water reaches Caribbean clarity. It&apos;s the hippie market at Las Dalias on a Saturday morning in San Carlos. It&apos;s the mysterious 413-metre rock of Es Vedrà rising from the sea near Cala d&apos;Hort. It&apos;s a paella on the terrace at Es Torrent that costs more than your flight and is worth every cent. It&apos;s Formentera, 15 minutes away by ferry, with some of the finest beaches in the entire Mediterranean. Ibiza, in short, requires at least 4 days.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="IBZ (Ibiza)" />
              <StatCard icon="🌡️" label="Best Season" value="May–Jun, Sep" />
              <StatCard icon="🎶" label="Club Season" value="May–Oct" />
              <StatCard icon="💰" label="Budget From" value="€70/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Ibiza</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Jun",
                  i: "🌸",
                  t: "Late Spring — Best Overall",
                  d: "22–28°C, the sea has warmed up, the beaches are uncrowded, club season is fully open with the big opening parties, and prices are 30–50% lower than July–August. June is arguably the single best month to visit — full club programme, comfortable temperatures, no extreme crowds.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Early Autumn — Second Best",
                  d: "24–28°C in September, sea still warm. The closing parties (late September through early October) are the most celebrated nights in Ibiza&apos;s club calendar — the resident DJs play their best sets of the year. Prices drop sharply after mid-September. The island becomes genuinely quiet by November.",
                  b: "Excellent choice",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🔥",
                  t: "Peak Summer — Most Expensive",
                  d: "28–34°C, beaches packed, club queues hours long, hostel dorms hit €60–80/night and boutique hotels triple in price. The biggest DJ names of the year play in July and August — if that&apos;s the priority and budget is not a concern, these months deliver the most intense experience. Otherwise, avoid.",
                  b: "Budget warning",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Apr",
                  i: "❄️",
                  t: "Off Season — Quiet & Cheap",
                  d: "15–18°C. Nearly all clubs are closed, many restaurants shut for winter. The island is beautiful, empty, and extremely cheap (€15–25/night for accommodation). A completely different Ibiza — local, peaceful, and uncrowded. Good for walking the north, cycling, and exploring the real island without any of the summer infrastructure.",
                  b: "Off season",
                  c: "bg-blue-50 border-blue-200",
                },
              ].map((s) => (
                <div key={s.s} className={`rounded-xl p-4 border ${s.c}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.i}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{s.s} — {s.t}</p>
                      <p className="text-[0.65rem] font-medium text-teal">{s.b}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── HOW TO REACH ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Ibiza</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Ibiza Airport (IBZ) is 7km south-west of Ibiza Town. Bus L10 connects the airport to the town centre (€1.50, 20 minutes). Taxis cost €15–20 to Ibiza Town, €20–25 to San Antonio. In peak season, rideshare apps do not operate reliably on the island — plan accordingly.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Direct flights from UK, Europe & beyond",
                  d: "IBZ is one of the busiest summer airports in Europe. Direct flights from London (2.5 hrs), Madrid (1 hr), Barcelona (50 mins), Amsterdam, Paris, Berlin and most major European cities. British Airways, easyJet, Ryanair, Iberia, and Vueling all serve the route. Book at least 6–8 weeks ahead for summer travel.",
                  b: "Main option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "⛴️",
                  t: "Ferry from Barcelona or Valencia",
                  d: "Baleàlia Lines and Trasmediterránea operate overnight and daytime ferries. Barcelona–Ibiza: 8–9 hrs (overnight is the practical option). Valencia–Ibiza: 5–6 hrs. Ferry cabins are comfortable and a good option if combining Ibiza with mainland Spain. Cheaper than flying in shoulder season.",
                  b: "Budget / scenic route",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Airport bus L10 to Ibiza Town",
                  d: "The L10 runs every 20–30 minutes in season (less frequent off-season). €1.50 to Ibiza Town. Direct and reliable. Far better value than a taxi if you are heading to the centre. Note: the bus does not run to San Antonio — you need the L9 or a connecting service from the town.",
                  b: "Cheapest option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Car hire from IBZ airport",
                  d: "Highly recommended if you plan to explore the north, beaches, or Es Vedrà. Europcar, Avis, and local operators at the airport. From €25/day in shoulder season. Driving in peak season can be challenging near San Antonio and Playa d&apos;en Bossa. Parking in Ibiza Town old town is very limited.",
                  b: "Flexible",
                  c: "bg-parchment border-parchment-2",
                },
              ].map((t) => (
                <div key={t.t} className={`rounded-xl p-4 border ${t.c}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{t.i}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p className="font-semibold text-sm text-ink">{t.t}</p>
                        <span className="text-xs bg-white/70 text-muted px-2.5 py-1 rounded-full border border-white/50">{t.b}</span>
                      </div>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{t.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 4-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Ibiza Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary covers the major beaches, Dalt Vila, a Formentera day trip, the north of the island, and one proper club night — paced for real enjoyment rather than exhaustion.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Ibiza Town · Dalt Vila · Marina · Sunset Ramparts"
                cost="€45–65 (budget) · €130–170 (mid-range)"
                items={[
                  "Arrive at IBZ — take bus L10 to Ibiza Town (€1.50) or taxi (€15–20). Check into accommodation: budget hostel dorms in Ibiza Town or Santa Eulàlia run €22–30/night in shoulder season; boutique hotels in the Marina or old town run €100–140/night.",
                  "Afternoon: explore Dalt Vila on foot — the UNESCO World Heritage walled old town is completely free and genuinely extraordinary. The 16th-century ramparts, built under Philip II of Spain, are 3km in circumference. The Portal de ses Taules, the main gate, is one of the finest Renaissance entrances in Spain.",
                  "Climb the cobblestone lanes to the Cathedral of Ibiza at the summit — Gothic construction begun in the 13th century, with a small museum (€3). The views from the cathedral square across the salt flats and out to Formentera on a clear day are some of the best in the Balearics.",
                  "Sunset: walk the upper ramparts of Dalt Vila — the Bastion de Sant Jaume and Portal Nou are the best viewpoints. Arrive 30 minutes before sunset. This is one of the great free sunset experiences of the Mediterranean.",
                  "Dinner: tapas and house wine in the Sa Penya neighbourhood below Dalt Vila — €10–15 budget, €35–50 mid-range for a proper sit-down restaurant. The Marina area has the most concentrated choice of restaurants.",
                  "Evening: walk the Ibiza Town harbourfront. The spectacle of the harbour, boats, and lit-up Dalt Vila walls costs nothing and is genuinely impressive.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Ses Salines Beach · Cala Conta · Café del Mar Sunset Strip"
                cost="€55–75 (budget) · €130–180 (mid-range)"
                items={[
                  "Morning: bus L5 from Ibiza Town to Ses Salines beach (€2, 30 minutes). Ses Salines is the most beautiful beach on the island — fine white sand, water with extraordinary Caribbean-quality clarity, backed by a UNESCO-protected salt flat nature reserve. Arrive early (before 10am) for the best spots.",
                  "The salt flats behind Ses Salines are a flamingo habitat in the right season (March–August). Walk the path around the southern edge of the flats on the way back — free, largely unknown to tourists, and photographically spectacular.",
                  "Lunch: Chiringuito (beach bar) at Ses Salines — fresh fish, paella, and cold beer with your feet in the sand. Set menus €14–18. For a mid-range splurge, Sa Caleta beach restaurant nearby serves the best seafood rice on the south coast (€35–50/person).",
                  "Afternoon: make your way to Cala Conta (bus + short taxi, €5–8 total). Two interlinked coves on the west coast with the finest sea colours on the island — the water moves between turquoise, emerald and deep blue depending on the light and depth. Rent a sunbed (€8) or use the rocks.",
                  "Late afternoon: San Antonio — walk the famous Sunset Strip along the bay (Café del Mar is one section of this). The promenade is public — you can watch the sunset for free. Drinks on a Sunset Strip terrace run €8–15. Arrive by 8pm for a good position; sunset is around 9pm in June–September.",
                  "Return to Ibiza Town or San Antonio for the evening. Budget: €55–75. Mid-range with car hire and beach club: €130–180.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Formentera Day Trip · Ses Illetes Beach · Ferry Return"
                cost="€60–80 (budget) · €140–190 (mid-range)"
                items={[
                  "Early start: catch the 9am or 10am ferry from Ibiza Town port (Estació Marítima) to La Savina, Formentera. Return tickets: €25–38 depending on season and operator (Baleàlia Lines and Trasmapi are the main operators). Journey time: 25–35 minutes on the fast ferry. In peak season (July–August), book online in advance.",
                  "At La Savina port: rent a bicycle (€12/day) or a small electric scooter (€25/day) — Formentera is 20km long, flat, and has excellent cycle paths. Bikes are genuinely the best way to experience the island.",
                  "Cycle north to Ses Illetes — consistently rated one of the top beaches in Europe and for good reason: white sand so fine it squeaks, water so clear you can see the seagrass 4 metres down, and a scale that feels genuinely remote even when there are people there. The 2km sandbar separating Formentera from the uninhabited island of S&apos;Espalmador is walkable at low tide.",
                  "Lunch at the beach bars at Ses Illetes — Juan y Andrea (the famous one, directly on the beach) is excellent but expensive (€40–65/person). The smaller bar a few hundred metres back serves equally fresh fish for €18–25. Both are worth it.",
                  "Afternoon: cycle the island — La Mola lighthouse at the eastern tip (the island&apos;s highest point, 192m), the Blue Bar (the oldest hippie bar on the island, famous for sunsets), and Migjorn beach on the south coast (calmer, fewer tourists, excellent swimming).",
                  "Return ferry from La Savina at 5–7pm. Budget day total: €60–80 (ferry + bike + food). Mid-range (scooter + Juan y Andrea lunch): €140–190.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="North Ibiza · Es Vedrà · Cala Salada · Club Night (Optional)"
                cost="€50–70 (budget, no club) · €150–250 (mid-range with club)"
                items={[
                  "Rent a scooter (€25–35/day) or car (€35–50/day) for the north — public transport here is limited and a vehicle is strongly recommended. Alternatively, book a shared jeep tour of the north (GetYourGuide, from €45/person).",
                  "San Juan Bautista (Sant Joan de Labritja): the most characterful village in the north. Traditional white Ibizan architecture, an artisan Sunday market, and a pace of life completely removed from the south of the island. The Sunday market (10am–3pm) is worth timing the trip around.",
                  "Portinatx: the most dramatic beach on the north coast — three coves separated by pine-covered headlands, with a working lighthouse at the tip. The middle cove (Es Port) is the most sheltered and has excellent snorkelling.",
                  "Es Vedrà viewpoint at Cala d&apos;Hort: drive south via the west coast. Park above the bay and walk down to the Es Vedrà mirador — the 413-metre pyramidal rock rising from the sea is one of the strangest natural formations in the Mediterranean. Es Boldado restaurant here (€30–45/person) has a view that justifies the price.",
                  "Cala Salada: on the return route near San Antonio — pine-forest-backed double cove with crystalline water and significantly fewer people than the main beaches. Accessible via a steep path (10 minutes) or by boat. One of the best swims on the island.",
                  "Evening: if you want one club night, tonight is the night. Pick one and do it properly. Pacha (Ibiza Town) or Amnesia (on the road to San Antonio) are the two classic choices for a first visit. Tickets: €30–80, pre-book online. DC10 (Monday Circoloco) is the connoisseur&apos;s choice for underground house and techno. Shows peak 2–4am. Do not drive — arrange a taxi or driver in advance.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Ibiza" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Ibiza Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key experiences in order of priority. Entry fees and timing are as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Dalt Vila (UNESCO Old Town)",
                  e: "Free to walk · Cathedral Museum €3",
                  d: "The walled old town of Ibiza — a 16th-century fortress above the harbour, with cobbled lanes, the Gothic Cathedral of Ibiza, and ramparts with views across the salt flats to Formentera. The finest example of Renaissance military architecture in the Balearics. Allow 2–3 hours minimum; more for the museum.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Ses Salines Beach & Nature Reserve",
                  e: "Free",
                  d: "The most beautiful beach on Ibiza — fine white sand, extraordinary water clarity, UNESCO-protected salt flat nature reserve behind it. One of the few beaches on the island that manages to be world-class in its physical beauty as well as its atmosphere. Best before 10am.",
                  t: "Must do · Half day",
                },
                {
                  n: "Es Vedrà Rock",
                  e: "Free (viewpoint)",
                  d: "A 413-metre pyramidal rock island rising from the sea near Cala d&apos;Hort on the west coast. No road access to the rock itself — visit the mirador above Cala d&apos;Hort. Particularly dramatic at sunset. Surrounded by legends including a Phoenician connection to Tanit and sightings of unusual lights above it.",
                  t: "Scenic · 1–1.5 hrs",
                },
                {
                  n: "Pacha Ibiza",
                  e: "€30–80 (book online)",
                  d: "Founded in 1973 — the original Ibiza club and one of the most iconic venues in the history of electronic music. Relatively intimate by modern superclub standards: two floors, the main room with the original cherry tree motif, the Funky Room for disco and house. Resident season runs May–October.",
                  t: "Iconic · From midnight",
                },
                {
                  n: "Amnesia Ibiza",
                  e: "€40–90 (book online)",
                  d: "One of the three most historically significant clubs in the world. A cavernous, partially underground space with a retractable glass roof (so you can dance under the stars). Legendary foam parties and a main room that has hosted almost every major name in electronic music. The club&apos;s origin story — a disco that evolved into the epicentre of the Balearic Beat in the 1980s — is genuinely fascinating.",
                  t: "Iconic · From midnight",
                },
                {
                  n: "DC10",
                  e: "€20–60 (door or online)",
                  d: "The underground club next to Ibiza Airport. Famous for Circoloco on Monday mornings — a party that starts at 6am and runs until the following night, with the runway visible through the open-air terrace. The most authentic, least touristy club experience in Ibiza. House and techno only; smart casual dress code enforced.",
                  t: "Connoisseur choice",
                },
                {
                  n: "Formentera (Day Trip)",
                  e: "€25–38 (return ferry)",
                  d: "The small island 15 minutes by fast ferry from Ibiza Town. Ses Illetes beach is one of the top beaches in Europe — the water clarity is genuinely remarkable. The island is also excellent for cycling, with flat terrain and good paths. Most visitors don&apos;t go; this is a mistake.",
                  t: "Full day · €25–38 ferry",
                },
                {
                  n: "Ushuaïa Ibiza",
                  e: "€50–100 (day party tickets)",
                  d: "The open-air superclub and hotel on Playa d&apos;en Bossa. Day parties run from 3pm until midnight (the transition between day and night parties is its own spectacle). Effectively the daytime face of Ibiza&apos;s club culture — sunbeds, pools, and world-class DJs simultaneously.",
                  t: "3pm–midnight",
                },
              ].map((place) => (
                <div key={place.n} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-stone-900">{place.n}</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs text-teal font-medium bg-teal/10 px-2 py-0.5 rounded-full">{place.e}</span>
                      <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">{place.t}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{place.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <DestinationGallery
            title="Ibiza — Old Town, Beaches &amp; the Mediterranean"
            subtitle="From UNESCO ramparts to crystal coves and the world&apos;s most famous clubs."
            spots={[
              {
                name: "Dalt Vila at Sunset",
                query: "ibiza dalt vila old town sunset ramparts whitewashed walls mediterranean",
                desc: "The 16th-century walled old town of Ibiza glowing at sunset — the finest free view on the island.",
              },
              {
                name: "Ses Salines Beach",
                query: "ses salines ibiza beach white sand turquoise water nature reserve",
                desc: "The most beautiful beach on Ibiza — Caribbean-quality water clarity backed by a UNESCO salt flat reserve.",
              },
              {
                name: "Es Vedrà Rock",
                query: "es vedra ibiza mysterious rock island mediterranean sea west coast",
                desc: "The iconic 413-metre pyramidal rock of Es Vedrà rising from the Mediterranean off Ibiza&apos;s west coast.",
              },
              {
                name: "Formentera Ses Illetes",
                query: "formentera ses illetes beach white sand turquoise water europe best",
                desc: "Ses Illetes on Formentera — consistently rated one of Europe&apos;s finest beaches, 15 minutes from Ibiza by ferry.",
              },
              {
                name: "Café del Mar Sunset Strip",
                query: "cafe del mar san antonio ibiza sunset strip orange sky sea",
                desc: "The famous Sunset Strip along San Antonio Bay — the daily ritual of watching the sun drop into the Mediterranean.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Ibiza has one of the widest budget ranges of any European destination — from genuine backpacker trips at €50–70/day to luxury experiences at €500+/day. The key cost drivers are accommodation (which triples in peak season) and club entry (one club night can add €80–150 to a day&apos;s budget). The table below is for shoulder season (May–June, September).
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Tier</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Accommodation</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Food</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">Transport</th>
                    <th className="p-3.5 text-xs font-medium text-green-300 text-center">Activities</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Daily Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🎒 Backpacker", "€18–22 (dorm)", "€10–15 (supermarket + bakeries)", "€5–8 (bus)", "€10–20 (beaches free)", "€50–65/day"],
                    ["💰 Budget", "€22–30 (hostel)", "€15–22 (tapas bars)", "€8–12 (buses, scooter share)", "€20–30 (ferry, 1 club entry)", "€70–95/day"],
                    ["✨ Mid-Range", "€100–140 (boutique hotel)", "€40–60 (restaurants)", "€35–50 (hire car)", "€50–100 (club, beach club, kayak)", "€160–220/day"],
                    ["💎 Luxury", "€400–800 (finca / 5-star)", "€80–120 (fine dining)", "€60–100 (private transfers)", "€200–500 (boat, VIP tables, spa)", "€450–800/day"],
                    ["👫 Couple (Mid)", "€120–180 (double shared)", "€50–80 (dining out)", "€35–50 (hire car shared)", "€60–120 (per couple)", "€130–215/day pp"],
                  ].map(([tier, ...vals]) => (
                    <tr key={tier} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{tier}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€70–95/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in a hostel in Ibiza Town or Santa Eulàlia, eat at tapas bars and markets, use public buses, and skip the clubs (or attend one on a midweek night for €20–30). The free experiences — Dalt Vila, Ses Salines, Es Vedrà viewpoint, Café del Mar sunset — are genuinely among the island&apos;s best.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€160–220/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique hotel or Airbnb in the Marina area, hire car for the beaches and north, one proper club night pre-booked online, Formentera day trip with a decent lunch. This is the sweet spot — you get the full Ibiza experience without peak-season pricing madness.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Ibiza</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Ibiza Town is the best base for most visitors — centrally located, Dalt Vila on your doorstep, good bus connections. San Antonio is cheaper but noisier. The north (San Juan area) is quiet and beautiful. Avoid Playa d&apos;en Bossa unless you specifically want to be next to the beach clubs.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Nobu Hotel Ibiza Bay",
                  type: "Luxury · Ibiza Town seafront",
                  price: "From €350/night",
                  badge: "Most glamorous",
                  desc: "The most luxurious hotel in Ibiza Town — Nobu restaurant on site, private beach, rooftop pool with views across the bay to Dalt Vila. Celebrity-favourite, immaculate service, and a location that puts you within walking distance of both the old town and the club transfer points.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Pikes Hotel",
                  type: "Boutique · San Antonio hills",
                  price: "From €200/night",
                  badge: "Most storied",
                  desc: "The most legendary hotel in Ibiza — a converted 16th-century finca in the hills above San Antonio where Wham filmed &apos;Club Tropicana&apos; and Freddie Mercury held his famous 41st birthday party. Rooms feel like artist studios; the pool is one of the finest on the island. An Ibiza institution.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Hostal La Torre",
                  type: "Boutique mid-range · North coast near San Antonio",
                  price: "From €120/night",
                  badge: "Best sunset views",
                  desc: "A clifftop boutique hotel on the north coast with a legendary sunset bar that rivals Café del Mar for atmosphere but without the crowds. 24 rooms, pool, restaurant, and a terrace position that makes it one of the best-value stays in all of Ibiza for sunset lovers.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Ibiza Town boutique hostels",
                  type: "Budget · Ibiza Town",
                  price: "€22–35/night (dorm)",
                  badge: "Best budget",
                  desc: "Several well-run hostels cluster around the Ibiza Town harbour and sa Penya neighbourhood. Look for properties within 10 minutes of Dalt Vila — you want to be able to walk to the ramparts at sunset without needing transport. Shoulder season (May–June, September) prices are very reasonable.",
                  color: "border-parchment-2 bg-white",
                },
              ].map((stay) => (
                <div key={stay.name} className={`rounded-xl p-4 border ${stay.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{stay.name}</p>
                      <p className="text-xs text-muted font-light">{stay.type}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs bg-white/80 text-ink px-2.5 py-1 rounded-full border border-white/60">{stay.price}</span>
                      <span className="text-xs bg-gold/15 text-gold-dark px-2 py-0.5 rounded-full font-medium">{stay.badge}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{stay.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHERE TO EAT ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Ibiza</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Ibiza&apos;s food scene covers the full spectrum from superb fresh seafood at family-run beach shacks to acclaimed international restaurants. Eating well without spending excessively is possible — the key is to avoid the touristy Marina strip at peak times and seek out the places the locals actually use.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Es Torrent",
                  t: "Seafood · Remote cove, south Ibiza",
                  d: "One of the finest and most atmospheric restaurants on the island — a beach shack accessed by a rough dirt track, serving whole fish and fresh lobster grilled over a wood fire. Run by the same family for decades. The fish is caught that morning. Prices are high (€50–90/person) but this is an experience rather than just a meal. Reservations essential in season.",
                  b: "Best seafood",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "La Paloma",
                  t: "Italian-Mediterranean · San Lorenzo, north Ibiza",
                  d: "A converted farmhouse in the rural north with one of the most genuinely beautiful garden terraces in the Balearics. Organic vegetables from the garden, fresh pasta, grilled fish, and the relaxed pace of north Ibiza. Lunch only (12–4pm). Booking essential. €35–55/person. Beloved by the artistic community that wintered here.",
                  b: "Best atmosphere",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Mercado de Santa Eulàlia",
                  t: "Market · Santa Eulàlia",
                  d: "The covered market in Santa Eulàlia is the best place for fresh produce shopping and cheap eating on the island. Ibiza&apos;s local cheeses, sobrasada sausage, olives, and seasonal fruits. The cafeteria at the back serves coffee and bocadillos from €3. An excellent and authentic alternative to tourist restaurants.",
                  b: "Best value",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Las Dalias Hippie Market (Saturday)",
                  t: "Market food · San Carlos",
                  d: "On Saturdays in season (and night markets on specific weekdays), the food stalls around the Las Dalias market offer the most eclectic eating on the island — Argentinian empanadas, Thai street food, Ibizan herb liqueurs, freshly grilled corn, organic smoothies. Budget €10–20 for a very satisfying food tour of the stalls.",
                  b: "Most unique",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Croissant Show (Ibiza Town)",
                  t: "Bakery · Ibiza Town",
                  d: "The best breakfast in Ibiza Town — open from early morning, serving fresh croissants, pastries, and coffee at prices that feel like a different island. The corner location near the market is the original. €3–6 for a full breakfast. Indispensable for budget travellers and anyone who wakes up before noon.",
                  b: "Best breakfast",
                  c: "bg-parchment border-parchment-2",
                },
              ].map((r) => (
                <div key={r.n} className={`rounded-xl p-4 border ${r.c}`}>
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{r.n}</p>
                      <p className="text-xs text-muted font-light">{r.t}</p>
                    </div>
                    <span className="text-xs bg-white/80 text-amber-700 px-2.5 py-1 rounded-full border border-amber-200 font-medium">{r.b}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{r.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate Block */}
          <AffiliateBlock
            destination="Ibiza Spain"
            hotels={[
              {
                name: "Nobu Hotel Ibiza Bay",
                type: "Luxury · Ibiza Town seafront",
                price: "From €350/night",
                rating: "5",
                badge: "Most glamorous",
                url: "https://www.booking.com/hotel/es/nobu-ibiza-bay.html?aid=2820480",
              },
              {
                name: "Pikes Hotel Ibiza",
                type: "Boutique · San Antonio hills",
                price: "From €200/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/es/pikes-ibiza.html?aid=2820480",
              },
              {
                name: "Hostal La Torre",
                type: "Boutique · North coast cliffs",
                price: "From €120/night",
                rating: "4",
                badge: "Best sunsets",
                url: "https://www.booking.com/hotel/es/hostal-la-torre-ibiza.html?aid=2820480",
              },
              {
                name: "Ibiza Town Marina Hotel",
                type: "Mid-range · Marina area",
                price: "From €85/night",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/searchresults.html?ss=ibiza+town+marina&aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Ibiza Boat Party",
                duration: "4 hrs",
                price: "From €50/person",
                badge: "Most fun",
                url: "https://www.getyourguide.com/s/?q=ibiza+boat+party&partner_id=PSZA5UI",
              },
              {
                name: "Dalt Vila Walking Tour",
                duration: "2 hrs",
                price: "From €18/person",
                badge: "Best intro",
                url: "https://www.getyourguide.com/s/?q=ibiza+dalt+vila+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Formentera Day Trip from Ibiza",
                duration: "Full day",
                price: "From €35/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=formentera+day+trip+ibiza&partner_id=PSZA5UI",
              },
              {
                name: "Ibiza Sea Caves Kayak Tour",
                duration: "3 hrs",
                price: "From €40/person",
                badge: "Best activity",
                url: "https://www.getyourguide.com/s/?q=ibiza+kayak+sea+caves&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Ibiza</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🌡️",
                  title: "Going in July or August on a budget",
                  desc: "Ibiza in peak season (mid-July to late August) is extraordinarily expensive. Hostel dorms hit €60–80/night, beaches are overcrowded, club queues run for hours, and restaurant prices double. May–June and September give you 80% of the experience at 40% of the cost, with weather that is honestly better than you&apos;d expect.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🎫",
                  title: "Not pre-booking club tickets",
                  desc: "Walking up to Pacha or Amnesia on a peak night expecting to pay at the door is a mistake that will cost you €150+ or result in outright refusal. Buy tickets online at least a week ahead from the official club websites only — avoid touts completely. The cheapest tickets sell out first and midweek nights offer far better value.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🏝️",
                  title: "Only visiting the party side of the island",
                  desc: "The north of Ibiza — San Juan, Portinatx, Cala Salada, the rural finca country — is a completely different world: pine forests, traditional whitewashed villages, hidden coves, and a pace of life that hasn&apos;t changed in decades. Even if you&apos;re there exclusively for the music, spend at least half a day in the north. You won&apos;t regret it.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "⛴️",
                  title: "Missing Formentera",
                  desc: "Formentera is a 25-minute ferry from Ibiza Town and has some of the finest beaches in the entire Mediterranean — Ses Illetes consistently features in top-ten European beach lists. Many visitors skip it because they think it requires complicated planning. It doesn&apos;t. Buy a return ticket at the port (shoulder season) or book online (peak), get on, cycle to Ses Illetes.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🚖",
                  title: "Relying on taxis after club nights",
                  desc: "Getting a taxi in Ibiza between 2am and 5am is genuinely difficult. Uber and Cabify operate with limited availability. Plan your return transport before you go out — pre-book a driver, use the official taxi rank queue, or stay within walking distance of the venue. Getting stranded outside Amnesia at 4am is one of Ibiza&apos;s less glamorous experiences.",
                  color: "bg-red-50 border-red-200",
                },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-5 border ${m.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{m.icon}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900 mb-1">{m.title}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Ibiza</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "The Café del Mar sunset is free",
                  desc: "The famous Sunset Strip along San Antonio Bay is a public promenade. You can watch the exact same sunset that everyone is paying €15 for a cocktail to see, from the path outside, for nothing. The music still reaches you, the view is identical. If you want the terrace experience, go on a weeknight and arrive early.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🏄",
                  title: "Cala Salada is the best beach most tourists miss",
                  desc: "While tourists pack Ses Salines and Cala Conta (both excellent), Cala Salada near San Antonio has pine-forest shade, crystalline water, and a fraction of the crowds. Accessible via a steep path (10 minutes walk) or by boat. Go on a weekday morning for the best experience — it&apos;s a genuinely beautiful double cove.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🎶",
                  title: "Boat parties offer better value than club nights",
                  desc: "Boat parties — Elrow at sea, various smaller operators — offer 4-hour cruises with top DJs, open bars, and Mediterranean swimming stops for €50–80. Compared to a club night at €80+ entry plus €15–20 per drink, a boat party often delivers more music, better atmosphere, and a swim in the sea. Book via official websites only.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🗓️",
                  title: "DC10 Monday Circoloco for the real Ibiza",
                  desc: "If you care about electronic music history, DC10 on Monday mornings is the authentic experience — a party that started in an improvised outdoor space next to the airport runway and became one of the most influential clubs in dance music history. Entry €20–60, genuinely underground atmosphere, no tourist veneer.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🧭",
                  title: "Rent a scooter for the north",
                  desc: "The north of Ibiza — San Juan, Portinatx, the rural interior — is very poorly served by public transport. A scooter (€25–35/day) or small car (€35–50/day) transforms what you can see in a day. The coastal road from Portinatx round to Cala Xarraca is one of the most beautiful drives on the island.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🌿",
                  title: "Las Dalias Saturday market is unmissable",
                  desc: "The Las Dalias hippie market in San Carlos (open Saturdays in season, 10am–8pm) is one of the most authentic experiences on the island — crafts, jewellery, clothing, incense, food stalls, and live music in the courtyard of a bar that has been running since 1954. Bus from Ibiza Town, €2. Completely free entry.",
                  color: "bg-teal-50 border-teal-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Ibiza" />

          {/* Combine With */}
          <CombineWith currentSlug="ibiza-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Ibiza worth visiting if you don&apos;t like clubs?",
                  a: "Absolutely. Ibiza has some of the finest beaches in the Mediterranean, a UNESCO World Heritage old town (Dalt Vila), excellent walking and cycling routes, Formentera immediately accessible by ferry, hippie markets, a growing wellness and yoga scene, and first-rate food at all price points. The club reputation is real and applies to specific areas — mostly San Antonio and Playa d&apos;en Bossa. Stay in Ibiza Town or the north and you can entirely avoid the party atmosphere if you choose.",
                },
                {
                  q: "Which clubs should a first-time visitor go to?",
                  a: "Pacha is the most iconic — founded in 1973, the original Ibiza club, intimate by superclub standards, famous for its cherry logo. Amnesia is the cave-like legendary venue with a glass roof and extraordinary atmosphere. Hi Ibiza (former Space) has the most impressive production. For a daytime party, Ushuaïa on Playa d&apos;en Bossa is the open-air pool superclub. For underground credibility, DC10 Circoloco on Monday mornings. Pick one for a first visit and do it properly.",
                },
                {
                  q: "When is the Ibiza club season?",
                  a: "The season runs from the opening parties in late May through to the closing parties in early October. July and August are peak — the biggest names, highest prices, most people. June and September offer nearly the same lineup at significantly lower ticket prices and without extreme crowding. The closing parties (late September to early October) are often cited as the best nights of the year — resident DJs play their finest sets with a full room of people who have been there all summer.",
                },
                {
                  q: "How do I get from Ibiza to Formentera?",
                  a: "Regular ferry services run from Ibiza Town port (Estació Marítima) to La Savina on Formentera. The fast ferry takes 25–35 minutes, the slower one about 1 hour. Return tickets cost €25–38 depending on season and operator — Baleàlia Lines and Trasmapi are the main operators. In peak season (July–August), book online at least a day in advance. First ferries depart around 7–8am; last returns around 10pm.",
                },
                {
                  q: "What is the best area to stay in Ibiza?",
                  a: "Ibiza Town (Eivissa) is the best base for most visitors — Dalt Vila on your doorstep, good bus connections to beaches and airports, the widest choice of restaurants, and a genuine sense of place. San Antonio is cheaper but significantly noisier in summer. The north (San Juan, Santa Gertrudis) is beautiful and peaceful but requires a car. Avoid Playa d&apos;en Bossa unless you specifically want beach club proximity.",
                },
                {
                  q: "How much does a club night in Ibiza cost?",
                  a: "Entry alone: €30–80 in shoulder season, €60–150+ in peak season (July–August), depending on the club and the DJ. Drinks inside clubs: €10–20 each. A realistic budget for one club night including entry, four drinks, and taxis in and out is €80–150 (shoulder) or €150–300+ (peak). VIP tables require minimum spends of €500–2,000+. The way to reduce costs: pre-book tickets online (cheapest tier sells out first), go midweek, go in June or September.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto px-6 md:px-8 mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Ibiza trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/ibiza-club-guide", label: "Ibiza club guide", icon: "🎶" },
                { href: "/blog/formentera-day-trip", label: "Formentera day trip", icon: "⛴️" },
                { href: "/blog/ibiza-budget-travel", label: "Budget in Ibiza", icon: "💰" },
                { href: "/blog/ibiza-hidden-beaches", label: "Hidden beaches", icon: "🏖️" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-parchment border border-parchment-2 rounded-xl hover:border-gold hover:shadow-sm transition-all text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-ink leading-tight">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Guides */}
          <RelatedGuides currentSlug="ibiza-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Amalfi Coast in 4 Days — Cliffs &amp; Villages", href: "/blog/amalfi-coast-4-days" },
                { label: "Madrid in 3 Days — Art &amp; Tapas", href: "/blog/madrid-3-days" },
                { label: "Seville in 3 Days — Flamenco &amp; Tapas", href: "/blog/seville-3-days" },
                { label: "Florence in 3 Days — Renaissance Art", href: "/blog/florence-3-days" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group"
                >
                  <span
                    className="text-sm text-ink font-light group-hover:text-teal transition-colors"
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  />
                  <span className="text-xs text-muted">Read →</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
