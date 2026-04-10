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
const MALLORCA_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Mallorca Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",   emoji: "🏛️", label: "Landmark Guide" },
  { id: "budget",      emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",         emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",    emoji: "❌",  label: "Mistakes to Avoid" },
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
          href: `mailto:?subject=Mallorca 4-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Mallorca in 4 Days — cathedral, tramuntana cliffs and the Caves of Drach&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/mallorca-4-days"
        imageUrl="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&q=80"
        description="Mallorca in 4 Days: Palma Cathedral La Seu, Serra de Tramuntana, Cap de Formentor, Es Trenc beach and the Caves of Drach — complete travel guide with budget breakdown."
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
export default function MallorcaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MALLORCA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Mallorca" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="mallorca palma cathedral la seu mediterranean sea spain balearic islands"
            fallback="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1600&q=80"
            alt="Mallorca Palma Cathedral La Seu overlooking Mediterranean sea Spain"
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
              <span className="text-white/70">Mallorca 4 Days</span>
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
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Mallorca in 4 Days:
                <em className="italic text-amber-300"> Cathedral, Tramuntana &amp; the Caves of Drach</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                A Gothic cathedral rising from the seafront, limestone cliffs 400m above the Mediterranean, sea caves with underground lakes, and a Michelin-starred dining scene. The complete 4-day guide.
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
              <span>🇪🇸 Balearic Islands, Spain</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💶 From €55/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              A Gothic cathedral rising from the seafront like an orange sandcastle, hiking the limestone cliffs of Tramuntana at dawn with the Mediterranean 400 metres below, sea caves only accessible by kayak near Cap de Formentor, and a capital city sophisticated enough to have a Michelin-starred tapas scene — Mallorca is Spain&apos;s most beautiful island, and it rewards those who push beyond the resort belt.
            </p>
          </blockquote>

          {/* ── WHAT MALLORCA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Mallorca Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Mallorca is the largest of Spain&apos;s Balearic Islands — 3,640 square kilometres of coastline, mountains, medieval villages, and an old capital city that punches well above its weight in architecture, food, and culture. It is also, unfortunately, one of Europe&apos;s most-visited summer destinations, which means the package-holiday reputation (Magaluf, Alcúdia party strips, July airport chaos) tends to overshadow the real island.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The real Mallorca is La Seu — one of the largest Gothic cathedrals in the world, positioned directly on the seafront at Palma so its buttresses cast shadows onto the water at dawn. It is the Serra de Tramuntana, a UNESCO World Heritage mountain range running the full northwest coast with ancient terraced stone walls, olive groves, and villages like Deià where Robert Graves spent 50 years writing. It is Valldemossa&apos;s Royal Carthusian Monastery where Chopin composed the Raindrop Prelude in 1838, and the Caves of Drach where an underground lake holds one of the world&apos;s most astonishing concert venues.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              In four days you can cover Palma, one full circuit of the Tramuntana, Cap de Formentor, and the east coast caves — if you have a hire car for at least two of those days. Without a car you are dependent on buses and organised tours, which is slower but still workable from a Palma base.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="PMI Palma" />
              <StatCard icon="🌡️" label="Best Season" value="May–Jun / Sep–Oct" />
              <StatCard icon="🏔️" label="UNESCO Range" value="Tramuntana" />
              <StatCard icon="💶" label="Budget From" value="€55/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Mallorca</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Jun",
                  i: "🌸",
                  t: "Late Spring — Best Season",
                  d: "22–27°C, sea warm enough to swim from late May, crowds minimal outside of Palma, wild flowers still blooming on the Tramuntana, Cap de Formentor road open to private cars. Accommodation 30–40% cheaper than peak. The objectively ideal window.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Early Autumn — Excellent",
                  d: "24–28°C in September, sea still warm from summer, crowds retreating after the school holiday rush. Hiking conditions improve dramatically as the summer heat breaks. October brings dramatic light on the mountains and much quieter beaches.",
                  b: "Highly recommended",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🔥",
                  t: "Peak Summer — Avoid if Possible",
                  d: "Hot (32–38°C), massively crowded, prices double or treble. Cap de Formentor&apos;s cliff road is closed to private cars in high summer — you must take a shuttle bus. Es Trenc beach is packed. Book everything 3+ months ahead if you must travel now.",
                  b: "Not recommended",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Apr",
                  i: "🌧️",
                  t: "Winter — Quiet but Rainy",
                  d: "14–18°C, many coastal restaurants and hotels close, but Palma city is fully operational and beautiful in winter light. The Tramuntana is green from autumn rains. Hiking is excellent November–March. Sea too cold for swimming. Some beaches become inaccessible.",
                  b: "For city / hiking trips",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Mallorca</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Palma de Mallorca Airport (PMI / Son Sant Joan) is 8km east of the city centre. Bus 1 runs every 15 minutes into Palma (€1.55, 20 minutes) — the cheapest and most reliable option. Car hire desks are in the arrivals hall; book ahead in shoulder season for €25–35/day.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Direct flights from major European cities",
                  d: "Palma PMI receives direct flights from London (2.5 hrs), Barcelona (1 hr), Madrid (1.5 hrs), Amsterdam, Paris, Frankfurt, and most major European hubs. Ryanair, Vueling, easyJet and Iberia operate high-frequency routes. Fares from €30–€60 one way outside peak season.",
                  b: "Most common route",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚢",
                  t: "Ferry from Barcelona or Valencia",
                  d: "Baleàlia Ferries and Trasmediterránea run overnight ferries from Barcelona (8 hrs) and Valencia (9 hrs) to Palma. A cabin berth costs €60–€120 one way. A practical option if you want to bring a car to the island — driving is by far the best way to explore.",
                  b: "Car-friendly option",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  i: "🚌",
                  t: "Bus 1 from airport to Palma centre",
                  d: "TIB Bus 1 departs every 15 minutes from the airport terminal to Plaça d&apos;Espanya (city centre hub). Journey time: 20 minutes, fare €1.55. Runs 6am–1am. This is the best option for budget travellers — do not pay the taxi touts.",
                  b: "Best for budget",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  i: "🚗",
                  t: "Car hire at the airport",
                  d: "Essential for exploring Tramuntana, Cap de Formentor, Cala Mondragó, and the east coast. Hire desks from Avis, Europcar, Goldcar, and Sixt are in the arrivals hall. From €25/day with basic insurance in May or October. Manual small cars handle the mountain roads better than automatics.",
                  b: "Recommended for days 2–4",
                  c: "bg-amber-50 border-amber-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Mallorca Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is designed for mid-range independent travellers with a hire car from Day 2 onwards. Budget alternatives are noted within each day. Pre-book the Sóller train and Caves of Drach at least 48 hours ahead.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Palma Old Town — La Seu Cathedral, Arab Baths &amp; La Lonja Dinner"
                cost="€45–65 including accommodation"
                items={[
                  "Arrive at PMI, take Bus 1 (€1.55) to Plaça d&apos;Espanya in Palma city centre. Budget option: check into Hostal Ritzi Palma in the Santa Catalina neighbourhood (doubles from €55/night, excellent location, run by a local family). Mid-range: a boutique hotel in the Old Town Sant Pere quarter (€90–120/night).",
                  "Walk to La Seu Cathedral (Catedral de Mallorca) — the exterior is free to see from the seafront park at any hour, and the jaw-dropping scale (87m nave, the second widest Gothic nave in the world) hits you hardest from the waterfront. The interior costs €8 and includes the Gaudí-designed canopy over the altar. Book ahead online to avoid queues.",
                  "Banys Àrabs (Arab Baths) — the best-preserved Moorish structure in Mallorca, a 10th-century hammam in the La Calatrava neighbourhood. Entry €2.50. The intimate garden courtyard afterwards is one of the quietest and most beautiful spots in Palma.",
                  "Walk Passeig des Born — Palma&apos;s grand promenade, flanked by 19th-century townhouses, galleries, and the Fundació Bartomeu March. Free to walk; duck into the courtyard of the Casal Solleric cultural centre (free entry, contemporary exhibitions).",
                  "Bellver Castle — circular Gothic fortress on a pine-forested hill 3km from the city centre, with panoramic 360° views of the bay. Entry €4. Take bus 46 or a short taxi (€7–8). Particularly beautiful in late afternoon light.",
                  "Dinner in La Lonja neighbourhood — Palma&apos;s most characterful old quarter, 5 minutes walk from the cathedral. Try authentic pa amb oli (grilled bread rubbed with tomato and drizzled with olive oil — the Mallorcan baseline meal) at any pintxos bar. Budget: €14–18. Mid-range: Restaurant La Bóveda on Carrer de la Boteria for fresh Mallorcan seafood (€28–38).",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Serra de Tramuntana — Valldemossa, Deià, Sóller &amp; Port de Sóller Tram"
                cost="€55–85 (hire car + fuel + entries)"
                items={[
                  "Pick up your hire car from a Palma office or the airport (€25–35/day). Drive the MA-10 mountain road northwest — this is one of the most spectacular driving roads in Europe, following the Tramuntana ridge with the Mediterranean 400 metres below on your left.",
                  "First stop: Valldemossa (40 mins from Palma). The Royal Carthusian Monastery (Reial Cartoixa) is where Frédéric Chopin and George Sand wintered in 1838–39. Entry €9.50, includes the monk&apos;s cell where Chopin composed the Raindrop Prelude. The monastery is authentic and beautifully preserved. Walk the stone alleys of the village afterwards — the stone houses with flowering window boxes are the quintessential Tramuntana image.",
                  "Continue 9km north to Deià — a village of stone houses on a terraced hillside at the edge of an olive grove, beloved by artists, writers, and musicians since Robert Graves settled here in 1929. Walk the Camí de Son Beltran footpath into the village; visit Ca n&apos;Alluny (Graves&apos; house museum, €7) if interested. The village has almost no tourist infrastructure — one bar, one restaurant, complete quiet.",
                  "Continue to the Mirador de Ses Barques viewpoint (pull-off on the MA-10) — the valley of Sóller from above, with the train track visible winding through the olive groves. One of the most photographed views on the island.",
                  "Sóller town for lunch — a prosperous market town in a hidden valley, famous for citrus. Lunch at a pavement café on the Plaça de la Constitució (€16–22 for a full meal). Walk the Art Nouveau main street.",
                  "Take the vintage electric tram from Sóller down to Port de Sóller (€15 return, departs every 30 mins) — a 4.8km narrow-gauge tram through the orange groves to the harbour. Swim at Port de Sóller beach (calm, enclosed bay, excellent), then return tram to Sóller and drive back to Palma via the tunnel (€6 toll) or the scenic MA-10.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Cap de Formentor, Alcúdia Old Town &amp; the Caves of Drach"
                cost="€50–75"
                items={[
                  "Early start: Drive north 1.5 hours to Cap de Formentor. In May–June and September–October you can drive the 20km cape road to the lighthouse yourself; in peak summer you must take the shuttle bus from Port de Pollença (€5 return). The cliff road is one of Europe&apos;s most dramatic drives — sheer limestone drops to the sea, narrow hairpin bends, the lighthouse perched at 200m above the water.",
                  "Swim at Platja de Formentor before the day trippers arrive — a 1km beach of white sand backed by pine forest, with extraordinary clear water. Technically the beach belongs to the Hotel Formentor (€320+/night), but it is accessible to the public. The most beautiful easily-accessible beach in northern Mallorca.",
                  "Drive south to Alcúdia — a perfectly preserved medieval walled town (14th-century walls almost entirely intact) with Roman ruins (Pol·lèntia) just outside the gates. Free to wander the old town; the Roman theatre costs €3. The covered market on Tuesday and Sunday is excellent for local produce.",
                  "Pre-book the Caves of Drach (Coves del Drac) near Porto Cristo for the afternoon — entry €15, includes a 20-minute live classical music concert performed from wooden boats on Lake Martel, one of the largest underground lakes in the world. The caves are vast (1,200m route) and the concert is genuinely atmospheric. Book online; specific time slots fill up, especially in shoulder season.",
                  "Dinner in Porto Cristo or drive back to Palma for a final Old Town meal. Simply Fosh on Carrer de la Missió is Marc Fosh&apos;s more casual Michelin-adjacent restaurant — superb modern Mallorcan cuisine at €28–38 per main. Book ahead.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Cala de Deià, Es Trenc Beach &amp; Palma Farewell Dinner"
                cost="€40–70"
                items={[
                  "Drive back to Deià for an early morning swim at Cala de Deià — the tiny rocky cove at the foot of the village, reached by a steep 15-minute footpath from the road (park at the signposted layby on the MA-10). The cove is small, wild, and surrounded by vertical limestone cliffs. One of the most beautiful swimming spots on the island. Arrive before 10am for near-solitude.",
                  "Drive south 1.5 hours to Es Trenc — Mallorca&apos;s most celebrated natural beach (3km of fine white sand, protected natural park, no development). Park at the Colònia de Sant Jordi end or the Ses Covetes end (€3–5 parking). The water is genuinely Caribbean-blue from late May. The adjacent Salines de Llevant salt flats are home to flamingos visible from the beach path.",
                  "Hire a kayak at Es Trenc beach (€12–15/hour) and paddle east to discover small sea caves cut into the limestone headland — the same geology as Cap de Formentor, but at sea level. The clearest water you will find in Mallorca is here.",
                  "Return hire car at the airport or Palma depot. If flying in the evening: farewell dinner in Palma&apos;s Santa Catalina market neighbourhood. Marc Fosh restaurant on Carrer de la Missió is Mallorca&apos;s most celebrated table — the island&apos;s first and only individual Michelin star, tasting menu €85–115 per person. Book 6–8 weeks ahead. For a more casual farewell: Mercat de l&apos;Olivar food hall, where you can graze on fresh seafood, jamon, and local wine for €18–25.",
                  "Evening stroll through La Calatrava — Palma&apos;s oldest Arab quarter, a 10-minute walk from the cathedral. The medieval street network is intact; the whitewashed houses with Arab-style window screens (gelosies) are unique in Spain. One last look at La Seu lit up from the seafront before departure.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Mallorca" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Mallorca Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in priority order. Entry fees as of early 2026. Pre-booking online is strongly advised for La Seu, Valldemossa, and the Caves of Drach.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "La Seu Cathedral (Catedral de Mallorca)",
                  e: "€8 (interior); exterior free",
                  d: "One of the largest Gothic cathedrals in the world and arguably the most spectacular, positioned directly on the seafront with its buttresses reflected in the sea. The interior nave is 87m long and 44m wide — the second widest Gothic nave on earth. Gaudí redesigned the interior lighting and altar canopy between 1904–1914. Visit at dawn from the seafront park for the best light. Interior book-ahead available online.",
                  t: "Must see · 1–1.5 hrs",
                },
                {
                  n: "Serra de Tramuntana UNESCO Drive (MA-10)",
                  e: "Free (road); individual sites vary",
                  d: "The 90km mountain road from Andratx to Pollença follows the northwest spine of the island, designated a UNESCO World Heritage Cultural Landscape in 2011. The dry-stone wall terracing system, 4,000 years old, covers entire mountainsides and is the defining visual of Mallorca. The best 40km section is Valldemossa → Deià → Sóller. Do this in a hire car, not a coach tour.",
                  t: "Full day · Essential",
                },
                {
                  n: "Valldemossa Royal Carthusian Monastery",
                  e: "€9.50",
                  d: "The monastery where Chopin and George Sand wintered in 1838–39 is preserved as both a religious site and a cultural monument. The monk&apos;s cell (no. 4) where Chopin composed is intact with his piano and manuscripts. The monastery garden, the neoclassical church, and the village below are all beautiful. Busiest 10am–12pm — arrive at opening (9:30am) or after 2pm.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Cap de Formentor Lighthouse",
                  e: "Free (access road €5 parking in peak)",
                  d: "The 20km cape road from Port de Pollença to the lighthouse at the island&apos;s northern tip is the most dramatic drive in Mallorca — sheer 400m cliffs, multiple sea viewpoints, the Mirador del Mal Pas (the best single viewpoint on the island), and the lighthouse at the end perched above churning sea. Closed to private cars July–August (shuttle bus only). Essential.",
                  t: "Must drive · Half day",
                },
                {
                  n: "Caves of Drach (Coves del Drac)",
                  e: "€15 (timed entry, concert included)",
                  d: "The most visited natural attraction in Mallorca — 1,200m of underground caves with extraordinary stalactite formations, ending at Lake Martel (one of the world&apos;s largest underground lakes, 177m long) where a 20-minute classical music concert is performed from wooden boats. Genuinely impressive. Pre-book specific time slots at covesdrach.com — can sell out 2+ weeks ahead in May, June, September.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Alcúdia Medieval Walled Town",
                  e: "Free (town walls); Roman ruins €3",
                  d: "The 14th-century defensive walls of Alcúdia are among the best-preserved in Mallorca — the full circuit walk takes 30 minutes and passes watchtowers, the San Jaume gate, and the Roman ruins of Pol·lèntia just outside the walls. Inside: narrow medieval streets, the Sant Jaume church, and a covered market on Tuesdays and Sundays. Significantly less visited than Palma and genuinely lovely.",
                  t: "Half day · Underrated",
                },
                {
                  n: "Port de Sóller Vintage Tram",
                  e: "€15 return (tram only)",
                  d: "The narrow-gauge electric tram connecting Sóller village to Port de Sóller has been running since 1913. The 4.8km journey through orange and lemon groves, past old farmhouses, takes 30 minutes each way. It is a genuinely charming piece of working heritage — book in advance via trendesoller.com. Combine with the vintage wooden train from Palma to Sóller (€22 return) for a full heritage railway day.",
                  t: "Highly recommended · 1 hr",
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
            title="Mallorca — Cathedral, Mountains &amp; Sea"
            subtitle="Spain&apos;s most beautiful island, beyond the resort belt."
            spots={[
              {
                name: "La Seu Cathedral Palma",
                query: "palma cathedral la seu mallorca spain gothic seafront",
                desc: "La Seu Cathedral on the Palma waterfront — one of the largest Gothic cathedrals in the world, positioned directly on the Mediterranean.",
              },
              {
                name: "Serra de Tramuntana Mountains",
                query: "serra de tramuntana mallorca mountains unesco landscape spain",
                desc: "The limestone ridges of the UNESCO Tramuntana — ancient stone-walled terraces, olive groves, and 400m cliffs above the sea.",
              },
              {
                name: "Cap de Formentor Cliffs",
                query: "cap de formentor lighthouse mallorca cliffs mediterranean spain",
                desc: "The Cap de Formentor lighthouse at the tip of Mallorca&apos;s most dramatic peninsula — 400m above churning turquoise sea.",
              },
              {
                name: "Valldemossa Village",
                query: "valldemossa village mallorca stone houses mountains spain",
                desc: "Valldemossa&apos;s stone houses with flowering window boxes — the Tramuntana village where Chopin composed in the Royal Carthusian Monastery.",
              },
              {
                name: "Caves of Drach Underground Lake",
                query: "caves drach mallorca underground lake stalactites spain",
                desc: "Lake Martel inside the Caves of Drach — one of the world&apos;s largest underground lakes, venue for an extraordinary boat concert.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Mallorca in May or September is genuinely affordable — a budget traveller can do four days well for €55–75/day. The main cost variables are accommodation (hostel dorm vs. boutique hotel) and whether you hire a car. A car is not essential for Day 1 in Palma but is effectively essential for Days 2–4.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Tier</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (4 nights)", "€80–120 (hostel)", "€360–480 (3-star)", "€960–1,400 (boutique)"],
                    ["🚗 Transport (hire car 3 days + fuel)", "€15–25 (buses)", "€100–130 (car hire)", "€200–300 (private)"],
                    ["🍽️ Food (4 days)", "€48–72 (markets)", "€140–200 (restaurants)", "€360–520 (Michelin)"],
                    ["🏛️ Entry fees & activities", "€40–55", "€80–120", "€200–400"],
                    ["TOTAL (per person, 4 days)", "€183–272", "€680–930", "€1,720–2,620"],
                    ["Daily average", "€46–68/day", "€170–232/day", "€430–655/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€55–70/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostal Ritzi Palma or similar (€20–28 dorm), Mercat de l&apos;Olivar for meals, Bus 1 and TIB buses, skip hire car or share one with other travellers. Entirely feasible in shoulder season.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€120–160/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">3-star hotel in Old Town or Sant Pere (€90–110/night), hire car for Days 2–4 (€25–35/day), restaurant lunches and dinners. This is the sweet spot for a proper Mallorca trip.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (€300–650/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Hotel Formentor (from €320/night), Gran Hotel Son Net in Puigpunyent (from €280/night), private chauffeured car, Marc Fosh tasting menu. Mallorca luxury is genuinely world-class.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Mallorca</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              For a 4-day trip, Palma city is the ideal base for Days 1 and 4 (walkable to all Old Town sights). For days 2–3, consider staying in the Tramuntana (Deià, Valldemossa, or Sóller) to be closer to the mountains and have the roads to yourself in the morning.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Hotel Formentor",
                  type: "Luxury resort · Cap de Formentor peninsula",
                  price: "From €320/night",
                  badge: "Most iconic",
                  desc: "The grande dame of Mallorca luxury, open since 1929. Perched above its own private beach at the tip of the Formentor peninsula, with pine forests, a seawater pool, and a terrace restaurant with the most dramatic sunset view on the island. Booked 3+ months ahead in summer.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Gran Hotel Son Net",
                  type: "Luxury finca · Puigpunyent village, Tramuntana",
                  price: "From €280/night",
                  badge: "Best Tramuntana",
                  desc: "A restored 17th-century olive oil mill in the Tramuntana village of Puigpunyent. 30 rooms, outdoor pool, art collection, and a restaurant using produce from the estate. Quieter and more personal than the coastal luxury hotels. 20 minutes from Palma.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Hostal Ritzi Palma",
                  type: "Budget guesthouse · Santa Catalina, Palma",
                  price: "From €55/night (double)",
                  badge: "Best budget",
                  desc: "Small, family-run guesthouse in the Santa Catalina market neighbourhood — Palma&apos;s most interesting residential area, 10 minutes walk to the cathedral. Clean rooms, excellent location, helpful owners who speak English and Spanish. Doubles from €55, much better value than the chain hotels in the tourist zones.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Ca&apos;n Coll (Deià)",
                  type: "Boutique · Deià village, Tramuntana",
                  price: "From €130/night",
                  badge: "Best atmosphere",
                  desc: "Converted stone farmhouse in the heart of Deià village — the most atmospheric village in Mallorca. Six rooms, a terrace with mountain views, and walking distance to Cala Deià cove. Staying in Deià means the Tramuntana road is empty before 9am and you have the whole village to yourself at night after the day-trippers leave.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Mallorca</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Mallorcan cuisine is one of the most underrated in Spain — excellent seafood, the indigenous sobrasada sausage, ensaïmada pastry, excellent local olive oil, and the Binissalem DO wine. Avoid the restaurants directly around La Seu; walk 5 minutes to Santa Catalina, La Lonja, or Sant Pere for honest food at fair prices.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Marc Fosh",
                  t: "Michelin-starred · Carrer de la Missió, Palma Old Town",
                  d: "The island&apos;s most celebrated restaurant and Mallorca&apos;s first individual Michelin star. British chef Marc Fosh has been cooking creative Mediterranean cuisine in this converted 17th-century convent refectory since 2001. Tasting menu €85–115, à la carte €28–45 per main. Book 6–8 weeks ahead. Exceptional value for the quality.",
                  b: "Best fine dining",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Simply Fosh",
                  t: "Casual bistro · Carrer de la Missió, Palma (same building as Marc Fosh)",
                  d: "Marc Fosh&apos;s more casual ground-floor restaurant in the same Convent de la Missió building. Seasonal Mallorcan dishes, natural wines, and the same kitchen quality at accessible prices (€22–35 per main). No tasting menu required. Book ahead — popular with locals and visiting food writers.",
                  b: "Best value Michelin-adjacent",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Mercat de l&apos;Olivar",
                  t: "Food market · Plaça de l&apos;Olivar, central Palma",
                  d: "Palma&apos;s main covered market, open Monday to Saturday mornings. The ground floor fish, meat, and produce stalls are for shopping; the upper level and surrounding bars are where you eat — fresh seafood tapas from €1.50, ibérico ham, local cheeses, and cold Mallorcan wine. Perfect for a budget lunch or an afternoon grazing session. Budget €12–18 to eat well.",
                  b: "Best budget",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Restaurant La Bóveda",
                  t: "Traditional Mallorcan · Carrer de la Boteria, La Lonja",
                  d: "A Palma institution since 1979. Traditional arched dining room, excellent fresh fish and rice dishes, pa amb oli, and the best sobrasada croquetas in the city. Honest Mallorcan cooking at mid-range prices (€22–32 per main). Reliably good; popular with locals as well as visitors. Book ahead for dinner.",
                  b: "Best traditional",
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
            destination="Mallorca Spain"
            hotels={[
              {
                name: "Hotel Formentor",
                type: "Luxury resort · Cap de Formentor, Mallorca",
                price: "From €320/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/es/formentor.html?aid=2820480",
              },
              {
                name: "Gran Hotel Son Net",
                type: "Luxury finca · Puigpunyent, Tramuntana",
                price: "From €280/night",
                rating: "5",
                badge: "Best Tramuntana",
                url: "https://www.booking.com/hotel/es/gran-hotel-son-net.html?aid=2820480",
              },
              {
                name: "Hostal Ritzi Palma",
                type: "Budget guesthouse · Santa Catalina, Palma",
                price: "From €55/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/es/hostal-ritzi.html?aid=2820480",
              },
              {
                name: "Hotel Tres (Palma Old Town)",
                type: "Boutique · Sant Pere neighbourhood, Palma",
                price: "From €120/night",
                rating: "4",
                badge: "Best mid-range Palma",
                url: "https://www.booking.com/hotel/es/tres-palma.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Palma Old Town & La Seu Cathedral Guided Tour",
                duration: "2.5 hrs",
                price: "From €18/person",
                badge: "Best introduction",
                url: "https://www.getyourguide.com/s/?q=palma+cathedral+tour+mallorca&partner_id=PSZA5UI",
              },
              {
                name: "Serra de Tramuntana Hiking Day Tour",
                duration: "8 hrs",
                price: "From €55/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=tramuntana+hiking+mallorca&partner_id=PSZA5UI",
              },
              {
                name: "Caves of Drach + Porto Cristo Tour",
                duration: "5 hrs",
                price: "From €35/person",
                badge: "Popular",
                url: "https://www.getyourguide.com/s/?q=caves+drach+mallorca+tour&partner_id=PSZA5UI",
              },
              {
                name: "Cap de Formentor Boat Trip from Port de Pollença",
                duration: "3 hrs",
                price: "From €25/person",
                url: "https://www.getyourguide.com/s/?q=formentor+boat+trip+mallorca&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Mallorca</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌞",
                  title: "Visiting in July–August",
                  desc: "Mallorca&apos;s peak season is relentlessly crowded and expensive. Es Trenc beach becomes a sardine tin, accommodation doubles in price, and Cap de Formentor&apos;s cliff road is closed to private cars (shuttle bus only). May, June, September, and October are dramatically better — warm enough to swim, quiet enough to explore.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "🚌",
                  title: "Relying only on public transport",
                  desc: "Palma&apos;s buses are excellent, but the mountain villages, Cala Mondragó, and Cap de Formentor are almost impossible without a hire car. Renting a small car for at least 2 days of your 4 is essential unless you&apos;re happy joining expensive organised day trips that don&apos;t allow independent stops.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "🍽️",
                  title: "Eating near the Cathedral",
                  desc: "The blocks immediately around La Seu are filled with overpriced, poor-quality restaurants targeting cruise ship day-trippers. Walk 5 minutes inland to Santa Catalina, La Lonja, or Sant Pere neighbourhoods for authentic Mallorcan food at honest prices.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "🏖️",
                  title: "Only staying in Palma and resort beaches",
                  desc: "Mallorca&apos;s north and east coasts are where the real magic lives — Cap de Formentor, Cala Mondragó, the Caves of Drach, and the Tramuntana mountains. Spending all 4 days in the Bay of Palma resort zone is the most common and regrettable mistake.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "🚂",
                  title: "Not pre-booking the Sóller train or Caves of Drach",
                  desc: "Both are legitimately popular and sell out in shoulder season. The vintage wooden train from Palma to Sóller runs a fixed schedule and fills fast — book at least 48 hours ahead online. The Caves of Drach includes a timed underground concert; arrive without a ticket and you may wait hours or miss the last slot.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "🗺️",
                  title: "Driving the MA-10 without a full tank",
                  desc: "Petrol stations are scarce once you are in the mountains between Valldemossa and Pollença. Fill up in Palma before heading into the Tramuntana. The 90km MA-10 mountain road has exactly one petrol station (in Sóller) — do not assume you can top up when needed.",
                  color: "border-red-200 bg-red-50",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Mallorca</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Drive the Tramuntana at dawn",
                  desc: "Leave Palma by 6:30am and drive the MA-10 mountain road while it is empty. The early light turns the limestone cliffs gold and the sea below goes silver. By 9am the coaches start arriving and the magic is diluted. The single best free experience on the island.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚢",
                  title: "Take the vintage Sóller train",
                  desc: "The 1912 wooden narrow-gauge train from Palma to Sóller (€22 return, 1 hour) is a heritage experience worth doing once even at the mid-range price. It passes through tunnels, over stone viaducts, and through the citrus belt around Sóller — book trendesoller.com at least 48 hours ahead.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🍷",
                  title: "Try Mallorcan wine in Binissalem",
                  desc: "The Binissalem DO wine region produces excellent reds from the indigenous Mantonegro grape not found elsewhere. Stop at José L. Ferrer (the island&apos;s oldest bodega) or Bodega Binigrau for a €10–15 tasting on your way back from the north. The wine makes a great souvenir and is available nowhere else in the world.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏊",
                  title: "Arrive at Es Trenc before 10am",
                  desc: "Es Trenc&apos;s protected beach is free but parking fills up fast. Arrive before 10am in May–June for a wide stretch of empty white sand. After midday in peak season the beach is uncomfortably crowded. The east end near Ses Covetes tends to be quieter than the main beach access.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🎟️",
                  title: "Book activities in advance via GetYourGuide",
                  desc: "Tramuntana hiking guides, snorkelling tours, and Caves of Drach combo trips sell out in peak season. Locking in your activities before you arrive saves disappointment and is often 15–20% cheaper than booking at the hotel desk or dock.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🗓️",
                  title: "Mallorca in November — a different island",
                  desc: "Post-tourist-season Mallorca is extraordinary: the mountains are green after autumn rains, Palma&apos;s restaurants have their tables back and their sanity, and accommodation prices drop by 40–60%. The sea is 20°C in October — still swimmable. If your priority is Palma and hiking rather than beach time, November is genuinely excellent.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Mallorca" />

          {/* Combine With */}
          <CombineWith currentSlug="mallorca-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Mallorca expensive compared to mainland Spain?",
                  a: "Moderately so. Accommodation and restaurants in Palma Old Town are on a par with Barcelona; resort areas can be pricier but also have more budget options. The biggest cost spike is July–August when everything doubles. Come in May or September and Mallorca is very affordable — a hostel dorm is €20–25, the menú del día lunch deal is €10–12, and buses cost under €4. A budget traveller can do 4 days comfortably for €55–70/day in shoulder season.",
                },
                {
                  q: "Do I need to hire a car in Mallorca?",
                  a: "For 4 days, yes — at least for 2 or 3 of those days. Palma itself is walkable and well-served by buses. But Cap de Formentor, Cala Mondragó, the Tramuntana mountain villages (Valldemossa, Deià, Sóller), and the Caves of Drach all require a car or an expensive organised tour. Hire cars start from €25/day in shoulder season; insurance is essential on mountain roads. Book ahead in May and September.",
                },
                {
                  q: "What is the best beach in Mallorca?",
                  a: "Es Trenc is widely considered the best natural beach: 3km of fine white sand, turquoise water, and zero development (it is a protected natural park). Platja de Formentor (exclusive, stunning, limited access) and Cala Mondragó (natural park, hidden coves) are close runners-up. The tiny Cala de Deià, accessible by a steep footpath from the village, is the most dramatic. Avoid the resort beaches of Magaluf and Alcúdia in high summer — massively overcrowded.",
                },
                {
                  q: "How do I get from Palma Airport to the city centre?",
                  a: "Bus 1 runs every 15 minutes and costs €1.55 — fast, air-conditioned, takes about 20 minutes to the central Plaça d&apos;Espanya. A taxi costs €20–25 and takes the same time in normal traffic. An Uber is usually €15–20. Do not pay the unofficial touts at the arrivals hall. If you are hiring a car, the hire desks are in the arrivals terminal — pick it up on arrival and drive straight to your hotel.",
                },
                {
                  q: "Is Valldemossa worth visiting in Mallorca?",
                  a: "Yes — it is one of the best individual sights on the island. The Royal Carthusian Monastery (€9.50) is beautifully preserved and the Chopin connection is handled well without being tacky. The village itself — stone houses with flowering window boxes on a steep Tramuntana hillside — is the definitive image of inland Mallorca. Combine it with Deià (9km north) and Sóller (another 14km) to make a full day.",
                },
                {
                  q: "Should I visit Mallorca or Ibiza?",
                  a: "They are fundamentally different islands. Mallorca has more cultural depth (Palma city, the Tramuntana, historic sites), better natural landscapes, more variety of experiences, and is larger with more to fill 4 days. Ibiza is better for nightlife, the old town of Dalt Vila is genuinely beautiful, and the beaches in the north are excellent. For a first-time Balearics visitor, Mallorca offers more. For a longer trip, combining both is excellent — they are 45 minutes apart by fast ferry.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Mallorca trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-mallorca", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/mallorca-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-mallorca", label: "How to get there", icon: "✈️" },
                { href: "/blog/mallorca-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="mallorca-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Island Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Barcelona 4 Days — Gothic Quarter &amp; Gaudí", href: "/blog/barcelona-4-days" },
                { label: "Lisbon 4 Days — Trams &amp; Fado", href: "/blog/lisbon-4-days" },
                { label: "Mykonos 4 Days — Islands &amp; Windmills", href: "/blog/mykonos-4-days" },
                { label: "Amalfi Coast 4 Days — Clifftop Drives", href: "/blog/amalfi-coast-4-days" },
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
