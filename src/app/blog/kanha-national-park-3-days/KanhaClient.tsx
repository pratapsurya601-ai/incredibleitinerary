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
import { usePageUrl } from "@/lib/hooks";

const KANHA_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "safari",    emoji: "🐯", label: "Safari Guide" },
  { id: "budget",    emoji: "💰", label: "Budget Breakdown" },
  { id: "mistakes",  emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",      emoji: "💡", label: "Pro Tips" },
  { id: "faq",       emoji: "❓", label: "FAQ" },
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
        className="h-full bg-gold transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ── Share Button ──────────────────────────────────────────────────────────────
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Kanha National Park 3-Day Guide&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Kanha National Park safari guide&url=${pageUrl}` },
      ].map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}>
          {s.label}
        </a>
      ))}
      <button onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">
        {copied ? "✓ Copied" : "Copy Link"}
      </button>
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
function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
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
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">●</span>
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
function TipCard({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
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

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function KanhaClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "₹8k–12k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹15k–30k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KANHA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Kanha National Park" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="Bengal tiger Kanha National Park jungle India"
            fallback="https://images.unsplash.com/photo-1516426122078-a8e4ee10e986?w=1600&q=85"
            alt="Bengal tiger in Kanha National Park — Jungle Book country, Madhya Pradesh"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          {/* Breadcrumb overlay */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Kanha National Park 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Wildlife & Safari
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Kanha National Park in 3 Days:
                <em className="italic text-gold-light"> Tigers, Barasingha &amp; Jungle Book Country</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                100+ tigers, vast sal forest meadows where Kipling set the Jungle Book, and India&apos;s only population of the rare barasingha deer. This is one of India&apos;s finest wildlife experiences.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇮🇳 India</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹8,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The jeep stopped. The naturalist pointed left, barely moving his finger. Thirty meters into the bamboo, a tiger was watching us. It held eye contact for eleven seconds, turned, and walked into the forest like we didn&apos;t matter. Which, to it, we didn&apos;t.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Kanha is where Rudyard Kipling set the Jungle Book — and standing in the Kanha Meadows at dawn, watching a herd of barasingha deer move through the mist with sal trees stretching to the horizon, you understand why. This is wild India at its finest: 945 km² of protected forest with 100+ tigers, minimal crowds compared to Ranthambore, and the only place on earth where you can see the rare barasingha (swamp deer) that was nearly extinct 50 years ago.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌡️" label="Best Season" value="Oct–Mar" />
            <StatCard icon="🐯" label="Tiger Population" value="100+" />
            <StatCard icon="📐" label="Area" value="945 km²" />
            <StatCard icon="⭐" label="Rating" value="4.7★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Kanha closes for monsoon (July–October). The safari season runs October 15 to June 30. Each season has its character.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Mar", emoji: "✅", title: "Peak Season", desc: "October–November: lush post-monsoon greenery, fewer tourists. December–February: cold mornings (8–12°C), extraordinary photography light, tigers visible near water. March: warming up, excellent sightings.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Apr–Jun", emoji: "🔥", title: "Hot but Productive", desc: "40°C+ temperatures but tigers are forced to water holes. Surprisingly good sightings near water points. Few tourists. Not comfortable for humans but excellent for concentrated wildlife watching.", color: "bg-amber-50 border-amber-200" },
                { season: "Jul–Oct 14", emoji: "🚫", title: "Park Closed", desc: "Kanha closes June 30 for monsoon. Roads become impassable and the forest recovers. The park reopens October 15. Do not book for this period.", color: "bg-red-50 border-red-200" },
              ].map((s) => (
                <div key={s.season} className={`rounded-xl border p-5 ${s.color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{s.emoji}</span>
                    <span className="text-xs font-semibold tracking-widest uppercase text-muted">{s.season}</span>
                  </div>
                  <p className="font-serif text-base text-ink mb-2">{s.title}</p>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── PICK YOUR PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Pick Your Plan</h2>
            <p className="text-sm text-muted font-light mb-6">Same 3-day safari experience, two comfort levels. The forest is identical — what changes is your transport and accommodation.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-5 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan →</p>
                </button>
              ))}
            </div>

            {/* Plan comparison */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-parchment-2">
                    <th className="text-left py-3 pr-4 text-muted font-medium uppercase tracking-wider">Category</th>
                    <th className="text-left py-3 px-4 text-amber-700 font-medium">Budget</th>
                    <th className="text-left py-3 px-4 text-teal font-medium">Comfortable</th>
                  </tr>
                </thead>
                <tbody className="text-muted font-light">
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Forest rest house / budget lodge (₹800–1,500)</td><td className="py-2.5 px-4">Luxury resort — Tiger Trail, Singinawa (₹8,000–18,000)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Safari Jeep</td><td className="py-2.5 px-4">Shared jeep (₹400–600/person/safari)</td><td className="py-2.5 px-4">Private jeep (₹5,000–7,000/safari, your group only)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Naturalist</td><td className="py-2.5 px-4">Government-assigned</td><td className="py-2.5 px-4">Expert naturalist from resort</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">₹8,000–12,000</td><td className="py-2.5 px-4 font-medium text-teal">₹15,000–30,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive, settle in, evening safari. Day 2: Morning safari (best for tigers), afternoon safari. Day 3: Final morning safari, depart.
            </p>

            {/* Plan tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                    activeTab === p.id
                      ? `${p.color} shadow-sm`
                      : "bg-white border border-parchment-2 text-muted hover:border-gold"
                  }`}>
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {/* ── Day 1 ── */}
              <DayCard
                day="Day 1"
                title="Arrival & Evening Safari — Kanha Meadows"
                items={[
                  activeTab === "A"
                    ? "Overnight train or bus to Khatia Gate (nearest to Kanha Zone) or Mukki Gate (south). Check in to forest rest house or budget lodge (₹800–1,500/night)."
                    : "Fly to Jabalpur, private transfer to resort near Khatia Gate (3.5 hrs, ₹3,000–4,000). Check in to Tiger Trail or Singinawa Jungle Lodge — resorts arrange all safari logistics.",
                  "Afternoon: Pay evening safari fee — ₹2,500–3,500 per jeep + ₹1,000 entry fee (shared between 6 people in a shared jeep).",
                  "Evening safari 3 PM–6 PM: Kanha Meadows Zone — the vast open grasslands where Kipling's Jungle Book was set. Large herds of barasingha deer, nilgai, langur monkeys. This zone is rich in prey animals which means tiger territory.",
                  "The Kanha Meadows at golden hour: sal trees catching evening light, hundreds of spotted deer grazing, peacocks calling. Even if you don't see a tiger today, this is extraordinary wildlife photography.",
                  "Evening: Naturalist briefing at forest department. Discuss sightings from other jeeps — sharing information is how you plan the next morning's route.",
                  activeTab === "A"
                    ? "Camp songs around a fire with other budget travelers — a Kanha tradition in the budget lodges."
                    : "Resort naturalist reviews the day's sightings across all zones and plans the optimal morning route for your private jeep.",
                ]}
                cost={activeTab === "A" ? "₹4,000" : "₹12,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Morning & Afternoon Safaris — Core Zone"
                items={[
                  "5:30 AM: Morning safari departure (best for tiger sightings). Tigers are most active returning from nocturnal hunts. The Central Zone (Kisli) has the highest tiger density and the best early-morning light through the bamboo.",
                  "Return by 10 AM. Morning safaris in Kanha are 4–4.5 hours. Rest and eat — the midday is for recovery.",
                  activeTab === "A"
                    ? "Kanha Museum (naturalist-led, free) — understanding the ecology of the reserve makes every sighting more meaningful. The barasingha conservation story is extraordinary."
                    : "Resort naturalist debrief — review photos, discuss animal behaviour, plan afternoon safari zone based on morning's tracks and pugmarks.",
                  "2:30 PM: Afternoon safari (3–6 PM). The golden hour at Kanha is exceptional. Tigers often go to water in the late afternoon — water holes are good bets. Leopard activity increases.",
                  "The bamboo forest zones (Kisli) are extraordinary in afternoon light — shafts of gold through the bamboo, sambar deer, giant squirrels, and if you're patient, a tiger emerging at dusk.",
                  activeTab === "A"
                    ? "Budget lodge dinner with other travellers. Swap sighting notes — other guests often have information about active zones."
                    : "Luxury resort dinner under the stars. Evening naturalist talk on tiger behaviour and the history of Project Tiger in Kanha.",
                ]}
                cost={activeTab === "A" ? "₹4,000" : "₹12,000"}
              />

              {/* ── Day 3 ── */}
              <DayCard
                day="Day 3"
                title="Final Morning Safari & Departure"
                items={[
                  "5:30 AM: Final morning safari — the last chance for a tiger sighting. Request the zone where pugmarks (paw prints) were found fresh the previous evening.",
                  "Even without a tiger sighting, Kanha's morning safaris deliver: barasingha herds in the mist, wild boar families, Indian wild dogs (dholes) hunting in packs — all extraordinary wildlife.",
                  "Return by 10 AM. Checkout and depart.",
                  activeTab === "A"
                    ? "Shared cab to Jabalpur or Gondia railway station (book through your lodge). Train back to your city."
                    : "Resort arranges private transfer back to Jabalpur airport (3.5 hrs). Fly home.",
                  "If extending: combine with Bandhavgarh (160 km, another tiger reserve — 3 hrs by road) or Pench (200 km) for a complete Madhya Pradesh tiger circuit.",
                ]}
                cost={activeTab === "A" ? "₹3,000" : "₹8,000"}
              />
            </div>
          </section>

          {/* ── SAFARI GUIDE ── */}
          <section id="safari" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🐯 Kanha Safari Zone Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Kanha has multiple zones with different characters. Choosing the right zone for the right time of day is the difference between a good safari and a great one.
            </p>
            <div className="space-y-4">
              {[
                { zone: "Kanha Zone", type: "Core", desc: "The iconic meadows — vast open grassland where barasingha herds gather. Best for photography and general wildlife. Good tiger territory because prey density is highest here. Book early.", emoji: "🌿", color: "bg-emerald-50 border-emerald-200", tag: "Best for: Photography & Barasingha" },
                { zone: "Kisli Zone", type: "Core", desc: "Dense bamboo and sal forest — highest tiger activity. Slightly smaller meadow clearings but more tiger encounters. The bamboo corridor between zones is where tigers move most. Morning safaris here are exceptional.", emoji: "🐯", color: "bg-amber-50 border-amber-200", tag: "Best for: Tiger sightings" },
                { zone: "Mukki Zone", type: "Core (South Gate)", desc: "Southern entry point — less visited than Kanha Zone. Good for leopard sightings. Connects to the Supkhar area, excellent for sloth bear. Worth doing on Day 3 if you've done Kanha and Kisli already.", emoji: "🐆", color: "bg-teal-50 border-teal-200", tag: "Best for: Leopard & sloth bear" },
                { zone: "Khatia & Sarhi", type: "Buffer", desc: "Buffer zones with less tiger pressure but good for general wildlife — wild dogs, deer, birds. Better for budget accommodation clusters. Good introduction safari on Day 1 to understand the ecosystem.", emoji: "🦌", color: "bg-rose-50 border-rose-200", tag: "Best for: Budget & first-time visitors" },
              ].map((z) => (
                <div key={z.zone} className={`rounded-xl border p-5 ${z.color}`}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{z.emoji}</span>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <p className="font-medium text-sm text-stone-900">{z.zone}</p>
                        <span className="text-[0.6rem] bg-white/70 border border-current px-2 py-0.5 rounded-full text-stone-600 uppercase tracking-wider">{z.type}</span>
                      </div>
                      <p className="text-[0.65rem] text-gold-dark font-medium mb-2">{z.tag}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{z.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SAFARI IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="barasingha swamp deer Kanha meadows India"
              fallback="https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=900&q=80"
              alt="Barasingha deer in Kanha Meadows — exclusive to Kanha National Park"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The barasingha (swamp deer) is only found in Kanha. Nearly extinct in the 1970s, now thriving at 1,000+ individuals. A herd in the Kanha Meadows at dawn is one of India&apos;s great wildlife sights.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "₹8,000–12,000", color: "bg-amber-50 border-amber-200",
                  items: [["Travel to/from Kanha", "₹1,500–3,000"], ["Stays (3 nights)", "₹2,400–4,500"], ["Safari fees (4 safaris)", "₹2,800–5,000"], ["Entry fees", "₹1,200–2,000"], ["Food", "₹1,000–1,500"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹15,000–30,000", color: "bg-teal-50 border-teal-200",
                  items: [["Travel (flight + transfer)", "₹5,000–8,000"], ["Resort (3 nights, full board)", "₹7,500–15,000"], ["Private jeep (4 safaris)", "₹9,000–14,000"], ["Entry fees", "₹2,400–4,000"], ["Tips & extras", "₹1,000–2,000"]] },
              ].map((b) => (
                <div key={b.plan} className={`rounded-xl border p-5 ${b.color}`}>
                  <div className="text-center mb-4">
                    <span className="text-2xl">{b.emoji}</span>
                    <p className="font-serif text-base text-ink mt-1">{b.plan}</p>
                    <p className="font-serif text-xl text-ink font-medium mt-1">{b.total}</p>
                    <p className="text-xs text-muted uppercase tracking-wider">per person</p>
                  </div>
                  <div className="space-y-2">
                    {b.items.map(([k, v]) => (
                      <div key={k} className="flex justify-between text-xs">
                        <span className="text-muted font-light">{k}</span>
                        <span className="text-ink font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted font-light mt-4 italic">
              * Budget plan assumes shared jeep (6 people), basic lodge, and own food arrangement. Comfortable plan assumes full-board luxury resort with private jeep. Entry fees are per person per safari.
            </p>
          </section>

          <AffiliateBlock destination="Kanha National Park" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Not booking safari jeeps 60 days in advance", desc: "The government portal (mpecotourism.in) opens bookings 60 days ahead. Core zone jeeps sell out weeks in advance in peak season. Book the moment your dates are confirmed.", icon: "📅" },
                { title: "Talking loudly on safari", desc: "Tigers detect human noise from 300m. Loud conversation is the single biggest reason for missed sightings. Keep voices low, turn off ringtones, and resist shouting when you spot something. Use hand signals.", icon: "🔇" },
                { title: "Wearing bright colors", desc: "Avoid red, white, orange, or any bright color. Khaki, olive, and beige only. Animals respond to visual contrast — you're trying to disappear. Strong perfume or deodorant also disturbs wildlife.", icon: "🎨" },
                { title: "Skipping the morning safari for an extra hour of sleep", desc: "The 5:30 AM safari is the most productive. Tigers are returning from nighttime hunts, the light is extraordinary, and the animals are active. Missing it for sleep is the most common and most regretted mistake.", icon: "🌅" },
                { title: "Expecting a guaranteed tiger sighting", desc: "Tiger sightings are 60–70% probability per safari in peak season — not a guarantee. Go for the entire ecosystem: barasingha, wild dogs, leopards, birds. Kanha is magnificent even without a tiger.", icon: "🐯" },
                { title: "Not tipping your naturalist and driver", desc: "Your jeep driver and naturalist work long hours in difficult conditions for modest salaries. ₹200–500 per person per safari is the norm and is deeply appreciated. Budget for it.", icon: "💰" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "📅", title: "Book Safari Jeeps 60 Days Ahead", desc: "Book at mpecotourism.in — the government portal. The Central Zone jeeps sell out 2 months ahead in peak season (Nov–Feb). Core Zone slots are more limited than the buffer zones.", color: "border-blue-200 bg-blue-50" },
                { icon: "🌅", title: "Morning Safari is Superior", desc: "The 5:30–11 AM safari is when tigers are most active and light is beautiful. The afternoon safari (3–6 PM) catches the golden hour but tiger sightings drop. In winter, morning light is extraordinary.", color: "border-amber-200 bg-amber-50" },
                { icon: "🦌", title: "Barasingha: Kanha's Rare Deer", desc: "The barasingha (swamp deer) is only found in Kanha — it was nearly extinct in the 1970s and is now thriving thanks to Project Kanha. A herd of 1,000 is a spectacular sight in the Kanha Meadows.", color: "border-green-200 bg-green-50" },
                { icon: "🎨", title: "What to Wear on Safari", desc: "Muted colors only — khaki, olive, beige. Avoid bright red, white, or orange. Layers are essential in winter (November–January: 8–12°C mornings). No perfume or strong deodorant.", color: "border-purple-200 bg-purple-50" },
                { icon: "🔇", title: "Silence Increases Tiger Sightings", desc: "Tigers detect human noise from 300m. Keep voices low, turn off phone ringtones, and resist the urge to shout when you spot something. Your naturalist will signal.", color: "border-red-200 bg-red-50" },
                { icon: "🏕️", title: "Where to Stay Near Kanha", desc: "Budget: MP Tourism's Baghira Log Huts (₹1,500–2,500). Mid-range: Kings Lodge, Tuli Tiger Corridor. Luxury: Singinawa Jungle Lodge, Tiger Trail Resort. Stay near Khatia Gate for best zone access.", color: "border-orange-200 bg-orange-50" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates and group — we&apos;ll arrange safari bookings, resort, and transfers for your Kanha trip within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Kanha Safari →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What are the chances of seeing a tiger in Kanha?", a: "Kanha has 100+ tigers in 945 km². Sighting probability in peak season (Oct–Mar) in the Central Zone is 60–70% per safari. Kanha has one of India's highest sighting rates outside Ranthambore." },
                { q: "What are the different safari zones in Kanha?", a: "Core zones: Kanha Zone (meadows, high deer), Kisli Zone (bamboo forest, tiger territory), Mukki Zone (south side, good for leopard). Buffer zones: Khatia, Sarhi. Kanha Zone + Kisli Zone offer the best tiger chances." },
                { q: "How to reach Kanha National Park?", a: "Nearest airports: Jabalpur (170 km, 3.5 hrs) and Nagpur (270 km, 5 hrs). Nearest railway: Jabalpur or Gondia. From Jabalpur: jeep/cab to Khatia Gate (₹3,000–4,000 for private transfer)." },
                { q: "Is Kanha better than Bandhavgarh for tigers?", a: "Bandhavgarh has higher tiger density (smallest area, most tigers). Kanha has more diverse wildlife, larger meadows, and the exclusive barasingha. Serious photographers prefer Kanha for its landscapes; first-time tiger hunters prefer Bandhavgarh for guaranteed sightings." },
                { q: "When is Kanha National Park closed?", a: "Kanha closes June 30 – October 15 (monsoon). Peak season is November–March. April–June is hot (40°C+) but tigers visit water holes frequently — some experienced travelers prefer it for concentrated sightings near waterholes." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Kanha National Park — Highlights"
            subtitle="The best of Kanha National Park in photos."
            spots={[
              { name: "Kanha National Park Landscape", query: "kanha national park india landscape scenic beautiful travel", desc: "The stunning landscapes of Kanha National Park." },
              { name: "Kanha National Park Temple", query: "kanha national park temple architecture heritage india", desc: "Historic temples and architecture in Kanha National Park." },
              { name: "Kanha National Park Street Scene", query: "kanha national park street market local culture india", desc: "Local life and culture in Kanha National Park." },
              { name: "Kanha National Park Nature", query: "kanha national park nature hills forest river india", desc: "Natural beauty around Kanha National Park." },
              { name: "Kanha National Park Sunset", query: "kanha national park sunset golden hour india travel", desc: "Kanha National Park at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Explore More Wildlife Reserves</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Bandhavgarh — India's Highest Tiger Density", href: "/blog/bandhavgarh-3-days" },
                { label: "Pench National Park — 3 Days", href: "/blog/pench-3-days" },
                { label: "Tadoba — Maharashtra's Tiger Reserve", href: "/blog/tadoba-3-days" },
                { label: "Browse All India Packages", href: "/#packages" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="kanha-national-park-3-days" />
          <RelatedGuides currentSlug="kanha-national-park-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
