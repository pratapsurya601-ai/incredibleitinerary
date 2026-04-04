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

const KANYAKUMARI_TOC = [
  { id: "decision",    emoji: "\u26A1", label: "Which Plan Are You?" },
  { id: "why",         emoji: "\uD83C\uDF0A", label: "Why Kanyakumari Needs 2 Days" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",      emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "geography",   emoji: "\uD83E\uDDED", label: "The Three Oceans" },
  { id: "mistakes",    emoji: "\u274C", label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "\uD83D\uDCA1", label: "Pro Tips" },
  { id: "faq",         emoji: "\u2753", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Kanyakumari 2-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Kanyakumari in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
      ].map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}>
          {s.label}
        </a>
      ))}
      <button onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">
        {copied ? "\u2713 Copied" : "Copy Link"}
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
          <span className="font-serif text-xl text-gold-dark font-light">{day}</span>
          <span className="text-sm text-ink font-medium">{title}</span>
        </div>
        <span className="text-muted text-lg">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-gold mt-1 flex-shrink-0 text-xs">{"\u25CF"}</span>
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
          <p className="text-xs text-muted font-light leading-relaxed">{desc}</p>
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
        <span className={`text-gold text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function KanyakumariClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under \u20B94k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83C\uDF0A", label: "Comfortable", sub: "\u20B95k\u201312k total", color: "border-cyan-300 bg-cyan-50 text-cyan-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KANYAKUMARI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Kanyakumari" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="kanyakumari vivekananda rock memorial sunset ocean india"
            fallback="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1600&q=85"
            alt="Vivekananda Rock Memorial at sunset with three oceans meeting at Kanyakumari"
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
              <span className="text-white/70">Kanyakumari 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Coastal & Heritage
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/30">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/30">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Kanyakumari in 2 Days: Where Three Oceans
                <em className="italic text-gold-light"> Meet at India&apos;s Edge</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                2 complete plans with real timings, actual costs &mdash; and why the southernmost tip of India deserves more than a rushed day trip from Trivandrum.
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
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDDD3"} 2 Days</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDCB0"} From {"\u20B9"}3,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Kanyakumari is the only place in India where you can watch the sunrise and sunset from the same point &mdash; where the Arabian Sea, Bay of Bengal, and Indian Ocean meet. Most people rush through in half a day and miss everything that makes this place extraordinary.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\u26A1"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your style &mdash; jump straight to your itinerary.</p>
            <div className="grid grid-cols-2 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} {"\u2192"}</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── WHY 2 DAYS ── */}
          <section id="why" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83C\uDF0A"} Why Kanyakumari Needs 2 Days</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Most tourists treat Kanyakumari as a pit stop &mdash; a quick photo at the tip and back on the bus. That means they miss the sunrise, the sunset, the Rock Memorial without crowds, and everything beyond the waterfront.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Day Trippers Miss", emoji: "\u274C", bg: "bg-red-50 border-red-200", th: "text-red-800",
                  rows: [["Sunrise","The famous sunrise over Bay of Bengal"],["Sunset","Equally stunning over the Arabian Sea"],["The Rock","Vivekananda Rock without 2-hour queues"],["Palace","Padmanabhapuram \u2014 finest wooden palace in Asia"]],
                  note: "A day trip gives you a crowded ferry ride and a selfie at the tip. That\u2019s it." },
                { title: "2 Nights Gets You", emoji: "\u2705", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  rows: [["Dawn","Sunrise from the tip \u2014 three oceans turning gold"],["Heritage","Vivekananda Rock + Thiruvalluvar Statue without rushing"],["Palace","Padmanabhapuram Palace day trip (65 km)"],["Food","Fresh seafood coast, local Tamil cuisine"]],
                  note: "Two nights means you see both sunrise and sunset \u2014 the entire reason to come here." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/60 w-24 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">{"\u26A0\uFE0F"} {area.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">The truth:</strong> Come for the geography, stay for the seafood. The fish thali at Hotel Saravana Bhavan is {"\u20B9"}120 and better than most coastal restaurants I&apos;ve tried in Kerala.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="2 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"\u20B93,500"} />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Oct \u2013 Mar" />
            <StatCard icon={"\u2708\uFE0F"} label="Nearest Airport" value="Trivandrum (TRV)" />
          </div>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} The Itineraries</h2>
            <p className="text-sm text-muted font-light mb-6">Click a plan &mdash; days are expandable/collapsible.</p>

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
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; Waterfront Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Lodge near the shore {"\u00B7"} {"\u20B9"}500{"\u2013"}{"\u20B9"}1,200/night {"\u00B7"} Walk + auto: {"\u20B9"}150{"\u2013"}{"\u20B9"}300/day</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Sunrise, Vivekananda Rock & Sunset"
                  items={[
                    "5:30am: Walk to the Sunrise View Point near Gandhi Memorial. Get there 20 minutes before sunrise \u2014 the sky over the Bay of Bengal shifts from violet to gold to orange. Free. This alone justifies staying overnight.",
                    "7am: Breakfast at a local stall near the waterfront \u2014 idli, vada, filter coffee. \u20B960\u201380.",
                    "8am: Ferry to Vivekananda Rock Memorial (\u20B969 round trip, departs every 30 min). The ferry to Vivekananda Rock costs \u20B969 and the 5 minutes on the water surrounded by three oceans feels genuinely significant. Spend 1.5 hours exploring the meditation hall and the mandapam where Swami Vivekananda meditated.",
                    "10am: Thiruvalluvar Statue \u2014 the 133-foot statue of the Tamil poet-saint is on the adjacent island. Same ferry ticket covers both. Walk around the base for panoramic views of the Indian Ocean.",
                    "11:30am: Return by ferry. Visit the Gandhi Memorial (Mahatma Gandhi\u2019s ashes were kept here before immersion). \u20B95 entry. 30 min.",
                    "12:30pm: Lunch \u2014 fish thali at Hotel Saravana Bhavan or any waterfront mess. \u20B9100\u2013\u20B9150.",
                    "2pm: Triveni Sangam viewpoint \u2014 walk along the shore to where you can see the three bodies of water meeting. The colour difference in the water is visible on clear days. Free.",
                    "3:30pm: Kumari Amman Temple \u2014 one of the 108 Shakti Peethas, right at the tip. No cameras allowed inside. Free entry. 45 min.",
                    "5:30pm: Sunset from the waterfront promenade. The sun drops into the Arabian Sea to your right while the Rock Memorial silhouettes against the sky. Best free show in Tamil Nadu.",
                    "7:30pm: Dinner at a local restaurant \u2014 fresh fish fry, parotta, rasam rice. \u20B9120\u2013\u20B9180."
                  ]}
                  cost={"\u20B9600\u2013\u20B9900 excluding accommodation"} />
                <DayCard day="Day 2" title="Church, Temples & Town Heritage"
                  items={[
                    "6am: Second sunrise if you want it \u2014 or sleep in. The light is different every morning.",
                    "8am: Breakfast at lodge or local stall. \u20B960\u201380.",
                    "9am: Our Lady of Ransom Church \u2014 a striking 16th-century Gothic church just 5 minutes from the waterfront. The stained glass catches morning light beautifully. Free entry, 30 min.",
                    "10am: Bhagavathy Amman Temple and the Suchindram Thanumalayan Temple (12 km, auto \u20B9150\u2013200 one way) \u2014 famous for the musical pillars that produce different notes when tapped. \u20B920 entry. 1.5 hours.",
                    "12:30pm: Lunch \u2014 banana leaf meal at any local mess. \u20B980\u2013\u20B9120.",
                    "2pm: Walk through the Kanyakumari town market \u2014 seashell souvenirs, spices, local handicrafts. Good for gifts.",
                    "3:30pm: Baywatch (the small town beach) for a quiet afternoon by the water. No swimming \u2014 the currents are strong \u2014 but the views are spectacular.",
                    "Depart by evening. Pick up shell handicrafts and banana chips as souvenirs."
                  ]}
                  cost={"\u20B9500\u2013\u20B9800 excluding accommodation"} />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 2-Day Cost (solo) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">{"\u20B9"}3,500{"\u2013"}{"\u20B9"}4,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: Comfortable ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-cyan-50 border border-cyan-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83C\uDF0A"}</span>
                  <div>
                    <p className="text-sm font-medium text-cyan-800">Comfortable Plan &mdash; Sea-View Stay + Palace Day Trip</p>
                    <p className="text-xs text-cyan-600 font-light">Stay: Hotel Sea View or Sparsa Resort {"\u00B7"} {"\u20B9"}2,500{"\u2013"}{"\u20B9"}5,000/night {"\u00B7"} Cab: {"\u20B9"}800{"\u2013"}{"\u20B9"}1,500/day</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Sunrise, Rock Memorial & Sunset Dinner"
                  items={[
                    "5:15am: Sunrise from your hotel rooftop or the Sunrise View Point. A sea-view room means you can watch the Bay of Bengal light up from bed.",
                    "7:30am: Breakfast at hotel or Sangam Restaurant \u2014 South Indian spread with ocean views. \u20B9200\u2013\u20B9350 for two.",
                    "8am: Ferry to Vivekananda Rock Memorial (\u20B969 round trip). Go first thing to avoid the tour-bus crowds that arrive by 10am. Explore the meditation hall, the Dhyana Mandapam, and sit on the rocks watching waves crash from three directions.",
                    "10am: Thiruvalluvar Statue on the adjacent rock \u2014 the 133-foot statue is more impressive up close. The pedestal alone is 38 feet. Walk the full perimeter for ocean views in every direction.",
                    "11:30am: Return to shore. Gandhi Memorial (\u20B95 entry) and the Kamarajar Mani Mandapam nearby. 45 min for both.",
                    "12:30pm: Lunch at The Sea View restaurant \u2014 grilled fish, prawn masala, crab curry. \u20B9350\u2013\u20B9600 for two.",
                    "2:30pm: Kumari Amman Temple \u2014 Shakti Peetha at the very tip of India. Then walk along the Triveni Sangam shore where you can see the three waters merging. Free.",
                    "4pm: Our Lady of Ransom Church \u2014 beautiful Gothic architecture, stained glass, peaceful interior. 30 min.",
                    "5:30pm: Sunset from the waterfront promenade or Sunset View Tower (\u20B910 entry for a higher vantage point).",
                    "7:30pm: Dinner at a seafood restaurant \u2014 fresh catch of the day. \u20B9400\u2013\u20B9700 for two."
                  ]}
                  cost={"\u20B92,000\u2013\u20B93,500 for two (excl. accommodation)"} />
                <DayCard day="Day 2" title="Padmanabhapuram Palace & Suchindram Temple"
                  items={[
                    "6am: Optional second sunrise \u2014 full-moon nights in Kanyakumari are legendary (the moon rises over the Bay of Bengal while the sun sets over the Arabian Sea simultaneously during Chitra Pournami in April).",
                    "7:30am: Breakfast at hotel.",
                    "8:30am: Drive to Padmanabhapuram Palace (65 km, 1.5 hours by cab). This 16th-century wooden palace is one of the finest in Asia \u2014 original murals, carved rosewood ceilings, granite floors polished with a mix of charcoal and coconut shells. \u20B920 entry for Indians, \u20B9200 for foreigners. Closed Mondays. Budget 2 hours inside.",
                    "11:30am: Drive to Suchindram Thanumalayan Temple (25 km from palace). Famous for the 18-foot Hanuman statue carved from a single rock and musical pillars that produce different notes. \u20B920 entry. 1 hour.",
                    "1pm: Lunch en route back \u2014 try a highway dhaba for fresh Kerala-style fish curry. \u20B9200\u2013\u20B9350 for two.",
                    "3pm: Return to Kanyakumari. Browse the seaside market for seashell crafts, spices, and local handicrafts.",
                    "4:30pm: Wax Museum or Vivekananda Wandering Monk Exhibition (\u20B950 entry) \u2014 worth 30 minutes if you have time.",
                    "5:30pm: Final sunset from the promenade. Different spot than yesterday \u2014 try the rocks near the Kumari Amman Temple.",
                    "Depart evening. Pick up Kanyakumari\u2019s famous multi-coloured sand bottles as souvenirs."
                  ]}
                  cost={"\u20B92,500\u2013\u20B94,000 for two (excl. accommodation)"} />
                <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-cyan-700 uppercase tracking-wide">Total 2-Day Cost (for two) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">{"\u20B9"}5,000{"\u2013"}{"\u20B9"}12,000 including accommodation</span>
                </div>
              </div>
            )}
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment">
                    <th className="text-left p-3.5 text-xs font-medium text-muted">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-700 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-cyan-700 text-center">{"\uD83C\uDF0A"} Comfortable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (2N)", "\u20B91,000\u2013\u20B92,400", "\u20B95,000\u2013\u20B910,000"],
                    ["\uD83C\uDF5B Food & Drinks", "\u20B9400\u2013\u20B9600", "\u20B91,200\u2013\u20B92,500"],
                    ["\uD83D\uDE95 Transport", "\u20B9200\u2013\u20B9400", "\u20B91,500\u2013\u20B92,500"],
                    ["\uD83C\uDFAF Ferry & Entry Fees", "\u20B9100\u2013\u20B9200", "\u20B9300\u2013\u20B9500"],
                    ["\uD83D\uDECD\uFE0F Souvenirs", "\u20B9100\u2013\u20B9200", "\u20B9300\u2013\u20B9500"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total</td>
                    {["\u20B93,500\u2013\u20B94,000 (solo)","\u20B95,000\u2013\u20B912,000 (for two)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Kanyakumari is remarkably affordable &mdash; the most expensive thing you&apos;ll pay for is the cab to Padmanabhapuram Palace.
            </p>
          </section>

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Kanyakumari &mdash; Must-See Places"
            subtitle="Click each thumbnail to explore Kanyakumari&apos;s most iconic landmarks and ocean views."
            spots={[
              { name: "Vivekananda Rock Memorial",  query: "vivekananda rock memorial kanyakumari ocean waves stone monument india",          desc: "A memorial on the rock where Swami Vivekananda meditated in 1892. Ferry ride (\u20B969) takes 5 minutes. Open 8am\u20134pm, closed Tuesdays." },
              { name: "Thiruvalluvar Statue",       query: "thiruvalluvar statue kanyakumari tall stone sculpture ocean island india",        desc: "A 133-foot statue of the Tamil poet-saint Thiruvalluvar on a rock island. The 38-foot pedestal represents virtue, the statue represents wealth and love." },
              { name: "Triveni Sangam",             query: "kanyakumari triveni sangam three oceans meeting point coast india",               desc: "The confluence of the Arabian Sea, Bay of Bengal, and Indian Ocean at India\u2019s southernmost tip. On clear days you can see the different water colours merge." },
              { name: "Padmanabhapuram Palace",     query: "padmanabhapuram palace wooden architecture kerala carved ceiling ancient india",  desc: "A 16th-century wooden palace with original murals, carved rosewood ceilings, and granite floors polished with charcoal and coconut. \u20B920 entry. Closed Mondays." },
              { name: "Our Lady of Ransom Church",  query: "our lady of ransom church kanyakumari gothic architecture stained glass india",   desc: "A striking 16th-century Gothic church near the waterfront with beautiful stained glass windows. Free entry, best visited in the morning light." },
            ]}
          />

          {/* ── OCEAN IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="kanyakumari sunrise ocean waves rocks golden light coast india"
              fallback="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&q=80"
              alt="Sunrise over the ocean at Kanyakumari with waves crashing on rocks"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Sunrise at Kanyakumari &mdash; the sky over the Bay of Bengal turns from violet to gold while three oceans churn below. This is the only place in India where you can watch the sunrise and sunset from the same spot.
              </p>
            </div>
          </div>

          {/* ── THE THREE OCEANS ── */}
          <section id="geography" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83E\uDDED"} The Three Oceans</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Kanyakumari sits at the exact point where three bodies of water converge. Understanding the geography makes the experience ten times more powerful.
            </p>
            <div className="space-y-3">
              {[
                { icon: "\uD83C\uDF0A", title: "Arabian Sea (West)", desc: "The sunset side. Stretches towards Africa and the Middle East. The water here tends to be calmer and slightly warmer. The best sunset views are from the western promenade.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF05", title: "Bay of Bengal (East)", desc: "The sunrise side. Connects to Southeast Asia and the Andaman Islands. The water here is often rougher with visible swells. Sunrise View Point faces directly east over this body.", color: "bg-cyan-50 border-cyan-200" },
                { icon: "\uD83C\uDF0D", title: "Indian Ocean (South)", desc: "The deep blue expanse stretching towards Antarctica. This is what you see straight ahead from the tip. On clear days, the colour difference where the three waters merge is visible.", color: "bg-teal-50 border-teal-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── SEAFOOD IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="south indian fish thali banana leaf seafood curry rice coastal food plate"
              fallback="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&q=80"
              alt="South Indian fish thali on banana leaf at a coastal restaurant"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The fish thali at Hotel Saravana Bhavan is {"\u20B9"}120 and better than most coastal restaurants across Kerala &mdash; fresh catch, coconut curry, and rice on a banana leaf.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Doing Kanyakumari as a day trip", desc: "You\u2019ll see the tip, take a photo, and leave. You\u2019ll miss both the sunrise and sunset \u2014 which is the entire reason to come. Stay 2 nights minimum.", icon: "\u23F0" },
                { title: "Taking the ferry at 10am", desc: "Tour buses arrive by 10am. The queue for the Vivekananda Rock ferry can hit 2 hours. Go at 8am when the ferry starts \u2014 you\u2019ll walk straight on.", icon: "\u26F4\uFE0F" },
                { title: "Skipping Padmanabhapuram Palace", desc: "Most tourists don\u2019t know it exists. It\u2019s 65 km away but it\u2019s one of the finest wooden palaces in Asia. The carved ceilings and 400-year-old murals are extraordinary. Don\u2019t miss it.", icon: "\uD83C\uDFDB\uFE0F" },
                { title: "Swimming at the tip", desc: "The currents where three oceans meet are dangerously strong. People drown here regularly. Wade ankle-deep at best. The beach north of town is safer but still rough.", icon: "\uD83C\uDF0A" },
                { title: "Visiting on a Tuesday", desc: "The Vivekananda Rock Memorial and Thiruvalluvar Statue are both closed on Tuesdays. Plan around this or you\u2019ll waste a ferry trip.", icon: "\uD83D\uDCC5" },
                { title: "Only eating at tourist restaurants", desc: "The waterfront restaurants overcharge by 40\u201360%. Walk one street back for local mess shops serving fish thali for \u20B9100\u2013120 instead of \u20B9250.", icon: "\uD83C\uDF5B" },
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
                { icon: "\uD83C\uDF05", title: "The Sunrise Spot", desc: "The best sunrise viewpoint is near Gandhi Memorial at the tip. Get there 20 minutes before sunrise. Bring a light jacket \u2014 the ocean breeze is surprisingly cold at dawn.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF15", title: "Full Moon Nights", desc: "During Chitra Pournami (April full moon), you can see the moon rising over the Bay of Bengal while the sun sets over the Arabian Sea simultaneously. It\u2019s a rare astronomical event visible only from Kanyakumari.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDEA2", title: "Ferry Strategy", desc: "Buy the ferry ticket early and go to Vivekananda Rock first (it\u2019s farther). Walk back to Thiruvalluvar Statue. This way you avoid doubling back. Same ticket covers both stops.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDC5A", title: "Dress Code for Temples", desc: "Kumari Amman Temple and Suchindram Temple require covered shoulders and knees. Carry a light shawl. Shoes must be removed \u2014 the stone gets hot after 10am.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDE95", title: "Getting There", desc: "Trivandrum airport is 85 km (2 hours by cab, \u20B91,500\u20132,000). Train to Kanyakumari station is the most scenic option. Buses from Madurai (6 hours) and Chennai (12 hours) run frequently.", color: "bg-cyan-50 border-cyan-200" },
                { icon: "\uD83D\uDCC6", title: "Best Month by Month", desc: "Oct\u2013Nov \u2713 best value, clear skies | Dec\u2013Jan \u2713 best weather, festival season | Feb\u2013Mar \u2713 sweet spot | Apr \u26A0\uFE0F hot but Chitra Pournami | May\u2013Sep \uD83C\uDF27\uFE0F monsoon, rough seas, ferry cancellations", color: "bg-cyan-50 border-cyan-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Kanyakumari"
            hotels={[
              { name: "Hotel Sea View", type: "Budget \u00B7 Waterfront", price: "From \u20B9800/night", rating: "3", badge: "Budget pick", url: "https://www.booking.com/hotel/in/sea-view-kanyakumari.html?aid=2820480" },
              { name: "Sparsa Resort", type: "Comfortable \u00B7 Sea View", price: "From \u20B94,000/night", rating: "4", badge: "Top pick", url: "https://www.booking.com/hotel/in/sparsa-resort-kanyakumari.html?aid=2820480" },
              { name: "Hotel Tri Sea", type: "Mid-range \u00B7 Central", price: "From \u20B92,000/night", rating: "3", badge: "Value", url: "https://www.booking.com/hotel/in/tri-sea-kanyakumari.html?aid=2820480" },
            ]}
            activities={[
              { name: "Vivekananda Rock + Thiruvalluvar Ferry", duration: "3 hours", price: "From \u20B969/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=kanyakumari&partner_id=PSZA5UI" },
              { name: "Padmanabhapuram Palace Day Trip", duration: "5 hours", price: "From \u20B91,500/cab", badge: "Heritage", url: "https://www.getyourguide.com/s/?q=kanyakumari&partner_id=PSZA5UI" },
              { name: "Suchindram Temple Visit", duration: "2 hours", price: "From \u20B9500/cab", url: "https://www.getyourguide.com/s/?q=kanyakumari&partner_id=PSZA5UI" },
              { name: "Full Day Kanyakumari Heritage Tour", duration: "8 hours", price: "From \u20B92,000/person", url: "https://www.getyourguide.com/s/?q=kanyakumari&partner_id=PSZA5UI" },
            ]}
            pdfProductId="kanyakumari-2-days-pdf"
          />

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/55 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Kanyakumari itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Kanyakumari Trip {"\u2192"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"\u2192"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Kanyakumari?", a: "2 days is ideal. Day 1 covers the sunrise, Vivekananda Rock Memorial, Thiruvalluvar Statue, Triveni Sangam and sunset. Day 2 covers Padmanabhapuram Palace, Our Lady of Ransom Church, and Suchindram Temple. A single day trip misses the sunrise and sunset \u2014 which is the entire reason to visit." },
                { q: "What is the best time to visit Kanyakumari?", a: "October to March is best \u2014 pleasant weather (24\u201330\u00B0C), clear skies for sunrise and sunset, and calm seas for the ferry. April has the spectacular Chitra Pournami full-moon event. June\u2013September brings monsoon with rough seas and possible ferry cancellations." },
                { q: "How much does a 2-day Kanyakumari trip cost?", a: "Budget solo: \u20B93,500\u2013\u20B94,000 including accommodation. Comfortable plan for two: \u20B95,000\u2013\u20B912,000 including sea-view hotel, Padmanabhapuram Palace trip and better restaurants. Kanyakumari is very affordable." },
                { q: "Can you see sunrise and sunset from the same spot?", a: "Yes \u2014 Kanyakumari is the only place in mainland India where this is possible. The tip faces south, so the sun rises over the Bay of Bengal to your left and sets over the Arabian Sea to your right. The Sunrise View Point near Gandhi Memorial works for both." },
                { q: "How do I get to Vivekananda Rock Memorial?", a: "Ferry from the Kanyakumari terminal every 30 minutes. \u20B969 round trip, 5 minutes each way. Go at 8am when the ferry starts to avoid tour-bus queues. Closed Tuesdays. Same ticket covers both Vivekananda Rock and Thiruvalluvar Statue." },
                { q: "Is Padmanabhapuram Palace worth the 65 km trip?", a: "Absolutely. One of the finest wooden palaces in Asia with original 16th-century murals, carved rosewood ceilings, and a medicine room with 400-year-old herbal preparations. \u20B920 entry for Indians. Closed Mondays. Budget 2\u20133 hours including travel." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Exploring More of South India?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Madurai \u2014 2 Day Temple Trail", href: "/blog/madurai-2-days", soon: false },
                { label: "Pondicherry \u2014 3 Day Guide", href: "/blog/pondicherry-3-days", soon: false },
                { label: "Kerala Backwaters \u2014 5 Day Guide", href: "/blog/kerala-5-days", soon: false },
                { label: "Browse All India Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon \u2192" : "View \u2192"}</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="kanyakumari-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
