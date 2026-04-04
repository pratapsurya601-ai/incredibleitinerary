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

const LOMBOK_TOC = [
  { id: "plans",      emoji: "\u26A1", label: "Which Plan Are You?" },
  { id: "visa",       emoji: "\uD83D\uDCCB", label: "Visa & Entry" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",     emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "mistakes",   emoji: "\u274C", label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "\uD83D\uDCA1", label: "Pro Tips" },
  { id: "faq",        emoji: "\u2753", label: "FAQ" },
];

/* ── Reading-progress bar ─────────────────────────────────────────────── */
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
      <div className="h-full bg-gold transition-all duration-100" style={{ width: `${progress}%` }} />
    </div>
  );
}

/* ── Share bar ─────────────────────────────────────────────────────────── */
function ShareBar() {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      {[
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Lombok 4-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Lombok in 4 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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

/* ── Stat card ─────────────────────────────────────────────────────────── */
function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="font-serif text-lg font-light text-ink">{value}</p>
      <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  );
}

/* ── Day card ──────────────────────────────────────────────────────────── */
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

/* ── Tip card ──────────────────────────────────────────────────────────── */
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

/* ── FAQ accordion ─────────────────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors">
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-gold text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-parchment-2">
          <p className="text-sm text-muted font-light leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════════════════ */
export default function LombokClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget",    sub: "Rp250k\u2013500k/day (~$16\u201332)", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\u2728",        label: "Mid-Range", sub: "Rp600k\u20131.2M/day (~$38\u201376)", color: "border-blue-300 bg-blue-50 text-blue-800" },
    { id: "C" as const, emoji: "\uD83D\uDC8E",  label: "Luxury",   sub: "Rp1.5M+/day (~$95+)", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={LOMBOK_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Lombok" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="lombok gili islands turquoise water beach"
            alt="Crystal clear turquoise water surrounding the Gili Islands off Lombok"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Lombok 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Beach & Islands
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/30">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/30">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Lombok in 4 Days: The Complete Guide
                <em className="italic text-gold-light"> (Budget to Luxury, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, costs in IDR &amp; USD, Gili Islands logistics &mdash; and why this is Bali before the crowds found it.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE BODY ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>{"\uD83C\uDDEE\uD83C\uDDE9"} Indonesia</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDDD3"} 4 Days</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDCB0"} From Rp250k/day</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Lombok is what Bali was 20 years ago and I mean that literally &mdash; same volcanic landscape, same turquoise water, 5% of the tourists. If you&apos;re the kind of traveller who likes discovering places before everyone else does, this is your window.
            </p>
          </blockquote>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="4 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="Rp250k/day" />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="May \u2013 Sep" />
            <StatCard icon={"\u2708\uFE0F"} label="Airport" value="LOP (Praya)" />
          </div>

          {/* ── VISA & ENTRY ── */}
          <section id="visa" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCCB"} Visa &amp; Entry Info</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">Lombok is part of Indonesia. Same visa rules as Bali.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border p-5 bg-amber-50 border-amber-200">
                <h3 className="font-serif text-lg font-normal mb-3 flex items-center gap-2 text-amber-800">
                  <span>{"\uD83C\uDDEE\uD83C\uDDF3"}</span> Indian Passport Holders
                </h3>
                <div className="space-y-2">
                  {[
                    ["Free VOA", "30-day free visa on arrival at Lombok airport (LOP). No fee, no pre-application."],
                    ["Extension", "Extendable by 30 days at Mataram immigration office for Rp500,000 (~$32)."],
                    ["Documents", "Passport valid 6+ months, return ticket, proof of accommodation."],
                    ["Getting there", "Direct flights from Bali (25 min), Jakarta (2.5 hrs), Kuala Lumpur (3 hrs)."],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-2 text-xs">
                      <span className="font-medium text-ink/60 w-24 flex-shrink-0">{k}</span>
                      <span className="text-muted font-light">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border p-5 bg-teal-50 border-teal-200">
                <h3 className="font-serif text-lg font-normal mb-3 flex items-center gap-2 text-teal-800">
                  <span>{"\uD83C\uDF0D"}</span> Most Western Passports
                </h3>
                <div className="space-y-2">
                  {[
                    ["Visa-Free", "30 days visa-free for USA, UK, EU, Australia, Canada and 80+ countries."],
                    ["Extension", "Pay Rp500,000 VOA on arrival if you want to extend. Free entry cannot be extended."],
                    ["From Bali", "Fast boat Padang Bai \u2192 Lembar (4\u20135 hrs, Rp150k\u2013300k) or fly (25 min, from Rp300k)."],
                    ["Tip", "Lombok airport (LOP) is in the south. If heading to Senggigi (northwest), it\u2019s a 1.5hr drive."],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-2 text-xs">
                      <span className="font-medium text-ink/60 w-24 flex-shrink-0">{k}</span>
                      <span className="text-muted font-light">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── WHICH PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\u26A1"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your budget level &mdash; jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan {"\u2192"}</p>
                </button>
              ))}
            </div>
          </section>

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

            {/* ── PLAN A: BUDGET ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDCB0"}</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; Backpacker Lombok</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Guesthouses / homestays &middot; Rp100k&ndash;250k/night (~$6&ndash;16) &middot; Scooter: Rp70k/day (~$4)</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive, Senggigi Beach Area"
                  items={[
                    "Airport (LOP) \u2192 Senggigi: pre-book Grab or arrange hotel pickup (Rp150k\u2013250k, ~$9\u201316). Airport taxis quote Rp300k+.",
                    "Check in to guesthouse in Senggigi. Rent a scooter (Rp70k/day, ~$4).",
                    "3pm: Senggigi Beach \u2014 long stretch of grey-gold sand, calm water. Good for a first-day swim.",
                    "Walk along the coastal road to Batu Bolong Temple (free, small donation). Small Balinese Hindu temple on a rock outcrop over the sea.",
                    "Sunset from the beach road \u2014 Bali\u2019s Mount Agung is visible across the strait on clear evenings.",
                    "Dinner: Local warung on the Senggigi strip. Nasi goreng + juice: Rp30k\u201350k (~$2\u20133).",
                  ]}
                  cost="Rp250k\u2013400k (~$16\u201325) excluding accommodation" />
                <DayCard day="Day 2" title="Gili Trawangan \u2014 Snorkelling, Cycling, Sunset"
                  items={[
                    "8am: Public boat from Bangsal harbour to Gili Trawangan (Rp15k\u201320k, ~$1). Buy tickets from the OFFICIAL booth only \u2014 touts at the harbour gate will try to charge 10x.",
                    "Alternative: Fast boat from Teluk Nare (Rp85k\u2013150k, ~$5\u20139). Faster, less hassle.",
                    "Rent a bicycle on GT (Rp30k\u201350k/day, ~$2\u20133). The island is car-free. Circle the island in 1.5 hours.",
                    "Snorkelling gear rental: Rp30k\u201350k/day. Best snorkelling off the northeast coast \u2014 turtles are almost guaranteed.",
                    "3pm: Swing by the famous Gili T swings on the east coast (free, great photos at low tide).",
                    "5:30pm: Sunset from the west coast with Mount Agung as the backdrop.",
                    "Last boat back to Bangsal at 4\u20134:30pm (public) or arrange private boat (Rp150k\u2013250k). Or stay overnight on GT for Rp100k\u2013200k at a basic guesthouse.",
                  ]}
                  cost="Rp200k\u2013400k (~$13\u201325) excluding accommodation" />
                <DayCard day="Day 3" title="South Lombok \u2014 Kuta, Tanjung Aan, Mawun Beach"
                  items={[
                    "7am: Ride from Senggigi to Kuta Lombok (2\u20132.5 hrs, ~80km). This is NOT Bali\u2019s Kuta \u2014 this Kuta is a quiet fishing village with world-class beaches.",
                    "10am: Tanjung Aan Beach \u2014 two bays of powder-white sand and turquoise water. Almost empty on weekdays. Free entry.",
                    "12pm: Lunch at a beachside warung in Kuta \u2014 fresh grilled fish, Rp35k\u201360k (~$2\u20134).",
                    "2pm: Mawun Beach (20 min west of Kuta). Crescent bay, calm water, dramatic headlands. Rp10k parking.",
                    "Optional: Selong Belanak Beach (30 min west) \u2014 best beginner surf in Lombok. Board rental Rp50k/hr.",
                    "Return to Senggigi or stay overnight in Kuta area for an easier Day 4 start.",
                  ]}
                  cost="Rp200k\u2013400k (~$13\u201325) excluding accommodation" />
                <DayCard day="Day 4" title="Sendang Gile Waterfall & Departure"
                  items={[
                    "7am: Drive to Sendang Gile Waterfall near Senaru (1.5\u20132 hrs from Senggigi, 45 min from Kuta).",
                    "Sendang Gile: Rp25k entry (~$1.60). Short 15-min walk down steps. Powerful 31m waterfall in lush jungle. Swim at the base.",
                    "Bonus: Continue 30 min further to Tiu Kelep Waterfall (same ticket). More dramatic but requires river crossing \u2014 local guide recommended (Rp50k\u2013100k).",
                    "12pm: Lunch in Senaru area \u2014 simple warung, Rp25k\u201345k.",
                    "Drive to LOP airport (1.5\u20132 hrs from Senaru). Allow buffer for Lombok\u2019s slower roads.",
                  ]}
                  cost="Rp200k\u2013350k (~$13\u201322) excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 4-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">Rp1.3M\u20132.2M (~$82\u2013139) including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: MID-RANGE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\u2728"}</span>
                  <div>
                    <p className="text-sm font-medium text-blue-800">Mid-Range Plan &mdash; Comfortable Lombok</p>
                    <p className="text-xs text-blue-600 font-light">Stay: Beach hotels / villas &middot; Rp350k&ndash;800k/night (~$22&ndash;50) &middot; Private driver: Rp500k/day (~$32)</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive, Senggigi Sunset"
                  items={[
                    "Airport \u2192 Senggigi: pre-booked private driver (Rp250k\u2013350k, ~$16\u201322).",
                    "Check in to beachfront hotel. Senggigi has great mid-range value \u2014 beachfront rooms for Rp400k\u2013800k/night.",
                    "3pm: Explore Senggigi Beach. Swim, sunbathe, or walk to Batu Bolong Temple on the coast.",
                    "5:30pm: Sunset drinks at a beachfront restaurant \u2014 Bintang beer Rp30k\u201345k. Watch the sun set behind Bali\u2019s Mount Agung.",
                    "Dinner: Asmara Restaurant Senggigi \u2014 Sasak and Indonesian cuisine, Rp80k\u2013150k/person (~$5\u20139).",
                  ]}
                  cost="Rp400k\u2013650k (~$25\u201341) excluding accommodation" />
                <DayCard day="Day 2" title="Gili Trawangan \u2014 Full Day Island Experience"
                  items={[
                    "8am: Fast boat from Teluk Nare to Gili Trawangan (Rp100k\u2013150k, ~$6\u20139). Quicker and more comfortable than Bangsal.",
                    "Rent a bicycle (Rp50k/day) and explore the car-free island. Circle the island in 1.5 hours.",
                    "10am: Snorkelling trip by glass-bottom boat (Rp150k\u2013250k/person, ~$9\u201316). Visits 3 spots around all 3 Gili Islands. Turtles almost guaranteed.",
                    "1pm: Lunch at a beachfront restaurant on Gili T \u2014 Rp80k\u2013150k/person.",
                    "Afternoon: Relax on the east coast beach. Rent snorkel gear (Rp50k) and swim with turtles right off the beach.",
                    "5:30pm: Sunset cocktails on the west coast. The silhouette of Bali\u2019s volcanoes is spectacular.",
                    "Last fast boat back at 5pm, or stay overnight at a mid-range beachfront hotel (Rp400k\u2013700k).",
                  ]}
                  cost="Rp500k\u2013900k (~$32\u201357) excluding accommodation" />
                <DayCard day="Day 3" title="South Lombok \u2014 The Beaches That Change Everything"
                  items={[
                    "Private driver day: Rp500k (~$32). The south coast road has improved but a driver is worth it for comfort.",
                    "9am: Tanjung Aan Beach \u2014 twin bays, white sand, turquoise water. This is what Bali\u2019s beaches used to look like.",
                    "11am: Mawun Beach \u2014 crescent bay with dramatic headlands. Almost empty. Bring snacks \u2014 limited food options.",
                    "1pm: Lunch in Kuta Lombok town \u2014 Milk Espresso or El Bazar for good Western food (Rp60k\u2013120k), or a local warung for Rp35k\u201350k.",
                    "3pm: Selong Belanak Beach \u2014 perfect crescent of white sand. Best beginner surf spot in Lombok. Board + lesson: Rp200k (~$13).",
                    "Drive back to Senggigi or stay in Kuta area (recommended for an early Day 4).",
                  ]}
                  cost="Rp600k\u20131M (~$38\u201363) excluding accommodation" />
                <DayCard day="Day 4" title="Sendang Gile Waterfall & Departure"
                  items={[
                    "7:30am: Private driver to Senaru (1.5\u20132 hrs from Senggigi).",
                    "Sendang Gile Waterfall (Rp25k entry). 15-min walk down steps to a powerful 31m waterfall. Swim at the base.",
                    "Continue to Tiu Kelep Waterfall (30 min further, same ticket). River crossing required \u2014 hire a local guide (Rp100k, ~$6). More dramatic, fewer visitors.",
                    "11am: Lunch at a warung near Senaru with Mount Rinjani views \u2014 Rp40k\u201370k.",
                    "Drive to LOP airport (1.5\u20132 hrs). Alternatively, catch the fast boat or flight to Bali.",
                  ]}
                  cost="Rp400k\u2013700k (~$25\u201344) excluding accommodation" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-blue-700 uppercase tracking-wide">Total 4-Day Cost (per person) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">Rp3.5M\u20135.5M (~$221\u2013348) including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: LUXURY ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDC8E"}</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Luxury Plan &mdash; Private Island Lombok</p>
                    <p className="text-xs text-purple-600 font-light">Stay: Luxury resorts &middot; Rp1.5M&ndash;5M/night (~$95&ndash;317) &middot; Private driver + boat charters</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive, Luxury Senggigi or Kuta Coast"
                  items={[
                    "Airport: Private luxury transfer (Rp350k\u2013500k, ~$22\u201332). Some resorts include complimentary pickup.",
                    "Check in to Novotel Lombok, Katamaran Resort (Senggigi) or Ashtari Lombok (Kuta). Rp1.5M\u20135M/night.",
                    "Afternoon: Private sunset sailing trip along Senggigi coast (Rp1M\u20132M/person, ~$63\u2013127). Includes drinks and snacks.",
                    "Alternative: Spa afternoon at resort. Balinese/Sasak massage: Rp250k\u2013500k.",
                    "Dinner: Qunci Villas restaurant or Tugu Lombok \u2014 Rp300k\u2013500k/person (~$19\u201332). Fine Sasak cuisine.",
                  ]}
                  cost="Rp1.5M\u20132.5M (~$95\u2013158) excluding accommodation" />
                <DayCard day="Day 2" title="Private Gili Islands Day"
                  items={[
                    "8am: Private speedboat charter to Gili Islands (Rp2M\u20133.5M, ~$127\u2013221, seats up to 6). Skip the Bangsal chaos entirely.",
                    "Gili Meno first \u2014 the quietest Gili, famous for underwater statues (snorkel or freedive). Fewer tourists than Gili T.",
                    "Gili Trawangan for lunch at a beachfront restaurant (Rp150k\u2013250k/person).",
                    "Afternoon: Private snorkelling tour hitting all 3 Gilis. Turtles, reef sharks, stunning coral.",
                    "5pm: Return to Lombok. Sunset drinks at resort.",
                    "Dinner: Fresh seafood BBQ arranged by resort (Rp400k\u2013800k/person).",
                  ]}
                  cost="Rp2.5M\u20134M (~$158\u2013253) excluding accommodation" />
                <DayCard day="Day 3" title="South Coast Paradise"
                  items={[
                    "Private driver to south coast (Rp500k\u2013700k/day, ~$32\u201344).",
                    "Tanjung Aan, Mawun Beach, Selong Belanak \u2014 the three finest beaches on the island.",
                    "Lunch at Ashtari Loft \u2014 cliff-top restaurant above Kuta with panoramic views. Rp150k\u2013250k/person.",
                    "3pm: Private surf lesson at Selong Belanak (Rp300k\u2013500k/session) or spa session at a south coast boutique resort.",
                    "Return to base. Evening at leisure.",
                    "Dinner: Laut Biru or resort restaurant \u2014 Rp250k\u2013400k/person.",
                  ]}
                  cost="Rp1.5M\u20132.5M (~$95\u2013158) excluding accommodation" />
                <DayCard day="Day 4" title="Waterfalls, Mount Rinjani Views & Departure"
                  items={[
                    "7am: Private driver to Senaru. Stop at Benang Stokel twin waterfalls en route (Rp10k entry). Less touristed than Sendang Gile.",
                    "Sendang Gile + Tiu Kelep waterfalls with a local guide (Rp100k\u2013200k, ~$6\u201313).",
                    "11am: Lunch at Rinjani Lodge or a panoramic warung with volcano views \u2014 Rp100k\u2013200k.",
                    "Drive to airport. Alternatively, helicopter transfer to Bali (seasonal, from Rp15M).",
                  ]}
                  cost="Rp1M\u20131.8M (~$63\u2013114) excluding accommodation" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 4-Day Cost (per person) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">Rp12M\u201322M (~$760\u20131,392) including accommodation</span>
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
                    <th className="text-left p-3.5 text-xs font-medium text-muted">Category (4 days)</th>
                    <th className="p-3.5 text-xs font-medium text-amber-700 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-700 text-center">{"\u2728"} Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-700 text-center">{"\uD83D\uDC8E"} Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (4N)", "Rp400k\u20131M ($25\u201363)", "Rp1.4M\u20133.2M ($89\u2013203)", "Rp6M\u201320M ($380\u20131,266)"],
                    ["\uD83C\uDF5D Food & Drinks", "Rp350k\u2013600k ($22\u201338)", "Rp1M\u20131.8M ($63\u2013114)", "Rp2.5M\u20135M ($158\u2013317)"],
                    ["\uD83D\uDE97 Transport", "Rp350k\u2013600k ($22\u201338)", "Rp800k\u20131.5M ($50\u201395)", "Rp2M\u20134M ($127\u2013253)"],
                    ["\uD83C\uDFAF Activities", "Rp150k\u2013350k ($9\u201322)", "Rp500k\u20131M ($32\u201363)", "Rp1.5M\u20133M ($95\u2013190)"],
                    ["\uD83C\uDFDD\uFE0F Gili Islands", "Rp100k\u2013250k ($6\u201316)", "Rp300k\u2013600k ($19\u201338)", "Rp2M\u20133.5M ($127\u2013221)"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["Rp1.3M\u20132.2M ($82\u2013139)", "Rp3.5M\u20135.5M ($221\u2013348)", "Rp12M\u201322M ($760\u20131,392)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices IDR 2026. Exchange rate: ~Rp15,800 = $1 USD. Lombok is 20\u201340% cheaper than Bali for the same quality.
            </p>
          </section>

          {/* ── INLINE CTA ── */}
          <InlineCTA destination="Lombok" onPlanTrip={() => setModalOpen(true)} />

          {/* ── GALLERY ── */}
          <DestinationGallery
            title="Lombok &mdash; Must-See Places"
            subtitle="Click each thumbnail to explore Lombok&apos;s finest beaches, islands and waterfalls."
            spots={[
              { name: "Gili Trawangan",      query: "gili trawangan island turquoise water boats aerial lombok",       desc: "The most popular Gili Island. Car-free, turtle snorkelling, legendary sunsets with Bali's volcanoes as the backdrop." },
              { name: "Tanjung Aan Beach",    query: "tanjung aan beach lombok white sand turquoise water bay",         desc: "Twin bays of powder-white sand and crystal water. This is what Bali's beaches looked like before development." },
              { name: "Sendang Gile Waterfall", query: "sendang gile waterfall lombok jungle tropical green cascade",   desc: "A 31m waterfall near the base of Mount Rinjani. Short walk down, powerful cascade, swim at the base." },
              { name: "Mawun Beach",           query: "mawun beach lombok crescent bay clear water green hills",        desc: "A perfect crescent bay between dramatic headlands. Almost always empty. Bring your own snacks." },
              { name: "Mount Rinjani",         query: "mount rinjani lombok volcano crater lake sunrise clouds",        desc: "Indonesia's second-highest volcano with a crater lake. 2-3 day trek from Senaru. Permits required." },
            ]}
          />

          {/* ── MID-ARTICLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="gili trawangan sunset silhouette swing beach lombok"
              alt="Sunset swing on Gili Trawangan beach with Bali volcano in background"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Gili Trawangan sunset &mdash; no cars, no motorbikes, just bicycles and horse carts on an island where the biggest decision is which beach bar to watch the sun drop from.
              </p>
            </div>
          </div>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Lombok"
            hotels={[
              { name: "Kebun Kupu Kupu", type: "Budget Guesthouse \u00B7 Senggigi", price: "From Rp150k/night (~$9)", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/id/kebun-kupu-kupu.html?aid=YOUR_AFFILIATE_ID" },
              { name: "Qunci Villas", type: "Boutique Beach Hotel \u00B7 Senggigi", price: "From Rp800k/night (~$50)", rating: "5", badge: "Mid pick", url: "https://www.booking.com/hotel/id/qunci-villas-lombok.html?aid=YOUR_AFFILIATE_ID" },
              { name: "Novotel Lombok", type: "Luxury Beach Resort", price: "From Rp1.5M/night (~$95)", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/id/novotel-lombok.html?aid=YOUR_AFFILIATE_ID" },
            ]}
            activities={[
              { name: "Gili Islands Snorkelling Trip", duration: "Full day", price: "From Rp150k/person (~$9)", badge: "Must do", url: "https://www.getyourguide.com/lombok-l2654/gili/?partner_id=PSZA5UI" },
              { name: "South Lombok Beach Tour", duration: "Full day", price: "From Rp400k/person (~$25)", badge: "Scenic", url: "https://www.getyourguide.com/lombok-l2654/south-coast/?partner_id=PSZA5UI" },
              { name: "Mount Rinjani 2-Day Trek", duration: "2 days", price: "From Rp2M/person (~$127)", url: "https://www.getyourguide.com/lombok-l2654/rinjani/?partner_id=PSZA5UI" },
              { name: "Sendang Gile Waterfall Tour", duration: "Half day", price: "From Rp200k/person (~$13)", url: "https://www.getyourguide.com/lombok-l2654/waterfall/?partner_id=PSZA5UI" },
            ]}
            pdfProductId="lombok-4-days-pdf"
          />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Using Bangsal harbour without preparation", desc: "Bangsal is notorious for aggressive touts who charge 10x the real price. Buy tickets ONLY from the official booth inside. Or skip it entirely \u2014 use Teluk Nare fast boats instead.", icon: "\uD83D\uDEA2" },
                { title: "Underestimating distances", desc: "Lombok roads are slower than Bali. Senggigi to Kuta is 2\u20132.5 hrs, not 1. Senggigi to Senaru is 2 hrs. Always add 30\u201345 min buffer to Google Maps estimates.", icon: "\uD83D\uDDFA\uFE0F" },
                { title: "Skipping south Lombok", desc: "Most tourists hit the Gilis and leave. South Lombok has the best beaches on the island \u2014 Tanjung Aan, Mawun and Selong Belanak rival anything in Southeast Asia.", icon: "\uD83C\uDFD6\uFE0F" },
                { title: "Only visiting Gili Trawangan", desc: "Gili T is the party island. Gili Meno (romantic, underwater statues) and Gili Air (local feel, best food) are equally worth visiting and far less crowded.", icon: "\uD83C\uDFDD\uFE0F" },
                { title: "Not carrying cash", desc: "ATMs are scarce outside Senggigi, Mataram and Kuta. Gili Islands have ATMs but they run out regularly. Withdraw enough cash before heading to remote areas.", icon: "\uD83D\uDCB3" },
                { title: "Riding scooters on south coast without experience", desc: "The road from Senggigi to Kuta has steep curves and loose gravel in sections. It\u2019s improved but still demands respect. Hire a driver (Rp500k/day) if unsure.", icon: "\u26A0\uFE0F" },
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
                { icon: "\uD83D\uDC22", title: "Turtle Snorkelling", desc: "You don't need a boat tour to see turtles. Swim off the northeast coast of Gili T or Gili Meno and turtles appear within 50m of shore. Free. Bring your own mask.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF05", title: "Gili Sunset Spot", desc: "West coast of Gili T, any beanbag bar. Mount Agung silhouette against orange sky. Arrive 30 min before sunset to get a good spot. Bring a beer from a nearby shop (Rp25k vs Rp60k at bars).", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDFC4", title: "Surf Season", desc: "May\u2013October for the south coast. Selong Belanak is beginner-friendly year-round. Gerupuk Bay has world-class breaks (intermediate+). Board rental: Rp50k\u201380k/hr.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83E\uDD3F", title: "Best Diving", desc: "Gili Islands are one of the cheapest places in the world to get PADI certified. Open Water course: Rp4.5M\u20136M (~$285\u2013380). Fun dives: Rp500k\u2013800k. June\u2013August has best visibility.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDF36\uFE0F", title: "Sasak Food", desc: "Try ayam taliwang (spicy grilled chicken), plecing kangkung (water spinach with chili) and beberuk (raw eggplant sambal). Local warung prices: Rp20k\u201340k for a full meal.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83D\uDEB2", title: "Gili Transport", desc: "All 3 Gili Islands are car-free. Bicycles: Rp30k\u201350k/day. Horse carts (cidomo): Rp100k\u2013200k per trip. Walking the circumference: Gili T (1.5 hrs), Gili Air (1 hr), Gili Meno (45 min).", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days do you need in Lombok?", a: "4 days covers Senggigi, a Gili Island day trip, south coast beaches and a waterfall visit. 7 days lets you add Mount Rinjani trekking and explore all 3 Gili Islands properly." },
                { q: "How much does a 4-day Lombok trip cost?", a: "Budget solo: Rp1.3M\u20132.2M ($82\u2013139). Mid-range: Rp3.5M\u20135.5M ($221\u2013348). Luxury: Rp12M\u201322M ($760\u20131,392). All include accommodation, food, transport and activities." },
                { q: "How do I get to the Gili Islands?", a: "Public boat from Bangsal harbour (Rp15k\u201320k, 30 min) or fast boat from Teluk Nare (Rp85k\u2013150k, 15\u201320 min). Avoid Bangsal touts \u2014 buy from the official booth only." },
                { q: "Is Lombok better than Bali?", a: "Different, not better. Lombok is less crowded, more affordable and has better beaches. Bali has better culture, food, nightlife and infrastructure. Many travellers combine both \u2014 25-min flight." },
                { q: "Do I need a visa for Lombok?", a: "Same as Bali. Indian passports: free 30-day VOA. Western passports: 30 days visa-free. Both extendable by 30 days for Rp500,000." },
                { q: "What is the best time to visit Lombok?", a: "May\u2013September is dry season and best overall. June\u2013August is peak with best diving visibility. Shoulder months (April, October) offer fewer crowds with decent weather." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Exploring More of Indonesia?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Bali Complete \u2014 5 Day Guide", href: "/blog/bali-5-days", soon: false },
                { label: "Ubud Deep Dive \u2014 3 Day Guide", href: "/blog/ubud-3-days", soon: false },
                { label: "Bangkok \u2014 4 Day Guide", href: "/blog/bangkok-4-days", soon: false },
                { label: "Browse All Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View {"\u2192"}</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="lombok-4-days" />
          <RelatedGuides currentSlug="lombok-4-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
