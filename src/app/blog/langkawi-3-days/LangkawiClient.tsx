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
const LANGKAWI_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Langkawi Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "⛴️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",  emoji: "🗺️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Langkawi 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Langkawi in 3 Days — cable car, mangrove eagles and duty-free rum&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/langkawi-3-days"
        imageUrl="https://images.unsplash.com/photo-1559628233-2b8ac8f3658f?w=1200&q=80"
        description="Langkawi in 3 Days: Cable car, mangrove eagle tours, Pantai Cenang beach, duty-free shopping and island hopping — complete travel guide with real MYR costs."
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
export default function LangkawiClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={LANGKAWI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Langkawi" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="langkawi beach tropical turquoise water malaysia island palm trees andaman"
            fallback="https://images.unsplash.com/photo-1559628233-2b8ac8f3658f?w=1600&q=80"
            alt="Langkawi tropical beach with turquoise water and palm trees Malaysia island"
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
              <span className="text-white/70">Langkawi 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-teal-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Duty-Free Island
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Langkawi in 3 Days:
                <em className="italic text-amber-300"> Eagles, Cable Cars &amp; the Andaman Sea</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Malaysia&apos;s 99-island duty-free archipelago — where rum costs a third of Singapore prices, a cable car lifts you above jungle to views of Thailand, and Brahminy kites dive for fish at arm&apos;s length in the mangroves. The complete guide.
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
              <span>🇲🇾 Kedah, Malaysia</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From MYR 100/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-teal-500 pl-6 mb-10 bg-teal-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Langkawi is what duty-free actually looks like when it&apos;s done properly — rum at a quarter of Singapore prices, a cable car that climbs above ancient rainforest to views of Thailand across the Andaman Sea, and mangrove channels where sea eagles dive within metres of your kayak. Malaysia&apos;s most underrated island.
            </p>
          </blockquote>

          {/* ── WHAT LANGKAWI ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Langkawi Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Langkawi is a UNESCO Global Geopark — an archipelago of 99 islands off the northwest coast of Malaysia, separated from the Thai border by about 50 kilometres of the Andaman Sea. The main island, Pulau Langkawi, is larger than Singapore. It has one international airport (LGK), direct flights from Kuala Lumpur, Bangkok, and Singapore, and a ferry connection from Penang (2 hours 45 minutes, MYR 70).
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The duty-free status is the most immediately practical thing to know: Langkawi was granted duty-free status in 1987 to boost tourism, and the prices on alcohol, cigarettes, and chocolate are genuinely striking. A bottle of rum that costs MYR 80 in Kuala Lumpur costs MYR 28 here. Wine that would be MYR 65 on the mainland is MYR 25. You can drink beer at the beach bar for MYR 8. This isn&apos;t a small discount — it&apos;s approximately one-third of the price you&apos;d pay in Singapore.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              But beyond the duty-free economics, Langkawi has a genuinely wild interior: ancient rainforest covering the central mountains (some of the oldest rock formations in Southeast Asia), limestone karst formations rising from the sea in Kilim Geoforest Park, and a remarkable concentration of raptors — Brahminy kites and white-bellied sea eagles — feeding along the mangrove channels and around Eagle Square near Kuah. The island gets its name from the Malay word for reddish-brown eagle, &quot;helang,&quot; which refers to the Brahminy kite.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="⛴️" label="From Penang Ferry" value="2 hrs 45 min" />
              <StatCard icon="🌡️" label="Best Season" value="Dec–Mar" />
              <StatCard icon="🦅" label="Eagle Species" value="2 (resident)" />
              <StatCard icon="💰" label="Budget From" value="MYR 100/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Langkawi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Dec–Mar",
                  i: "☀️",
                  t: "Peak Dry Season — Best Time",
                  d: "26–32°C, low humidity, calm Andaman Sea. The best conditions for boat tours, island hopping, snorkelling, and swimming. December and January are the clearest months. Book accommodation well ahead — Christmas and New Year fill Pantai Cenang weeks in advance.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Oct–Nov",
                  i: "🌤️",
                  t: "Shoulder Season — Good Value",
                  d: "Transitional weather — some rain but mostly sunny. Sea conditions improve through November. October can have brief afternoon showers but mornings are often clear. Prices are lower than peak season and the island is less crowded.",
                  b: "Good value",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Apr–Sep",
                  i: "🌧️",
                  t: "Southwest Monsoon — Avoid West Coast",
                  d: "Langkawi&apos;s west coast (Pantai Cenang, where most accommodation is) faces the southwest monsoon from May to September. Seas are rough, many boat tours cancel, and persistent rain is common. Some travellers visit anyway for low prices and empty beaches, but be aware of the limitations.",
                  b: "Not recommended",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Apr–Oct",
                  i: "⛴️",
                  t: "Koh Lipe Ferry Season",
                  d: "The seasonal speedboat ferry to Koh Lipe, Thailand (1.5 hours) operates roughly April to October — coinciding partly with the southwest monsoon on Langkawi. Check current schedules (Satun Pakbara Speedboat Club). Cross-border island hopping between Langkawi and Koh Lipe is one of Southeast Asia&apos;s most underrated routes.",
                  b: "Ferry season",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">⛴️ Getting to Langkawi</h2>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-teal-800 font-light">
                <strong className="font-medium">Key detail:</strong> Langkawi has its own international airport (LGK — Langkawi International Airport), 10 minutes from Pantai Cenang. The Kuah Ferry Terminal is on the east side of the island, 30 minutes from Pantai Cenang. Most travellers fly from Kuala Lumpur (1 hour, from MYR 80 on AirAsia or Firefly) or take the ferry from Penang.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly from Kuala Lumpur (recommended)",
                  d: "KL Sentral → Langkawi (LGK): 1 hour, from MYR 80 one-way on AirAsia or Firefly. Multiple daily flights from both KLIA and Subang (SZB). The airport is tiny and charming — luggage arrives within minutes. Taxi or Grab from the airport to Pantai Cenang costs MYR 20–25.",
                  b: "Fastest option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "⛴️",
                  t: "Ferry from Penang (Georgetown)",
                  d: "Penang Ferry Terminal → Kuah Jetty Langkawi: 2 hours 45 minutes, MYR 70 one-way. Ferries run multiple times daily (check Langkawi Ferry Service or Bahagia Express schedules). A scenic crossing — you pass small islands and often see flying fish. From Kuah Jetty, take a taxi to Pantai Cenang (MYR 30–40).",
                  b: "Scenic route",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "⛴️",
                  t: "Ferry from Kuala Perlis or Kuala Kedah",
                  d: "The shortest ferry crossings to Langkawi are from Kuala Perlis (1 hour 15 minutes, MYR 23) and Kuala Kedah (1 hour 45 minutes, MYR 36). These are better options if you&apos;re travelling overland from northern Malaysia or arriving from Thailand by bus. Buses from Penang to Kuala Perlis take about 2 hours.",
                  b: "Budget overland",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "⛴️",
                  t: "Ferry from Koh Lipe, Thailand (seasonal)",
                  d: "The Satun Pakbara Speedboat Club runs a seasonal ferry between Koh Lipe and Langkawi (approximately April to October, 1.5 hours). You cross an international border — you clear Thai immigration at Koh Lipe and Malaysian immigration at Kuah Jetty. A genuine cross-border island hop.",
                  b: "Seasonal only",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Langkawi Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This is a budget-to-mid-range plan — activities can be swapped for private tours at higher cost. Getting around requires renting a scooter (MYR 35/day) or car (MYR 70–100/day) — there is almost no public transport between beaches and attractions.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Pantai Cenang Beach · Eagle Square · Duty-Free Exploration"
                cost="MYR 80–130 total"
                items={[
                  "Arrive at Langkawi International Airport (LGK) or Kuah Jetty by ferry. Take a taxi or Grab to Pantai Cenang — the island&apos;s main beach and tourism hub, 10 minutes from the airport.",
                  "Check in to your accommodation on or near Pantai Cenang. Budget guesthouses cost MYR 50–100/night; mid-range boutique hotels MYR 200–450/night.",
                  "Rent a scooter (MYR 35/day) immediately from any shop on Jalan Pantai Cenang — this is non-negotiable for getting around the island independently.",
                  "Afternoon: Pantai Cenang beach (free). The most popular beach on the island — 2km of flat white sand facing west into the Andaman Sea. Good for swimming in the dry season. The beach is calm and the water is clear from December to March.",
                  "3:00pm: Duty-free shopping along Jalan Pantai Cenang and at Cenang Mall. Rum, wine, beer, cigarettes, and chocolate are all sold at dramatically discounted prices. A bottle of rum costs MYR 28 here versus MYR 80 in KL. Pick up drinks for your beach evening now.",
                  "5:30pm: Dataran Lang (Eagle Square) at the Kuah ferry terminal, 30 minutes east of Pantai Cenang by scooter. The giant eagle sculpture (Langkawi&apos;s icon) overlooks the Strait of Malacca. At dusk, fishing boats return and discard fish scraps — Brahminy kites and white-bellied sea eagles circle in dozens, diving and catching fish from the water. Bring a camera. This is free and genuinely spectacular.",
                  "7:30pm: Dinner at Cenang Mall food court or the warung stalls along Jalan Pantai Cenang — nasi goreng, mee goreng, or grilled seafood at MYR 8–20 per dish. End the evening with an MYR 8 beer from a duty-free shop on the beach.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Cable Car & SkyBridge · Datai Bay · Pantai Tengah Sunset"
                cost="MYR 90–140 total"
                items={[
                  "8:30am: Drive 25 minutes north to Oriental Village at Burau Bay. Arrive early — the cable car gets very busy by mid-morning.",
                  "9:00am: Langkawi Cable Car (MYR 55 return, includes gondola). A 15-minute ride up to the summit of Gunung Mat Cincang (708m) — one of the steepest cable cars in the world. On clear mornings, you can see the Thai islands of Ko Tarutao and Ko Adang across the Andaman Sea.",
                  "At the summit: SkyBridge (MYR 10 extra) — a curved suspension pedestrian bridge hanging 100 metres above the jungle gorge on the summit ridge. The views down into the forest canopy and across the archipelago are extraordinary. The bridge is 125 metres long and sways noticeably in the wind.",
                  "11:30am: Drive 15 minutes north along the coast to Datai Bay — the most beautiful bay on the island, bordered by ancient rainforest (some of Malaysia&apos;s oldest geological formations). The beach is not accessible to non-hotel guests but the coastal road through the rainforest is worth the drive.",
                  "1:00pm: Lunch at Pantai Kok or back at Oriental Village (MYR 15–35 for a meal).",
                  "3:00pm: Pantai Tengah beach — quieter and less commercial than Pantai Cenang, 5 minutes south by scooter. Fewer beach bars, better swimming, and a local atmosphere.",
                  "5:30pm: Return to Pantai Cenang for sunset directly over the Andaman Sea. The beach faces due west — in the dry season with clear skies, the sun drops into the sea in a clean orange line. Bring a drink from a duty-free shop and sit on the sand.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Mangrove Kayak · Kilim Geoforest Park · Island Hopping Departure"
                cost="MYR 110–180 total"
                items={[
                  "8:30am: Join a mangrove kayak tour through Kilim Geoforest Park (MYR 80–120 for a shared 3-hour tour, departing from the north of the island near Jalan Air Hangat). Book the night before through your accommodation or any tour operator on Jalan Pantai Cenang.",
                  "The kayak tour takes you through limestone karst formations rising directly from the sea, mangrove tunnels so narrow the canopy closes overhead, and open tidal channels. Eagles are the highlight — your guide carries fish scraps and feeds them to Brahminy kites that dive within 2–3 metres of the kayak.",
                  "The Bat Cave: accessible by kayak — a limestone cave with thousands of cave swiftlets. The guano smell is strong but the bats are extraordinary.",
                  "Monitor lizards on the mangrove banks, long-tailed macaques in the trees, kingfishers darting through the roots. This is one of the best wildlife experiences in all of Malaysia.",
                  "11:30am: Return. Lunch near Pantai Cenang (MYR 15–30).",
                  "2:00pm: Optional — island hopping boat tour (MYR 35–50 per person on a shared tour, 3 hours) visiting Pulau Dayang Bunting (the Pregnant Maiden Lake — a freshwater lake inside an island, good for swimming), Pulau Beras Basah (good snorkelling), and one or two deserted beaches.",
                  "Evening: Final sunset at Pantai Cenang. Last duty-free shopping before departure. The ferry back to Penang departs Kuah Jetty at multiple times daily — the last evening sailing is usually around 6:00–7:00pm.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Langkawi" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🗺️ Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The main attractions in order of priority. Entry prices as of early 2026. Most attractions are a 20–30 minute scooter ride from Pantai Cenang.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Langkawi Cable Car & SkyBridge",
                  e: "MYR 55 (cable car) + MYR 10 (SkyBridge)",
                  d: "Oriental Village, Burau Bay. The 15-minute gondola ride to the summit of Gunung Mat Cincang is one of the steepest cable car experiences in Southeast Asia. The SkyBridge at the top is a 125-metre curved suspension bridge above the jungle. Views across the archipelago to Thailand on clear days.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Kilim Geoforest Park (Mangrove Tour)",
                  e: "MYR 80–120 (shared tour)",
                  d: "Limestone karst formations, mangrove channels, eagle feeding, bat caves, and monitor lizards. One of the best wildlife experiences in Malaysia. Shared tours depart at 8:30–9:00am. Private tours (MYR 200) offer more flexibility and closer eagle encounters.",
                  t: "Must do · 3 hrs",
                },
                {
                  n: "Dataran Lang (Eagle Square)",
                  e: "Free",
                  d: "The giant Brahminy kite sculpture at Kuah ferry terminal is Langkawi&apos;s most recognisable symbol. At dusk, when fishing boats return, real eagles gather in dozens above the square, diving for fish scraps. The best eagle-watching on the island outside of the mangrove tour.",
                  t: "Sunset · 1 hr",
                },
                {
                  n: "Pantai Cenang",
                  e: "Free",
                  d: "The main beach — 2km of flat white sand facing west for sunset. Best swimming in December–March (calm seas). Beach bars, duty-free shops, and warungs line the road behind the beach. The most convenient base for exploring the island.",
                  t: "Beach / Sunset",
                },
                {
                  n: "Island Hopping (Pulau Dayang Bunting)",
                  e: "MYR 35–50 (shared boat, 3 hrs)",
                  d: "Boat tours visit Pulau Dayang Bunting (the Pregnant Maiden Lake — a freshwater lake inside a jungle island, excellent for swimming), Pulau Beras Basah (snorkelling), and one or two deserted beaches. Shared tours depart from Kuah Jetty or the main beach jetties.",
                  t: "Half-day",
                },
                {
                  n: "Datai Bay",
                  e: "Free (road access)",
                  d: "The most beautiful bay on the island, on the northwest coast, surrounded by ancient rainforest. The beaches at Datai Bay are accessible only to guests of The Datai Langkawi and Four Seasons Langkawi. The coastal road through the rainforest is worth driving regardless.",
                  t: "Scenic drive",
                },
                {
                  n: "Telaga Tujuh (Seven Wells Waterfall)",
                  e: "Free",
                  d: "A series of seven natural rock pools connected by cascading waterfalls on the northwest coast, reached via a short jungle trail. Good for swimming when water levels are adequate. Best visited November–January after the north monsoon fills the pools.",
                  t: "45 mins",
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
            title="Langkawi — Eagles, Mangroves &amp; the Andaman Sea"
            subtitle="Malaysia&apos;s duty-free island in five landscapes."
            spots={[
              {
                name: "Pantai Cenang Beach Sunset",
                query: "pantai cenang beach sunset langkawi malaysia tropical",
                desc: "Pantai Cenang faces due west — the sunset drops into the Andaman Sea directly in front of the beach in the dry season.",
              },
              {
                name: "Langkawi Cable Car Summit",
                query: "langkawi cable car skycab summit mat cincang mountain malaysia",
                desc: "The summit of Gunung Mat Cincang (708m) — views across the Langkawi archipelago and, on clear days, the Thai islands beyond.",
              },
              {
                name: "Kilim Geoforest Mangroves",
                query: "kilim geoforest park mangrove limestone karst langkawi malaysia",
                desc: "Limestone karst formations rising from the Andaman Sea in Kilim Geoforest Park, accessible by kayak or boat tour.",
              },
              {
                name: "Brahminy Kite Eagle",
                query: "brahminy kite eagle langkawi malaysia andaman sea bird wildlife",
                desc: "Brahminy kites — the bird Langkawi is named after — diving for fish in the mangrove channels and around Eagle Square at dusk.",
              },
              {
                name: "Datai Bay Rainforest",
                query: "datai bay langkawi rainforest ancient jungle malaysia beach",
                desc: "Datai Bay, Langkawi&apos;s most pristine bay, surrounded by ancient rainforest on the northwest coast.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Langkawi suits every budget level. The duty-free status makes drinks and snacks dramatically cheaper than anywhere else in Malaysia or Singapore. The main variable is accommodation — the gap between a Pantai Cenang guesthouse and The Datai Langkawi is enormous.
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
                    ["🏨 Accommodation (per night)", "MYR 50–100", "MYR 200–450", "MYR 800–3,000"],
                    ["🍽️ Food (per day)", "MYR 25–45", "MYR 80–150", "MYR 200–500"],
                    ["🛵 Transport (scooter/car hire)", "MYR 35–40", "MYR 70–100", "MYR 100–300"],
                    ["🎯 Activities (per day)", "MYR 30–60", "MYR 80–150", "MYR 200–500"],
                    ["TOTAL (per person, per day)", "MYR 140–245", "MYR 430–850", "MYR 1,300–4,300"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (MYR 100–170/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Guesthouses on Pantai Cenang (MYR 50–100/night), eat at food courts and warungs, rent a scooter. Cable car is MYR 55 — budget for that. The duty-free drinks make evenings on the beach remarkably affordable.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (MYR 350–600/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique beachfront hotels (Casa del Mar, The Danna), dining at proper restaurants, private mangrove tour instead of shared, and a half-day boat charter. The sweet spot for most travellers.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (MYR 1,000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Four Seasons or The Datai (overwater villas, private beaches, rainforest naturalist tours), private yacht charters, spa treatments, and fine dining. Two of the best luxury resort properties in Southeast Asia.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Langkawi</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Most accommodation is clustered around Pantai Cenang and Pantai Tengah on the southwest coast — the most convenient location for the beach, duty-free shopping, and airport access. Luxury resorts are mostly on the quieter northwest coast near Datai Bay.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "The Datai Langkawi",
                  type: "Ultra-luxury rainforest resort · Datai Bay",
                  price: "From MYR 1,500/night",
                  badge: "Most extraordinary",
                  desc: "Built into ancient rainforest above Datai Bay, with a resident naturalist, private beach, multiple restaurants, and rooms literally surrounded by jungle. Repeatedly ranked among the best resort hotels in Asia. The wildlife on the property (hornbills, monitor lizards, leaf monkeys) is extraordinary.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Four Seasons Resort Langkawi",
                  type: "Luxury overwater resort · Tanjung Rhu",
                  price: "From MYR 1,200/night",
                  badge: "Best overwater villas",
                  desc: "Overwater treatment rooms at the spa, private plunge pool villas, and a stunning location on Tanjung Rhu Bay — one of the island&apos;s most beautiful stretches of beach. The overwater breakfast experience is exceptional.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Casa del Mar",
                  type: "Boutique beachfront · Pantai Cenang",
                  price: "From MYR 450/night",
                  badge: "Best mid-range",
                  desc: "The best boutique hotel on Pantai Cenang — directly on the beach, with the excellent La Sal restaurant serving Mediterranean food at tables on the sand. The pool faces the Andaman Sea. A genuinely lovely property at a reasonable price point.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Tune Hotel Langkawi",
                  type: "Budget · Pantai Cenang",
                  price: "From MYR 50–120/night",
                  badge: "Best budget",
                  desc: "Clean, reliable budget accommodation 2 minutes walk from Pantai Cenang beach. No frills but excellent value and a good location. Air conditioning, hot water, and consistent quality — the right choice if you&apos;re spending all your money on activities and duty-free rum.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Langkawi</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Langkawi&apos;s food scene ranges from hawker stalls selling nasi goreng for MYR 8 to beachfront fine dining. The seafood is excellent and fresh — the island has an active fishing industry and the daily catch arrives at the restaurants each morning. The Kompleks MARA area in Kuah is where locals eat.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Ikan Bakar Kompleks MARA",
                  t: "Grilled seafood · Kuah town",
                  d: "The best value seafood restaurant on the island, and the one most frequented by locals. Ikan bakar (grilled fish) — you choose from the fresh catch displayed on ice, agree a price, and they grill it over charcoal with a squeeze of lime and sambal. Expect to pay MYR 20–45 for a full seafood meal. No frills, excellent quality, and the seafood is as fresh as it gets.",
                  b: "Best seafood",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Red Tomato",
                  t: "Western-Asian fusion · Pantai Cenang",
                  d: "Popular restaurant on Jalan Pantai Cenang serving a mix of pasta, pizza, Malaysian dishes, and grilled meats. Reliable quality, good portions, and reasonable prices (MYR 20–45 per main). The outdoor seating area fills quickly on busy evenings — arrive by 7pm or book ahead in peak season.",
                  b: "Popular choice",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Wonderland Food Store",
                  t: "Local Malaysian · Pantai Cenang",
                  d: "A local-run coffee shop serving excellent nasi lemak, char kway teow, and fresh seafood at breakfast and lunch. The kind of place where the portions are generous and nothing costs more than MYR 15. Popular with local workers and residents — a good indicator of quality. Closes by 3pm.",
                  b: "Best local",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "La Sal at Casa del Mar",
                  t: "Mediterranean beachfront · Pantai Cenang",
                  d: "The most romantic dinner setting on the island — Mediterranean cuisine with tables on the sand at the edge of the Andaman Sea. Grilled fish, tapas, and cocktails. Excellent wine list at reasonable prices (wine benefits from Langkawi&apos;s duty-free status here too). Budget MYR 120–200 per person with drinks.",
                  b: "Best setting",
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
            destination="Langkawi Malaysia"
            hotels={[
              {
                name: "The Datai Langkawi",
                type: "Ultra-luxury rainforest resort · Datai Bay",
                price: "From MYR 1,500/night",
                rating: "5",
                badge: "Best overall",
                url: "https://www.booking.com/hotel/my/the-datai-langkawi.html?aid=2820480",
              },
              {
                name: "Four Seasons Resort Langkawi",
                type: "Luxury overwater resort · Tanjung Rhu",
                price: "From MYR 1,200/night",
                rating: "5",
                badge: "Best villas",
                url: "https://www.booking.com/hotel/my/four-seasons-langkawi.html?aid=2820480",
              },
              {
                name: "Casa del Mar Langkawi",
                type: "Boutique beachfront · Pantai Cenang",
                price: "From MYR 450/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/my/casa-del-mar-langkawi.html?aid=2820480",
              },
              {
                name: "Tune Hotel Langkawi",
                type: "Budget · Pantai Cenang",
                price: "From MYR 65/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/my/tune-langkawi.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Langkawi Mangrove Kayak Tour",
                duration: "3 hrs",
                price: "From MYR 80/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=langkawi+mangrove+kayak&partner_id=PSZA5UI",
              },
              {
                name: "Langkawi Island Hopping Boat Tour",
                duration: "3–4 hrs",
                price: "From MYR 35/person",
                badge: "Popular",
                url: "https://www.getyourguide.com/s/?q=langkawi+island+hopping&partner_id=PSZA5UI",
              },
              {
                name: "Langkawi Cable Car & SkyBridge",
                duration: "2 hrs",
                price: "From MYR 55/person",
                url: "https://www.getyourguide.com/s/?q=langkawi+cable+car&partner_id=PSZA5UI",
              },
              {
                name: "Langkawi Eagle Watching Tour",
                duration: "2 hrs",
                price: "From MYR 60/person",
                url: "https://www.getyourguide.com/s/?q=langkawi+eagle+watching&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌧️",
                  title: "Visiting During Monsoon Season",
                  desc: "Langkawi&apos;s west coast — where Pantai Cenang and most accommodation is — faces the southwest monsoon from May to September. Seas are rough, boat tours cancel, and persistent rain makes beach time miserable. Come December to March for calm seas, clear water, and reliable sunshine. Check the season carefully before booking flights.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🛵",
                  title: "Not Renting a Scooter",
                  desc: "Langkawi has almost no public transport between beaches and attractions. Taxis are expensive (MYR 30–50 per trip) and Grab availability is limited outside Pantai Cenang. A scooter costs MYR 35/day and transforms the island — you can reach the cable car, Datai Bay, Telaga Tujuh, and Eagle Square at will. A car (MYR 70–100/day) is comfortable for families.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🦅",
                  title: "Skipping the Mangrove Tour",
                  desc: "Many visitors spend all 3 days at Pantai Cenang and skip Kilim Geoforest Park entirely. The mangrove kayak or boat tour — eagles diving for fish at arm&apos;s length, limestone cave tunnels, the surreal karst landscape — is one of the best wildlife experiences in all of Malaysia. Budget MYR 80–120 and go on Day 3.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🛒",
                  title: "Underestimating the Duty-Free Savings",
                  desc: "Langkawi&apos;s duty-free status is real and the savings are substantial. Wine, spirits, beer, chocolate, and cigarettes are all priced at approximately one-third of Singapore prices and significantly below KL prices. The personal allowance for taking alcohol back to the mainland is 1 litre per person, but for consumption on the island there are no restrictions.",
                  color: "bg-pink-50 border-pink-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Langkawi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🦅",
                  title: "Eagle Square at Dusk — Free Wildlife Spectacle",
                  desc: "Dataran Lang (Eagle Square) near Kuah ferry terminal is Langkawi&apos;s most underrated free attraction. Arrive 30 minutes before sunset when fishing boats return and discard scraps. Dozens of Brahminy kites — rust-brown with white chests — and white-bellied sea eagles circle and dive. Bring a telephoto lens if you have one. Park on the road behind the sculpture and watch from the waterfront.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌅",
                  title: "Pantai Cenang Faces Due West — Perfect Sunsets",
                  desc: "The beach faces the Andaman Sea directly west. From November to March with clear skies, the sun drops into the sea in a clean horizontal line. No hills, no islands blocking the view. Buy a bottle of rum from a duty-free shop (MYR 28), sit on the sand 30 minutes before sunset, and watch. It is one of the best free sunsets in Southeast Asia.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🚤",
                  title: "Book the Cable Car for the First Gondola",
                  desc: "The cable car opens at 9:00am and lines start forming by 10:30am. The first gondola of the day gives you the summit mostly to yourself for 30–45 minutes before the crowds arrive. The morning light is also better for photography. Book online in advance during peak season (December–February) — it can sell out by late morning.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "⛴️",
                  title: "Combine with Penang — Take the Ferry",
                  desc: "The Langkawi–Penang ferry (2 hours 45 minutes, MYR 70) makes Penang an obvious add-on to a Langkawi trip. Most travellers do 3 nights in Langkawi, then take the morning ferry to Penang for 2–3 nights of UNESCO heritage, street art, and some of the best street food in Asia. The ferry is scenic and reliable.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🥃",
                  title: "Stock Up on Duty-Free on Arrival, Not Departure",
                  desc: "You can buy duty-free liquor anywhere on the island — every supermarket, convenience store, and the dedicated Duty Free City in Kuah. Don&apos;t wait until the airport departure lounge, where selection is limited. Buy on arrival, drink at the beach over 3 days, and take the maximum allowed allowance home (1 litre of alcohol per person back to the mainland).",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🌊",
                  title: "Swim at Pantai Tengah, Not Just Pantai Cenang",
                  desc: "Pantai Tengah, 5 minutes south of Pantai Cenang by scooter, has better swimming conditions (slightly calmer water, fewer beach vendors) and a more local atmosphere. The beach is less crowded and the water is cleaner away from the beach bar activity. Good for an afternoon swim when Pantai Cenang gets busy.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Langkawi" />

          {/* Combine With */}
          <CombineWith currentSlug="langkawi-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "When is the best time to visit Langkawi?",
                  a: "December to March is ideal — the Andaman Sea is calm, skies are clear, and swimming and boat tours are at their best. October and November are good shoulder months with lower prices. Avoid May to September when the southwest monsoon brings rough seas to the west coast, cancelling most boat tours and making beach conditions poor.",
                },
                {
                  q: "Is Langkawi visa-free for Indian passport holders?",
                  a: "Yes — under the 2024 India-Malaysia visa-free agreement, Indian nationals get 30 days visa-free entry to all of Malaysia including Langkawi. You can fly directly from India to LGK (Langkawi International Airport) via Kuala Lumpur, or arrive from Penang by ferry. Confirm current visa policy before travel as it can change.",
                },
                {
                  q: "How do I get around Langkawi without a car?",
                  a: "Rent a scooter (MYR 35/day) — it is the only practical option. Taxis are expensive (MYR 30–50 per trip) and scarce outside Pantai Cenang. Grab works in the Pantai Cenang area but drivers are limited. Almost every guesthouse and hotel can direct you to scooter rental shops within walking distance. International driving licences are accepted.",
                },
                {
                  q: "Is the Langkawi Cable Car worth the price?",
                  a: "Yes — MYR 55 for the cable car plus MYR 10 for the SkyBridge is the best MYR 65 you can spend in Langkawi. The ride to the summit of Gunung Mat Cincang is one of the steepest cable car experiences in Southeast Asia, and the SkyBridge views across the archipelago are extraordinary. Go on the first gondola of the day to beat the crowds.",
                },
                {
                  q: "Langkawi vs Penang — which should I choose for 3 days?",
                  a: "They are very different destinations. Langkawi is a beach and nature island — cable car, mangrove eagle tours, duty-free shopping, and the Andaman Sea. Penang is a city destination — UNESCO heritage George Town, world-class street food, street art, and cultural depth. For a beach holiday, Langkawi. For food, culture, and history, Penang. Most travellers to Malaysia do both — the ferry between them is 2 hours 45 minutes.",
                },
                {
                  q: "What is Langkawi&apos;s duty-free status and how does it work?",
                  a: "Langkawi was designated a duty-free island in 1987. Alcohol, cigarettes, chocolate, and some other goods are sold without Malaysian excise duty — resulting in prices approximately one-third of Singapore and significantly below the Malaysian mainland. There are no quantity restrictions for consumption on the island. When leaving Langkawi for the Malaysian mainland, you are allowed to take 1 litre of alcohol per person duty-free. The duty-free benefit applies to the island only — not to the Kuah ferry terminal after you board.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Langkawi trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/langkawi-3-days/best-time", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/langkawi-3-days/couples-guide", label: "Langkawi for couples", icon: "💑" },
                { href: "/blog/langkawi-3-days/packing-list", label: "What to pack", icon: "🎒" },
                { href: "/blog/penang-3-days", label: "Penang guide", icon: "🏙️" },
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
          <RelatedGuides currentSlug="langkawi-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Southeast Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Penang in 3 Days — Street Food &amp; Heritage", href: "/blog/penang-3-days" },
                { label: "Lombok 4 Days — Volcanoes &amp; Beaches", href: "/blog/lombok-4-days" },
                { label: "Ubud 3 Days — Rice Terraces &amp; Temples", href: "/blog/ubud-3-days" },
                { label: "Singapore 3 Days — City-State Guide", href: "/blog/singapore-3-days" },
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
