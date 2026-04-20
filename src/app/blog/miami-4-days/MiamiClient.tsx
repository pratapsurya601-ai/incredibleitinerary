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
const MIAMI_TOC = [
  { id: "honest",    emoji: "⚡",  label: "What Miami Actually Is" },
  { id: "season",    emoji: "🌡️", label: "Best Time to Visit" },
  { id: "getting",   emoji: "🚌",  label: "Getting Around" },
  { id: "itinerary", emoji: "📅",  label: "4-Day Itinerary" },
  { id: "budget",    emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",      emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",       emoji: "🍽️", label: "Where to Eat" },
  { id: "tips",      emoji: "💡",  label: "Pro Tips" },
  { id: "faq",       emoji: "❓",  label: "FAQ" },
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
          href: `mailto:?subject=Miami 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Miami in 4 Days — South Beach, Wynwood, Little Havana and the Everglades&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/miami-4-days"
        imageUrl="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80"
        description="Miami in 4 Days: South Beach Art Deco, Wynwood Walls, Little Havana, Everglades day trip, and PAMM — complete travel guide with budget breakdown."
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
export default function MiamiClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MIAMI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Miami" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="miami south beach art deco florida usa ocean drive"
            fallback="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1600&q=80"
            alt="Miami South Beach Ocean Drive Art Deco buildings at night with neon lights Florida USA"
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
              <span className="text-white/70">Miami 4 Days</span>
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
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Miami in 4 Days:
                <em className="italic text-amber-300"> South Beach, Little Havana &amp; the Everglades</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Art Deco architecture, $1 caf&eacute; cubano, Wynwood murals the size of buildings, an Everglades airboat through sawgrass prairie, and the Atlantic at your doorstep. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="14 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇺🇸 Florida, USA</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From $85/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Miami is the only American city that genuinely feels like a foreign country — in the best possible way. On Calle Ocho, old men play dominoes and argue about baseball in Spanish while the caf&eacute; cubano costs a dollar. In Wynwood, murals the size of apartment buildings compete for your attention. And the beach is still there, a perfect Atlantic beach, completely free.
            </p>
          </blockquote>

          {/* ── WHAT MIAMI ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Miami Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Miami is not a single place — it&apos;s a collection of wildly different neighbourhoods connected by causeways, expressways, and the free Metromover. South Beach is the Art Deco resort island most people picture: pastel buildings, neon signs, and the wide Atlantic beach. But cross the MacArthur Causeway to the mainland and Miami becomes a completely different city — Little Havana&apos;s Cuban exile culture, Wynwood&apos;s warehouse-district street art, Brickell&apos;s glass-tower financial district, and the Design District&apos;s luxury shopping and contemporary art galleries.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Then there&apos;s the Everglades — 6,000 square kilometres of slow-moving river and sawgrass prairie, 90 minutes south. Alligators, airboats, the Anhinga Trail where wildlife stands within arm&apos;s reach. It is one of the most unique ecosystems on the planet and it is sitting right next to this gleaming resort city.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Four days is the minimum to do Miami properly. One day for South Beach and the Art Deco Historic District. One for Wynwood and Little Havana. One for the Everglades. And one for the Design District, P&eacute;rez Art Museum, and the neighbourhoods most tourists never reach. This guide covers all of it.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="MIA" />
              <StatCard icon="🌡️" label="Best Months" value="Nov–Apr" />
              <StatCard icon="🗓" label="Duration" value="4 Days" />
              <StatCard icon="💰" label="Budget From" value="$85/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Miami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Nov–Apr",
                  i: "☀️",
                  t: "Winter — Best Season",
                  d: "22–28°C, low humidity, almost no rain. This is Miami at its finest — warm enough to swim but not oppressively hot. December through March is peak tourist season and hotel prices reflect it. Art Basel Miami Beach happens the first week of December. The best window for first-time visitors.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "May–Jun",
                  i: "🌅",
                  t: "Early Summer — Hot But Viable",
                  d: "28–33°C with rising humidity and afternoon thunderstorms that arrive like clockwork around 3pm and clear by 5pm. Hotel prices drop 30–40% from peak season. The beach is still excellent in the mornings. Viable if you plan around the afternoon storms.",
                  b: "Budget sweet spot",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Oct",
                  i: "🌀",
                  t: "Hurricane Season — Avoid if Possible",
                  d: "34–38°C, 80–95% humidity, daily thunderstorms, and the peak of Atlantic hurricane season (August–October). Several major hurricanes have struck South Florida in recent decades. If you must visit, book fully refundable accommodation and monitor NOAA forecasts.",
                  b: "Not recommended",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Art Basel Week",
                  i: "🎨",
                  t: "First Week of December",
                  d: "The most important art fair in the Americas transforms the entire city. Hotels sell out months in advance at 3–5x normal rates. Satellite fairs (NADA, Untitled, Scope) are free or inexpensive. Street programming and gallery events throughout Wynwood and the Design District are accessible at no cost.",
                  b: "For art lovers",
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

          {/* ── GETTING AROUND ── */}
          <section id="getting" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚌 Getting Around Miami</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Miami is a car-dependent city, but you can cover the main tourist areas without one. The <strong className="font-medium">Metromover is free</strong> in downtown/Brickell, the Miami Beach Bus costs $2.25/ride, and Uber runs $8–35 between most destinations.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚇",
                  t: "Metromover (free downtown loop)",
                  d: "The Metromover is a free elevated train that loops through downtown Miami and Brickell. It connects to the Metrorail at Government Center station. Runs every 90 seconds during peak hours. Perfect for downtown exploration at zero cost.",
                  b: "Free",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "Miami Beach Bus ($2.25/ride)",
                  d: "The Miami Beach Trolley and Metrobus routes connect South Beach to downtown Miami. Route 150 runs between MIA airport and South Beach ($2.25, 45–60 minutes). The EASY Card ($2 deposit) allows seamless transfers between bus and Metrorail.",
                  b: "Best value",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚕",
                  t: "Uber / Lyft",
                  d: "The practical choice for most tourists. South Beach to Wynwood: $12–18. South Beach to Little Havana: $15–22. South Beach to MIA airport: $20–35. Surge pricing during events and afternoon storms can push fares 2–3x higher.",
                  b: "Most convenient",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Rental car (Everglades day trip)",
                  d: "Only necessary for the Everglades day trip and Key Biscayne. Parking in South Beach costs $4–6/hour at meters, $20–40/day at garages. Most South Beach hotels charge $30–50/night for valet parking. For in-city travel, Uber is cheaper and less stressful.",
                  b: "For day trips",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Miami Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary is designed for first-time visitors and covers South Beach, Wynwood, Little Havana, the Everglades, and the Design District — the five essential experiences in Miami.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="South Beach Art Deco Historic District · Ocean Drive · Lummus Park Beach"
                cost="$50–80 total"
                items={[
                  "9:00am — Arrive at South Beach via Miami Beach Bus ($2.25 from MIA, 45–60 minutes) or Uber ($20–35). Check into your hotel and head straight to the beach side of things.",
                  "9:30am — Ocean Drive Art Deco Historic District walking tour (self-guided, free). Ocean Drive between 5th and 15th Streets contains the largest collection of Art Deco architecture in the world — 800+ buildings from the 1930s and 1940s. Pick up a free walking map from the Art Deco Welcome Center at 1001 Ocean Drive.",
                  "11:00am — Art Deco Museum (1001 Ocean Drive, $20 admission, 45 minutes). Alternatively, book a guided walking tour through the Miami Design Preservation League ($30, 90 minutes, runs daily at 10:30am).",
                  "1:00pm — Lunch at Puerto Sagua Restaurant (700 Collins Ave, since 1962) — Cuban food at real prices, not tourist prices. Ropa vieja with rice and beans $14, Cuban sandwich $10, caf\u00e9 cubano $2.",
                  "2:30pm — Lummus Park Beach (between Ocean Drive and the Atlantic, 5th to 15th Streets) — free entry, free public beach by Florida law. The pastel lifeguard towers are as iconic as the Art Deco buildings. Swim, rest, or watch the South Beach parade.",
                  "5:30pm — Lincoln Road pedestrian mall (17th Street) — free outdoor shopping mall with palm trees and public art installations. The best people-watching in Miami.",
                  "8:00pm — Evening on Ocean Drive for atmosphere. Sit at a sidewalk caf\u00e9 ($8–12 for a drink) — the neon lights and vintage cars cruising the strip are the essential Miami evening. Eat beforehand; Ocean Drive restaurant prices are tourist-tier ($25–45/entree).",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Wynwood Walls · Little Havana Calle Ocho · Versailles Restaurant"
                cost="$40–65 total"
                items={[
                  "10:00am — Wynwood Walls (NW 2nd Avenue between 25th and 26th Streets) — the outdoor street murals are free. Walk the surrounding blocks for enormous murals covering every building for 6 square blocks. The ticketed Wynwood Walls courtyard ($12) has the curated interior exhibitions.",
                  "11:30am — Walk Wynwood for free: NW 2nd Avenue and the surrounding streets have murals commissioned from artists from 40+ countries. Goldman Properties turned this formerly industrial neighbourhood into one of the most photographed street art destinations in the world.",
                  "1:00pm — Lunch in Wynwood: KYU ($18–25/person) for Asian-inspired wood-fired cuisine — the Korean fried cauliflower and glazed short rib are perennial menu items. A Wynwood institution.",
                  "2:30pm — Little Havana via Uber ($12–15): Calle Ocho (SW 8th Street) between SW 12th and SW 27th Avenues is the heart of Cuban-American Miami. Start at Maximo Gomez Domino Park (free) and watch the daily domino games that have been happening since the 1960s.",
                  "3:30pm — Versailles Restaurant (3555 SW 8th Street) — the definitive Cuban-American cultural institution in Miami. Have a caf\u00e9 cubano ($1.50) and a pastelito de guayaba ($2.50) at the walk-up ventanita window on the side of the building.",
                  "5:00pm — Tower Theater (1508 SW 8th Street) — a 1926 movie palace, now a Miami-Dade cultural center. One of the finest Art Deco facades outside South Beach. Free to view from outside.",
                  "8:00pm — Dinner in Little Havana: El Cristo Restaurant (1543 SW 8th Street, $15–22/person) for honest Cuban home cooking — lech\u00f3n asado, black beans, yuca con mojo. This meal costs three times as much on South Beach.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Everglades National Park · Airboat Tour · Key Biscayne Beach"
                cost="$65–95 total (including park entry and airboat)"
                items={[
                  "7:30am — Early departure for the Everglades. Drive 90 minutes south on the Florida Turnpike to Ernest F. Coe Visitor Center (40001 State Road 9336, Homestead). Park entry: $35/vehicle or $20/person on foot. Valid 7 days.",
                  "9:00am — Anhinga Trail (0.8km, flat, paved) — the single best wildlife trail in the park. Anhinga birds, alligators basking on trail edges, turtles crossing the path, and great blue herons hunting in open water. Wildlife is extremely dense and unafraid of humans. Budget 45–60 minutes.",
                  "10:30am — Gumbo Limbo Trail (0.8km loop) through dense subtropical hammock forest. The contrast between open sawgrass prairie and jungle canopy happens within 50 metres.",
                  "12:00pm — Airboat tour with Everglades Safari Park or Coopertown Airboats on the Tamiami Trail ($28–45/person, 30–60 minutes). Airboats access the open sawgrass river that road-based trails cannot reach. Ear protection provided.",
                  "2:00pm — Return drive north. Stop at Robert Is Here fruit stand (19200 SW 344th Street, Homestead) — a Florida landmark since 1959. The mango milkshake ($7) is non-negotiable.",
                  "4:30pm — Detour to Key Biscayne via the Rickenbacker Causeway (toll $2). Bill Baggs Cape Florida State Park ($8/car) has one of the finest beaches in Florida — white sand, clear shallow water, and a 19th-century lighthouse.",
                  "7:30pm — Dinner back in Miami. Budget $20–30 at any Brickell restaurant or grab ceviche at Cvi.che 105 (105 NE 3rd Avenue, $30–45/person) for outstanding Peruvian food.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Design District · P\u00e9rez Art Museum Miami · Coconut Grove · Departure"
                cost="$40–75 total"
                items={[
                  "9:00am — Design District (NE 38th to 42nd Streets) — free to walk. Miami\u0027s high-design luxury retail neighbourhood with architecturally notable buildings. The Institute of Contemporary Art Miami (ICA, 61 NE 41st Street) is free admission every day — genuinely excellent rotating contemporary art exhibitions.",
                  "11:00am — Bayside Marketplace (401 Biscayne Blvd) — outdoor waterfront marketplace on Biscayne Bay, free entry. The waterfront walk provides good views of the Port of Miami. Marina boat tours depart from here ($35–60, 90 minutes).",
                  "1:00pm — P\u00e9rez Art Museum Miami (PAMM, 1103 Biscayne Blvd, $16 adults, free on first Fridays). A Herzog &amp; de Meuron-designed building on Biscayne Bay. The hanging gardens (tropical plants in massive macram\u00e9 installations) are as notable as the art. Strong focus on Caribbean and Latin American contemporary art.",
                  "3:30pm — Coconut Grove neighbourhood (30 minutes south by car or Metrorail from Brickell): Miami\u0027s oldest neighbourhood, filled with banyan trees, boutiques, and waterfront parks. CocoWalk (3015 Grand Ave) and Peacock Park are free.",
                  "5:30pm — Return to hotel for checkout if departing. Uber from South Beach to MIA: $20–35, allow 45–60 minutes. MIA security lines on weekend afternoons can reach 45 minutes.",
                  "7:00pm — If staying an extra night: dinner at Joe\u0027s Stone Crab (11 Washington Ave, South Beach, seasonal Oct–Jul, $40–80/person) — Miami\u0027s most iconic restaurant since 1913. The stone crab claws with mustard sauce are the definitive Miami meal. No reservations; expect a 1–2 hour wait or eat at the takeaway counter.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Miami" onPlanTrip={() => setModalOpen(true)} />

          {/* ── TOP ATTRACTIONS GUIDE ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Top Attractions Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sights in Miami ranked by priority. Prices are as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "South Beach Art Deco Historic District",
                  e: "Free (self-guided walk)",
                  d: "Ocean Drive between 5th and 15th Streets has the largest collection of Art Deco architecture in the world \u2014 800+ pastel-painted buildings from the 1930s and 1940s. The Art Deco Welcome Center at 1001 Ocean Drive provides free maps. Guided tours through the Miami Design Preservation League cost $30.",
                  t: "Must see \u00b7 2\u20133 hrs",
                },
                {
                  n: "Wynwood Walls",
                  e: "Free (outdoor murals) / $12 (courtyard)",
                  d: "Six square blocks of enormous murals commissioned from artists from 40+ countries. The outdoor streets are free; the ticketed Wynwood Walls courtyard ($12) contains the original curated exhibitions. Arrive before noon on weekends to beat the crowds.",
                  t: "Must see \u00b7 2\u20133 hrs",
                },
                {
                  n: "Vizcaya Museum &amp; Gardens",
                  e: "$22 adults",
                  d: "A 1916 Italian Renaissance-style villa on Biscayne Bay with 10 acres of formal European gardens. The interior has 34 rooms of European decorative arts and furnishings. One of the most photographed buildings in Miami and a National Historic Landmark.",
                  t: "Highly recommended \u00b7 2 hrs",
                },
                {
                  n: "P\u00e9rez Art Museum Miami (PAMM)",
                  e: "$16 adults (free first Fridays)",
                  d: "A Herzog &amp; de Meuron-designed building on Biscayne Bay. The hanging tropical gardens are as notable as the art inside. Strong focus on contemporary Caribbean and Latin American art. The waterfront terrace alone is worth the visit.",
                  t: "Recommended \u00b7 1.5\u20132 hrs",
                },
                {
                  n: "Everglades National Park",
                  e: "$35/vehicle or $20/person",
                  d: "A 6,000 square kilometre slow-moving river of sawgrass prairie and mangrove estuaries, 90 minutes south of South Beach. The Anhinga Trail has wildlife density that rivals East Africa. Airboat tours ($28+) access areas roads cannot reach. Budget a full day.",
                  t: "Must see \u00b7 Full day",
                },
                {
                  n: "Little Havana (Calle Ocho)",
                  e: "Free",
                  d: "SW 8th Street between 12th and 27th Avenues is the heart of Cuban-American Miami. Maximo Gomez Domino Park, Versailles Restaurant, and the Tower Theater anchor the strip. The caf\u00e9 cubano at Versailles\u0027 ventanita ($1.50) is the benchmark.",
                  t: "Must see \u00b7 3\u20134 hrs",
                },
                {
                  n: "Key Biscayne &amp; Bill Baggs State Park",
                  e: "$8/car entry",
                  d: "A barrier island 20 minutes from downtown via the Rickenbacker Causeway. Bill Baggs Cape Florida State Park at the southern tip has one of the finest beaches in Florida \u2014 white sand, clear shallow water, and a 19th-century lighthouse with $5 tower tours.",
                  t: "Day trip \u00b7 Half day",
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
            title="Miami — Art Deco, Murals &amp; the Atlantic"
            subtitle="From South Beach neon to Everglades sawgrass."
            spots={[
              {
                name: "South Beach Art Deco",
                query: "miami south beach art deco ocean drive pastel buildings neon florida",
                desc: "The pastel-painted Art Deco hotels and neon signs of Ocean Drive — the defining visual of Miami Beach.",
              },
              {
                name: "Wynwood Walls Street Art",
                query: "wynwood walls miami street art murals colorful florida",
                desc: "Enormous murals covering every building for six square blocks — one of the most photographed street art destinations in the world.",
              },
              {
                name: "Everglades National Park",
                query: "everglades national park florida airboat sawgrass alligator wildlife",
                desc: "The Everglades — a 6,000 square kilometre slow-moving river of sawgrass prairie, cypress domes, and mangrove estuaries.",
              },
              {
                name: "Little Havana Calle Ocho",
                query: "little havana calle ocho miami cuban culture domino park florida",
                desc: "Calle Ocho in Little Havana — the heart of Cuban-American Miami since the 1960s.",
              },
              {
                name: "Key Biscayne Beach",
                query: "key biscayne beach cape florida lighthouse miami clear water",
                desc: "Bill Baggs Cape Florida State Park — white sand, clear shallow water, and a 19th-century lighthouse at the southern tip of Key Biscayne.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Miami ranges from surprisingly affordable to wildly expensive depending on where you eat, sleep, and drink. The beach is free. The Metromover is free. Cuban food in Little Havana costs a quarter of what it does on Ocean Drive.
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
                    ["🏨 Accommodation", "$30–60/night", "$120–200/night", "$350–1,200/night"],
                    ["🍽 Food", "$20–30/day", "$45–80/day", "$120–350/day"],
                    ["🚕 Transport", "$10–20/day", "$25–50/day", "$80–200/day"],
                    ["🎨 Activities", "$15–30/day", "$30–70/day", "$100–400/day"],
                    ["TOTAL (per person)", "$85–140/day", "$220–400/day", "$600–2,000+/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($85–140/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay at Generator Miami hostel ($30–60/night), eat Cuban food in Little Havana and Wynwood taquerias, use the bus and Metromover, and enjoy free beaches and street art.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($220–400/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay at Circa 39 or a Mid-Beach boutique hotel ($120–200/night), mix Cuban food with nicer restaurants like KYU and Ariete, take guided tours, and Uber between neighbourhoods.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($600–2,000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">The Setai or Faena Hotel ($350–1,200/night), private Everglades safari, sunset yacht charter on Biscayne Bay, and dinner at Cote Miami or Stubborn Seed.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Miami</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              South Beach between 5th and 20th Streets is the classic first-timer base — walkable, beach-adjacent, and all the main attractions easily accessible. Mid-Beach (23rd–42nd) is calmer and better value. Brickell suits business travellers but requires Uber to reach the beach.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "The Setai Miami Beach",
                  type: "Ultra-luxury · South Beach",
                  price: "From $500/night",
                  badge: "Most prestigious",
                  desc: "One of the finest hotels in Miami Beach — Asian-inspired minimalist design, three infinity pools at different temperatures, and a private beach section. The restaurant by Javier serves exceptional Asian cuisine. The architecture alone (a restored 1930s Art Deco tower merged with a modern glass tower) is remarkable.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Faena Hotel Miami Beach",
                  type: "Luxury boutique · Mid-Beach",
                  price: "From $400/night",
                  badge: "Most theatrical",
                  desc: "Designed by Baz Luhrmann and Catherine Martin — a gilded woolly mammoth skeleton, Damien Hirst installations, and a red colour palette unlike anything else in Miami. The Tierra Santa Healing House spa and the Faena Theater make this more than a hotel.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Circa 39 Hotel",
                  type: "Mid-range boutique · Mid-Beach",
                  price: "From $120/night",
                  badge: "Best value boutique",
                  desc: "Excellent value in the Mid-Beach area — far enough from the Spring Break crowds of South Beach while remaining walkable to everything. Pool, complimentary beach chairs, and a genuinely boutique feel without the boutique price tag.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Generator Miami",
                  type: "Design hostel · South Beach",
                  price: "From $30/night (dorm)",
                  badge: "Best budget",
                  desc: "A design-forward hostel on Collins Avenue in South Beach. Private rooms from $90/night, dorms from $30. Rooftop pool, bar, and a social atmosphere. The best budget accommodation in the South Beach area by a significant margin.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Miami</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Miami&apos;s food scene is one of the best in the USA — driven by Cuban, Peruvian, Haitian, Colombian, and Caribbean immigrant communities alongside world-class chefs. The rule is simple: eat off Ocean Drive.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Joe\u0027s Stone Crab",
                  t: "Iconic seafood · South Beach (seasonal Oct–Jul)",
                  d: "Miami\u0027s most iconic restaurant since 1913. The stone crab claws with mustard sauce are the definitive Miami meal. No reservations; expect a 1–2 hour wait or eat at the takeaway counter. Medium claws from $40, dinner for two $80–150. Worth it once.",
                  b: "Iconic",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Versailles Restaurant",
                  t: "Cuban institution · Little Havana",
                  d: "The definitive Cuban-American political and cultural institution in Miami. The ventanita (walk-up window) serves caf\u00e9 cubano ($1.50), pastelitos de guayaba ($2.50), and croquetas ($1) to a constant stream of locals. Inside, the ropa vieja and fried plantains are excellent. Full meals $12–22.",
                  b: "Must visit",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "KYU",
                  t: "Asian wood-fire · Wynwood",
                  d: "The restaurant that anchored Wynwood when the neighbourhood was still being discovered. Korean fried cauliflower, glazed short rib, and wagyu dumplings are perennial menu items. $18–40/person. Book ahead for dinner; lunch walk-ins are usually possible.",
                  b: "Best in Wynwood",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Puerto Sagua Restaurant",
                  t: "Old-school Cuban · South Beach",
                  d: "On Collins Avenue since 1962 — Cuban food at real prices in the middle of tourist territory. Ropa vieja $14, Cuban sandwich $10, caf\u00e9 cubano $2. Cash preferred. Lines out the door at noon but the turnover is fast.",
                  b: "Best value on the beach",
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
            destination="Miami Florida"
            hotels={[
              {
                name: "The Setai Miami Beach",
                type: "Ultra-luxury · Asian-inspired minimalism",
                price: "From $500/night",
                rating: "5",
                badge: "Most prestigious",
                url: "https://www.booking.com/hotel/us/the-setai-miami-beach.html?aid=2820480",
              },
              {
                name: "Faena Hotel Miami Beach",
                type: "Luxury boutique · Baz Luhrmann design",
                price: "From $400/night",
                rating: "5",
                badge: "Most theatrical",
                url: "https://www.booking.com/hotel/us/faena-miami-beach.html?aid=2820480",
              },
              {
                name: "Circa 39 Hotel",
                type: "Boutique · Mid-Beach value",
                price: "From $120/night",
                rating: "4",
                badge: "Best value",
                url: "https://www.booking.com/hotel/us/circa-39-miami-beach.html?aid=2820480",
              },
              {
                name: "Generator Miami",
                type: "Design hostel · South Beach",
                price: "From $30/night (dorm)",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/us/generator-miami.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Everglades Airboat Tour",
                duration: "3 hrs",
                price: "From $28/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=everglades+airboat+tour+miami&partner_id=PSZA5UI",
              },
              {
                name: "Wynwood Walls Guided Art Tour",
                duration: "2 hrs",
                price: "From $40/person",
                badge: "Popular",
                url: "https://www.getyourguide.com/s/?q=wynwood+walls+art+tour+miami&partner_id=PSZA5UI",
              },
              {
                name: "Little Havana Food &amp; Culture Tour",
                duration: "3 hrs",
                price: "From $65/person",
                url: "https://www.getyourguide.com/s/?q=little+havana+food+tour+miami&partner_id=PSZA5UI",
              },
              {
                name: "Biscayne Bay Sunset Cruise",
                duration: "2 hrs",
                price: "From $35/person",
                url: "https://www.getyourguide.com/s/?q=biscayne+bay+sunset+cruise+miami&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Miami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "☕",
                  title: "Caf\u00e9 Cubano: The Dollar That Changes Your Day",
                  desc: "The caf\u00e9 cubano — a thimble-sized espresso brewed with raw sugar mixed in during extraction — is the defining beverage of Miami. It costs $1\u20132 at any Cuban bakery or ventanita. The ventanita at Versailles on Calle Ocho ($1.50) is the benchmark. A medianoche sandwich ($6\u201310) pairs with it perfectly.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🏖️",
                  title: "Florida Law: All Beaches Are Free and Public",
                  desc: "Florida law guarantees public access to all Atlantic and Gulf beaches. The entire stretch of sand from South Pointe Park north to Bal Harbour is publicly accessible. Beach vendors rent chairs and umbrellas ($20\u201330/set) but you are not required to use them. Lifeguard towers are staffed year-round.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🚇",
                  title: "Metromover Is Free Downtown",
                  desc: "The Metromover elevated train loops through downtown Miami and Brickell at zero cost. It runs every 90 seconds during peak hours and connects to the paid Metrorail at Government Center. Most tourists don\u0027t know it exists and take Ubers for $12 trips that the Metromover covers for free.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🍽️",
                  title: "Eat Off Ocean Drive, Always",
                  desc: "Ocean Drive restaurants are among the most aggressively overpriced in the USA — $35 for a chicken sandwich with mandatory service charges. The Cuban food three miles away on Calle Ocho costs 25\u201330% of the same meal on Ocean Drive and is dramatically better. Have one drink on Ocean Drive for ambiance; eat everywhere else.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🐊",
                  title: "Don\u0027t Skip the Everglades",
                  desc: "The Everglades is 90 minutes from South Beach and has wildlife density on the Anhinga Trail that rivals East Africa for ease of viewing. The airboat experience ($28+) is unlike anything else in North America. Skipping it for a fourth beach day is genuinely the wrong call for first-time visitors.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🚕",
                  title: "Uber Surge Pricing During Storms",
                  desc: "Miami gets afternoon thunderstorms almost daily in summer — and even in winter, occasional rain causes Uber surge pricing to double or triple. The Miami Beach Bus ($2.25) runs regardless of weather. Have the EASY Card loaded and ready as a backup for rainy-day transport.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Miami" />

          {/* Combine With */}
          <CombineWith currentSlug="miami-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "When is hurricane season in Miami and should I avoid it?",
                  a: "The Atlantic hurricane season runs June 1 through November 30, with the statistical peak in August\u2013October. Major hurricanes affecting Miami have historically included Irma (2017) and Andrew (1992). The combination of extreme heat, humidity, and storm risk makes summer a genuinely poor time to visit. November is the transitional sweet spot: hurricane risk dropping, temperatures cooling to the mid-20s, and prices not yet at winter premium levels.",
                },
                {
                  q: "What is the best area to stay in Miami for first-timers?",
                  a: "South Beach between 5th and 20th Streets is the classic first-timer choice \u2014 walkable, beach-adjacent, Art Deco architecture everywhere, and all major attractions easily accessible. Mid-Beach (23rd\u201342nd Streets) offers calmer streets and better-value hotels while remaining on Miami Beach. Brickell suits business travellers with excellent restaurants but requires Uber to reach the beach. Avoid Downtown Miami for accommodation \u2014 limited walkability and safety concerns after dark.",
                },
                {
                  q: "How far is the Everglades from Miami?",
                  a: "The Ernest F. Coe Visitor Center at the main park entrance is approximately 60km and 90 minutes south of South Beach via the Florida Turnpike and US-1. Most visitors see the Anhinga and Gumbo Limbo trails, then head to the Flamingo area before returning. Budget a full day (8am\u20136pm) for a proper Everglades experience.",
                },
                {
                  q: "Are Florida beaches really free and publicly accessible?",
                  a: "Yes \u2014 by Florida law, all beaches seaward of the mean high water line are publicly owned and accessible. Even in front of private hotels and residences in Miami Beach, you can walk the shoreline. Beach chair and umbrella vendors rent equipment ($20\u201330/set) but you can bring your own or use the beach without any rental. Lifeguards are stationed at regular intervals along South Beach year-round.",
                },
                {
                  q: "Is South Beach safe for tourists?",
                  a: "South Beach and Miami Beach generally are very safe for tourists during daylight and in the main tourist corridors at night. The main practical risks are bag theft on the beach (never leave valuables unattended), car break-ins (do not leave anything visible in a parked car), and occasional aggressive behaviour on Ocean Drive late at night during major events. Spring Break (late February\u2013early April) brings significantly more rowdy crowds.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Miami trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/miami-4-days/best-time", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/miami-4-days/couples-guide", label: "Couples guide", icon: "💑" },
                { href: "/blog/miami-4-days/packing-list", label: "Packing list", icon: "🧳" },
                { href: "/blog/best-time-to-visit-miami", label: "Month-by-month", icon: "📋" },
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
          <RelatedGuides currentSlug="miami-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More USA &amp; Americas Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "New York in 5 Days — Manhattan &amp; Beyond", href: "/blog/new-york-5-days" },
                { label: "Los Angeles 5 Days — Coast &amp; Culture", href: "/blog/los-angeles-5-days" },
                { label: "Las Vegas 4 Days — Strip &amp; Red Rock", href: "/blog/las-vegas-4-days" },
                { label: "Cancun 4 Days — Beaches &amp; Ruins", href: "/blog/cancun-4-days" },
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
