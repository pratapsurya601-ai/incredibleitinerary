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
import { usePageUrl } from "@/lib/hooks";

const TRICHY_TOC = [
  { id: "decision",   emoji: "⚡",  label: "Which Plan Are You?" },
  { id: "map",        emoji: "🗺️", label: "Trichy at a Glance" },
  { id: "itinerary",  emoji: "📅", label: "2-Day Itinerary" },
  { id: "budget",     emoji: "💰", label: "Budget Breakdown" },
  { id: "temples",    emoji: "🛕", label: "Temple Guide" },
  { id: "mistakes",   emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "💡", label: "Pro Tips" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Trichy 2-Day Itinerary&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Trichy in 2 Days guide&url=${pageUrl}` },
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

// ── Temple Info Card ──────────────────────────────────────────────────────────
function TempleCard({
  name, emoji, bg, th, rows, note,
}: {
  name: string; emoji: string; bg: string; th: string;
  rows: string[][]; note: string;
}) {
  return (
    <div className={`rounded-xl border p-5 ${bg}`}>
      <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${th}`}>
        <span>{emoji}</span>{name}
      </h3>
      <div className="space-y-2 mb-4">
        {rows.map(([k, v]) => (
          <div key={k} className="flex gap-2 text-xs">
            <span className="font-medium text-ink/80 w-20 flex-shrink-0">{k}</span>
            <span className="text-muted font-light">{v}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">
        {"⚠️"} {note}
      </p>
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
export default function TrichyClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"budget" | "midrange">("budget");

  const plans = [
    { id: "budget" as const,   emoji: "💰", label: "Budget",    sub: "₹2,500–3,500/day", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "midrange" as const, emoji: "🏨", label: "Mid-Range", sub: "₹5,000–8,000/day", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TRICHY_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Trichy" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="rockfort temple trichy tiruchirappalli granite rock tamil nadu india"
            alt="Rockfort Temple rising above Trichy (Tiruchirappalli) on an 83m granite outcrop"
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
              <span className="text-white/70">Trichy 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Temples &amp; Heritage
                </span>
                <span className="text-white/60 text-xs">March 20, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Trichy in 2 Days: Rockfort, Srirangam
                <em className="italic text-gold-light"> &amp; the World&apos;s Largest Temple</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The complete 2-day Trichy itinerary — Rockfort&apos;s 437-step climb, Srirangam&apos;s 81 shrines, a 2,000-year-old dam, and the evening aarti most visitors miss.
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
              <span>{"🇮🇳"} India</span>
              <span>{"·"}</span>
              <span>{"🗓"} 2 Days</span>
              <span>{"·"}</span>
              <span>{"💰"} From ₹2,500/day</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Srirangam Ranganathaswamy Temple is the largest functioning Hindu temple in the world — 156 acres, 81 shrines, 21 gopurams. Most people spend half a day in Trichy and leave. This guide makes sure you don&apos;t make that mistake.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your situation — jump straight to your itinerary.</p>
            <div className="grid grid-cols-2 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">See plan {"→"}</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── TRICHY AT A GLANCE ── */}
          <section id="map" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"🗺️"} Trichy at a Glance</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Trichy sits on the Cauvery River in central Tamil Nadu, 330km south of Chennai and 140km north of Madurai. It&apos;s not a beach destination or a hill station — it is one of the oldest continuously inhabited cities in South India, with a temple history stretching back 2,000 years.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                {
                  title: "The Ancient City", emoji: "🛕", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [
                    ["Must-see", "Rockfort Temple, Srirangam, Grand Anicut"],
                    ["Best for", "History lovers, pilgrims, architecture enthusiasts"],
                    ["Budget", "Most temples free or ₹10–50 entry"],
                    ["Vibe", "Ancient, layered, intensely spiritual"],
                  ],
                  note: "Srirangam is a living temple town — nearly 50,000 people live within the temple complex walls. It is not a museum, it is a functioning sacred city.",
                },
                {
                  title: "How to Get Around", emoji: "🛺", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  rows: [
                    ["Auto", "₹150–250 between temples"],
                    ["Taxi", "₹800–1,200 full day hired"],
                    ["Bus", "Local buses frequent, ₹10–20"],
                    ["On foot", "Srirangam complex requires walking"],
                  ],
                  note: "Always agree on auto price before boarding. Standard temple hop (Rockfort → Srirangam → Jambukeswarar) should cost ₹200–300 by auto.",
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

            {/* How to reach */}
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-5 mb-5">
              <h3 className="font-serif text-base text-ink mb-3 flex items-center gap-2">
                {"🚂"} <span>How to Reach Trichy</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { mode: "🚂 Train", from: "Chennai", detail: "~5.5 hrs · Rockfort Express, Vaigai Express · ₹200–600" },
                  { mode: "🚂 Train", from: "Madurai", detail: "~2.5 hrs · Multiple trains daily · ₹100–350" },
                  { mode: "✈️ Flight", from: "Chennai/Bangalore", detail: "Trichy Airport · 1–1.5 hrs · ₹1,500–4,000" },
                ].map((t) => (
                  <div key={t.from} className="bg-white/70 rounded-lg p-3">
                    <p className="text-xs font-semibold text-ink mb-0.5">{t.mode} from {t.from}</p>
                    <p className="text-xs text-muted font-light">{t.detail}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted font-light mt-3 italic">
                Trichy Junction (station code TPJ) is the main railway station — centrally located, walkable to most areas.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"🗓"} label="Duration" value="2 Days" />
            <StatCard icon={"💰"} label="Budget From" value="₹2,500/day" />
            <StatCard icon={"🌡"} label="Best Months" value="Oct – Feb" />
            <StatCard icon={"🚂"} label="From Chennai" value="5.5hr Train" />
          </div>

          {/* ── ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"📅"} 2-Day Itinerary</h2>
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

            {/* ── BUDGET PLAN ── */}
            {activeTab === "budget" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">{"💰"}</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Guesthouse Base near Trichy Junction</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Guesthouse near Mainguard Gate or Cantonment {"·"} ₹500–900/night {"·"} Auto: ₹150–250/hop</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Rockfort, Bazaar & Srirangam Evening Aarti"
                  items={[
                    "7am: Start at Rockfort Temple while it is cool. The 437-step climb up the 83m granite rock is steep but manageable in 20-25 minutes. Ucchi Pillayar Temple (Ganesh temple) at the very top has panoramic views over the Cauvery River and the city below.",
                    "Thayumanaswami Temple (Shiva temple) sits partway up the rock — beautifully ornate, quieter than the summit shrine. Budget 1.5 hours total for the full climb.",
                    "9:30am: Walk down into the Rockfort Bazaar area. The street market around the rock base is chaotic and photogenic — vegetables, marigolds, incense, copper vessels.",
                    "10:30am: Auto to Lourdes Church (5 min, ₹50) — the twin-spired Catholic church built in 1840 is a surprising visual near the bazaar. Free entry, peaceful interior.",
                    "11:30am: Lunch at a local mess near Srirangam bus stand — rice meals (sadam) with sambar and rasam, ₹80–120. Ask for fish curry if available — Trichy is on the Cauvery and fresh fish is excellent.",
                    "1:30pm: Enter Srirangam Ranganathaswamy Temple. Start from the outer walls and work inward. The Thousand-Pillared Hall (Ayiram Kaal Mandapam) is extraordinary — carved granite columns each uniquely sculpted. Give yourself 2.5–3 hours minimum.",
                    "Non-Hindus can explore the outer seven prakarams including the famous gopurams and the Thousand-Pillared Hall. The inner sanctum (innermost three prakarams) is Hindus only.",
                    "5:45pm: Return to Srirangam for the 6pm aarti. Find a good position near the main sanctum entrance. The lamp-lit procession with chanting and conch shells is the highlight of any Trichy visit.",
                    "8pm: Second aarti if you can stay. Then dinner at a Srirangam restaurant — fish curry, appam, mutton biryani. ₹120–200/person.",
                  ]}
                  cost="₹500–700 excluding accommodation" />
                <DayCard day="Day 2" title="Grand Anicut, Jambukeswarar & Departure"
                  items={[
                    "7am: Auto to Grand Anicut (Kallanai dam) — 20km from Trichy, roughly ₹250–350 by auto or ₹20 by local bus. Early morning is best: mist on the Cauvery, fewer visitors, good light.",
                    "Grand Anicut (Kallanai) was built by Karikala Chola approximately 2,000 years ago to divert the Cauvery River for irrigation. It is one of the oldest water regulation structures in the world still in use. The 329m stone dam is a remarkable engineering achievement for its era.",
                    "Spend 45–60 minutes at Grand Anicut. The surrounding area has a small park and views over the river delta split. Walk along the dam for the best perspective.",
                    "9:30am: Auto to Jambukeswarar Temple at Thiruvanaikaval (10km from Grand Anicut, ₹150–200). This is one of the Pancha Bhuta Stalas — the five temples representing the five elements. Jambukeswarar represents water (appu/jalam). The inner sanctum has a natural spring that partially submerges the Shiva lingam — a genuinely unusual sight.",
                    "The temple complex is smaller and less overwhelming than Srirangam — easier to appreciate the architecture. Budget 1 hour.",
                    "11am: Return to Trichy city. If your train or flight is afternoon, there is time for a final walk through the Rockfort Bazaar area for shopping — cotton dhoti, brass lamps, temple flower garlands.",
                    "Lunch before departure: Ponni restaurant near the junction does excellent Tamil meals. ₹100–150/person.",
                    "Onwards to Madurai (2.5hrs), Thanjavur (1hr by bus), or Chennai (5.5hrs) depending on your onward journey.",
                  ]}
                  cost="₹400–600 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 2-Day Budget (solo) {"·"} </span>
                  <span className="font-serif text-base text-ink font-light">₹3,000–5,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── MID-RANGE PLAN ── */}
            {activeTab === "midrange" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-teal-50 border border-teal-200 rounded-xl mb-6">
                  <span className="text-2xl">{"🏨"}</span>
                  <div>
                    <p className="text-sm font-medium text-teal-800">Mid-Range Plan — Comfortable Hotel with AC</p>
                    <p className="text-xs text-teal-600 font-light">Stay: Hotel Sangam / Femina Hotel {"·"} ₹2,000–4,000/night {"·"} Hired auto full-day: ₹800–1,200</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Rockfort Deep Dive & Srirangam at Leisure"
                  items={[
                    "6:30am: Hire an auto for the full day (₹800–1,000 negotiated upfront). Head to Rockfort early morning — you want the sunrise light on the Cauvery.",
                    "Rockfort Temple: take your time on the 437-step climb. The Thayumanaswami Temple (Shiva, Rock Temple) halfway up is beautifully preserved with ornate stucco work. Ucchi Pillayar at the summit — arrive before 8am and you may have it nearly to yourself with 360° views of the entire Cauvery delta.",
                    "9am: Rockfort area exploration — the base of the rock has a small museum and the historic Sri Manikka Vinayagar Temple. The bazaar streets circling the rock have been trading since the Chola era.",
                    "10am: Lourdes Church — 1840 Gothic church, unexpectedly beautiful in this Hindu temple city. A 15-minute visit.",
                    "11am: Drive to Srirangam. Start with breakfast or tea at a Srirangam mess — filter coffee here is exceptional. Then enter the temple complex.",
                    "Full Srirangam exploration: outer gopurams, Thousand-Pillared Hall, 21 towers visible from inside the complex, the sacred tank (Chandra Pushkarini), the elephant blessing near the main entrance if one is present. Give yourself 3 hours unhurried.",
                    "3pm: Check in to hotel, rest during peak afternoon heat (2–4pm is brutal in most months).",
                    "5:45pm: Return to Srirangam for the evening aarti. The 6pm aarti is spectacular — deity procession with lamps, music, devotees. Stay for the 8pm aarti as well if you can.",
                    "Dinner: Srirangam or return to city — Hotel Gajapriya or Vasanta Bhavan for Tamil meals, ₹200–350/person.",
                  ]}
                  cost="₹1,800–3,000 per person (excl. accommodation)" />
                <DayCard day="Day 2" title="Grand Anicut, Jambukeswarar & Thanjavur Option"
                  items={[
                    "7am: Hired auto or taxi to Grand Anicut (Kallanai). The drive through Cauvery delta farmlands is itself beautiful. Arrive early for the mist and good light.",
                    "Grand Anicut: Walk the full 329m length of the dam. Karikala Chola built this in the 2nd century CE to divert the Cauvery — the engineering concept was so sound it still functions today. A small park adjacent has benches and shade trees.",
                    "9am: Jambukeswarar Temple at Thiruvanaikaval — one of the five sacred Pancha Bhuta Stalas (water element). The natural spring inside the inner sanctum is an extraordinary sight. The temple tanks and corridors are atmospheric in early morning. 1–1.5 hours.",
                    "11am: If you have time before your train, consider a 1-hour detour to Thanjavur (55km, 1hr drive) for the Brihadeeswara Temple — another UNESCO site and one of the greatest Chola temples ever built. Trichy–Thanjavur is an easy day extension.",
                    "Alternatively, use late morning for the Bazaar area souvenir shopping — brass Nataraja figures, sandalwood, Thanjavur paintings (available in Trichy shops too), temple flower garlands.",
                    "Lunch at a proper restaurant before departure — Thalapakatti Biryani is legendary in Tamil Nadu and has an outlet in Trichy. Mutton biryani, ₹200–280.",
                    "Depart for Madurai, Chennai, or Thanjavur onward.",
                  ]}
                  cost="₹1,500–2,500 per person (excl. accommodation)" />
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-teal-700 uppercase tracking-wide">Total 2-Day Cost (per person) {"·"} </span>
                  <span className="font-serif text-base text-ink font-light">₹8,000–15,000 including accommodation</span>
                </div>
              </div>
            )}
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
                    ["🏠 Accommodation (2N)", "₹1,000–1,800", "₹4,000–8,000"],
                    ["🍽 Food & Drinks", "₹500–800", "₹1,500–2,500"],
                    ["🛺 Transport (autos/bus)", "₹400–600", "₹1,600–2,400"],
                    ["🛕 Temple Entry Fees", "₹50–150", "₹150–400"],
                    ["🛍 Shopping/Miscellaneous", "₹200–500", "₹800–2,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 2 days)</td>
                    {["₹3,000–5,000", "₹8,000–15,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Most major temples in Trichy are free or charge only ₹10–50 for special darshan queues. Trichy is considerably more affordable than Madurai or Thanjavur for equivalent temple experiences.
            </p>

            {/* Budget pro tip */}
            <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Budget tip:</strong> The auto driver who takes you to Rockfort will likely offer a &ldquo;temple circuit&rdquo; package — Rockfort, Srirangam, Jambukeswarar, Grand Anicut for ₹800–1,200 for the day. This is reasonable value. Negotiate before starting, confirm Grand Anicut is included.
              </p>
            </div>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Trichy"
            hotels={[
              { name: "Hotel Sangam", type: "Mid-Range · Central Trichy", price: "From ₹2,200/night", rating: "4", badge: "Best value", url: "https://www.booking.com/hotel/in/sangam-tiruchirappalli.html?aid=2820480" },
              { name: "Femina Hotel", type: "Heritage · Trichy Junction Area", price: "From ₹1,800/night", rating: "4", badge: "Central", url: "https://www.booking.com/hotel/in/femina-tiruchirappalli.html?aid=2820480" },
              { name: "Vivanta Trichy", type: "Luxury · Business District", price: "From ₹5,500/night", rating: "5", badge: "Luxury pick", url: "https://www.booking.com/hotel/in/vivanta-tiruchirappalli.html?aid=2820480" },
            ]}
            activities={[
              { name: "Rockfort & Srirangam Temple Tour", duration: "Full day", price: "From ₹800/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=trichy+tiruchirappalli&partner_id=PSZA5UI" },
              { name: "Grand Anicut & Cauvery Delta Tour", duration: "Half day", price: "From ₹600/person", badge: "Heritage", url: "https://www.getyourguide.com/s/?q=trichy+tiruchirappalli&partner_id=PSZA5UI" },
              { name: "Trichy–Thanjavur Temple Day Trip", duration: "Full day", price: "From ₹1,200/person", url: "https://www.getyourguide.com/s/?q=thanjavur+temple&partner_id=PSZA5UI" },
              { name: "Tamil Nadu Temple Circuit", duration: "3 Days", price: "From ₹3,500/person", url: "https://www.getyourguide.com/s/?q=tamil+nadu+temples&partner_id=PSZA5UI" },
            ]}
            pdfProductId="trichy-2-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Trichy — Must-See Places"
            subtitle="Click each thumbnail to explore Trichy&apos;s most iconic temples and heritage sites."
            spots={[
              { name: "Rockfort Temple",        query: "rockfort temple tiruchirappalli granite rock stairs trichy india",       desc: "An 83m granite outcrop rising above the city — one of the oldest geological formations in the world. The 437-step climb rewards you with panoramic views of the Cauvery River delta and the city below." },
              { name: "Srirangam Temple",       query: "srirangam ranganathaswamy temple gopuram trichy tamil nadu india",       desc: "The largest functioning Hindu temple in the world — 156 acres, 21 gopurams, 81 shrines. The Thousand-Pillared Hall is an architectural marvel. Non-Hindus can explore the outer seven prakarams." },
              { name: "Grand Anicut",           query: "grand anicut kallanai dam cauvery river karikala chola tamil nadu",      desc: "Built by Karikala Chola 2,000 years ago to divert the Cauvery River for irrigation — one of the oldest water regulation structures in the world still in use. A quiet, atmospheric site." },
              { name: "Jambukeswarar Temple",   query: "jambukeswarar temple thiruvanaikaval water element shiva tamil nadu",   desc: "One of the Pancha Bhuta Stalas (temples of the five elements). Jambukeswarar represents water — the inner sanctum has a natural spring that partially submerges the Shiva lingam." },
              { name: "Srirangam Gopurams",     query: "srirangam temple tower gopuram colorful tamil nadu india sky",          desc: "Srirangam&apos;s 21 gopurams (gateway towers) are among the most elaborately decorated in Tamil Nadu. The Rajagopuram (main tower) rises to 73m with over 1,000 sculptures." },
            ]}
          />

          {/* ── ROCKFORT IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="rockfort temple steps climb granite rock tiruchirappalli trichy dawn"
              alt="Climbing the 437 steps of Rockfort Temple at dawn, Trichy"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The 437-step climb to Ucchi Pillayar Temple takes 20–25 minutes. Go before 8am — the stone stays cool and the views over the Cauvery are extraordinary in morning light.
              </p>
            </div>
          </div>

          {/* ── TEMPLE GUIDE ── */}
          <section id="temples" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"🛕"} Temple Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Trichy is a city of temples — each with different visitor rules, timings, and what to wear. Here&apos;s what you need to know before you go.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <TempleCard
                name="Rockfort Temple"
                emoji="🪨"
                bg="bg-amber-50 border-amber-200"
                th="text-amber-800"
                rows={[
                  ["Open", "6am–8pm"],
                  ["Entry", "₹10 (Ucchi Pillayar), free lower levels"],
                  ["Climb", "437 steps, 20–25 min"],
                  ["Height", "83m granite outcrop"],
                  ["Dress code", "No shorts. Shirt required for men"],
                  ["Non-Hindus", "Welcome throughout"],
                ]}
                note="The lower Thayumanaswami Temple (Shiva) and the upper Ucchi Pillayar (Ganesh) are two separate shrines on the same rock. Most visitors rush past the lower temple — don&apos;t."
              />
              <TempleCard
                name="Srirangam Ranganathaswamy"
                emoji="🛕"
                bg="bg-orange-50 border-orange-200"
                th="text-orange-800"
                rows={[
                  ["Open", "6:15am–1pm, 3:15pm–9pm"],
                  ["Entry", "Free (outer areas); ₹50 special darshan"],
                  ["Area", "156 acres, largest Hindu temple"],
                  ["Shrines", "81 shrines, 21 gopurams"],
                  ["Inner sanctum", "Hindus only"],
                  ["Aarti", "~6pm and ~8pm daily"],
                ]}
                note="Non-Hindus can explore the first seven prakarams (enclosures) which includes the Thousand-Pillared Hall, the temple tank, and most gopurams. The inner three prakarams including the main deity are restricted."
              />
              <TempleCard
                name="Grand Anicut (Kallanai)"
                emoji="💧"
                bg="bg-blue-50 border-blue-200"
                th="text-blue-800"
                rows={[
                  ["Open", "Always accessible"],
                  ["Entry", "Free"],
                  ["Distance", "20km from Trichy city"],
                  ["Built", "~2nd century CE (Karikala Chola)"],
                  ["Structure", "329m stone dam, Cauvery River"],
                  ["Best time", "Early morning, Oct–Feb"],
                ]}
                note="Grand Anicut is not just a dam — it&apos;s an ancient hydraulic engineering marvel that made the Cauvery delta one of the most fertile agricultural regions in South India for 2,000 years. Allow 45–60 minutes."
              />
              <TempleCard
                name="Jambukeswarar Temple"
                emoji="🌊"
                bg="bg-teal-50 border-teal-200"
                th="text-teal-800"
                rows={[
                  ["Open", "6am–1pm, 3:30pm–9pm"],
                  ["Entry", "Free"],
                  ["Location", "Thiruvanaikaval, 5km from Srirangam"],
                  ["Element", "Water (Appu/Jalam)"],
                  ["Pancha Bhuta", "One of five elemental Shiva temples"],
                  ["Dress code", "Traditional preferred"],
                ]}
                note="This is one of the five Pancha Bhuta Stalas — temples consecrated to the five elements (earth, water, fire, air, sky). The other four are in Kanchipuram, Tiruvannamalai, Chidambaram, and Kalahasti. A significant pilgrimage circuit."
              />
            </div>

            {/* Srirangam image */}
            <div className="rounded-2xl overflow-hidden shadow-md mb-6">
              <SmartImage
                query="srirangam temple thousand pillared hall granite columns tamil nadu india"
                alt="The Thousand-Pillared Hall inside Srirangam Ranganathaswamy Temple"
                width={860} height={380}
                className="w-full object-cover h-64"
              />
              <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
                <p className="text-xs text-muted font-light italic text-center">
                  The Thousand-Pillared Hall (Ayiram Kaal Mandapam) at Srirangam — each column uniquely carved. Built during the Vijayanagara Empire, 15th–16th century.
                </p>
              </div>
            </div>

            {/* Aarti timing callout */}
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{"🪔"}</span>
                <div>
                  <p className="font-medium text-sm text-ink mb-2">The Srirangam Evening Aarti — Do Not Miss This</p>
                  <p className="text-sm text-muted font-light leading-relaxed">
                    The 6pm and 8pm aartis at Srirangam are among the most atmospheric temple rituals in South India. The main deity is carried in procession through the inner corridors with oil lamps, conch shells, drums, and hundreds of devotees chanting. Plan Day 1 entirely around being there for the 6pm aarti — then stay for the 8pm if you can.
                  </p>
                  <p className="text-xs text-muted font-light mt-2 italic">
                    Aarti timings can vary by 15–30 minutes during festival periods. Check at the temple entrance on arrival.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Grand Anicut image ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="grand anicut kallanai dam cauvery river early morning mist tamil nadu"
              alt="Grand Anicut (Kallanai) on the Cauvery River — built 2,000 years ago by Karikala Chola"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Grand Anicut (Kallanai) — 329 metres of ancient stone across the Cauvery River. Built approximately 2,000 years ago and still functioning today, it is one of the oldest water diversion structures in the world.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Going to Srirangam at noon", desc: "Temple stone floors get brutally hot mid-day and you are barefoot throughout. The outer corridors and tank areas are fully open to the sky. Go in the early morning or after 4pm when temperatures drop. Noon is the worst time to be in any Tamil Nadu temple.", icon: "⏰" },
                { title: "Missing the Srirangam evening aarti", desc: "The 6pm aarti is the highlight of any Trichy visit. Most one-day visitors arrive late morning, rush through the temple, and leave before 5pm. If you only do one thing in Trichy, make it the evening aarti at Srirangam.", icon: "🪔" },
                { title: "Not carrying water at Rockfort", desc: "The 437-step Rockfort climb is steep and exposed. There are no water vendors on the way up. Carry at least 750ml per person before starting the climb. The base area has shops — buy water there.", icon: "💧" },
                { title: "Assuming Srirangam inner sanctum is open to non-Hindus", desc: "The inner sanctum and the three innermost prakarams of Srirangam are for Hindus only. This is clearly marked and enforced. Non-Hindu visitors can still see nearly 80% of the temple complex including the most architecturally impressive areas.", icon: "🚫" },
                { title: "Taking autos without agreeing price first", desc: "Auto-rickshaws in Trichy often don&apos;t use meters for tourists. Always agree on the fare before boarding. Standard rates: Rockfort to Srirangam ₹100–150, Srirangam to Jambukeswarar ₹80–100, Trichy to Grand Anicut ₹250–350 one-way.", icon: "🛺" },
                { title: "Visiting during peak summer (May–June)", desc: "Trichy in May–June regularly hits 40–42°C. Temple stone floors become scorching underfoot, the Rockfort climb is exhausting in the heat, and there is zero shade at Grand Anicut. October–February is the window for comfort.", icon: "🌡" },
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
                { icon: "🌅", title: "Rockfort at Dawn is a Different Experience", desc: "The climb at 6:30–7am means cool stone, soft light, and the city waking below you. The view over the Cauvery River with morning mist is one of the most beautiful scenes in Tamil Nadu. By 9am, tour groups arrive.", color: "bg-amber-50 border-amber-200" },
                { icon: "🐘", title: "Temple Elephant at Srirangam", desc: "Srirangam often has a temple elephant near the main entrance who blesses visitors by touching their heads with her trunk. This is a real working temple elephant, not a tourist attraction — offer a banana or coin respectfully.", color: "bg-amber-50 border-amber-200" },
                { icon: "🚂", title: "Trichy to Thanjavur is Only 1 Hour", desc: "If your schedule allows, add Thanjavur (Tanjore) to your trip. The Brihadeeswara Temple is another UNESCO World Heritage Chola masterpiece — the 65m vimana (tower) was built in 1010 CE. A day trip from Trichy is very manageable.", color: "bg-teal-50 border-teal-200" },
                { icon: "🍚", title: "South Indian Rice Meals in Trichy are Exceptional", desc: "Trichy&apos;s banana leaf rice meals (sadam) — with sambar, rasam, kootu, avial, and appalam — are outstanding value at ₹80–150. The Cauvery fish curry available at local restaurants is a regional speciality you won&apos;t find this fresh outside the delta region.", color: "bg-teal-50 border-teal-200" },
                { icon: "👕", title: "Temple Dress Code is Enforced", desc: "All Trichy temples enforce dress codes. Men: no shorts, shirts must be worn (or removed in some temples). Women: salwar, saree, or modest covering — skirts and shorts are not allowed. Keep a dupatta or stole handy to drape if needed at entrances.", color: "bg-purple-50 border-purple-200" },
                { icon: "📅", title: "Festival Calendar Changes Everything", desc: "Srirangam hosts a spectacular 21-day Vaikunta Ekadasi festival (December–January) when the &ldquo;Paradise Gateway&rdquo; (Paramapadha Vasal) opens for only 10 days a year. Also remarkable: the monthly Panguni Uthiram (March–April) processions. Check dates before booking.", color: "bg-purple-50 border-purple-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Trichy itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Trichy Trip {"→"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days are enough for Trichy?",
                  a: "2 days is sufficient to cover Rockfort Temple, Srirangam Ranganathaswamy Temple including the evening aarti, Grand Anicut dam, and Jambukeswarar Temple. A single day is possible but rushed — you will miss the evening aarti, which is the highlight of any Trichy visit. 3 days lets you add a day trip to Thanjavur (55km away).",
                },
                {
                  q: "Is Srirangam Temple open to non-Hindus?",
                  a: "Non-Hindus can enter the first seven prakarams (enclosures) of Srirangam Ranganathaswamy Temple, which includes the Thousand-Pillared Hall, the Rajagopuram (main tower), temple tanks, and most of the architectural highlights. The inner three prakarams including the main deity shrine are restricted to Hindus only. This is clearly marked at entrances.",
                },
                {
                  q: "What is the best time to visit Trichy?",
                  a: "October to February is ideal — temperatures between 22–32°C, dry weather, and comfortable conditions for temple climbing and exploration. March to May reaches 38–42°C. June to September is monsoon season with some rain but manageable heat. Avoid May–June if at all possible.",
                },
                {
                  q: "How much does a 2-day Trichy trip cost?",
                  a: "A budget traveller can do 2 days for approximately ₹2,500–3,500 per day including a guesthouse (₹500–900/night), meals (₹80–200 per meal), and auto-rickshaws (₹200–400/day). Most temples are free entry or charge ₹10–50. A mid-range 2-day trip costs ₹5,000–8,000/day per person with comfortable AC hotels.",
                },
                {
                  q: "What time is the Srirangam aarti?",
                  a: "Srirangam has multiple daily aartis. The most spectacular are the evening aartis at approximately 6pm (Ardhajama puja) and 8pm (the deity procession). The 8pm aarti with the deity carried in a lighted palanquin through the inner corridors is particularly memorable. Timings shift by 15–30 minutes during festivals — confirm at the temple.",
                },
                {
                  q: "How do I get to Trichy from Chennai or Madurai?",
                  a: "From Chennai: Multiple trains daily including the Rockfort Express and Vaigai Express — approximately 5–5.5 hours, fares ₹200–600. Trichy airport also has daily flights from Chennai (1 hour, ₹1,500–4,000). From Madurai: 2.5 hours by train, ₹100–350. Trichy Junction (station code TPJ) is the main railway hub, centrally located.",
                },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Extend Your Tamil Nadu Trip</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Madurai — Meenakshi Temple Guide", href: "/blog/madurai-2-days", soon: false },
                { label: "Pondicherry — French Quarter & Beach", href: "/blog/pondicherry-3-days", soon: false },
                { label: "Ooty — Nilgiri Toy Train & Tea Gardens", href: "/blog/ooty-3-days", soon: false },
                { label: "Rameswaram — Pamban Bridge & Temple", href: "/blog/rameswaram-2-days", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="trichy-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
