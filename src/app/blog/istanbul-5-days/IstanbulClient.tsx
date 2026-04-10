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
const ISTANBUL_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Istanbul Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "5-Day Itinerary" },
  { id: "landmarks",  emoji: "🕌",  label: "Landmark Guide" },
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
          href: `mailto:?subject=Istanbul 5-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Istanbul in 5 Days — Hagia Sophia, Bosphorus and the Grand Bazaar&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/istanbul-5-days"
        imageUrl="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=80"
        description="Istanbul in 5 Days: Hagia Sophia, Grand Bazaar, Bosphorus cruise, Kadikoy, Princes Islands — complete travel guide with budget breakdown."
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
export default function IstanbulClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={ISTANBUL_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Istanbul" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="istanbul hagia sophia blue mosque bosphorus turkey skyline"
            fallback="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1600&q=80"
            alt="Istanbul Hagia Sophia and Blue Mosque skyline across the Bosphorus Turkey"
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
              <span className="text-white/70">Istanbul 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Europe &amp; Asia
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">15 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Istanbul in 5 Days:
                <em className="italic text-amber-300"> Hagia Sophia, the Bosphorus &amp; the Grand Bazaar</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The only city on two continents — 1,500 years of Byzantine and Ottoman glory, 4,000 shops in one bazaar, and a ferry from Europe to Asia for 50 cents. The complete guide.
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
              <span>🇹🇷 Turkey</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From ₺500/day (~$16)</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The only city on two continents — Hagia Sophia&apos;s dome has stood for 1,500 years, the Grand Bazaar has 4,000 shops across 61 streets, and the Bosphorus ferry from Europe to Asia costs 50 cents. Istanbul is ancient Rome, Byzantine Empire, and Ottoman glory compressed into one city that never sleeps.
            </p>
          </blockquote>

          {/* ── WHAT ISTANBUL ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Istanbul Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Istanbul has been the capital of three empires — Roman, Byzantine, and Ottoman. It&apos;s the only major city that physically sits on two continents, split by the Bosphorus strait connecting the Black Sea to the Sea of Marmara. The European side holds the historic peninsula (Sultanahmet, the Grand Bazaar, Hagia Sophia) and the modern neighborhoods (Beyoglu, Galata, Karakoy). The Asian side (Kadikoy, Uskudar) is where Istanbulites actually live — less tourist infrastructure, better food, more authentic neighborhoods.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The scale of Istanbul&apos;s history is staggering. Hagia Sophia was the largest cathedral in the world for nearly a thousand years before becoming a mosque, then a museum, then a mosque again. The Grand Bazaar has operated continuously since 1461 — 4,000 shops across 61 covered streets. Topkapi Palace was the administrative center of an empire that stretched from Vienna to Yemen. The city&apos;s population today is over 16 million, making it the largest city in Europe by a wide margin.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              What surprises most visitors is how affordable Istanbul is compared to European capitals. A full day of sightseeing, meals, and transport can cost under $30. The Istanbulkart transit card works on every metro, tram, bus, and ferry in the city, and a cross-continental ferry ride costs about ₺30 (~$1). Five days gives you enough time to cover both sides of the Bosphorus without rushing.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="IST" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Jun" />
              <StatCard icon="🗓" label="Duration" value="5 Days" />
              <StatCard icon="💰" label="Budget From" value="₺500/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Istanbul</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌷",
                  t: "Spring — Best Season",
                  d: "18–25°C, ideal weather for walking the city all day. April brings the Istanbul Tulip Festival with millions of tulips across parks and boulevards. May and June are warm but not yet oppressively hot. Crowds are moderate outside of public holidays. The best window for most travellers.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🍂",
                  t: "Autumn — Excellent",
                  d: "18–24°C. The summer heat breaks in September and the city comes alive again. October is particularly beautiful — warm days, cool evenings, golden light on the Bosphorus. November gets rainier but hotel prices drop significantly. Second-best window.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🔥",
                  t: "Summer — Hot & Crowded",
                  d: "30–38°C with high humidity. The main sites (Hagia Sophia, Topkapi) are extremely crowded. Walking the hilly neighborhoods of Beyoglu and Galata in the midday heat is exhausting. If you must visit, start early and take the Bosphorus ferry for relief.",
                  b: "Not ideal",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Mar",
                  i: "❄️",
                  t: "Winter — Cold but Atmospheric",
                  d: "3–10°C with rain and occasional snow. Istanbul in light snow is genuinely magical — the minarets and domes dusted white, far fewer tourists, and prices at their lowest. The Grand Bazaar and covered sites are comfortable year-round. Pack layers and waterproof shoes.",
                  b: "Budget travellers",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Istanbul</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Istanbul Airport (IST) opened in 2019 and replaced the old Ataturk Airport. It&apos;s 40km northwest of the city center. The old Sabiha Gokcen Airport (SAW) on the Asian side is used by budget airlines. Most international flights land at IST.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚌",
                  t: "Havaist Bus (recommended budget)",
                  d: "Airport bus from IST to Taksim, Sultanahmet, or Kadikoy — ₺100 (~$3). Runs every 30 minutes, takes 60–90 minutes depending on traffic. Buy ticket at the Havaist counter in the arrivals hall or pay with Istanbulkart. Reliable and comfortable.",
                  b: "Best value",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚇",
                  t: "Metro (M11 Airport Line)",
                  d: "Metro from IST Airport to Gayrettepe station, then transfer to M2 metro or taxi to your hotel. Total cost ₺40 (~$1.30) with Istanbulkart. Takes about 45 minutes to Gayrettepe. The fastest option outside of rush hour.",
                  b: "Fastest & cheapest",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚕",
                  t: "Official Taxi",
                  d: "Metered taxis from IST to Sultanahmet cost ₺600–1,000 (~$20–33) depending on traffic. Use only the official taxi rank — avoid touts inside the terminal. Journey takes 45–75 minutes. Convenient if arriving late at night or with heavy luggage.",
                  b: "Convenient but expensive",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "💳",
                  t: "Istanbulkart (essential)",
                  d: "Buy an Istanbulkart at the airport kiosks or vending machines — ₺70 for the card, then load ₺100–200 for your stay. Works on every metro, tram, bus, ferry, and funicular in Istanbul. Saves 50% compared to single tickets. You will use this dozens of times in 5 days.",
                  b: "Must buy",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Istanbul Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Budget-focused itinerary with real prices in Turkish Lira (₺) and approximate USD equivalents. Each day card is expandable. Two major sites per day is the right pace — Istanbul rewards slow exploration.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Sultanahmet: Hagia Sophia, Blue Mosque & Grand Bazaar"
                cost="₺400–500 (~$13–16)"
                items={[
                  "9:00am — Hagia Sophia (free entry since 2020, now a mosque — cover hair/shoulders). Arrive before 10am to avoid crowds. The dome is 55 metres high and has stood since 537 AD.",
                  "10:30am — Blue Mosque exterior (free) — actually called Sultan Ahmed Mosque, the blue Iznik tiles are inside. Remove shoes at the entrance.",
                  "11:30am — Basilica Cistern (₺250 / ~$8) — 6th century underground reservoir with 336 marble columns reflected in water. The two Medusa head column bases are the highlight.",
                  "1:00pm — Lunch: Simit (sesame bread ring) from street cart ₺10, ayran ₺15, baklava ₺25. Total: under ₺50 (~$1.60).",
                  "2:30pm — Grand Bazaar (free to enter) — get lost for 2 hours. 4,000 shops across 61 streets. Buy Turkish delight, spices, ceramics. Bargain hard — start at 40% of the asking price.",
                  "5:00pm — Spice Bazaar (Egyptian Bazaar) — smaller, better quality than Grand Bazaar for spices and lokum (Turkish delight).",
                  "7:00pm — Sunset from Galata Bridge walkway (free). Watch 100+ fishermen casting lines over the Golden Horn as mosques glow behind them.",
                  "8:30pm — Dinner at a lokanta (cafeteria) in Eminonu — doner, pilav, salad for ₺80 (~$2.60).",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Topkapi Palace & Bosphorus Ferry"
                cost="₺600–700 (~$20–23)"
                items={[
                  "9:00am — Topkapi Palace (₺500 entry + ₺300 for Harem / ~$16 + $10) — 400 years of Ottoman sultans lived here. The Harem is a separate ticket and worth every lira. Allow 3–4 hours minimum.",
                  "12:00pm — Lunch at a Sultanahmet restaurant — kofte (meatballs) and bread for ₺120 (~$4).",
                  "2:00pm — Bosphorus ferry from Eminonu (₺30 / ~$1 one way on the public ferry, not the tourist boat). Passes under two continental bridges, 90 minutes each way. The best $1 experience in Istanbul.",
                  "Get off at Anadolu Kavagi on the Asian side — walk up to Yoros Castle ruins for panoramic views, then fresh fish at a waterfront restaurant.",
                  "6:00pm — Return ferry to Eminonu. The sunset return ride is the most photogenic moment of the trip.",
                  "8:00pm — Karakoy neighborhood for dinner — modern Istanbul restaurants and meze bars, ₺150–200 (~$5–7).",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Asian Side: Kadikoy & Princes Islands"
                cost="₺400–500 (~$13–16)"
                items={[
                  "Take the ferry from Eminonu or Besiktas to Kadikoy (Asian Istanbul) — ₺30 (~$1). Kadikoy is where Istanbulites shop, eat, and socialise away from tourists.",
                  "Walk through Kadikoy market — better food, lower prices, completely local atmosphere. Fresh produce, fish, olives, cheese — this is the real Istanbul food scene.",
                  "Lunch at Ciya Sofrasi — Istanbul's most famous lokanta, run by Musa Dagdeviren. Queue up, it's worth it. Regional Anatolian dishes you won't find anywhere else. ₺100–200 (~$3–7).",
                  "Afternoon: Take the ferry to Buyukada (Princes Islands, ₺60 return / ~$2) — no cars allowed, horse carriages through Victorian villas and pine forests. A completely different world 90 minutes from the city center.",
                  "Swim at Buyukada beaches or rent a bicycle (₺100/hr / ~$3) to circle the island.",
                  "Return to Istanbul by ferry for dinner — the evening crossing back gives views of the lit-up city skyline.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Beyoglu: Galata Tower, Istiklal Avenue & Fish Sandwich"
                cost="₺400–500 (~$13–16)"
                items={[
                  "10:00am — Galata Tower (₺300 / ~$10) — 360-degree views of both sides of the Bosphorus from the 14th-century Genoese tower. The best panorama in Istanbul.",
                  "11:30am — Walk through Galata neighborhood — independent coffee shops, artisan workshops, street art. Istanbul's most creative district.",
                  "1:00pm — Istiklal Avenue — 1.5km pedestrian street with 3 million visitors per day. Walk it for the atmosphere, don't shop it. Ride the historic red tram (₺7 with Istanbulkart).",
                  "2:30pm — Cukurcuma antique district (uphill from Istiklal) — Ottoman furniture, old maps, vintage cameras, and the Museum of Innocence.",
                  "5:00pm — Taksim Square and Gezi Park — the heart of modern Istanbul.",
                  "8:00pm — Balik-ekmek (fish sandwich) from the boats at Eminonu, ₺40 (~$1.30). The most famous street food in Istanbul — grilled mackerel in bread, eaten on the waterfront.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Dolmabahce Palace & Bosphorus Villages"
                cost="₺600–700 (~$20–23)"
                items={[
                  "9:00am — Dolmabahce Palace (₺800 / ~$26) — 19th century Ottoman-European palace directly on the Bosphorus shore. 285 rooms, 46 reception halls, the largest Bohemian crystal chandelier in the world. Completely different aesthetic from Topkapi.",
                  "12:00pm — Besiktas fish market for lunch — fresh meze and fried fish, ₺150 (~$5). More local than any Sultanahmet restaurant.",
                  "2:00pm — Walk along the Bosphorus shore north through Ortakoy — the Ortakoy Mosque with the Bosphorus Bridge behind it is one of Istanbul's most photographed scenes.",
                  "Ortakoy kumpir (stuffed baked potato, ₺80 / ~$2.60) or waffle under the Bosphorus Bridge.",
                  "4:00pm — Continue to Bebek neighborhood — Istanbul's most beautiful residential area, waterfront tea gardens, upscale cafes along the Bosphorus.",
                  "7:30pm — Final dinner: Balik (fish) restaurant in Arnavutkoy — fresh Bosphorus fish in a historic waterfront neighborhood. A proper Istanbul farewell. ₺200–400 (~$7–13).",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Istanbul" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🕌 Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential landmarks in priority order. Entry fees as of early 2026 — note that Hagia Sophia became free when it was reconverted to a mosque.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Hagia Sophia",
                  e: "Free (mosque)",
                  d: "Built in 537 AD as a cathedral, converted to a mosque in 1453, became a museum in 1934, reconverted to a mosque in 2020. The dome is 55 metres high and was the largest in the world for nearly 1,000 years. Free entry but dress modestly — head coverings required for women (provided at the door). Arrive before 10am or after 4pm to avoid peak crowds.",
                  t: "Must see · 1–1.5 hrs",
                },
                {
                  n: "Blue Mosque (Sultan Ahmed)",
                  e: "Free",
                  d: "The only mosque in Istanbul with six minarets. The interior is covered in 20,000 handmade Iznik tiles in blue and white patterns. Built 1609–1616 to rival Hagia Sophia directly across the square. Closed during prayer times (5 times daily, ~30 min each). Remove shoes, cover shoulders and knees.",
                  t: "Must see · 45 min",
                },
                {
                  n: "Topkapi Palace",
                  e: "₺500 + ₺300 Harem (~$16 + $10)",
                  d: "The primary residence of Ottoman sultans for 400 years. Four courtyards, the Imperial Treasury (including the 86-carat Spoonmaker's Diamond), the Harem with 400 rooms, and Prophet Muhammad's relics. The Harem is a separate ticket and absolutely worth it. Allow 3–4 hours minimum.",
                  t: "Must see · 3–4 hrs",
                },
                {
                  n: "Grand Bazaar (Kapali Carsi)",
                  e: "Free entry",
                  d: "Operating continuously since 1461. Over 4,000 shops across 61 covered streets. Leather goods, jewelry, ceramics, textiles, spices, Turkish delight. Bargain hard — the initial price is typically 3x the real price. Closed Sundays. Best visited in the morning when shopkeepers are less aggressive.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Galata Tower",
                  e: "₺300 (~$10)",
                  d: "14th-century Genoese watchtower with a 360-degree observation deck. The best panoramic view in Istanbul — you can see both continents, the Golden Horn, and the Sea of Marmara. Built in 1348. The surrounding Galata neighborhood is one of Istanbul's most walkable areas.",
                  t: "Must see · 1 hr",
                },
                {
                  n: "Basilica Cistern",
                  e: "₺250 (~$8)",
                  d: "Underground water reservoir built in 532 AD with 336 marble columns. Atmospheric lighting reflects in the shallow water. Two columns rest on carved Medusa heads — no one knows why they were placed upside-down and sideways. Recently renovated with improved walkways and lighting.",
                  t: "Worth it · 45 min",
                },
                {
                  n: "Dolmabahce Palace",
                  e: "₺800 (~$26)",
                  d: "19th-century Ottoman palace built in European Baroque and Rococo style on the Bosphorus shore. 285 rooms including Ataturk's deathbed (the clocks in the palace are stopped at 9:05am, the time of his death). A complete contrast to Topkapi's Ottoman Islamic style.",
                  t: "Worth it · 2–3 hrs",
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
            title="Istanbul — Where Two Continents Meet"
            subtitle="Byzantine domes, Ottoman minarets, and the Bosphorus strait dividing Europe from Asia."
            spots={[
              {
                name: "Hagia Sophia",
                query: "hagia sophia istanbul interior dome turkey mosque",
                desc: "The 55-metre dome of Hagia Sophia — the world's largest cathedral for nearly 1,000 years, now a functioning mosque.",
              },
              {
                name: "Grand Bazaar",
                query: "grand bazaar istanbul kapali carsi covered market turkey",
                desc: "The covered streets of the Grand Bazaar — 4,000 shops operating continuously since 1461.",
              },
              {
                name: "Bosphorus Strait",
                query: "bosphorus strait istanbul ferry turkey europe asia skyline",
                desc: "The Bosphorus strait dividing Europe from Asia — crossed by ferry for $1, framed by palaces and mosques.",
              },
              {
                name: "Galata Tower View",
                query: "galata tower istanbul panorama bosphorus golden horn turkey",
                desc: "The 360-degree view from the 14th-century Galata Tower across the Golden Horn to Sultanahmet.",
              },
              {
                name: "Blue Mosque at Sunset",
                query: "blue mosque istanbul sultan ahmed sunset minarets turkey",
                desc: "The six minarets of the Blue Mosque at sunset — the only mosque in Istanbul with six minarets.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Istanbul is remarkably affordable compared to other European capitals. The Turkish Lira&apos;s depreciation means your dollars, euros, and pounds go very far. All prices in Turkish Lira with approximate USD equivalents at the 2026 rate of ~₺30 = $1.
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
                    ["🏨 Accommodation", "₺300–600 (~$10–20)", "₺1,500–3,000 (~$50–100)", "₺5,000–15,000 (~$165–500)"],
                    ["🍽 Food", "₺150–300 (~$5–10)", "₺500–1,000 (~$17–33)", "₺2,000–5,000 (~$65–165)"],
                    ["🚇 Transport", "₺50–100 (~$2–3)", "₺200–400 (~$7–13)", "₺1,000–3,000 (~$33–100)"],
                    ["🏛️ Activities", "₺200–500 (~$7–17)", "₺500–1,000 (~$17–33)", "₺1,000–5,000 (~$33–165)"],
                    ["TOTAL (per day)", "₺700–1,500 (~$23–50)", "₺2,700–5,400 (~$90–180)", "₺9,000–28,000 (~$300–930)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (₺700–1,500/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in hostels or budget hotels in Sultanahmet or Beyoglu (₺300–600/night), eat at lokantas and street carts, use Istanbulkart for all transport. A genuinely comfortable budget trip — Istanbul&apos;s street food is among the best in the world.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range (₺2,700–5,400/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique hotel in Galata or Beyoglu (₺1,500–3,000/night), guided tours of major sites, meze dinners at respected restaurants, and Bosphorus lunch cruises. The sweet spot for comfort and value.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (₺9,000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Four Seasons Sultanahmet or Ciragan Palace Kempinski, private yacht Bosphorus cruise, Michelin dining at Mikla and Neolokal, private guides and after-hours hamam experiences.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Istanbul</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Your neighborhood choice matters more than your hotel choice. Sultanahmet is convenient for the historic sites but touristy. Beyoglu/Galata has the best food and nightlife. Kadikoy is the local&apos;s choice on the Asian side. Taksim is central but lacks character.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Sultanahmet",
                  type: "Historic peninsula · Walking distance to Hagia Sophia, Blue Mosque, Grand Bazaar",
                  price: "₺400–5,000/night",
                  badge: "Best for sightseeing",
                  desc: "The obvious choice for first-time visitors — everything from hostels to luxury hotels within walking distance of the major sites. Downside: very touristy, restaurants are overpriced, and it shuts down after 10pm. Stay here if the historic sites are your priority.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Beyoglu / Galata",
                  type: "Creative district · Best restaurants, cafes, nightlife, Galata Tower",
                  price: "₺600–6,000/night",
                  badge: "Best overall",
                  desc: "Istanbul&apos;s most vibrant neighborhood for food, coffee, art galleries, and evening atmosphere. Galata Tower is your backyard. Easy tram access to Sultanahmet (15 min). The best balance of location, character, and dining options for most travellers.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Kadikoy (Asian Side)",
                  type: "Local neighborhood · Best food market, authentic atmosphere, ferry access",
                  price: "₺300–3,000/night",
                  badge: "Most authentic",
                  desc: "Where Istanbulites actually live. The Kadikoy market is the best food market in the city. Much cheaper than the European side, with far fewer tourists. The ferry to Eminonu takes 20 minutes and costs ₺30. Stay here if you want the real Istanbul experience.",
                  color: "border-green-200 bg-green-50",
                },
                {
                  name: "Taksim",
                  type: "Central hub · Transport connections, Istiklal Avenue, hotels at every price point",
                  price: "₺500–8,000/night",
                  badge: "Most convenient",
                  desc: "The transport hub of Istanbul — metro, buses, and the funicular to Kabatas connect here. Istiklal Avenue starts at Taksim. Practical but lacking the character of Galata or Kadikoy. Best for short stays where transit access matters most.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Besiktas / Ortakoy",
                  type: "Bosphorus waterfront · Local vibe, football atmosphere, scenic walking",
                  price: "₺500–4,000/night",
                  badge: "Bosphorus access",
                  desc: "Waterfront neighborhood with the Bosphorus at your doorstep. Besiktas fish market, the Ortakoy mosque, and walking distance to Dolmabahce Palace. A local neighborhood with good ferry connections to the Asian side.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Istanbul</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Istanbul&apos;s food scene is one of the great culinary experiences in the world. The rule: eat where locals eat, not where tourists eat. Sultanahmet restaurant prices are 3–5x higher than the same food in Kadikoy or Besiktas.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Ciya Sofrasi (Kadikoy)",
                  t: "Regional Anatolian · Kadikoy market area",
                  d: "Istanbul's most celebrated lokanta. Musa Dagdeviren serves regional dishes from across Anatolia that you genuinely cannot find anywhere else — southeastern kebabs, Black Sea greens, Aegean herbs. Queue at the steam counter, point at what looks good. ₺100–200 (~$3–7). Worth the ferry ride to the Asian side alone.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Karakoy Gulluoglu",
                  t: "Baklava specialist · Karakoy waterfront",
                  d: "The Istanbul branch of the legendary Gaziantep baklava family. This is widely considered the best baklava in Istanbul — thin, crisp, not too sweet, with proper Antep pistachios. ₺50–100 (~$2–3) for a generous portion. Go for breakfast with Turkish tea.",
                  b: "Best baklava",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Balik-ekmek boats (Eminonu)",
                  t: "Street food · Eminonu waterfront by Galata Bridge",
                  d: "Grilled mackerel sandwich served from boats bobbing in the Golden Horn. ₺40 (~$1.30). Eat it sitting on the waterfront with the view of the bridge and Galata Tower. The most iconic street food in Istanbul — served at this exact spot for decades.",
                  b: "Iconic street food",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Mandabatmaz",
                  t: "Turkish coffee · Off Istiklal Avenue",
                  d: "A tiny standing-room coffee spot that serves what many consider the best Turkish coffee in Istanbul. Thick, perfectly balanced, served with a glass of water and lokum. ₺30 (~$1). The experience is the ritual: order, wait, sip slowly while the grounds settle.",
                  b: "Best coffee",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  n: "Lokantas in Besiktas & Fatih",
                  t: "Traditional Turkish · Local neighborhoods",
                  d: "A lokanta is a steam-table cafeteria serving home-style Turkish food — stews, grilled meats, rice, salads, soups. Point at what you want. A full meal costs ₺60–120 (~$2–4). Besiktas and Fatih have the best concentration of lokantas away from tourist areas.",
                  b: "Best value",
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
            destination="Istanbul Turkey"
            hotels={[
              {
                name: "Four Seasons Sultanahmet",
                type: "Luxury · Converted 19th-century prison",
                price: "From ₺15,000/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/tr/four-seasons-istanbul-sultanahmet.html?aid=2820480",
              },
              {
                name: "Hotel Ibrahim Pasha",
                type: "Boutique · Sultanahmet, Hippodrome view",
                price: "From ₺3,000/night",
                rating: "4",
                badge: "Best value luxury",
                url: "https://www.booking.com/hotel/tr/ibrahim-pasha.html?aid=2820480",
              },
              {
                name: "The Bank Hotel Istanbul",
                type: "Design hotel · Galata/Karakoy",
                price: "From ₺4,000/night",
                rating: "5",
                badge: "Best location",
                url: "https://www.booking.com/hotel/tr/the-bank-istanbul.html?aid=2820480",
              },
              {
                name: "Cheers Hostel",
                type: "Budget · Sultanahmet, rooftop terrace with Bosphorus view",
                price: "From ₺400/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/tr/cheers-hostel-istanbul.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Bosphorus Cruise & Two Continents",
                duration: "3 hrs",
                price: "From ₺500/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=istanbul+bosphorus+cruise&partner_id=PSZA5UI",
              },
              {
                name: "Hagia Sophia & Topkapi Guided Tour",
                duration: "5 hrs",
                price: "From ₺1,200/person",
                badge: "Best guided",
                url: "https://www.getyourguide.com/s/?q=istanbul+hagia+sophia+topkapi+tour&partner_id=PSZA5UI",
              },
              {
                name: "Turkish Cooking Class",
                duration: "4 hrs",
                price: "From ₺800/person",
                url: "https://www.getyourguide.com/s/?q=istanbul+cooking+class&partner_id=PSZA5UI",
              },
              {
                name: "Traditional Hamam Experience",
                duration: "2 hrs",
                price: "From ₺500/person",
                url: "https://www.getyourguide.com/s/?q=istanbul+hamam+bath&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Istanbul</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🔄",
                  title: "Doing everything in Sultanahmet",
                  desc: "Sultanahmet has the monuments but not the soul of Istanbul. The best neighborhoods — Karakoy, Kadikoy, Beyoglu, Ortakoy — are where real Istanbul life happens. Spend at least 2 of 5 days on the Asian side and in Beyoglu.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🚕",
                  title: "Taking official airport taxis",
                  desc: "Istanbul Airport is 40km from the city center. Official taxis cost ₺600–1,000 (~$20–33). The Havaist airport bus (₺100 / ~$3) or Metro M11 (₺40 / ~$1.30) are much cheaper and only slightly longer. Save the taxi money for a Bosphorus dinner.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🎭",
                  title: "Buying carpets near Hagia Sophia",
                  desc: "The carpet shops near the major sights offer chai and friendly conversation which leads to high-pressure sales with grossly inflated prices. If you want a genuine Turkish carpet, research dealers in the Grand Bazaar interior with receipts and shipping guarantees.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "⏰",
                  title: "Scheduling too many sites per day",
                  desc: "Topkapi Palace alone takes 3–4 hours if you do it properly including the Harem. Hagia Sophia is an hour minimum. Planning 4 monuments in one day means you rush everything and exhaust yourself. Two major sites per day is the right pace for Istanbul.",
                  color: "bg-pink-50 border-pink-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Istanbul</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "⛴️",
                  title: "The Bosphorus ferry costs 50 cents",
                  desc: "The public ferry from Eminonu to Kadikoy (Asian side) costs ₺30 (~$1) and takes 20 minutes across the strait dividing two continents. It's the best value experience in Istanbul — run by IDO and TURYOL. Use your Istanbulkart and ride it at sunset.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🥐",
                  title: "Simit from a street cart, not a bakery",
                  desc: "The sesame-crusted bread rings sold from carts by simit sellers are ₺10 fresh and hot. The same simit in a cafe near Hagia Sophia costs ₺50. Street cart at 8am with tea from a cayci (tea seller) is the authentic Istanbul breakfast for under ₺20.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🌉",
                  title: "Galata Bridge fishermen at sunset",
                  desc: "Every evening, 100+ fishermen line the Galata Bridge over the Golden Horn. Watch them fish while the mosques glow behind them and ferries pass below. Completely free, incredibly photogenic. The restaurants under the bridge serve fresh fish but are overpriced — eat elsewhere.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "☕",
                  title: "Turkish coffee is a ritual",
                  desc: "Order Turk kahvesi at Mandabatmaz near Istiklal or Hafiz Mustafa in Sultanahmet. It arrives with a glass of water and often lokum (Turkish delight). Drink slowly, let the grounds settle, and never drain the last sip. Ask for sade (no sugar), orta (medium), or sekerli (sweet).",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "💳",
                  title: "Withdraw TRY from ATMs, not exchange offices",
                  desc: "Garanti and Isbank ATMs give the best exchange rates for foreign cards. The airport exchange offices and tourist-area money changers give terrible rates. Withdraw Turkish Lira in bulk (₺1,000–2,000) to minimize transaction fees. Most shops accept cards but small vendors are cash only.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🕌",
                  title: "Mosque prayer times affect your schedule",
                  desc: "Hagia Sophia and the Blue Mosque close to tourists during the five daily prayer times (~30 minutes each). Check prayer times on the day and plan around them. Friday midday prayer is the longest closure. Arrive between prayers for uninterrupted visits.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Istanbul" />

          {/* Combine With */}
          <CombineWith currentSlug="istanbul-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Istanbul safe for tourists?",
                  a: "Istanbul is generally safe for tourists. The main areas (Sultanahmet, Beyoglu, Karakoy, Kadikoy) are well-policed and heavily visited. Petty theft exists in crowded areas like the Grand Bazaar and Istiklal Avenue. The main issue is tourist scams — carpet shop pressure tactics and inflated prices near monuments. Use common sense and you'll be fine.",
                },
                {
                  q: "How long should I spend in Istanbul?",
                  a: "5 days is ideal for a first visit — enough to cover the main sights, explore neighborhoods on both sides of the Bosphorus, and discover local spots. 3 days is possible but rushed. 7+ days lets you explore the Princes' Islands properly and take day trips to Bursa or Edirne.",
                },
                {
                  q: "What is the best time to visit Istanbul?",
                  a: "April to June and September to November. Weather is ideal (18–25°C), crowds are manageable, and the city is in full swing. July and August are very hot (30–38°C) and crowded. December to February is cold but cheap, and Istanbul in light snow is magical.",
                },
                {
                  q: "Do I need to cover up in mosques in Istanbul?",
                  a: "Yes — for both men and women. At Hagia Sophia and Blue Mosque, women must cover their hair (scarves provided at the entrance), and both men and women must cover shoulders and knees. Remove shoes before entering prayer halls. Head coverings are available free of charge at the entrance to major mosques.",
                },
                {
                  q: "What currency should I use in Istanbul?",
                  a: "Turkish Lira (TRY). Most establishments also accept EUR and USD, but the exchange rate given is usually poor. Withdraw TRY from ATMs — Garanti or Isbank give the best rates. Avoid exchanging money at the airport where rates are significantly worse.",
                },
                {
                  q: "Do I need a visa for Istanbul?",
                  a: "Most nationalities need an e-Visa ($60 USD, instant to 24 hours processing) — apply at evisa.gov.tr before your trip. Some nationalities (Japan, Korea, Singapore) get 90 days visa-free. Most EU citizens get visa-free entry or need an e-Visa depending on nationality. Indian passport holders need an e-Visa for a 30-day single entry stay.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Istanbul trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-istanbul", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/istanbul-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-istanbul", label: "How to get there", icon: "✈️" },
                { href: "/blog/istanbul-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="istanbul-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Mediterranean &amp; Middle East Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Cappadocia in 3 Days — Balloons &amp; Cave Hotels", href: "/blog/cappadocia-3-days" },
                { label: "Athens 3 Days — Acropolis &amp; Islands", href: "/blog/athens-3-days" },
                { label: "Dubai 4 Days — Desert &amp; Skyline", href: "/blog/dubai-4-days" },
                { label: "Rome 4 Days — Colosseum to Vatican", href: "/blog/rome-4-days" },
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
