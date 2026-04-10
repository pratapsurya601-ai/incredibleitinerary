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
const PATAGONIA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Patagonia Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "7-Day Itinerary" },
  { id: "landmarks",  emoji: "🏔️", label: "Landmark Guide" },
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
        className="h-full bg-teal-600 transition-all duration-100"
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
          href: `mailto:?subject=Patagonia 7-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Patagonia in 7 Days — Torres del Paine, W Trek and Glaciar Grey&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/chile-patagonia-7-days"
        imageUrl="https://images.unsplash.com/photo-1531761535209-180857e963b9?w=1200&q=80"
        description="Patagonia in 7 Days: Torres del Paine W Trek, Glaciar Grey, penguin colonies and real CLP/USD costs — complete Chile Patagonia travel guide."
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
          <span className="font-serif text-xl text-teal-800 font-light">{day}</span>
          <span className="text-sm text-ink font-medium">{title}</span>
        </div>
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-teal-500 mt-1 flex-shrink-0 text-xs">●</span>
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
        <span className={`text-teal-600 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function ChilePatagoniaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={PATAGONIA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Chile Patagonia" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="patagonia torres del paine chile mountains glacier lake"
            fallback="https://images.unsplash.com/photo-1531761535209-180857e963b9?w=1600&q=80"
            alt="Torres del Paine granite towers reflected in Lago Nordenskjöld, Chilean Patagonia"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30" />

          {/* Breadcrumb in hero */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Chile Patagonia 7 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-teal-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  South America
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">18 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Patagonia in 7 Days:
                <em className="italic text-teal-300"> Torres del Paine, W Trek &amp; Glaciar Grey</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Granite towers, blue-ice glaciers, 120,000 penguins, and the most iconic multi-day hike in the Americas. The complete 2026 guide — real CLP and USD prices, W Trek booking secrets, and everything you need to know.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="18 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇨🇱 Chile</span>
              <span>·</span>
              <span>🗓 7 Days</span>
              <span>·</span>
              <span>💰 From $70/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-teal-500 pl-6 mb-10 bg-teal-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Patagonia is one of the last genuinely wild places on earth — a vast, windswept region at the bottom of South America where granite towers pierce the sky, blue-ice glaciers calve into turquoise lakes, and the weather changes every twenty minutes as a local saying warns. The W Trek is not just a hike. It is a reckoning.
            </p>
          </blockquote>

          {/* ── WHAT PATAGONIA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Patagonia Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Torres del Paine National Park is a UNESCO Biosphere Reserve in Chilean Patagonia covering 242,000 hectares at the southern tip of South America. The park&apos;s centrepiece is the Paine Massif — a cluster of granite peaks rising abruptly from the Patagonian steppe, draped with glaciers that feed a network of turquoise lakes. The three Torres (towers) are near-vertical monoliths of Jurassic granite, 2,800 metres tall, carved by millions of years of glacial erosion into columns that look painted onto the sky.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The W Trek is the standard route through the park — named for its W-shaped path across the most dramatic terrain. It covers roughly 80km over 4–5 days, linking Mirador Base Torres (the iconic granite towers viewpoint), Valle del Francés (a hanging-glacier valley with 360° panoramas from Mirador Británico), and Glaciar Grey (a 6km-wide ice field draining the Southern Patagonian Ice Field — the third-largest freshwater reserve on earth). Every section is extraordinary. The W is correctly considered the best multi-day trek in the Americas by most who have completed it.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The O Circuit is the full 9-day loop adding the remote backside of the massif, including the John Gardner Pass with views over the immense Southern Ice Field. It requires full camping capability and strong fitness. For most first-time visitors, the W is the right choice and plenty for a lifetime.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Main Airport" value="PUQ / SCL" />
              <StatCard icon="🌡️" label="Best Season" value="Nov–Mar" />
              <StatCard icon="🎫" label="Park Entry" value="CLP 38,000 / $43" />
              <StatCard icon="💰" label="Budget From" value="$70/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Patagonia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Dec–Jan",
                  i: "☀️",
                  t: "Peak Season — Best Weather",
                  d: "Longest daylight (20 hours in December), most stable weather, and all trail infrastructure fully operational. Refugios are warm and well-stocked. The trade-off: this is the busiest period. Refugio beds in December and January sell out by October. Book 6+ months ahead without exception.",
                  b: "Best conditions",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Nov & Mar",
                  i: "🌿",
                  t: "Shoulder — Excellent Value",
                  d: "November has fewer crowds and similar landscapes — some risk of snow on high passes early in the month. March offers stunning autumn colours in the lenga beech forests (red, orange, gold) and significantly fewer trekkers. Both months are excellent choices for experienced hikers willing to accept slightly variable weather.",
                  b: "Recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Apr",
                  i: "🍂",
                  t: "Late Shoulder — Cold &amp; Quiet",
                  d: "Cold (0–8°C), potentially snowy, but refugios are cheaper and near-empty. The autumn light is extraordinary on the lenga beech. Some infrastructure reduces service. Only suitable for experienced cold-weather trekkers who accept variable conditions and carry full cold-weather camping gear.",
                  b: "Experienced only",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Jun–Aug",
                  i: "❄️",
                  t: "Winter — Do Not Visit",
                  d: "The park is partially closed. The John Gardner Pass is completely impassable under snow. Temperatures drop to -15°C with wind exceeding 150 km/h on exposed ridges. Most refugios close entirely. There is genuinely no reason to visit in winter unless you are a specialist mountaineer with expedition-level equipment.",
                  b: "Park partially closed",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Patagonia</h2>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-teal-800 font-light">
                <strong className="font-medium">Key detail:</strong> The gateway to Torres del Paine is <strong className="font-medium">Puerto Natales</strong> — a small frontier town 2.5 hours north of the park. Most trekkers fly into <strong className="font-medium">Punta Arenas (PUQ)</strong> and take a 3-hour bus to Puerto Natales (CLP 8,000 / $9). All gear hire, trail food, and final reservations happen in Puerto Natales before entering the park.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly to Punta Arenas (PUQ) — Recommended",
                  d: "Fly from Santiago (SCL) to Punta Arenas (PUQ): 2.5 hours, CLP 55,000–110,000 ($60–120) with LATAM or Sky Airline. Book 3+ weeks ahead for best fares. From Punta Arenas airport, take a bus to Puerto Natales: 3 hours, CLP 8,000 ($9) with Buses Fernandez or Bus Sur. Several departures daily from the Terminal Rodoviario. The steppe road between the two towns is one of the great Patagonian drives — guanacos, the Strait of Magellan coast, and the first Andean views.",
                  b: "Best route",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Fly Direct to Puerto Natales (PMC) — Seasonal",
                  d: "LATAM operates select seasonal direct flights from Santiago to Puerto Natales Teniente Julio Gallardo Airport (PMC). This saves the 3-hour bus but flights are more expensive and less frequent. Check availability when booking — when it runs (typically December–February) it is the easiest option for getting to the park quickly.",
                  b: "Seasonal option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Punta Arenas to Puerto Natales",
                  d: "CLP 8,000 (~$9) per person, 3 hours. Buses Fernandez departs from Terminal Rodoviario in Punta Arenas at 7am, 9:30am, 2:30pm, and 7pm daily in season. Book ahead in January and February — buses fill up. The landscape on this stretch of road is pure Patagonian steppe: enormous sky, pampas grass, guanacos grazing, and the first glimpse of snow-capped Andes.",
                  b: "CLP 8,000 / $9",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚌",
                  t: "Puerto Natales to Torres del Paine Park",
                  d: "Bus from Puerto Natales to park entrance: 2.5 hours, CLP 18,000–22,000 ($20–24) return with Bus Gomez or Crux del Sur. Departs 7am daily from the Puerto Natales bus terminal. Park entry fee at the gate: CLP 38,000 ($43) per day for non-residents — CLP 11,000 for Chilean nationals. Keep your receipt; rangers check it at every refugio and trail junction on the W.",
                  b: "Park transfer",
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

          {/* ── 7-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 7-Day Patagonia Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary runs east-to-west on the W Trek — starting with the hardest and most dramatic day (Base Torres) when legs are fresh. Days 4–6 are on the trail. Days 1–3 and 7 frame the trek with Santiago, Punta Arenas&apos;s penguin colony, and Puerto Natales.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Santiago — Cerro San Cristóbal &amp; Barrio Italia"
                cost="$35–55 total"
                items={[
                  "Arrive Santiago. Check into a hostel in Barrio Italia or Providencia (CLP 13,000–23,000 / $15–25 per night in a dorm, CLP 36,000–55,000 / $40–60 private). Santiago is expensive by South American standards but hostel infrastructure is excellent.",
                  "Afternoon — Take the funicular up Cerro San Cristóbal (CLP 3,500 / $3.80 return). The panoramic view over Santiago with the Andes behind is one of the great city vistas in South America. On a clear winter day you can see 6,000m peaks from the summit.",
                  "Evening — Walk Barrio Italia&apos;s streets: independent boutiques, tile-fronted cafés, street art murals. Buy empanadas de pino (beef, olive, hard-boiled egg — CLP 1,200–2,000 each) from a corner bakery. This is Chile&apos;s foundational street food and the correct introduction to Chilean cuisine.",
                  "Dinner — A local picada (small family restaurant) for pastel de choclo (corn pie with beef and chicken, CLP 4,500) or cazuela (hearty broth with vegetables and meat, CLP 3,500). Skip tourist-facing restaurants near Plaza de Armas — the quality-to-price ratio is much worse.",
                ]}
              />
              <DayCard
                day="Day 2–3"
                title="Punta Arenas — Penguin Colony &amp; Puerto Natales"
                cost="$80–120 total (both days, incl. flight)"
                items={[
                  "Day 2 morning — Fly Santiago (SCL) to Punta Arenas (PUQ). 2.5 hours; CLP 55,000–110,000 ($60–120) with LATAM or Sky Airline. Book at least 3 weeks ahead for the best prices.",
                  "Punta Arenas afternoon — Explore Plaza Muñoz Gamero and the Cemetery of Punta Arenas — one of the most beautiful cemeteries in the world, with cypress-lined avenues and elaborate mausoleums from the 19th-century wool-baron era. Free entry and genuinely extraordinary.",
                  "Penguin colony day trip — 1-hour boat trip to Isla Magdalena (CLP 23,000 / $25 including boat). Between October and March, roughly 120,000 Magellanic penguins nest here. You walk marked paths among them; the penguins are completely unafraid of humans and will walk up to inspect your shoes. One of South America&apos;s most underrated wildlife experiences. Book at least a day ahead in peak season.",
                  "Day 3 morning — Board the bus to Puerto Natales (3 hours, CLP 8,000 / $9 with Buses Fernandez or Bus Sur). Stop at Milodon Cave (CLP 9,200 / $10) if the schedule allows — the giant ground sloth that gave it its name went extinct approximately 10,000 years ago.",
                  "Puerto Natales afternoon — Small frontier town and the gateway to Torres del Paine. Rent any missing trekking gear: poles (CLP 4,500/day), gaiters (CLP 2,700/day), sleeping bag liners (CLP 2,700/day) — all available at Erratic Rock or Baquedano Outdoor. Buy 4 days of trail food at the supermarket: oats, pasta, nuts, chocolate, freeze-dried meals — CLP 15,000–25,000 ($16–27) total. Confirm your refugio or camping reservations.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="W Trek Day 1 — Base Torres (The Iconic Start)"
                cost="$45–75 total"
                items={[
                  "Board the morning bus from Puerto Natales to Torres del Paine National Park (2.5 hours, CLP 18,000–22,000 / $20–24 return with Bus Gomez or Crux del Sur). Pay park entry at the gate: CLP 38,000 ($43) per day for non-residents. Keep your ticket — rangers check it at every refugio and trail junction.",
                  "Start hiking from Laguna Amarga ranger station (the east entrance). We recommend east-to-west: start at Base Torres so the hardest, most dramatic day is first when legs are fresh, rather than finishing the trek exhausted at the towers.",
                  "The Base Torres hike is 18km round-trip with 800m elevation gain. The final 45 minutes ascend a steep boulder field to the mirador at 900m elevation. At the top: three 2,800m granite towers framing a turquoise glacial lake. One of the genuinely great natural viewpoints on earth.",
                  "Camp at Camping Torres (CLP 12,000 / $13 per person per night) or stay at Refugio Las Torres (CLP 45,000–55,000 / $49–60 for a dormitory bunk with dinner and breakfast). Book at fantasticosur.com — reservations open in August for the following season. By October, December slots are sold out.",
                  "Weather warning: Patagonian wind can reach 100+ km/h at the mirador. The granite towers are often cloud-covered by afternoon. For the classic orange-light photograph, start hiking at 4am with a headtorch to reach the mirador at sunrise — the orange light on the towers lasts 15–20 minutes before the colours fade.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="W Trek Day 2 — Los Cuernos &amp; Valle del Francés"
                cost="$40–70 total"
                items={[
                  "Hike from Refugio Las Torres west along the shore of Lago Nordenskjöld to Refugio Los Cuernos (11km, 3–4 hours). The trail follows the lake with constant views of Los Cuernos del Paine (The Horns) — the dramatically striated twin peaks that define Patagonia&apos;s most recognisable skyline.",
                  "Drop your pack at Refugio Los Cuernos (CLP 45,000–50,000 / $49–55 dorm bunk with dinner) and do the Valle del Francés side trip (14km round-trip, 4–5 hours). This is the most dramatic valley in the park: glaciers hang off vertical walls, ice chunks randomly calve and thunder into the valley below, and Andean condors ride the thermals overhead.",
                  "The Mirador Británico extension adds 4 hours and 300m more elevation to the day — but the panoramic view from the top takes in all of Torres del Paine simultaneously: the Torres, the Cuernos, Glaciar Grey, and the Southern Ice Field. Most guided itineraries skip it. Do not skip it. Start the Valle del Francés section by 8am to reach Británico and return before dark.",
                  "Return to Refugio Los Cuernos for the night. Set menu dinner: CLP 18,000 ($20). The wind at this section of the W is notorious — gusts routinely knock trekkers sideways on open sections between the lenga beech forest and the lake. Trekking poles are not optional from Day 5 onwards.",
                ]}
              />
              <DayCard
                day="Day 6"
                title="W Trek Day 3 — Paine Grande &amp; Glaciar Grey"
                cost="$45–80 total"
                items={[
                  "Long hike day: Los Cuernos to Refugio Paine Grande (12km, 4 hours) through open steppe and around Lago Skottsberg. This is the most exposed section on the W — wind tunnel conditions are the norm, not the exception. Trekking poles are essential. Poles protect your knees on descent and keep you upright when 80 km/h gusts hit you sideways.",
                  "Drop packs at Paine Grande (CLP 40,000–50,000 dorm) and hike the Glaciar Grey trail — 8 hours return, 16km. The trail climbs through lenga beech forest then the glacier suddenly appears: 6km wide, 30m-high blue-ice walls calving into Lago Grey. Icebergs drift in the turquoise water. The deep sapphire blue of glacial ice — caused by compressed air bubbles being squeezed out over centuries — is something no photograph fully captures.",
                  "Grey Glacier boat trip: the Grey II catamaran operates daily from Lago Grey dock (CLP 45,000 / $49 per person return, approximately 1 hour on the water). The boat approaches within 50 metres of the glacier face — close enough to hear the ice creak, crack, and occasionally explode. Book through lagogreycom or at Paine Grande refugio.",
                  "Grey early morning offers the best light and most stable conditions. Leave Paine Grande by 6am to reach the glacier viewpoint before 10am when the Patagonian wind characteristically intensifies.",
                  "Return to Refugio Paine Grande for the final night on the trail. Hot dinner (set menu CLP 20,000), hot shower (CLP 4,500 extra if not included in your booking), and the quiet satisfaction of having completed the W Trek.",
                ]}
              />
              <DayCard
                day="Day 7"
                title="Return to Puerto Natales &amp; Santiago"
                cost="$60–90 total"
                items={[
                  "Morning — Catamaran from Refugio Paine Grande across Lago Pehoé to the park bus stop (CLP 27,500 / $30, 30 minutes of stunning lake scenery). The alternative is 3 additional hours of hiking on tired legs — the catamaran is worth every peso. Catch the connecting bus back to Puerto Natales.",
                  "Puerto Natales afternoon — Hot shower at your hotel, a proper cooked meal, and a pisco sour (Chile&apos;s national cocktail: pisco brandy, fresh lemon juice, sugar syrup, egg white, aromatic bitters — CLP 4,000–6,000 at any bar in Puerto Natales). You&apos;ve earned it.",
                  "Evening bus or next-morning flight back to Santiago. Bus Puerto Natales to Punta Arenas: 3 hours, CLP 8,000. Flight PUQ to SCL: 2.5 hours, CLP 55,000–92,000 ($60–100). Overnight bus direct Natales to Santiago (24+ hours, CLP 27,500–41,000 / $30–45) is only viable if you have an extra day to spare.",
                  "Santiago farewell dinner — Mercado Central seafood market for caldillo de congrio (eel soup, Pablo Neruda wrote an ode to it, CLP 7,000–9,000), machas a la parmesana (razor clams gratin, CLP 7,000), or a whole centolla king crab caught in Punta Arenas waters (CLP 15,000–23,000 for a whole crab). Go at noon when the fish is freshest.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Patagonia" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏔️ Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in Torres del Paine in order of priority. All sites are covered by the CLP 38,000 ($43) daily park pass — there are no additional attraction entry fees inside the park. The Grey II catamaran (CLP 45,000 / $49) is the only significant add-on cost.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Mirador Base Torres — Los Torres Viewpoint",
                  e: "Included in park pass",
                  d: "The defining image of Patagonia: three 2,800m granite towers framing a turquoise glacial lake at 900m elevation. The 8-hour return hike (18km, 800m elevation gain) from Refugio Las Torres ends with a 45-minute scramble up a chaotic boulder field. Start at 4am for sunrise — the golden light on the towers lasts 15–20 minutes. Cloud cover is frequent by 10am. This is the reason people fly to the end of the earth.",
                  t: "Must do · 8 hrs return",
                },
                {
                  n: "Glaciar Grey — Southern Patagonian Ice Field",
                  e: "Included in park pass (Grey II boat: CLP 45,000 / $49)",
                  d: "A 270km² glacier draining the Southern Patagonian Ice Field. The 16km return hike from Refugio Paine Grande reaches the viewpoint above Lago Grey. The Grey II catamaran (CLP 45,000 / $49) takes you within 50 metres of the calving ice face — close enough to hear the glacier breathe. Icebergs in shades of deep sapphire blue drift across the lake. Go early — wind intensifies after 10am.",
                  t: "Must do · 8 hrs hiking or boat",
                },
                {
                  n: "Valle del Francés — The Hanging Glacier Valley",
                  e: "Included in park pass",
                  d: "A cirque valley between the Cuernos and the central massif with hanging glaciers on every wall. The 14km round-trip from Refugio Los Cuernos features vertical granite draped with glaciers that randomly calve — you hear and see chunks of ice crashing into the valley without warning. Andean condors (wingspan 3.2m) ride the thermals above. The extension to Mirador Británico (4 extra hours) gives the only 360° panorama of the entire park.",
                  t: "Must do · Full day",
                },
                {
                  n: "Mirador Británico — The Full Panorama",
                  e: "Included in park pass",
                  d: "The highest accessible viewpoint on the W Trek at approximately 1,000m elevation. The panorama takes in the Torres, the Cuernos, Glaciar Grey, and the Southern Ice Field simultaneously — the entire Torres del Paine massif in one frame. Most itineraries omit it due to the 4-hour extension. This is the single most dramatic vantage point in the park. Start early and do not skip it.",
                  t: "Essential · Add 4 hrs to Day 5",
                },
                {
                  n: "Los Cuernos del Paine — The Iconic Skyline",
                  e: "Included in park pass",
                  d: "The Cuernos del Paine — two dramatically striated peaks with dark sedimentary cap rock over lighter granite — are visible for most of the W Trek. The contrast in rock colour gives them an almost artificial appearance. The view from Lago Nordenskjöld looking west towards the Cuernos is Patagonia&apos;s most reproduced postcard image. Best light in the morning from the shore below Refugio Los Cuernos.",
                  t: "Views throughout Day 5",
                },
                {
                  n: "Isla Magdalena Penguin Colony — Punta Arenas",
                  e: "CLP 23,000 / $25 (boat included)",
                  d: "Not inside Torres del Paine but 1 hour by boat from Punta Arenas. Between October and March, 120,000 Magellanic penguins nest on Isla Magdalena. You walk among them on marked paths — the penguins have zero fear of humans and will approach to inspect your shoes. One of the most undervisited wildlife spectacles in South America. Book at least a day ahead in January and February when boats fill up.",
                  t: "Wildlife · 3 hrs from Punta Arenas",
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
            title="Torres del Paine — Towers, Glaciers &amp; the W Trek"
            subtitle="The wild heart of Chilean Patagonia."
            spots={[
              {
                name: "Torres del Paine Granite Towers",
                query: "torres del paine granite towers patagonia chile lake sunrise",
                desc: "The three granite towers of Paine — 2,800m monoliths reflecting in a turquoise glacial lake at the end of the 8-hour return hike.",
              },
              {
                name: "Glaciar Grey Blue Ice",
                query: "glaciar grey patagonia chile blue ice iceberg lake",
                desc: "The 6km-wide face of Glaciar Grey calving blue ice into Lago Grey — viewable from the trail or up-close on the Grey II catamaran (CLP 45,000 / $49).",
              },
              {
                name: "Valle del Francés",
                query: "valle del frances patagonia torres del paine hanging glacier condor",
                desc: "Hanging glaciers and Andean condors in the Valle del Francés — the most dramatic valley on the W Trek.",
              },
              {
                name: "Los Cuernos del Paine",
                query: "cuernos del paine patagonia chile lago nordenskjold reflection",
                desc: "Los Cuernos reflected in Lago Nordenskjöld — the iconic banded-peak skyline of Torres del Paine.",
              },
              {
                name: "Puerto Natales &amp; Última Esperanza",
                query: "puerto natales patagonia chile ultima esperanza fjord mountains",
                desc: "Puerto Natales on the Última Esperanza sound — the small frontier gateway town where every W Trek begins and ends.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Patagonia is the most expensive region in South America — comparable to parts of Western Europe. The park entry alone (CLP 38,000 / $43 per day) adds up quickly over a 4-day trek. Budget travellers doing the full W Trek should plan CLP 552,000–736,000 ($600–800) per person for the 4-day trek section alone, including transport from Puerto Natales, park fees, camping or refugio beds, and food.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">💎 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["✈️ Flight SCL–PUQ (one-way)", "CLP 55,000 ($60)", "CLP 92,000 ($100)", "CLP 185,000+ ($200+)"],
                    ["🏨 Hotel per night (off-trail)", "CLP 11,000–23,000 ($12–25)", "CLP 73,000–165,000 ($80–180)", "CLP 368,000–1,380,000 ($400–1,500)"],
                    ["🏕️ Refugio bunk (on W Trek)", "Camping CLP 12,000 ($13)", "CLP 32,000–50,000 ($35–55) dorm", "EcoCamp dome $500–900/night all-in"],
                    ["🎫 Park entry (per day)", "CLP 38,000 ($43)", "CLP 38,000 ($43)", "CLP 38,000 ($43)"],
                    ["⛵ Catamaran Lago Pehoé", "CLP 27,500 ($30)", "CLP 27,500 ($30)", "Private charter"],
                    ["🚢 Grey II boat trip", "CLP 45,000 ($49)", "CLP 45,000 ($49)", "Private charter $400–700"],
                    ["🍽️ Food (per day, on-trail)", "Self-catered CLP 4,600–9,200 ($5–10)", "Refugio meals CLP 27,500 ($30)", "CLP 73,000–184,000 ($80–200)"],
                    ["🐧 Penguin colony (Isla Magdalena)", "CLP 23,000 ($25)", "CLP 23,000 ($25)", "CLP 73,000–138,000 ($80–150) private"],
                    ["TOTAL (7 days, per person)", "$640–800", "$1,400–2,700", "$5,000–14,000+"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💰 Budget ($70–130/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Camping on the W Trek (CLP 12,000 / $13 per night) with self-cooked trail food. Bus everywhere. Total 7-day trip: $640–800 per person. Patagonian camping in wind and cold is demanding — bring a 4-season tent rated for 100 km/h wind and a sleeping bag rated to -10°C. Not recommended for first-time winter campers.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range ($200–400/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Full-service refugios (CLP 32,000–50,000 dorm, dinner and breakfast included) and Hostería Las Torres or Hotel Last Hope in Puerto Natales. This is the most popular bracket — the hot meals and showers after each trekking day are worth every extra peso. Book 6+ months ahead. Total trip: $1,400–2,700.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($700–2,000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">EcoCamp Patagonia geodesic domes inside the park ($500–900/night all-inclusive), Awasi Patagonia or Tierra Patagonia ($800–1,500/night). Private guide and porter service adds $300–500/day. Helicopter transfers from Puerto Natales to the glacier ($600–1,000). Total trip: $5,000–14,000+.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Accommodation in Torres del Paine falls into two categories: inside the park (refugios and camping on the W Trek) and in Puerto Natales (the base town). Book inside-park accommodation through <strong className="text-ink">fantasticosur.com</strong> (Torres, Chileno, Los Cuernos sectors) and <strong className="text-ink">vertice.cl</strong> (Paine Grande, Grey sectors) — reservations open in August for the following season. By October, December is sold out.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "EcoCamp Patagonia",
                  type: "Luxury eco-lodge · Inside Torres del Paine park",
                  price: "From $500/night all-inclusive",
                  badge: "Most unique",
                  desc: "Geodesic dome accommodation inside Torres del Paine, with private domes, standard domes, and community geodesic areas. All meals and guided excursions included in the rate. The setting is extraordinary — you wake up with the Torres framed directly outside your dome window. One of the world&apos;s most architecturally distinctive lodges. Book 6+ months ahead. ecocamp.travel.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hostería Las Torres",
                  type: "Full-service hotel + refugio · Torres sector, inside park",
                  price: "From $180/night (hotel) · CLP 50,000–55,000 dorm",
                  badge: "Best located",
                  desc: "The full-service hotel at the east entrance to the W Trek, operated by Fantastico Sur. Hotel rooms ($180–350/night) and refugio dormitory beds (CLP 50,000–55,000 / $55–60 per person). Restaurant, bar, hot showers. The natural starting and ending point for the east-to-west W Trek. Book at fantasticosur.com.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Refugio Los Cuernos",
                  type: "Trail refugio · W Trek Day 5 stop",
                  price: "CLP 45,000–50,000 ($49–55) dorm + dinner",
                  badge: "Best trail views",
                  desc: "Operated by Fantastico Sur. Dormitory beds overlooking Lago Nordenskjöld with Los Cuernos directly in front. Hot showers, three-course dinners (CLP 18,000 / $20), packed lunches available. The common room views are the best of any refugio on the W. Sells out months ahead — book through fantasticosur.com in August.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Hotel Last Hope (Puerto Natales)",
                  type: "Mid-range hotel · Puerto Natales town centre",
                  price: "From $90/night",
                  badge: "Best base town",
                  desc: "Clean, well-run mid-range hotel in central Puerto Natales with excellent breakfast included, gear storage, and staff who handle W Trek logistics daily. Good value for the price. Useful for pre- and post-trek nights — the location means you can easily walk to gear shops, the bus terminal, and restaurants.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Camping Torres del Paine",
                  type: "Campsite · Multiple locations on the W Trek",
                  price: "CLP 12,000 ($13) per person/night",
                  badge: "Budget option",
                  desc: "Official CONAF and concessionaire campsites at every major stop on the W: Camping Torres, Camping Serón, Camping Los Cuernos, Camping Italiano, Camping Paine Grande, and Camping Grey. CLP 12,000 ($13) per person at most sites. You must bring a 4-season tent rated for high wind (bring extra-long pegs) and a sleeping bag rated to -10°C. The camping experience in Patagonia is genuine, memorable, and cold.",
                  color: "border-green-200 bg-green-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              On the W Trek, eating options are confined to refugio set menus (CLP 16,000–20,000 / $17–22 dinner, CLP 9,000–12,000 / $10–13 breakfast) or your own trail food bought in Puerto Natales. Self-catered trail food for 4 days costs CLP 15,000–23,000 ($16–25) total from the supermarket. In Puerto Natales and Punta Arenas the restaurant scene is small but quality. In Santiago it is excellent.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Refugio Set Menus (On-Trail)",
                  t: "Trail dining · Fantastico Sur and Vertice Patagonia refugios",
                  d: "All full-service refugios on the W offer hot dinner (set menu CLP 16,000–20,000 / $17–22) and hot breakfast (CLP 9,000–12,000 / $10–13). After 6–8 hours of hiking in Patagonian wind, a hot three-course dinner is one of the great pleasures of the W Trek. Typically: soup, main (Patagonian lamb or pasta), dessert, hot drink. Add wine (CLP 9,000 / $10 a glass) for the full experience. Worth every peso.",
                  b: "Only option on-trail",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Afrigonia (Puerto Natales)",
                  t: "Fusion restaurant · Eberhard 343, Puerto Natales",
                  d: "The most interesting restaurant in Puerto Natales — a fusion of Chilean Patagonian and African flavours. Patagonian lamb with North African spice, king crab ceviche, and creative pisco cocktails. CLP 18,000–32,000 ($20–35) per person. Remarkable for a town this small in this location. Book ahead in December–January; the small dining room fills quickly.",
                  b: "Best in town",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Sotito&apos;s Bar (Punta Arenas)",
                  t: "Seafood restaurant · O&apos;Higgins 1138, Punta Arenas",
                  d: "The best centolla king crab in Punta Arenas — grilled, in butter sauce, or prepared as a millefeuille. Also serves centolla chowder, Patagonian lamb, and fresh Magellanic seafood. CLP 23,000–32,000 ($25–35) per person. The centolla is caught in the Strait of Magellan — there is nowhere fresher to eat it before you fly home.",
                  b: "Best crab in Punta Arenas",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Mercado Central (Santiago)",
                  t: "Seafood market · Near Plaza de Armas, Santiago",
                  d: "Built in 1872 with a cast-iron Victorian roof imported from England. The best seafood market in Chile: caldillo de congrio (eel soup — Pablo Neruda wrote an entire ode to it, CLP 7,000–9,000), machas a la parmesana (razor clam gratin, CLP 7,000), reineta ceviche, and whole centolla king crab (CLP 15,000–23,000 for a whole crab). Go at noon for the freshest fish and the best atmosphere.",
                  b: "Santiago farewell",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Supermarket Trail Food (Puerto Natales)",
                  t: "Self-catering · Unimarc or El Gaucho supermarket",
                  d: "If camping or cooking at refugio kitchens: CLP 15,000–23,000 ($16–25) covers 4 days of trail food. Stock oats, instant pasta, rice, nuts, chocolate, dried fruit, energy gels, and freeze-dried meals. Everything you need is available — Puerto Natales is well-stocked for trekkers. Inside the park there is nowhere to buy food after you leave.",
                  b: "Essential for campers",
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
            destination="Torres del Paine Patagonia"
            hotels={[
              {
                name: "EcoCamp Patagonia",
                type: "Geodesic dome eco-lodge · Inside the park",
                price: "From $500/night all-inclusive",
                rating: "5",
                badge: "Most unique",
                url: "https://www.booking.com/hotel/cl/ecocamp-patagonia.html?aid=2820480",
              },
              {
                name: "Hostería Las Torres",
                type: "Full-service lodge · Torres sector",
                price: "From $180/night",
                rating: "5",
                badge: "Best located",
                url: "https://www.booking.com/hotel/cl/hosteria-las-torres.html?aid=2820480",
              },
              {
                name: "Indigo Patagonia Hotel",
                type: "Boutique hotel · Puerto Natales",
                price: "From $120/night",
                rating: "4",
                badge: "Most stylish",
                url: "https://www.booking.com/hotel/cl/indigo-patagonia.html?aid=2820480",
              },
              {
                name: "Hotel Last Hope",
                type: "Mid-range · Puerto Natales town",
                price: "From $90/night",
                rating: "4",
                badge: "Best value base",
                url: "https://www.booking.com/hotel/cl/last-hope-puerto-natales.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "W Trek Full-Day Guided Hike",
                duration: "8 hrs",
                price: "From $85/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=torres+del+paine+w+trek+guided&partner_id=PSZA5UI",
              },
              {
                name: "Grey Glacier Boat Trip",
                duration: "3 hrs",
                price: "CLP 45,000 / $49",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=grey+glacier+patagonia+boat&partner_id=PSZA5UI",
              },
              {
                name: "Isla Magdalena Penguin Colony",
                duration: "3 hrs",
                price: "CLP 23,000 / $25",
                badge: "Wildlife highlight",
                url: "https://www.getyourguide.com/s/?q=isla+magdalena+penguin+punta+arenas&partner_id=PSZA5UI",
              },
              {
                name: "Torres del Paine Photography Tour",
                duration: "Full day",
                price: "From $120/person",
                url: "https://www.getyourguide.com/s/?q=torres+del+paine+photography+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🏕️",
                  title: "Not Booking W Trek Refugios 6+ Months Ahead",
                  desc: "Fantastico Sur and Vertice Patagonia open reservations in August for the following December–March season. By October, December is completely sold out. January and February sell out by November. If you are planning a December or January trek and haven't booked by September, you will be camping only — or not trekking at all. Set a calendar reminder for August 1st. Book at fantasticosur.com and vertice.cl separately — they operate different sectors.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🧥",
                  title: "Not Layering for All Four Seasons in One Day",
                  desc: "Patagonian weather changes every 20 minutes — this is the accurate local saying. A sunny 20°C morning becomes a horizontal-rain, 5°C windstorm by afternoon. On the same W Trek day you may experience every condition from hot sun to sleet to clear skies. You need a waterproof shell (genuinely waterproof — not water-resistant), a mid-layer fleece, thermal base layers, and sun protection. Arriving with a single jacket is a painful mistake.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏔️",
                  title: "Skipping Mirador Británico",
                  desc: "Most guided itineraries omit Mirador Británico because it adds 4 hours and significant elevation to the Valle del Francés day. This is the most common mistake on the W Trek. The mirador offers the only 360° panoramic view of the entire Torres del Paine massif — Torres, Cuernos, Glaciar Grey, and the Southern Ice Field all in one frame. It is the hardest section of the W. It is also the most dramatic viewpoint. Start Day 5 early and push through.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "💸",
                  title: "Expecting Patagonia to Be Cheap",
                  desc: "Patagonia is the most expensive region in South America — more expensive than Buenos Aires or Lima, comparable to parts of Europe. Park entry CLP 38,000 ($43) per day, refugio bunks CLP 35,000–55,000 ($38–60), a basic beer in Puerto Natales costs CLP 3,700 ($4). Budget travellers doing the full W Trek should plan CLP 552,000–736,000 ($600–800) total for the 4-day trek section alone including transport, park fees, food, and accommodation. The remoteness drives every cost up.",
                  color: "bg-pink-50 border-pink-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Patagonia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Torres Viewpoint at 4am — The Sunrise Hike",
                  desc: "Leave Refugio Las Torres at 4am with a headtorch and reach Mirador Base Torres at sunrise. The orange light on the granite towers over the turquoise glacial lake lasts 15–20 minutes and is one of the most photographed moments in South America. By 9am, clouds frequently cover the towers. By 11am, tour groups arrive. The 4am hike is cold, dark, and steep. It is worth every step.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🧊",
                  title: "Glaciar Grey — Go Before 7am for Best Conditions",
                  desc: "The Patagonian wind picks up significantly after 10am on most days. The Glaciar Grey trail from Refugio Paine Grande (8 hours return, 16km) is best started before 7am. Early morning light turns the blue ice golden, the lake surface is calmer for better iceberg reflections, and the wind has not yet started knocking people sideways on exposed sections. The Grey II catamaran (CLP 45,000 / $49) saves 3 hours of tired-leg return hiking.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🎫",
                  title: "Rent Gear in Puerto Natales — But Not Your Boots",
                  desc: "Erratic Rock and Baquedano Outdoor in Puerto Natales hire trekking poles (CLP 4,500/day), gaiters (CLP 2,700/day), sleeping bag liners (CLP 2,700/day), and waterproof gaiters. Gear quality is reasonable. What you cannot hire acceptably: quality rain jackets and trekking boots. Bring your own broken-in waterproof boots. A failing boot on the boulder field approach to the Torres at 4am is not an option.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🐧",
                  title: "Punta Arenas Penguin Colony — Don&apos;t Rush Through",
                  desc: "Most visitors treat Punta Arenas as a transit hub on the way to the park. The Isla Magdalena penguin colony boat trip (CLP 23,000 / $25, 3 hours total) is 120,000 nesting Magellanic penguins with complete lack of fear of humans — they walk up to inspect your shoes and ignore you entirely. The colony operates October–March. Book a day ahead in peak season. The hour on the island is one of the most memorable experiences of the entire trip.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "📱",
                  title: "Download Maps Offline Before Entering the Park",
                  desc: "There is no mobile signal anywhere on the W Trek. Download Torres del Paine trail maps on Maps.me or AllTrails before leaving Puerto Natales. The official CONAF ranger stations have paper maps (CLP 1,800) — buy one as backup. Trail junctions are well-signed but navigation in whiteout conditions or fog requires a physical map. Satellite communicators (SPOT, Garmin InReach) are worth renting for solo trekkers.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🌊",
                  title: "Trek East-to-West — Start at the Torres",
                  desc: "The standard guided direction is west-to-east (Paine Grande to Torres). We recommend east-to-west (Torres to Paine Grande) because the hardest, most dramatic day comes first when legs are fresh. The final day — Glaciar Grey to Paine Grande — then ends with the catamaran across Lago Pehoé as a reward. Psychologically and physically, east-to-west is the better direction.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Patagonia" />

          {/* Combine With */}
          <CombineWith currentSlug="chile-patagonia-7-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "W Trek vs O Circuit — which should I do?",
                  a: "The W Trek is 4–5 days and covers the most scenic highlights: Base Torres, Valle del Francés, and Glaciar Grey — roughly 80km total. The O Circuit is 9 days and adds the remote backside of the massif, including the John Gardner Pass with views over the immense Southern Ice Field. The W is the right choice for most first-time visitors. The O Circuit requires strong fitness, full camping capability, and is only feasible December–February when the Gardner Pass is reliably snow-free.",
                },
                {
                  q: "Do Indians need a visa for Chile?",
                  a: "As of 2026, Indian passport holders can enter Chile visa-free for up to 30 days as tourists. No prior application is required — you receive a tourist stamp on arrival at SCL or PUQ airports. Always verify the current policy at the Chilean consulate website before booking, as regulations can change. Chile has historically been one of the most welcoming South American countries for Indian passport holders.",
                },
                {
                  q: "How much does the W Trek cost in total?",
                  a: "Budget travellers should plan CLP 552,000–736,000 ($600–800) for the 4-day W Trek section alone: transport from Puerto Natales (CLP 18,000 each way), park entry (CLP 38,000 per day x 4 = CLP 152,000), accommodation (camping CLP 12,000/night x 4 = CLP 48,000 or refugio dorms CLP 35,000–55,000/night), and food (CLP 15,000–25,000 total self-catered). Mid-range with full-service refugios runs $900–1,200 for the trek section. The full 7-day trip including flights within Chile totals $1,200–2,500 for most travellers.",
                },
                {
                  q: "What is the best time to visit Torres del Paine?",
                  a: "December and January offer the best weather and longest daylight (20 hours in December). November and March have fewer tourists — November risks snow on high passes, March delivers stunning autumn lenga beech colours. April is cold but beautiful for experienced trekkers. Never visit June–August: the park is partially closed, the Gardner Pass is impassable under snow, and wind exceeds 150 km/h on exposed ridges.",
                },
                {
                  q: "How fit do I need to be for the W Trek?",
                  a: "The W Trek requires solid walking fitness: 60–80km over 4–5 days with 800m elevation gain on the hardest day (Base Torres). You do not need to be a runner or mountaineer, but you must be comfortable walking 6–8 hours daily with a 10–15kg pack on uneven, rocky terrain. The biggest challenge is the wind — physically resisting 80–100 km/h gusts is more exhausting than the elevation. Train by walking with a loaded pack for at least 4 weeks before the trip.",
                },
                {
                  q: "Can I rent trekking gear in Puerto Natales?",
                  a: "Yes — Erratic Rock and Baquedano Outdoor in Puerto Natales hire trekking poles (CLP 4,500/day), gaiters (CLP 2,700/day), sleeping bag liners (CLP 2,700/day), and waterproof gaiters. What you cannot hire adequately: quality waterproof jackets and trekking boots. Bring your own rain shell (genuinely waterproof, not just water-resistant) and broken-in hiking boots from home. The trekking pole rental quality is good enough; the boot rental quality is not suitable for a multi-day alpine trek.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Patagonia trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/torres-del-paine-booking-guide", label: "Refugio booking guide", icon: "🏕️" },
                { href: "/blog/patagonia-packing-list", label: "Packing list", icon: "🎒" },
                { href: "/blog/chile-travel-tips", label: "Chile travel tips", icon: "📋" },
                { href: "/blog/best-time-patagonia", label: "Best time to visit", icon: "🗓️" },
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
          <RelatedGuides currentSlug="chile-patagonia-7-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More South America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Peru &amp; Machu Picchu 5 Days", href: "/blog/peru-machu-picchu-5-days" },
                { label: "Buenos Aires 4 Days — Food &amp; Culture", href: "/blog/buenos-aires-4-days" },
                { label: "Colombia &amp; Cartagena 4 Days", href: "/blog/colombia-cartagena-4-days" },
                { label: "Santiago 3 Days — Chile&apos;s Capital", href: "/blog/santiago-3-days" },
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
