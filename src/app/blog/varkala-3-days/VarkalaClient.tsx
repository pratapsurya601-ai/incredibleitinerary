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
import Breadcrumb from "@/components/blog/Breadcrumb";

const VARKALA_TOC = [
  { id: "decision",    emoji: "⚡", label: "Varkala vs Kovalam vs Goa?" },
  { id: "highlights",  emoji: "🏖️", label: "The Cliff & Beach" },
  { id: "itinerary",   emoji: "📅", label: "3-Day Itinerary" },
  { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
  { id: "ayurveda",    emoji: "🌿", label: "Ayurveda Guide" },
  { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "💡", label: "Pro Tips" },
  { id: "faq",         emoji: "❓", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Varkala 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Varkala in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">{"●"}</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">{"💰"}</span>
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

// ── Comparison Card ───────────────────────────────────────────────────────────
function CompareCard({ title, emoji, bg, th, rows, verdict }: {
  title: string; emoji: string; bg: string; th: string;
  rows: string[][]; verdict: string;
}) {
  return (
    <div className={`rounded-xl border p-5 ${bg}`}>
      <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${th}`}>
        <span>{emoji}</span>{title}
      </h3>
      <div className="space-y-2 mb-4">
        {rows.map(([k, v]) => (
          <div key={k} className="flex gap-2 text-xs">
            <span className="font-medium text-ink/80 w-20 flex-shrink-0">{k}</span>
            <span className="text-muted font-light">{v}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">{"⚡"} {verdict}</p>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function VarkalaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={VARKALA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Varkala" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="varkala cliff beach kerala red laterite cliffs arabian sea sunset"
            alt="Varkala red laterite cliffs over the Arabian Sea at sunset, Kerala"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Varkala 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Beach &amp; Wellness
                </span>
                <span className="text-white/60 text-xs">March 28, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Varkala in 3 Days: Cliff Beach, Ayurveda &amp;
                <em className="italic text-gold-light"> What Goa Should Have Been</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                15m red laterite cliffs, a 2,000-year-old temple, authentic Kerala Ayurveda, and a budget from ₹2,500/day. The beach Kerala doesn&apos;t oversell.
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
              <span>{"🇮🇳"} Kerala</span>
              <span>{"·"}</span>
              <span>{"🗓"} 3 Days</span>
              <span>{"·"}</span>
              <span>{"💰"} From ₹2,500/day</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Varkala is the beach Kerala forgot to ruin. The cliffs are real, the temple is 2,000 years old, the Ayurveda is genuine, and the crowd is still human-scale. Most people who come here as a Goa alternative end up preferring it. This guide will tell you exactly why — and exactly how to do it properly.
            </p>
          </blockquote>

          {/* ── DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Varkala vs Kovalam vs Goa</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Three beach destinations. Very different experiences. Here&apos;s the honest comparison.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              <CompareCard
                title="Varkala"
                emoji="🏔️"
                bg="bg-teal-50 border-teal-200"
                th="text-teal-800"
                rows={[
                  ["Vibe", "Laid-back, spiritual, authentic"],
                  ["Crowd", "International + domestic mix"],
                  ["Budget", "₹2,500–₹8,000/day"],
                  ["Best for", "Solo, couples, wellness seekers"],
                  ["Unique", "Cliff path, 2,000yr temple, Ayurveda"],
                ]}
                verdict="Best all-rounder for travellers who found Goa too commercial."
              />
              <CompareCard
                title="Kovalam"
                emoji="🌊"
                bg="bg-blue-50 border-blue-200"
                th="text-blue-800"
                rows={[
                  ["Vibe", "Package-tour resort beach"],
                  ["Crowd", "Tour groups, older domestic tourists"],
                  ["Budget", "₹3,000–₹12,000/day"],
                  ["Best for", "Package travellers, families"],
                  ["Unique", "Lighthouse beach, calm waters"],
                ]}
                verdict="More facilities but far less character. Skip if authenticity matters to you."
              />
              <CompareCard
                title="Goa"
                emoji="🎉"
                bg="bg-orange-50 border-orange-200"
                th="text-orange-800"
                rows={[
                  ["Vibe", "Party, water sports, commercial"],
                  ["Crowd", "Large, noisy, all types"],
                  ["Budget", "₹2,000–₹15,000+/day"],
                  ["Best for", "Groups, nightlife, water sports"],
                  ["Unique", "Portuguese heritage, parties, variety"],
                ]}
                verdict="Great if you want parties and variety. Over-touristed for anything quiet."
              />
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">The verdict:</strong> Varkala wins for solo travellers, budget-conscious couples, anyone seeking authentic Ayurveda, and anyone who left Goa feeling exhausted. It loses only if you need nightlife or large water-sport infrastructure.
              </p>
            </div>
          </section>

          {/* ── HIGHLIGHTS ── */}
          <section id="highlights" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"🏖️"} The Cliff &amp; Beach</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              What makes Varkala genuinely different from every other Indian beach destination.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "The Cliff Path",
                  emoji: "🏔️",
                  bg: "bg-amber-50 border-amber-200",
                  th: "text-amber-800",
                  rows: [
                    ["What", "15m red laterite cliffs above the sea"],
                    ["Along it", "Cafes, guesthouses, shops, yoga shalas"],
                    ["Best time", "Sunset — spectacular from the edge"],
                    ["Breeze", "Sea wind all day, cool even Dec–Jan"],
                  ],
                  note: "The cliff path is Varkala&apos;s most unique feature in India. No other Indian beach has this geography."
                },
                {
                  title: "Papanasam Beach",
                  emoji: "🌊",
                  bg: "bg-teal-50 border-teal-200",
                  th: "text-teal-800",
                  rows: [
                    ["Meaning", "Papa nasam — washing away sins"],
                    ["Importance", "Holy beach, active pilgrimage site"],
                    ["Swimming", "Safe at south end (lifeguard zone)"],
                    ["Warning", "Strong currents at north end — avoid"],
                  ],
                  note: "The beach has both spiritual pilgrims and tourists sharing the same sand — one of Kerala&apos;s unique juxtapositions."
                },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/80 w-20 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">{"⚠️"} {area.note}</p>
                </div>
              ))}
            </div>

            {/* Beaches + Spots */}
            <h3 className="font-serif text-lg font-light text-ink mb-3">All the Beaches &amp; Spots</h3>
            <div className="space-y-3 mb-6">
              {[
                { icon: "🏛️", name: "Janardanaswamy Temple", detail: "2,000 years old, on the cliff edge. Active pilgrimage site dedicated to Vishnu. One of the few temples in Kerala welcoming all visitors. Free entry, remove footwear." },
                { icon: "🛶", name: "Kappil Lake", detail: "Backwater lagoon 8km north. Auto from cliff takes 30 min. Canoe rides ₹200. Often empty — most tourists never make it here. Stunning backwater scenery without the houseboat prices." },
                { icon: "🏖️", name: "Black Beach", detail: "10 min south of Papanasam. Quieter, fewer cafes, black sand. Good for a walk and the relative solitude." },
                { icon: "🌅", name: "Helipad Beach (Odayam)", detail: "Named after the helipad next to it. The best sunset viewpoint — open sky, no cliff obstructing the horizon. Worth the 20-min walk or ₹60 auto." },
              ].map((spot) => (
                <div key={spot.name} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-parchment-2">
                  <span className="text-2xl flex-shrink-0">{spot.icon}</span>
                  <div>
                    <p className="font-medium text-sm text-ink mb-1">{spot.name}</p>
                    <p className="text-xs text-muted font-light leading-relaxed">{spot.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Base yourself on the cliff.</strong> The cliff guesthouses give you sea breeze, walking access to cafes and the temple, and the best sunset seats in Varkala. Town guesthouses are 40% cheaper but the 2km walk gets old fast.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"🗓"} label="Duration" value="3 Days" />
            <StatCard icon={"💰"} label="Budget From" value="₹2,500/day" />
            <StatCard icon={"🌡"} label="Best Months" value="Oct – Mar" />
            <StatCard icon={"🚆"} label="From Trivandrum" value="45min Train" />
          </div>

          {/* ── ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"📅"} 3-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">The optimal 3-day sequence — paced to avoid rushing anything.</p>

            <div className="flex items-center gap-3 p-4 bg-teal-50 border border-teal-200 rounded-xl mb-6">
              <span className="text-2xl">{"🏖️"}</span>
              <div>
                <p className="text-sm font-medium text-teal-800">Cliff Base Plan</p>
                <p className="text-xs text-teal-600 font-light">Stay: Cliff guesthouse ₹700–₹1,200/night {"·"} Food: Mix cliff cafes + town {"·"} Transport: Walk + auto ₹60–₹200/trip</p>
              </div>
            </div>

            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrive, Temple & First Sunset"
                items={[
                  "Arrive by train from Trivandrum (45 min) or bus (1.5 hrs). Take an auto from Varkala Station to the cliff — ₹150–₹200.",
                  "Check in to your cliff guesthouse. Even budget rooms here have sea views or sea breeze.",
                  "Walk north along the cliff path. The cliff stretch takes 20–25 minutes end to end. Stop at Janardanaswamy Temple (2,000 years old) — worth 30 minutes. Remove footwear, cover shoulders.",
                  "Afternoon: Papanasam Beach swim. Go to the south end — lifeguard zone, calmer water. The north end has strong currents, avoid it.",
                  "Evening: Grab a coconut (₹50) from a beach vendor. Sit on the cliff edge for sunset. This is Varkala at its finest — no crowding, no noise, just sea breeze and colour.",
                  "Dinner on the cliff — Abba Restaurant for fish curry (₹300–₹450 for a meal), or walk to Varkala Town for half the price.",
                ]}
                cost="₹1,500–₹2,500 excluding accommodation"
              />
              <DayCard
                day="Day 2"
                title="Yoga, Kappil Lake & Black Beach"
                items={[
                  "Morning yoga: Many cliff guesthouses run free sessions for guests. Community yoga spots charge ₹150–₹200. Start with sunrise yoga if you can manage 6am.",
                  "Breakfast in town (2km from cliff): Sri Padman Restaurant does a local Kerala breakfast for ₹60–₹80 — half the cliff price for twice the quality.",
                  "10am: Auto to Kappil Lake — 8km north, ₹150–₹180 one way. Take a canoe ride (₹200) through the backwater. Quiet, beautiful, and almost no other tourists.",
                  "Return to cliff by 1pm. Lunch at Darjeeling Cafe — popular spot, Israeli food and Indian, slightly overpriced but the location over the cliff is hard to beat.",
                  "Afternoon beach time. After 3pm walk south 10 min to Black Beach — quieter, fewer people, different texture under foot.",
                  "Seafood dinner: Ask your guesthouse where the catch of the day is best. Fresh Kerala pomfret or seer fish prepared simply is the standard.",
                ]}
                cost="₹1,200–₹2,000 excluding accommodation"
              />
              <DayCard
                day="Day 3"
                title="Ayurveda Morning, Helipad Sunset, Depart"
                items={[
                  "Morning: Ayurvedic massage session (60 min). Book the day before — ask your guesthouse for an AYUSH-certified centre. Budget ₹1,200–₹2,000 for an Abhyanga (full body oil massage).",
                  "After the massage, rest — your body will feel it. Light lunch, preferably something simple.",
                  "Afternoon: Walk or auto 20 min to Helipad Beach (Odayam). Fewer cafes, open horizon, great for photos. This is the real sunset viewpoint — nothing between you and the Arabian Sea.",
                  "Explore Varkala Town if time allows — the town market, temple surroundings, and local life are 2km from the cliff but feel like a different world. Cheaper food, local shops.",
                  "Evening: Final cliff walk. Fresh coconut. The walk is different each direction — sunlight catches the red laterite in the afternoon differently than the morning.",
                  "Depart: Auto back to station (₹150–₹200). Trains to Trivandrum run regularly from Varkala Railway Station.",
                ]}
                cost="₹2,000–₹3,500 excluding accommodation (includes massage)"
              />

              <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-center">
                <span className="text-xs text-teal-700 uppercase tracking-wide">Total 3-Day Cost (solo) {"·"} </span>
                <span className="font-serif text-base text-ink font-light">₹7,500–₹14,000 including accommodation</span>
              </div>
            </div>
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"💰"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"💰"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">{"🏨"} Mid-Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏠 Accommodation (3N)", "₹2,100–₹3,600", "₹7,500–₹13,500"],
                    ["🍽 Food & Drinks", "₹800–₹1,500", "₹2,000–₹4,000"],
                    ["🚗 Transport (autos + station)", "₹400–₹700", "₹700–₹1,200"],
                    ["🌿 Ayurvedic Massage (1 session)", "₹1,200–₹1,800", "₹2,000–₹3,000"],
                    ["🛶 Kappil Lake + canoe", "₹350–₹450", "₹350–₹450"],
                    ["🥥 Coconuts + snacks", "₹150–₹250", "₹150–₹250"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total 3 Days (per person)</td>
                    {["₹5,000–₹8,300", "₹12,700–₹22,400"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-xs text-muted font-light italic">
                All prices INR 2026. Budget plan uses cliff guesthouses at lower end, cliff cafes sparingly, and town restaurants for breakfast/dinner.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-sm font-light text-amber-900 leading-relaxed">
                  <strong className="font-medium">Money-saving tip:</strong> Cliff cafes are roughly 40% more expensive than Varkala Town. Eat breakfast and dinner in town (Sri Padman Restaurant does a full meal for ₹80–₹120). Reserve cliff dining for lunch when you&apos;re already there. This alone saves ₹400–₹700/day.
                </p>
              </div>
            </div>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Varkala"
            hotels={[
              { name: "Cliff Breeze Guesthouse", type: "Budget Cliff · Varkala", price: "From ₹800/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/varkala.html?aid=2820480" },
              { name: "Sea Pearl Cliff Resort", type: "Boutique Cliff · Varkala", price: "From ₹2,800/night", rating: "4", badge: "Mid-range pick", url: "https://www.booking.com/hotel/in/varkala.html?aid=2820480" },
              { name: "Taj Bekal Resort", type: "Luxury · North Kerala", price: "From ₹8,000/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/in/varkala.html?aid=2820480" },
            ]}
            activities={[
              { name: "Varkala Cliff & Temple Walking Tour", duration: "3 hours", price: "From ₹500/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=varkala&partner_id=PSZA5UI" },
              { name: "Abhyanga Ayurvedic Massage", duration: "60 min", price: "From ₹1,200/person", badge: "Wellness", url: "https://www.getyourguide.com/s/?q=varkala+ayurveda&partner_id=PSZA5UI" },
              { name: "Kappil Lake Canoe & Backwater Tour", duration: "Half day", price: "From ₹600/person", url: "https://www.getyourguide.com/s/?q=varkala&partner_id=PSZA5UI" },
              { name: "Sunrise Yoga on the Cliff", duration: "1.5 hours", price: "From ₹200/person", url: "https://www.getyourguide.com/s/?q=varkala+yoga&partner_id=PSZA5UI" },
            ]}
            pdfProductId="varkala-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Varkala — Must-See Places"
            subtitle="Click each thumbnail to explore Varkala&apos;s cliffs, beaches, temple and backwaters."
            spots={[
              { name: "Varkala Cliff Path", query: "varkala cliff path kerala red laterite cafe sunset arabian sea", desc: "The defining feature of Varkala — 15m red laterite cliffs with cafes and guesthouses perched on the edge above the beach. The sunset views from here are extraordinary and unlike anything else on India&apos;s coast." },
              { name: "Papanasam Beach", query: "papanasam beach varkala kerala ocean waves sand", desc: "A holy beach where pilgrims scatter ashes and tourists swim — one of India&apos;s great contrasts. Swim at the south end in the lifeguard zone. The name means washing away sins." },
              { name: "Janardanaswamy Temple", query: "janardanaswamy temple varkala kerala ancient cliff vishnu", desc: "2,000 years old and still an active pilgrimage site for Vaishnavites. The temple sits on the cliff edge with remarkable sea views. One of Kerala&apos;s oldest functioning temples." },
              { name: "Kappil Lake", query: "kappil lake varkala backwater canoe kerala", desc: "A hidden backwater lagoon 8km north that most tourists never find. Canoe through narrow channels between coconut groves. No crowds, no noise — the Kerala backwater experience without the houseboat price tag." },
              { name: "Helipad Beach", query: "odayam helipad beach varkala sunset kerala open sea", desc: "The real sunset viewpoint — an open stretch with nothing between you and the Arabian Sea horizon. 20 minutes south of the main cliff, this is Varkala&apos;s quietest and most photogenic beach." },
            ]}
          />

          {/* ── CLIFF IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="varkala cliff beach Kerala red rock formation cafe sea view aerial"
              alt="Aerial view of Varkala cliff path with cafes perched above the Arabian Sea"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The cliff path — cafes and guesthouses on the edge, the Arabian Sea below. There is nothing quite like this at any other Indian beach destination.
              </p>
            </div>
          </div>

          {/* ── AYURVEDA ── */}
          <section id="ayurveda" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"🌿"} Ayurveda Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Kerala is the home of authentic Ayurveda — not the diluted spa version. Here&apos;s how to find the real thing without overpaying.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Abhyanga",
                  subtitle: "Full-body oil massage",
                  duration: "60–90 min",
                  price: "₹1,500–₹2,500",
                  desc: "Two therapists apply warm herbal oil in synchronised strokes head to toe. The most foundational Ayurvedic treatment. Good for stress, joint stiffness, and general detox.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  title: "Shirodhara",
                  subtitle: "Oil poured on forehead",
                  duration: "45–60 min",
                  price: "₹2,000–₹3,500",
                  desc: "A thin stream of warm medicated oil is poured continuously onto the forehead. Deeply calming — used for anxiety, insomnia, and headaches. One of Ayurveda&apos;s most distinctive treatments.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  title: "Njavara Kizhi",
                  subtitle: "Rice poultice massage",
                  duration: "60–75 min",
                  price: "₹2,500–₹4,000",
                  desc: "Warm boluses of medicated rice are applied to the body after an oil massage. Excellent for muscle pain, skin conditions and fatigue recovery.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  title: "Podikizhi",
                  subtitle: "Herbal powder massage",
                  duration: "45–60 min",
                  price: "₹1,800–₹2,800",
                  desc: "Warm bundles of herbal powders in muslin cloth are pressed against the body to relieve pain and stiffness. Particularly effective for arthritis and musculoskeletal issues.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <div key={t.title} className={`rounded-xl border p-5 ${t.color}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-medium text-sm text-ink">{t.title}</p>
                      <p className="text-xs text-muted font-light">{t.subtitle}</p>
                    </div>
                    <span className="text-xs bg-white/70 px-2.5 py-1 rounded-full border border-white/60 text-ink font-light">{t.price}</span>
                  </div>
                  <p className="text-xs text-muted mb-2 font-light">Duration: {t.duration}</p>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="font-serif text-lg font-light text-ink mb-3">How to Find a Good Centre</h3>
            <div className="space-y-3">
              {[
                { icon: "✅", title: "Look for AYUSH certification", desc: "The Ministry of AYUSH certifies legitimate Ayurvedic practitioners in Kerala. Look for the certificate displayed at the entrance — any genuine centre will have it." },
                { icon: "🏥", title: "Kerala Ayurveda Pharmacy (near temple)", desc: "Government-backed centre near Janardanaswamy Temple. Reliable, fair prices, qualified practitioners. This is the safest first choice for first-time Ayurveda visitors." },
                { icon: "🏨", title: "Ask your guesthouse", desc: "Any established cliff guesthouse has relationships with trusted local centres. Their recommendation comes with accountability — they won&apos;t send you somewhere bad." },
                { icon: "❌", title: "Avoid resort packages", desc: "Resort spa Ayurveda is typically 2–3x the price for the same treatment, with less experienced practitioners. Standalone AYUSH-certified centres are the better choice in Varkala." },
                { icon: "⚠️", title: "Don&apos;t book random cliff centres", desc: "Some cliff-facing massage parlours use the word Ayurveda loosely. A basic oil massage is not the same as traditional Ayurvedic treatment with prepared herbal oils." },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-green-300 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── HOW TO REACH ── */}
          <div className="mb-14 bg-parchment rounded-2xl p-6 border border-parchment-2">
            <h3 className="font-serif text-xl font-light text-ink mb-4">{"🚆"} Getting to Varkala</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "🚌", title: "From Trivandrum by bus", detail: "51km · 1.5 hrs · ₹60. Regular KSRTC services from Thiruvananthapuram Central Bus Station. The cheapest option and perfectly reliable." },
                { icon: "🚆", title: "Train from Trivandrum", detail: "45 min · ₹30–₹150 depending on class. Several trains daily. Faster than bus. Varkala Railway Station is 3km from the cliff — auto for ₹150–₹200." },
                { icon: "🚆", title: "Train from Kollam", detail: "30 min · Short, easy journey. Good option if coming from Alleppey direction." },
                { icon: "🚕", title: "Taxi from Trivandrum", detail: "₹800–₹1,000 one way. 1.5 hrs. Convenient if arriving with luggage or late at night. OlaCabs or local taxis both available." },
              ].map((opt) => (
                <div key={opt.title} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-parchment-2">
                  <span className="text-2xl flex-shrink-0">{opt.icon}</span>
                  <div>
                    <p className="font-medium text-sm text-ink mb-1">{opt.title}</p>
                    <p className="text-xs text-muted font-light leading-relaxed">{opt.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted font-light mt-4 italic">
              Trivandrum International Airport is the nearest airport (TRV) — 51km away. Taxis available directly to Varkala for ₹1,200–₹1,500.
            </p>
          </div>

          {/* ── KAPPIL LAKE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="kappil lake varkala backwater canoe boat kerala sunset reflections"
              alt="Kappil Lake backwater near Varkala with canoe and coconut palms"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Kappil Lake — 8km from the cliff, rarely visited, and one of the best backwater experiences you can have without paying houseboat prices.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Eating all meals on the cliff", desc: "Cliff cafes are 40% more expensive than Varkala Town (2km away). Eat breakfast and dinner in town at Sri Padman or similar local restaurants. Save the cliff splurge for one lunch with a sea view.", icon: "🍽" },
                { title: "Not booking cliff accommodation in advance (Dec–Jan)", desc: "December–January is peak season. Good cliff guesthouses fill up 2–3 weeks ahead. Book in advance or arrive to disappointment and overpriced emergency options.", icon: "🏠" },
                { title: "Swimming at the north end of Papanasam Beach", desc: "Strong currents at the north end have caused accidents. Always swim at the south end in the marked lifeguard zone. The water is calmer and lifeguards are present.", icon: "🌊" },
                { title: "Skipping Kappil Lake", desc: "Most tourists stay on the cliff and miss the lake entirely. It is the best backwater experience in Varkala and costs almost nothing. Do not let the 8km distance put you off.", icon: "🛶" },
                { title: "Visiting during monsoon (June–September)", desc: "The cliffs are dramatic in the rain, but the beach closes for swimming, the sea is rough, and some cliff path sections become slippery. Only visit Jun–Sep if you specifically want the moody atmosphere without the water.", icon: "🌧" },
                { title: "Picking any massage centre randomly on the cliff", desc: "Not all cliff massage centres are genuine Ayurveda. Find AYUSH-certified practitioners or ask your guesthouse. Paying ₹500 for a generic oil rub is not the same as traditional Kerala Ayurveda at ₹1,500.", icon: "🌿" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"💡"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🌅", title: "Sunrise on the cliff beats sunset", desc: "Everyone watches sunset on the cliff. Sunrise has the cliff to yourself — fishermen, early pilgrims, and a completely different quality of light on the red laterite.", color: "bg-amber-50 border-amber-200" },
                { icon: "🥥", title: "Fresh coconuts on the beach", desc: "₹40–₹60 from beach vendors. Cut open on the spot, with a straw. This is one of Kerala&apos;s great small pleasures and genuinely better than any cafe drink at three times the price.", color: "bg-amber-50 border-amber-200" },
                { icon: "🚂", title: "Book the Trivandrum–Varkala train", desc: "45-minute journey, trains run frequently, ₹30–₹150. Far better than the bus for comfort. Book on IRCTC app at least a day ahead for reserved seating.", color: "bg-teal-50 border-teal-200" },
                { icon: "🏛️", title: "Visit the temple early morning", desc: "Janardanaswamy Temple at 6–7am before the pilgrimage crowd arrives. The light, the incense, and the relative quiet make for a completely different experience than a midday visit.", color: "bg-teal-50 border-teal-200" },
                { icon: "🍛", title: "Town thali vs cliff cafe", desc: "Sri Padman Restaurant in Varkala Town: full Kerala thali ₹80–₹120 with rice, sambar, curries, pappadam. A cliff cafe equivalent meal costs ₹250–₹400. Budget for both — the cliff view is occasionally worth it.", color: "bg-purple-50 border-purple-200" },
                { icon: "📅", title: "Combine with Alleppey or Kovalam", desc: "Varkala is 90km from Alleppey (Alappuzha) — doable in a day. Kovalam is 51km south. A Varkala–Kovalam–Trivandrum route works well as a Kerala coast exit before flying home.", color: "bg-purple-50 border-purple-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── FOOD GUIDE ── */}
          <div className="mb-14 bg-parchment rounded-2xl p-6 border border-parchment-2">
            <h3 className="font-serif text-xl font-light text-ink mb-4">{"🍽"} Where to Eat</h3>
            <div className="space-y-3">
              {[
                { name: "Abba Restaurant", type: "Cliff · Mid-price", detail: "One of the cliff&apos;s best for fresh fish curry and Kerala seafood. Not the cheapest, but consistently good. Fish curry rice around ₹320–₹400.", tag: "Seafood" },
                { name: "Darjeeling Cafe", type: "Cliff · Popular", detail: "Long-running favourite with Israeli food, Indian staples, and fresh juices. Good breakfasts. Slightly overpriced for what it is, but the cliff location carries its weight.", tag: "International" },
                { name: "Sri Padman Restaurant", type: "Town · Budget", detail: "The best value meal in the Varkala area. Full Kerala thali for ₹80–₹120. Walk the 2km to town or auto for ₹60. Worth every step.", tag: "Kerala Local" },
                { name: "Fresh coconuts on the beach", type: "Beach · ₹40–₹60", detail: "Not a restaurant but non-negotiable. Cut fresh on the spot by beach vendors. Best drunk sitting on a beach rock watching the waves.", tag: "Essential" },
              ].map((r) => (
                <div key={r.name} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-parchment-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <p className="font-medium text-sm text-ink">{r.name}</p>
                      <span className="text-[0.62rem] uppercase tracking-wide bg-gold/20 text-amber-800 px-2 py-0.5 rounded-full">{r.tag}</span>
                    </div>
                    <p className="text-[0.68rem] text-muted font-light mb-1">{r.type}</p>
                    <p className="text-xs text-muted font-light leading-relaxed">{r.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group and budget — we&apos;ll send a personalised Varkala itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Varkala Trip {"→"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Varkala?", a: "3 days is the sweet spot. Day 1 covers the cliff walk, Janardanaswamy Temple and Papanasam Beach. Day 2 adds Kappil Lake backwater and Black Beach. Day 3 is for Ayurveda, Helipad Beach and the town. 2 days is possible but you will feel rushed and likely miss Kappil Lake." },
                { q: "What is the best time to visit Varkala?", a: "October to March is the best time — calm seas, 25–32°C, and the beach is open for swimming. November to February is peak season; book cliff accommodation early. Avoid June to September (monsoon) — the sea is rough, beach swimming is unsafe, and the cliff path can be slippery." },
                { q: "How much does a 3-day Varkala trip cost?", a: "Budget travellers spend ₹2,000–₹3,000/day including a cliff guesthouse (₹700–₹1,200/night) and a mix of cliff cafes and town restaurants. Mid-range with a boutique cliff hotel is ₹5,000–₹8,000/day. Add ₹1,200–₹2,500 for a proper Ayurvedic massage session." },
                { q: "Is Varkala better than Goa?", a: "For solo travellers and couples seeking quiet authenticity, Varkala is significantly better. It has lower prices, a 2,000-year-old cliff temple, genuine Ayurveda, and the unique red laterite cliffs. Goa wins if you want nightlife, large-scale water sports, or a party atmosphere." },
                { q: "Is Varkala safe for solo female travellers?", a: "Varkala is considered one of India's safer beach destinations for solo female travellers. The cliff area has a strong international tourist presence and established guesthouses. Stick to the lifeguard zone for swimming, use your guesthouse's recommended massage centres, and apply normal travel sense." },
                { q: "How do I get from Thiruvananthapuram to Varkala?", a: "From Trivandrum: 51km, 1.5 hours by bus (₹60) or 45 minutes by train. Trains run from Trivandrum Central to Varkala Railway Station — the most convenient option. Varkala Station is 3km from the cliff; take an auto for ₹150–₹200. Taxis cost ₹800–₹1,000 if you prefer door to door." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Kerala &amp; South India Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kerala 5-Day Backwaters Guide", href: "/blog/kerala-5-days", soon: false },
                { label: "Alleppey — Houseboat & Backwaters", href: "/blog/alleppey-3-days", soon: false },
                { label: "Munnar — Tea Plantations & Hills", href: "/blog/munnar-3-days", soon: false },
                { label: "Browse All South India Guides", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="varkala-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

// ── FAQ Item accordion ────────────────────────────────────────────────────────
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
