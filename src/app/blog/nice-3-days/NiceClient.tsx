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
const NICE_TOC = [
  { id: "honest",      emoji: "\u26A1",  label: "What Nice Actually Is" },
  { id: "season",      emoji: "\uD83C\uDF21\uFE0F", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "\u2708\uFE0F",  label: "Getting There" },
  { id: "itinerary",   emoji: "\uD83D\uDCC5",  label: "3-Day Itinerary" },
  { id: "landmarks",   emoji: "\uD83C\uDFDB\uFE0F", label: "Landmark Guide" },
  { id: "budget",      emoji: "\uD83D\uDCB0",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "\uD83C\uDFE8",  label: "Where to Stay" },
  { id: "eat",         emoji: "\uD83C\uDF7D\uFE0F", label: "Where to Eat" },
  { id: "mistakes",    emoji: "\u274C",  label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "\uD83D\uDCA1",  label: "Pro Tips" },
  { id: "faq",         emoji: "\u2753",  label: "FAQ" },
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
          href: `mailto:?subject=Nice 3-Day French Riviera Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Nice in 3 Days — Promenade, Monaco day trip and socca street food&url=${pageUrl}`,
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
        {copied ? "\u2713 Copied" : "Copy Link"}
      </button>
      <PinterestSaveButton
        pageUrl="https://www.incredibleitinerary.com/blog/nice-3-days"
        imageUrl="https://images.unsplash.com/photo-1491166617655-0723a0567989?w=1200&q=80"
        description="Nice in 3 Days: Promenade des Anglais, Monaco day trip, Eze village, socca street food and the French Riviera on a budget — complete travel guide."
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
        <span className="text-muted text-lg">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-amber-500 mt-1 flex-shrink-0 text-xs">{"\u25CF"}</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">{"\uD83D\uDCB0"}</span>
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
export default function NiceClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={NICE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Nice" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="nice france promenade des anglais mediterranean riviera azure coast"
            fallback="https://images.unsplash.com/photo-1491166617655-0723a0567989?w=1600&q=80"
            alt="Nice France Promenade des Anglais turquoise Mediterranean coast with palm trees"
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
              <span className="text-white/70">Nice 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  French Riviera
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Nice in 3 Days:
                <em className="italic text-amber-300"> Promenade, Socca &amp; the C{"\u00F4"}te d&apos;Azur</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The Promenade des Anglais, a morning flower market, Monaco by train, the medieval village of {"\u00C8"}ze at 427 metres, and socca from a wood-fired oven. The complete guide.
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
              <span>{"\uD83C\uDDEB\uD83C\uDDF7"} C{"\u00F4"}te d&apos;Azur, France</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDDD3"} 3 Days</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDCB0"} From {"\u20AC"}55/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Nice is the French Riviera without the pretension &mdash; a real city of 340,000 where the morning flower market fills the Cours Saleya with roses and basil, the old town&apos;s ochre alleyways smell of socca on griddles, and the Mediterranean stretches turquoise past the Promenade des Anglais for as far as you can see.
            </p>
          </blockquote>

          {/* ── WHAT NICE ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">{"\u26A1"} What Nice Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Nice is the fifth-largest city in France and the unofficial capital of the C{"\u00F4"}te d&apos;Azur. It has been a Mediterranean crossroads for 400,000 years &mdash; the Terra Amata archaeological site near the port is one of the oldest known settlements in Europe. Greeks from Marseille founded Nikaia here in the 4th century BCE; the Romans built Cemenelum on the hills above (its ruins are still in the Cimiez neighbourhood); and the city bounced between the County of Nice, the House of Savoy, and France until final annexation in 1860.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              What makes Nice different from the other Riviera towns is that it&apos;s actually a city. Cannes, Monaco, and Saint-Tropez are resort destinations &mdash; beautiful but one-dimensional. Nice has a Baroque old town with real neighbourhood life, two world-class art museums (Matisse and Chagall), a functioning daily flower market, street food that exists nowhere else in France, and a public transit system that connects you to Monaco, {"\u00C8"}ze, Antibes, and Villefranche-sur-Mer for under {"\u20AC"}5.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Three days is enough to swim in the Mediterranean, eat your way through Vieux-Nice, take the train to Monaco, climb to {"\u00C8"}ze to look down at the coast from 427 metres, and still have an evening for a pastis in a square. It is the ideal base for the French Riviera.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon={"\u2708\uFE0F"} label="Airport" value="NCE" />
              <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Season" value="May\u2013Oct" />
              <StatCard icon={"\uD83C\uDFD6\uFE0F"} label="Coastline" value="7 km" />
              <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"\u20AC55/day"} />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF21\uFE0F"} Best Time to Visit Nice</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May\u2013Jun",
                  i: "\u2600\uFE0F",
                  t: "Late Spring \u2014 Best Season",
                  d: "22\u201328\u00B0C, long sunny days, sea warming to 20\u201322\u00B0C. The flower market is at peak bloom. Hotels are 30\u201340% cheaper than July\u2013August. The ideal window for most travellers \u2014 warm enough to swim, cool enough to walk, and far fewer crowds than peak summer.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep\u2013Oct",
                  i: "\uD83C\uDF1F",
                  t: "Autumn \u2014 Equally Excellent",
                  d: "Sea temperature 23\u201325\u00B0C (warmer than summer due to thermal lag). Hotel prices drop 40\u201350%. The light turns golden and theatrical in October. Late September is arguably the single best time to visit Nice \u2014 warm sea, cool air, quiet streets.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul\u2013Aug",
                  i: "\uD83D\uDD25",
                  t: "Peak Summer \u2014 Hot &amp; Crowded",
                  d: "30\u201335\u00B0C. Beaches packed, accommodation prices peak (60\u201380% above shoulder season), restaurants require reservations. The Promenade is a wall of people. If you must go, early mornings and late evenings are your best friends.",
                  b: "Expensive",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov\u2013Apr",
                  i: "\u2744\uFE0F",
                  t: "Winter \u2014 Mild but Quiet",
                  d: "10\u201316\u00B0C. Nice has 300 days of sunshine per year, and winter is sunnier than most of northern Europe. The Christmas market is festive, the Carnival in February is world-famous. Swimming is out, but cultural attractions are uncrowded and hotel deals are excellent.",
                  b: "Culture &amp; deals",
                  c: "bg-blue-50 border-blue-200",
                },
              ].map((s) => (
                <div key={s.s} className={`rounded-xl p-4 border ${s.c}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.i}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{s.s} &mdash; <span dangerouslySetInnerHTML={{ __html: s.t }} /></p>
                      <p className="text-[0.65rem] font-medium text-teal" dangerouslySetInnerHTML={{ __html: s.b }} />
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: s.d }} />
                </div>
              ))}
            </div>
          </section>

          {/* ── HOW TO REACH ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2708\uFE0F"} Getting to Nice</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Nice C{"\u00F4"}te d&apos;Azur Airport (NCE) is France&apos;s third-busiest airport, with direct flights from most European capitals and several long-haul routes. The airport is connected to the city centre by <strong className="font-medium">Tram Line 2</strong> &mdash; {"\u20AC"}1.70, 8&ndash;12 minutes to the centre.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "\u2708\uFE0F",
                  t: "Flight to NCE (recommended)",
                  d: "Nice C\u00F4te d\u2019Azur Airport (NCE) has direct connections from London (2 hrs), Paris (1.5 hrs), Amsterdam (2 hrs), and many European hubs. Low-cost carriers like easyJet, Ryanair, and Transavia serve NCE with competitive fares. From the airport: Tram Line 2 to city centre \u2014 \u20AC1.70, runs every 6 minutes, 8\u201312 minutes to Jean M\u00E9decin or Vieux-Nice\u2013Garibaldi. A taxi costs \u20AC25\u201335.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "\uD83D\uDE84",
                  t: "TGV from Paris",
                  d: "Paris Gare de Lyon \u2192 Nice-Ville: 5 hrs 30 min by TGV. Book on SNCF Connect 6\u20138 weeks ahead for fares from \u20AC35\u2013\u20AC55. The last hour follows the coast from Toulon to Nice with stunning sea views \u2014 sit on the left side. Nice-Ville station is central, 10 minutes\u2019 walk from the old town.",
                  b: "Scenic route",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "\uD83D\uDE8C",
                  t: "Bus from other Riviera towns",
                  d: "FlixBus and regional Zou! buses connect Nice to Cannes (\u20AC5, 1 hr), Monaco (\u20AC1.50, 45 min), Marseille (\u20AC10\u2013\u20AC20, 2.5 hrs), and Aix-en-Provence (\u20AC15, 3 hrs). The Lignes d\u2019Azur bus network covers the entire Riviera for \u20AC1.50 per ride.",
                  b: "Budget option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "\uD83D\uDE97",
                  t: "Drive from Italy or Provence",
                  d: "Nice is 30 minutes from the Italian border (Ventimiglia), 2 hrs from Genoa, and 2.5 hrs from Marseille via the A8 autoroute. Parking in Nice is expensive (\u20AC20\u201340/day) and the old town is pedestrian-only. If you must drive, park at the P+Tram lots on the outskirts and take the tram in.",
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

          {/* ── 3-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} 3-Day Nice Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary covers Nice&apos;s highlights plus a Monaco day trip and a visit to the medieval village of {"\u00C8"}ze &mdash; the three essential experiences on the C{"\u00F4"}te d&apos;Azur.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title={"Promenade des Anglais \u00B7 Vieux-Nice \u00B7 Cours Saleya \u00B7 Castle Hill"}
                cost={"\u20AC45\u201360"}
                items={[
                  "8:00am \u2014 Morning walk along the Promenade des Anglais (free). The 7km seafront promenade is Nice\u2019s spine. Walk east from the airport direction toward the old town. The pebble beach at this hour has locals swimming and doing yoga. The blue chairs along the promenade are iconic and free to sit on.",
                  "9:00am \u2014 Cours Saleya flower market in Vieux-Nice (open Tuesday\u2013Sunday, 6am\u20131pm). The market fills with cut flowers, potted herbs, lavender from the hills, and fresh vegetables. Go at 9am for the full spectacle \u2014 it starts winding down by noon. On Mondays the flowers are replaced by an antiques market.",
                  "10:00am \u2014 Socca from Chez Ren\u00E9 Socca (Rue Miralheti, near the market). Socca is a thin pancake made from chickpea flour, olive oil, and black pepper, cooked in a wood-fired oven, served hot in folded paper. \u20AC3\u20134 per portion. Eat it immediately, standing at the counter \u2014 it deteriorates within minutes.",
                  "11:00am \u2014 Wander Vieux-Nice (Old Town) on foot. The narrow streets are best explored without a map \u2014 Rue de la Boucherie, Rue Droite, Rue du March\u00E9. Baroque churches appear unexpectedly: the Chapelle de la Mis\u00E9ricorde (free, ornate interior) and the Cath\u00E9drale Sainte-R\u00E9parate.",
                  "1:00pm \u2014 Lunch at a Ni\u00E7oise caf\u00E9 in the old town. Pan bagnat (the Nice tuna sandwich in a round bread roll, \u20AC6) or a full salade ni\u00E7oise (\u20AC12\u201315). The real version has canned tuna, hard-boiled egg, anchovies, olives, and raw vegetables \u2014 no green beans.",
                  "3:00pm \u2014 Castle Hill (Colline du Ch\u00E2teau) \u2014 take the free elevator or the lift (\u20AC1) from the eastern end of the Promenade, or walk the stairs. The hilltop park has ruins of a medieval castle demolished by Louis XIV, waterfalls, and the best panoramic view of the Baie des Anges and the old town rooftops. Allow 1 hour.",
                  "5:30pm \u2014 Rauba Capeu viewpoint (east of Castle Hill, at the base by the war memorial) \u2014 the most photographed Nice angle: the full sweep of the Promenade with the Baie des Anges behind it. Best light is late afternoon.",
                  "8:00pm \u2014 Dinner in Vieux-Nice. La Merenda (Rue Raoul Bosio) is famous for traditional Ni\u00E7oise cooking (pissaladi\u00E8re, daube niçoise) but tiny and takes no reservations \u2014 arrive at 7:30pm and wait. Budget option: trattorias on Rue de la Terrasse for \u20AC14\u201318 for a full meal.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Monaco Day Trip by Train"
                cost={"\u20AC50\u201370 (incl. Monaco transport and entry)"}
                items={[
                  "8:30am \u2014 Take the train from Nice-Ville station to Monaco-Monte-Carlo (\u20AC4.40 each way, 25 minutes, trains every 30 minutes). The coastal line clings to cliffs and tunnels \u2014 sit on the right side leaving Nice for sea views.",
                  "9:30am \u2014 Arrive Monaco. Walk to the Casino de Monte-Carlo for exterior photos (free, impressive Belle \u00C9poque architecture, gardens with Ferrari-standard cars). The casino interior requires \u20AC18 entry and smart dress code \u2014 optional.",
                  "11:00am \u2014 Monaco-Ville (the old town on the rock): walk up to the Prince\u2019s Palace for the Changing of the Guard at 11:55am (free, watched from the square), then Palace museum (\u20AC13 if interested in royal apartments).",
                  "12:30pm \u2014 Lunch in Monaco. Budget: sandwiches from U Cavagn\u00EBtu market stall (\u20AC6\u20139). Mid option: Caf\u00E9 de Paris terrace (\u20AC20\u201325 for a Mon\u00E9gasque croque-monsieur with a view of the casino).",
                  "2:00pm \u2014 Oc\u00E9anographic Museum (\u20AC20) \u2014 founded by Prince Albert I in 1910, one of the finest marine museums in the world. Live sharks in the tank directly beneath your feet. The rooftop terrace has 360\u00B0 views over Monaco.",
                  "4:00pm \u2014 Walk the Monaco Grand Prix circuit on foot \u2014 the full F1 street circuit is accessible as public roads. The hairpin at Casino Square, the tunnel section, and the swimming pool chicane are all walkable and free.",
                  "5:30pm \u2014 Train back to Nice. Arrive by 6pm.",
                  "8:00pm \u2014 Dinner in Nice: Rue Mass\u00E9na area or try the more local Rue Bonaparte for \u20AC15\u201320 pasta or a formule menu (starter + main + glass of wine).",
                ]}
              />
              <DayCard
                day="Day 3"
                title={"\u00C8ze Village \u00B7 Beaulieu-sur-Mer \u00B7 Museums"}
                cost={"\u20AC40\u201365"}
                items={[
                  "9:00am \u2014 Bus 82 from Nice (Jean M\u00E9decin stop) to \u00C8ze-le-Village (\u20AC1.50, 25 minutes). The bus climbs the Grande Corniche mountain road \u2014 the views of the coast grow more dramatic with every turn.",
                  "9:45am \u2014 \u00C8ze perched village: a medieval village built on a cliff 427 metres above the sea. The car-free village of pale stone houses is vertigo-inducing in the best way. Walk up to the Jardin Exotique at the summit (\u20AC7) \u2014 cactus garden with the Mediterranean directly below you, Monaco visible to the east.",
                  "10:30am \u2014 Fragonard perfume factory (free guided tour, 20 minutes) \u2014 one of the world\u2019s finest perfumeries has been operating in \u00C8ze since 1926. The tour explains the extraction of Grasse flowers into essence. No obligation to buy.",
                  "12:00pm \u2014 Lunch in \u00C8ze with sea views. Nid d\u2019Aigle (Eagle\u2019s Nest restaurant) has the most dramatic terrace \u2014 \u20AC20\u201330 for a meal with one of the best views on the Riviera.",
                  "2:00pm \u2014 Bus or walk down to \u00C8ze-sur-Mer (the coastal village below). Train west to Nice and stop at Beaulieu-sur-Mer (\u20AC2.70, 5 minutes) \u2014 a quieter bay with a proper beach and clear water.",
                  "3:30pm \u2014 Swim at Beaulieu-sur-Mer beach (free public section) or walk the Promenade Maurice Rouvier coastal path along the cliff to Saint-Jean-Cap-Ferrat (45 minutes, spectacular).",
                  "5:00pm \u2014 Back in Nice: visit the Mus\u00E9e Matisse (\u20AC10, Cimiez neighbourhood) or the Marc Chagall National Museum (\u20AC8, Avenue Dr M\u00E9nard) \u2014 both are world-class and each takes 1\u20131.5 hours.",
                  "8:00pm \u2014 Final evening in Vieux-Nice. Ap\u00E9ritif of a pastis (\u20AC4\u20135) in a square, then dinner at La Rossettisserie (Rue Rossetti) for spit-roasted meats with ratatouille, \u20AC15\u201322.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Nice" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFDB\uFE0F"} Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sights in order of priority. Nice&apos;s museums use a single pass system &mdash; the French Riviera Pass ({"\u20AC"}29/1 day, {"\u20AC"}49/3 days) covers many of these plus public transport.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Promenade des Anglais",
                  e: "Free",
                  d: "The 7km seafront boulevard is Nice\u2019s defining landmark \u2014 built by the English colony in the 1820s, it runs from the airport to Castle Hill. The iconic blue chairs face the Mediterranean. Best at sunrise before the crowds, or at sunset when the light turns the fa\u00E7ades golden.",
                  t: "Must see \u00B7 1\u20132 hrs",
                },
                {
                  n: "Vieux-Nice (Old Town)",
                  e: "Free",
                  d: "A labyrinth of Baroque ochre-and-terracotta buildings, narrow alleyways, hidden churches, and the daily Cours Saleya market. The real heart of Nice \u2014 socca vendors, artisan gelato, and the Cath\u00E9drale Sainte-R\u00E9parate. Budget at least half a day here.",
                  t: "Must see \u00B7 3\u20134 hrs",
                },
                {
                  n: "Castle Hill (Colline du Ch\u00E2teau)",
                  e: "Free (lift \u20AC1)",
                  d: "The hilltop park above the old town with the best panoramic view of the Baie des Anges, the Promenade, and the old town rooftops. Ruins of a medieval castle (demolished 1706 by Louis XIV), a waterfall, and shade trees. Take the free elevator or climb the stairs.",
                  t: "Must see \u00B7 1 hr",
                },
                {
                  n: "Cours Saleya Flower Market",
                  e: "Free to browse",
                  d: "The daily market (Tuesday\u2013Sunday, 6am\u20131pm) fills a long square with cut flowers, lavender, herbs, olives, and produce from the Nice hinterland. Mondays become an antiques market. Go at 9am for the full display. One of the best open-air markets in southern France.",
                  t: "Morning \u00B7 1 hr",
                },
                {
                  n: "Mus\u00E9e Matisse",
                  e: "\u20AC10",
                  d: "Housed in a 17th-century Genoese villa in Cimiez, the permanent collection covers Matisse\u2019s entire career: 68 paintings, 236 drawings, and the original paper cut-outs. The olive-tree garden outside is lovely. Matisse lived and worked in Nice for 37 years.",
                  t: "Art lovers \u00B7 1.5 hrs",
                },
                {
                  n: "Marc Chagall National Museum",
                  e: "\u20AC8",
                  d: "17 large-format Biblical Message paintings in a space Chagall designed himself. The stained glass windows in the concert hall are extraordinary \u2014 blues and reds filtering Mediterranean light. One of the finest single-artist museums in France.",
                  t: "Must see \u00B7 1\u20131.5 hrs",
                },
                {
                  n: "Monaco (day trip)",
                  e: "Train \u20AC4.40 each way",
                  d: "The principality is 25 minutes from Nice by train. Casino de Monte-Carlo exterior (free), Prince\u2019s Palace and Changing of the Guard (free), Oc\u00E9anographic Museum (\u20AC20), and the F1 Grand Prix circuit on public roads. A full day trip for \u20AC15\u201325 total if you pack lunch.",
                  t: "Day trip \u00B7 Full day",
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
            title={"Nice \u2014 Riviera, Old Town & the Azure Coast"}
            subtitle={"The C\u00F4te d\u2019Azur\u2019s capital in its best light."}
            spots={[
              {
                name: "Promenade des Anglais",
                query: "promenade des anglais nice france mediterranean coast blue chairs",
                desc: "The iconic 7km seafront boulevard with its blue chairs facing the turquoise Mediterranean.",
              },
              {
                name: "Vieux-Nice Old Town",
                query: "vieux nice old town baroque ochre buildings narrow streets france",
                desc: "Ochre-and-terracotta Baroque alleyways, the daily flower market, and the heart of Ni\u00E7oise street food.",
              },
              {
                name: "Castle Hill Panorama",
                query: "castle hill nice france panorama baie des anges coast view",
                desc: "The panoramic view from Colline du Ch\u00E2teau \u2014 the Baie des Anges, the Promenade, and the old town rooftops.",
              },
              {
                name: "\u00C8ze Village",
                query: "eze village french riviera medieval perched cliff mediterranean france",
                desc: "The medieval perched village at 427 metres with vertiginous views over the C\u00F4te d\u2019Azur.",
              },
              {
                name: "Monaco Harbour",
                query: "monaco harbour monte carlo yachts port hercule mediterranean",
                desc: "Port Hercule lined with superyachts, the Casino in the background, 25 minutes from Nice by train.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Nice is surprisingly affordable for the French Riviera. The biggest cost is accommodation &mdash; eating and transport are cheap if you use the tram, eat socca, and pick restaurants in Vieux-Nice over the Promenade tourist traps.
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
                    ["\uD83C\uDFE8 Accommodation", "\u20AC25\u201345", "\u20AC100\u2013180", "\u20AC300\u2013800"],
                    ["\uD83C\uDF7D Food", "\u20AC15\u201320", "\u20AC35\u201360", "\u20AC80\u2013200"],
                    ["\uD83D\uDE8B Transport", "\u20AC5\u201310", "\u20AC15\u201325", "\u20AC50\u2013150"],
                    ["\uD83C\uDFAD Activities", "\u20AC10\u201315", "\u20AC25\u201350", "\u20AC100\u2013300"],
                    ["TOTAL (per day)", "\u20AC55\u201390", "\u20AC175\u2013315", "\u20AC530\u20131,450"],
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
                <p className="font-medium text-sm text-green-800 mb-1">{"\uD83D\uDC9A"} Budget ({"\u20AC"}55&ndash;90/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay at Villa Saint-Exup{"\u00E9"}ry hostel ({"\u20AC"}25&ndash;45/night), eat socca and pan bagnat, use the {"\u20AC"}1.70 tram, and focus on free sights like the Promenade, Vieux-Nice, and Castle Hill. Completely doable and very enjoyable.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">{"\uD83C\uDF1F"} Mid-Range ({"\u20AC"}130&ndash;200/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay at a boutique hotel in Vieux-Nice ({"\u20AC"}100&ndash;180/night), visit both museums, dine at restaurants like Les Agaves or La Merenda, and take the French Riviera Pass for transport and museum entries.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">{"\uD83D\uDC8E"} Luxury ({"\u20AC"}400+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Hotel Negresco or La P{"\u00E9"}rouse ({"\u20AC"}300&ndash;900/night), helicopter to Monaco, private beach clubs, Michelin-starred dining, and bespoke perfume at Fragonard in {"\u00C8"}ze.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFE8"} Where to Stay in Nice</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The best areas are Vieux-Nice (old town atmosphere, walking distance to everything), the Promenade des Anglais (seafront, grand hotels), and Cimiez (quieter, near the Matisse Museum). Book early for June&ndash;September.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Hotel Negresco",
                  type: "Iconic palace hotel \u00B7 Promenade des Anglais",
                  price: "From \u20AC400/night",
                  badge: "Most iconic",
                  desc: "The pink dome of this 1913 palace hotel is the symbol of Nice. Each room is uniquely decorated with period antiques. The Negresco is Nice\u2019s grand dame \u2014 a living museum on the Promenade with Le Chantecler restaurant (1 Michelin star) and a wine list of 15,000 bottles.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hotel La P\u00E9rouse",
                  type: "Boutique luxury \u00B7 Castle Hill cliffside",
                  price: "From \u20AC250/night",
                  badge: "Best views",
                  desc: "Perched directly on Castle Hill with a private pool and terraced sea views. The location is extraordinary \u2014 between the old town and the castle, with the Mediterranean directly below. Intimate, quiet, and far more personal than the grand Promenade hotels.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Villa Saint-Exup\u00E9ry Beach",
                  type: "Hostel \u00B7 Near the beach",
                  price: "From \u20AC25/night (dorm)",
                  badge: "Best budget",
                  desc: "One of Europe\u2019s best-rated hostels, with clean dorms, a social atmosphere, free breakfast, and a great location near the beach and old town. Private rooms also available from \u20AC70. The go-to for solo travellers and backpackers in Nice.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Hotel Ozz",
                  type: "Budget boutique \u00B7 Jean M\u00E9decin",
                  price: "From \u20AC60/night",
                  badge: "Best value",
                  desc: "A modern, clean budget hotel on Nice\u2019s main shopping street. Walking distance to the tram, the old town, and the beach. Simple rooms but well-maintained, with a shared terrace. Popular with couples and solo travellers who want a private room without the hostel price tag.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDF7D\uFE0F"} Where to Eat in Nice</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Ni{"\u00E7"}oise cuisine is its own distinct tradition &mdash; closer to Italian than Parisian, with olive oil instead of butter, chickpea flour instead of wheat, and the Mediterranean on every plate. These are the places that matter.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Chez Ren\u00E9 Socca",
                  t: "Street food \u00B7 Vieux-Nice (Rue Miralheti)",
                  d: "The definitive socca experience in Nice. Thin chickpea pancakes cooked in a wood-fired oven, served hot in paper with black pepper. \u20AC3\u20134 per portion. Also serves pissaladi\u00E8re (caramelised onion tart), farcis ni\u00E7ois (stuffed vegetables), and petits farcis. No reservations \u2014 eat standing at the counter.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "La Merenda",
                  t: "Traditional Ni\u00E7oise \u00B7 Rue Raoul Bosio",
                  d: "Famously excellent for classic Ni\u00E7oise cooking: pissaladi\u00E8re, daube, pasta au pistou, and socca. Tiny restaurant with 26 seats. No phone, no credit cards, no website \u2014 arrive at 7:30pm and wait. The chef\u2019s simplified market menu changes daily. Around \u20AC35\u201345/person.",
                  b: "Best traditional",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Les Agaves",
                  t: "Modern Ni\u00E7oise \u00B7 Rue des Ponchettes",
                  d: "Excellent modern interpretations of Ni\u00E7oise cooking at fair prices. Two-course lunch menu at \u20AC22\u201328. The terrace overlooks the Cours Saleya market square. Popular with locals \u2014 book a day ahead for dinner. Better value than the tourist restaurants on the Promenade.",
                  b: "Best value dining",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "La Rossettisserie",
                  t: "Rotisserie \u00B7 Rue Rossetti, Vieux-Nice",
                  d: "Spit-roasted meats (lamb, chicken, suckling pig) with ratatouille and Proven\u00E7al sides. \u20AC15\u201322 for a generous plate. Casual, unpretentious, and popular with the local after-work crowd. The outdoor seating in the Rossetti square is one of the best dinner spots in the old town.",
                  b: "Casual favourite",
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
            destination="Nice French Riviera"
            hotels={[
              {
                name: "Hotel Negresco",
                type: "Iconic palace hotel \u00B7 Promenade des Anglais",
                price: "From \u20AC400/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/fr/le-negresco.html?aid=2820480",
              },
              {
                name: "Hotel La P\u00E9rouse",
                type: "Boutique luxury \u00B7 Castle Hill cliffside",
                price: "From \u20AC250/night",
                rating: "5",
                badge: "Best views",
                url: "https://www.booking.com/hotel/fr/la-perouse.html?aid=2820480",
              },
              {
                name: "Hotel Ozz",
                type: "Budget boutique \u00B7 Jean M\u00E9decin",
                price: "From \u20AC60/night",
                rating: "4",
                badge: "Best value",
                url: "https://www.booking.com/hotel/fr/ozz-nice.html?aid=2820480",
              },
              {
                name: "Villa Saint-Exup\u00E9ry Beach",
                type: "Top-rated hostel \u00B7 Near the beach",
                price: "From \u20AC25/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/fr/villa-saint-exupery-beach.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Monaco, \u00C8ze &amp; Monte-Carlo Day Tour",
                duration: "8 hrs",
                price: "From \u20AC65/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=nice+monaco+eze+day+trip&partner_id=PSZA5UI",
              },
              {
                name: "Nice Old Town &amp; Food Tasting Walk",
                duration: "3 hrs",
                price: "From \u20AC45/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=nice+old+town+food+tour&partner_id=PSZA5UI",
              },
              {
                name: "French Riviera Boat Cruise",
                duration: "2 hrs",
                price: "From \u20AC30/person",
                url: "https://www.getyourguide.com/s/?q=nice+french+riviera+boat+cruise&partner_id=PSZA5UI",
              },
              {
                name: "Cannes, Antibes &amp; Saint-Paul-de-Vence Tour",
                duration: "7 hrs",
                price: "From \u20AC55/person",
                url: "https://www.getyourguide.com/s/?q=nice+cannes+antibes+day+trip&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid in Nice</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "\uD83E\uDEA8",
                  title: "Expecting Sand Beaches",
                  desc: "Nice\u2019s beaches are pebble, not sand. This surprises first-time visitors who arrive in flip-flops and can\u2019t walk to the water. Pack or rent beach shoes (\u20AC5\u20138 at beachside shops). The water is crystal clear and the pebbles are smoothed, but barefoot access is genuinely uncomfortable. Sand beaches exist at Villefranche-sur-Mer (15 min by train) and Antibes (25 min).",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "\uD83C\uDFD8\uFE0F",
                  title: "Skipping Vieux-Nice Entirely",
                  desc: "Many visitors spend their time on the Promenade and miss the old town. This is a serious error. Vieux-Nice is one of the finest Baroque old towns in France \u2014 the colour-washed fa\u00E7ades, the labyrinthine alleyways, the Cours Saleya market, and the street food scene are the reason Nice is worth visiting at all. Budget at least half a day here.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "\uD83C\uDF38",
                  title: "Missing the Morning Flower Market",
                  desc: "The Cours Saleya market runs Tuesday to Sunday from 6am to 1pm. By noon it\u2019s winding down \u2014 vendors packing up, fewer flowers, less atmosphere. Go at 9am for the full experience: flower stalls in full display, socca vendors firing up, locals shopping for the week. It\u2019s free to browse and one of the best markets in southern France.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "\uD83C\uDFB0",
                  title: "Overpaying for Monaco",
                  desc: "Monaco is largely free to experience \u2014 the architecture, the palace, the harbour of superyachts, the Grand Prix circuit, the Oc\u00E9anographic Museum rooftop view. The casino interior charges \u20AC18 entry and requires smart dress. A day trip can be done for \u20AC15\u201325 total including the train. Don\u2019t let Monaco become a money drain when the best parts are free.",
                  color: "bg-pink-50 border-pink-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips for Nice</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "\uD83C\uDFAB",
                  title: "French Riviera Pass covers buses and museums",
                  desc: "The French Riviera Pass (\u20AC29/1 day, \u20AC49/3 days, \u20AC69/7 days) includes unlimited travel on the Nice bus network, the tramway, and entrance to the Matisse Museum and Marc Chagall Museum among others. If you\u2019re using public transport to visit \u00C8ze, Antibes, and Monaco, the 3-day pass pays for itself quickly.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "\uD83C\uDF55",
                  title: "Socca is Nice\u2019s great street food \u2014 understand it first",
                  desc: "Socca is made from chickpea flour, water, olive oil, and black pepper \u2014 mixed to a liquid batter, poured into enormous copper pans, cooked in a wood-fired oven at 300\u00B0C for 5\u20137 minutes, served folded in paper while still hot. Crispy at the edges, soft and custardy in the centre. Chez Ren\u00E9 Socca near the market is the go-to. Eat it fresh \u2014 it deteriorates within minutes. \u20AC3 per portion.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "\uD83C\uDFD6\uFE0F",
                  title: "The best beaches are not on the main Promenade",
                  desc: "The central Promenade beaches are fine but crowded in summer. Castel Plage (eastern end, below Castle Hill) is notably quieter. Better: take the train 15 minutes to Villefranche-sur-Mer for a horseshoe bay with calmer, cleaner water. Beaulieu-sur-Mer (10 min by train) is another excellent alternative \u2014 protected bay, warm water, pleasant promenade.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "\uD83D\uDCC5",
                  title: "Late September is the optimal time to visit",
                  desc: "Mid-July through August: beaches packed, prices peak. Late September: sea temperature still 24\u00B0C (warmer than peak summer due to thermal lag), hotel prices down 40\u201350%, crowds dropped sharply. The light turns golden and theatrical in October. If you have flexibility, September 20\u2013October 10 is the best window on the Riviera.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "\uD83D\uDE8B",
                  title: "The \u20AC1.70 tram is better than taxis",
                  desc: "Tram Line 1 runs through the city centre (Jean M\u00E9decin, Vieux-Nice, Garibaldi). Tram Line 2 connects the airport to the city in 8\u201312 minutes for \u20AC1.70. Taxis from the airport cost \u20AC25\u201335 for the same journey. Buy a 10-trip card (\u20AC10) for the best value. The tram covers almost everything you need.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "\uD83C\uDDEE\uD83C\uDDF9",
                  title: "Take the coastal train east \u2014 it\u2019s extraordinary",
                  desc: "The Nice\u2013Monaco\u2013Ventimiglia coastal rail line is one of the most scenic train rides in Europe. The track clings to sea cliffs, dives through tunnels, and emerges to views of the Mediterranean 50 metres below. Sit on the right side leaving Nice. A return ticket to Monaco is \u20AC4.40 \u2014 one of the best value train journeys in France.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Nice" />

          {/* Combine With */}
          <CombineWith currentSlug="nice-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Nice worth visiting compared to other Riviera towns?",
                  a: "Yes \u2014 and not just as a beach destination. Nice is the only proper city on the Riviera with real cultural infrastructure: world-class museums (Matisse, Chagall), a genuinely excellent old town with authentic street food, a functioning daily market, and diverse dining at all price points. Cannes, Monaco, and Saint-Tropez are beautiful but resort-focused. Use Nice as your base for 3 days and take day trips to those towns.",
                },
                {
                  q: "What exactly is socca and where should I try it?",
                  a: "Socca is Nice\u2019s iconic street food \u2014 a thin, unleavened pancake made from chickpea flour, olive oil, water, and black pepper, cooked at very high heat in a wood-fired oven in large copper pans. It has crispy, slightly charred edges and a soft, custardy centre with a faintly nutty flavour. Chez Ren\u00E9 Socca near the Cours Saleya market is the most recommended spot. Cost: \u20AC3\u20134 a portion. Eat it immediately \u2014 it does not keep.",
                },
                {
                  q: "How do I get from Nice Airport to the city centre?",
                  a: "Tram Line 2 runs directly from both airport terminals to the city centre (Jean M\u00E9decin or Vieux-Nice\u2013Garibaldi stop). Cost: \u20AC1.70, journey time: 8\u201312 minutes depending on your stop. A taxi to the city centre costs \u20AC25\u201335. The tram is clearly the best option \u2014 frequent, fast, cheap, and drops you in the centre.",
                },
                {
                  q: "What is the best day trip from Nice?",
                  a: "Monaco by train is the easiest and most practical \u2014 25 minutes each way, \u20AC4.40 return, a full day of walking, museums, and the principality\u2019s unique character. \u00C8ze village is more scenic \u2014 the medieval cliff village at 427m with a perfume factory and spectacular coastal views. Antibes is the best for combining beach, old town, and the Picasso Museum. Cannes (30 min, \u20AC6 return) for the Croisette glamour. All are doable in a single day from Nice.",
                },
                {
                  q: "Can I swim in Nice in October?",
                  a: "Yes. The Mediterranean has significant thermal mass and stays warm well into autumn. Average water temperature in October is 21\u201323\u00B0C \u2014 comfortable for swimming. Late September water temperature is 24\u201325\u00B0C, warmer than many northern European beach destinations in July. November cools noticeably (18\u00B0C). For swimming, May through late October is entirely viable, with July\u2013September being peak warmth.",
                },
                {
                  q: "Do I need a visa for France from India?",
                  a: "Yes \u2014 Indian passport holders need a Schengen visa to visit France. Apply at the French embassy or VFS Global. Fee: \u20AC80. Processing time: 15\u201345 days. You will need a passport valid 3 months beyond your return, bank statements showing at least \u20AC100/day, confirmed hotel bookings, return flights, and travel insurance with minimum \u20AC30,000 medical coverage. Book VFS appointments early \u2014 peak-season slots fill up 3\u20134 weeks out.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Nice trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/paris-5-days", label: "Paris in 5 Days", icon: "\uD83D\uDDD3\uFE0F" },
                { href: "/blog/barcelona-4-days", label: "Barcelona 4 Days", icon: "\u2600\uFE0F" },
                { href: "/blog/rome-4-days", label: "Rome in 4 Days", icon: "\uD83C\uDFDB\uFE0F" },
                { href: "/blog/florence-3-days", label: "Florence 3 Days", icon: "\uD83C\uDFA8" },
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
          <RelatedGuides currentSlug="nice-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Paris in 5 Days &mdash; Complete Guide", href: "/blog/paris-5-days" },
                { label: "Barcelona 4 Days &mdash; Gaudi &amp; Gothic", href: "/blog/barcelona-4-days" },
                { label: "Rome 4 Days &mdash; Colosseum to Trastevere", href: "/blog/rome-4-days" },
                { label: "Lyon 3 Days &mdash; Capital of Gastronomy", href: "/blog/lyon-3-days" },
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
                  <span className="text-xs text-muted">Read {"\u2192"}</span>
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
