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
const MYKONOS_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Mykonos Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "⛴️", label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "4-Day Itinerary" },
  { id: "beaches",    emoji: "🏖️", label: "Beach Guide" },
  { id: "delos",      emoji: "🏛️", label: "Delos Day Trip" },
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
          href: `mailto:?subject=Mykonos 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Mykonos in 4 Days — windmills, Little Venice and Delos ruins&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/mykonos-4-days"
        imageUrl="https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=1200&q=80"
        description="Mykonos in 4 Days: Windmills, Little Venice sunset, Delos UNESCO ruins, Paradise Beach and the best of the Cyclades — complete travel guide with budget breakdown."
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
export default function MykonosClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MYKONOS_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Mykonos" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="mykonos windmills white houses blue doors greece aegean sea"
            fallback="https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=1600&q=80"
            alt="Mykonos windmills and whitewashed houses with blue doors Cyclades Greece"
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
              <span className="text-white/70">Mykonos 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Cyclades Greece
                </span>
                <span className="text-white/60 text-xs">January 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Mykonos in 4 Days:
                <em className="italic text-amber-300"> Windmills, Little Venice &amp; Cycladic Magic</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Windmills turning above whitewashed alleys designed to confuse pirates, Little Venice at golden hour, party beaches with world-class DJs, and pelicans strutting through the town square. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="January 2026" readTime="14 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇬🇷 Cyclades, Greece</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From &euro;80/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Windmills turning above a maze of whitewashed alleys so deliberately confusing they were designed to disorient pirates, Little Venice&apos;s waterfront cafes where waves lap at the tables at golden hour, party beaches with world-class DJs playing from noon to midnight, and pelicans strutting through the town square as if they personally own it &mdash; Mykonos is the Cyclades island where unapologetic glamour meets genuine Cycladic magic.
            </p>
          </blockquote>

          {/* ── WHAT MYKONOS ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Mykonos Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Mykonos is a small island in the Cyclades archipelago &mdash; just 85 square kilometres &mdash; that punches absurdly above its weight. The main town, Chora, is a labyrinth of whitewashed alleys, blue-painted doors, bougainvillea cascading over balconies, and tiny chapels on every corner. The streets were deliberately designed as a maze to confuse the pirates who raided the Aegean for centuries. Today the pirates are gone but the maze works just as well on tourists, and getting lost in it is half the point.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Above the town sit the five famous windmills of Kato Mili &mdash; 16th-century grain mills that are the most photographed structures in the Greek islands. Below them is Little Venice, a row of medieval houses built directly over the water, their colourful balconies practically touching the waves at high tide. The combination of windmills, Little Venice, and a Cycladic sunset is genuinely one of the great visual experiences in the Mediterranean.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              But Mykonos is also the party capital of Greece &mdash; Paradise Beach has been hosting open-air DJ sets since the 1970s, Nammos beach club at Psarou is one of the most expensive beach clubs in Europe, and the nightlife in Chora runs until dawn. The trick to Mykonos is that both versions of the island &mdash; the glamorous party scene and the quiet Cycladic beauty &mdash; coexist perfectly, and four days gives you time to experience both properly.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="JMK" />
              <StatCard icon="🌡️" label="Best Season" value="May–Jun / Sep–Oct" />
              <StatCard icon="⛴️" label="Ferry from Athens" value="3–5 hrs" />
              <StatCard icon="💰" label="Budget From" value="€80/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Mykonos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Jun",
                  i: "☀️",
                  t: "Early Summer &mdash; Best Season",
                  d: "24–28°C, warm enough for swimming, the island is lively but not overwhelmed. Accommodation prices are 30–50% lower than July–August. All beach clubs and restaurants are open. The light is extraordinary for photography. This is the sweet spot.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🌅",
                  t: "Early Autumn &mdash; Equally Excellent",
                  d: "22–26°C, sea temperature still warm from summer, crowds thin dramatically after mid-September. Prices drop. The sunsets are longer and more intense. Many experienced Greece travellers consider this the single best time to visit any Cyclades island.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🔥",
                  t: "Peak Summer &mdash; Crowded &amp; Expensive",
                  d: "30–35°C with strong Meltemi winds. Accommodation prices triple, Paradise Beach is wall-to-wall people, restaurants need advance booking, and ferries sell out. The party scene peaks. Worth it if nightlife is your priority, but expect to pay premium prices for everything.",
                  b: "Peak season &mdash; book early",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Apr",
                  i: "🌧️",
                  t: "Off-Season &mdash; Quiet but Limited",
                  d: "12–18°C, many hotels and restaurants close entirely from November to March. Ferries run less frequently. The island is hauntingly beautiful in winter &mdash; empty whitewashed streets, dramatic seas &mdash; but most tourist infrastructure is shut. Only for those who want solitude.",
                  b: "Very limited",
                  c: "bg-blue-50 border-blue-200",
                },
              ].map((s) => (
                <div key={s.s} className={`rounded-xl p-4 border ${s.c}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.i}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900" dangerouslySetInnerHTML={{ __html: `${s.s} &mdash; ${s.t}` }} />
                      <p className="text-[0.65rem] font-medium text-teal" dangerouslySetInnerHTML={{ __html: s.b }} />
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── HOW TO REACH ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">⛴️ Getting to Mykonos</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Mykonos has its own airport (JMK) with direct flights from Athens and several European cities in summer. The ferry from Athens Piraeus takes 3&ndash;5 hours depending on speed and costs &euro;30&ndash;60 one way.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly from Athens (fastest)",
                  d: "Athens International (ATH) to Mykonos (JMK): 45 minutes, from €40–80 each way. Multiple airlines including Aegean, Olympic Air, and Sky Express. In summer there are also direct flights from London, Paris, Rome, and other European cities. The airport is 4km from Mykonos Town — taxi €15 or bus €2.",
                  b: "Fastest option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "⛴️",
                  t: "High-speed ferry from Piraeus (scenic)",
                  d: "SeaJets or Golden Star Ferries from Athens Piraeus: 2.5–3 hours, €45–65 one way. A genuinely beautiful journey through the Cyclades — the island views on approach are spectacular. Book in advance during July–August as ferries sell out. The ferry port is a 10-minute walk from Mykonos Town.",
                  b: "Best experience",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚢",
                  t: "Conventional ferry from Piraeus (budget)",
                  d: "The slower Blue Star Ferries take 4.5–5.5 hours but cost only €30–40. More space, outdoor deck areas, and a genuinely enjoyable Aegean crossing. The overnight ferry option arrives at dawn — scenic but long.",
                  b: "Budget option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🏝️",
                  t: "Ferry from other islands",
                  d: "Easy connections from Santorini (2–3 hours, €40–60), Paros (45 minutes, €15–25), Naxos (1 hour, €15–25), and Tinos (30 minutes, €10). Mykonos is one of the best-connected islands in the Cyclades for island-hopping.",
                  b: "Island hopping",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Mykonos Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary balances Mykonos Town exploration, the Delos day trip, beach days, and the famous sunset ritual at the windmills.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Mykonos Town (Chora) · Windmills · Little Venice Sunset"
                cost="€60–100"
                items={[
                  "Arrive at JMK airport (taxi to town €15) or by ferry from Athens Piraeus (3–5 hours, €30–60). The ferry port is a 10-minute walk from Mykonos Town centre.",
                  "Check into your accommodation in or near Mykonos Town. Budget: Paraga Beach Hostel (€25–40/night in shoulder season). Mid-range: boutique hotel in Chora (€120–200). Luxury: Cavo Tagoo or Belvedere Hotel (€400–800/night).",
                  "Get gloriously lost in Chora&apos;s labyrinth of whitewashed alleys — the maze was deliberately designed to confuse pirates, and it works just as well on tourists. Every turn reveals a new chapel, a bougainvillea-draped doorway, or a cat asleep on a blue windowsill.",
                  "Walk through Matoyianni Street — the main shopping street of Mykonos Town, lined with boutiques, art galleries, jewellery shops, and gelato stands. The prices here reflect the island&apos;s reputation, but the window shopping is free.",
                  "The five famous windmills at Kato Mili — free to visit, the most photographed spot on the island. These 16th-century grain mills sit on a hill above Little Venice and the town. Arrive 45 minutes before sunset for the best light and a good position.",
                  "Little Venice: the row of medieval houses built directly over the sea, their colourful balconies hanging above the waves. At high tide, water splashes the cafe tables. This is where Mykonos earns its reputation — the combination of windmills above and the Aegean below at sunset is genuinely extraordinary.",
                  "Look for Petros (or one of the other resident pelicans) in Manto Square — they wander freely and are entirely unimpressed by tourists.",
                  "Dinner at a backstreet taverna away from the waterfront (budget €14–25 for a full meal with house wine). The waterfront restaurants are consistently overpriced — walk one block inland and the quality doubles while the price halves.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Delos UNESCO Island Day Trip"
                cost="€45–70"
                items={[
                  "Ferry to Delos from Mykonos Town old port (€20 return, 30 minutes). Boats typically depart at 9am and 10am — check the current schedule and arrive early as tickets can sell out in summer.",
                  "Delos is one of the most important archaeological sites in Greece — the mythological birthplace of Apollo and Artemis. It was the sacred centre of the ancient Greek world and is now a UNESCO World Heritage Site. The island is uninhabited.",
                  "The archaeological site entry fee is €12. A guided audio tour costs €5 and is worth it — the site is vast and the context transforms the experience from interesting ruins to an extraordinary ancient city.",
                  "Key highlights: the Terrace of the Lions (iconic marble lion statues), the House of Dionysus with its remarkable floor mosaics, the ancient theatre, the Sacred Lake, and the Agora of the Competaliasts. Allow 3 hours minimum.",
                  "Bring water and sunscreen — there is essentially no shade on Delos and facilities are minimal. A hat is non-negotiable in summer.",
                  "Return ferry by 3pm (the last boat — do not miss it, there is nowhere to stay on Delos). Afternoon swim at Ornos Beach (free, calm, family-friendly, accessible by bus from Fabrika Square, €1.80).",
                  "Evening: stroll Matoyianni Street as the boutiques light up, then watch the sunset from Little Venice with a €6 Aperol Spritz at one of the waterfront bars.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Paradise Beach · Super Paradise · Beach Club Day"
                cost="€50–100"
                items={[
                  "Bus from Fabrika Square to Paradise Beach (€1.80, runs regularly in summer). Paradise Beach is the original Mykonos party beach — DJs start at noon and the energy peaks between 3pm and 6pm.",
                  "Sun loungers at Paradise Beach cost €15–20 per pair. The beach has been the centre of the Mykonos party scene since the 1970s and the atmosphere is genuinely unique — a blend of international clubbing culture and Aegean beauty.",
                  "Walk around the headland (15 minutes) to Super Paradise Beach — smaller, more sheltered, even more party-oriented but with clearer water. Sun loungers €20–30.",
                  "For luxury: Nammos Beach Club at Psarou Beach is the most famous (and most expensive) beach club in the Cyclades. VIP sunbed from €80, bottle service, celebrity spotting, and DJ sets from mid-afternoon. It is an experience even if you only stay for a drink.",
                  "Late afternoon: return to Mykonos Town for the sunset ritual at the windmills. Arrive 30–45 minutes before sunset — the viewing area fills up fast in summer.",
                  "Dinner options: gyros in the backstreets (€4–6 for the best fast food in Greece) or a proper sit-down mezze meal at a local taverna (€18–30 with wine).",
                  "The nightlife in Mykonos Town starts late — bars from 10pm, clubs from midnight. The bar scene along the Little Venice waterfront and in the narrow alleys of Chora is vibrant and walkable.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Ano Mera Village · Armenistis Lighthouse · Farewell"
                cost="€40–70"
                items={[
                  "Morning bus to Ano Mera (€1.80 from Fabrika Square, 20 minutes) — the only proper village on the island away from the tourist circuit. This is where Mykonos feels genuinely Greek rather than cosmopolitan.",
                  "Visit the Monastery of Panagia Tourliani in the main square — a beautiful 16th-century monastery with an ornate baroque belltower, Cretan-school icons, and a genuinely peaceful atmosphere. Free entry.",
                  "Coffee and bougatsa (custard pastry) at a cafe in the Ano Mera square — real Greek prices, not Mykonos Town prices. This is the Mykonos that existed before the tourists arrived.",
                  "Taxi to Armenistis Lighthouse on the northwest tip of the island (€8–12). The most remote and dramatic viewpoint on Mykonos — the Aegean stretches to the horizon in every direction and very few tourists make it here.",
                  "Return to town. If time allows, swim at Agios Ioannis Beach on the southwest coast — quieter and more scenic than the party beaches, with direct views of Delos across the water.",
                  "Browse Matoyianni Street for souvenirs — handmade Cycladic ceramics, local jewellery, and Greek olive oil products.",
                  "Farewell dinner: a rooftop restaurant above Little Venice, watching the windmills darken against the sunset. Book ahead in summer — Niko&apos;s Taverna on the harbour is a reliable local favourite (€25–40 with wine).",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Mykonos" onPlanTrip={() => setModalOpen(true)} />

          {/* ── BEACH GUIDE ── */}
          <section id="beaches" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏖️ Mykonos Beach Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Mykonos has over 25 beaches ranging from world-famous party strips to wild, empty coves. The south coast beaches are the most developed and sheltered from the Meltemi wind; the north coast is wilder and less commercial.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Paradise Beach",
                  e: "Loungers €15–20/pair",
                  d: "The original Mykonos party beach since the 1970s. DJs from noon, peak energy 3–6pm, international crowd. The beach itself is a wide crescent of golden sand with clear water. Even if you don&apos;t care about the party scene, the atmosphere is worth experiencing. Accessible by bus from Fabrika Square (€1.80).",
                  t: "Party · South coast",
                },
                {
                  n: "Super Paradise Beach",
                  e: "Loungers €20–30/pair",
                  d: "A 15-minute walk from Paradise Beach around the headland. Smaller and more sheltered with exceptionally clear water. Even more party-oriented than Paradise with a famous beach bar. Popular with the LGBTQ+ community. Accessible by water taxi or on foot from Paradise.",
                  t: "Party · South coast",
                },
                {
                  n: "Psarou Beach (Nammos)",
                  e: "Sunbed from €80+",
                  d: "Mykonos&apos;s most glamorous beach — home to Nammos, one of Europe&apos;s most famous (and expensive) beach clubs. VIP table service, rosé by the magnum, celebrity spotting. The beach itself is small and beautiful. Even if you don&apos;t book a VIP sunbed, you can swim here for free and soak in the atmosphere.",
                  t: "Luxury · South coast",
                },
                {
                  n: "Ornos Beach",
                  e: "Free (loungers €10–15)",
                  d: "The best family-friendly beach on Mykonos — calm water, protected bay, good tavernas, and reliable bus connections from town (€1.80). Less scene, more genuine beach holiday. The default recommendation for families and anyone who finds Paradise Beach overwhelming.",
                  t: "Family · South coast",
                },
                {
                  n: "Elia Beach",
                  e: "Loungers €15–20/pair",
                  d: "The longest beach on Mykonos with excellent water clarity. Good taverna for lunch (€22–30). Less crowded than Paradise or Psarou, more spacious, and with a more relaxed vibe. Accessible by bus or water taxi.",
                  t: "Relaxed · South coast",
                },
                {
                  n: "Agios Sostis",
                  e: "Free — no facilities",
                  d: "The locals&apos; beach. No sun loungers, no development, no music — just sand, turquoise water, and a single taverna (Kiki&apos;s) on the hillside above. The most beautiful natural beach on the island for those willing to make the effort. Requires a car or ATV to reach.",
                  t: "Wild · North coast",
                },
                {
                  n: "Fokos Beach",
                  e: "Free — no facilities",
                  d: "A remote, wind-exposed beach on the north coast, reached only by car or ATV on a dirt road. Almost always empty. Dramatic and wild — the Mykonos that existed before the beach clubs. Beloved by locals and in-the-know visitors.",
                  t: "Remote · North coast",
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

          {/* ── DELOS DAY TRIP ── */}
          <section id="delos" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Delos Day Trip Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Delos is an uninhabited island 30 minutes by ferry from Mykonos Town. In ancient Greece it was considered the birthplace of Apollo and Artemis &mdash; one of the most sacred places in the entire ancient world. The archaeological site is a UNESCO World Heritage Site and one of the most important in the Mediterranean.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Ferry &amp; Logistics",
                  e: "€20 return + €12 entry",
                  d: "Ferries depart from Mykonos Town old port at 9am and 10am (check current schedule). Return ferries run until approximately 3pm — miss the last one and you are stranded on an uninhabited island. Buy tickets the day before in summer. Total cost: €20 ferry return + €12 archaeological site entry + €5 optional audio guide.",
                  t: "Essential info",
                },
                {
                  n: "Terrace of the Lions",
                  e: "Included in entry",
                  d: "The iconic row of marble lion statues (originally nine, five survive) guarding the Sacred Lake. Carved in the 7th century BCE from Naxian marble. The originals are in the on-site museum; the outdoor statues are replicas, but the setting is extraordinary.",
                  t: "Must see",
                },
                {
                  n: "House of Dionysus",
                  e: "Included in entry",
                  d: "A wealthy merchant&apos;s house from the 2nd century BCE with remarkably preserved floor mosaics, including the famous mosaic of Dionysus riding a panther. The level of domestic luxury in a 2,200-year-old house is genuinely startling.",
                  t: "Must see",
                },
                {
                  n: "Ancient Theatre &amp; Sacred Lake",
                  e: "Included in entry",
                  d: "The theatre seated 5,500 and still has excellent acoustics. The Sacred Lake (now dry) was where Leto gave birth to Apollo and Artemis according to myth. The surrounding area contains some of the best-preserved ancient residential streets in Greece.",
                  t: "1–2 hrs",
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
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{place.d}</p>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Pro tip:</strong> Go on a weekday morning. Delos receives thousands of visitors a day in summer &mdash; almost all on weekend afternoon ferries. A Tuesday or Wednesday 9am ferry means you&apos;ll have the ancient streets almost to yourself. The site is also cooler and the photography light is better in the morning.
              </p>
            </div>
          </section>

          {/* Gallery */}
          <DestinationGallery
            title="Mykonos &mdash; Windmills, Beaches &amp; Cycladic Light"
            subtitle="The Cyclades island where glamour meets genuine Greek beauty."
            spots={[
              {
                name: "Kato Mili Windmills",
                query: "mykonos windmills kato mili sunset cyclades greece aegean",
                desc: "The five famous windmills above Little Venice &mdash; the most iconic image of Mykonos and the best sunset viewpoint on the island.",
              },
              {
                name: "Little Venice Waterfront",
                query: "little venice mykonos sunset waterfront colourful houses greece",
                desc: "Medieval houses built over the water, their balconies hanging above the Aegean. The heart of Mykonos at golden hour.",
              },
              {
                name: "Mykonos Town Chora Alleys",
                query: "mykonos town chora whitewashed alleys blue doors bougainvillea greece",
                desc: "The labyrinth of whitewashed streets, blue doors, and bougainvillea that makes Chora one of the most photogenic towns in the Mediterranean.",
              },
              {
                name: "Delos Archaeological Site",
                query: "delos archaeological site ruins lions terrace greece cyclades",
                desc: "The UNESCO World Heritage ruins of ancient Delos &mdash; birthplace of Apollo, 30 minutes by ferry from Mykonos.",
              },
              {
                name: "Paradise Beach",
                query: "paradise beach mykonos party beach clubs greece cyclades aegean",
                desc: "The legendary party beach of Mykonos &mdash; DJs, turquoise water, and the energy that has defined the island since the 1970s.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Mykonos is the most expensive Greek island and one of the priciest destinations in the Mediterranean. Prices below are for shoulder season (May&ndash;June, September&ndash;October) &mdash; expect to add 50&ndash;100% in July&ndash;August.
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
                    ["🏨 Accommodation", "€40–70/night", "€130–200/night", "€400–800/night"],
                    ["🍽️ Food (per day)", "€18–28", "€45–65", "€100–200"],
                    ["🚌 Transport", "€5–12/day", "€25–40/day", "€60–200/day"],
                    ["🏛️ Delos (ferry + entry)", "€32", "€45–60 (guided)", "€200+ (private)"],
                    ["🏖️ Beach loungers", "€15–20", "€30–40", "€80–400"],
                    ["🎉 Nightlife", "€10–20", "€30–50", "€100+"],
                    ["TOTAL (per day)", "€80–120", "€180–250", "€500–1000+"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€80&ndash;120/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in hostels or small guesthouses, eat gyros and taverna meals, use the public bus, and enjoy the free beaches and town exploration. Mykonos is expensive by Greek standards but doable on a budget if you avoid the beach clubs and waterfront restaurants.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€180&ndash;250/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique hotel in Chora, ATV rental for beach hopping, good restaurants with wine, organised Delos boat trip, and a beach club afternoon at Psarou. This is the sweet spot for experiencing everything Mykonos offers comfortably.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (€500&ndash;1000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Cavo Tagoo or Bill &amp; Coo with infinity pool, private yacht to Delos, Nammos VIP table, rooftop private dining, helicopter to Santorini. Mykonos at this level is genuinely world-class.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Mykonos</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Mykonos Town (Chora) is the best base for first-time visitors &mdash; walking distance to restaurants, nightlife, the ferry port, and the windmill sunset. Beach areas like Ornos and Platis Gialos suit families. The party beaches (Paradise, Super Paradise) have their own accommodation.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Cavo Tagoo",
                  type: "5-star luxury &middot; Mykonos Town",
                  price: "From €400/night",
                  badge: "Most iconic",
                  desc: "The defining luxury hotel of Mykonos &mdash; carved into the cliff above Mykonos Town with infinity pools, cave-style suites, and views across the Aegean. The Roca Restaurant on the cliff edge is extraordinary. Book months in advance for summer.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Belvedere Hotel",
                  type: "5-star boutique &middot; Mykonos Town",
                  price: "From €350/night",
                  badge: "Best location",
                  desc: "A refined boutique hotel in the heart of Chora with a celebrated restaurant and rooftop bar overlooking the town. Walking distance to everything. The kind of hotel where the staff remember your name.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Ornos / Platis Gialos Hotels",
                  type: "3&ndash;4 star &middot; Beach area",
                  price: "€100–180/night",
                  badge: "Best for families",
                  desc: "Several good mid-range hotels near the calm, family-friendly beaches of the south coast. Regular bus connections to Mykonos Town (€1.80). A good option if you want a quieter base with easy beach access.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Paraga Beach Hostel",
                  type: "Hostel &middot; Near Paradise Beach",
                  price: "From €25/night",
                  badge: "Best budget",
                  desc: "One of the few genuine budget options on Mykonos &mdash; clean dorms and private rooms near Paraga and Paradise Beach. Social atmosphere, communal kitchen, and walking distance to the party beaches. Book early in summer.",
                  color: "border-parchment-2 bg-white",
                },
              ].map((stay) => (
                <div key={stay.name} className={`rounded-xl p-4 border ${stay.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{stay.name}</p>
                      <p className="text-xs text-muted font-light" dangerouslySetInnerHTML={{ __html: stay.type }} />
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs bg-white/80 text-ink px-2.5 py-1 rounded-full border border-white/60">{stay.price}</span>
                      <span className="text-xs bg-gold/15 text-gold-dark px-2 py-0.5 rounded-full font-medium">{stay.badge}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: stay.desc }} />
                </div>
              ))}
            </div>
          </section>

          {/* ── WHERE TO EAT ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Mykonos</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Mykonos dining ranges from €4 gyros in the backstreets to €150 tasting menus at cliff-edge restaurants. The key rule: avoid the waterfront promenade restaurants in Mykonos Town &mdash; walk one block inland for dramatically better food at half the price.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "M-eating",
                  t: "Modern Greek &middot; Mykonos Town",
                  d: "Excellent contemporary Greek cuisine in a stylish Chora setting. The grilled octopus and lamb dishes are outstanding. A cut above the average Mykonos restaurant without the absurd prices of the waterfront. €35&ndash;55 with wine. Book ahead in summer.",
                  b: "Best dining",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Kiki&apos;s Tavern",
                  t: "Grill taverna &middot; Agios Sostis",
                  d: "A legendary no-reservations taverna on the hillside above Agios Sostis beach. No phone, no website, no reservations &mdash; you queue and wait. The grilled meats and fresh salads are among the best on the island, served on a terrace with Aegean views. €20&ndash;30. Worth the wait and the drive.",
                  b: "Iconic",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Niko&apos;s Taverna",
                  t: "Traditional Greek &middot; Mykonos Town harbour",
                  d: "A long-running family taverna on the old harbour. Fresh seafood, traditional Greek dishes, and reliable quality at reasonable (for Mykonos) prices. The harbour-front seating at sunset is lovely. €25&ndash;40 with wine. Popular with locals and returning visitors.",
                  b: "Best value",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Backstreet Gyros",
                  t: "Street food &middot; Chora backstreets",
                  d: "Several small gyros stands in the alleys behind Matoyianni Street serve pork or chicken gyros for €4&ndash;6 &mdash; the best fast food in Greece and a genuine bargain on an otherwise expensive island. Perfect for a late-night post-bar meal.",
                  b: "Budget pick",
                  c: "bg-parchment border-parchment-2",
                },
              ].map((r) => (
                <div key={r.n} className={`rounded-xl p-4 border ${r.c}`}>
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{r.n}</p>
                      <p className="text-xs text-muted font-light" dangerouslySetInnerHTML={{ __html: r.t }} />
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
            destination="Mykonos Greece"
            hotels={[
              {
                name: "Cavo Tagoo Mykonos",
                type: "5-star luxury &middot; Cliff-edge infinity pools",
                price: "From €400/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/gr/cavo-tagoo-mykonos.html?aid=2820480",
              },
              {
                name: "Belvedere Hotel Mykonos",
                type: "5-star boutique &middot; Heart of Chora",
                price: "From €350/night",
                rating: "5",
                badge: "Best location",
                url: "https://www.booking.com/hotel/gr/belvedere-mykonos.html?aid=2820480",
              },
              {
                name: "Poseidon Hotel Suites",
                type: "Mid-range &middot; Mykonos Town",
                price: "From €130/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/gr/poseidon-mykonos.html?aid=2820480",
              },
              {
                name: "Paraga Beach Hostel",
                type: "Hostel &middot; Near Paradise Beach",
                price: "From €25/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/gr/paraga-beach-hostel-mykonos.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Delos &amp; Rhenia Island Boat Trip",
                duration: "6 hrs",
                price: "From €45/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=mykonos+delos+boat+trip&partner_id=PSZA5UI",
              },
              {
                name: "Mykonos Sunset Sailing Cruise",
                duration: "4 hrs",
                price: "From €80/person",
                badge: "Best sunset",
                url: "https://www.getyourguide.com/s/?q=mykonos+sunset+sailing+cruise&partner_id=PSZA5UI",
              },
              {
                name: "Mykonos Town Walking Tour",
                duration: "2 hrs",
                price: "From €30/person",
                url: "https://www.getyourguide.com/s/?q=mykonos+town+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Mykonos Beach Hopping Boat Tour",
                duration: "5 hrs",
                price: "From €55/person",
                url: "https://www.getyourguide.com/s/?q=mykonos+beach+hopping+boat&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Mykonos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Arrive at the windmills 45 minutes before sunset",
                  desc: "The windmills at Kato Mili are the most photographed spot on Mykonos. In summer the viewing area fills up 30\u201340 minutes before the sun touches the horizon. Arrive early, find your spot on the wall, and watch the sky turn orange over Little Venice. It is genuinely spectacular and it\u2019s free.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚌",
                  title: "Use the public bus \u2014 it reaches most beaches",
                  desc: "Mykonos Town\u2019s KTEL bus station at Fabrika Square has routes to Ornos, Agios Ioannis, Paradise, Platis Gialos, Kalafatis, and Ano Mera. Tickets cost \u20AC1.80\u2013\u20AC2.50. For 4 days of beach-hopping, the bus saves \u20AC50\u2013100 compared to daily taxis and is surprisingly reliable.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🏛️",
                  title: "Visit Delos on a weekday morning",
                  desc: "Delos receives thousands of visitors daily in summer \u2014 most on weekend afternoon ferries. A Tuesday or Wednesday 9am trip means the ancient streets almost to yourself. The site is cooler, the photography light is better, and the experience is incomparably more atmospheric.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🎟️",
                  title: "Book beach clubs and tours in advance",
                  desc: "Nammos, Scorpios, and Principote have waiting lists in July\u2013August. The Delos\u2013Rhenia boat trips sell out. Sailing charters and guided tours book up weeks ahead. Lock in your key activities on GetYourGuide before arrival \u2014 it\u2019s cheaper and guarantees access.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🍽️",
                  title: "Eat one block inland from the waterfront",
                  desc: "The restaurants on the Mykonos Town waterfront promenade are tourist traps without exception. Walk one block inland and the food quality doubles while the price halves. Kounelas fish taverna and the backstreet mezze restaurants are where locals and savvy visitors eat.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "💨",
                  title: "Prepare for the Meltemi wind in July\u2013August",
                  desc: "The Meltemi is a strong northerly wind that hits the Cyclades in peak summer. North coast beaches become unusable. South coast beaches (Paradise, Ornos, Psarou) are sheltered. The wind can ground ferries \u2014 build a buffer day into your schedule if island-hopping in August.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Mykonos" />

          {/* Combine With */}
          <CombineWith currentSlug="mykonos-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Mykonos worth visiting for non-party travellers?",
                  a: "Absolutely yes \u2014 especially in May, June, or September. The architecture of Chora is genuinely extraordinary: Cycladic whitewash and blue doors at their most perfect. The Delos day trip is one of the great archaeological experiences in Europe. The northern and eastern beaches (Fokos, Panormos, Agios Sostis) are wild and uncommercialized. The island\u2019s visual beauty \u2014 the light, the windmills, Little Venice at sunset \u2014 is not diminished by the party scene at all.",
                },
                {
                  q: "How do I get to Mykonos from Athens?",
                  a: "Two options. Flying: Athens International (ATH) to Mykonos (JMK) takes 45 minutes; flights from \u20AC40\u201380 each way with Aegean Airlines, Olympic Air, or Sky Express. Ferry: from Piraeus Port in Athens, the high-speed SeaJets or Golden Star Ferries take 2.5\u20133 hours (\u20AC45\u201365 one way). The conventional Blue Star Ferries take 4.5\u20135.5 hours but cost only \u20AC30\u201340. The ferry journey through the Cyclades is genuinely beautiful.",
                },
                {
                  q: "What is Delos and should I visit?",
                  a: "Delos is an uninhabited island 30 minutes by ferry from Mykonos. In ancient Greece it was the mythological birthplace of Apollo and Artemis \u2014 one of the most sacred places in the ancient world. The archaeological site (\u20AC12 entry) is remarkable: the Terrace of the Lions, magnificent floor mosaics, an ancient theatre, and the sense of being in a place abandoned over 2,000 years ago. It is unmissably good and should not be skipped.",
                },
                {
                  q: "What is the best beach on Mykonos?",
                  a: "It depends what you want. For parties: Paradise and Super Paradise (south coast, DJs from noon). For beauty and calm: Agios Sostis (north coast, no sun loungers, no development \u2014 just a taverna and the sea). For glamour: Psarou with Nammos beach club (VIP loungers, celebrity spotting). For families: Ornos and Platis Gialos (protected bays, calm water, good facilities). For remoteness: Fokos (north coast, dirt road access, almost always empty).",
                },
                {
                  q: "How expensive is Mykonos really?",
                  a: "Mykonos is the most expensive Greek island. A cocktail at a beach club is \u20AC18\u201325. A sun lounger pair at Psarou costs \u20AC60\u201380+. Even a basic hotel room costs \u20AC80\u2013100/night in shoulder season. Budget travellers can manage on \u20AC80\u2013120/day with hostels, gyros, and public buses. Mid-range comfort runs \u20AC180\u2013250/day. Luxury starts at \u20AC500/day and has no ceiling. The island is worth it \u2014 but go in with realistic expectations.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Mykonos trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/mykonos-4-days/best-time", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/mykonos-4-days/couples-guide", label: "Couples guide", icon: "💑" },
                { href: "/blog/mykonos-4-days/packing-list", label: "Packing list", icon: "🧳" },
                { href: "/blog/santorini-4-days", label: "Santorini guide", icon: "🏝️" },
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
          <RelatedGuides currentSlug="mykonos-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Greece &amp; Mediterranean Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Santorini in 4 Days &mdash; Caldera &amp; Sunsets", href: "/blog/santorini-4-days" },
                { label: "Athens in 3 Days &mdash; Acropolis &amp; Beyond", href: "/blog/athens-3-days" },
                { label: "Mallorca in 4 Days &mdash; Beaches &amp; Mountains", href: "/blog/mallorca-4-days" },
                { label: "Amalfi Coast in 4 Days &mdash; Coastal Italy", href: "/blog/amalfi-coast-4-days" },
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