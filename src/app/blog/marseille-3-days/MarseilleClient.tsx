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
const MARSEILLE_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Marseille Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "🚂",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "3-Day Itinerary" },
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
          href: `mailto:?subject=Marseille 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Marseille in 3 Days — Calanques, bouillabaisse and the Vieux-Port&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/marseille-3-days"
        imageUrl="https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80"
        description="Marseille in 3 Days: Calanques boat tours, Château d&apos;If, bouillabaisse at Chez Fonfon, MuCEM, Le Panier street art — complete travel guide with budget breakdown."
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
export default function MarseilleClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MARSEILLE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Marseille" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="marseille vieux port france mediterranean coast old harbour boats"
            fallback="https://images.unsplash.com/photo-1555993539-1732b0258235?w=1600&q=80"
            alt="Marseille Vieux-Port with boats and Notre-Dame de la Garde basilica France"
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
              <span className="text-white/70">Marseille 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  🇫🇷 France
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Marseille in 3 Days:
                <em className="italic text-amber-300"> Calanques, Bouillabaisse &amp; the Vieux-Port</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                France&apos;s oldest city, the limestone Calanques, Ch&acirc;teau d&apos;If, the morning fish market, and the best bouillabaisse on earth. The complete guide.
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
              <span>🇫🇷 Provence, France</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From &euro;60/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Marseille is France&apos;s oldest city and its most misunderstood &mdash; a port of 900,000 people where the morning fish market at the Vieux-Port has run uninterrupted for 2,600 years, where the limestone Calanques plunge 400 metres into turquoise water just 20 minutes from the city centre, and where the best bouillabaisse on earth is ladled from copper pots in restaurants that haven&apos;t changed their recipe since the 19th century.
            </p>
          </blockquote>

          {/* ── WHAT MARSEILLE ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Marseille Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Founded as Massalia by Greek colonists from Phocaea around 600 BC, Marseille is the oldest city in France and the second-largest. For 2,600 years it has functioned as a Mediterranean trading port &mdash; a gateway between Europe, North Africa, and the Middle East. The Vieux-Port fish market, where fishermen sell rascasse, rouget, and sea urchins directly off the boats every morning, has operated continuously since the Greek era.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Three days gives you the old port and its morning market, Le Panier (the oldest neighbourhood in France, now a street-art district), Notre-Dame de la Garde basilica with its panoramic views, MuCEM &mdash; one of Europe&apos;s finest modern museums, the Ch&acirc;teau d&apos;If island fortress from Alexandre Dumas&apos; novel, and the Calanques National Park &mdash; 20km of limestone cliffs dropping vertically into water that runs from jade to electric blue.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The city is raw, multicultural, and unapologetically itself. It is not Paris and does not try to be. The North African market quarter of Noailles, the bohemian Cours Julien neighbourhood, the tiny fishing village of Vallon des Auffes tucked under the Corniche &mdash; Marseille rewards the curious traveller more than almost any city in France.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="MRS" />
              <StatCard icon="🌡️" label="Best Season" value="May–Sep" />
              <StatCard icon="🏛️" label="Founded" value="600 BC" />
              <StatCard icon="💰" label="Budget From" value="€60/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Marseille</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Jun",
                  i: "☀️",
                  t: "Late Spring — Best Season",
                  d: "22–28°C, the Calanques hiking paths are fully open, the sea is warming to 18–22°C, and tourist numbers are manageable. Long daylight hours mean golden-hour light on the Vieux-Port lasts until 9pm. The ideal window for most travellers.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🔥",
                  t: "Summer — Hot and Busy",
                  d: "28–34°C, peak tourist season. Calanques hiking paths are closed due to fire risk (access by boat only). Ferry queues for Ch&acirc;teau d&apos;If are long. The sea temperature reaches 24–26°C &mdash; perfect for swimming. Book restaurants and boat tours well in advance.",
                  b: "Book ahead",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🌅",
                  t: "Early Autumn — Excellent",
                  d: "22–26°C, the sea is at its warmest (24–26°C in September), fire-risk path closures are easing, and the summer crowds have thinned. September is arguably the best single month to visit Marseille &mdash; warm water, open paths, and manageable tourism.",
                  b: "Sweet spot",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Nov–Apr",
                  i: "🌧️",
                  t: "Winter — Quiet but Cool",
                  d: "8–15°C, fewer tourists, lower prices. The Mistral wind can be fierce (cold, dry, and strong enough to make the Corniche uncomfortable). The fish market, museums, and restaurants are all open. Not swimming weather, but a genuine Marseillais atmosphere without crowds.",
                  b: "Budget-friendly",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚂 Getting to Marseille</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Marseille&apos;s main station is <strong className="font-medium">Gare Saint-Charles</strong>, connected to the Vieux-Port by metro Line 1 in 5 minutes. The airport (MRS) is 25km northwest with a shuttle bus running every 15&ndash;20 minutes.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚄",
                  t: "TGV from Paris (recommended)",
                  d: "Paris Gare de Lyon to Marseille Saint-Charles: 3 hours 10 minutes. Tickets from &euro;30&ndash;60 booked in advance on SNCF Connect or Trainline, up to &euro;110 for same-day flexible fares. 15&ndash;20 daily services. Faster than flying once airport time is factored in.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Fly to Marseille Provence Airport (MRS)",
                  d: "Direct flights from London (2hr), Amsterdam (2hr), Barcelona (1.5hr), and major European hubs. Navette airport shuttle bus to Gare Saint-Charles: &euro;10.40, 25&ndash;30 minutes, every 15&ndash;20 min. Taxi to city centre: &euro;45&ndash;60.",
                  b: "International arrivals",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚂",
                  t: "Train from Nice / C&ocirc;te d&apos;Azur",
                  d: "Nice to Marseille: 2.5 hours by TGV (&euro;20&ndash;40) or 2 hours 45 minutes by TER regional train (&euro;15&ndash;25). The coastal TER route passes through Toulon and Cassis &mdash; one of the most scenic train journeys in Provence.",
                  b: "Scenic route",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Drive from Lyon / Aix-en-Provence",
                  d: "Lyon to Marseille: 3 hours via the A7 autoroute. Aix-en-Provence: 35 minutes. Parking in central Marseille is expensive (&euro;20&ndash;30/day) and street parking is scarce. Consider parking at Gare Saint-Charles or the Vieux-Port underground car park.",
                  b: "Good for Provence touring",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Marseille Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary covers the essential Marseille experience &mdash; the Vieux-Port, Le Panier, Notre-Dame de la Garde, the Calanques by boat, Ch&acirc;teau d&apos;If, and MuCEM &mdash; at a comfortable pace with time for long meals and pastis at sunset.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Vieux-Port Fish Market · Le Panier · Notre-Dame de la Garde"
                cost="€45–70"
                items={[
                  "7:30am — Vieux-Port fish market (Quai des Belges). The poissonnerie has operated at the eastern end of the old port since Marseille was a Greek colony. Fishermen arrive by 6am; the market peaks from 7:30–9:30am. Watch the fishwives (poissonni\u00e8res) sell sea urchins, rascasse, and rouget directly off the boats. Free to watch; €3–5 for sea urchins.",
                  "9:00am — Coffee and a croissant at a quayside bar on the Vieux-Port for €4–5. The port is best at this hour: boats rocking gently, the basilica watching from the hill, the fish market winding down behind you.",
                  "10:00am — Le Panier district, Marseille\u0027s oldest neighbourhood. Steep, narrow streets covered in commissioned street art. Wander Rue du Panier, Place des Moulins, Mont\u00e9e des Accoules. The Vieille Charit\u00e9 almshouse has a magnificent Baroque chapel (exterior free, interior museum €6).",
                  "12:30pm — Lunch in Le Panier. A panisse (fried chickpea fritter, €2–3) from a market stall, or a full lunch at a neighbourhood restaurant for €12–16. Soupe de poisson with rouille and croutons at port-side brasseries is €8–10 — the budget version of bouillabaisse.",
                  "2:30pm — Walk up to Notre-Dame de la Garde basilica (La Bonne M\u00e8re) at 162 metres above sea level. The walk from the port takes 35–45 minutes uphill, or take the No. 60 bus (€1.70). The Romano-Byzantine basilica is free to enter — the interior is covered in ex-voto offerings left by sailors over 150 years. The panoramic view from the terrace is the finest in Marseille.",
                  "5:00pm — Walk down to the Corniche Kennedy for sunset. The flat rocks below the Corniche are where locals swim and sunbathe from May onwards — no beach infrastructure, just flat limestone and the sea.",
                  "7:30pm — Ap\u00e9ritif: pastis and water (€4–5) at a Vieux-Port bar. Pastis is the anise-spirit of Provence — mixed 1:5 with cold water it turns milky yellow. The ritual drink of Marseille evenings.",
                  "8:30pm — Dinner: soupe de poisson with rouille, croutons, and gruy\u00e8re at a port brasserie (€10–14), or pieds et paquets (lamb tripe, €14–16) at a traditional bistro.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Ch&acirc;teau d&apos;If · Calanques Boat Tour · Vallon des Auffes"
                cost="€55–80"
                items={[
                  "8:30am — Ferry to Ch\u00e2teau d\u0027If from the Vieux-Port quay (Frioul If Express, €10 ferry + €6 ch\u00e2teau entry, departures every 60–90 minutes from 9am). The island fortress was built by Fran\u00e7ois I in 1524 and became the prison from Alexandre Dumas\u0027 \u0027The Count of Monte Cristo\u0027. The 20-minute crossing gives extraordinary views of Marseille from the sea.",
                  "9:30am — Explore Ch\u00e2teau d\u0027If. See the \u0027cell of Edmond Dant\u00e8s\u0027 (a fictional addition for tourists), climb the towers, walk the ramparts for 360-degree bay views. Allow 90 minutes.",
                  "11:30am — Return ferry to Vieux-Port. The Frioul If Express also serves the Frioul archipelago (€16 total return for both islands) — sheltered beaches and ruins of a 17th-century quarantine hospital.",
                  "1:00pm — Quick lunch: a baguette sandwich with local charcuterie from the March\u00e9 des Capucins for €4–6.",
                  "2:30pm — Calanques boat tour from Quai des Belges. Budget tours run €25 for a 2-hour trip passing 5–7 Calanques — Sormiou, Morgiou, Sugiton, En-Vau. The limestone cliffs drop vertically into water that runs from jade to electric blue. Book the day before in summer.",
                  "5:30pm — Walk along the Corniche to the Vallon des Auffes — a tiny fishing village cut into the cliffs, barely large enough for two fishing boats. Chez Fonfon has served bouillabaisse from this spot since 1952.",
                  "7:30pm — Evening in the Cours Julien neighbourhood. Bohemian quarter: street art, independent record shops, outdoor caf\u00e9 terraces. Budget dinner: Thai, Lebanese, or North African restaurants where a full meal costs €10–15.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="MuCEM · Fort Saint-Jean · L&apos;Estaque · Farewell Dinner"
                cost="€40–60"
                items={[
                  "9:30am — MuCEM (Museum of European and Mediterranean Civilisations, J4 pier). Entry €11. Rudy Ricciotti\u0027s 2013 design is a concrete lattice cube connected to the 17th-century Fort Saint-Jean by a hanging footbridge over the sea. The collection spans 5,000 years of Mediterranean civilisation. Allow 2–2.5 hours.",
                  "11:30am — Walk the Fort Saint-Jean footbridge (free with MuCEM ticket) for views of the port, the islands, and the basilica. The fort gardens are planted with Mediterranean herbs.",
                  "12:30pm — Lunch at the MuCEM rooftop caf\u00e9 (€12–18) or walk to Le Panier for a cheaper option. The March\u00e9 de la Plaine (Place Jean Jaur\u00e8s, Tuesday/Thursday/Saturday mornings) has excellent prepared foods.",
                  "2:30pm — Cours Julien neighbourhood for antiques, vinyl records, secondhand books, artisan ceramics. The street murals include internationally recognised artists like C215 and Lek &amp; Sowat.",
                  "4:00pm — L\u0027Estaque by bus (30 min from the port). This former fishing village was where C\u00e9zanne painted his earliest coastal landscapes in the 1870s, followed by Braque in 1906–1908 — paintings considered among the first Cubist works. The view from the \u00c9glise Saint-S\u00e9bastien is exactly as C\u00e9zanne painted it.",
                  "7:00pm — Final evening at the Vieux-Port. Sit on the Quai du Port (north side, quieter) and watch the port lights come on. The reflection of Notre-Dame de la Garde\u0027s illuminated gilded Madonna on the night water is one of the great images of France.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Marseille" onPlanTrip={() => setModalOpen(true)} />

          {/* ── KEY SIGHTS GUIDE ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Key Sights Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority, with entry fees as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Calanques National Park",
                  e: "Free (boat tour €25)",
                  d: "20km of limestone cliffs dropping 400 metres into turquoise water. Accessible by boat tour from the Vieux-Port (2 hours, €25–35) or by hiking from Luminy or Callelongue. Some paths close mid-June to mid-September due to fire risk — check pr\u00e9fecture-13.gouv.fr before hiking.",
                  t: "Must see · Half day",
                },
                {
                  n: "Notre-Dame de la Garde",
                  e: "Free",
                  d: "The city\u0027s iconic basilica at 162 metres above sea level. Romano-Byzantine interior covered in ex-voto offerings from sailors. The panoramic view from the terrace covers the entire port, the islands, the Calanques coastline, and the Alps in the distance. Bus No. 60 from Vieux-Port (€1.70) or 40-minute uphill walk.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "MuCEM",
                  e: "€11",
                  d: "Museum of European and Mediterranean Civilisations. Rudy Ricciotti\u0027s concrete lattice cube on the J4 pier, connected by footbridge to Fort Saint-Jean. Permanent collection spans agriculture, religion, and trade across 5,000 years. The building itself justifies the ticket.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Ch\u00e2teau d\u0027If",
                  e: "€6 + €10 ferry",
                  d: "Island fortress built by Fran\u00e7ois I in 1524, made famous by Dumas\u0027 \u0027The Count of Monte Cristo\u0027. Ferry from Vieux-Port (Frioul If Express), 20-minute crossing with views of the city from the sea. Allow 90 minutes on the island.",
                  t: "Must see · 2.5 hrs incl. ferry",
                },
                {
                  n: "Le Panier",
                  e: "Free",
                  d: "The oldest neighbourhood in France, built on the hillside above the port. Steep streets covered in commissioned street art, the Vieille Charit\u00e9 almshouse with its Baroque chapel, and a strong local caf\u00e9 culture. Best explored without a map.",
                  t: "Essential · 2 hrs",
                },
                {
                  n: "Vallon des Auffes",
                  e: "Free",
                  d: "A tiny fishing village tucked into the cliffs below the Corniche Kennedy. Barely large enough for two boats. Home to Chez Fonfon, one of Marseille\u0027s most celebrated bouillabaisse restaurants (since 1952). Walk there via the Corniche from the Vieux-Port.",
                  t: "Atmospheric · 1 hr",
                },
                {
                  n: "Cours Julien",
                  e: "Free",
                  d: "Marseille\u0027s bohemian quarter — street art on every building, independent record shops, vintage clothing, and outdoor terraces. The street murals here are some of the finest legal street art in France. Best in the evening when the neighbourhood fills with locals.",
                  t: "Evening · 2 hrs",
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
            title="Marseille — Calanques, Vieux-Port &amp; the Mediterranean"
            subtitle="France&apos;s oldest city and its extraordinary coastline."
            spots={[
              {
                name: "Calanques National Park",
                query: "calanques national park marseille limestone cliffs turquoise water france",
                desc: "Limestone cliffs plunging 400 metres into turquoise Mediterranean water — the essential Marseille experience.",
              },
              {
                name: "Vieux-Port at Dawn",
                query: "marseille vieux port old harbour boats morning france mediterranean",
                desc: "The old harbour at morning — 2,600 years of continuous use as a fishing port and Mediterranean gateway.",
              },
              {
                name: "Notre-Dame de la Garde",
                query: "notre dame de la garde basilica marseille panoramic view france",
                desc: "The Romano-Byzantine basilica at 162 metres — Marseille\u0027s most iconic landmark and finest viewpoint.",
              },
              {
                name: "MuCEM Museum",
                query: "mucem museum marseille concrete lattice architecture france mediterranean",
                desc: "Rudy Ricciotti\u0027s concrete lattice cube on the J4 pier — one of Europe\u0027s finest modern museum buildings.",
              },
              {
                name: "Le Panier Street Art",
                query: "le panier marseille street art narrow streets oldest neighbourhood france",
                desc: "The oldest neighbourhood in France — steep streets covered in commissioned murals and strong local caf\u00e9 culture.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Marseille is significantly cheaper than Paris for accommodation and dining. The main costs are boat tours (Calanques, Ch&acirc;teau d&apos;If) and restaurant meals — bouillabaisse at a proper restaurant is €50–70/person and worth every cent once.
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
                    ["🏨 Accommodation", "€20–40", "€90–160", "€300–600"],
                    ["🍽 Food", "€15–22", "€40–65", "€100–280"],
                    ["🚌 Transport", "€8–15", "€20–35", "€50–150"],
                    ["🏛️ Activities", "€15–20", "€30–55", "€100–300"],
                    ["TOTAL (per day)", "€60–90", "€130–220", "€300–550"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€60–90/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay at Vertigo Vieux-Port hostel (€25–35/night), eat panisse and soupe de poisson at market stalls and brasseries, use the metro (€1.70) and buses. The €25 Calanques boat tour is the one thing worth splashing on.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€130–220/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay at Hotel C2 or a boutique hotel near the port (€120–180/night). One proper bouillabaisse dinner at Chez Fonfon (€65), guided Le Panier walking tour, Calanques kayak tour (€45–65). The sweet spot for comfort.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (€300–550/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">InterContinental Marseille &ndash; H&ocirc;tel Dieu (€320–600/night), private Calanques sailing charter (€500–900), dinner at AM par Alexandre Mazzia (3 Michelin stars, €220–280). The ultimate Marseille experience.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Marseille</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The best area to stay is around the Vieux-Port &mdash; within walking distance of Le Panier, MuCEM, the ferry terminal for Ch&acirc;teau d&apos;If, and most restaurants. The Cours Julien neighbourhood is a good alternative for a more bohemian atmosphere.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "InterContinental Marseille \u2013 H\u00f4tel Dieu",
                  type: "5-star luxury \u00b7 Vieux-Port",
                  price: "From \u20ac320/night",
                  badge: "Most luxurious",
                  desc: "A 12th-century hospice converted to a 5-star hotel in 2013. Original stone vaulted corridors, 18th-century grand staircase, and a rooftop pool with port views. The most architecturally significant luxury hotel in Marseille.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hotel C2",
                  type: "Boutique luxury \u00b7 Cours d\u0027Estienne d\u0027Orves",
                  price: "From \u20ac180/night",
                  badge: "Best boutique",
                  desc: "A 19th-century mansion converted to a 20-room boutique hotel. Indoor pool, hammam, and a courtyard garden. 5-minute walk from the Vieux-Port in Marseille\u0027s most elegant neighbourhood.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "H\u00f4tel La R\u00e9sidence du Vieux-Port",
                  type: "Mid-range \u00b7 Vieux-Port",
                  price: "From \u20ac120/night",
                  badge: "Best views",
                  desc: "Directly overlooking the Vieux-Port with views of Notre-Dame de la Garde from the upper floors. Clean, well-located, and recently renovated. The terrace rooms are worth the upgrade for the panoramic port views.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Vertigo Vieux-Port",
                  type: "Hostel \u00b7 Vieux-Port",
                  price: "From \u20ac25/night (dorm)",
                  badge: "Best budget",
                  desc: "One of the best-located hostels in Marseille \u2014 steps from the Vieux-Port quay. Clean dorms, private rooms available, rooftop terrace, and a sociable common area. The starting point for most budget travellers.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Marseille</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Marseille&apos;s food culture is defined by the Mediterranean — fish from the morning market, North African spices from the Noailles quarter, and Proven&ccedil;al herbs. Bouillabaisse is the signature dish, but the city&apos;s real diversity is in its everyday street food and neighbourhood restaurants.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Chez Fonfon",
                  t: "Bouillabaisse institution \u00b7 Vallon des Auffes",
                  d: "The gold standard for bouillabaisse since 1952. The full ceremonial service: saffron-fennel broth first with rouille and croutons, then the whole fish presented at the table. \u20ac65/person. Book 3\u20135 days ahead in high season. The setting in the Vallon des Auffes fishing village is part of the experience.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Le Miramar",
                  t: "Historic seafood \u00b7 Quai du Port",
                  d: "Open since 1966, Miramar is widely considered alongside Chez Fonfon as the best bouillabaisse in the city. Overlooking the Vieux-Port with a traditional Proven\u00e7al dining room. The bouillabaisse ritual is served with meticulous ceremony. \u20ac55\u201370/person.",
                  b: "Iconic",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "March\u00e9 des Capucins (Noailles)",
                  t: "Street food market \u00b7 Cours Belsunce",
                  d: "Marseille\u0027s densest market quarter \u2014 spice stalls, North African pastry shops (msemen, sfenj), olive merchants, and halal butchers. A bag of cumin, harissa paste, and fresh merguez costs \u20ac6. Go between 9am and 1pm on a weekday. More authentically Marseillais than any souvenir shop.",
                  b: "Best street food",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Une Table au Sud",
                  t: "1 Michelin star \u00b7 Quai du Port",
                  d: "Chef Ludovic Turac\u0027s contemporary Proven\u00e7al menu uses Marseille\u0027s market produce \u2014 local sea bass, lamb from Sisteron, seasonal vegetables with Proven\u00e7al herbs. Tasting menu \u20ac65\u201385/person. Excellent views over the Vieux-Port from the dining room.",
                  b: "Fine dining",
                  c: "bg-purple-50 border-purple-200",
                },
                {
                  n: "Four des Navettes",
                  t: "Historic bakery \u00b7 Rue Sainte (since 1781)",
                  d: "The oldest bakery in Marseille, continuously operating since 1781. Famous for navettes \u2014 small, boat-shaped orange-blossom cookies that are the city\u0027s traditional biscuit. \u20ac15/dozen. A box makes the best edible souvenir from Marseille.",
                  b: "Best souvenir",
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
            destination="Marseille France"
            hotels={[
              {
                name: "InterContinental Marseille \u2013 H\u00f4tel Dieu",
                type: "5-star luxury \u00b7 Converted 12th-century hospice",
                price: "From \u20ac320/night",
                rating: "5",
                badge: "Most luxurious",
                url: "https://www.booking.com/hotel/fr/intercontinental-marseille-hotel-dieu.html?aid=2820480",
              },
              {
                name: "Hotel C2",
                type: "Boutique luxury \u00b7 19th-century mansion",
                price: "From \u20ac180/night",
                rating: "5",
                badge: "Best boutique",
                url: "https://www.booking.com/hotel/fr/c2-hotel-marseille.html?aid=2820480",
              },
              {
                name: "H\u00f4tel La R\u00e9sidence du Vieux-Port",
                type: "Mid-range \u00b7 Vieux-Port views",
                price: "From \u20ac120/night",
                rating: "4",
                badge: "Best views",
                url: "https://www.booking.com/hotel/fr/la-residence-du-vieux-port-marseille.html?aid=2820480",
              },
              {
                name: "Vertigo Vieux-Port",
                type: "Hostel \u00b7 Steps from the port",
                price: "From \u20ac25/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/fr/vertigo-vieux-port-marseille.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Calanques Boat Tour from Vieux-Port",
                duration: "2 hrs",
                price: "From \u20ac25/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=marseille+calanques+boat+tour&partner_id=PSZA5UI",
              },
              {
                name: "Guided Le Panier Walking Tour",
                duration: "2 hrs",
                price: "From \u20ac25/person",
                badge: "Top rated",
                url: "https://www.getyourguide.com/s/?q=marseille+le+panier+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Ch\u00e2teau d\u0027If &amp; Frioul Islands Ferry",
                duration: "3 hrs",
                price: "From \u20ac16/person",
                url: "https://www.getyourguide.com/s/?q=marseille+chateau+dif+ferry&partner_id=PSZA5UI",
              },
              {
                name: "Calanques Kayak Tour",
                duration: "3 hrs",
                price: "From \u20ac45/person",
                url: "https://www.getyourguide.com/s/?q=marseille+calanques+kayak&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Marseille</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "⛵",
                  title: "Book Calanques boats the day before in summer",
                  desc: "The 2-hour Calanques tours from Quai des Belges (€25\u201335) fill up in July and August. The morning departure (9:30am) has the best light on the limestone and the most vivid water colour. Book at the ticket kiosks on the quayside the previous afternoon \u2014 same-day booking in summer is unreliable.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🫙",
                  title: "The Noailles Market is the real Marseille",
                  desc: "The March\u00e9 des Capucins (Cours Belsunce) is a labyrinth of spice stalls, North African pastries, olive merchants, and halal butchers reflecting the city\u0027s deep ties to Algeria, Tunisia, and Morocco. Go 9am\u20131pm on a weekday. More authentically Marseillais than anything from a souvenir shop.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🌅",
                  title: "Notre-Dame de la Garde at sunrise",
                  desc: "Most visitors go in the afternoon. The least-known great experience is arriving at 7am to watch the sun rise over the Calanques and the sea. The esplanade is empty; the city is waking below; the light on the gilded Madonna is extraordinary. The basilica opens at 7am daily.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🚆",
                  title: "Aix-en-Provence is 30 minutes by train",
                  desc: "Aix-en-Provence (C\u00e9zanne\u0027s birthplace, one of the finest historic cities in Provence) is 30 minutes from Gare Saint-Charles by TER train (\u20ac8, every 30 min). Close enough for a half-day trip. Cassis (Calanques by boat, whitewashed port village) is 45 minutes by train.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🚌",
                  title: "Use public transport — it works",
                  desc: "Marseille has a functional metro, tram, and bus network. The No. 60 bus goes to Notre-Dame de la Garde. Single ticket: \u20ac1.70; 24-hour pass: \u20ac5.30. Taxis add up quickly. Public transport is how Marseillais actually move around the city \u2014 not a budget compromise.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🍲",
                  title: "Know what real bouillabaisse costs",
                  desc: "Authentic bouillabaisse requires a minimum of four specific fish varieties, a saffron-fennel broth made from whole fish, and rouille served separately. It costs \u20ac45\u201370/person and is always made to order. If a menu shows bouillabaisse for \u20ac18, it is not bouillabaisse. Go to Chez Fonfon or Le Miramar and pay the real price once.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Marseille" />

          {/* Combine With */}
          <CombineWith currentSlug="marseille-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Marseille safe for tourists?",
                  a: "Yes \u2014 with common-sense precautions. The areas you\u0027ll spend time in \u2014 the Vieux-Port, Le Panier, MuCEM, Cours Julien, the Corniche, and Notre-Dame de la Garde \u2014 are all safe, busy, and well-policed. Be aware of pickpockets in crowded areas (the Vieux-Port quays, the Noailles market), don\u0027t leave valuables visible in cars, and avoid the northern housing estates (La Castellane, Les Quartiers Nord) which have no tourist sites. The vast majority of visitors have no incidents whatsoever.",
                },
                {
                  q: "What is bouillabaisse and why does it cost so much?",
                  a: "Bouillabaisse is Marseille\u0027s traditional fishermen\u0027s stew \u2014 originally made from the unsellable rockfish (rascasse, vive, grondin, saint-pierre) left at the end of the market day. The authentic version requires cooking specific fish varieties in a fennel-saffron broth, serving the broth first as a soup with rouille and croutons, then presenting the whole fish at the table. Expect \u20ac50\u201370/person at serious restaurants. The budget version is soupe de poisson (\u20ac8\u201312 at port brasseries) \u2014 the same broth, pur\u00e9ed, without the whole fish.",
                },
                {
                  q: "How do I get from Marseille Provence Airport (MRS) to the city?",
                  a: "The Navette Marseille airport shuttle bus runs every 15\u201320 minutes to Gare Saint-Charles in 25\u201330 minutes. Cost: \u20ac10.40 one way. Taxis cost \u20ac45\u201360 depending on traffic. There is no direct rail link. From Gare Saint-Charles, metro Line 1 reaches the Vieux-Port in 5 minutes.",
                },
                {
                  q: "When is the best time for the Calanques?",
                  a: "May\u2013June and September\u2013mid-October. In May\u2013June the hiking paths are fully open and the water is warming (18\u201322\u00b0C). In September the water peaks at 24\u201326\u00b0C and fire-risk closures ease. July\u2013August: beaches are busy, ferry queues for Ch\u00e2teau d\u0027If are long, and many Calanques paths are closed due to fire risk. Boat tours run year-round regardless of path closures.",
                },
                {
                  q: "How do I get from Paris to Marseille?",
                  a: "TGV from Paris Gare de Lyon: 3 hours 10 minutes. Tickets from \u20ac30\u201360 booked in advance on SNCF Connect or Trainline, up to \u20ac110 for same-day flexible fares. 15\u201320 daily services. The train is faster than flying once airport time is factored in \u2014 roughly equal in total journey time at a fraction of the stress.",
                },
                {
                  q: "Can I do a day trip to Cassis from Marseille?",
                  a: "Easily. Cassis is 45 minutes by TER train (changing at La Ciotat, \u20ac8\u201310) or 45 minutes by boat from the Vieux-Port (seasonal ferry, \u20ac30\u201340 return). From Cassis, boat tours of the innermost Calanques (En-Vau, Port-Pin, Port-Miou) run for \u20ac15\u201325. The town itself \u2014 chalk-white port, outdoor fish restaurants, Cassis AOC white wine \u2014 is worth 2\u20133 hours.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Marseille trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/marseille-3-days/best-time", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/marseille-3-days/couples-guide", label: "Couples guide", icon: "💑" },
                { href: "/blog/marseille-3-days/packing-list", label: "Packing list", icon: "🧳" },
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
          <RelatedGuides currentSlug="marseille-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Nice in 3 Days &mdash; C&ocirc;te d&apos;Azur", href: "/blog/nice-3-days" },
                { label: "Barcelona in 4 Days &mdash; Gaud&iacute; &amp; Tapas", href: "/blog/barcelona-4-days" },
                { label: "Florence in 3 Days &mdash; Renaissance Art", href: "/blog/florence-3-days" },
                { label: "Paris in 5 Days &mdash; The Complete Guide", href: "/blog/paris-5-days" },
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
