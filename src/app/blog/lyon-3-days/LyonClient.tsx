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
const LYON_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Lyon Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "🚄",  label: "Getting There" },
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
          href: `mailto:?subject=Lyon 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Lyon in 3 Days — bouchons, traboules and why it beats Paris&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/lyon-3-days"
        imageUrl="https://images.unsplash.com/photo-1603384699007-e2c1e43b4f53?w=1200&q=80"
        description="Lyon in 3 Days: Vieux-Lyon traboules, Fourvière Basilica, bouchon lunches, and why France&apos;s gastronomic capital beats Paris for value."
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
export default function LyonClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={LYON_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Lyon" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="lyon france vieux lyon basilica fourviere hill city"
            fallback="https://images.unsplash.com/photo-1603384699007-e2c1e43b4f53?w=1600&q=80"
            alt="Lyon France Vieux Lyon district and Fourvière Basilica on hill at sunset"
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
              <span className="text-white/70">Lyon 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Gastronomic Capital
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Lyon in 3 Days:
                <em className="italic text-amber-300"> Bouchons, Traboules &amp; the Real France</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                France&apos;s best-kept secret — a UNESCO Renaissance old town, Roman amphitheatres on the hill, the world&apos;s best indoor food market, and a bouchon lunch for €18 that beats anything in Paris. The complete guide.
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
              <span>🇫🇷 Auvergne-Rhône-Alpes, France</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From €45/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Lyon is what happens when a city gets everything right and never boasts about it. A UNESCO-listed Renaissance quarter whose residents still use 500-year-old passageways as shortcuts. A food market that made Paul Bocuse. A bouchon tradition that feeds silk workers and Michelin inspectors at the same table.
            </p>
          </blockquote>

          {/* ── WHAT LYON ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Lyon Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Lyon is France&apos;s second city in everything except publicity. Larger than Bordeaux, Marseille, and Nice in population; richer in food culture than Paris; older in recorded history than most European capitals. The Romans founded it as Lugdunum in 43 BC and made it the capital of Gaul — the Roman amphitheatres on Fourvière hill date to 15 BC and are still used for concerts today.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Vieux-Lyon — the Renaissance old town on the west bank of the Saône — is one of the largest Renaissance ensembles in Europe and has been a UNESCO World Heritage Site since 1998. Its most distinctive feature is the traboule: a covered passageway that cuts through an apartment building, across a courtyard, up a spiral staircase, and emerges on a completely different street. There are over 230 of them in Lyon. Silk workers used them to transport bolts of fabric without rain damage; the French Resistance used them to escape the Gestapo.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The food is the reason most people come back. The bouchon lyonnais is a specific thing: a small, informal bistro with checkered tablecloths, a handwritten menu, wine in a clay pot, and cooking that the rest of France calls Lyonnais cuisine. Quenelles de brochet (fish dumplings in cream sauce), saucisson chaud, andouillette, salade lyonnaise — none of these exist anywhere the same way as they do here. Lyon has more Michelin-starred restaurants per capita than Paris and a covered food market (Les Halles Paul Bocuse) that is the finest in France.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="🚄" label="TGV from Paris" value="2 hrs" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Jun, Sep–Oct" />
              <StatCard icon="🏛️" label="UNESCO Heritage" value="Since 1998" />
              <StatCard icon="💰" label="Budget From" value="€45/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Lyon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "15–22°C, café terraces open, markets full of asparagus and strawberries, long daylight hours. The traboules are pleasant to explore without summer crowds. April and May are the ideal months — comfortable temperatures, low tourist numbers, and the city at its liveliest.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Autumn — Equally Good",
                  d: "14–20°C, the Beaujolais harvest happens in September–October, and the city returns to a local pace after the tourist summer. September is prime time for the Beaujolais day trip — new vintage celebrations begin. October is excellent for food-focused travel.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "☀️",
                  t: "Summer — Busy and Hot",
                  d: "25–32°C, more tourists on the Vieux-Lyon cobblestones, and many local bouchons close for August holidays. That said, the city is still very pleasant — the Saône and Rhône riverbanks have pop-up beaches (Lyon Plage) and evening life is excellent.",
                  b: "Busy season",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec (Fête des Lumières)",
                  i: "✨",
                  t: "December — Festival of Lights",
                  d: "The Fête des Lumières (4 nights in early December) transforms the entire city into a free open-air light installation — buildings, bridges, and squares projected with international light art. 2–3 million visitors across 4 nights. Book accommodation at least 6 months ahead. Outside the festival, December is cold (3–8°C) but atmospheric.",
                  b: "Book 6 months ahead",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚄 Getting to Lyon</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Lyon has two main railway stations — <strong className="font-medium">Lyon Part-Dieu</strong> (the main TGV hub, northeast of the city centre) and <strong className="font-medium">Lyon Perrache</strong> (older station at the south tip of the Presqu&apos;île). TGV trains from Paris stop at Part-Dieu; metro line D connects both stations in under 10 minutes.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚄",
                  t: "TGV from Paris (recommended)",
                  d: "Paris Gare de Lyon → Lyon Part-Dieu: 2 hours exactly, €20–€60 depending on how far in advance you book. Up to 20 daily departures. Book on SNCF Connect (sncf-connect.com) at least 3 weeks ahead for the cheapest fares — €20 tickets sell out fast. The TGV is dramatically more convenient than flying once you account for airport time.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Fly to Lyon Saint-Exupéry (LYS)",
                  d: "Direct flights from London Heathrow, Amsterdam, Madrid, Rome, and several other European cities. The airport is 25km east of the city. Take the Rhônexpress tram (€16.90, 30 minutes) to Part-Dieu station. If flying from within France, the TGV is nearly always faster and cheaper door-to-door.",
                  b: "From UK/Europe",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚄",
                  t: "TGV from other French cities",
                  d: "Marseille → Lyon: 1h45 (€25–€55). Bordeaux → Lyon: 3h (€35–€80). Nice → Lyon: 2h40 (€30–€70). Strasbourg → Lyon: 3h10 (€40–€90). Lyon is at the crossroads of France&apos;s TGV network — most major cities are under 3 hours.",
                  b: "Excellent connections",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Drive from Paris or Geneva",
                  d: "Paris → Lyon: 460km on the A6 motorway, 4–4.5 hours. Geneva → Lyon: 150km, 1.5 hours. Driving makes sense if you plan to continue to the Beaujolais wine region or the Alps. Parking in central Lyon is scarce and expensive (€25–€35/day at hotels) — park at a P+R on the metro line.",
                  b: "Flexible for wine regions",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Lyon Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is built around the bouchon lunch schedule — most serve the set menu only at midday (12:00–14:00). Plan your morning around being hungry at noon.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Vieux-Lyon Traboules · Fourvière Basilica · Roman Theatres · Presqu&apos;île"
                cost="€30–45"
                items={[
                  "9:00am — Start at the Lyon Tourist Office on Place Bellecour to collect the free traboule map. This is genuinely essential — the map shows which passageways are open to the public and their addresses. Without it, you will walk straight past most of them.",
                  "9:30am — Vieux-Lyon on foot — wander the cobbled streets of the Saint-Jean, Saint-Paul, and Saint-Georges districts. The UNESCO listing covers the entire right bank of the Saône. Look for the traboule entrances: a door slightly ajar, a small plaque, or the distinctive Renaissance stairwell visible from the street.",
                  "11:00am — Fourvière Basilica (free entry). Take the funicular (ficelle) from the underground Vieux-Lyon metro station — €1.90 with a standard TCL transit ticket. The basilica interior is covered floor to ceiling in 19th-century mosaics; the detail is extraordinary. From the esplanade, the view over Lyon is the best in the city.",
                  "12:00pm — Roman Fourvière theatres (€4) — two theatres dating to 15 BC cut into the hillside just below the basilica. In June and July they host Les Nuits de Fourvière, a prestigious festival (check programme if visiting in summer). A walk between the two theatres takes about 20 minutes.",
                  "1:30pm — Bouchon lunch in Vieux-Lyon. Order the set menu (entrée + plat + dessert, €18–22). Classic dishes: salade lyonnaise (frisée with lardons and poached egg), quenelle de brochet (fish dumpling in cream sauce), and tarte aux pralines (pink praline custard tart). Ask for a pot lyonnais of Beaujolais (46cl clay carafe, €5–7).",
                  "3:30pm — Presqu&apos;île afternoon — cross the Saône to the peninsula between the two rivers. Place des Terreaux has the Fontaine Bartholdi (by the sculptor of the Statue of Liberty) and the Hôtel de Ville. The Musée des Beaux-Arts (€8) occupies a former Benedictine abbey here — one of France&apos;s best art museums.",
                  "7:00pm — Evening on Rue Mercière or the quais of the Saône — outdoor terrace bars, wine by the glass, and the illuminated façades of Vieux-Lyon across the water.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Les Halles Paul Bocuse · Croix-Rousse Silk District · Musée des Confluences"
                cost="€35–55"
                items={[
                  "9:00am — Les Halles de Lyon Paul Bocuse, the finest indoor food market in France. Go on a weekday morning when it&apos;s less crowded. Breakfast from the stalls: a slice of tarte aux pralines (€3), a Lyonnais sausage tasting, and a Saint-Marcellin cheese from a fromagerie. The fish counter alone is worth the visit. Total breakfast: €10–15.",
                  "10:30am — Croix-Rousse hill — the old silk weavers&apos; district north of the Presqu&apos;île. The neighbourhood climbs steeply from the Saône and has a completely different atmosphere from Vieux-Lyon: 19th-century apartment blocks, independent coffee shops, street art, and a strongly local character. The Croix-Rousse traboules were built wider than those in Vieux-Lyon specifically to carry silk bales without rain damage.",
                  "12:00pm — Sunday morning market on Boulevard de la Croix-Rousse (runs every morning Tuesday–Sunday, 7am–1pm) — one of France&apos;s best outdoor food markets. Cheese, charcuterie, seasonal vegetables, flowers, and the full range of regional produce from Rhône-Alpes.",
                  "1:30pm — Bouchon lunch in the Croix-Rousse or Presqu&apos;île. Try Café Comptoir Abel on Rue Guynemer (one of the oldest certified bouchons, founded 1928) or Daniel et Denise Saint-Jean. Both serve the full bouchon menu with excellent natural wines.",
                  "3:30pm — Musée des Confluences (€9, free Sunday evenings) — Lyon&apos;s science and anthropology museum on the Confluence peninsula where the Saône meets the Rhône. The Coop Himmelblau building is an architectural landmark — translucent crystal and steel emerging from the water. Collections span natural history, human origins, and civilisation.",
                  "6:00pm — Walk the Confluence riverfront — the neighbourhood has been entirely redeveloped over the last decade and has some of France&apos;s best contemporary architecture. The evening light on the two rivers from the confluence point is remarkable.",
                  "8:00pm — Wine bar evening on Rue Saint-Jean or Rue du Bœuf in Vieux-Lyon — excellent selection of Côtes du Rhône, Beaujolais cru, and Mâcon blanc by the glass (€4–8).",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Beaujolais Vineyards Day Trip or Pérouges Medieval Village"
                cost="€30–50 including transport"
                items={[
                  "Option A: Beaujolais wine region day trip (recommended) — Regional train from Lyon Part-Dieu to Belleville-sur-Saône (€10 return, 40 minutes, hourly departures). From the station, the Beaujolais wine route is walkable or cyclable. The landscape: rolling green hills, medieval villages, and a dozen different appellations within a few kilometres. Most small producers (vignerons) welcome visitors for informal tastings, especially if you arrive mid-morning — call ahead when possible.",
                  "Try the Beaujolais Crus — Moulin-à-Vent, Fleurie, Morgon, Chiroubles — which are genuinely serious wines, nothing like the light Beaujolais Nouveau sold in supermarkets. A bottle direct from the producer costs €8–15.",
                  "Option B: Pérouges medieval village — Bus from Lyon (change at Meximieux, total €5–8 return, 1 hour). A completely intact 13th-century walled hilltop village: cobbled lanes, half-timbered buildings, a market square unchanged since the Middle Ages. Used as a film set for period dramas. The galette de Pérouges (warm flat cake of butter, sugar, and lemon, €4) is the local specialty — eat it warm at the main square café.",
                  "2:00pm — Return to Lyon by early afternoon. If time allows: the Gadagne Museums (€8) in a Renaissance mansion in Vieux-Lyon — Lyon history and a surprisingly good puppet theatre collection (Lyon was the capital of European puppet-making for two centuries).",
                  "4:30pm — Final shopping on Rue de la République or in the covered Passage de l&apos;Argue — Lyon has excellent independent food shops selling Beaujolais, saucisson sec lyonnais, coussins de Lyon (marzipan sweets), and praline tarts to take home.",
                  "7:30pm — Farewell dinner at a traditional bouchon. Three-course set menu with a pot of Beaujolais: €22–28. Brasserie Georges on Cours de Verdun (open since 1836, the oldest continuously operating restaurant in Lyon) is an alternative for grandeur — the listed Art Deco interior seats 600 people and serves excellent choucroute, steak tartare, and house-brewed beer.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Lyon" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Lyon Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in priority order. Entry fees as of early 2026. The Lyon City Card (€27/1 day, €38/2 days, €47/3 days) covers unlimited public transport and free entry to 25+ museums — good value if visiting two or more museums.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Vieux-Lyon Traboules",
                  e: "Free (public passageways)",
                  d: "Over 230 covered passageways cut through the Renaissance apartment buildings of Vieux-Lyon. The free traboule map from the tourist office shows which are open and their addresses. Walk through a door, cross a courtyard, climb a spiral staircase, and emerge on a completely different street. Residents still live in these buildings — they are not a museum attraction, they are an active neighbourhood.",
                  t: "Must do · 2–3 hrs",
                },
                {
                  n: "Fourvière Basilica",
                  e: "Free",
                  d: "Built 1872–1896 on the hill where Romans worshipped. The interior is covered entirely in Byzantine mosaics — gold, lapis, and crimson from floor to vault — one of the most dazzling interiors in France. The esplanade outside has the best panoramic view over Lyon. Take the funicular (ficelle) from Vieux-Lyon metro: €1.90, 3 minutes.",
                  t: "Must see · 1–1.5 hrs",
                },
                {
                  n: "Roman Fourvière Theatres",
                  e: "€4",
                  d: "Two Roman theatres dating to 15 BC built into the Fourvière hillside — the Grand Théâtre (capacity 10,000) and the smaller Odéon. Still used for performances during Les Nuits de Fourvière festival in summer. The hilltop setting with views over the modern city is unusual and striking. 5-minute walk from the basilica.",
                  t: "45 mins · Adjacent to Basilica",
                },
                {
                  n: "Les Halles de Lyon Paul Bocuse",
                  e: "Free (browsing)",
                  d: "The finest covered food market in France, named after Paul Bocuse — Lyon&apos;s defining chef — who shaped its modern identity. 59 stalls: fishmongers, charcutiers, cheese affineurs, pâtisseries, wine merchants. Tuesday to Sunday, 7am–10:30pm. Budget €15–25 to graze properly. Go before 11am for the best atmosphere.",
                  t: "Essential · 1–2 hrs",
                },
                {
                  n: "Musée des Beaux-Arts",
                  e: "€8 (free first Sunday of month)",
                  d: "One of France&apos;s best fine art museums, housed in a former 17th-century Benedictine abbey on Place des Terreaux. Collections include Egyptian antiquities (exceptional), Greek and Roman sculpture, and European paintings from the Middle Ages to the 20th century — works by Rubens, Rembrandt, Monet, Picasso, and Rodin. The cloister sculpture garden is one of the most peaceful spaces in Lyon.",
                  t: "Recommended · 2 hrs",
                },
                {
                  n: "Croix-Rousse District",
                  e: "Free",
                  d: "The old silk weavers&apos; hill north of the Presqu&apos;île. The canuts (silk weavers) who lived here operated the Jacquard looms that made Lyon the silk capital of Europe. The Maison des Canuts (€6.50) explains the history and has working looms. The neighbourhood market (Tuesday–Sunday mornings on Boulevard de la Croix-Rousse) is one of France&apos;s best. Almost untouristed.",
                  t: "Highly recommended · Half-day",
                },
                {
                  n: "Musée des Confluences",
                  e: "€9 (free Sunday evenings)",
                  d: "Lyon&apos;s science, natural history, and anthropology museum at the confluence of the Saône and Rhône. The building by Coop Himmelblau — translucent steel and crystal — is an architectural landmark. Collections cover natural history, human origins, civilisations, and futures. The permanent collection is free on Sunday evenings from 5pm.",
                  t: "Worth seeing · 1.5–2 hrs",
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
            title="Lyon — Traboules, Basilica &amp; the Saône"
            subtitle="The gastronomic capital&apos;s UNESCO Renaissance streets and hillside views."
            spots={[
              {
                name: "Vieux-Lyon Traboule Passageway",
                query: "vieux lyon traboule renaissance passageway courtyard france",
                desc: "One of Lyon&apos;s 230+ traboules — covered passageways threading through Renaissance apartment buildings, still used by residents today.",
              },
              {
                name: "Fourvière Basilica",
                query: "fourviere basilica lyon france mosaic interior hill",
                desc: "The Byzantine mosaic interior of the Fourvière Basilica — every surface from floor to vault covered in gold and lapis tile work.",
              },
              {
                name: "Vieux-Lyon Renaissance Streets",
                query: "vieux lyon old town cobblestone renaissance street france",
                desc: "The cobbled streets of Saint-Jean district — one of the largest Renaissance ensembles in Europe and a UNESCO World Heritage Site since 1998.",
              },
              {
                name: "Les Halles Paul Bocuse",
                query: "les halles paul bocuse indoor food market lyon france",
                desc: "Les Halles de Lyon Paul Bocuse — the finest covered food market in France, with 59 stalls of regional produce, charcuterie, and cheese.",
              },
              {
                name: "Lyon Confluence Riverfront",
                query: "lyon confluence saone rhone river panorama france",
                desc: "The confluence of the Saône and Rhône rivers at Lyon&apos;s southern tip — the city viewed from the water at golden hour.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Lyon is significantly cheaper than Paris for equivalent quality. The bouchon lunch set menu (€18–25 for three courses) is better value than most Paris bistros, and accommodation in Vieux-Lyon or the Presqu&apos;île costs less than equivalent Paris arrondissements.
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
                    ["🏨 Accommodation/night", "€20–40", "€80–150", "€250–500"],
                    ["🍽️ Food/day", "€15–25", "€40–65", "€90–200"],
                    ["🚇 Transport/day", "€5–8", "€10–20", "€20–50"],
                    ["🏛️ Activities/day", "€8–15", "€20–40", "€80–200"],
                    ["TOTAL per day", "€48–88", "€150–275", "€440–950"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€45–70/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay at Auberge de Jeunesse Lyon Vieux-Lyon (€25–35/night dorm), eat at bouchon set lunch menus (€18–22), use the metro and walk. Vieux-Lyon and Fourvière are free or nearly free. This is extremely comfortable for the price.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€120–180/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay at Collège Hotel or a Presqu&apos;île boutique (€90–140/night), eat at Daniel et Denise or Café Comptoir Abel (€35–50 for lunch), Lyon City Card for museums and transport (€38/2 days).</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (€300+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Stay at Cour des Loges or Villa Florentine (€250–500/night), dine at Michelin-starred Takao Takano or Prairial (€90–130 tasting menu), private guided traboule tour (€100–150/person).</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Lyon</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The Presqu&apos;île (the peninsula between the two rivers) and Vieux-Lyon are the best bases for first-time visitors. Part-Dieu (near the TGV station) is practical for arrivals but lacks atmosphere. The 5th arrondissement (Vieux-Lyon side) is the most romantic.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Cour des Loges",
                  type: "5-star · Vieux-Lyon (5th arr.)",
                  price: "From €250/night",
                  badge: "Most romantic",
                  desc: "A UNESCO-listed Renaissance courtyard hotel in the heart of Vieux-Lyon — four interconnected Renaissance mansions built around a glass-roofed atrium. The building itself is a traboule landmark. Les Loges restaurant serves creative French cuisine in a vaulted dining room. Book directly at courdesloges.com for best rates.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hotel Le Royal Lyon",
                  type: "4-star · Presqu&apos;île (2nd arr.)",
                  price: "From €130/night",
                  badge: "Best location",
                  desc: "Classic Belle Époque grand hotel on Place Bellecour — the largest pedestrian square in France and the geographic centre of Lyon. Perfectly positioned for Vieux-Lyon, the Presqu&apos;île, and the metro. Well-maintained, professional service, excellent breakfast. MGallery collection.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Collège Hotel",
                  type: "Boutique · Vieux-Lyon (5th arr.)",
                  price: "From €100/night",
                  badge: "Best boutique",
                  desc: "A design hotel built inside a former school in Vieux-Lyon — school-themed décor (blackboards, wooden desks, lockers) executed with wit and quality. Excellent location two minutes from the main traboule streets. Rooftop terrace with Fourvière views. Popular with architects and design travellers.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Auberge de Jeunesse Lyon Vieux-Lyon",
                  type: "Hostel · Vieux-Lyon (5th arr.)",
                  price: "€25–40/night (dorm)",
                  badge: "Best budget",
                  desc: "The best-located budget accommodation in Lyon — inside the Vieux-Lyon UNESCO zone, a short walk from the funicular and all the main traboule streets. Clean, well-run, sociable. Book at least 3 weeks ahead in summer and for the Fête des Lumières. Private rooms also available at €70–90/night.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Lyon</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              A genuine bouchon lyonnais has checkered tablecloths, a handwritten or chalkboard menu, wine served in a 46cl clay pot (a &apos;pot lyonnais&apos;), and dishes like quenelles, andouillette, and cervelle de canut. If the menu is laminated and translated into five languages — keep walking.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Daniel et Denise",
                  t: "Certified bouchon · Saint-Jean, Vieux-Lyon",
                  d: "Chef Joseph Viola&apos;s flagship bouchon on Rue Tramassac — the most celebrated traditional bouchon in Lyon and holder of a Michelin Bib Gourmand. The quenelle de brochet is definitive: a cloud of pike mousseline in a lobster bisque sauce, made from scratch daily. Set lunch €25–35. Book at least a week ahead — this is not a drop-in.",
                  b: "Best bouchon",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Café Comptoir Abel",
                  t: "Certified bouchon · 2nd arr., Presqu&apos;île",
                  d: "Founded in 1928, Café Comptoir Abel on Rue Guynemer is the oldest certified bouchon in Lyon. The atmosphere — belle époque fittings, red-checked tablecloths, handwritten slate menu — is genuinely unreconstructed. Excellent andouillette and saucisson chaud. Set lunch €22–28. The most atmospheric lunch in Lyon.",
                  b: "Most historic",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Brasserie Georges",
                  t: "Historic brasserie · Perrache",
                  d: "Open since 1836 — the oldest continuously operating restaurant in Lyon. The listed Art Deco interior seats 600 people under a soaring glass ceiling. The menu is brasserie classics: choucroute garnie, steak tartare, andouillette, and house-brewed beer (they have their own brewery). Not a bouchon, but an essential Lyon institution. Mains €18–28.",
                  b: "Most historic",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Les Halles Paul Bocuse (grazing)",
                  t: "Indoor market · 3rd arr., Part-Dieu",
                  d: "Not a restaurant but the best value eating in Lyon. Graze across 59 stalls: raw oysters from a fishmonger (€12 for six), a slice of tarte aux pralines (€3), jambon persillé from the charcutier, a wedge of Saint-Marcellin cheese still runny at room temperature. Weekday mornings only (closes at 1pm on weekdays, 10:30pm on Friday and Saturday evenings for the oyster bar crowd).",
                  b: "Best value",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Takao Takano",
                  t: "Michelin-starred · 6th arr.",
                  d: "Japanese-French chef Takao Takano&apos;s tasting menu restaurant in the 6th arrondissement — one of the most technically refined kitchens in Lyon, with a 6-course lunch at €65 and an 8-course dinner at €120. The cooking is precise, seasonal, and genuinely surprising. Book at least 3 weeks ahead via the restaurant website.",
                  b: "Best fine dining",
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
            destination="Lyon France"
            hotels={[
              {
                name: "Cour des Loges",
                type: "5-star Renaissance courtyard · Vieux-Lyon",
                price: "From €250/night",
                rating: "5",
                badge: "Most romantic",
                url: "https://www.booking.com/hotel/fr/cour-des-loges.html?aid=2820480",
              },
              {
                name: "Hotel Le Royal Lyon",
                type: "4-star Belle Époque · Place Bellecour",
                price: "From €130/night",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/fr/le-royal-lyon.html?aid=2820480",
              },
              {
                name: "Collège Hotel",
                type: "Boutique design · Vieux-Lyon",
                price: "From €100/night",
                rating: "4",
                badge: "Best boutique",
                url: "https://www.booking.com/hotel/fr/college-hotel-lyon.html?aid=2820480",
              },
              {
                name: "Auberge de Jeunesse Lyon Vieux-Lyon",
                type: "Hostel · Vieux-Lyon UNESCO zone",
                price: "From €25/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/fr/auberge-de-jeunesse-lyon-vieux-lyon.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Lyon Vieux-Lyon Traboule Walking Tour",
                duration: "2 hrs",
                price: "From €18/person",
                badge: "Best intro",
                url: "https://www.getyourguide.com/s/?q=lyon+traboule+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Lyon Bouchon Food Tour",
                duration: "3 hrs",
                price: "From €65/person",
                badge: "Foodie essential",
                url: "https://www.getyourguide.com/s/?q=lyon+bouchon+food+tour&partner_id=PSZA5UI",
              },
              {
                name: "Beaujolais Wine Day Trip from Lyon",
                duration: "Full day",
                price: "From €75/person",
                badge: "Day trip",
                url: "https://www.getyourguide.com/s/?q=beaujolais+day+trip+lyon&partner_id=PSZA5UI",
              },
              {
                name: "Les Halles Paul Bocuse Guided Market Tour",
                duration: "2 hrs",
                price: "From €35/person",
                url: "https://www.getyourguide.com/s/?q=les+halles+paul+bocuse+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Lyon</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🚶",
                  title: "Rushing Through the Traboules",
                  desc: "The traboules are not a tourist attraction with a clear entrance and exit — they are working passageways through private apartment buildings. The only way to find them is with the free map from the tourist office on Place Bellecour. Without it, you will walk straight past 95% of them. Allow a full morning to explore Vieux-Lyon slowly. Many are only accessible during daylight hours; the door should be pushed, not locked.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🍽️",
                  title: "Eating at a Tourist Trap Bouchon",
                  desc: "Lyon has France&apos;s highest restaurant density and its most aggressive tourist traps concentrated in Vieux-Lyon. A real bouchon has: checkered vichy tablecloths, a handwritten or chalkboard menu, wine served in a clay pot lyonnais, and dishes like quenelles, andouillette, and salade lyonnaise. If the menu has photographs, is laminated, or is displayed in five languages on a stand outside — walk away. The official &apos;Les Bouchons Lyonnais&apos; certification plaque is a reliable guide.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏘️",
                  title: "Missing the Croix-Rousse Hill",
                  desc: "Croix-Rousse is the most authentic neighbourhood in Lyon and almost no tourist visits it. The old silk weavers&apos; district has the widest traboules in the city (built to carry silk bales), one of France&apos;s finest outdoor markets, and an entirely un-touristed local atmosphere even in peak season. It is a 20-minute walk from Place des Terreaux. Budget half a day on Day 2 — you will not regret it.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🍷",
                  title: "Skipping the Beaujolais Day Trip",
                  desc: "The Beaujolais wine region is 40 minutes from Lyon by regional train and receives almost no international tourists. The landscape is rolling green hills with medieval villages; the wines — especially the Beaujolais Crus (Moulin-à-Vent, Fleurie, Morgon) — are excellent and cost €8–15 direct from the producer. You will almost certainly be the only non-French visitor at any vineyard you walk into. The return train is €10. This is genuinely one of the most under-visited day trips in France.",
                  color: "bg-pink-50 border-pink-200",
                },
              ].map((m) => (
                <TipCard key={m.title} {...m} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Lyon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎫",
                  title: "The Lyon City Card Is Excellent Value",
                  desc: "The Lyon City Card (€27/1 day, €38/2 days, €47/3 days) covers unlimited TCL public transport (metro, tram, bus, funicular) and free entry to 25+ museums including the Musée des Beaux-Arts, Musée Gadagne, Musée des Confluences, and the Roman theatres. If visiting two or more museums and using the funicular, the 2-day card pays for itself by Day 1. Buy at the tourist office on Place Bellecour or online at en.lyon-france.com.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🥘",
                  title: "The Bouchon Set Lunch Is France&apos;s Best Value Meal",
                  desc: "A traditional bouchon prix-fixe (entrée + plat + dessert) costs €18–25 and is served only at midday (12:00–14:00). The quality of cooking at a good bouchon — quenelles, saucisson chaud, andouillette — is better value than any equivalent Paris bistro. Arrive at 12:30pm on a weekday. Daniel et Denise and Café Comptoir Abel are the gold standard. Book ahead for both.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "✨",
                  title: "Fête des Lumières: Book 6 Months Ahead",
                  desc: "The Festival of Lights (Fête des Lumières) runs for 4 nights in early December — the entire city is transformed into a free open-air art installation with light projections by international artists. It attracts 2–3 million visitors across the 4 nights. Every hotel in Lyon is fully booked by July for this weekend. If you want to attend, plan and book accommodation at least 6 months in advance.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🚡",
                  title: "Take the Funicular to Fourvière",
                  desc: "The funicular (ficelle) from Vieux-Lyon metro station to Fourvière costs €1.90 with a standard TCL ticket (or free with the Lyon City Card) and takes 3 minutes. The walk up takes 20–25 minutes on a steep, exposed path. Save your energy for the basilica and Roman theatres. Two lines depart from the same underground station: one to Fourvière (Basilica), one to Saint-Just (Roman theatres).",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🗺️",
                  title: "Collect the Free Traboule Map First",
                  desc: "The Lyon Tourist Office on Place Bellecour hands out a free traboule map showing all publicly accessible passageways with their addresses and opening hours. This is the single most useful piece of paper you will collect in Lyon. Do this before entering Vieux-Lyon — it transforms a pleasant walk into an entirely different experience.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🍾",
                  title: "Buy Beaujolais Cru, Not Beaujolais Nouveau",
                  desc: "The Beaujolais sold in supermarkets worldwide is almost always Beaujolais Nouveau — light, fruity, and deliberately produced for early drinking. The Beaujolais Crus (Moulin-à-Vent, Fleurie, Morgon, Brouilly) are entirely different wines: structured, age-worthy, and genuinely excellent. In Lyon&apos;s wine bars, always ask for a Beaujolais Cru. At Les Halles Paul Bocuse, the wine merchants have excellent selections at €8–18 per bottle.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Lyon" />

          {/* Combine With */}
          <CombineWith currentSlug="lyon-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Why is Lyon the gastronomic capital of France?",
                  a: "Lyon produced more great chefs than any other French city. Paul Bocuse trained here and ran his flagship restaurant in Collonges-au-Mont-d'Or for over 50 years. The bouchon tradition dates to the 19th century when women called 'mères lyonnaises' cooked hearty workers' cuisine for the silk factory workers of Croix-Rousse. Les Halles Paul Bocuse is the finest covered food market in France. The city has more Michelin-starred restaurants per capita than Paris.",
                },
                {
                  q: "What is a bouchon lyonnais and what should I order?",
                  a: "A bouchon is a traditional Lyonnais bistro serving hearty local cuisine in a convivial, informal setting. Classic dishes: quenelles de brochet (pike fish dumplings in cream sauce), saucisson chaud (warm sausage with potatoes), andouillette (tripe sausage — strong flavour, not for everyone), salade lyonnaise (frisée with lardons and a poached egg), and cervelle de canut (fresh herbed cheese dip). Wine is served in a clay carafe called a pot lyonnais. Real bouchons are recognised by the official 'Les Bouchons Lyonnais' certification plaque.",
                },
                {
                  q: "How many days do I need in Lyon?",
                  a: "3 days is ideal — Day 1 for Vieux-Lyon traboules, Fourvière, and the Presqu'île; Day 2 for Les Halles Paul Bocuse, Croix-Rousse, and the Musée des Confluences; Day 3 for a Beaujolais day trip or Pérouges. Two days is possible if you skip the day trip but feels rushed if you want to eat well and explore both hills.",
                },
                {
                  q: "Is Lyon safe for tourists?",
                  a: "Lyon is very safe for tourists. The historic areas (Vieux-Lyon, Presqu'île, Fourvière) are among the most pleasant urban environments in France. Standard city precautions apply: watch your bag on the metro, and exercise normal awareness in Guillotière late at night. The Croix-Rousse and Confluence neighbourhoods are completely safe at all hours.",
                },
                {
                  q: "What are the best day trips from Lyon?",
                  a: "The Beaujolais wine region (40 min by regional train, €10 return) is the most unique — rolling hills, medieval villages, and wines straight from the producer. Pérouges medieval village (1 hour by bus and train, €5–8 return) is the most atmospheric — an intact 13th-century walled village. Annecy (2 hours by TGV, €25–35 return) for alpine lakes. Vienne (30 min by train, €7 return) for Roman ruins. All are easily done on public transport.",
                },
                {
                  q: "How do I get from Paris to Lyon?",
                  a: "The TGV from Paris Gare de Lyon to Lyon Part-Dieu takes exactly 2 hours with up to 20 daily departures. Fares range from €20 (booked 3–4 weeks ahead) to €60 (last minute). Book on sncf-connect.com. The TGV is almost always faster and more convenient than flying door-to-door, and Lyon Part-Dieu station is in the heart of the city.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Lyon trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-lyon", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/lyon-food-guide", label: "Lyon food guide", icon: "🍽️" },
                { href: "/blog/beaujolais-day-trip", label: "Beaujolais day trip", icon: "🍷" },
                { href: "/blog/france-travel-tips", label: "France travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="lyon-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More France &amp; Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Paris 5 Days — The Essential Itinerary", href: "/blog/paris-5-days" },
                { label: "Nice 3 Days — French Riviera", href: "/blog/nice-3-days" },
                { label: "Bordeaux 3 Days — Wine Capital", href: "/blog/bordeaux-3-days" },
                { label: "Barcelona 4 Days — Gaudí &amp; Tapas", href: "/blog/barcelona-4-days" },
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
