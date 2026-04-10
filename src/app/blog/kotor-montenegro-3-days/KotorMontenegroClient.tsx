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
const KOTOR_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Kotor Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",  emoji: "🏰",  label: "Landmark Guide" },
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
          href: `mailto:?subject=Kotor Montenegro 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Kotor Montenegro in 3 Days — medieval walls, Bay of Kotor and Our Lady of the Rocks&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/kotor-montenegro-3-days"
        imageUrl="https://images.unsplash.com/photo-1555990793-da05eaa2bc06?w=1200&q=80"
        description="Kotor Montenegro in 3 Days: medieval walls, Bay of Kotor UNESCO fjord, Our Lady of the Rocks, Perast, and Njeguski smoked ham — complete travel guide."
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
export default function KotorMontenegroClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KOTOR_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Kotor, Montenegro" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="kotor montenegro bay old town medieval walls limestone mountain adriatic"
            fallback="https://images.unsplash.com/photo-1555990793-da05eaa2bc06?w=1600&q=80"
            alt="Kotor Montenegro Old Town with medieval walls climbing the limestone mountain above the Bay of Kotor"
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
              <span className="text-white/70">Kotor Montenegro 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO Bay of Kotor
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Kotor Montenegro in 3 Days:
                <em className="italic text-amber-300"> Medieval Walls, the Bay &amp; Njeguski Ham</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                4.5km of fortress walls, a baroque church on an artificial island, Venetian lanes, Perast village, and Montenegrin wine at sunset. The complete guide from €45/day to luxury marina hotels.
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
              <span>🇲🇪 Montenegro, Europe</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From €45/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Kotor is what happens when the Venetians spend 400 years fortifying the most dramatic bay in the Adriatic — a perfectly preserved medieval city enclosed by 4.5km of walls that climb vertically up a sheer limestone mountain, with a dark submerged canyon that looks far more like a Norwegian fjord than anything the Mediterranean has any right to produce.
            </p>
          </blockquote>

          {/* ── WHAT KOTOR ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Kotor Montenegro Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Bay of Kotor is technically a submerged river canyon — a ria, not a fjord — but its dark inky depths, sheer karst cliffs plunging to the water, and mirror-calm mornings feel more dramatic than much of Norway. The Venetians controlled Kotor for 400 years and called the bay the most beautiful in the world. Their 15th-century walls, intact towers, and Baroque churches survive essentially unchanged.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Inside the old town walls, Kotor is a maze of flagstone lanes, Venetian piazzas, and 13 Romanesque churches — including the Cathedral of Saint Tryphon (1166 CE), still holding its silver reliquary and 12th-century frescoes. The fortress walls climb 260 metres above sea level in 1,350 steps to San Giovanni Castle, where the view over the entire bay feels like something a film production would build and then decide was too beautiful to be believable.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Three days is ideal. Enough time to hike the walls at sunrise, take a rowboat to the baroque church on Our Lady of the Rocks island at Perast, eat Njeguski smoked ham in a mountain village above the bay, and drink Montenegrin Vranac as the light fades over still water. And unlike Dubrovnik — which Kotor resembles and which is 2.5 hours away — it remains genuinely manageable outside peak season.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Nearest Airport" value="Tivat (TIV)" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Jun, Sep–Oct" />
              <StatCard icon="🏰" label="Wall Length" value="4.5km" />
              <StatCard icon="💰" label="Budget From" value="€45/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Kotor</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "18–26°C, the bay is calm and green, crowds are manageable, and cruise ships have not yet arrived in force. April and May are the sweet spot: comfortable for the fortress hike, boat trips are running, and Perast is quiet. The bay reflections at dawn are exceptional in spring light.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Autumn — Excellent Alternative",
                  d: "22–28°C in September, cooling to 16–22°C in October. The summer crowds thin dramatically after the first week of September. The bay light turns golden in autumn and the surrounding mountains begin to colour. October brings occasional bora wind but generally excellent conditions.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "☀️",
                  t: "Summer — Busy and Hot",
                  d: "28–35°C and extremely crowded. Cruise ships disgorge up to 3,000 passengers into the old town between 10am and 2pm daily. The fortress hike in July midday heat is brutal — exposed limestone steps with no shade. If visiting in summer, hike at 6am and retreat inside by 10am.",
                  b: "Busy — plan around cruise ships",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Mar",
                  i: "🌧️",
                  t: "Winter — Quiet and Atmospheric",
                  d: "10–16°C with frequent rain in November and December. January and February are quiet, very cheap (hostels from €10/night), and the old town without tourists is atmospheric and genuinely photogenic. Some boat services to islands stop. The fortress is best avoided after heavy rain — steps become slippery.",
                  b: "For off-season travellers",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Kotor</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Kotor has no airport. The two nearest airports are <strong className="font-medium">Tivat (TIV)</strong> — 10 minutes by taxi — and <strong className="font-medium">Podgorica (TGD)</strong> — 90 minutes by road. Tivat is the default for most visitors. Dubrovnik Airport (DBV) in Croatia is also used, with a 2.5-hour bus or transfer to Kotor.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly to Tivat Airport (TIV) — recommended",
                  d: "Tivat Airport is 10km from Kotor old town — a €10–15 taxi ride, 10 minutes. Seasonal direct flights from London, Vienna, Frankfurt, Istanbul, and other European hubs. In summer, Tivat is one of the busiest Adriatic airports. The most convenient entry point for Kotor.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Fly to Podgorica (TGD) — year-round flights",
                  d: "Podgorica Airport has year-round flights including budget carriers. The drive to Kotor is 90 minutes via the scenic coastal road. A taxi costs €40–60. Bus services run from Podgorica bus station to Kotor for €8, taking 1.5–2 hours. Use Podgorica in winter when Tivat has fewer flights.",
                  b: "Year-round option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Dubrovnik, Croatia",
                  d: "The Dubrovnik–Kotor bus runs several times daily (2.5 hours, €10–15). The route crosses the Bosnian border at Neum — bring your passport even if you hold an EU or US document. Seasonally, fast ferry services run between Dubrovnik and Kotor (2 hours by sea along the most beautiful coastline in the region, €25–40).",
                  b: "Popular route",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Drive the Montenegrin Coastal Road",
                  d: "The Montenegro coastal road from Herceg Novi to Kotor follows the entire bay shoreline — one of Europe&apos;s great scenic drives. Renting a car unlocks the full bay circuit: Perast, Risan, Dobrota, Muo, and the mountain road up to Njeguski village. Car hire from Tivat Airport from €30/day.",
                  b: "Most scenic",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Kotor Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is designed around the fortress hike before cruise ships arrive, a full day on the bay to Perast and Our Lady of the Rocks, and an inland mountain day to Njeguski village with its legendary smoked ham.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Old Town Arrival · San Giovanni Fortress · Cathedral of Saint Tryphon"
                cost="€35–55 (accommodation, entry fees, dinner, airport taxi)"
                items={[
                  "Arrive Tivat Airport and take a taxi to the old town (€10–15, 10 minutes). Check into accommodation inside or just outside the Sea Gate — hostels start at €15/night in the old town, guesthouses from €35. Drop your bags and walk straight through the Sea Gate into the old town lanes.",
                  "15:00 — San Giovanni Fortress hike: the fortress walls begin at the Church of Saint Mary on the inland side of the old town. Entry is €8 and covers the full 4.5km wall circuit. The 1,350 steps to San Giovanni Castle take 60–90 minutes at a steady pace. Go in the afternoon for golden hour light on the bay — the view from 260 metres over the whole bay is the defining Kotor experience.",
                  "17:30 — Walk the old town lanes for free after descending: the Cathedral of Saint Tryphon (€3, built 1166 CE) houses one of the Adriatic&apos;s finest collections of medieval silver reliquaries and 12th-century frescoes. The Maritime Museum (€4) tells the story of Boka sailors who navigated the world from this tiny medieval port.",
                  "19:30 — Dinner inside the old walls at a konoba on the back streets away from the main square (Trg od Oružja). Fresh Adriatic fish, lamb under peka, and local white Krstac wine. Expect €15–25 per person. The restaurants directly on the clock tower square charge double.",
                  "21:30 — Evening stroll along the waterfront promenade outside the northern walls. The old town lights reflect in the bay after dark and the cruise ships are long gone. Completely different atmosphere to the daytime old town.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Perast · Our Lady of the Rocks · Budva Riviera"
                cost="€35–60 (bus, boat, lunch, optional Budva taxi)"
                items={[
                  "09:00 — Local bus from Kotor bus station to Perast village (€2, 20 minutes). Perast is the most perfectly preserved Baroque town on the Adriatic — 17 churches and 12 palaces for a village of just 300 people, all built by wealthy Boka sea captains who grew rich trading between Venice and the Ottoman Empire.",
                  "10:00 — Rowboat taxi from Perast waterfront to Our Lady of the Rocks island (€5 each way, 5-minute crossing). The island was artificially built from 1452 by local sailors who added stones and sunken ships after a tradition required them to leave a stone whenever they passed safely. The baroque church interior contains 68 tapestries stitched by local women over generations — one took 25 years to complete by a single woman. The craftsmanship is extraordinary.",
                  "12:00 — Lunch at a waterfront konoba in Perast (€12–18). The view down the bay from Perast&apos;s waterfront — two islands, limestone mountains, and the inner bay curving away — is one of the UNESCO postcard views of the Adriatic. Order grilled sea bass and a glass of Vranac red.",
                  "14:30 — Return bus to Kotor or continue south to Budva Old Town (€3 bus, 45 minutes). Budva is Montenegro&apos;s liveliest medieval walled town with a completely different character to Kotor — beaches directly below the old walls, a more energetic evening scene, and the ultra-exclusive Sveti Stefan island hotel visible offshore.",
                  "19:00 — Return to Kotor for the evening. Niksicko beer at a bar inside the old walls (€2) or a glass of Krstac white wine (€3). The old town empties of day-trippers by 6pm and becomes a completely different, quieter place.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Njeguski Village · Lovćen National Park · Departure"
                cost="€40–65 (village transport, lunch, ham shopping, airport taxi)"
                items={[
                  "08:30 — Shared taxi or organised tour to Njeguski village above the bay (€10–15 each way, or €35–50 for a guided half-day). The mountain road climbs through 25 hairpin bends with the bay below — one of the most dramatic roads in Europe and a driving experience in its own right. The view looking back down over Kotor from the first switchbacks is exceptional.",
                  "10:00 — Visit a village smokehouse in Njeguski to taste and buy Njeguski prsut (smoked ham) and hard cheese directly from producers. The ham is air-dried and cold-smoked over beech wood for months at altitude — it tastes nothing like anything in a supermarket. €12–18/kg direct from producer, versus €35–50 in old town tourist shops. Buy half a kilo minimum.",
                  "12:00 — Lunch at a village konoba in Njeguski (€12–18). Roast lamb, smoked ham platters, local cornmeal bread, and house wine from barrel. The village sits at 860m altitude — noticeably cooler than the coast and with panoramic views toward Albania on a clear day.",
                  "14:00 — Optional extension to Lovćen National Park and the Mausoleum of Petar II Petrović-Njegoš at 1,660m altitude. The mausoleum of Montenegro&apos;s greatest ruler sits on the highest peak of Lovćen, reached by 461 steps from the car park. On a clear day the view covers Montenegro, Albania, and the entire Adriatic coast.",
                  "16:00 — Return to Kotor old town. Final espresso in the square (€1.50) and a last walk through the Sea Gate and along the waterfront. Transfer to Tivat Airport (€10–15 taxi, 10 minutes) or Podgorica Airport (€40–55 taxi, 90 minutes).",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Kotor, Montenegro" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏰 Kotor Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees as of early 2026. The €8 fortress ticket covers the entire 4.5km wall circuit including San Giovanni Castle.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "San Giovanni Fortress & City Walls",
                  e: "€8 (full wall circuit)",
                  d: "The defining Kotor experience. 1,350 steps from the old town to San Giovanni Castle at 260m above the bay. The walls were built by the Venetians from the 9th to 19th century — in places they are 20m thick. The full 4.5km circuit takes 2–3 hours. Go at sunrise or golden hour for the best photographs and coolest temperatures.",
                  t: "Must do · 2–3 hrs",
                },
                {
                  n: "Cathedral of Saint Tryphon",
                  e: "€3",
                  d: "Built in 1166 CE and one of the finest Romanesque buildings in the Adriatic. The treasury contains gold and silver reliquaries of the Kotor patron saint and 12th-century Byzantine-style frescoes in the upper gallery. The two asymmetrical bell towers (one rebuilt after a 1667 earthquake) are the architectural symbol of the old town.",
                  t: "Must see · 45 mins",
                },
                {
                  n: "Our Lady of the Rocks, Perast",
                  e: "Free (boat €5 each way)",
                  d: "An artificial island church built from 1452 by generations of Boka sailors who added stones and sunken ships to an existing reef. The baroque church interior is covered in 68 votive paintings and tapestries — including one stitched entirely by a single woman over 25 years using gold thread woven from her own hair as it went grey. The island is 5 minutes by rowboat from Perast.",
                  t: "Must see · 1.5 hrs from Perast",
                },
                {
                  n: "Maritime Museum of Montenegro",
                  e: "€4",
                  d: "Inside the 17th-century Grgurina Palace in the old town. Tells the story of the Boka Kotorska sailors who formed one of the most admired maritime guilds in the Mediterranean — the Bokeljska Mornarica, still active today. Outstanding collection of navigational instruments, ships&apos; logs, and portraits of Boka sea captains.",
                  t: "1 hr",
                },
                {
                  n: "Lovćen National Park & Njegoš Mausoleum",
                  e: "€3 park entry + €5 mausoleum",
                  d: "30km from Kotor at 1,660m altitude, the mausoleum of Petar II Petrović-Njegoš — Montenegro&apos;s founder-king, poet, and bishop — occupies the summit of Mount Lovćen. The building was designed by Ivan Meštrović, Croatia&apos;s greatest sculptor. 461 steps from the car park; 360-degree views on clear days include Albania and the entire Adriatic.",
                  t: "Half-day from Kotor",
                },
                {
                  n: "Budva Old Town & Sveti Stefan",
                  e: "Free (Sveti Stefan viewpoint free)",
                  d: "Budva is 25km south of Kotor — Montenegro&apos;s most lively medieval walled town. Beaches immediately below the walls, a more energetic nightlife, and the famous Sveti Stefan: a 15th-century island village converted into an ultra-luxury resort (the hotel is private, but the view from the road above is free and extraordinary).",
                  t: "Half-day from Kotor",
                },
                {
                  n: "Cetinje — Montenegro&apos;s Old Capital",
                  e: "Museum tickets €2–4",
                  d: "Montenegro&apos;s original capital (before Podgorica), 35km from Kotor through Lovćen National Park. A small mountain town of embassies built for a country that was never conquered by the Ottomans. The National Museum, the Cetinje Monastery (holding a relic of the Hand of St John the Baptist), and the old royal palace are all worth visiting.",
                  t: "Half-day from Kotor",
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
            title="Kotor — Bay, Walls &amp; Baroque Villages"
            subtitle="The Adriatic&apos;s most dramatic medieval city and the villages of the Bay of Kotor."
            spots={[
              {
                name: "Kotor Old Town & Bay",
                query: "kotor old town bay medieval walls adriatic montenegro aerial",
                desc: "Kotor&apos;s medieval old town from the water — limestone mountains rising directly from the bay, fortress walls climbing the cliff face.",
              },
              {
                name: "San Giovanni Fortress",
                query: "san giovanni fortress kotor walls steps hike viewpoint",
                desc: "San Giovanni Castle at 260m above the bay — the view from the top of Kotor&apos;s 4.5km fortress walls at sunrise.",
              },
              {
                name: "Our Lady of the Rocks, Perast",
                query: "our lady of the rocks perast island church bay kotor montenegro",
                desc: "The baroque island church of Our Lady of the Rocks — an artificial island built by sailors since 1452 in the middle of the Bay of Kotor.",
              },
              {
                name: "Perast Village Waterfront",
                query: "perast village waterfront bay kotor baroque adriatic montenegro",
                desc: "Perast — 17 churches and 12 palaces for a village of 300 people, on the inner bay of Kotor.",
              },
              {
                name: "Sveti Stefan Island Hotel",
                query: "sveti stefan island hotel budva montenegro adriatic coast",
                desc: "Sveti Stefan — a 15th-century island village converted into Montenegro&apos;s most iconic luxury hotel, viewed from the road above Budva.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Montenegro uses the euro (€) despite not being an EU member — it was unilaterally adopted. Kotor is significantly cheaper than Dubrovnik for equivalent quality. Budget travellers can eat, sleep, and see everything for €45–65/day; mid-range comfort costs €100–150/day.
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
                    ["🏨 Accommodation/night", "€15–25 (hostel)", "€70–120 (boutique)", "€250–500 (5-star bay)"],
                    ["🍽 Food/day", "€15–25 (konoba + local bars)", "€40–60 (restaurants)", "€100–180 (fine dining)"],
                    ["🚌 Transport/day", "€8–15 (buses + taxis)", "€25–40 (private taxis)", "€80–200 (private car/boat)"],
                    ["🏰 Activities/day", "€8–20 (walls + cathedral)", "€30–50 (tours + Lovcen)", "€100–200 (private access)"],
                    ["TOTAL/day", "€45–65", "€100–150", "€280–450"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€45–65/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Old Town Hostel (€15–20/night dorm), konoba meals (€10–18 main), buses to Perast (€2), fortress entry (€8). Very achievable and comfortable in Kotor — the free pleasures (old town, waterfront, bay views) are the best ones anyway.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range (€100–150/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Hotel Vardar or Cattaro (€70–120/night), dinner at Galion restaurant (€35–45), private taxis to Perast and Lovcen, guided walking tour. The sweet spot for experiencing Kotor properly without the extremes of luxury.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (€280–450/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Forza Mare Kotor or Regent Porto Montenegro Tivat (€250–500/night), private boat charter through the bay (€400/day shared), tasting menus, private guides. Montenegro&apos;s luxury tier is genuinely world-class and still cheaper than comparable Dubrovnik options.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Kotor</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Staying inside the old town walls or within 5 minutes&apos; walk of the Sea Gate puts you in the best position for sunrise fortress hikes and evening atmosphere. Accommodation inside the walls is limited — book early for April, May, and September.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Forza Mare Kotor",
                  type: "Luxury boutique · Dobrota, 2km from old town",
                  price: "From €180/night",
                  badge: "Most spectacular views",
                  desc: "The benchmark for luxury on the Bay of Kotor. A converted 18th-century stone villa directly on the waterfront in Dobrota with uninterrupted bay views from every room. Private dock, spa, fine dining restaurant, and the kind of morning light over the water that makes it impossible to leave on time.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hotel Vardar",
                  type: "Boutique hotel · Inside the old town walls",
                  price: "From €80/night",
                  badge: "Best old town location",
                  desc: "A restored 18th-century Venetian palace inside the old town walls, one minute from the Cathedral of Saint Tryphon. Stone-vaulted rooms, antique furnishings, and the best location in Kotor for exploring the old town on foot. Small roof terrace with fortress views. Book the bay-view rooms.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Old Town Hostel Kotor",
                  type: "Hostel · Inside the old town walls",
                  price: "From €15/night (dorm)",
                  badge: "Best budget",
                  desc: "The best budget option inside the old town walls. Dormitories and private rooms in a converted stone building, 2 minutes from the Sea Gate. Social common areas, helpful staff for local advice, and the incomparable advantage of sleeping inside one of the Adriatic&apos;s best-preserved medieval cities. Book dorm beds at least 1 week ahead in peak season.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Palazzo Radomiri",
                  type: "Heritage boutique · Dobrota",
                  price: "From €120/night",
                  badge: "Most romantic",
                  desc: "An 18th-century Venetian nobleman&apos;s palace converted into a small hotel with 10 rooms on the bay shore at Dobrota. Each room is individually furnished with period antiques; the hotel has a private bathing platform directly on the bay. The morning view of the mountains across the water is extraordinary.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Kotor</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Kotor&apos;s food scene rewards those who explore beyond the main clock tower square. The best konobas are on the back streets — smaller, no menus in 12 languages, and serving the actual Montenegrin food rather than tourist approximations. Key dishes: fresh Adriatic fish, lamb under peka, Njeguski prsut smoked ham, and grilled vegetables with local olive oil.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Restaurant Galion",
                  t: "Fine dining · Waterfront outside the north walls",
                  d: "Considered one of Montenegro&apos;s finest restaurants. A converted stone building on the waterfront just outside the northern city walls, with bay views from every table. The menu focuses on fresh Adriatic fish — grilled, baked in salt crust, or prepared as carpaccio — with Montenegrin wines chosen by an experienced sommelier. Expect €35–50 per person. Reserve 2–3 days ahead in peak season.",
                  b: "Best restaurant",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Stari Grad Konobas",
                  t: "Traditional Montenegrin · Old town back streets",
                  d: "Several excellent unnamed or modestly-signed konobas occupy the back lanes of the old town away from the Trg od Oružja square. Look for handwritten menus and locals eating. Order lamb under peka (slow-cooked under an iron dome with embers — needs 2-hour advance order), smoked ham boards, and local white Krstac wine poured from a carafe. Typically €12–20 per person.",
                  b: "Most authentic",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Konoba Scala Santa",
                  t: "Traditional · Old town, near the fortress steps",
                  d: "A small stone-walled konoba at the base of the fortress steps, known for excellent grilled fresh fish and Montenegrin home-style cooking. The terrace is shaded by a fig tree in summer. Good for a meal before or after the fortress hike. Mains €12–18. Cash preferred.",
                  b: "Great location",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Conte Restaurant, Perast",
                  t: "Fine dining · Perast waterfront",
                  d: "The finest restaurant in Perast village, with a terrace directly over the water and views toward Our Lady of the Rocks island. White tablecloths, fresh lagoon fish and seafood, and an excellent Montenegrin wine list. Book for lunch on your Perast day — the setting with afternoon light on the bay is exceptional. €25–40 per person.",
                  b: "Best in Perast",
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
            destination="Kotor, Montenegro"
            hotels={[
              {
                name: "Forza Mare Kotor",
                type: "Luxury boutique · Bayfront villa, Dobrota",
                price: "From €180/night",
                rating: "5",
                badge: "Most spectacular",
                url: "https://www.booking.com/hotel/me/forza-mare.html?aid=2820480",
              },
              {
                name: "Hotel Vardar",
                type: "Boutique · Inside the old town walls",
                price: "From €80/night",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/me/vardar-kotor.html?aid=2820480",
              },
              {
                name: "Palazzo Radomiri",
                type: "Heritage boutique · Dobrota",
                price: "From €120/night",
                rating: "5",
                badge: "Most romantic",
                url: "https://www.booking.com/hotel/me/palazzo-radomiri-dobrota.html?aid=2820480",
              },
              {
                name: "Old Town Hostel Kotor",
                type: "Hostel · Inside the old town walls",
                price: "From €15/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/me/old-town-hostel-kotor.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Kotor Old Town Walking Tour",
                duration: "2 hrs",
                price: "From €20/person",
                badge: "Best intro",
                url: "https://www.getyourguide.com/s/?q=Kotor+Montenegro+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Bay of Kotor Boat Tour + Our Lady of the Rocks",
                duration: "4 hrs",
                price: "From €35/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Kotor+bay+boat+tour&partner_id=PSZA5UI",
              },
              {
                name: "Lovćen National Park & Njeguši Day Trip",
                duration: "6 hrs",
                price: "From €45/person",
                badge: "Highly rated",
                url: "https://www.getyourguide.com/s/?q=Lovcen+national+park+Montenegro&partner_id=PSZA5UI",
              },
              {
                name: "Montenegro Wine Tasting Experience",
                duration: "3 hrs",
                price: "From €30/person",
                url: "https://www.getyourguide.com/s/?q=Montenegro+wine+tasting&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Kotor</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🚢",
                  title: "Visiting during cruise ship hours",
                  desc: "Cruise ships from Dubrovnik discharge up to 3,000 passengers into Kotor&apos;s tiny old town between 10am and 2pm, June through September. The lanes become impassable, restaurants queue out the door, and the fortress is gridlocked. Arrive the evening before or stay overnight — the old town before 9am and after 6pm is completely different. The cruise day-trip experience bears no resemblance to actually being in Kotor.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "⛵",
                  title: "Walking Perast without taking the boat to Our Lady of the Rocks",
                  desc: "Our Lady of the Rocks is reachable only by a 5-minute rowboat from Perast waterfront (€5 each way). It is, along with San Giovanni Fortress, the single best thing to do in the Bay of Kotor. Most people walk the Perast waterfront, admire the view of the two islands, and leave without taking the boat. The island church and its interior tapestries are the entire point of the trip to Perast.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "☀️",
                  title: "Hiking the fortress in midday heat",
                  desc: "The San Giovanni Fortress hike has 1,350 exposed limestone steps with virtually no shade. In July and August, this becomes genuinely dangerous between 10am and 4pm — not just uncomfortable. Go at 6am for the sunrise, or at 5:30pm in spring for golden hour light on the bay. The fortress at dawn, before any other visitors, is the best version of Kotor.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🍷",
                  title: "Drinking imported wine and ignoring Montenegrin varieties",
                  desc: "Montenegro produces exceptional wine that almost no one outside the Balkans has tried. Vranac red from the Podgorica plain is full-bodied and tannic with dark fruit character. Krstac white from the Crmnica region is crisp and mineral. A full bottle of quality local wine costs €8–12 in a shop. Ordering anything imported in Kotor is paying more for dramatically worse wine.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🗺️",
                  title: "Never leaving the old town to explore the bay",
                  desc: "The Bay of Kotor is 28km long. Dobrota, Muo, Risan, and Ljuta are villages on the shore with their own Baroque churches, konobas, and bay views that are completely free of tourists. Renting a bicycle or taking a €5 taxi for 2km in any direction unlocks a different Montenegro entirely. The old town is exceptional — but it is not the bay.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Kotor</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Arrive the evening before your first full day",
                  desc: "The Bay of Kotor at dawn — mirror-calm, fog drifting off the mountains, old town walls reflecting in the water — is a scene that exists for about 90 minutes before tour buses arrive. It requires sleeping in Kotor the night before. The cruise day-tripper experience starts at 10am; the real Kotor experience starts at 6am.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🧀",
                  title: "Buy Njeguski ham directly in the village",
                  desc: "Njeguski prsut smoked ham from a village smokehouse in Njeguski costs €12–18/kg. The same ham in an old town tourist shop costs €35–50/kg. The mountain road to Njeguski is one of Montenegro&apos;s most dramatic drives regardless — go for the ham, stay for the view back down over the bay.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🎫",
                  title: "Book boat tours with free cancellation",
                  desc: "Bay of Kotor boat trips and Lovćen tours are frequently cancelled by the bora wind — a fierce north-easterly that can arrive with little warning and make the bay choppy and unsafe for small craft. Book everything via GetYourGuide with free cancellation: getyourguide.com/s/?q=Kotor+Montenegro&partner_id=PSZA5UI",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🏰",
                  title: "Walk the full wall circuit, not just to the fortress",
                  desc: "Most visitors hike to San Giovanni Castle and return the same way. The full 4.5km wall circuit continues beyond the fortress, following the hillside around the back of the old town and descending to a different gate. The complete circuit takes 3 hours, passes through ruined watchtowers, and includes viewpoints that the standard route misses entirely.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "💶",
                  title: "Carry cash for buses, boats, and konobas",
                  desc: "Montenegro uses euros, but smaller konobas, the Perast boat, and local buses are cash-only. The Kotor old town ATMs work reliably. Keep €30–40 in small notes (€5 and €10 coins and bills). Local buses cost €2–3 and the boatmen to Our Lady of the Rocks charge €5 each way — neither takes cards.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🚗",
                  title: "Rent a car for the full bay circuit",
                  desc: "A car from Tivat Airport (€30–45/day) unlocks the full Bay of Kotor experience: the serpentine road to Njeguski, Lovćen National Park, Cetinje old capital, Budva and Sveti Stefan, and the northern bay villages of Risan and Perast at your own pace. The coastal road in both directions from Kotor is outstanding.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Kotor, Montenegro" />

          {/* Combine With */}
          <CombineWith currentSlug="kotor-montenegro-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do I need a visa to visit Montenegro?",
                  a: "Montenegro is not in the EU or Schengen Area. US, UK, EU, and Australian passport holders enter visa-free for up to 90 days in a 180-day period — no ETIAS is currently required as Montenegro is not an EU or Schengen member. Indian passport holders need a Montenegro visa (€35–60) unless they hold a valid Schengen, US, or UK visa — in which case visa-free entry for 30 days may be available under bilateral agreements. Verify the current rules with the Montenegro Embassy before travel as bilateral agreements change.",
                },
                {
                  q: "How do I get from Dubrovnik to Kotor?",
                  a: "The Dubrovnik–Kotor bus runs several times daily and takes 2.5 hours (€10–15). The route crosses the Bosnian border at Neum for 9km — bring your passport even as an EU or US citizen. Private transfers and shared shuttles cost €30–60. In season, fast ferry services run between Dubrovnik port and Kotor (2 hours by sea, €25–40) along the most beautiful section of the Adriatic coast.",
                },
                {
                  q: "Is Kotor walkable or do I need a car?",
                  a: "The old town is entirely pedestrianised and very compact — the full circuit of the old walls takes 25 minutes at a slow walk. Buses serve Perast (€2, 20 minutes) and Budva (€3, 45 minutes) adequately. For Lovćen National Park, Njeguski village, and the full bay circuit, either join an organised day tour (€35–60) or rent a car from Tivat Airport (€30–45/day). A car is not required for a standard 3-day Kotor visit.",
                },
                {
                  q: "What is the best thing to do in Kotor?",
                  a: "The San Giovanni Fortress hike at dawn is the single defining Kotor experience — 1,350 steps to 260m altitude above the bay, ideally completed before 8am when you have the walls to yourself and the light is perfect. Second: the boat to Our Lady of the Rocks island at Perast. Third: an evening in the old town after the cruise ships leave, with a glass of Krstac white wine and the walls lit up around you.",
                },
                {
                  q: "What currency does Montenegro use?",
                  a: "Montenegro uses the euro (€) despite not being an EU member — they unilaterally adopted it in 2002. Cash is still preferred at local konobas, bus stations, and markets. ATMs are available inside the Kotor old town and near the Sea Gate. Credit cards are accepted at larger hotels and restaurants. Keep €20–30 in small notes for buses, boat taxis, and konobas.",
                },
                {
                  q: "Is Kotor worth visiting beyond the old town?",
                  a: "Absolutely. The Bay of Kotor is 28km of submerged river canyon surrounded by 1,700m limestone mountains — one of the most dramatic geographical settings in Europe. Perast village with Our Lady of the Rocks, the mountain road to Njeguski and Lovćen, Budva&apos;s beaches, Sveti Stefan island hotel, and Cetinje old capital are all within 90 minutes. The old town is the starting point, not the destination.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Kotor trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/kotor-montenegro-3-days", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/kotor-montenegro-3-days", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/kotor-montenegro-3-days", label: "How to get there", icon: "✈️" },
                { href: "/blog/kotor-montenegro-3-days", label: "Travel tips", icon: "📋" },
              ].map((item) => (
                <Link key={item.label} href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-parchment border border-parchment-2 rounded-xl hover:border-gold hover:shadow-sm transition-all text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-ink leading-tight">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Guides */}
          <RelatedGuides currentSlug="kotor-montenegro-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Adriatic &amp; Balkans Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Dubrovnik 3 Days — Walls &amp; Old Town", href: "/blog/dubrovnik-3-days" },
                { label: "Split Croatia 4 Days — Diocletian&apos;s Palace", href: "/blog/split-croatia-4-days" },
                { label: "Tirana Albania 3 Days — Balkans Capital", href: "/blog/tirana-albania-3-days" },
                { label: "Athens 3 Days — Acropolis &amp; Plaka", href: "/blog/athens-3-days" },
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
