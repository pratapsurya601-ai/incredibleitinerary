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
import InlineCTA from "@/components/blog/InlineCTA";
import PhotoCta from "@/components/blog/PhotoCta";
import AuthorByline from "@/components/blog/AuthorByline";
import InlineSignup from "@/components/email/InlineSignup";
import PinterestSaveButton from "@/components/ui/PinterestSaveButton";
import { usePageUrl } from "@/lib/hooks";

// ── Table of Contents ─────────────────────────────────────────────────────────
const CRETE_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Crete Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "5-Day Itinerary" },
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
          href: `mailto:?subject=Crete 5-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Crete in 5 Days — Samaria Gorge, Balos Lagoon and the palace of Knossos&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/crete-5-days"
        imageUrl="https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=1200&q=80"
        description="Crete in 5 Days: Knossos, Samaria Gorge, Balos Lagoon, Chania old town — complete guide with euro costs, car hire tips, and the best Cretan food."
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
export default function CreteClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={CRETE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="crete greece beach coast blue water gorge cliff"
            fallback="https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=1600&q=80"
            alt="Crete Greece turquoise coast with dramatic cliffs and clear Mediterranean water"
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
              <span className="text-white/70">Crete 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-blue-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Europe · Greece
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Crete in 5 Days:
                <em className="italic text-blue-300"> Knossos, Samaria Gorge &amp; the Pink Sand Lagoon</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Greece&apos;s largest island — the palace of the Minotaur, Europe&apos;s longest gorge, a beach with naturally pink sand, and a lamb slow-cooked since dawn. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="14 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇬🇷 Crete, Greece</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From €50/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-blue-500 pl-6 mb-10 bg-blue-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Greece&apos;s largest island has the palace of the Minotaur at Knossos, Europe&apos;s longest gorge at Samaria, a beach with naturally pink sand at Balos Lagoon, and a lamb slow-cooked since dawn that arrives at your table at 2pm. Crete is what Greece was before mass tourism — raw, beautiful, and extraordinarily hospitable.
            </p>
          </blockquote>

          {/* ── WHAT CRETE ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Crete Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Crete is not just a beach destination. It is the birthplace of one of Europe&apos;s oldest civilisations — the Minoans, who built the palace at Knossos around 1700 BC, developed a writing system (Linear A, still undeciphered), and traded across the Mediterranean world long before classical Greece existed. The island is larger than most people expect: 260km from end to end, with a spine of mountains that rises to 2,456m and creates entirely different landscapes between the northern coast (developed, accessible) and the southern coast (remote, roadless in places, facing the Libyan Sea).
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Western Crete — Chania and Rethymnon — is where most independent travellers spend their time, and for good reason. The old town of Chania is one of the most beautiful in all of Greece: a Venetian harbour, Ottoman mosques, narrow stone lanes, and the best food on the island. The Samaria Gorge, starting from the Omalos plateau and descending 16km to the Libyan Sea, is Europe&apos;s longest and one of its most dramatic gorges. Balos Lagoon on the northwestern tip is genuinely one of the most beautiful beaches in the Mediterranean.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Eastern Crete — Heraklion, Agios Nikolaos, Elounda — has the archaeology (Knossos, Phaistos, Gortyn) and the luxury hotels. Most travellers do a loop: arrive Heraklion, see Knossos, drive west to Chania, do the gorge and beaches, return via Rethymnon. A car is not optional — it is the difference between a good trip and an extraordinary one.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Main Airport" value="HER (Heraklion)" />
              <StatCard icon="🌡️" label="Best Season" value="May–Jun, Sep–Oct" />
              <StatCard icon="🏛️" label="Minoan Palace" value="Knossos 1700 BC" />
              <StatCard icon="💰" label="Budget From" value="€50/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Crete</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Jun",
                  i: "🌸",
                  t: "Shoulder Season — Ideal",
                  d: "20–26°C, wildflowers on the mountain roads, the Samaria Gorge open and not yet crowded. Sea temperature reaches 20–22°C by June — swimmable. The best balance of weather, crowd levels, and prices. May is particularly good for the gorge and mountain drives.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Shoulder Season — Also Ideal",
                  d: "24–28°C in September, cooling to 20°C by late October. The sea is at its warmest (24–26°C in September). Crowds thin dramatically after mid-September. The Samaria Gorge closes in mid-October — check before you go. October sees occasional rain but dramatic light.",
                  b: "Recommended",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Jul–Aug",
                  i: "☀️",
                  t: "Peak Summer — Popular but Crowded",
                  d: "28–34°C. The Samaria Gorge sees 4,000+ visitors daily — it becomes a slow queue. Balos Lagoon is packed from 11am. Prices peak, accommodation books out weeks in advance. Still doable with very early starts and beach afternoons, but the island is working hard to accommodate everyone.",
                  b: "Crowded, plan carefully",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Nov–Apr",
                  i: "🌧️",
                  t: "Off-Season — Quiet but Limited",
                  d: "Many beach tavernas and tourist facilities close November through March. The Samaria Gorge is closed (reopens April–October). Mountain roads can be snowbound. However, Chania&apos;s old town is beautiful in winter, Knossos is crowd-free, and accommodation prices drop significantly. Good for archaeology, not for beaches.",
                  b: "For archaeology fans",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Crete</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-blue-800 font-light">
                <strong className="font-medium">Key detail:</strong> Crete has two main airports — <strong className="font-medium">Heraklion Nikos Kazantzakis (HER)</strong> in the east and <strong className="font-medium">Chania Ioannis Daskalogiannis (CHQ)</strong> in the west. For the western Crete itinerary in this guide, fly into Heraklion and out of Chania (or vice versa) to avoid backtracking.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Direct Charter Flights from Europe (recommended)",
                  d: "In summer, there are direct flights from London, Amsterdam, Berlin, Stockholm, Paris, and most major European cities to both HER and CHQ. Ryanair, easyJet, and TUI operate extensively. From UK: 3.5–4 hrs. From Germany/Netherlands: 3–3.5 hrs. Book 6–8 weeks ahead for summer to get reasonable fares.",
                  b: "Best option from Europe",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Via Athens (Olympic Air / Aegean)",
                  d: "Athens (ATH) to Heraklion (HER): 45 mins, ~€60–€120 return. Athens to Chania (CHQ): 50 mins. Athens has excellent connections from all European cities and many long-haul destinations. The connection adds 2–3 hours but gives more scheduling flexibility.",
                  b: "Good connection",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚢",
                  t: "Ferry from Athens (Piraeus Port)",
                  d: "Overnight ferries from Piraeus to Heraklion: 9 hrs, depart ~9pm, arrive ~6am. Comfortable cabins available (€40–€80 per person). ANEK Lines and Minoan Lines operate. A romantic option that saves a night&apos;s accommodation — pack a good book for the crossing.",
                  b: "Scenic overnight option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "✈️",
                  t: "From India",
                  d: "No direct flights from India to Crete. Fly to Athens via Emirates (Dubai), Etihad (Abu Dhabi), Qatar Airways (Doha), or Air India (London/Frankfurt) then connect to HER or CHQ. Total travel time from major Indian cities: 12–16 hrs including connection. A Schengen visa is required for Indian passport holders — apply at the Greek consulate, €80 fee, 15–45 days processing.",
                  b: "Via Athens hub",
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

          {/* ── 5-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Crete Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary moves west-to-east, starting in Heraklion and ending near Chania. All costs in EUR. A rental car is assumed from Day 2 — it is not optional for this route.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Heraklion · Knossos Palace · Archaeological Museum"
                cost="€55–75 total"
                items={[
                  "Arrive Heraklion. Check in to a guesthouse or budget hotel near the city centre (€25–40/night). Pick up your rental car the following morning — today use the bus or taxi.",
                  "10:00am — Knossos Palace (€15 entry, or €23 combined with the Archaeological Museum). The Minoan palace complex dates to around 1700 BC — throne room, frescoed corridors, the legendary labyrinth layout, and reconstructions by Sir Arthur Evans that remain controversial. Europe&apos;s oldest city. Budget 2–3 hours. Go before 11am to avoid the tour group rush.",
                  "1:00pm — Lunch in Heraklion: a proper Cretan spread of dakos barley rusk salad, fresh graviera cheese, stuffed vine leaves and olives at a traditional mezedopoleio near the market. €12–15.",
                  "3:00pm — Heraklion Archaeological Museum (€10 or combined ticket). The finest collection of Minoan art in the world: the Bull-Leaping Fresco, the Phaistos Disc, the faience Snake Goddess figurines. Small but extraordinarily dense — allow 2 hours.",
                  "6:00pm — Walk the Venetian harbour of Heraklion and the Koules fortress (€4). The old city walls are some of the finest Venetian fortifications in the Mediterranean.",
                  "8:00pm — Dinner in the old town: fresh fish at a harbour-front taverna or grilled lamb chops with village wine. €18–25.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Drive West · Rethymnon Venetian Harbour · Chania Old Town"
                cost="€50–75 total (excl. car rental €25–35/day)"
                items={[
                  "Pick up your rental car. International driving licence not required for most European car hire companies when using an Indian licence. Book in advance in summer — €25–35/day with basic insurance.",
                  "9:00am — Drive west along the E75 coastal highway towards Rethymnon (1.5 hrs). Stop at Bali beach village en route for a coffee above the three small coves.",
                  "11:00am — Rethymnon old town: the finest Venetian harbour in Crete, with a lighthouse at the harbour mouth that has become the city&apos;s symbol. Walk the narrow lanes of the old quarter — Neratze Mosque (now a concert hall), the Rimondi Fountain, and the partially intact old city walls. Budget 2 hours.",
                  "1:00pm — Lunch at a Rethymnon harbour taverna: fresh mussels, calamari, and the local raki spirit. €14–18.",
                  "3:00pm — Continue west to Chania (1 hr). Check in to accommodation in or near the old town (€35–55 for a guesthouse, €80–120 for a boutique hotel inside the Venetian quarter).",
                  "6:00pm — Walk Chania&apos;s old Venetian harbour — the most beautiful harbour in Crete and arguably in Greece. The lighthouse, the Egyptian Mosque, the covered market, and the maze of the old town lanes. Sunset from the harbour mouth.",
                  "8:30pm — Dinner in Chania&apos;s old town: swordfish steak or lamb kleftiko at a rooftop restaurant. €20–28.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Samaria Gorge Hike · Agia Roumeli · Hora Sfakion"
                cost="€35–55 total (a low-spend active day)"
                items={[
                  "5:30am — Set your alarm. Take the early KTEL bus from Chania to Omalos (€7, departs ~6:15am). Or drive your rental car to the Xyloskalo (gorge entrance), 42km south of Chania — but arrange a taxi or bus back as the gorge is one-way.",
                  "7:30am — Enter Samaria Gorge (€5 entry). 16km mostly downhill, 6–7 hours total. Europe&apos;s longest gorge, cutting through the White Mountains (Lefka Ori). The narrowest point — the Iron Gates — is just 3.5 metres wide with 300-metre sheer walls pressing in on both sides. One of the great walks of Europe.",
                  "Practical notes: wear proper walking shoes (not sandals — the terrain is rocky), carry at least 2 litres of water (refill at the spring at km 7), start early to beat the heat and the crowds. The descent is manageable for fit walkers aged 8+. Do not attempt in July or August without an early start.",
                  "2:00pm — Emerge at Agia Roumeli village on the Libyan Sea. This tiny village (accessible only by boat or on foot) has three tavernas serving freshly grilled octopus, fish, and cold beer. Swim in the crystal-clear Libyan Sea. Celebrate finishing the gorge.",
                  "5:00pm — Ferry from Agia Roumeli to Hora Sfakion (€15, last boat usually around 5:30pm — confirm times at the gorge entrance). The half-hour boat ride hugs the dramatic Sfakian coast.",
                  "6:30pm — Bus back to Chania from Hora Sfakion (€8). Or stay overnight in Sfakia — small harbour hotels from €35, extraordinarily fresh fish at the waterfront tavernas.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Balos Lagoon · Gramvousa · Falasarna Beach"
                cost="€40–65 total"
                items={[
                  "8:00am — Drive from Chania towards Kissamos (45 min). Take the unpaved road up to the Gramvousa peninsula viewpoint, then hike 1.5km down to Balos Lagoon. The road is rough but passable in a standard car in dry season. Or take the boat from Kissamos port (€20 return, departs 10am — easier but you arrive with 200 other people).",
                  "9:30am — Balos Lagoon: the most photographed beach in Crete. A shallow turquoise lagoon with pink-white sand formed from crushed shells and pink coral. Flamingos visible in shoulder season. The water is ankle-deep for 100 metres — a natural paddling pool. Go early (before 11am) to have it almost to yourself.",
                  "11:30am — Walk up to the Gramvousa island ruins (Venetian castle ruins on the rocky headland above the lagoon) for panoramic views.",
                  "1:30pm — Drive south to Falasarna beach (30 min): a vast west-facing arc of golden sand with serious surf waves — completely different character from the calm lagoon. Best beach for swimming in the afternoon when the western sun is behind you.",
                  "4:00pm — Return to Chania. Wander the old market (Agora) and buy Cretan thyme honey, olive oil, and herbs to take home.",
                  "Evening: Dinner at Tamam restaurant in Chania (old town, in a converted Ottoman bath) — one of the best creative Cretan menus on the island. Book ahead. €22–30.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Spinalonga · Elounda · Phaistos · Departure"
                cost="€45–65 total"
                items={[
                  "This is a flexible day depending on your flight time. If flying from CHQ (Chania), use the morning for a final Chania wander. If flying from HER (Heraklion), drive east and visit Spinalonga or Phaistos en route.",
                  "Option A — Spinalonga Island (east Crete, 2 hrs from Chania): take the boat from Elounda or Plaka to the island fortress (€15 return). Spinalonga was Europe&apos;s last active leper colony, only closed in 1957. The walk through the Venetian-era fortress and the lepers&apos; settlement is unexpectedly moving. The island is tiny but requires 2 hours to do justice.",
                  "Option B — Phaistos Minoan Site (south-central Crete, 1 hr from Heraklion): the second-largest Minoan palace, sitting on a ridge with views of the Messara plain and Mount Ida. Far less restored than Knossos — you see the raw archaeology. Entry €8. Much fewer crowds than Knossos. Where the Phaistos Disc was found in 1908.",
                  "Option C — Elafonisi Pink Sand Beach (southwest Crete, 1.5 hrs from Chania): the other famous pink-sand beach. Elafonisi is an island you wade to across a knee-deep turquoise channel. Pink sand from broken seashells and red algae. Can combine with Balos on Day 4 if you start very early.",
                  "Lunch: a final Cretan meal — loukoumades (honey-drenched doughnuts) from a street stall, or a grilled fish at a harbour taverna. €10–18.",
                  "Drive to your departure airport. Return rental car. HER Heraklion airport has good duty-free for Cretan products.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Crete" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Crete Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in priority order. Entry fees as of 2026. The combined Knossos + Archaeological Museum ticket (€23) is the best-value purchase in Crete.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Knossos Palace",
                  e: "€15 (or €23 combined)",
                  d: "Europe&apos;s oldest city, seat of the Minoan civilisation, probable origin of the Minotaur myth. Sir Arthur Evans&apos; reconstructions (painted concrete pillars, restored frescoes) are controversial but make the site comprehensible. The throne room and storage magazines are genuinely awe-inspiring. Go before 10am in summer.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Chania Old Town & Venetian Harbour",
                  e: "Free",
                  d: "The most beautiful harbour in Crete — Venetian sea walls, a working 16th-century lighthouse, Ottoman-era mosques, and a covered Venetian market (Agora). The narrow lanes of the old town (Topanas district) have the island&apos;s best restaurants and boutique hotels. Most photogenic at dawn and dusk.",
                  t: "Must see · Half day",
                },
                {
                  n: "Samaria Gorge",
                  e: "€5 entry",
                  d: "16km one-way hike through Europe&apos;s longest gorge, in the White Mountains of western Crete. The Iron Gates section (3.5m wide, 300m high walls) is the highlight. Open approximately April to mid-October — check conditions before going. 6–7 hours total. Start from Omalos (north end), finish at Agia Roumeli (south).",
                  t: "Full day · Moderate fitness",
                },
                {
                  n: "Balos Lagoon",
                  e: "Free (parking €2 or boat €20)",
                  d: "Northwestern tip of Crete — a shallow turquoise lagoon with pink-white sand and the ruins of a Venetian fort on Gramvousa island above. Reachable by 1.5km hike from the car park or by boat from Kissamos. Arrive before 10am or after 4pm to beat the crowds. Open year-round but boat service seasonal.",
                  t: "Must see · Half day",
                },
                {
                  n: "Rethymnon Venetian Harbour",
                  e: "Free",
                  d: "The best-preserved Venetian harbour in Crete, with a working lighthouse at the entrance, 16th-century fortezza (fort) above the town, and a tangle of Ottoman and Venetian lanes in the old city. Less touristy than Chania. The evening promenade along the harbour front is one of the island&apos;s pleasures.",
                  t: "2–3 hrs",
                },
                {
                  n: "Spinalonga Island",
                  e: "€8 (plus boat €15)",
                  d: "A Venetian island fortress in the Gulf of Elounda that was used as a leper colony until 1957 — the last in Europe. Accessible by boat from Elounda or Plaka. The walk through the intact village is unexpectedly moving. Featured in Victoria Hislop&apos;s novel The Island. Essential for east Crete.",
                  t: "Half day · East Crete",
                },
                {
                  n: "Phaistos Minoan Palace",
                  e: "€8",
                  d: "The second-largest Minoan palace, south-central Crete. Less reconstructed than Knossos — raw archaeology on a ridge with views of Mount Ida. Where the famous undeciphered Phaistos Disc was found in 1908. Far fewer crowds than Knossos. Combine with Matala beach (15 min) for a full day.",
                  t: "Underrated · 1.5 hrs",
                },
                {
                  n: "Elafonisi Beach",
                  e: "Free",
                  d: "Southwestern Crete — a lagoon island reached by wading across a knee-deep channel. Famous for pink sand (from crushed shells and red Posidonia algae) and extraordinarily clear shallow water. Gets very crowded in July–August. Arrive before 10am. 1.5 hrs from Chania.",
                  t: "Half day · Southwest Crete",
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
            title="Crete — Gorges, Lagoons &amp; Minoan Ruins"
            subtitle="Five extraordinary places on Greece&apos;s largest island."
            spots={[
              {
                name: "Balos Lagoon",
                query: "balos lagoon crete greece pink sand turquoise water",
                desc: "The shallow pink-white lagoon at Balos — Crete&apos;s most iconic image and one of the Mediterranean&apos;s most beautiful beaches.",
              },
              {
                name: "Samaria Gorge Iron Gates",
                query: "samaria gorge iron gates crete greece narrow canyon",
                desc: "The Iron Gates section of the Samaria Gorge — 3.5 metres wide, 300-metre walls, the narrowest point of Europe&apos;s longest gorge.",
              },
              {
                name: "Chania Venetian Harbour",
                query: "chania venetian harbour crete greece lighthouse old town",
                desc: "The Venetian lighthouse at the entrance to Chania harbour — the most photographed structure in western Crete.",
              },
              {
                name: "Knossos Palace Frescoes",
                query: "knossos palace minoan crete greece ancient ruins frescoes",
                desc: "The reconstructed throne room and frescoed corridors of Knossos — Europe&apos;s oldest palace complex, 1700 BC.",
              },
              {
                name: "Elafonisi Pink Sand Beach",
                query: "elafonisi beach crete greece pink sand turquoise lagoon",
                desc: "Elafonisi — the other pink-sand beach of Crete, reached by wading across a turquoise channel to a lagoon island.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              All prices in EUR. The biggest single cost is accommodation — Crete prices vary enormously between budget guesthouses (€25–40) and boutique hotels in Chania&apos;s old town (€100–180). Car rental is €25–35/day and is non-negotiable for this route.
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
                    ["✈️ Flights (return, Europe)", "€80–180", "€150–300", "€300–600"],
                    ["🏨 Accommodation (4 nights)", "€100–160", "€320–600", "€800–2,400"],
                    ["🚗 Car rental (4 days)", "€100–140", "€140–200", "€200–400"],
                    ["🏛️ Entry fees (5 days)", "€50–70", "€70–100", "€100–150"],
                    ["🍽️ Food (5 days)", "€75–125", "€175–300", "€400–800"],
                    ["⛵ Boats + misc transport", "€40–60", "€60–150", "€300–600"],
                    ["TOTAL (per person)", "€445–735", "€915–1,650", "€2,100–4,950"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€50–80/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostels and budget guesthouses (€20–35/night), eating at local tavernas (dakos, grilled fish, gyros), KTEL buses for the gorge. Very comfortable — Crete has good budget infrastructure.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€150–250/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique hotels in Chania&apos;s old town (€80–130/night), dining at places like Tamam and To Maridaki, private guide for Knossos, boat to Balos. The sweet spot for Crete.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (€400+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Blue Palace Resort Elounda, Amirandes Grecotel, or Daios Cove. Private yacht to Balos and Gramvousa. Private archaeologist for Knossos. Helicopter transfer Heraklion–Chania.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Crete</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Base yourself in Chania for the western itinerary. It&apos;s the most beautiful base, has the best food, and is 45 minutes from Samaria Gorge and 1 hour from Balos. Heraklion is good for one night (Knossos) but not a comfortable base for exploration.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Chania Old Town (Venetian Quarter)",
                  type: "Boutique hotels · Best base for western Crete",
                  price: "From €80–180/night",
                  badge: "Recommended base",
                  desc: "Stay inside the Venetian old town if you can. Several beautifully converted stone mansions operate as boutique hotels — thick walls, arched ceilings, rooftop terraces above the harbour. Within walking distance of the best restaurants and the covered market. Fills quickly in summer.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Elounda (East Crete)",
                  type: "Luxury resort · Gulf of Elounda",
                  price: "From €250–800/night",
                  badge: "Best luxury",
                  desc: "The Blue Palace Resort, Daios Cove, and Amirandes Grecotel are among the finest luxury hotels in Greece — infinity pools over the Aegean, private beaches, and boat excursions to Spinalonga. East Crete has a completely different, more low-key character than the west.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Rethymnon Old Town",
                  type: "Mid-range · Central location",
                  price: "From €50–110/night",
                  badge: "Best value old town",
                  desc: "Rethymnon&apos;s Venetian old town is less visited than Chania&apos;s and slightly cheaper. Good base if you&apos;re doing a Crete loop and want to avoid the most tourist-heavy areas. Excellent local tavernas and a beautiful harbour.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Heraklion City",
                  type: "Budget-mid · Near airports and archaeology",
                  price: "From €30–80/night",
                  badge: "Best for archaeology",
                  desc: "Stay one night in Heraklion on arrival to see Knossos and the Archaeological Museum, then move west. The city is practical rather than charming — good value hotels, easy airport access, convenient for a Knossos morning and departure day.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Crete</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Cretan cuisine is one of the great regional Mediterranean kitchens — the original Mediterranean diet. Olive oil in everything, local cheeses (graviera, anthotyros, mizithra), slow-cooked lamb, and vegetables from small farms. Eat late: Cretans sit down for dinner between 9pm and 11pm.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Dakos — Cretan Barley Rusk Salad",
                  t: "Local staple · Order everywhere",
                  d: "The defining Cretan dish: a large barley rusk (paximadi) soaked briefly in water, topped with grated fresh tomato, crumbled mizithra or feta, Cretan olive oil, dried oregano, and sometimes olives or capers. Order it as your starter at every taverna. €5–7. The best ones use home-made rusks.",
                  b: "Order everywhere",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Lamb Kleftiko",
                  t: "Slow-roasted lamb · Traditional Sunday dish",
                  d: "Lamb leg slow-roasted in a sealed clay pot or wood oven for 4–6 hours with garlic, lemon, herbs, and white wine. The meat falls off the bone. Best ordered 24 hours in advance at the traditional village restaurants. In mountain villages, look for the ones where locals are eating. €15–20.",
                  b: "Order ahead",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Fresh Octopus",
                  t: "Harbour tavernas · Best after the gorge",
                  d: "Grilled octopus dried in the sun and charcoal-grilled over wood is one of the finest things you will eat in Greece. Order it at the harbour front tavernas in Hora Sfakion (after the gorge), Agia Roumeli, or Chania. The octopus should be tender, not chewy — a sign of good technique. €12–16.",
                  b: "Best after gorge",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Loukoumades",
                  t: "Street food · Honey doughnuts",
                  d: "Crisp, light dough fritters fried to order and soaked in Cretan thyme honey with cinnamon — the Greek doughnut. Street stalls and dedicated loukoumades shops in Heraklion and Chania serve them piping hot for €3–4 for a portion. The one essential Cretan street food.",
                  b: "Essential street food",
                  c: "bg-yellow-50 border-yellow-200",
                },
                {
                  n: "Local Wine & Raki",
                  t: "Village restaurants · Free digestif",
                  d: "Crete has its own wine appellation producing excellent reds (Kotsifali grape) and whites (Vilana, Thrapsathiri). Order the house wine at village restaurants — usually poured from the barrel, good quality, €3–4 per half litre. Raki (tsikoudia) is Crete&apos;s spirit — clear, fiery, made from grape pomace. Every taverna brings it to your table for free at the end of the meal.",
                  b: "Free with every meal",
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
            destination="Crete Greece"
            hotels={[
              {
                name: "Blue Palace Resort Elounda",
                type: "Luxury · Infinity pools over the Aegean",
                price: "From €280/night",
                rating: "5",
                badge: "Best luxury",
                url: "https://www.booking.com/hotel/gr/blue-palace-elounda.html?aid=2820480",
              },
              {
                name: "Amirandes Grecotel",
                type: "Luxury · Private beach · East Crete",
                price: "From €220/night",
                rating: "5",
                badge: "Best resort",
                url: "https://www.booking.com/hotel/gr/amirandes-grecotel.html?aid=2820480",
              },
              {
                name: "Casa Delfino Chania",
                type: "Boutique · Venetian mansion · Old town",
                price: "From €120/night",
                rating: "5",
                badge: "Best old town",
                url: "https://www.booking.com/hotel/gr/casa-delfino-chania.html?aid=2820480",
              },
              {
                name: "Amphora Hotel Chania",
                type: "Mid-range · Venetian harbour views",
                price: "From €70/night",
                rating: "4",
                badge: "Best value",
                url: "https://www.booking.com/hotel/gr/amphora-chania.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Samaria Gorge Guided Hike",
                duration: "Full day",
                price: "From €35/person",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=samaria+gorge+crete&partner_id=PSZA5UI",
              },
              {
                name: "Knossos Palace Private Tour",
                duration: "3 hrs",
                price: "From €60/person",
                badge: "Best for history",
                url: "https://www.getyourguide.com/s/?q=knossos+palace+tour&partner_id=PSZA5UI",
              },
              {
                name: "Balos Lagoon Boat Trip",
                duration: "Half day",
                price: "From €20/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=balos+lagoon+boat+crete&partner_id=PSZA5UI",
              },
              {
                name: "Cretan Cooking Class",
                duration: "3 hrs",
                price: "From €55/person",
                url: "https://www.getyourguide.com/s/?q=crete+cooking+class&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Crete</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚗",
                  title: "Not Renting a Car",
                  desc: "Balos Lagoon, Samaria Gorge approach, mountain villages, Falasarna, Elafonisi, Phaistos — none of these are accessible by public transport on a flexible schedule. The bus to Omalos (gorge entrance) runs once a day in summer. A car (€25–35/day) is the single most important decision you make in Crete.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🥾",
                  title: "Underestimating Samaria Gorge",
                  desc: "16km, 6–7 hours, mostly downhill on rocky terrain. The main issues are the length (people run out of energy at km 12), the heat in summer, and inadequate footwear. Wear walking shoes or trail runners — never sandals. Carry 2L of water minimum. Start before 8am.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏖️",
                  title: "Only Staying in Heraklion",
                  desc: "Heraklion is good for exactly one day: Knossos in the morning, the Archaeological Museum in the afternoon. The beauty of Crete is in the west — Chania&apos;s old town, Rethymnon, Samaria, Balos. Stay 3+ nights in Chania and use it as your western base.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "📅",
                  title: "Doing Samaria in July–August Peak",
                  desc: "4,000+ people enter the gorge daily in July–August. The narrow Iron Gates section becomes a slow-moving queue. The gorge is best in May–June and September–October: cooler, emptier, and more atmospheric. Summer gorge hikers get heat exhaustion at an alarming rate.",
                  color: "bg-pink-50 border-pink-200",
                },
                {
                  icon: "⏰",
                  title: "Arriving at Balos After 11am",
                  desc: "The boat tours from Kissamos arrive at Balos between 11am and 1pm, filling the lagoon with 200+ people at once. Drive to the Gramvousa car park and hike down at 9am — you&apos;ll have Europe&apos;s most beautiful lagoon almost entirely to yourself for two hours.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🍽️",
                  title: "Eating at the Tourist-Facing Harbour Restaurants",
                  desc: "In Heraklion and Chania, the restaurants facing directly onto the waterfront often charge premium prices for mediocre food. Walk one street back. The quality jumps and the prices drop by 30%. Always look for the taverna where local Greeks are eating at 2pm.",
                  color: "bg-green-50 border-green-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Crete</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🍯",
                  title: "Buy Thyme Honey Directly",
                  desc: "Cretan thyme honey — bees feeding on wild mountain thyme — is considered among the finest honey in the world. Buy it directly from producers at the Chania market (Agora) or from village shops in the White Mountains. A 450g jar costs €8–12. The supermarket versions are inferior.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🏛️",
                  title: "Knossos at 8am Opening",
                  desc: "The site opens at 8am. Tour groups arrive from 10am onwards. Go at opening — you can have the throne room and the storage magazines almost to yourself for 90 minutes. The morning light on the reconstructed frescoes is also significantly better than midday.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🦑",
                  title: "Celebrate Finishing Samaria at Agia Roumeli",
                  desc: "After the gorge emerges at the Libyan Sea, the village of Agia Roumeli (accessible only by boat or on foot) has three small tavernas. The freshly grilled octopus and cold Mythos beer after 16km of hiking is one of the great travel experiences in Greece. Eat here. Take your time.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🌊",
                  title: "Rent a Car on Day 2, Not Day 1",
                  desc: "Day 1 (Heraklion) is walkable — Knossos is accessible by city bus (€1.50) and the Archaeological Museum is in the centre. Pick up your car on Day 2 morning before driving west. Parking in central Heraklion is expensive and the one-way system is confusing.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🏔️",
                  title: "Drive the E75 via the Mountain Road",
                  desc: "The old highway (pre-motorway) from Heraklion to Chania runs through the mountains via Rethymnon. It adds 30 minutes but passes through villages, olive groves, and gorge viewpoints that the modern motorway bypasses entirely. Worth doing on the westbound leg.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🍶",
                  title: "Accept the Free Raki",
                  desc: "Every traditional Cretan taverna will bring raki (tsikoudia) to your table at the end of the meal — usually with a small dessert. This is genuine Cretan hospitality, not a tourist gesture. Accept it, drink slowly (it is strong — 40%), and use it as a reason to linger. Refusing it is mildly rude.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Crete" />

          {/* Combine With */}
          <CombineWith currentSlug="crete-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do I need a car in Crete?",
                  a: "For seeing the best of Crete — yes. The bus network covers main towns but Balos Lagoon, mountain villages, and the Samaria Gorge approach are only practical with a car. Car rental is €25–35/day including insurance. International driving licence not required for Indian drivers at most EU agencies — check with the rental company when booking.",
                },
                {
                  q: "How hard is the Samaria Gorge hike?",
                  a: "Moderate difficulty. The distance is 16km mostly downhill on rocky terrain. The main challenge is the length (6–7 hours), the rough footing, and the heat in summer. Proper walking shoes, 2 litres of water, and an early start (before 8am) are essential. Children aged 8+ and fit adults of any age can complete it. Do not attempt in sandals or flip-flops.",
                },
                {
                  q: "How long should I spend in Crete?",
                  a: "5 days is the minimum to cover the best of the island. 7–10 days lets you see both eastern Crete (Heraklion, Knossos, Spinalonga, Agios Nikolaos) and western Crete (Chania, Samaria, Balos, Rethymnon) without rushing. 2–3 days only allows Heraklion, Knossos, and Chania — skip the gorge and remote beaches.",
                },
                {
                  q: "What is Cretan food like?",
                  a: "One of the great regional Mediterranean cuisines — heavy on olive oil, fresh vegetables, local cheeses (graviera, anthotyros), slow-roasted lamb, fresh fish, dakos barley rusk salad, and exceptional honey. Cretans eat very late (dinner 9–11pm) and portions are enormous. Every meal ends with free raki. It is genuinely one of the best food destinations in Europe.",
                },
                {
                  q: "Is Crete better than Santorini?",
                  a: "Different experiences. Santorini is all about the dramatic volcanic caldera scenery and honeymoon romance — better for 2–4 days. Crete is a full destination with archaeology, serious hiking, authentic local culture, diverse landscapes, and better food — better for 5+ days. Most Greece visitors choose one. Crete is almost always better value and more interesting for longer trips.",
                },
                {
                  q: "What is the best area to stay in Crete?",
                  a: "For the western itinerary in this guide: Chania old town is the best base. It has the best restaurants and nightlife, the most beautiful harbour, and is 45 minutes from Samaria Gorge and 1 hour from Balos. Stay inside the Venetian quarter if budget allows. For east Crete and archaeology: Heraklion (1 night max) or Agios Nikolaos. For luxury: Elounda.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Crete trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-crete", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/samaria-gorge-guide", label: "Samaria Gorge guide", icon: "🥾" },
                { href: "/blog/chania-travel-guide", label: "Chania guide", icon: "🏛️" },
                { href: "/blog/crete-car-hire-tips", label: "Car hire tips", icon: "🚗" },
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
          <RelatedGuides currentSlug="crete-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Athens in 3 Days — Acropolis &amp; Culture", href: "/blog/athens-3-days" },
                { label: "Santorini 4 Days — Caldera &amp; Sunsets", href: "/blog/santorini-4-days" },
                { label: "Amalfi Coast 4 Days — Cliff Villages", href: "/blog/amalfi-coast-4-days" },
                { label: "Istanbul 5 Days — Two Continents", href: "/blog/istanbul-5-days" },
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
