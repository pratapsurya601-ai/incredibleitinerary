"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import SmartImage from "@/components/ui/SmartImage";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import RelatedGuides from "@/components/blog/RelatedGuides";
import Breadcrumb from "@/components/blog/Breadcrumb";

const VOF_TOC = [
  { id: "decision",    emoji: "\u26A1", label: "Which Plan Are You?" },
  { id: "overview",    emoji: "\uD83D\uDCCD", label: "The Trek Route" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",      emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Valley of Flowers 4-Day Trek Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Valley of Flowers 4-Day Trek Guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function ValleyOfFlowersClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("A");

  const plans = [
    { id: "A" as const, emoji: "\uD83E\uDD7E", label: "Budget Trek", sub: "Under \u20B98k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83C\uDFD5\uFE0F", label: "Comfortable", sub: "\u20B910k\u201320k", color: "border-emerald-300 bg-emerald-50 text-emerald-800" },
    { id: "C" as const, emoji: "\uD83E\uDDED", label: "Guided", sub: "\u20B920k\u201335k", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={VOF_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Valley of Flowers" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="valley of flowers uttarakhand wildflowers himalaya meadow"
            fallback="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=85"
            alt="Valley of Flowers wildflower meadow with snow-capped Himalayan peaks in Uttarakhand"
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
              <span className="text-white/70">Valley of Flowers 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Trek & Nature
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/30">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/30">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Valley of Flowers in 4 Days: Trek, Wildflowers &amp; Hemkund Sahib
                <em className="italic text-gold-light"> (Budget to Guided, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 plans with real costs, the 14km Govindghat trek route, 600+ wildflower species, Hemkund Sahib at 4,632m &mdash; and why mid-July changes everything.
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
              <span>{"\uD83C\uDDEE\uD83C\uDDF3"} Uttarakhand</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDDD3"} 4 Days</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDCB0"} From {"\u20B9"}7,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              There&apos;s a 4-day window in late July when the valley peaks &mdash; 600 species of wildflowers carpeting the meadow between glaciers. It&apos;s the most beautiful thing I&apos;ve seen in India and I&apos;ve been to 150+ places.
            </p>
          </blockquote>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83C\uDF3A"} label="Wildflower Species" value="600+" />
            <StatCard icon={"\u26F0\uFE0F"} label="Highest Point" value="4,632m" />
            <StatCard icon={"\uD83E\uDDED"} label="Trek Distance" value="14km" />
            <StatCard icon={"\uD83D\uDCC5"} label="Open Season" value="Jun\u2013Oct" />
          </div>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\u26A1"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your style &mdash; jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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

          {/* ── TREK ROUTE OVERVIEW ── */}
          <section id="overview" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCCD"} The Trek Route</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Everything starts at Govindghat on the Rishikesh&ndash;Badrinath highway. Here&apos;s the lay of the land.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Govindghat to Ghangaria", emoji: "\uD83E\uDDED", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Distance","14km (trek) or 10km + 4km jeep to Pulna"],["Elevation","1,800m \u2192 3,049m"],["Time","6\u20138 hours on foot"],["Difficulty","Moderate \u2014 steady uphill along Lakshman Ganga"]],
                  note: "The trek follows the river through deodar and birch forests. Mules are available for \u20B92,000 if you\u2019re not up for the walk. Helicopter service (\u20B93,000\u20134,500 one way) operates in good weather from Govindghat to Ghangaria." },
                { title: "Ghangaria Base Camp", emoji: "\uD83C\uDFD5\uFE0F", bg: "bg-emerald-50 border-emerald-200", th: "text-emerald-800",
                  rows: [["Elevation","3,049m"],["Role","Base for both Valley of Flowers and Hemkund Sahib"],["Stay options","GMVN guesthouse, private lodges, basic dormitories"],["Facilities","Small restaurants, medical post, charging points"]],
                  note: "This tiny settlement has no road access \u2014 everything arrives on mule-back. Book GMVN early in peak season (July). Evenings get cold (5\u201310\u00B0C even in summer). Valley of Flowers is 3.5km northwest, Hemkund Sahib is 6km southeast." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <tbody>
                        {area.rows.map(([k, v]) => (
                          <tr key={k} className="border-b border-white/50 last:border-0">
                            <td className="py-2 pr-3 font-medium text-ink whitespace-nowrap">{k}</td>
                            <td className="py-2 text-muted font-light">{v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-muted/80 font-light italic mt-3">{area.note}</p>
                </div>
              ))}
            </div>

            {/* Human voice quote */}
            <blockquote className="border-l-4 border-gold pl-6 bg-parchment/60 rounded-r-xl py-4 pr-4">
              <p className="font-serif text-[1.05rem] italic text-ink-mid leading-relaxed">
                The trek from Govindghat to Ghangaria is 14km and moderately difficult &mdash; but if you&apos;re not fit, hire a mule for {"\u20B9"}2,000. No shame in it. The valley itself is the reward, not the trek.
              </p>
            </blockquote>
          </section>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} The Itineraries</h2>
            <p className="text-sm text-muted font-light mb-6">Pick a tab below. Every plan covers 4 days from Govindghat.</p>

            {/* Plan tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`px-4 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 border ${
                    activeTab === p.id ? p.color + " shadow-sm" : "border-parchment-2 bg-white text-muted hover:border-gold"
                  }`}>
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>

            {/* Plan A — Budget Trek */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <DayCard day="Day 1" title="Govindghat to Ghangaria" items={[
                  "Start early from Govindghat (1,800m) \u2014 ideally by 7am to avoid afternoon rain",
                  "Shared jeep to Pulna (4km, \u20B950) to skip the road section and save energy",
                  "Trek 10km from Pulna to Ghangaria along Lakshman Ganga river \u2014 well-marked trail",
                  "Lunch at one of the chai shops en route (dal-chawal \u20B9100\u2013150)",
                  "Reach Ghangaria by 2\u20133pm, check into budget guesthouse (\u20B9500\u2013800/night)",
                  "Evening: rest legs, explore the tiny village, early dinner and sleep",
                ]} cost="\u20B91,000\u20131,500" />
                <DayCard day="Day 2" title="Valley of Flowers" items={[
                  "Leave by 7am for the 3.5km walk to Valley of Flowers National Park",
                  "Buy entry permit at forest checkpost (\u20B9150 for 3-day pass, Indians)",
                  "Spend 4\u20135 hours exploring the valley \u2014 Bhyundar Valley stretches 5km between glacial peaks",
                  "600+ wildflower species: brahma kamal, blue poppy, cobra lily, marsh marigold, and more",
                  "Packed lunch from Ghangaria (\u20B9100\u2013150) \u2014 no food stalls inside the park",
                  "Return to Ghangaria by 4pm before it gets cold. Same guesthouse.",
                ]} cost="\u20B9600\u2013900" />
                <DayCard day="Day 3" title="Hemkund Sahib" items={[
                  "Start by 6am for the steep 6km climb to Hemkund Sahib (4,632m)",
                  "Trail crosses glacial moraines and alpine grasslands \u2014 stunning but demanding",
                  "Hemkund Sahib Gurdwara: one of the highest Sikh shrines in the world, beside a glacial lake",
                  "Free langar (community kitchen) at the gurdwara \u2014 hot chai and food",
                  "Descend to Ghangaria by 2\u20133pm. Total trek: 12km round trip, 6\u20138 hours",
                  "Pack up, rest legs, early dinner. Final night in Ghangaria.",
                ]} cost="\u20B9400\u2013600" />
                <DayCard day="Day 4" title="Ghangaria to Govindghat" items={[
                  "Early start for the 14km descent back to Govindghat",
                  "Downhill trek takes 4\u20135 hours \u2014 easier on lungs, harder on knees",
                  "Stop at waterfalls and viewpoints along the Lakshman Ganga you missed on the way up",
                  "Reach Govindghat by noon, catch shared taxi to Joshimath (\u20B950) or onwards",
                  "Optional: break journey at Joshimath for Narsingh Temple and hot meal",
                ]} cost="\u20B9500\u2013800" />
              </div>
            )}

            {/* Plan B — Comfortable */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <DayCard day="Day 1" title="Govindghat to Ghangaria (with porter)" items={[
                  "Hire a porter at Govindghat for your heavy backpack (\u20B91,000\u20131,500 to Ghangaria)",
                  "Shared jeep to Pulna, then trek 10km with just a daypack \u2014 far more enjoyable",
                  "Stop for hot maggi and chai at trail dhabas \u2014 the masala chai at the halfway point is legendary",
                  "Check into a better lodge in Ghangaria (\u20B91,500\u20132,500/night with attached bathroom)",
                  "Hot water bucket bath, proper dinner at lodge restaurant",
                  "Brief evening walk around Ghangaria \u2014 the sunset over the peaks is free",
                ]} cost="\u20B93,000\u20134,500" />
                <DayCard day="Day 2" title="Valley of Flowers (full day)" items={[
                  "Leave by 7:30am with packed lunch from lodge (\u20B9200\u2013300)",
                  "Valley of Flowers entry permit (\u20B9150 Indian / \u20B9600 foreign)",
                  "Hire an unofficial local guide at the checkpost (\u20B9500\u2013800) for flower identification",
                  "Walk the full 5km length of Bhyundar Valley \u2014 the far end near the glacier is the quietest",
                  "Photography tip: wildflowers are most vibrant between 9am and 1pm before clouds roll in",
                  "Return by 4pm, hot soup at lodge, rest for Hemkund Sahib tomorrow",
                ]} cost="\u20B92,000\u20133,000" />
                <DayCard day="Day 3" title="Hemkund Sahib" items={[
                  "Pre-dawn start at 5:30am with headlamp \u2014 beat the pilgrim crowds",
                  "Carry energy bars, dry fruits, and 2 litres of water for the 6km ascent",
                  "The final 2km above the treeline is breathtaking: glacial moraines, snowfields, alpine lakes",
                  "Hemkund Sahib gurdwara at 4,632m beside a perfectly still glacial lake ringed by seven peaks",
                  "Free langar and rest. Take your time \u2014 altitude makes everything slower",
                  "Descend to Ghangaria, pack bags for tomorrow. Celebratory dinner at lodge.",
                ]} cost="\u20B91,500\u20132,000" />
                <DayCard day="Day 4" title="Ghangaria to Govindghat & onward" items={[
                  "Option: helicopter from Ghangaria to Govindghat (\u20B93,000\u20134,500, 5 min) if legs are done",
                  "Or trek down 14km in 4\u20135 hours \u2014 trekking poles highly recommended for the descent",
                  "Shared taxi to Joshimath, lunch at a proper restaurant after 3 days of basic food",
                  "Optional overnight in Joshimath (\u20B91,500\u20132,500) before the long drive back",
                  "Or continue to Rishikesh/Haridwar same evening via overnight bus (\u20B9800\u20131,500)",
                ]} cost="\u20B93,000\u20135,000" />
              </div>
            )}

            {/* Plan C — Guided */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <DayCard day="Day 1" title="Govindghat to Ghangaria (all-inclusive)" items={[
                  "Professional trekking guide meets you at Govindghat with full briefing",
                  "Mule for luggage included \u2014 you carry only a daypack with water and snacks",
                  "Guide sets pace, points out Himalayan birds, medicinal plants, and geological features en route",
                  "Best available lodge pre-booked in Ghangaria (\u20B92,500\u20134,000/night)",
                  "Welcome tea, acclimatisation walk, and detailed briefing for next 3 days",
                  "Group dinner with guide \u2014 they know which kitchen in Ghangaria is actually good",
                ]} cost="\u20B96,000\u20138,000" />
                <DayCard day="Day 2" title="Valley of Flowers (expert-led)" items={[
                  "Botanist-guide or trained naturalist leads you through the entire 5km valley",
                  "Identification of rare species: brahma kamal (night-blooming lotus), Himalayan blue poppy, cobra lily",
                  "Learn about the UNESCO designation and Nanda Devi Biosphere Reserve conservation efforts",
                  "Photography coaching for wildflower macro shots and landscape compositions",
                  "Full packed lunch and snacks provided. Water purification tablets included.",
                  "Extended time in the valley \u2014 guides know the quietest spots and best bloom patches",
                ]} cost="\u20B95,000\u20137,000" />
                <DayCard day="Day 3" title="Hemkund Sahib (guided ascent)" items={[
                  "Guided pace management for the 1,583m altitude gain \u2014 critical at this elevation",
                  "First aid kit and basic oxygen support carried by guide for emergencies",
                  "Cultural briefing on the significance of Hemkund Sahib in Sikh history",
                  "Guided exploration of the glacial lake and surrounding peaks (Hathi Parvat, Saptrishi)",
                  "Descent with knee-saving techniques and rest stops at optimal points",
                  "Farewell group dinner in Ghangaria. Certificates for some guided operators.",
                ]} cost="\u20B95,000\u20137,000" />
                <DayCard day="Day 4" title="Ghangaria to Govindghat (helicopter option)" items={[
                  "Helicopter transfer included in most premium packages (\u20B93,500\u20134,500)",
                  "Or guided descent with naturalist commentary on return trek",
                  "Private vehicle arranged from Govindghat to Joshimath/Rishikesh",
                  "Guide handles all logistics: permits, porters, mules, accommodation check-outs",
                  "Trip summary and photo-sharing session during the drive back",
                ]} cost="\u20B95,000\u20138,000" />
              </div>
            )}
          </section>

          {/* ── Hemkund Sahib quote ── */}
          <blockquote className="border-l-4 border-gold pl-6 mb-14 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.05rem] italic text-ink-mid leading-relaxed">
              Hemkund Sahib at 4,632m is one of the highest Sikh gurdwaras in the world. Even if you&apos;re not Sikh, the 6km climb from Ghangaria through glacial moraines is profoundly beautiful.
            </p>
          </blockquote>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-parchment">
                    <th className="p-3.5 text-xs font-semibold text-ink tracking-wide">Category</th>
                    <th className="p-3.5 text-xs font-semibold text-ink tracking-wide text-center">{"\uD83E\uDD7E"} Budget</th>
                    <th className="p-3.5 text-xs font-semibold text-ink tracking-wide text-center">{"\uD83C\uDFD5\uFE0F"} Comfortable</th>
                    <th className="p-3.5 text-xs font-semibold text-ink tracking-wide text-center">{"\uD83E\uDDED"} Guided</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "\u20B91,500\u2013\u20B92,400", "\u20B94,500\u2013\u20B97,500", "\u20B97,500\u2013\u20B912,000"],
                    ["\uD83C\uDF5D Food & Drinks", "\u20B91,200\u2013\u20B91,800", "\u20B92,000\u2013\u20B93,500", "\u20B93,000\u2013\u20B95,000"],
                    ["\uD83D\uDE90 Transport (Govindghat)", "\u20B9500\u2013\u20B9800", "\u20B9800\u2013\u20B91,500", "\u20B93,500\u2013\u20B96,000"],
                    ["\uD83E\uDDED Porter / Mule", "\u20B90 (carry own)", "\u20B91,000\u2013\u20B92,000", "\u20B92,000\u2013\u20B93,000"],
                    ["\uD83C\uDFAB Permits & Entry", "\u20B9150\u2013\u20B9200", "\u20B9150\u2013\u20B9600", "\u20B9600 (included)"],
                    ["\uD83E\uDDED Guide Fee", "\u20B90", "\u20B9500\u2013\u20B9800", "\u20B95,000\u2013\u20B98,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["\u20B97,000\u2013\u20B98,000", "\u20B910,000\u2013\u20B920,000", "\u20B920,000\u2013\u20B935,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Does not include travel to/from Govindghat. Overnight bus from Rishikesh: {"\u20B9"}800{"\u2013"}{"\u20B9"}1,500. Private car from Rishikesh: {"\u20B9"}6,000{"\u2013"}{"\u20B9"}10,000.
            </p>
          </section>

          {/* ── VALLEY IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="himalayan alpine wildflower meadow colorful blooms mountain glacier no people"
              fallback="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80"
              alt="Wildflower carpet in Valley of Flowers with glacial peaks in the background"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Mid-July in Bhyundar Valley: brahma kamal, blue poppies, and cobra lilies &mdash; 600+ species between two glaciers. UNESCO didn&apos;t exaggerate.
              </p>
            </div>
          </div>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Valley of Flowers"
            hotels={[
              { name: "GMVN Tourist Rest House Ghangaria", type: "Budget \u00B7 Ghangaria", price: "From \u20B9800/night", rating: "3.5", badge: "Budget pick", url: "https://www.booking.com/hotel/in/gmvn-ghangaria.html" },
              { name: "Hotel Kuber Annex", type: "Mid-range \u00B7 Ghangaria", price: "From \u20B91,800/night", rating: "3.5", badge: "Best value", url: "https://www.booking.com/hotel/in/kuber-annex-ghangaria.html" },
              { name: "Nanda Lokpal Palace Govindghat", type: "Comfort \u00B7 Govindghat", price: "From \u20B92,500/night", rating: "4", badge: "Pre-trek stay", url: "https://www.booking.com/hotel/in/nanda-lokpal-govindghat.html" },
            ]}
          />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Going in June expecting full bloom", desc: "The valley opens in June but peak bloom is mid-July to mid-August. Early June still has snow patches and barely 30% of the flowers. If wildflowers are the goal, wait for July.", icon: "\uD83C\uDF38" },
                { title: "Wearing regular shoes on the trail", desc: "This place is open only Jun\u2013Oct and the monsoon makes the trail slippery. Good shoes aren\u2019t optional \u2014 they\u2019re the difference between walking and crawling. Waterproof trekking boots with ankle support. Non-negotiable.", icon: "\uD83E\uDD7E" },
                { title: "Trying to do Valley + Hemkund in one day", desc: "Valley of Flowers is 7km round trip. Hemkund Sahib is 12km round trip with 1,583m elevation gain. Doing both in a day is possible but miserable. Spend separate days on each.", icon: "\u23F0" },
                { title: "Not carrying cash", desc: "No ATM in Ghangaria. No UPI at most shops. The last reliable ATM is in Joshimath (25km before Govindghat). Withdraw \u20B910,000+ before starting the trek.", icon: "\uD83D\uDCB3" },
                { title: "Skipping rain gear", desc: "This is monsoon trekking. It will rain every afternoon, sometimes every morning too. Waterproof poncho, rain cover for backpack, and zip-lock bags for electronics. Not optional.", icon: "\uD83C\uDF27\uFE0F" },
                { title: "No acclimatisation before Hemkund", desc: "Hemkund Sahib is at 4,632m. If you fly into Dehradun and rush to Ghangaria in 2 days, altitude sickness is real. Spend at least one night in Ghangaria before attempting the climb.", icon: "\u26F0\uFE0F" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* Shoes quote */}
          <blockquote className="border-l-4 border-gold pl-6 mb-14 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.05rem] italic text-ink-mid leading-relaxed">
              This place is open only Jun&ndash;Oct and the monsoon makes the trail slippery. Good shoes aren&apos;t optional &mdash; they&apos;re the difference between walking and crawling.
            </p>
          </blockquote>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\uD83C\uDF3A", title: "The 4-Day Bloom Window", desc: "Last week of July is statistically the best. The valley reaches peak colour for about 4 days, then some species start fading. If you can time it, late July is the move.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "\uD83D\uDCF7", title: "Go Deep Into the Valley", desc: "Most tourists stop 1\u20132km in and turn back. The last 2km toward the glacier has the rarest flowers and almost no people. That\u2019s the real Valley of Flowers.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "\uD83E\uDD34", title: "Hire a Mule Strategically", desc: "Mule from Govindghat to Ghangaria: \u20B92,000. Save your legs for the valley and Hemkund Sahib, which are the actual experiences. The Govindghat trek is just transport.", color: "bg-amber-50 border-amber-200" },
                { icon: "\u2615", title: "Ghangaria\u2019s Best Kept Secret", desc: "The GMVN canteen serves the cheapest and most filling meals in town. Dal-chawal-sabzi for \u20B9120. Private restaurants charge \u20B9200\u2013300 for the same thing. Budget travellers: eat at GMVN.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDFD4\uFE0F", title: "Nanda Devi Biosphere Context", desc: "Valley of Flowers sits inside the Nanda Devi Biosphere Reserve, one of the most biodiverse zones in the western Himalayas. The park has 114 species found nowhere else on Earth.", color: "bg-sky-50 border-sky-200" },
                { icon: "\uD83D\uDCC5", title: "Best Time by Month", desc: "Jun \u26A0\uFE0F snow clearing, few flowers | Jul \u2705 peak bloom starts | Aug \u2705 full bloom, lush | Sep \u2705 fewer flowers, clear views | Oct \u26A0\uFE0F closing season, dry", color: "bg-sky-50 border-sky-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/55 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Valley of Flowers itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Trek {"\u2192"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"\u2192"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What is the best time to visit Valley of Flowers?", a: "Mid-July to mid-August is peak bloom with 600+ species in full colour. The park opens in June but early season still has snow patches. September has fewer flowers but clearer mountain views and fewer trekkers. The park closes by early October." },
                { q: "How much does a 4-day Valley of Flowers trek cost?", a: "Budget trek: under \u20B98,000 for 4 days with basic guesthouses and self-catering. Comfortable with porter and better lodge: \u20B910,000\u2013\u20B920,000. Fully guided with naturalist, porter, helicopter transfer: \u20B920,000\u2013\u20B935,000 per person." },
                { q: "How difficult is the Govindghat to Ghangaria trek?", a: "Moderate difficulty. The 14km trail (or 10km from Pulna after a jeep ride) follows the Lakshman Ganga river with a steady 1,200m elevation gain. Reasonably fit people finish in 6\u20138 hours. Mules (\u20B92,000) and helicopters (\u20B93,000\u20134,500) are available for those who want to skip the trek." },
                { q: "Can I do both Valley of Flowers and Hemkund Sahib?", a: "Yes \u2014 both are accessed from Ghangaria base camp but require separate days. Valley of Flowers is 3.5km northwest (7km round trip, easy). Hemkund Sahib is 6km southeast with a punishing 1,583m climb to 4,632m. Plan at least 2 nights in Ghangaria to cover both." },
                { q: "Do I need a permit for Valley of Flowers?", a: "Yes. Indian nationals pay \u20B9150 for a 3-day pass, foreigners pay \u20B9600. Permits are available at the forest checkpost in Ghangaria \u2014 no online booking needed. Carry valid photo ID. The permit does not cover Hemkund Sahib (which is free)." },
                { q: "How do I reach Govindghat from Delhi?", a: "Delhi to Govindghat is 525km via Rishikesh\u2013Joshimath (12\u201314 hours by car). Overnight buses from Rishikesh cost \u20B9800\u2013\u20B91,500. Nearest airport: Jolly Grant, Dehradun (295km). Break the drive at Joshimath or Pipalkoti \u2014 the mountain roads need daylight and alertness." },
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
                { label: "Auli \u2014 3 Day Skiing & Snow Guide", href: "/blog/auli-3-days", soon: false },
                { label: "Rishikesh & Haridwar \u2014 3 Day Guide", href: "/blog/rishikesh-haridwar-3-days", soon: false },
                { label: "Spiti Valley \u2014 7 Day Road Trip", href: "/blog/spiti-valley-7-days", soon: false },
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

          <RelatedGuides currentSlug="valley-of-flowers-4-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
