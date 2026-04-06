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

const AULI_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "overview",    emoji: "\uD83D\uDCCD", label: "Auli vs Joshimath" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",      emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "\uD83D\uDCA1", label: "Pro Tips" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Auli 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Auli in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function AuliClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("A");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under ₹8k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\u26F7\uFE0F", label: "Skiing", sub: "₹10k–25k", color: "border-sky-300 bg-sky-50 text-sky-800" },
    { id: "C" as const, emoji: "\uD83C\uDFD4\uFE0F", label: "Premium", sub: "₹25k–40k", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={AULI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Auli" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="auli uttarakhand snow skiing mountains india"
            fallback="https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=1600&q=85"
            alt="Snow-covered Auli slopes with panoramic Himalayan peaks and blue sky"
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
              <span className="text-white/70">Auli 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Snow & Adventure
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Auli in 3 Days: Skiing, Snow &amp; Nanda Devi
                <em className="italic text-gold-light"> (Budget to Premium, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 plans with real costs, cable car timings, Gorson Bugyal trek guide, skiing breakdown &mdash; and the Himalayan views that make this India&apos;s best winter escape.
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
              <span>{"·"}</span>
              <span>{"\uD83D\uDDD3"} 3 Days</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDCB0"} From {"₹"}6,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The cable car from Joshimath to Auli is 4km long &mdash; Asia&apos;s longest &mdash; and the Nanda Devi view from the top gondola cabin made me forget to breathe for a solid 10 seconds. Most people don&apos;t even know India has a ski resort. This guide is for the ones who just found out.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your style &mdash; jump straight to your itinerary.</p>
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

          {/* ── AULI VS JOSHIMATH ── */}
          <section id="overview" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCCD"} Auli vs Joshimath</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Two places, one trip. Here&apos;s what actually matters for planning.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Joshimath (Base Town)", emoji: "\uD83C\uDFD8\uFE0F", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Elevation","1,890m"],["Vibe","Busy pilgrimage & trekking hub"],["Stay here if","Budget travel, evening food options, market access"],["Key draw","Cable car base station, Narsingh Temple, gateway to Badrinath"]],
                  note: "Most budget hotels and restaurants are here. The cable car to Auli starts from Joshimath. Evenings are lively with dhabas and small shops. Note: parts of Joshimath have land subsidence issues — check your hotel location before booking." },
                { title: "Auli (The Slopes)", emoji: "\u26F7\uFE0F", bg: "bg-sky-50 border-sky-200", th: "text-sky-800",
                  rows: [["Elevation","2,500–3,050m"],["Vibe","Quiet, snow-covered, resort-style"],["Stay here if","Skiing focus, premium stays, sunrise views"],["Key draw","Skiing slopes, Gorson Bugyal, Nanda Devi panorama"]],
                  note: "Limited dining options — most people eat at their hotel. GMVN resort and a few private lodges are the only accommodation. The silence at night is genuinely surreal after any Indian city." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/80 w-24 flex-shrink-0">{k}</span>
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
                <strong className="font-medium text-ink">Smart move:</strong> Budget travellers &mdash; stay in Joshimath, cable car up daily. Skiers and premium travellers &mdash; stay at Auli for dawn-to-dusk slope access and that 5am Nanda Devi sunrise you&apos;ll remember forever.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="3 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"₹6,500"} />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Dec – Mar" />
            <StatCard icon={"\uD83D\uDE00"} label="Cable Car" value="4km Gondola" />
          </div>

          {/* ── CABLE CAR IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="gondola cable car snowy mountain himalaya india winter"
              fallback="https://images.unsplash.com/photo-1551524559-8af4e6624178?w=900&q=80"
              alt="Gondola cable car ascending through snowy Himalayan landscape towards Auli"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Auli is India&apos;s best-kept skiing secret. Yes, India has skiing. No, it&apos;s not Switzerland, but at {"₹"}500/day for equipment rental, who&apos;s complaining?
              </p>
            </div>
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

            {/* ── PLAN A: BUDGET ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDCB0"}</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; Joshimath Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Guesthouse / GMVN hostel {"·"} {"₹"}600{"–"}{"₹"}1,500/night {"·"} Cable car + walking</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Reach Joshimath + Town Explore"
                  items={[
                    "Arrive Joshimath by morning (overnight bus from Rishikesh/Haridwar reaches by 7-8am, or drive from Dehradun). Drop bags at guesthouse.",
                    "10am: Walk to Narsingh Temple — one of the four mathematical shrines established by Adi Shankaracharya. Free entry, 30 minutes. The idol is said to be slowly shrinking and local legend says Badrinath will close when it disappears entirely.",
                    "11:30am: Walk through Joshimath market. Stock up on snacks, gloves, and hand warmers if visiting in winter. Woolens here cost 40–60% less than Delhi tourist shops.",
                    "1pm: Lunch at a local dhaba — rajma-chawal and dal for ₹100–₹150. Joshimath dhabas are surprisingly good. Eat heavy — Auli has limited food options.",
                    "3pm: Walk to the Auli cable car base station to check timings for tomorrow. Buy tickets in advance if possible (₹1,000 return for tourists).",
                    "4pm: Explore the viewpoint near Joshimath — you can see Hathi Parvat and Nanda Devi from here on clear days.",
                    "Evening: Early dinner, early sleep. You want to catch the first cable car tomorrow."
                  ]}
                  cost={"₹800–₹1,200 (food + incidentals)"} />
                <DayCard day="Day 2" title="Cable Car to Auli + Gorson Bugyal Trek"
                  items={[
                    "7:30am: Heavy breakfast at your guesthouse. Carry water, snacks, and an extra layer — Auli is 600m higher than Joshimath and noticeably colder.",
                    "9:30am: Take the first cable car to Auli. The 25-minute ride covers 4km and 1,110m elevation — sit on the left side for the best Nanda Devi views. This is the moment that makes the entire trip worth it.",
                    "10am: Arrive at Auli. Walk around the ski slopes, the artificial lake, and the GMVN resort area. In winter, the slopes are buzzing with ski students. In summer, it's emerald meadows.",
                    "11am: Start the Gorson Bugyal trek from Auli (3km, easy gradient). The trail passes through oak and conifer forest before opening into a massive alpine meadow at 3,056m.",
                    "Gorson Bugyal in March when the snow is melting and the meadow turns emerald — this is what 'pictures don't do it justice' actually means.",
                    "1pm: Packed lunch at the bugyal. Nanda Devi, Dronagiri, Hathi-Ghodi Parvat — the panorama from Gorson is arguably better than from Auli itself because there's nothing between you and the peaks.",
                    "3pm: Return to Auli, take the cable car back to Joshimath.",
                    "Evening: Hot chai and maggi at a Joshimath dhaba — this is what peak contentment feels like after a cold mountain day."
                  ]}
                  cost={"₹1,500–₹2,000 (cable car + food)"} />
                <DayCard day="Day 3" title="Kwani Bugyal or Joshimath Heritage + Departure"
                  items={[
                    "OPTION A — KWANI BUGYAL: If you have energy and legs left, the trek beyond Gorson Bugyal to Kwani Bugyal (5km further from Gorson) is wilder and emptier. Budget 5–6 hours round trip from Auli. Only attempt this in clear weather.",
                    "OPTION B — JOSHIMATH HERITAGE:",
                    "8am: Visit Shankaracharya Math — one of India's four cardinal monasteries. Free, peaceful, 45 minutes.",
                    "9:30am: Walk to Vasundhara Falls viewpoint (if accessible — check locally). The road towards Badrinath has some of the most dramatic valley views in Uttarakhand.",
                    "11am: Final stroll through Joshimath. Pick up local Garhwali woolens or pahadi honey as souvenirs.",
                    "12pm: Lunch and begin return journey. If driving to Rishikesh, the route via Devprayag is stunning — five river confluences (prayags) along the way."
                  ]}
                  cost={"₹600–₹1,000 (food + optional cable car)"} />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) {"·"} </span>
                  <span className="font-serif text-base text-ink font-light">{"₹"}6,500{"–"}{"₹"}8,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: SKIING ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-sky-50 border border-sky-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\u26F7\uFE0F"}</span>
                  <div>
                    <p className="text-sm font-medium text-sky-800">Skiing Plan &mdash; Auli Slopes Focus (Dec{"–"}Mar only)</p>
                    <p className="text-xs text-sky-600 font-light">Stay: GMVN Auli or Joshimath hotel {"·"} {"₹"}1,500{"–"}{"₹"}4,000/night {"·"} Equipment rental + instructor</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive Joshimath + Afternoon Ski Orientation"
                  items={[
                    "Arrive Joshimath by morning. Check in, drop bags, eat a heavy lunch. You'll need the carbs.",
                    "12pm: Cable car to Auli. Head straight to the GMVN ski centre or a private operator to rent equipment and book an instructor for the next two days.",
                    "Equipment rental: skis + boots + poles + snow jacket = ₹500–₹1,500/day depending on quality. GMVN is cheapest but equipment is older. Private operators charge more but better gear.",
                    "2pm: Afternoon orientation session on the nursery slope. Your instructor will teach you the snowplow (pizza-shape) stop, basic turns, and how to get up after falling — because you will fall. A lot.",
                    "The nursery slope at Auli is genuinely beginner-friendly — gentle gradient, wide run, soft powder in January-February. Don't compare it to European resorts — compare it to the price.",
                    "4pm: Cable car back to Joshimath (or stay at GMVN Auli if you booked there).",
                    "Evening: Rest. Stretch. Your legs will protest tomorrow."
                  ]}
                  cost={"₹2,500–₹4,000 (cable car + rental + instruction + food)"} />
                <DayCard day="Day 2" title="Full Day on the Slopes"
                  items={[
                    "8am: First cable car up. The slopes are emptiest before 10am — this is your window for the best snow and fewest spectators watching you fall.",
                    "9am–12pm: Morning session with instructor. By day two, most beginners can do basic parallel turns and handle the nursery slope without constant falling. The view while skiing — Nanda Devi right in front of you — is unlike any ski resort on earth.",
                    "12pm: Break for lunch at GMVN canteen or packed food. Hot soup + maggi = ₹200–₹300.",
                    "1:30pm–3:30pm: Afternoon session. If you're progressing well, your instructor may take you to the intermediate slope. The 500m run with Himalayan peaks as backdrop is genuinely world-class.",
                    "3:30pm: Return equipment (or keep for tomorrow). Walk to the Auli artificial lake — it's frozen in January, which looks surreal.",
                    "4:30pm: Cable car back. Hot dinner in Joshimath.",
                    "Pro tip: Don't skip the sunscreen. Snow reflection at 3,000m altitude burns faster than any beach."
                  ]}
                  cost={"₹2,000–₹3,500 (rental + instruction + food)"} />
                <DayCard day="Day 3" title="Morning Ski + Gorson Bugyal + Departure"
                  items={[
                    "8am: Final morning session on the slopes. By now you'll have the basics and can enjoy actually skiing instead of just surviving.",
                    "11am: Return equipment. Short trek to Gorson Bugyal (3km from Auli) — the snow-covered meadow in winter is a completely different experience from summer. The silence is absolute.",
                    "1pm: Return to Auli, cable car to Joshimath.",
                    "2pm: Lunch in Joshimath. Pack up.",
                    "3pm: Begin return journey. If you have a car, the drive to Rishikesh takes 8–9 hours but passes through some of the most dramatic river valleys in India.",
                    "Alternative: Add a 4th day and visit Badrinath temple (24km from Joshimath, open May–November only) or Hemkund Sahib."
                  ]}
                  cost={"₹1,500–₹2,500 (rental + cable car + food)"} />
                <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-sky-700 uppercase tracking-wide">Total 3-Day Cost (per person) {"·"} </span>
                  <span className="font-serif text-base text-ink font-light">{"₹"}10,000{"–"}{"₹"}25,000 including accommodation & equipment</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: PREMIUM ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83C\uDFD4\uFE0F"}</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Premium Plan &mdash; Auli Resort Stay</p>
                    <p className="text-xs text-purple-600 font-light">Stay: Clifftop Club or premium resort {"·"} {"₹"}6,000{"–"}{"₹"}12,000/night {"·"} Private transfers + guides</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Private Transfer + Sunset at Auli"
                  items={[
                    "Private car from Rishikesh/Dehradun to Joshimath (10–12hrs, ₹5,000–₹8,000 one way). The drive through Devprayag, Rudraprayag, and Karnaprayag is spectacular — five sacred river confluences in one journey.",
                    "Or fly to Jolly Grant, Dehradun and private transfer to Joshimath (8–9hrs by road).",
                    "Check in at your Auli resort. Clifftop Club Auli has heated rooms with floor-to-ceiling Himalayan views. The room itself is a destination.",
                    "4pm: Walk to the viewpoint near your resort. Sunset over Nanda Devi, Kamet, Mana Parvat — a 270-degree wall of Himalayan peaks turning gold, then pink, then purple. This is the ₹40k moment.",
                    "7pm: Dinner at the resort. Most Auli resorts serve multi-cuisine — expect decent North Indian and passable continental. Don't expect Michelin stars, but the view from the dining room compensates.",
                    "After dinner: Step outside. At 3,000m with zero light pollution, the stargazing is extraordinary. You'll see the Milky Way with naked eyes."
                  ]}
                  cost={"₹8,000–₹15,000 (transfer + resort + food)"} />
                <DayCard day="Day 2" title="Private Skiing Lesson + Gorson Bugyal"
                  items={[
                    "6am: Wake up for sunrise over Nanda Devi. Your resort probably has a terrace or viewpoint for exactly this. Coffee in hand, Himalayas in front — this is the postcard moment.",
                    "9am: Private ski instructor (₹2,000–₹3,500/day). Better equipment, one-on-one attention, they'll take you to the intermediate slopes faster. Premium equipment rental: ₹1,000–₹2,000/day.",
                    "12pm: Lunch at resort.",
                    "2pm: Guided trek to Gorson Bugyal with a local guide (₹1,000–₹1,500). The guide points out Himalayan peaks by name, tells you local Garhwali legends, and knows the best photography spots.",
                    "If visiting in summer (May–Jun), the guide can extend the trek to Kwani Bugyal for a full-day alpine meadow experience with packed lunch.",
                    "5pm: Return to resort. Spa or hot tub if available — your muscles will thank you.",
                    "Evening: Bonfire at the resort (most offer this in winter). Hot chocolate, mountain silence, stars."
                  ]}
                  cost={"₹8,000–₹12,000 (ski instructor + guide + resort + food)"} />
                <DayCard day="Day 3" title="Cable Car Ride + Joshimath + Departure"
                  items={[
                    "7am: Final sunrise. Photograph it from every angle. You won't see this view from your office window.",
                    "9am: Check out. If you haven't done the cable car yet (some resorts are accessible by road), take it down to Joshimath for the experience. Even the descent is worth it — the perspective of the valley opening below you is breathtaking.",
                    "10:30am: Explore Joshimath. Narsingh Temple, Shankaracharya Math, the local market. Buy Garhwali woolens — hand-knitted shawls here are ₹500–₹1,500 vs ₹3,000+ in Delhi shops.",
                    "12pm: Lunch at the best Joshimath has to offer — Rajma-chawal and fresh roti at a local dhaba. After 2 days of resort food, this will taste like the best meal of the trip.",
                    "1:30pm: Begin return journey with your private car. Stop at Devprayag (where Alaknanda meets Bhagirathi to form the Ganges) for a 30-minute photo break — the two rivers are visibly different colours.",
                    "Evening: Reach Rishikesh/Dehradun for a comfortable overnight or catch a late flight to Delhi."
                  ]}
                  cost={"₹4,000–₹7,000 (cable car + food + transfer)"} />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 3-Day Cost (per person) {"·"} </span>
                  <span className="font-serif text-base text-ink font-light">{"₹"}25,000{"–"}{"₹"}40,000 including resort & private transfers</span>
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
                    <th className="p-3.5 text-xs font-medium text-sky-700 text-center">{"\u26F7\uFE0F"} Skiing</th>
                    <th className="p-3.5 text-xs font-medium text-purple-700 text-center">{"\uD83C\uDFD4\uFE0F"} Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "₹1,800–₹4,500", "₹4,500–₹12,000", "₹18,000–₹36,000"],
                    ["\uD83C\uDF5D Food & Drinks", "₹1,200–₹2,000", "₹2,000–₹4,000", "₹3,000–₹6,000"],
                    ["\uD83D\uDE90 Transport (local)", "₹1,000–₹1,500", "₹1,000–₹2,000", "₹5,000–₹8,000"],
                    ["\uD83C\uDFBF Skiing / Equipment", "₹0 (no skiing)", "₹2,000–₹6,000", "₹3,000–₹8,000"],
                    ["\uD83D\uDEE1\uFE0F Cable Car", "₹1,000", "₹1,000–₹2,000", "₹1,000"],
                    ["\uD83C\uDFAF Activities & Guides", "₹0–₹500", "₹1,000–₹2,000", "₹2,000–₹4,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["₹6,500–₹8,000", "₹10,000–₹25,000", "₹25,000–₹40,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Does not include travel to/from Joshimath. Overnight bus from Rishikesh: {"₹"}800{"–"}{"₹"}1,500. Private car from Rishikesh: {"₹"}5,000{"–"}{"₹"}8,000.
            </p>
          </section>

          {/* ── MEADOW IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="alpine meadow bugyal uttarakhand himalaya green wildflowers no people"
              fallback="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80"
              alt="Gorson Bugyal alpine meadow with snow-capped Himalayan peaks in the distance"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Gorson Bugyal at 3,056m &mdash; a 3km trek from Auli through oak forest opens into this. The Nanda Devi massif fills the entire horizon.
              </p>
            </div>
          </div>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Auli"
            hotels={[
              { name: "GMVN Tourist Rest House", type: "Budget · Auli", price: "From ₹1,200/night", rating: "3.5", badge: "Budget pick", url: "https://www.booking.com/hotel/in/gmvn-auli.html" },
              { name: "The Royal Village", type: "Mid-range · Joshimath", price: "From ₹2,500/night", rating: "4", badge: "Best value", url: "https://www.booking.com/hotel/in/royal-village-joshimath.html" },
              { name: "Clifftop Club Auli", type: "Premium Resort · Auli", price: "From ₹6,000/night", rating: "4.5", badge: "Mountain views", url: "https://www.booking.com/hotel/in/clifftop-club-auli.html" },
            ]}
          />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting without checking cable car status", desc: "The gondola shuts down for maintenance and during heavy snowfall/wind. Call GMVN Auli (or check their website) before booking. If the cable car is down, reaching Auli means a 12km winding road that may also be blocked.", icon: "\uD83D\uDEA1" },
                { title: "Going for skiing outside Dec–Mar", desc: "No snow, no skiing. The slopes are green meadows from May onwards. Beautiful, but if you came to ski, you'll be disappointed. January-February has the most reliable snow.", icon: "\u2744\uFE0F" },
                { title: "Packing light for winter", desc: "Auli at 3,000m in January hits -10°C at night. Thermals, down jacket, snow boots, gloves, balaclava. Don't rely on buying warm clothes in Joshimath — selection is limited and quality is average.", icon: "\uD83E\uDDE5" },
                { title: "Not carrying cash", desc: "There's exactly one ATM in Joshimath and it's empty half the time. No ATM in Auli. Most places are cash-only. Withdraw ₹10,000+ in Rishikesh or Srinagar (Uttarakhand) before heading up.", icon: "\uD83D\uDCB3" },
                { title: "Driving to Joshimath in monsoon", desc: "July–September: the Rishikesh-Joshimath highway is one of the most landslide-prone roads in India. Road closures of 2–3 days are common. This is not adventurous, it's genuinely dangerous.", icon: "\uD83C\uDF27\uFE0F" },
                { title: "Expecting resort-town nightlife", desc: "Auli has zero nightlife. Joshimath shuts down by 9pm. Bring a book, a deck of cards, and the ability to enjoy silence. That's the whole point.", icon: "\uD83C\uDF19" },
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
                { icon: "\uD83D\uDEA1", title: "Cable Car Left Side", desc: "Sit on the left side going up from Joshimath. That's the Nanda Devi side. On the way down, sit on the right. Trust us — the other side is just hillside.", color: "bg-sky-50 border-sky-200" },
                { icon: "\u26F7\uFE0F", title: "GMVN 7-Day Ski Course", desc: "If you're serious about learning, GMVN offers a 7-day certified skiing course for ₹5,000–₹8,000 including equipment. Better value than daily rentals, and you'll actually learn proper technique.", color: "bg-sky-50 border-sky-200" },
                { icon: "\uD83C\uDF04", title: "Sunrise Over Nanda Devi", desc: "Set your alarm for 5:30am. Nanda Devi (7,816m) catches the first light before anything else. The peak glows orange for about 8 minutes. This is free and better than any paid experience in Auli.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83E\uDDCA", title: "Summer Auli is Underrated", desc: "May–June: Gorson and Kwani Bugyals turn into wildflower meadows. Zero crowds, 15–20°C weather, and the same Nanda Devi views. Skiing purists skip summer — their loss.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDE8C", title: "The Smarter Route", desc: "Don't drive to Joshimath in one shot from Delhi (14hrs, exhausting). Break at Rishikesh or Srinagar (Garhwal). The mountain roads require alertness and daylight. Night driving on these roads is asking for trouble.", color: "bg-rose-50 border-rose-200" },
                { icon: "\u2744\uFE0F", title: "Best Month by Month", desc: "Dec ✓ snow starts | Jan–Feb \u2705 best snow & skiing | Mar \u26A0\uFE0F melting snow, fewer crowds | May–Jun \u2705 meadows & wildflowers | Jul–Sep \uD83C\uDF27\uFE0F avoid (monsoon) | Oct–Nov clear skies, dry meadows", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Auli itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Auli Trip {"→"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What is the best time to visit Auli?", a: "December to March for snow and skiing — January-February has the best powder. May to June for green meadows, wildflowers, and clear Himalayan views. July-September monsoon brings landslides and road closures. October-November has clear skies but no snow." },
                { q: "How much does a 3-day Auli trip cost?", a: "Budget: ₹6,500–₹8,000 with guesthouse in Joshimath. Skiing-focused: ₹10,000–₹25,000 with equipment and instruction. Premium with resort: ₹25,000–₹40,000 per person. All include accommodation, food, cable car, and activities." },
                { q: "How do I reach Auli from Delhi?", a: "Drive or bus to Joshimath (500km, 12-14hrs via Rishikesh). Overnight bus from Haridwar/Rishikesh ₹800–₹1,500. From Joshimath, take the 4km cable car (25 min) or drive 12km to Auli. Nearest airport: Jolly Grant, Dehradun (280km from Joshimath)." },
                { q: "Is skiing in Auli suitable for beginners?", a: "Absolutely. Auli has gentle nursery slopes perfect for first-timers. GMVN and private operators offer courses from ₹500/day equipment rental to 7-day certified programmes (₹5,000–₹8,000). January-February has the most consistent snow." },
                { q: "What is the Joshimath-Auli cable car like?", a: "Asia's longest gondola at 4km, covering 1,110m elevation in 25 minutes. Operates 9:30am–1pm and 2pm–5pm (weather permitting). ₹1,000 return for tourists. Sit on the left going up for Nanda Devi views. Closes during heavy wind and snowfall." },
                { q: "Can I visit Auli in summer?", a: "Yes, and you should. May-June turns the ski slopes into emerald meadows. Gorson Bugyal and Kwani Bugyal are stunning summer treks with wildflowers. Cable car runs year-round. Fewer tourists, 10–20°C weather, and the same 270-degree Himalayan panorama." },
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
                { label: "Dharamshala — 3 Day Himalayan Guide", href: "/blog/dharamshala-3-days", soon: false },
                { label: "Goa — 3 Day Beach Guide", href: "/blog/goa-3-days", soon: false },
                { label: "Golden Triangle — Delhi, Agra, Jaipur", href: "/blog/golden-triangle-7-days", soon: true },
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

          <RelatedGuides currentSlug="auli-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
