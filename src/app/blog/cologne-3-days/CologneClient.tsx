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
const COLOGNE_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Cologne Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",  emoji: "🏛️", label: "Landmark Guide" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",        emoji: "🍽️", label: "Where to Eat" },
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
          href: `mailto:?subject=Cologne 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Cologne in 3 Days — Cathedral, Kölsch beer and the Rhine&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/cologne-3-days"
        imageUrl="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80"
        description="Cologne in 3 Days: Cathedral Dom, Rhine promenade, Kölsch beer halls, Chocolate Museum, Carnival culture and Roman history — complete travel guide with budget breakdown."
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
export default function CologneClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={COLOGNE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Cologne" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="cologne cathedral rhine river germany gothic towers"
            fallback="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1600&q=80"
            alt="Cologne Cathedral twin Gothic towers rising above the Rhine River at golden hour"
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
              <span className="text-white/70">Cologne 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Germany · Europe
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Cologne in 3 Days:
                <em className="italic text-amber-300"> Cathedral, Kölsch &amp; the Rhine</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Gothic towers, 200ml Kölsch glasses, the world&apos;s most padlocked bridge, a chocolate fountain, and 2,000 years of Roman history beneath every street. The complete guide.
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
              <span>🇩🇪 Cologne, Germany</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From €50/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Cologne is Germany&apos;s most approachable great city — ancient enough to have been a Roman provincial capital, compact enough to walk its highlights in a day, but deep enough to reward three. The Cathedral is Europe&apos;s most visited Gothic monument and the first thing you see from every approach.
            </p>
          </blockquote>

          {/* ── WHAT COLOGNE ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Cologne Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Colonia Claudia Ara Agrippinensium — the name Romans gave to this bend in the Rhine in 50 AD — was one of the most important cities in the entire Western Empire. It was the capital of the province of Germania Inferior, the place where Empress Agrippina the Younger was born, and a commercial hub connecting the Rhine trade routes to Rome. Two thousand years later, that history runs six metres below every street in the Altstadt.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Cathedral (Kölner Dom) took 632 years to complete — begun in 1248, finished in 1880 — and for four years after completion was the tallest building on earth. It survived World War II almost miraculously: Allied bombers used its twin towers as navigation landmarks and deliberately spared them while flattening the city around it. Today it receives 20,000 visitors per day and is the most visited monument in Germany.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Beyond the Cathedral, Cologne has a character unlike any other German city. Kölsch beer arrives in cylindrical 200ml glasses and the waiter (the Köbes) refills automatically until you cover your glass with the coaster — refusing is almost rude. Carnival transforms the city each February into Europe&apos;s largest street party. The Chocolate Museum on the Rhine peninsula is genuinely world-class. And the 4711 Original Eau de Cologne house at Glockengasse 4 has been producing the world&apos;s first commercially sold perfume since 1799.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="CGN" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Oct" />
              <StatCard icon="⛪" label="Cathedral Built" value="632 yrs" />
              <StatCard icon="💰" label="Budget From" value="€50/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Cologne</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Oct",
                  i: "☀️",
                  t: "Spring to Autumn — Best Season",
                  d: "15–24°C. The Rhine promenade and beer gardens are at their best. April and May have long evenings and fewer crowds than the summer peak. June–August is warm and lively but hotels are pricier. October brings beautiful light and a quieter Altstadt. The ideal window for most first-time visitors.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Feb (Carnival)",
                  i: "🎭",
                  t: "Cologne Carnival — Extraordinary But Chaotic",
                  d: "The week before Ash Wednesday transforms Cologne into Europe&apos;s largest street party with over a million people in costume. Weiberfastnacht (Women&apos;s Thursday) and Rosenmontag (Rose Monday parade) are the peak days. Hotels book out 4–5 months ahead at triple prices. If you want Carnival, plan very far ahead. If you don&apos;t, avoid entirely.",
                  b: "Book months ahead",
                  c: "bg-purple-50 border-purple-200",
                },
                {
                  s: "Nov–Dec",
                  i: "🎄",
                  t: "Christmas Markets — Romantic &amp; Busy",
                  d: "Cologne has seven Christmas markets, the most atmospheric of which wraps around the Cathedral forecourt. December is cold (2–8°C) but the illuminated Dom behind the market stalls is one of Germany&apos;s finest winter scenes. Book hotels 6–8 weeks ahead for December. The markets run late November through Christmas Eve.",
                  b: "Magical for Christmas",
                  c: "bg-red-50 border-red-200",
                },
                {
                  s: "Jan–Feb (non-Carnival)",
                  i: "❄️",
                  t: "Winter Off-Season — Quiet &amp; Cheap",
                  d: "0–6°C. The Cathedral and museums are uncrowded, hotels are significantly cheaper, and the Brauhaus experience is especially cosy in cold weather. January is the quietest month in Cologne — the right time for museum-focused visits and unhurried Cathedral exploration. Avoid the Carnival week window (see above).",
                  b: "Best value",
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

          {/* ── GETTING THERE ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Cologne</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Cologne&apos;s main station (Cologne Hauptbahnhof) is directly attached to the Cathedral — you exit the train and the Dom is immediately in front of you. The S-Bahn from the airport drops you at the Hauptbahnhof in 15 minutes.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Cologne Bonn Airport (CGN) — S-Bahn to City",
                  d: "The S13 S-Bahn runs from CGN Airport to Cologne Hauptbahnhof every 20 minutes. Journey time: 15 minutes. Cost: €3.10 single ticket, or free with a KVB day pass (€9). Trains run from approximately 4:30am to 12:30am. A taxi costs €25–35 and takes 20–30 minutes depending on traffic.",
                  b: "Fastest option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚄",
                  t: "ICE Train from Amsterdam (2.5 hrs)",
                  d: "Deutsche Bahn ICE trains connect Amsterdam Centraal to Cologne Hauptbahnhof in 2h 30m–2h 45m, running every 2 hours. Fares from €29 booked in advance. The Rhine Valley section of this route (Koblenz to Cologne) is one of the most scenic rail journeys in Europe.",
                  b: "Scenic route",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚄",
                  t: "Thalys / Eurostar from Brussels (1.5 hrs)",
                  d: "Brussels Midi to Cologne Hauptbahnhof: 1h 45m by ICE, fares from €19 booked ahead. Brussels is the best European hub for cheap flights connecting to a Cologne trip. The combined Brussels–Cologne–Amsterdam triangle is one of Europe&apos;s best 1-week city-trip routes.",
                  b: "Best for EU visitors",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚄",
                  t: "ICE from Frankfurt (1 hr) or Berlin (4 hrs)",
                  d: "Frankfurt Hauptbahnhof to Cologne: 1h 10m by ICE, fares from €15 booked ahead. Berlin Hauptbahnhof to Cologne: 3h 45m–4h 30m, fares from €25 booked ahead. Germany&apos;s excellent rail network makes Cologne one of the easiest cities to reach from anywhere in the country.",
                  b: "Domestic travel",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  i: "✈️",
                  t: "Düsseldorf Airport (DUS) — 45 min by train",
                  d: "Düsseldorf Airport has more international connections than CGN and is served by more low-cost carriers. RE trains connect DUS to Cologne Hauptbahnhof in 40–45 minutes for €15. A viable alternative entry point, especially if flying from outside Europe.",
                  b: "More flight options",
                  c: "bg-blue-50 border-blue-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Cologne Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary covers three budget levels — the core experiences are accessible to all. Day 1 anchors the Cathedral and Altstadt; Day 2 moves to the museums and Rhine; Day 3 explores Roman history and the Belgian Quarter.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Cathedral Dom · Old Town Altstadt · Kölsch Evening"
                cost="€45–65 (transport, tower, food, beer)"
                items={[
                  "Exit Cologne Hauptbahnhof and turn around — the Cathedral is immediately behind you, its twin 157-metre towers filling the sky. This first view is one of the great arrival moments in European travel. You are standing where the Roman city gate once stood.",
                  "10:00 — Cologne Cathedral interior (free entry). The largest Gothic cathedral in northern Europe took 632 years to complete. The Shrine of the Three Kings behind the high altar is the largest reliquary in the Western world — a 12th-century goldwork masterpiece that drew medieval pilgrims from across Europe. The Gero Cross (970 AD) is the oldest large-scale crucifix north of the Alps. The 2007 Gerhard Richter south transept window — 11,500 individually coloured glass squares forming an abstract mosaic — is the most talked-about new addition to any Gothic cathedral in decades. Allow 1 hour minimum.",
                  "12:00 — Cathedral tower climb (€6, 533 steps to the South Tower viewpoint at 97m). The view encompasses the Rhine, the Hohenzollern Bridge, and the rooftops of the entire Altstadt. Arrive before noon to avoid the afternoon queues that build from 1pm onwards in summer.",
                  "13:30 — Lunch in the Altstadt. Früh am Dom (Am Hof 12) has been serving Kölsch since 1904 and is the closest Brauhaus to the Cathedral — classic Himmel un Ääd (black pudding with apple sauce and mashed potato) or Sauerbraten with Rotkohl for €12–18. Haxenhaus zum Rheingarten on Frankenwerft serves excellent roasted pork knuckle overlooking the Rhine for a similar price.",
                  "16:00 — Walk the Alter Markt and Heumarkt squares. The Gurzenich banquet hall (15th century) and the ornate town hall portal surround the medieval market squares that have been the commercial heart of Cologne since Roman times. The equestrian statue of Jan von Werth at Heumarkt is the civic centre of the Altstadt.",
                  "18:30 — Kölsch beer evening in a traditional Brauhaus. Peters Brauhaus (Mühlengasse 1), Gaffel am Dom (Bahnhofsvorplatz 1), or Sion (Unter Taschenmacher 5). Kölsch is served in 200ml cylindrical Stangen glasses by the Köbes, who replaces your glass without asking until you cover it with your coaster. A round costs €2–2.50 per glass — one of the best-value beer experiences in Germany.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Museum Ludwig · Chocolate Museum · Rhine Promenade · Hohenzollern Bridge"
                cost="€40–60 (museums, food, tower)"
                items={[
                  "10:00 — Museum Ludwig (€13, Bischofsgartenstraße 1). One of Europe&apos;s great collections of 20th-century art, directly behind the Cathedral. The largest Picasso collection outside Spain and France (including the Blue Period and Cubist masterworks), exceptional Pop Art (Warhol, Lichtenstein, Jasper Johns), German Expressionism (Kirchner, Beckmann), and a superb photography collection. Allow 2 hours minimum.",
                  "12:30 — Lunch at the Museum Ludwig café (Cathedral-view terrace, €15–25) or at one of the Domplatte restaurants on the Cathedral forecourt.",
                  "14:00 — Walk the Rhine promenade south from the Cathedral to the Chocolate Museum. The Rheingarten promenade follows the west bank of the Rhine for 3km and is the finest riverside walk in western Germany — wine kiosks, kayakers, and the Cathedral always visible behind you.",
                  "14:30 — Cologne Chocolate Museum (Schokoladenmuseum, €14, Am Schokoladenmuseum 1A). The arrow-shaped museum on the Rhine peninsula traces 3,000 years of chocolate history from Aztec cacao ceremonies to Belgian praline technique. The centrepiece: a 3-metre-tall chocolate fountain spraying liquid couverture that visitors can dip wafers into. Allow 2 hours. Book timed entry online in summer — it sells out on weekends.",
                  "17:00 — Walk north along the Rhine promenade to the Hohenzollern Bridge. The railway bridge connecting the Altstadt to the Deutz district is covered with over 500,000 love padlocks — the world&apos;s most padlocked bridge. Cross on foot (10 minutes) and walk 100m along the Deutz bank for the definitive Cologne photograph: Cathedral and bridge together from the east.",
                  "18:30 — Cologne Triangle observation deck (€5, Ottoplatz 1, Deutz) on the 29th floor of the KölnTriangle tower. The view from here — Cathedral across the Rhine, the Hohenzollern Bridge in the foreground — is arguably better framed than from the Cathedral tower itself. Less crowded than the tower, open until 10pm in summer.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Roman Cologne · Kolumba Museum · Belgian Quarter"
                cost="€40–60 (museums, food, beer)"
                items={[
                  "09:30 — Roman Cologne walking circuit. Start at the Römisch-Germanisches Museum (check cologne-tourism.com for current access during ongoing renovation — the permanent collection including the Dionysus Mosaic from 220 AD, one of the most extraordinary Roman floor mosaics in existence, may be in temporary exhibition). The Römerturm (Roman tower, 1st century AD) on Zeughausstraße is the best-preserved section of the original Roman city walls and free to view from outside.",
                  "11:00 — Praetorium Museum (€6, Kleine Budengasse 2, in the town hall basement). The Roman governor&apos;s palace ruins are preserved 5 metres below the current street level — you descend into the basement and walk through foundations dating to 50 AD. One of the most atmospheric Roman sites in northern Europe and almost entirely unknown to non-German visitors.",
                  "12:30 — Lunch at a Brüsseler Platz café in the Belgian Quarter (Belgisches Viertel). The tree-lined square is the social heart of Cologne&apos;s creative class — brunch plates, good coffee, and schnitzel sandwiches from €10–18. The Belgian Quarter&apos;s streets (named after Belgian cities) are the best independent restaurant neighbourhood in Cologne.",
                  "14:30 — 4711 Original Eau de Cologne (Glockengasse 4). The world&apos;s first commercially sold perfume has been produced at this address since 1799. The shop and small museum tell the story of Johann Maria Farina, who created Eau de Cologne in 1709. Entry is free; a bottle of the original formula starts at €12. One of the great Cologne souvenirs.",
                  "16:00 — Kolumba Art Museum (€8, Kolumbastraße 4). The Diocese of Cologne&apos;s exceptional contemporary art museum built by architect Peter Zumthor over the ruins of a late-Gothic church bombed in 1945. Zumthor incorporated the Roman, medieval, and modern ruins into a single contemplative building — it is the finest piece of architecture in Cologne and arguably one of the best museum buildings in Europe. Allow 1.5 hours.",
                  "18:30 — Final evening in the Belgian Quarter. The independent bar scene on Aachener Straße and around Brüsseler Platz is the best in Cologne after 6pm — Greek, Lebanese, modern German, and natural wine bars. Dinner from €18–30 per person. End with a final Kölsch at a neighbourhood bar: you have now earned the right to cover your glass yourself.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Cologne" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Cologne Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential Cologne sites in order of priority with entry fees as of 2026. The Cathedral and Rhine promenade are free; the main paid attractions are the Chocolate Museum, Museum Ludwig, and Cathedral tower.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Cologne Cathedral (Kölner Dom)",
                  e: "Interior free · Tower €6 · Treasury €6",
                  d: "The most-visited monument in Germany. The interior (free) is vast and genuinely awe-inspiring — the Shrine of the Three Kings, Gero Cross (970 AD), and Gerhard Richter window are the highlights. The tower climb (533 steps) gives the best panoramic views. The treasury has 12th-century goldwork and almost no queues. Open daily from 6am (weekdays) and 7am (weekends) — arrive at opening to avoid crowds.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Hohenzollern Bridge & Rhine Promenade",
                  e: "Free",
                  d: "The padlocked railway bridge connects the Altstadt to Deutz. Cross on foot for the definitive Cathedral-and-bridge photograph from the east bank. The Rheingarten promenade along the west bank runs 3km south to the Chocolate Museum — the finest riverside walk in western Germany. Wine kiosks are open April–October.",
                  t: "Must see · 1–2 hrs",
                },
                {
                  n: "Chocolate Museum (Schokoladenmuseum)",
                  e: "€14",
                  d: "3,000 years of chocolate history on a Rhine peninsula. The 3-metre chocolate fountain is the headline attraction but the museum is genuinely educational — from Aztec cacao ceremonies to modern Belgian praline technique. Book timed entry in advance in summer (schokoladenmuseum.de). Open Tue–Sun; closed Mondays.",
                  t: "Must see · 2 hrs",
                },
                {
                  n: "Museum Ludwig",
                  e: "€13",
                  d: "One of Europe&apos;s great 20th-century art collections: the largest Picasso collection outside Spain and France, exceptional Pop Art (Warhol, Lichtenstein), German Expressionism, and a superb photography archive. The building itself by Peter Busmann and Godfrid Haberer (1986) is architecturally striking. Open Tue–Sun.",
                  t: "Art lovers · 2–3 hrs",
                },
                {
                  n: "Old Town Altstadt",
                  e: "Free",
                  d: "The medieval heart of Cologne centres on Alter Markt and Heumarkt squares. The 14th-century Gurzenich banquet hall, the ornate Gothic portal of the town hall (Rathaus), and the 12th-century Jewish Mikwe (ritual bath, one of the oldest in northern Europe) are within 200m of each other. Best explored on foot without a map.",
                  t: "Half day · Free",
                },
                {
                  n: "4711 Original Eau de Cologne",
                  e: "Free (shop)",
                  d: "The world&apos;s first commercially sold perfume has been produced at Glockengasse 4 since 1799 — Johann Maria Farina created Eau de Cologne in 1709. The original formula is still produced here. The shop and small museum tell the full story. A bottle of the original starts at €12 and makes one of Cologne&apos;s best souvenirs.",
                  t: "30 mins · Free entry",
                },
                {
                  n: "Kolumba Art Museum",
                  e: "€8",
                  d: "Peter Zumthor&apos;s masterwork: a contemporary art museum built over the bombed-out ruins of a late-Gothic church and the Roman and medieval layers beneath it. The building incorporates 2,000 years of history into a single contemplative space. The quality of light and silence inside is extraordinary. Undervisited by first-time tourists — a mistake.",
                  t: "Unmissable · 1.5 hrs",
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
            title="Cologne — Cathedral, Rhine &amp; the Altstadt"
            subtitle="Gothic towers, Rhine padlocks, chocolate fountains and 2,000 years of history."
            spots={[
              {
                name: "Cologne Cathedral Dom",
                query: "cologne cathedral dom gothic towers germany rhine river",
                desc: "The twin 157-metre Gothic towers of Kölner Dom — Europe&apos;s most visited monument and the most recognisable silhouette in Germany.",
              },
              {
                name: "Hohenzollern Bridge Love Locks",
                query: "hohenzollern bridge cologne love locks padlocks rhine germany",
                desc: "Over 500,000 love padlocks cover the Hohenzollern Bridge — the world&apos;s most padlocked bridge and the best viewpoint for the Cathedral.",
              },
              {
                name: "Rhine Promenade Cologne",
                query: "rhine river promenade cologne germany riverfront cathedral",
                desc: "The Rheingarten promenade along the west bank of the Rhine — 3km of riverside walking with the Cathedral always visible behind you.",
              },
              {
                name: "Cologne Chocolate Museum",
                query: "cologne chocolate museum schokoladenmuseum rhine peninsula",
                desc: "The Schokoladenmuseum on its Rhine peninsula — home to the famous 3-metre chocolate fountain and 3,000 years of chocolate history.",
              },
              {
                name: "Cologne Altstadt Old Town",
                query: "cologne altstadt old town germany medieval cathedral",
                desc: "The medieval Altstadt with its Brauhaus culture, Kölsch beer halls, and the Alter Markt square that has been the city&apos;s heart for two millennia.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Cologne is mid-priced by western European standards — cheaper than Paris or London, similar to Amsterdam. The Cathedral and Rhine promenade are free; main paid attractions add €25–40 for a full day. Kölsch beer at €2–2.50 per glass makes the Brauhaus evenings excellent value.
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
                    ["🏨 Accommodation", "€18–28 (hostel dorm)", "€90–140 (4-star near Cathedral)", "€250–500 (Excelsior Ernst)"],
                    ["🍽️ Food & drink", "€15–25 (Brauhaus, kebabs)", "€35–55 (restaurants, Riesling)", "€100–180 (fine dining)"],
                    ["🚇 Transport", "€4–10 (KVB day pass €9)", "€8–15 (taxi + KVB)", "€50–100 (private transfers)"],
                    ["🏛️ Activities", "€10–20 (tower, Choc Museum)", "€30–50 (Museum Ludwig, Rhine cruise)", "€100–200 (private tours)"],
                    ["TOTAL per day", "€50–75", "€110–160", "€260–420+"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€50–75/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay at Meininger Hotel Cologne City Centre or Wombats Hostel (€18–28/dorm night). Cathedral interior free. Tower €6. Kölsch at €2.50/glass in the Brauhaus. KVB day pass €9. The Altstadt and Rhine promenade cost nothing.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range (€110–160/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">4-star hotel near the Cathedral or Rhine (25hours Hotel The Circle is the best value-design option at €90–140/night). Museum Ludwig plus Chocolate Museum in one day. Rhine cruise (€15). Dinner with Rhine Riesling (€35–55/pp).</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (€260–420+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Excelsior Hotel Ernst (directly opposite the Cathedral since 1863, from €250/night). Hanse Stube fine dining (€120/pp). Private guided tours. Museum Ludwig curator access. Everything at the highest level.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Cologne</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The best base is the Altstadt or Innenstadt within walking distance of the Cathedral. The Belgian Quarter (Belgisches Viertel) is excellent for a more local feel. Deutz (across the river) has great Cathedral views from hotel windows but requires crossing the bridge for most sights.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Excelsior Hotel Ernst",
                  type: "Luxury · Directly opposite the Cathedral since 1863",
                  price: "From €250/night",
                  badge: "Most historic",
                  desc: "The oldest luxury hotel in Cologne, open continuously since 1863, positioned directly across the forecourt from the Cathedral&apos;s main entrance. Cathedral-view rooms are extraordinary — you wake to the twin spires at dawn. The Hanse Stube restaurant is one of Cologne&apos;s finest dining rooms. Book 3–4 weeks ahead for Cathedral-view suites.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "25hours Hotel The Circle",
                  type: "Design · Mediapark, 10 min from Cathedral",
                  price: "From €90/night",
                  badge: "Best design value",
                  desc: "The best design hotel in Cologne at the mid-range price point. Eccentric, playful interiors, excellent rooftop bar with city views, and a strong local identity that most Cologne hotels lack. Located at the Mediapark (10 minutes walk from the Cathedral). Excellent breakfast included in most rates.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Hyatt Regency Cologne",
                  type: "Luxury · Deutz riverbank with Cathedral views",
                  price: "From €180/night",
                  badge: "Best Rhine views",
                  desc: "On the Deutz bank of the Rhine directly across from the Cathedral — the hotel terrace and riverside-facing rooms offer the definitive Cologne Cathedral-over-Rhine view. The Regency Club lounge has a panoramic bar. A 5-minute walk across the Hohenzollern Bridge to the Altstadt.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Jugendherberge Köln Deutz",
                  type: "Hostel · Deutz, across the Rhine",
                  price: "From €28/night (dorm)",
                  badge: "Best budget",
                  desc: "The DJH hostel directly on the Rhine in Deutz, with some of the best Cathedral views in Cologne at a fraction of the hotel price. Private rooms and dorm beds available. Modern facility with a good self-service restaurant. 5-minute walk across the bridge to the Altstadt. Excellent value for solo and budget travellers.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Cologne</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Cologne&apos;s restaurant scene divides between traditional Brauhaus cooking (Sauerbraten, Himmel un Ääd, Halver Hahn — a rye roll with Gouda) in the Altstadt Brauhauser, and the diverse independent restaurants of the Belgian Quarter. Both are excellent; the Brauhaus is the essential Cologne experience.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Früh am Dom",
                  t: "Traditional Brauhaus · Am Hof 12, Altstadt",
                  d: "The most famous Brauhaus in Cologne, 50 metres from the Cathedral&apos;s south door, serving Kölsch since 1904. Three floors of dark wood, Köbes in traditional aprons, and the full Cologne menu: Sauerbraten (marinated pot roast) with Klöße, Himmel un Ääd (black pudding with apple sauce and mashed potato), Halver Hahn (rye roll with aged Gouda). Kölsch €2.50/Stange. Busy at dinner — arrive before 7pm or expect a wait. Main courses €12–22.",
                  b: "Essential Cologne",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Haxenhaus zum Rheingarten",
                  t: "Traditional · Frankenwerft 19, Rhine waterfront",
                  d: "The best address for roasted pork knuckle (Haxe) in Cologne, on the Rhine promenade with a terrace overlooking the river and the Cathedral behind you. The pork knuckle (€18–22) is the real reason to come — crispy skin, falling-off-the-bone meat, served with sauerkraut and mustard. The Rhine view from the terrace is the finest from any Cologne restaurant. Kölsch on tap.",
                  b: "Best Rhine view",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Peters Brauhaus",
                  t: "Traditional Brauhaus · Mühlengasse 1, Altstadt",
                  d: "The most atmospheric of the central Brauhäuser — dark wood, low ceilings, a labyrinthine layout that fills with locals by 7pm. The Kölsch here has a slight hop character that distinguishes it from Früh. The kitchen serves all the classic Cologne dishes plus excellent daily specials. The Köbes are famously gruff in the best Cologne tradition. Main courses €13–20.",
                  b: "Most atmospheric",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Belgian Quarter Restaurants",
                  t: "International · Belgisches Viertel",
                  d: "The streets around Brüsseler Platz and Aachener Straße have Cologne&apos;s best independent restaurant scene: Greek mezze, Lebanese grill, modern German bistro, and natural wine bars within 300m of each other. Café Franck (Brüsseler Platz) for breakfast; Wolkenburg for modern German; Bar Schmitz for Flammkuchen and cocktails. Budget €18–35/pp for dinner.",
                  b: "Best neighbourhood",
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
            destination="Cologne Germany"
            hotels={[
              {
                name: "Excelsior Hotel Ernst",
                type: "Luxury · Directly opposite the Cathedral",
                price: "From €250/night",
                rating: "5",
                badge: "Most historic",
                url: "https://www.booking.com/hotel/de/excelsior-ernst.html?aid=2820480",
              },
              {
                name: "25hours Hotel The Circle",
                type: "Design · Mediapark",
                price: "From €90/night",
                rating: "4",
                badge: "Best design value",
                url: "https://www.booking.com/hotel/de/25hours-koeln-the-circle.html?aid=2820480",
              },
              {
                name: "Hyatt Regency Cologne",
                type: "Luxury · Rhine riverbank, Cathedral views",
                price: "From €180/night",
                rating: "5",
                badge: "Best Rhine views",
                url: "https://www.booking.com/hotel/de/hyatt-regency-cologne.html?aid=2820480",
              },
              {
                name: "Jugendherberge Köln Deutz",
                type: "Hostel · Deutz, Rhine waterfront",
                price: "From €28/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/de/jugendherberge-koeln-deutz.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Cologne Cathedral & Old Town Guided Tour",
                duration: "3 hrs",
                price: "From €18/person",
                badge: "Best seller",
                url: "https://www.getyourguide.com/s/?q=cologne+cathedral+guided+tour&partner_id=PSZA5UI",
              },
              {
                name: "Rhine River Cruise Cologne",
                duration: "1 hr",
                price: "From €15/person",
                badge: "Classic",
                url: "https://www.getyourguide.com/s/?q=cologne+rhine+cruise&partner_id=PSZA5UI",
              },
              {
                name: "Cologne Chocolate Museum Entry",
                duration: "2 hrs",
                price: "From €14/person",
                badge: "Family favourite",
                url: "https://www.getyourguide.com/s/?q=cologne+chocolate+museum&partner_id=PSZA5UI",
              },
              {
                name: "Roman Cologne Private Walking Tour",
                duration: "2 hrs",
                price: "From €25/person",
                url: "https://www.getyourguide.com/s/?q=cologne+roman+walking+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Cologne</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "⛪",
                  title: "Queueing for the Cathedral tower without timing it right",
                  desc: "The Cathedral interior is free and almost never requires queuing — simply walk in at opening (6am weekdays, 7am weekends). The tower climb (€6, 533 steps) has significant queues after 11am in summer. Go first thing in the morning for both. The Cathedral treasury is almost always uncrowded at any time and is consistently underrated by first-time visitors.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🍫",
                  title: "Visiting the Chocolate Museum without booking in summer",
                  desc: "The Schokoladenmuseum sells out timed entry tickets on summer weekends and school holiday periods (July, August, Easter). Book at least 3 days ahead at schokoladenmuseum.de. Arriving without a booking in peak season means a 45-minute queue and a genuine risk of not getting in. The chocolate fountain also closes temporarily when the museum is too busy.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🍺",
                  title: "Ordering anything other than Kölsch in a traditional Brauhaus",
                  desc: "In a Cologne Brauhaus, ordering Düsseldorf&apos;s Altbier is considered a mild social transgression — the Kölsch-Altbier rivalry is real and earnest. Kölsch is a geographical indication under European law and can only be brewed within Cologne city limits. There are 12 official Kölsch breweries, each slightly different. The Köbes will keep refilling your glass until you place your beer mat on top to signal you are done.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🌉",
                  title: "Not crossing the Hohenzollern Bridge on foot",
                  desc: "The most famous Cologne photograph is taken from the east bank of the Rhine — Cathedral and bridge together in a single frame. You must cross the bridge on foot (10 minutes) and walk 100m along the Deutz bank to the right position. Many first-time visitors see the bridge only from the west bank and miss the defining image of the city entirely.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🎭",
                  title: "Visiting during Carnival without preparing months in advance",
                  desc: "Cologne Carnival (Karneval) runs the week before Ash Wednesday and brings over a million people in costume into the city. Hotels book out 4–5 months ahead at two to three times normal prices. If you plan to attend, start booking by October for a February Carnival. If you are not interested in Carnival, avoid Cologne entirely during that week — the city is near-impossible to navigate normally.",
                  color: "bg-purple-50 border-purple-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Cologne</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🏛️",
                  title: "The Cathedral is best at 6am and illuminated at night",
                  desc: "The Cathedral opens at 6am on weekdays (7am weekends) and is completely empty for the first hour — just you and 700 years of Gothic stonework in absolute silence. Come back after dark to see it illuminated from the Rhine promenade. The Cathedral closes briefly for services several times daily — check the schedule at koelner-dom.de before planning your visit. Book Cologne experiences at getyourguide.com/s/?q=Cologne&partner_id=PSZA5UI",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🍷",
                  title: "Order Rhine Riesling at dinner, not just Kölsch",
                  desc: "Cologne sits at the centre of the Rhine wine region. Kölsch is the beer of choice but at dinner, order a Moselle or Rhine Riesling — Spätlese or Auslese. The crisp, off-dry German whites pair perfectly with Cologne&apos;s pork-heavy cuisine (Sauerbraten, Haxe, Himmel un Ääd) and a bottle starts at €18–25 in restaurants. Far cheaper than equivalent quality wine in London or Paris.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚇",
                  title: "Buy the KVB day pass — it covers S-Bahn from the airport",
                  desc: "The KVB day pass (€9) covers all trams, U-Bahn, and S-Bahn trains within Cologne including the S13 from the airport (normally €3.10 single). If you are arriving by plane and making 3+ journeys that day, buy the day pass at the airport immediately. Single tickets are €3.10; the day pass pays back in 3 trips. Most Altstadt sights are walkable from the Cathedral — transit is mainly for the Chocolate Museum and Belgian Quarter.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🎊",
                  title: "Carnival is worth planning an entire separate trip around",
                  desc: "The Cologne Karneval is genuinely one of Europe&apos;s most extraordinary mass events. Weiberfastnacht (Women&apos;s Thursday) is unique: women rule the Altstadt and cut off men&apos;s ties with scissors as a tradition. The Rose Monday parade draws 1.5 million spectators along an 8km route. If you go, wear a full costume — street clothes mark you as a tourist immediately. Book hotels by October for February Carnival.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🗺️",
                  title: "Cologne&apos;s Altstadt is genuinely compact — walk everywhere",
                  desc: "The Cathedral, Hohenzollern Bridge, Museum Ludwig, and Alter Markt are all within 800m of each other. The Chocolate Museum is a pleasant 25-minute walk south along the Rhine promenade. For the Belgian Quarter, take the U1/U3/U4 tram from Dom/Hauptbahnhof (2 stops, €3.10) or walk 20 minutes through the Innenstadt. A bicycle is the ideal way to reach the Cologne Triangle in Deutz.",
                  color: "bg-parchment border-parchment-2",
                },
                {
                  icon: "🎄",
                  title: "The Christmas market at the Cathedral is one of Germany&apos;s best",
                  desc: "The Weihnachtsmarkt am Kölner Dom, running from late November through December 23rd, wraps around the Cathedral forecourt and into the Roncalliplatz. The illuminated Dom behind the market stalls — mulled wine, gingerbread, wooden ornaments — is one of the most atmospheric December scenes in Europe. Arrive in the morning on weekdays to avoid weekend crowds. Entry is free.",
                  color: "bg-red-50 border-red-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Cologne" />

          {/* Combine With */}
          <CombineWith currentSlug="cologne-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Cologne worth 3 days or is it better as a day trip from Amsterdam or Brussels?",
                  a: "Cologne absolutely rewards 3 days. The Cathedral alone takes a full morning to explore properly — interior, tower, and treasury. The Chocolate Museum, Museum Ludwig, Rhine promenade, Brauhaus evenings, and the Belgian Quarter fill two more full days comfortably. As a day trip from Amsterdam (2.5 hours by ICE) or Brussels (1.5 hours), you can only see the Cathedral and Rhine — which means missing the city&apos;s real character. For a first visit, 2 nights minimum is strongly recommended.",
                },
                {
                  q: "What is Kölsch beer and why is it served in such small glasses?",
                  a: "Kölsch is a light, clear, top-fermented beer unique to Cologne — European law (a geographical indication, like Champagne) means it can only be brewed within the Cologne city limits by the 12 official Kölsch breweries. It is served in 200ml cylindrical glasses called Stangen because it oxidises quickly and tastes best consumed fresh and cold. The Köbes (waiter) replaces your empty glass automatically without asking; place your beer mat on top of your glass when you want to stop. Prices are €2–2.50 per glass in a traditional Brauhaus.",
                },
                {
                  q: "How do I get from Cologne Bonn Airport (CGN) to the city centre?",
                  a: "The S13 S-Bahn train runs from CGN Airport to Cologne Hauptbahnhof every 20 minutes, takes 15 minutes, and costs €3.10 single or is included in the KVB day pass (€9). A taxi costs €25–35 and takes 20–30 minutes. Cologne Hauptbahnhof is attached directly to the Cathedral — you exit the train and the Dom towers are immediately in front of you. Düsseldorf Airport (DUS) also serves Cologne: RE trains to Cologne Hbf take 40–45 minutes and cost €15.",
                },
                {
                  q: "When is Cologne Carnival and how do I attend?",
                  a: "Cologne Carnival officially begins on 11 November at 11:11am but the main festivities are the week before Ash Wednesday (usually late January or February depending on Easter). Key dates: Weiberfastnacht (Women&apos;s Thursday, women cut off men&apos;s ties), Rosenmontag (Rose Monday, the 8km main parade drawing 1.5 million spectators), and Veilchendienstag (Shrove Tuesday). Full costume is expected — wearing normal clothes in the Altstadt during Carnival marks you immediately as a non-participant. Book hotels 4–5 months in advance; prices typically double or triple during Carnival week.",
                },
                {
                  q: "What is the 4711 Eau de Cologne and where can I buy it?",
                  a: "4711 is the world&apos;s first commercially sold perfume, created by Johann Maria Farina in Cologne in 1709. The number refers to the house at Glockengasse 4711 where it was produced under French occupation. It remains in production today using the original formula — a citrus-and-herb blend of bergamot, orange, lemon, lavender, and rosemary. The flagship shop at Glockengasse 4 (a short walk from the Cathedral) sells the original formula from €12 for a small bottle. It is one of the quintessential Cologne souvenirs and one of the cheapest genuine luxury fragrance items in Europe.",
                },
                {
                  q: "Is the Cologne Christmas market worth visiting and when does it run?",
                  a: "Yes — the Christmas market at the Cathedral (Weihnachtsmarkt am Kölner Dom) is consistently rated among Germany&apos;s best and runs from late November through December 23rd. The illuminated Dom behind the stalls is genuinely spectacular. Cologne has seven Christmas markets in total: the Cathedral market, the historic market at Alter Markt, the Harbour market at Chocolate Museum, and four others. The Cathedral and Alter Markt markets are the best. Arrive on weekday mornings to avoid weekend crowds.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Cologne trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-cologne", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/cologne-travel-tips", label: "Travel tips", icon: "💡" },
                { href: "/blog/cologne-cathedral-guide", label: "Cathedral guide", icon: "⛪" },
                { href: "/blog/cologne-carnival-guide", label: "Carnival guide", icon: "🎭" },
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
          <RelatedGuides currentSlug="cologne-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Amsterdam in 4 Days — Canals &amp; Culture", href: "/blog/amsterdam-4-days" },
                { label: "Brussels in 3 Days — Beer &amp; Chocolate", href: "/blog/brussels-3-days" },
                { label: "Berlin in 4 Days — History &amp; Art", href: "/blog/berlin-4-days" },
                { label: "Hamburg in 3 Days — Port City", href: "/blog/hamburg-3-days" },
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
