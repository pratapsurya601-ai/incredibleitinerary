"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import SmartImage from "@/components/ui/SmartImage";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import RelatedGuides from "@/components/blog/RelatedGuides";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import Breadcrumb from "@/components/blog/Breadcrumb";


const CORBETT_TOC = [
  { id: "decision",   emoji: "⚡", label: "Which Plan Are You?" },
  { id: "zones",      emoji: "\uD83D\uDCCD", label: "Safari Zones Compared" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",     emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "safaris",    emoji: "\uD83D\uDE99", label: "Jeep vs Canter" },
  { id: "mistakes",   emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "\uD83D\uDCA1", label: "Pro Tips" },
  { id: "faq",        emoji: "❓", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Jim Corbett 3-Day Safari Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Jim Corbett in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
        <span className="text-muted text-lg">{open ? "\u2212" : "+"}</span>
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
            <span className="text-lg">{"\uD83D\uDCB0"}</span>
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
          <p className="font-medium text-sm text-ink mb-1">{title}</p>
          <p className="text-xs text-gray-700 font-light leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
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

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function CorbettClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under ₹8k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83D\uDC2F", label: "Wildlife", sub: "₹10k–25k", color: "border-emerald-300 bg-emerald-50 text-emerald-800" },
    { id: "C" as const, emoji: "\uD83C\uDFE8", label: "Premium Lodge", sub: "₹25k–45k", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={CORBETT_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Jim Corbett" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="jim corbett national park tiger forest uttarakhand"
            fallback="https://images.unsplash.com/photo-1561731216-c3a4d514e4b1?w=1600&q=85"
            alt="Jim Corbett National Park dense sal forest with misty morning light"
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
              <span className="text-white/70">Jim Corbett 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Wildlife & Safari
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Jim Corbett in 3 Days: Safari Zones & Tiger Sightings
                <em className="italic text-gold-light"> (Complete Guide, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with Dhikala booking secrets, zone-by-zone breakdown, jeep vs canter comparison — and the mistakes that waste most Corbett trips.
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
              <span>{"\uD83C\uDDEE\uD83C\uDDF3"} India</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDCC5"} 3 Days</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDCB0"} From {"₹"}8,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Dhikala is the holy grail of Indian wildlife — 2 nights inside the park, no phone signal, just you, the forest, and the possibility of seeing a tiger 20 feet from your jeep. This guide tells you exactly how to get there, and what to do if you can&apos;t.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your situation — jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} {"→"}</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── SAFARI ZONES COMPARED ── */}
          <section id="zones" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCCD"} Safari Zones Compared</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Corbett has 5 tourism zones. These 3 matter most — the rest are buffer zones with minimal wildlife.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              {[
                { title: "Dhikala Zone", emoji: "\uD83D\uDC2F", bg: "bg-emerald-50 border-emerald-200", th: "text-emerald-800",
                  rows: [["Tiger odds","Highest in the park"],["Terrain","Vast grasslands + river"],["Stay","Inside park (mandatory)"],["Access","45 days advance booking"]],
                  note: "Book Dhikala 45 days in advance on the government portal — it sells out in minutes. Literally. Set an alarm for midnight on booking day." },
                { title: "Bijrani Zone", emoji: "\uD83E\uDD8C", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Tiger odds","Good — second best"],["Terrain","Mixed sal forest"],["Stay","Ramnagar town (outside)"],["Access","Easier to book"]],
                  note: "Bijrani is the realistic option if Dhikala is full — shorter drive, good tiger sighting probability, and you can stay in Ramnagar town instead of park lodges." },
                { title: "Jhirna Zone", emoji: "\uD83D\uDC18", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  rows: [["Tiger odds","Moderate"],["Terrain","Dry deciduous forest"],["Stay","Ramnagar town (outside)"],["Access","Open year-round"]],
                  note: "Jhirna is the only zone open all 12 months. Best for elephants, sloth bears, and leopards. Tiger sightings happen but less frequently than Dhikala/Bijrani." },
              ].map((zone) => (
                <div key={zone.title} className={`rounded-xl border p-5 ${zone.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${zone.th}`}>
                    <span>{zone.emoji}</span>{zone.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {zone.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/80 w-20 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">{"\u26A0\uFE0F"} {zone.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Smart move:</strong> Apply for Dhikala first. If it&apos;s sold out, Bijrani morning safari is your best bet for tigers. Book Jhirna as a backup — it&apos;s guaranteed availability and open even during monsoon shoulder months.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDCC5"} label="Duration" value="3 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"₹8,000"} />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Nov – Jun" />
            <StatCard icon={"\uD83D\uDE82"} label="Nearest City" value="Ramnagar" />
          </div>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} The Itineraries</h2>
            <p className="text-sm text-muted font-light mb-6">Click a plan — days are expandable/collapsible.</p>

            {/* Tab switcher */}
            <div className="flex gap-2 flex-wrap mb-8 p-1 bg-parchment rounded-xl">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 ${
                    activeTab === p.id ? "bg-white shadow text-ink border border-parchment-2" : "text-muted hover:text-ink"
                  }`}>
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>

            {/* ── PLAN A: Budget ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDCB0"}</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Ramnagar Base, Bijrani/Jhirna Safaris</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Ramnagar guesthouse {"₹"}800{"–"}{"₹"}1,500/night {"·"} Canter safari {"₹"}1,500{"–"}{"₹"}2,000/person</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive Ramnagar, Garjia Temple & Corbett Falls"
                  items={[
                    "Reach Ramnagar by 11am — overnight bus from Delhi (6hrs, ₹500–800) or Kathgodam train + shared jeep",
                    "Check in to guesthouse near Ramnagar bus stand — budget ₹800–1,200/night for a clean double room",
                    "Lunch at a local dhaba on Ramnagar main road — dal, rice, sabzi for ₹120–150",
                    "2pm: Garjia Temple — riverside Hindu temple on a large rock in the Kosi River, 15km from Ramnagar. Entry free, auto ₹200 return",
                    "4pm: Corbett Falls — 25m waterfall inside a small forest patch, 5km from Garjia. Entry ₹50. Best in Nov–Dec when water flow is strong",
                    "Evening: Walk along Ramnagar market, collect safari permits from CTR office if doing self-booking",
                    "Early dinner by 8pm — you need to wake up at 4:30am for the morning safari"
                  ]}
                  cost={"₹2,000–2,800 (transport + stay + food)"}
                />
                <DayCard day="Day 2" title="Bijrani Morning Canter Safari + Ramganga River"
                  items={[
                    "4:30am wake up. The morning safari (6am) has 3x better wildlife sighting odds than the afternoon one. Every experienced guide will tell you this",
                    "5:15am: Report at Amdanda gate for Bijrani zone canter. Carry warm layers Nov–Feb — open-top canters are freezing at dawn",
                    "6am–10am: Bijrani canter safari — look for tiger pugmarks on sandy riverbed trails, sambar deer alarm calls (the best tiger indicator), and elephants near water",
                    "11am: Late breakfast back in Ramnagar. Rest until 2pm — safari exhaustion is real",
                    "3pm: Walk to Ramganga River viewpoint near Garjia — binoculars useful for spotting gharials and marsh mugger crocodiles basking on rocks",
                    "5pm: Visit Corbett Museum in Kaladhungi (Jim Corbett’s former home, 30km from Ramnagar) — ₹50 entry, autos charge ₹400 return",
                    "Dinner at guesthouse or Ramnagar market — try the pahadi (hill) style rajma chawal"
                  ]}
                  cost={"₹2,500–3,200 (canter + transport + food)"}
                />
                <DayCard day="Day 3" title="Jhirna Morning Safari + Departure"
                  items={[
                    "4:30am wake up again. Second morning safari — Jhirna zone this time for a different landscape",
                    "6am–10am: Jhirna jeep safari (split cost 6 ways = ₹750–1,000/person). Dry deciduous forest — easier to spot animals in open terrain",
                    "Jhirna speciality: elephants, spotted deer herds, wild boar, and occasional sloth bear sightings in rocky terrain",
                    "11am: Pack up, checkout. Late breakfast in Ramnagar",
                    "12:30pm: Bus or shared taxi to Delhi/Haldwani. Or train from Ramnagar station (Ranikhet Express to Delhi, 6hrs)",
                    "Tip: Book return train tickets in advance — Ramnagar station has limited departures and they sell out on weekends"
                  ]}
                  cost={"₹2,000–2,500 (safari share + transport + food)"}
                />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-4">
                  <p className="text-sm font-medium text-amber-800 mb-1">{"\uD83D\uDCB0"} Total Budget Plan Cost</p>
                  <p className="text-xs text-amber-700 font-light">{"₹"}6,500{"–"}{"₹"}8,500 per person (transport from Delhi + 2 nights stay + 2 safaris + food + activities)</p>
                </div>
              </div>
            )}

            {/* ── PLAN B: Wildlife ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDC2F"}</span>
                  <div>
                    <p className="text-sm font-medium text-emerald-800">Wildlife Plan — Dhikala + Bijrani, Jeep Safaris</p>
                    <p className="text-xs text-emerald-600 font-light">Stay: 1 night Dhikala Forest Lodge + 1 night Ramnagar resort {"·"} Jeep safaris {"₹"}4,500{"–"}{"₹"}6,500/vehicle</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Enter Dhikala Zone — Deep Inside the Park"
                  items={[
                    "Reach Ramnagar by 8am. Pre-arranged jeep to Dhangari gate (Dhikala entry) — 18km, 30 minutes",
                    "9am: Enter Dhikala zone. The 32km drive from Dhangari gate to Dhikala FRH is a safari in itself — watch for elephants, deer, and langurs along the Ramganga reservoir",
                    "12pm: Check into Dhikala Forest Rest House (book via corbettonline.uk.gov.in, ₹2,000–5,000/night). Basic but iconic — this is THE wildlife experience in India",
                    "2pm: Lunch at Dhikala canteen (simple dal-rice, ₹150–200). No restaurants, no room service, no phone signal. That’s the point",
                    "3:30pm: Afternoon jeep safari through Dhikala grasslands — the Chaur (grassland) is where tiger sightings happen. 300+ species of birds along the Ramganga River",
                    "6pm: Return to FRH before sunset (mandatory). Watch the sun set over the Ramganga from the watchtower — elephants come to drink at dusk",
                    "8pm: Dinner at canteen. Early sleep — morning safari starts at 5:30am"
                  ]}
                  cost={"₹6,000–9,000 (jeep + stay + food + permits)"}
                />
                <DayCard day="Day 2" title="Dhikala Morning Safari + Transfer to Bijrani"
                  items={[
                    "5am wake up. Dhikala morning safari is the single best wildlife experience in North India — the grasslands glow golden at sunrise and tigers hunt in the open",
                    "5:30am–9:30am: Dhikala jeep safari — Sambar Road, Kanda Ridge, and the Ramganga riverbed. Your naturalist guide knows which tigers are in which territory",
                    "10am: Breakfast at canteen, pack up. Last look at the Ramganga reservoir from the watchtower",
                    "11am: Drive out through Dhangari gate. The exit drive is another 2-hour safari — don’t pack your camera yet",
                    "1:30pm: Check into a mid-range resort in Ramnagar/Dhikuli (₹2,500–4,000/night). Hot shower, phone signal, actual food — you’ll appreciate all three after Dhikala",
                    "3pm: Rest or visit Garjia Temple (15 min drive) — the Kosi River around the temple has mahseer fish visible from the bridge",
                    "5pm: Corbett Falls if time permits (closes at 5:30pm). Quick 1km walk through forest to the falls",
                    "Evening: Dinner at resort. Confirm Bijrani morning safari permits for Day 3"
                  ]}
                  cost={"₹4,500–6,500 (jeep + resort + food)"}
                />
                <DayCard day="Day 3" title="Bijrani Jeep Safari + Departure"
                  items={[
                    "4:30am wake up. Bijrani zone morning jeep safari — the most popular zone for good reason",
                    "5:15am: Report at Amdanda gate. Bijrani has denser sal forest than Dhikala — different habitat, different animal behavior",
                    "6am–10am: Bijrani jeep safari. The sal forest trails are narrower — excellent for close encounters with elephants and spotted deer. Tiger sighting probability is solid",
                    "10:30am: Late brunch at resort. Pack up and checkout",
                    "12pm: Optional stop at Corbett Museum in Kaladhungi — Jim Corbett’s actual house, now a museum with his photographs, books, and hunting-to-conservation story",
                    "1:30pm: Depart for Delhi by road (260km, 5–6hrs) or Kathgodam for train connection",
                    "Tip: If driving back to Delhi, stop at Moradabad for the famous Nagori halwa-puri breakfast spot on NH9"
                  ]}
                  cost={"₹4,000–5,500 (jeep + food + transport)"}
                />
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mt-4">
                  <p className="text-sm font-medium text-emerald-800 mb-1">{"\uD83D\uDCB0"} Total Wildlife Plan Cost</p>
                  <p className="text-xs text-emerald-700 font-light">{"₹"}14,500{"–"}{"₹"}21,000 per person (includes Dhikala stay + 3 jeep safaris + 1 night resort + food + transport from Delhi)</p>
                </div>
              </div>
            )}

            {/* ── PLAN C: Premium Lodge ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83C\uDFE8"}</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Premium Lodge Plan — Luxury Resorts + Private Safaris</p>
                    <p className="text-xs text-purple-600 font-light">Stay: Jim&apos;s Jungle Retreat / Namah / Solluna {"·"} Private jeep safaris with expert naturalist</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive in Style, Afternoon Jhirna Safari"
                  items={[
                    "Private car from Delhi (5–6hrs) or fly to Pantnagar airport (1hr flight + 2hr drive to Corbett). Most luxury lodges offer airport pickup",
                    "11am: Check into premium lodge in Dhikuli/Bijrani corridor (₹12,000–18,000/night). Pool, spa, jungle-view rooms, organic dining",
                    "12:30pm: Gourmet lunch at the lodge — most premium properties serve farm-to-table pahadi cuisine that rivals any city restaurant",
                    "3pm: Private jeep safari in Jhirna zone with lodge-assigned expert naturalist. Afternoon safaris are quieter with fewer vehicles — premium advantage",
                    "6pm: Return to lodge. Sundowner drinks by the pool or bonfire (seasonal). The lodge naturalist briefs you on tomorrow’s Bijrani safari",
                    "8pm: Multi-course dinner. Some lodges run night nature walks on their property — owls, civets, and flying squirrels",
                    "Note: Premium lodges handle ALL permit booking, vehicle arrangement, and naturalist assignment. You just show up"
                  ]}
                  cost={"₹18,000–25,000 (lodge + safari + food + transfer)"}
                />
                <DayCard day="Day 2" title="Bijrani Morning & Afternoon Double Safari"
                  items={[
                    "5am: Wake up call from lodge. Hot chai and biscuits before departure",
                    "5:30am: Private jeep to Bijrani zone — morning safari with expert naturalist who knows individual tigers by name and territory",
                    "6am–10am: Bijrani morning safari. Your naturalist tracks pugmarks, alarm calls, and territorial scratch marks to maximize tiger encounter probability",
                    "10:30am: Return to lodge for full breakfast. Rest, swim, or book a spa treatment (most lodges offer Ayurvedic massage, ₹2,000–4,000)",
                    "12:30pm: Lunch at lodge. The chef often prepares catch-of-the-day river fish if you request it in advance",
                    "3pm: Second safari — Bijrani afternoon or switch to a different zone. Your naturalist adjusts the route based on morning intelligence from other guides",
                    "6:30pm: Return to lodge. Photography review session with the naturalist — many premium guides help identify species from your photos",
                    "8:30pm: Farewell dinner. Most lodges prepare a special jungle-themed dinner with local Kumaoni cuisine"
                  ]}
                  cost={"₹20,000–28,000 (lodge + double safari + spa + food)"}
                />
                <DayCard day="Day 3" title="Sunrise Safari, Corbett Falls & Departure"
                  items={[
                    "5am: Final morning safari — Dhikala zone if you secured permits, otherwise Bijrani for one last chance at a tiger sighting",
                    "9:30am: Return to lodge. Full breakfast and checkout",
                    "11am: Private visit to Corbett Falls — your driver takes the scenic forest road. Quick 30-min stop for photos",
                    "11:45am: Garjia Temple — the lodge can arrange a brief guided visit explaining the temple’s significance to local Kumaoni culture",
                    "12:30pm: Lunch at a local riverside restaurant in Ramnagar — chargrilled river fish and pahadi dal",
                    "1:30pm: Depart for Delhi by private car or Pantnagar airport. Some lodges offer a packed gourmet lunch box for the road",
                    "Tip: Ask the lodge to book a Dhikala day-entry permit (if available) — even a single drive through Dhikala grasslands is worth it for serious wildlife photographers"
                  ]}
                  cost={"₹15,000–20,000 (lodge + safari + transport + food)"}
                />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 mt-4">
                  <p className="text-sm font-medium text-purple-800 mb-1">{"\uD83D\uDCB0"} Total Premium Plan Cost</p>
                  <p className="text-xs text-purple-700 font-light">{"₹"}25,000{"–"}{"₹"}45,000 per person (2 nights luxury lodge + 3{"–"}4 private jeep safaris + all meals + expert naturalist + airport transfers)</p>
                </div>
              </div>
            )}
          </section>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment text-left">
                    <th className="px-4 py-3 font-medium text-ink text-xs uppercase tracking-wide">Expense</th>
                    <th className="px-4 py-3 font-medium text-amber-700 text-xs uppercase tracking-wide">Budget</th>
                    <th className="px-4 py-3 font-medium text-emerald-700 text-xs uppercase tracking-wide">Wildlife</th>
                    <th className="px-4 py-3 font-medium text-purple-700 text-xs uppercase tracking-wide">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2 bg-white">
                  {[
                    ["Delhi{\"\–\"}Ramnagar Transport", "₹500–800", "₹1,500–2,500", "₹4,000–6,000"],
                    ["Accommodation (2 nights)", "₹1,600–3,000", "₹4,500–9,000", "₹24,000–36,000"],
                    ["Safari Permits + Vehicle", "₹2,500–3,500", "₹6,000–9,000", "₹8,000–12,000"],
                    ["Food (3 days)", "₹800–1,200", "₹1,500–2,500", "Included"],
                    ["Local Transport", "₹400–600", "₹800–1,200", "Included"],
                    ["Activities & Tips", "₹200–400", "₹500–1,000", "₹1,000–2,000"],
                  ].map(([label, a, b, c]) => (
                    <tr key={label} className="hover:bg-parchment/30 transition-colors">
                      <td className="px-4 py-2.5 text-ink font-light">{label}</td>
                      <td className="px-4 py-2.5 text-amber-700 font-light">{a}</td>
                      <td className="px-4 py-2.5 text-emerald-700 font-light">{b}</td>
                      <td className="px-4 py-2.5 text-purple-700 font-light">{c}</td>
                    </tr>
                  ))}
                  <tr className="bg-parchment font-medium">
                    <td className="px-4 py-3 text-ink">Total (per person)</td>
                    <td className="px-4 py-3 text-amber-800">{"₹"}6,000{"–"}8,500</td>
                    <td className="px-4 py-3 text-emerald-800">{"₹"}14,500{"–"}25,000</td>
                    <td className="px-4 py-3 text-purple-800">{"₹"}25,000{"–"}45,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── SAFARI IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="indian jungle safari jeep forest trail wildlife uttarakhand"
              fallback="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=900&q=80"
              alt="Jeep safari on a misty forest trail in Jim Corbett National Park"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The morning safari (6am) has 3x better wildlife sighting odds than the afternoon one. Every experienced guide will tell you this.
              </p>
            </div>
          </div>

          {/* ── JEEP VS CANTER ── */}
          <section id="safaris" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDE99"} Jeep Safari vs Canter Safari</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Jeep Safari", emoji: "\uD83D\uDE99", bg: "bg-emerald-50 border-emerald-200", th: "text-emerald-800",
                  rows: [["Capacity","6 people per vehicle"],["Cost","₹4,500–6,500 per jeep"],["Per person","₹750–1,100 (shared)"],["Zones","Dhikala, Bijrani, Jhirna"],["Advantage","Quiet, flexible, can stop anywhere"]],
                  note: "Jeep can access narrow forest trails that canters can’t. Your guide can pause at pugmarks, follow alarm calls, and double back. This is how serious sightings happen." },
                { title: "Canter Safari", emoji: "\uD83D\uDE8C", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Capacity","16–20 people per vehicle"],["Cost","₹1,500–2,000 per person"],["Per person","₹1,500–2,000 (fixed)"],["Zones","Dhikala, Bijrani"],["Advantage","Cheaper, good for solo budget"]],
                  note: "Canters are louder, less maneuverable, and stop at fixed points. Still worth it on a budget — you’ll see deer, elephants, and birds. But tiger odds drop significantly vs jeep." },
              ].map((type) => (
                <div key={type.title} className={`rounded-xl border p-5 ${type.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${type.th}`}>
                    <span>{type.emoji}</span>{type.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {type.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/80 w-20 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">{"\uD83D\uDCA1"} {type.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Not booking Dhikala 45 days in advance", desc: "The portal opens at midnight exactly 45 days before your entry date. If you check at 12:05am, it’s already gone. Treat it like concert tickets.", icon: "\uD83C\uDFAB" },
                { title: "Choosing afternoon over morning safari", desc: "Morning safaris (6am entry) have dramatically better wildlife sighting rates. Animals are active, light is better for photography, and guides are fresher. Never skip morning for comfort.", icon: "\uD83C\uDF05" },
                { title: "Wearing bright colors on safari", desc: "Red, white, and bright yellow are visible from hundreds of meters away. Wear olive, brown, or khaki. Dark green also works. This isn’t fashion advice — it’s the difference between seeing a tiger or not.", icon: "\uD83D\uDC55" },
                { title: "Expecting guaranteed tiger sighting", desc: "Even in Dhikala, tiger sighting probability per safari is 20–30%. Over 3 safaris it rises to 50–60%. Go for the full forest experience — elephants, birds, deer, landscapes — and the tiger becomes a bonus.", icon: "\uD83D\uDC2F" },
                { title: "Skipping Ramnagar overnight and day-tripping from Delhi", desc: "Delhi to Corbett is 260km, 6+ hours. Day-tripping means 12 hours of driving for 3 hours of safari. Stay minimum 2 nights.", icon: "\uD83D\uDE97" },
                { title: "Not carrying binoculars", desc: "Most wildlife is spotted at 100–300m distance first. Good binoculars (₹2,000+ pair) make the difference between ‘I think I saw something’ and ‘I watched a tiger drink water for 10 minutes.’", icon: "\uD83D\uDD2D" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\uD83D\uDC18", title: "Listen for Alarm Calls", desc: "Sambar deer make a distinctive ‘dhank’ bark when a tiger is nearby. Langur monkeys screech from treetops. When your guide stops the jeep and listens — stay absolutely silent.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "\uD83D\uDCF7", title: "Camera Settings for Safari", desc: "Use at least 200mm lens (300mm+ preferred). Set to shutter priority, 1/800s minimum. ISO auto up to 6400. Burst mode on. Most tiger photos are taken in 3–5 seconds of opportunity.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "\uD83C\uDF0A", title: "Ramganga River at Dusk", desc: "The Ramganga riverbed near Dhikala is where elephants, gharials, and otters converge at sunset. If you’re staying in Dhikala, spend every evening at the watchtower. Best free wildlife show in India.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83E\uDDCA", title: "Layer Your Clothing", desc: "Nov–Feb mornings in an open jeep: 2–5°C feels like -5°C with wind chill. Thermal base layer + fleece + windbreaker. By 9am you’ll be in a t-shirt. Dress in layers you can strip fast.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDCF1", title: "Download Offline Maps", desc: "No phone signal inside most park zones, especially Dhikala. Download offline Google Maps for Ramnagar-Corbett area before entering. Your phone is useless inside the park — bring a physical book.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDCC6", title: "Best Month by Month", desc: "Nov–Feb \u2744\uFE0F best weather, good birding | Mar–Apr \uD83D\uDD25 best tiger odds (dry, animals at waterholes) | May–Jun \u2600\uFE0F hot but excellent sightings | Jul–Oct \uD83C\uDF27\uFE0F closed (monsoon)", color: "bg-amber-50 border-amber-200" },
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
              Tell us your dates, group size and budget — we&apos;ll handle Dhikala booking, safari permits, lodge selection and transfers. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Corbett Trip {"→"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What is the best time to visit Jim Corbett?", a: "November to June. The park closes completely July–October for monsoon. November–February has cooler weather and excellent birdwatching. March–June is the best window for tiger sightings — dry heat forces animals to waterholes, making them easier to spot in open terrain." },
                { q: "How do I book a Dhikala zone safari?", a: "Book on corbettonline.uk.gov.in exactly 45 days before your entry date. Bookings open at midnight and sell out within minutes. Have your ID details pre-filled, use a fast internet connection, and set an alarm. If you miss Dhikala, Bijrani opens 30 days in advance and is much easier to get." },
                { q: "How much does a Jim Corbett safari cost?", a: "Jeep safari: ₹4,500–6,500 per vehicle (6 seats, split cost = ₹750–1,100/person). Canter safari: ₹1,500–2,000 per person. Dhikala accommodation: ₹1,500–5,000/night. A budget 3-day trip starts at ₹8,000. Wildlife-focused with Dhikala stay: ₹15,000–25,000. Premium lodges: ₹25,000–45,000." },
                { q: "Which zone is best for tiger sighting?", a: "Dhikala has the highest tiger density and open grasslands that make sightings more likely. Bijrani is second-best with good sal forest habitat. Jhirna is best for elephants and sloth bears. For maximum tiger odds, do a morning Dhikala safari + morning Bijrani safari over 2 days." },
                { q: "Is jeep or canter safari better?", a: "Jeep is significantly better for wildlife viewing — 6 people vs 16–20, quieter engine, can access narrow trails, and your guide can follow alarm calls. Canter is cheaper but noisier and follows fixed routes. If budget allows, always pick jeep. Split the ₹4,500–6,500 cost among 6 people." },
                { q: "How many days are enough for Jim Corbett?", a: "3 days is ideal — 2–3 safaris across different zones plus Corbett Falls and Garjia Temple. If you get a Dhikala booking, plan 4 days for 2 nights inside the park. A day trip from Delhi is not recommended — the drive is 6+ hours each way. Minimum 2 nights in Ramnagar." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer India Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Nainital — 3 Day Hill Station Guide", href: "/blog/nainital-3-days", soon: false },
                { label: "Rishikesh & Haridwar — 3 Day Guide", href: "/blog/rishikesh-haridwar-3-days", soon: false },
                { label: "Kashmir — 6 Day Complete Itinerary", href: "/blog/kashmir-6-days", soon: false },
                { label: "Browse All India Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <AffiliateBlock destination="Jim Corbett" />
          <RelatedGuides currentSlug="jim-corbett-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
