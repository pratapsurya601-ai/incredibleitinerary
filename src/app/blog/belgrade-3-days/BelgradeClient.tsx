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
const BELGRADE_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Belgrade Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",  emoji: "🏛️", label: "Landmark Guide" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",        emoji: "🍖",  label: "Where to Eat" },
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
          href: `mailto:?subject=Belgrade 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Belgrade in 3 Days — Kalemegdan, splavovi nightlife and the most affordable capital in Europe&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/belgrade-3-days"
        imageUrl="https://images.unsplash.com/photo-1555990793-da11153b2473?w=1200&q=80"
        description="Belgrade in 3 Days: Kalemegdan Fortress, Skadarlija bohemian quarter, St Sava Temple, Tesla Museum, and splavovi nightlife — complete budget travel guide from $30/day."
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
export default function BelgradeClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BELGRADE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Belgrade" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="belgrade serbia kalemegdan fortress danube sava nightlife"
            fallback="https://images.unsplash.com/photo-1555990793-da11153b2473?w=1600&q=80"
            alt="Belgrade Serbia Kalemegdan Fortress overlooking confluence of Danube and Sava rivers"
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
              <span className="text-white/70">Belgrade 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-red-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Europe&apos;s Best Value Capital
                </span>
                <span className="text-white/60 text-xs">January 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Belgrade in 3 Days:
                <em className="italic text-red-300"> Fortress, Splavovi &amp; the Balkans&apos; Most Alive City</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                A fortress rebuilt 38 times, river-boat clubs that don&apos;t open until 1am, rakija before hello, and a budget from $30/day. Europe&apos;s most underrated capital, complete guide.
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
              <span>🇷🇸 Belgrade, Serbia</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From $30/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-red-500 pl-6 mb-10 bg-red-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Belgrade is the city that has been destroyed and rebuilt 38 times, that sits at the meeting of two great rivers, that gave the world its wildest nightlife, its cheapest good wine, and its most generous hospitality. It is extraordinarily affordable, it is unlike anything else in Europe, and almost nobody goes there — which is exactly why you should.
            </p>
          </blockquote>

          {/* ── WHAT BELGRADE ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Belgrade Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Belgrade (Beograd in Serbian — literally &quot;White City&quot;) is one of the oldest continuously inhabited cities in Europe, with settlements dating back more than 7,000 years. The strategic location at the confluence of the Sava and Danube rivers made it the most fought-over city on the continent: Celtic, Roman, Byzantine, Bulgarian, Hungarian, Ottoman, Habsburg, and Yugoslav — every major power in European history has held it, lost it, and often demolished it. The result is a city that has built and rebuilt its identity so many times that it has become something almost impossible to categorise.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              It is not a museum city. There are no perfectly preserved medieval streets, no UNESCO old towns with amber lighting and velvet ropes. What Belgrade has instead is a raw, unapologetic energy — wide boulevards, enormous brutalist apartment blocks standing next to Austro-Hungarian facades, Kalemegdan Fortress rising over the rivers like an 8th-century sentinel, the vast unfinished golden domes of St Sava Temple, and the splavovi: a fleet of floating river-boat clubs moored along the Sava that represent one of the strangest and most extraordinary nightlife cultures in the world.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              And it is very, very affordable. Budget travellers regularly report comfortable days on $30–40 including accommodation, food, entry fees, and a couple of drinks. Even mid-range travel in Belgrade costs roughly half what the same experience would cost in Prague or Vienna. This is a genuinely rare thing in modern Europe: a major capital city where your money goes far.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="BEG" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Oct" />
              <StatCard icon="🏰" label="Fortress rebuilt" value="38 times" />
              <StatCard icon="💰" label="Budget From" value="$30/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Belgrade</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌸",
                  t: "Spring — Ideal",
                  d: "18–28°C, outdoor terraces open across the city, the splavovi season begins in earnest. May is perfect: warm enough for Ada Ciganlija beach, not too crowded, and EXIT Festival preparations give the city extra energy. This is the best window for first-time visitors.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul–Aug",
                  i: "☀️",
                  t: "Summer — Peak Season",
                  d: "28–38°C, Ada Ciganlija beach at full capacity, outdoor bars everywhere, and Belgrade&apos;s famous summer festivals including EXIT (Novi Sad, July). The city is at maximum energy but accommodation prices rise. Still very affordable by European standards.",
                  b: "Busiest season",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Autumn — Golden Season",
                  d: "15–25°C, the summer crowds thin, the terraces remain open through October, and the autumn light on Kalemegdan is exceptional. September is arguably the best single month to visit: good weather, manageable crowds, and the city&apos;s cultural season in full swing.",
                  b: "Best overall",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Mar",
                  i: "❄️",
                  t: "Winter — Cosy Kafana Season",
                  d: "0–10°C, grey and cold, but Belgrade&apos;s kafana (traditional taverna) culture is at its most atmospheric. The splavovi largely close, but the indoor club scene is active. Accommodation is cheapest in winter. Christmas markets and Orthodox Christmas (January 7) add character.",
                  b: "Budget season",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Belgrade</h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-red-800 font-light">
                <strong className="font-medium">Key detail:</strong> Belgrade&apos;s airport is <strong className="font-medium">Nikola Tesla Airport (BEG)</strong>, 18km from the city centre. Serbia uses the <strong className="font-medium">Serbian Dinar (RSD)</strong> — not euros. €1 ≈ 117 RSD. Withdraw dinars from ATMs at the airport or in the city.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly into BEG (Nikola Tesla Airport)",
                  d: "Direct flights from London, Paris, Frankfurt, Amsterdam, Vienna, Istanbul, and most European hubs. Air Serbia is the national carrier with good regional connections. From the airport: taxi to centre (agree price before — around 2,500–3,000 RSD / ~$25), or take the BEG Bus (line A1, 300 RSD, 30 mins) to Republic Square.",
                  b: "Main gateway",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🇮🇳",
                  t: "From India — via Istanbul or Vienna",
                  d: "No direct flights from India. Best connections: Turkish Airlines via Istanbul (often the best value, 12–16 hrs total), Austrian Airlines via Vienna, or Air India via Frankfurt. Turkish Airlines via Istanbul typically offers the best price-to-convenience ratio for Indian travellers.",
                  b: "Indian travellers",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "By bus from regional Balkans cities",
                  d: "Excellent bus connections to Sarajevo (5 hrs, €15–20), Sofia (5 hrs, €12–18), Skopje (4.5 hrs, €10–15), and Zagreb (6 hrs, €15–25). All buses depart from BAS Bus Station (Beogradska Autobuska Stanica). Very comfortable FlixBus and local operators serve these routes.",
                  b: "Regional travel",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚇",
                  t: "Getting around Belgrade — tram system",
                  d: "Belgrade has an extensive tram network covering the centre, plus buses and trolleybuses. Single ticket: 89 RSD (~$0.75) from the driver, or buy a BusPlus card for cheaper fares. Taxis are metered and cheap — a 20-minute ride costs ~500–800 RSD ($4–7). Use Pink Taxi or Car:Go app to avoid overcharging. Walking is excellent in the compact city centre.",
                  b: "Local transport",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Belgrade Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Three days covers Belgrade&apos;s essential highlights. Prices shown in both RSD and USD for reference. The itinerary is structured to give you the fortress in the morning, culture in the afternoon, and nights that go as late as you want.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Kalemegdan Fortress · Knez Mihailova · Skadarlija · Savamala Nightlife"
                cost="~3,500–5,000 RSD / ~$30–43"
                items={[
                  "8:00am: Kalemegdan Fortress — free entry to the park and outer fortifications. Start at the Victor (Pobednik) statue at the confluence of the Sava and Danube: a 14-metre bronze figure of a naked warrior, raised in 1928, staring west toward former enemies. The view from the ramparts over both rivers at this hour is one of the finest urban vistas in Europe.",
                  "Military Museum inside the fortress (400 RSD / $3.50) — 2,000 years of Belgrade&apos;s military history compressed into an impressive permanent collection. The outdoor display of tanks, artillery, and aircraft is free. Budget 45 minutes.",
                  "10:30am: Walk Knez Mihailova Street — Belgrade&apos;s main pedestrian boulevard running south from the fortress toward Republic Square. Free, lined with 19th-century Austro-Hungarian facades, street musicians, and excellent people-watching. The architecture tells the story of Serbia&apos;s transition from Ottoman province to independent kingdom.",
                  "12:30pm: Lunch on or near Knez Mihailova. Budget option: pljeskavica (Serbian mega-burger, 300–400g grilled meat in a lepinja flatbread with kajmak and ajvar) at a pljeskavičarnica — full meal 500–700 RSD ($4.50–6). One of the best things you will eat in Europe for this price.",
                  "2:00pm: Skadarlija bohemian quarter — a cobblestone street of preserved 19th-century kafanas (traditional tavernas) where Serbian poets, artists, and writers drank for 200 years. Đuro Jakšić, Serbia&apos;s most beloved poet, lived here. The two most famous kafanas — Tri Šešira (Three Hats) and Dva Jelena (Two Deer) — have live Serbian music in the evenings.",
                  "5:00pm: Republic Square and the National Museum (400 RSD / $3.50 entry) — a recently renovated world-class collection in an impressive 1905 building. The Roman and medieval Serbian collections are exceptional. Allow 1.5 hours.",
                  "Evening: Savamala arts district along the Sava — Belgrade&apos;s creative quarter, a transformed industrial area with galleries, concept stores, cocktail bars, and the street art that has made it internationally known. Start at Mikser House or a Dvorište (courtyard bar) for the first drink of the night.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="St Sava Temple · Nikola Tesla Museum · Zemun · Floating Clubs on the Sava"
                cost="~4,000–6,000 RSD / ~$34–51"
                items={[
                  "9:00am: Temple of Saint Sava — the largest Orthodox church in the Balkans and one of the largest in the world. Its exterior has been complete for decades but the interior gold mosaic programme, only begun in recent years, is still being installed: the largest mosaic cycle in the world when complete. Entry is free. Arrive early to see it without the tour groups.",
                  "Walk through Vračar neighbourhood — the tree-lined residential streets around St Sava Temple offer a very different Belgrade from the tourist centre: local cafés (coffee 100–150 RSD / $0.85–1.30), family restaurants, pharmacies, and daily life. This is where a lot of Belgradians actually live.",
                  "11:00am: Nikola Tesla Museum (600 RSD / $5.15) — small but genuinely excellent. Tesla&apos;s actual urn (containing his ashes) is here. The working Tesla coil demonstrations are theatrical and surprising. The archive of his original documents and patents is unmatched. English-language tours run at 10am, 12pm, and 4pm — aim for the guided tour.",
                  "1:00pm: Lunch in Vračar or Dorćol. Ćevapi — small grilled minced-meat sausages served with lepinja bread, raw onion, ajvar, and kajmak — is Belgrade&apos;s most essential food. A portion of 10 pieces with bread: 600–800 RSD ($5.15–6.85). Try Ćevabdžinica Žar or any small local ćevabdžinica.",
                  "3:00pm: Zemun — the former Austro-Hungarian town absorbed into greater Belgrade, with a completely different architectural character from the city centre. Take tram 15 or bus 706 (20 minutes, ~89 RSD). Climb Gardoš Tower (Millennium Tower) for panoramic views over the Danube. Walk the embankment along the river for the most atmospheric stretch of old Zemun.",
                  "Evening rest: essential if you plan to experience the splavovi (river-boat clubs). Belgrade nightlife runs on its own timezone — restaurants fill from 9pm, bars from 10pm, clubs from midnight. Do not attempt a splav before 1am. Take a 2-hour rest in the late afternoon.",
                  "Post-midnight: Splavovi on the Sava — the floating clubs moored along the riverbank between the bridges. Freestyler and Lasta are the most famous (turbo-folk and Serbian pop). Club 20/44 leans more techno and international. Cover charge: 500–1,000 RSD ($4.30–8.60). Drinks: 400–600 RSD per round. Go in a mixed group; dress well.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Ada Ciganlija Lake · Knez Mihailova Shopping · Rakija Tasting · Farewell Kafana Dinner"
                cost="~3,500–5,500 RSD / ~$30–47"
                items={[
                  "10:00am (later start after the splavovi): Ada Ciganlija — a river island in the Sava connected to both banks by dams, forming an artificial lake popular with Belgradians for swimming, jogging, cycling, and picnicking. Take tram 9 or bus 53 from the centre (20 minutes, 89 RSD). Free beach entry. Rent a bicycle on the island (350–500 RSD/hour) and cycle the 4km lake perimeter.",
                  "The Ada Ciganlija lake water is clean, the beaches are sandy, and on a summer weekend, you will see 100,000+ Belgradians here — it is genuinely one of the great urban beaches in Europe. Even outside peak summer, the waterfront path and the outdoor cafés make this a pleasant way to spend a morning.",
                  "1:00pm: Return to the centre. Final walk up Knez Mihailova to Republic Square — pick up souvenirs at the craft stalls or browse the excellent bookshops. Belgrade has a strong literary culture and second-hand bookshops with English-language sections are scattered throughout the centre.",
                  "2:30pm: Lunch at ? Kafana (Question Mark) — the oldest kafana in Belgrade, founded in 1823, so named because the Serbian Orthodox church objected to it being named after a saint. Traditional Serbian food: roasted lamb, prebranac (baked beans), and meza spreads. Mains 900–1,600 RSD ($7.70–13.70). The atmosphere is irreplaceable.",
                  "5:00pm: Optional — rakija tasting. Ask your accommodation to recommend a local bar or restaurant with a curated Serbian rakija selection. Šljivovica (plum), kajsijevača (apricot), kruška (pear), and lozovača (grape) are the main varieties. A tasting flight: 1,200–2,000 RSD ($10.30–17.10). This is one of the genuine cultural experiences Belgrade offers.",
                  "Final evening: Skadarlija for dinner with live music at Tri Šešira or Dva Jelena if you missed it on Day 1 — book ahead for evening. Or explore Dorćol neighbourhood for its lower-key bars and the neighbourhood feel that tourist-facing Savamala can sometimes lack.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Belgrade" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Belgrade Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential sites in priority order. Most entry fees are in RSD; approximate USD given for reference at ~117 RSD per dollar.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Kalemegdan Fortress",
                  e: "Free (park + outer) / 400 RSD Military Museum",
                  d: "The most important site in Belgrade — a fortress complex rebuilt across 38 destructions over 7,000 years of settlement. The Victor statue at the Danube-Sava confluence is the city&apos;s most iconic image. The outer walls, the rose garden, the chess tables, and the views over both rivers make the park one of the finest open spaces in any European capital. Spend at least 2 hours here.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Temple of Saint Sava",
                  e: "Free",
                  d: "The largest Orthodox church in the Balkans, under construction since 1935 and still completing its interior gold mosaic cycle — the largest in the world when finished. The sheer scale of the building (dome rises 70m) and the partially complete gilded interior are extraordinary. Don&apos;t skip because it&apos;s &apos;unfinished&apos; — visiting during the mosaic installation is witnessing one of the great ongoing art projects in Europe.",
                  t: "Must see · 1 hr",
                },
                {
                  n: "Nikola Tesla Museum",
                  e: "600 RSD (~$5.15)",
                  d: "The definitive Tesla museum — his urn, his original patents, working demonstrations of his inventions including a dramatic Tesla coil display. Small but dense with content. The English guided tour is strongly recommended (included in ticket, runs at set times). One of the genuinely great science museums in Europe for its subject matter.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Skadarlija Bohemian Quarter",
                  e: "Free to walk",
                  d: "Belgrade&apos;s &apos;Montmartre&apos; — a cobblestone street lined with 19th-century kafanas where Serbian artistic and literary culture was born. Best experienced in the evening with live music. Tri Šešira and Dva Jelena are the two landmark venues. The street itself is short (400m) but the atmosphere is uniquely Belgradian — particularly on a summer evening.",
                  t: "Evening · 2–3 hrs",
                },
                {
                  n: "Zemun",
                  e: "Free / Gardoš Tower small fee",
                  d: "The former Austro-Hungarian town within greater Belgrade — completely different from the Serbian Baroque of the city centre. Gardoš Tower on the hill above the Danube gives the best river views in the city. The riverfront embankment of Zemun is lined with fish restaurants. 20 minutes from the centre by tram — highly recommended, widely skipped by first-timers.",
                  t: "Half-day · Underrated",
                },
                {
                  n: "Ada Ciganlija",
                  e: "Free (beach)",
                  d: "Belgrade&apos;s river beach — a Sava island turned artificial lake, with 4km of sandy beaches and a 7km cycling path. Open year-round but best May–September. On summer weekends, this is where Belgrade goes. Free entry, bicycle rental on site. One of the genuinely great urban outdoor spaces in Europe — matched only by its extraordinary affordability.",
                  t: "Half-day · May–Sep",
                },
                {
                  n: "National Museum",
                  e: "400 RSD (~$3.50)",
                  d: "Recently renovated and expanded, this is now a genuinely world-class museum: exceptional collections of Roman finds from the Danube region, medieval Serbian art, Baroque paintings, and an impressive archaeology wing. The building on Republic Square is itself a Beaux-Arts masterpiece. Budget 1.5–2 hours.",
                  t: "1.5–2 hrs",
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
            title="Belgrade — Fortress, Rivers &amp; the Most Alive City in Europe"
            subtitle="7,000 years of history, two great rivers, and a nightlife that doesn&apos;t sleep."
            spots={[
              {
                name: "Kalemegdan Fortress at Sunrise",
                query: "kalemegdan fortress belgrade serbia danube sava sunrise ramparts",
                desc: "The Victor statue and the fortress ramparts at the confluence of the Danube and Sava — the defining image of Belgrade.",
              },
              {
                name: "Skadarlija Bohemian Quarter",
                query: "skadarlija bohemian quarter belgrade serbia cobblestone kafana night",
                desc: "Cobblestone street of 19th-century kafanas where Serbian poets and artists drank — Belgrade&apos;s most atmospheric evening destination.",
              },
              {
                name: "Temple of Saint Sava",
                query: "saint sava temple belgrade serbia orthodox church dome interior",
                desc: "The largest Orthodox church in the Balkans, its gold mosaic interior still being completed after 90 years of construction.",
              },
              {
                name: "Splavovi River Clubs",
                query: "belgrade splavovi floating club sava river nightlife serbia",
                desc: "The floating river-boat clubs on the Sava — Belgrade&apos;s legendary nightlife that doesn&apos;t begin until 1am.",
              },
              {
                name: "Ada Ciganlija Beach",
                query: "ada ciganlija belgrade sava river beach summer serbia",
                desc: "Belgrade&apos;s river island beach — 4km of sand on the Sava, free entry, where 100,000 Belgradians escape in summer.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Belgrade Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Belgrade is one of the most affordable major capitals in Europe — easily the best-value city in the Balkans. Budget travellers routinely manage $30/day including accommodation, three meals, entry fees, and drinks. Prices in RSD (Serbian Dinar) and approximate USD.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget (RSD)</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget (USD)</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range (USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (per night)", "1,400–2,300 RSD", "~$12–20", "~$40–65"],
                    ["🍽 Meals (full day)", "1,200–1,800 RSD", "~$10–15", "~$25–40"],
                    ["🚇 Local transport (tram/bus)", "270–540 RSD", "~$2.30–4.60", "~$8–15 (taxi)"],
                    ["🏛️ Museums / entry fees", "600–1,200 RSD", "~$5–10", "~$5–10"],
                    ["🍺 Drinks / nightlife", "600–1,200 RSD", "~$5–10", "~$15–30"],
                    ["TOTAL (per person, per day)", "4,070–7,040 RSD", "~$30–40", "~$70–90"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($30–40/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostel dorm (€10–12/night), pljeskavica and ćevapi for meals (€4–5 each), tram transport, free sights + Tesla Museum. This is genuinely comfortable in Belgrade — the backpacker infrastructure is excellent and the food is outstanding at this price.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($70–90/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">3-star hotel in Stari Grad (€40–60/night), kafana dinners, taxis, and one guided tour. This buys you real comfort, private rooms, and the ability to eat well at Belgrade&apos;s better restaurants — still dramatically cheaper than equivalent Western European cities.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Belgrade</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Belgrade&apos;s neighbourhoods each have a different character. Stari Grad (Old Town) puts you closest to the fortress and Knez Mihailova; Savamala is for the arts and nightlife scene; Dorćol is the most authentically residential; near the bus station is cheapest but least convenient.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Stari Grad (Old Town)",
                  type: "Central · Best for sightseeing",
                  price: "From €35/night (hotel) · €12 (hostel)",
                  badge: "Best location",
                  desc: "Walking distance to Kalemegdan, Knez Mihailova, Skadarlija, and Republic Square. The most convenient neighbourhood for first-time visitors. Mix of boutique hotels, apartments, and a few excellent hostels. Busier and slightly more expensive than other areas but worth it for the ease of access.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Savamala Arts District",
                  type: "Creative · Nightlife-focused",
                  price: "From €30/night · €10 (hostel)",
                  badge: "Best vibe",
                  desc: "Belgrade&apos;s most international neighbourhood — galleries, concept bars, street art, and proximity to the splavovi on the Sava. Good hostels and apartments. Noisy on weekend nights due to club proximity — bring earplugs or embrace it. 15-minute walk to Kalemegdan.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Dorćol",
                  type: "Residential · Authentic Belgrade",
                  price: "From €25/night (apartment) · €10 (hostel)",
                  badge: "Most authentic",
                  desc: "A residential neighbourhood north of the city centre, between Kalemegdan and the Danube embankment. Less tourist infrastructure, more local cafés and restaurants. A quieter, more genuine side of Belgrade. Excellent base for longer stays. Some of the best neighbourhood restaurants are here.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Near the Bus / Train Station",
                  type: "Budget · Less central",
                  price: "From €8/night (hostel) · €20 (hotel)",
                  badge: "Cheapest option",
                  desc: "The area around Savski Venac (near the bus and train stations) has the cheapest accommodation in central Belgrade. Less atmospheric than the other neighbourhoods but functional and genuinely budget. 20-minute walk or one tram stop to Republic Square. Good for early departures.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍖 Where to Eat in Belgrade</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Serbian food is meat-heavy, generous, and extraordinarily affordable. The essential dishes: ćevapi (grilled minced-meat sausages), pljeskavica (grilled meat patty), pleskavica with sir (cheese inside), gibanica (layered cheese and egg pastry), and the all-important pita (savoury filled pastry from bakeries). Budget around €5–8 for a full meal.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Pljeskavičarnica Dorćol",
                  t: "Serbian grill · Dorćol",
                  d: "The benchmark pljeskavica in Belgrade — a 400g grilled meat patty in a thick lepinja flatbread with kajmak (clotted cream cheese) and ajvar (roasted pepper spread), served at a counter or small table. 550–750 RSD ($4.70–6.40). This is the dish that defines Serbian food culture and this place does it correctly. Open late — good post-nightlife food.",
                  b: "Essential",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Kafana Dva Jelena",
                  t: "Traditional kafana · Skadarlija",
                  d: "One of the two landmark kafanas on Skadarlija street (Two Deer, established 1832). Traditional Serbian slow-cooked dishes — lamb under the sač (bell-shaped lid), sarma (stuffed cabbage), and meza spreads — with live Serbian music in the evenings. Mains 1,200–2,000 RSD ($10.25–17.10). Book for evening sittings.",
                  b: "Most atmospheric",
                  c: "bg-red-50 border-red-200",
                },
                {
                  n: "? Kafana (Question Mark)",
                  t: "Historic kafana · Stari Grad",
                  d: "Belgrade&apos;s oldest kafana (1823), one block from Kalemegdan. The Serbian name ? was given because the Orthodox church objected to any saintly name. Traditional food — prebranac, pork and lamb dishes, excellent rakija selection — in a preserved 19th-century interior. Mains 900–1,600 RSD ($7.70–13.70). An essential Belgrade experience.",
                  b: "Oldest kafana",
                  c: "bg-stone-50 border-stone-200",
                },
                {
                  n: "Rakia Bar",
                  t: "Rakija + food · Stari Grad",
                  d: "Curated selection of 100+ Serbian rakija varieties with food pairings. The meze-style food (ajvar, kajmak, cured meats, cheese boards) is excellent alongside the rakija tasting. A brilliant introduction to Serbian food culture for visitors. Prices moderate (meze boards 1,200–1,800 RSD / $10.25–15.40).",
                  b: "Best rakija selection",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Pita Bakeries (everywhere)",
                  t: "Street food · City-wide",
                  d: "Belgrade&apos;s bakeries (pekara) serve warm pita at all hours: zeljanica (spinach and cheese), sirnica (cheese), krompiruša (potato), and burek (meat or cheese) — 100–200 RSD ($0.85–1.70) each. The morning ritual of stopping at a pekara for pita and jogurt (a thin drinking yogurt) is genuinely one of the great cheap-food experiences in Europe.",
                  b: "Best value",
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
            destination="Belgrade Serbia"
            hotels={[
              {
                name: "Square Nine Hotel",
                type: "Design boutique · Studentski Trg",
                price: "From €120/night",
                rating: "5",
                badge: "Most acclaimed",
                url: "https://www.booking.com/hotel/rs/square-nine.html?aid=2820480",
              },
              {
                name: "Mama Shelter Belgrade",
                type: "Lifestyle hotel · Stari Grad",
                price: "From €80/night",
                rating: "4",
                badge: "Best design",
                url: "https://www.booking.com/hotel/rs/mama-shelter-belgrade.html?aid=2820480",
              },
              {
                name: "Metropol Palace Hotel",
                type: "Luxury heritage · Bulevar Kralja Aleksandra",
                price: "From €100/night",
                rating: "5",
                badge: "Classic luxury",
                url: "https://www.booking.com/hotel/rs/metropol-palace-a-luxury-collection.html?aid=2820480",
              },
              {
                name: "Generator Belgrade",
                type: "Design hostel · Savamala",
                price: "From €14/night (dorm)",
                rating: "4",
                badge: "Best hostel",
                url: "https://www.booking.com/hotel/rs/generator-belgrade.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Belgrade Walking Tour — Fortress & Old Town",
                duration: "3 hrs",
                price: "From €15/person",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=belgrade+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Belgrade Food Tour — Kafanas & Serbian Cuisine",
                duration: "3 hrs",
                price: "From €35/person",
                badge: "Best for foodies",
                url: "https://www.getyourguide.com/s/?q=belgrade+food+tour&partner_id=PSZA5UI",
              },
              {
                name: "Novi Sad & Petrovaradin Day Trip from Belgrade",
                duration: "8 hrs",
                price: "From €30/person",
                badge: "Best day trip",
                url: "https://www.getyourguide.com/s/?q=novi+sad+day+trip+belgrade&partner_id=PSZA5UI",
              },
              {
                name: "Belgrade Nightlife & Splavovi Tour",
                duration: "4 hrs",
                price: "From €25/person",
                url: "https://www.getyourguide.com/s/?q=belgrade+nightlife+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Belgrade</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌙",
                  title: "Arriving at the splavovi before 1am",
                  desc: "Belgrade nightlife operates on its own timezone. Splavovi (river-boat clubs) and the best clubs do not start before 01:00 and peak between 02:00 and 06:00. If you arrive at a splav at 23:00, you will be alone and confused. Take an afternoon nap, eat a late dinner, have drinks in a kafana first, and aim for the water after midnight. This is not negotiable.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  icon: "💱",
                  title: "Not having Serbian Dinars (RSD)",
                  desc: "Serbia uses the Serbian Dinar — not euros. Many restaurants and bars take cards, but markets, local kafanas, taxis, tram tickets, and small food stalls are cash-only. Withdraw RSD from ATMs (use bank-branded ATMs — Raiffeisen, UniCredit, Banca Intesa — to avoid high fees from independent ATM operators). €1 ≈ 117 RSD approximately.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  icon: "🍻",
                  title: "Declining rakija from a Serbian host",
                  desc: "If a Serbian pours you rakija, you do not decline. This is not a courtesy gesture — it is a genuine expression of welcome and hospitality that Serbs take seriously. Declining is considered insulting, not polite. Accept it, drink it slowly (it is 40–60% ABV), say živeli (ZHEE-veh-lee — cheers), and reciprocate with genuine appreciation. This single social gesture will open more doors than anything else.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "🗺️",
                  title: "Skipping Zemun because it looks far on the map",
                  desc: "Zemun — the former Austro-Hungarian town absorbed into greater Belgrade — is 20 minutes from Republic Square by tram. It has a completely different architectural character, the Gardoš Tower with the best Danube views in the city, a famous riverside fish restaurant strip, and a much quieter, more European feel than the Serbian Baroque city centre. First-timers regularly list it as one of their highlights. Don&apos;t skip it.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  icon: "🏛️",
                  title: "Thinking St Sava Temple is just a construction site",
                  desc: "The Temple of Saint Sava has been under construction since 1935. Its exterior is fully complete; its interior is currently being covered in what will be the largest mosaic cycle in the world. Visiting during the installation — which may continue for another decade — means seeing one of the great ongoing art projects in Europe in real time. The partially complete gold mosaics are extraordinary, not a disappointment.",
                  color: "border-green-200 bg-green-50",
                },
                {
                  icon: "🚖",
                  title: "Taking unlicensed taxis from the airport",
                  desc: "Belgrade airport has a persistent problem with unlicensed taxi drivers who approach arrivals and quote flat rates 3–4x above the metered fare. The legitimate taxi stand is outside arrivals — look for the official queue and insist on the meter, or book a ride through Car:Go or Pink Taxi apps before you land. The correct fare from BEG to the city centre is ~2,500–3,000 RSD ($21–26).",
                  color: "border-orange-200 bg-orange-50",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Belgrade</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🏰",
                  title: "Kalemegdan at sunrise — completely different city",
                  desc: "The fortress park is free and open 24 hours. At sunrise on a clear morning, mist rises off both rivers and the Victor statue catches the light in a way that photographs almost don&apos;t capture. You will have the whole park to yourself. By 11am it&apos;s busy with joggers, dog walkers, chess players (the outdoor chess boards are a Belgrade institution), and tour groups. Go early.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🎵",
                  title: "Understand turbo-folk before dismissing it",
                  desc: "Turbo-folk — Serbian electronic folk music — is the soundtrack of the splavovi and is genuinely controversial among Belgrade&apos;s intellectual class. But experiencing it on a river-boat at 3am with 500 Belgradians dancing is a cultural immersion unlike anything else in Europe. You cannot fully understand Belgrade without at least one turbo-folk splavovi night. Reserve judgment until you&apos;ve heard it at volume.",
                  color: "bg-pink-50 border-pink-200",
                },
                {
                  icon: "🥂",
                  title: "The best rakija is home-made — ask your host",
                  desc: "Supermarket šljivovica (plum brandy) is fine. The best rakija in Serbia is distilled by individual families from their own orchards — smoother, more complex, and genuinely unique to the maker. Many hostel owners, Airbnb hosts, and kafana owners will have a family bottle. Ask with genuine curiosity. The conversation this opens is worth more than the rakija itself.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌭",
                  title: "The pljeskavica is not just a burger",
                  desc: "The pljeskavica (PLEE-yes-ka-VEET-sa) is a 300–400g grilled meat patty — mixed pork, beef, and lamb — served in a thick lepinja flatbread with kajmak (clotted cream cheese), ajvar (roasted pepper spread), and raw onion. It costs €3–5 at a pljeskavičarnica and is one of the most satisfying meals in Europe at this price. Order the špek pljeskavica (with bacon inside) for the maximum version.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "📱",
                  title: "Get a local SIM at the airport — it&apos;s cheap",
                  desc: "Serbian SIM cards (MTS, Telenor, or Yettel) are available at the airport arrivals hall for around 500–800 RSD ($4.30–6.85) including 10GB+ data. Serbia has excellent 4G coverage throughout the city. This makes navigation, Car:Go taxi booking, and restaurant research significantly easier than relying on international roaming.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🗓️",
                  title: "Time your visit for a Belgrade summer festival",
                  desc: "Belgrade has one of Europe&apos;s richest summer festival calendars: Beer Fest (August, free entry, huge outdoor event on Ušće park), Belgrade Music Festival, the International Theatre Festival (BITEF), and numerous smaller events. Nearby Novi Sad hosts EXIT Festival in July (one of Europe&apos;s best, 90 minutes from Belgrade by bus). Check the festival calendar when planning your dates.",
                  color: "bg-teal-50 border-teal-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Belgrade" />

          {/* Combine With */}
          <CombineWith currentSlug="belgrade-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Belgrade safe for tourists in 2026?",
                  a: "Belgrade is generally safe for tourists. The city centre, Kalemegdan, and tourist areas are well-patrolled and incidents targeting visitors are rare. The main risks are pickpocketing in crowded areas (Republic Square, Skadarlija) and the usual urban caution at night near clubs. Belgrade nightlife can be rowdy but violence toward tourists is very rare. Women travelling solo report feeling safe in the city, though standard precautions apply late at night near the splavovi area.",
                },
                {
                  q: "How much does a trip to Belgrade cost?",
                  a: "Belgrade is one of the most affordable major capitals in Europe. Budget travellers can manage $30–40/day including a hostel dorm, three meals, entry fees, and a few drinks. Mid-range travel (private room, restaurant meals, guided tour) costs $70–90/day. A splavovi nightlife evening adds $20–40 for cover and drinks. Even a luxury hotel costs significantly less than equivalent properties in Western European capitals.",
                },
                {
                  q: "Is Belgrade a good destination for nightlife?",
                  a: "Belgrade is regularly cited as one of the top five nightlife cities in the world. The splavovi (river-boat clubs on the Sava and Danube) are unique to Belgrade — floating venues with multiple floors, open from midnight to 10am. Freestyler, Lasta, and Club 20/44 are the most famous. The Savamala arts district offers a hipper international scene (Drugstore, 20/44, Ben Akiba). The nightlife is genuinely legendary and worth experiencing even if clubbing is not normally your thing.",
                },
                {
                  q: "What is the best time to visit Belgrade?",
                  a: "April–October is the prime season — warm weather, outdoor kafana terraces, splavovi at full operation, and Ada Ciganlija beach busy. September is arguably the single best month: summer heat gone, crowds reduced, terraces still open, the cultural season beginning. Summer festivals (Beer Fest in August, EXIT in Novi Sad in July) are strong reasons to visit July–August. Belgrade in winter (November–February) is cold but has a cosy kafana culture that compensates.",
                },
                {
                  q: "Do I need a visa for Serbia?",
                  a: "Most major Western passport holders (US, UK, EU, Australia, Canada) can enter Serbia visa-free for up to 90 days. Serbian visas are entirely separate from Schengen — days in Serbia do not count against your Schengen 90/180-day allowance, which makes Serbia an excellent addition to a longer Balkans or Eastern European trip. Indian passport holders require a Serbian visa — apply at the nearest Serbian embassy. Check current requirements before travel as they occasionally change.",
                },
                {
                  q: "What currency does Serbia use?",
                  a: "Serbia uses the Serbian Dinar (RSD). Approximate rates: €1 ≈ 117 RSD, $1 ≈ 108 RSD. Serbia is NOT in the Eurozone and prices quoted in euros at some hotels and tourism businesses are a courtesy — payment is typically in RSD. Withdraw dinars from ATMs (use bank-branded ATMs to minimise fees). Cards are widely accepted in restaurants and shops but smaller kafanas, tram tickets, and markets are often cash-only.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Belgrade trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/belgrade-budget-travel", label: "Budget travel guide", icon: "💰" },
                { href: "/blog/belgrade-nightlife-guide", label: "Nightlife & splavovi", icon: "🎶" },
                { href: "/blog/novi-sad-day-trip", label: "Novi Sad day trip", icon: "🚌" },
                { href: "/blog/serbian-food-guide", label: "Serbian food guide", icon: "🍖" },
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
          <RelatedGuides currentSlug="belgrade-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Balkans &amp; Eastern Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Sarajevo in 3 Days — Bridges &amp; History", href: "/blog/sarajevo-3-days" },
                { label: "Budapest 3 Days — Thermal Baths &amp; Ruin Bars", href: "/blog/budapest-3-days" },
                { label: "Zagreb 3 Days — Croatia&apos;s Capital", href: "/blog/zagreb-3-days" },
                { label: "Sofia 3 Days — Bulgaria&apos;s Affordable Capital", href: "/blog/sofia-3-days" },
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
