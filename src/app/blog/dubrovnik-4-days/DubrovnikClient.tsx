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
const DUBROVNIK_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Dubrovnik Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",   emoji: "🏰",  label: "Landmark Guide" },
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
          href: `mailto:?subject=Dubrovnik 4-Day Guide&body=Check this out: https://www.incredibleitinerary.com/blog/dubrovnik-4-days`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Dubrovnik in 4 Days — City Walls, Game of Thrones and the Elaphiti Islands&url=https://www.incredibleitinerary.com/blog/dubrovnik-4-days`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/dubrovnik-4-days"
        imageUrl="https://images.unsplash.com/photo-1555990538-7c4e9b3a5aad?w=1200&q=80"
        description="Dubrovnik in 4 Days: City Walls at sunrise, Game of Thrones filming locations, Lokrum island, Elaphiti Islands boat day — complete travel guide with euro costs."
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
export default function DubrovnikClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={DUBROVNIK_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Dubrovnik" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="dubrovnik croatia old city walls adriatic sea mediterranean sunset"
            fallback="https://images.unsplash.com/photo-1555990538-7c4e9b3a5aad?w=1600&q=80"
            alt="Dubrovnik Old Town city walls and terracotta rooftops overlooking the Adriatic Sea, Croatia"
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
              <span className="text-white/70">Dubrovnik 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-blue-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Dubrovnik in 4 Days:
                <em className="italic text-blue-300"> City Walls, Game of Thrones &amp; the Adriatic</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Limestone walls rising from the sea, terracotta rooftops, Lokrum Island&apos;s peacocks, a boat day on the Elaphiti Islands, and the best panorama in Europe from Mount Srd. The complete guide.
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
              <span>🇭🇷 Croatia, Europe</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From €55/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-blue-500 pl-6 mb-10 bg-blue-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Dubrovnik punches you in the chest the moment you first see it — the limestone walls rising straight from the Adriatic, the terracotta rooftops glowing orange in the afternoon sun, the sea so blue it looks colour-corrected. There is nowhere else on earth quite like this.
            </p>
          </blockquote>

          {/* ── WHAT DUBROVNIK ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Dubrovnik Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Dubrovnik was once the Republic of Ragusa — a city-state that maintained its independence from Venice, the Ottoman Empire, and Hungary for nearly five centuries through a combination of diplomacy, trade, and the most sophisticated system of governance in the medieval Mediterranean. At its height in the 15th and 16th centuries, Ragusa was one of the wealthiest and most literate cities in Europe, with mandatory public education, a functioning sewage system, a hospice for the poor, and a quarantine system for infectious disease that predated similar measures in the rest of Europe by centuries.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The 1667 earthquake destroyed much of the medieval city and killed a third of the population overnight. What you see today is largely a baroque reconstruction — extraordinary limestone architecture rebuilt in the decades that followed. The 2-kilometre city walls, still entirely intact, were first constructed in the 10th century and rebuilt continuously until the 17th. They remain among the best-preserved medieval fortification walls in Europe.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Modern Dubrovnik has a complication: it is one of the most over-touristed cities in the world relative to its size. The Old Town has roughly 1,500 permanent residents and receives up to 6,000 cruise ship day-trippers per day in peak summer on top of hotel guests. Visit in May, June, September, or October and you get the same city at a fraction of the crowd. Four days is the right amount — enough for the walls, the islands, the cable car, and a genuine feel for the place without rushing.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="DBV (20 min)" />
              <StatCard icon="🌡️" label="Best Season" value="May-Jun, Sep-Oct" />
              <StatCard icon="🏰" label="City Walls" value="2km Intact" />
              <StatCard icon="💰" label="Budget From" value="€55/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Dubrovnik</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–June",
                  i: "🌸",
                  t: "Late Spring — Best Season",
                  d: "22–28°C, warm enough for swimming, Adriatic calm and clear, accommodation at 60–70% of peak prices. The Old Town is busy but manageable — ferry queues are short, the City Walls walk takes 90 minutes without queuing. Lokrum and Elaphiti ferries are running full schedules. This is the sweet spot.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sept–Oct",
                  i: "🍂",
                  t: "Autumn — Excellent",
                  d: "24–28°C in September, 18–22°C in October. The sea is at its warmest after summer. Crowds drop significantly after the first week of September — by late September the Old Town has its character back. October is cooler but clear and genuinely beautiful. Some boat services reduce frequency in October.",
                  b: "Excellent",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🔥",
                  t: "Peak Summer — Overcrowded & Expensive",
                  d: "35°C+ heat, 6,000+ cruise ship day-trippers daily, the City Walls queue is 1–2 hours in the afternoon, accommodation prices are 2–3x the shoulder season rate, and the Stradun is shoulder-to-shoulder from 10am to 10pm. The evening (after 7pm when day-trippers leave) improves significantly. If July–August is your only option, budget more, book everything ahead, and do all outdoor activities before 9am.",
                  b: "Not recommended",
                  c: "bg-red-50 border-red-200",
                },
                {
                  s: "Nov–Apr",
                  i: "❄️",
                  t: "Winter — Quiet but Limited",
                  d: "10–16°C, many konobas and smaller restaurants close November–March, Lokrum ferry runs on reduced or suspended schedule, some Elaphiti boat services stop entirely. But the Old Town belongs entirely to residents and a handful of visitors — the Stradun on a December morning is one of the most peaceful urban experiences in Croatia. Good option for architectural and photography travel.",
                  b: "Low season",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Dubrovnik</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-blue-800 font-light">
                <strong className="font-medium">Key detail:</strong> Dubrovnik Airport (DBV) is 20 minutes from the Old Town by bus or taxi. Croatia joined Schengen on January 1, 2023 — Indian passport holders now need a Schengen C visa (€80). Western passport holders are visa-free for 90 days.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly to Dubrovnik Airport (DBV)",
                  d: "Direct flights from London (2h 45min), Amsterdam, Frankfurt, Vienna, and most major European hubs. Seasonal direct flights from NYC (14h with connection). From the airport: Bus #27 to Pile Gate costs €2 and takes 30–40 minutes. Taxis cost €25–35. Private transfers: €30–50 booked ahead.",
                  b: "Main option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Split",
                  d: "Split → Dubrovnik: 4.5–5 hours by Flixbus or Croatia Bus (€15–25, several departures daily). The coastal highway (Magistrala) passes through Bosnia for a 30-minute stretch at Neum — have your passport ready at the border crossing even with an EU/US passport. Spectacular sea views for most of the journey.",
                  b: "Budget option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Sarajevo",
                  d: "Sarajevo → Dubrovnik: 5–6 hours by bus (€20–30). A scenic route through Herzegovina and the Neretva Valley. Good option if combining Bosnia with the Dalmatian coast. Regular departures from Sarajevo Bus Station.",
                  b: "Scenic route",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🇮🇳",
                  t: "From India",
                  d: "No direct flights from India to Dubrovnik. Best connections: Mumbai/Delhi → Frankfurt/Vienna/Amsterdam → Dubrovnik (total 14–18 hours). Alternatively fly to Split and take the bus to Dubrovnik. Apply for a Schengen C visa 6–8 weeks ahead at Croatian Embassy or VFS Global (€80 fee). A valid Schengen visa from Italy or Germany also covers Croatia.",
                  b: "Indian passport",
                  c: "bg-orange-50 border-orange-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Dubrovnik Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary follows the logic of Dubrovnik: do the city walls and Old Town on Day 1, the islands on Days 2 and 3, and use Day 4 to slow down in the places you rushed past earlier. EUR costs listed; USD equivalents in brackets at roughly 1 EUR = 1.08 USD.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="City Walls at Sunrise · Stradun · Fort Lovrijenac · Game of Thrones Walk"
                cost="€60–85 (~$65–92)"
                items={[
                  "07:45 — Arrive at the Pile Gate (main western entrance to the Old Town, free to enter). The limestone Stradun promenade stretches 300 metres ahead — the most photographed pedestrian street in the Balkans. Walk it before the cruise ship tourists arrive; at this hour it belongs to you.",
                  "08:00 — City Walls walk at opening (€35 / ~$38 entry, 2km circuit). Start immediately at opening — by 11am the walls are shoulder-to-shoulder with groups. The full circuit takes 90 minutes. Every corner reveals a different angle of the Old Town rooftops and the Adriatic below. The western section above Fort Bokar has the best sea views.",
                  "09:45 — Fort Lovrijenac ('Dubrovnik's Acropolis', included with walls ticket same day). The fortress on the cliff outside the western walls — used as the Red Keep in Game of Thrones. Views over the harbour and Old Town are superb from the ramparts.",
                  "12:00 — Lunch: Nishta restaurant (Prijeko Street) for creative vegetarian Croatian cuisine — falafel, hummus, and seasonal plates (€8–14 / ~$9–15). One of the best-value meals in the Old Town. Book ahead in season.",
                  "14:00 — Game of Thrones filming locations self-guided walk (free). Download the free GoT map from the tourist office: Fort Lovrijenac (Red Keep), Jesuit Staircase (Cersei&apos;s Walk of Shame), St Dominika Street (King&apos;s Landing scenes), and the harbour area. No tour needed — the locations are all within the Old Town walls.",
                  "19:00 — Dinner outside the walls: walk 5 minutes through Pile Gate to the Ploce area and prices drop 40%. Grilled Adriatic fish €15–22, local Posip white wine €4–6 per glass.",
                  "21:00 — Evening stroll on the Stradun. The white limestone glows under the floodlights and the crowds thin considerably. Rakija (Croatian brandy) at a bar for €3–4.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Lokrum Island · Dead Sea Lake · Banje Beach · Cable Car Sunset"
                cost="€55–80 (~$59–86)"
                items={[
                  "09:30 — Ferry to Lokrum Island from the Old Town harbour (€20 / ~$22 return, ferries run every 30–60 minutes May–October). The island is a 10-minute crossing; peacocks roam freely among the trees and monastery ruins.",
                  "10:00 — Lokrum monastery ruins and the Game of Thrones Iron Throne replica (free with island entry). Located in the medieval monastery, it is one of the few permanent GoT museum pieces in Dubrovnik. The botanical garden founded by Archduke Maximilian in 1859 adds a surreal formal element to the wild island.",
                  "11:30 — Dead Sea Lake (Mrtvo More) on Lokrum — a saltwater lake connected to the sea, perfectly calm and warm. Free swimming once you are on the island. The rock platforms around it are ideal for sunbathing.",
                  "13:00 — Lunch on Lokrum at the island&apos;s small cafe (€8–12 / ~$9–13 for sandwiches and cold drinks). Bring extra food from the Old Town&apos;s Konzum supermarket if on a tight budget.",
                  "15:00 — Ferry back to Dubrovnik. Walk to Banje Beach (5 minutes from the Ploce Gate): the main Old Town beach faces directly at the city walls — excellent photography opportunity in late afternoon light.",
                  "17:00 — Cable car up Mount Srd (€25 / ~$27 return, summit at 412m). Dubrovnik&apos;s finest panorama — the Old Town, the islands, and the Adriatic spread below in every direction. One of the genuinely best views in Europe. Time it 30 minutes before sunset.",
                  "20:00 — Dinner at a konoba outside the walls. Grilled squid and local wine, €15–20 (~$16–22). Ask for domaca rakija (house-made brandy) — often free with a meal.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Elaphiti Islands Boat Day · Kolocep · Sipan · Sunj Beach on Lopud"
                cost="€55–75 (~$59–81)"
                items={[
                  "08:30 — Join a group boat day trip to the Elaphiti Islands (Kolocep, Lopud, Sipan) — departs from Gruz harbour, €35–50 (~$38–54) per person for a full day including a lunch stop. These three small islands northwest of Dubrovnik are car-free, pine-forested, and entirely different from the Old Town&apos;s tourist intensity.",
                  "10:00 — Kolocep Island: the smallest and least visited of the three. Pine forest walks, a small village, and clear water coves for swimming. The boat anchors and you swim from the ladder.",
                  "12:00 — Sipan Island: the largest, with a medieval fortress and two small villages connected by a coastal path. Lunch at a konoba overlooking the harbour (€12–18 / ~$13–19) — fresh grilled fish caught that morning.",
                  "14:30 — Lopud Island: Sunj Beach is Croatia&apos;s finest sand beach (most Croatian beaches are pebble). The boat anchors and passengers walk 15 minutes through the village to the beach. Free swimming.",
                  "17:00 — Return to Dubrovnik&apos;s Gruz harbour. Bus #1A back to the Old Town (€2) or a 20-minute walk.",
                  "20:00 — Final Stradun evening: sit at a cafe terrace with an Aperol Spritz (€7–9) and watch the evening promenade. Every resident of Dubrovnik seems to walk the Stradun in the hour after dinner — a genuinely memorable urban ritual. Book excursions ahead at https://www.getyourguide.com/s/?q=Dubrovnik+Croatia&partner_id=PSZA5UI",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Konavle Countryside · Old Town Deep Dive · Cavtat Village · Departure"
                cost="€45–65 (~$49–70)"
                items={[
                  "08:00 — Rector&apos;s Palace (€15 / ~$16) and the Dominican Monastery (€6 / ~$7) — the two most important buildings inside the Old Town walls that most visitors walk past. The Rector&apos;s Palace is the former seat of the Republic of Ragusa, with original Gothic-Renaissance architecture and a remarkable atrium. The Dominican Monastery has 14th-century paintings including a Titian altarpiece.",
                  "10:30 — Cathedral of the Assumption (€4 / ~$4) at the centre of the Old Town — the treasury holds a reliquary of the skull of Saint Blaise (Dubrovnik&apos;s patron saint) in a gold Venetian crown.",
                  "12:00 — Final lunch inside the Old Town: treat yourself to a proper seafood meal. Restaurant Kamenice (Gunduliceva Poljana) for fresh oysters and grilled fish at relatively fair prices for the location (€20–35 / ~$22–38 per person).",
                  "14:00 — Optional: bus south 30 minutes to Cavtat village (€3 / ~$3, a quiet Baroque harbour town, far less visited than Dubrovnik) or walk through the Konavle countryside east of the city — fertile vineyards, traditional stone villages, and essentially no tourists.",
                  "16:00 — Airport bus or taxi. Bus #27 from Pile Gate to Dubrovnik Airport takes 30–40 minutes (€2 / ~$2). Note: a €1–2 per person per night tourist tax (boravišna pristojba) is charged by most accommodation in the Dubrovnik region — always included or added at check-out.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Dubrovnik" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏰 Dubrovnik Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees as of early 2026 — the City Walls ticket (€35) is the single biggest cost and worth every cent. Buy online at the Dubrovnik tourist office website to skip the gate queue in peak season.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "City Walls (Gradske Zidine)",
                  e: "€35 / ~$38",
                  d: "The 2-kilometre circuit along the intact medieval walls is the defining Dubrovnik experience. 25 metres high at points, with views of every Old Town rooftop and the Adriatic on the other side. Walk at 8am opening — by 11am, sections near the towers become difficult to pass. The western Bokar and Minčeta towers have the best vantage points.",
                  t: "Must do · 90 mins",
                },
                {
                  n: "Lokrum Island",
                  e: "€20 / ~$22 return ferry",
                  d: "Ten minutes by ferry from the Old Town harbour. Free-roaming peacocks, a Game of Thrones Iron Throne replica in the monastery, a botanical garden from 1859, and the Dead Sea saltwater lake (Mrtvo More) for swimming. An excellent half-day escape from the Old Town crowds.",
                  t: "Half day · Ferry May–Oct",
                },
                {
                  n: "Mount Srd Cable Car",
                  e: "€25 / ~$27 return",
                  d: "The 412-metre summit above the city gives the finest panoramic view in Dubrovnik — the complete Old Town, the islands, and the Adriatic coast stretching in both directions. Time your ascent 30 minutes before sunset for golden hour light on the rooftops below. The War Photo Limited museum is at the summit.",
                  t: "Sunset · 1–2 hrs",
                },
                {
                  n: "Fort Lovrijenac",
                  e: "Included with City Walls ticket",
                  d: "The freestanding fortress on a cliff outside the western walls — Dubrovnik&apos;s Acropolis, used as the Red Keep in Game of Thrones. The Latin inscription above the gate reads &apos;Non Bene Pro Toto Libertas Venditur Auro&apos; — Freedom is not to be sold for all the gold in the world. Views over the harbour and Old Town.",
                  t: "30–45 mins",
                },
                {
                  n: "Rector&apos;s Palace",
                  e: "€15 / ~$16",
                  d: "The former seat of the Republic of Ragusa. A Gothic-Renaissance masterpiece with one of the finest courtyards in the Adriatic. The atrium was used for Ragusan state ceremonies and is now a concert venue in summer. The interior shows original furniture, artworks, and the history of the republic.",
                  t: "Must see · 1 hr",
                },
                {
                  n: "Elaphiti Islands",
                  e: "€35–50 / ~$38–54 group boat",
                  d: "Three car-free islands northwest of Dubrovnik — Kolocep, Lopud, and Sipan. Pine forests, sand beaches (Sunj on Lopud is Croatia&apos;s finest), genuine fish konobas, and the kind of quiet that the Old Town lost decades ago. A group boat tour from Gruz harbour is the easiest way to visit all three in a single day.",
                  t: "Full day · Essential",
                },
                {
                  n: "Stradun (Placa) Promenade",
                  e: "Free",
                  d: "The 300-metre limestone main street of the Old Town — polished by centuries of footfall to a mirror finish. Walk it at 7am (yours alone), at midday (shoulder-to-shoulder), and at 9pm (evening promenade with residents). Three completely different experiences of the same street.",
                  t: "Any time · Essential",
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
            title="Dubrovnik — Walls, Sea &amp; the Adriatic Islands"
            subtitle="The Pearl of the Adriatic and its extraordinary medieval coastline."
            spots={[
              {
                name: "Dubrovnik City Walls at Sunrise",
                query: "dubrovnik city walls sunrise terracotta rooftops adriatic croatia",
                desc: "The 2-kilometre intact medieval walls at first light — terracotta rooftops glowing and the Adriatic perfectly still below.",
              },
              {
                name: "Stradun Promenade",
                query: "dubrovnik stradun promenade limestone old town croatia evening",
                desc: "The limestone Stradun at dusk — 300 metres of mirror-polished stone linking the Pile and Ploce gates.",
              },
              {
                name: "Lokrum Island & Dead Sea Lake",
                query: "lokrum island dubrovnik adriatic sea swimming croatia",
                desc: "Lokrum Island&apos;s saltwater Dead Sea Lake — a natural swimming pool 10 minutes by ferry from the Old Town.",
              },
              {
                name: "Mount Srd Panorama",
                query: "mount srd dubrovnik panorama cable car sunset croatia",
                desc: "The view from Mount Srd at 412 metres — the complete Old Town, the islands, and the Adriatic coast at golden hour.",
              },
              {
                name: "Elaphiti Islands Boat Day",
                query: "elaphiti islands croatia adriatic sea boat dalmatia",
                desc: "The car-free Elaphiti Islands — Kolocep, Lopud, and Sipan — by boat from Dubrovnik&apos;s Gruz harbour.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Dubrovnik is one of the most expensive destinations in Croatia — significantly pricier than Split or Hvar. The biggest costs are accommodation (the Old Town&apos;s location premium is substantial) and activities. Eating outside the Old Town walls cuts food costs roughly in half. Note: a tourist tax (boravišna pristojba) of €1–2 per person per night is charged on top of accommodation rates.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (per night)", "€20–45 hostel/Gruz", "€90–160 boutique", "€350–700 villa/hotel"],
                    ["🍽️ Food (per day)", "€15–25 konobas outside walls", "€40–70 mixed", "€100–250 fine dining"],
                    ["🚌 Local transport", "€5–15 bus + public ferry", "€15–40 private taxi/ferry", "€80–500 private transfers"],
                    ["🎟️ Activities (per day)", "€25–45 walls + Lokrum", "€40–70 kayak + GoT tour", "€150–400 private tours"],
                    ["⛵ Elaphiti Islands boat", "€35–50 group tour", "€60–90 semi-private", "€700–1,400 private yacht"],
                    ["TOTAL (per person/day)", "€65–130 (~$70–140)", "€185–340 (~$200–367)", "€680–1,850 (~$734–1,998)"],
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
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-3">
              <p className="text-xs text-amber-800 font-light leading-relaxed">
                <strong className="font-medium">Tourist tax note:</strong> Dubrovnik municipality charges a boravišna pristojba (tourist tax) of €1–2 per adult per night, added to accommodation bills. Budget travellers: factor €4–8 extra per 4-night stay. This is separate from the accommodation rate and mandatory.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€65–130/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in a hostel or Gruz guesthouse (€20–45/night), eat at Nishta and konobas outside the Old Town walls, use public buses and the public Lokrum ferry. The City Walls (€35) and Elaphiti boat (€35–50) are the main daily costs. Entirely doable — Dubrovnik budget travel is harder than most Croatian destinations but not impossible.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">🌊 Mid-Range (€185–340/day)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">A boutique guesthouse near the Pile Gate or in Lapad (€90–160/night), one seafood dinner at Nautika, a GoT guided tour, and sea kayaking. This is the sweet spot — you experience Dubrovnik&apos;s highlights without the Old Town food premium eating your entire budget.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Dubrovnik</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              There are four main areas: inside the Old Town walls (premium price, walking access to everything), Ploce (east of the Old Town, quieter), Lapad peninsula (15 minutes by bus, beach access, much cheaper), and Gruz harbour (ferry access for island trips, cheapest). The further you stay from the Old Town walls, the more you save.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Old Town Sobe & Apartments",
                  type: "Heritage stay · Inside the walls",
                  price: "€80–250/night",
                  badge: "Most central",
                  desc: "Private rooms (sobe) and apartments in residential buildings inside the Old Town walls. Often family-run, with stone walls and terracotta tiles. The premium is real — you pay 2–3x Lapad rates for the same square footage. But walking out your door onto the Stradun at 7am is genuinely special.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Lapad Peninsula",
                  type: "Mid-range neighbourhood · 15 min by bus",
                  price: "€45–120/night",
                  badge: "Best value",
                  desc: "Lapad is Dubrovnik&apos;s residential tourist quarter — apartment hotels, family guesthouses, and small hotels along a pedestrian promenade with its own beach. Prices are 40–60% lower than the Old Town. Bus #7 runs to the Pile Gate every 20 minutes. Most returning visitors end up staying in Lapad.",
                  color: "border-green-200 bg-green-50",
                },
                {
                  name: "Gruz Harbour Area",
                  type: "Budget · Ferry quarter",
                  price: "€25–65/night",
                  badge: "Cheapest area",
                  desc: "Gruz is where the ferries to the Elaphiti Islands and the Split catamarans depart. Hostels and basic guesthouses at the lowest Dubrovnik prices. Not scenic but functional — a 20-minute walk or a 10-minute bus to the Old Town. Good if your trip involves island hopping.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Outside the Walls — Ploce Area",
                  type: "Mid-range · East of the Old Town",
                  price: "€70–180/night",
                  badge: "Quieter",
                  desc: "The Ploce Gate neighbourhood east of the Old Town has smaller guesthouses and apartments at 20–30% lower prices than inside the walls. A 5-minute walk to the Ploce Gate. Banje Beach is here — the Old Town beach with direct wall views. Better value than the Old Town interior for most visitors.",
                  color: "border-blue-200 bg-blue-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Dubrovnik</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Dubrovnik&apos;s food is genuinely excellent — fresh Adriatic seafood, black risotto (crni rižot made with cuttlefish ink), peka (slow-baked lamb or veal under a bell, ordered 24 hours ahead), Dalmatian oysters from the nearby Peljesac peninsula, and local wines (Posip white, Dingac red) that rarely travel far from Croatia. The rule: eat outside the Old Town walls and your meal costs roughly half.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Nishta",
                  t: "Vegetarian Croatian · Prijeko St, Old Town",
                  d: "The best-value meal inside the Old Town walls. Creative vegetarian and vegan Croatian cuisine — falafel, hummus, seasonal vegetable dishes. €8–14 a plate in a city where a mediocre fish plate costs €25. Remarkably good food for the price. Book ahead in season — it fills quickly.",
                  b: "Best value in Old Town",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Konoba Dubrava",
                  t: "Traditional konoba · Outside the walls",
                  d: "A short walk from the Old Town gates, Konoba Dubrava represents what Dubrovnik restaurants used to be — family-run, focused on local Dalmatian cooking, reasonable prices. Black risotto (crni rižot), grilled sea bream, fresh oysters from Ston. €15–25 per person. A genuinely local experience.",
                  b: "Most authentic",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Fresh Oysters at Ston",
                  t: "Day trip · Ston village, 60km north",
                  d: "Ston, an hour by bus from Dubrovnik, is one of Europe&apos;s finest oyster villages — the Mali Ston bay has been farming oysters since Roman times. A dozen Ston oysters costs €8–12 at a harborside konoba, compared to €18–25 for the same oysters in Dubrovnik&apos;s Old Town. If you eat one meal outside Dubrovnik, make it here.",
                  b: "Best oysters",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Black Risotto & Peka Lamb",
                  t: "Dalmatian classics · Any good konoba",
                  d: "Two dishes you must eat in Dubrovnik: crni rižot (black risotto made with cuttlefish ink — rich, briny, utterly Adriatic) and peka lamb (slow-cooked under an iron bell with potatoes and vegetables — pre-order 24 hours ahead, worth every minute of the wait). Best found at konobas outside the Old Town walls for €15–25 per dish.",
                  b: "Essential dishes",
                  c: "bg-orange-50 border-orange-200",
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
            destination="Dubrovnik Croatia"
            hotels={[
              {
                name: "Villa Dubrovnik",
                type: "Clifftop luxury · Private beach · Sea views",
                price: "From €350/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/hr/villa-dubrovnik.html?aid=2820480",
              },
              {
                name: "Excelsior Hotel & Spa",
                type: "Luxury · Old Town views · Spa",
                price: "From €400/night",
                rating: "5",
                badge: "Best views",
                url: "https://www.booking.com/hotel/hr/excelsior-dubrovnik.html?aid=2820480",
              },
              {
                name: "Boutique Hotel Stari Grad",
                type: "Boutique · Inside Old Town walls",
                price: "From €120/night",
                rating: "4",
                badge: "Most central",
                url: "https://www.booking.com/hotel/hr/boutique-stari-grad.html?aid=2820480",
              },
              {
                name: "Hotel Lapad",
                type: "Mid-range · Lapad peninsula · Beach",
                price: "From €70/night",
                rating: "3",
                badge: "Best value",
                url: "https://www.booking.com/hotel/hr/lapad-dubrovnik.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Dubrovnik City Walls Small Group Tour",
                duration: "2 hrs",
                price: "From €35/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Dubrovnik+city+walls+tour&partner_id=PSZA5UI",
              },
              {
                name: "Sea Kayaking Around the Old Town Walls",
                duration: "3 hrs",
                price: "From €35/person",
                badge: "Unique experience",
                url: "https://www.getyourguide.com/s/?q=Dubrovnik+sea+kayaking&partner_id=PSZA5UI",
              },
              {
                name: "Elaphiti Islands Full Day Boat Tour",
                duration: "8 hrs",
                price: "From €40/person",
                badge: "Island day",
                url: "https://www.getyourguide.com/s/?q=Dubrovnik+Elaphiti+islands&partner_id=PSZA5UI",
              },
              {
                name: "Game of Thrones Dubrovnik Walking Tour",
                duration: "2 hrs",
                price: "From €25/person",
                url: "https://www.getyourguide.com/s/?q=Dubrovnik+game+of+thrones+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Dubrovnik</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🌞",
                  title: "Visiting in July or August",
                  desc: "Dubrovnik in peak summer receives 6,000+ cruise ship day-trippers daily on top of hotel guests. The City Walls queue can hit 2 hours in the afternoon. The Stradun is shoulder-to-shoulder by 10am. Accommodation prices are 2–3x those of May or September. If July–August is unavoidable, do all outdoor activities before 9am, book walls tickets online, and accept the cost premium.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🎟️",
                  title: "Queuing to Buy City Walls Tickets on the Day",
                  desc: "The City Walls ticket (€35) can be bought online in advance at the Dubrovnik tourist office website. In peak season the gate queue is 30–60 minutes. Buy online, save the QR code, and walk straight to the entrance. Also: walk the walls at 8am opening — by 11am, some sections near the towers are nearly impassable with groups.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "⛵",
                  title: "Skipping the Island Day Trips",
                  desc: "Most visitors spend all four days in the Old Town, which you can cover thoroughly in one day. The real Dalmatia is out on the water — Lokrum with its peacocks and Game of Thrones throne, and the Elaphiti Islands with their pine forests and genuine sand beaches. At least one full island day is essential to understanding the Dubrovnik region.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🍽️",
                  title: "Eating Every Meal Inside the Old Town Walls",
                  desc: "Restaurants on the Stradun and within the Old Town walls charge 2–3x the price of identical food just outside the Pile or Ploce Gates. Nishta is the main exception inside. The Lapad peninsula and Gruz harbour have excellent konobas with local cooking at local prices. Walk out of the tourist zone and your meal budget roughly halves.",
                  color: "bg-pink-50 border-pink-200",
                },
                {
                  icon: "🚢",
                  title: "Arriving on a Day When Multiple Cruise Ships Dock",
                  desc: "Check Dubrovnik&apos;s cruise ship schedule at dubrovnik-cruise.com before you book your visit. On days with 3–4 ships, the Old Town receives 12,000–18,000 day-trippers. The city has a cap system but it is imperfectly enforced. A single ship day is manageable. Multiple-ship days in July and August are genuinely unpleasant — the Stradun becomes impassable.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} color={m.color} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Dubrovnik</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "City Walls at 8am — Empty Battlements",
                  desc: "The walls open at 8am. Arrive at 8:00am sharp and you will have the full 2km circuit almost to yourself. The morning light on the terracotta rooftops and the Adriatic is extraordinary, temperatures are 10–15 degrees cooler than midday, and you finish before the cruise ship tourists even dock. By 11am some sections are nearly impassable.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚣",
                  title: "Sea Kayaking Around the Old Town Walls",
                  desc: "Sea kayaking around the base of Dubrovnik&apos;s walls (€30–45 / ~$32–49 for a 3-hour guided tour) gives a completely different perspective — the walls rise 25 metres directly from the Adriatic and the Game of Thrones filming locations look entirely different at water level. One of the best physical experiences in all of Croatia.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🏝️",
                  title: "Elaphiti Islands Are Better Than Lokrum for a Full Day",
                  desc: "Lokrum is the easy half-day trip (20 minutes by ferry, peacocks, GoT throne, swimming lake). The Elaphiti Islands (Kolocep, Lopud, Sipan) are the proper island day — car-free villages, sand beaches, genuine fish konobas, and real quiet. A group boat tour to Elaphiti costs €35–50 / ~$38–54 and is one of the best days in Dalmatia.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🍽️",
                  title: "Nishta Is the Best Value Meal in the Old Town",
                  desc: "Nishta on Prijeko Street serves creative vegetarian and vegan Croatian cuisine (falafel, hummus, seasonal dishes) for €8–14 a plate inside the Old Town walls. In a city where most restaurants charge €25 for a modest fish plate, Nishta is genuinely exceptional value. Book ahead in season.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "📸",
                  title: "Game of Thrones Locations — Get the Free Map",
                  desc: "Walking past Fort Lovrijenac without knowing it was the Red Keep, or climbing the Jesuit Staircase without knowing it was Cersei&apos;s Walk of Shame, means missing half of what makes Dubrovnik special to modern visitors. Get the free GoT location map from the tourist office at Pile Gate — it takes 30 seconds and completely transforms your Old Town walk.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🚌",
                  title: "Use the City Bus — It Is Excellent",
                  desc: "Dubrovnik&apos;s city buses (€2 per journey, day pass €5) connect the Old Town (Pile Gate) to Lapad, Gruz harbour, and the airport. Bus #27 for the airport. Bus #7 for Lapad. Bus #1A for Gruz. The 30-minute walk from Gruz to the Old Town along the harbour is pleasant in the evening.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Dubrovnik" />

          {/* Combine With */}
          <CombineWith currentSlug="dubrovnik-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Where are the Game of Thrones filming locations in Dubrovnik?",
                  a: "Dubrovnik served as King&apos;s Landing in Game of Thrones for Seasons 2–8. Key locations: Fort Lovrijenac (Red Keep exterior), the Jesuit Staircase (Cersei&apos;s Walk of Shame in Season 5), St Dominika Street (King&apos;s Landing street scenes), the Old Town harbour (harbour scenes), Pile Gate area (Blackwater battle), and Lokrum Island (Qarth scenes in Season 2). The Dubrovnik tourist office has a free GoT locations map at the Pile Gate entrance. A guided 2-hour tour costs €25–40.",
                },
                {
                  q: "Do Indian nationals need a visa for Croatia?",
                  a: "Yes. Croatia joined the Schengen Area on January 1, 2023. Indian passport holders now need a Schengen C visa (€80 fee) to enter Croatia. Apply at the Croatian Embassy or VFS Global at least 6 weeks before travel, with hotel bookings, return flights, 3-month bank statements, and travel insurance (minimum €30,000 coverage). A valid Schengen visa issued for another Schengen country such as Italy or France also gives you entry to Croatia on the same trip.",
                },
                {
                  q: "When is the best time to visit Dubrovnik to avoid crowds?",
                  a: "May and early June, or September and October. These months have warm weather (22–28°C), calm Adriatic water for swimming and kayaking, all ferries and boat tours running, and a fraction of the summer crowds. July and August bring 6,000+ daily cruise ship visitors, 35°C+ heat, 2-hour queues at the City Walls, and accommodation prices 2–3x the shoulder season rate. The city empties noticeably after 6pm when day-trippers leave — even in summer.",
                },
                {
                  q: "How do you get from Dubrovnik Airport to the Old Town?",
                  a: "Airport Bus #27 runs from the airport to Pile Gate (main Old Town entrance) in 30–40 minutes and costs €2. Runs every 30–60 minutes in season. Taxis cost €25–35 and take 20–25 minutes. Pre-booked private transfers: €30–50. For luxury travellers, private speedboat transfers from the airport coast road to the Old Town harbour are available through hotel concierges (€150–200, 25 minutes by sea).",
                },
                {
                  q: "Is Dubrovnik worth visiting even with the crowds?",
                  a: "Yes, unequivocally — but the timing matters enormously. In May, June, September, or October, Dubrovnik is one of the most extraordinary urban destinations in Europe: intact medieval walls, the Adriatic, island hopping, and a city with 500 years of independent history visible in every stone. In peak July–August, those same qualities exist but are experienced through a scrum of 20,000 daily visitors. Visit in the shoulder season and you get the city the way it deserves to be seen.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Dubrovnik trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/dubrovnik-city-walls-guide", label: "City Walls guide", icon: "🏰" },
                { href: "/blog/elaphiti-islands-day-trip", label: "Elaphiti day trip", icon: "⛵" },
                { href: "/blog/dubrovnik-vs-split", label: "Dubrovnik vs Split", icon: "🗺️" },
                { href: "/blog/croatia-travel-tips", label: "Croatia tips", icon: "🇭🇷" },
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
          <RelatedGuides currentSlug="dubrovnik-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Athens in 3 Days — Acropolis &amp; Plaka", href: "/blog/athens-3-days" },
                { label: "Rome in 4 Days — Colosseum to Trastevere", href: "/blog/rome-4-days" },
                { label: "Santorini in 4 Days — Oia &amp; Caldera", href: "/blog/santorini-4-days" },
                { label: "Istanbul in 5 Days — Two Continents", href: "/blog/istanbul-5-days" },
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
