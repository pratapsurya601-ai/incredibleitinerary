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
import { usePageUrl } from "@/lib/hooks";

const UBUD_TOC = [
  { id: "plans",      emoji: "⚡", label: "Which Plan Are You?" },
  { id: "visa",       emoji: "\uD83D\uDCCB", label: "Visa & Entry" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",     emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "mistakes",   emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "\uD83D\uDCA1", label: "Pro Tips" },
  { id: "faq",        emoji: "❓", label: "FAQ" },
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
  const pageUrl = usePageUrl();
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      {[
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Ubud 3-Day Itinerary&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Ubud in 3 Days guide&url=${pageUrl}` },
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

/* ── Tip card ──────────────────────────────────────────────────────────── */
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

/* ── FAQ accordion ─────────────────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors">
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
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
export default function UbudClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget",      sub: "Rp250k–500k/day (~$16–32)", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "✨",        label: "Comfortable", sub: "Rp600k–1.2M/day (~$38–76)", color: "border-blue-300 bg-blue-50 text-blue-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={UBUD_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Ubud" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="ubud rice terraces green valley bali"
            alt="Lush green rice terraces cascading through Ubud valley in Bali"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Ubud 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Culture & Wellness
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Ubud in 3 Days: The Complete Guide
                <em className="italic text-gold-light"> (Budget &amp; Comfortable, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                2 complete plans with real timings, costs in IDR &amp; USD, temple routes &mdash; and the Ubud that still exists if you wake up early enough.
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
              <span>{"·"}</span>
              <span>{"\uD83D\uDDD3"} 3 Days</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDCB0"} From Rp250k/day</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Campuhan Ridge Walk at 6am with mist rolling through the valley &mdash; this is the Ubud that Elizabeth Gilbert wrote about and it still exists if you wake up early enough.
            </p>
          </blockquote>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="3 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="Rp250k/day" />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Apr – Oct" />
            <StatCard icon={"\u2708\uFE0F"} label="Nearest Airport" value="DPS (1.5 hrs)" />
          </div>

          {/* ── VISA & ENTRY ── */}
          <section id="visa" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCCB"} Visa &amp; Entry Info</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">Ubud is in Bali, Indonesia. Same visa rules apply.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border p-5 bg-amber-50 border-amber-200">
                <h3 className="font-serif text-lg font-normal mb-3 flex items-center gap-2 text-amber-800">
                  <span>{"\uD83C\uDDEE\uD83C\uDDF3"}</span> Indian Passport Holders
                </h3>
                <div className="space-y-2">
                  {[
                    ["Free VOA", "30-day free visa on arrival at Bali airport. No fee, no pre-application."],
                    ["Extension", "Extendable by 30 days at immigration for Rp500,000 (~$32)."],
                    ["Documents", "Passport valid 6+ months, return ticket, proof of accommodation."],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-2 text-xs">
                      <span className="font-medium text-ink/80 w-24 flex-shrink-0">{k}</span>
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
                    ["Tip", "Carry a printed return ticket — airlines sometimes check before boarding."],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-2 text-xs">
                      <span className="font-medium text-ink/80 w-24 flex-shrink-0">{k}</span>
                      <span className="text-muted font-light">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── WHICH PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your comfort level &mdash; jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan {"→"}</p>
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
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; Backpacker Ubud</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Hostels / guesthouses &middot; Rp100k&ndash;250k/night (~$6&ndash;16) &middot; Scooter: Rp70k/day (~$4)</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Monkey Forest, Ubud Palace & Art Market"
                  items={[
                    "Airport → Ubud: pre-book Grab (Rp180k–250k, ~$11–16). Takes 1.5 hrs. Airport taxis charge double.",
                    "Check in, rent a scooter (Rp70k/day, ~$4). Walk to Ubud Monkey Forest (Rp80k entry, ~$5). Spend 1.5 hours. Secure all loose items — monkeys are fast.",
                    "3pm: Ubud Royal Palace (free, exterior only). Walk across the road to Ubud Art Market — bargain hard (start at 30% of asking). Good for silk, incense, wooden carvings.",
                    "5pm: Drop-in yoga class at Yoga Barn (Rp130k, ~$8) or Radiantly Alive (Rp120k). Book online for popular evening sessions.",
                    "Dinner: Warung Biah Biah — traditional Balinese set meal, Rp35k–50k (~$2–3). The real deal.",
                  ]}
                  cost="Rp350k–500k (~$22–32) excluding accommodation" />
                <DayCard day="Day 2" title="Tegallalang, Tirta Empul & Coffee Plantation"
                  items={[
                    "6:30am: Ride to Tegallalang Rice Terraces (Rp25k entry, ~$1.60). At this hour the mist is still rolling through and you’ll have the paths largely to yourself. By 10am it’s an Instagram photoshoot queue.",
                    "8:30am: Coffee plantation stop on the way back (free tasting). Buy regular Bali coffee Rp50k–80k/pack — skip the luwak coffee (overpriced, ethically questionable).",
                    "10am: Tirta Empul Water Temple (Rp50k entry, ~$3). Bring or rent a sarong (Rp10k). Participate in the purification ritual at the 13 fountains — genuinely moving experience.",
                    "1pm: Lunch at Warung Tepi Sawah — rice paddy views, local prices. Nasi goreng Rp30k–45k.",
                    "3pm: Optional — Tukad Cepung Waterfall (Rp20k entry). Light beams through cave roof, spectacular early afternoon.",
                    "Evening: Explore Jl. Goutama side streets for cheap warungs and local bars.",
                  ]}
                  cost="Rp250k–450k (~$16–29) excluding accommodation" />
                <DayCard day="Day 3" title="Campuhan Ridge Walk at Dawn, Museum & Departure"
                  items={[
                    "5:45am: Walk to Campuhan Ridge Walk trailhead (starts behind Warwick Ibah hotel). The 2km ridge path between two river valleys with mist rolling through is peak Ubud. Back by 7:30am.",
                    "8am: Breakfast at Alchemy Raw Vegan Caf\u00e9 (Rp40k–70k) or local warung.",
                    "10am: Neka Art Museum (Rp80k, ~$5) or ARMA Museum (Rp80k). Genuinely world-class Balinese and Indonesian art. Most visitors skip these — don’t.",
                    "12pm: Last shopping on Jl. Monkey Forest or Jl. Hanoman. Haggle.",
                    "2pm: Head to airport or next destination. Ubud to DPS airport is 1.5–2 hrs depending on traffic.",
                  ]}
                  cost="Rp200k–350k (~$13–22) excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">Rp1.1M–1.8M (~$70–114) including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: COMFORTABLE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">{"✨"}</span>
                  <div>
                    <p className="text-sm font-medium text-blue-800">Comfortable Plan &mdash; Boutique Ubud</p>
                    <p className="text-xs text-blue-600 font-light">Stay: Rice-paddy-view villa with pool &middot; Rp400k&ndash;1M/night (~$25&ndash;63) &middot; Private driver: Rp500k/day (~$32)</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Monkey Forest, Royal Palace & Evening Yoga"
                  items={[
                    "Airport → Ubud: pre-booked private driver (Rp350k–450k, ~$22–28). More comfortable than Grab for 1.5hrs.",
                    "Check in to a rice-paddy-view villa. Rp500k–1M/night gets you a private pool in Ubud — extraordinary value.",
                    "2pm: Ubud Monkey Forest (Rp80k). Hire a local guide (Rp100k) who explains the temple significance.",
                    "4pm: Ubud Royal Palace (free) + walk through Ubud Art Market with purpose — buy gifts here, prices are better than the south.",
                    "5:30pm: Sunset yoga at Yoga Barn (Rp150k, ~$9.50). Book the day before for the popular evening classes.",
                    "7:30pm: Dinner at Locavore To — modern Balinese fine dining (Rp200k–350k/person, ~$13–22). Reservation recommended.",
                  ]}
                  cost="Rp600k–950k (~$38–60) excluding accommodation" />
                <DayCard day="Day 2" title="Tegallalang, Tirta Empul & Kintamani Volcano"
                  items={[
                    "6:30am: Private driver to Tegallalang Rice Terraces (Rp25k entry). Hire a local guide (Rp100k, ~$6) for the hidden paths — they know viewpoints that aren’t on any map.",
                    "9am: Tirta Empul Water Temple (Rp50k). Your guide can arrange a private purification ceremony with a temple priest (Rp200k–300k) — far more meaningful than the public queue.",
                    "11am: Drive to Kintamani. Lunch at a restaurant with Mount Batur volcano views (Rp150k–250k/person, ~$9–16). Spectacular on a clear day.",
                    "1pm: Stop at a coffee plantation (free tasting). Buy Bali coffee, skip the luwak marketing.",
                    "3pm: Optional — Tukad Cepung Waterfall (Rp20k). Cave waterfall with light beams, best early afternoon.",
                    "Evening: Balinese cooking class at Paon Bali (Rp400k–500k, ~$25–32). Market visit + 5-course meal you cook yourself. Excellent.",
                  ]}
                  cost="Rp800k–1.2M (~$50–76) excluding accommodation" />
                <DayCard day="Day 3" title="Campuhan Ridge at Dawn, Museum & Farewell"
                  items={[
                    "5:45am: Campuhan Ridge Walk. The 2km path between river valleys with morning mist is transcendent. Back by 7:30am.",
                    "8am: Brunch at Sari Organik — rice paddy walk to get there (15 min). Organic Balinese breakfast with valley views (Rp60k–100k).",
                    "10am: Neka Art Museum (Rp80k) — Balinese art from the 1930s to contemporary. Budget 1.5 hours.",
                    "12pm: Last-minute shopping or spa session. Balinese massage: Rp100k–200k/hour (~$6–13) — fraction of what you’d pay anywhere else.",
                    "2pm: Depart for airport or next Bali destination.",
                  ]}
                  cost="Rp400k–700k (~$25–44) excluding accommodation" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-blue-700 uppercase tracking-wide">Total 3-Day Cost (per person) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">Rp3M–5M (~$190–317) including accommodation</span>
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
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category (3 days)</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">{"✨"} Comfortable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "Rp300k–750k ($19–47)", "Rp1.2M–3M ($76–190)"],
                    ["\uD83C\uDF5D Food & Drinks", "Rp300k–500k ($19–32)", "Rp800k–1.5M ($50–95)"],
                    ["\uD83D\uDE97 Transport", "Rp250k–400k ($16–25)", "Rp600k–1M ($38–63)"],
                    ["\uD83C\uDFAF Activities", "Rp300k–500k ($19–32)", "Rp600k–1.2M ($38–76)"],
                    ["\uD83E\uDDD8 Yoga / Wellness", "Rp130k–260k ($8–16)", "Rp300k–500k ($19–32)"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["Rp1.1M–1.8M ($70–114)", "Rp3M–5M ($190–317)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices IDR 2026. Exchange rate: ~Rp15,800 = $1 USD. Ubud is one of the world&apos;s best-value cultural destinations.
            </p>
          </section>

          {/* ── INLINE CTA ── */}
          <InlineCTA destination="Ubud" onPlanTrip={() => setModalOpen(true)} />

          {/* ── GALLERY ── */}
          <DestinationGallery
            title="Ubud &mdash; Must-See Places"
            subtitle="Click each thumbnail to explore Ubud&apos;s most iconic temples, terraces and jungle paths."
            spots={[
              { name: "Campuhan Ridge Walk",       query: "campuhan ridge walk ubud bali misty morning green valley path", desc: "A 2km ridge path between two river valleys. Arrive at 6am for mist and complete silence. Peak Ubud." },
              { name: "Tegallalang Rice Terraces",  query: "tegallalang rice terraces bali green paddy fields morning",     desc: "Ubud's most iconic landscape. The thousand-year-old subak irrigation system is UNESCO-recognised." },
              { name: "Tirta Empul Temple",          query: "tirta empul water temple bali sacred spring stone pool",        desc: "Sacred water temple where Balinese come for purification. Join the ritual at the 13 holy fountains." },
              { name: "Ubud Monkey Forest",          query: "ubud monkey forest bali stone temple jungle moss trees",        desc: "Sacred sanctuary with 700+ macaques and three ancient temples. Budget 1.5 hours, secure all belongings." },
              { name: "Tukad Cepung Waterfall",      query: "tukad cepung waterfall bali cave light beam water rocks",       desc: "Hidden cave waterfall where light beams pierce through the roof. Best visited early afternoon for light." },
            ]}
          />

          {/* ── MID-ARTICLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="campuhan ridge walk ubud bali sunrise misty green"
              alt="Campuhan Ridge Walk at dawn with mist rolling through the valley"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Campuhan Ridge Walk at 6am &mdash; the Ubud that travel writers don&apos;t want crowded. Set one alarm.
              </p>
            </div>
          </div>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Ubud"
            hotels={[
              { name: "Puri Garden Hotel", type: "Budget Guesthouse · Central Ubud", price: "From Rp200k/night (~$13)", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/id/puri-garden-ubud.html?aid=2820480" },
              { name: "Bisma Eight", type: "Boutique Jungle Villa · Ubud", price: "From Rp1.2M/night (~$76)", rating: "5", badge: "Best value", url: "https://www.booking.com/hotel/id/bisma-eight-ubud.html?aid=2820480" },
              { name: "Four Seasons Sayan", type: "Luxury Jungle Resort", price: "From Rp5M/night (~$317)", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/id/four-seasons-sayan.html?aid=2820480" },
            ]}
            activities={[
              { name: "Tegallalang Terraces & Temple Tour", duration: "8 hours", price: "From Rp400k/person (~$25)", badge: "Must do", url: "https://www.getyourguide.com/s/?q=bali&partner_id=PSZA5UI" },
              { name: "Balinese Cooking Class", duration: "5 hours", price: "From Rp400k/person (~$25)", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=bali&partner_id=PSZA5UI" },
              { name: "Mount Batur Sunrise Trek", duration: "8 hours", price: "From Rp500k/person (~$32)", url: "https://www.getyourguide.com/s/?q=bali&partner_id=PSZA5UI" },
            ]}
            pdfProductId="ubud-3-days-pdf"
          />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting Tegallalang after 9am", desc: "The terraces become a photoshoot queue by 10am with swing operators shouting. Arrive at 6:30am for mist, silence and the real Bali.", icon: "\uD83C\uDF3E" },
                { title: "Eating only on Jl. Monkey Forest", desc: "The main tourist strip charges 3x local prices. Walk 200m off any main road and a full nasi campur is Rp25k–40k instead of Rp80k+.", icon: "\uD83C\uDF5C" },
                { title: "Skipping the museums", desc: "Neka Art Museum and ARMA hold genuinely world-class Balinese art. Most tourists walk right past them. Budget 1.5 hours each.", icon: "\uD83C\uDFA8" },
                { title: "Booking taxis instead of Grab", desc: "Airport and street taxis charge 2–3x Grab/Gojek prices. Download both apps before landing. For day trips, hire a private driver (Rp500k–600k/day).", icon: "\uD83D\uDE95" },
                { title: "Not bringing a sarong", desc: "Required at every temple. Buy one at any market for Rp30k–50k. Renting at temples costs Rp10k–20k each time and they're shared.", icon: "\uD83E\uDDF3" },
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
                { icon: "\uD83C\uDF05", title: "The 6am Rule", desc: "Campuhan Ridge Walk, Tegallalang, Tirta Empul — every major Ubud attraction is a completely different (and better) experience before 7am. Set one alarm.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDCB1", title: "Cash for Warungs", desc: "Most local warungs are cash-only. ATMs in central Ubud charge Rp30k–50k fee. Withdraw large amounts or use licensed money changers on Jl. Raya Ubud.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83E\uDDD8", title: "Yoga Drop-ins", desc: "Yoga Barn and Radiantly Alive offer drop-in classes from Rp120k–150k ($8–10). Multi-class packages are cheaper. Book online for popular morning/sunset slots.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDC86", title: "Massage Prices", desc: "A 1-hour Balinese massage in Ubud costs Rp80k–200k ($5–13). That’s a fraction of what the same quality costs anywhere else in the world. Book a session every day.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDF27\uFE0F", title: "Wet Season Advantage", desc: "Nov–Mar rain comes in short bursts. Rice terraces are at their greenest, waterfalls at full power, and prices drop 30–50%. Pack a light rain jacket.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83D\uDEB2", title: "Cycling Ubud", desc: "Rent a bicycle (Rp40k–60k/day) for central Ubud. The town itself is walkable but a bike lets you reach the rice paddies and Campuhan without a scooter.", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Ubud?", a: "3 days covers all the highlights: Monkey Forest, rice terraces, temples, Campuhan Ridge Walk and a museum visit. 5 days lets you add Mount Batur sunrise trek, cooking classes and deeper wellness immersion." },
                { q: "How much does a 3-day Ubud trip cost?", a: "Budget solo: Rp1.1M–1.8M ($70–114). Comfortable: Rp3M–5M ($190–317). Both include accommodation, food, transport and activities." },
                { q: "What is the best time to visit Ubud?", a: "April–October is dry season and best overall. May–June offers best value. Nov–March is wet season but the terraces are greenest and prices drop 30–50%." },
                { q: "Do I need a visa for Ubud / Bali?", a: "Indian passports: free 30-day visa on arrival. Western passports: 30 days visa-free. Both extendable by 30 days at immigration for Rp500,000." },
                { q: "Is Ubud safe for solo travellers?", a: "Very safe. Main concerns are scooter accidents (wear a helmet) and monkeys stealing belongings at the Monkey Forest. Crime against tourists is extremely rare." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Exploring More of Bali &amp; Indonesia?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Bali Complete — 5 Day Guide", href: "/blog/bali-5-days", soon: false },
                { label: "Lombok — 4 Day Island Guide", href: "/blog/lombok-4-days", soon: false },
                { label: "Bangkok — 4 Day Guide", href: "/blog/bangkok-4-days", soon: false },
                { label: "Browse All Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View {"→"}</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="ubud-3-days" />
          <RelatedGuides currentSlug="ubud-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
