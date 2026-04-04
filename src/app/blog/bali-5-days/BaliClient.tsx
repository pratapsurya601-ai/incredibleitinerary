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

const BALI_TOC = [
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Bali 5-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Bali in 5 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function BaliClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget",    sub: "Rp300k\u2013600k/day (~$19\u201338)", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\u2728",        label: "Mid-Range", sub: "Rp800k\u20131.5M/day (~$50\u201395)", color: "border-blue-300 bg-blue-50 text-blue-800" },
    { id: "C" as const, emoji: "\uD83D\uDC8E",  label: "Luxury",   sub: "Rp2.5M+/day (~$158+)", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BALI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Bali" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="bali uluwatu temple cliff sunset indonesia"
            alt="Uluwatu Temple perched on dramatic cliff at sunset in Bali"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Bali 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Temples & Rice Terraces
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/30">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">18 min read</span>
                <span className="text-white/30">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Bali in 5 Days: The Complete Guide
                <em className="italic text-gold-light"> (Budget to Luxury, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, costs in IDR &amp; USD, temple routes &mdash; and the mistakes that ruin most Bali trips.
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
              <span>{"\uD83D\uDDD3"} 5 Days</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDCB0"} From Rp300k/day</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Tegallalang at 6:30am before the Instagram armies arrive is a genuinely spiritual moment. By 10am it&apos;s a photoshoot queue. Set one alarm &mdash; this guide tells you exactly when to set it for every single stop.
            </p>
          </blockquote>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="5 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="Rp300k/day" />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Apr \u2013 Oct" />
            <StatCard icon={"\u2708\uFE0F"} label="Airport" value="DPS (Ngurah Rai)" />
          </div>

          {/* ── VISA & ENTRY ── */}
          <section id="visa" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCCB"} Visa &amp; Entry Info</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">Indonesia has generous visa policies for most nationalities. Here&apos;s the 2026 breakdown.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border p-5 bg-amber-50 border-amber-200">
                <h3 className="font-serif text-lg font-normal mb-3 flex items-center gap-2 text-amber-800">
                  <span>{"\uD83C\uDDEE\uD83C\uDDF3"}</span> Indian Passport Holders
                </h3>
                <div className="space-y-2">
                  {[
                    ["Free VOA", "30-day free visa on arrival at Bali airport \u2014 no fee, no pre-application needed."],
                    ["Extension", "Extendable by 30 days at immigration office for Rp500,000 (~$32). Apply 7 days before expiry."],
                    ["Documents", "Passport valid 6+ months, return ticket, proof of accommodation. No cash requirement enforced."],
                    ["Tip", "Immigration queues at DPS can be 30\u201360 min peak season. Fill in the customs e-declaration form online before landing."],
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
                    ["Visa-Free", "30 days visa-free for USA, UK, EU, Australia, Canada and 80+ countries. No fee, no pre-registration."],
                    ["Visa on Arrival", "Alternative 30-day VOA for Rp500,000 if you want to extend. Free entry cannot be extended."],
                    ["Extension", "VOA holders can extend by 30 days at immigration for Rp500,000. Visa-free entry is not extendable."],
                    ["Tip", "If staying over 30 days, pay the Rp500,000 VOA on arrival \u2014 it\u2019s the only way to extend without leaving the country."],
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
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; Ubud + South Bali</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Hostels / guesthouses &middot; Rp150k&ndash;350k/night (~$9&ndash;22) &middot; Scooter: Rp70k&ndash;80k/day (~$4&ndash;5)</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Ubud \u2014 Arrive, Rice Terraces Before the Crowds"
                  items={[
                    "Airport \u2192 Ubud: pre-book Grab/Gojek (Rp180k\u2013250k, ~$11\u201316). Airport taxi mafia charges double.",
                    "Check in, rent scooter immediately (Rp70k\u201380k/day, ~$4\u20135). Non-negotiable for budget Bali.",
                    "3pm: Tegallalang Rice Terraces (Rp25k entry, ~$1.60). Afternoon light is golden and crowds thin after 3pm.",
                    "5pm: Walk through Ubud Monkey Forest (Rp80k, ~$5). Secure your belongings \u2014 monkeys grab everything.",
                    "Dinner: Warung Biah Biah \u2014 authentic Balinese food, Rp35k\u201360k/meal (~$2\u20134). Do not eat on the main tourist strip.",
                  ]}
                  cost="Rp350k\u2013550k (~$22\u201335) excluding accommodation" />
                <DayCard day="Day 2" title="Ubud \u2014 Temples, Volcano Views, Coffee"
                  items={[
                    "6:30am: Morning yoga class at Yoga Barn (Rp130k, ~$8) or free YouTube session at your guesthouse",
                    "9am: Tirta Empul Water Temple (Rp50k entry, ~$3). Bring a sarong or rent one for Rp10k. Participate in the purification ritual \u2014 genuinely moving.",
                    "11am: Drive to Kintamani (40 min). Mount Batur volcano viewpoint is free from the roadside cafes \u2014 order a coffee (Rp25k) and enjoy the view. Skip the overpriced buffet restaurants.",
                    "1pm: Stop at a coffee plantation on the drive back. Free tastings of luwak coffee. Buy regular Bali coffee (Rp50k\u201380k/pack) \u2014 skip the overpriced luwak.",
                    "4pm: Ubud Art Market \u2014 bargain hard (start at 30% of asking price). Best for silk scarves, wooden carvings, incense.",
                    "Evening: Nasi campur at a local warung, Rp25k\u201340k (~$1.50\u20132.50)",
                  ]}
                  cost="Rp300k\u2013500k (~$19\u201332) excluding accommodation" />
                <DayCard day="Day 3" title="Uluwatu \u2014 Cliffs, Temple, Kecak Fire Dance"
                  items={[
                    "Check out of Ubud, ride to Uluwatu (1.5\u20132 hrs, stunning coastal road).",
                    "Check in to budget guesthouse in Pecatu/Uluwatu area (Rp150k\u2013250k/night).",
                    "2pm: Explore Padang Padang Beach (free entry) \u2014 small but dramatic cove.",
                    "4pm: Uluwatu Temple (Rp50k entry, ~$3). Watch the monkeys, secure sunglasses and hats.",
                    "6pm: Kecak Fire Dance at Uluwatu (Rp150k, ~$9.50). Book online or arrive 45 min early for good seats. The sunset behind the performers over the Indian Ocean is unforgettable.",
                    "Dinner at a warung in Pecatu \u2014 Rp40k\u201360k (~$2.50\u20134)",
                  ]}
                  cost="Rp400k\u2013600k (~$25\u201338) excluding accommodation" />
                <DayCard day="Day 4" title="Nusa Penida Day Trip \u2014 The Jaw-Drop Day"
                  items={[
                    "6am: Grab to Sanur harbour (Rp80k\u2013120k from Uluwatu area, ~$5\u20138).",
                    "7:30am: Fast boat to Nusa Penida (Rp150k\u2013200k return, ~$9\u201313). Book at harbour or online the night before.",
                    "Hire a scooter on Nusa Penida (Rp75k/day, ~$5) or share a driver (Rp400k\u2013500k split 2\u20134 people).",
                    "Kelingking Beach viewpoint \u2014 free. The T-Rex cliff. Climb down to the beach only if very fit (steep, no railing, 40 min each way).",
                    "Angel\u2019s Billabong \u2014 natural infinity pool on the cliff edge. Free. Swim only at low tide.",
                    "Broken Beach \u2014 dramatic natural arch, free. 5-min walk from Angel\u2019s Billabong.",
                    "4pm boat back to Sanur \u2192 return to Uluwatu/Seminyak area.",
                  ]}
                  cost="Rp500k\u2013750k (~$32\u201348) excluding accommodation" />
                <DayCard day="Day 5" title="Seminyak/Canggu \u2014 Beach Day & Departure"
                  items={[
                    "Move to Seminyak or Canggu area if not already there.",
                    "Morning: Batu Bolong Beach (Canggu) \u2014 good surf, laid-back vibe. Rent a board (Rp50k/hr, ~$3).",
                    "Brunch at Warung Local (Canggu) \u2014 Rp30k\u201350k for nasi goreng with a juice.",
                    "Afternoon: Walk Double Six Beach or Seminyak Beach. Free sunbeds if you order a drink.",
                    "5:30pm: Sunset drinks at a beach bar \u2014 Bintang beer Rp35k\u201350k.",
                    "Airport is 30\u201345 min from Seminyak. Pre-book Grab to avoid the airport taxi surcharge.",
                  ]}
                  cost="Rp250k\u2013450k (~$16\u201329) excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 5-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">Rp2.5M\u20134M (~$158\u2013253) including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: MID-RANGE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\u2728"}</span>
                  <div>
                    <p className="text-sm font-medium text-blue-800">Mid-Range Plan &mdash; Private Villas + Experiences</p>
                    <p className="text-xs text-blue-600 font-light">Stay: Boutique villas with pool &middot; Rp500k&ndash;1M/night (~$32&ndash;63) &middot; Private driver: Rp600k/day (~$38)</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Ubud \u2014 Rice Terraces & Art Galleries"
                  items={[
                    "Airport \u2192 Ubud: pre-booked private driver (Rp350k\u2013450k, ~$22\u201328). More comfortable than Grab for the 1.5hr drive.",
                    "Check in to a rice-paddy-view villa. Rp500k\u20131M/night gets you a private pool in Ubud.",
                    "3pm: Tegallalang Rice Terraces (Rp25k entry). Hire a local guide (Rp100k, ~$6) for the hidden paths most tourists miss.",
                    "5pm: ARMA Museum or Neka Art Museum (Rp80k, ~$5) \u2014 genuinely world-class Balinese art. Most visitors skip these.",
                    "7pm: Dinner at Locavore To (Rp200k\u2013350k/person, ~$13\u201322). Modern Balinese fine dining at mid-range prices.",
                  ]}
                  cost="Rp700k\u20131.1M (~$44\u201370) excluding accommodation" />
                <DayCard day="Day 2" title="Ubud \u2014 Sacred Water Temple & Volcano"
                  items={[
                    "7am: Sunrise yoga at Yoga Barn (Rp150k, ~$9.50). Book the day before \u2014 morning classes fill up.",
                    "9:30am: Tirta Empul Water Temple (Rp50k entry). Join the purification ritual \u2014 hire a guide (Rp150k) who explains the 13 fountains and their meanings.",
                    "12pm: Drive to Kintamani. Lunch at Tegukung Lakeview (Rp150k\u2013250k/person) with volcano panorama.",
                    "2pm: Tukad Cepung Waterfall (Rp20k entry, ~$1.30). Light beams through the cave roof \u2014 arrive early afternoon for best light.",
                    "5pm: Return to Ubud. Evening at leisure.",
                    "Dinner: Hujan Locale \u2014 Rp200k\u2013300k/person (~$13\u201319). Colonial-era building, modern Balinese menu.",
                  ]}
                  cost="Rp800k\u20131.3M (~$50\u201382) excluding accommodation" />
                <DayCard day="Day 3" title="Uluwatu \u2014 Cliffs, Beaches, Kecak Dance"
                  items={[
                    "Private driver Ubud \u2192 Uluwatu (Rp400k, ~$25). Stop at Tegenungan Waterfall en route (Rp20k entry).",
                    "Check in to Uluwatu-area villa (Rp600k\u20131M/night).",
                    "1pm: Lunch at Single Fin beach club (Rp150k\u2013250k/person). Clifftop views, decent food, great for photos.",
                    "3pm: Sunbathe at Padang Padang or Thomas Beach \u2014 less crowded than Dreamland.",
                    "5pm: Uluwatu Temple (Rp50k entry). Arrive before the 6pm Kecak dance (Rp150k).",
                    "The Kecak fire dance at Uluwatu with the sun setting into the Indian Ocean behind the performers is the single most atmospheric cultural performance I&apos;ve seen anywhere in Asia.",
                    "8pm: Dinner at Jimbaran Bay seafood \u2014 grilled-to-order fish on the beach (Rp200k\u2013350k/person, ~$13\u201322).",
                  ]}
                  cost="Rp1M\u20131.5M (~$63\u201395) excluding accommodation" />
                <DayCard day="Day 4" title="Nusa Penida Day Trip \u2014 Instagram\u2019s Favourite Island"
                  items={[
                    "7am: Private transfer to Sanur harbour (Rp250k, ~$16). Fast boat Rp200k\u2013300k return (~$13\u201319).",
                    "Hire a private driver on Nusa Penida (Rp600k\u2013800k/day, ~$38\u201350). Roads are rough \u2014 don\u2019t scooter unless experienced.",
                    "Kelingking Beach viewpoint. Broken Beach. Angel\u2019s Billabong. Crystal Bay for snorkelling if time allows.",
                    "Lunch at Penida Colada or Amok Sunset (Rp100k\u2013180k/person).",
                    "4pm boat back. Evening: Seminyak beach sunset with cocktails at Ku De Ta or Potato Head (Rp150k\u2013250k/drink).",
                  ]}
                  cost="Rp1.2M\u20131.8M (~$76\u2013114) excluding accommodation" />
                <DayCard day="Day 5" title="Seminyak/Canggu \u2014 Beach Clubs & Departure"
                  items={[
                    "Morning: Sleep in. Brunch at Sisterfields Seminyak (Rp120k\u2013180k/person, ~$8\u201311).",
                    "11am: Potato Head Beach Club \u2014 day pass free (minimum spend on food/drinks). Infinity pool, great music, architecturally stunning.",
                    "Canggu is overrated \u2014 the traffic is Bali\u2019s worst, the beaches are average, and the cafes charge Sydney prices. Sidemen valley is what everyone came to Bali looking for.",
                    "3pm: Last-minute shopping at Seminyak Square or Kuta Art Market for souvenirs.",
                    "5:30pm: Final sunset from Double Six Beach.",
                    "Airport: 20\u201330 min from Seminyak. Allow extra time for Bali traffic.",
                  ]}
                  cost="Rp600k\u20131M (~$38\u201363) excluding accommodation" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-blue-700 uppercase tracking-wide">Total 5-Day Cost (per person) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">Rp6.5M\u201310M (~$411\u2013633) including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: LUXURY ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDC8E"}</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Luxury Plan &mdash; World-Class Resorts & Private Experiences</p>
                    <p className="text-xs text-purple-600 font-light">Stay: 5-star resorts &middot; Rp3M&ndash;8M/night (~$190&ndash;506) &middot; Private driver + guide included</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Ubud \u2014 Jungle Villas & Private Terrace Tour"
                  items={[
                    "Airport: Private luxury transfer (Rp500k\u2013700k, ~$32\u201344). Some resorts include complimentary airport pickup.",
                    "Check in to Viceroy Bali, Four Seasons Sayan, or COMO Uma Ubud (Rp3M\u20138M/night, ~$190\u2013506).",
                    "2pm: Private guided rice terrace trek through Tegallalang \u2014 hidden paths, no crowds (Rp500k\u20131M for private guide).",
                    "5pm: Private art gallery tour with a local Ubud artist. Your hotel concierge can arrange this.",
                    "7pm: Dinner at Mozaic Ubud \u2014 Bali\u2019s most celebrated fine dining. Tasting menu Rp1.5M\u20132M/person (~$95\u2013127). Book 2 weeks ahead.",
                  ]}
                  cost="Rp3M\u20135M (~$190\u2013317) excluding accommodation" />
                <DayCard day="Day 2" title="Ubud \u2014 Spiritual Bali & Volcano Sunrise"
                  items={[
                    "Optional: 2am start for Mount Batur sunrise trek (Rp800k\u20131.2M/person, ~$50\u201376). Includes guide + breakfast at summit. Back by 10am.",
                    "Alternative: Private morning yoga session at resort spa (included at most luxury resorts).",
                    "11am: Tirta Empul private purification ceremony with temple priest (arrange through hotel, Rp500k\u20131M).",
                    "1pm: Lunch at Apurva Estate or Room4Dessert (Rp400k\u2013600k/person).",
                    "3pm: Balinese cooking class at resort (Rp500k\u2013800k, ~$32\u201350). Market visit + 4-course meal you cook yourself.",
                    "Evening: In-villa dining or Swept Away at The Samaya (riverside candlelit dinner, Rp800k\u20131.5M/person).",
                  ]}
                  cost="Rp3.5M\u20135.5M (~$221\u2013348) excluding accommodation" />
                <DayCard day="Day 3" title="Uluwatu \u2014 Clifftop Luxury & Private Kecak"
                  items={[
                    "Private transfer to Uluwatu (Rp500k, ~$32). Check in to Alila Villas Uluwatu, Bulgari Resort or Six Senses (Rp5M\u201315M/night).",
                    "12pm: Lunch at Ulu Cliffhouse \u2014 infinity pool with ocean views (Rp300k\u2013500k/person).",
                    "3pm: Private surf lesson at Padang Padang (Rp500k\u2013800k/session) or spa afternoon at resort.",
                    "5:30pm: Uluwatu Temple (Rp50k) + VIP Kecak seating (Rp150k). Even luxury travellers pay the same temple entry.",
                    "8pm: Romantic dinner at resort restaurant or private beach BBQ (arrange with concierge, Rp1M\u20132M/person).",
                  ]}
                  cost="Rp3M\u20135M (~$190\u2013317) excluding accommodation" />
                <DayCard day="Day 4" title="Nusa Penida \u2014 Private Boat & Snorkelling"
                  items={[
                    "8am: Private speedboat charter to Nusa Penida (Rp2.5M\u20134M, ~$158\u2013253, seats up to 6). No public ferry crowds.",
                    "Kelingking Beach (viewpoint only). Broken Beach. Angel\u2019s Billabong.",
                    "Private snorkelling with manta rays at Manta Point (included in most charters). Season: Sep\u2013May.",
                    "Lunch at a beachfront restaurant on Crystal Bay (Rp150k\u2013250k/person).",
                    "3pm: Return to Bali. Evening: Sunset cocktails at El Kabron (Rp200k\u2013400k/drink). Spanish-Mediterranean on the cliffs.",
                  ]}
                  cost="Rp4M\u20136M (~$253\u2013380) excluding accommodation" />
                <DayCard day="Day 5" title="Seminyak \u2014 Beach Club, Shopping & Departure"
                  items={[
                    "Morning: Spa treatment at resort or Bodyworks Seminyak (Rp500k\u20131M).",
                    "11am: Potato Head Beach Club or Finns Beach Club \u2014 cabana booking (Rp1.5M\u20133M minimum, ~$95\u2013190 food & drink credit).",
                    "2pm: Shopping at Seminyak Village or boutiques on Jl. Kayu Aya.",
                    "5pm: Final sunset from W Bali or The Legian rooftop.",
                    "Airport: 20\u201330 min from Seminyak.",
                  ]}
                  cost="Rp2.5M\u20134M (~$158\u2013253) excluding accommodation" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 5-Day Cost (per person) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">Rp30M\u201350M (~$1,900\u20133,165) including accommodation</span>
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
                    <th className="text-left p-3.5 text-xs font-medium text-muted">Category (5 days)</th>
                    <th className="p-3.5 text-xs font-medium text-amber-700 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-700 text-center">{"\u2728"} Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-700 text-center">{"\uD83D\uDC8E"} Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (5N)", "Rp750k\u20131.75M ($47\u2013110)", "Rp2.5M\u20135M ($158\u2013317)", "Rp15M\u201340M ($949\u20132,532)"],
                    ["\uD83C\uDF5D Food & Drinks", "Rp500k\u20131M ($32\u201363)", "Rp2M\u20133.5M ($127\u2013221)", "Rp5M\u201310M ($317\u2013633)"],
                    ["\uD83D\uDE97 Transport", "Rp500k\u20131M ($32\u201363)", "Rp1.5M\u20132.5M ($95\u2013158)", "Rp3M\u20135M ($190\u2013317)"],
                    ["\uD83C\uDFAF Activities", "Rp400k\u2013800k ($25\u201350)", "Rp1.5M\u20132.5M ($95\u2013158)", "Rp5M\u20138M ($317\u2013506)"],
                    ["\uD83C\uDFD6\uFE0F Nusa Penida Trip", "Rp350k\u2013600k ($22\u201338)", "Rp600k\u20131M ($38\u201363)", "Rp2.5M\u20134M ($158\u2013253)"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["Rp2.5M\u20134M ($158\u2013253)", "Rp6.5M\u201310M ($411\u2013633)", "Rp30M\u201350M ($1,900\u20133,165)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices IDR 2026. Exchange rate: ~Rp15,800 = $1 USD. Bali is one of the best value luxury destinations in the world.
            </p>
          </section>

          {/* ── INLINE CTA ── */}
          <InlineCTA destination="Bali" onPlanTrip={() => setModalOpen(true)} />

          {/* ── GALLERY ── */}
          <DestinationGallery
            title="Bali &mdash; Must-See Places"
            subtitle="Click each thumbnail to explore Bali&apos;s most iconic temples, terraces and coastline."
            spots={[
              { name: "Tegallalang Rice Terraces", query: "tegallalang rice terraces bali green paddy fields morning mist", desc: "Ubud's most iconic landscape. Arrive at 6:30am for mist and silence. By 10am it becomes an Instagram queue." },
              { name: "Uluwatu Temple",            query: "uluwatu temple bali clifftop ocean sunset stone gate",         desc: "Dramatic clifftop temple 70m above the Indian Ocean. Stay for the Kecak fire dance at sunset." },
              { name: "Kelingking Beach",           query: "kelingking beach nusa penida cliff turquoise water aerial",    desc: "The T-Rex shaped cliff on Nusa Penida. One of the most photographed spots in all of Indonesia." },
              { name: "Tirta Empul",                query: "tirta empul water temple bali sacred spring pool stone",      desc: "Sacred water temple where Balinese Hindus come for purification. Join the ritual at the 13 fountains." },
              { name: "Tanah Lot",                  query: "tanah lot temple bali sea rock sunset silhouette",            desc: "Bali's most iconic sea temple, best visited at sunset when the silhouette against the sky is spectacular." },
            ]}
          />

          {/* ── MID-ARTICLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="bali tegallalang rice terraces morning green landscape"
              alt="Tegallalang Rice Terraces at sunrise in Ubud, Bali"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Tegallalang at dawn &mdash; a thousand-year-old irrigation system called subak, UNESCO-recognised, and free to walk through at 6:30am.
              </p>
            </div>
          </div>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Bali"
            hotels={[
              { name: "Puri Garden Hotel", type: "Budget Guesthouse \u00B7 Ubud", price: "From Rp200k/night (~$13)", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/id/puri-garden-ubud.html?aid=YOUR_AFFILIATE_ID" },
              { name: "Bisma Eight", type: "Boutique Jungle Villa \u00B7 Ubud", price: "From Rp1.2M/night (~$76)", rating: "5", badge: "Mid pick", url: "https://www.booking.com/hotel/id/bisma-eight-ubud.html?aid=YOUR_AFFILIATE_ID" },
              { name: "Alila Villas Uluwatu", type: "Luxury Clifftop Resort", price: "From Rp5M/night (~$317)", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/id/alila-villas-uluwatu.html?aid=YOUR_AFFILIATE_ID" },
            ]}
            activities={[
              { name: "Nusa Penida Day Trip + Snorkelling", duration: "Full day", price: "From Rp350k/person (~$22)", badge: "Must do", url: "https://www.getyourguide.com/bali-l347/nusa-penida/?partner_id=PSZA5UI" },
              { name: "Uluwatu Kecak Fire Dance", duration: "2 hours", price: "From Rp150k/person (~$9.50)", badge: "Cultural", url: "https://www.getyourguide.com/bali-l347/kecak/?partner_id=PSZA5UI" },
              { name: "Mount Batur Sunrise Trek", duration: "8 hours", price: "From Rp500k/person (~$32)", url: "https://www.getyourguide.com/bali-l347/batur/?partner_id=PSZA5UI" },
              { name: "Ubud Rice Terrace & Temple Tour", duration: "10 hours", price: "From Rp400k/person (~$25)", url: "https://www.getyourguide.com/bali-l347/ubud-tour/?partner_id=PSZA5UI" },
            ]}
            pdfProductId="bali-5-days-pdf"
          />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Staying only in Kuta", desc: "Kuta is noisy, overdeveloped and not representative of Bali at all. It's fine for one night near the airport. Stay in Ubud, Uluwatu or Canggu instead.", icon: "\uD83C\uDFE8" },
                { title: "Visiting Tegallalang after 9am", desc: "By 10am it's a photoshoot queue with swing operators shouting at you. Arrive at 6:30am or after 4pm for golden light and actual peace.", icon: "\uD83C\uDF3E" },
                { title: "Not renting a scooter", desc: "Bali without a scooter is 3x more expensive and half as flexible. Rental is Rp70k\u201380k/day (~$4\u20135). Get an international driving permit before you go.", icon: "\uD83D\uDEF5" },
                { title: "Scootering Nusa Penida without experience", desc: "Roads are steep, unpaved and have no barriers. Serious accidents happen weekly. Hire a driver (Rp600k\u2013800k/day) unless you're an experienced rider.", icon: "\u26A0\uFE0F" },
                { title: "Eating only on Jl. Monkey Forest", desc: "Tourist-strip warungs charge 3x local prices. Walk 200m off any main road and a full nasi campur is Rp25k\u201340k (~$1.50\u20132.50) instead of Rp80k+.", icon: "\uD83C\uDF5C" },
                { title: "Skipping Sidemen Valley", desc: "Most tourists hit Ubud, Uluwatu and Canggu. Sidemen has the same rice terraces, Mount Agung views and zero crowds. If you have 7 days, spend 2 there.", icon: "\uD83C\uDFDE\uFE0F" },
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
                { icon: "\uD83C\uDF05", title: "The 6:30am Rule", desc: "Every major Bali attraction is completely different before 7am. Tegallalang, Campuhan Ridge, Tirta Empul \u2014 arrive at opening for the Bali that actually exists beyond Instagram.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDCB1", title: "Cash is King", desc: "Carry Rupiah for warungs, temples, parking. ATMs charge Rp30k\u201350k fee. Best rates at licensed money changers in Ubud or Seminyak (NOT the airport).", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83E\uDDF3", title: "Pack a Sarong", desc: "Required at every temple. Buy one at any market for Rp30k\u201350k (~$2\u20133). Renting at temples costs Rp10k\u201320k each time and they're shared.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDCF1", title: "Grab > Gojek > Taxi", desc: "Grab and Gojek are 50\u201370% cheaper than metered taxis. Airport pickups require walking to the car park exit. Download both apps before you land.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDF0A", title: "Wet Season Isn\u2019t Bad", desc: "Nov\u2013Mar rain comes in short 1\u20132 hour bursts. Prices drop 30\u201350%, rice terraces are at their greenest, and waterfalls are at full power. Pack a light rain jacket.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83D\uDE4F", title: "Respect Nyepi", desc: "Bali\u2019s Day of Silence (March) means no lights, no travel, no noise for 24 hours. Check dates before booking \u2014 the airport closes. The night before (Ogoh-Ogoh parades) is spectacular.", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days do you need in Bali?", a: "5 days is ideal to cover Ubud (2 nights), Uluwatu (2 nights) and a Nusa Penida day trip. 3 days works if you pick either Ubud or the south coast. 7\u201310 days lets you add Sidemen, Amed or the Gili Islands." },
                { q: "How much does a 5-day Bali trip cost?", a: "Budget solo: Rp2.5M\u20134M ($158\u2013253). Mid-range: Rp6.5M\u201310M ($411\u2013633). Luxury: Rp30M\u201350M ($1,900\u20133,165). All include accommodation, food, transport and activities." },
                { q: "What is the best time to visit Bali?", a: "April\u2013October is dry season and best overall. May\u2013June and September offer best value. July\u2013August is peak season with highest prices. Nov\u2013March is wet season but still warm, with lower prices and the greenest landscapes." },
                { q: "Do I need a visa for Bali?", a: "Indian passport holders get a free 30-day visa on arrival. Most Western passports (USA, UK, EU, Australia) also get 30 days visa-free. Both can extend by 30 days at immigration for Rp500,000." },
                { q: "Is Ubud or Seminyak better?", a: "Ubud for culture, terraces, yoga and spiritual experiences. Seminyak/Canggu for beach clubs, surfing and nightlife. Best approach: split your time \u2014 2\u20133 nights Ubud, then move south." },
                { q: "Is Nusa Penida worth a day trip?", a: "Absolutely. Kelingking Beach, Angel\u2019s Billabong and Broken Beach are among the most dramatic coastal scenery in Southeast Asia. Fast boat from Sanur takes 30\u201345 minutes." },
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
                { label: "Ubud Deep Dive \u2014 3 Day Guide", href: "/blog/ubud-3-days", soon: false },
                { label: "Lombok \u2014 4 Day Island Guide", href: "/blog/lombok-4-days", soon: false },
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

          <CombineWith currentSlug="bali-5-days" />
          <RelatedGuides currentSlug="bali-5-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
