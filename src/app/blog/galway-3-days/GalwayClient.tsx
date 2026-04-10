"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import AuthorByline from "@/components/blog/AuthorByline";
import InlineSignup from "@/components/blog/InlineSignup";
import PhotoCta from "@/components/blog/PhotoCta";
import { PinterestSaveButton } from "@/components/blog/PinterestSaveButton";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import DestinationGallery from "@/components/blog/DestinationGallery";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import RelatedGuides from "@/components/blog/RelatedGuides";
import CombineWith from "@/components/blog/CombineWith";
import Breadcrumb from "@/components/blog/Breadcrumb";
import InlineCTA from "@/components/blog/InlineCTA";
import SmartImage from "@/components/SmartImage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import { usePageUrl } from "@/lib/hooks";

// ── Table of Contents ─────────────────────────────────────────────────────────
const GALWAY_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Galway Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "🚌",  label: "Getting There" },
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
          href: `mailto:?subject=Galway 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Galway in 3 Days — trad music, Connemara and Aran Islands&url=${pageUrl}`,
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
        url="https://www.incredibleitinerary.com/blog/galway-3-days"
        imageUrl="https://images.unsplash.com/photo-1590677197770-af8c461f4a67?w=1200&q=80"
        description="Galway in 3 Days: Latin Quarter, Connemara National Park, Aran Islands ferry and the best trad music in Ireland — complete travel guide."
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
export default function GalwayClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={GALWAY_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Galway" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="galway latin quarter ireland cobblestones street"
            fallback="https://images.unsplash.com/photo-1590677197770-af8c461f4a67?w=1600&q=80"
            alt="Galway Latin Quarter cobblestone streets with colourful shopfronts, Ireland"
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
              <span className="text-white/70">Galway 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-emerald-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Ireland&apos;s West Coast
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Galway in 3 Days:
                <em className="italic text-emerald-300"> Trad Music, Connemara &amp; the Aran Islands</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Shop Street trad pubs, Galway Bay oysters, the wild bogs of Connemara National Park, and Inis Mór&apos;s cliff-edge Iron Age forts. Ireland&apos;s most musical city in three days.
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
              <span>🇮🇪 Galway, Ireland</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💶 From €55/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-emerald-500 pl-6 mb-10 bg-emerald-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Galway is the soul of the Irish west — a compact city of 80,000 people where the Latin Quarter&apos;s cobblestones are lined with brightly painted shopfronts, traditional music sessions spill out of pubs every night of the week, and Galway Bay oysters slipped from the shell with a glass of Guinness may be the finest four seconds in food.
            </p>
          </blockquote>

          {/* ── WHAT GALWAY ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Galway Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Galway is Ireland&apos;s fourth-largest city and the unofficial capital of the Irish west. It is where the English-speaking country ends and the Irish-speaking Gaeltacht begins — Connemara, just west of the city, is one of the largest Irish-speaking regions in the country. The city has a disproportionate cultural density for its size: a Michelin-starred restaurant scene, a world-class arts festival in July, one of Ireland&apos;s great horse-racing weeks, and a nightly traditional music scene that has no equivalent outside of Clare and Kerry.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The city centre is entirely walkable — Shop Street, the Latin Quarter, Quay Street, Kirwan&apos;s Lane, and the Spanish Arch all sit within ten minutes of each other. But Galway&apos;s real power is what surrounds it: Connemara National Park an hour to the west (wild Atlantic bogs, the Twelve Bens mountain range, a free visitor centre), and the Aran Islands two hours by ferry from Rossaveal (Iron Age cliff forts, limestone pavements, and an Irish-speaking island community that has barely changed in fifty years).
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Three days covers the city comfortably, allows a full Connemara day trip, and gets you on the ferry to Inis Mór for the Cliffs of Moher alternative that most visitors miss entirely. The key is booking the ferry in advance and not trying to drive Connemara without a car.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="🚌" label="From Dublin" value="3 hrs" />
              <StatCard icon="🌡️" label="Best Season" value="May–Sep" />
              <StatCard icon="🎵" label="Trad Sessions" value="Nightly" />
              <StatCard icon="💶" label="Budget From" value="€55/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Galway</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Jun",
                  i: "🌸",
                  t: "Late Spring — Ideal",
                  d: "14–18°C, long evenings (sunset after 9:30pm in June), pre-peak crowds, and the full trad music season in swing. Accommodation is easier to book than July–August and the Aran Islands ferry is reliably running. The best combination of weather, access, and atmosphere.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul–Aug",
                  i: "☀️",
                  t: "Summer — Peak Season",
                  d: "16–20°C, Galway Arts Festival (July) and Galway Races (late July/early August) fill the city. Streets are extremely busy, accommodation prices triple during races week, and the Aran Islands ferry books out weeks ahead. Vibrant but expensive and crowded. Book everything 2–3 months ahead.",
                  b: "Book very early",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🦪",
                  t: "Early Autumn — Locals&apos; Favourite",
                  d: "12–17°C, Galway International Oyster Festival in September celebrates the start of native oyster season. Crowds thin out after August, prices drop, and the Connemara landscape turns golden-brown. September is widely considered the best single month to visit Galway.",
                  b: "Best for oysters",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Nov–Mar",
                  i: "🎄",
                  t: "Winter — Atmospheric Off-Season",
                  d: "6–10°C, wet and windy but authentically Irish. The trad music sessions at The Crane Bar and Tigh Neachtain continue year-round. Christmas markets in December transform Eyre Square. Connemara in January rain is genuinely dramatic rather than miserable — if you dress for it.",
                  b: "Atmospheric",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚌 Getting to Galway</h2>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-emerald-800 font-light">
                <strong className="font-medium">Key detail:</strong> Galway has no commercial airport. Most international visitors fly into <strong className="font-medium">Dublin Airport (DUB)</strong> or <strong className="font-medium">Shannon Airport (SNN)</strong> and travel onward by bus or train. Bus Éireann from Dublin is the most popular and economical route.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚌",
                  t: "Bus Éireann from Dublin (recommended)",
                  d: "Dublin Busáras (or Dublin Airport) → Galway Eyre Square: 3 hours, €15 booked in advance online. Routes X20 and 20 run hourly from 7am. Drop-off is right at Eyre Square in Galway city centre — ideal. Book at buseireann.ie for the cheapest fares.",
                  b: "Best value",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚂",
                  t: "Irish Rail from Dublin Heuston",
                  d: "Dublin Heuston → Galway Ceannt Station: 2 hours 10 minutes (express), €20–35 depending on booking time. Trains run 5–6 times daily. The train is slightly faster than the bus and drops you within 10 minutes&apos; walk of the Latin Quarter. Book at irishrail.ie.",
                  b: "Faster option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "✈️",
                  t: "From Shannon Airport (SNN)",
                  d: "Bus Éireann Route 343 runs Shannon Airport → Galway: 1 hour, €12. Ryanair and Aer Lingus both fly into Shannon from UK and European cities. A useful option if you&apos;re also planning to visit the Cliffs of Moher (€8 entry), which sit between Shannon and Galway.",
                  b: "From Shannon",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Drive from Dublin",
                  d: "220km via M6 motorway: 2.5 hours in good traffic. Driving gives full flexibility for Connemara day trips without car hire costs. Street parking in Galway city centre is expensive (€2.50–3.50/hr) — use Eyre Square car park or the NUI Galway campus park-and-walk option.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Galway Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. Day 1 covers the city on foot — trad pubs, oysters, and Shop Street. Day 2 heads west into Connemara National Park. Day 3 is the Aran Islands. Book the ferry before anything else.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Latin Quarter · Spanish Arch · Salthill Prom · Trad at Tigh Neachtain"
                cost="€35–55 (food, drinks, museum)"
                items={[
                  "14:00 — Arrive Galway by Bus Éireann from Dublin (€15, 3 hours) or Irish Rail (€20–35, 2hr 10min) and drop bags at accommodation — hostel dorms from €22 at Sleepzone Galway Hostel on Bothar na mBan, or mid-range rooms from €90 at The House Hotel on Lower Merchant&apos;s Road. Both are within 10 minutes&apos; walk of everything in this itinerary.",
                  "15:00 — Walk Shop Street and Quay Street, the cobblestone heart of Galway&apos;s Latin Quarter. Street performers play in summer, the shopfronts are absurdly photogenic, and the Claddagh ring shops and handmade Irish craft stores along Kirwan&apos;s Lane are worth browsing properly. Free.",
                  "16:30 — Galway City Museum on Spanish Parade (free entry). Excellent exhibits on the Claddagh fishing village, the Spanish Arch, and Galway&apos;s medieval merchant history. The arch itself — the last remaining section of the city&apos;s 16th-century walls — is directly outside. Best photographed at low tide with the Claddagh visible across the River Corrib.",
                  "18:00 — Pre-dinner pint at Tigh Neachtain on Cross Street, one of Galway&apos;s oldest pubs. Low beams, open fires in winter, and a local crowd. Pints of Guinness from €5.50. The snug at the back is the most atmospheric corner in Galway.",
                  "19:30 — Dinner: fish and chips from McDonagh&apos;s on Quay Street (€12–15) — a Galway institution since 1902. The queue outside is part of the experience and moves quickly. Arguably the finest fish and chips in Ireland.",
                  "21:00 — Trad music at Tig Cóilí on Mainguard Street (free) or Tigh Neachtain — sessions start around 9:30pm. Both pubs run nightly traditional music in summer, played by local musicians who turn up for the love of it rather than the tourist trade. Alternatively walk to The Crane Bar on Sea Road for the most serious trad sessions in the city.",
                  "22:30 — Optional: Salthill promenade walk (20 minutes by taxi, €8; or 25 minutes on foot via the Claddagh). The 2km seafront walk along Galway Bay faces west across the Atlantic. Tradition demands you kick the wall at the far end — a Galway custom that locals follow religiously — before turning back.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Connemara National Park · Diamond Hill · Kylemore Abbey · Clifden"
                cost="€30–50 (bus, lunch, park free)"
                items={[
                  "08:30 — Bus Éireann Route 419 from Eyre Square to Clifden via Connemara (€14 return, book at buseireann.ie). The two-hour journey through Connemara bog landscape is itself one of Ireland&apos;s great bus rides — blanket bog, lakes, the Twelve Bens mountain range appearing and disappearing in Atlantic cloud.",
                  "10:30 — Connemara National Park visitor centre near Letterfrack (free entry, free parking). Collect a trail map and hike the Diamond Hill loop (7km, 2.5 hours). The trail climbs through heather moorland to a ridge with views across the Twelve Bens, the Atlantic coast, and on clear days all the way to the Aran Islands. One of Ireland&apos;s finest short mountain walks.",
                  "13:30 — Descend to Clifden, Connemara&apos;s largest town. Lunch at the Station House Café or Cullen&apos;s at the Owenlin (€12–18 for chowder and brown soda bread). Budget travellers: pack sandwiches from Galway and eat on the Diamond Hill summit.",
                  "15:00 — Optional detour to Kylemore Abbey (€18, car required or a taxi from Clifden) — a Victorian Gothic castle on a lake in the shadow of the Twelve Bens, now a Benedictine convent. The walled Victorian garden is beautifully maintained. Spectacular on misty days.",
                  "15:30 — Walk the Sky Road loop from Clifden (4km, 1 hour) if skipping Kylemore. The Atlantic cliffs of the Sky Road are some of Connemara&apos;s most dramatic viewpoints and are entirely free.",
                  "18:30 — Return Bus Éireann to Galway. Arrive back by 20:30 — enough time for a late dinner and an evening trad session at The Crane Bar or Monroe&apos;s Tavern.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Aran Islands Ferry · Inis Mór · Dún Aonghasa · Departure"
                cost="€55–75 (ferry €25, shuttle €6, bike hire €15, food)"
                items={[
                  "07:30 — Shuttle bus from Galway to Rossaveal ferry terminal (included in most Aran Islands Ferries packages or €6 separately — book at aranislandferries.com). The bus picks up from the tourist office on Forster Street.",
                  "09:00 — Ferry departs Rossaveal for Inis Mór (€25 return, 40 minutes across open Atlantic). The crossing passes close to the Clare coast and on clear mornings you can see the Cliffs of Moher from the ferry deck. A genuinely dramatic approach — limestone cliffs rising straight from the Atlantic.",
                  "10:00 — Rent a bicycle at Kilronan pier (€15/day) and cycle 8km to Dún Aonghasa. This Iron Age fort, perched on the edge of 90-metre sheer cliffs above the Atlantic, is one of Europe&apos;s most extraordinary prehistoric monuments. Entry €5. Arrive before 11am to have the inner fort to yourself before tour groups arrive.",
                  "13:00 — Lunch at one of the pier-side restaurants in Kilronan: seafood chowder and soda bread for €12–15. The seafood comes from boats that left the pier that morning.",
                  "14:30 — Cycle to the Seven Churches ruins (free) and the Worm Hole — a natural rectangular tidal pool in the limestone pavement used for cliff diving competitions. Both are far less visited than Dún Aonghasa and the limestone pavement landscape around the Worm Hole is unlike anywhere else in Europe.",
                  "17:00 — Return ferry from Inis Mór to Rossaveal and shuttle bus back to Galway. Arrive in Galway city centre by 19:30.",
                  "20:00 — Final evening: Galway Bay oysters and a Guinness at Moran&apos;s on the Weir (€18–22 for half-dozen native oysters, 15 minutes south of Galway city), or a last trad session at An Pucan on Forster Street before heading to your onward transport.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Galway" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Galway Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential Galway landmarks in order of priority. Most city-centre sites are free or low-cost — the main expenses are the Connemara and Aran Islands day trips.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Shop Street & Latin Quarter",
                  e: "Free",
                  d: "The cobblestone heart of Galway — Shop Street, Quay Street, and Kirwan&apos;s Lane form a compact pedestrian quarter lined with brightly painted shopfronts, street performers, traditional craft shops, and the city&apos;s best trad pubs. The most atmospheric 10-minute walk in Ireland.",
                  t: "Must see · 1–2 hrs",
                },
                {
                  n: "Galway Cathedral",
                  e: "Free",
                  d: "The Cathedral of Our Lady Assumed into Heaven and St Nicholas, consecrated in 1965, is one of the last great stone cathedrals built in the English-speaking world. The Connemara marble floors and the vast interior — Renaissance-style with a Byzantine dome — are genuinely impressive. Sits on the River Corrib five minutes from the Latin Quarter.",
                  t: "Must see · 30 mins",
                },
                {
                  n: "Spanish Arch",
                  e: "Free",
                  d: "The last remaining section of Galway&apos;s 16th-century city walls, built to protect Spanish wine merchants unloading their ships. Sits at the mouth of the River Corrib where it meets Galway Bay. The area around the arch is Galway&apos;s best outdoor sitting spot in summer — locals gather here with drinks from nearby pubs.",
                  t: "Must see · 20 mins",
                },
                {
                  n: "Salthill Promenade & Diving Board",
                  e: "Free",
                  d: "The 2km seafront promenade along Galway Bay, 2km west of the city centre. The tradition: walk the full length and kick the wall at the end — a Galway custom so embedded in local culture that not doing it feels wrong. The Blackrock Diving Tower at the end is used for swimming year-round by committed Galwegians.",
                  t: "Tradition · 45 mins",
                },
                {
                  n: "Connemara National Park",
                  e: "Free (day trip, 1 hr from Galway)",
                  d: "25,000 acres of blanket bog, mountain heath, and Atlantic coastline managed by the National Parks and Wildlife Service. The Diamond Hill loop (7km) is the signature walk — accessible from the free visitor centre near Letterfrack. No ticket needed for the park; just turn up and walk.",
                  t: "Day trip · Full day",
                },
                {
                  n: "Cliffs of Moher",
                  e: "€8 (day trip, 1.5 hrs from Galway)",
                  d: "The most visited natural attraction in Ireland — 214-metre sea cliffs extending 14km along the Clare coast. Accessible from Galway by Bus Éireann day tour (€25 return including entry) or by car. Best visited early morning before the coach tours arrive. On clear days, the Aran Islands are visible from the cliff edge.",
                  t: "Day trip · Half day",
                },
                {
                  n: "Aran Islands — Inis Mór Ferry",
                  e: "€25 return (ferry from Rossaveal)",
                  d: "The largest of the three Aran Islands, Inis Mór has the prehistoric cliff fort of Dún Aonghasa, the natural tidal pool called the Worm Hole, and the Seven Churches ruins — all on an island of limestone pavement, traditional stone walls, and Irish-speaking communities. The 40-minute Atlantic crossing from Rossaveal is an experience in itself.",
                  t: "Day trip · Full day",
                },
                {
                  n: "Tigh Neachtain & Tig Cóilí",
                  e: "Free (trad music sessions)",
                  d: "The two best traditional music pubs in the Latin Quarter. Tigh Neachtain on Cross Street is one of the oldest pubs in Galway — low ceilings, snugs, open fires. Tig Cóilí on Mainguard Street runs some of the most attended nightly trad sessions in the city. Both are free — buy a pint and stay.",
                  t: "Evenings · 2 hrs+",
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
            title="Galway — Cobblestones, Connemara &amp; the Atlantic"
            subtitle="Ireland&apos;s west coast through the Latin Quarter, wild bogs, and limestone islands."
            spots={[
              {
                name: "Galway Latin Quarter Cobblestones",
                query: "galway latin quarter cobblestone street ireland colourful shopfronts",
                desc: "Shop Street and Quay Street — the cobblestone heart of Galway&apos;s Latin Quarter with its brightly painted shopfronts and trad pub culture.",
              },
              {
                name: "Connemara National Park",
                query: "connemara national park ireland bog mountains twelve bens atlantic",
                desc: "The Diamond Hill loop in Connemara National Park — blanket bog, the Twelve Bens, and Atlantic coastline stretching to the horizon.",
              },
              {
                name: "Dún Aonghasa Aran Islands",
                query: "dun aonghasa aran islands ireland iron age fort atlantic cliffs",
                desc: "Dún Aonghasa on Inis Mór — the Iron Age cliff fort perched on 90-metre sheer cliffs above the Atlantic Ocean.",
              },
              {
                name: "Galway Bay Sunset",
                query: "galway bay sunset salthill promenade ireland atlantic",
                desc: "Galway Bay from the Salthill promenade — the 2km seafront walk that faces due west into the Atlantic at sunset.",
              },
              {
                name: "Trad Music Galway Pub",
                query: "galway pub trad music ireland traditional session",
                desc: "A traditional music session in a Galway pub — the Latin Quarter&apos;s nightly trad culture is the most authentic in Ireland.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Galway is mid-range by European standards. The city itself is affordable — hostels from €22, fish and chips for €13 — but the day trips to Connemara and the Aran Islands add meaningful cost. Budget at least €55/day for a comfortable trip.
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
                    ["🏨 Accommodation (per night)", "€22–35 (hostel dorm)", "€90–140 (3-star hotel)", "€200–500 (castle/lodge)"],
                    ["🍽️ Food (per day)", "€18–28 (cafes, chippers)", "€40–60 (bistros, seafood)", "€100–180 (Michelin dining)"],
                    ["🚌 Transport (day trips)", "€14–25 (Bus Éireann)", "€35–50 (car hire)", "€60–180 (private driver)"],
                    ["🏝️ Aran Islands ferry", "€25 return + €6 shuttle", "€50 return (Aer Arann flight)", "€300 (charter flight)"],
                    ["🎭 Activities & entry fees", "€10–20 (parks free, €8 Moher)", "€25–45 (Kylemore, oysters)", "€100–250 (private tours)"],
                    ["💰 TOTAL per day", "€55–75/day", "€120–170/day", "€280–450/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€55–75/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Sleepzone Galway Hostel dorm (€22–28/night), McDonagh&apos;s fish and chips (€13), Bus Éireann day trips. Connemara National Park is free — the bus pass (€14) is your main cost on day 2. Completely comfortable and authentic.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€120–170/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">The House Hotel (€90–120/night), Kai Café for dinner (€35–45/pp), car hire for Connemara day (€35–50). The sweet spot for Galway — access to the best restaurants without the castle prices.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">✨ Luxury (€280–450/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">g Hotel &amp; Spa Galway (€200–350/night), Aniar Michelin tasting menu (€90–110/pp), private Connemara guide, charter flight over the Aran Islands. One of Ireland&apos;s finest luxury travel experiences.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Galway</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Stay in or near the Latin Quarter for maximum convenience — everything in this guide is walkable. Eyre Square hotels put you directly on the bus routes for Connemara and the Aran Islands shuttle.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "g Hotel & Spa",
                  type: "Luxury boutique · Wellpark, 10 min from Latin Quarter",
                  price: "From €200/night",
                  badge: "Most glamorous",
                  desc: "Philippe Starck-designed interior — outrageous pink décor, stunning atrium, exceptional spa, and the best Irish whiskey selection in Galway. The g Hotel is a design statement as much as a hotel. Taxi or 15-minute walk to the Latin Quarter.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "The House Hotel",
                  type: "Boutique mid-range · Lower Merchant&apos;s Road",
                  price: "From €90/night",
                  badge: "Best location",
                  desc: "Boutique hotel on Lower Merchant&apos;s Road, 5 minutes&apos; walk from Shop Street and 3 minutes from the Spanish Arch. Stylish rooms with good beds, a reliable bar, and a breakfast that includes Galway Bay smoked salmon. The best mid-range option in the city.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Sleepzone Galway Hostel",
                  type: "Hostel · Bothar na mBan, near Eyre Square",
                  price: "From €22/night (dorm)",
                  badge: "Best budget",
                  desc: "Galway&apos;s best-reviewed hostel — clean dorms, reliable WiFi, a communal kitchen, and staff who actually know the city. The Eyre Square location puts you on every bus route and 10 minutes from the Latin Quarter on foot. Private rooms also available from €60/night.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Lough Inagh Lodge",
                  type: "Luxury lodge · Connemara (45 min from Galway)",
                  price: "From €200/night",
                  badge: "Best Connemara base",
                  desc: "A fishing lodge directly on Lough Inagh in Connemara, surrounded by the Twelve Bens. One of Ireland&apos;s most dramatic hotel settings — walk out the front door into open bog and mountain. Ideal if you&apos;re prioritising Connemara over city life. Book well ahead.",
                  color: "border-teal-200 bg-teal-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Galway</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Galway has one of Ireland&apos;s most acclaimed restaurant scenes relative to its size. Kai Café and Aniar are consistently rated among Ireland&apos;s best restaurants. For budget eating, McDonagh&apos;s fish and chips is as good as it gets anywhere in the country.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Aniar",
                  t: "Michelin star · Lower Dominick Street",
                  d: "Galway&apos;s Michelin-starred restaurant, run by chef JP McMahon. The tasting menu (€75–90/pp) changes monthly and showcases only Connacht and Clare producers — Connemara lamb, hand-dived Clare scallops, Atlantic seaweed, and heritage vegetables from within 50km. One of the finest meals in Ireland. Book 3–4 weeks ahead.",
                  b: "Michelin star",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Kai Café & Restaurant",
                  t: "Farm-to-table · Sea Road, Westend",
                  d: "Consistently voted one of Ireland&apos;s best restaurants, operating on a simple farm-to-table philosophy. The lunch menu (€18–25 for two courses) is outstanding value using west of Ireland producers. Dinner is more elaborate (€35–45/pp) and requires booking 1–2 weeks ahead. Excellent vegetarian and vegan options.",
                  b: "Best value fine dining",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "McDonagh&apos;s Fish & Chips",
                  t: "Galway institution · Quay Street",
                  d: "A Galway institution since 1902. The fish — haddock, plaice, or ray — comes off the boats that morning. The batter is light, the chips are thick-cut, and the queue outside is part of the experience. €12–15 for a full portion. No frills, no reservations, no apologies. Arguably the finest fish and chips in Ireland.",
                  b: "Galway classic",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Ard Bia at Nimmos",
                  t: "Riverside dining · Spanish Arch",
                  d: "Galway&apos;s most atmospheric restaurant, sitting directly on the River Corrib beside the Spanish Arch. The native oyster tasting plate (€18 for six) is the benchmark Galway experience — wild Galway Bay oysters with mignonette, brown soda bread, and a glass of Picpoul. Also excellent for weekend brunch.",
                  b: "Best for oysters",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  n: "Gourmet Tart Co",
                  t: "Café bakery · Multiple locations",
                  d: "Galway&apos;s best bakery and café chain — outstanding sourdough, proper coffee, and lunch boards using local produce. The Salthill and William Street branches are the busiest. Ideal for a quick lunch (€10–15) before heading out on a day trip. Strong vegetarian and vegan selection.",
                  b: "Best for lunch",
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
            destination="Galway Ireland"
            hotels={[
              {
                name: "g Hotel & Spa",
                type: "Luxury boutique · Philippe Starck design",
                price: "From €200/night",
                rating: "5",
                badge: "Most glamorous",
                url: "https://www.booking.com/hotel/ie/the-g-hotel.html?aid=2820480",
              },
              {
                name: "The House Hotel",
                type: "Boutique mid-range · Latin Quarter",
                price: "From €90/night",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/ie/the-house-galway.html?aid=2820480",
              },
              {
                name: "Sleepzone Galway Hostel",
                type: "Hostel · Eyre Square area",
                price: "From €22/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/ie/sleepzone-galway.html?aid=2820480",
              },
              {
                name: "Lough Inagh Lodge",
                type: "Luxury lodge · Connemara",
                price: "From €200/night",
                rating: "5",
                badge: "Best Connemara",
                url: "https://www.booking.com/hotel/ie/lough-inagh-lodge.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Galway City Walking Food Tour",
                duration: "3 hrs",
                price: "From €55/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Galway+food+tour&partner_id=PSZA5UI",
              },
              {
                name: "Connemara & Kylemore Abbey Day Tour",
                duration: "9 hrs",
                price: "From €35/person",
                badge: "Best day trip",
                url: "https://www.getyourguide.com/s/?q=Connemara+day+tour+Galway&partner_id=PSZA5UI",
              },
              {
                name: "Aran Islands Day Tour from Galway",
                duration: "Full day",
                price: "From €45/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=Aran+Islands+day+tour&partner_id=PSZA5UI",
              },
              {
                name: "Cliffs of Moher & Burren Day Trip",
                duration: "10 hrs",
                price: "From €35/person",
                url: "https://www.getyourguide.com/s/?q=Cliffs+of+Moher+day+trip+Galway&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Galway</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🌊",
                  title: "Not booking the Aran Islands ferry in advance",
                  desc: "The Aran Islands ferries fill completely in July and August, especially on weekends. Book at aranislandferries.com at least 3 days ahead in shoulder season and 2–3 weeks ahead in summer. The Rossaveal ferry (40 min) is significantly faster and more reliable than the older Galway Docks route.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🍺",
                  title: "Expecting trad music every night in winter",
                  desc: "Year-round trad sessions are concentrated in summer (May–September). In January and February even the best trad pubs may have sessions only on weekends. The Crane Bar and Tigh Neachtain run sessions year-round but check schedules at galway.ie before planning evenings around trad music.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🚗",
                  title: "Trying to see Connemara without transport",
                  desc: "Bus Éireann reaches Clifden and the main towns, but the most spectacular Connemara landscapes — the bogs at Maam Cross, the Killary fjord road, the hidden lake shores — require a car or a dedicated tour. Car hire for one day (€35–50) opens up a completely different Connemara than the bus route alone.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🥇",
                  title: "Arriving during Galway Races without knowing it",
                  desc: "The Galway Races (last week of July and early August) are one of Ireland&apos;s biggest events. The city is booked out 6 months ahead and hotel prices triple. If you are not attending the races, avoid this week or book very far in advance. If you are attending, it is one of the great Irish cultural experiences of any year.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🦪",
                  title: "Eating oysters outside peak season",
                  desc: "Galway Bay native oysters are at their absolute peak from September to April — the traditional rule is months with an R in the name. The famous Galway International Oyster Festival in September celebrates the start of native season. In July and August you will likely be served Pacific rock oysters, which are good but not the same as the native flat oysters.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Galway</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎵",
                  title: "Go to The Crane Bar for the best trad sessions",
                  desc: "The Crane Bar on Sea Road runs the most authentic traditional music sessions in Galway — not performed for tourists but by local musicians who turn up and play for the love of it. Arrive by 9pm to get a seat upstairs. Sessions are free; buy a pint and settle in for two hours.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🌅",
                  title: "Walk the Salthill Prom at sunset",
                  desc: "The 2km Salthill promenade along Galway Bay faces due west across the Atlantic and produces some of the finest sunsets in Ireland. Walk from the city centre (25 minutes on foot via the Claddagh or €8 taxi) and kick the wall at the end — a Galway tradition that locals follow without exception.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🥘",
                  title: "Book Kai Café at least a week ahead",
                  desc: "Kai Café on Sea Road is consistently voted one of Ireland&apos;s best restaurants and books out fast. The lunch menu is outstanding value (€18–25 for two courses). Dinner requires booking 1–2 weeks ahead in summer. Walk-ins for lunch are sometimes possible on weekdays before noon.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "📅",
                  title: "Time your visit around the Galway Arts Festival",
                  desc: "The Galway International Arts Festival (mid-July, two weeks) is one of Europe&apos;s premier arts events — outdoor theatre, contemporary art, international music, and free street events that transform the Latin Quarter. The city is packed and expensive but the atmosphere is extraordinary.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🏇",
                  title: "Galway Races is worth planning around",
                  desc: "The Galway Races (late July) are one of Ireland&apos;s great social events. If you can book accommodation 6 months ahead, attending the Ladies Day or Thursday race card is genuinely memorable. The race course is 20 minutes from the city centre by shuttle bus (€5 return).",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "🗺️",
                  title: "Connemara rewards a car, not a tour bus",
                  desc: "Guided day tours from Galway to Connemara are popular but they rush you. Renting a car for €35–50 and self-driving the N59 west through the bog landscape — stopping wherever a view demands it — gives a completely different Connemara experience. The hidden loughs and coastal roads are inaccessible by bus.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Galway" />

          {/* Combine With */}
          <CombineWith currentSlug="galway-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How do I get from Dublin to Galway?",
                  a: "Bus Éireann Express routes X20 and 20 run from Dublin Busáras and Dublin Airport to Galway Eyre Square every hour. Journey time is 3 hours. Tickets cost €15 booked online in advance. Irish Rail also runs Dublin Heuston to Galway Ceannt Station in 2 hours 10 minutes (€20–35 depending on booking time). Both options drop you in Galway city centre.",
                },
                {
                  q: "What is the best time of year to visit Galway?",
                  a: "May to September offers the best weather and the most events. July is peak season with the Arts Festival and Races but also the most crowded and expensive. September is many locals&apos; favourite month — quieter than July, the Oyster Festival, good weather odds, and the best native oysters of the year. December has Christmas markets and strong trad music in a less touristy atmosphere.",
                },
                {
                  q: "Can I do both Connemara and the Aran Islands in 3 days?",
                  a: "Yes, with efficient planning. Day 1 covers Galway city. Day 2 is Connemara by car or Bus Éireann (full day, return to Galway by evening). Day 3 is the Aran Islands ferry from Rossaveal (full day, return to Galway by 19:30). You need to book both the car hire and the ferry in advance. The shuttle bus from Galway to Rossaveal is included in most Aran Islands Ferries packages.",
                },
                {
                  q: "How much does the Aran Islands ferry cost?",
                  a: "Aran Islands Ferries from Rossaveal costs €25 return for adults. The shuttle bus from Galway city to Rossaveal terminal is an additional €6 return (or included in some ticket packages). On Inis Mór, bicycle hire is €15/day and Dún Aonghasa entry is €5. Budget €55–65 total for a full Aran Islands day including food.",
                },
                {
                  q: "Is Galway suitable for vegetarian and vegan travellers?",
                  a: "Galway is one of Ireland&apos;s most vegetarian-friendly cities. Kai Café, Ard Bia at Nimmos, and Gourmet Tart Co all have strong plant-based menus. The Latin Quarter has several dedicated vegetarian cafés and the Saturday market at Eyre Square always has excellent vegetarian street food. Vegan options have expanded significantly across all price ranges.",
                },
                {
                  q: "What is the Galway Races and when does it happen?",
                  a: "The Galway Races (Galway Festival) is one of Ireland&apos;s largest horse racing and social events, running for seven days in late July (typically the last week of July into the first days of August). It is as much a social event as a sporting one — Ladies Day on Thursday is famous for its fashion. The entire city fills up for races week; book accommodation 6 months ahead if you plan to attend.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Galway trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/connemara-day-trip-from-galway", label: "Connemara day trip", icon: "🏔️" },
                { href: "/blog/aran-islands-guide", label: "Aran Islands guide", icon: "🏝️" },
                { href: "/blog/galway-trad-music-guide", label: "Trad music guide", icon: "🎵" },
                { href: "/blog/ireland-travel-tips", label: "Ireland travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="galway-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Ireland &amp; UK Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Dublin in 4 Days — Guinness, History &amp; Culture", href: "/blog/dublin-4-days" },
                { label: "Belfast in 4 Days — Murals, Titanic &amp; Food", href: "/blog/belfast-4-days" },
                { label: "Edinburgh in 4 Days — Castles &amp; Whisky", href: "/blog/edinburgh-4-days" },
                { label: "London in 5 Days — The Complete Guide", href: "/blog/london-5-days" },
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
