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
const ANTALYA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Antalya Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",  emoji: "🏛️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Antalya 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Antalya in 3 Days — Kalei%C3%A7i, Aspendos and the Turkish Riviera&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/antalya-3-days"
        imageUrl="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80"
        description="Antalya in 3 Days: Kaleiçi old city, Hadrian&apos;s Gate, Aspendos Roman Theatre, Düden Waterfalls, and boat trips along the Turkish Riviera — complete travel guide with budget breakdown."
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
export default function AntalyaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={ANTALYA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Antalya" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="antalya old city harbor turkey mediterranean turquoise coast"
            fallback="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=80"
            alt="Antalya old city Kaleiçi harbor with Roman ruins and turquoise Mediterranean coast Turkey"
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
              <span className="text-white/80">Antalya 3 Days</span>
            </div>
          </div>

          {/* Hero text */}
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs bg-teal/20 text-teal-200 border border-teal/30 px-3 py-1 rounded-full font-medium uppercase tracking-wider">Europe · Turkey</span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Antalya in 3 Days:
                <em className="italic text-amber-300"> Kalei&ccedil;i, Aspendos &amp; the Turkish Riviera</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Roman harbour walls, Hadrian&apos;s Gate, waterfalls that pour directly into the Mediterranean, and the clearest turquoise water in Turkey. The complete guide to Antalya.
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
              <span>🇹🇷 Antalya, Turkey</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₺400/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Antalya is what the Turkish Riviera actually looks like before the all-inclusive resorts arrived — a Roman harbour still surrounded by 2nd-century walls, a city gate built for an emperor, waterfalls that literally fall into the sea, and an old town where the cats outnumber the tourists before 9am.
            </p>
          </blockquote>

          {/* ── WHAT ANTALYA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Antalya Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Most people know Antalya as an airport — the gateway to Belek&apos;s all-inclusive resort strip, Turkey&apos;s Benidorm. That version of Antalya exists, and it&apos;s fine if sun-loungers and unlimited buffets are your thing. But the city itself is something else entirely.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Kalei&ccedil;i — the old city — is enclosed within original Roman walls above a harbour that has functioned since the 2nd century BC. Hadrian&apos;s Gate was built in 130 AD specifically because Emperor Hadrian was visiting. The Hıdırlık Tower at the southern point of the walls is a 2nd-century Roman lighthouse. The harbour below was where Lycian merchants traded with Rome. None of this has been reconstructed — it&apos;s just standing there, used daily.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Beyond the old city: the Antalya Museum holds one of Turkey&apos;s greatest collections of Roman statuary, almost entirely excavated from nearby Perge and Aspendos. The Düden Waterfalls — upper and lower — are genuinely dramatic, the lower one plunging 40 metres directly off a cliff into the Mediterranean. And 50km east, Aspendos Roman Theatre is the best-preserved Roman theatre anywhere on earth, built in 155 AD, with original acoustics so perfect it still hosts opera performances today.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="AYT" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Jun, Sep–Oct" />
              <StatCard icon="🏛️" label="Ruins Near City" value="4 major sites" />
              <StatCard icon="💰" label="Budget From" value="₺400/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Antalya</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "22–28°C, low humidity, the sea warms up from May onwards. Wildflowers on the Taurus Mountains visible from the coast. Accommodation is 30–40% cheaper than peak summer. April–June is the single best window for combining ruins, beach, and city.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Autumn — Second Best",
                  d: "24–30°C, sea still warm from summer, crowds have thinned out considerably after mid-September. October is particularly good — pleasant temperatures, empty ruins, and the light has a golden quality perfect for photography.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🔥",
                  t: "Summer — Hot and Crowded",
                  d: "38–42°C. Walking Kalei&ccedil;i and Aspendos in peak summer is genuinely brutal — marble and stone concentrate heat significantly. The coast is packed with European package tourists. Accommodation prices peak. Viable if you plan beach time and keep ruins for early morning only.",
                  b: "Early morning only",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Mar",
                  i: "🌧️",
                  t: "Winter — Mild and Quiet",
                  d: "15–20°C. Antalya has the mildest winter on Turkey&apos;s Mediterranean coast — rarely drops below 10°C. Ruins are virtually empty. The sea is too cold for swimming but the city is pleasant to walk. Good for cultural travel on a budget — prices drop substantially.",
                  b: "Off-season exploration",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Antalya</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Antalya Airport (AYT) is one of Europe&apos;s busiest — direct flights from London, Amsterdam, Frankfurt, and most major European hubs. From India, the fastest route is via <strong className="font-medium">Istanbul (IST)</strong> on Turkish Airlines — 1 connecting hour to Antalya. The city tram (AntalyaRay) runs from near the airport to Kalei&ccedil;i old city.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "From India (recommended)",
                  d: "Mumbai or Delhi → Istanbul (IST) on Turkish Airlines, then a 1-hour domestic connection to Antalya (AYT). Total travel time: 10–12 hours including layover. IndiGo and Air Arabia also fly Mumbai–Antalya via Dubai/Sharjah. Turkish Airlines hub offers seamless connections and is often the cheapest option when booked together.",
                  b: "Best option from India",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "From Europe (direct flights)",
                  d: "Direct flights from London Gatwick, Amsterdam Schiphol, Frankfurt, Vienna, and most major European airports. Ryanair, easyJet, Wizz Air, and Turkish Airlines all operate routes. Flight time from London is 4 hours. Fares from €30–€150 depending on season and how far in advance you book.",
                  b: "Direct from most EU cities",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚌",
                  t: "From Istanbul by bus",
                  d: "Istanbul → Antalya: 12-hour overnight bus on Metro Turizm or Kamil Koç (₺400–₺700). Comfortable, with reclining seats and rest stops. Scenic approach through the Taurus Mountains. Recommended if you want to combine Istanbul and Antalya in one trip without flying domestically.",
                  b: "Budget option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚎",
                  t: "City Transport — Tram &amp; Taxis",
                  d: "AntalyaRay tram line runs from Fatih area (near the airport zone) through the city to Müze (Museum stop, closest to Kalei&ccedil;i). Single fare ₺15–₺20. Taxis are metered and generally honest — ₺50–₺100 from airport to Kalei&ccedil;i. Rent a car for day trips to Aspendos and Perge (30–50km out of city).",
                  b: "Getting around the city",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Antalya Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is structured to cover the old city, the waterfalls and beaches, and the major archaeological sites — with optional extensions to Pamukkale or Kekova if you have extra days.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Kaleiçi Old City · Hadrian&apos;s Gate · Antalya Museum · Old Harbour"
                cost="₺500–₺700 (~$17–$23)"
                items={[
                  "Arrive and check in to a Kaleiçi guesthouse or boutique hotel inside the old city walls (₺600–₺2,000/night). The neighbourhood is compact and walkable — staying inside the walls is the single best decision you can make in Antalya.",
                  "9:00am — Enter Kaleiçi through Hadrian&apos;s Gate (free). Built in 130 AD for Emperor Hadrian&apos;s state visit to the city, the triple-arched marble gate is remarkably intact. The grooves of ancient cart wheels are still visible in the paving stones beneath it.",
                  "10:00am — Walk the Roman-era city walls along the harbour cliff. The walls date from the 2nd century BC and offer views across the bay to the Taurus Mountains — on clear days you can see snow on the peaks even in May.",
                  "11:00am — Antalya Museum (₺200 / ~$7). One of Turkey&apos;s best archaeological museums: Roman statues, sarcophagi from Perge, Bronze Age finds, and a remarkable gallery of gods and emperors. Budget 1.5–2 hours — it is genuinely excellent.",
                  "1:00pm — Lunch in Kaleiçi: pide (Turkish flatbread with toppings) and ayran (yoghurt drink) at a local restaurant — ₺120–₺150 (~$4–$5).",
                  "3:00pm — Old Harbour (Yat Limanı). The Roman harbour is still in use today, lined with wooden gulets and fishing boats. Walk the full perimeter, including the Byzantine-era harbour tower.",
                  "4:00pm — Hıdırlık Tower (free) — a 2nd-century Roman lighthouse at the cliff edge, with panoramic views down the coast toward Kemer.",
                  "6:00pm — Watch the sun set over the Taurus Mountains from the harbour promenade. The light on the Roman walls at golden hour is extraordinary.",
                  "8:00pm — Dinner at a Kaleiçi courtyard restaurant — lamb kebab, mezze, and fresh bread — ₺180–₺220 (~$6–$7).",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Düden Waterfalls · Konyaaltı Beach · Boat Trip to Sea Caves"
                cost="₺600–₺900 (~$20–$30)"
                items={[
                  "9:00am — Upper Düden Waterfall (free) — 15km north of the city centre. The Düden River plunges through a forested limestone gorge — walk the canyon trail along the river for 30–40 minutes through tunnels carved by the water. Genuinely dramatic and almost completely free.",
                  "11:00am — Lower Düden Waterfall — the most photographed sight in Antalya. The same river falls 40 metres directly off a cliff into the Mediterranean. The best view is from the beach below or from a boat. Take a taxi to Lara Beach (₺50) and walk to the cliff-edge lookout.",
                  "1:00pm — Lunch at a Lara beach restaurant — fresh grilled levrek (sea bass) or sea bream with salad and bread — ₺200–₺250 (~$7–$8).",
                  "3:00pm — Konyaaltı Beach (free entry) — a 7km pebble beach directly west of the city backed by the Taurus Mountains. The water is exceptionally clear. Beach clubs with loungers and umbrellas run ₺100–₺200. The mountains-meeting-sea backdrop here is genuinely beautiful.",
                  "5:00pm — Atatürk Park and the cliff-top promenade — a 3km walking path above the sea used by local families in the evenings. Free, shaded, and a good way to see everyday Antalya away from the tourist zones.",
                  "7:30pm — Dinner back in Kaleiçi: köfte with ezme and fresh bread from a local esnaf lokantası (neighbourhood restaurant) — ₺100–₺130 (~$3–$4).",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Aspendos Theatre · Perge Ruins · Afternoon Coastal Boat Trip"
                cost="₺900–₺1,200 (~$30–$40)"
                items={[
                  "8:30am — Depart for Aspendos (50km east of Antalya). Options: shared dolmuş minibus from Antalya otogar (₺50–₺80 each way, 1 hour); taxi (₺300–₺400 return including wait time); or rent a car for the day (₺500–₺800 including fuel).",
                  "9:30am — Aspendos Roman Theatre (₺350 / ~$12). Built in 155 AD under Marcus Aurelius, this is the best-preserved Roman theatre anywhere in the world — 15,000-seat capacity, original stage building still standing, acoustics so perfect a whisper on stage carries to the back row. Arrive at opening to have it nearly to yourself before tour buses arrive at 10:30am.",
                  "11:30am — Perge Ancient City (₺350 / ~$12, 17km from Antalya). A Hellenistic and Roman city with a colonnaded main street (over 300m of original columns), monumental baths, a 12,000-seat stadium, a theatre, and marble everywhere. Most of the statues you saw in the Antalya Museum came from here. Quieter than Aspendos and very photogenic.",
                  "1:30pm — Return to Antalya for a quick lunch — ₺100–₺150.",
                  "3:00pm — Afternoon boat trip from Old Harbour (₺250–₺350 per person / ~$8–$12). The standard 3–4 hour trip includes swimming stops at sea caves, a view of Lower Düden Waterfall from the water (you can swim up to where the river meets the sea), and a pass along the Kemer coastline backed by pine-covered mountains.",
                  "7:00pm — Return to harbour. Optional: walk to the southern tip of Kaleiçi for a final look at the walls in evening light.",
                  "8:30pm — Farewell dinner at an Old Harbour restaurant — fresh fish meze and raki — ₺250–₺350 (~$8–$12).",
                ]}
              />
            </div>

            {/* Optional extension note */}
            <div className="mt-5 bg-teal-50 border border-teal-200 rounded-xl p-4">
              <p className="text-sm text-teal-800 font-light">
                <strong className="font-medium">Got extra time?</strong> Day 4 options: <strong className="font-medium">Pamukkale</strong> (220km north — the travertine terraces and Hierapolis ruins, full day by bus or car); <strong className="font-medium">Kekova</strong> (150km west — sunken Lycian city accessible only by boat from Uçağız village); or <strong className="font-medium">Side</strong> (75km east — well-preserved temple of Apollo on the sea). All are excellent and doable from Antalya as long day trips.
              </p>
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Antalya" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Antalya Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees are as of early 2026 — prices given in TRY and approximate USD.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Aspendos Roman Theatre",
                  e: "₺350 (~$12)",
                  d: "The best-preserved Roman theatre on Earth — built 155 AD, 15,000-seat capacity, original stage building intact. Acoustics so perfect that a whisper carries to the back row. Still used for opera and ballet performances. 50km east of Antalya. Arrive at 9:30am opening — by 11am the tour buses dominate.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Hadrian&apos;s Gate (Üçkapılar)",
                  e: "Free",
                  d: "Triple-arched marble gate built in 130 AD for Emperor Hadrian&apos;s visit to the city. The main entrance to Kalei&ccedil;i old city. The grooves of cart wheels are still worn into the paving stones. One of the best-preserved Roman triumphal arches outside of Rome itself.",
                  t: "Must see · Free",
                },
                {
                  n: "Antalya Museum",
                  e: "₺200 (~$7)",
                  d: "One of Turkey&apos;s top five archaeological museums. The Hall of Gods — twelve larger-than-life Roman statues of deities, all excavated from Perge — is worth the entry fee alone. Also: sarcophagi, mosaics, prehistoric finds. Budget 2 hours minimum.",
                  t: "Must see · 2 hrs",
                },
                {
                  n: "Kaleiçi Old City",
                  e: "Free",
                  d: "The walled Roman harbour district — narrow cobblestone streets, Ottoman-era mansions (many now boutique hotels), Byzantine churches, and the Roman harbour below the cliffs. Best explored on foot at 8am before tour groups arrive. The cats that live here are legendary.",
                  t: "Free · Half day",
                },
                {
                  n: "Perge Ancient City",
                  e: "₺350 (~$12)",
                  d: "Hellenistic and Roman city 17km from Antalya with a 300m colonnaded main street, monumental baths, a stadium, and marble everywhere. Most statues in the Antalya Museum came from here. Usually very quiet even in peak season — one of the most underappreciated ancient sites in Turkey.",
                  t: "Underrated · 1.5 hrs",
                },
                {
                  n: "Düden Waterfalls (Upper &amp; Lower)",
                  e: "Free",
                  d: "Upper Düden: gorge walk through a forested canyon — free, 15km north of city. Lower Düden: the dramatic 40m cliff-fall directly into the Mediterranean — best seen from the beach below or from a boat. Go to both — they are completely different experiences.",
                  t: "Free · Half day total",
                },
                {
                  n: "Hıdırlık Tower",
                  e: "Free",
                  d: "2nd-century Roman lighthouse at the southern tip of the Kalei&ccedil;i promontory. Panoramic views over the old harbour and down the coast toward Kemer. Free to access, almost always uncrowded, and particularly good at sunset.",
                  t: "Free · 20 mins",
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
            title="Antalya — Old Harbour, Ruins &amp; Turquoise Coast"
            subtitle="The Turkish Riviera&apos;s crown jewel, where Roman history meets the Mediterranean."
            spots={[
              {
                name: "Kaleiçi Old Harbour",
                query: "antalya old harbour kaleiçi roman walls mediterranean turkey",
                desc: "The Roman harbour of Antalya — still in use today, surrounded by 2nd-century walls and overlooked by the Ottoman clock tower.",
              },
              {
                name: "Hadrian&apos;s Gate Antalya",
                query: "hadrian gate antalya marble roman arch turkey ancient",
                desc: "Triple-arched marble gate built in 130 AD for Emperor Hadrian&apos;s visit — the best-preserved Roman triumphal arch in Turkey.",
              },
              {
                name: "Aspendos Roman Theatre",
                query: "aspendos roman theatre turkey ancient ruins amphitheatre",
                desc: "The best-preserved Roman theatre in the world — 155 AD, 15,000 seats, original stage building still standing.",
              },
              {
                name: "Düden Waterfall into the Sea",
                query: "düden waterfall cliff sea antalya turkey mediterranean",
                desc: "Lower Düden Waterfall — the Düden River plunging 40 metres off a cliff directly into the Mediterranean.",
              },
              {
                name: "Konyaaltı Beach Taurus Mountains",
                query: "konyaalti beach antalya taurus mountains turquoise sea turkey",
                desc: "Konyaaltı Beach — 7km of pebble beach backed by the snow-capped Taurus Mountains and crystal-clear turquoise water.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Antalya offers excellent value compared to Western European destinations. The main costs are accommodation (especially in Kalei&ccedil;i boutique hotels) and entry fees if you visit multiple archaeological sites. All prices in TRY with approximate USD.
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
                    ["🏨 Accommodation (per night)", "₺300–₺600 (~$10–$20)", "₺1,200–₺2,500 (~$40–$85)", "₺6,000–₺15,000 (~$200–$500)"],
                    ["🍽️ Food (per day)", "₺150–₺250 (~$5–$8)", "₺400–₺800 (~$13–$27)", "₺1,500–₺4,000 (~$50–$135)"],
                    ["🚌 Local transport", "₺50–₺100 (~$2–$3)", "₺150–₺400 (~$5–$13)", "₺500–₺2,000 (~$17–$67)"],
                    ["🏛️ Entry fees (3 days)", "₺700–₺1,050 (~$23–$35)", "₺700–₺1,050 (~$23–$35)", "₺700–₺1,050 (~$23–$35)"],
                    ["⛵ Boat trip (Old Harbour)", "₺250–₺350 (~$8–$12)", "₺300–₺500 (~$10–$17)", "₺4,000+ private charter"],
                    ["TOTAL (per person/day)", "₺750–₺1,850 (~$25–$62)", "₺2,400–₺6,900 (~$80–$230)", "₺9,500+ (~$315+)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (₺400–₺700/day / ~$13–$23)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in Kalei&ccedil;i guesthouses, eat at local esnaf lokantaları and pide shops. Visit the free sites (Hadrian&apos;s Gate, harbours, waterfalls) and pick 1–2 paid entry sites. Very comfortable and genuinely local.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">✨ Mid-Range (₺1,500–₺3,000/day / ~$50–$100)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Boutique hotel inside Kalei&ccedil;i walls, sit-down meals at harbour restaurants, private taxi for Aspendos and Perge, group boat trip. Sweet spot for comfort without losing the Antalya atmosphere.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">💎 Luxury (₺6,000+/day / $200+)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">5-star Belek resort all-inclusive, private gulet charter, private guide for Aspendos, helicopter transfers. Mardan Palace and Rixos Premium Belek are the benchmark for Turkish Riviera luxury.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Antalya</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Four distinct areas: Kalei&ccedil;i old city (most atmospheric, best for cultural travellers), Lara Beach (resort strip east of city), Konyaaltı (beach access, more local feel), and Belek (dedicated luxury resort zone 30km east).
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Kaleiçi Boutique Hotels",
                  type: "Boutique · Inside the Roman walls",
                  price: "₺600–₺2,500/night (~$20–$85)",
                  badge: "Best atmosphere",
                  desc: "Converted Ottoman mansions and Roman-era stone houses within the old city walls. Narrow cobblestone streets, courtyard gardens, harbour views. Properties like Alp Pasa Hotel, Tuvana Hotel, and Atelya Art House are exceptional. Book well ahead for April–October.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Lara Beach Resorts",
                  type: "Resort · Lara Beach, 10km east",
                  price: "₺1,500–₺6,000/night (~$50–$200)",
                  badge: "Best beach access",
                  desc: "Large resort hotels on Lara&apos;s sandy beach — Titanic Beach Lara, Delphin Imperial, Sheraton Grand. All-inclusive options widely available. Good for families and beach-focused stays. Less convenient for city sightseeing — budget ₺50–₺100 taxi each way to Kalei&ccedil;i.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Konyaaltı Area Hotels",
                  type: "Mid-range · West of city centre",
                  price: "₺500–₺2,000/night (~$17–$67)",
                  badge: "Good value",
                  desc: "Hotels within walking distance of Konyaaltı Beach and the city centre. More local feel than Lara. Easy tram access to Kalei&ccedil;i (15 minutes). Good mid-range options include Crowne Plaza Antalya and various independent hotels along the beach road.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Belek Luxury Resorts",
                  type: "5-star all-inclusive · Belek, 30km east",
                  price: "₺6,000–₺15,000/night (~$200–$500)",
                  badge: "Peak luxury",
                  desc: "Turkey&apos;s most prestigious resort zone: Mardan Palace, Rixos Premium Belek, Kempinski Hotel The Dome. Private beaches, multiple pools, championship golf courses, elaborate all-inclusive packages. Excellent if pure resort luxury is the goal — less ideal if you want to explore Antalya city.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Antalya</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Antalya&apos;s food scene ranges from excellent local esnaf lokantaları (neighbourhood restaurants) serving proper Turkish food at ₺80–₺150, to mid-range harbour restaurants with fresh fish, to upscale dining in converted Kalei&ccedil;i mansions.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Kaleiçi Courtyard Restaurants",
                  t: "Traditional Turkish · Old city",
                  d: "Restored Ottoman-era courtyards serving lamb kebab, patlıcan (aubergine dishes), fresh mezze, and ayran. The setting — candlelit stone courtyards with jasmine overhead — is exceptional. Compare menus before sitting down: quality varies and some are tourist traps. Aim for places where locals are eating too. Budget ₺150–₺250 (~$5–$8) per person.",
                  b: "Best atmosphere",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Old Harbour Seafood Restaurants",
                  t: "Fresh fish · Yat Limanı",
                  d: "The harbour is lined with seafood restaurants — the boats go out daily so the fish genuinely is fresh. Order balık çorbası (fish soup), grilled levrek (sea bass) or çipura (sea bream), and fresh mezze. More touristy than city restaurants but the quality is real. Prices vary 30–40% between restaurants — browse menus before sitting. Budget ₺200–₺400 (~$7–$13) per person.",
                  b: "Best fish",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Kapalı Çarşı Bazaar Snacks",
                  t: "Street food · Kaleiçi bazaar",
                  d: "The covered bazaar in the old city has stalls selling kokoreç (offal sandwich — bravely excellent), midye dolma (stuffed mussels), simit (sesame rings), and Turkish tea. The best cheap eating in Antalya. Budget ₺20–₺60 (~$1–$2) per item. Go in the morning when everything is fresh.",
                  b: "Best cheap eating",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Pide and Köfte Shops",
                  t: "Local neighbourhood · City centre",
                  d: "Antalya&apos;s local pide restaurants (Turkish flatbread topped with minced meat, cheese, or eggs, baked in a wood oven) are exceptional and very cheap — ₺60–₺100 (~$2–$3) for a full pide. Combine with a bowl of çorba (lentil soup) for ₺30 and you&apos;ve eaten very well. Look for queues of locals — that&apos;s the reliable indicator.",
                  b: "Best value meals",
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
            destination="Antalya Turkey"
            hotels={[
              {
                name: "Tuvana Hotel Kaleiçi",
                type: "Boutique · Inside the Roman walls",
                price: "From ₺1,800/night (~$60)",
                rating: "5",
                badge: "Best boutique",
                url: "https://www.booking.com/hotel/tr/tuvana.html?aid=2820480",
              },
              {
                name: "Alp Pasa Hotel",
                type: "Heritage boutique · Kaleiçi old city",
                price: "From ₺1,200/night (~$40)",
                rating: "4",
                badge: "Best value Kaleiçi",
                url: "https://www.booking.com/hotel/tr/alp-pasa.html?aid=2820480",
              },
              {
                name: "Rixos Premium Belek",
                type: "5-star all-inclusive · Belek beach",
                price: "From ₺6,500/night (~$215)",
                rating: "5",
                badge: "Most luxurious",
                url: "https://www.booking.com/hotel/tr/rixos-premium-belek.html?aid=2820480",
              },
              {
                name: "Crowne Plaza Antalya",
                type: "Business hotel · City centre",
                price: "From ₺900/night (~$30)",
                rating: "4",
                badge: "Best central",
                url: "https://www.booking.com/hotel/tr/crown-plaza-antalya.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Antalya Old City &amp; Ruins Guided Tour",
                duration: "4 hrs",
                price: "From ₺400/person (~$13)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=antalya+old+city+tour&partner_id=PSZA5UI",
              },
              {
                name: "Aspendos &amp; Perge Day Trip from Antalya",
                duration: "8 hrs",
                price: "From ₺700/person (~$23)",
                badge: "Top rated",
                url: "https://www.getyourguide.com/s/?q=aspendos+perge+tour&partner_id=PSZA5UI",
              },
              {
                name: "Antalya Boat Trip — Sea Caves &amp; Düden Waterfall",
                duration: "4 hrs",
                price: "From ₺300/person (~$10)",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=antalya+boat+trip&partner_id=PSZA5UI",
              },
              {
                name: "Pamukkale Day Trip from Antalya",
                duration: "Full day",
                price: "From ₺600/person (~$20)",
                url: "https://www.getyourguide.com/s/?q=pamukkale+from+antalya&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Antalya</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🏛️",
                  title: "Skipping Aspendos Because It&apos;s Far",
                  desc: "Most visitors skip Aspendos because it&apos;s 50km from the city. This is the single biggest mistake in Antalya. It is the best-preserved Roman theatre on Earth — built in 155 AD, acoustically perfect, original stage building still standing. A taxi return costs ₺300–₺400 and entry is ₺350. That is extraordinary value for what you are seeing. Go.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "💧",
                  title: "Only Seeing One Düden Waterfall",
                  desc: "Everyone photographs Lower Düden from the cliff or from a boat. But Upper Düden — a forested limestone gorge 15km north of the city — is a completely different experience: a canyon trail through tunnels carved by the river over millennia. They are both free and both extraordinary. Go to both.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏨",
                  title: "Staying Only in the Resort Strip",
                  desc: "Belek and Lara are perfectly pleasant all-inclusive bubbles. But they are not Antalya. Base yourself in Kalei&ccedil;i old city for your first two nights — walk Roman streets at 8am, eat at local courtyard restaurants, watch fishermen at the harbour at dawn. Then move to a beach resort if you want. Not the other way around.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "☀️",
                  title: "Visiting in July or August Heat",
                  desc: "July and August in Antalya hit 38–42°C. Walking Kalei&ccedil;i and exploring Aspendos in that heat is genuinely brutal — marble and stone concentrate heat significantly above air temperature. April–June and September–October have 22–28°C weather, fewer crowds, and accommodation that is 30–40% cheaper. The choice is obvious.",
                  color: "bg-pink-50 border-pink-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Antalya</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Kaleiçi at 8am Before the Tourists",
                  desc: "The old city&apos;s narrow Roman-era streets are virtually empty before 9am. Walk through Hadrian&apos;s Gate, down to the harbour, and along the cliff walls in the morning light. The cats that live in Kalei&ccedil;i come out at dawn — dozens of them. The whole place feels like a film set with no cameras.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "⛵",
                  title: "Book the Boat Trip for Late Afternoon",
                  desc: "The afternoon boat trips from the old harbour (₺250–₺350) leave around 3pm and return at sunset. You swim at sea caves, see Lower Düden waterfall from the water (you can swim right up to it), and come back to the harbour with the sun going down behind the city walls. The timing is perfect.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🐟",
                  title: "Compare Menus Before Sitting at the Harbour",
                  desc: "The Old Harbour restaurants vary 30–40% in price for identical dishes. The fish quality is similar across all of them — what differs is the price and the level of tourist pressure. Walk the full harbour, glance at menus, and sit where the prices are clearly displayed. Avoid places with touts standing outside.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🏺",
                  title: "Perge on a Weekday Morning",
                  desc: "Perge ancient city (17km from Antalya) has a 300m colonnaded main street, enormous Roman baths, a 12,000-seat stadium, and marble scattered everywhere — and on a Tuesday or Wednesday morning, you will often share it with almost no one. The contrast with the packed sites in Istanbul is remarkable. Go Tuesday–Thursday.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "💳",
                  title: "Use Garanti Bank ATMs for Best Exchange",
                  desc: "Withdraw Turkish Lira from Garanti Bank ATMs (widely available in Kalei&ccedil;i and city centre) rather than currency exchange bureaus at the airport or tourist-facing offices. Dynamic currency conversion at ATMs will cost you 5–8% — always choose to be charged in Turkish Lira, not your home currency.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🎭",
                  title: "Check if Aspendos Has a Performance",
                  desc: "Aspendos Roman Theatre still hosts the Aspendos International Opera and Ballet Festival each June. Seeing a performance in a 1,900-year-old Roman theatre with its original acoustics is something you will remember for the rest of your life. Check the festival schedule at aspendosfestival.gov.tr when planning your trip.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Antalya" />

          {/* Combine With */}
          <CombineWith currentSlug="antalya-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "What is the best time to visit Antalya?",
                  a: "April–June and September–October are the best windows — temperatures of 22–28°C, low humidity, calm sea, and accommodation 30–40% cheaper than peak summer. July–August is extremely hot (38–42°C) and very crowded with European package tourists. November–March is mild (15–20°C) and very quiet — ideal for ruins and city exploration on a budget.",
                },
                {
                  q: "What beaches are near Antalya city?",
                  a: "Konyaaltı Beach is a 7km pebble beach directly west of the city centre — free to access and backed by dramatic Taurus Mountain views. Lara Beach is a longer sandy beach 10km east, more resort-oriented. For the best sand beaches, drive 30–40km east to Belek or Side. The water throughout is exceptionally clear and turquoise.",
                },
                {
                  q: "How do I get from Istanbul to Antalya?",
                  a: "Fly — 1 hour from Istanbul (IST or SAW) to Antalya (AYT) on Pegasus, AnadoluJet, or Turkish Airlines. Fares start from ₺300–₺700 one way. The overnight bus is also good — 12 hours, ₺400–₺600, scenic approach through the Taurus Mountains. The flight is almost always the better choice for value of time.",
                },
                {
                  q: "How much does Antalya cost per day?",
                  a: "Budget travellers can do ₺500–₺700/day (~$17–$23) — Kaleiçi guesthouses, local restaurants, and free sites. Mid-range in a boutique hotel with private transport runs ₺2,000–₺3,500/day (~$67–$117). A 5-star Belek resort all-inclusive is ₺6,000–₺15,000/night per room (~$200–$500).",
                },
                {
                  q: "Is Antalya or Bodrum better for a first visit?",
                  a: "Antalya has far more history — Roman theatre at Aspendos, ancient ruins at Perge, a genuine walled old city. Bodrum is more of a party and yacht destination with less culture. For cultural travellers: Antalya without question. For nightlife and beach clubs: Bodrum. Antalya is also easier to reach from most international airports.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Antalya trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-antalya", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/antalya-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/antalya-airport-guide", label: "Airport guide", icon: "✈️" },
                { href: "/blog/antalya-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="antalya-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Turkey &amp; Mediterranean Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Istanbul in 5 Days — Complete Guide", href: "/blog/istanbul-5-days" },
                { label: "Cappadocia 3 Days — Hot Air Balloons &amp; Caves", href: "/blog/cappadocia-3-days" },
                { label: "Athens 3 Days — Acropolis &amp; Ancient City", href: "/blog/athens-3-days" },
                { label: "Santorini 4 Days — Caldera &amp; Sunset", href: "/blog/santorini-4-days" },
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
