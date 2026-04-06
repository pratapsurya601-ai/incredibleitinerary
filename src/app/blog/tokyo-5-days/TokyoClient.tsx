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

const TOKYO_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "practical",   emoji: "\uD83D\uDCCB", label: "Visa & Transit" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Tokyo 5-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Tokyo in 5 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">●</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">\uD83D\uDCB0</span>
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

// ── FAQ Item ──────────────────────────────────────────────────────────────────
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
export default function TokyoClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "\u00A58,000–12,000/day ($53–80)", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "✨", label: "Mid-Range", sub: "\u00A515,000–25,000/day ($100–167)", color: "border-blue-300 bg-blue-50 text-blue-800" },
    { id: "C" as const, emoji: "\uD83D\uDC8E", label: "Luxury", sub: "\u00A540,000+/day ($267+)", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TOKYO_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Tokyo" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="tokyo shibuya crossing neon lights japan night"
            alt="Tokyo Shibuya Crossing neon lights at night"
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
              <span className="text-white/70">Tokyo 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  City & Culture
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">18 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Tokyo in 5 Days: The Only Guide You Need
                <em className="italic text-gold-light"> (Budget to Luxury, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, costs in yen, transit decoded &mdash; and the mistakes that ruin most Tokyo trips.
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
              <span>\uD83C\uDDEF\uD83C\uDDF5 Japan</span>
              <span>·</span>
              <span>\uD83D\uDDD3 5 Days</span>
              <span>·</span>
              <span>\uD83D\uDCB0 From \u00A58,000/day ($53)</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Shibuya Crossing at midnight when the neon reflects off wet pavement &mdash; this is the Tokyo they promised you and it delivers. But most first-timers waste two days being confused by the metro, overpay for everything, and miss entire neighbourhoods. This guide fixes all of that.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your budget &mdash; jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} →</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── PRACTICAL INFO ── */}
          <section id="practical" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\uD83D\uDCCB Visa & Transit Essentials</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Get a Suica card at the airport. Don&apos;t think about it. Just do it. Tokyo transit without it is suffering.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Visa Requirements", emoji: "\uD83D\uDEC2", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Indian passport","Visa required — apply at Japanese Embassy, 5–7 working days"],["US / UK / EU","Visa-free for 90 days"],["Australia / NZ","Visa-free for 90 days"],["Documents","Return ticket, hotel booking, bank statement"]],
                  note: "Apply at least 3 weeks before departure. Japan doesn’t offer visa on arrival for any nationality." },
                { title: "Getting Around", emoji: "\uD83D\uDE89", bg: "bg-blue-50 border-blue-200", th: "text-blue-800",
                  rows: [["IC Card","Suica or Pasmo — \u00A5500 deposit, tap on/off everything"],["JR Pass","Only worth it if visiting Kyoto/Osaka too"],["Google Maps","Best app for Tokyo transit — shows exact platform numbers"],["Airport","Narita Express \u00A53,250 or Limousine Bus \u00A53,200 to city"]],
                  note: "Tokyo Metro day pass: \u00A5600 (24hr). Insane value if you’re hitting 4+ stations." },
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
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">\u26A0\uFE0F {area.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="\uD83D\uDDD3" label="Duration" value="5 Days" />
            <StatCard icon="\uD83D\uDCB0" label="Budget From" value="\u00A58,000/day" />
            <StatCard icon="\uD83C\uDF38" label="Best Months" value="Mar–May, Oct–Nov" />
            <StatCard icon="\u2708\uFE0F" label="Airports" value="Narita / Haneda" />
          </div>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\uD83D\uDCC5 The Itineraries</h2>
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
                  <span className="text-2xl">\uD83D\uDCB0</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; \u00A58,000–12,000/day ($53–80)</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Capsule hotels or hostels in Shinjuku/Asakusa &middot; \u00A53,000–5,000/night ($20–33)</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Shibuya, Meiji Shrine, Harajuku, Shinjuku"
                  items={[
                    "Morning: Meiji Shrine (free) — arrive by 9am, walk through the massive torii gate in the forest. 45 min.",
                    "11am: Harajuku — Takeshita Street for the sensory overload, then walk Omotesando for architect-designed flagships. Free.",
                    "Lunch: Harajuku gyoza stand or conveyor belt sushi — \u00A5800–1,200 ($5–8). Genki Sushi is reliable and cheap.",
                    "3pm: Shibuya Crossing — watch from Starbucks above, then cross it yourself. Walk Shibuya Center-Gai.",
                    "5pm: Shibuya Sky observation deck — \u00A52,000 ($13). Book online, skip the queue. Sunset views are unreal.",
                    "Evening: Shinjuku — Golden Gai bar crawl. Tiny bars, 5–8 seats each. \u00A5500–1,000 cover + drink. Pick 2–3 bars max.",
                    "Late-night: A 7-Eleven onigiri at 2am after a Golden Gai bar crawl is a peak Japan moment and I will not apologize for saying it."
                  ]}
                  cost="\u00A58,500–12,000 ($57–80) including transport" />
                <DayCard day="Day 2" title="Tsukiji, TeamLab, Odaiba, Akihabara"
                  items={[
                    "7am: Tsukiji Outer Market — tamagoyaki (egg omelette) \u00A5200, fresh sashimi bowl \u00A51,500–2,000. Eat standing, like locals.",
                    "10am: teamLab Borderless (Azabudai Hills) — \u00A53,800 ($25). Book tickets 2 weeks ahead or you won’t get in. 2–3 hrs.",
                    "2pm: Odaiba — Gundam statue (free), DiverCity mall for lunch. Rainbow Bridge views.",
                    "5pm: Akihabara — electric town. Retro game shops (Super Potato), anime stores, maid cafes if you’re curious (\u00A51,500 entry).",
                    "Dinner: Akihabara ramen — Fuunji tsukemen near Shinjuku Station \u00A51,000 ($7). Queue moves fast."
                  ]}
                  cost="\u00A59,000–12,500 ($60–83) including transport" />
                <DayCard day="Day 3" title="Asakusa, Senso-ji, Ueno Park, Ameya-Yokocho"
                  items={[
                    "8am: Senso-ji Temple, Asakusa — Tokyo’s oldest temple. Free. The Kaminarimon gate and Nakamise shopping street are best before 9am.",
                    "10am: Walk along Sumida River to Tokyo Skytree — \u00A52,100 ($14) for observation deck, or just photograph it from below.",
                    "Lunch: Asakusa street food — melon pan, ningyo-yaki, yakitori. \u00A5500–800 total for a street lunch.",
                    "2pm: Ueno Park — free. Tokyo National Museum (\u00A51,000) is world-class if you like history. Shinobazu Pond is beautiful.",
                    "4pm: Ameya-Yokocho market (Ameyoko) — chaotic open-air market under the train tracks. Snacks, street food, bargains.",
                    "Evening: Yanaka district — old Tokyo neighbourhood that survived the war. Sunset from Yanaka Cemetery stairs. Free."
                  ]}
                  cost="\u00A57,000–10,500 ($47–70) including transport" />
                <DayCard day="Day 4" title="Day Trip: Kamakura OR Nikko"
                  items={[
                    "Option A — Kamakura (1hr from Tokyo by JR): Great Buddha (\u00A5300), Hasedera Temple (\u00A5400), Komachi-dori shopping street. Beach town vibe.",
                    "Option B — Nikko (2hrs from Tokyo by Tobu Railway): Toshogu Shrine (\u00A51,600), insanely ornate carvings, mountain setting. Less crowded.",
                    "Kamakura budget: \u00A53,000–4,500 ($20–30) for transport + entries + lunch.",
                    "Nikko budget: \u00A55,000–7,000 ($33–47) for transport + entries + lunch.",
                    "Both: Leave by 8am, back in Tokyo by 5pm. Bring your Suica card.",
                    "Lunch in Kamakura: shirasu (whitebait) rice bowl is the local speciality — \u00A51,200–1,500."
                  ]}
                  cost="\u00A55,000–8,000 ($33–53) including transport" />
                <DayCard day="Day 5" title="Ginza, Imperial Palace, Roppongi"
                  items={[
                    "9am: Imperial Palace East Gardens — free, open 9am–4pm. Beautiful moats and walls. Skip the main palace (you can’t enter).",
                    "11am: Ginza — window shop the department stores. Uniqlo flagship (12 floors), Itoya stationery (gorgeous). Free to browse.",
                    "Lunch: Ginza depachika (department store basement food hall) — bento boxes \u00A5800–1,200 that are works of art.",
                    "3pm: Roppongi Hills Mori Art Museum — \u00A52,000 ($13), includes rooftop observation deck. Always has excellent exhibits.",
                    "5pm: Last walk through Roppongi or Ebisu — Yebisu Garden Place for a quiet sunset beer.",
                    "Final dinner: Splurge on proper sushi at a standing sushi bar in Ginza — \u00A53,000–5,000 ($20–33) for excellent quality."
                  ]}
                  cost="\u00A58,000–12,000 ($53–80) including transport" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 5-Day Cost &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u00A540,000–60,000 ($267–400) including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: MID-RANGE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="text-sm font-medium text-blue-800">Mid-Range Plan &mdash; \u00A515,000–25,000/day ($100–167)</p>
                    <p className="text-xs text-blue-600 font-light">Stay: Business hotel in Shinjuku/Shibuya &middot; \u00A58,000–15,000/night ($53–100)</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Shibuya, Meiji Shrine, Harajuku, Shinjuku"
                  items={[
                    "9am: Meiji Shrine — free, serene forested walk. If you’re lucky, catch a traditional wedding procession.",
                    "11am: Harajuku — Takeshita Street, then walk Omotesando’s tree-lined luxury boulevard. Cat Street for indie shops.",
                    "Lunch: Bills Omotesando for ricotta pancakes (\u00A51,800/$12) or Afuri Harajuku for yuzu ramen (\u00A51,200/$8).",
                    "3pm: Shibuya Crossing — Shibuya Sky (\u00A52,000) for the aerial view. Book the sunset slot.",
                    "5pm: Ebisu — quieter, more local. Yebisu Beer Museum (free tasting \u00A5400).",
                    "Evening: Shinjuku Golden Gai — pick bars with English signs if you’re nervous. Most cover charges \u00A5500–1,000.",
                    "Dinner: Omoide Yokocho (Memory Lane) near Shinjuku Station — yakitori alley under the train tracks. \u00A52,000–3,000 for a full meal with drinks."
                  ]}
                  cost="\u00A515,000–20,000 ($100–133) including transport" />
                <DayCard day="Day 2" title="Tsukiji, TeamLab, Odaiba, Akihabara"
                  items={[
                    "7am: Tsukiji Outer Market — premium sushi breakfast at Sushi Dai or Daiwa Sushi. \u00A53,500–4,500 ($23–30). Queue 30–60 min.",
                    "10:30am: teamLab Borderless at Azabudai Hills — \u00A53,800. Pre-book or skip. No flexibility here.",
                    "2pm: Odaiba waterfront — unicorn Gundam, Palette Town. Take the Yurikamome monorail across Rainbow Bridge.",
                    "5pm: Akihabara — Yodobashi Camera (8 floors of electronics), Mandarake for vintage manga/anime. Super Potato for retro games.",
                    "Dinner: Kanda Matsuya for handmade soba noodles since 1884 — \u00A51,200 ($8). Cold seiro soba in summer is perfection."
                  ]}
                  cost="\u00A516,000–22,000 ($107–147) including transport" />
                <DayCard day="Day 3" title="Asakusa, Senso-ji, Ueno, Yanaka"
                  items={[
                    "8am: Senso-ji — the entire Asakusa district before 9am is magical. Incense hall, fortune slips (\u00A5100), Nakamise street.",
                    "10am: Rickshaw ride through old Asakusa — \u00A55,000 ($33) for 30 min. Surprisingly worthwhile, drivers speak English.",
                    "Lunch: Sometaro in Asakusa — cook-your-own okonomiyaki on a hot plate. \u00A51,500–2,000.",
                    "2pm: Ueno Park — Tokyo National Museum (\u00A51,000), then walk through to Yanaka.",
                    "4pm: Yanaka Ginza — the last old-Tokyo shopping street. Try menchi-katsu (fried meat patty) for \u00A5250.",
                    "Evening: Sumida River cruise to Hamarikyu Gardens — \u00A51,000 ($7). Green tea with city skyline views."
                  ]}
                  cost="\u00A515,000–20,000 ($100–133) including transport" />
                <DayCard day="Day 4" title="Day Trip: Kamakura OR Nikko"
                  items={[
                    "Kamakura (recommended for first-timers): Great Buddha → Hasedera Temple → Enoshima Island. Coastal town, 1hr from Tokyo.",
                    "Nikko (recommended for temple lovers): Toshogu Shrine complex is jaw-dropping. UNESCO World Heritage. Mountain air.",
                    "Mid-range Kamakura: hire a kimono (\u00A54,000/$27) and walk the bamboo temple (Hokokuji \u00A5300, matcha \u00A5600).",
                    "Lunch at Kamakura: fresh shirasu (whitebait) don at a harbour-side restaurant. \u00A51,800–2,500.",
                    "Return via Enoden line (cute coastal tram) if doing Kamakura. Great photos from Kamakura-koko-mae station.",
                    "Back in Tokyo by 6pm for a final Shinjuku evening."
                  ]}
                  cost="\u00A512,000–18,000 ($80–120) including transport" />
                <DayCard day="Day 5" title="Ginza, Imperial Palace, Roppongi"
                  items={[
                    "9am: Imperial Palace East Gardens — free. The Ninomaru garden is stunning in any season.",
                    "11am: Ginza — Tsukiji Hongwanji Temple (free, stunning architecture), then browse Ginza Six mall.",
                    "Lunch: Ginza depachika food hall in Mitsukoshi or Matsuya — wagyu bento \u00A52,000–3,000 ($13–20).",
                    "3pm: Mori Art Museum + rooftop at Roppongi Hills — \u00A52,000. Sky Deck is extra \u00A5500 but worth it on clear days.",
                    "5pm: Tokyo Tower (if you haven’t yet) — \u00A51,200 main deck. Less crowded than Skytree, more nostalgic.",
                    "Final dinner: Gonpachi Nishiazabu (the Kill Bill restaurant) — \u00A54,000–6,000 ($27–40) for a memorable last meal."
                  ]}
                  cost="\u00A516,000–23,000 ($107–153) including transport" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-blue-700 uppercase tracking-wide">Total 5-Day Cost &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u00A575,000–125,000 ($500–833) including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: LUXURY ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">\uD83D\uDC8E</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Luxury Plan &mdash; \u00A540,000+/day ($267+)</p>
                    <p className="text-xs text-purple-600 font-light">Stay: Park Hyatt / Aman Tokyo / The Peninsula &middot; \u00A560,000–150,000/night ($400–1,000)</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Shibuya, Omotesando, Private Shinjuku Evening"
                  items={[
                    "10am: Private guided tour of Meiji Shrine with a Shinto priest (book through hotel concierge) — \u00A515,000–20,000 ($100–133).",
                    "12pm: Omotesando lunch at Eataly or Anniversaire Café — \u00A54,000–6,000 ($27–40).",
                    "2pm: Shibuya Sky VIP sunset slot. Then shopping at Miyashita Park luxury floor.",
                    "5pm: Private onsen experience at THERMAE-YU Shinjuku — \u00A52,600 ($17) or hotel spa.",
                    "Evening: Omakase dinner at a Michelin-starred sushi counter — \u00A520,000–40,000 ($133–267). Book 2 months ahead.",
                    "Late night: Park Hyatt New York Bar (Lost in Translation bar) — \u00A53,000–5,000 for cocktails with the skyline."
                  ]}
                  cost="\u00A555,000–85,000 ($367–567) including transport" />
                <DayCard day="Day 2" title="Tsukiji, TeamLab, Luxury Odaiba"
                  items={[
                    "7am: Tsukiji private market tour with a chef — \u00A515,000–20,000 ($100–133). Includes sushi-making lesson.",
                    "11am: teamLab Borderless — \u00A53,800. Even luxury travellers queue here. No VIP line.",
                    "2pm: Odaiba — Hilton Tokyo Bay lunch with harbour views. \u00A55,000–8,000.",
                    "4pm: Akihabara — yes, even on luxury. Mandarake vintage finds can be genuinely valuable collectibles.",
                    "Evening: Ginza cocktail bar crawl — Star Bar Ginza or Gen Yamamoto. \u00A55,000–8,000 for the experience."
                  ]}
                  cost="\u00A548,000–70,000 ($320–467) including transport" />
                <DayCard day="Day 3" title="Asakusa, Private Rickshaw, Sumida River"
                  items={[
                    "8am: Private early-morning Senso-ji visit. The temple is free; the silence at 8am is priceless.",
                    "10am: Private rickshaw tour of Asakusa — 60 min, \u00A510,000–15,000 ($67–100). Covers hidden streets most miss.",
                    "12pm: Lunch at Asakusa Imahan — sukiyaki with A5 wagyu. \u00A58,000–12,000 ($53–80) per person.",
                    "2pm: Private water taxi on Sumida River to Hamarikyu Gardens — \u00A515,000 ($100).",
                    "4pm: Afternoon tea at The Peninsula Tokyo — \u00A56,500 ($43).",
                    "Evening: Roppongi — dinner at Joël Robuchon or RyuGin. \u00A525,000–45,000 ($167–300)."
                  ]}
                  cost="\u00A570,000–95,000 ($467–633) including transport" />
                <DayCard day="Day 4" title="Day Trip: Hakone or Kamakura (Private Car)"
                  items={[
                    "Hakone (recommended): Private car to Hakone, ryokan lunch with onsen, return by bullet train. \u00A540,000–60,000 total.",
                    "Kamakura: Private guide + driver through temples. Kimono rental + professional photoshoot available — \u00A530,000–45,000.",
                    "Hakone highlights: Open-air museum (\u00A51,800), ropeway over volcanic valley, Lake Ashi cruise, Mt. Fuji views.",
                    "Ryokan lunch with private onsen: \u00A515,000–25,000 ($100–167). Worth every yen.",
                    "Return via Odakyu Romance Car (private compartment) — scenic mountain railway."
                  ]}
                  cost="\u00A540,000–65,000 ($267–433) including transport" />
                <DayCard day="Day 5" title="Ginza, Imperial Palace, Farewell Dinner"
                  items={[
                    "9am: Imperial Palace guided tour (book online, free but limited spots). Inner grounds not usually open.",
                    "11am: Ginza shopping — Mikimoto pearls, Itoya stationery, Dover Street Market for fashion.",
                    "Lunch: Sukiyabashi Jiro-style omakase (Jiro is retired; try Sushi Saito or Harutaka) — \u00A530,000–50,000.",
                    "3pm: Nezu Museum — \u00A51,500, gorgeous Japanese garden. Quiet, elegant, underrated.",
                    "5pm: Hotel spa for final relaxation.",
                    "Farewell dinner: Narisawa (ranked among Asia’s best) — \u00A535,000–45,000 ($233–300). Book 3 months ahead."
                  ]}
                  cost="\u00A575,000–110,000 ($500–733) including transport" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 5-Day Cost &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u00A5500,000–900,000 ($3,333–6,000) including accommodation</span>
                </div>
              </div>
            )}
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\uD83D\uDCB0 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">\uD83D\uDCB0 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">\uD83D\uDC8E Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (5N)", "\u00A515,000–25,000 ($100–167)", "\u00A540,000–75,000 ($267–500)", "\u00A5300,000–750,000 ($2,000–5,000)"],
                    ["\uD83C\uDF5C Food & Drinks", "\u00A510,000–15,000 ($67–100)", "\u00A525,000–40,000 ($167–267)", "\u00A5100,000–200,000 ($667–1,333)"],
                    ["\uD83D\uDE89 Transport", "\u00A55,000–8,000 ($33–53)", "\u00A58,000–12,000 ($53–80)", "\u00A520,000–40,000 ($133–267)"],
                    ["\uD83C\uDFAF Activities", "\u00A58,000–12,000 ($53–80)", "\u00A515,000–25,000 ($100–167)", "\u00A580,000–150,000 ($533–1,000)"],
                    ["\uD83C\uDF76 Nightlife/Extras", "\u00A52,000–5,000 ($13–33)", "\u00A55,000–10,000 ($33–67)", "\u00A520,000–50,000 ($133–333)"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (5 days)</td>
                    {["\u00A540,000–60,000 ($267–400)","\u00A575,000–125,000 ($500–833)","\u00A5500,000–900,000 ($3,333–6,000)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices in \u00A5 (Japanese Yen), 2026. USD equivalent at ~\u00A5150/$1. Excludes international flights.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Tokyo"
            hotels={[
              { name: "Khaosan Tokyo Kabuki", type: "Budget Hostel · Asakusa", price: "From \u00A53,500/night ($23)", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/jp/khaosan-tokyo-kabuki.html?aid=2820480" },
              { name: "Shinjuku Granbell Hotel", type: "Boutique · Shinjuku", price: "From \u00A512,000/night ($80)", rating: "4", badge: "Mid-range pick", url: "https://www.booking.com/hotel/jp/shinjuku-granbell.html?aid=2820480" },
              { name: "Park Hyatt Tokyo", type: "Luxury · Shinjuku", price: "From \u00A565,000/night ($433)", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/jp/park-hyatt-tokyo.html?aid=2820480" },
            ]}
            activities={[
              { name: "teamLab Borderless Skip-the-Line", duration: "2–3 hours", price: "From \u00A53,800 ($25)", badge: "Must do", url: "https://www.getyourguide.com/s/?q=tokyo&partner_id=PSZA5UI" },
              { name: "Tsukiji Outer Market Food Tour", duration: "3 hours", price: "From \u00A58,000 ($53)", badge: "Food", url: "https://www.getyourguide.com/s/?q=tokyo&partner_id=PSZA5UI" },
              { name: "Kamakura Day Trip from Tokyo", duration: "Full day", price: "From \u00A510,000 ($67)", url: "https://www.getyourguide.com/s/?q=tokyo&partner_id=PSZA5UI" },
              { name: "Mt. Fuji & Hakone Day Tour", duration: "Full day", price: "From \u00A512,000 ($80)", url: "https://www.getyourguide.com/s/?q=tokyo&partner_id=PSZA5UI" },
            ]}
            pdfProductId="tokyo-5-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Tokyo — Must-See Places"
            subtitle="Click each thumbnail to explore Tokyo’s most iconic spots."
            spots={[
              { name: "Shibuya Crossing",    query: "shibuya crossing tokyo aerial view neon city night",           desc: "The world’s busiest intersection. Best viewed from above at Shibuya Sky, or cross it yourself during rush hour for the full adrenaline hit." },
              { name: "Senso-ji Temple",      query: "sensoji temple asakusa tokyo pagoda red lantern architecture", desc: "Tokyo’s oldest temple in Asakusa. The massive red Kaminarimon lantern gate is iconic. Arrive before 9am for empty photos." },
              { name: "Meiji Shrine",         query: "meiji shrine tokyo torii gate forest path architecture",       desc: "A Shinto shrine surrounded by 170 acres of forest in the middle of the city. Free entry, deeply peaceful." },
              { name: "Golden Gai",           query: "golden gai shinjuku tokyo narrow alley bars night neon",       desc: "Six narrow alleys crammed with 200+ tiny bars seating 5–8 people each. The most unique nightlife district in the world." },
              { name: "Tsukiji Market",       query: "tsukiji outer market tokyo seafood stalls food japan",         desc: "The outer market is still thriving with sushi breakfast stalls, tamagoyaki shops, and fresh seafood. Go at 7am, eat standing." },
            ]}
          />

          {/* ── MID-ARTICLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="tokyo shinjuku golden gai narrow alley bars neon night"
              alt="Golden Gai narrow alley bars in Shinjuku Tokyo"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Golden Gai, Shinjuku &mdash; 200+ bars in six alleys, each seating 5&ndash;8 people. Cover charge \u00A5500&ndash;1,000 usually includes your first drink.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Not getting a Suica/Pasmo card", desc: "Buying individual metro tickets wastes 5–10 minutes every ride. Get a Suica at the airport and top up. Works on all trains, buses, even convenience stores.", icon: "\uD83D\uDCB3" },
                { title: "Buying a JR Pass for Tokyo only", desc: "The JR Pass costs \u00A550,000+ and only covers JR lines. Most Tokyo sightseeing uses Metro lines, not JR. Only buy the JR Pass if you’re also going to Kyoto/Osaka.", icon: "\uD83D\uDE85" },
                { title: "Skipping teamLab booking", desc: "teamLab Borderless sells out weeks ahead. If you don’t pre-book online, you will not get in. No walk-ups, no exceptions.", icon: "\uD83C\uDFA8" },
                { title: "Only eating at restaurants", desc: "Convenience store food in Japan is genuinely excellent. A \u00A5150 ($1) onigiri from 7-Eleven or FamilyMart is a legitimate meal. Depachika food halls in department stores are world-class.", icon: "\uD83C\uDF71" },
                { title: "Taking taxis everywhere", desc: "Tokyo taxis start at \u00A5500 and add up fast. A 20-minute ride can cost \u00A53,000–5,000 ($20–33). The metro goes everywhere and runs until midnight.", icon: "\uD83D\uDE95" },
                { title: "Ignoring cash", desc: "Japan is still heavily cash-based. Many small restaurants, shrines, and street food stalls don’t take cards. Withdraw \u00A530,000–50,000 at a 7-Eleven ATM on arrival.", icon: "\uD83D\uDCB4" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\uD83D\uDCA1 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\uD83D\uDE89", title: "Tokyo Metro 24hr Pass", desc: "Only \u00A5600 ($4) for unlimited rides on all Tokyo Metro lines for 24 hours. If you’re hitting 4+ stations in a day, this pays for itself by lunchtime.", color: "bg-blue-50 border-blue-200" },
                { icon: "\uD83C\uDFEA", title: "Convenience Stores Are King", desc: "7-Eleven, FamilyMart, Lawson — for ATMs (international cards), onigiri, bento boxes, bills payment, event tickets, and surprisingly good coffee. Open 24/7.", color: "bg-blue-50 border-blue-200" },
                { icon: "\uD83D\uDCF1", title: "Download Before You Go", desc: "Google Maps (offline Tokyo map), Google Translate (Japanese offline pack), Suica app (or physical card). These three apps solve 90% of tourist confusion.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF38", title: "Cherry Blossom Timing", desc: "Usually late March to mid-April. Check japan-guide.com/sakura for real-time forecasts. Ueno Park and Shinjuku Gyoen are the best spots in central Tokyo.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83E\uDDF3", title: "Coin Lockers Are Everywhere", desc: "Station coin lockers: \u00A5300–600 for the day. Store your bags and explore hands-free. Large sizes at major stations (Tokyo, Shinjuku, Shibuya) fill up by noon.", color: "bg-purple-50 border-purple-200" },
                { icon: "\uD83C\uDFB4", title: "Tipping Is Rude", desc: "Do not tip in Japan. Not at restaurants, not to taxi drivers, not at hotels. It’s considered insulting. If you leave money on the table, staff will chase you down to return it.", color: "bg-purple-50 border-purple-200" },
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
              Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Tokyo itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Tokyo Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days do you need in Tokyo?", a: "5 days is ideal to cover Tokyo’s main highlights without rushing. 3 days works if you skip the day trip. 7 days lets you add Hakone, Yokohama, and explore neighbourhoods at a relaxed pace." },
                { q: "What is the best time to visit Tokyo?", a: "Late March to mid-April for cherry blossoms, or mid-October to November for autumn foliage. May and September–October offer mild weather with fewer tourists. Avoid Golden Week (late April to early May) and Obon (mid-August)." },
                { q: "How much does a 5-day Tokyo trip cost?", a: "Budget: \u00A540,000–60,000 ($267–400) total. Mid-range: \u00A575,000–125,000 ($500–833) total. Luxury: \u00A5500,000+ ($3,333+). All figures exclude international flights and include accommodation, food, transport and activities." },
                { q: "Do Indian passport holders need a visa for Japan?", a: "Yes. Indian passport holders must apply for a tourist visa at the Japanese Embassy or Consulate. Processing takes 5–7 working days. Most Western passport holders (US, UK, EU, Australia) get visa-free entry for up to 90 days." },
                { q: "Do I need a JR Pass for Tokyo?", a: "For Tokyo only, no. A Suica or Pasmo IC card is cheaper and more convenient. The JR Pass only makes financial sense if you’re also taking bullet trains to Kyoto, Osaka, or other cities." },
                { q: "Is Tokyo easy to navigate without Japanese?", a: "Yes. The metro has English signage everywhere, Google Maps gives perfect transit directions with platform numbers, and most restaurants have picture menus. Download Google Translate with the Japanese offline pack for signs and menus." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Japan Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kyoto — 4 Day Temple & Culture Guide", href: "/blog/kyoto-4-days", soon: false },
                { label: "Osaka — 3 Day Food & Fun Guide", href: "/blog/osaka-3-days", soon: false },
                { label: "Goa — 3 Day Beach Guide", href: "/blog/goa-3-days", soon: false },
                { label: "Browse All Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="tokyo-5-days" />
          <RelatedGuides currentSlug="tokyo-5-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
