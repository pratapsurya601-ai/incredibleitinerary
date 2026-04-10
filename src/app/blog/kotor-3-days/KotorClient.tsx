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
  { id: "honest",      emoji: "⚡",  label: "What Kotor Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "🚌",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",   emoji: "🏛️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Kotor 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Kotor in 3 Days — medieval walls, the Bay of Kotor and Europe&apos;s best-kept Adriatic secret&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/kotor-3-days"
        imageUrl="https://images.unsplash.com/photo-1555990538-1ac4a8ca56d0?w=1200&q=80"
        description="Kotor in 3 Days: City Walls hike, Our Lady of the Rocks island, Perast village and the Bay of Kotor — complete Montenegro travel guide with budget breakdown."
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
export default function KotorClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KOTOR_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Kotor" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="kotor bay montenegro old town fortress medieval adriatic"
            fallback="https://images.unsplash.com/photo-1555990538-1ac4a8ca56d0?w=1600&q=80"
            alt="Kotor Bay Montenegro medieval walled city and fortress walls on mountain"
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
              <span className="text-white/70">Kotor 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Kotor in 3 Days:
                <em className="italic text-amber-300"> Medieval Walls, the Bay &amp; Montenegro&apos;s Adriatic Secret</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                1,350 steps to a clifftop fortress, a fjord-like bay ringed by mountains, a man-made island church 500 years in the making, and a medieval city that costs half as much as Dubrovnik. The complete guide.
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
              <span>🏛️ Montenegro</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From €45/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Kotor is a perfectly preserved medieval walled city wedged between a fjord-like bay and a mountain so steep you can see the ancient walls zigzagging vertically up the rock face to a fortress 1,350 steps above. UNESCO called it one of the best-kept secrets in European heritage. They were right.
            </p>
          </blockquote>

          {/* ── WHAT KOTOR ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Kotor Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Kotor is a medieval city on the Bay of Kotor (Boka Kotorska) — a deep, enclosed inlet on the Adriatic coast of Montenegro that looks so much like a Scandinavian fjord that UNESCO recognised it as a natural and cultural heritage site in 1979. The city itself was a powerful maritime republic under Venice from 1420 to 1797, and its fortifications, cathedral, palaces and narrow stone lanes are among the best-preserved examples of Venetian-era urban architecture in the Balkans.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Old Town sits at the base of Mount St John (Sveti Ivan), whose sheer face rises almost vertically from the city walls. The City Walls of Kotor (Bedemi) climb that face in a series of zigzags — 4.5km of wall built between the 9th and 19th centuries — culminating at the ruined Fortress of San Giovanni, 280 metres above sea level and 1,350 steps from the Sea Gate. The view from the top is the single best reason to come.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Kotor sits two hours south of Dubrovnik by bus and costs 40–50% less for equivalent accommodation and food. It has a fraction of the cruise ship crowds (outside July–August), a genuine Venetian-era urban fabric that Dubrovnik&apos;s tourism industry has largely eroded, and access to an extraordinary bay dotted with Baroque villages, man-made island churches, and the Montenegrin mountains above.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="🚌" label="From Dubrovnik" value="2–2.5 hrs" />
              <StatCard icon="🌡️" label="Best Season" value="May–Jun, Sep–Oct" />
              <StatCard icon="🏔️" label="Fortress Steps" value="1,350" />
              <StatCard icon="💰" label="Budget From" value="€45/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Kotor</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Jun",
                  i: "🌸",
                  t: "Late Spring — Best Season",
                  d: "18–26°C, lush green mountains, wildflowers on the hillsides, and the bay glittering in clear Adriatic light. Pre-peak crowds mean the Old Town streets are breathable. The sea is warm enough to swim from mid-June. Our top recommendation for most travellers.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Autumn — Equally Excellent",
                  d: "20–27°C, sea still warm (22–24°C), crowds thin dramatically after the August peak. September is arguably the single best month — the summer heat breaks, the water is perfect, and the mountains turn golden. October is cooler and wetter but still very pleasant.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🚢",
                  t: "Peak Summer — Avoid if Possible",
                  d: "Up to 8 cruise ships dock simultaneously, disgorging 15,000 passengers into a medieval city designed for a few hundred. The Old Town becomes an elbow-to-elbow queue. Temperatures reach 33–36°C. Accommodation prices rise 50–100%. The bay and beaches are still beautiful, but Kotor Old Town is best avoided in these months.",
                  b: "Overcrowded",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Mar",
                  i: "🌧️",
                  t: "Winter — Quiet but Atmospheric",
                  d: "Kotor in winter is genuinely atmospheric — almost no tourists, very low prices (hostel dorms from €12), and misty mountains around the bay. The Old Town is just as beautiful and entirely yours. Some restaurants close. Rain is frequent November–February. The City Walls hike is still possible on clear days and the views are extraordinary.",
                  b: "For adventurous visitors",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚌 Getting to Kotor</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> The closest international airports are <strong className="font-medium">Tivat (TIV)</strong>, just 8km from Kotor Old Town, and <strong className="font-medium">Dubrovnik (DBV)</strong> in Croatia, 2–2.5 hours away by bus. Most budget travellers fly into Dubrovnik and take the bus — it&apos;s the cheapest way in.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚌",
                  t: "Bus from Dubrovnik (recommended budget option)",
                  d: "Dubrovnik bus station → Kotor: 2–2.5 hours, €8–15 depending on operator and season. Several daily departures. The road follows the Croatian and Montenegrin coast with extraordinary views of the bay as you approach Kotor. Border crossing at Debeli Brijeg takes 10–30 minutes. Book at the Dubrovnik bus station on arrival or online.",
                  b: "Best budget option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Fly into Tivat (TIV) — closest airport",
                  d: "Tivat Airport is 8km from Kotor Old Town — a 10–15 minute taxi ride (€10–15). Direct flights from London, Paris, Amsterdam, Vienna and many other European cities. Montenegro Airlines and several European low-cost carriers operate here seasonally. The easiest arrival if you can find a good fare.",
                  b: "Most convenient",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "⛴️",
                  t: "Ferry from Lepetane to Kamenari",
                  d: "If driving from the north (e.g., from Herceg Novi), use the Lepetane–Kamenari car ferry across the narrowest point of the inner bay. The crossing takes 5 minutes and costs €4.50 per car — saving 45 minutes of driving around the bay. Runs 24/7, very frequent.",
                  b: "For drivers",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Drive from Dubrovnik or Split",
                  d: "Dubrovnik to Kotor: 90km, 1.5–2 hours. Split to Kotor: 300km, 4–5 hours along the Dalmatian coast. A hire car gives complete flexibility for exploring the bay, Perast, Budva, Sveti Stefan and the mountain roads above Kotor. Cars available from Tivat airport from €30–50/day.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Kotor Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. Start the City Walls hike early — by 10am the cruise ship passengers arrive and the steps become crowded. The bay and Old Town reward slow exploration.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Old Town Wander · St Tryphon Cathedral · City Walls Fortress Hike · Sunset"
                cost="€40–55 including accommodation"
                items={[
                  "Arrive by bus from Dubrovnik (2–2.5 hours, €8–15) or taxi from Tivat airport (8km, €10–15). Check into accommodation — Cattaro Hostel in the Old Town from €18–22/night for a dorm, or Palazzo Drusko or Hotel Monte Cristo for a mid-range room (€80–130/night).",
                  "Enter the Old Town through the Sea Gate (Vrata od Mora) — the main entrance on the waterfront. The gate is free and the inscription reads &apos;1944&apos; — the year the city was liberated in World War II. The Piazza of Arms (Trg od Oružja) immediately inside is the central square, dominated by the Clock Tower.",
                  "Cathedral of Saint Tryphon (Katedrala Svetog Tripuna) — the most important building in Kotor. Built in 1166 AD in a Romanesque style on the site of an earlier 9th-century church, the twin-towered facade and the interior treasury of silver votive tablets and Byzantine frescoes are genuinely beautiful. Entry €3. Allow 45 minutes.",
                  "Explore the cat culture — Kotor&apos;s cats have been resident since Venetian maritime times, kept to control the rat population on the harbour ships. There are over 100 cats in the Old Town. The tiny Muzej Mačaka (Cat Museum) on the upper floor of an Old Town building charges €1 and is charming.",
                  "Afternoon: City Walls hike (Bedemi) — start at the north side of the Old Town near the Church of Our Lady of Remedy. Entry €8 per person. The walls climb 4.5km of switchbacks and stairs to the ruined Fortress of San Giovanni (St John) at 280m above sea level. Allow 2 hours return. The 1,350 steps are steep but well-maintained.",
                  "The view from San Giovanni Fortress: the entire Bay of Kotor stretching out below — the inner bay, the outer bay, the mountains of Bosnia on the horizon, and the tiny walled city far below you. One of the great European travel moments.",
                  "Sunset from the fortress walls or the walls halfway up — the bay turns gold, the mountains blue, and the city glows. Come down before dark as some sections have no lighting.",
                  "Dinner: Galion Restaurant just outside the Old Town walls on the waterfront — fresh Adriatic fish, black risotto (crni rižot), and local Vranac wine with bay views (€20–30pp). Or eat earlier at a small konoba restaurant inside the Old Town for €10–15pp.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Perast Village · Our Lady of the Rocks Island Church · Bay of Kotor · Old Town by Night"
                cost="€35–50"
                items={[
                  "Morning: local bus or shared taxi to Perast (30 minutes, €2–4 by local bus departing from the main road outside Kotor Old Town). Perast is a tiny Baroque village on the western shore of the inner bay — a single main street of 17th-century palaces and 16 churches, one for each of the 16 noble families who once controlled its maritime trade.",
                  "Hire a water taxi from the Perast waterfront to Our Lady of the Rocks (Gospa od Škrpjela) — the man-made island church in the middle of the bay. €5 per person return, 5-minute crossing. The island was created over 500 years by sailors returning from voyages who threw stones onto a reef — a tradition still observed every 22 July.",
                  "Inside Our Lady of the Rocks: a stunning collection of 2,500 silver votive tablets — ex-votos donated by grateful sailors over centuries — and a 17th-century icon attributed to the painter Lovro Marinov Dobričević. The ceiling is covered in paintings by Tripo Kokolja. Genuinely remarkable and almost unknown outside the Balkans.",
                  "Lunch in Perast: seafood at a restaurant on the main street — try the fresh grilled sea bass (brancin na žaru), the black risotto, or the prstaci (date mussels, a local Adriatic speciality). €12–18pp. The views across the bay while eating are extraordinary.",
                  "Afternoon: return to Kotor by bus or on foot along the bay road (3km, 40 minutes, pleasant waterside walk). Walk the Piazza of Arms again — it has a completely different character in the afternoon with locals rather than tourists.",
                  "Visit the Maritime Museum (Pomorski Muzej, €5) on the main square — Kotor was a major Venetian sea power with its own fleet of over 300 ships in the 17th century. The museum is well-presented and surprisingly absorbing.",
                  "Evening: Nikšičko beer (Montenegro&apos;s national beer) at a café table on the square — €2–3 per pint. Then the Old Town by night — the medieval streets empty after 9pm outside peak season and feel completely different from the daytime bustle.",
                  "Street food option: burek (flaky filo pastry with cheese or meat) from a pekara (bakery) near the Sea Gate for €1.50 — better value and more local than any restaurant near the main square.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Budva Beach Town · Sveti Stefan Photo Stop · Return to Kotor Farewell"
                cost="€35–45"
                items={[
                  "Morning bus to Budva (30 minutes, €3 from Kotor bus station, frequent departures). Budva is Montenegro&apos;s beach capital — another walled medieval town, smaller than Kotor but with proper sandy beaches immediately outside the walls.",
                  "Walk Budva Old Town — compact, picturesque, and less famous than Kotor. The Citadel (€2.50) has sea views across Mogren Beach. Lively but manageable outside July–August.",
                  "Mogren Beach — a 10-minute walk from Budva Old Town through a cliff tunnel. A long sandy crescent below the old town walls with clear Adriatic water. Free to use. Best for an early morning swim before the beach chairs are filled.",
                  "Taxi or bus south to Sveti Stefan (15 minutes by taxi €8–10, or bus €1.50). Sveti Stefan is a 15th-century fortified village on a tiny island connected to the mainland by a sand causeway — now entirely occupied by the Aman Sveti Stefan luxury resort. Non-guests cannot enter the island itself.",
                  "The viewpoint above the causeway (free, 5 minutes above the road) gives one of the most photographed views in Europe — the terracotta-roofed island village against the impossibly blue Adriatic. Allow 30 minutes for photographs. The light is best in the morning or late afternoon.",
                  "Return bus or taxi to Kotor (1 hour, €4 by bus). Alternative Day 3: if you have a hire car, drive the 25 switchbacks above Kotor up to Lovćen National Park — the views from the serpentine road over the bay are among the most dramatic driving experiences in the Balkans.",
                  "Final evening in Kotor: walk the full circuit of the Old Town after dark — the cats come out, the day-trippers have left, and the medieval stone lanes feel like the 15th century. Dinner at Scala Santa restaurant on the Old Town steps (€20–30pp) or a final Vranac wine at a wine bar.",
                  "Departure: early buses to Dubrovnik depart from Kotor bus station from 6am. Taxi to Tivat airport takes 15 minutes.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Kotor" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Kotor Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key sites in order of priority. Entry fees as of April 2026 — most are low or free, making Kotor extraordinary value compared to Dubrovnik.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "City Walls & San Giovanni Fortress",
                  e: "€8 per person",
                  d: "4.5km of walls climbing from the Old Town to a ruined clifftop fortress 280m above sea level. The 1,350 steps take 45–60 minutes to ascend. The views from the top over the Bay of Kotor are the definitive Kotor experience. Start before 9am to beat the cruise ship tourists. Bring water.",
                  t: "Must do · 2 hrs return",
                },
                {
                  n: "Cathedral of Saint Tryphon",
                  e: "€3",
                  d: "A Romanesque masterpiece built in 1166 AD — twin towers, a rich treasury of silver ex-votos and Byzantine relics, and a crypt containing the remains of Kotor&apos;s patron saint. One of the finest Romanesque churches on the eastern Adriatic. Allow 45 minutes inside.",
                  t: "Must see · 45 mins",
                },
                {
                  n: "Our Lady of the Rocks (Gospa od Škrpjela)",
                  e: "€5 return boat from Perast",
                  d: "A man-made island church created over 500 years by Perast sailors throwing stones onto a reef. Inside: 2,500 silver votive tablets, extraordinary ceiling paintings by Tripo Kokolja, and a 17th-century icon of the Virgin. One of the most unusual religious sites in Europe. Only accessible by water taxi from Perast.",
                  t: "Must see · Half day trip",
                },
                {
                  n: "Perast Village",
                  e: "Free",
                  d: "A Baroque village on the inner bay shore — 17th-century palaces, 16 churches, and the base for water taxis to Our Lady of the Rocks. Perast is 30 minutes from Kotor by local bus and is one of the most perfectly preserved small towns in the Adriatic. Almost no development since the 18th century.",
                  t: "Day trip · 3–4 hrs",
                },
                {
                  n: "Old Town Piazza of Arms & Clock Tower",
                  e: "Free",
                  d: "The central square of the Old Town — the 17th-century Clock Tower, the Venetian administrative buildings, and the Trg od Oružja where the cats gather in the evening. The Baroque square is the social heart of Kotor and best experienced in the early morning or after 8pm when the day-trippers have gone.",
                  t: "Free · 30 mins",
                },
                {
                  n: "Maritime Museum (Pomorski Muzej)",
                  e: "€5",
                  d: "Kotor&apos;s maritime history under Venice — ship models, navigation instruments, weapons and documents from the city&apos;s centuries as a major Adriatic sea power. Housed in a Baroque palace. Small but well-presented and worth the entry fee for the building alone.",
                  t: "1 hr",
                },
                {
                  n: "Muzej Mačaka (Cat Museum)",
                  e: "€1",
                  d: "The world&apos;s only museum dedicated to cats, in a building in the heart of the Old Town. A room of cat-themed art, ceramics, and memorabilia celebrating Kotor&apos;s centuries-long feline tradition. Kitsch but charming — and a useful reason to seek out the building and the courtyard around it.",
                  t: "Charming · 20 mins",
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
            title="Kotor — Walls, Bay &amp; the Adriatic"
            subtitle="The Bay of Kotor&apos;s extraordinary medieval and natural landscape."
            spots={[
              {
                name: "Kotor City Walls & Fortress",
                query: "kotor city walls fortress mountain montenegro adriatic",
                desc: "The City Walls zigzagging up Mount St John to the ruined San Giovanni Fortress — the defining image of Kotor.",
              },
              {
                name: "Bay of Kotor (Boka Kotorska)",
                query: "bay of kotor boka kotorska Montenegro fjord adriatic",
                desc: "The UNESCO-listed Bay of Kotor — an enclosed fjord-like inlet ringed by the Dinaric Alps, dotted with medieval villages.",
              },
              {
                name: "Our Lady of the Rocks Island",
                query: "our lady of the rocks gospa od skrpjela perast montenegro island church",
                desc: "The man-made island church of Our Lady of the Rocks in the middle of the inner bay — 500 years of sailors throwing stones.",
              },
              {
                name: "Perast Baroque Village",
                query: "perast baroque village bay of kotor montenegro adriatic",
                desc: "Perast — a perfectly preserved Baroque village on the bay shore, with 16 churches and extraordinary views of the island church.",
              },
              {
                name: "Sveti Stefan Montenegro",
                query: "sveti stefan island hotel montenegro adriatic aman",
                desc: "The iconic island village of Sveti Stefan — a 15th-century fortified settlement on a causeway, now the Aman Sveti Stefan resort.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Montenegro uses the Euro (€) despite not being in the EU. Kotor is significantly cheaper than Dubrovnik — the budget traveller&apos;s best argument for crossing the border.
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
                    ["🏨 Accommodation (per night)", "€18–25 (hostel dorm)", "€80–130 (boutique)", "€200–800 (Aman/Regent)"],
                    ["🍽️ Food (per day)", "€10–18 (konobas, bakeries)", "€30–50 (restaurants)", "€70–150 (fine dining)"],
                    ["🚌 Transport (per day)", "€5–10 (local buses)", "€15–25 (taxi combo)", "€50–200 (private car, helicopter)"],
                    ["🏛️ Activities (per day)", "€8–15 (walls, cathedral)", "€25–50 (boat tours, guides)", "€80–300 (yacht, private)"],
                    ["TOTAL (per day, per person)", "€45/day", "€100/day", "€250+/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€45/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Cattaro Hostel dorm (€18–22/night), eat at konobas and pekara bakeries, use local buses to Perast. The City Walls entry (€8) is the main cost. Budget travel in Kotor is genuinely comfortable — the Old Town has excellent low-cost infrastructure.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">🌟 Mid-Range (€100/day)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Palazzo Drusko or Hotel Monte Cristo (€80–130/night), eat at Galion Restaurant and Scala Santa (€20–35pp), private boat tour of the bay (€60–80pp). The sweet spot for comfort with access to the best experiences.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">✨ Luxury (€250+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Aman Sveti Stefan or Regent Porto Montenegro in Tivat (€400–800/night), dine at Forza Mare in Dobrota (€80–100pp), private yacht charter on the bay (€400–600 for the boat). The bay&apos;s luxury options rival anywhere in the Mediterranean.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Kotor</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The choice is between staying inside the Old Town walls (atmospheric, no cars, more expensive), just outside the walls (convenient, slightly cheaper), or in Tivat (8km away, airport-adjacent, better beaches). The Old Town is the right choice for a first visit.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Palazzo Drusko",
                  type: "Boutique hotel · Inside the Old Town walls",
                  price: "From €90/night",
                  badge: "Most atmospheric",
                  desc: "A converted 17th-century Venetian palazzo with stone walls, exposed beams and rooms looking out onto the Old Town lanes. One of the finest small hotels in the Adriatic. The location — inside the walls, 5 minutes from St Tryphon — is unbeatable.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hotel Monte Cristo",
                  type: "Mid-range hotel · Old Town fringe",
                  price: "From €75/night",
                  badge: "Best mid-range",
                  desc: "A comfortable hotel on the edge of the Old Town with sea-facing rooms, a reliable breakfast and a central location for the City Walls access. Consistently well-reviewed for the price-to-location ratio on the bay.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Cattaro Hostel",
                  type: "Hostel · Old Town",
                  price: "€18–25/night (dorm)",
                  badge: "Best budget",
                  desc: "The most centrally located hostel in Kotor, inside the Old Town walls with dorm beds from €18 and private rooms from €50. Social common areas, good location for the main sights, and a reliable backpacker community throughout the season.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Regent Porto Montenegro (Tivat)",
                  type: "Luxury marina resort · Tivat, 8km from Kotor",
                  price: "From €250/night",
                  badge: "Most luxurious",
                  desc: "A five-star marina resort in Tivat — Montenegro&apos;s super-yacht harbour — with a spa, beach club, multiple restaurants and rooms overlooking the bay. The best address on the Montenegrin coast short of the Aman. A 15-minute taxi to Kotor Old Town.",
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
              Kotor&apos;s restaurant scene is far better than its tourist-heavy reputation suggests. The key dishes: black risotto (crni rižot), grilled sea bass (brancin), fresh Adriatic prawns, njeguški pršut (smoked ham from the Lovćen mountains) and Vranac red wine. Avoid the tourist-trap restaurants directly on the main square — the best food is in side streets or just outside the walls.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Galion Restaurant",
                  t: "Seafood · Waterfront just outside the Old Town",
                  d: "The best-regarded restaurant in Kotor — a glass-fronted space on the waterfront just outside the Old Town walls with direct bay views. Fresh Adriatic fish, excellent black risotto, and a wine list with good Montenegrin producers. Book for dinner. €20–35pp. One of the few Kotor restaurants that&apos;s genuinely worth dressing up for.",
                  b: "Best overall",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Scala Santa Restaurant",
                  t: "Adriatic cuisine · Old Town steps",
                  d: "A restaurant on the steps and terraces of the Old Town, serving good Adriatic fish and Montenegrin dishes at slightly more reasonable prices than Galion. The outdoor seating on the stone steps with a view over the rooftops is the draw. €15–25pp. Better for lunch than dinner in terms of atmosphere.",
                  b: "Best setting",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Forza Mare (Dobrota)",
                  t: "Fine dining · Dobrota, 2km from Kotor Old Town",
                  d: "The finest restaurant on the Bay of Kotor — a Michelin-level seafood experience in a converted water mill in the village of Dobrota, 2km north of the Old Town. Fresh lobster, sea urchin, locally caught fish and an exceptional Montenegrin and Croatian wine list. €40–70pp. Essential reservation. Take a taxi (€5).",
                  b: "Fine dining",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  n: "Pekara (Old Town bakeries)",
                  t: "Street food · Multiple locations in the Old Town",
                  d: "The small bakeries (pekare) dotted through the Old Town lanes sell fresh burek (flaky filo pastry filled with white cheese or minced meat) for €1–2 — the definitive Balkan street food. Also: kifle (crescent rolls), baklava (sweeter versions in the tourist areas) and excellent strong espresso. The best budget meal in Kotor.",
                  b: "Best budget",
                  c: "bg-green-50 border-green-200",
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
            destination="Kotor Montenegro"
            hotels={[
              {
                name: "Palazzo Drusko",
                type: "Boutique hotel · Inside Old Town walls",
                price: "From €90/night",
                rating: "5",
                badge: "Most atmospheric",
                url: "https://www.booking.com/hotel/me/palazzo-drusko-kotor.html?aid=2820480",
              },
              {
                name: "Hotel Monte Cristo",
                type: "Mid-range hotel · Old Town fringe",
                price: "From €75/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/me/monte-cristo-kotor.html?aid=2820480",
              },
              {
                name: "Cattaro Hostel",
                type: "Hostel · Old Town",
                price: "From €18/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/me/cattaro-hostel-kotor.html?aid=2820480",
              },
              {
                name: "Regent Porto Montenegro",
                type: "Luxury marina resort · Tivat",
                price: "From €250/night",
                rating: "5",
                badge: "Most luxurious",
                url: "https://www.booking.com/hotel/me/regent-porto-montenegro.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Bay of Kotor Boat Tour & Our Lady of the Rocks",
                duration: "4 hrs",
                price: "From €25/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=kotor+bay+boat+tour&partner_id=PSZA5UI",
              },
              {
                name: "Kotor Old Town Guided Walking Tour",
                duration: "2 hrs",
                price: "From €15/person",
                badge: "Best intro",
                url: "https://www.getyourguide.com/s/?q=kotor+old+town+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Kotor to Perast & Sveti Stefan Day Trip",
                duration: "8 hrs",
                price: "From €35/person",
                url: "https://www.getyourguide.com/s/?q=kotor+perast+day+trip&partner_id=PSZA5UI",
              },
              {
                name: "Lovćen National Park & Cetinje Tour",
                duration: "6 hrs",
                price: "From €30/person",
                url: "https://www.getyourguide.com/s/?q=kotor+lovcen+cetinje+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Kotor</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "☀️",
                  title: "Visiting in July or August",
                  desc: "The cruise ship problem: in peak summer, up to 8 cruise ships dock in the bay simultaneously, disgorging 15,000 passengers into a medieval city designed for a few hundred. The Old Town becomes an elbow-to-elbow queue between 9am and 5pm. May–June and September–October give you 90% of the beauty with 20% of the crowd. Spring also has the green mountain backdrop at its most vivid.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "🏔️",
                  title: "Skipping the City Walls hike",
                  desc: "It&apos;s €8 and 1,350 steps and it is the single best thing you can do in Kotor. The view from San Giovanni Fortress of the bay, the mountains and the tiny medieval city 280m below is among the great European travel moments. Many people look at the steps and skip it. Don&apos;t be that person. Start before 9am in summer — it is significantly cooler and the light is better.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "🚗",
                  title: "Not doing a day trip beyond the Old Town",
                  desc: "Kotor is extraordinary but the Bay of Kotor is the real draw. Perast (30 minutes away) and Our Lady of the Rocks island are among the most beautiful sights in the western Balkans and missed entirely by travellers who only walk the Old Town. If you have a car, the road to Lovćen above Kotor — 25 switchbacks with views that defy belief — should not be skipped.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "💶",
                  title: "Not knowing Montenegro uses Euros",
                  desc: "Montenegro is not in the EU but uses the Euro as its de facto currency. ATMs are available in Kotor Old Town. Cards are accepted at hotels and most sit-down restaurants. Bus tickets, bakeries and smaller konobas often require cash. Bring €50–100 in small notes for your first day.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "🍽️",
                  title: "Eating on the main square",
                  desc: "The restaurants immediately facing the Piazza of Arms (Trg od Oružja) are the most tourist-heavy and least good-value in Kotor. Walk two streets back and the quality doubles and the price drops 30–40%. The best food in the Old Town is in the side streets near the northern gate — or at Galion, just outside the walls entirely.",
                  color: "border-red-200 bg-red-50",
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
                  icon: "🕐",
                  title: "Do the City Walls at sunrise, not midday",
                  desc: "The walls open at sunrise (approximately 7am in summer). At that time: no crowds, cool temperature, golden light on the bay, and a sense of having the medieval city entirely to yourself. By 10am the cruise ship tourists arrive and the steps become a queue. Beat them by 3 hours — it transforms the experience.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚌",
                  title: "Kotor is the perfect add-on to a Croatia itinerary",
                  desc: "Dubrovnik to Kotor is 2 hours by bus (€8–15) or 90 minutes by car. Kotor is 40–50% cheaper than Dubrovnik for equivalent quality — food, accommodation and entry fees all significantly lower. The City Walls entry (€8) costs less than a quarter of the Dubrovnik walls (€35). Do 4 nights Croatia, 3 nights Montenegro as one Adriatic trip.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🍷",
                  title: "Order Vranac, not imported wine",
                  desc: "Vranac is Montenegro&apos;s indigenous red grape — deeply coloured, full-bodied, and pairs perfectly with the local smoked meats and black risotto. Plantaže, the enormous state winery near Podgorica, produces excellent Vranac for €8–12 a bottle in restaurants. Order it over imported Croatian or Italian wines and support a genuinely good local product.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "⛵",
                  title: "Book boat tours on GetYourGuide in advance",
                  desc: "Bay of Kotor boat tours and Perast day trips sell out in peak season. GetYourGuide has the best selection of verified tours — private and shared options, half-day and full-day. Private tours are worth the premium for the flexibility to stop at swimming spots. Book 48 hours ahead from May–September.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🐱",
                  title: "The cats are worth your time",
                  desc: "Kotor&apos;s cats are a genuine cultural heritage — not a tourist gimmick. They have been resident since Venetian maritime times, kept to control the rat population on harbour ships, and are protected by a local cat welfare charity. There are 100+ cats in the Old Town. The Cat Museum (€1) is charming. Allow time to sit and watch them in the early morning when the streets are quiet.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🗺️",
                  title: "Walk the whole Old Town circuit",
                  desc: "Most visitors see the main square and St Tryphon Cathedral and miss large sections of the Old Town. The full street circuit — through the quiet residential northeast, past the hidden courtyards, up to the northern walls — takes 90 minutes and gives a completely different sense of the medieval city. Do it in the evening when the day-trippers have left.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Kotor" />

          {/* Combine With */}
          <CombineWith currentSlug="kotor-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Kotor worth visiting without going to Dubrovnik?",
                  a: "Absolutely. Kotor is a complete destination in its own right. The Old Town is UNESCO-listed and arguably more authentic than Dubrovnik, which has been heavily commercialised by Game of Thrones tourism. The bay setting — enclosed by mountains, dotted with medieval villages — is unique in Europe. Fly into Tivat (TIV) directly from London, Paris, Vienna and many other European cities and skip Dubrovnik entirely if you prefer.",
                },
                {
                  q: "How many days do you need in Kotor?",
                  a: "Two days gets you the essential Kotor: Old Town, City Walls, and a Perast day trip. Three days allows you to add Budva beach town, Sveti Stefan, and optionally the mountain road to Lovćen. Four days lets you breathe, take a boat tour of the full bay, and explore the smaller villages. We recommend 3 days as the sweet spot — enough to see the key sites without rushing.",
                },
                {
                  q: "Do Indian passport holders need a visa for Montenegro?",
                  a: "No — Indian passport holders enter Montenegro visa-free for up to 30 days. Montenegro is not in the EU or Schengen area. The country uses the Euro but is a separate sovereign state. This makes it one of the easiest European countries to visit on an Indian passport, combined with the visa-free access to Croatia (Schengen), making a Dubrovnik–Kotor trip straightforward.",
                },
                {
                  q: "Is the City Walls hike hard?",
                  a: "The City Walls hike is 1,350 steps of steep stone stairs — it is genuinely strenuous, especially in the heat. It is not technical or dangerous, but people with knee problems or low fitness may find the descent more challenging than the ascent. Allow 45–60 minutes up and 30–45 minutes down. Wear shoes with grip, not sandals. Bring at least 500ml of water. The reward — the view from San Giovanni Fortress — is entirely worth the effort.",
                },
                {
                  q: "How do you get from Dubrovnik to Kotor?",
                  a: "Take the direct bus from Dubrovnik bus station (on the port) to Kotor bus station (5 minutes walk from the Old Town Sea Gate). Journey time 2–2.5 hours, price €8–15 depending on operator and season. Several daily departures, first bus around 7am. The road crosses the Debeli Brijeg border crossing between Croatia and Montenegro — have your passport ready. The border stop adds 10–30 minutes to the journey.",
                },
                {
                  q: "What is the best thing to do in Kotor?",
                  a: "The City Walls hike to San Giovanni Fortress is the standout experience — 1,350 steps to 280m above sea level, €8 entry, and the most dramatic view of the bay and the medieval city below. The boat trip to Our Lady of the Rocks island from Perast is the best half-day excursion. Together, these two experiences define Kotor. Everything else — the cathedral, the cats, the Old Town lanes — fills in around them perfectly.",
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
                { href: "/blog/kotor-3-days", label: "Kotor 3-day guide", icon: "📅" },
                { href: "/blog/dubrovnik-4-days", label: "Dubrovnik 4 days", icon: "🏰" },
                { href: "/blog/albania-riviera-5-days", label: "Albania Riviera", icon: "🏖️" },
                { href: "/blog/split-croatia-4-days", label: "Split Croatia", icon: "🌊" },
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
          <RelatedGuides currentSlug="kotor-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Balkan &amp; Adriatic Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Dubrovnik 4 Days — Game of Thrones City", href: "/blog/dubrovnik-4-days" },
                { label: "Split Croatia 4 Days — Dalmatian Coast", href: "/blog/split-croatia-4-days" },
                { label: "Albania Riviera 5 Days — Budget Adriatic", href: "/blog/albania-riviera-5-days" },
                { label: "Bosnia &amp; Herzegovina — Mostar &amp; Sarajevo", href: "/blog/sarajevo-3-days" },
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
