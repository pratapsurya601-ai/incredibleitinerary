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
const COTSWOLDS_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What the Cotswolds Actually Is" },
  { id: "season",     emoji: "🌸",  label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "🚂",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",  emoji: "🏡",  label: "Landmark Village Guide" },
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
          href: `mailto:?subject=Cotswolds 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Cotswolds in 3 Days — Arlington Row at dawn, cream teas, honey-stone villages&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/cotswolds-3-days"
        imageUrl="https://images.unsplash.com/photo-1509822929464-92b27e59a4e7?w=1200&q=80"
        description="Cotswolds in 3 Days: Arlington Row Bibury at dawn, Chipping Campden, Broadway Tower, Snowshill lavender — complete travel guide with budget breakdown."
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
export default function CotswoldsClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={COTSWOLDS_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Cotswolds" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="cotswolds village england uk stone cottage flowers bibury arlington row"
            fallback="https://images.unsplash.com/photo-1509822929464-92b27e59a4e7?w=1600&q=80"
            alt="Bourton-on-the-Water Cotswolds honey-stone village England UK"
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
              <span className="text-white/70">Cotswolds 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Area of Outstanding Natural Beauty
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Cotswolds in 3 Days:
                <em className="italic text-amber-300"> Villages, Drives &amp; the England of Imagination</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Arlington Row at 6am, Chipping Campden&apos;s perfect High Street, Broadway Tower on a clear day, cream teas, lavender fields, and lanes that haven&apos;t changed in four hundred years. The complete guide.
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
              <span>🇬🇧 England, UK</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From £60/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Cotswolds at 6am in May — Arlington Row&apos;s honey-stone weavers&apos; cottages reflected in the Coln, cow parsley overflowing the verges of a lane that has looked exactly this way for four hundred years, a church tower rising above a sea of beech trees — is the England of imagination made real.
            </p>
          </blockquote>

          {/* ── WHAT THE COTSWOLDS ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What the Cotswolds Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Cotswolds is an Area of Outstanding Natural Beauty covering approximately 800 square miles across parts of Gloucestershire, Oxfordshire, Wiltshire, Worcestershire, and Warwickshire. It is the largest AONB in England and Wales. The defining characteristic is the oolitic limestone — a warm honey-gold stone that gives every building in the region the same buttery, ancient quality, whether it&apos;s a 14th-century church or a 17th-century weaver&apos;s cottage or a 19th-century coaching inn.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The wealth that built all of this came from wool. From the 12th to the 16th centuries, the Cotswolds was the wealthiest region in England — the rolling hills supported enormous flocks of Cotswold sheep, and the wool trade with Flanders and Italy made the merchants of Cirencester, Northleach, Chipping Campden, and Burford extremely rich. They spent that wealth on churches, guild halls, market houses, and townhouses built of local stone, which is why every town and village in the Cotswolds looks like a set designer&apos;s idea of perfect England. It isn&apos;t a set. It&apos;s the genuine article, and it has looked roughly like this for six hundred years.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Three days gives you enough time to drive the best villages, walk a section of the Cotswold Way, see Arlington Row at dawn, climb Broadway Tower, visit Sudeley Castle, and still have time for the cream teas and antiques shopping that are, honestly, half the point.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="🚂" label="From London" value="1h 40min" />
              <StatCard icon="🌸" label="Best Season" value="Apr–Jun, Sep–Oct" />
              <StatCard icon="🏡" label="Villages" value="800+" />
              <StatCard icon="💰" label="Budget From" value="£60/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌸 Best Time to Visit the Cotswolds</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "Wildflowers in the verges, cow parsley overflowing the lanes, gardens in full bloom, and long evenings. The light is exceptional in May. Accommodation books up for bank holiday weekends — book 6–8 weeks ahead. The best season for photography and walking.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Autumn — Equally Beautiful",
                  d: "Harvest colours turn the beech woods and hedgerows amber and gold. Slightly fewer tourists than peak summer. The arboreta (Batsford, Westonbirt) are at their best in October. Mornings can be misty — the classic Cotswolds photograph. Cooler but rarely cold.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "☀️",
                  t: "Summer — Beautiful but Busy",
                  d: "Long days, reliable weather, lavender in bloom (mid-July). However, Arlington Row, Bourton-on-the-Water, and Bibury are genuinely crowded from 10am. Accommodation fills months ahead for weekends. Arrive very early at the popular villages. Snowshill Lavender Farm peaks second–third week of July.",
                  b: "Book far ahead",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Mar",
                  i: "❄️",
                  t: "Winter — Quiet & Atmospheric",
                  d: "Far fewer tourists, moody light, and the stone villages look extraordinary in frost or light snow. Many tea rooms and smaller attractions have reduced hours or close entirely. Christmas markets in Bourton-on-the-Water and Cheltenham are worth visiting. Cold but rarely severe.",
                  b: "Off-season charm",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚂 Getting to the Cotswolds</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> The Cotswolds has very limited public transport between villages. Almost every experienced visitor says the same thing: <strong className="font-medium">you need a car</strong>. Hire from Oxford (~£40/day for a small car) or take a Cotswolds tour bus from London or Oxford for a day trip — but a tour bus gives you 30 minutes per village and no freedom to explore.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚂",
                  t: "Train: London Paddington → Moreton-in-Marsh (recommended)",
                  d: "The most practical train route: London Paddington to Moreton-in-Marsh, 1 hour 40 minutes direct, £30–50 advance fare. Moreton-in-Marsh is on the edge of the northern Cotswolds with good road access to Chipping Campden, Bourton-on-the-Water, and Stow-on-the-Wold. From the station, hire a car or take a local taxi. Kingham station (15 minutes from Bourton-on-the-Water) is also served by GWR from Paddington (1h15, £25–45).",
                  b: "Best for non-drivers",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚗",
                  t: "Car hire from Oxford (most popular)",
                  d: "Oxford is 45 minutes from London Paddington by train and has multiple car hire branches in the city centre and at Oxford Parkway station. Hire a small car (essential — Cotswolds lanes are very narrow) for ~£40/day. Drive time from Oxford city centre to Burford: 30 minutes. To Chipping Campden: 45 minutes. The freedom to stop anywhere is the entire Cotswolds experience.",
                  b: "Recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Cotswolds tour bus from London or Oxford",
                  d: "Multiple operators run day trips from London Victoria or Oxford: Evan Evans, Golden Tours, and smaller Cotswolds tour companies. Prices £55–95/person for a full day. Typical itinerary: Bourton-on-the-Water, Bibury, and one other village. Very limited time at each. Good for a single-day visit but not for three days of proper exploration.",
                  b: "Day trips only",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "✈️",
                  t: "By air via Birmingham or Heathrow",
                  d: "Birmingham Airport (BHX) is 45 minutes from the northern Cotswolds by car — convenient if flying internationally. London Heathrow (LHR) is 1.5 hours from the central Cotswolds. Both have car hire at the terminal. Flying into Birmingham and driving south into the Cotswolds is the most efficient international arrival route.",
                  b: "International travellers",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Cotswolds Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is designed to hit the most beautiful villages at their quietest — early morning starts are essential for Bibury and the Slaughters. A car is assumed throughout.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Chipping Campden · Dover&apos;s Hill · Broadway Tower · Broadway"
                cost="£50–70 (excluding accommodation)"
                items={[
                  "9:00am — Chipping Campden — the argument for the most perfect Cotswolds market town. The High Street runs in a gentle curve of golden limestone buildings from the 14th to 17th centuries: the Market Hall (1627, free), St James&apos; Church (one of the finest wool churches in the Cotswolds, free), and the terrace of almshouses at the end of Church Street. Allow 1.5–2 hours. No entry fees for the main sights.",
                  "11:00am — Dover&apos;s Hill (1 mile walk from Chipping Campden town centre, or drive and park free). A natural escarpment with uninterrupted views over the Vale of Evesham. On a clear day you can see the hills of Wales. Site of the Cotswold Olimpick Games since 1612. The hedgerow walk to the summit takes 20 minutes and is excellent in spring wildflowers.",
                  "12:30pm — Lunch at the Eight Bells pub in Chipping Campden (Church Street, pub lunch £10–14). 14th-century stone pub, low beamed ceilings, local ales, ploughman&apos;s lunches. One of the most genuinely atmospheric pubs in the Cotswolds.",
                  "2:00pm — Broadway Tower (£7 adult entry, Fish Hill, Broadway WR12 7LB). A Georgian folly built in 1799 at 312 metres above sea level — on a clear day the views extend across 16 counties. The walk up from Broadway village takes 45 minutes; drive to the tower car park to save time. The Arts and Crafts movement connection (William Morris&apos;s Middle Hill Press operated here) makes it historically interesting.",
                  "4:00pm — Broadway village — wide green verge flanked by honey-stone cottages and the Lygon Arms hotel (Grade I listed coaching inn since the 15th century). Browse the antiques shops on the High Street. Gordon Russell Museum (£5) covers the Cotswolds&apos; most famous furniture designer.",
                  "6:30pm — Drive to your base for the night (Bourton-on-the-Water or Burford, both central for Day 2). Budget B&Bs from £50/night. Dinner at a local pub: ploughman&apos;s £10, fish and chips £13.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Bibury at Dawn · Burford · Bourton-on-the-Water · The Slaughters"
                cost="£45–65 (excluding accommodation)"
                items={[
                  "6:00am — Bibury — Arlington Row is described as the most photographed row of cottages in England. Built in the 14th century as a monastic wool store, converted to weavers&apos; cottages in the 17th century. The National Trust property faces Rack Isle water meadow across a mill stream. At 6am in May or June, the sun illuminates the east-facing cottage fronts in warm gold light, the river is still, and you may have it entirely to yourself. Leave before 9am — tour buses begin arriving at 10am. Free to view the exterior (always accessible).",
                  "8:30am — Arlington Mill Museum (Bibury, £5) and the surrounding village. William Morris called Bibury &apos;the most beautiful village in England&apos;. The Bibury Trout Farm (£3.50 to visit, fishing from £15/hour) is beside the river — a uniquely Cotswolds experience.",
                  "10:30am — Burford — &apos;the gateway to the Cotswolds&apos; on the River Windrush, with a dramatic main street descending steeply to a medieval bridge. Excellent for antiques (10+ specialist dealers). St John the Baptist Church (free, 12th century — Levellers were imprisoned here in 1649 during the Civil War). Allow 1.5 hours.",
                  "1:00pm — Lunch in Burford: The Bay Tree Hotel (Sheep Street, £16–24 mains, excellent quality in a 16th-century building) or Huffkins Bakery cafe (homemade pies and soups, £8–12). Both are on or just off the main street.",
                  "2:30pm — Bourton-on-the-Water — the &apos;Venice of the Cotswolds&apos;, bisected by the River Windrush with a series of elegant low footbridges. The most visited village in the Cotswolds — arrive in the afternoon once the morning coach tours have moved on. Model Village (1:9 scale replica of Bourton, 1937, £5) is charmingly eccentric. Cotswolds Motoring Museum (£8).",
                  "4:30pm — Lower Slaughter and Upper Slaughter — the twin Slaughters are two of the smallest and most perfectly preserved villages in the Cotswolds. Both free. Lower Slaughter has the old mill beside the Eye brook (£4.50 to enter); a 15-minute footpath through the water meadow connects it to Upper Slaughter. Bring walking shoes and watch for mud.",
                  "7:00pm — Dinner back at your base. The Lamb Inn Great Rissington (near Bourton, traditional Cotswolds inn, mains £14–20, book ahead) is exceptional for an evening meal.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Stow-on-the-Wold · Sudeley Castle · Castle Combe · Farewell Drive"
                cost="£50–75 (excluding accommodation)"
                items={[
                  "9:00am — Stow-on-the-Wold — the highest town in the Cotswolds (244 metres). Self-proclaimed antiques capital of England with 30+ specialist dealers. The large market square has hosted sheep and horse fairs since the 13th century. St Edward&apos;s Church has a unique Norman doorway framed by two ancient yew trees. YHA Stow-on-the-Wold (from £25/dorm, £80/private room) is one of the best-located budget options in the region.",
                  "11:00am — Sudeley Castle (Winchcombe, £18 adult entry). A genuinely extraordinary place: a 15th-century castle that was the home of Catherine Parr, sixth wife of Henry VIII, who is buried in the castle&apos;s chapel — she is the only English queen buried in a private house. The gardens are outstanding, especially the Queen&apos;s Garden in June. Allow 2.5 hours.",
                  "1:30pm — Lunch at The White Hart Inn (Winchcombe, £12–18 mains) or pack a picnic from a Stow deli: local Cotswolds cheese, homemade pork pies, and sourdough for £10–14.",
                  "3:00pm — Castle Combe — consistently voted the prettiest village in England. A perfectly preserved medieval village in a valley with a market cross, honey-stone cottages, and a 14th-century church. Far fewer visitors than Bibury or Bourton. The village has no shops beyond a pub — it looks exactly as it has for centuries. Film location for Doctor Dolittle (1967) and War Horse (2011).",
                  "5:00pm — Drive back north via the B4040 — a slow scenic route through unnamed villages that is the real Cotswolds: no coaches, no car parks, just lanes between dry-stone walls and the occasional tractor. Stop at any church — there are 70+ medieval parish churches in the Cotswolds, all unlocked during daylight, all free.",
                  "Evening — Final cream tea at a village tearoom: scone, clotted cream, jam, pot of tea for £7–11. The Swan at Bibury (17th-century Cotswolds inn, mains £18–30) is worth booking for a farewell dinner if you can get a table.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Cotswolds" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK VILLAGE GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏡 Cotswolds Landmark Village Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The eight essential Cotswolds villages and sites in order of priority, with entry fees (correct as of 2026) and honest advice on timing your visit.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Bibury — Arlington Row",
                  e: "Free (exterior always accessible)",
                  d: "The most photographed row of cottages in England. 14th-century monastic wool store converted to weavers&apos; cottages in the 17th century, facing Rack Isle water meadow. William Morris called Bibury &apos;the most beautiful village in England&apos;. Arrive at 6am to have it to yourself — tour buses arrive from 10am. Arlington Mill Museum (£5) and Bibury Trout Farm (£3.50) are adjacent.",
                  t: "Must see · Go at dawn",
                },
                {
                  n: "Chipping Campden — Market Town",
                  e: "Free (Market Hall, St James&apos; Church)",
                  d: "The most perfectly preserved wool-trade market town in the Cotswolds. The High Street curves gently through 400 years of golden limestone architecture: the 1627 Market Hall, St James&apos; Church (one of the finest wool churches in England), and almshouses dating from 1612. Less visited than Bourton and Bibury — you can walk the High Street in relative peace even in summer.",
                  t: "Must see · 1.5–2 hrs",
                },
                {
                  n: "Bourton-on-the-Water — Venice of the Cotswolds",
                  e: "Free (village) · Model Village £5 · Motoring Museum £8",
                  d: "The most visited village in the Cotswolds, bisected by the River Windrush with low stone footbridges at regular intervals. Arrive before 10am on weekdays or after 4pm to avoid the worst of the coach traffic. The Model Village (a 1:9 scale replica built in 1937) is the most eccentric attraction in the Cotswolds and is genuinely enjoyable.",
                  t: "Popular · Go early or late",
                },
                {
                  n: "Broadway Tower",
                  e: "£7 adult",
                  d: "A Georgian folly at 312 metres on the Cotswold escarpment — the second-highest point in the Cotswolds. Views extend across 16 counties on a clear day, including the hills of Wales. Built in 1799, associated with William Morris and the Arts and Crafts movement. The walk up from Broadway village takes 45 minutes on the Cotswold Way; drive to the tower car park for a shorter approach.",
                  t: "Must see · 1–1.5 hrs",
                },
                {
                  n: "Sudeley Castle",
                  e: "£18 adult",
                  d: "A 15th-century castle at Winchcombe that was the home of Catherine Parr, sixth wife of Henry VIII. The only English queen buried in a private house — her tomb is in St Mary&apos;s Chapel within the castle grounds. The Queen&apos;s Garden (designed by Rosemary Verey) is one of the great Cotswolds gardens. Allow 2.5 hours. Book tickets online to avoid queues.",
                  t: "Highly recommended · 2.5 hrs",
                },
                {
                  n: "Stow-on-the-Wold",
                  e: "Free (town) · Antiques shops vary",
                  d: "The highest town in the Cotswolds (244 metres) and the antiques capital of England with 30+ specialist dealers. The large market square hosted sheep and horse fairs since the 13th century. St Edward&apos;s Church has a Norman doorway framed by two ancient yew trees. Far less crowded than Bourton-on-the-Water. YHA Stow-on-the-Wold is the best budget base in the region.",
                  t: "Antiques lovers · 1.5 hrs",
                },
                {
                  n: "Castle Combe — Prettiest Village",
                  e: "Free",
                  d: "Consistently voted the prettiest village in England. A perfectly preserved medieval village in a hidden valley: market cross, honey-stone cottages, and a 14th-century church. No shops or tourist infrastructure beyond a pub. Far fewer visitors than Bibury despite being equally photogenic. Film location for War Horse (2011) and Doctor Dolittle (1967). In Wiltshire — slightly south of the main Cotswolds circuit.",
                  t: "Hidden gem · 45 mins",
                },
                {
                  n: "Burford — Antiques & River Windrush",
                  e: "Free (St John&apos;s Church) · Tolsey Museum £3",
                  d: "The gateway to the Cotswolds — a handsome town on the River Windrush with a dramatic High Street descending to a medieval bridge. 10+ specialist antique dealers. St John the Baptist Church (12th century, where Civil War Levellers were imprisoned in 1649) is one of the finest churches in the region. The Bay Tree Hotel and The Lamb Inn are two of the best places to eat.",
                  t: "Must see · 1.5–2 hrs",
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
            title="Cotswolds — Honey Stone, Wildflowers &amp; Ancient Villages"
            subtitle="England&apos;s most beautiful countryside, four hundred years unchanged."
            spots={[
              {
                name: "Arlington Row, Bibury",
                query: "arlington row bibury cotswolds england honey stone cottages morning",
                desc: "The most photographed row of cottages in England — 14th-century monastic wool store converted to weavers&apos; cottages, facing Rack Isle water meadow.",
              },
              {
                name: "Chipping Campden High Street",
                query: "chipping campden high street cotswolds market town golden stone england",
                desc: "The most perfectly preserved Cotswolds market town, with a gently curving High Street of golden limestone from the 14th to 17th centuries.",
              },
              {
                name: "Bourton-on-the-Water",
                query: "bourton on the water cotswolds river windrush stone bridge flowers england",
                desc: "The Venice of the Cotswolds — the River Windrush flows through the village centre beneath a series of elegant low stone footbridges.",
              },
              {
                name: "Broadway Tower",
                query: "broadway tower cotswolds folly escarpment view england vale evesham",
                desc: "The Georgian folly at 312 metres on the Cotswold escarpment — views across 16 counties on a clear day.",
              },
              {
                name: "Castle Combe Village",
                query: "castle combe prettiest village england medieval stone cottages wiltshire",
                desc: "Consistently voted the prettiest village in England — a perfectly preserved medieval village in a hidden Wiltshire valley.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The Cotswolds is mid-range by English standards — not cheap, but not London prices either. The main cost drivers are accommodation (limited supply pushes prices up, especially on summer weekends) and car hire. Entry fees are modest.
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
                    ["🏨 Accommodation (per night)", "£50–75", "£130–200", "£350–600"],
                    ["🚗 Car hire (per day)", "£35–50", "£45–65", "£60–120"],
                    ["⛽ Petrol (3 days)", "£25–40", "£25–40", "£30–50"],
                    ["🍽 Food (per day)", "£20–35", "£40–70", "£80–150"],
                    ["🏰 Entry fees (3 days)", "£15–30", "£30–55", "£50–100"],
                    ["☕ Cream teas & extras", "£10–20", "£15–30", "£30–60"],
                    ["TOTAL (per person, 3 days)", "£250–400", "£550–850", "£1,400–2,500"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (£60–95/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">B&B accommodation (£50–75/night), pub lunches (£10–14), self-catered dinners or fish and chips, shared car hire. Entirely comfortable — the Cotswolds is enjoyable at any budget.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (£130–220/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique B&B or inn (£130–200/night), restaurant dinners (£20–35 mains), afternoon tea included. The sweet spot for Cotswolds travel — comfortable without sacrificing the village character.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (£350–800/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Barnsley House or Lords of the Manor (from £350/night), private guide, fine dining. The Cotswolds has some of the best country house hotels in England at this tier.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in the Cotswolds</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The best base depends on your priorities. Bourton-on-the-Water is the most central and has the most services. Burford is quieter with more character. Chipping Campden is the most beautiful but furthest north. Book well ahead for summer weekends — the Cotswolds has a small total room inventory against very high demand.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Barnsley House",
                  type: "Luxury hotel · Barnsley, near Cirencester",
                  price: "From £350/night",
                  badge: "Most celebrated",
                  desc: "One of England&apos;s most famous garden hotels — a 17th-century Cotswolds manor house with a legendary kitchen garden designed by Rosemary Verey. The spa, walled garden, and restaurant are exceptional. Rooms are individually decorated with antiques and garden views. Book 2–3 months ahead for summer.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Lords of the Manor Hotel",
                  type: "Luxury hotel · Upper Slaughter",
                  price: "From £350/night",
                  badge: "Most idyllic location",
                  desc: "A 17th-century former rectory in Upper Slaughter, surrounded by 8 acres of gardens with a trout stream. The twin Slaughters are on the doorstep. The restaurant holds 3 AA Rosettes. Individually decorated rooms with antique furniture. Being based here means you walk out directly into the most beautiful part of the Cotswolds.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "The Lamb Inn, Great Rissington",
                  type: "Traditional inn · Near Bourton-on-the-Water",
                  price: "From £110/night",
                  badge: "Best mid-range pub",
                  desc: "A genuine Cotswolds village pub with rooms — 17th-century stone building, low ceilings, log fires, local ales, and a kitchen that takes its food seriously. Great Rissington is a quiet village 2 miles from Bourton-on-the-Water. The combination of location, atmosphere, and price is hard to beat. Book directly with the pub.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "YHA Stow-on-the-Wold",
                  type: "Hostel · Stow-on-the-Wold town centre",
                  price: "From £25/dorm, £80/private room",
                  badge: "Best budget base",
                  desc: "A well-run YHA hostel in a converted 16th-century townhouse in the centre of Stow-on-the-Wold — the best budget location in the Cotswolds. Private rooms and dorms. Walking distance to antiques shops, pubs, and Stow market square. Book at least 6 weeks ahead for summer.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in the Cotswolds</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The Cotswolds food scene ranges from genuine village pubs serving local ales and ploughman&apos;s lunches to AA Rosette restaurants using estate-grown vegetables. The middle tier — traditional inns with serious kitchens — is where the best value sits.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "The Swan at Bibury",
                  t: "17th-century riverside inn · Bibury",
                  d: "One of the most celebrated pubs in the Cotswolds — a stone inn directly on the River Coln, 200 metres from Arlington Row. The kitchen has won multiple local food awards; the Bibury Trout Farm trout reared in the same river is a speciality. Mains £18–30. The riverside garden is exceptional in summer. Book ahead — popular with visitors and locals alike.",
                  b: "Most atmospheric",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "The Lamb Inn, Great Rissington",
                  t: "Village pub · Near Bourton-on-the-Water",
                  d: "A genuine Cotswolds country pub rather than a tourist destination — 17th-century stone building, local Donnington Brewery ales, and a kitchen that serves properly sourced seasonal British cooking. Mains £14–20. The kind of pub you&apos;d drive 20 minutes to find in other parts of England. Great Rissington is 2 miles from Bourton-on-the-Water.",
                  b: "Best local pub",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Bay Tree Hotel Restaurant, Burford",
                  t: "Hotel restaurant · Sheep Street, Burford",
                  d: "A 16th-century stone building on Sheep Street, one block from Burford&apos;s famous High Street. The restaurant serves modern British cooking with local Cotswolds produce — beef from nearby farms, seasonal vegetables, proper puddings. Mains £16–24. The terrace is lovely for lunch in good weather. Good wine list by Cotswolds standards.",
                  b: "Best in Burford",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Eight Bells, Chipping Campden",
                  t: "14th-century pub · Church Street, Chipping Campden",
                  d: "The most atmospheric pub in the northern Cotswolds — a 14th-century stone pub with low beamed ceilings and a walled garden. Local ales, ploughman&apos;s lunches, jacket potatoes, and proper pub food (£10–16). On Church Street near the almshouses, so perfectly located for a post-sightseeing lunch. The kind of pub that makes you never want to leave.",
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
            destination="Cotswolds England"
            hotels={[
              {
                name: "Barnsley House",
                type: "Luxury manor hotel · Near Cirencester",
                price: "From £350/night",
                rating: "5",
                badge: "Most celebrated",
                url: "https://www.booking.com/hotel/gb/barnsley-house.html?aid=2820480",
              },
              {
                name: "Lords of the Manor Hotel",
                type: "Luxury country house · Upper Slaughter",
                price: "From £350/night",
                rating: "5",
                badge: "Most idyllic",
                url: "https://www.booking.com/hotel/gb/lords-of-the-manor.html?aid=2820480",
              },
              {
                name: "The Lamb Inn Great Rissington",
                type: "Traditional inn · Near Bourton",
                price: "From £110/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/gb/the-lamb-inn-great-rissington.html?aid=2820480",
              },
              {
                name: "YHA Stow-on-the-Wold",
                type: "Hostel · Stow town centre",
                price: "From £25/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/gb/yha-stow-on-the-wold.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Cotswolds Full-Day Guided Tour from London",
                duration: "10 hrs",
                price: "From £65/person",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=cotswolds+day+tour+london&partner_id=PSZA5UI",
              },
              {
                name: "Cotswolds Villages Private Tour from Oxford",
                duration: "6 hrs",
                price: "From £45/person",
                badge: "Flexible",
                url: "https://www.getyourguide.com/s/?q=cotswolds+private+tour+oxford&partner_id=PSZA5UI",
              },
              {
                name: "Bibury & Burford Half-Day Tour",
                duration: "4 hrs",
                price: "From £35/person",
                url: "https://www.getyourguide.com/s/?q=bibury+burford+tour&partner_id=PSZA5UI",
              },
              {
                name: "Cotswold Way Walking Tour — Chipping Campden to Broadway",
                duration: "5 hrs",
                price: "From £30/person",
                url: "https://www.getyourguide.com/s/?q=cotswold+way+walking+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🚗",
                  title: "Attempting the Cotswolds Without a Car",
                  desc: "This is the single biggest mistake — and the most common. Public transport between Cotswolds villages is genuinely limited: one or two buses per day between some villages, none at all between others. Bibury, the Slaughters, Snowshill, Dover&apos;s Hill, and Castle Combe are all but inaccessible without a car. Hire from Oxford (~£40/day) or Cheltenham. The freedom to stop at any lane, any view, any unnamed village is the entire experience of the Cotswolds.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "📅",
                  title: "Visiting in July–August Without Booking Months Ahead",
                  desc: "The Cotswolds has a very small total room inventory against extremely high summer demand. The good B&Bs (£70–120/night) in Bourton-on-the-Water, Burford, and Chipping Campden fill 3–4 months in advance for July and August weekends. Book accommodation before you book anything else. Mid-week visits in June or September offer the best combination of weather, crowd levels, and availability.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "📸",
                  title: "Arriving at Arlington Row After 10am",
                  desc: "Arlington Row in Bibury is on virtually every Cotswolds visitor&apos;s list, and the tour buses from Oxford and London begin arriving from 10am. By 10:30am the narrow lane is genuinely crowded. Go at 6am (always accessible, no gate) and you may be entirely alone. The east-facing cottage fronts light up in warm gold in the morning sun. The same applies to Lower Slaughter — early morning mist over the Eye brook is the defining photograph.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🗺️",
                  title: "Sticking Only to the Famous Villages",
                  desc: "Bourton-on-the-Water, Bibury, and Broadway are the famous three — and they deserve their reputation. But the Cotswolds has 800+ villages, and many of the unnamed ones are as beautiful and completely untouched by tourism. Drive any B road at random. Stop at any church. Eat at any pub that looks like it hasn&apos;t changed in 50 years. This unplanned exploration is genuinely the best part of a Cotswolds trip.",
                  color: "bg-blue-50 border-blue-200",
                },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-5 border ${m.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{m.icon}</span>
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for the Cotswolds</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Bibury at 6am — Leave Before the Tour Buses",
                  desc: "The tour buses from Oxford and London begin arriving at Arlington Row from approximately 10am. At 6am in June, the sun rises from the east, illuminating the east-facing cottage fronts in warm gold light, the river is perfectly still, and you may have it entirely to yourself for 30–45 minutes. Set your alarm. This is the defining Cotswolds photograph and it requires an early start.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "💜",
                  title: "Snowshill Lavender Farm in July",
                  desc: "Snowshill Lavender Farm (near Broadway Tower, open July–August, free or small donation) is one of the most underrated Cotswolds experiences. Six acres of English lavender in full bloom against the honey-stone field walls and the Cotswold escarpment. The lavender typically peaks in the second and third week of July — check snowshilllavender.co.uk for the current season&apos;s bloom status before planning a lavender-specific visit.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🥾",
                  title: "Walk Between Villages on the Cotswold Way",
                  desc: "The Cotswold Way is a 102-mile National Trail from Chipping Campden to Bath. Walk individual sections for 2–6 mile day walks. The best single section: Chipping Campden to Broadway via Dover&apos;s Hill (6 miles, 2.5 hours, moderate, spectacular escarpment views). Download the OS Maps app or pick up a trail map from any tourist information centre. Boots essential — paths cross working farmland.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🏦",
                  title: "Take Cash for Small Villages",
                  desc: "ATMs are available in Cheltenham, Cirencester, Burford, and Chipping Campden but rare in smaller villages. Many farm shops, honesty boxes (for eggs, vegetables, flowers), roadside stalls, and very small village pubs are cash only. Take £30–50 in cash at the start of each day — you will find uses for it. Parking in some village car parks is also coins only.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "📻",
                  title: "Book a Table at the Good Pubs in Advance",
                  desc: "The best Cotswolds pubs — The Swan at Bibury, The Lamb Inn Great Rissington, The Eight Bells Chipping Campden — are booked solid on summer weekends and many weekday evenings. Book a table as soon as you know your itinerary. Turning up without a reservation at 7:30pm on a Saturday in August and expecting a table at the Swan is optimistic at best.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🌿",
                  title: "Stop at Any Unlocked Church",
                  desc: "The Cotswolds has over 70 medieval parish churches — almost all unlocked during daylight, all free, and many more beautiful than the famous ones. St James&apos; Church Chipping Campden (one of the finest wool churches in England), St John Baptist Burford (12th century Civil War history), St Mary&apos;s Bibury, and dozens of unnamed village churches. The best are the ones nobody mentions.",
                  color: "bg-teal-50 border-teal-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Cotswolds" />

          {/* Combine With */}
          <CombineWith currentSlug="cotswolds-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do I need a car to visit the Cotswolds?",
                  a: "Yes — almost certainly. Organised tours from London (departing Victoria or Paddington) and Oxford cover Bibury, Bourton-on-the-Water, and Burford in a day without a car, but give you perhaps 30 minutes in each village. To properly explore the Cotswolds — to stop at a random village church, drive a lane between two stone walls with wildflowers overhead, discover a farm shop or a hidden valley — you need a car. Hire from Oxford (~£40/day for a small car), Cheltenham, Cirencester, or Birmingham.",
                },
                {
                  q: "Which Cotswolds village should I base in?",
                  a: "Bourton-on-the-Water is the most central and has the most accommodation and services, but can feel crowded in summer. Burford (slightly south) is quieter, more characterful, with better antiques shops and excellent pubs. Chipping Campden is the most beautiful and quietest of the three, ideal for the full honey-stone village experience, but furthest north. For a luxury stay, Upper or Lower Slaughter (where Lords of the Manor is located) puts you in the most idyllic setting with the fewest crowds.",
                },
                {
                  q: "How do I get to the Cotswolds from London?",
                  a: "Train from London Paddington to Moreton-in-Marsh (1h 40min direct, £30–50 advance) or to Kingham (1h15, £25–45, slightly more central). From either station you will need a taxi or pre-booked car hire. Alternatively, train to Oxford (45 minutes from Paddington, £15–25) and hire a car — drive time from Oxford to Burford is 30 minutes. For most visitors, London Paddington to Oxford + car hire is the most practical and affordable combination.",
                },
                {
                  q: "When is the best time to see Snowshill Lavender?",
                  a: "English lavender in the Cotswolds typically peaks in mid-to-late July, with Snowshill Lavender Farm (near Broadway) at its best in the second and third week of July. The season is short — 3–4 weeks — and varies year to year depending on spring temperatures. Check snowshilllavender.co.uk or the farm&apos;s social media for current bloom status before making a lavender-specific visit. Go on a sunny afternoon when the scent is at its peak.",
                },
                {
                  q: "Is Sudeley Castle worth the £18 entry fee?",
                  a: "Yes — for most visitors, Sudeley Castle is one of the highlights of a Cotswolds trip. The Catherine Parr connection (she is buried in the castle&apos;s chapel — the only English queen buried in a private house), the outstanding Queen&apos;s Garden, and the beauty of the setting in the Winchcombe valley make it exceptional value at £18. Allow 2.5 hours. The gardens in June are at their best. Book tickets online to avoid queues.",
                },
                {
                  q: "Cotswolds vs Lake District — which should I choose?",
                  a: "Fundamentally different experiences. The Cotswolds is quintessential English village culture — honey-stone architecture, cream teas, antiques, gentle hills, country lanes. The Lake District is dramatic mountain scenery, Wordsworth, serious hiking, and large lakes with fells above them. If you want English pastoral prettiness and the architecture of centuries of wool wealth, choose the Cotswolds. If you want wild landscapes and serious walking, choose the Lake District. Both require more than 2 days to do justice. The Cotswolds is drier — the Lake District earns its name.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Cotswolds trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-cotswolds", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/cotswolds-without-car", label: "Cotswolds without a car", icon: "🚌" },
                { href: "/blog/bibury-travel-guide", label: "Bibury guide", icon: "🏡" },
                { href: "/blog/cotswold-way-walking", label: "Cotswold Way walks", icon: "🥾" },
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
          <RelatedGuides currentSlug="cotswolds-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More UK &amp; Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Bath in 2 Days — Roman Baths &amp; Georgian Crescents", href: "/blog/bath-2-days" },
                { label: "London in 5 Days — The Complete Guide", href: "/blog/london-5-days" },
                { label: "Edinburgh in 4 Days — Castles &amp; Old Town", href: "/blog/edinburgh-4-days" },
                { label: "Paris in 5 Days — Eiffel Tower to Montmartre", href: "/blog/paris-5-days" },
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
