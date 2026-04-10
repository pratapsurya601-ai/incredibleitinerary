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
const SWITZERLAND_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Switzerland Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "5-Day Itinerary" },
  { id: "landmarks",   emoji: "⛰️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Switzerland 5-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Switzerland in 5 Days — Alps, Jungfraujoch, Matterhorn and the complete itinerary&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/switzerland-5-days"
        imageUrl="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200&q=80"
        description="Switzerland in 5 Days: Jungfraujoch, Interlaken, Lucerne, Matterhorn — complete travel guide with Half Fare Card strategy and real CHF costs."
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
export default function SwitzerlandClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={SWITZERLAND_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Switzerland" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="switzerland interlaken alps matterhorn jungfrau train"
            fallback="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1600&q=80"
            alt="Switzerland Alps Jungfrau mountain Interlaken valley panorama"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Switzerland 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Alps &amp; Lakes
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Switzerland in 5 Days:
                <em className="italic text-amber-300"> Jungfrau, Lucerne &amp; the Matterhorn</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Stand on a 3,454-metre glacier, watch the Matterhorn turn pink at dawn, ride the world&apos;s steepest cogwheel railway, and eat CHF&nbsp;8 supermarket meals that rival most European restaurants. The complete guide with real CHF &amp; USD costs, Half Fare Card strategy, and every mistake to avoid.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="16 min" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇨🇭 Switzerland</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From CHF 100/day (~$112)</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Switzerland is expensive — there is no getting around that. But it is also one of the few countries where even budget travellers can stand on a glacier, swim for free in a glacial lake, and eat a CHF&nbsp;8 supermarket meal that is genuinely better than most European restaurant meals. Five days gives you the full sweep on any budget.
            </p>
          </blockquote>

          {/* ── WHAT SWITZERLAND ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Switzerland Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Switzerland is a landlocked Alpine country of 8.8 million people, four official languages (German, French, Italian, Romansh), and some of the most dramatic mountain scenery on the planet. The Swiss rail network is arguably the world&apos;s best — trains run on time to the second, connect every village, and climb to altitudes that would require a helicopter in most countries. The country is not in the EU but is part of the Schengen Area, so European visa rules apply.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The tourism reality: Switzerland is Europe&apos;s most expensive country by a significant margin. A basic restaurant lunch costs CHF 22-35 (~$25-39). A hotel room starts around CHF 120 (~$134). But the Swiss have two secrets that make budget travel viable: supermarkets (Migros and Coop) with restaurant-quality prepared food at a third of restaurant prices, and a rail pass system that can halve your transport costs overnight.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Five days covers Zurich, Lucerne with Mount Pilatus, the Jungfrau region (Interlaken, Grindelwald, Lauterbrunnen), and a choice between Zermatt for the Matterhorn or Bern for the capital experience. The Half Fare Card (CHF 120) pays for itself within the first day and is non-negotiable for any trip longer than 3 days.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airports" value="ZRH / GVA" />
              <StatCard icon="🌡️" label="Best Season" value="Jun-Sep / Dec-Mar" />
              <StatCard icon="⛰️" label="Highest Point" value="Jungfraujoch 3,454m" />
              <StatCard icon="💰" label="Budget From" value="CHF 100/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Switzerland</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Jun-Aug",
                  i: "☀️",
                  t: "Summer — Best for Hiking",
                  d: "15-28°C in valleys, 5-15°C at altitude. All mountain passes, cable cars, and hiking trails are open. The longest days, warmest weather, and the best conditions for Jungfraujoch, the Matterhorn, and Alpine lakes. July-August are peak season with highest prices and busiest trails. June and early September offer the same weather with smaller crowds.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep-Oct",
                  i: "🍂",
                  t: "Autumn — Quieter, Crisp Views",
                  d: "8-20°C with clear, crisp air. September is arguably the best month: clear Alpine views, thinner crowds, autumn colours beginning in the lower valleys. October brings cooler temperatures and some high-altitude closures but the larch forests turn gold and the light is extraordinary. Hotel prices drop 20-30% from summer peak.",
                  b: "Best value + views",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Dec-Mar",
                  i: "⛷️",
                  t: "Winter — Skiing Season",
                  d: "Minus 2 to 7°C in valleys, well below zero at altitude. World-class skiing at Zermatt, Verbier, St. Moritz, and Grindelwald. Christmas markets in Zurich, Bern, and Basel. The Matterhorn with snow is even more dramatic than in summer. Lift passes CHF 80-110/day. Budget CHF 300-500/day all-in for a ski trip.",
                  b: "Skiing & Christmas",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Apr-May",
                  i: "🌸",
                  t: "Spring — Shoulder Season",
                  d: "8-18°C but highly variable. Lower valleys are beautiful with wildflowers. However, many mountain cable cars and high passes are closed for maintenance in April-May. Jungfraujoch runs year-round but weather is less reliable. If visiting in spring, focus on cities and lower-altitude lakes. Prices are the lowest of the year outside ski season.",
                  b: "Cities & lakes only",
                  c: "bg-teal-50 border-teal-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Switzerland</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Switzerland has two main airports — Zurich (ZRH) and Geneva (GVA). Both have direct train connections to the city centre in under 15 minutes. <strong className="font-medium">Indian passport holders need a Schengen visa (apply 6+ weeks ahead in summer).</strong> US/UK/EU passports enter visa-free for 90 days.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Zurich Airport (ZRH)",
                  d: "Switzerland's main international hub. Direct flights from Delhi, Mumbai (Air India, Swiss), London, New York, Dubai, and Singapore. The airport train to Zurich HB (main station) takes 10 minutes and costs CHF 6.80 (~$7.60). From Zurich HB, every major Swiss destination is reachable by train within 3 hours.",
                  b: "Main hub",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Geneva Airport (GVA)",
                  d: "Western Switzerland hub with strong connections to Paris, London, and budget European airlines (easyJet hub). The free train ticket (Tout Geneve) from the airport to Geneva centre is 7 minutes. Better starting point if combining Switzerland with France. Fewer direct long-haul flights than Zurich.",
                  b: "Budget Europe flights",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🇮🇳",
                  t: "From India",
                  d: "Direct flights from Delhi and Mumbai to Zurich on Swiss/Air India (8-9 hours, from Rs 45,000-80,000 return). One-stop options via Dubai (Emirates), Istanbul (Turkish), or Frankfurt (Lufthansa) are often cheaper at Rs 35,000-55,000 return. Book 2-3 months ahead for best prices. Schengen visa required: apply at VFS Global Switzerland with confirmed bookings.",
                  b: "Direct from DEL/BOM",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚂",
                  t: "Swiss Travel Pass & Half Fare Card",
                  d: "The Half Fare Card (CHF 120 / ~$134, valid 1 month) gives 50% off every train, bus, boat, and most mountain railways. It pays for itself within the first day. The Swiss Travel Pass (CHF 244/3 days, CHF 354/6 days) covers unlimited travel but costs more. For 5 days, the Half Fare Card wins on value for most itineraries. Buy at any SBB station or online at sbb.ch.",
                  b: "Essential for savings",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  i: "🚆",
                  t: "SBB Trains",
                  d: "The Swiss Federal Railways (SBB) network connects virtually every town in the country. Trains run on time, are clean, comfortable, and offer some of the most scenic rail journeys in the world. Download the SBB Mobile app for live schedules, platform numbers, and mobile tickets. Second class is perfectly comfortable — first class is a luxury, not a necessity.",
                  b: "World-class rail",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Switzerland Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary covers mid-range spending (CHF 200-350/day, ~$224-392). Each day card is expandable. The route runs Zurich &rarr; Lucerne/Pilatus &rarr; Interlaken/Jungfraujoch &rarr; Grindelwald/Lauterbrunnen &rarr; Bern or Zermatt. All prices in CHF and USD at ~CHF 1 = $1.12.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Zurich — Altstadt, Lake & Uetliberg"
                cost="CHF 60-120 (~$67-134) excl. accommodation"
                items={[
                  "Arrive Zurich. Train from ZRH airport to Zurich HB (10 min, CHF 6.80 / ~$7.60). Drop bags at hotel or locker at the station (CHF 9 / ~$10 for a large locker).",
                  "Morning: Zurich Altstadt (old town, free). Walk the Lindenhof hill for Limmat river views, the medieval guild houses on Munsterbrucke, Grossmunster cathedral (free exterior, CHF 5 / ~$5.60 for the tower), and the Niederdorf cobblestone quarter. Compact and entirely walkable in 2 hours.",
                  "Midday: Lake Zurich swimming (free). The lakeside Strandbader are packed with locals in summer — the water is clean, cold, and remarkably clear for a major city. Lunch from Migros or Coop supermarket (CHF 8-15 / ~$9-17 for a hot meal). Eat on the lakeside benches.",
                  "Afternoon: Uetliberg hill (S10 train from Zurich HB, CHF 4.80 / ~$5.40, 20 min). The 871m summit gives a panoramic view over the city, the lake, and on clear days the entire Alpine chain from Santis to Mont Blanc. Free to hike and explore.",
                  "Evening: Walk through Zurich West — industrial-turned-creative neighbourhood with the Viadukt market arches, street art, and cafes. Dinner at Zeughauskeller in the old arsenal building (rosti or sausages, CHF 18-25 / ~$20-28) or splurge on fondue at a traditional restaurant (CHF 30-45 / ~$34-50).",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Lucerne — Chapel Bridge & Mount Pilatus"
                cost="CHF 90-160 (~$101-179) incl. Pilatus & train"
                items={[
                  "8:30am: Train from Zurich HB to Lucerne (CHF 24 / ~$27 standard, CHF 12 / ~$13 with Half Fare Card, 1 hour). Lucerne station opens directly onto the lake — one of the most scenic station arrivals in Europe.",
                  "Morning: Kapellbrucke (Chapel Bridge, free) — the 14th-century covered wooden footbridge with interior paintings depicting Swiss history. Then the Lion Monument (Lowendenkmal, free) — the dying lion carved into sandstone, one of the most moving monuments in Europe.",
                  "Walk the Lucerne medieval city walls and towers (free) for rooftop and lake views. Lunch on the lakefront from Migros/Coop (CHF 8-12 / ~$9-13) or a Wurst from a street stand (CHF 5-7 / ~$5.60-7.80).",
                  "Afternoon: Mount Pilatus (CHF 72 / ~$81 return by gondola from Kriens, CHF 36 / ~$40 with Half Fare Card). The summit at 2,132m offers extraordinary views over Lake Lucerne and the Alps. The world's steepest cogwheel railway runs from the other side. Alternatively, hike down from the summit (4 hours, saves the descent gondola cost).",
                  "Evening: Return train to Interlaken (1.5 hours, CHF 30 / ~$34, CHF 15 / ~$17 with Half Fare Card). Check in to Interlaken accommodation.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Interlaken & Jungfraujoch — Top of Europe"
                cost="CHF 220-320 (~$246-358) incl. Jungfraujoch"
                items={[
                  "Check weather at jungfrau.ch before committing to Jungfraujoch (CHF 203 / ~$227 return, CHF 160 / ~$179 with Half Fare Card). The summit webcam updates every 30 minutes. If cloudy, do Harder Kulm instead (CHF 22 / ~$25) — often clear when the summit is in cloud, and arguably a better view of the Eiger-Monch-Jungfrau trio at one-tenth the price.",
                  "If clear: 7:30am train from Interlaken Ost to Jungfraujoch (2 hours via Kleine Scheidegg, through the Eiger tunnel). At 3,454m: the Sphinx Observatory, Aletsch Glacier (longest in the Alps at 23km), the Ice Palace, and views to the Black Forest on clear days. Allow 2 hours at the top.",
                  "Lunch at the summit restaurant (CHF 25-35 / ~$28-39) or bring food from Interlaken Migros. Descend via Kleine Scheidegg and walk the 45-minute Eiger Trail along the base of the North Face (free, from Eigergletscher station).",
                  "Alternative if cloudy: Harder Kulm funicular (CHF 22 / ~$25 return, 10 min). The viewpoint at 1,322m sits directly above Interlaken with the Eiger, Monch, and Jungfrau laid out before you. Then explore Interlaken town — the Hoheweg promenade views are free and spectacular.",
                  "Evening: Dinner in Interlaken — Schuh restaurant for Swiss classics (CHF 22-35 / ~$25-39) or cheaper at a hostel restaurant (CHF 12-18 / ~$13-20).",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Grindelwald, Lauterbrunnen & Murren"
                cost="CHF 70-150 (~$78-168) depending on Schilthorn"
                items={[
                  "Morning: Train to Lauterbrunnen (CHF 10 / ~$11 return from Interlaken, CHF 5 / ~$5.60 with Half Fare Card, 20 min). Walk the valley floor — 72 waterfalls cascading from 1,000m cliffs. Staubbach Falls (free, 297m) with a path behind the waterfall. Trummelbach Falls (CHF 12 / ~$13) — the only glacial waterfalls accessible inside a mountain.",
                  "Cable car to Murren (CHF 15 / ~$17 from Grutschalp, included with Swiss Pass). Murren is car-free, perched at 1,638m on a cliff, with the Eiger North Face directly across the valley. Possibly the most beautiful village in Switzerland.",
                  "Lunch in Murren: Hotel Blumental for rosti (CHF 18-25 / ~$20-28) or pack food and eat on the terrace facing the Eiger.",
                  "Optional: Schilthorn and Piz Gloria (CHF 90 / ~$101 return from Murren, CHF 45 / ~$50 with Half Fare Card). The revolving restaurant at 2,970m was the Bond villain's headquarters in On Her Majesty's Secret Service. The Bond World 007 exhibition is free with the cable car ticket. The 360-degree panorama includes the Eiger, Monch, Jungfrau, and Mont Blanc.",
                  "Afternoon: Return to Interlaken or continue toward Bern/Zermatt for Day 5.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Zermatt & the Matterhorn (or Bern)"
                cost="CHF 150-300 (~$168-336) incl. train & Gornergrat"
                items={[
                  "Option A — Zermatt: Train from Interlaken to Zermatt (3 hours via Visp, CHF 100-120 / ~$112-134 return, CHF 50-60 / ~$56-67 with Half Fare Card). Zermatt is car-free — electro-taxis from the station.",
                  "Walk to the Findeln hamlet (1 hour, free) for the classic Matterhorn reflection view. The 4,478m pyramid is visible from everywhere in Zermatt on a clear day. Lunch at Whymper Stube (CHF 30-50 / ~$34-56).",
                  "Gornergrat rack railway (CHF 90 / ~$101 return, CHF 45 / ~$50 with Half Fare Card, 3,089m) for the classic Matterhorn panorama with Monte Rosa and the Gorner Glacier. Return train toward Zurich for departure or overnight in Zermatt.",
                  "Option B — Bern: Train from Interlaken to Bern (50 min, CHF 30 / ~$34, CHF 15 / ~$17 with Half Fare Card). The UNESCO-listed old town, the Aare river swimming (a famous natural lido where the current carries you downstream for free), the Zytglogge clock tower, and the Bear Park. A perfect lower-key final day before flying out of Zurich (Bern to ZRH: 1 hour by train).",
                  "Evening: Final Swiss dinner — fondue or raclette at a traditional restaurant (CHF 35-50 / ~$39-56 per person). The one non-negotiable Swiss dining expense.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Switzerland" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">⛰️ Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important landmarks and viewpoints ranked by priority. All prices are as of early 2026. Half Fare Card discounts apply to most mountain railways and cable cars.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Jungfraujoch (Top of Europe)",
                  e: "CHF 203 return (~$227)",
                  d: "Europe's highest railway station at 3,454m. The Aletsch Glacier, the Sphinx Observatory, and the Ice Palace. Extraordinary on a clear day, a waste of money in cloud. Check the summit webcam at jungfrau.ch before booking. The train journey through the Eiger tunnel is an engineering marvel in itself.",
                  t: "Must see · Clear weather only · Half day",
                },
                {
                  n: "Matterhorn & Gornergrat (Zermatt)",
                  e: "CHF 90 return (~$101)",
                  d: "The most iconic mountain silhouette in the world at 4,478m. The Gornergrat rack railway climbs to 3,089m for the classic panorama with Monte Rosa and the Gorner Glacier. The Findeln hamlet walk (free, 1 hour) gives the best reflection-in-lake photograph.",
                  t: "Must see · Full day from Interlaken",
                },
                {
                  n: "Lauterbrunnen Valley",
                  e: "Free (CHF 10 train from Interlaken)",
                  d: "A glacial valley with 72 waterfalls and 1,000-metre cliffs. The valley floor walk from Lauterbrunnen to Stechelberg is 2 hours and passes Staubbach Falls, Murrenbach Falls, and a dozen unnamed cascades. One of the most beautiful valleys in the world, completely free to walk.",
                  t: "Must see · Free · 2-3 hrs",
                },
                {
                  n: "Mount Pilatus (Lucerne)",
                  e: "CHF 72 return (~$81)",
                  d: "The summit at 2,132m above Lake Lucerne offers panoramic views of the Alps and the lake. Ascend by gondola, descend by the world's steepest cogwheel railway (48% gradient, built 1889). The golden round trip combines both for the full experience.",
                  t: "Must see · Half day",
                },
                {
                  n: "Chapel Bridge (Lucerne)",
                  e: "Free",
                  d: "The 14th-century Kapellbrucke is the most photographed bridge in Switzerland and the oldest covered wooden bridge in Europe. The interior paintings depict Swiss history scenes. Walk it slowly — the interior is genuinely interesting and often missed by visitors who just photograph the exterior.",
                  t: "Must see · Free · 30 min",
                },
                {
                  n: "Harder Kulm (Interlaken)",
                  e: "CHF 22 return (~$25)",
                  d: "The budget alternative to Jungfraujoch. At 1,322m directly above Interlaken, the viewpoint offers a panoramic view of the Eiger-Monch-Jungfrau trio with both lakes below. Many experienced Swiss travellers argue this is a better view than Jungfraujoch itself — at one-tenth the cost.",
                  t: "Recommended · Budget pick · 2 hrs",
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
            title="Switzerland — Alps, Lakes &amp; Railways"
            subtitle="From glacial valleys to the highest railway station in Europe."
            spots={[
              {
                name: "Jungfraujoch Summit",
                query: "jungfraujoch top of europe sphinx observatory snow alps glacier",
                desc: "Europe's highest railway station at 3,454m — the Aletsch Glacier stretches 23km below and on clear days you can see Germany's Black Forest.",
              },
              {
                name: "Matterhorn from Zermatt",
                query: "matterhorn zermatt reflection lake sunrise swiss alps pyramid",
                desc: "The most iconic mountain silhouette in the world at 4,478m, reflected in the alpine lakes at dawn.",
              },
              {
                name: "Lauterbrunnen Valley",
                query: "lauterbrunnen valley waterfall cliff green switzerland staubbach",
                desc: "72 waterfalls cascading from 1,000-metre cliffs — one of the most beautiful glacial valleys in the Alps.",
              },
              {
                name: "Lake Lucerne & Chapel Bridge",
                query: "lucerne chapel bridge kapellbrucke lake mountain tower medieval",
                desc: "The 14th-century covered wooden bridge with the Alps reflected in the lake behind it.",
              },
              {
                name: "Murren Village",
                query: "murren village cliff edge swiss alps eiger north face car free",
                desc: "A car-free village perched on a cliff at 1,638m with the Eiger North Face directly across the valley.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Switzerland is Europe&apos;s most expensive country but budget travel is possible with discipline. The Half Fare Card and supermarket meals are non-negotiable for budget travellers. All prices in Swiss Francs (CHF) and USD at ~CHF 1 = $1.12.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category (5 days)</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">💎 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (5N)", "CHF 175-325 (~$196-364)", "CHF 750-1,400 (~$840-1,568)", "CHF 2,500-8,000 (~$2,800-8,960)"],
                    ["🍽 Food & Drinks", "CHF 100-175 (~$112-196)", "CHF 300-500 (~$336-560)", "CHF 750-1,500 (~$840-1,680)"],
                    ["🚆 Transport (w/ Half Fare)", "CHF 100-200 (~$112-224)", "CHF 200-400 (~$224-448)", "CHF 400-1,500 (~$448-1,680)"],
                    ["🎯 Activities & Mountains", "CHF 125-250 (~$140-280)", "CHF 250-500 (~$280-560)", "CHF 500-2,000 (~$560-2,240)"],
                    ["🎫 Half Fare Card", "CHF 120 (~$134)", "CHF 120 (~$134)", "CHF 120 (~$134)"],
                    ["TOTAL (per person)", "CHF 620-1,070 (~$694-1,198)", "CHF 1,620-2,920 (~$1,814-3,270)", "CHF 4,270-13,120 (~$4,782-14,694)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (CHF 100-190/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostels (CHF 35-65/night), Migros/Coop supermarket meals (CHF 8-15/meal), Half Fare Card for all transport, and free activities like lake swimming, valley walks, and city exploration. One or two paid mountain excursions per trip.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">✨ Mid-Range (CHF 250-450/day)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">3-star hotels (CHF 150-280/night), restaurant dinners on 2-3 evenings with supermarket lunches, Jungfraujoch and Gornergrat excursions, boat cruises, and comfortable train travel. The sweet spot for most visitors.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (CHF 700-2,000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Grand hotels (CHF 500-1,600/night), private guides, helicopter transfers, Michelin-starred dining, and first-class Glacier Express journeys. Swiss luxury is understated, precise, and extraordinarily high quality.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Switzerland</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Base yourself in Interlaken for the Jungfrau region (Days 2-4), with one night in Zurich on arrival and one night in Zermatt if doing the Matterhorn. Hostels are clean and well-run across Switzerland. Hotels are expensive but quality is consistently high.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Zurich — Hotel Greulich",
                  type: "Design hotel · Zurich West",
                  price: "From CHF 180/night (~$202)",
                  badge: "Mid-range pick",
                  desc: "Modern design hotel in the creative Zurich West district with excellent restaurant and courtyard garden. A 10-minute tram ride from the Altstadt and a 15-minute walk from the main station. Clean, quiet, and well-located for exploring both old and new Zurich.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Lucerne — Hotel des Balances",
                  type: "Riverside boutique · Lucerne old town",
                  price: "From CHF 250/night (~$280)",
                  badge: "Best location",
                  desc: "Directly overlooking the Chapel Bridge and the Reuss river in the heart of Lucerne's old town. The river-view rooms are worth the premium. Breakfast terrace with mountain views. Walking distance to everything in Lucerne.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Interlaken — Backpackers Villa Sonnenhof",
                  type: "Hostel · Interlaken",
                  price: "From CHF 38/night (~$43)",
                  badge: "Best budget",
                  desc: "The best-rated hostel in the Jungfrau region with mountain views from the garden, clean dorms and private rooms, a communal kitchen (essential for budget travellers), and a 10-minute walk to Interlaken Ost station. Book ahead in summer — it fills up fast.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Zermatt — Hotel Bahnhof",
                  type: "Budget hotel · Zermatt station",
                  price: "From CHF 85/night (~$95)",
                  badge: "Value Zermatt",
                  desc: "Simple, clean rooms directly at Zermatt station with Matterhorn views from the terrace. Run by the same family for decades. The cheapest honest option in Zermatt — dorm beds also available from CHF 42/night (~$47). The restaurant serves solid Swiss-German food at reasonable prices.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Hostels vs Hotels — General Advice",
                  type: "Budget strategy · All Switzerland",
                  price: "CHF 35-65/night vs CHF 150-300/night",
                  badge: "Budget tip",
                  desc: "Swiss hostels (SJH/HI network) are among the best in Europe: clean, modern, often with mountain views, and always with communal kitchens. A dorm bed averages CHF 35-45 in cities, CHF 40-65 in mountain towns. Private hostel rooms are CHF 80-120. For budget travellers, the kitchen alone saves CHF 30-50/day on food versus restaurants.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Switzerland</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The single most important food rule in Switzerland: Migros and Coop supermarkets are your lifeline. Their prepared food counters serve hot meals (CHF 8-15 / ~$9-17), sushi, sandwiches, and salads at a fraction of restaurant prices — and the quality is genuinely high. Have restaurant dinners on 2-3 evenings and self-cater the rest.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Fondue at a Traditional Restaurant",
                  t: "Swiss classic · Everywhere",
                  d: "The one non-negotiable Swiss dining experience. Melted Gruyere and Vacherin cheese in a communal pot with bread cubes. CHF 25-45 / ~$28-50 per person at most traditional restaurants. In Zurich try Zeughauskeller or Le Dezaley; in Lucerne try Stadtkeller; in Zermatt try Whymper Stube. Winter fondue is an entirely different experience from summer — both are excellent.",
                  b: "Must try",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Raclette",
                  t: "Melted cheese classic · Mountain towns",
                  d: "Half a wheel of cheese melted under a heat source and scraped onto boiled potatoes, pickles, and onions. CHF 22-35 / ~$25-39 per serving. Street raclette stalls in Christmas markets are cheaper (CHF 10-14 / ~$11-16). Raclette at a mountain hut after a hike is one of the best food experiences in Switzerland.",
                  b: "Essential",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Rosti",
                  t: "Swiss-German comfort food · German-speaking Switzerland",
                  d: "Grated potato, pan-fried into a golden crispy cake, topped with cheese, bacon, or a fried egg. The Swiss equivalent of hash browns but elevated to an art form. CHF 15-22 / ~$17-25 at most restaurants. Available everywhere in German-speaking Switzerland — less common in the French-speaking west.",
                  b: "Budget classic",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Migros / Coop Supermarkets",
                  t: "Budget lifeline · Every town",
                  d: "The secret weapon of budget travel in Switzerland. Hot meals from CHF 8-15 / ~$9-17, fresh sushi CHF 8-12 / ~$9-13, sandwiches CHF 5-8 / ~$5.60-9. The quality is genuinely excellent — better than most budget restaurants in neighbouring countries. Every Swiss town has at least one. Open late in cities, earlier in villages.",
                  b: "Budget essential",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  n: "Mountain Hut Dining (Bergrestaurant)",
                  t: "Alpine experience · Mountain trails",
                  d: "Swiss mountain huts serve hot meals, soups, and drinks at altitude. A bowl of Alp-Makkaroni (Alpine macaroni with applesauce — trust the combination) costs CHF 15-22 / ~$17-25. A beer with a Matterhorn view at Gornergrat or a soup at a Pilatus summit hut is a quintessentially Swiss experience that no supermarket can replace.",
                  b: "Unique experience",
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
            destination="Switzerland"
            hotels={[
              {
                name: "Backpackers Villa Sonnenhof",
                type: "Hostel · Interlaken",
                price: "From CHF 38/night (~$43)",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/hotel/ch/backpackers-villa-sonnenhof.html?aid=2820480",
              },
              {
                name: "Hotel Greulich",
                type: "Design Hotel · Zurich",
                price: "From CHF 180/night (~$202)",
                rating: "5",
                badge: "Mid-range pick",
                url: "https://www.booking.com/hotel/ch/greulich.html?aid=2820480",
              },
              {
                name: "Hotel des Balances",
                type: "Boutique Hotel · Lucerne",
                price: "From CHF 250/night (~$280)",
                rating: "5",
                badge: "Best location",
                url: "https://www.booking.com/hotel/ch/des-balances.html?aid=2820480",
              },
              {
                name: "Hotel Bahnhof Zermatt",
                type: "Budget Hotel · Zermatt",
                price: "From CHF 85/night (~$95)",
                rating: "4",
                badge: "Value Zermatt",
                url: "https://www.booking.com/hotel/ch/bahnhof-zermatt.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Jungfraujoch Top of Europe Day Trip",
                duration: "Full day",
                price: "From CHF 203/person (~$227)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=jungfraujoch+top+of+europe&partner_id=PSZA5UI",
              },
              {
                name: "Mount Pilatus Golden Round Trip",
                duration: "Half day",
                price: "From CHF 72/person (~$81)",
                badge: "Scenic",
                url: "https://www.getyourguide.com/s/?q=mount+pilatus+lucerne&partner_id=PSZA5UI",
              },
              {
                name: "Interlaken Paragliding Tandem",
                duration: "2 hours",
                price: "From CHF 180/person (~$202)",
                badge: "Adventure",
                url: "https://www.getyourguide.com/s/?q=interlaken+paragliding&partner_id=PSZA5UI",
              },
              {
                name: "Zermatt Gornergrat Matterhorn Tour",
                duration: "Full day",
                price: "From CHF 90/person (~$101)",
                url: "https://www.getyourguide.com/s/?q=zermatt+gornergrat+matterhorn&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🎫",
                  title: "Not getting the Swiss Half Fare Card",
                  desc: "The Half Fare Card (CHF 120 / ~$134, valid 1 month) gives 50% off virtually every train, bus, boat, and most mountain railways. A single Zurich-Interlaken-Zermatt circuit costs CHF 200+ at full price. With the Half Fare Card, you save CHF 100+ on trains alone, and every mountain excursion is half price. It pays for itself within the first day. Do not visit Switzerland for 5+ days without one.",
                },
                {
                  icon: "☁️",
                  title: "Buying Jungfraujoch tickets without checking weather",
                  desc: "Jungfraujoch costs CHF 203 / ~$227 return. In cloud or fog — which happens frequently, even in summer — you arrive at 3,454m and see nothing but grey mist. Check the summit weather forecast at jungfrau.ch before booking. The summit webcam updates every 30 minutes. If cloudy, visit Harder Kulm instead (CHF 22 / ~$25, often clear when the summit is in cloud).",
                },
                {
                  icon: "🍽️",
                  title: "Eating at restaurants every meal",
                  desc: "Switzerland's single biggest budget drain is restaurant food. A basic restaurant lunch is CHF 22-35 / ~$25-39. Dinner with wine is CHF 45-80 / ~$50-90 per person. Migros and Coop supermarkets have excellent prepared food (hot meals CHF 8-15 / ~$9-17). Have restaurant dinners on 2-3 evenings and self-cater the rest — you will save CHF 50-100 / ~$56-112 per day.",
                },
                {
                  icon: "🚂",
                  title: "Buying individual train tickets at full price",
                  desc: "Swiss trains are expensive at full price. The Half Fare Card (CHF 120) or Swiss Travel Pass (CHF 244/3 days) transforms the economics. Also check SBB Supersaver tickets (available online 60 days ahead, up to 50% off fixed routes) and the SBB Day Pass (CHF 52 / ~$58 on certain dates for unlimited second-class travel nationwide).",
                },
                {
                  icon: "💶",
                  title: "Paying in Euros instead of Swiss Francs",
                  desc: "Many tourist businesses accept Euros but at a poor exchange rate, typically 5-10% worse than the actual rate. Always pay in CHF. Withdraw from Postomat ATMs (Swiss Post offices) which are often fee-free for international cards. Revolut, Wise, and similar travel cards offer near-perfect exchange rates.",
                },
                {
                  icon: "🏔️",
                  title: "Trying to see too many mountain peaks in one trip",
                  desc: "Jungfraujoch, Schilthorn, Pilatus, Titlis, and Gornergrat are all spectacular but doing more than 2-3 in 5 days becomes exhausting and expensive. Pick your top 2 paid excursions and fill the rest with free valley walks and lake swimming. The free experiences in Switzerland are often as memorable as the expensive ones.",
                },
              ].map((m) => (
                <TipCard
                  key={m.title}
                  icon={m.icon}
                  title={m.title}
                  desc={m.desc}
                  color="bg-white border-parchment-2"
                />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Switzerland</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "⛰️",
                  title: "Harder Kulm vs Jungfraujoch",
                  desc: "Jungfraujoch is CHF 203 / ~$227. Harder Kulm is CHF 22 / ~$25. From Harder Kulm at 1,322m, you see the entire Eiger-Monch-Jungfrau chain with Interlaken and both lakes below. Many experienced Swiss travellers say it is a better view than Jungfraujoch itself. Do Harder Kulm on arrival, then decide whether Jungfraujoch is worth the additional CHF 181 / ~$203.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🏊",
                  title: "Free swimming everywhere",
                  desc: "Swimming is deeply embedded in Swiss culture. Every lake and river has free access — Lake Zurich, Lake Lucerne, Lake Thun, the Aare river in Bern (a famous natural lido where the current carries you downstream). The water is clean, cold, and entirely free. Swiss people of all ages swim outdoors from May to September.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🌄",
                  title: "Lauterbrunnen is free and extraordinary",
                  desc: "The Lauterbrunnen Valley — 72 waterfalls, 1,000m cliffs, the sound of rushing water from every direction — is completely free to walk through. The valley floor path from Lauterbrunnen to Stechelberg is 2 hours and costs nothing beyond the train fare to get there (CHF 10 / ~$11 from Interlaken, CHF 5 / ~$5.60 with Half Fare Card).",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "📱",
                  title: "Download the SBB app",
                  desc: "The SBB Mobile app is the best travel companion in Switzerland. Live train schedules, platform numbers, mobile tickets, connection alerts, and delay notifications. Buy the Half Fare Card at the station then link it to the app for discounted mobile tickets. The app also shows the cheapest fare options for every route.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🥾",
                  title: "Free hiking is world-class",
                  desc: "Switzerland has 65,000km of marked hiking trails, all free. The Eiger Trail from Eigergletscher station (45 min), the Lauterbrunnen valley walk (2 hrs), the Five Lakes Trail in Zermatt (2.5 hrs), and the Uetliberg panorama walk in Zurich (1 hr) are all among the best hikes in the Alps and cost nothing.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "💧",
                  title: "Tap water is exceptional",
                  desc: "Swiss tap water is among the cleanest in the world — often sourced from mountain springs. Every public fountain in Switzerland dispenses drinkable water unless explicitly marked otherwise. Carry a reusable bottle and refill everywhere. This alone saves CHF 5-10 / ~$5.60-11 per day versus bottled water.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Switzerland" />

          {/* Combine With */}
          <CombineWith currentSlug="switzerland-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Switzerland affordable on a budget?",
                  a: "Switzerland is Europe's most expensive country and there is no cheap hack that changes this. However, budget travellers can manage on CHF 100-130/day (~$112-146) by sleeping in hostels (CHF 35-65/night), eating from Migros/Coop supermarkets (CHF 8-15/meal), using the Half Fare Card, and choosing free activities (lake swimming, valley walks, city walks) over paid mountain excursions every day.",
                },
                {
                  q: "Is the Swiss Pass worth it for 5 days?",
                  a: "The Swiss Travel Pass (CHF 244/3 days, CHF 305/4 days, CHF 354/6 days) covers all trains, buses, boats, and most mountain railways. The Half Fare Card (CHF 120/month) gives 50% off everything instead. For most 5-day itineraries, the Half Fare Card wins on value unless you are doing multiple mountain excursions every day. Calculate your expected transport costs to compare.",
                },
                {
                  q: "Do Indians need a visa for Switzerland?",
                  a: "Yes. Switzerland is part of the Schengen Area. Indian passport holders require a Schengen short-stay visa (max 90 days within 180 days). Apply at VFS Global Switzerland with confirmed hotel bookings, return flights, travel insurance (minimum EUR 30,000 medical coverage), and bank statements. Processing time is 15-45 days. Apply at least 6 weeks before travel in summer.",
                },
                {
                  q: "When is the best time to see the Matterhorn?",
                  a: "Late June, July, and September are most reliable for clear views. July-August have the best weather statistics but afternoon cloud buildup is common — mornings are typically clear. September offers crisp air, fewer tourists, and early snow on the peak. December-March gives the dramatic winter Matterhorn with ski access.",
                },
                {
                  q: "How much does Jungfraujoch cost?",
                  a: "CHF 203 (~$227) return from Interlaken, or approximately CHF 160 (~$179) with the Swiss Travel Pass or Half Fare Card discount. Check the summit webcam at jungfrau.ch before booking — in cloud or fog you see nothing at 3,454m. Harder Kulm (CHF 22 / ~$25) is the budget alternative with arguably a better view of the Jungfrau trio.",
                },
                {
                  q: "Can I combine Switzerland with other countries?",
                  a: "Easily. Paris is 4 hours by TGV from Geneva. Milan is 3.5 hours from Zurich. Munich is 4 hours. Vienna is 8 hours (overnight train available). The Schengen visa covers all EU/Schengen countries on the same entry. Switzerland pairs naturally with France, Italy, or Austria for a 10-14 day European trip.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Switzerland trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-switzerland", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/switzerland-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-switzerland", label: "How to get there", icon: "✈️" },
                { href: "/blog/switzerland-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="switzerland-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Paris &mdash; 5 Day Guide", href: "/blog/paris-5-days" },
                { label: "Dubrovnik &mdash; 4 Day Guide", href: "/blog/dubrovnik-4-days" },
                { label: "Jordan &mdash; 5 Day Itinerary", href: "/blog/jordan-5-days" },
                { label: "Iceland &mdash; 7 Day Ring Road", href: "/blog/iceland-7-days" },
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
