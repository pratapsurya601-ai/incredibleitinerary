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
const ICELAND_TOC = [
  { id: "honest",    emoji: "⚡",  label: "What Iceland Actually Is" },
  { id: "season",    emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoget",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary", emoji: "📅",  label: "7-Day Ring Road Itinerary" },
  { id: "landmarks", emoji: "🏔️", label: "Landmark Guide" },
  { id: "budget",    emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",      emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",       emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",  emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",      emoji: "💡",  label: "Pro Tips" },
  { id: "faq",       emoji: "❓",  label: "FAQ" },
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
          href: `mailto:?subject=Iceland 7-Day Ring Road Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Iceland in 7 Days — Ring Road, Northern Lights, Glaciers&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/iceland-7-days"
        imageUrl="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80"
        description="Iceland in 7 Days: Ring Road, Northern Lights, Jökulsárlón Glacier Lagoon, Reynisfjara Black Sand Beach — complete self-drive guide with real costs in ISK."
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
export default function IcelandClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={ICELAND_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Iceland" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="iceland northern lights aurora borealis glacier waterfall ring road"
            fallback="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1600&q=80"
            alt="Iceland aurora borealis northern lights over glacier and black sand landscape"
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
              <span className="text-white/70">Iceland 7 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-blue-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Ring Road Self-Drive
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">18 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Iceland in 7 Days:
                <em className="italic text-blue-300"> Ring Road, Northern Lights &amp; Glaciers</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Waterfalls off clifftops onto black sand beaches, geysers on a timer, icebergs calving into a lagoon, and on clear winter nights a sky that turns green and violet. The complete Ring Road guide — real ISK prices, no filler.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="18 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇮🇸 Iceland, Europe</span>
              <span>·</span>
              <span>🗓 7 Days</span>
              <span>·</span>
              <span>💰 From ISK 20,000/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-blue-500 pl-6 mb-10 bg-blue-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Iceland in seven days is a loop around one of the most otherworldly landscapes on earth — a country where waterfalls drop off clifftops into black sand beaches, geysers erupt every eight minutes on schedule, glaciers calve icebergs onto shores you can walk barefoot, and on clear winter nights the sky turns green and violet.
            </p>
          </blockquote>

          {/* ── WHAT ICELAND ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Iceland Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Iceland sits on the Mid-Atlantic Ridge — the exact boundary where the North American and Eurasian tectonic plates are pulling apart at 2cm per year. The result is a landscape of active volcanoes, geysers, lava fields, glaciers, and waterfalls that feels closer to another planet than anywhere else in Europe. The country is roughly the size of Kentucky with a population of 380,000 — and half of them live in Reykjavík.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Ring Road (Route 1) circles the entire island at 1,332km. Seven days gives you enough time to complete it properly — roughly 3–4 hours of driving per day — with meaningful time at the Golden Circle, South Coast, Jökulsárlón Glacier Lagoon, Lake Mývatn, and the Snæfellsnes Peninsula. You will not see everything. Iceland rewards slow travel. But seven days will leave you with no doubt about why people return.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The single most important logistical fact: you need a rental car. Iceland has essentially no public transport outside Reykjavík, and the best experiences — walking behind Seljalandsfoss, standing at Jökulsárlón before dawn, chasing the northern lights at 11pm — all require your own vehicle and the freedom to move when conditions are right.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="KEF Keflavík" />
              <StatCard icon="🌡️" label="Best Season" value="Jun–Aug or Sep–Mar" />
              <StatCard icon="🚗" label="Ring Road" value="1,332 km" />
              <StatCard icon="💰" label="Budget From" value="ISK 20,000/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Iceland</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Jun–Aug",
                  i: "☀️",
                  t: "Summer — Midnight Sun",
                  d: "The sun barely sets — you get 20–24 hours of daylight. Temperatures 10–18°C, all roads accessible, puffins nesting at Borgarfjörður eystri (mid-May to mid-August), wildflowers on lava fields. Peak prices and busy popular sites are the trade-offs. Kirkjufell at 11pm in perpetual golden-hour light is extraordinary.",
                  b: "Best access & road conditions",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Sep–Mar",
                  i: "🌌",
                  t: "Winter — Northern Lights",
                  d: "The aurora borealis season. September and February–March are the sweet spots: enough darkness for northern lights but temperatures not yet extreme. October–January brings 18–20 hours of night for maximum aurora hunting but also -10 to -15°C, potential F-road closures, and shorter days for sightseeing.",
                  b: "Best for northern lights",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Apr–May",
                  i: "🌸",
                  t: "Spring — Transition Season",
                  d: "Days lengthening, snow melting from Highland routes. Fewer crowds than summer, lower prices. Occasional aurora still visible through mid-April on clear nights. Some F-roads remain closed until June. The waterfalls run at full force from snowmelt — Skógafoss and Gullfoss are at their most powerful.",
                  b: "Good value, fewer crowds",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Nov–Jan",
                  i: "❄️",
                  t: "Deep Winter — Maximum Aurora",
                  d: "Longest nights for aurora hunting but extreme conditions: -15°C possible, roads may close without warning, only 4–5 hours of grey daylight. Rock-bottom prices, completely empty popular sites, and on a clear night the northern lights are incomparable. Not recommended for first-time Iceland visitors without winter driving experience.",
                  b: "Experienced travellers only",
                  c: "bg-purple-50 border-purple-200",
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
          <section id="howtoget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Iceland</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-blue-800 font-light">
                <strong className="font-medium">Key detail:</strong> Keflavík International Airport (KEF) is 50km from Reykjavík city centre. The Flybus from KEF to Reykjavík&apos;s BSÍ bus terminal costs <strong className="font-medium">ISK 3,999</strong> one-way and takes 45–50 minutes. Book at re.is or flybus.is. A taxi costs ISK 17,000–22,000. Pick up your rental car at the airport on arrival — returning to KEF separately to collect it wastes half a day.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly into Keflavík (KEF)",
                  d: "KEF is Iceland&apos;s only major international airport. Direct flights from London (2h 45m), Amsterdam (3h), Copenhagen (3h), New York (6h 30m), and Toronto (7h 30m). Icelandair serves most European hubs. Book 3–4 months ahead for summer; 6–8 weeks for winter shoulder season.",
                  b: "Only viable option",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  i: "🚌",
                  t: "Flybus KEF → Reykjavík (ISK 3,999)",
                  d: "The Flybus departs from outside arrivals at KEF every 30–45 minutes. It connects to the BSÍ terminal in Reykjavík, from where connecting minibuses run to most central hotels. Total door-to-hotel time: 60–75 minutes. Book online at flybus.is or re.is — significantly cheaper than a taxi.",
                  b: "Recommended airport transfer",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚗",
                  t: "Rental Car from KEF (ISK 15,000–25,000/day)",
                  d: "All major rental companies have desks in KEF arrivals. Budget 2WD: ISK 15,000–18,000/day from Sadcars or Geysir — fine for summer Ring Road on paved roads. Mid-range 4WD: ISK 20,000–25,000/day from Hertz or Budget — essential if you plan any F-road or Highland routes. Always take the gravel protection insurance. Check safetravel.is for current road conditions before each driving day.",
                  b: "Essential for Ring Road",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "📋",
                  t: "Visa Requirements",
                  d: "Iceland is a Schengen Area member (not EU). EU/EEA, USA, UK, Canada, Australia, and New Zealand passport holders enter visa-free up to 90 days (UK and non-EU need ETIAS from 2025, €7 at etias.eu.int). Indian passport holders need a Schengen C visa: €80 fee, 15–45 days processing through VFS Global. Required: bank statements showing €120+/day, confirmed hotel/car bookings, return flights, travel insurance covering minimum €30,000 medical.",
                  b: "Check requirements early",
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

          {/* ── 7-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 7-Day Iceland Ring Road Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is collapsible. The route runs clockwise from Reykjavík — the standard direction that keeps the South Coast&apos;s best light in front of you. Estimated driving: 2–4 hours per day. All prices in ISK as of 2026.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Reykjavík — Capital of Fire and Ice"
                cost="ISK 8,000–16,000 (car pickup, hot dog, pool, groceries)"
                items={[
                  "Arrive at KEF and collect your rental car from the arrivals hall immediately. Budget 2WD (ISK 15,000–18,000/day, Sadcars or Geysir): adequate for summer Ring Road with gravel protection. 4WD (ISK 20,000–25,000/day, Hertz or Budget): required for any F-road detours. Drive 50km to Reykjavík — 45 minutes on Route 41 via the Reykjanes lava fields.",
                  "Hallgrímskirkja church — the 74-metre concrete tower is free to photograph from outside. The observation deck costs ISK 1,000 and gives the best panorama in Reykjavík: colourful corrugated-iron rooftops, the Esja mountain across the bay, Harpa Harbour below. Arrive at opening (9am) for the light.",
                  "Harpa Concert Hall — the glass-façade building on the waterfront is free to enter. Olafur Eliasson&apos;s honeycombed glass panels catch Reykjavík&apos;s extraordinary northern light differently at every hour. Ten minutes minimum.",
                  "Hot dog at Bæjarins Beztu Pylsur — three minutes&apos; walk from Harpa. One hot dog costs ISK 620 with everything: mustard, remoulade, raw onion, crispy onion, ketchup. Operating since 1937. Bill Clinton ordered &apos;one with everything&apos; in 2004 and the framed photo is still on the wall. Do this. It is the best value-per-bite meal in all of Iceland.",
                  "Laugardalslaug geothermal pool (ISK 1,100 adults) — the largest public pool in Iceland, 4km from the city centre. Heated to 38–44°C by geothermal energy. The six outdoor hot pots at graduated temperatures are where Reykjavík residents genuinely socialise — bring a newspaper and stay an hour.",
                  "Evening: Bónus supermarket (yellow pig logo, open until 11pm) for self-catering supplies. Skyr ISK 200, lamb soup packet ISK 500, bread and cheese. The grocery strategy saves ISK 3,000–5,000/day versus restaurants — significant over a week. For dinner out, try Matur og Drykkur (Grandagarður, modern Icelandic) or the Reykjavík rooftop bar scene on Laugavegur.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Golden Circle — Þingvellir, Geysir, Gullfoss"
                cost="ISK 5,000–12,000 (Secret Lagoon, fuel, food)"
                items={[
                  "Þingvellir National Park — free entry, UNESCO World Heritage Site. Drive 50km east from Reykjavík on Route 36. This rift valley sits where the North American and Eurasian tectonic plates are visibly pulling apart — you can walk the floor of the Almannagjá gorge with a continent on either side. The world&apos;s oldest parliament (Alþingi) was founded here in 930 AD. Walk the canyon at opening (9am) when the angled light hits the gorge walls.",
                  "Silfra fissure snorkelling (optional, ISK 20,000+ with Dive.is or Arctic Adventures) — the fissure runs between the two tectonic plates, filled with glacial meltwater filtered through lava for 30–100 years. Visibility is 80+ metres. Water is 2–4°C year-round; drysuits provided. One of the clearest water experiences on earth.",
                  "Geysir geothermal area — free entry. The original Geysir rarely erupts, but Strokkur erupts every 5–10 minutes to 15–40 metres. Stand upwind — there are no barriers. The ground around the geysers is scalding; stay on marked paths.",
                  "Gullfoss waterfall — free entry. The &apos;Golden Falls&apos; drops 32 metres in two tiers into a 70-metre canyon. The spray cloud is visible from the car park. Walk to the upper viewing platform for the full scale; the lower path brings you to the canyon rim where the power is overwhelming. Best in afternoon light when spray creates a rainbow.",
                  "Secret Lagoon at Flúðir (ISK 3,000, 30 minutes south of Gullfoss) — a natural geothermal pool maintained at 38–40°C. Far cheaper and more atmospheric than the Blue Lagoon. A small geysir on the pool&apos;s edge erupts every few minutes. The wooden changing rooms date to 1891. Book ahead at secretlagoon.is — it does fill up.",
                  "Return to Reykjavík base or drive south and camp. Wild camping is legal in Iceland outside designated national parks. A campsite with facilities: ISK 1,500–2,500/person/night.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="South Coast — Waterfalls, Black Sand & the Plane Wreck"
                cost="ISK 4,000–9,000 (fuel, food, campsite)"
                items={[
                  "Seljalandsfoss waterfall — free (ISK 900 car park). The 60-metre curtain waterfall is famous because you can walk completely behind it through a cave in the cliff face. The path is wet year-round — a waterproof jacket is essential. Best in morning light when the sun backlit through the water sheet is extraordinary. Arrive before 9am to walk behind it without a crowd.",
                  "Gljúfrabúi — 200 metres north of Seljalandsfoss, almost nobody visits. A hidden waterfall inside a slot canyon, reached by wading a knee-deep stream. Free. The waterfall fills the entire narrow canyon ceiling above you — one of Iceland&apos;s best-kept secrets. Waterproof trousers help; determination is sufficient.",
                  "Skógafoss waterfall — free. 25 metres wide, 60 metres tall, one of Iceland&apos;s most powerful falls. Climb the 430 steps up the cliffside for the view south over the black sand plain to the sea. At the base, the spray drenches everything within 30 metres — your waterproof jacket earns its keep twice today.",
                  "Sólheimasandur plane wreck — free. In 1973 a US Navy Douglas Super DC-3 crash-landed on the black sand beach. The fuselage remains, slowly sinking. Park at the marked car park on Route 221, walk 1 hour each way across a flat volcanic plain. Bring a windproof layer — wind across this exposed plain routinely hits 50–70km/h.",
                  "Reynisfjara Black Sand Beach — free. Jet-black basalt columns, sea stacks, pounding Atlantic surf. SAFETY: sneaker waves at Reynisfjara have killed tourists as recently as 2022. The waves travel 15–20 metres up the beach without warning and the undertow will pull an adult off their feet instantly. Stay well beyond the marker stones. Do not turn your back on the ocean. The sign at the beach entrance is not decorative.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Jökulsárlón Glacier Lagoon & Diamond Beach"
                cost="ISK 12,000–24,000 (glacier hike, fuel, accommodation)"
                items={[
                  "Jökulsárlón Glacier Lagoon — free shore access. Drive 255km east from Vík on Route 1 (approximately 3 hours). The lagoon fills with icebergs calved directly from Breiðamerkurjökull glacier — some bergs are 15 metres tall. Seals haul out on them. The ice colour shifts from white to deep blue depending on density and light. Arrive before 8am in summer for the lagoon entirely to yourself.",
                  "Amphibious boat tour (ISK 7,500, 45 minutes) — the duck boats weave between icebergs with the glacier visible behind. The captain explains how the glacier has retreated 1.5km since 1935. Optional but adds context to what you&apos;re seeing.",
                  "Diamond Beach — free. Cross the road bridge from the lagoon to the black sand beach opposite. Icebergs washed here from the lagoon sparkle like cut glass against the black volcanic sand. The visual contrast is unlike anywhere else on earth. Polarising filter recommended for photography.",
                  "Glacier hike with a certified guide (ISK 10,000–15,000/person) — MANDATORY for safety. Glaciers are heavily crevassed and conditions change without warning. Companies: Glacier Guides (glacierguides.is), Extreme Iceland, Local Guide. The 3-hour standard glacier walk includes crampons and ice axe instruction. One of the most physically memorable experiences Iceland offers.",
                  "Stay at Fosshotel Glacier Lagoon (ISK 38,000–45,000/night) — the only hotel within 1km of Jökulsárlón. Book 4–6 months ahead for summer. Alternative: Hólmur campsite (ISK 1,800/person). At 5am tomorrow, walk to the lagoon before the coaches arrive.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="East Fjords — Iceland Without the Tourists"
                cost="ISK 5,000–12,000 (fuel, campsite, local food)"
                items={[
                  "Drive the East Fjords — Route 1 hugs the coastline through a series of dramatic fjords that most Ring Road travellers rush through or skip entirely via the inland shortcut. This is a mistake. The East Fjords are Iceland&apos;s quietest region: fishing villages of 200–400 people, reindeer on hillsides (introduced from Norway in 1787), and puffin colonies at Borgarfjörður eystri from mid-May to mid-August.",
                  "Djúpivogur harbour — the Eggs of Merry Bay installation: 34 granite eggs on the harbourside representing 34 species of nesting birds. Free, odd, and beautiful. A 10-minute stop.",
                  "Stöðvarfjörður — Petra&apos;s Stone Collection: a private garden filled with 70 years of collected Icelandic minerals and crystals (ISK 1,500, open May–October). One of Iceland&apos;s most eccentric and genuinely impressive small-scale attractions.",
                  "Fáskrúðsfjörður — a fjord village where French fishermen worked seasonally in the 19th century. Street signs remain bilingual in French and Icelandic. The small French-Icelandic museum (ISK 1,500) is unexpectedly moving.",
                  "Wild reindeer sighting — scan hillsides between Breiðdalsvík and Egilsstaðir from late afternoon. Herds of 20–50 animals are routinely seen close to the road. Egilsstaðir (population 2,400, the largest East Iceland town) is the logical overnight stop — the local pool is ISK 900 and almost always empty.",
                ]}
              />
              <DayCard
                day="Day 6"
                title="Lake Mývatn — Geothermal Wonderland"
                cost="ISK 8,000–16,000 (Mývatn Baths, fuel, food)"
                items={[
                  "Dettifoss waterfall — free. Drive north from Egilsstaðir via Route 1 then Route 862 (approximately 90 minutes). The most powerful waterfall in Europe: 193m³ per second drops 44 metres into the Jökulsárgljúfur canyon. Audible 1km away. Approach from the west bank (Route 862, gravel road) for the best unobstructed viewpoint. Arrive before 9am to beat the tour coaches.",
                  "Námaskarð geothermal field — free. A boiling landscape of sulphur vents, bubbling mud cauldrons, and steam jets 4km east of Lake Mývatn. The sulphur smell is strong. Stay on marked paths — the crust over boiling mud is thin in places. The landscape is the closest thing to Mars that Iceland offers.",
                  "Hverfjall tephra crater — free. A 2,500-year-old crater 1km in diameter. Climb the rim path (40 minutes) for views into the perfect circular bowl and across Lake Mývatn. Best in late afternoon when the crater walls glow red-brown.",
                  "Mývatn Nature Baths (ISK 5,500) — the northern alternative to the Blue Lagoon: geothermal mineral-rich silica water at 36–40°C, far fewer visitors, more authentic atmosphere. The milky-blue water is the same mineral composition as the Blue Lagoon at roughly half the price. Book ahead at jardbodin.is — it does sell out in peak summer.",
                  "Grjótagjá lava cave — free. A geothermal hot spring inside a lava cave, used for bathing until volcanic activity raised the water temperature to 50°C+ in the 1970s. Now a photo stop — the turquoise water lit by gaps in the cave ceiling is beautiful and eerie. Filming location for Game of Thrones Season 3, Episode 5.",
                ]}
              />
              <DayCard
                day="Day 7"
                title="Snæfellsnes Peninsula & Return to Reykjavík"
                cost="ISK 6,000–20,000 (fuel, food, optional Blue Lagoon ISK 9,990)"
                items={[
                  "Snæfellsjökull glacier and volcano — free to view. Jules Verne placed the entrance to the centre of the earth here in his 1864 novel. The 1,446-metre glacier-capped stratovolcano dominates the entire peninsula. Snæfellsjökull National Park (free to enter) has several hiking trails around the glacier base — the Snæfellsjökulsvegur trail takes 3–4 hours for the full circuit.",
                  "Kirkjufell mountain — free. The 463-metre arrowhead peak is the most photographed mountain in Iceland. The definitive shot: Kirkjufellsfoss waterfall in the foreground, mountain behind. Arrive before 7am in summer for the mountain to yourself — by 9am there are 40+ photographers at the viewpoint. In autumn, orange heather turns on the hillside for extraordinary colour.",
                  "Arnarstapi harbour village — basalt sea arch formations along a 30-minute cliff walk from the car park. Free. Some of the most dramatic coastal geology on the peninsula.",
                  "Djúpalónssandur beach — free. A wild pebble beach with four traditional lifting stones: fishermen had to lift the 54kg &apos;full strength&apos; stone to qualify for a crew berth. Rusted debris from the British trawler Epine (wrecked 1948) is scattered across the shore.",
                  "Blue Lagoon (ISK 9,990 standard entry, 20 minutes from KEF) — book at bluelagoon.com months ahead if you want this. You cannot walk in without a reservation. The electric-blue silica water in the black lava field is striking and deeply Instagrammable. If you haven&apos;t pre-booked, skip it — the Secret Lagoon (ISK 3,000) and Mývatn Nature Baths (ISK 5,500) are better value and less crowded.",
                  "Return to Reykjavík (1.5 hours from Snæfellsnes tip, 45 minutes from Blue Lagoon). Final dinner: one more hot dog at Bæjarins Beztu (ISK 620) or lamb soup (kjötsúpa, ISK 2,500) at a local restaurant. Drop the rental car at KEF that evening or the following morning for early departures.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Iceland" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏔️ Iceland Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important stops in priority order with real entry costs. Most of Iceland&apos;s best sites are free — the country charges no national park entry fees at the majority of locations.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Þingvellir National Park",
                  e: "Free · UNESCO World Heritage Site",
                  d: "The Mid-Atlantic rift valley where North America and Eurasia visibly pull apart. Walk the Almannagjá gorge between two tectonic plates. Site of the world&apos;s oldest parliament (930 AD). Optional Silfra fissure snorkelling (ISK 20,000+) offers 80m visibility in 2–4°C glacial meltwater.",
                  t: "Must see · 1.5–2 hrs",
                },
                {
                  n: "Geysir & Gullfoss",
                  e: "Free",
                  d: "Strokkur geyser erupts every 5–10 minutes to 15–40 metres — no barriers, stand upwind. Gullfoss drops 32 metres in two tiers into a 70-metre canyon. Both are on the Golden Circle, 10km apart. Best combined in a full Golden Circle day.",
                  t: "Must see · 3–4 hrs combined",
                },
                {
                  n: "Seljalandsfoss",
                  e: "Free (ISK 900 car park)",
                  d: "The 60-metre curtain waterfall you can walk completely behind. The cave path behind the fall is wet year-round — waterproof jacket essential. Morning backlight through the water sheet is extraordinary. Walk Gljúfrabúi (200m north) immediately after — the hidden slot-canyon waterfall almost nobody visits.",
                  t: "Must see · 1 hr",
                },
                {
                  n: "Reynisfjara Black Sand Beach",
                  e: "Free",
                  d: "Black basalt columns, Atlantic sea stacks, pounding surf. The most dramatic beach in Iceland — and the most dangerous. Sneaker waves have killed tourists here. Stay beyond the marker stones; never turn your back on the ocean. Best in overcast light when black sand and white surf contrast is maximum.",
                  t: "Must see · SNEAKER WAVE WARNING",
                },
                {
                  n: "Jökulsárlón Glacier Lagoon",
                  e: "Free shore · Boat tour ISK 7,500",
                  d: "The iceberg lagoon where Breiðamerkurjökull glacier calves directly into a lake. At 5am in summer the lagoon is completely empty — icebergs glowing orange-pink in first light. Diamond Beach across the road: icebergs on black sand. Arrive early. Stay longer than you planned.",
                  t: "Must see · 2–3 hrs minimum",
                },
                {
                  n: "Blue Lagoon",
                  e: "ISK 9,990 — book months ahead at bluelagoon.com",
                  d: "The iconic electric-blue silica geothermal pool on the Reykjanes lava field, 20 minutes from KEF. Photogenic and genuinely striking — but overpriced and crowded. You cannot walk in without a reservation; it sells out months ahead in peak season. Better value alternatives: Secret Lagoon (ISK 3,000), Mývatn Nature Baths (ISK 5,500).",
                  t: "Optional · Pre-booking essential",
                },
                {
                  n: "Mývatn Nature Baths",
                  e: "ISK 5,500",
                  d: "The northern Iceland geothermal pool alternative: same mineral-rich silica water as the Blue Lagoon at roughly half the price, far fewer visitors. Set against the volcanic landscape of the Mývatn region. Combine with Dettifoss, Námaskarð, Hverfjall, and Grjótagjá for a full extraordinary day.",
                  t: "Highly recommended · Book ahead",
                },
                {
                  n: "Kirkjufell Mountain",
                  e: "Free",
                  d: "The 463-metre arrowhead peak on Snæfellsnes — Iceland&apos;s most photographed mountain. Classic shot from the Kirkjufellsfoss waterfall viewpoint. Sunrise at 5–6am: mountain entirely to yourself in golden light. By 9am: dozens of photographers. In autumn, orange heather creates 10 minutes of perfect colour.",
                  t: "Most photographed · Sunrise visit",
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
            title="Iceland — Glaciers, Waterfalls &amp; the Northern Lights"
            subtitle="Ring Road landscapes from Reykjavík to Jökulsárlón and back."
            spots={[
              {
                name: "Jökulsárlón Glacier Lagoon",
                query: "jokulsarlon glacier lagoon icebergs iceland blue turquoise",
                desc: "Icebergs calved from Breiðamerkurjökull glacier floating in the lagoon — some 15 metres tall, glowing blue in any light.",
              },
              {
                name: "Reynisfjara Black Sand Beach",
                query: "reynisfjara black sand beach basalt columns iceland atlantic surf",
                desc: "Jet-black basalt columns and Atlantic sea stacks — Iceland&apos;s most dramatic and dangerous beach.",
              },
              {
                name: "Northern Lights Iceland",
                query: "northern lights aurora borealis iceland green sky winter snow",
                desc: "The aurora borealis over Iceland&apos;s winter landscape — best from September to March, 20km+ from city lights.",
              },
              {
                name: "Kirkjufell Mountain",
                query: "kirkjufell mountain waterfall snaefellsnes peninsula iceland sunrise",
                desc: "Iceland&apos;s most photographed peak: the arrowhead profile with Kirkjufellsfoss in the foreground at sunrise.",
              },
              {
                name: "Seljalandsfoss Waterfall",
                query: "seljalandsfoss waterfall behind curtain iceland south coast morning",
                desc: "The 60-metre curtain waterfall on the South Coast — the only one in Iceland you can walk completely behind.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Iceland is expensive — but many of its best experiences are free. Þingvellir, Geysir, Gullfoss, all South Coast waterfalls, Reynisfjara, and Jökulsárlón shore cost nothing. The main expenses are the rental car, fuel (ISK 250–280/litre), and accommodation. Self-catering from Bónus or Krónan supermarkets cuts food costs by ISK 3,000–5,000 per person per day.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🚗 Car rental (per day)", "ISK 15,000–18,000", "ISK 20,000–28,000", "ISK 35,000–60,000"],
                    ["⛽ Fuel (per day)", "ISK 2,500–4,500", "ISK 4,000–7,000", "ISK 6,000–10,000"],
                    ["🏨 Accommodation (per night)", "ISK 4,000–8,000", "ISK 20,000–38,000", "ISK 55,000–120,000"],
                    ["🍽 Food (per day)", "ISK 1,500–3,500", "ISK 7,000–14,000", "ISK 18,000–40,000"],
                    ["🎯 Activities (per day avg)", "ISK 2,000–5,000", "ISK 8,000–18,000", "ISK 25,000–80,000"],
                    ["TOTAL (per person/day)", "ISK 20,000–30,000", "ISK 50,000–90,000", "ISK 120,000–250,000+"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (ISK 20,000–30,000/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Budget car from Sadcars, campsites (ISK 1,500–2,500/night), self-cater from Bónus, stick to free attractions. The free sites are Iceland&apos;s best: Þingvellir, Geysir, Gullfoss, all South Coast waterfalls, Jökulsárlón shore access.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (ISK 50,000–90,000/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">4WD rental, guesthouse accommodation, one glacier activity per day, Mývatn Nature Baths, Secret Lagoon, meals at local restaurants. The sweet spot for genuine Icelandic comfort.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">💎 Luxury (ISK 120,000+/day)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">Hotel Borg or Ion Adventure Hotel, private guides and super-jeep tours, Dill restaurant tasting menu (ISK 22,000–28,000), helicopter South Coast tour, private ice cave access. Iceland luxury is genuinely world-class.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Iceland</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Iceland&apos;s accommodation ranges from campsites (ISK 1,500–2,500/person/night) through farm guesthouses to design hotels. The Ring Road network of family-run farm guesthouses is the best-kept accommodation secret in the country — local cooking, genuine hospitality, and a connection with Icelandic life that no chain hotel replicates. Book everything 3–6 months ahead for summer.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Hotel Borg Reykjavík",
                  type: "Luxury 4-star · Austurvöllur Square, City Centre",
                  price: "From ISK 55,000/night",
                  badge: "Best city hotel",
                  desc: "Reykjavík&apos;s most storied hotel, opened in 1930 and renovated to a very high standard. Art Deco interiors, one minute from Harpa Harbour and central Reykjavík. The bar and brasserie are Reykjavík institutions. Book 4–6 months ahead for summer dates at booking.com?aid=2820480.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "KEX Hostel Reykjavík",
                  type: "Boutique hostel · Skúlagata, Old Harbour area",
                  price: "From ISK 6,000/dorm · ISK 22,000/private",
                  badge: "Best budget Reykjavík",
                  desc: "The best hostel in Iceland — a converted biscuit factory with a lively bar, excellent common spaces, and an international crowd. Dormitory beds are clean; private rooms are well designed. The on-site bar serves Icelandic craft beer and attracts locals and travellers equally. Book 6–8 weeks ahead.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Fosshotel Glacier Lagoon",
                  type: "Design hotel · Jökulsárlón area, Southeast Iceland",
                  price: "From ISK 38,000/night",
                  badge: "Best Ring Road position",
                  desc: "The only hotel within walking distance of Jökulsárlón. Lobby windows face toward the glacier. Northern lights visible from the car park in winter. Essential for anyone doing the Ring Road seriously — the ability to walk to the lagoon at 5am without driving is worth the premium. Book 4–6 months ahead.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Ring Road Farm Guesthouses",
                  type: "Farm stays · Various locations along Route 1",
                  price: "ISK 15,000–25,000/night (room + breakfast)",
                  badge: "Most authentic",
                  desc: "Family-run guesthouses along the Ring Road offer home-cooked meals (lamb soup, skyr, smoked trout from the farm), genuine warmth, and connections with Icelandic rural life. Examples: Efstadalur II at Laugarvatn (geothermal hot pot overlooking the lake), Guesthouse Steinsholt (south coast), Hótel Laki (Kirkjubæjarklaustur). Book directly with each property.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Iceland</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Eating out in Iceland is expensive: ISK 3,000–5,000 for a restaurant main course, ISK 22,000–28,000 for a tasting menu. The practical strategy is to self-cater breakfast and lunch from Bónus or Krónan, then spend on one or two excellent dinners. The hot dog at Bæjarins Beztu at ISK 620 is the single best value food experience in the country.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Bæjarins Beztu Pylsur",
                  t: "Hot dog stand · Tryggvagata 1, Reykjavík Harbour",
                  d: "Operating since 1937. One hot dog with everything (ISK 620): mustard, remoulade, raw onion, crispy onion, ketchup. Bill Clinton ate here in 2004 — the framed photo is on the wall. Open until 1am on weekends. This is the only food in Iceland where the experience-to-price ratio is genuinely exceptional. Go at least twice.",
                  b: "Essential",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Dill Restaurant",
                  t: "1 Michelin Star · Hverfisgata 12, Reykjavík",
                  d: "The restaurant that launched New Nordic cuisine in Iceland. Chef Gunnar Karl Gíslason&apos;s 5–7-course tasting menu (ISK 22,000–28,000) uses foraged Icelandic ingredients, fermented dairy, lamb, and Arctic char in a menu that changes by season. The birch wine pairing is extraordinary. Book 4–6 weeks ahead at dillrestaurant.is. One of the top 5 restaurants in Scandinavia.",
                  b: "Best in Iceland",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  n: "Matur og Drykkur",
                  t: "Modern Icelandic · Grandagarður 2, Old Harbour",
                  d: "Modern interpretations of traditional Icelandic recipes — dried fish with cultured butter, 12-hour slow-cooked lamb neck, cod&apos;s head with seaweed. The restaurant uses historical Icelandic cookbooks as direct source material. ISK 4,500–7,000 for mains. More accessible than Dill but equally serious. Reservations recommended at maturogdrykkur.is.",
                  b: "Best traditional Icelandic",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Pakkhús (Höfn)",
                  t: "Seafood · Krosseyri 3, Höfn in Hornafjörður",
                  d: "Höfn is the langoustine capital of Iceland and Pakkhús is the town&apos;s benchmark restaurant. Langoustine soup (humarsúpa, ISK 2,800) and langoustine tails (ISK 5,500) sourced directly from the fjord outside. Even on a strict budget, one meal here is worth the exception — you are eating the local speciality at its source. No reservations needed outside peak summer.",
                  b: "Best seafood on Ring Road",
                  c: "bg-orange-50 border-orange-200",
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
            destination="Iceland Ring Road"
            hotels={[
              {
                name: "Hotel Borg Reykjavík",
                type: "Luxury 4-star · Austurvöllur Square",
                price: "From ISK 55,000/night",
                rating: "5",
                badge: "Best city hotel",
                url: "https://www.booking.com/hotel/is/borg.html?aid=2820480",
              },
              {
                name: "Fosshotel Glacier Lagoon",
                type: "Design hotel · Jökulsárlón area",
                price: "From ISK 38,000/night",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/is/fosshotel-glacier-lagoon.html?aid=2820480",
              },
              {
                name: "KEX Hostel Reykjavík",
                type: "Boutique hostel · Old Harbour",
                price: "From ISK 6,000/dorm",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/is/kex-hostel.html?aid=2820480",
              },
              {
                name: "Ion Adventure Hotel",
                type: "Design hotel · South Iceland lava field",
                price: "From ISK 65,000/night",
                rating: "5",
                badge: "Most unique",
                url: "https://www.booking.com/hotel/is/ion-luxury-adventure.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Northern Lights Small Group Tour",
                duration: "3–4 hrs",
                price: "From ISK 9,900/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=iceland+northern+lights+tour&partner_id=PSZA5UI",
              },
              {
                name: "Glacier Hike Vatnajökull",
                duration: "3 hrs",
                price: "From ISK 10,000/person",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=iceland+glacier+hike+vatnajokull&partner_id=PSZA5UI",
              },
              {
                name: "Golden Circle Full Day Tour",
                duration: "8–10 hrs",
                price: "From ISK 12,000/person",
                url: "https://www.getyourguide.com/s/?q=iceland+golden+circle+tour&partner_id=PSZA5UI",
              },
              {
                name: "Crystal Ice Cave Tour Vatnajökull",
                duration: "3–4 hrs",
                price: "From ISK 18,000/person",
                url: "https://www.getyourguide.com/s/?q=iceland+ice+cave+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Iceland</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🏊",
                  title: "Visiting Blue Lagoon Without Booking Months Ahead",
                  desc: "The Blue Lagoon sells out weeks or months in advance in peak season. If you arrive without a reservation you will be turned away — guaranteed. Book at bluelagoon.com the moment your flights are confirmed. The standard entry is ISK 9,990. Cheaper and equally good alternatives that require less advance booking: Secret Lagoon (ISK 3,000) and Mývatn Nature Baths (ISK 5,500).",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🚗",
                  title: "Driving F-Roads in a 2WD Rental Car",
                  desc: "F-roads require 4WD vehicles with high clearance capable of unbridged river crossings. Driving a 2WD on an F-road is illegal, voids your rental insurance entirely, and the recovery and rescue bill (ISK 500,000–2,000,000) is entirely your personal responsibility. Rental companies check GPS logs and will charge you. If you want Highland routes — Landmannalaugar, Þórsmörk, Kjölur — book a 4WD. It costs ISK 5,000–8,000/day extra. Spend it.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🌊",
                  title: "Ignoring Sneaker Wave Warnings at Reynisfjara",
                  desc: "Sneaker waves at Reynisfjara have killed tourists as recently as 2022. They hit without warning, travel 15–20 metres up the beach, and the undertow pulls adults off their feet immediately. Stay well beyond the marker stones at all times. Do not turn your back on the ocean to take a photograph. The warning signs at the beach entrance are not decorative — this is one of the most dangerous beaches in the world for wave incidents.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "📱",
                  title: "Not Checking the Northern Lights Forecast App",
                  desc: "The Vedur.is app (Icelandic Meteorological Office, free) shows real-time cloud cover maps overlaid with KP index forecasts updated hourly. Without it you will drive out at 11pm into total cloud cover and see nothing. The app shows which parts of Iceland currently have clear skies — sometimes a 40-minute drive in a specific direction reveals a gap. Check it from 8pm onwards every night between September and March.",
                  color: "bg-pink-50 border-pink-200",
                },
                {
                  icon: "⛽",
                  title: "Not Filling Up Before Remote Sections",
                  desc: "Petrol stations in the East Fjords, Westfjords, and Highlands can be 100–150km apart. Running out of fuel in Iceland&apos;s interior in winter is genuinely life-threatening. Fill up whenever the tank drops to half in remote areas. Use the free Gasvaktin app to find the cheapest station near you — N1 is typically most expensive; Orkan and the Costco near Reykjavík are significantly cheaper. Always fill up in Egilsstaðir before the East Fjords circuit.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((tip) => (
                <div key={tip.title} className={`rounded-xl p-5 border ${tip.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{tip.icon}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900 mb-1">{tip.title}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{tip.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Iceland</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌌",
                  title: "Northern Lights: 11pm–2am, 20km from City Lights",
                  desc: "Drive at least 20km from Reykjavík to escape light pollution. Good spots: Grótta lighthouse peninsula, Þingvellir National Park, any Route 1 turnoff south of the city. You need KP index 2.5+, clear sky, and patience. Long-exposure photography captures greens and purples more vividly than the naked eye. Check Vedur.is from 8pm — cloud gaps move fast.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🧊",
                  title: "Jökulsárlón at 5am for Private Icebergs",
                  desc: "Coach tours arrive from 9am. At 5am in summer (the sun has been up since 3am), the lagoon is completely empty and icebergs glow orange-pink in low light. Park, walk to the water, and have one of the world&apos;s most extraordinary landscapes entirely to yourself for an hour. This is non-negotiable if you are a photographer.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "⛰️",
                  title: "Kirkjufell at 6am: Mountain to Yourself",
                  desc: "By 9am there are 40+ photographers at the Kirkjufellsfoss viewpoint. At 6am in summer you have the arrowhead mountain in morning light with no competition for the foreground. The autumn version (orange heather, golden light) lasts about 10 minutes each morning and is Iceland&apos;s most photographable moment outside the aurora.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🗺️",
                  title: "Download Offline Maps Before Leaving Each City",
                  desc: "Mobile signal disappears in large sections of the Ring Road — the East Fjords, Westfjords, and anywhere in the Highlands. Download full Iceland map offline in Maps.me or Google Maps before leaving Reykjavík. Check roads.is every morning in winter for live road conditions and closures. F-road closures are updated in real time.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🛒",
                  title: "Bónus Supermarket Is Your Ring Road Lifeline",
                  desc: "The Bónus chain (yellow pig logo) has Iceland&apos;s lowest grocery prices. Skyr (ISK 200), lamb soup packets (ISK 500), bread, cheese, instant noodles. Self-catering breakfast and lunch saves ISK 3,000–5,000/day per person. Bónus stores are in Reykjavík, Akureyri, Egilsstaðir, and most large Ring Road towns. Buy 2 days of supplies at a time in remote regions.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "💧",
                  title: "Gljúfrabúi: The Hidden Waterfall Nobody Finds",
                  desc: "Two hundred metres north of the Seljalandsfoss car park, a narrow slot canyon hides a waterfall reached by wading a knee-deep stream. Almost nobody goes. The waterfall fills the entire canyon ceiling above you in a way that Seljalandsfoss — famous and crowded — cannot match. Waterproof trousers help; stubbornness is sufficient. Free, extraordinary, 10 minutes from your car.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Iceland" />

          {/* Combine With */}
          <CombineWith currentSlug="iceland-7-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "When is the best time to see the northern lights in Iceland?",
                  a: "September–March, with October and February–March being the most reliable months. You need three things simultaneously: a KP index of 2.5+ (check Vedur.is hourly), a clear sky, and genuine darkness. The weeks around the autumn and spring equinoxes often produce the strongest auroras. January offers maximum darkness but temperatures of -10 to -15°C and potential road closures. September is the ideal first-timer month: dark enough for aurora but not yet brutally cold.",
                },
                {
                  q: "Is the Ring Road feasible in 7 days?",
                  a: "Yes, comfortably. The full Ring Road is 1,332km — perfectly doable in 7 days at 3–4 hours of driving per day. The key is not stopping at everything. Choose one or two highlights per region and spend real time there. The East Fjords section adds 2–3 hours over the inland shortcut but is worth every minute. Do not rush Jökulsárlón: give it a full afternoon and the following morning before 8am. The Ring Road rewards focus over box-ticking.",
                },
                {
                  q: "Do Indian passport holders need a visa for Iceland?",
                  a: "Yes. Iceland is a Schengen Area member despite not being in the EU. Indian passport holders must apply for a Schengen short-stay C visa through the Icelandic Directorate of Immigration or VFS Global — €80 fee, 15–45 days processing. Apply minimum 6 weeks before travel. Required: bank statements showing €120+/day, confirmed hotel and car bookings, return flights, employment letter, and travel insurance covering minimum €30,000 in medical expenses.",
                },
                {
                  q: "Is the Blue Lagoon worth the price compared to other geothermal pools?",
                  a: "Honest answer: the Blue Lagoon is genuinely striking — the electric-blue silica water in a black lava landscape is unlike anywhere else. But at ISK 9,990 standard entry it is Iceland&apos;s most expensive and most crowded geothermal experience. The Secret Lagoon near Flúðir (ISK 3,000) is more natural and rarely crowded. Mývatn Nature Baths (ISK 5,500) have better mineral content and almost no queues. If you&apos;re on a budget or haven&apos;t pre-booked, skip the Blue Lagoon. If you&apos;re booking the Premium Retreat experience months ahead (ISK 25,000+), it becomes genuinely exceptional.",
                },
                {
                  q: "Campervan versus guesthouses: which is better for the Ring Road?",
                  a: "Campervans (ISK 25,000–40,000/day for a 2-person van) offer total flexibility — chase the northern lights, stop anywhere, cook your own food. Guesthouses offer warmth, a shower, and no setup time. In summer: campervans are excellent and the freedom is real. In winter: campervans require cold-weather experience and can be genuinely uncomfortable below -10°C. First-time Iceland visitors with limited time are almost always better served by guesthouses — Iceland&apos;s Ring Road guesthouse network is excellent and farm hosts connect you with Icelandic life in ways a van never does.",
                },
                {
                  q: "What is the midnight sun experience actually like?",
                  a: "From mid-May to late July, the sun does not set in Iceland — it dips toward the horizon around midnight and rises again without full darkness intervening. The light at 11pm is perpetual golden hour: warm, flat, extraordinary for photography. Your body clock loses all reference points within two days. Bring a blackout eye mask for sleeping. The experience of hiking Kirkjufell at midnight in full daylight is one of those genuinely disorienting and beautiful things that exists only in a handful of places on earth.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Iceland trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/iceland-northern-lights-guide", label: "Northern Lights guide", icon: "🌌" },
                { href: "/blog/iceland-ring-road-budget", label: "Ring Road budget", icon: "💰" },
                { href: "/blog/iceland-best-time-to-visit", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/iceland-packing-list", label: "Packing list", icon: "🎒" },
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
          <RelatedGuides currentSlug="iceland-7-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Norway Fjords in 6 Days — Nærøyfjord &amp; Trolltunga", href: "/blog/norway-fjords-6-days" },
                { label: "Copenhagen 3 Days — New Nordic &amp; Canals", href: "/blog/copenhagen-3-days" },
                { label: "Paris 5 Days — Museums, Food &amp; the Seine", href: "/blog/paris-5-days" },
                { label: "Amsterdam 4 Days — Canals, Bikes &amp; Rijksmuseum", href: "/blog/amsterdam-4-days" },
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
