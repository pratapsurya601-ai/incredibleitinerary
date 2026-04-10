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
const HAMBURG_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Hamburg Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",   emoji: "🏛️", label: "Landmark Guide" },
  { id: "budget",      emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",         emoji: "🍽️", label: "Where to Eat" },
  { id: "tips",        emoji: "💡",  label: "Pro Tips" },
  { id: "faq",         emoji: "❓",  label: "FAQ" },
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
          href: `mailto:?subject=Hamburg 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Hamburg in 3 Days — Speicherstadt, Elbphilharmonie and the Sunday Fischmarkt&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/hamburg-3-days"
        imageUrl="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=80"
        description="Hamburg in 3 Days: Speicherstadt, Elbphilharmonie, Sunday Fischmarkt, and the Reeperbahn — complete travel guide with budget breakdown from €55/day."
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
export default function HamburgClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={HAMBURG_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Hamburg" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="hamburg speicherstadt red brick warehouses canal germany"
            fallback="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1600&q=80"
            alt="Hamburg Speicherstadt red brick warehouse district reflected in canals at dusk"
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
              <span className="text-white/70">Hamburg 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Hamburg in 3 Days:
                <em className="italic text-amber-300"> Speicherstadt, Elbphilharmonie &amp; the Sunday Fischmarkt</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                UNESCO red-brick warehouses, the world&apos;s greatest concert hall rising above the Elbe, a dawn fish market that feels like a carnival, and the planet&apos;s largest model railway. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="12 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇩🇪 Hamburg, Germany</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From €55/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Hamburg is Germany&apos;s most underrated city — a harbour metropolis that built its fortune on trade, perfected its reinvention in the Elbphilharmonie and HafenCity, and never forgot how to have a good time on the Reeperbahn.
            </p>
          </blockquote>

          {/* ── WHAT HAMBURG ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Hamburg Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Hamburg is Germany&apos;s second-largest city and Europe&apos;s third-biggest port — but it doesn&apos;t feel like either of those things when you&apos;re standing in the Speicherstadt. The UNESCO-listed warehouse district, built 1883–1927 on timber piles over Elbe tributaries, is the most romantic brick cityscape in Europe: Gothic Revival red-brick canyons reflected in dark green canals, drawbridges creaking, the smell of coffee and spices still drifting from the old storage buildings.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Beside it, HafenCity is Europe&apos;s largest inner-city urban regeneration project — a brand-new city district built on former docklands, crowned by the Elbphilharmonie. The concert hall, designed by Herzog &amp; de Meuron and opened in 2017, sits on a 19th-century warehouse like a glass wave frozen mid-break. Its Grand Hall is widely considered the finest acoustic space built anywhere in the world this century. The free public Plaza at 37 metres gives the best harbour panorama in northern Germany.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Add to this: the Alster lakes giving Hamburg a serene Nordic heart, the Sunday Fischmarkt at Altona running since 1703 and still starting at 5am, Miniatur Wunderland with 15km of model railway, and the Reeperbahn — Europe&apos;s most famous entertainment mile — and you have a city that rewards curious visitors at every budget level. Three days is enough to feel Hamburg properly.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport to City" value="25 min" />
              <StatCard icon="🌡️" label="Best Season" value="May–Sep" />
              <StatCard icon="🏛️" label="UNESCO District" value="Speicherstadt" />
              <StatCard icon="💰" label="Budget From" value="€55/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Hamburg</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Sep",
                  i: "☀️",
                  t: "Summer — Best Season",
                  d: "15–25°C, long days (light until 10pm in June), outdoor cafes along the Alster, Planten un Blomen water-light concerts (free, nightly May–Sep), Fischmarkt at its liveliest. July and August are peak and can be busy at Miniatur Wunderland. The best all-round window for first-time visitors.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Oct–Nov",
                  i: "🍂",
                  t: "Autumn — Atmospheric",
                  d: "10–16°C with occasional rain, but the Speicherstadt canals reflect misty morning light beautifully and crowds at Miniatur Wunderland thin out significantly. Elbphilharmonie concert season is at its richest. A good choice if you want the full cultural experience without summer prices.",
                  b: "Good for culture",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Dec–Feb",
                  i: "❄️",
                  t: "Winter — Cold but Festive",
                  d: "2–6°C and damp, but Hamburg&apos;s Christmas markets (November–December) are some of Germany&apos;s finest. The Speicherstadt glows with decorations. January–February is the quietest period — lowest prices, no queues at Miniatur Wunderland, and the Elbphilharmonie is at full programming.",
                  b: "Low season deals",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Mar–Apr",
                  i: "🌸",
                  t: "Spring — Emerging Season",
                  d: "8–15°C with longer days arriving quickly. The Alster blooms, outdoor terrace season begins, and the city feels fresh. Easter weekend brings large crowds to the Fischmarkt. A viable shoulder-season option with good prices and reasonable weather.",
                  b: "For shoulder season",
                  c: "bg-rose-50 border-rose-200",
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

          {/* ── GETTING THERE ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Hamburg</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Hamburg Airport (HAM) is just 8km from the city centre. The <strong className="font-medium">S1 S-Bahn train</strong> runs every 10 minutes, takes 25 minutes to Hamburg Hauptbahnhof, and costs €3.50 — the easiest airport connection in Germany.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Hamburg Airport (HAM) by S-Bahn (recommended)",
                  d: "Take the S1 S-Bahn from Hamburg Airport (Flughafen) to Hauptbahnhof: 25 minutes, every 10 minutes, €3.50 single or covered by Hamburg Card. The train runs from 4:30am to 1am daily. Taxis cost €25–35 and take 20–35 minutes depending on traffic.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚄",
                  t: "Train from Berlin (ICE)",
                  d: "Berlin Hauptbahnhof to Hamburg Hauptbahnhof: 1 hr 45 min by ICE high-speed train, from €29.90 if booked in advance (up to €79 on the day). Trains run every 30–60 minutes. Hamburg is one of Germany&apos;s most frequent intercity rail connections.",
                  b: "From Berlin",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚄",
                  t: "Train from Copenhagen (EC/IC)",
                  d: "Copenhagen Central to Hamburg Hauptbahnhof: 5 hours by the Hamburg–Copenhagen corridor with the Puttgarden ferry connection (trains board the ferry). From €39. Direct through-trains are being restored as the Fehmarn Belt tunnel project progresses.",
                  b: "From Scandinavia",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚌",
                  t: "FlixBus from other German cities",
                  d: "FlixBus operates to Hamburg from Frankfurt (6 hrs, from €15), Cologne (5 hrs, from €12), and many other German cities. Buses arrive at ZOB Hamburg (central bus station), 5 minutes&apos; walk from Hauptbahnhof. The cheapest option but significantly slower than ICE rail.",
                  b: "Budget option",
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

          {/* ── 3-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Hamburg Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is designed to make the most of Hamburg&apos;s walkable core — most of the key sights between Speicherstadt and the Alster are within 2km of each other.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Speicherstadt, HafenCity & Miniatur Wunderland"
                cost="€55–75 (Hamburg Card, Miniatur Wunderland, food)"
                items={[
                  "10:00 — Arrive Hamburg Hauptbahnhof; buy a Hamburg Card (€13.90/day, covers all HVV public transport — U-Bahn, S-Bahn, buses, harbour ferries — plus discounts at 150+ attractions including 50% off Miniatur Wunderland). The card pays for itself within 2 rides plus one museum.",
                  "11:00 — Walk into the Speicherstadt warehouse district via Poggenmühlen Bridge — the largest warehouse complex in the world, built 1883–1927 on timber piles over Elbe tributaries, UNESCO-listed since 2015. The red-brick Gothic Revival canyons are best photographed from the canal bridges at Am Sandtorkai and Holländischbrookfleet.",
                  "12:30 — Lunch in the Speicherstadt or at the Fleetinsel food court — currywurst and fries from €5; the Speicherstadt Kaffeerösterei roastery café is excellent for filter coffee and homemade cake (€6–8). The whole district smells faintly of coffee, tea, and spices from the remaining commodity traders.",
                  "14:00 — Walk through HafenCity — Europe&apos;s largest inner-city urban regeneration project covering 157 hectares of former docklands. The waterfront promenade along the Elbe is free and spectacular: modern towers, sensitively restored warehouses, and the Elbphilharmonie rising at the western tip.",
                  "16:00 — Miniatur Wunderland (book online at miniatur-wunderland.de, €20, or €10 with Hamburg Card 50% discount) — the world&apos;s largest model railway with 15.7km of track, over 1,000 trains, and photorealistic miniature versions of Hamburg, the Alps, Scandinavia, the US, and a functioning miniature Hamburg Airport complete with landing lights. Allow 2.5–3 hours. Without advance booking, queues are 90 minutes in summer.",
                  "19:30 — Dinner in the Schanzenviertel (Schanze) — Hamburg&apos;s bohemian quarter west of the Alster has the best budget dining in the city: falafel wraps, Vietnamese pho, Turkish pide, and craft beer bars all for €8–14. Take U3 to Feldstraße.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Elbphilharmonie Plaza, Alster Lakes & Planten un Blomen"
                cost="€45–65 (bike rental, Rathaus, food)"
                items={[
                  "09:00 — Elbphilharmonie Plaza (free entry, book timed ticket at elbphilharmonie.de at least 3 days ahead — tickets release at midnight Hamburg time and go quickly). The 37-metre public viewing platform wraps around the exterior of the concert hall; the views across the Elbe harbour and into HafenCity are the finest urban panorama in northern Germany. The wavy glass facade, designed by Herzog &amp; de Meuron, is extraordinary up close.",
                  "11:00 — Walk or cycle along the Binnenalster and Außenalster lakefront — Hamburg&apos;s twin inner lakes are the green heart of the city. Rent a bike from StadtRAD Hamburg (€1.50 to unlock, first 30 minutes free) and circle the Außenalster (6km, flat, beautiful waterfront path). Alternatively, rent a paddleboat (€15/hr) from the Alster boat hire at the Jungfernstieg promenade.",
                  "13:00 — Lunch near Rathausmarkt in the Altstadt — the Alsterarkaden shopping arcade beside the Rathaus has excellent affordable food stalls and cafés (€8–12). Try a fish sandwich (Fischbrötchen, €5) from one of the market stalls — the defining Hamburg street food.",
                  "14:30 — Hamburg Rathaus exterior and Rathausmarkt square — the neo-Renaissance city hall (1897) is one of Germany&apos;s grandest civic buildings, with 647 rooms. Free to walk around the exterior; interior tours cost €5 on weekdays and are worth the 45 minutes.",
                  "16:30 — Planten un Blomen park (free) — Hamburg&apos;s finest urban park, 47 hectares with Japanese gardens, tropical greenhouses, and open-air concerts in summer. The water-light concert (Wasserlichtkonzert) at the central pond runs nightly May–September at 10pm — free, and genuinely beautiful.",
                  "19:30 — Evening at a HafenCity restaurant with Elbe views — Störtebeker Elbphilharmonie or the ELPHI Snackbar on the Magellan-Terrassen have excellent views; main courses €15–22. If your budget allows, an Elbphilharmonie evening concert (€25–120) is an acoustic experience unlike any other.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Sunday Fischmarkt Dawn, Harbour Walk & Reeperbahn"
                cost="€50–70 (harbour boat tour, Fischmarkt, food)"
                items={[
                  "05:00 — Hamburg Fischmarkt (Fish Market) at Altona — runs every Sunday 5am–9:30am year-round, continuously since 1703. A chaotic, loud, magnificent harbour market where fishmongers auction everything from eels to tropical fruit to antiques at full theatrical volume. The Fischauktionshalle (fish auction hall) serves breakfast beer (Astra Urtyp, €3.50) and fresh fish sandwiches (Fischbrötchen, €5) from 5am while a live band plays jazz or schlager inside. Arrive between 5 and 7am for the best atmosphere. Take S1/S3 to Reeperbahn then walk 10 minutes west.",
                  "09:30 — Walk along the Elbe waterfront from Altona to the Landungsbrücken harbour piers (2.5km) — the finest waterfront promenade in northern Europe. Watch container ships, tugboats, and river cruise liners navigate the tidal Elbe. The Övelgönne beach and the Museumshafen (museum harbour with historic vessels) are en route.",
                  "11:30 — Hamburg Harbour boat tour (€18, 1 hour, departing from Landungsbrücken pier 3) — the best way to understand the scale of Europe&apos;s third-largest port. Commentary explains the history of each dock, the Blohm+Voss shipyard, and the container terminal that handles 8 million TEU per year. Alternatively, take the HADAG harbour ferry Line 62 (covered by Hamburg Card) from Landungsbrücken to Finkenwerder — a free 30-minute sightseeing cruise.",
                  "13:30 — Lunch at the Landungsbrücken fish stalls — fresh Bismarck herring roll (Fischbrötchen, €4–6) eaten standing at the harbour is the definitive Hamburg street food ritual. The stalls at piers 1–3 have the most variety.",
                  "15:00 — Reeperbahn and St Pauli neighbourhood walk — by day, Hamburg&apos;s famous entertainment mile is a fascinating mix of neon-lit clubs, independent record shops, street art, and cafés. The Beatles lived and performed in Hamburg 1960–62 and the memorial plaque at Grosse Freiheit 36 (the original Kaiserkeller club site) is a genuine pilgrimage spot for music fans.",
                  "19:00 — Final evening in the Schanzenviertel — the city&apos;s most lively dinner and bar district. Budget €20–35 for food and drinks. Try a final Astra Urtyp beer — Hamburg&apos;s unofficial civic lager, identifiable by its anchor logo — before heading back.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Hamburg" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Hamburg Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential Hamburg sights in priority order. Prices as of 2026 — book Miniatur Wunderland and Elbphilharmonie Plaza well in advance to avoid long waits.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Miniatur Wunderland",
                  e: "€20 (€10 with Hamburg Card 50% discount)",
                  d: "The world&apos;s largest model railway with 15.7km of track, over 1,000 trains, and extraordinarily detailed miniature landscapes including Hamburg, Scandinavia, the US, Italy, and a fully functional miniature Hamburg Airport with departing and landing aircraft. Genuinely jaw-dropping even for adults. Allow 2.5–3 hours. Book online at miniatur-wunderland.de — summer queues without booking are 90 minutes.",
                  t: "Must see · 2.5–3 hrs",
                },
                {
                  n: "Speicherstadt Warehouse District",
                  e: "Free (walking); individual museums €8–12",
                  d: "The largest warehouse complex in the world, built 1883–1927 on timber piles over Elbe tributaries, UNESCO-listed since 2015. Walk the canal bridges for free — the red-brick Gothic Revival architecture is finest photographed from Poggenmühlen Bridge and Holländischbrookfleet. The Miniaturmuseum, Spice Museum (Gewürzmuseum), and Carpet Museum are within the district.",
                  t: "Must see · 1.5 hrs walking",
                },
                {
                  n: "Elbphilharmonie Plaza",
                  e: "Free (timed ticket required, book online)",
                  d: "The 37-metre public viewing platform wrapping the exterior of the Elbphilharmonie concert hall — the finest urban panorama in northern Germany. The wave-shaped glass facade by Herzog &amp; de Meuron (2017) is extraordinary up close. Book via elbphilharmonie.de: tickets release 3 days ahead at midnight and go within hours. Concerts cost €10–120 depending on programme.",
                  t: "Must do · 45 min",
                },
                {
                  n: "Fischmarkt (Sunday Fish Market)",
                  e: "Free entry; Fischbrötchen €5",
                  d: "Hamburg&apos;s Sunday fish market at Altona runs 5am–9:30am year-round, continuously since 1703. Fishmongers auction eels, fruit, and antiques with theatrical volume; the Fischauktionshalle serves breakfast beer and fish rolls while live music plays. Arrive between 5–7am. Best atmosphere in Hamburg — nothing else comes close.",
                  t: "Sunday only · 5am–9:30am",
                },
                {
                  n: "Alster Lakes (Außenalster)",
                  e: "Free to walk; paddleboat €15/hr",
                  d: "Hamburg&apos;s twin inner lakes — Binnenalster and Außenalster — form the city&apos;s green heart. The 6km Außenalster circuit is Hamburg&apos;s best flat cycle or run with views of the city skyline. Rent a paddleboat or rowing boat from the Jungfernstieg hire point (€15/hr paddleboat). The lakefront at golden hour rivals Amsterdam for beauty.",
                  t: "Best at sunset · 45 min–2 hrs",
                },
                {
                  n: "Reeperbahn & St Pauli",
                  e: "Free to walk; club entry €5–15",
                  d: "Europe&apos;s most famous entertainment mile is not just nightlife: by day St Pauli is a fascinating neighbourhood with street art, the Beatles memorial at Grosse Freiheit, independent shops, and excellent cafés. The Reeperbahn is worth a daytime stroll before returning after 10pm for the full experience. The Beatles played here 1960–62 and the neighbourhood&apos;s musical history is extraordinary.",
                  t: "Day & night · 1.5 hrs",
                },
                {
                  n: "Planten un Blomen",
                  e: "Free",
                  d: "Hamburg&apos;s finest urban park, 47 hectares with Japanese garden, tropical greenhouses, and open-air concerts. The water-light concert (Wasserlichtkonzert) at the central pond runs nightly May–September at 10pm — choreographed fountains with music and coloured lighting, completely free. One of Hamburg&apos;s great hidden pleasures.",
                  t: "Free · 1 hr",
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
            title="Hamburg — Warehouses, Water &amp; the Elbe"
            subtitle="The Speicherstadt, Elbphilharmonie, Alster lakes and harbour at their finest."
            spots={[
              {
                name: "Speicherstadt Canal Reflections",
                query: "hamburg speicherstadt red brick warehouse canal reflection germany",
                desc: "The UNESCO-listed Speicherstadt district — Gothic Revival brick canyons reflected in the dark green canal water at dusk.",
              },
              {
                name: "Elbphilharmonie at Sunset",
                query: "elbphilharmonie hamburg concert hall elbe river sunset germany",
                desc: "Herzog &amp; de Meuron&apos;s wave-shaped glass concert hall rising above the Elbe — the finest new building in Germany this century.",
              },
              {
                name: "Hamburg Harbour Landungsbrücken",
                query: "hamburg landungsbrucken harbour piers elbe river ships germany",
                desc: "The Landungsbrücken floating piers with container ships and tugboats navigating Europe&apos;s third-largest port.",
              },
              {
                name: "Alster Lake Hamburg",
                query: "hamburg alster lake city skyline reflection boats germany",
                desc: "The Binnenalster with Hamburg&apos;s city hall and church spires reflected at golden hour — the city&apos;s serene Nordic heart.",
              },
              {
                name: "Miniatur Wunderland Hamburg",
                query: "miniatur wunderland hamburg model railway miniature world germany",
                desc: "The world&apos;s largest model railway — 15.7km of track, over 1,000 trains, and a photorealistic miniature Hamburg Airport.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Hamburg is an expensive northern European city but the Hamburg Card cuts costs significantly. The main variable is accommodation — which ranges from €18 hostel dorms to €500+ grand hotel suites.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation", "€18–30 (hostel dorm)", "€95–150 (4-star hotel)", "€250–500 (Fontenay / Vier Jahreszeiten)"],
                    ["🍽️ Food", "€15–25 (Schanze, Fischbrötchen)", "€40–60 (restaurants, fish market)", "€120–200 (Michelin, fine seafood)"],
                    ["🚇 Transport", "€5–14 (Hamburg Card day pass)", "€10–20 (Hamburg Card + taxi)", "€60–120 (private transfers, yacht)"],
                    ["🎟️ Activities", "€15–25 (Miniatur Wunderland, boat tour)", "€35–55 (Elbphilharmonie, guided tours)", "€100–250 (private tours, concerts)"],
                    ["TOTAL/day", "€55–80", "€120–170", "€280–450+"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€55–80/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in Generator Hamburg or A&amp;O hostels (€18–30/night), eat in the Schanzenviertel and at Fischbrötchen stalls, use the Hamburg Card for all transport and museum discounts. Completely comfortable — Hamburg&apos;s hostel infrastructure is excellent.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€120–170/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay at 25hours Hotel HafenCity or similar (€95–150/night), dine at Die Bank Brasserie or Nil Restaurant, take one guided tour. This is the sweet spot — you get the Elbphilharmonie area hotels with harbour views without paying grand hotel prices.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (€280–450+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Stay at Hotel Atlantic Hamburg or The Fontenay (€250–500/night), dine at Haerlin (2 Michelin stars, Vier Jahreszeiten), take private harbour yacht tours, and attend Elbphilharmonie Grand Hall concerts in the premium tier.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Hamburg</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              For first-time visitors, HafenCity and Neustadt are the best areas — walkable to Speicherstadt, Elbphilharmonie, and well-connected by U-Bahn. The Schanzenviertel is excellent for those who want the nightlife and dining scene immediately outside the door. Avoid the area immediately around Hamburg Hauptbahnhof — it is Hamburg&apos;s roughest neighbourhood.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Hotel Atlantic Hamburg",
                  type: "Grand historic hotel · Alster lakefront",
                  price: "From €180/night",
                  badge: "Most iconic",
                  desc: "Hamburg&apos;s most famous hotel — a 1909 Wilhelmine palace on the Außenalster, famously associated with Marlene Dietrich and the Hamburg entertainment world. The lakefront rooms have extraordinary Alster views. Impeccable service, grand lobby, and the benchmark for classic Hamburg luxury.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "25hours Hotel HafenCity",
                  type: "Design hotel · HafenCity",
                  price: "From €110/night",
                  badge: "Best for location",
                  desc: "A design hotel in the heart of HafenCity — five minutes&apos; walk to both Speicherstadt and the Elbphilharmonie. Shipping-container-inspired interiors with genuinely playful design, excellent rooftop bar, and the perfect position for the main sights. The best mid-range choice in Hamburg.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Meininger Hamburg City Center",
                  type: "Budget hotel / hostel hybrid · St Pauli",
                  price: "From €22 (dorm) / €65 (private)",
                  badge: "Best budget",
                  desc: "The most comfortable budget option in Hamburg — private rooms and dorms in a well-run property near St Pauli. Clean, modern, with a good common area. Five minutes from the Reeperbahn and 15 minutes by U-Bahn to HafenCity. Ideal for solo and budget travellers.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "The Fontenay",
                  type: "Contemporary luxury · Alster shore",
                  price: "From €350/night",
                  badge: "Most exclusive",
                  desc: "Hamburg&apos;s most architecturally significant luxury hotel — a contemporary circular tower on the Alster shore, opened in 2018. Every room has Alster views. Two restaurants, a spa, and a level of service that rivals any hotel in Germany. The most personal and modern of Hamburg&apos;s luxury options.",
                  color: "border-purple-200 bg-purple-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Hamburg</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Hamburg&apos;s food scene ranges from Fischbrötchen (fish sandwiches, €5) eaten standing at the harbour to two-Michelin-star dining at Haerlin. The Schanzenviertel has the highest density of good independent restaurants at every price point.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Die Bank Brasserie",
                  t: "Upscale brasserie · Neustadt",
                  d: "A spectacular restaurant inside a converted 1897 banking hall — vaulted ceilings, marble columns, and excellent contemporary German-French cuisine. The Schnitzel and Hamburg-style fish dishes are standouts. Mains €22–38; the lunch menu offers excellent value at €19 for two courses. Reserve ahead for weekend evenings. One of Hamburg&apos;s most beautiful dining rooms.",
                  b: "Most atmospheric",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Nil Restaurant",
                  t: "Modern German · Schanzenviertel",
                  d: "One of Hamburg&apos;s best mid-range restaurants — seasonal German cuisine with North Sea influences in a relaxed Schanze setting. The daily changing menu uses locally sourced fish, vegetables, and meats. Mains €18–28. Unpretentious, consistently excellent, and popular with local regulars. Book ahead for Thursday–Saturday.",
                  b: "Best local food",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Henssler Henssler",
                  t: "Sushi / Japanese fusion · HafenCity",
                  d: "Celebrity chef Steffen Henssler&apos;s flagship restaurant in HafenCity — exceptional Japanese-influenced cuisine with a Hamburg harbour-fresh ingredient philosophy. The omakase sushi counter is the premium option; the broader menu is excellent and more accessible. Mains €18–35. One of Hamburg&apos;s most popular restaurants — book at least a week ahead.",
                  b: "Must book ahead",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Fischbrötchen Stalls (Landungsbrücken & Fischmarkt)",
                  t: "Street food · Harbour waterfront",
                  d: "The definitive Hamburg street food — fresh Bismarck herring, smoked eel, or North Sea shrimp in a crusty bread roll (Fischbrötchen), €4–6. The stalls at piers 1–3 of Landungsbrücken and at the Sunday Fischmarkt have the best variety and freshness. Eat standing at the harbour watching the container ships pass — this is Hamburg at its most elemental.",
                  b: "Essential Hamburg",
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
            destination="Hamburg Germany"
            hotels={[
              {
                name: "25hours Hotel HafenCity",
                type: "Design hotel · HafenCity, near Elbphilharmonie",
                price: "From €110/night",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/de/25hours-hafencity.html?aid=2820480",
              },
              {
                name: "Hotel Atlantic Hamburg",
                type: "Grand historic · Alster lakefront",
                price: "From €180/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/de/atlantic-hamburg.html?aid=2820480",
              },
              {
                name: "Meininger Hamburg City Center",
                type: "Budget hotel/hostel · St Pauli",
                price: "From €22/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/de/meininger-hamburg-city-center.html?aid=2820480",
              },
              {
                name: "The Fontenay Hamburg",
                type: "Contemporary luxury · Alster shore",
                price: "From €350/night",
                rating: "5",
                badge: "Most exclusive",
                url: "https://www.booking.com/hotel/de/the-fontenay.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Miniatur Wunderland Skip-the-Line Ticket",
                duration: "2.5–3 hrs",
                price: "From €20/person",
                badge: "Must book ahead",
                url: "https://www.getyourguide.com/s/?q=Miniatur+Wunderland+Hamburg&partner_id=PSZA5UI",
              },
              {
                name: "Hamburg Harbour Boat Tour",
                duration: "1 hr",
                price: "From €18/person",
                badge: "Classic",
                url: "https://www.getyourguide.com/s/?q=Hamburg+harbour+boat+tour&partner_id=PSZA5UI",
              },
              {
                name: "Speicherstadt Walking Tour",
                duration: "2 hrs",
                price: "From €20/person",
                url: "https://www.getyourguide.com/s/?q=Hamburg+Speicherstadt+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Hamburg City Highlights Guided Tour",
                duration: "3 hrs",
                price: "From €22/person",
                url: "https://www.getyourguide.com/s/?q=Hamburg+city+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Hamburg</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🎰",
                  title: "Treating the Reeperbahn as Hamburg&apos;s main attraction",
                  desc: "The Reeperbahn is worth an afternoon but it is just one small slice of a city that has Speicherstadt, HafenCity, the Alster lakes, Blankenese, and Planten un Blomen. Many visitors over-schedule St Pauli and under-schedule the far more distinctive harbour and warehouse districts — the result is missing the best of Hamburg.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🚂",
                  title: "Missing Miniatur Wunderland without booking in advance",
                  desc: "Miniatur Wunderland has a 2–3 hour queue without advance tickets in summer and on weekends. Book online at miniatur-wunderland.de at least 3–5 days ahead. The last entry is typically 6pm and the museum is worth every minute of the 2.5-hour visit — it is genuinely one of the most impressive attractions in Germany.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏛️",
                  title: "Booking Elbphilharmonie Plaza tickets too late",
                  desc: "The free Plaza viewing platform tickets release 3 days ahead at midnight Hamburg time and are claimed within hours. Check elbphilharmonie.de on the morning of the release day and book immediately. Concerts require 6–8 weeks advance booking for premium Grand Hall seats; the Kleiner Saal (small hall) has better availability.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🐟",
                  title: "Arriving at the Fischmarkt after 8am on Sunday",
                  desc: "The Hamburg Fish Market closes at 9:30am sharp on Sundays and the best atmosphere — fish auctions, breakfast beer, live band in the auction hall — happens between 5am and 7:30am. Arriving at 9am means crowds, reduced stalls, and no seating inside the Fischauktionshalle. Set the alarm.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🚲",
                  title: "Not renting a bike for the Alster circuit",
                  desc: "Hamburg is one of Germany&apos;s most cycle-friendly cities and the Außenalster circuit (6km, flat, scenic) is far better done by bike than on foot. StadtRAD Hamburg city bikes cost €1.50 to unlock with the first 30 minutes free — the full Alster loop takes about 45 minutes and passes some of Hamburg&apos;s finest lakefront architecture.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Hamburg</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎫",
                  title: "Buy the Hamburg Card immediately on arrival",
                  desc: "The Hamburg Card (€13.90/day, €38.50/3 days) covers all HVV buses, U-Bahn, S-Bahn, and harbour ferry lines plus discounts at 150+ museums and attractions — including 50% off Miniatur Wunderland (saving €10 on the entry price alone). Available from the airport S-Bahn machines. Buy it before you board the S1 from the airport.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🐟",
                  title: "Go to the Fischmarkt early — really early",
                  desc: "The Sunday Fischmarkt at Altona is at its best between 5am and 7am. The Fischauktionshalle serves Astra Urtyp beer and Fischbrötchen (fresh fish rolls, €5) while a live jazz or schlager band plays inside. The outdoor stalls pile with eels, tropical fruit, flowers, and antiques at theatrical volume. By 8:30am the best stalls are packing up.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "⛵",
                  title: "Take the harbour ferry — it&apos;s a free sightseeing cruise",
                  desc: "The HADAG harbour ferry Line 62 (covered by Hamburg Card) runs from Landungsbrücken along the southern Elbe past container terminals, historical shipyards, and the Övelgönne beach. The route from pier 3 to Finkenwerder takes 30 minutes each way and gives you the port experience without paying for a tour boat.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🍺",
                  title: "Drink Astra Urtyp — Hamburg&apos;s local beer",
                  desc: "Hamburg&apos;s unofficial civic beer is Astra Urtyp, identifiable by its anchor logo on every bottle and glass. Order it in any St Pauli or Schanzenviertel bar at €3–4 per 0.5L. The Schanzenviertel has the highest density of independent bars in northern Germany — arrive after 8pm on any evening for the full atmosphere.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🎵",
                  title: "Book an Elbphilharmonie concert — even cheaply",
                  desc: "The Elbphilharmonie releases unsold tickets at significant discounts 2 weeks before performances (sometimes 70% off). Student and under-30 tickets are available from €10. Lunchtime concerts in the Kleiner Saal are sometimes free. A concert in this building is a genuinely once-in-a-lifetime acoustic experience — the vineyard-style Grand Hall is arguably the finest concert space built anywhere since the 1960s.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "🌅",
                  title: "Day trip to Blankenese for the Treppenviertel",
                  desc: "Hamburg&apos;s most picturesque suburb climbs a steep hillside above the Elbe 12km west of the centre. The Treppenviertel (staircase quarter) has 58 public staircases and some of Hamburg&apos;s most expensive real estate — villas with Elbe views. Take S1 or S3 to Blankenese (30 min, €3, covered by Hamburg Card). Best done on Day 3 afternoon as an alternative to the Reeperbahn.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Hamburg" />

          {/* Combine With */}
          <CombineWith currentSlug="hamburg-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How do I get from Hamburg Airport to the city centre?",
                  a: "The S1 S-Bahn train runs from Hamburg Airport (Flughafen) to Hamburg Hauptbahnhof every 10 minutes, takes 25 minutes, and costs €3.50 for a single ticket — or is covered free by the Hamburg Card. The S1 runs from 4:30am to 1am daily. A taxi from the airport to the centre costs €25–35 and takes 20–35 minutes depending on traffic. There is no direct airport bus to the main tourist areas.",
                },
                {
                  q: "Is Hamburg worth 3 days or should I spend more time?",
                  a: "Three days covers Hamburg&apos;s highlights very comfortably. Speicherstadt and HafenCity take a full day, the Elbphilharmonie and Alster fill another, and the Fischmarkt and Reeperbahn complete the third. A 4th day allows for Blankenese, a day trip to Lübeck (Hanseatic city, 45 min by train), or deeper exploration of the Schanzenviertel. Hamburg does not need more than 4 days for a first visit.",
                },
                {
                  q: "What is the best area to stay in Hamburg?",
                  a: "For first-time visitors, HafenCity or Neustadt are ideal — central, walkable to Speicherstadt and Elbphilharmonie, well-connected by U-Bahn. The Schanzenviertel is excellent for those wanting the nightlife and restaurant scene immediately available. Avoid the area immediately around Hamburg Hauptbahnhof — it is Hamburg&apos;s roughest neighbourhood, particularly after dark.",
                },
                {
                  q: "How do I get cheap Elbphilharmonie concert tickets?",
                  a: "The Elbphilharmonie releases unsold tickets at significant discounts 2 weeks before performances. Under-30 and student tickets are available from €10. The Kleiner Saal (small chamber hall) has excellent acoustics and tickets frequently remain available up to the performance day. Lunchtime concerts are sometimes free. Always check elbphilharmonie.de directly rather than resellers.",
                },
                {
                  q: "What is the Sunday Fischmarkt and is it worth waking up at 5am for?",
                  a: "Yes — absolutely. The Hamburg Fish Market at Altona has run continuously since 1703 and is one of the great urban spectacles in Europe. Fishmongers auction eels, fruit, flowers, and antiques at theatrical volume from 5am. The Fischauktionshalle (auction hall) serves breakfast beer and fish rolls while live music plays inside. The best atmosphere is between 5–7:30am. The market closes at 9:30am sharp on Sundays. Set the alarm.",
                },
                {
                  q: "Do I need a visa to visit Hamburg from India?",
                  a: "Indian passport holders require a Schengen visa (Type C) to visit Germany. Apply at the German Consulate or VFS Global at least 6–8 weeks before travel. The fee is €80 per person and processing typically takes 15–30 business days. Documents required include hotel bookings, return flights, and 3 months of bank statements. Germany is one of the faster Schengen processors via VFS.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Hamburg trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/hamburg-3-days", label: "Hamburg 3-day guide", icon: "🗓️" },
                { href: "/blog/europe-travel-guide", label: "Europe travel guide", icon: "🌍" },
                { href: "/blog/berlin-4-days", label: "Berlin 4 days", icon: "🏛️" },
                { href: "/blog/copenhagen-3-days", label: "Copenhagen 3 days", icon: "🚲" },
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
          <RelatedGuides currentSlug="hamburg-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Berlin in 4 Days — History &amp; Culture", href: "/blog/berlin-4-days" },
                { label: "Copenhagen 3 Days — Nordic Design", href: "/blog/copenhagen-3-days" },
                { label: "Amsterdam 4 Days — Canals &amp; Museums", href: "/blog/amsterdam-4-days" },
                { label: "Florence 3 Days — Renaissance Art", href: "/blog/florence-3-days" },
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
