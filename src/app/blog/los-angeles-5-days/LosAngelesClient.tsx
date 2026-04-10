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
const LA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What LA Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "5-Day Itinerary" },
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
          href: `mailto:?subject=Los Angeles 5-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Los Angeles in 5 Days — Hollywood, Malibu, Venice Beach and the best tacos in the USA&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/los-angeles-5-days"
        imageUrl="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=80"
        description="Los Angeles in 5 Days: Hollywood Sign hike, Griffith Observatory, Getty Center, Malibu PCH drive, Venice Beach and the best tacos in the USA — complete budget to luxury itinerary."
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
export default function LosAngelesClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={LA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Los Angeles" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="los angeles hollywood sign california usa sunset skyline"
            fallback="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1600&q=80"
            alt="Los Angeles skyline at sunset with the Hollywood Sign visible in the Santa Monica Mountains California USA"
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
              <span className="text-white/70">Los Angeles 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  North America
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Los Angeles in 5 Days:
                <em className="italic text-amber-300"> Hollywood, Malibu &amp; Real LA Food</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Hollywood Sign hike, Griffith Observatory, Getty Center (free), Venice Beach, Malibu PCH, Koreatown BBQ, and the best taco trucks in the USA. The complete guide for every budget.
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
              <span>🌴 California, USA</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From $90/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Los Angeles doesn&apos;t reveal itself to people who stay on Hollywood Boulevard. It reveals itself at 6am on Venice Beach when the bodybuilders are already at Muscle Beach and the sky is turning pink over the Pacific, or on a Tuesday at the Getty Center when you walk into a room of Van Goghs with almost no one else there, or the moment you bite into your first taco from a Boyle Heights truck and understand why people move here and never leave.
            </p>
          </blockquote>

          {/* ── WHAT LA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What LA Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Los Angeles is the second-largest city in the United States by population and the largest by area — 87km from north to south, spread across a coastal basin between the Pacific Ocean and the San Gabriel Mountains. It is not one city but a mosaic of distinct neighborhoods: Santa Monica, Venice, Hollywood, Silver Lake, Koreatown, Downtown, Malibu, Beverly Hills, and dozens more, each with a different character and culture.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The entertainment industry — film, television, music — built modern LA, and the studios (Universal, Warner Bros., Paramount, Sony) are still operating within the city limits. But the LA most worth visiting is the one that exists alongside the celebrity industry: the taco trucks on Figueroa Street, the farmers markets at The Grove, the surfers at Malibu Point, the Korean BBQ in Koreatown that runs until 2am, and the free sunsets from the Griffith Observatory that remain among the best urban views in the world.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Five days is enough time to get past the surface and into the actual city, provided you have a car. Without one, you are limited to a fraction of what makes LA worth visiting. Rent a car. The rest follows naturally.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="LAX" />
              <StatCard icon="🌡️" label="Best Months" value="Mar–May, Sep–Nov" />
              <StatCard icon="🌴" label="Neighborhoods" value="100+" />
              <StatCard icon="💰" label="Budget From" value="$90/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Los Angeles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Mar–May",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "18–24°C, low humidity, minimal smog, and the hills are green from winter rain. The city is not yet at peak summer tourist volume. March and April are objectively the best months: comfortable temperatures at the beach and in the hills, long daylight hours, and the fewest crowds at the main attractions.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🍂",
                  t: "Fall — Second Best",
                  d: "20–27°C with warm, dry days that extend well into November. The famous Santa Ana winds arrive in October — hot, dry, and sometimes smoky from wildfires. September and October are warm enough for beach days and clear enough for city views. Crowds drop sharply after Labor Day.",
                  b: "Very good",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Aug",
                  i: "🌫️",
                  t: "Summer — Crowded & June Gloom",
                  d: "June brings &quot;June Gloom&quot; — a marine layer that blankets the coast in grey fog until noon every day for weeks. July and August clear up but bring peak tourist crowds, peak hotel prices, and severe traffic. Beach parking disappears by 9am. Viable but expensive and congested.",
                  b: "Peak season",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Feb",
                  i: "☀️",
                  t: "Winter — Quiet & Clear",
                  d: "12–18°C, genuinely the least crowded time of year, and frequently the clearest skies — the winter rains wash the smog and the mountain views are exceptional. Too cold for swimming but perfect for hiking, museums, and driving PCH. Hotel prices are at their annual low.",
                  b: "Budget option",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Los Angeles</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Los Angeles International Airport (LAX) is the main gateway — the 4th busiest airport in the world. A car rental from LAX is strongly recommended for exploring the city. The FlyAway bus ($9.75) connects LAX to Union Station in DTLA; the Metro K Line ($1.75) connects to Inglewood and Crenshaw. Both are useful supplements but cannot replace a car for the full LA experience.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly into LAX (recommended)",
                  d: "Los Angeles International Airport (LAX) handles the most international routes. Direct flights from London (~10–11 hrs), Tokyo (~11 hrs), Sydney (~15 hrs), Toronto (~5 hrs), and most major US cities. Terminal connections can be slow — allow 90 minutes for international connections. LAX is currently building the Automated People Mover (APM) to connect terminals more efficiently.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "FlyAway Bus from LAX — $9.75",
                  d: "The LAX FlyAway bus runs 24/7 between LAX and Union Station (Downtown LA) for $9.75/person — the cheapest way into the city from the airport. Journey: 30–45 minutes without traffic, up to 75 minutes in peak hours. Also serves Van Nuys and Hollywood/Vine. Ticket purchased at the FlyAway kiosk in each terminal outside baggage claim.",
                  b: "Budget transit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚇",
                  t: "Metro from LAX — $1.75",
                  d: "The Metro K Line (Crenshaw/LAX Line) connects Aviation/LAX station to Expo/Crenshaw where you can transfer to the E Line (Expo) to reach DTLA and Santa Monica. Total fare: $1.75. The Airport Metro Connector (people mover linking terminals to the K Line station) was under construction in 2026 — confirm current status before travel.",
                  b: "Cheapest option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Car Rental from LAX (recommended)",
                  d: "The Consolidated Rent-A-Car facility (ConRAC) at LAX is connected by a free shuttle from all terminals. Budget $40–70/day including basic insurance. Economy class cars from Enterprise, Hertz, Avis, and Budget are all available. Booking 2–3 weeks ahead brings prices down significantly. A car changes everything in LA — plan to have one for at least 4 of your 5 days.",
                  b: "Essential for LA",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Los Angeles Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. Days are organized geographically to minimize driving time — beach days together, Hollywood and Griffith together, museums and Beverly Hills together. Never schedule Malibu and Downtown on the same afternoon.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Santa Monica Pier · Venice Beach Boardwalk · Abbot Kinney · Sunset"
                cost="$60–90 total"
                items={[
                  "9:00am — Arrive at Santa Monica Beach at the northern end near the pier. Parking along PCH is free; city lots near the pier cost $3–10. Avoid the pier parking structure ($20+). Walk south from the pier along the strand.",
                  "9:30am — Venice Beach Boardwalk: 3km of street performers, murals, palm-lined paths, and the famous Muscle Beach outdoor gym (free to watch, $10 day pass to use). Best people-watching in LA, no ticket required. The bodybuilders, the roller-skaters, and the street artists are all genuine — this is not a stage set.",
                  "11:00am — Abbot Kinney Boulevard (one block inland from the boardwalk) — LA&apos;s most acclaimed street of independent shops, coffee roasters, and brunch spots. Blue Bottle Coffee or Intelligentsia for coffee ($5–6). Walk the full 8 blocks for free.",
                  "1:00pm — Lunch: tacos from one of the food trucks on Rose Avenue or Washington Boulevard ($3–4/taco). Jalisco-style fish tacos or birria tacos are the regional specialty. Budget $12–15 for a proper feed.",
                  "3:00pm — Rent a beach cruiser on the boardwalk ($15–20/hour or $40/day) and cycle the 24km South Bay Bicycle Trail from Venice to Manhattan Beach and back. Flat, car-free, and ocean-adjacent the entire way.",
                  "6:00pm — Return to Santa Monica Pier for sunset. The pier is free to walk. Get a churro ($4) from one of the stands and watch the sun drop into the Pacific from the west end of the pier — one of the best free sunsets in California.",
                  "8:00pm — Dinner: Father&apos;s Office on 9th &amp; Colorado ($25–35) for what many consider the best burger in LA, or Tacos Por Favor truck nearby for $12–15 total. Both are within walking distance of the pier.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Hollywood Sign Hike · Griffith Observatory · Walk of Fame · Runyon Canyon"
                cost="$40–65 total"
                items={[
                  "8:00am — Drive to Griffith Park early (free entry always). Take the Brush Canyon Trail to the Hollywood Sign viewpoint: 3.5km round trip, starts at Bronson Canyon parking lot off Canyon Drive, free, takes 60–75 minutes. The sign is 15m tall — you cannot walk up to it (there&apos;s a fence) but the viewpoint gets you within 50m and eye-level.",
                  "10:30am — Griffith Observatory (free admission always, grounds open from dawn, building opens at noon on weekdays). The building and grounds offer the best unobstructed city views in Los Angeles — the Downtown skyline, the ocean on clear days, the Hollywood Sign, and the Santa Monica Mountains. Arrive by 10am to find parking in the free lot before it fills.",
                  "1:00pm — Drive down to Hollywood Boulevard. Eat at Pink&apos;s Hot Dogs on La Brea (since 1939, $8–12, cash preferred) or the In-N-Out Burger on Sunset Boulevard ($5–8, order &apos;Animal Style&apos; off the secret menu).",
                  "2:30pm — Hollywood Walk of Fame: the 2.7km stretch of terrazzo stars is free to walk. The TCL Chinese Theatre (exterior free, interior theater tours $18) has celebrity handprints in cement since 1927. The Dolby Theatre (Oscars venue) exterior is worth a photo.",
                  "4:00pm — Runyon Canyon Park (free, no car required from Hollywood) — 3.5km loop above Hollywood with expansive views over the city and Hollywood Hills. Popular with locals and their dogs. Trailhead on Fuller Avenue, 5-minute walk from Fountain Avenue.",
                  "7:00pm — Dinner: Republique on La Brea ($20–28 mains) or Night + Market on Sunset for Thai food ($15–20). Both require a short drive from the Walk of Fame and are significantly better than anything on the boulevard itself.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Getty Center (Free) · Beverly Hills · Melrose Avenue · Original Farmers Market"
                cost="$35–55 total"
                items={[
                  "10:00am — Getty Center (admission always free, timed entry required — book at getty.edu up to 2 weeks ahead). Parking at the base is $22 for the day; the free tram takes you up to the museum. Allow 2–3 hours minimum.",
                  "10:30am — Getty collection highlights: Van Gogh&apos;s Irises, Rembrandt&apos;s Portrait of a Young Man, Pontormo&apos;s Portrait of a Halberdier, and the Impressionist galleries. The Central Garden by Robert Irwin and the rooftop terrace views over Bel Air toward the Pacific are as good as any exhibit inside.",
                  "1:00pm — Beverly Hills on foot: Rodeo Drive walk is free. The designer boutiques (Gucci, Prada, Chanel, Louis Vuitton) have their own architectural worth. Beverly Hills City Hall and the palatial residences on Sunset Boulevard are free to photograph.",
                  "3:00pm — Melrose Avenue (between Highland and Fairfax) — the streetwear and vintage capital of LA. Free to walk. Decades vintage store, Wasteland, and the Paul Smith pink wall (148 S La Brea) are the notable stops.",
                  "5:00pm — The Grove outdoor shopping center (free entry) and adjacent Original Farmers Market (since 1934). Get food at the Farmers Market stalls: Lotería! Grill for Mexican ($12–15), Magee&apos;s Kitchen for a sandwich ($10), or the excellent Monsieur Marcel cheese and charcuterie counter ($12–18).",
                  "8:00pm — Dinner at Canter&apos;s Deli on Fairfax (open 24/7, since 1931). Matzo ball soup $9, Reuben sandwich $18, cheesecake $8. A genuine LA institution — the late-night crowd is half celebrities and half cab drivers, which is a very LA combination.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Malibu PCH Drive · El Matador Beach · Point Dume · Koreatown BBQ"
                cost="$50–75 total (including gas)"
                items={[
                  "8:00am — Drive north on the Pacific Coast Highway (PCH/Highway 1) from Santa Monica. The road hugs the coast for 50km to Malibu — every mile has a different angle on the Pacific. Traffic is light going north this early; the southbound return at 4–5pm will be slower.",
                  "9:00am — El Matador State Beach (32350 PCH, Malibu). Parking in the lot costs $8; roadside parking along PCH is free. Three separate beach coves separated by sea stacks and rock arches — the most photogenic beach in Los Angeles County. Arrive early for parking. The stairs down to the beach are steep but worth every step.",
                  "11:00am — Point Dume State Beach (free, large lot, often uncrowded on weekday mornings). Walk the Point Dume headland trail (30 minutes, free) for views of Santa Monica Bay. In winter (December–April) this is one of the best coastal spots to see migrating gray whales.",
                  "1:00pm — Neptune&apos;s Net Seafood (42505 PCH, Malibu) — a Malibu institution since 1956, beloved by surfers and motorcyclists. Shrimp tacos $14, steamed clams $16, fish and chips $19. Eat on the outdoor tables looking at the Pacific. Budget $20–30 per person.",
                  "3:00pm — Zuma Beach (30000 PCH) — the biggest public beach in LA County, free, lifeguarded in summer. Wide, flat, and rarely as crowded as Santa Monica. Last swim of the day.",
                  "5:30pm — Drive back south on PCH. Stop at Malibu Pier (free to walk) for the late afternoon light before heading east toward the city.",
                  "8:00pm — Koreatown for dinner (10–15 minutes east of DTLA): the best Korean BBQ in the United States at prices that remain genuinely reasonable. Park&apos;s BBQ ($35–45/person), Soowon Galbi ($25–35/person), or Sun Nong Dan for sundubu jjigae stew ($18). Koreatown runs until 2am.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Koreatown Brunch · LACMA or Universal Studios · Leo&apos;s Tacos Farewell"
                cost="$45–120 total (varies by option chosen)"
                items={[
                  "9:00am — Brunch in Koreatown at Ham Ji Park on 6th Street ($12–18, galbi and rice or seollongtang bone broth soup) or Cassell&apos;s Hamburgers (a K-Town classic, $14–18) before choosing your afternoon.",
                  "Option A — LACMA (free &apos;pay what you wish&apos; on Tuesdays, otherwise $25 admission): Los Angeles County Museum of Art on Wilshire Boulevard. Largest art museum in the western USA. Don&apos;t miss Chris Burden&apos;s Urban Light installation (122 antique streetlamps, free to visit even without a ticket — it&apos;s on the street-facing exterior).",
                  "Option B — Universal Studios Hollywood ($109+ online, cheaper than gate price): 30-minute drive north on the 101. The Studio Tour tram is the unique attraction — a 60-minute behind-the-scenes ride through working sound stages. The Wizarding World of Harry Potter and the Jurassic World ride are the top theme park elements.",
                  "Option C — Long Beach day trip (30–45 minutes south on the 405/710): Aquarium of the Pacific ($35 adults, $20 children) — one of the finest aquariums on the West Coast. The Queen Mary ocean liner is docked next to it ($35 tours).",
                  "4:00pm — Return to base. If departing today, LAX is 25–45 minutes from most LA neighborhoods — budget extra time for traffic, especially on Sunday evenings.",
                  "7:00pm — Final dinner: Leo&apos;s Tacos Truck on La Brea ($3–4/taco, famous al pastor, cash only) or Guisados in Echo Park ($4–5/taco, braised meat tacos, excellent agua fresca). Both are among the top taco destinations in a city that takes tacos more seriously than almost anywhere outside Mexico.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Los Angeles" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Los Angeles Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sights in order of priority, with honest entry fees and time estimates. Most of LA&apos;s best attractions are free.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Griffith Observatory",
                  e: "Free (planetarium shows $8)",
                  d: "The best free view in Los Angeles — the city spread below, the Hollywood Sign to the west, the Pacific on clear days. Free admission always. Grounds open from dawn; building opens noon (weekdays) and 10am (weekends). The Samuel Oschin Planetarium shows are $8 and worth attending on your first visit.",
                  t: "Must see · 1.5–2 hrs",
                },
                {
                  n: "Hollywood Walk of Fame",
                  e: "Free",
                  d: "The 2.7km stretch of terrazzo stars on Hollywood Boulevard from La Brea to Vine Street — 2,700+ stars for entertainers across film, TV, music, radio, and live theater. The TCL Chinese Theatre (Grauman&apos;s) has celebrity handprints since 1927. The Dolby Theatre is the Oscars venue. Free to walk. Avoid eating on the boulevard — prices are 2–3x normal.",
                  t: "Must see · 1–1.5 hrs",
                },
                {
                  n: "Getty Center",
                  e: "Free (parking $22)",
                  d: "One of the finest art museums in the USA, always free, perched above the 405 freeway with views over Bel Air and the Pacific. Van Gogh&apos;s Irises, Rembrandt, Pontormo, the Impressionists. The Richard Meier building and Central Garden are themselves worth the trip. Timed entry — book at getty.edu up to 2 weeks in advance.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Santa Monica Pier",
                  e: "Free",
                  d: "The iconic pier at the end of Route 66, with its Pacific Park amusement park (rides $5–15 each), Ferris wheel, and the best sunset vantage point in Santa Monica. The pier is free to walk at any hour. Pacific Park has rides for kids and adults. The aquarium at the base of the pier is $5.",
                  t: "Sunset visit · 1–2 hrs",
                },
                {
                  n: "Venice Beach Boardwalk",
                  e: "Free",
                  d: "The most LA experience in LA: Muscle Beach outdoor gym, street performers, muralists, skate park (free to watch), and the palm-lined path running along the beach. Abbot Kinney Boulevard, one block inland, is LA&apos;s best independent shopping and dining street. Both are entirely free to explore.",
                  t: "Morning visit · 2–3 hrs",
                },
                {
                  n: "Universal Studios Hollywood",
                  e: "$109+ online",
                  d: "The original movie studio theme park. The Studio Tour tram (included with admission) takes you behind the scenes of working soundstages — the Jaws lake, Psycho house, Jurassic Park jungle. The Wizarding World of Harry Potter is the most popular section. Book tickets online for $109+ (gate price is higher). Allow a full day.",
                  t: "Full day · $109+",
                },
                {
                  n: "LACMA — Los Angeles County Museum of Art",
                  e: "$25 (free Tuesdays 'pay what you wish')",
                  d: "The largest art museum in the western USA — Wilshire Boulevard. The Chris Burden Urban Light installation (122 antique streetlamps) is on the street-facing exterior and free to visit any time. Free on Tuesdays with &apos;pay what you wish&apos; admission. The Broad Contemporary Art wing has Koons and Twombly.",
                  t: "2–3 hrs · Best on Tuesdays",
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
            title="Los Angeles — Hollywood, Malibu &amp; the Pacific"
            subtitle="Five days in the city of angels — beach, ruins, and the best tacos in the USA."
            spots={[
              {
                name: "Griffith Observatory at Sunset",
                query: "griffith observatory los angeles sunset city view california",
                desc: "The free Griffith Observatory at sunset — the best urban view in Los Angeles, with the Hollywood Sign and the Pacific both visible on clear days.",
              },
              {
                name: "Venice Beach Boardwalk",
                query: "venice beach boardwalk los angeles muscle beach california",
                desc: "Venice Beach Boardwalk — Muscle Beach, murals, street performers, and the Pacific running alongside the entire length of the path.",
              },
              {
                name: "Malibu Pacific Coast Highway",
                query: "malibu pacific coast highway california sunset ocean cliffs",
                desc: "PCH north of Malibu — one of the great coastal drives in the world, with the Pacific on the left and the Santa Monica Mountains on the right.",
              },
              {
                name: "Getty Center",
                query: "getty center los angeles museum architecture california",
                desc: "The Getty Center on its hilltop above the 405 — free admission, world-class art, and views over Bel Air toward the ocean.",
              },
              {
                name: "Hollywood Sign",
                query: "hollywood sign los angeles hills california iconic",
                desc: "The Hollywood Sign from the Brush Canyon Trail viewpoint — 15 metres tall, viewable from 50 metres on the free hike through Griffith Park.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Los Angeles has a wide range of options at every budget tier. The main variable is accommodation — beachfront hotels in Santa Monica cost 2–3x the price of equivalent rooms in DTLA or Hollywood. Food can be extremely cheap (taco trucks at $3–4/taco) or extremely expensive (Nobu Malibu at $150–250/person). The table below covers a genuine 5-day stay.
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
                    ["🏨 Accommodation/night", "$40–70", "$120–240", "$450–900"],
                    ["🍽 Food/day", "$20–35", "$50–90", "$150–400"],
                    ["🚗 Transport/day (car rental)", "$15–30", "$30–60", "$80–200"],
                    ["🎡 Activities/day", "$10–25", "$40–80", "$150–500"],
                    ["TOTAL per day", "$90–150", "$250–450", "$700–2,500+"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($90–150/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay at HI Los Angeles hostel ($40–55/night in a dorm) or the Freehand LA ($80–120 private), eat taco trucks and In-N-Out, use the Metro where possible and rent a car only for Malibu day. Entirely feasible in LA — the best sights (Griffith, Getty, beaches) are free.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($250–450/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay at the Ace Hotel DTLA ($150–220/night) or Hotel Figueroa ($120–200), dine at Republique, Night + Market, and Gjusta. Rent a car throughout. This is the sweet spot — comfortable, flexible, and access to everything worth seeing.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($700–2,500+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Stay at The Beverly Hills Hotel ($600–1,200/night) or Shutters on the Beach ($450–800/night). Private Getty tours, Nobu Malibu dinners, n/naka omakase ($350+), Warner Bros. VIP studio tour. Private car throughout. The spending ceiling in LA is essentially unlimited.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Los Angeles</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Santa Monica is the best base for first-timers — walkable (rare for LA), on the beach, 20 minutes from Venice, 25 minutes from Beverly Hills, and 30 minutes from Hollywood. West Hollywood suits nightlife and Hollywood access. DTLA has the cheapest options and is improving fast. Malibu accommodation is expensive and works best as a splurge night rather than a base.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "The Beverly Hills Hotel",
                  type: "Luxury iconic · Beverly Hills",
                  price: "From $600/night",
                  badge: "Most legendary",
                  desc: "The &apos;Pink Palace&apos; on Sunset Boulevard — open since 1912 and still the most glamorous address in Beverly Hills. Bungalows with private pools, the Polo Lounge for power breakfasts, and a poolside cabana culture that defines Hollywood luxury. The Fountain Coffee Room (open to non-guests) does a $12 milkshake that has been on the menu since the 1950s.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Shutters on the Beach",
                  type: "Luxury beachfront · Santa Monica",
                  price: "From $450/night",
                  badge: "Best beach position",
                  desc: "The only directly beachfront hotel in Santa Monica — rooms face the Pacific from a Nantucket-style building on the sand. The proximity to the ocean and the Casa del Mar dining make this the top luxury choice for beach-focused visitors. Book well in advance for summer.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Ace Hotel DTLA",
                  type: "Mid-range boutique · Downtown LA",
                  price: "From $150/night",
                  badge: "Best mid-range",
                  desc: "A converted 1927 United Artists building in Downtown LA — the rooftop pool with downtown views is one of the best in the city. Theatre adjacent, Arts District walking distance, strong coffee and food program. The Ace attracts a creative, younger crowd and is the benchmark mid-range stay in DTLA.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "HI Los Angeles — Santa Monica",
                  type: "Hostel · Santa Monica",
                  price: "From $40/night (dorm)",
                  badge: "Best budget",
                  desc: "Hostelling International&apos;s Los Angeles property in Santa Monica, 2 blocks from the beach. Dorm beds from $40/night, private rooms from $110. Free WiFi, communal kitchen, organized tours and social events. The location on 2nd Street puts you within walking distance of the pier and the boardwalk.",
                  color: "border-green-200 bg-green-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Los Angeles</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Los Angeles has one of the most diverse food scenes in the world — Mexican, Korean, Japanese, Ethiopian, Thai, and Californian all at serious levels. The rule is consistent: the best food is never on Hollywood Boulevard or in tourist-facing areas. It&apos;s on the trucks, in the strip malls, and in the neighborhoods.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Mariscos Jalisco — Boyle Heights",
                  t: "Taco truck · East LA",
                  d: "The dorado shrimp taco — a crispy deep-fried tortilla stuffed with shrimp and avocado and sauced tableside — is arguably the best single taco in Los Angeles. Taco: $4. The truck on Olympic Boulevard in Boyle Heights has been operating at the same spot for decades. Cash only, arrive at lunch for the freshest product. Budget $12–16 for a proper feed.",
                  b: "Best taco in LA",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "In-N-Out Burger — Multiple Locations",
                  t: "Fast food institution · Citywide",
                  d: "A California institution with prices deliberately kept low: Double-Double $5, milkshake $3. Order &apos;Animal Style&apos; off the secret menu (mustard-fried patties, extra sauce, caramelized onions, pickles). The Sunset Boulevard location on Hollywood has a rooftop deck. Every location consistently excellent — the best fast food in the USA, not debatable.",
                  b: "California classic",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Park&apos;s BBQ — Koreatown",
                  t: "Korean BBQ · Koreatown",
                  d: "The most acclaimed Korean BBQ restaurant in Los Angeles — marbled wagyu galbi, pork belly, and brisket cooked over charcoal at your table. The banchan (side dishes) arrive in a dozen small plates. Budget $35–45/person all-in with drinks. Koreatown restaurants run until 2am — dining at 10pm is normal. Reservations recommended on weekends.",
                  b: "Best Korean BBQ",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Nobu Malibu",
                  t: "Upscale Japanese · Malibu",
                  d: "Nobu Matsuhisa&apos;s Malibu outpost on a deck over the Pacific — the black cod miso and the omakase sashimi are the benchmarks. Dinner is $150–250/person; the daytime menu for lunch or late breakfast is considerably cheaper ($30–45/person) with the identical ocean view. Reserve through the hotel concierge or directly for the ocean-deck table.",
                  b: "Best splurge",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  n: "Kogi BBQ Truck",
                  t: "Korean-Mexican fusion truck · Various locations",
                  d: "Roy Choi&apos;s Kogi BBQ truck started the gourmet food truck movement in the USA in 2008 — Korean BBQ in a taco format. The short rib taco ($3), the kimchi quesadilla ($8), and the spicy pork burrito ($11) are the standards. Track the truck on kogi.com/trucks — it rotates between locations in LA. Budget $15–20 for a proper meal.",
                  b: "Food truck pioneer",
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
            destination="Los Angeles California"
            hotels={[
              {
                name: "The Beverly Hills Hotel",
                type: "Luxury iconic · Beverly Hills",
                price: "From $600/night",
                rating: "5",
                badge: "Most legendary",
                url: "https://www.booking.com/hotel/us/the-beverly-hills-hotel.html?aid=2820480",
              },
              {
                name: "Shutters on the Beach",
                type: "Luxury beachfront · Santa Monica",
                price: "From $450/night",
                rating: "5",
                badge: "Best beach",
                url: "https://www.booking.com/hotel/us/shutters-on-the-beach.html?aid=2820480",
              },
              {
                name: "Ace Hotel Downtown Los Angeles",
                type: "Mid-range boutique · DTLA",
                price: "From $150/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/us/ace-downtown-los-angeles.html?aid=2820480",
              },
              {
                name: "HI Los Angeles — Santa Monica",
                type: "Hostel · Santa Monica",
                price: "From $40/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/us/hi-los-angeles-santa-monica.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Warner Bros. Studio Tour Hollywood",
                duration: "3 hrs",
                price: "From $69/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=warner+bros+studio+tour+los+angeles&partner_id=PSZA5UI",
              },
              {
                name: "Griffith Observatory & Hollywood Tour",
                duration: "4 hrs",
                price: "From $45/person",
                badge: "Top rated",
                url: "https://www.getyourguide.com/s/?q=griffith+observatory+tour+los+angeles&partner_id=PSZA5UI",
              },
              {
                name: "Venice Beach & Santa Monica Bike Tour",
                duration: "3 hrs",
                price: "From $49/person",
                url: "https://www.getyourguide.com/s/?q=venice+beach+bike+tour+los+angeles&partner_id=PSZA5UI",
              },
              {
                name: "Malibu Wine Safari & Coastal Hike",
                duration: "4 hrs",
                price: "From $120/person",
                url: "https://www.getyourguide.com/s/?q=malibu+tour+los+angeles&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Los Angeles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚌",
                  title: "Relying on Public Transport",
                  desc: "LA has a Metro system (fare $1.75/ride) and it covers some routes adequately — the B Line connects Hollywood to DTLA, the E Line runs to Santa Monica. But most of the city&apos;s best destinations (Malibu, Getty Center, Griffith Park, Beverly Hills, Venice) are inaccessible or require multiple transfers and substantial walking. Rent a car. Budget $40–70/day including insurance. It fundamentally changes what is possible.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🌄",
                  title: "Skipping Griffith Observatory",
                  desc: "Most tourists focus on the Hollywood Walk of Fame and never make it to Griffith Observatory — which provides the best view of the city, the Hollywood Sign, and the LA Basin from any publicly accessible point. It&apos;s free, open daily, and 10 minutes by car from Hollywood Boulevard. Missing it is the equivalent of going to Paris and skipping the view from Sacré-Cœur.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🍔",
                  title: "Eating on Hollywood Boulevard",
                  desc: "The restaurants on Hollywood Boulevard and adjacent tourist-facing blocks charge Manhattan prices for mediocre food. Walk 5–10 minutes north or south and prices drop 40–60%. Thai Town (on Hollywood Blvd east of Western) has exceptional Thai food for $12–18/meal. Franklin Avenue and Melrose running parallel both have significantly better options at better prices.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🚗",
                  title: "Underestimating Traffic and Distances",
                  desc: "Los Angeles is 87km from north to south. What Google Maps says is 20 minutes can take 90 minutes at 5pm on a weekday. The I-405 and I-10 are among the most congested highways in the USA. Plan days geographically — beach activities together, Hollywood and Griffith together, DTLA and Koreatown together. Never schedule a museum at 3pm if you need to be in Malibu at 7pm.",
                  color: "bg-pink-50 border-pink-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Los Angeles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌮",
                  title: "The Best Tacos Are in Boyle Heights and on the Trucks",
                  desc: "The finest tacos in LA are at Mariscos Jalisco in Boyle Heights (the dorado shrimp taco, $4), Leo&apos;s Tacos Truck on La Brea (al pastor from a vertical trompo spit, $3.50, cash only), and the trucks on Figueroa Street. None are on Hollywood Boulevard. All require a car or rideshare and are worth every minute of the detour.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🏖️",
                  title: "All California Beaches Are Free and Publicly Accessible by Law",
                  desc: "California law guarantees public access to all beaches up to the mean high tide line. Even in Malibu, where celebrities have built homes right on the coast, you have the legal right to walk the beach. Parking at state beaches (El Matador, Zuma, Point Dume) costs $8–12 in the lots, but roadside parking along PCH is free if you arrive early and can find a space.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🔭",
                  title: "Griffith Observatory: Arrive 20 Minutes Before Sunset",
                  desc: "The free parking lot at Griffith Observatory holds approximately 170 cars and fills completely on clear evenings. Arrive 30 minutes before sunset, or take the LADOT Dash Observatory shuttle from Vermont/Sunset Metro station ($0.50). The observatory is open noon–10pm Tuesday–Friday and 10am–10pm weekends. The Samuel Oschin Planetarium shows are $8 and worth attending.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "💈",
                  title: "In-N-Out Burger: Order Off the Secret Menu",
                  desc: "In-N-Out is a California institution with deliberately kept-low prices ($5 for a Double-Double in 2026). The secret menu: &apos;Animal Style&apos; adds mustard-fried patties, extra sauce, pickles, and caramelized onions. &apos;Protein Style&apos; replaces the bun with lettuce. A Neapolitan milkshake mixes all three flavors. The Sunset Boulevard Hollywood location has a rooftop deck with city views.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🚗",
                  title: "PCH at Sunset — Drive it Southbound",
                  desc: "The Pacific Coast Highway is one of the great scenic drives in the world. Drive it north to Malibu in the morning (sun behind you, ocean on the left), and return south in the afternoon when the sun is dropping over the Pacific and the light turns the cliffs gold. The southbound direction at 4–5pm has the better light but also the heavier traffic — budget time accordingly.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🛒",
                  title: "Grand Central Market in DTLA Opens at 8am",
                  desc: "The Grand Central Market on Broadway in Downtown LA has been feeding the city since 1917. Open 8am daily, it has everything from Eggslut (now closed but replaced by equally good vendors) to pupusas to bone broth to Thai food, all at $8–15 per meal. Park in the Broadway-Spring Structure across the street ($3–6). One of the best breakfast or lunch stops in the entire city.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Los Angeles" />

          {/* Combine With */}
          <CombineWith currentSlug="los-angeles-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do I need a car in Los Angeles?",
                  a: "Yes, for a proper experience of LA you need a car. The Metro covers Hollywood, Downtown, and Santa Monica adequately, but Malibu, the Getty Center, Griffith Observatory, Venice Beach, Beverly Hills, and Koreatown all benefit significantly from having a car. Rent from the ConRAC facility at LAX ($40–70/day) or use Uber/Lyft for individual trips ($15–40 per journey within the city). Budget an extra $40–70/day for a rental — it fundamentally changes what is possible.",
                },
                {
                  q: "Is Los Angeles safe for tourists?",
                  a: "The main tourist areas — Santa Monica, Venice Beach boardwalk, Hollywood, Beverly Hills, West Hollywood, Silver Lake, the Arts District — are safe for tourists with standard urban precautions. The single biggest crime risk for visitors is car break-ins, which are extremely common throughout the city. Never leave valuables visible in your car, even for 10 minutes. Homeless encampments exist near Venice, Union Station, and in DTLA — be situationally aware but they are not specifically targeting tourists.",
                },
                {
                  q: "What is the best neighborhood to stay in for first-timers?",
                  a: "Santa Monica is the best base for first-timers: it is one of the few walkable neighborhoods in LA, right on the beach, 20 minutes from Venice, 25 minutes from Beverly Hills, and 30 minutes from Hollywood. Mid-range hotels cost $120–250/night. West Hollywood is better for nightlife and Hollywood access. Downtown LA (DTLA) offers the cheapest options and is improving rapidly, but is less convenient for beach days.",
                },
                {
                  q: "How many days do I need in Los Angeles?",
                  a: "Five days is the ideal minimum to cover the major areas without feeling rushed: 1 day for Venice/Santa Monica beach, 1 day for Hollywood/Griffith, 1 day for Getty/Beverly Hills/museums, 1 day for Malibu PCH, 1 day flexible for Koreatown/DTLA/Universal or a day trip. Seven days allows Disneyland (45 minutes south in Anaheim) and a proper Joshua Tree National Park overnight without sacrificing anything in the city.",
                },
                {
                  q: "How far is Disneyland from Los Angeles?",
                  a: "Disneyland in Anaheim is approximately 45 minutes south of central LA on the I-5, traffic permitting. Leave before 8am or after 10am to avoid I-5 congestion. Disneyland tickets start at $104/day for single-park access; Disney California Adventure is adjacent (separate ticket). A two-park ticket costs $199+. Book well in advance for weekend visits. Surrounding Anaheim hotels are much cheaper than the resort hotels ($80–150/night) and within walking distance of the park.",
                },
                {
                  q: "What is the tipping culture in Los Angeles?",
                  a: "Tipping in LA follows standard US conventions: restaurants 18–22% (automatic service charges are increasingly common — check your bill), taxis and rideshare 10–15%, hotel housekeeping $3–5/night, valet parking $3–5 when you collect the car, coffee shops $1–2 per drink. Many restaurants have moved to automatic 18–20% service charges — if so, you are not obligated to tip additionally (though you can). Tipping below 15% at a sit-down restaurant is considered rude by local standards.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Los Angeles trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-los-angeles", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/los-angeles-budget-travel", label: "Budget travel guide", icon: "💰" },
                { href: "/blog/getting-around-los-angeles", label: "Getting around LA", icon: "🚗" },
                { href: "/blog/los-angeles-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="los-angeles-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More USA &amp; North America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Las Vegas 4 Days — Shows, Casinos &amp; Day Trips", href: "/blog/las-vegas-4-days" },
                { label: "San Francisco 4 Days — Golden Gate &amp; Alcatraz", href: "/blog/san-francisco-4-days" },
                { label: "New York 5 Days — Manhattan to Brooklyn", href: "/blog/new-york-5-days" },
                { label: "Miami 4 Days — South Beach &amp; Art Deco", href: "/blog/miami-4-days" },
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
