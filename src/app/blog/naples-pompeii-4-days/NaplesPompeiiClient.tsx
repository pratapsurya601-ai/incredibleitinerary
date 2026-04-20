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
const NAPLES_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Naples Actually Is" },
  { id: "visa",        emoji: "📋",  label: "Visa & Entry" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "4-Day Itinerary" },
  { id: "ruins",       emoji: "🏛️", label: "Pompeii & Ruins Guide" },
  { id: "budget",      emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",         emoji: "🍕",  label: "Pizza & Food Guide" },
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
          href: `mailto:?subject=Naples %26 Pompeii 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Naples %26 Pompeii in 4 Days — Pompeii ruins, Vesuvius, Amalfi Coast and the best pizza on Earth&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/naples-pompeii-4-days"
        imageUrl="https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80"
        description="Naples &amp; Pompeii in 4 Days: Pompeii ruins, Mount Vesuvius hike, Amalfi Coast day trip, Capri island and the best pizza on Earth — complete travel guide with budget breakdown."
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
export default function NaplesPompeiiClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={NAPLES_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Naples &amp; Pompeii" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="naples pompeii vesuvius ruins italy volcano amalfi coast"
            fallback="https://images.unsplash.com/photo-1555993539-1732b0258235?w=1600&q=80"
            alt="Pompeii ruins with Mount Vesuvius volcano backdrop Naples Italy"
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
              <span className="text-white/70">Naples &amp; Pompeii 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Europe
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Naples &amp; Pompeii in 4 Days:
                <em className="italic text-amber-300"> Ruins, Volcanoes &amp; the Best Pizza on Earth</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Pompeii&apos;s 2,000-year-old streets frozen in ash, the crater of Vesuvius, the Amalfi Coast, Capri by ferry, and pizza that ruins every other pizza for life. The complete 4-day guide.
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

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇮🇹 Campania, Italy</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From €50/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              A city so chaotic and alive it makes Rome seem orderly, Pompeii&apos;s 2,000-year-old streets frozen in the exact moment Vesuvius buried them under 6 metres of ash, pizza invented here and still made better here than anywhere on Earth, and the Amalfi Coast an hour away with cliff roads that turn your knuckles white — Naples is the most raw and the most beautiful city in Italy.
            </p>
          </blockquote>

          {/* ── WHAT NAPLES ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Naples Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Naples is Italy with the filter removed. Founded by the Greeks as Neapolis in 470 BC, it has been continuously inhabited for over 2,500 years — longer than Rome. It was the capital of a kingdom, the largest city in Italy for centuries, and the birthplace of pizza. The centro storico is a UNESCO World Heritage Site with over 400 churches, Greek-Roman ruins under every street, and Baroque palazzi crumbling picturesquely above alleyways hung with laundry.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              But Naples is also the gateway to some of the most extraordinary archaeological sites on Earth. Pompeii, buried by Vesuvius in 79 AD, is 40 minutes away by train. Herculaneum, even better preserved, is 20 minutes. Vesuvius itself is an active volcano you can hike to the crater rim. The Amalfi Coast and Capri are day trips. Four days here barely scratches the surface, but they will be four of the most intense and rewarding days of any European trip.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The city has a reputation for being chaotic, and it is — the traffic ignores every rule, the streets are loud, and the energy is relentless. But that rawness is exactly what makes Naples extraordinary. This is not a museum city. It is alive, contradictory, and unforgettable.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="NAP" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Jun" />
              <StatCard icon="🏛️" label="UNESCO Sites" value="3 nearby" />
              <StatCard icon="💰" label="Budget From" value="€50/day" />
            </div>
          </section>

          {/* ── VISA & ENTRY ── */}
          <section id="visa" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">📋 Visa &amp; Entry Requirements</h2>
            <div className="space-y-4">
              <div className="rounded-xl p-4 border border-orange-200 bg-orange-50">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🇮🇳</span>
                  <p className="font-medium text-sm text-orange-800">Indian Passport Holders</p>
                </div>
                <div className="space-y-2">
                  {[
                    ["Visa", "Schengen visa required (apply via Italian consulate)"],
                    ["Fee", "€80 visa application fee"],
                    ["Validity", "Up to 90 days within any 180-day period"],
                    ["Processing", "15–30 business days — apply well in advance"],
                    ["Documents", "Bank statements, hotel bookings, travel insurance, itinerary"],
                    ["Tip", "Apply 6–8 weeks before departure; Schengen allows multiple EU countries in one trip"],
                  ].map(([label, detail]) => (
                    <div key={label} className="flex items-start gap-2 text-xs text-orange-900 font-light leading-relaxed">
                      <span className="font-medium min-w-[80px]">{label}:</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-4 border border-blue-200 bg-blue-50">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🌍</span>
                  <p className="font-medium text-sm text-blue-800">Western Passport Holders (US/UK/EU/AUS)</p>
                </div>
                <div className="space-y-2">
                  {[
                    ["Visa", "Visa-free for Schengen zone (90 days in any 180-day period)"],
                    ["ETIAS", "ETIAS travel authorisation required from mid-2025 — €7, apply online before travel"],
                    ["Passport", "Must be valid 3 months beyond your planned departure from Schengen area"],
                    ["Entry check", "Border officers may ask for proof of sufficient funds and return ticket"],
                    ["UK holders", "Visa-free but ETIAS required; 90-day Schengen limit applies since Brexit"],
                    ["Tip", "ETIAS takes minutes to complete and is valid for 3 years — do it at home"],
                  ].map(([label, detail]) => (
                    <div key={label} className="flex items-start gap-2 text-xs text-blue-900 font-light leading-relaxed">
                      <span className="font-medium min-w-[80px]">{label}:</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Naples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "☀️",
                  t: "Spring — Best Season",
                  d: "18–28°C, warm and sunny with manageable crowds. Pompeii is comfortable to explore all day, the Amalfi Coast roads are not yet gridlocked, and ferries to Capri run frequently. Wildflowers on Vesuvius, swimming from May. The ideal window for most travellers.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🌅",
                  t: "Autumn — Equally Excellent",
                  d: "20–26°C. The sea is still warm enough for swimming, summer crowds have thinned, and prices drop 20–30% from peak. September is arguably the single best month — warm days, fewer tourists, and the vendemmia (grape harvest) across Campania.",
                  b: "Recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🔥",
                  t: "Summer — Hot and Crowded",
                  d: "30–36°C. Pompeii at midday is genuinely dangerous heat — the site has almost no shade. The Amalfi Coast SS163 road becomes a car park. Prices peak, beaches are packed, and Naples itself empties as locals flee to the coast. If you must go, start all activities at dawn.",
                  b: "Avoid if possible",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Mar",
                  i: "🌧️",
                  t: "Winter — Mild but Quiet",
                  d: "8–15°C. Naples itself is fine in winter — museums, churches, and pizza don&apos;t require sunshine. But Capri ferries reduce to a few per day, some Amalfi Coast restaurants close November–March, and rain is frequent. Budget travellers benefit from 40–50% lower hotel prices.",
                  b: "Naples city only",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Naples</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Naples Capodichino Airport (NAP) is just 7km from the city centre. The Alibus airport shuttle runs every 20 minutes to Piazza Garibaldi (central station) for €5, taking 15–20 minutes. Taxis have a fixed €16 fare to the centre.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Direct flights to Naples (NAP)",
                  d: "Budget airlines (Ryanair, easyJet, Wizz Air) fly direct from most European cities for €30–€80. From the UK: London, Manchester, Edinburgh all have direct routes. From India: connect via Rome, Milan, or a Middle Eastern hub. Naples airport is small and efficient — you can be in the city centre within 30 minutes of landing.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚂",
                  t: "Train from Rome (recommended if combining)",
                  d: "Rome Termini to Naples Centrale: 1 hr 10 min on the high-speed Frecciarossa or Italo trains, €15–€45 depending on how far in advance you book. Trains run every 30 minutes. This is one of the best train connections in Europe — fast, comfortable, and often cheaper than flying.",
                  b: "From Rome",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚢",
                  t: "Ferry from Palermo / Cagliari",
                  d: "Overnight ferries from Sicily (Palermo, 10 hrs) and Sardinia (Cagliari, 14 hrs) dock at Molo Beverello in central Naples. Useful if combining with a Sicily or Sardinia trip. Tirrenia and GNV operate the routes, from €40 for a seat.",
                  b: "If island-hopping",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Drive from Rome or the Amalfi Coast",
                  d: "Rome to Naples via the A1 autostrada: 2.5 hrs, €20 in tolls. However, driving in Naples itself is genuinely inadvisable — the traffic is legendary, ZTL restricted zones will get you fined, and parking is nearly impossible. Park at the hotel and use public transport.",
                  b: "Not recommended in city",
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

          {/* ── 4-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Naples &amp; Pompeii Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary covers the essential Naples experience — Pompeii, Vesuvius, the historic centre, the Amalfi Coast or Capri, and enough pizza to last a lifetime.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Naples Centro Storico · Archaeological Museum · Spaccanapoli"
                cost="€30–€50"
                items={[
                  "Morning: Arrive in Naples and drop luggage at your hotel or hostel in the Centro Storico or Chiaia neighbourhood. Get your bearings with a walk along the Lungomare seafront — Castel dell&apos;Ovo, the bay, and Vesuvius in the distance.",
                  "Walk Spaccanapoli — the ancient Greek-Roman street that literally splits Naples in two. It runs arrow-straight through the centro storico for over 1km, lined with Baroque churches, bookshops, pastry counters, and Maradona shrines on every corner.",
                  "Pizza lunch at L&apos;Antica Pizzeria da Michele (Via Cesare Sersale 1) — cash only, two pizzas on the menu (Margherita €5, Marinara €4), no frills, and transcendent. The queue looks intimidating but moves in 10–15 minutes. They&apos;ve been doing this since 1870.",
                  "Afternoon: National Archaeological Museum (MANN) — €15 entry. Arguably the world&apos;s finest collection of Roman art. Everything removed from Pompeii and Herculaneum over 300 years of excavation is here — the Alexander Mosaic, the Farnese Hercules, and the Secret Room with erotic art. Visit MANN before Pompeii and the ruins make 10 times more sense.",
                  "Walk through the Spanish Quarter (Quartieri Spagnoli) — labyrinthine alleyways, hanging laundry above your head, street-level workshops, and the most authentic Naples atmosphere anywhere in the city.",
                  "Evening: Street food on Via dei Tribunali — cuoppo (fried seafood cone, €5), pizza fritta (fried stuffed pizza, €3), sfogliatella pastry (€2–3). End at Castel dell&apos;Ovo for sunset over the bay — free to walk to.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Pompeii Ruins · Mount Vesuvius Crater Hike"
                cost="€40–€60"
                items={[
                  "8:00am: Circumvesuviana train from Naples Porta Nolana or Garibaldi to Pompeii Scavi — Villa dei Misteri station (35 min, €3.60 each way). Trains run every 30 minutes. Buy tickets at the station counter.",
                  "Pompeii archaeological site — €16 entry. Arrive at 9am opening to beat the tour groups. The site is 66 hectares (the size of a small town) so plan at least 3–4 hours. Essential stops: the Forum, Via dell&apos;Abbondanza, the Lupanare (brothel with menu frescoes), the House of the Faun, the Villa of the Mysteries, and the Garden of the Fugitives with its plaster-cast bodies.",
                  "Hire a guide at the entrance (€80–120 for a 2-hour tour, up to 10 people) — the difference in understanding is enormous. They know which houses are open on rotation each day and can explain context that&apos;s invisible without guidance.",
                  "Bring water, sunscreen, hat, and good walking shoes. There is almost no shade in Pompeii and the stone streets radiate heat. Midday in summer is genuinely dangerous.",
                  "Afternoon: Bus from Pompeii to Vesuvius crater car park (EAV bus, €13 return including park entrance, 50 min). From the car park, it&apos;s a 30–40 minute walk up a well-marked gravel path to the crater rim. Look down into an active volcano — the last eruption was 1944.",
                  "Return to Naples by 6–7pm. Dinner on Via dei Tribunali — Sorbillo (Via dei Tribunali 32) for another legendary Naples pizza, or a proper trattoria for spaghetti alle vongole with local Lacryma Christi wine, €15–20.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Amalfi Coast Day Trip · Positano · Ravello"
                cost="€40–€70"
                items={[
                  "Early morning: Two options. Budget: SITA bus from Naples to Sorrento (1 hr, €4), then the iconic SS163 coast road bus to Positano and Amalfi. Faster: ferry from Molo Beverello to Positano (1.5 hrs, €25–35 one way) — arriving by sea is the most spectacular approach.",
                  "Positano: coloured houses cascading down the cliff, the Chiesa di Santa Maria Assunta with its majolica-tiled dome, Fornillo Beach for swimming (less crowded than Spiaggia Grande). A granita al limone at a seafront bar is essential.",
                  "Bus or ferry to Amalfi town (30 min, €2–8 depending on mode). The Duomo di Amalfi with its Arab-Norman architecture is worth the climb. Walk up the Valle dei Mulini ravine to see the ruined paper mills — Amalfi invented European paper manufacturing.",
                  "Optional extension: Bus to Ravello (30 min, €2) — a cliffside village 350 metres above the sea with the best views on the entire coast. Villa Rufolo gardens (€7) inspired Wagner&apos;s Parsifal. Villa Cimbrone terrace is called the Terrace of Infinity for good reason.",
                  "Return to Naples by 7–8pm. The coast road at sunset is worth the slow bus ride back.",
                  "Evening: dinner in the Borgo Marinari quarter below Castel dell&apos;Ovo — fresh seafood with bay views, €20–30.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Herculaneum · Naples Underground · Farewell Pizza"
                cost="€35–€55"
                items={[
                  "Morning: Circumvesuviana train to Ercolano Scavi (20 min from Naples, €2.20), then 10-minute walk downhill to Herculaneum. Entry €13. Herculaneum was buried in superheated volcanic mud rather than ash, so preservation is extraordinary — wooden furniture, mosaics, organic matter, even food survived 2,000 years.",
                  "Herculaneum is much smaller than Pompeii but far better preserved and significantly less crowded. The House of the Deer, the House of Neptune and Amphitrite mosaic, and the boat chambers where 300 skeletons were found fleeing towards the sea are unforgettable. Allow 2–3 hours.",
                  "Return to Naples by midday. Lunch: Di Matteo (Via dei Tribunali 94) — their pizza fritta is legendary and costs €3. Or Pizzeria Starita for a proper sit-down pizza with buffalo mozzarella.",
                  "Afternoon: Napoli Sotterranea (Naples Underground) — €12, guided tours every hour. Walk 40 metres below the streets through Greek-Roman aqueducts, WWII air-raid shelters, and tunnels that have been in continuous use for 2,400 years. One of the most unique experiences in Naples.",
                  "Optional: Cappella Sansevero (€8) — a tiny Baroque chapel containing the Veiled Christ sculpture, widely considered one of the greatest marble sculptures ever created. The marble veil looks genuinely transparent. Book online as queues are long.",
                  "Farewell dinner: Choose your final pizza carefully. Da Michele for purity, Sorbillo for variety, or Concettina ai Tre Santi in the Sanita district for a modern take. A final sfogliatella and espresso on the Lungomare, watching the sun set behind Vesuvius.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Naples &amp; Pompeii" onPlanTrip={() => setModalOpen(true)} />

          {/* ── POMPEII & RUINS GUIDE ── */}
          <section id="ruins" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Pompeii &amp; Archaeological Sites Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important archaeological sites in order of priority. Entry fees as of early 2026. The area around Naples has the highest concentration of Roman-era sites anywhere in the world.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Pompeii",
                  e: "€16",
                  d: "The most famous archaeological site on Earth. A complete Roman city of 11,000 people, frozen in 79 AD by Vesuvius. 66 hectares — the Forum, houses with intact frescoes, the amphitheatre, bakeries with bread still in the oven. Minimum 3–4 hours. Arrive at 9am opening. Hire a guide.",
                  t: "Must see · 3–4 hrs",
                },
                {
                  n: "Herculaneum (Ercolano)",
                  e: "€13",
                  d: "Buried in volcanic mud rather than ash, Herculaneum&apos;s preservation is staggering — wooden furniture, mosaics, organic matter survived intact for 2,000 years. Smaller than Pompeii, less crowded, and in many ways more extraordinary. The boat chambers and the House of Neptune mosaic are unforgettable.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "National Archaeological Museum (MANN)",
                  e: "€15",
                  d: "Everything removed from Pompeii and Herculaneum over three centuries of excavation. The Alexander Mosaic, the Farnese Hercules, the Secret Room. Visit before Pompeii for context that transforms the experience. The Farnese Bull alone is worth the admission.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Mount Vesuvius Crater",
                  e: "€10 (park entry)",
                  d: "A 30–40 minute hike from the upper car park to the crater rim of Europe&apos;s most dangerous active volcano. On a clear day: the entire Bay of Naples, Capri, the Amalfi Coast. The last eruption was 1944. Morning visits have the best visibility before haze builds.",
                  t: "Highly recommended · 2 hrs",
                },
                {
                  n: "Naples Underground (Napoli Sotterranea)",
                  e: "€12",
                  d: "Guided tours descend 40 metres below the streets into Greek-Roman aqueducts, cisterns, and WWII air-raid shelters. 2,400 years of continuous underground use. Tours run every hour in English. Genuinely atmospheric and unlike anything above ground.",
                  t: "Recommended · 1.5 hrs",
                },
                {
                  n: "Cappella Sansevero",
                  e: "€8",
                  d: "A small Baroque chapel housing the Veiled Christ — a marble sculpture so realistic the veil appears transparent. Widely considered one of the greatest sculptures ever created. Book online to avoid the long queue. Photography prohibited inside.",
                  t: "Recommended · 45 min",
                },
                {
                  n: "Capri (day trip)",
                  e: "€23 ferry each way",
                  d: "Italy&apos;s most glamorous island, 50 minutes by ferry from Molo Beverello. The Blue Grotto (€15 + €18 rowboat), Faraglioni sea stacks, Monte Solaro chairlift (€14), Villa Jovis (€8). Best as a full-day trip. Book ferry tickets in advance during peak season.",
                  t: "Day trip · Full day",
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
            title="Naples &amp; Pompeii — Ruins, Volcanoes &amp; the Amalfi Coast"
            subtitle="Southern Italy&apos;s most extraordinary landscapes and archaeology."
            spots={[
              {
                name: "Pompeii Ruins with Vesuvius",
                query: "pompeii ruins mount vesuvius volcano naples italy ancient roman",
                desc: "The Forum of Pompeii with Vesuvius looming behind — the most iconic view of the ancient city frozen in time.",
              },
              {
                name: "Naples Centro Storico",
                query: "naples centro storico spaccanapoli street italy historic alleyway",
                desc: "The narrow streets of Spaccanapoli — Baroque churches, hanging laundry, and 2,500 years of continuous habitation.",
              },
              {
                name: "Amalfi Coast Positano",
                query: "positano amalfi coast colourful houses cliff italy mediterranean",
                desc: "Positano&apos;s pastel-coloured houses cascading down the cliff face to the Mediterranean below.",
              },
              {
                name: "Mount Vesuvius Crater",
                query: "mount vesuvius crater rim hike naples bay view italy volcano",
                desc: "The crater rim of Vesuvius — an active volcano with panoramic views across the Bay of Naples to Capri.",
              },
              {
                name: "Herculaneum Ruins",
                query: "herculaneum ercolano ruins naples italy preserved roman mosaics",
                desc: "Herculaneum&apos;s extraordinarily preserved ruins — wooden beams, mosaics, and organic matter intact after 2,000 years.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Naples is one of the most affordable major cities in Western Europe. Pizza costs €5, espresso €1, and a Circumvesuviana day ticket covers transport to Pompeii and Herculaneum. The main costs are entry fees and day-trip ferries.
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
                    ["🏨 Accommodation", "€15–25/night", "€55–80/night", "€180–350/night"],
                    ["🍕 Food & drink", "€12–18/day", "€30–45/day", "€80–140/day"],
                    ["🚂 Transport", "€8–12/day", "€15–20/day", "€60–120/day"],
                    ["🏛️ Activities & entries", "€15–25/day", "€25–40/day", "€80–200/day"],
                    ["TOTAL (per person)", "€50/day", "€110/day", "€270/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€50/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostel dorm in Centro Storico, pizza and street food, Circumvesuviana trains, Pompeii entry. Naples is a backpacker paradise — incredible food for almost nothing.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€110/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">3-star hotel in Chiaia, sit-down restaurants with wine, guided Pompeii tour, Capri ferry. The sweet spot for comfort without breaking the bank.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (€270/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Grand Hotel Vesuvio on the Lungomare, private archaeological guides, Michelin dining, private boat along the Amalfi Coast. Southern Italy at its finest.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Naples</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The best neighbourhoods for visitors are Centro Storico (historic centre, walkable to everything), Chiaia (elegant, safe, seafront), and the Spanish Quarter (atmospheric, budget-friendly). Avoid staying near Piazza Garibaldi station unless on a very tight budget.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Grand Hotel Vesuvio",
                  type: "5-star luxury · Lungomare seafront",
                  price: "From €250/night",
                  badge: "Most iconic",
                  desc: "Naples&apos; most legendary hotel, directly on the Lungomare with bay and Vesuvius views from every room. Oscar Wilde, Humphrey Bogart, and Bill Clinton have stayed here. The rooftop terrace bar at sunset is one of the great hotel experiences in Italy.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hotel Piazza Bellini",
                  type: "Boutique 4-star · Centro Storico",
                  price: "From €90/night",
                  badge: "Best mid-range",
                  desc: "A beautifully converted 16th-century palazzo on one of Naples&apos; liveliest squares. Walking distance to MANN, Spaccanapoli, and the best pizzerias. The rooftop terrace has views over the centro storico rooftops. Excellent value for a 4-star in this location.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Hostel of the Sun",
                  type: "Hostel · Near Molo Beverello port",
                  price: "From €22/night",
                  badge: "Best budget",
                  desc: "Consistently rated one of Europe&apos;s best hostels. Clean, social, excellent staff who help with Pompeii logistics and Amalfi Coast planning. Walking distance to the ferry terminal for Capri and Amalfi. Dorms and private rooms available.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Airbnb in the Spanish Quarter",
                  type: "Apartment rental · Quartieri Spagnoli",
                  price: "€40–80/night",
                  badge: "Most atmospheric",
                  desc: "The Spanish Quarter is the most authentic neighbourhood in Naples — narrow alleyways, local markets, Maradona shrines. Apartments here are excellent value and put you in the heart of real Neapolitan life. Slightly noisier than Chiaia but infinitely more characterful.",
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

          {/* ── PIZZA & FOOD GUIDE ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍕 Pizza &amp; Food Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Naples invented pizza and still makes it better than anywhere else on Earth. Neapolitan pizza has DOC (Denominazione di Origine Controllata) protection — San Marzano tomatoes, fior di latte or buffalo mozzarella, wood-fired at 485°C for 60–90 seconds. Beyond pizza, Naples has one of Italy&apos;s richest street food cultures.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "L&apos;Antica Pizzeria da Michele",
                  t: "Legendary pizzeria · Via Cesare Sersale 1",
                  d: "Two pizzas on the menu: Margherita (€5) and Marinara (€4). Cash only. No reservations, no website, no frills — just the most famous pizza in the world, made the same way since 1870. The queue moves fast (10–15 minutes). Your €5 Margherita here will ruin every other pizza for life.",
                  b: "Essential",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Sorbillo",
                  t: "Historic pizzeria · Via dei Tribunali 32",
                  d: "Gino Sorbillo represents the third generation of a pizza dynasty. More variety than Da Michele — try the ripieno al forno (folded, stuffed, baked) or a classic Margherita with buffalo mozzarella (€7–8). Slightly more comfortable seating. Reservations accepted for dinner.",
                  b: "Top tier",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Di Matteo",
                  t: "Street food & pizza · Via dei Tribunali 94",
                  d: "Famous for their pizza fritta — a deep-fried stuffed pizza pocket that costs €3 and is one of the great street foods of the world. Bill Clinton ordered one here during the 1994 G7 summit. Also excellent regular pizza. The most affordable of the famous trio.",
                  b: "Best street food",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Street Food on Via dei Tribunali",
                  t: "Street food corridor · Centro Storico",
                  d: "The entire length of Via dei Tribunali is a street food paradise. Cuoppo (fried seafood cone, €5), arancini (€3), sfogliatella (flaky ricotta pastry, €2–3), baba al rum (€2), and frittatina di pasta (fried pasta cake, €3). You can eat extraordinarily well for €10–15 without ever sitting down.",
                  b: "Must walk",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Seafood at Borgo Marinari",
                  t: "Waterfront dining · Below Castel dell&apos;Ovo",
                  d: "The small fishing harbour below Castel dell&apos;Ovo has several excellent seafood restaurants. Spaghetti alle vongole (clams), frittura di paranza (mixed fried fish), and fresh catch of the day with local white wine. More expensive than centro storico (€25–40 for a full meal) but the setting is beautiful.",
                  b: "Special dinner",
                  c: "bg-blue-50 border-blue-200",
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
            destination="Naples Italy"
            hotels={[
              {
                name: "Grand Hotel Vesuvio",
                type: "5-star luxury · Lungomare seafront",
                price: "From €250/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/it/grand-vesuvio.html?aid=2820480",
              },
              {
                name: "Hotel Piazza Bellini",
                type: "Boutique 4-star · Centro Storico",
                price: "From €90/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/it/piazza-bellini.html?aid=2820480",
              },
              {
                name: "Hotel Santa Lucia",
                type: "4-star seafront · Lungomare",
                price: "From €120/night",
                rating: "4",
                badge: "Bay views",
                url: "https://www.booking.com/hotel/it/santa-lucia-naples.html?aid=2820480",
              },
              {
                name: "Hostel of the Sun",
                type: "Top-rated hostel · Near port",
                price: "From €22/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/it/hostel-of-the-sun.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Pompeii & Vesuvius Day Trip from Naples",
                duration: "8 hrs",
                price: "From €55/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=pompeii+vesuvius+naples&partner_id=PSZA5UI",
              },
              {
                name: "Amalfi Coast Day Trip from Naples",
                duration: "10 hrs",
                price: "From €65/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=amalfi+coast+naples&partner_id=PSZA5UI",
              },
              {
                name: "Capri Island Day Trip with Blue Grotto",
                duration: "Full day",
                price: "From €80/person",
                url: "https://www.getyourguide.com/s/?q=capri+blue+grotto+naples&partner_id=PSZA5UI",
              },
              {
                name: "Naples Underground Walking Tour",
                duration: "2 hrs",
                price: "From €15/person",
                url: "https://www.getyourguide.com/s/?q=naples+underground+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Naples &amp; Pompeii</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🍕",
                  title: "Queue at Da Michele — it moves fast",
                  desc: "The queue outside L&apos;Antica Pizzeria da Michele looks intimidating but moves in 10–15 minutes. They only make two pizzas (Margherita €5, Marinara €4), cash only, no frills. Your €5 Margherita here will genuinely ruin every other pizza you eat for the rest of your life.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌋",
                  title: "Hike Vesuvius in the morning",
                  desc: "The best views from Vesuvius crater happen before 11am, before haze builds over the bay. The 30–40 minute hike from the car park is easy to moderate. Bring water and a layer — it can be windy at the top even on a warm day. The last eruption was 1944; volcanologists say it is overdue.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🏛️",
                  title: "Visit MANN before Pompeii",
                  desc: "The National Archaeological Museum contains everything removed from Pompeii and Herculaneum over 300 years. Seeing the artefacts first gives context that transforms the ruins from interesting to extraordinary. The Alexander Mosaic, the Secret Room, and the Farnese Hercules alone are worth the €15 entry.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🚂",
                  title: "Watch your belongings on the Circumvesuviana",
                  desc: "The Circumvesuviana train to Pompeii and Herculaneum is known for pickpockets, particularly on the crowded Naples–Pompeii run. Keep your bag in front of you, phone out of back pockets, and stay alert. This should not stop you using the train — it&apos;s the best way to get there — just be sensible.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🌊",
                  title: "Avoid the Amalfi Coast in July–August",
                  desc: "The SS163 coast road becomes a car park in summer, beaches are packed, prices double, and the heat is extreme. April–June and September–October are when the coast is actually beautiful. If you must go in summer, arrive by ferry and depart before noon.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🚢",
                  title: "Use Naples as a southern Italy hub",
                  desc: "From Naples you can reach the Amalfi Coast (1 hr), Capri (50 min ferry), Pompeii (35 min train), Herculaneum (20 min), Caserta Royal Palace (40 min), and even Matera (3 hrs). Book accommodation centrally and day-trip outwards — four days here can unlock an entire region.",
                  color: "bg-green-50 border-green-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Naples &amp; Pompeii" />

          {/* Combine With */}
          <CombineWith currentSlug="naples-pompeii-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Naples safe for tourists?",
                  a: "Naples has a reputation that is considerably worse than reality. The tourist areas — Centro Storico, Chiaia, Vomero, and the Lungomare — are perfectly safe during the day and evening. Be sensible at night in the Spanish Quarter and near the train station, keep your phone out of sight, and use a crossbody bag. Millions of tourists visit without incident every year.",
                },
                {
                  q: "How far is Pompeii from Naples?",
                  a: "Pompeii Scavi station is 35 minutes from Naples Garibaldi on the Circumvesuviana train, running every 30 minutes. The ticket costs €3.60 each way. You can combine with Herculaneum (20 min from Naples, €2.20) on the same train line.",
                },
                {
                  q: "What is the best pizza in Naples?",
                  a: "L&apos;Antica Pizzeria da Michele (Via Cesare Sersale 1) is the most famous — cash only, two pizzas on the menu, no frills, transcendent. Sorbillo on Via dei Tribunali is excellent and slightly less chaotic. Di Matteo on the same street has the best pizza fritta. All three cost €4–8 per pizza.",
                },
                {
                  q: "When is the best time to visit Naples?",
                  a: "April–June and September–October are ideal — warm enough for beach and boat trips, not overwhelmingly hot, and crowds are manageable. July–August are extremely hot (35°C+), the Amalfi Coast road is gridlocked, and prices peak. November–March is mild and uncrowded but some Amalfi Coast restaurants and Capri ferries operate on reduced schedules.",
                },
                {
                  q: "Should I visit Pompeii or Herculaneum?",
                  a: "Both. They are complementary experiences on the same train line. Pompeii is vast, dramatic, and overwhelming — a complete Roman city. Herculaneum is intimate, better preserved, and less crowded. If you can only choose one, Pompeii for sheer scale and impact. But Herculaneum is only 20 minutes from Naples and costs €13 — it would be a shame to skip it.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Naples &amp; Pompeii trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/naples-pompeii-4-days/best-time", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/naples-pompeii-4-days/couples-guide", label: "Couples guide", icon: "💑" },
                { href: "/blog/naples-pompeii-4-days/packing-list", label: "Packing list", icon: "🧳" },
                { href: "/blog/amalfi-coast-5-days", label: "Amalfi Coast guide", icon: "🌊" },
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
          <RelatedGuides currentSlug="naples-pompeii-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Rome in 4 Days — Colosseum &amp; Vatican", href: "/blog/rome-4-days" },
                { label: "Amalfi Coast 5 Days — Cliffside Drive", href: "/blog/amalfi-coast-5-days" },
                { label: "Sicily 7 Days — Ancient &amp; Baroque", href: "/blog/sicily-7-days" },
                { label: "Milan in 3 Days — Fashion &amp; Culture", href: "/blog/milan-3-days" },
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
