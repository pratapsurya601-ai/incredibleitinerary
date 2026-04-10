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
const BANFF_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Banff Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "5-Day Itinerary" },
  { id: "landmarks",  emoji: "🏔️", label: "Landmark & Nature Guide" },
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
          href: `mailto:?subject=Banff 5-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Banff in 5 Days — Moraine Lake, Lake Louise, Icefields Parkway &url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/banff-5-days"
        imageUrl="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80"
        description="Banff in 5 Days: Moraine Lake sunrise, Lake Louise, Icefields Parkway, Athabasca Glacier, Johnston Canyon — complete guide with real Canadian dollar costs."
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
export default function BanffClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BANFF_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Banff" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="banff national park canada lake louise turquoise mountains rocky"
            fallback="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80"
            alt="Banff National Park Lake Louise turquoise water with Rocky Mountain reflections"
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
              <span className="text-white/70">Banff 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-teal-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Canada&apos;s First National Park
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">15 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Banff in 5 Days:
                <em className="italic text-teal-300"> Moraine Lake, Icefields Parkway &amp; the Canadian Rockies</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Lake Louise at leisure, Moraine Lake at sunrise, the Icefields Parkway in full, Johnston Canyon, elk at dusk — the complete 5-day guide with real C$ costs.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="15 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🏔️ Alberta, Canada</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From C$80/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-teal-500 pl-6 mb-10 bg-teal-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Banff at 5:30am — the first shuttle to Moraine Lake pulling away in darkness, arriving to an electric-blue lake turning gold as the sun clears the Valley of Ten Peaks, not another voice anywhere — is one of those rare travel moments that matches every photograph you&apos;ve seen and then surpasses them.
            </p>
          </blockquote>

          {/* ── WHAT BANFF ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Banff Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Banff is Canada&apos;s first national park — established in 1885 after railway workers discovered the Cave and Basin hot springs and the Canadian Pacific Railway realised the commercial potential of the mountains. What started as a 26-square-kilometre hot springs reserve is now 6,641 square kilometres of UNESCO World Heritage–listed Rocky Mountain wilderness.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The town of Banff sits at 1,383m elevation on the floor of the Bow Valley, surrounded by peaks that rise to over 3,000m. The Bow River runs through it. Lake Louise — 57km north up the valley — is the most photographed lake in North America. Moraine Lake, 14km further, is the one on the old Canadian twenty-dollar bill. The Icefields Parkway connects Banff to Jasper along a 230km corridor of glaciers, turquoise lakes, and active wildlife that National Geographic once called &quot;the world&apos;s most spectacular highway.&quot;
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Five days lets you do Banff properly: town orientation on Day 1, Moraine Lake and Lake Louise on Day 2, Icefields Parkway in full on Day 3, Johnston Canyon and Vermilion Lakes wildlife on Day 4, and Ha Ling Peak in Canmore before the Calgary flight on Day 5. That&apos;s the structure this guide follows.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Fly into" value="YYC Calgary" />
              <StatCard icon="🌡️" label="Best Season" value="Jun–Sep / Dec–Mar" />
              <StatCard icon="🏔️" label="Park Size" value="6,641 km²" />
              <StatCard icon="💰" label="Budget From" value="C$80/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Banff</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Jun–Sep",
                  i: "☀️",
                  t: "Summer — Hiking & Lake Colour",
                  d: "The lakes reach maximum colour (electric blue-green from glacial flour) by mid-June. All trails are accessible from July. Moraine Lake shuttles and Lake Louise crowds peak in July–August. September is arguably the best month: larches turn gold, crowds drop 40%, elk enter rut. Book shuttles by January for July–August.",
                  b: "Peak season",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Dec–Mar",
                  i: "⛷️",
                  t: "Winter — World-Class Skiing",
                  d: "Banff Sunshine Village, Lake Louise Ski Resort, and Mt Norquay offer exceptional skiing December through April. The town is atmospheric under snow, hotel rates drop by 30–50% vs summer, and Lake Louise partially freezes for skating. Icefields Parkway is driveable with winter tyres. Wildlife is still active.",
                  b: "Best value",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Apr–May",
                  i: "🌸",
                  t: "Spring Shoulder — Quieter & Cheaper",
                  d: "Snow lingers on high trails until late May. Moraine Lake road is closed until early June. But wildflowers appear in the valley from late April, waterfalls are at maximum volume from snowmelt, and the park is dramatically less crowded than summer. Wildlife very active: bears emerge from dens in April.",
                  b: "Wildlife window",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Oct–Nov",
                  i: "🍂",
                  t: "Autumn Shoulder — Larch Season",
                  d: "Early October is larch season: the subalpine larches around Larch Valley (above Moraine Lake) turn brilliant gold. One of the most spectacular autumn displays in North America. The Moraine Lake road closes mid-October. After mid-October: quietest period of the year, cheapest hotels, ski season not yet open.",
                  b: "Larch season",
                  c: "bg-amber-50 border-amber-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Banff</h2>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-teal-800 font-light">
                <strong className="font-medium">Key detail:</strong> Banff has no airport. All international arrivals fly into <strong className="font-medium">Calgary International Airport (YYC)</strong>, 128km east. The drive is 1.5 hours on the Trans-Canada Highway. The Banff Airporter shuttle runs door-to-door from YYC terminal to Banff hotels.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚌",
                  t: "Banff Airporter Shuttle (recommended)",
                  d: "YYC → Banff: 1.5 hrs, CAD 74–82 one-way per person. Runs multiple departures daily from the airport. Book online at banffairporter.com. Door-to-door to Banff hotels. The most convenient option for those without a rental car. Return trip same price.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚗",
                  t: "Rental Car from Calgary YYC",
                  d: "Drive yourself on the Trans-Canada Highway (Highway 1), 1.5 hrs. All major rental companies at YYC. A car gives flexibility for Icefields Parkway, Johnston Canyon, and Canmore. Note: a Parks Canada pass (CAD 11.70/person/day or CAD 72.25 annual) is required at the park gate. In winter, winter tyres are mandatory.",
                  b: "Most flexible",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Brewster Express / Pursuit Bus",
                  d: "Scheduled coach service from YYC to Banff (CAD 35–55 one-way). Less frequent than the Airporter but cheaper. Also serves Lake Louise. Good option if arriving midday — check timetables at banffjasper.com/brewster.",
                  b: "Budget option",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  i: "🇮🇳",
                  t: "From India — Visa & Flight",
                  d: "Indian passport holders require a full Canadian Temporary Resident Visa (TRV) — not an eTA. Apply on the IRCC portal (canada.ca), fee CAD 100 + CAD 85 biometrics. Processing: 4–16 weeks — apply at least 3 months ahead. Direct flights: Air Canada and Air India fly Delhi–Calgary YYC non-stop (10–11 hrs). Connecting via London, Amsterdam, or Toronto is also common.",
                  b: "Plan ahead",
                  c: "bg-rose-50 border-rose-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Banff Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. Prices shown in Canadian dollars (CAD / C$) with approximate USD equivalents where helpful. The itinerary is paced for a first visit — book the Moraine Lake shuttle before anything else.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Banff Town · Sulphur Mountain Gondola · Upper Hot Springs · Bow Falls"
                cost="C$120–190 (≈ USD 88–140) including shuttle from Calgary"
                items={[
                  "Arrive from Calgary YYC (1.5 hrs by Brewster Express shuttle, CAD 35–55 one-way, or Banff Airporter, CAD 74–82). Check into HI Banff Alpine Centre hostel (CAD 35–60/dorm, CAD 120–160 private) — book months ahead for summer.",
                  "2:00pm — Sulphur Mountain Gondola (CAD 65 / ≈ USD 48 return, 8-minute ride to 2,281m). The 360° panorama from the summit — Bow Valley below, Banff townsite, the Rocky Mountain range stretching to the horizon — is your orientation to the whole landscape. The boardwalk connects to Sanson&apos;s Peak Meteorological Station: a short extra walk with better views than the main gondola terminal.",
                  "4:30pm — Banff Upper Hot Springs (CAD 12 / ≈ USD 9, 10-minute walk from gondola base). The thermal pool at 37–40°C has a direct view of Mount Rundle. Bring a towel (CAD 2 rental). Avoid peak weekend evenings.",
                  "6:30pm — Bow Falls (free). A 10-minute walk from town where the Bow River narrows through a canyon — the glacially-fed water colour is extraordinary. The confluence of the Spray and Bow Rivers is below the Fairmont Banff Springs.",
                  "8:00pm — Fairmont Banff Springs Hotel exterior (free). A Scottish Baronial castle in the Rocky Mountains, built 1888, Canada&apos;s most photographed building. Walk around at dusk when it lights up. Dinner on Banff Avenue: Wild Flour Bakery (CAD 12–18) or Tooloulou&apos;s for Cajun food (CAD 18–28).",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Moraine Lake Sunrise · Lake Louise · Plain of Six Glaciers Hike"
                cost="C$80–160 (≈ USD 59–118) — shuttles + park pass + food"
                items={[
                  "CRITICAL: The Moraine Lake Parks Canada shuttle (CAD 16 / ≈ USD 12 return) must be booked in advance at reservation.pc.gc.ca — fills by February for July–August. Private vehicles are banned from the Moraine Lake road June–October. Without a shuttle booking you cannot go. This is not an overstatement.",
                  "5:00am — First shuttle to Moraine Lake departs 5:30am from Lake Louise Village. Arrive at the lake by 5:50am. Walk the Rockpile Trail (20 minutes, free with park pass) to the famous overlook. The lake turns electric blue when sun clears the Valley of Ten Peaks — approximately 6:00–6:30am. The view on the old Canadian twenty-dollar bill. No photograph does it justice.",
                  "9:00am — Return shuttle to Lake Louise Village. Walk 20 minutes to Lake Louise itself. The glacier-fed lake and Chateau Lake Louise in the background are instantly recognisable — but the colour shifts continuously from green to jade to turquoise as clouds cross the sky.",
                  "10:30am — Plain of Six Glaciers hike (14km return, 5–6 hours, free with park pass). Trail follows the Lake Louise shoreline then climbs to the historic Plain of Six Glaciers teahouse (open seasonally, CAD 15–25 for lunch). The six glaciers visible from the teahouse are retreating measurably year by year.",
                  "5:30pm — Return to Banff town. Dinner at The Grizzly House (Banff Avenue institution since 1967, fondue speciality, CAD 35–60 / ≈ USD 26–44 per person) or supermarket self-catering at Safeway on Banff Avenue.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Icefields Parkway · Bow Lake · Peyto Lake · Athabasca Glacier · Athabasca Falls"
                cost="C$100–160 (≈ USD 73–118) — fuel/transport + optional Glacier Adventure"
                items={[
                  "The Icefields Parkway (Highway 93 North) is 230km from Banff to Jasper — consistently ranked among the most beautiful roads on earth. The drive is free with your park pass. Stop at everything; allow a full day.",
                  "8:00am — Depart Banff. First stop: Bow Lake (95km north, 1 hour). The source of the Bow River, directly beneath the Wapta Icefield. Num-Ti-Jah Lodge at the shore is a 1920s log building — no entry fee to walk the bank. The turquoise lake colour against the icefield above is one of the parkway&apos;s finest compositions.",
                  "10:00am — Peyto Lake viewpoint (125km, 15km past Bow Lake). Park and walk 20 minutes uphill. The lake is shaped like a teardrop and the colour is electric blue from suspended glacial flour. Tour buses typically arrive at 10:30am — reach the viewpoint by 10:00am to have it to yourself.",
                  "12:00pm — Columbia Icefield Discovery Centre (168km). The Athabasca Glacier extends to within 1km of the highway. Walk the free interpretive trail to the glacier toe. The Glacier Adventure snow bus (CAD 52 / ≈ USD 38) takes you onto the icefield in a specially modified vehicle — standing on a glacier is worth the price.",
                  "2:30pm — Athabasca Falls (30km south of Jasper). A wide, powerful waterfall cutting through a narrow basalt canyon. The spray at the main overlook in high-water season (June–July) is impressive. Free with park pass.",
                  "5:00pm — Return to Banff (or overnight in Jasper if adjusting the itinerary). Dinner at the Elkhorn Dining Room or Bear Street Tavern (wood-fired pizza, CAD 20–35).",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Johnston Canyon · Ink Pots · Vermilion Lakes & Wildlife at Dusk"
                cost="C$60–110 (≈ USD 44–81) — free hiking, food, park pass"
                items={[
                  "8:00am — Johnston Canyon (26km west of Banff). The trail follows a catwalk bolted to canyon walls above a turquoise river. Lower Falls: 2.6km return, 45 minutes, accessible and spectacular. Upper Falls: 4.8km return, 2 hours, more dramatic. The canyon can be icy in early morning in spring — trail spikes available for rent at the trailhead (CAD 5). Free with park pass.",
                  "11:00am — Ink Pots: continue 3km past the Upper Falls to circular cold-water springs bubbling up through the meadow floor in eerie concentric rings. Very few visitors make it this far — you may have the meadow to yourself.",
                  "1:30pm — Picnic lunch in the Johnston Canyon car park area. Bring food from Banff — there is no food service at the canyon.",
                  "3:00pm — Vermilion Lakes (5-minute drive from Banff townsite). Three interconnected lakes in a wetland on the valley floor. The best place in the Banff area for wildlife at dusk: elk are common (keep 30m distance), beavers active at sunset, great blue herons stalking the shallows. The reflection of Mount Rundle in still water at golden hour is the most photographed scene in Banff after Lake Louise.",
                  "6:30pm — Banff Avenue dinner. Saltlik steakhouse (CAD 45–75 / ≈ USD 33–55 per person) or Bear Street Tavern for wood-fired pizza (CAD 20–35).",
                  "8:30pm — Two Jack Lake (20 minutes from Banff) for last light. The lake is smaller and quieter than Louise — elk frequently visible on the far shore in summer evenings.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Ha Ling Peak Hike (Canmore) · Farewell Poutine · Calgary Departure"
                cost="C$60–100 (≈ USD 44–73) — food + fuel to Calgary"
                items={[
                  "7:00am — Drive 25 minutes east to Canmore (no national park pass required — Canmore is outside the park boundary). Ha Ling Peak trailhead is 5 minutes from downtown Canmore.",
                  "7:30am — Ha Ling Peak hike (7.2km return, 520m elevation gain, 2.5–3.5 hours). The summit panorama takes in the full Three Sisters peaks, the Bow Valley, and the Canmore Nordic Centre below. The trail is steep but well-maintained. Bring water and layers — summit temperatures can be 10°C colder than the valley.",
                  "11:00am — Descend to Canmore. Lunch at Communitea Café (CAD 15–25 / ≈ USD 11–18, vegetarian-friendly, outdoor seating) or Rocky Mountain Bagel Co. (CAD 10–15).",
                  "1:00pm — Farewell poutine: Quebec-style gravy and cheese curds on fries, CAD 12–18 (≈ USD 9–13) anywhere in Banff or Canmore. This is non-negotiable.",
                  "2:00pm — Drive to Calgary YYC (1.5 hrs). Allow extra time if returning a rental car. Calgary Airport has a direct CTrain rail link to downtown if spending a night in Calgary before flying.",
                  "Optional: The Banff trip pairs naturally with a Calgary stopover — Calgary Stampede runs in July, and the restaurant scene on Stephen Avenue is excellent year-round.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Banff" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK & NATURE GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏔️ Landmark &amp; Nature Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key sites in order of priority. A Parks Canada day pass (CAD 11.70 / ≈ USD 8.60 per person) or Annual Discovery Pass (CAD 72.25 individual / CAD 145.25 group of up to 7) covers all park entry.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Moraine Lake",
                  e: "Park pass required + shuttle CAD 16",
                  d: "The electric-blue lake in the Valley of Ten Peaks — the view on the old Canadian twenty-dollar bill. The Rockpile overlook at sunrise (6:00–6:30am) is the single greatest natural display in Canada. Shuttle must be booked at reservation.pc.gc.ca — fills by February for July.",
                  t: "Must see · Sunrise essential",
                },
                {
                  n: "Lake Louise",
                  e: "Park pass required",
                  d: "Glacier-fed lake with Chateau Lake Louise and Victoria Glacier as a backdrop. The colour shifts continuously from green to turquoise. Plain of Six Glaciers hike (14km return) is the best way to see the full lake. Arrive early — peak crowds by 10am.",
                  t: "Must see · Full day",
                },
                {
                  n: "Icefields Parkway (Highway 93 North)",
                  e: "Park pass required",
                  d: "230km corridor from Banff to Jasper along a chain of glaciers, icefields, and turquoise lakes. Allow a full day. The Parkway has 30+ designated pullouts — Bow Lake, Peyto Lake, Columbia Icefield, and Athabasca Falls are the essential stops.",
                  t: "Full day · Drive + stops",
                },
                {
                  n: "Athabasca Glacier",
                  e: "Park pass + Glacier Adventure CAD 52",
                  d: "Part of the Columbia Icefield. Walk the free interpretive trail to the glacier toe, or take the Glacier Adventure snow bus onto the icefield (CAD 52 / ≈ USD 38). The glacier has retreated 1.5km since 1890 — interpretive signs mark the historical recession points along the trail.",
                  t: "2–3 hrs",
                },
                {
                  n: "Johnston Canyon",
                  e: "Park pass required",
                  d: "A canyon trail bolted to the cliff walls above a turquoise river. Lower Falls (2.6km return) accessible and dramatic. Upper Falls (4.8km return) more impressive. Continue to the Ink Pots (8km return) for cold-water springs in an alpine meadow — the least-visited highlight on the Banff side.",
                  t: "Half day · Underrated",
                },
                {
                  n: "Sulphur Mountain Gondola",
                  e: "CAD 65 / ≈ USD 48",
                  d: "8-minute gondola to 2,281m for a 360° panorama of the Bow Valley and Rocky Mountain range. The boardwalk to Sanson&apos;s Peak Meteorological Station (free with gondola) is less crowded than the main terminal and has superior views. Best in the late afternoon light.",
                  t: "2 hrs",
                },
                {
                  n: "Vermilion Lakes",
                  e: "Free (outside park gate, no pass needed)",
                  d: "Three interconnected wetland lakes 5 minutes from Banff townsite. The best wildlife watching location in the Banff area — elk, beaver, great blue heron, and occasional bear. Mount Rundle reflected in still water at sunset is the most photographed scene in Banff after Lake Louise. Cycle the flat road at dusk.",
                  t: "Dusk essential · Free",
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
            title="Banff — Lakes, Glaciers &amp; the Rocky Mountains"
            subtitle="Canada&apos;s most spectacular national park in five scenes."
            spots={[
              {
                name: "Moraine Lake Valley of Ten Peaks",
                query: "moraine lake valley ten peaks banff alberta canada turquoise",
                desc: "Moraine Lake at sunrise — electric blue water surrounded by ten jagged Rocky Mountain peaks.",
              },
              {
                name: "Lake Louise Chateau",
                query: "lake louise chateau fairmont victoria glacier alberta canada",
                desc: "Lake Louise and Chateau Lake Louise with Victoria Glacier — the most recognisable lake in North America.",
              },
              {
                name: "Icefields Parkway Peyto Lake",
                query: "peyto lake icefields parkway banff alberta turquoise teardrop",
                desc: "Peyto Lake from the viewpoint — a teardrop of electric blue glacial water on the Icefields Parkway.",
              },
              {
                name: "Athabasca Glacier Columbia Icefield",
                query: "athabasca glacier columbia icefield banff alberta canada snow",
                desc: "The Athabasca Glacier tongue extending from the Columbia Icefield — one of the most accessible glaciers on earth.",
              },
              {
                name: "Fairmont Banff Springs Castle",
                query: "fairmont banff springs hotel castle rocky mountains alberta sunset",
                desc: "The Fairmont Banff Springs — a Scottish Baronial castle in the Rocky Mountains, Canada&apos;s most photographed building.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Banff is not cheap — it&apos;s one of the most expensive national park destinations in North America. The park pass, accommodation, and shuttle bookings are the largest costs. Budget carefully around the Moraine Lake shuttle (book early, not expensive) and the Parks Canada pass (annual pass pays for itself quickly).
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget (C$)</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range (C$)</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">Luxury (C$)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["✈️ Calgary airport transfer", "C$35–55", "C$74–82", "C$300–450"],
                    ["🏨 Accommodation (5 nights)", "C$175–300", "C$900–1,600", "C$2,500–7,500"],
                    ["🎫 Parks Canada Annual Pass", "C$72", "C$72", "C$72"],
                    ["🚌 Moraine Lake shuttle", "C$16", "C$16", "C$300–500 (private)"],
                    ["🏔️ Gondola + Hot Springs", "C$77", "C$77", "included"],
                    ["🧊 Glacier Adventure (opt.)", "C$52", "C$52–87", "C$200–300"],
                    ["🍽 Food (5 days)", "C$125–225", "C$300–500", "C$750–2,000"],
                    ["🗺 Activities + guides", "C$0–80", "C$150–400", "C$500–2,000"],
                    ["TOTAL (per person)", "C$500–900", "C$1,600–2,800", "C$4,500–12,500"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (C$80–140/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">HI Banff hostel, supermarket meals from Safeway, free hiking on all trails, optional gondola. The park pass is the biggest fixed cost — the Annual Discovery Pass pays for itself on day 7 if visiting other parks.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range (C$300–560/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Banff Park Lodge or Moose Hotel, dining at Bison Restaurant or Bow Valley Grill, gondola + guided Icefields Parkway tour. The sweet spot for first-timers wanting comfort without Fairmont prices.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">💎 Luxury (C$900+/day)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Fairmont Banff Springs or Rimrock Resort Hotel, private helicopter flightseeing, helicopter to Moraine Lake, guided via ferrata, tasting menus at Eden Restaurant. Banff at this level is genuinely world-class.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Banff</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              There are three main accommodation clusters: Banff townsite (most amenities, best for dining and walking), Lake Louise Village (closest to the lake, 57km from Banff), and Canmore (14km outside the park, better value). Fairmont Banff Springs is in a class of its own.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Fairmont Banff Springs",
                  type: "Iconic luxury castle · Banff townsite",
                  price: "From C$500/night (≈ USD 368)",
                  badge: "Most iconic",
                  desc: "The Scottish Baronial castle on the hill above Banff — Canada&apos;s most famous hotel. Built by the Canadian Pacific Railway in 1888, now a National Historic Site. The Bow Valley view rooms are what you&apos;re paying for. Book 6+ months ahead for summer. The exterior and lobby are free to visit whether staying or not.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Rimrock Resort Hotel",
                  type: "Clifftop luxury · Sulphur Mountain",
                  price: "From C$350/night (≈ USD 258)",
                  badge: "Best views",
                  desc: "Perched on the clifftop above Banff on Sulphur Mountain Road, with panoramic Bow Valley views from most rooms. Eden Restaurant (tasting menu) is the finest dining in Banff. Quieter than the Fairmont — closer to the gondola base and Upper Hot Springs.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Moose Hotel & Suites",
                  type: "Boutique mid-range · Banff townsite",
                  price: "From C$200/night (≈ USD 147)",
                  badge: "Best mid-range",
                  desc: "Rooftop hot pools overlooking Cascade Mountain are the headline feature — a genuinely excellent addition to the room rate. Modern rooms, central Banff Avenue location. Book early; fills quickly in summer.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "HI Banff Alpine Centre",
                  type: "Hostel · Banff townsite",
                  price: "C$35–60/dorm, C$120–160/private",
                  badge: "Best budget",
                  desc: "The best hostel in Banff — clean, well-run, with a restaurant and social areas. A 15-minute walk from Banff Avenue. Dorm beds book out months in advance for summer; private rooms are genuinely good value given Banff hotel prices.",
                  color: "border-green-200 bg-green-50",
                },
                {
                  name: "Canmore Hotels (budget-friendly base)",
                  type: "Various options · 14km outside park",
                  price: "From C$90/night (≈ USD 66)",
                  badge: "Best value overall",
                  desc: "Canmore is 14km outside Banff National Park — a short drive with no park pass required just to sleep there. Hotel prices are 30–50% lower than Banff. Several mid-range hotels and B&Bs with mountain views. A car is required if basing yourself here.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Banff</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Banff Avenue has the main concentration of restaurants. Budget travellers can significantly cut costs by buying groceries from Safeway on Banff Avenue or stocking up in Canmore (cheaper than inside the park) for self-catering.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Banff Brewing Co.",
                  t: "Brewpub · Banff Avenue",
                  d: "The most lively spot on Banff Avenue — a brewpub with outstanding Alberta craft beer (the Rocky Mountain Lager is the local standard) and a solid pub menu. Bison burgers (CAD 22–28), elk nachos, and daily specials. The best people-watching in Banff. CAD 20–35 per person. No reservation needed.",
                  b: "Best atmosphere",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Post Hotel Dining Room (Lake Louise)",
                  t: "Fine dining · Lake Louise Village",
                  d: "The Post Hotel is a small, award-winning property in Lake Louise Village with one of Canada&apos;s most respected wine cellars (35,000 bottles). The dining room serves Alberta prime beef, Pacific seafood, and Quebec cheese. CAD 80–130 per person. Worth the trip from Banff if you&apos;re already at Lake Louise — book well ahead.",
                  b: "Best fine dining",
                  c: "bg-rose-50 border-rose-200",
                },
                {
                  n: "The Bison Restaurant",
                  t: "Contemporary Canadian · Bear Street",
                  d: "Alberta bison, locally-foraged mushrooms and herbs, and an excellent Canadian VQA wine list. Bear Street is Banff&apos;s quieter restaurant street — less tourist-facing than the Avenue. CAD 45–70 per person. The Alberta bison short rib is the dish to order.",
                  b: "Best local flavours",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Grocery Run from Canmore",
                  t: "Self-catering · 14km from Banff",
                  d: "Canmore has a full Safeway and several independent grocers at prices noticeably lower than inside the park. For budget travellers doing 5 days, stocking up on breakfast and lunch items in Canmore on arrival saves C$20–35/day. Most hostel and mid-range hotel rooms have basic kitchenettes or communal kitchen access.",
                  b: "Budget essential",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Communitea Café (Canmore)",
                  t: "Café-restaurant · Canmore",
                  d: "The best-value sit-down meal near the Banff area. Vegetarian-friendly menu, generous portions, and outdoor seating with Three Sisters views. Ideal for the Day 5 post-hike lunch. CAD 15–25 per person. A Canmore institution.",
                  b: "Best Canmore",
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
            destination="Banff National Park"
            hotels={[
              {
                name: "Fairmont Banff Springs",
                type: "Iconic castle hotel · National Historic Site",
                price: "From C$500/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/ca/fairmont-banff-springs.html?aid=2820480",
              },
              {
                name: "Rimrock Resort Hotel",
                type: "Clifftop luxury · Panoramic views",
                price: "From C$350/night",
                rating: "5",
                badge: "Best views",
                url: "https://www.booking.com/hotel/ca/rimrock-resort-hotel-banff.html?aid=2820480",
              },
              {
                name: "Moose Hotel & Suites",
                type: "Boutique mid-range · Rooftop hot pools",
                price: "From C$200/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/ca/moose-hotel-and-suites-banff.html?aid=2820480",
              },
              {
                name: "HI Banff Alpine Centre",
                type: "Hostel · Best budget option in Banff",
                price: "From C$35/dorm",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/ca/hi-banff-alpine-centre.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Banff Gondola Sulphur Mountain",
                duration: "2 hrs",
                price: "From C$65/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=banff+gondola&partner_id=PSZA5UI",
              },
              {
                name: "Icefields Parkway Full Day Tour",
                duration: "10 hrs",
                price: "From C$150/person",
                badge: "Top experience",
                url: "https://www.getyourguide.com/s/?q=icefields+parkway+tour&partner_id=PSZA5UI",
              },
              {
                name: "Banff Wildlife Evening Safari",
                duration: "3 hrs",
                price: "From C$89/person",
                url: "https://www.getyourguide.com/s/?q=banff+wildlife+tour&partner_id=PSZA5UI",
              },
              {
                name: "Mt Norquay Via Ferrata",
                duration: "4 hrs",
                price: "From C$119/person",
                url: "https://www.getyourguide.com/s/?q=banff+via+ferrata&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🚌",
                  title: "Not Booking the Moraine Lake Shuttle in Advance",
                  desc: "The Moraine Lake Parks Canada shuttle fills by February for the July–August peak season. Private vehicles are banned from the Moraine Lake road June–October. Taxis are prohibited. If you arrive without a shuttle booking in July or August, you cannot go — there is no workaround. Set a calendar reminder for the January opening date on reservation.pc.gc.ca.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🎫",
                  title: "Entering the Park Without a Parks Canada Pass",
                  desc: "Banff National Park requires a valid entry pass for all visitors. Day passes are CAD 11.70 per person (≈ USD 8.60). The Annual Discovery Pass (CAD 72.25 individual, CAD 145.25 group of up to 7) covers all national parks in Canada and pays for itself on day 7 of a 5-day Banff trip if you plan to visit Jasper or other parks in the same year.",
                  color: "bg-pink-50 border-pink-200",
                },
                {
                  icon: "🐻",
                  title: "Hiking Without Bear Spray",
                  desc: "Black bears and grizzly bears are both active in Banff National Park. Bear spray (a powerful pepper-based deterrent, effective range 7–10m) is the most effective protection against a charging bear — more effective than firearms. Buy or rent it immediately upon arrival in Banff (CAD 40–55 to buy, CAD 5–10/day to rent). Carry it on your hip, accessible. Make noise on trails.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🚗",
                  title: "Driving the Icefields Parkway Without Stopping",
                  desc: "Many visitors treat the Icefields Parkway as a fast route to Jasper and drive it in 2.5 hours. The Parkway has 30+ designated pullouts, each with a specific feature. Stopping at all of them adds 3–4 hours to the drive and transforms the experience entirely. Allow a full day, not a morning.",
                  color: "bg-yellow-50 border-yellow-200",
                },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} color={m.color} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Banff</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Moraine Lake: Take the First Shuttle (5:30am)",
                  desc: "The lake turns electric blue when sunlight clears the Valley of Ten Peaks — typically 6:00–6:30am. Take the first Parks Canada shuttle (5:30am departure), walk the Rockpile (20 min), and be at the viewpoint before 6am. The 40-minute sunrise transition is the single greatest natural display in Canada. By 8am the lake is crowded; by 9am very crowded.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🏔️",
                  title: "Peyto Lake at 8am Before Tour Buses Arrive",
                  desc: "The Peyto Lake overlook is on every tour bus itinerary. Buses arrive 10:00–11:30am. If you reach the viewpoint by 8:00am you have it to yourself — electric-blue teardrop lake and the full valley below in morning light. The upper viewpoint (15-minute extra walk past the main platform) is almost always empty even at peak hours.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🦌",
                  title: "Vermilion Lakes at Dusk for Wildlife",
                  desc: "Elk and deer walk through Banff townsite regularly in the hour before and after sunset. The Vermilion Lakes road at dusk (free to walk or cycle) is consistently productive — beaver at the dam, great blue heron in the shallows, elk crossing the meadow. Keep 30m from elk — they appear docile but charge without warning. Grizzlies are occasionally sighted near the lakes.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🏰",
                  title: "Fairmont Banff Springs at Alpenglow",
                  desc: "The castle turns from grey stone to warm amber in the 30-minute window before sunset. Stand on the Bow River bridge or the lower terrace for the classic angle with Bow Falls in the foreground. You do not need to be a hotel guest to access the grounds or take photographs. This is free and worth planning your Day 1 evening around.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🎿",
                  title: "Winter Banff Costs 30–50% Less",
                  desc: "Summer (July–August) is peak pricing. Winter (December–March) brings substantially lower hotel rates, no shuttle booking anxiety, and world-class skiing at Sunshine Village, Lake Louise, and Mt Norquay. The town is atmospheric under snow. Lake Louise partially freezes for skating in January–February. The trade-off: Moraine Lake road is closed.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🛒",
                  title: "Stock Up on Groceries Before Entering the Park",
                  desc: "Food inside Banff National Park is significantly more expensive than outside. Canmore (14km east, no park pass required) has a full Safeway at normal prices. If driving from Calgary, stop at a Walmart or Safeway in Canmore before entering the park. Stock breakfast items, trail snacks, and lunch supplies for 2–3 days. Saves C$15–30/day.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Banff" />

          {/* Combine With */}
          <CombineWith currentSlug="banff-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How do I book the Moraine Lake shuttle?",
                  a: "Reservations open on the Parks Canada website (reservation.pc.gc.ca) in January for the following summer season. Set a calendar alert for the exact opening date — popular time slots sell out within hours. The round-trip shuttle costs CAD 16 per person (≈ USD 12) and departs from the Lake Louise Overflow Parking lot or Lake Louise Ski Resort. First departure is 5:30am. Without a reservation, there is no legal way to access Moraine Lake between June and October.",
                },
                {
                  q: "How do I get a Canada visa as an Indian passport holder?",
                  a: "Indian passport holders require a full Canadian Temporary Resident Visa (TRV) — not an eTA. Apply on the IRCC portal at canada.ca. Fee: CAD 100 plus CAD 85 for biometrics. Processing times range from 4 to 16+ weeks — apply at least 3 months before travel. Strong bank statements, an employment letter with stable income, and a clear itinerary significantly improve approval chances. Multi-entry visas valid for 10 years are commonly issued if approved.",
                },
                {
                  q: "When is the best time to visit Banff?",
                  a: "Summer (June–September) for hiking, Moraine Lake, and maximum lake colour from glacial melt. July and August are peak crowds and prices. September is arguably the best month — larches turn gold, crowds drop 40%, and elk are in rut. Winter (December–March) for world-class skiing at Sunshine Village, Lake Louise, and Mt Norquay — rates are 30–50% lower than summer. Avoid the Moraine Lake road closure (mid-October to early June) if that is a priority.",
                },
                {
                  q: "Is bear spray really necessary?",
                  a: "Yes. Black bears and grizzly bears are both present and regularly active in Banff National Park. Bear spray is the single most effective deterrent in a close encounter — statistically more effective than firearms. Buy or rent immediately upon arrival (CAD 40–55 to purchase, CAD 5–10/day to rent from most outdoor gear shops). Carry it in a hip holster, not your pack. Make noise on trails. Parks Canada rangers give excellent free bear safety briefings at the Banff Visitor Centre on Bear Street.",
                },
                {
                  q: "Should I rent a car in Banff?",
                  a: "A rental car is strongly recommended for the Icefields Parkway and Johnston Canyon, and nearly essential for Day 5 if doing Ha Ling Peak in Canmore. Without a car, you rely on expensive shuttle tours for most activities outside Banff townsite. The Banff Airporter handles the airport transfer, and the Parks Canada shuttle covers Moraine Lake — but for everything else, a car is significant freedom. Rent from Calgary YYC; in-park rental options are limited and expensive.",
                },
                {
                  q: "Can I visit both Banff and Jasper in 5 days?",
                  a: "Possible but rushed. Banff–Jasper via the Icefields Parkway is 3.5–4 hours driving (non-stop). In a week, 5 nights in Banff and 2 in Jasper is a tight but viable combination — drive the Parkway on Day 3, spend Day 4 in Jasper (Maligne Lake, Miette Hot Springs), and return to Banff on Day 5. However, if this is your first Canadian Rockies visit, spending the full 5 days in Banff is the better choice — you&apos;ll still only scratch the surface.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Banff trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-banff", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/banff-budget-guide", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/moraine-lake-shuttle-guide", label: "Moraine Lake shuttle", icon: "🚌" },
                { href: "/blog/icefields-parkway-stops", label: "Parkway stops guide", icon: "🏔️" },
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
          <RelatedGuides currentSlug="banff-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More North America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Vancouver in 4 Days — Mountains &amp; Coast", href: "/blog/vancouver-4-days" },
                { label: "Jasper 3 Days — Maligne Lake &amp; Wildlife", href: "/blog/jasper-3-days" },
                { label: "New York in 5 Days — Complete Guide", href: "/blog/new-york-5-days" },
                { label: "Patagonia 7 Days — Torres del Paine", href: "/blog/patagonia-7-days" },
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
