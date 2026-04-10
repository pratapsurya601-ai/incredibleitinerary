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
const ALBANIA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Albania Riviera Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "5-Day Itinerary" },
  { id: "beaches",    emoji: "🏖️", label: "Beach & Landmark Guide" },
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
          href: `mailto:?subject=Albania Riviera 5-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Albania Riviera in 5 Days — Dhermi beach, Ksamil islands, Butrint ruins and Gjirokastra from €20/day&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/albania-riviera-5-days"
        imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
        description="Albania Riviera in 5 Days: Dhermi beach, Ksamil islands, Butrint UNESCO ruins and Gjirokastra — complete travel guide from €20/day."
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
export default function AlbaniaRivieraClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={ALBANIA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Albania Riviera" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="Albania Riviera Dhermi beach turquoise water Ionian Sea mountain backdrop"
            fallback="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
            alt="Dhermi beach on the Albanian Riviera with turquoise Ionian Sea water and mountain backdrop"
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
              <span className="text-white/70">Albania Riviera 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Europe&apos;s Best-Value Coast
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Albania Riviera in 5 Days:
                <em className="italic text-amber-300"> Dhermi, Ksamil, Butrint &amp; Gjirokastra</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Europe&apos;s last great undiscovered coastline — turquoise Ionian beaches, UNESCO ruins, and prices that feel like the Mediterranean of 30 years ago. From €20/day.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="13 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇦🇱 Albania, Europe</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From €20/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Albanian Riviera is what the rest of the Mediterranean coast looked like before mass tourism arrived — wild limestone cliffs dropping straight into Ionian water so clear you can see the bottom at 10 metres, family guesthouses charging €15 a night, and grilled fish meals for €8. This won&apos;t last forever. Go now.
            </p>
          </blockquote>

          {/* ── WHAT ALBANIA RIVIERA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Albania Riviera Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Albanian Riviera is a 100-kilometre stretch of Ionian coastline running from the Llogara Pass south to Sarandë, bordered by the mountains of the Albanian Alps to the east and the sea to the west. It contains some of the most beautiful beaches in the Mediterranean — Dhermi, Palasë, Gjipe Canyon, Ksamil — alongside two UNESCO World Heritage Sites (Butrint and Gjirokastra), and a culture of extraordinary hospitality rooted in the ancient Albanian concept of besa.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Albania was closed to foreign visitors until 1991 — one of the most isolated countries on earth under Enver Hoxha&apos;s communist regime. The legacy of that isolation is a coastline that escaped the overdevelopment that hit Greece, Croatia, and Montenegro in the 1980s and 90s. In 2026 it remains Europe&apos;s best-value beach destination by a wide margin: dorm beds at €8–12, guesthouse rooms at €15–25, and grilled sea bream for €7.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Five days is the perfect window: enough time to see Himara&apos;s cliffs, swim the powder-white sands of Dhermi, explore the Caribbean-clear islands at Ksamil, walk the Greek-Roman-Byzantine-Venetian layers of Butrint, and make the unforgettable detour to Gjirokastra&apos;s Ottoman stone city before everyone else discovers it.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Main Airport" value="Tirana (TIA)" />
              <StatCard icon="🌡️" label="Best Season" value="May–Jun / Sep–Oct" />
              <StatCard icon="🏖️" label="Coast Length" value="~100 km" />
              <StatCard icon="💰" label="Budget From" value="€20/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit the Albanian Riviera</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–June",
                  i: "☀️",
                  t: "Early Summer — Best Season",
                  d: "Sea temperature 22–25°C, beaches uncrowded, prices at their lowest. The mountains are still green from spring rains. Wildflowers on the Llogara Pass. This is the ideal window — the full Ionian experience without the peak-season crowds or prices.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Early Autumn — Excellent",
                  d: "Sea stays warm at 22–24°C through October. Crowds thin dramatically from mid-September. Prices drop 30–50% from August peak. The light is golden and the mountains begin turning amber. October is arguably the best single month for the riviera.",
                  b: "Excellent",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🔥",
                  t: "Peak Season — Expensive & Crowded",
                  d: "The Albanian diaspora from Italy, Germany, and Switzerland returns en masse. Accommodation prices triple from July levels. Dhermi and Ksamil are genuinely packed. Water is warm (26–28°C) but the beach experience is nothing like May–June. If you must come in August, book 3 months ahead.",
                  b: "Book far in advance",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Mar",
                  i: "🌧️",
                  t: "Off-Season — Most Places Closed",
                  d: "The majority of guesthouses, beach restaurants, and tourist services close from November to March. Gjirokastra and Tirana remain fully open year-round. Sarandë keeps some accommodation open. Not recommended unless you specifically want quiet, cheap travel in a dormant destination.",
                  b: "Not recommended",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to the Albanian Riviera</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> The Albanian Riviera has no direct international airport. Fly into <strong className="font-medium">Tirana Nënë Tereza International Airport (TIA)</strong>, then take a bus or private transfer south (4–5 hours). Alternatively, the <strong className="font-medium">Corfu–Sarandë ferry</strong> (30 minutes, €20) is excellent if combining with the Greek islands.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚌",
                  t: "Bus from Tirana to Sarandë (recommended budget option)",
                  d: "Tirana → Sarandë: 5 hours by public bus, €10–12. Multiple daily departures from Tirana bus terminal. Buses stop in Gjirokastra (3 hours) and Himara (4 hours) en route. The road from Tirana is well-maintained; the final section over the Llogara Pass is spectacular.",
                  b: "Best budget option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "⛴️",
                  t: "Corfu (Greece) to Sarandë by Ferry",
                  d: "Corfu → Sarandë: 30 minutes by fast ferry, €20–25 each way. Finikas Lines and Ionian Seaways run multiple daily crossings. Excellent option if combining Albania with the Greek islands. The crossing gives stunning sea views of both coastlines.",
                  b: "Best from Greece",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  i: "🚗",
                  t: "Private Transfer from Tirana Airport",
                  d: "Tirana Airport → Himara/Sarandë: 4–5 hours, €60–90 for the car (split between 2–4 travellers). Passes over the breathtaking Llogara Pass (1,025m) with panoramic Ionian views. Flexible — you can stop at viewpoints and villages. Best option for 3+ travellers.",
                  b: "Most flexible",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Furgon network along the coast",
                  d: "Once on the riviera, furgons (shared minibuses, €2–5 per ride) connect Sarandë, Himara, Dhermi, and all coastal towns. They depart when full from central squares — not on fixed schedules. Ask locals or guesthouse staff for current departure points and approximate times.",
                  b: "For coastal travel",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Albania Riviera Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary runs south along the coast — from Himara to Sarandë — with an inland detour to Gjirokastra on Day 5. All prices are realistic for 2026 in ALL (Albanian Lek), EUR, and USD.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrival in Himara — Cliffs, Castle & First Swim"
                cost="€25–35 (bus/ferry, guesthouse, food, local drinks)"
                items={[
                  "Fly into Tirana (TIA) and take the 4-hour bus (€6 / ~660 ALL) south to Himara, or cross the border from Corfu by ferry to Sarandë (€20 / ~2,200 ALL, 30 minutes) and then furgon north to Himara (€3 / ~330 ALL, 45 minutes).",
                  "Check in to a family-run guesthouse in Himara (€15–20/night / 1,650–2,200 ALL): rooms are basic but clean, families are extraordinarily welcoming — besa (Albanian hospitality as a sacred obligation) is not a cliché here. Breakfast is often included with home-made white feta, wild honey, and fresh bread.",
                  "Afternoon swim at Himara beach: a long crescent of grey-and-white pebbles below dramatic limestone cliffs, with water clarity to 10 metres. The beach is rarely crowded outside August. Buy a cold beer from a beachside kiosk for €1 (~110 ALL) and go in.",
                  "Hike up to the Himara Castle ruins above the village (free entry, 30-minute climb): a Byzantine and Ottoman fortification with sweeping views of the Ionian Sea stretching south to Corfu and north to the Karaburun Peninsula — one of the finest coastal viewpoints in all of Europe.",
                  "Dinner at a family taverna: fresh grilled fish (€5–8 / 550–880 ALL), Albanian salad with crumbled white cheese (€2.50 / 275 ALL), and a glass of local Skënderbeu brandy (€1.50 / 165 ALL) — a full three-course dinner for well under €12.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Dhermi & Palasë — The Best Beaches on the Riviera"
                cost="€20–28 (furgons, sunbed, food, snacks)"
                items={[
                  "Morning furgon (shared minibus, €2–3 / 220–330 ALL) 20 km north to Dhermi — the most celebrated beach on the Albanian Riviera, with two kilometres of turquoise Ionian water backed by olive-green mountains. The water temperature in June–September is 24–27°C.",
                  "Rent a sunbed (€3–5/day / 330–550 ALL) on the main beach, or lay your towel on the free sections at either end of the bay. Spend the morning swimming — the water is extraordinary. Buy fresh watermelon from a beach vendor for €1 and eat it in the sea.",
                  "Walk 3 km south along the coast path to Palasë beach: smaller, quieter, and arguably more beautiful than Dhermi. A freshwater stream meets the sea here creating a cool pool at the water&apos;s edge. The family taverna above the beach serves grilled sea bream (€7 / 770 ALL) caught that morning.",
                  "Afternoon: hike the goat path from Dhermi village (above the beach) to the cliff viewpoint for panoramic views over the entire riviera coastline — free, 30 minutes each way, one of the best viewpoints on the Albanian coast.",
                  "Return to Himara by furgon in the evening (€2–3 / 220–330 ALL). Budget dinner at a local restaurant: fresh tomato salad, qofte (grilled meatballs), bread and raki (€8–10 / 880–1,100 ALL).",
                ]}
              />
              <DayCard
                day="Day 3"
                title="South to Sarandë — Promenade, Ksamil & Sunset"
                cost="€22–30 (transport, beach, food, accommodation)"
                items={[
                  "Morning furgon to Sarandë (1.5 hours, €3–4 / 330–440 ALL): Albania&apos;s main tourist hub on the southern coast, directly opposite Corfu. The harbour promenade is lined with cafés and restaurants serving fresh espresso (€0.80 / 88 ALL) and byrek (savoury pastry, €1 / 110 ALL).",
                  "Ksamil beach: 10 km south of Sarandë by taxi (€5 / 550 ALL) or local minibus (€1 / 110 ALL) — four small islets surrounded by Caribbean-clear shallow water, one of the most photogenic beach settings in the Mediterranean. This is legitimately world-class.",
                  "Swim to the nearest islet (10-minute easy swim in calm water) or rent a pedalo (€5/hour / 550 ALL). Buy grilled mussels from a beach taverna (€5 / 550 ALL) and eat them at a table with your feet in the sand.",
                  "Return to Sarandë promenade for the evening paseo: locals and tourists walk the seafront as the sun sets behind the hills. Fresh artisan gelato (€1.50 / 165 ALL). Dinner on the promenade: full grilled fish meal with Çobo white wine (€12–15 / 1,320–1,650 ALL).",
                  "Check in to a Sarandë hostel or guesthouse (€10–15/night / 1,100–1,650 ALL) — the town has good options within a short walk of the ferry port and beach.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Butrint UNESCO Ruins — The Best-Value Ancient Site in Europe"
                cost="€18–25 (Butrint entry, transport, food)"
                items={[
                  "Take a morning taxi or local bus (€2 / 220 ALL) to Butrint National Park, 18 km south of Sarandë. Entry €10 / 1,100 ALL — possibly the best-value UNESCO archaeological site anywhere in Europe. Allow 2–3 hours to walk the full circuit.",
                  "Butrint contains Greek (3rd century BC), Roman (1st century AD), Byzantine (5th–6th century), Venetian (15th century), and Ottoman (18th century) layers all within one compact site on a forested promontory between a lagoon and the Vivari Channel. The setting is extraordinary.",
                  "Key highlights: the 3rd-century BC Greek theatre (better preserved than many in Greece itself), the Lion Gate, the Roman forum baths with intact mosaic floors, the early Christian baptistery with the most complex floor mosaic in Albania, and the Venetian castle on the hilltop with views over the lagoon.",
                  "Picnic lunch inside Butrint Park: buy supplies from Sarandë market before leaving — bread (€0.50 / 55 ALL), local white cheese (€1.50 / 165 ALL), ripe tomatoes, and olives — a complete lunch for €4 total, eaten on a bench surrounded by 2,500 years of history.",
                  "Afternoon back in Sarandë: walk to Mirror Beach (Plazhi i Pasqyrave) for a late-afternoon swim (free, 15 minutes on foot from the centre). Sunset from the ruins of Ali Pasha&apos;s castle on the headland above the bay — free, always open, never crowded.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Gjirokastra UNESCO Old Town & Departure"
                cost="€20–28 (furgon, castle, food, final bus)"
                items={[
                  "Morning furgon north to Gjirokastra (2 hours, €5 / 550 ALL): an extraordinary UNESCO city of Ottoman stone towers rising seven storeys above the Drino valley, with a 12th-century fortress dominating the entire ridge. Unlike anywhere else in the Balkans — or Europe.",
                  "Gjirokastra Castle (€3 / 330 ALL): a massive fortress housing, improbably, a captured American U-2 reconnaissance aircraft from the Cold War in its inner courtyard. The panoramic view from the battlements over the stone rooftops below and the valley stretching to the Greek border is breathtaking.",
                  "Old Bazaar walk (free): the bazaar lanes beneath the castle have changed barely at all in 200 years. Browse hand-crafted silverware, embroidered textiles, and traditional Albanian crafts. Buy a bottle of homemade raki directly from a producer (€3–5 / 330–550 ALL).",
                  "Lunch at a traditional Albanian restaurant in the bazaar: qofte (spiced meatballs, €3 / 330 ALL), fasule (slow-cooked bean stew, €2.50 / 275 ALL), and a glass of raki (€1 / 110 ALL) — a completely authentic Albanian meal for €7 total.",
                  "Late furgon back to Sarandë or Tirana for departure (€5–10 / 550–1,100 ALL depending on route). If flying from Tirana, allow 5–6 hours from Gjirokastra to the airport — the mountain roads are beautiful but slow.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Albania Riviera" onPlanTrip={() => setModalOpen(true)} />

          {/* ── BEACH & LANDMARK GUIDE ── */}
          <section id="beaches" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏖️ Beach &amp; Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The riviera&apos;s key beaches and sites in order of priority. Entry fees correct for 2026. Beaches are free unless noted.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Dhermi Beach",
                  e: "Free (sunbed rental €3–5)",
                  d: "The Albanian Riviera&apos;s most celebrated beach — 2 km of turquoise Ionian water backed by olive-covered mountains. The water clarity is exceptional and the beach is never as crowded as comparable Mediterranean spots. The village above the beach is beautiful for a morning walk before swimming.",
                  t: "Must swim · all day",
                },
                {
                  n: "Ksamil Islands",
                  e: "Free (pedalo rental €5/hr)",
                  d: "Four small islets surrounded by shallow Caribbean-clear water near Sarandë. Easily one of the most beautiful beach settings in the Mediterranean and still largely unknown outside the Balkans. Swim to the nearest island (10 minutes easy), snorkel around the rock formations, and eat fresh seafood at a beach taverna.",
                  t: "Must swim · half day",
                },
                {
                  n: "Butrint National Park (UNESCO)",
                  e: "€10 / 1,100 ALL",
                  d: "A 3,000-year-old city in a lagoon setting, with layered Greek, Roman, Byzantine, Venetian, and Ottoman ruins. The Greek theatre is better preserved than many in Greece. The baptistery mosaic floor is one of the finest early Christian floors in Europe. The forested setting makes it feel archaeological rather than touristic.",
                  t: "Must visit · 2–3 hrs",
                },
                {
                  n: "Gjirokastra Old City (UNESCO)",
                  e: "Castle €3 / 330 ALL; Zekate House €2",
                  d: "An intact Ottoman stone city on a steep ridge — seven-storey stone tower houses, a 12th-century castle, and a bazaar unchanged in 200 years. Birthplace of writer Ismail Kadare and communist dictator Enver Hoxha (their houses are marked). The most architecturally distinctive city in the Balkans.",
                  t: "Must visit · half day",
                },
                {
                  n: "Himara Castle",
                  e: "Free",
                  d: "A Byzantine and Ottoman fortress above the old village of Himara, with panoramic views of the Ionian coast in both directions. The 30-minute climb through the old village is worthwhile in itself — stone houses, flowering gardens, and elderly locals who will invite you in for coffee.",
                  t: "Recommended · 1.5 hrs",
                },
                {
                  n: "Gjipe Canyon Beach",
                  e: "Free (boat access €20–30 return)",
                  d: "A secluded cove accessible only by boat or a 2-hour mountain hike from the Himara road. A narrow gorge leads from the beach into a canyon with turquoise rock pools. One of the most dramatic beach settings on the Albanian coast. Worth the effort to reach.",
                  t: "Underrated · half day",
                },
                {
                  n: "Blue Eye Spring (Syri i Kaltër)",
                  e: "€2 / 220 ALL",
                  d: "A mysterious natural spring 30 km from Sarandë where 18°C water emerges from an unknown depth creating a vivid blue-and-turquoise eye-shaped pool in a forest clearing. The spring pumps out 6 cubic metres per second. Swimming is restricted but standing on the platform above the eye is extraordinary.",
                  t: "Day trip from Sarandë · 1 hr",
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
            title="Albanian Riviera — Beaches, Ruins &amp; Stone Cities"
            subtitle="Dhermi, Ksamil, Butrint, Gjirokastra, and the Ionian coast."
            spots={[
              {
                name: "Dhermi Beach",
                query: "Dhermi beach Albania Riviera turquoise Ionian sea",
                desc: "The Albanian Riviera&apos;s most celebrated beach — turquoise Ionian water backed by olive-covered mountains.",
              },
              {
                name: "Ksamil Islands",
                query: "Ksamil beach islands Albania clear water Sarandë",
                desc: "Four small islets surrounded by shallow Caribbean-clear water near Sarandë — one of the Mediterranean&apos;s most beautiful beach settings.",
              },
              {
                name: "Butrint UNESCO Ruins",
                query: "Butrint Albania UNESCO ruins ancient theatre lagoon",
                desc: "The ancient city of Butrint — 3,000 years of layered Greek, Roman, Byzantine, and Venetian history in a lagoon setting.",
              },
              {
                name: "Gjirokastra Ottoman City",
                query: "Gjirokastra Albania UNESCO Ottoman stone city castle",
                desc: "Gjirokastra&apos;s extraordinary Ottoman stone towers and 12th-century fortress rising above the Drino valley.",
              },
              {
                name: "Himara Coastal Cliffs",
                query: "Himara Albania coast cliffs Ionian sea beach",
                desc: "The dramatic limestone cliffs above Himara with the Ionian Sea stretching to Corfu on the horizon.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Albania is Europe&apos;s most budget-friendly beach destination by a significant margin. Even mid-range travel on the riviera costs less than a budget trip to Croatia or Greece. The exchange rate: 1 EUR ≈ 108–110 ALL (Albanian Lek). Euros are widely accepted throughout.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-yellow-300 text-center">Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (per night)", "€10–20 (guesthouse/hostel)", "€50–80 (boutique hotel)", "€150–300 (villa/resort)"],
                    ["🍽 Food (per day)", "€8–14 (family tavernas, markets)", "€25–45 (seafood + wine)", "€80–150 (fine dining + wine pairings)"],
                    ["🚌 Transport (per day)", "€3–6 (furgons + shared taxis)", "€20–40 (private taxis)", "€100–200 (private driver + boat)"],
                    ["🏛️ Activities (per day)", "€5–12 (Butrint + Gjirokastra)", "€25–50 (guided tours, boat trips)", "€100–200 (private boats, beach clubs)"],
                    ["TOTAL (per day)", "€20–35", "€70–120", "€250–450"],
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Backpacker (€15–25/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostel dorm (€8–12/night), market bread and cheese, furgons only, Butrint as the one paid entry. Albania is the only country in Europe where you can do this and still have a brilliant beach holiday.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range Sweet Spot (€70–120/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique hotel with sea view (€50–70/night), local seafood restaurants twice daily, private taxis for day trips, guided Butrint and Gjirokastra. This is the sweet spot — full comfort at Greek-island prices from the 1990s.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay on the Albanian Riviera</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The riviera&apos;s accommodation ranges from family guesthouses at €15/night to clifftop boutique villas at €200+. The warmest hospitality is invariably at the family-run properties — owners grow their own vegetables, catch their own fish, and will happily rearrange your entire itinerary over a glass of raki.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Family guesthouses in Himara",
                  type: "Budget · Himara old town",
                  price: "€15–25/night",
                  badge: "Best budget",
                  desc: "The best-value accommodation on the riviera. Family-run rooms with balconies overlooking the sea, included breakfast of home-made cheese and honey, and owners who will arrange furgons, boat trips, and fish dinners on request. Book directly — most have no Booking.com presence.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Rapo&apos;s Resort Himara",
                  type: "Mid-range · Himara beach",
                  price: "From €60/night",
                  badge: "Best mid-range",
                  desc: "The most reliable mid-range property in Himara — sea-view rooms with balconies, swimming pool, breakfast included, and direct beach access. Booking.com rated and consistent. The view of the cliffs and Ionian from the pool terrace at sunset is exceptional.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Beachfront guesthouses in Dhermi",
                  type: "Budget-mid · Dhermi beach",
                  price: "€20–45/night",
                  badge: "Best location",
                  desc: "Several small guesthouses sit directly above Dhermi beach, reached by a steep path from the main road. Waking up to the Ionian out of your window, walking to the beach in 2 minutes, and eating breakfast above the bay are experiences that cost five times as much elsewhere in the Mediterranean.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Boutique hotels in Sarandë",
                  type: "Mid-range · Sarandë centre",
                  price: "€45–80/night",
                  badge: "Best for UNESCO sites",
                  desc: "Sarandë is the best base for Butrint (18 km) and Ksamil (10 km). Several good mid-range hotels line the promenade with sea-view terraces and views of Corfu on the horizon. Useful as your base for Days 3–5 of the itinerary.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Clifftop villas near Himara",
                  type: "Luxury · Albanian Riviera clifftops",
                  price: "€120–250/night",
                  badge: "Most dramatic",
                  desc: "A handful of private villas and boutique properties are perched on the limestone cliffs above the Ionian, accessible by the riviera coastal road. Private pools, uninterrupted sea views, and catered dinners using fresh local seafood. Albania&apos;s best luxury value by far — comparable properties in Italy or Croatia cost 3–4x more.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat on the Albanian Riviera</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Albanian coastal food is built on what came in that morning — sea bream, dentex, grouper, octopus, mussels, and sea urchins. A grilled whole fish meal with Albanian salad, bread, and a glass of Çobo white wine costs €10–15 total. The rule: always ask what is fresh today.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Family tavernas in Himara",
                  t: "Fresh seafood · Himara town and beach",
                  d: "The best food on the riviera is found in the small, unnamed family restaurants in Himara town. No menus — the owner brings what the boats caught that morning. Sea bream (€7–9 / 770–990 ALL), grilled octopus (€8 / 880 ALL), Albanian salad with white cheese (€2.50 / 275 ALL). Order the catch of the day by weight (€8–12/kg) and point at what looks good.",
                  b: "Best fish",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Dhermi beach tavernas",
                  t: "Beachside dining · Dhermi",
                  d: "Several small tavernas sit directly at the water&apos;s edge at Dhermi. Eat grilled sea bass with your feet almost in the sand, cold Tirana beer (€1.50 / 165 ALL), and Albanian tomato salad. The quality is uniformly high — competition between tavernas on a small beach keeps standards up. Grilled fish with sides: €10–14 / 1,100–1,540 ALL.",
                  b: "Best setting",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Sarandë promenade restaurants",
                  t: "Seafood & international · Sarandë waterfront",
                  d: "Sarandë&apos;s harbour promenade has 20+ restaurants ranging from cheap local joints (grilled lamb chops and chips for €7 / 770 ALL) to smarter seafood restaurants with Corfu views (full seafood platter with wine for €20–25/person / 2,200–2,750 ALL). The promenade is lively in the evening — choose wherever looks busy with locals.",
                  b: "Most variety",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Gjirokastra old bazaar restaurants",
                  t: "Traditional Albanian · Gjirokastra",
                  d: "The restaurants in Gjirokastra&apos;s bazaar serve food that has barely changed in a century: tave kosi (baked lamb with egg-and-yoghurt sauce, €5 / 550 ALL), qofte (spiced lamb meatballs, €3 / 330 ALL), fasule (slow bean stew with smoked meat, €2.50 / 275 ALL), and byrek (flaky savoury pastry, €1.50 / 165 ALL). A full traditional meal: €10–12 / 1,100–1,320 ALL.",
                  b: "Most authentic",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  n: "Blue Eye Spring café",
                  t: "Local coffee & snacks · near Sarandë",
                  d: "The small family-run café at the Blue Eye spring entrance serves the best Turkish coffee on the riviera (€0.80 / 88 ALL), byrek (€1 / 110 ALL), and cold beers. Eating breakfast here at 8am before other visitors arrive — with the forest sounds and the spring&apos;s impossible blue colour visible through the trees — is a near-perfect experience.",
                  b: "Underrated",
                  c: "bg-teal-50 border-teal-200",
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
            destination="Albanian Riviera"
            hotels={[
              {
                name: "Rapo&apos;s Resort Himara",
                type: "Mid-range resort · Himara beach",
                price: "From €55/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/searchresults.html?ss=Himara+Albania&aid=2820480",
              },
              {
                name: "Boutique Hotels Sarandë",
                type: "Seafront hotel · Sarandë promenade",
                price: "From €45/night",
                rating: "4",
                badge: "Best for Butrint",
                url: "https://www.booking.com/searchresults.html?ss=Sarandë+Albania&aid=2820480",
              },
              {
                name: "Dhermi Beach Guesthouses",
                type: "Family guesthouse · Dhermi",
                price: "From €20/night",
                rating: "4",
                badge: "Best beach access",
                url: "https://www.booking.com/searchresults.html?ss=Dhermi+Albania&aid=2820480",
              },
              {
                name: "Ksamil & Sarandë Villas",
                type: "Luxury villa · Ksamil beach",
                price: "From €120/night",
                rating: "5",
                badge: "Most luxury",
                url: "https://www.booking.com/searchresults.html?ss=Ksamil+Albania&aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Albanian Riviera Full Day Tour",
                duration: "8 hrs",
                price: "From €35/person",
                badge: "Best overview",
                url: "https://www.getyourguide.com/s/?q=Albania+Riviera+tour&partner_id=PSZA5UI",
              },
              {
                name: "Butrint UNESCO Guided Tour",
                duration: "3 hrs",
                price: "From €20/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Butrint+Albania&partner_id=PSZA5UI",
              },
              {
                name: "Gjirokastra Day Trip from Sarandë",
                duration: "6 hrs",
                price: "From €25/person",
                badge: "Highly rated",
                url: "https://www.getyourguide.com/s/?q=Gjirokastra+day+trip&partner_id=PSZA5UI",
              },
              {
                name: "Ksamil Beach & Blue Eye Combo",
                duration: "5 hrs",
                price: "From €18/person",
                url: "https://www.getyourguide.com/s/?q=Ksamil+Blue+Eye+Albania&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "☀️",
                  title: "Visiting in July and August at peak season prices",
                  desc: "Albania&apos;s beaches are genuinely cheap in May–June and September–October — but July–August sees a tenfold increase in Albanian diaspora visitors from Italy, Germany, and Switzerland. Prices for accommodation triple, beaches are crowded, and the best guesthouses are full by March. Visit in June or September for the same weather at a fraction of the cost.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🚌",
                  title: "Not understanding the furgon system",
                  desc: "Albania&apos;s coastal transport runs on furgons — shared minibuses that depart when full rather than on a fixed schedule. They leave from central squares, cost €2–5 per ride, and are perfectly safe. Travellers who don&apos;t know this end up paying €30 for private taxis on routes that cost €3 on a furgon. Ask your guesthouse where that morning&apos;s furgon departs from.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏛️",
                  title: "Skipping Butrint for an extra beach day",
                  desc: "Butrint is one of the most atmospheric ancient ruins in the Mediterranean — Greek theatre, Roman baths, Byzantine mosaics, and Venetian castle, all in a lagoon setting with almost no crowds. At €10 entry it is extraordinarily underpriced. Travellers who skip it for another beach day at Ksamil are missing the riviera&apos;s most compelling experience.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "💳",
                  title: "Relying on card payments outside major hotels",
                  desc: "Most Albanian beach restaurants, furgon drivers, market vendors, and guesthouses are cash-only. ATMs exist in Sarandë and Himara town centres but not at beaches. Withdraw Albanian Lek (or use Euros, which are widely accepted) at the start of each day. The exchange rate: 1 EUR ≈ 108–110 ALL. Do not exchange money with street vendors.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🗺️",
                  title: "Not including Gjirokastra in the itinerary",
                  desc: "Most riviera visitors stay on the coast the entire trip and miss Gjirokastra entirely. This UNESCO old city of Ottoman stone towers, a medieval fortress, and an unchanged 200-year-old bazaar is only 2 hours inland and completely unlike anywhere else in Europe. It is one of the most undervisited UNESCO sites on the continent and takes only half a day.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for the Albanian Riviera</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🐟",
                  title: "Always ask what&apos;s fresh today",
                  desc: "Albanian coastal restaurants receive fish directly from local fishing boats the same morning. The best fish is not on the menu — ask the owner what came in. Sea bream, dentex, and grouper are common; price by weight is standard (€8–12/kg / 880–1,320 ALL). This guarantees the freshest meal and often the best price.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🏔️",
                  title: "Drive the Llogara Pass for Albania&apos;s best view",
                  desc: "The road between Vlorë and Himara crosses the Llogara Pass at 1,025 metres, then drops 1,000 metres to the riviera in a series of hairpin bends. The view from the top — mountains behind, the Ionian coast stretching to Corfu ahead — is breathtaking. Stop at the mountain lodge for coffee and byrek (€2 / 220 ALL).",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🏊",
                  title: "Go to the beach before 10am or after 5pm",
                  desc: "Even in summer, Dhermi and Ksamil beaches are almost empty before 10am. The water is calmer, the light is beautiful for photography, and you choose any spot freely. An early swim followed by breakfast in the village above is the optimal Albanian Riviera morning.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🍷",
                  title: "Try Çobo Winery — Albania makes genuinely great wine",
                  desc: "Albanian wine is almost entirely unknown outside the country. Çobo Winery near Berat produces outstanding Shesh i Bardhë (white) and Kallmet (red) from indigenous Albanian grape varieties. A bottle costs €5–8 (550–880 ALL) in local shops. Ask restaurants for Albanian wine specifically rather than defaulting to international brands.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🛂",
                  title: "Albania is not Schengen — it doesn&apos;t use your 90 days",
                  desc: "Visiting Albania does not count towards your 90-day Schengen limit. This makes it a strategic stop for travellers managing EU visa time — combine Albania with Greece or Montenegro and your Albanian days are entirely separate from your Schengen count.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "⛴️",
                  title: "The Corfu–Sarandë ferry is a scenic gateway",
                  desc: "The 30-minute ferry crossing between Corfu and Sarandë (€20 / 2,200 ALL) is one of the best short crossings in the Mediterranean — you leave a busy Greek resort island and arrive in a completely different world at a fraction of the price. Finikas Lines runs multiple daily crossings in season.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Albania Riviera" />

          {/* Combine With */}
          <CombineWith currentSlug="albania-riviera-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Albania safe for tourists in 2026?",
                  a: "Albania is very safe for tourists. The country has transformed dramatically since the 1990s and the riviera and Gjirokastra areas see hundreds of thousands of European visitors annually. The main risks are the same as anywhere in southern Europe: petty theft in crowded areas and road safety (Albanian mountain roads require careful driving). Locals are genuinely extremely hospitable — the concept of besa (hospitality as a sacred obligation) is deeply ingrained in Albanian culture.",
                },
                {
                  q: "What currency is used in Albania and can I use euros?",
                  a: "Albania&apos;s official currency is the Albanian Lek (ALL). However, euros are widely accepted in tourist areas, hotels, restaurants, and even by furgon drivers on the riviera — often at a fair rate of approximately 1 EUR = 108–110 ALL. Bring a mix of euros and local Lek. ATMs are available in Sarandë, Himara, and Gjirokastra town centres but not at beaches.",
                },
                {
                  q: "How do I get from Tirana to the Albanian Riviera?",
                  a: "From Tirana, the fastest budget option is a public bus to Sarandë (5 hours, €10–12) or Himara (4 hours, €8). Private transfers cost €60–90 for the car and take 4–5 hours over the Llogara Pass. The Corfu–Sarandë ferry (30 minutes, €20) is excellent if you&apos;re combining with Greek islands. Furgons connect all riviera towns once you&apos;re on the coast.",
                },
                {
                  q: "When is the best time to visit the Albanian Riviera?",
                  a: "May–June and September–October are ideal: the Ionian is already warm (22–25°C), beaches are uncrowded, prices are low, and the mountains are green. July–August is peak season with prices 2–3x higher and beaches packed. October still offers 22°C sea temperatures and golden-hour light. Avoid November–March when most guesthouses and beach restaurants close entirely.",
                },
                {
                  q: "Do I need a visa for Albania?",
                  a: "US, UK, EU, Canadian, and Australian passport holders can enter Albania visa-free for up to 90 days. Indian passport holders require an Albanian e-Visa (apply at ealbania.gov.al), which costs €30–50 and takes 3–10 business days. Albania is not a Schengen country — visiting Albania does not use Schengen days, making it strategically useful for long-stay European travellers.",
                },
                {
                  q: "Is the Albanian Riviera better than Croatia or Greece?",
                  a: "It depends on what you want. The Albanian Riviera has some beaches that genuinely rival Croatia and Greece — Dhermi and Ksamil in particular. The water clarity and colour is equal to the best of the Adriatic. The difference is price (Albania is 3–4x cheaper), authenticity (far less touristy infrastructure), and the bonus of two UNESCO sites (Butrint and Gjirokastra) that have no equivalent in Croatia. The tradeoff is less tourist infrastructure and fewer English speakers outside Sarandë.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Albania Riviera trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/albania-riviera-5-days#season", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/albania-riviera-5-days#budget", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/albania-riviera-5-days#howtoreach", label: "How to get there", icon: "✈️" },
                { href: "/blog/albania-riviera-5-days#beaches", label: "Beach guide", icon: "🏖️" },
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
          <RelatedGuides currentSlug="albania-riviera-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Balkan &amp; Mediterranean Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Corfu 4 Days — Greek Island Beaches", href: "/blog/corfu-4-days" },
                { label: "Ohrid 3 Days — North Macedonia Lake", href: "/blog/ohrid-3-days" },
                { label: "Plovdiv 3 Days — Bulgaria Old Town", href: "/blog/plovdiv-3-days" },
                { label: "Athens 4 Days — Acropolis &amp; Culture", href: "/blog/athens-4-days" },
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
