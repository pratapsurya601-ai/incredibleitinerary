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
const ABU_DHABI_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Abu Dhabi Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
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
          href: `mailto:?subject=Abu Dhabi 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Abu Dhabi in 3 Days — mosques, museums and the complete itinerary&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/abu-dhabi-3-days"
        imageUrl="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=1200&q=80"
        description="Abu Dhabi in 3 Days: Sheikh Zayed Mosque, Louvre Abu Dhabi, Yas Island, Ferrari World, Corniche and Saadiyat Beach — complete travel guide with budget breakdown in AED and USD."
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
export default function AbuDhabiClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={ABU_DHABI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Abu Dhabi" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="abu dhabi sheikh zayed grand mosque white marble domes golden hour"
            fallback="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=1600&q=85"
            alt="Sheikh Zayed Grand Mosque in Abu Dhabi at golden hour with white marble domes reflecting sunset light"
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
              <span className="text-white/70">Abu Dhabi 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Culture &amp; Architecture
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Abu Dhabi in 3 Days:
                <em className="italic text-amber-300"> Mosques, Museums &amp; the Real Capital</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Sheikh Zayed Mosque at golden hour, Louvre Abu Dhabi&apos;s rain-of-light dome, Yas Island theme parks and Saadiyat&apos;s turquoise water. The complete guide with real timings, costs in AED &amp; USD, and the cultural experiences most visitors skip entirely.
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
              <span>🇦🇪 UAE</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From AED 750/trip</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Sheikh Zayed Grand Mosque at 4:30pm is the single most beautiful building I&apos;ve seen in the Middle East. The white marble turns gold as the sun drops, the reflective pools become mirrors, and then the lights come on and it transforms again entirely. Most visitors come at noon, squint at the marble, and leave. Arrive at golden hour. This guide tells you exactly when to arrive for every stop.
            </p>
          </blockquote>

          {/* ── WHAT ABU DHABI ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Abu Dhabi Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Abu Dhabi is the capital of the United Arab Emirates and the largest of its seven emirates, holding roughly 87% of the country&apos;s land area. It sits on a T-shaped island jutting into the Persian Gulf, connected to the mainland by three bridges. The city was a quiet pearling and fishing settlement until oil was discovered in 1958 &mdash; within two generations it went from mud-brick forts to a skyline that rivals any in the world.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The tourism reality: most visitors treat Abu Dhabi as a day trip from Dubai, rush through Sheikh Zayed Mosque, and leave. That misses the point entirely. Abu Dhabi is culturally richer than Dubai &mdash; the Louvre Abu Dhabi is a genuine world-class museum, Qasr Al Watan is the most ornate government building you can visit anywhere, and the mosque at golden hour is a spiritual experience regardless of your faith. The city is also more conservative, more spacious, and significantly less commercial than its flashier neighbour 90 minutes up the highway.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Three days is the sweet spot. Day one for the mosque and cultural core, day two for Louvre and Saadiyat Island&apos;s beaches, day three for Yas Island&apos;s theme parks and departure. You will see a side of the UAE that the Dubai-only visitors never encounter.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="AUH" />
              <StatCard icon="🌡️" label="Best Season" value="Nov–Mar" />
              <StatCard icon="🕌" label="Landmarks" value="World-class" />
              <StatCard icon="💰" label="Budget From" value="AED 250/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Abu Dhabi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Nov–Feb",
                  i: "☀️",
                  t: "Cool Season — Best Overall",
                  d: "20–28°C with virtually no rain. Perfect for outdoor sightseeing, beach days, and walking the Corniche. December and January are peak tourist months with the highest hotel prices. The Abu Dhabi Grand Prix (November) brings a festival atmosphere to Yas Island but hotel rates spike 3x. Book 2–3 months ahead for this window.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar–Apr",
                  i: "🌤️",
                  t: "Shoulder Season — Great Value",
                  d: "25–33°C and still comfortable for most outdoor activities. Prices drop 20–30% from peak season and crowds thin noticeably at the mosque and Louvre. Late April starts getting warm but mornings and evenings are still pleasant. The best balance of weather, prices, and crowd levels.",
                  b: "Best value",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "May–Sep",
                  i: "🔥",
                  t: "Summer — Extreme Heat",
                  d: "38–48°C with suffocating humidity. Outdoor sightseeing is genuinely difficult between 10am and 5pm. However: hotel prices drop 40–60%, malls and indoor attractions (Louvre, Ferrari World, Warner Bros World) are air-conditioned, and the mosque at 5pm with golden hour light is still magical. Budget travellers who can handle the heat save enormously.",
                  b: "Budget travellers only",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Oct",
                  i: "🌅",
                  t: "Transition Month — Warming Up",
                  d: "30–36°C and gradually cooling. October is hit-or-miss: early October is still very warm, but late October can be pleasant. Prices remain low and the city is quiet. A decent gamble if you book late October and can handle some heat. The water is still warm for swimming at Saadiyat and Corniche beaches.",
                  b: "Late October onwards",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Abu Dhabi</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Abu Dhabi International Airport (AUH) is on Yas Island, 30 minutes from downtown. The new Midfield Terminal opened in 2023 and is one of the most impressive airport terminals in the world. <strong className="font-medium">Indian passport holders need a UAE visa (AED 350&ndash;500 online, 3&ndash;5 days). US/UK/EU/AU citizens get 30 days visa-free on arrival.</strong>
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "AUH Airport — Fly direct",
                  d: "Etihad Airways is Abu Dhabi's home carrier with direct flights from Delhi, Mumbai, Bangalore, London, New York, Sydney and 80+ cities. Air India and IndiGo also fly direct from major Indian cities. Return fares from India: INR 15,000–30,000 if booked 6–8 weeks ahead. The new Midfield Terminal (Terminal A) handles all Etihad flights and is worth arriving early to explore.",
                  b: "Direct from India",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "From Dubai — Bus or taxi",
                  d: "Bus E100 or E101 from Al Ghubaiba station in Dubai: AED 25 ($6.80), 2 hours, every 20 minutes. Comfortable, air-conditioned, and the cheapest option. Taxi from Dubai: AED 250–350 ($68–95), 1.5 hours. The highway is straight and fast. If you already have a Dubai hotel, a day trip is possible but 2–3 nights in Abu Dhabi is far better value for your time.",
                  b: "AED 25 by bus",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "✈️",
                  t: "From India — Best routes",
                  d: "Etihad direct from Mumbai (3.5 hrs), Delhi (4 hrs), Bangalore (4.5 hrs), Hyderabad (4 hrs), and Kochi (4 hrs). Budget option: fly Air Arabia to Sharjah (SHJ) then bus to Abu Dhabi (AED 35, 2.5 hrs) — saves INR 3,000–8,000 on flights. One UAE visa covers all emirates, so Dubai arrival + bus to Abu Dhabi is another valid route.",
                  b: "3.5–4.5 hrs direct",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚕",
                  t: "Airport to downtown",
                  d: "Taxi from AUH to Corniche/downtown: AED 70–90 ($19–25), 25–30 minutes. Abu Dhabi taxis are metered, clean and reliable. There is no metro system — taxis and buses are the main public transport. Uber and Careem both work. The DARB bus system covers major routes for AED 2/ride ($0.55) with a Hafilat card.",
                  b: "AED 70–90 taxi",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Abu Dhabi Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary covers mid-range spending (AED 400&ndash;700/day, ~$109&ndash;191 USD). Each day card is expandable. The route runs cultural core (Day 1) &rarr; Saadiyat &amp; Louvre (Day 2) &rarr; Yas Island &amp; departure (Day 3). Budget and luxury alternatives are noted in the cost estimates.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Sheikh Zayed Mosque, Corniche & Cultural Core"
                cost="AED 150–350 (~$41–95) excluding accommodation"
                items={[
                  "9am: Sheikh Zayed Grand Mosque — free entry, opens 9am (Fri: 4:30pm). Arrive early for empty courtyards and the best photos without crowds. The mosque holds 41,000 worshippers, features 82 white marble domes, and has the world's largest hand-knotted carpet (5,627 sqm). Budget 2–2.5 hours minimum.",
                  "Dress code is strict: shoulders and knees covered, women need a headscarf. Free abayas and sheila are available at the entrance but the queue can be 20 minutes in peak season — bring your own modest clothing to save time.",
                  "12pm: Lunch at Al Mina Fish Market area — pick your fish from the market stalls, take it to one of the adjacent restaurants and they cook it for AED 10–15 ($2.70–4) cooking fee on top of the fish price. A full seafood lunch comes to AED 30–60 ($8–16). The freshest and best-value seafood meal in the city.",
                  "2pm: Corniche Beach — the public beach sections are free with clean white sand and turquoise water. The gated Corniche Beach Club charges AED 10 ($2.70) for entry with changing facilities and sunbeds. The 8km Corniche promenade is one of the most pleasant waterfront walks in the Gulf.",
                  "4:30pm: Return to Sheikh Zayed Mosque for golden hour. This is the real experience — the white marble turns gold as the sun drops, the reflective pools become mirrors, and as dusk falls the entire mosque is illuminated against the night sky. You see three completely different mosques in 2 hours. Stay until the lights are fully on.",
                  "7:30pm: Dinner at a Lebanese restaurant in the Tourist Club Area — full mezze spread with grills for AED 40–70 ($11–19) per person. Abu Dhabi has exceptional Lebanese food at every price point.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Louvre Abu Dhabi, Saadiyat Beach & Mangroves"
                cost="AED 250–500 (~$68–136) excluding accommodation"
                items={[
                  "9am: Louvre Abu Dhabi — AED 63 ($17) entry, free for under-18s. Book the first slot online for the emptiest galleries. Jean Nouvel's dome creates a mesmerising rain-of-light effect that is strongest in the morning sun. The collection spans 6,000 years of human history across 12 galleries — plan 3 hours minimum.",
                  "The building alone justifies the entry fee. The dome is 180 metres in diameter with 7,850 metal stars creating shifting patterns of light on the white surfaces below. On a clear morning it is genuinely breathtaking.",
                  "12:30pm: Lunch at the Louvre museum cafe with water views — AED 60–120 ($16–33). Or bring your own and eat outside in the shaded areas to save money.",
                  "2pm: Saadiyat Beach — AED 25 ($6.80) for public beach entry with sunbed. The water is turquoise, the sand is white, and it is significantly less crowded than any Dubai beach. The beach sometimes has nesting hawksbill turtles (November–March). Saadiyat Beach Club offers a day pass for AED 100–175 ($27–48) with pool access.",
                  "5pm: Mangrove National Park kayaking — AED 100–175 ($27–48) for a guided 2-hour paddle through the protected mangrove channels. Spot herons, flamingos, and occasionally sea turtles. The mangroves are just 15 minutes from downtown and feel like a different world. Book ahead as tours fill up in peak season.",
                  "8pm: Dinner at Li Beirut (Jumeirah at Etihad Towers) — Lebanese fine dining with city views. AED 200–350 ($54–95) for two courses. Or for a budget-friendly alternative: any cafeteria-style restaurant in the Hamdan Street area for AED 20–35 ($5.50–9.50) for a full meal.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Yas Island, Ferrari World & Departure"
                cost="AED 200–600 (~$54–163) excluding accommodation"
                items={[
                  "9am: Qasr Al Watan (Presidential Palace) — AED 65 ($17.70) entry. Open to the public since 2019, this is the most ornate government building you can walk through anywhere in the world. The Great Hall, the presidential library, and the manicured gardens are extraordinary. Budget 1.5 hours.",
                  "11am: Drive or taxi to Yas Island (25–30 min from downtown, AED 40–60 / $11–16). Yas Island is Abu Dhabi's entertainment hub and conveniently where the airport is — perfect for a last-day plan.",
                  "Ferrari World Abu Dhabi — AED 310 ($84) walk-up, AED 275–295 online if booked 1–2 days ahead. Home to Formula Rossa, the world's fastest roller coaster (240 km/h). Budget 3–4 hours. Alternatively: Warner Bros World (AED 315 / $86) for families, or Yas Waterworld (AED 290 / $79) in summer. Pick one, not all three.",
                  "2pm: Lunch at Yas Mall food court — AED 30–55 ($8–15) for a full meal. The mall has 370+ stores if you want to squeeze in shopping. Or for something nicer: Cipriani at Yas Marina for Italian with marina views (AED 200–350 / $54–95).",
                  "4pm: Walk along Yas Marina and the Formula 1 circuit. The Yas Hotel (now W Abu Dhabi) that straddles the F1 track is an architectural landmark worth seeing from outside. Free to walk around the marina area.",
                  "5:30pm: Head to the airport. AUH is on Yas Island — a 10-minute taxi from Yas Mall (AED 15–25 / $4–7). The new Terminal A has excellent lounges and dining if you arrive early.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Abu Dhabi" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🕌 Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential landmarks ranked by priority. Abu Dhabi&apos;s top three (mosque, Louvre, Qasr Al Watan) are genuinely world-class. Entry fees as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Sheikh Zayed Grand Mosque",
                  e: "Free",
                  d: "The most beautiful mosque in the UAE and one of the most striking religious buildings on Earth. 82 white marble domes, the world's largest hand-knotted carpet (5,627 sqm, 35 tonnes), and seven Swarovski crystal chandeliers. Holds 41,000 worshippers. Open 9am–10pm daily (Fri from 4:30pm). Visit at golden hour (4–4:30pm arrival) for the transformative sunset-to-illumination experience. Free guided tours available.",
                  t: "Must see · Free · 2–3 hrs",
                },
                {
                  n: "Louvre Abu Dhabi",
                  e: "AED 63 (~$17)",
                  d: "The first Louvre outside France, designed by Pritzker Prize-winning architect Jean Nouvel. The 180-metre dome composed of 7,850 metal stars creates a shifting rain-of-light effect across the galleries below. The collection spans from ancient Mesopotamia to contemporary art across 12 themed galleries. Book the 9am slot for empty galleries and the best dome light. Children under 18 enter free.",
                  t: "Must see · Art · 3 hrs",
                },
                {
                  n: "Qasr Al Watan (Presidential Palace)",
                  e: "AED 65 (~$18)",
                  d: "Abu Dhabi's Presidential Palace, open to the public since 2019. The Great Hall is one of the most ornate interior spaces in the Gulf — white marble, intricate geometric patterns, and a massive dome. The library, the palace gardens, and the evening light show (included in the ticket) are all worth the visit. Budget 1.5–2 hours.",
                  t: "Must see · Architecture · 2 hrs",
                },
                {
                  n: "Ferrari World Abu Dhabi",
                  e: "AED 310 (~$84)",
                  d: "The world's first Ferrari-branded theme park, housed under the largest space-frame structure ever built. Home to Formula Rossa (world's fastest roller coaster at 240 km/h) and 20+ rides. Indoor and fully air-conditioned — excellent for summer visits. Book online to save AED 15–35. Allow 3–4 hours for the major rides.",
                  t: "Yas Island · Thrill · 4 hrs",
                },
                {
                  n: "Corniche Beach & Promenade",
                  e: "Free (beach club: AED 10)",
                  d: "An 8km waterfront promenade with manicured gardens, cycling paths, and beaches with turquoise water and the city skyline as backdrop. The free public beach sections are clean and well-maintained. The gated Corniche Beach Club (AED 10) adds changing rooms and sunbeds. Best for a late afternoon walk or morning jog.",
                  t: "Free · Beach · 2 hrs",
                },
                {
                  n: "Saadiyat Beach",
                  e: "AED 25 (~$7) public",
                  d: "White sand, turquoise water, and a fraction of the crowds you find at any Dubai beach. The public section charges AED 25 for entry with sunbed. Saadiyat Beach Club (AED 100–175) adds pool access and food service. From November to March, endangered hawksbill turtles sometimes nest on the beach. Combine with Louvre Abu Dhabi — they are on the same island.",
                  t: "Beach · Half day",
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
            title="Abu Dhabi — Mosques, Museums &amp; Coastline"
            subtitle="The cultural capital of the UAE, where world-class architecture meets turquoise Gulf waters."
            spots={[
              {
                name: "Sheikh Zayed Grand Mosque",
                query: "sheikh zayed grand mosque abu dhabi white marble domes courtyard golden hour",
                desc: "82 white marble domes, reflective pools, and the world's largest hand-knotted carpet. Free entry. Visit at golden hour for the best experience.",
              },
              {
                name: "Louvre Abu Dhabi",
                query: "louvre abu dhabi dome architecture rain light water reflections",
                desc: "Jean Nouvel's masterpiece — a 180-metre dome of 7,850 metal stars creating shifting light patterns across the galleries below.",
              },
              {
                name: "Qasr Al Watan",
                query: "qasr al watan abu dhabi palace white architecture interior dome",
                desc: "The Presidential Palace, open to visitors since 2019. The most ornate government building in the Middle East.",
              },
              {
                name: "Corniche Skyline",
                query: "abu dhabi corniche skyline beach turquoise water cityscape sunset",
                desc: "8km of pristine waterfront with turquoise water and the modern skyline as backdrop. Free public beach sections.",
              },
              {
                name: "Saadiyat Beach",
                query: "saadiyat island abu dhabi beach white sand turquoise water peaceful",
                desc: "White sand and crystal-clear water on the same island as the Louvre. A world away from the crowded Dubai beaches.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Abu Dhabi ranges from surprisingly affordable to ultra-luxury. Budget travellers can manage AED 250&ndash;450/day (~$68&ndash;123), mid-range AED 500&ndash;1,000/day (~$136&ndash;272), and luxury from AED 1,500+/day. All prices in AED with USD equivalents at 1 AED = ~$0.27.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category (3 days)</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">💎 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (3N)", "AED 360–600 ($98–163)", "AED 900–1,800 ($245–490)", "AED 3,000–7,500 ($817–2,042)"],
                    ["🍽 Food & Drinks", "AED 150–270 ($41–74)", "AED 450–750 ($123–204)", "AED 1,200–2,500 ($327–681)"],
                    ["🚕 Transport", "AED 60–150 ($16–41)", "AED 200–400 ($54–109)", "AED 500–1,000 ($136–272)"],
                    ["🎯 Activities & Entry", "AED 100–310 ($27–84)", "AED 350–650 ($95–177)", "AED 800–1,500 ($218–408)"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {[
                      "AED 670–1,330\n($182–362)",
                      "AED 1,900–3,600\n($517–980)",
                      "AED 5,500–12,500\n($1,498–3,403)",
                    ].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center whitespace-pre-line">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (AED 250–450/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in budget hotels near the Corniche or Tourist Club Area (AED 120–200/night), eat at cafeterias and Al Mina fish market (AED 20–50/meal), use DARB buses (AED 2/ride), and focus on free attractions like the mosque, Corniche, and Heritage Village.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">✨ Mid-Range (AED 500–1,000/day)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">4-star hotel with breakfast (AED 300–600/night), mix of cafeteria lunches and restaurant dinners, taxis between major sights, and entry to Louvre + Qasr Al Watan + one theme park. The sweet spot for experiencing everything without overspending.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (AED 1,500+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">5-star resort on Saadiyat or the Corniche (AED 1,000–2,500/night), fine dining, private tours, beach club day passes, and premium theme park experiences. Emirates Palace (now Mandarin Oriental) is the iconic luxury stay starting from AED 1,800/night.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Abu Dhabi</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Abu Dhabi is spread out, so your base matters. The Corniche area puts you near the mosque, downtown dining, and the waterfront. Yas Island is best if theme parks are your priority and you want to be near the airport. Saadiyat Island combines beach and culture (Louvre is here). Downtown/Tourist Club Area is the budget hub with the most cafeteria options.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Southern Sun Abu Dhabi",
                  type: "Mid-range hotel · Corniche area",
                  price: "From AED 280/night (~$76)",
                  badge: "Best value",
                  desc: "Clean, well-located 4-star hotel a 10-minute walk from the Corniche. Rooms are modern, breakfast is included, and the rooftop pool has city views. Close to the bus stations for easy transport to Yas Island and Saadiyat. The best balance of price, location, and quality for most visitors.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Centro Yas Island by Rotana",
                  type: "Modern budget · Yas Island",
                  price: "From AED 180/night (~$49)",
                  badge: "Budget pick",
                  desc: "Stylish budget hotel on Yas Island, walking distance to Yas Mall and Ferrari World. Rooms are compact but well-designed. The rooftop pool and bar have views of the F1 circuit. The best budget option if theme parks are your priority, and the airport is a 10-minute taxi away — ideal for early departures.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Saadiyat Rotana Resort",
                  type: "Beachfront resort · Saadiyat Island",
                  price: "From AED 500/night (~$136)",
                  badge: "Beach pick",
                  desc: "Beachfront resort on Saadiyat Island with direct beach access, multiple pools, and a 15-minute drive to Louvre Abu Dhabi. The beach here is one of the best in the UAE. Excellent for couples and families who want beach time combined with cultural sightseeing. Breakfast buffet is extensive.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Emirates Palace (Mandarin Oriental)",
                  type: "Ultra-luxury · Corniche",
                  price: "From AED 1,800/night (~$490)",
                  badge: "Luxury icon",
                  desc: "Abu Dhabi's most iconic hotel, now managed by Mandarin Oriental. The lobby alone is worth visiting (free to walk through). 1.3km of private beach, gold-flake cappuccinos at Le Cafe (AED 65), and one of the most opulent hotel experiences in the world. Even if you don't stay, walk through the lobby and have a coffee — it is a genuine Abu Dhabi experience.",
                  color: "border-amber-200 bg-amber-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Abu Dhabi</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Abu Dhabi has exceptional food at every price level. The key insight: the city has a huge South Asian and Lebanese expat population, which means incredibly authentic Indian, Pakistani, and Lebanese food at cafeteria prices. High-end dining is concentrated in the 5-star hotels. Here are the spots worth seeking out.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Al Mina Fish Market & Restaurants",
                  t: "Fresh seafood · Port area",
                  d: "The best-value seafood meal in Abu Dhabi. Walk through the fish market, pick your catch (hammour, prawns, squid, king fish), then hand it to one of the adjacent restaurants who grill, fry, or curry it for AED 10–15 cooking fee. A full seafood lunch with sides comes to AED 30–60 ($8–16) per person. The market is freshest before noon.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Li Beirut (Jumeirah at Etihad Towers)",
                  t: "Lebanese fine dining · Corniche",
                  d: "The best Lebanese fine dining in the city, with floor-to-ceiling views of the Corniche and the Gulf. The mezze spread is exceptional — kibbeh, fattoush, hummus variations, and grilled halloumi. AED 200–350 ($54–95) for a full dinner for two with soft drinks. Book a window table for sunset. Smart casual dress code.",
                  b: "Best fine dining",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Lebanese restaurants (Tourist Club Area)",
                  t: "Casual Lebanese · Downtown",
                  d: "The Tourist Club Area and Hamdan Street have dozens of casual Lebanese restaurants serving shawarma, manakeesh, grilled meats, and full mezze spreads. AED 25–50 ($7–14) for a generous meal. Al Safadi, Automatic Restaurant, and Bait El Khetyar are all reliable. This is everyday eating in Abu Dhabi — authentic, generous portions, and impossible to get a bad meal.",
                  b: "Best budget",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Indian & Pakistani cafeterias",
                  t: "South Asian · Across the city",
                  d: "Abu Dhabi's massive South Asian community means you can find excellent biryani, dosa, chai, and thali meals for AED 12–25 ($3.30–6.80). The Madinat Zayed area and streets behind Hamdan Street are packed with these cafeterias. The food is often better than what you get at mid-range Indian restaurants charging 3x more. Look for the busy ones at lunch.",
                  b: "Ultra budget",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  n: "Le Cafe (Emirates Palace / Mandarin Oriental)",
                  t: "Iconic cafe · Corniche",
                  d: "Famous for the gold-flake cappuccino (AED 65 / $17.70) and the opulent palace lobby setting. The pastries and afternoon tea are excellent. Even if you don't stay at the hotel, walk through the lobby (free) and stop for a coffee — it is one of those experiences that has become part of the Abu Dhabi visitor canon. Dress smart-casual.",
                  b: "Iconic experience",
                  c: "bg-orange-50 border-orange-200",
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
            destination="Abu Dhabi"
            hotels={[
              {
                name: "Centro Yas Island by Rotana",
                type: "Budget Modern · Yas Island",
                price: "From AED 180/night (~$49)",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/hotel/ae/centro-yas-island.html?aid=2820480",
              },
              {
                name: "Southern Sun Abu Dhabi",
                type: "Mid-range · Corniche Area",
                price: "From AED 280/night (~$76)",
                rating: "4",
                badge: "Best value",
                url: "https://www.booking.com/hotel/ae/southern-sun-abu-dhabi.html?aid=2820480",
              },
              {
                name: "Saadiyat Rotana Resort",
                type: "Beachfront Resort · Saadiyat",
                price: "From AED 500/night (~$136)",
                rating: "5",
                badge: "Beach pick",
                url: "https://www.booking.com/hotel/ae/saadiyat-rotana.html?aid=2820480",
              },
              {
                name: "Emirates Palace (Mandarin Oriental)",
                type: "Ultra-Luxury Icon · Corniche",
                price: "From AED 1,800/night (~$490)",
                rating: "5",
                badge: "Luxury icon",
                url: "https://www.booking.com/hotel/ae/emirates-palace.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Louvre Abu Dhabi Skip-the-Line",
                duration: "3 hours",
                price: "From AED 63 (~$17)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=louvre+abu+dhabi&partner_id=PSZA5UI",
              },
              {
                name: "Mangrove Kayaking Tour",
                duration: "2 hours",
                price: "From AED 100 (~$27)",
                badge: "Nature",
                url: "https://www.getyourguide.com/s/?q=abu+dhabi+mangrove+kayak&partner_id=PSZA5UI",
              },
              {
                name: "Ferrari World Day Pass",
                duration: "Full day",
                price: "From AED 295 (~$80)",
                url: "https://www.getyourguide.com/s/?q=ferrari+world+abu+dhabi&partner_id=PSZA5UI",
              },
              {
                name: "Sheikh Zayed Mosque Guided Tour",
                duration: "1.5 hours",
                price: "Free",
                badge: "Cultural",
                url: "https://www.getyourguide.com/s/?q=sheikh+zayed+mosque+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🕌",
                  title: "Visiting the mosque at midday",
                  desc: "The white marble is blinding at noon and the heat (even in winter) makes the outdoor courtyards uncomfortable. Visit at 4–4:30pm for golden hour when the marble turns gold, or at 9am for empty courtyards and comfortable temperatures. The difference between noon and golden hour is the difference between a photo and an experience.",
                },
                {
                  icon: "⏰",
                  title: "Treating Abu Dhabi as a Dubai day trip",
                  desc: "A rushed 6-hour visit from Dubai means you see the mosque, maybe the Corniche, and leave. You miss Louvre Abu Dhabi, Saadiyat Beach, Qasr Al Watan, and the mosque at golden hour. Give Abu Dhabi 2–3 days minimum. It rewards slower exploration in a way that Dubai does not.",
                },
                {
                  icon: "👗",
                  title: "Forgetting the dress code",
                  desc: "Shoulders and knees must be covered at Sheikh Zayed Mosque. Women need a headscarf. Free abayas and sheila are available at the entrance, but the queue to get one can be 20 minutes in peak season. Bring your own modest clothing — long trousers, covered shoulders, and a scarf for women.",
                },
                {
                  icon: "🏛️",
                  title: "Skipping Louvre Abu Dhabi",
                  desc: "People visit Abu Dhabi for the mosque and leave. The Louvre is a world-class museum with a building that alone justifies the AED 63 entry fee. Jean Nouvel's rain-of-light dome is one of the most striking pieces of architecture built this century. Book the 9am slot before tour groups arrive.",
                },
                {
                  icon: "🎢",
                  title: "Not booking theme parks online",
                  desc: "Walk-up prices at Ferrari World, Warner Bros World, and Yas Waterworld are AED 15–35 more than online prices. Book 1–2 days ahead on the official websites for the best rates. Also: don't try to do multiple theme parks in one day — each needs 3–4 hours minimum to be worthwhile.",
                },
                {
                  icon: "🍽️",
                  title: "Only eating at hotel restaurants",
                  desc: "Hotel restaurants in Abu Dhabi charge 3–5x what the same food costs at a cafeteria or casual restaurant. The city has incredible Lebanese, Indian, and Pakistani food at cafeteria prices (AED 15–30 for a full meal). Save the hotel dining for one special dinner and eat where the locals eat for everything else.",
                },
              ].map((m) => (
                <TipCard
                  key={m.title}
                  icon={m.icon}
                  title={m.title}
                  desc={m.desc}
                  color="bg-white border-parchment-2"
                />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Abu Dhabi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Mosque Golden Hour Strategy",
                  desc: "Arrive at 4–4:30pm, stay through sunset and into the illuminated night. You will see three completely different versions of the mosque in 2 hours — white marble in daylight, golden marble at sunset, and glowing marble under the night illumination. This is the single best experience in Abu Dhabi.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🏛️",
                  title: "Louvre Morning Hack",
                  desc: "Book the 9am slot online. By 11am tour groups arrive and the galleries get busy. The dome's rain-of-light effect is strongest in the morning sun. The cafe opens with the museum — grab a coffee and have the water terrace to yourself before the crowds.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚌",
                  title: "DARB Transport Card",
                  desc: "Buy a Hafilat card (AED 10 for the card + credit) at any bus station. Works on all Abu Dhabi buses at AED 2/ride ($0.55). The E100/E101 buses to Dubai also accept it. Much cheaper than taxis for budget travellers — the bus network covers all major attractions.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "💰",
                  title: "Free Things in Abu Dhabi",
                  desc: "Sheikh Zayed Mosque (free), Heritage Village (free), Corniche promenade (free), Founders Memorial (free), Mangrove Boardwalk (free), Emirates Palace lobby walk-through (free). Abu Dhabi's best experiences cost nothing — you could fill an entire day without spending a dirham on entry fees.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🍖",
                  title: "Eat at Al Mina Fish Market",
                  desc: "The fish market area near the port has the best-value seafood in the city. Pick your catch from the market, pay AED 10–15 cooking fee at the adjacent restaurant. A full grilled fish lunch with sides costs AED 30–60. Go before noon for the freshest selection.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "📅",
                  title: "Abu Dhabi vs Dubai",
                  desc: "Abu Dhabi for culture, architecture, and a genuine Emirati experience. Dubai for shopping, nightlife, and entertainment spectacles. They are 90 minutes apart by bus (AED 25) and complement each other perfectly. If you can only visit one, choose based on your priorities — not the marketing.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Abu Dhabi" />

          {/* Combine With */}
          <CombineWith currentSlug="abu-dhabi-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days do you need in Abu Dhabi?",
                  a: "3 days is ideal. Day 1 for the mosque and Corniche, Day 2 for Louvre and Saadiyat, Day 3 for Yas Island. 2 days works as a Dubai extension but you will miss the beaches and Yas Island. 4+ days lets you add a desert safari, Sir Bani Yas Island, or Al Ain day trip.",
                },
                {
                  q: "Is Abu Dhabi worth visiting if I've already been to Dubai?",
                  a: "Completely different experience. Abu Dhabi is culturally richer (Sheikh Zayed Mosque, Louvre, Qasr Al Watan), more spacious, less commercial, and more conservative. The Emirati heritage is much more visible here than in Dubai. Most visitors who do both say Abu Dhabi was the more memorable experience.",
                },
                {
                  q: "How much does a 3-day Abu Dhabi trip cost?",
                  a: "Budget: AED 670–1,330 ($182–362) including accommodation, food, transport, and activities. Mid-range: AED 1,900–3,600 ($517–980). Luxury: AED 5,500–12,500 ($1,498–3,403). All per person. The biggest variable is accommodation — budget hotels start at AED 120/night, 5-star resorts from AED 1,000+/night.",
                },
                {
                  q: "Do I need a separate visa for Abu Dhabi?",
                  a: "No. The UAE visa covers all seven emirates. If you have a Dubai visa, you can visit Abu Dhabi freely. Visa-on-arrival (30 days, free) for US, UK, EU, AU, CA, and 80+ other nationalities. Indian passport holders need a pre-arranged UAE visa (AED 350–500, 3–5 days online).",
                },
                {
                  q: "What is the best time to visit Abu Dhabi?",
                  a: "November–March for comfortable outdoor weather (20–28°C). March–April offers lower prices with still-pleasant temperatures. May–September is 38–48°C but hotel prices drop 40–60% and indoor attractions (Louvre, Ferrari World) are air-conditioned. The Abu Dhabi Grand Prix in November is exciting but hotel rates spike 3x.",
                },
                {
                  q: "Can I drink alcohol in Abu Dhabi?",
                  a: "Only in licensed hotels, restaurants, and clubs. You cannot buy alcohol from shops without a personal liquor license. Public intoxication is a criminal offence. Most hotel restaurants and bars serve alcohol. Bars and clubs in the 5-star hotels are the main nightlife scene.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Abu Dhabi trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-abu-dhabi", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/abu-dhabi-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-abu-dhabi", label: "How to get there", icon: "✈️" },
                { href: "/blog/abu-dhabi-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="abu-dhabi-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Middle East &amp; Gulf Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Dubai &mdash; 4 Day Guide", href: "/blog/dubai-4-days" },
                { label: "Muscat, Oman &mdash; 3 Day Guide", href: "/blog/muscat-3-days" },
                { label: "Jordan &mdash; 5 Day Itinerary", href: "/blog/jordan-5-days" },
                { label: "Browse All Itineraries", href: "/blog" },
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
