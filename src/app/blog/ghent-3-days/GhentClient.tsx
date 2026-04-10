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
import { usePageUrl } from "@/lib/hooks";

// ── Table of Contents ─────────────────────────────────────────────────────────
const GHENT_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Ghent Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "🚂",  label: "Getting There" },
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
        {
          label: "Email",
          color: "bg-ink text-white",
          href: `mailto:?subject=Ghent 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Ghent in 3 Days — Altarpiece, castle and Belgian food&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/ghent-3-days"
        imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
        description="Ghent in 3 Days: Gravensteen Castle, Ghent Altarpiece, Graslei waterfront and Gentse Stoverij — complete Belgium travel guide with real euro costs."
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
export default function GhentClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={GHENT_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Ghent" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="ghent belgium graslei waterfront medieval guild houses canal leie river"
            fallback="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
            alt="Ghent Graslei waterfront with medieval guild houses reflected in the Leie river, Belgium"
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
              <span className="text-white/70">Ghent 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Belgium
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Ghent in 3 Days:
                <em className="italic text-amber-300"> Altarpiece, Castle &amp; the Real Belgium</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The Mystic Lamb, Gravensteen Castle, Graslei waterfront, Gentse Stoverij beef stew, and 60,000 students keeping the bars loud after midnight. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="11 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇧🇪 Ghent, Belgium</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From €50/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Ghent is the Belgium that Bruges wishes it still was — a fully living medieval city with canals, guild houses, a 12th-century castle, and the most important painting in the history of northern European art, all surrounded by a genuine university city energy that keeps restaurants full, bars loud, and the streets interesting after 10pm.
            </p>
          </blockquote>

          {/* ── WHAT GHENT ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Ghent Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Most visitors come to Belgium for Brussels or Bruges and treat Ghent as an afterthought — a half-day side trip. This is a significant mistake. Ghent is Belgium&apos;s third-largest city and its most underrated: a medieval powerhouse that was one of the wealthiest cities in northern Europe during the 14th century, the birthplace of Charles V, a centre of the Flemish weaver guilds, and the city that gave the world both the Ghent Altarpiece and the European labour movement.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Unlike Bruges — which silted up in the 15th century and was essentially frozen in medieval amber — Ghent kept growing. The result is a living city with 60,000 university students, a thriving craft beer scene, Michelin-starred restaurants in converted warehouses, and the full intensity of medieval Belgium still visible in the castle, the waterfront guild houses, and the three Gothic towers that dominate the skyline.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Three days is the right amount. Enough for the Ghent Altarpiece at St Bavo&apos;s Cathedral, Gravensteen Castle, the Graslei waterfront, STAM city museum, the Vrijdagmarkt Saturday market, the Patershol restaurant quarter, and one lingering afternoon doing nothing on a canal-side terrace with a Gentse Tripel in hand. This guide covers all of it — real prices, real restaurants, and no fluff.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="🚂" label="From Brussels" value="32 min" />
              <StatCard icon="🌡️" label="Best Months" value="Apr–Jun, Sep–Oct" />
              <StatCard icon="🏛️" label="Duration" value="3 Days" />
              <StatCard icon="💰" label="Budget From" value="€50/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Ghent</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "12–20°C, long daylight hours, canal-side terraces open, and flower markets in full swing. April and May are the sweet spot: fewer crowds than summer, excellent weather for walking the medieval centre. The Graslei waterfront is at its most photogenic with spring light on the guild houses.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Autumn — Excellent",
                  d: "14–18°C, golden afternoon light on the waterfront, fewer tourists than summer, and all restaurants operating at full capacity. October has the best light for photography. Ghent&apos;s student population returns in September, filling the bars and creating the city energy that makes it special.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jan (Light Festival)",
                  i: "💡",
                  t: "January — Light Festival",
                  d: "Ghent hosts its famous Light Festival (Lichtfestival) every 3 years in January — 40+ light installations transforming the medieval buildings and canals into an extraordinary spectacle. Cold (2–8°C) but worth it in festival years. Check dates at lichtfestival.be. Next edition: January 2027.",
                  b: "Festival only",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Jul–Aug",
                  i: "☀️",
                  t: "Summer — Busy",
                  d: "18–25°C, excellent weather but the city fills with tourists and accommodation prices rise significantly. The Ghent Festivities (Gentse Feesten) in late July transform the city into a 10-day free outdoor festival — extraordinary energy but book accommodation 3–4 months ahead. The Altarpiece sells out timed entries by 9am.",
                  b: "Book ahead",
                  c: "bg-orange-50 border-orange-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚂 Getting to Ghent</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Ghent&apos;s main station is <strong className="font-medium">Ghent Sint-Pieters</strong>, 2km south of the medieval centre. Tram line 1 connects the station to Korenmarkt in the centre in 8 minutes. The station is on direct lines from Brussels, Bruges, Antwerp, and Amsterdam.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚂",
                  t: "Train from Brussels (recommended)",
                  d: "Brussels Midi (Zuid) → Ghent Sint-Pieters: 32 minutes, €13.50. Trains run every 15–20 minutes all day. From Brussels Airport (Zaventem), take a direct train to Brussels Midi (20 min), then change for Ghent — total journey approximately 55 minutes. This is the standard arrival route for most international visitors.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚂",
                  t: "Train from Bruges",
                  d: "Bruges → Ghent Sint-Pieters: 25–30 minutes, €8.80. Trains run every 30 minutes. The Ghent–Bruges combination is one of Belgium&apos;s great short trips — very easy to do both cities in a week.",
                  b: "Very easy",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  i: "🚂",
                  t: "Train from Amsterdam",
                  d: "Amsterdam Centraal → Ghent Sint-Pieters: 2 hrs 15 min via Brussels, €35–€65 with Thalys or IC connections. Direct IC trains also run via Antwerp. Book at least 3 days ahead for the cheapest fares on the Belgian rail network (belgiantrain.be).",
                  b: "Easy connection",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚗",
                  t: "Drive from Brussels",
                  d: "55km via E40 motorway, 45–60 minutes depending on traffic. Parking in Ghent&apos;s medieval centre is restricted — use the Park & Ride at Wondelgem or Sint-Pieters station and take the tram. City centre driving is actively discouraged and most streets are pedestrian or bike-only.",
                  b: "Not recommended",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Ghent Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is structured to front-load the major paid attractions early when queues are shortest, leaving afternoons for the waterfront and evenings for the Patershol restaurant quarter.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Gravensteen Castle · Patershol · Ghent Altarpiece · Graslei Waterfront"
                cost="€45–€70 total"
                items={[
                  "09:00 — Gravensteen Castle (€14). The 12th-century castle of the Counts of Ghent rises straight out of the city centre like a stage set — fully intact stone towers, a moat, a drawbridge, and a dungeon. Book online to skip the queue. The rooftop gives unobstructed views across the entire medieval skyline: three Gothic towers in a single frame — St Bavo&apos;s Cathedral, St Nicholas&apos;s Church, and the Belfry. Allow 90 minutes.",
                  "11:00 — Walk through the Patershol neighbourhood (free). The cobblestoned streets immediately north of Gravensteen are where Ghent&apos;s best restaurants cluster. A morning walk reveals the evening options: which konobas have handwritten menus, which terraces face south, and which chefs are writing the daily board on the chalkboard outside. Witloof (Belgian endive) dishes and Gentse Stoverij (Ghent beef stew braised in Tripel ale) appear on every board.",
                  "12:30 — Lunch in Patershol: Gentse Stoverij with a glass of Gruut ale, €14–18. Ask if the stew is made in-house — the best versions simmer for 4+ hours with mustard and fresh herbs and are served with hand-cut frites.",
                  "14:00 — Ghent Altarpiece at St Bavo&apos;s Cathedral (€12). Jan van Eyck&apos;s Adoration of the Mystic Lamb (1432) is the most complex and theologically layered painting in the history of northern European art. Stolen by Napoleon in 1794, seized by Prussia after WWI as war reparations, and two lower panels stolen in 1934 — one was never recovered until 2010. The recently restored polyptych is displayed in the Vijdt Chapel with dramatic lighting that reveals the extraordinary detail of van Eyck&apos;s oil-glazing technique. Allow 90 minutes — the theological programme alone deserves close attention.",
                  "16:30 — Graslei and Korenlei waterfront (free). The most beautiful stretch of medieval waterfront in Belgium — 12th–16th century guild houses lining both banks of the Leie river at the Korenlei and Graslei quays. Find a bench facing the water or take a boat tour from the Graslei jetty (€8–10, 40 minutes) for the canal-level view of the guild facades. The late afternoon light on the stepped gables is excellent for photography.",
                  "19:30 — Dinner in Patershol: book ahead for a proper konoba dinner. Budget options in the student quarter near Korenmarkt run €12–20 for a full meal. Try cuberdons — the cone-shaped violet-flavoured candy unique to Ghent — from the street vendors on Vrijdagmarkt for €3–4 a bag.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="STAM City Museum · Vrijdagmarkt · Dulle Griet · Publiek"
                cost="€50–€80 total"
                items={[
                  "10:00 — STAM Ghent City Museum (€12). A city history museum in the 15th-century Bijloke complex — former medieval hospital buildings with extraordinary preserved beamed ceilings that are themselves worth the entry fee. The history of Ghent from its founding on the confluence of the Leie and Scheldt rivers, through its role as the wealthiest city in the medieval Low Countries, to its extraordinary political history as the birthplace of the European labour movement. Allow 2 hours.",
                  "12:30 — Lunch at Het Pakhuis (Schuurkenstraat 4, a cavernous 19th-century warehouse conversion, Belgian classics, €20–35/person). The interior alone — vaulted iron ceiling, brick arches, warm lighting — is worth a visit. Book ahead at lunch as locals fill it quickly. The waterzooi (Ghent-style chicken or fish stew) is the dish to order here.",
                  "14:30 — Vrijdagmarkt square (free). Ghent&apos;s largest public square — historically the site of public executions, guild festivals, and workers&apos; protests going back to the 14th century. The statue of Jacob van Artevelde at the centre marks where the leader of the weaver guilds addressed crowds of 60,000. On Saturday mornings it hosts one of Belgium&apos;s best food markets: fresh witloof, local cheeses, smoked meats, and street food from €2. The surrounding cafe terraces serve excellent afternoon beer.",
                  "16:00 — Dulle Griet bar on Vrijdagmarkt. This is one of Belgium&apos;s most famous beer bars — 500+ Belgian beers including the iconic yard-glass Kwak, for which the bar requires you to leave one shoe as a deposit (returned with the glass). Entirely worth the experience. Gruut, the herb-brewed Ghent beer reviving a medieval recipe, is available here and at its own brewery on the canal.",
                  "18:00 — Free evening walk: Sint-Niklaaskerk (13th century, free entry), the Belfry (€10, excellent city views from 91m), and the evening light on the Graslei guild houses before dinner.",
                  "20:00 — Dinner at Publiek (Ham 39, 1 Michelin star). Modern Belgian cooking using hyper-local Ghent produce and natural wines. Seasonal tasting menu €55–75/person. Book at least 1 week ahead in shoulder season, 3 weeks in summer.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Saturday Market · Sint-Baafsplein · Vrijmoed Lunch · Canal Afternoon"
                cost="€40–€75 total"
                items={[
                  "08:30 — Saturday market at Vrijdagmarkt and Bevrijdingsplein (free). Fresh witloof, local cheeses, Belgian waffles from street vendors (€2–3), artisan bread, and the famous cuberdon vendors with their piled cones of violet candy. This is one of the best food markets in Belgium and a genuinely local Ghent experience — arrive by 9am before the best produce sells out.",
                  "10:00 — Sint-Baafsplein and the three towers (free). The heart of medieval Ghent: St Bavo&apos;s Cathedral, the Belfry, and St Nicholas&apos;s Church visible simultaneously. The Belfry (€10) houses the original Ghent city bell Roland and offers the best aerial view of the medieval street plan. The sound of the carillon on the hour carries across the whole centre.",
                  "12:00 — Lunch at Restaurant Vrijmoed (Vlaanderenstraat 22, 1 Michelin star). Belgium&apos;s most creative plant-forward tasting menu: a 5-course lunch (€65/person) that reinterprets Flemish ingredients with unusual technique. Natural wines. The lunch menu is considerably better value than the 7-course dinner. Book 1 week ahead minimum.",
                  "14:30 — Afternoon on the canal: rent a bicycle (€10–15/day from multiple rental points near Sint-Pieters station or Korenmarkt) and follow the Leie canal south toward the Portus Ganda area where Ghent&apos;s medieval harbour was located. The canal path passes the university buildings, the Bijloke complex, and the more residential Ghent that most tourists never reach.",
                  "17:00 — Aperitif on the Graslei waterfront with a Gentse Tripel (€4–6) as the evening light hits the guild house facades at the Graslei and Korenlei. This is the moment Ghent earns every compliment anyone has ever paid it.",
                  "19:30 — Farewell dinner in the Patershol neighbourhood. If Vrijmoed and Publiek are booked, try Brasserie Pakhuis for reliable Belgian classics or one of the smaller konobas on Kraanlei or Penshuisstraatje for Gentse Stoverij and a final local beer.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Ghent" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Ghent Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in priority order. The Ghent City Card (€30 for 48 hrs, €35 for 72 hrs) covers the Altarpiece, Gravensteen, STAM, canal boat, and public transport — it pays for itself if you visit more than 2 paid attractions.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Ghent Altarpiece — St Bavo&apos;s Cathedral",
                  e: "€12",
                  d: "Jan and Hubert van Eyck&apos;s Adoration of the Mystic Lamb (1432) — the most important painting in the history of northern European art. A 12-panel polyptych of revolutionary oil-glazing technique and extraordinary theological complexity. Stolen by Napoleon, seized by Prussia, two panels stolen in 1934 (one not recovered until 2010). The restored panels are in the Vijdt Chapel. Timed entry in summer — book at visitgent.be.",
                  t: "Must see · 90 min",
                },
                {
                  n: "Gravensteen Castle",
                  e: "€14",
                  d: "The 12th-century Castle of the Counts — fully intact stone keep, moat, drawbridge, and dungeon in the heart of the city. The castle was used as a cotton mill, a prison, and an execution ground before restoration. The rooftop panorama is the best medieval skyline view in Belgium: three Gothic towers visible in a single sweep. Book at getyourguide.com/s/?q=Ghent+Belgium&partner_id=PSZA5UI for guided tours.",
                  t: "Must see · 90 min",
                },
                {
                  n: "Graslei &amp; Korenlei Waterfront",
                  e: "Free",
                  d: "The most beautiful medieval waterfront in Belgium — guild houses from the 12th to 16th centuries lining both banks of the Leie at the old city harbour. The Grain Measurers&apos; House, the Corn Measurer&apos;s House, the Free Boatmen&apos;s House — each facade tells the story of the trade guild that built it. Best at dawn before tour groups arrive, or at golden hour when the stepped gables catch the last light.",
                  t: "Free · All day",
                },
                {
                  n: "STAM Ghent City Museum",
                  e: "€12",
                  d: "City history in a stunning 15th-century Bijloke hospital complex with original beamed ceilings. The history of Ghent&apos;s founding, its medieval textile empire, Charles V&apos;s birth in 1500, the Treaty of Ghent (1814), and Ghent&apos;s role in founding the Belgian labour movement. The building itself — particularly the refectory — is the best-preserved medieval interior in Ghent.",
                  t: "2 hrs",
                },
                {
                  n: "Vrijdagmarkt Saturday Market",
                  e: "Free",
                  d: "Ghent&apos;s largest historic square has hosted public markets since the 14th century. The Saturday morning market is one of Belgium&apos;s best: fresh witloof, Ghent cheeses, smoked meats, artisan bread, and cuberdon candy vendors. The Jacob van Artevelde statue marks the spot where the weaver guild leader addressed 60,000 people in 1338. The surrounding cafe terraces are excellent for afternoon beer.",
                  t: "Saturday market · Free",
                },
                {
                  n: "Patershol Restaurant Quarter",
                  e: "Free",
                  d: "The cobblestoned neighbourhood north of Gravensteen is Ghent&apos;s densest concentration of good restaurants — over 40 restaurants in 4 streets. Former weavers&apos; houses turned into konobas serving Gentse Stoverij, waterzooi, witloof gratin, and Flemish seasonal menus. An evening walk through Patershol without a reservation is the best way to choose dinner: the chalkboards outside tell you everything you need to know.",
                  t: "Evening only · Free",
                },
                {
                  n: "Ghent Light Festival (Lichtfestival)",
                  e: "Free",
                  d: "Every 3 years in January, Ghent hosts one of Europe&apos;s great light festivals — 40+ installations by international artists transforming the medieval buildings and canals. The castle, the Graslei guild houses, the Cathedral, and the Belfry all participate. Cold (2–8°C) but extraordinary. Previous editions: 2018, 2021, 2024. Next: January 2027. Plan well ahead — hotels sell out within days of the announcement.",
                  t: "Triennial event",
                },
              ].map((place) => (
                <div key={place.n} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-stone-900" dangerouslySetInnerHTML={{ __html: place.n }} />
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs text-teal font-medium bg-teal/10 px-2 py-0.5 rounded-full">{place.e}</span>
                      <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">{place.t}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: place.d }} />
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <DestinationGallery
            title="Ghent — Waterfront, Castle &amp; the Mystic Lamb"
            subtitle="Medieval Belgium at its most photogenic and most alive."
            spots={[
              {
                name: "Graslei Waterfront at Dawn",
                query: "ghent graslei waterfront medieval guild houses canal morning belgium",
                desc: "The Graslei quay at dawn — guild houses from the 12th to 16th centuries reflected in the still Leie river before tourist boats arrive.",
              },
              {
                name: "Gravensteen Castle",
                query: "gravensteen castle ghent belgium medieval moat 12th century",
                desc: "The 12th-century Castle of the Counts rising from the city centre — fully intact keep, moat, and drawbridge.",
              },
              {
                name: "Ghent Three Towers",
                query: "ghent three towers belfry st nicholas church st bavo cathedral belgium",
                desc: "The iconic three Gothic towers of Ghent: St Bavo&apos;s Cathedral, the Belfry, and St Nicholas&apos;s Church in a single frame.",
              },
              {
                name: "Patershol Cobblestones",
                query: "patershol neighbourhood ghent belgium cobblestone street restaurant medieval",
                desc: "The cobblestoned Patershol quarter north of Gravensteen — Ghent&apos;s densest concentration of excellent restaurants.",
              },
              {
                name: "Vrijdagmarkt Saturday Market",
                query: "vrijdagmarkt market ghent belgium square medieval",
                desc: "Ghent&apos;s historic Vrijdagmarkt square with the Jacob van Artevelde statue and Saturday morning market.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Ghent is significantly cheaper than Brussels for accommodation, and cheaper than Bruges for restaurants and activities. The main costs are the Altarpiece (€12), Gravensteen (€14), and dinner at a Patershol konoba (€14–25). The Ghent City Card (€30/48hrs or €35/72hrs) covers most paid attractions and public transport.
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
                    ["🏨 Accommodation (per night)", "€18–35 (hostel)", "€90–160 (3-star canal hotel)", "€200–450 (boutique)"],
                    ["🍽️ Food (per day)", "€12–22 (student brasseries)", "€40–70 (brasseries + Michelin lunch)", "€120–300 (two Michelin tables)"],
                    ["🚌 Transport (per day)", "€5–10 (tram + day trips)", "€10–20 (tram + canal boat)", "€50–180 (private car + boat)"],
                    ["🏛️ Activities (per day)", "€15–27 (castle + Altarpiece)", "€30–55 (guided tours + STAM)", "€100–300 (private curator tours)"],
                    ["TOTAL per day", "€50–94", "€170–305", "€470–1,230"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💰 Budget (€50–94/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostel 47 Ghent (dorm from €18/night), student brasseries and Patershol lunch specials, walking and trams everywhere. The Ghent City Card makes this tier even better value.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range (€170–305/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Ghent Marriott or a 3-star canal hotel (€90–160/night), dinner at Publiek or Het Pakhuis, one guided tour and the canal boat. The sweet spot for comfort without losing the Ghent atmosphere.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (€470+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">1898 The Post (from €200/night, the most beautiful hotel in Ghent — a converted 19th-century post office), private art historian for the Altarpiece, Vrijmoed tasting menu, private canal boat hire.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Ghent</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The medieval centre around Korenmarkt, Graslei, and Patershol is the ideal base — everything walkable in 15 minutes. Hotels in the historic core cost more but save significantly on transport and time. Book ahead in summer and during the Gentse Feesten (late July).
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "1898 The Post",
                  type: "Luxury boutique · Korenmarkt, city centre",
                  price: "From €200/night",
                  badge: "Most beautiful",
                  desc: "The finest hotel in Ghent — a magnificently restored 19th-century neo-Gothic post office on Korenmarkt, directly above the tram stop and 3 minutes from Graslei. Grand staircases, original marble counters, and rooms with views of the medieval towers. The bar is one of Ghent&apos;s best. Book at booking.com?aid=2820480.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Ghent Marriott Hotel",
                  type: "4-star · Korenlei, directly on the canal",
                  price: "From €130/night",
                  badge: "Best canal views",
                  desc: "The Ghent Marriott sits on the Korenlei waterfront — canal views from the rooms, direct access to the Graslei medieval facades, and all the reliability of an international chain. The location is unbeatable: 5 minutes from Gravensteen, 8 minutes from St Bavo&apos;s. Book at booking.com?aid=2820480.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Hotel Harmony",
                  type: "Boutique 4-star · Kraanlei, canal-side",
                  price: "From €140/night",
                  badge: "Best boutique",
                  desc: "A beautifully converted 18th-century mansion on the Kraanlei canal — one of Ghent&apos;s quieter waterways, away from the main tourist flow but 10 minutes&apos; walk from everything. Canal-view rooms available. Genuinely local atmosphere. Book at booking.com?aid=2820480.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Hostel 47 Ghent",
                  type: "Hostel · City centre",
                  price: "Dorms from €18, privates from €55",
                  badge: "Best budget",
                  desc: "Well-run central hostel a short walk from Korenmarkt. Clean dorms and private rooms, communal kitchen, knowledgeable staff who know the city well. The best option for solo travellers and backpackers who want to be in the student energy of Ghent rather than isolated in a budget hotel on the ring road. Book at booking.com?aid=2820480.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Ghent</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Ghent has one of Belgium&apos;s strongest restaurant scenes relative to its size — two Michelin-starred restaurants, excellent brasseries in converted industrial buildings, and the dense Patershol quarter where over 40 restaurants operate in a 4-street area. Book dinner in advance — particularly in Patershol, which fills up by 8pm every evening.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Restaurant Vrijmoed",
                  t: "1 Michelin star · Vlaanderenstraat 22",
                  d: "Belgium&apos;s most creative plant-forward tasting menu — a 7-course dinner (€90/person) and 5-course lunch (€65/person) that reinterprets Flemish ingredients with exceptional technique. Natural wines, seasonal produce sourced within 50km of Ghent. The lunch menu is outstanding value. Book 2 weeks ahead in summer, 1 week in shoulder season. Closed Sunday/Monday.",
                  b: "Michelin star",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Publiek",
                  t: "1 Michelin star · Ham 39",
                  d: "Modern Belgian cooking with hyper-local Ghent produce and a natural wine list that changes monthly. The 5-course tasting menu (€55–75/person) is the way to eat here. The dining room is deliberately understated — the food carries the evening. Book 1 week ahead in low season, 3 weeks in summer. The wine pairing adds €35–45.",
                  b: "Michelin star",
                  c: "bg-rose-50 border-rose-200",
                },
                {
                  n: "Het Pakhuis",
                  t: "Belgian brasserie · Schuurkenstraat 4",
                  d: "A cavernous converted 19th-century warehouse with a vaulted iron ceiling, brick arches, and warm lighting that makes it one of the most atmospheric dining rooms in Belgium. Belgian classics done properly: waterzooi (Ghent chicken stew), Gentse Stoverij, North Sea sole, Belgian cheese board. €25–40/person. Book ahead — locals fill every lunch service.",
                  b: "Most atmospheric",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  n: "Patershol Konobas",
                  t: "Multiple · Patershol neighbourhood",
                  d: "The cobblestoned Patershol streets north of Gravensteen house over 40 restaurants at varying price points. Look for chalkboard menus outside: handwritten daily specials signal a kitchen working with seasonal produce. Gentse Stoverij properly made (€14–18), witloof gratin in mustard sauce (€12–15), and moules-frites in season. Budget €25–35 for a full dinner with beer.",
                  b: "Best neighbourhood",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Cuberdons — Vrijdagmarkt Vendors",
                  t: "Street food · Vrijdagmarkt",
                  d: "Cuberdons are the cone-shaped violet-flavoured candy unique to Ghent — a hard purple shell encasing a liquid violet centre. Two rival cuberdon vendors have faced each other across the Vrijdagmarkt for decades, each claiming to make the original. Buy a bag (€3–4) and decide for yourself. Available at the Vrijdagmarkt kiosks and at the Saturday market. The authentic Ghent snack.",
                  b: "Ghent only",
                  c: "bg-purple-50 border-purple-200",
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
            destination="Ghent Belgium"
            hotels={[
              {
                name: "1898 The Post",
                type: "Luxury boutique · Converted neo-Gothic post office",
                price: "From €200/night",
                rating: "5",
                badge: "Most beautiful",
                url: "https://www.booking.com/hotel/be/1898-the-post.html?aid=2820480",
              },
              {
                name: "Ghent Marriott Hotel",
                type: "4-star · Korenlei canal waterfront",
                price: "From €130/night",
                rating: "4",
                badge: "Best views",
                url: "https://www.booking.com/hotel/be/ghent-marriott.html?aid=2820480",
              },
              {
                name: "Hotel Harmony",
                type: "Boutique 4-star · Kraanlei canal-side",
                price: "From €140/night",
                rating: "4",
                badge: "Best boutique",
                url: "https://www.booking.com/hotel/be/hotel-harmony-ghent.html?aid=2820480",
              },
              {
                name: "Hostel 47 Ghent",
                type: "Hostel · City centre",
                price: "From €18/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/be/hostel-47-ghent.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Ghent Medieval City Walking Tour",
                duration: "2.5 hrs",
                price: "From €20/person",
                badge: "Best intro",
                url: "https://www.getyourguide.com/s/?q=Ghent+Belgium+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Ghent Canal Boat Tour",
                duration: "40 min",
                price: "From €8/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=Ghent+canal+boat&partner_id=PSZA5UI",
              },
              {
                name: "Ghent Altarpiece Private Art Tour",
                duration: "2 hrs",
                price: "From €120/person",
                badge: "Specialist",
                url: "https://www.getyourguide.com/s/?q=Ghent+Altarpiece+tour&partner_id=PSZA5UI",
              },
              {
                name: "Belgian Beer Tasting Ghent",
                duration: "2 hrs",
                price: "From €35/person",
                badge: "Popular",
                url: "https://www.getyourguide.com/s/?q=Ghent+beer+tasting&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Ghent</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "⏰",
                  title: "Treating Ghent as a Half-Day Trip from Bruges",
                  desc: "Most tourists visit Ghent for 3 hours as a day trip from Bruges and leave wondering what the fuss was about. The Ghent Altarpiece alone demands 90 minutes of unhurried time. The Patershol neighbourhood only reveals itself at dinner. The STAM is a full morning. Ghent rewards at least 2 full days based in the city — not a rushed afternoon from Bruges.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🎨",
                  title: "Skipping the Ghent Altarpiece",
                  desc: "Many visitors walk past St Bavo&apos;s Cathedral without going in. The Ghent Altarpiece (€12) is the most stolen, most fought-over, most theologically layered painting in the history of northern European art — stolen by Napoleon, seized by Prussia, two panels stolen in 1934 (one not recovered until 2010). Not seeing it in Ghent is like visiting Florence and skipping the David.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🍺",
                  title: "Drinking Only Mainstream Belgian Beers",
                  desc: "Jupiler and Stella Artois are Belgian but they tell you nothing about Belgian beer culture. Ask for Gentse Tripel, Gruut (brewed with herbs instead of hops — a medieval recipe revived in Ghent), or Dulle Griet&apos;s selection of 500+ beers. The difference between mass-market Belgian lager and an artisan Ghent beer is as wide as the difference between Godiva chocolate and a real Ghent praline.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🗺️",
                  title: "Ignoring the Student City Energy",
                  desc: "Ghent&apos;s 60,000 university students keep the city alive at a price point and energy level that Bruges has lost entirely. The Overpoort student strip is where locals eat, drink, and socialise — cheap, chaotic, and genuinely fun. Even if you are not a student, a €8 meal among Ghent&apos;s own residents is a better experience than a €28 tourist lunch near the Markt in Bruges.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "📅",
                  title: "Not Booking Restaurants in Advance",
                  desc: "Ghent&apos;s good restaurants fill fast from June through August. Publiek and Vrijmoed (both Michelin) book out 2–3 weeks ahead in summer. The Saturday morning market draws a city-wide crowd from 8am. Book dinner in Patershol at least 2 days ahead in shoulder season and 1 week ahead in summer. The Altarpiece has timed entry slots that sell out by mid-morning in peak season.",
                  color: "bg-blue-50 border-blue-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Ghent</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎫",
                  title: "The Ghent City Card Covers Everything",
                  desc: "The Ghent City Card (€30 for 48 hours, €35 for 72 hours) covers the Altarpiece, Gravensteen, STAM, canal boat, and unlimited tram and bus travel. If you plan to visit more than 2 paid attractions it pays for itself immediately. Available at the tourist office in the old post building on Korenmarkt, or online at visitgent.be before arrival.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🌅",
                  title: "Graslei at Dawn Is Free and Unforgettable",
                  desc: "The Graslei waterfront at 7am — before tour groups arrive — is the medieval Belgium that paintings show. The guild houses reflect in the still canal, delivery boats occasionally load from the quays, and the morning mist sometimes sits on the Leie. Completely free and completely unlike the same view at 11am with 200 tourists.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🍲",
                  title: "Eat Gentse Stoverij at a Proper Patershol Konoba",
                  desc: "Gentse Stoverij — Ghent beef stew braised in Ghent Tripel ale with mustard and fresh herbs — is the city&apos;s signature dish and is done properly only in the Patershol neighbourhood. Ask if it is made in-house. The best versions simmer for 4+ hours. Cost: €14–18 at a proper konoba with hand-cut frites and extra mustard on the side.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🏰",
                  title: "Book Gravensteen Online to Skip the Queue",
                  desc: "Gravensteen Castle (€14) sells out timed entry slots in high season. Book at least 48 hours ahead online at historischehuizen.gent.be, or through the GetYourGuide link for a guided tour that includes commentary on the castle&apos;s use as a cotton mill, prison, and execution ground before restoration.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🚲",
                  title: "Rent a Bicycle for the Canal Paths",
                  desc: "Ghent is flat and has an excellent cycling network. The canal paths along the Leie south of the centre — toward the Bijloke complex and the university buildings — are beautiful, quiet, and invisible to most tourists. Blue-Bike rentals are available at Sint-Pieters station (€4–5/day). The medieval centre itself is best walked.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🍬",
                  title: "Buy Cuberdons at the Vrijdagmarkt Kiosks",
                  desc: "Cuberdons — the cone-shaped violet-flavoured candy unique to Ghent — are sold only at the rival kiosks on Vrijdagmarkt and nowhere else in the world. Two families have competed for the same spot for generations. Buy from both and decide which is better. A bag of 10 costs €3–4 and is the most authentically Ghent food purchase you can make.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Ghent" />

          {/* Combine With */}
          <CombineWith currentSlug="ghent-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Ghent better than Bruges for a first-time visit to Belgium?",
                  a: "Ghent is better if you want a city that feels authentically Belgian — real residents, student energy, restaurants that locals use, and the most important medieval painting in northern European art. Bruges is better if you want the most beautiful medieval streetscape with canal views that Ghent cannot quite match. For 3 days in Belgium, Ghent wins on depth. For a 1-day visit, Bruges wins on visual impact. If you have a week, do both: Ghent as your base (better value, more atmosphere) with a day trip to Bruges by train (25 minutes, €8.80 each way).",
                },
                {
                  q: "What is the Ghent Altarpiece and why does it matter?",
                  a: "The Ghent Altarpiece (Adoration of the Mystic Lamb) is a 12-panel polyptych completed by Jan and Hubert van Eyck in 1432. It is considered the most important painting in the history of northern European art for its revolutionary oil-glazing technique (near-photographic realism 200 years before it became standard), its extraordinary theological complexity, and its survival through five centuries of war and theft. It was stolen by Napoleon in 1794, seized by Prussia after World War I as war reparations, and two panels stolen in 1934 — one of those panels was not recovered until 2010. Entry is €12 and includes the Vijdt Chapel at St Bavo&apos;s Cathedral.",
                },
                {
                  q: "How do I get from Brussels to Ghent by train?",
                  a: "Direct train from Brussels Midi (Zuid) to Ghent Sint-Pieters takes 32 minutes and costs €13.50. Trains run every 15–20 minutes all day. From Brussels Airport (Zaventem), take a direct airport train to Brussels Midi (20 minutes), then change for the Ghent train — total journey from airport to Ghent approximately 55 minutes. Buy tickets at the station or online at belgiantrain.be. No reservation needed for domestic Belgian trains.",
                },
                {
                  q: "What are cuberdons and where do I buy them?",
                  a: "Cuberdons are cone-shaped Belgian candy unique to Ghent — a hard purple outer shell encasing a liquid violet-flavoured centre. They have been made in Ghent since the early 19th century. The only place to buy authentic Ghent cuberdons is from the rival kiosks on the Vrijdagmarkt square — two families have operated competing stands for generations, each claiming to make the original recipe. A bag of 10 costs €3–4. They are available at the Saturday market as well. Do not buy cuberdons in souvenir shops — the kiosk-fresh version is incomparably better.",
                },
                {
                  q: "When is the Ghent Light Festival and how do I plan for it?",
                  a: "The Ghent Light Festival (Lichtfestival) runs for 4 days in January every 3 years, transforming the medieval buildings and canals with 40+ light installations by international artists. It is free to attend and draws 2 million visitors. Previous editions: 2018, 2021, 2024. Next edition: January 2027. Hotels in Ghent sell out within days of the festival announcement — book as soon as dates are confirmed at lichtfestival.be. The medieval centre is the main venue and everything is within walking distance.",
                },
                {
                  q: "What is Gentse Stoverij and where should I eat it?",
                  a: "Gentse Stoverij is Ghent&apos;s signature beef stew — chuck or brisket braised in Ghent Tripel ale with mustard, fresh thyme, and bay leaf for 4+ hours. It is served with hand-cut frites and extra mustard, and is paired with a glass of the same ale used in the cooking. It should only be eaten in the Patershol neighbourhood where restaurants still make it in-house — avoid tourist brasseries near the Graslei that use pre-made versions. Expect to pay €14–18 for a proper portion. Ask the staff &quot;Is the stoverij made here?&quot; — a good restaurant will say yes without hesitation.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Ghent trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-ghent", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/ghent-travel-tips", label: "Travel tips", icon: "💡" },
                { href: "/blog/brussels-2-days", label: "Brussels 2 days", icon: "🇧🇪" },
                { href: "/blog/bruges-3-days", label: "Bruges 3 days", icon: "🏰" },
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
          <RelatedGuides currentSlug="ghent-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Western Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Bruges in 3 Days — Medieval Belgium", href: "/blog/bruges-3-days" },
                { label: "Amsterdam 4 Days — Canals &amp; Culture", href: "/blog/amsterdam-4-days" },
                { label: "Paris 5 Days — The Classic", href: "/blog/paris-5-days" },
                { label: "Brussels 2 Days — Grand Place &amp; Beer", href: "/blog/brussels-2-days" },
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
