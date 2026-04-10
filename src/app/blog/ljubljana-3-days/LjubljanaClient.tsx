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
const LJUBLJANA_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Ljubljana Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "🚂",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "3-Day Itinerary" },
  { id: "highlights",  emoji: "🏰",  label: "Top Highlights" },
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
          href: `mailto:?subject=Ljubljana 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Ljubljana in 3 Days — dragons, castle, and Lake Bled&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/ljubljana-3-days"
        imageUrl="https://images.unsplash.com/photo-1555993539-0a3b0b57f4e1?w=1200&q=80"
        description="Ljubljana in 3 Days: Dragon Bridge, Ljubljana Castle, Triple Bridge, Lake Bled day trip, and Postojna Cave — complete Slovenia travel guide."
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
export default function LjubljanaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={LJUBLJANA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Ljubljana" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="ljubljana slovenia castle river dragon bridge old town"
            fallback="https://images.unsplash.com/photo-1555993539-0a3b0b57f4e1?w=1600&q=80"
            alt="Ljubljana Slovenia Old Town with castle on hill and Triple Bridge over Ljubljanica River"
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
              <span className="text-white/70">Ljubljana 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  European Green Capital 2016
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Ljubljana in 3 Days:
                <em className="italic text-amber-300"> Dragons, Castles &amp; Lake Bled</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Europe&apos;s most sustainable capital — pedestrianised old town, a hilltop castle, the Dragon Bridge, and Lake Bled 55 minutes away. The complete guide.
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
              <span>🇸🇮 Ljubljana, Slovenia</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From €50/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Ljubljana is a city that seems almost too good to be true — pedestrianised streets without a car in sight, a baroque old town where people sit at riverside terraces all evening, a castle on the hill above, and Lake Bled barely an hour away. Europe&apos;s most liveable small capital, and most travellers have never heard of it.
            </p>
          </blockquote>

          {/* ── WHAT LJUBLJANA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Ljubljana Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Ljubljana (pronounced lyoo-BLEE-ah-nah) is the capital of Slovenia — a country of two million people wedged between Austria, Italy, Croatia, and Hungary. The city has a population of around 300,000, making it one of the smallest capitals in Europe. That smallness is its greatest asset: the historic core is compact enough to walk end-to-end in 20 minutes, completely car-free, and extraordinarily liveable.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The city was designed — or more accurately, redesigned — by a single architect: Jože Plečnik, a Slovenian who studied under Otto Wagner in Vienna and was offered the commission to redesign Ljubljana in the 1920s and 30s. Almost every public space in the old town bears his touch: the Triple Bridge, the covered market colonnades, the National and University Library, the cemetery at Žale. The effect is an old town that has a unified architectural vision unlike almost any other European city.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The Ljubljanica River runs through the heart of the old town, lined on both banks with restaurant and bar terraces. From April through October, the entire riverfront is essentially one long outdoor café. Above it, Ljubljana Castle sits on a wooded hill that you can walk up in 20 minutes or reach by funicular for €4. The view from the castle tower — red-tiled roofs, the river winding through the old town, the Julian Alps on the horizon — is one of the best urban views in central Europe.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="🚂" label="From Vienna" value="6 hrs" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Oct" />
              <StatCard icon="🏰" label="Old Town" value="20 min walk" />
              <StatCard icon="💰" label="Budget From" value="€50/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Ljubljana</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "15–24°C, the Ljubljanica terraces come alive, the Tivoli Park is in full bloom, and Lake Bled is green and uncrowded before the summer peak. April–May is the sweet spot: comfortable temperatures, fewer tourists than July–August, and the Open Kitchen food market restarts.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul–Aug",
                  i: "☀️",
                  t: "Summer — Busy but Beautiful",
                  d: "22–30°C, sunny, and lively. Ljubljana&apos;s summer festival season runs July–August with outdoor concerts, the Ljubljana Festival, and cinema in Tivoli Park. Lake Bled is at peak crowds and prices. Evenings are warm and the riverside terraces are at their most atmospheric.",
                  b: "Peak season",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Autumn — Underrated",
                  d: "12–20°C, the Tivoli Park turns gold and copper, Lake Bled has shorter queues, and the harvest season brings excellent food markets. September is arguably the best month overall: summer warmth without the crowds, and the Open Kitchen still running on Fridays.",
                  b: "Hidden gem timing",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Mar",
                  i: "❄️",
                  t: "Winter — Quiet and Festive",
                  d: "0–8°C. Ljubljana has a beautiful Christmas market (one of the best in central Europe) from late November through January. The rest of winter is quiet — fewer tourists, lower hotel prices, and the possibility of snow on the castle. Lake Bled in winter with frost is genuinely magical.",
                  b: "For Christmas markets",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚂 Getting to Ljubljana</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Ljubljana&apos;s airport (LJU, Jože Pučnik) is 26 km from the city and serves limited routes. Most international visitors arrive by train from Vienna, Venice, or Zagreb — or fly into Vienna/Venice and take the train. Ljubljana&apos;s central train station is a 10-minute walk from the old town.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚂",
                  t: "Train from Vienna (recommended)",
                  d: "Wien Hauptbahnhof → Ljubljana: approximately 6 hours, €20–€40 depending on advance booking. Direct Nightjet overnight trains also run Vienna–Ljubljana. From the station, the old town is a 10-minute walk or a short tram ride. Scenic approach through the eastern Alps.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚂",
                  t: "Train from Venice (Santa Lucia)",
                  d: "Venice Santa Lucia → Ljubljana: approximately 2 hours by direct Intercity train, €15–€30. One of the best rail journeys in Europe — crosses the karst plateau and descends into the Ljubljana basin. Great option if combining Slovenia with northern Italy.",
                  b: "Scenic route",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "✈️",
                  t: "Fly to Ljubljana Airport (LJU)",
                  d: "Limited direct flights — mainly from Amsterdam, Frankfurt, London Heathrow, Paris CDG, and a few Wizz Air routes. Airport bus to the city (GoOpti or regular bus line 28) takes 45 minutes and costs €4–€9. Taxis cost €25–€35.",
                  b: "Limited routes",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Zagreb (Croatia)",
                  d: "Zagreb → Ljubljana: 2.5 hours by FlixBus or Arriva, €8–€15. Excellent option if combining with Croatia. Regular departures throughout the day. Ljubljana bus station is next to the train station, 10 minutes from the old town.",
                  b: "Cheap and easy",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Ljubljana Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. Day 1 covers Ljubljana&apos;s old town and castle. Day 2 is a full day at Lake Bled. Day 3 combines Postojna Cave and Predjama Castle — or simply more Ljubljana if you prefer a slower pace.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Old Town · Triple Bridge · Ljubljana Castle · Metelkova"
                cost="€25–40"
                items={[
                  "Arrive in Ljubljana and drop your bags — the entire old town is pedestrianised and car-free, so the first thing you notice is the absence of traffic noise. This is immediately a different kind of European city.",
                  "Prešeren Square (Prešernov trg): the city&apos;s main square, anchored by the pink Franciscan Church of the Annunciation (1646–1660) and the bronze statue of the Romantic poet France Prešeren. The square opens onto the Ljubljanica River where the Triple Bridge begins.",
                  "Triple Bridge (Tromostovje): Jože Plečnik&apos;s 1931 masterpiece — a single vehicular bridge flanked by two pedestrian bridges, creating a fan shape across the Ljubljanica. Walk all three spans. The riverside terraces begin immediately on the far side.",
                  "Plečnik&apos;s Central Market: the colonnaded riverside market running between the Triple Bridge and the Dragon Bridge, designed by Plečnik in the 1940s. The morning market (Monday–Saturday) has fresh produce, Slovenian honey, cheese, and homemade goods. Browse and sample — the stalls near the fish market section are the most interesting.",
                  "Dragon Bridge (Zmajski most): Ljubljana&apos;s most famous landmark — a 1901 cast-iron bridge guarded by four large copper dragons at its corners. According to legend, Jason and the Argonauts killed a dragon in the swamp that became Ljubljana. Free to walk across. Photograph the dragons from below, looking up.",
                  "Ljubljana Castle: walk up the wooded hill (20 minutes, free) or take the funicular (€4 return). The castle grounds are free; the Tower observation deck and Virtual Castle exhibition cost €10 combined. The 360° view from the tower over the red-roofed old town, with the Julian Alps on clear days, is the best urban viewpoint in Slovenia.",
                  "Lunch: Gostilna na Gradu inside the castle — Slovenian cuisine with castle courtyard views (€15–25). Or descend for lunch at the Central Market.",
                  "Afternoon: Walk the length of the Ljubljanica riverside terraces — from the Triple Bridge south to the Congress Square side. The terrace bars and cafes are how Ljubljana actually lives. A coffee here (€2.50–3) is a cultural experience as much as a caffeine hit.",
                  "Evening: Metelkova City — Ljubljana&apos;s alternative cultural centre in a former Yugoslav army barracks, 10 minutes walk from the old town. Street art covers every surface. Bars and music venues open from 9pm. The most genuine underground arts district in the western Balkans.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Lake Bled — Island Church · Castle · Kremšnita · Vintgar Gorge"
                cost="€35–55"
                items={[
                  "Morning: Take the bus from Ljubljana bus station to Bled (1.5 hrs, €7 each way, departures from 6:30am) — or the train to Lesce-Bled station (€8, 55 min by fast train) then a connecting bus. Arrive by 9am at the latest to beat the tour buses.",
                  "Lake Bled first view: walk to the eastern shore (Bled Promenada) for the classic view — the emerald-green lake, the island with its white Baroque church, and Bled Castle on the 130-metre cliff above. It genuinely looks like a painting. On clear days, the Karavanke mountains frame the entire scene.",
                  "Pletna gondola to the island church (€18 per person, round trip): the traditional hand-rowed wooden boats have been operated by the same Bled families for generations under a hereditary licence system. The island Church of the Assumption has a wishing bell — ring it three times for your wish to come true. €6 entry to the church and bell tower.",
                  "Bled Castle (Blejski Grad, €15): the most dramatically positioned castle in Slovenia — a medieval fortress on a sheer 130-metre cliff. Museum rooms, a printing press you can operate, a wine cellar with tastings, and the most panoramic view of the lake from any point. Budget 1.5 hours.",
                  "Kremšnita: the Bled cream cake (vanilla custard between two layers of puff pastry) is essentially Slovenia&apos;s national dessert. Eat it at the Park Hotel café on the lake promenade (€4–5) — this is the original recipe, in the original location. Non-negotiable.",
                  "Afternoon option 1: Walk the full circular lake path (6 km, about 1.5 hours at a gentle pace). It passes swimming spots, the casino gardens, and the inlet at Ojstrica (the most photographed angle of the lake from above — a short steep 10-minute scramble).",
                  "Afternoon option 2: Vintgar Gorge (5 km from Bled by car or taxi, €10 entry). A 1.6 km walk on wooden boardwalks above the turquoise Radovna River cutting through a narrow limestone gorge. One of the most beautiful short walks in Slovenia. Genuinely spectacular and completely different from the lake.",
                  "Return bus or train to Ljubljana by 7–8pm. Dinner on the riverside terraces.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Postojna Cave · Predjama Castle · Final Evening in Ljubljana"
                cost="€40–60"
                items={[
                  "Morning: Bus from Ljubljana to Postojna (1 hour, €8 each way, regular departures from 8am). Postojna Cave is one of the world&apos;s longest and most visited cave systems — 27 km of passages, accessible by miniature electric train that takes you 5 km into the mountain before the guided walking section begins.",
                  "Postojna Cave tour (€28.90 adults): 1.5 hours total, including the train ride and a 1.7 km guided walk through enormous cave chambers. The stalactite and stalagmite formations are genuinely staggering in scale — the Concert Hall is 50 metres high. The cave maintains a constant 8°C — bring a layer regardless of the weather outside.",
                  "See the olm (Proteus anguinus): Postojna&apos;s resident cave salamander — a pale pink, eyeless creature up to 30 cm long that lives only in Dinaric karst cave systems. Often called &apos;the human fish&apos; by locals. The Vivarium section of the tour shows live specimens. This is one of the most unusual animals in Europe.",
                  "Predjama Castle (9 km from Postojna, €16.80 adults): take a taxi (€12) or join an organised transfer. Predjama is a 16th-century castle embedded inside a 123-metre cliff cave — literally built into the rock face. One of the most dramatic castle settings in the world. The robber baron Erasmus of Lueg held off a one-year siege here using a secret supply tunnel through the cave behind the castle.",
                  "Lunch: Simple café near Postojna Cave entrance or in Postojna town — budget €8–12. The karst region is known for air-dried prosciutto (pršut) and Teran red wine — try both even at a simple lunch stop.",
                  "Return to Ljubljana by 5–6pm. The Postojna–Ljubljana bus takes about 1 hour.",
                  "Final evening: Open Kitchen (Odprta kuhna) if your visit falls on a Friday — Ljubljana&apos;s beloved street food market on Pogačarjev trg runs Friday afternoons from late March to October. 50+ stalls mixing Slovenian, Asian, and international food. A plate and a glass of Slovenian wine costs €10–15 and it&apos;s one of the most enjoyable evenings in Ljubljana.",
                  "If not a Friday: dinner at Langerholz on the Ljubljanica (Slovenian farm-to-table, €25–35) or Gostilna na Gradu (castle restaurant for a final splurge). Order venison or beef goulash with a glass of Rebula white wine.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Ljubljana" onPlanTrip={() => setModalOpen(true)} />

          {/* ── TOP HIGHLIGHTS ── */}
          <section id="highlights" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏰 Ljubljana&apos;s Top Highlights</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The main sites in order of priority, with entry fees and honest time estimates as of 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Ljubljana Castle Tower",
                  e: "€10 (Tower + Virtual Castle) / Grounds free",
                  d: "The 360° view from the castle tower over Ljubljana&apos;s red-roofed old town is the single best urban viewpoint in Slovenia. Walk up the wooded hill for free (20 minutes from the old town) or take the funicular (€4 return). The tower is worth paying for — the view on a clear day extends to the Julian Alps.",
                  t: "Must see · 1.5–2 hrs",
                },
                {
                  n: "Triple Bridge (Tromostovje)",
                  e: "Free",
                  d: "Jože Plečnik&apos;s fan-shaped triple crossing of the Ljubljanica — a single vehicular bridge flanked by two pedestrian walkways. The most elegant piece of urban design in Ljubljana and the gateway between the modern city and the old town. Walk all three spans and look downstream at the riverside terraces.",
                  t: "Must see · 20 mins",
                },
                {
                  n: "Dragon Bridge (Zmajski most)",
                  e: "Free",
                  d: "Ljubljana&apos;s most photographed landmark — a 1901 Art Nouveau bridge guarded by four large copper dragon statues. Dragons appear throughout Ljubljana&apos;s heraldry and identity; the bridge is the most visible expression of the city&apos;s draconian pride. Walk both directions and photograph the dragons from below.",
                  t: "Must see · 20 mins",
                },
                {
                  n: "Plečnik&apos;s Central Market",
                  e: "Free (browsing)",
                  d: "The colonnaded riverside market designed by Jože Plečnik in the 1940s — a long arcade running from the Triple Bridge to the Dragon Bridge along the Ljubljanica. Morning market (Mon–Sat) sells fresh produce, Slovenian honey, cheese, and crafts. One of the best farmers&apos; markets in central Europe.",
                  t: "Morning visit · 45 mins",
                },
                {
                  n: "Metelkova City",
                  e: "Free (bars have entry from €3–8)",
                  d: "Ljubljana&apos;s autonomous alternative cultural centre in a former Yugoslav army barracks — covered in murals, sculpture, and graffiti. During the day it&apos;s a fascinating walk-through open-air art space. In the evenings it becomes one of Ljubljana&apos;s best nightlife areas. The most genuine counterculture space in Slovenia.",
                  t: "Evening · 1–3 hrs",
                },
                {
                  n: "Tivoli Park",
                  e: "Free",
                  d: "Ljubljana&apos;s central park, designed by Plečnik, covering 5 square kilometres directly west of the old town. Chestnut tree avenues, a rose garden, open-air summer cinema, and the Jakopič Promenade — a broad pedestrian boulevard lined with temporary photo exhibitions. The best green space in any central European capital for its size.",
                  t: "Afternoon · 1–2 hrs",
                },
                {
                  n: "Hostel Celica (former prison)",
                  e: "Free to visit public areas / Café open to all",
                  d: "A former Yugoslav military prison converted into a design hostel and cultural centre — each cell redesigned by a different artist. The building is a Ljubljana landmark even if you&apos;re not staying there. The ground floor café is open to non-guests. Walking through the cell-corridors is genuinely interesting.",
                  t: "Worth visiting · 30 mins",
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
            title="Ljubljana — Dragons, Castles &amp; the Ljubljanica"
            subtitle="Europe&apos;s most sustainable capital and its extraordinary setting."
            spots={[
              {
                name: "Ljubljana Castle on the Hill",
                query: "ljubljana castle hill old town slovenia aerial view",
                desc: "Ljubljana Castle on its wooded hill above the baroque old town — the defining image of the Slovenian capital.",
              },
              {
                name: "Dragon Bridge Ljubljana",
                query: "dragon bridge zmajski most ljubljana copper dragons",
                desc: "The four copper dragons guarding the 1901 Art Nouveau Dragon Bridge — Ljubljana&apos;s most photographed landmark.",
              },
              {
                name: "Triple Bridge Plečnik",
                query: "triple bridge tromostovje ljubljanica river reflections",
                desc: "Plečnik&apos;s Triple Bridge fanning across the Ljubljanica — the elegant gateway to the old town.",
              },
              {
                name: "Lake Bled Island Church",
                query: "lake bled island church castle cliff slovenia",
                desc: "Lake Bled with the island church and the clifftop castle — one of Europe&apos;s most photographed scenes.",
              },
              {
                name: "Postojna Cave Stalactites",
                query: "postojna cave stalactites stalagmites slovenia underground",
                desc: "The Concert Hall inside Postojna Cave — one of the world&apos;s largest cave systems, 27 km of passages.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Slovenia uses the euro and prices are comparable to southern Germany or Austria — not to the cheaper western Balkans. A mid-range restaurant meal costs €15–25, a coffee €2.50–3.50. Budget accordingly.
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
                    ["🏨 Accommodation (per night)", "€18–28 (hostel)", "€60–90 (boutique)", "€150–250 (5-star)"],
                    ["🍽️ Food (per day)", "€12–18", "€30–45", "€80–120"],
                    ["🚌 Transport (per day)", "€8–12 (bus)", "€15–25 (car/transfer)", "€60–100 (private car)"],
                    ["🏰 Activities (per day)", "€10–18", "€20–35", "€60–120"],
                    ["TOTAL (per day)", "€50", "€110", "€260"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€50/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay at Hostel Celica or another central hostel (€18–28/night dorm), eat at the Central Market and grab burek for breakfast (€2–3), take buses to Bled and Postojna. The castle grounds are free, walking is free, and the Dragon Bridge is free. Very doable in Ljubljana.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€110/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay at a boutique hotel in the Old Town or Krakovo (€60–90/night), eat at proper gostilnas (Slovenian restaurants) for lunch and dinner, rent a car for the Bled and Postojna day trips. This is the sweet spot for Ljubljana — comfortable without splashing out.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Ljubljana</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Stay in the Old Town or within 10 minutes walk of it — Ljubljana is compact enough that location matters significantly. The best neighbourhood for a first visit is the old town itself or the adjacent Krakovo area.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Vander Urbani Resort",
                  type: "5-star design hotel · Old Town, Krojaška ulica",
                  price: "From €180/night",
                  badge: "Most stylish",
                  desc: "A five-star boutique hotel right on the Ljubljanica River in the heart of the old town — converted from a historic building with exposed stone walls, a rooftop pool, and a terrace directly over the river. The best location of any hotel in Ljubljana. Book well in advance in summer.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Grand Hotel Union",
                  type: "4-star landmark · Congress Square",
                  price: "From €120/night",
                  badge: "Historic landmark",
                  desc: "Ljubljana&apos;s grande dame hotel in a 1905 Art Nouveau building on Congress Square, a 3-minute walk from the Triple Bridge. The architecture alone justifies a stay — the main staircase and ballroom are extraordinary. Good pool, consistent service, and an excellent central location.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Hostel Celica",
                  type: "Design hostel · Former military prison · Metelkova",
                  price: "From €28/night (dorm) / €70 (cell room)",
                  badge: "Most unique",
                  desc: "A former Yugoslav military prison converted into an award-winning design hostel — each of the 20 cell rooms redesigned by a different artist. Dormitory beds available or book a private &apos;cell&apos; (with bars on the windows, deliberately). 10-minute walk from the old town, next to Metelkova. One of the most interesting places to sleep in Europe.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Boutique Hotel Galleria",
                  type: "3-star boutique · Old Town, Gornji trg",
                  price: "From €80/night",
                  badge: "Best value",
                  desc: "A small, well-run boutique hotel on one of the old town&apos;s prettiest cobbled streets (Gornji trg, Upper Square). Individually decorated rooms, helpful staff, and genuinely unbeatable walking access to the castle, market, and Dragon Bridge. The best value option in the old town.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Ljubljana</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Ljubljana&apos;s food scene mixes Austrian, Italian, and Balkan influences — you&apos;ll find žlikrofi (potato dumplings), venison goulash, burek (Balkan meat pastry), Viennese-style schnitzel, and excellent Italian-influenced pastas all within a few streets of each other.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Gostilna na Gradu",
                  t: "Slovenian fine dining · Ljubljana Castle",
                  d: "The best restaurant inside Ljubljana Castle — traditional Slovenian cuisine with castle courtyard views. The menu changes with the season and emphasises foraged ingredients, local meats, and Slovenian wines. Excellent for a special lunch or dinner with the castle atmosphere. Mains €18–28. Book ahead in summer.",
                  b: "Most special setting",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Odprta kuhna (Open Kitchen)",
                  t: "Street food market · Pogačarjev trg · Fridays only",
                  d: "Ljubljana&apos;s Friday street food market from late March to late October — 50+ stalls on Pogačarjev trg (next to the Central Market) serving everything from Slovenian sausages and truffle pasta to Thai street food and Argentinian empanadas. A plate and a glass of wine costs €10–15. Starts around 10am, peaks at lunchtime and early evening. One of the best food markets in central Europe.",
                  b: "Friday institution",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Langerholz",
                  t: "Farm-to-table · Slovenian · Gosposvetska cesta",
                  d: "A mid-range Ljubljana favourite focused on Slovenian seasonal ingredients — good for venison, mushroom dishes, and regional cheeses. Relaxed atmosphere, reasonable prices (€15–22 for mains), strong wine list of Slovenian producers. Popular with locals for a proper dinner without the tourist markup of the riverside terraces.",
                  b: "Best local pick",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Central Market Stalls",
                  t: "Street food · Riverside market · Morning only",
                  d: "The best cheap eating in Ljubljana is at the Central Market (Plečnik&apos;s colonnaded market along the Ljubljanica). Grab burek (meat or cheese pastry, €2–3), fresh bread, local cheese, and honey. Open Monday–Saturday mornings until about 2pm. The best breakfast in Ljubljana costs under €5.",
                  b: "Best budget",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  n: "Gostilna Šestica",
                  t: "Traditional Slovenian · Since 1776 · Štefanova ulica",
                  d: "One of the oldest restaurants in Ljubljana — in operation since 1776. Traditional Slovenian dishes including idrijski žlikrofi (potato dumplings with meat filling, the only Slovenian dish with DOC protected status), venison goulash, and potica (walnut roll dessert). €20–30 for a full meal. Lunch is better value than dinner.",
                  b: "Most historic",
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
            destination="Ljubljana Slovenia"
            hotels={[
              {
                name: "Vander Urbani Resort",
                type: "5-star design hotel · Riverside Old Town",
                price: "From €180/night",
                rating: "5",
                badge: "Most stylish",
                url: "https://www.booking.com/hotel/si/vander-urbani-resort.html?aid=2820480",
              },
              {
                name: "Grand Hotel Union",
                type: "4-star Art Nouveau landmark · Congress Square",
                price: "From €120/night",
                rating: "4",
                badge: "Historic",
                url: "https://www.booking.com/hotel/si/grand-union.html?aid=2820480",
              },
              {
                name: "Hostel Celica",
                type: "Design hostel · Former prison · Metelkova",
                price: "From €28/night (dorm)",
                rating: "4",
                badge: "Most unique",
                url: "https://www.booking.com/hotel/si/hostel-celica.html?aid=2820480",
              },
              {
                name: "Boutique Hotel Galleria",
                type: "3-star boutique · Old Town, Gornji trg",
                price: "From €80/night",
                rating: "3",
                badge: "Best value",
                url: "https://www.booking.com/hotel/si/boutique-galleria.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Ljubljana Old Town Walking Tour",
                duration: "2 hrs",
                price: "From €15/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=ljubljana+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Lake Bled Day Trip from Ljubljana",
                duration: "Full day",
                price: "From €45/person",
                badge: "Top rated",
                url: "https://www.getyourguide.com/s/?q=lake+bled+day+trip+ljubljana&partner_id=PSZA5UI",
              },
              {
                name: "Postojna Cave + Predjama Castle Tour",
                duration: "Full day",
                price: "From €65/person",
                badge: "Popular",
                url: "https://www.getyourguide.com/s/?q=postojna+cave+predjama+castle+day+trip&partner_id=PSZA5UI",
              },
              {
                name: "Ljubljana Bike Tour",
                duration: "2.5 hrs",
                price: "From €25/person",
                url: "https://www.getyourguide.com/s/?q=ljubljana+bike+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Ljubljana</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🐉",
                  title: "The dragon is everywhere — learn why",
                  desc: "According to legend, Jason and the Argonauts camped on the site of Ljubljana after stealing the Golden Fleece, and Jason killed a dragon in the marsh that became the city. Dragons appear on Ljubljana&apos;s coat of arms, on the Dragon Bridge (1901), on dozens of buildings, and on every piece of merchandise in the city. Locals are genuinely proud of their dragon — calling it a &apos;lizard&apos; or a &apos;crocodile&apos; is not recommended.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🏔️",
                  title: "A rental car unlocks all of Slovenia",
                  desc: "Ljubljana makes an excellent base for exploring the whole country. Renting a car for 2 days (€30–50/day) gives you access to Lake Bled, Vintgar Gorge, Bohinj, Postojna, Predjama, the Karst wine region, and the Soča Valley — all within 1–2 hours. Slovenia&apos;s roads are excellent. Most travellers wish they&apos;d rented a car for the whole trip.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🍷",
                  title: "Try Slovenian orange wine and Teran",
                  desc: "Slovenia is one of the world&apos;s original orange wine regions — white wines fermented with skin contact, producing amber-coloured, complex, tannic wines. The Brda region and Karst produce outstanding bottles (€15–25 in restaurants). Teran is the local red from the Karst — tart and mineral. Pair both with Karst prosciutto and aged cheese. This is genuinely one of Europe&apos;s most interesting wine regions.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚲",
                  title: "Rent a bike — Ljubljana is flat",
                  desc: "Ljubljana has an excellent bike-sharing system (Bicike(LJ) — €1/day subscription, first hour free) and the city is almost entirely flat. Cycle from the old town to Tivoli Park, along the Ljubljanica, through Krakovo, and to the Botanical Garden in under 30 minutes. The riverside cycling paths are excellent. Biking is how locals actually get around.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "📅",
                  title: "Time your visit for a Friday for the Open Kitchen",
                  desc: "Ljubljana&apos;s Open Kitchen (Odprta kuhna) street food market runs Friday afternoons from late March through October — it&apos;s one of the best things in the city and only happens once a week. If you can arrange your trip so Friday falls during your Ljubljana stay (not during the Bled or Postojna day trip), do it. It&apos;s the most fun evening the city offers.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🗺️",
                  title: "Walk up the castle — don&apos;t take the funicular",
                  desc: "The funicular to Ljubljana Castle costs €4 return and takes 90 seconds. The walk up the wooded hill takes 20 minutes and is genuinely beautiful — stone paths through forest with increasingly good views of the old town. The ascent is easy. Walk up, take the funicular down if you&apos;re tired. The walk is one of the best things about the castle experience.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Ljubljana" />

          {/* Combine With */}
          <CombineWith currentSlug="ljubljana-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days do you need in Ljubljana?",
                  a: "2 days is enough to see all of Ljubljana&apos;s old town, castle, Dragon Bridge, and key sights. 3 days is ideal — it gives you one full day for a Lake Bled day trip and another for Postojna Cave and Predjama Castle. With 4–5 days, add the Soča Valley or the Bohinj area for some of Europe&apos;s most spectacular alpine scenery.",
                },
                {
                  q: "Is Ljubljana worth visiting?",
                  a: "Emphatically yes. Ljubljana is one of Europe&apos;s most underrated capitals — compact, pedestrianised, safe, with an excellent food scene, brilliant day trips, and a genuine local culture. It consistently ranks as one of Europe&apos;s most sustainable and liveable cities. Most visitors spend 2 days and wish they&apos;d booked 4.",
                },
                {
                  q: "Is Lake Bled worth visiting from Ljubljana?",
                  a: "Absolutely. Lake Bled is 55 minutes from Ljubljana by car or 1.5 hours by bus. The combination of the emerald lake, the island church, the clifftop castle, and the Karavanke mountains behind makes it one of the most visually stunning places in Europe. Visit early morning to avoid crowds, combine with Vintgar Gorge, and eat the Bled cream cake (kremšnita).",
                },
                {
                  q: "Is Ljubljana expensive?",
                  a: "Slovenia uses the euro and prices are similar to southern Germany or Austria — significantly more expensive than Zagreb or Budapest, but cheaper than Zurich, Paris, or Amsterdam. A hostel dorm costs €18–28, a mid-range hotel €60–90, a café coffee €2.50–3.50, and a sit-down restaurant meal €15–25. Budget €50/day for a comfortable backpacker trip or €110/day for mid-range comfort.",
                },
                {
                  q: "What is Ljubljana known for?",
                  a: "Ljubljana is known for: its pedestrianised baroque old town; the Dragon Bridge and the dragon as city symbol; Jože Plečnik&apos;s modernist-classical architecture throughout the city centre; the Ljubljanica River café culture; being named European Green Capital 2016; proximity to Lake Bled; and a food scene mixing Austro-Hungarian, Italian, and Balkan influences.",
                },
                {
                  q: "How do I get from Vienna to Ljubljana?",
                  a: "The train from Wien Hauptbahnhof to Ljubljana takes approximately 6 hours and costs €20–40 depending on how far in advance you book. Direct Nightjet overnight trains also run on this route. The journey passes through Graz and crosses the Austrian-Slovenian border through scenic mountain country. The alternative is a flight into Ljubljana Airport (LJU), though direct flights from Vienna are limited — most connections go via other hubs.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Ljubljana trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/lake-bled-2-days", label: "Lake Bled Guide", icon: "🏔️" },
                { href: "/blog/vienna-3-days", label: "Vienna 3 Days", icon: "🎭" },
                { href: "/blog/zagreb-2-days", label: "Zagreb 2 Days", icon: "🏙️" },
                { href: "/blog/venice-3-days", label: "Venice 3 Days", icon: "🚤" },
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
          <RelatedGuides currentSlug="ljubljana-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Central Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Vienna in 3 Days — Imperial &amp; Modern", href: "/blog/vienna-3-days" },
                { label: "Zagreb 2 Days — Croatia&apos;s Capital", href: "/blog/zagreb-2-days" },
                { label: "Venice 3 Days — Canals &amp; Cicchetti", href: "/blog/venice-3-days" },
                { label: "Krakow 3 Days — History &amp; Old Town", href: "/blog/krakow-3-days" },
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
