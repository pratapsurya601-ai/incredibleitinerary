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

const KHAJURAHO_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "temples",   emoji: "🛕", label: "The Temple Groups" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Khajuraho 2-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Khajuraho in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function KhajurahoClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹5k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹5k–15k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KHAJURAHO_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Khajuraho" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="khajuraho temple sculpture madhya pradesh india"
            fallback="https://images.unsplash.com/photo-1592639296346-560c37a0f711?w=1600&q=85"
            alt="Khajuraho temple intricate stone carvings Madhya Pradesh"
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
              <span className="text-white/70">Khajuraho 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Heritage & UNESCO
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Khajuraho in 2 Days: Temples, Canyon & Safari
                <em className="italic text-gold-light"> (Budget to Comfortable, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                UNESCO temples that are 90% not what you think, a volcanic canyon nobody visits, and a national park with wild tigers — all within 2 days.
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
              <span>🇮🇳 Madhya Pradesh</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹3,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The erotic sculptures are only about 10% of the carvings — the rest are everyday life, war, and religion. Most tourists photograph the sexy bits and miss the extraordinary artistry of the rest. This guide makes sure you don&apos;t.
            </p>
          </blockquote>

          {/* ── PICK YOUR PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Pick Your Plan</h2>
            <p className="text-sm text-muted font-light mb-6">Two approaches — same temples, different pace and comfort level.</p>
            <div className="grid grid-cols-2 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} →</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── THE TEMPLE GROUPS ── */}
          <section id="temples" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🛕 The Three Temple Groups</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Khajuraho&apos;s temples are split into three clusters. Most tourists only visit the Western Group and miss two-thirds of the site.
            </p>
            <div className="space-y-4">
              {[
                { title: "Western Group (UNESCO)", emoji: "⭐", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Ticket","₹40 Indian / ₹600 Foreign"], ["Time needed","2.5–3 hours"], ["Must-see","Kandariya Mahadeva, Lakshmana, Vishwanath"], ["Best time","6am opening — 5 people. By 10am: 200."]],
                  note: "This is the main event. Kandariya Mahadeva alone has over 800 sculptures. Go at opening or skip the crowds entirely." },
                { title: "Eastern Group (Jain Temples)", emoji: "🕉", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  rows: [["Ticket","Free"], ["Time needed","1–1.5 hours"], ["Must-see","Parsvanath, Ghantai, Javari temples"], ["Best time","Late afternoon — golden light on sandstone"]],
                  note: "The Jain temples here are exquisitely detailed. Parsvanath Temple has some of the finest carving in all of Khajuraho — without the crowds." },
                { title: "Southern Group", emoji: "🏛", bg: "bg-rose-50 border-rose-200", th: "text-rose-800",
                  rows: [["Ticket","Free"], ["Time needed","45 min–1 hour"], ["Must-see","Duladeo, Chaturbhuj temples"], ["Best time","Morning — combine with a cycle ride"]],
                  note: "Chaturbhuj Temple has a 2.7m standing Vishnu image that most guidebooks barely mention. Almost always empty." },
              ].map((group) => (
                <div key={group.title} className={`rounded-xl border p-5 ${group.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${group.th}`}>
                    <span>{group.emoji}</span>{group.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {group.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/60 w-20 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">💡 {group.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Duration" value="2 Days" />
            <StatCard icon="💰" label="Budget From" value="₹3,500" />
            <StatCard icon="🌡" label="Best Months" value="Oct – Mar" />
            <StatCard icon="✈️" label="Nearest Airport" value="HJR / Jhansi" />
          </div>

          {/* ── ITINERARIES ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
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

            {/* ── PLAN A: BUDGET ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">💰</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Under ₹5,000 total</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Guesthouses near Western Group · ₹400–₹800/night · Get around by bicycle ₹100–₹150/day</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Western Group at Dawn + Eastern Group + Sound & Light Show"
                  items={[
                    "5:45am: Be at the Western Group gate before 6am opening. The Western Group at 6am opening has maybe 5 people — by 10am there are 200. Set one alarm.",
                    "Kandariya Mahadeva Temple first — the tallest, most ornate. 800+ sculptures. Spend 45 min here alone.",
                    "Lakshmana Temple — the best-preserved. Look for the entire frieze running along the base showing elephants, horses, and hunting scenes.",
                    "Vishwanath Temple and Matangeshwar (the only active temple in the complex) — 45 min for both",
                    "9:30am: Breakfast at a dhaba near the temple gate. Poha + chai ₹30–₹50.",
                    "11am: Cycle to the Eastern Group (2km). Parsvanath Temple — finest Jain carving in Khajuraho. Ghantai Temple ruins. 1.5 hours, free entry.",
                    "1pm: Lunch at Raja Cafe or local dhaba — thali ₹80–₹120",
                    "Rest during peak heat (2–4pm) — Khajuraho at midday in season is 30°C+",
                    "5pm: Explore the Archaeological Museum (₹10 Indian / ₹100 Foreign) — small but superb collection of sculptures too damaged for display at the temples",
                    "7pm: Sound & Light Show at Western Group — ₹250 Indian / ₹700 Foreign. 50 min. The temples lit up at night are a different experience entirely.",
                  ]}
                  cost="₹800–₹1,200 (excluding accommodation)" />
                <DayCard day="Day 2" title="Southern Group + Raneh Falls + Panna National Park"
                  items={[
                    "7am: Cycle to Southern Group (3km south). Duladeo Temple — the last temple built in the Chandela period. Chaturbhuj Temple — 2.7m standing Vishnu. 45 min total, free.",
                    "9am: Hire a shared auto or negotiate a return trip to Raneh Falls (20km, ₹300–₹500 return). Raneh Falls is 20km away and almost nobody goes — a canyon of volcanic rock with a waterfall. It is the hidden gem of Khajuraho.",
                    "Entry ₹25 Indian / ₹200 Foreign. The canyon walls are crystalline granite — red, pink and grey layers. 1–1.5 hours.",
                    "12pm: Continue to Panna National Park gate (10km from Raneh Falls). If budget allows, a jeep safari costs ₹1,500–₹2,500 per vehicle (split with others). Tigers, leopards, gharials.",
                    "Alternatively: skip Panna and return to Khajuraho for the afternoon. Visit the Tribal & Folk Art Museum (free) and walk through the old village.",
                    "4pm: Return to town. Final walk around the Western Group exterior walls at golden hour — the sandstone glows. Free from outside.",
                    "Evening: Dinner at Mediterraneo or local restaurant ₹150–₹300",
                  ]}
                  cost="₹1,000–₹2,500 (excluding accommodation)" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 2-Day Cost (solo) · </span>
                  <span className="font-serif text-base text-ink font-light">₹3,500–₹5,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: COMFORTABLE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-teal-50 border border-teal-200 rounded-xl mb-6">
                  <span className="text-2xl">🏨</span>
                  <div>
                    <p className="text-sm font-medium text-teal-800">Comfortable Plan — ₹5,000–₹15,000 total</p>
                    <p className="text-xs text-teal-600 font-light">Stay: Heritage hotel or Radisson · ₹2,000–₹5,000/night · Private car for Day 2: ₹1,500–₹2,500</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="All Three Temple Groups + Guided Tour + Sound & Light Show"
                  items={[
                    "6am: Western Group gates open. Go now — by 10am it is a different place entirely. Start with Kandariya Mahadeva.",
                    "Optional: Hire an ASI-certified guide at the gate (₹500–₹800 for 2 hours). They explain the symbolism you cannot see alone — the difference between a guided and unguided visit here is enormous.",
                    "8:30am: Breakfast at hotel or Bella Italia near the temples",
                    "10am: Eastern Group — Parsvanath Jain Temple, Ghantai ruins, Javari Temple. Hire a cycle-rickshaw (₹100–₹150) or walk 20 min.",
                    "12:30pm: Lunch at La Terrazza or Raja Cafe — ₹300–₹600",
                    "2pm: Rest at hotel during peak heat",
                    "4pm: Southern Group by auto-rickshaw (₹100). Duladeo and Chaturbhuj temples in golden afternoon light. 1 hour.",
                    "5:30pm: Archaeological Museum — small but essential. ₹10/₹100.",
                    "7pm: Sound & Light Show — book in advance during peak season. English show 7:30pm winter / 8:30pm summer.",
                    "8:30pm: Dinner at Mediterraneo (Italian-Indian, excellent) or hotel restaurant — ₹500–₹1,000",
                  ]}
                  cost="₹2,000–₹4,000 (excluding accommodation)" />
                <DayCard day="Day 2" title="Raneh Falls Canyon + Panna National Park Safari"
                  items={[
                    "6am: Panna National Park morning safari (book 1–2 days ahead). Jeep safari ₹3,000–₹4,500 per vehicle, seats 6. Tiger territory — also gharials, vultures, sloth bears.",
                    "Safari runs 6am–10am. Your hotel can arrange pickup.",
                    "10:30am: Drive directly to Raneh Falls from Panna (10km). The canyon is volcanic rock in layers of red, pink and grey with a waterfall dropping into it. Almost nobody comes here.",
                    "12pm: Return to Khajuraho. Lunch at hotel or local restaurant.",
                    "2pm: If energy remains — revisit the Western Group. Second visits reveal details you missed entirely the first time. The friezes on the lower bands repay slow looking.",
                    "4pm: Shopping for local stone carvings and tribal art on Main Road. Bargain — first price is 50–70% inflated.",
                    "Evening: Departure or one more night. If staying, the temple exteriors at sunset from outside the complex are spectacular and free.",
                  ]}
                  cost="₹3,000–₹6,000 (excluding accommodation)" />
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-teal-700 uppercase tracking-wide">Total 2-Day Cost (per person) · </span>
                  <span className="font-serif text-base text-ink font-light">₹5,000–₹15,000 including accommodation</span>
                </div>
              </div>
            )}
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment">
                    <th className="text-left p-3.5 text-xs font-medium text-muted">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-700 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-teal-700 text-center">🏨 Comfortable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (2N)", "₹800–₹1,600", "₹4,000–₹10,000"],
                    ["🍽 Food & Drinks", "₹400–₹700", "₹1,200–₹2,500"],
                    ["🎟 Temple Tickets", "₹40–₹300", "₹40–₹300"],
                    ["🚗 Transport (local)", "₹200–₹500", "₹1,500–₹2,500"],
                    ["🎯 Activities", "₹250–₹1,500", "₹3,000–₹5,500"],
                    ["🌙 Sound & Light Show", "₹250–₹700", "₹250–₹700"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["₹3,500–₹5,000", "₹5,000–₹15,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Foreign tourist tickets at ASI sites are significantly higher — budget ₹600 for Western Group entry.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Khajuraho"
            hotels={[
              { name: "Hotel Harmony", type: "Budget · Near Temples", price: "From ₹600/night", rating: "3", badge: "Budget pick", url: "https://www.booking.com/hotel/in/harmony-khajuraho.html?aid=2820480" },
              { name: "Radisson Jass Khajuraho", type: "Comfortable · Pool", price: "From ₹3,500/night", rating: "4", badge: "Best value", url: "https://www.booking.com/hotel/in/radisson-jass-khajuraho.html?aid=2820480" },
              { name: "The Lalit Temple View", type: "Heritage · Temple Views", price: "From ₹6,000/night", rating: "5", badge: "Top pick", url: "https://www.booking.com/hotel/in/the-lalit-temple-view-khajuraho.html?aid=2820480" },
            ]}
            activities={[
              { name: "Panna National Park Jeep Safari", duration: "4 hours", price: "From ₹2,500/vehicle", badge: "Must do", url: "https://www.getyourguide.com/s/?q=khajuraho&partner_id=PSZA5UI" },
              { name: "Western Group Guided Temple Tour", duration: "2.5 hours", price: "From ₹500/person", badge: "Essential", url: "https://www.getyourguide.com/s/?q=khajuraho&partner_id=PSZA5UI" },
              { name: "Raneh Falls & Canyon Excursion", duration: "3 hours", price: "From ₹800/person", url: "https://www.getyourguide.com/s/?q=khajuraho&partner_id=PSZA5UI" },
              { name: "Sound & Light Show Tickets", duration: "50 min", price: "From ₹250/person", url: "https://www.getyourguide.com/s/?q=khajuraho&partner_id=PSZA5UI" },
            ]}
            pdfProductId="khajuraho-2-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Khajuraho — Must-See Places"
            subtitle="Click each thumbnail to explore Khajuraho&apos;s temples, canyon and wildlife."
            spots={[
              { name: "Kandariya Mahadeva Temple",  query: "kandariya mahadeva temple khajuraho carved stone tower",          desc: "The tallest and most ornate of the Western Group. Over 800 sculptures on a single temple — the pinnacle of Chandela architecture." },
              { name: "Lakshmana Temple",            query: "lakshmana temple khajuraho sandstone carvings frieze",            desc: "The best-preserved temple in the complex. The entire base frieze shows elephants, war processions and daily life in extraordinary detail." },
              { name: "Raneh Falls Canyon",          query: "raneh falls canyon volcanic rock waterfall ken river",             desc: "A canyon of crystalline granite in red, pink and grey layers with a waterfall dropping into it. 20km from Khajuraho, almost nobody visits." },
              { name: "Panna National Park",         query: "panna national park madhya pradesh jungle river wildlife",        desc: "Tiger territory 30 minutes from Khajuraho. Also home to gharials, vultures and sloth bears along the Ken River gorge." },
              { name: "Parsvanath Jain Temple",      query: "parsvanath jain temple khajuraho eastern group carved detail",     desc: "In the free Eastern Group, this Jain temple has some of the finest sculptural detail in all of Khajuraho without a single tourist." },
            ]}
          />

          {/* ── TEMPLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="khajuraho western group temples sunrise sandstone golden light"
              fallback="https://images.unsplash.com/photo-1592639296346-560c37a0f711?w=900&q=80"
              alt="Western Group of Temples at Khajuraho in golden morning light"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Western Group at 6am — five people and silence. By mid-morning the tour buses arrive and you cannot hear yourself think.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Arriving after 9am at the Western Group", desc: "Tour buses from Orchha and Jhansi arrive between 9–10am. The experience at 6am vs 10am is not the same trip. Wake up.", icon: "⏰" },
                { title: "Only visiting the Western Group", desc: "The Eastern and Southern groups are free, almost empty, and have extraordinary sculptures. The Parsvanath Jain Temple rivals anything in the Western Group.", icon: "🛕" },
                { title: "Skipping Raneh Falls", desc: "20km away, genuinely spectacular, almost zero tourists. A canyon of volcanic rock that looks like it belongs in Arizona, not Madhya Pradesh. Budget 2 hours.", icon: "🏞" },
                { title: "Visiting April–June", desc: "Khajuraho regularly hits 45°C+ in summer. The temples are entirely open-air with no shade. October–March only, ideally November–February.", icon: "🌡" },
                { title: "Not hiring a guide at the Western Group", desc: "The sculptures tell interconnected stories that are invisible without context. ₹500–₹800 for a certified guide transforms a photo opportunity into genuine understanding.", icon: "🎓" },
                { title: "Photographing only the erotic panels", desc: "The erotic carvings are maybe 10% of the total. The war scenes, celestial musicians, daily life friezes, and geometric patterns are where the real artistry lives.", icon: "📷" },
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
                { icon: "🌅", title: "The 6am Rule", desc: "The Western Group at 6am opening has maybe 5 people — by 10am there are 200. Set one alarm. This single decision determines your entire Khajuraho experience.", color: "bg-amber-50 border-amber-200" },
                { icon: "🚲", title: "Rent a Bicycle", desc: "Khajuraho is flat and small. A bicycle (₹100–₹150/day) gets you between all three temple groups, the old village, and local food stalls that no rickshaw driver will take you to.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏞", title: "Raneh Falls — the Real Hidden Gem", desc: "Raneh Falls is 20km away and almost nobody goes — a canyon of volcanic rock with a waterfall. It is the hidden gem of Khajuraho. Best after monsoon when the Ken River is full.", color: "bg-teal-50 border-teal-200" },
                { icon: "🐅", title: "Panna Safari Timing", desc: "Morning safaris (6am) have the best tiger sighting rates. Book 1–2 days ahead through your hotel or the MP Tourism website. Afternoons are hotter and animals hide.", color: "bg-teal-50 border-teal-200" },
                { icon: "🔦", title: "Sound & Light Show Seats", desc: "Arrive 15 minutes early for front-row stone seats. The rear seats have worse acoustics. English show runs at 7:30pm (winter) or 8:30pm (summer). Carry a light jacket — evenings cool down fast.", color: "bg-rose-50 border-rose-200" },
                { icon: "🧭", title: "Combine with Orchha", desc: "Orchha is 175km west (4–5hrs by road) and equally spectacular — medieval Bundela palaces with almost no tourists. The Khajuraho + Orchha combination is one of central India's best 4-day trips.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Khajuraho itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Khajuraho Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Khajuraho?", a: "2 days is ideal. Day 1 covers all three temple groups and the Sound & Light Show. Day 2 covers Raneh Falls and optionally a Panna National Park safari. 1 day works if you only visit the Western Group, but you will miss the best parts." },
                { q: "What is the best time to visit Khajuraho?", a: "October to March. November to February is ideal with temperatures of 15-28°C. Avoid April-June entirely — Khajuraho hits 45°C+ and the temples are completely open-air with no shade." },
                { q: "Are the Khajuraho temples only about erotic sculptures?", a: "No. The erotic sculptures are roughly 10% of the total carvings. The majority depict everyday life, war scenes, celestial dancers and musicians, religious iconography, and geometric patterns. The artistry of the non-erotic carvings is extraordinary." },
                { q: "How do I reach Khajuraho?", a: "Khajuraho has its own airport (HJR) with direct flights from Delhi and Varanasi. Nearest major railway station is Jhansi (175km, 4-5hrs by road) or Mahoba (63km, 1.5hrs). Most travellers combine Khajuraho with Orchha (175km) or Varanasi (400km)." },
                { q: "Is the Sound and Light Show worth it?", a: "Yes. ₹250 for Indians, ₹700 for foreigners, 50 minutes. The temple facades lit up at night are genuinely spectacular. English show at 7:30pm in winter, 8:30pm in summer. Arrive 15 minutes early for front-row stone seats." },
                { q: "What is Raneh Falls and is it worth visiting?", a: "Raneh Falls is a canyon of volcanic rock with a waterfall on the Ken River, 20km from Khajuraho. Canyon walls are crystalline granite in red, pink, and grey layers. Strikingly beautiful, almost zero tourists. Entry ₹25 Indian / ₹200 Foreign. Best October-December when water is highest." },
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
                { label: "Varanasi — 3 Day Spiritual Guide", href: "/blog/varanasi-3-days", soon: false },
                { label: "Rajasthan — 7 Day Royal Circuit", href: "/blog/rajasthan-7-days", soon: false },
                { label: "Golden Triangle — Delhi, Agra, Jaipur", href: "/blog/golden-triangle-7-days", soon: false },
                { label: "Browse All India Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="khajuraho-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
