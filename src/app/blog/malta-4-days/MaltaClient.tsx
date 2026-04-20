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
const MALTA_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Malta Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",   emoji: "🏛️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Malta 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Malta in 4 Days — Valletta, Mdina, Blue Lagoon and the Hypogeum&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/malta-4-days"
        imageUrl="https://images.unsplash.com/photo-1555629151-5738e6afe3a7?w=1200&q=80"
        description="Malta in 4 Days: Valletta, Mdina Silent City, Blue Lagoon, Gozo and the Hypogeum — complete travel guide with budget breakdown."
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
export default function MaltaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MALTA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Malta" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="malta valletta capital mediterranean harbor baroque architecture"
            fallback="https://images.unsplash.com/photo-1555629151-5738e6afe3a7?w=1600&q=80"
            alt="Valletta Malta baroque capital city with Grand Harbour Mediterranean sea"
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
              <span className="text-white/70">Malta 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">January 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Malta in 4 Days:
                <em className="italic text-amber-300"> Valletta, Mdina &amp; the Mediterranean&apos;s Hidden Layers</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Baroque cathedrals, the world&apos;s oldest underground temple, a lagoon that photographs impossibly turquoise, and pastizzi for fifty cents. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="January 2026" readTime="13 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇲🇹 Malta, Europe</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From &euro;55/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The smallest EU capital in the world with more UNESCO sites per square kilometre than any country on Earth &mdash; the Grand Harbour where the Knights of St John held off the Ottoman Empire, the Blue Lagoon that still photographs as impossibly turquoise, and the Hal Saflieni Hypogeum &mdash; an underground temple 5,000 years old where the acoustics were deliberately engineered for chanting. Malta: the Mediterranean&apos;s most compacted history.
            </p>
          </blockquote>

          {/* ── WHAT MALTA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Malta Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Malta is a limestone archipelago in the central Mediterranean &mdash; three inhabited islands (Malta, Gozo, Comino) with a combined area smaller than the Isle of Wight. It has been colonised by Phoenicians, Romans, Arabs, Normans, the Knights of St John, Napoleon, and the British Empire. Each left their layer. Valletta, the capital, was built from scratch by the Knights after the Great Siege of 1565 and is the most concentrated Baroque city in Europe &mdash; a UNESCO World Heritage Site in its entirety.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              What makes Malta extraordinary for its size is the density of genuinely world-class sights. St John&apos;s Co-Cathedral contains Caravaggio&apos;s largest painting. The Hal Saflieni Hypogeum is the only prehistoric underground temple ever discovered &mdash; 5,000 years old, carved from living rock three storeys deep. Mdina, the former capital, has been inhabited since the Bronze Age and is home to just 300 people. The Blue Lagoon on tiny Comino island is one of the most photographed spots in the Mediterranean.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              English is an official language everywhere. The euro is the currency. The bus network is excellent and cheap (&euro;1.50 flat fare). You can cross the entire main island in 40 minutes. Four days is enough to see Malta&apos;s greatest hits without rushing &mdash; and the food scene alone (pastizzi for &euro;0.50, fresh lampuka in season, rabbit stew in Gozo) would justify the trip.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="MLA" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Jun" />
              <StatCard icon="🏛️" label="UNESCO Sites" value="3" />
              <StatCard icon="💰" label="Budget From" value="&euro;55/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Malta</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "☀️",
                  t: "Spring — Best Season",
                  d: "20–28&deg;C, comfortable for walking Valletta all day. The Blue Lagoon is swimmable but not yet overcrowded. Wildflowers cover the clifftops. Shoulder-season prices on hotels. May is often the sweet spot &mdash; warm enough to swim, empty enough to enjoy.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🌅",
                  t: "Autumn — Excellent",
                  d: "26–30&deg;C, sea still warm (25&deg;C+), summer crowds gone. September is lampuka (dolphin fish) season &mdash; a Maltese culinary highlight. The Regatta in the Grand Harbour (September 8th) is one of Malta&apos;s best events. Hotel prices drop after mid-September.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🔥",
                  t: "Summer — Hot &amp; Crowded",
                  d: "33–38&deg;C. The Blue Lagoon is packed with day-trippers from 11am. Valletta radiates heat from its limestone. Viable if you start early and siesta through the afternoon, but prices are at their peak and the experience is diminished by the crowds at Comino.",
                  b: "Manageable with planning",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Mar",
                  i: "🌧️",
                  t: "Winter — Mild &amp; Quiet",
                  d: "12–18&deg;C. Too cold for swimming but perfect for history and culture &mdash; Valletta, Mdina, the Hypogeum, and the megalithic temples are all better without crowds. Some rain. Carnival in February is spectacular. Hotel prices at their lowest. A genuinely underrated time to visit.",
                  b: "Great for culture",
                  c: "bg-blue-50 border-blue-200",
                },
              ].map((s) => (
                <div key={s.s} className={`rounded-xl p-4 border ${s.c}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.i}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{s.s} &mdash; {s.t}</p>
                      <p className="text-[0.65rem] font-medium text-teal">{s.b}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: s.d }} />
                </div>
              ))}
            </div>
          </section>

          {/* ── HOW TO REACH ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Malta</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Malta International Airport (MLA) is the only airport. It&apos;s 8km from Valletta, connected by bus routes X4 and 119 (&euro;1.50) or taxi (&euro;15&ndash;20). All low-cost carriers (Ryanair, Wizz Air, easyJet) fly here.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Direct flights from major European cities",
                  d: "Ryanair, Wizz Air, easyJet, Air Malta, and Lufthansa all fly direct to MLA from London, Rome, Paris, Berlin, Barcelona and dozens more. Flight time: 2&ndash;3 hours from most of Europe. Budget return fares from &euro;30&ndash;80 if booked early. From the US, connect via Rome, London, or Frankfurt.",
                  b: "Most common",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "⛴️",
                  t: "Ferry from Sicily (Pozzallo or Catania)",
                  d: "Virtu Ferries operates a fast catamaran from Pozzallo, Sicily to Valletta &mdash; 90 minutes, from &euro;55 one way. A slower ferry from Catania also runs. Excellent option if combining Malta with a Sicily trip. Book in advance for summer crossings.",
                  b: "Good for combos",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Airport to Valletta by bus",
                  d: "Bus routes X4 and 119 run from MLA to Valletta bus terminus every 20&ndash;30 minutes. Journey time 25&ndash;35 minutes. Fare &euro;1.50 (exact change or prepaid Tallinja card). The cheapest and easiest airport transfer in Europe.",
                  b: "Budget option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚕",
                  t: "Airport taxi or transfer",
                  d: "Fixed-rate taxis from MLA to Valletta: &euro;15&ndash;20. To Sliema or St Julian&apos;s: &euro;20&ndash;25. Pre-book via eCabs or Bolt (Malta&apos;s ride-hailing app) for the best rates. Private transfers can also be arranged through hotels.",
                  b: "Convenient",
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
                      <p className="text-xs text-gray-700 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: t.d }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 4-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Malta Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary covers Valletta, Comino&apos;s Blue Lagoon, Mdina and the Hypogeum, and a full day in Gozo &mdash; the essential Malta experience in four days.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Valletta &mdash; The Baroque Capital"
                cost="&euro;30&ndash;50 (plus accommodation)"
                items={[
                  "Arrive at MLA airport. Bus X4 or 119 to Valletta bus terminus &mdash; &euro;1.50, 30 minutes. Check into your accommodation in Valletta or nearby Sliema.",
                  "Valletta City Gate and Renzo Piano&apos;s Parliament Building &mdash; the modern entrance to Europe&apos;s most concentrated Baroque city. Free to admire from Republic Street.",
                  "St John&apos;s Co-Cathedral &mdash; &euro;15 entry. Absolutely mandatory. The most ornate Baroque interior in Malta, with Caravaggio&apos;s largest painting (The Beheading of Saint John the Baptist) and an inlaid marble floor of 400 tombstones of the Knights.",
                  "Upper Barrakka Gardens &mdash; free entry, stunning panoramic views over the Grand Harbour and the Three Cities across the water. The noon cannon salute from the Saluting Battery below is free to watch from the gardens.",
                  "Walk the length of Republic Street and Merchants Street &mdash; the grid layout was designed by the Knights in the 1560s. Every side street reveals a Baroque church facade, a carved balcony, or a limestone courtyard.",
                  "Evening: pastizzi from a bakery (&euro;0.50 each &mdash; ricotta or pea filling, the national street food) and a glass of local Cisk beer at a harbourside bar. Dinner at Is-Suq tal-Belt food market in Valletta for &euro;10&ndash;15.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Blue Lagoon, Comino &amp; Three Cities"
                cost="&euro;25&ndash;40"
                items={[
                  "Early bus from Valletta to Cirkewwa ferry terminal (&euro;1.50). Ferry to Comino island &mdash; return ticket &euro;10&ndash;15. Take the first boat of the day to arrive before the crowds.",
                  "Blue Lagoon &mdash; one of the Mediterranean&apos;s most photographed spots. Electric turquoise water over white sand in a sheltered cove between Comino and Cominotto. Swim, snorkel, or simply float.",
                  "Bring your own snorkel gear or hire for &euro;5. Bring a packed lunch and plenty of water &mdash; kiosks on Comino are overpriced. Sunscreen is essential as there is minimal shade.",
                  "Comino is almost uninhabited &mdash; walk to Santa Marija Tower for panoramic sea views. The island has no cars and no permanent population beyond a handful of farmers.",
                  "Return ferry by mid-afternoon. Head to the Three Cities (Vittoriosa, Senglea, Cospicua) via the traditional dgħajsa water taxi from Valletta waterfront &mdash; &euro;2.80 each way.",
                  "Explore Vittoriosa (Birgu) &mdash; the oldest of the Three Cities, pre-dating Valletta. Fort St Angelo, the Maritime Museum, and narrow limestone lanes. Return to Valletta for dinner.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Mdina, Blue Grotto &amp; the Hypogeum"
                cost="&euro;55&ndash;70"
                items={[
                  "Morning: bus from Valletta to Mdina (&euro;1.50, 30 minutes). Mdina is Malta&apos;s medieval capital &mdash; inhabited since the Bronze Age, now home to just 300 people, hence &apos;the Silent City&apos;.",
                  "Walk the entire walled city &mdash; narrow limestone streets, Baroque palaces, St Paul&apos;s Cathedral (&euro;5). The views from the bastions across the Maltese countryside are extraordinary.",
                  "Walk down to Rabat (just outside the walls) &mdash; St Paul&apos;s Catacombs (&euro;5), 4th-century underground burial chambers with frescoed corridors.",
                  "Afternoon: bus to Blue Grotto (Wied iz-Zurrieq). Boat trip through the sea caves &mdash; &euro;8, 25 minutes. The reflected light turns the water electric blue inside the grotto. Only operates in calm weather.",
                  "Late afternoon: Ħal Saflieni Hypogeum &mdash; &euro;40, MUST be pre-booked months in advance at heritagemalta.mt. Maximum 80 visitors per day. The world&apos;s only prehistoric underground temple &mdash; 5,000 years old, three storeys deep, with acoustics deliberately engineered for ritual chanting. One of the most extraordinary archaeological sites on Earth.",
                  "Evening: dinner in Valletta at Noni (Mediterranean tasting menu, &euro;45&ndash;65pp) or a casual meal at a local trattoria for &euro;12&ndash;18.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Gozo Island &mdash; Temples, Citadel &amp; Salt Pans"
                cost="&euro;35&ndash;55"
                items={[
                  "Bus from Valletta to Cirkewwa, then Gozo Channel ferry to Mġarr harbour &mdash; 25 minutes, &euro;4.65 return (pay on return journey only).",
                  "Ġgantija Temples &mdash; 3,600 BC, older than Stonehenge and the Egyptian pyramids, among the oldest free-standing structures on Earth. &euro;9 entry includes the interpretation centre.",
                  "Victoria (Rabat) &mdash; the capital of Gozo. The hilltop Citadel has panoramic views across the entire island and a cluster of museums (&euro;5 combined pass). The Cathedral of the Assumption has a famous trompe-l&apos;oeil painted ceiling.",
                  "Dwejra &mdash; where the Azure Window rock arch once stood. The Inland Sea and dramatic geology remain &mdash; boat ride through the sea cave to the open Mediterranean for &euro;5.",
                  "Lunch in Victoria: rabbit stew (fenkata) is Gozo&apos;s signature dish &mdash; &euro;10&ndash;12 at a local restaurant. Try the local ġbejniet (sheep&apos;s cheese) and ftira bread.",
                  "Marsalforn salt pans &mdash; 350-year-old flat salt pans carved into the coastal rock, still producing sea salt. Photographically stunning. Free to visit.",
                  "Xlendi Bay for an afternoon swim before the return ferry. Evening dinner back in Sliema or St Julian&apos;s &mdash; grilled fish at a harbourside restaurant for &euro;15&ndash;18.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Malta" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Landmark &amp; Attraction Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees as of early 2026. The Heritage Malta multi-site pass (&euro;50) covers most archaeological sites and is excellent value if you visit three or more.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "St John&apos;s Co-Cathedral",
                  e: "&euro;15",
                  d: "The masterpiece of Maltese Baroque. Built by the Knights of St John in the 1570s, every surface is covered in gilded carvings, paintings, and inlaid marble. Contains Caravaggio&apos;s largest work (The Beheading of Saint John) and 400 marble tombstone slabs on the floor. One of the most ornate church interiors in Europe.",
                  t: "Must see &middot; 1&ndash;1.5 hrs",
                },
                {
                  n: "Ħal Saflieni Hypogeum",
                  e: "&euro;40 (book months ahead)",
                  d: "The world&apos;s only prehistoric underground temple &mdash; carved from living rock over 5,000 years ago, three storeys deep beneath a residential street in Paola. The acoustics in the Oracle Room were deliberately engineered. Capped at 80 visitors per day. Book immediately at heritagemalta.mt when your dates are confirmed.",
                  t: "Must see &middot; 1.5 hrs",
                },
                {
                  n: "Mdina &mdash; The Silent City",
                  e: "Free (cathedral &euro;5)",
                  d: "Malta&apos;s medieval capital, continuously inhabited since the Bronze Age. Just 300 residents live within the fortified walls. Narrow limestone streets, Baroque palaces, and St Paul&apos;s Cathedral. The views from the bastions across the countryside are exceptional. Completely free to walk the city.",
                  t: "Must see &middot; 2&ndash;3 hrs",
                },
                {
                  n: "Blue Lagoon, Comino",
                  e: "Free (ferry &euro;10&ndash;15)",
                  d: "A sheltered cove between Comino and Cominotto with crystal-clear turquoise water over white sand. One of the Mediterranean&apos;s most photographed swimming spots. Take the first ferry to avoid the mid-day crowds. Best in May&ndash;June or September.",
                  t: "Half day &middot; swim &amp; snorkel",
                },
                {
                  n: "Ġgantija Temples, Gozo",
                  e: "&euro;9",
                  d: "Megalithic temple complex dating to 3,600 BC &mdash; older than Stonehenge and the Great Pyramid of Giza. Among the oldest free-standing structures on Earth. The interpretation centre provides excellent context for these extraordinary UNESCO-listed ruins.",
                  t: "Must see &middot; 1&ndash;1.5 hrs",
                },
                {
                  n: "Blue Grotto",
                  e: "&euro;8 (boat trip)",
                  d: "A series of sea caves on Malta&apos;s southern coast where reflected sunlight turns the water electric blue. The 25-minute boat trip from Wied iz-Zurrieq passes through six caves. Only operates in calm seas &mdash; mornings are usually best. Stunning on a clear day.",
                  t: "1 hr &middot; weather dependent",
                },
                {
                  n: "Upper Barrakka Gardens",
                  e: "Free",
                  d: "Valletta&apos;s finest viewpoint &mdash; panoramic views over the Grand Harbour, the Three Cities, and Fort St Angelo. The noon cannon salute from the Saluting Battery below is a daily event. At sunset the limestone fortifications glow amber. One of the best free views in Europe.",
                  t: "30 mins &middot; go at sunset",
                },
              ].map((place) => (
                <div key={place.n} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-stone-900" dangerouslySetInnerHTML={{ __html: place.n }} />
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs text-teal font-medium bg-teal/10 px-2 py-0.5 rounded-full" dangerouslySetInnerHTML={{ __html: place.e }} />
                      <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200" dangerouslySetInnerHTML={{ __html: place.t }} />
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: place.d }} />
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <DestinationGallery
            title="Malta &mdash; Baroque, Blue &amp; Ancient"
            subtitle="From Valletta&apos;s Grand Harbour to Gozo&apos;s prehistoric temples."
            spots={[
              {
                name: "Valletta Grand Harbour",
                query: "valletta grand harbour malta fortifications baroque city mediterranean",
                desc: "The Grand Harbour from Upper Barrakka Gardens &mdash; Valletta&apos;s fortifications, the Three Cities, and Fort St Angelo across the water.",
              },
              {
                name: "Blue Lagoon Comino",
                query: "blue lagoon comino malta turquoise water crystal clear mediterranean",
                desc: "The Blue Lagoon on Comino island &mdash; electric turquoise water in a sheltered cove between Comino and Cominotto.",
              },
              {
                name: "Mdina Silent City",
                query: "mdina silent city malta medieval walled city limestone streets",
                desc: "Mdina&apos;s narrow limestone streets &mdash; Malta&apos;s medieval capital, inhabited since the Bronze Age, now home to just 300 people.",
              },
              {
                name: "Ġgantija Temples Gozo",
                query: "ggantija temples gozo malta megalithic prehistoric ancient ruins",
                desc: "Ġgantija Temples in Gozo &mdash; 3,600 BC megalithic ruins, among the oldest free-standing structures on Earth.",
              },
              {
                name: "St John&apos;s Co-Cathedral",
                query: "st johns co cathedral valletta malta baroque interior gilded ornate",
                desc: "The interior of St John&apos;s Co-Cathedral &mdash; every surface covered in gilded Baroque carvings and Caravaggio&apos;s masterpiece.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Malta is moderately priced by European standards &mdash; cheaper than Italy or France, comparable to Portugal or Croatia. The biggest variable is accommodation. Food and transport are very affordable. All prices in euros.
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
                    ["🏨 Accommodation", "&euro;20&ndash;30/night", "&euro;50&ndash;80/night", "&euro;200&ndash;350/night"],
                    ["🍽 Food", "&euro;12&ndash;18/day", "&euro;30&ndash;45/day", "&euro;70&ndash;100/day"],
                    ["🚌 Transport", "&euro;3&ndash;5/day", "&euro;15&ndash;25/day", "&euro;80&ndash;150/day"],
                    ["🏛️ Activities", "&euro;15&ndash;20/day", "&euro;30&ndash;50/day", "&euro;80&ndash;150/day"],
                    ["TOTAL (per person)", "&euro;55/day", "&euro;120/day", "&euro;280+/day"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium" dangerouslySetInnerHTML={{ __html: cat }} />
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center" dangerouslySetInnerHTML={{ __html: v }} />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (&euro;55/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in hostels or budget guesthouses (&euro;20&ndash;30/night), eat pastizzi, ftira and local restaurant meals, use public buses (&euro;1.50 per trip). Completely comfortable and the bus network reaches everywhere.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (&euro;120/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique townhouse hotels in Valletta (&euro;50&ndash;80/night), restaurant meals with wine, guided tours and boat trips. The sweet spot for most travellers &mdash; comfortable without feeling extravagant.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (&euro;280+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Five-star boutique hotels like The Phoenicia Malta or Iniala Harbour House (&euro;200&ndash;350/night), private yacht charters, fine dining at Noni, and VIP Hypogeum access.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Malta</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Valletta is the best base for four days &mdash; walkable, central, and well connected by bus to the ferry terminals. Sliema and St Julian&apos;s are alternatives with more nightlife and seafront hotels. Book Valletta accommodation early as the old city has limited rooms.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "The Phoenicia Malta",
                  type: "Luxury 5-star &middot; Valletta entrance",
                  price: "From &euro;180/night",
                  badge: "Best luxury",
                  desc: "Malta&apos;s grande dame hotel, set in landscaped gardens at the entrance to Valletta overlooking the Grand Harbour. Pool, spa, and fine dining. The terrace views at sunset are magnificent. Walking distance to everything in the capital.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hotel Juliani",
                  type: "Boutique 4-star &middot; St Julian&apos;s",
                  price: "From &euro;90/night",
                  badge: "Best boutique",
                  desc: "A stylish boutique hotel on the St Julian&apos;s waterfront with a rooftop restaurant and pool. Excellent location between Valletta (10 min by bus) and the Paceville nightlife. Modern rooms with harbour views. Great mid-range option.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Two Pillows Boutique Hostel",
                  type: "Boutique hostel &middot; Sliema",
                  price: "From &euro;18/night (dorm)",
                  badge: "Best budget",
                  desc: "A modern, well-designed hostel in Sliema with both dorm beds and private rooms. Clean, social, and walking distance to the Sliema&ndash;Valletta ferry. Common kitchen and rooftop terrace. The best budget accommodation on the island.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Valletta Townhouse B&amp;Bs",
                  type: "Boutique B&amp;B &middot; Valletta old town",
                  price: "&euro;40&ndash;70/night",
                  badge: "Most atmospheric",
                  desc: "Valletta&apos;s old town has dozens of converted townhouse B&amp;Bs &mdash; limestone staircases, wooden Maltese balconies, rooftop terraces overlooking the Grand Harbour. The best way to experience the capital. Book early as rooms are limited.",
                  color: "border-purple-200 bg-purple-50",
                },
              ].map((stay) => (
                <div key={stay.name} className={`rounded-xl p-4 border ${stay.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900" dangerouslySetInnerHTML={{ __html: stay.name }} />
                      <p className="text-xs text-muted font-light" dangerouslySetInnerHTML={{ __html: stay.type }} />
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs bg-white/80 text-ink px-2.5 py-1 rounded-full border border-white/60" dangerouslySetInnerHTML={{ __html: stay.price }} />
                      <span className="text-xs bg-gold/15 text-gold-dark px-2 py-0.5 rounded-full font-medium">{stay.badge}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: stay.desc }} />
                </div>
              ))}
            </div>
          </section>

          {/* ── WHERE TO EAT ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Malta</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Maltese food is a Mediterranean crossover &mdash; Italian, North African, and British influences layered over centuries. The national street food is the pastizzi (&euro;0.50, ricotta or pea-filled puff pastry). Rabbit (fenek) is the national dish. Fresh fish at Marsaxlokk&apos;s Sunday market is unmissable.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Noni",
                  t: "Fine dining &middot; Valletta",
                  d: "One of Malta&apos;s best restaurants &mdash; a Mediterranean tasting menu using seasonal Maltese produce in a beautifully restored Valletta townhouse. &euro;45&ndash;65 for the tasting menu. Reservations essential, especially on weekends. Worth the splurge for a special dinner.",
                  b: "Best dining",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Is-Suq tal-Belt (Valletta Food Market)",
                  t: "Food hall &middot; Valletta",
                  d: "Valletta&apos;s covered food market &mdash; a restored 19th-century building with vendors selling fresh pasta, seafood, Maltese platters, Asian fusion, and local wines. Meals &euro;8&ndash;15. The best casual lunch in Valletta. Open daily, buzzing at lunchtime.",
                  b: "Best casual",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Crystal Palace (Rabat)",
                  t: "Pastizzi bakery &middot; Rabat",
                  d: "The most famous pastizzi bakery in Malta &mdash; locals queue from 6am for freshly baked pastizzi at &euro;0.50 each. Ricotta (rikotta) or mushy pea (piżelli) filling in flaky puff pastry. Cash only. The benchmark for Malta&apos;s national snack.",
                  b: "Must try",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Marsaxlokk Sunday Fish Market",
                  t: "Fish market &middot; Marsaxlokk",
                  d: "Malta&apos;s famous fishing village hosts a Sunday market with fresh catch, local produce, honey, and cheeses. The harbourside restaurants serve the freshest fish on the island &mdash; grilled swordfish or lampuka (in season) for &euro;12&ndash;18. Bus from Valletta &euro;1.50.",
                  b: "Iconic",
                  c: "bg-teal-50 border-teal-200",
                },
              ].map((r) => (
                <div key={r.n} className={`rounded-xl p-4 border ${r.c}`}>
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{r.n}</p>
                      <p className="text-xs text-muted font-light" dangerouslySetInnerHTML={{ __html: r.t }} />
                    </div>
                    <span className="text-xs bg-white/80 text-amber-700 px-2.5 py-1 rounded-full border border-amber-200 font-medium">{r.b}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: r.d }} />
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate Block */}
          <AffiliateBlock
            destination="Malta"
            hotels={[
              {
                name: "The Phoenicia Malta",
                type: "Luxury 5-star at the entrance to Valletta",
                price: "From &euro;180/night",
                rating: "5",
                badge: "Best luxury",
                url: "https://www.booking.com/hotel/mt/the-phoenicia-malta.html?aid=2820480",
              },
              {
                name: "Hotel Juliani",
                type: "Boutique 4-star on St Julian&apos;s waterfront",
                price: "From &euro;90/night",
                rating: "4",
                badge: "Best boutique",
                url: "https://www.booking.com/hotel/mt/juliani.html?aid=2820480",
              },
              {
                name: "Palazzo Consiglia",
                type: "Heritage townhouse hotel in Valletta",
                price: "From &euro;65/night",
                rating: "4",
                badge: "Best value",
                url: "https://www.booking.com/hotel/mt/palazzo-consiglia.html?aid=2820480",
              },
              {
                name: "Two Pillows Boutique Hostel",
                type: "Modern hostel in Sliema",
                price: "From &euro;18/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/mt/two-pillows-boutique-hostel.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Comino Blue Lagoon Boat Trip",
                duration: "Full day",
                price: "From &euro;25/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=malta+blue+lagoon+comino&partner_id=PSZA5UI",
              },
              {
                name: "Gozo Island Day Trip with Ferry",
                duration: "Full day",
                price: "From &euro;30/person",
                badge: "Essential",
                url: "https://www.getyourguide.com/s/?q=gozo+day+trip+malta&partner_id=PSZA5UI",
              },
              {
                name: "Valletta Walking Tour",
                duration: "2.5 hrs",
                price: "From &euro;20/person",
                url: "https://www.getyourguide.com/s/?q=valletta+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Malta Diving Experience",
                duration: "3 hrs",
                price: "From &euro;55/person",
                url: "https://www.getyourguide.com/s/?q=malta+diving&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Malta</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🏛️",
                  title: "Not booking the Hypogeum months in advance",
                  desc: "The Ħal Saflieni Hypogeum is capped at 80 visitors per day to protect the ancient site. It routinely sells out 3&ndash;6 months ahead in summer. Book immediately at heritagemalta.mt the moment your dates are confirmed &mdash; this is the one booking that cannot be left to the last minute.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "☀️",
                  title: "Visiting the Blue Lagoon at peak time",
                  desc: "The Blue Lagoon on Comino is stunning but in July&ndash;August the ferries dump thousands of tourists onto a small beach. Take the first ferry of the day (usually 9am) and leave by 1pm &mdash; or visit in May, June, or September when it&apos;s a paradise rather than a sardine can.",
                  color: "border-orange-200 bg-orange-50",
                },
                {
                  icon: "🚌",
                  title: "Hiring a car unnecessarily",
                  desc: "Malta&apos;s public buses (&euro;1.50 any journey, day passes available) connect everywhere. Many visitors hire cars and then discover that parking in Valletta is nearly impossible, roads are narrow, and driving is on the left. The bus genuinely covers all the sights on this itinerary.",
                  color: "border-yellow-200 bg-yellow-50",
                },
                {
                  icon: "💸",
                  title: "Eating only in touristy Valletta spots",
                  desc: "The same quality food costs 30&ndash;40% less in Rabat, Mosta, or Marsaxlokk. The Marsaxlokk Sunday market is particularly good for fresh fish. Valletta&apos;s Is-Suq tal-Belt food market is the exception &mdash; excellent value inside the capital.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  icon: "🤿",
                  title: "Skipping Gozo and the diving",
                  desc: "Malta has some of the best diving in the Mediterranean &mdash; extraordinary visibility (30&ndash;45m on good days), WWII wrecks, and sea caves. Even non-divers should snorkel at the Blue Lagoon or Blue Grotto. Gozo in particular is world-class for diving and deserves at least a full day.",
                  color: "border-blue-200 bg-blue-50",
                },
              ].map((m) => (
                <TipCard key={m.title} {...m} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Malta</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎫",
                  title: "Buy the Heritage Malta Multi-Site Pass",
                  desc: "The multi-site pass (around &euro;50 for adults) covers entry to the Hypogeum, Ġgantija, Tarxien Temples, Ħaġar Qim, Mnajdra, and several museums. If you plan to visit more than 3 sites it&apos;s excellent value and includes some of the most important prehistoric sites on Earth.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌅",
                  title: "Upper Barrakka Gardens at golden hour",
                  desc: "The view from Upper Barrakka Gardens at sunset &mdash; with the Three Cities across the water turning amber and the limestone fortifications glowing &mdash; is one of the most magnificent city views in Europe. Completely free. The noon cannon salute from the Saluting Battery is also free to watch.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "⛴️",
                  title: "Take the dgħajsa water taxi to the Three Cities",
                  desc: "The traditional dgħajsa (wooden water taxi) from Valletta&apos;s waterfront to Vittoriosa costs just &euro;2.80 each way. The 5-minute crossing gives you the best views of the Grand Harbour from the water and deposits you in the oldest of the Three Cities &mdash; which most tourists skip entirely.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🐟",
                  title: "Try lampuka in season (Oct&ndash;Nov)",
                  desc: "Lampuka (dolphin fish) is Malta&apos;s most beloved seasonal fish, available only in autumn. Order it baked with tomatoes, capers, and olives or as lampuki pie at any traditional restaurant. Marsaxlokk Sunday market is the best place to see the fresh catch.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🗺️",
                  title: "Learn two words of Maltese",
                  desc: "Maltese is the only Semitic language written in the Latin alphabet. &apos;Grazzi&apos; (thank you) and &apos;Saħħa&apos; (cheers/goodbye) will get smiles everywhere. English is widely spoken but the effort is appreciated. Maltese place names use ħ (silent h), ġ (soft j), and ż (like z in buzz).",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🏘️",
                  title: "Walk the Three Cities",
                  desc: "Most visitors go straight to Valletta and miss the Three Cities (Vittoriosa, Senglea, Cospicua) across the Grand Harbour. They predate Valletta and contain Fort St Angelo, the Inquisitor&apos;s Palace, and some of Malta&apos;s most authentic neighbourhood streets. Water taxi from Valletta &mdash; &euro;2.80.",
                  color: "bg-indigo-50 border-indigo-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Malta" />

          {/* Combine With */}
          <CombineWith currentSlug="malta-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days do you need in Malta?",
                  a: "Four days is ideal for covering Valletta, Mdina, the Blue Lagoon on Comino, and a day trip to Gozo. If you add the Hypogeum and want unhurried time in Gozo (it genuinely rewards an overnight stay), five days is better. Three days is workable but rushed.",
                },
                {
                  q: "Is Malta worth visiting or is it too small?",
                  a: "Malta is one of the most rewarding destinations in Europe precisely because of its small size. The density of UNESCO heritage, prehistoric temples, Baroque architecture, and Mediterranean beaches is unmatched anywhere of comparable size. It is also one of the safest and most English-friendly destinations in Europe.",
                },
                {
                  q: "What is the best time to visit Malta?",
                  a: "April to June (warm, not scorching, off-peak prices) and September to October (sea still warm, crowds gone, lampuka season) are ideal. July and August are very hot (35\u00b0C+) and extremely crowded at the Blue Lagoon. Winter is mild (15\u201318\u00b0C) and very quiet \u2014 great for history and culture but not for swimming.",
                },
                {
                  q: "Can you do Malta without a car?",
                  a: "Absolutely. The public bus network covers the entire island with reliable, cheap \u20ac1.50 flat-fare buses. The ferries to Comino and Gozo are easy to reach by bus. Valletta, Mdina, and the Three Cities are all walkable. A car is useful only for independent access to Gozo or the very south of the island.",
                },
                {
                  q: "How do I book the Hypogeum?",
                  a: "Book online at heritagemalta.mt as far in advance as possible \u2014 ideally 3 to 6 months before your visit. Only 80 visitors are allowed per day in timed slots. Summer slots sell out fastest. Check regularly for cancellations if your preferred date is full. The \u20ac40 entry fee is well worth it for one of the most extraordinary archaeological sites on Earth.",
                },
                {
                  q: "Is Malta expensive?",
                  a: "Malta is moderately priced by European standards. Budget travellers can manage comfortably on \u20ac55 per day (hostel, bus, pastizzi and local restaurants). Mid-range is around \u20ac120 per day. It is cheaper than Italy, France, or Spain for equivalent quality, and the flat \u20ac1.50 bus fare keeps transport costs very low.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Malta trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-malta", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/malta-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-malta", label: "How to get there", icon: "✈️" },
                { href: "/blog/malta-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="malta-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Mediterranean Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Sicily in 7 Days &mdash; Palermo to Taormina", href: "/blog/sicily-7-days" },
                { label: "Rome in 4 Days &mdash; Colosseum to Trastevere", href: "/blog/rome-4-days" },
                { label: "Athens in 3 Days &mdash; Acropolis &amp; Islands", href: "/blog/athens-3-days" },
                { label: "Dubrovnik in 4 Days &mdash; Walls &amp; Islands", href: "/blog/dubrovnik-4-days" },
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
                  <span className="text-xs text-muted">Read &rarr;</span>
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
