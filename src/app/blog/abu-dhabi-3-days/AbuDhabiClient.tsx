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

const ABU_DHABI_TOC = [
  { id: "plans",       emoji: "⚡", label: "Which Plan Are You?" },
  { id: "practical",   emoji: "✧", label: "Practical Info" },
  { id: "itineraries", emoji: "✧", label: "The Itineraries" },
  { id: "budget",      emoji: "✧", label: "Budget Breakdown" },
  { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "✧", label: "Pro Tips" },
  { id: "faq",         emoji: "❓", label: "FAQ" },
];

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

function ShareBar() {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      {[
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Abu Dhabi 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Abu Dhabi in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
      ].map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}>{s.label}</a>
      ))}
      <button onClick={copy} className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">
        {copied ? "✓ Copied" : "Copy Link"}
      </button>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="font-serif text-lg font-light text-ink">{value}</p>
      <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  );
}

function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors">
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
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">{"●"}</span>{item}
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

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors">
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

export default function AbuDhabiClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "AED 250–450/day", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "✨", label: "Comfortable", sub: "AED 500–1,000/day", color: "border-blue-300 bg-blue-50 text-blue-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={ABU_DHABI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Abu Dhabi" />

      <main className="bg-cream min-h-screen">
        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="abu dhabi sheikh zayed grand mosque white"
            fallback="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=1600&q=85"
            alt="Sheikh Zayed Grand Mosque Abu Dhabi"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link><span>/</span>
              <span className="text-white/70">Abu Dhabi 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Culture & Architecture</span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Abu Dhabi in 3 Days: The Only Guide You Need
                <em className="italic text-gold-light"> (Budget to Comfortable, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                2 complete plans with real timings, actual costs in AED and USD &mdash; and the cultural experiences most visitors miss entirely.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>{"\uD83C\uDDE6\uD83C\uDDEA"} UAE</span><span>{"·"}</span>
              <span>{"\uD83D\uDDD3"} 3 Days</span><span>{"·"}</span>
              <span>{"\uD83D\uDCB0"} From AED 750</span>
            </div>
          </div>

          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Sheikh Zayed Grand Mosque at golden hour is the most beautiful building I&apos;ve seen in the Middle East. The white marble reflecting sunset light &mdash; photos don&apos;t capture it. You have to stand in that courtyard yourself.
            </p>
          </blockquote>

          {/* ── PLANS ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your budget level.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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

          {/* ── PRACTICAL ── */}
          <section id="practical" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"✧"} Before You Go</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">Essential info that saves time and money.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Visa Requirements", emoji: "\uD83D\uDCC4", bg: "bg-blue-50 border-blue-200", th: "text-blue-800",
                  rows: [["Indian passport","UAE visa required — same visa covers Dubai + Abu Dhabi. AED 350–500, 3–5 working days online"],["US / UK / EU / AU","Visa-on-arrival for 30 days — free"],["Dress code","Modest clothing at Sheikh Zayed Mosque: shoulders and knees covered, women need a headscarf (free loaners available)"]],
                  note: "If you already have a Dubai visa, it covers Abu Dhabi. One UAE visa = full country access." },
                { title: "Getting Around", emoji: "\uD83D\uDE8C", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["From Dubai","Bus E100/E101: AED 25, 2hrs. Taxi: AED 250–350, 1.5hrs. Better value than renting a car for 3 days."],["Local bus","Darb system, AED 2/ride. Hafilat card (like Dubai Nol) required"],["Taxi","Metered, reliable. Abu Dhabi is spread out — budget AED 20–40 per ride"],["Airport","AUH to downtown: taxi AED 70–90, 30 min"]],
                  note: "Abu Dhabi is more spread out than Dubai. Budget for taxis between major attractions — they’re 15–30 min apart." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}><span>{area.emoji}</span>{area.title}</h3>
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
                <strong className="font-medium text-ink">Culture note:</strong> Abu Dhabi is more conservative than Dubai. Dress modestly in public areas. Public displays of affection are frowned upon. Alcohol is only available in licensed hotels and restaurants.
              </p>
            </div>
          </section>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="3 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="AED 750" />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Nov – Mar" />
            <StatCard icon={"\u2708\uFE0F"} label="Airport" value="AUH" />
          </div>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"✧"} The Itineraries</h2>
            <p className="text-sm text-muted font-light mb-6">Click a plan &mdash; days are expandable/collapsible.</p>

            <div className="flex gap-2 flex-wrap mb-8 p-1 bg-parchment rounded-xl">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 ${
                    activeTab === p.id ? "bg-white shadow text-ink border border-parchment-2" : "text-muted hover:text-ink"
                  }`}>{p.emoji} {p.label}</button>
              ))}
            </div>

            {/* ── PLAN A: BUDGET ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDCB0"}</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; City Centre Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Budget hotel near Corniche &middot; AED 120&ndash;200/night &middot; Bus + taxi mix</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Sheikh Zayed Mosque + Corniche"
                  items={[
                    "9am: Sheikh Zayed Grand Mosque — free entry, opens 9am (Fri: 4:30pm). Arrive early for empty courtyards. Dress modestly, free abayas available.",
                    "Budget 2–2.5 hours minimum. The prayer hall, reflective pools, and 82 marble domes deserve slow exploration.",
                    "12pm: Lunch at Al Mina Fish Market area — pick your fish, have it cooked for AED 30–50 at adjacent restaurants",
                    "2pm: Corniche Beach — free public sections with clean white sand, AED 10 entry for the gated beach with facilities",
                    "5pm: Walk the 8km Corniche promenade — free, stunning views of the city skyline across the water",
                    "7pm: Dinner at one of the food trucks at Corniche — AED 25–45 for shawarma, manakeesh, or grilled chicken",
                  ]}
                  cost="AED 80–150 excluding accommodation" />
                <DayCard day="Day 2" title="Louvre Abu Dhabi + Saadiyat Island"
                  items={[
                    "9am: Bus to Saadiyat Island (AED 2) or taxi (AED 25–35)",
                    "10am: Louvre Abu Dhabi — AED 63 entry (free under 18). The architecture alone is worth the trip: Jean Nouvel’s rain of light dome.",
                    "Budget 3 hours. The collection spans 6,000 years of human history across 12 galleries.",
                    "1:30pm: Lunch at the Louvre cafe or bring your own — AED 50–80 for cafe lunch",
                    "3pm: Saadiyat Beach — AED 25 public beach entry, turquoise water, significantly less crowded than Dubai beaches",
                    "6pm: Return to city. Dinner at Lebanese restaurant in Tourist Club Area — AED 30–50 for a full mezze spread",
                  ]}
                  cost="AED 150–250 excluding accommodation" />
                <DayCard day="Day 3" title="Yas Island + Heritage Village + Departure"
                  items={[
                    "8am: Bus to Yas Island (AED 2) or taxi (AED 40–60)",
                    "9am: Yas Marina Circuit — free to walk around, AED 50 for guided tour. If F1 fan, don’t miss the Yas Hotel straddling the track.",
                    "Optional: Ferrari World (AED 310) or Warner Bros World (AED 315) if theme parks are your thing. Pick one, not both.",
                    "1pm: Lunch at Yas Mall food court — AED 30–50",
                    "3pm: Heritage Village on the Breakwater — free entry, recreated traditional Emirati village with pottery, weaving demonstrations",
                    "5pm: Sunset from the Breakwater with the skyline behind you — best free photo spot in Abu Dhabi",
                    "Head to airport. AUH is on Yas Island — 10 min taxi from Yas Mall.",
                  ]}
                  cost="AED 100–400 excluding accommodation (depends on theme parks)" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">AED 750–1,350 ($204–$368 USD) including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: COMFORTABLE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">{"✨"}</span>
                  <div>
                    <p className="text-sm font-medium text-blue-800">Comfortable Plan &mdash; Corniche / Saadiyat Base</p>
                    <p className="text-xs text-blue-600 font-light">Stay: 4-star hotel with breakfast &middot; AED 350&ndash;600/night &middot; Taxi + some tours</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Sheikh Zayed Mosque Golden Hour + Cultural Dinner"
                  items={[
                    "4pm: Sheikh Zayed Grand Mosque — arrive for golden hour. The white marble turns gold as the sun sets. Stay until the lights come on at dusk.",
                    "The mosque at night is a completely different experience — illuminated against the dark sky, the reflective pools become mirrors.",
                    "Budget 2.5–3 hours spanning sunset. This is the single best experience in Abu Dhabi.",
                    "8pm: Dinner at Emirates Palace (now Mandarin Oriental) — Le Cafe for the famous gold-flake cappuccino (AED 65) and pastries. The lobby is free to walk through.",
                    "Or: dinner at Li Beirut for Lebanese fine dining — AED 200–350 for two courses with a view",
                  ]}
                  cost="AED 200–400 excluding accommodation" />
                <DayCard day="Day 2" title="Louvre + Saadiyat Beach + Mangrove Kayaking"
                  items={[
                    "9am: Louvre Abu Dhabi — AED 63. Book the 9am slot online for the emptiest experience. The dome’s rain of light is best in the morning.",
                    "12pm: Lunch at the museum restaurant with water views — AED 80–150",
                    "2pm: Saadiyat Beach Club — AED 100–150 day pass includes sunbed, pool, and beach access",
                    "5pm: Mangrove National Park kayaking — AED 100–175 for a guided 2-hour kayak through the mangroves. Spot herons, flamingos, and sea turtles.",
                    "8pm: Dinner at Al Mrzab in the Founders Memorial area — Emirati fine dining, AED 150–250",
                  ]}
                  cost="AED 400–650 excluding accommodation" />
                <DayCard day="Day 3" title="Qasr Al Watan + Yas Island + Departure"
                  items={[
                    "9am: Qasr Al Watan (Presidential Palace) — AED 65 entry. The grand hall, library, and gardens are stunning. Open to public since 2019.",
                    "11:30am: Drive to Yas Island (30 min). Ferrari World or Warner Bros World — AED 310–315",
                    "Or: Yas Links golf course (AED 400–700) or Yas Waterworld (AED 290)",
                    "2pm: Lunch at Cipriani, Yas Marina — AED 200–350 for Italian with marina views",
                    "4pm: Sunset at Yas Beach — AED 50–100 for a sunbed and the view of the marina",
                    "Airport is 10 min from Yas — perfect for a last-day plan",
                  ]}
                  cost="AED 450–800 excluding accommodation" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-blue-700 uppercase tracking-wide">Total 3-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">AED 2,000–4,000 ($545–$1,090 USD) including accommodation</span>
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
                    <th className="p-3.5 text-xs font-medium text-blue-700 text-center">{"✨"} Comfortable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "AED 360–600", "AED 1,050–1,800"],
                    ["\uD83C\uDF7D Food & Drinks", "AED 180–300", "AED 500–900"],
                    ["\uD83D\uDE95 Transport", "AED 60–150", "AED 200–400"],
                    ["\uD83C\uDFAF Activities", "AED 120–350", "AED 400–800"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["AED 750–1,350\n($204–$368)","AED 2,000–4,000\n($545–$1,090)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center whitespace-pre-line">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">All prices in AED (2026). 1 AED = ~$0.27 USD.</p>
          </section>

          <DestinationGallery
            title="Abu Dhabi — Must-See Places"
            subtitle="Click each thumbnail to explore Abu Dhabi's most stunning landmarks."
            spots={[
              { name: "Sheikh Zayed Grand Mosque", query: "sheikh zayed grand mosque abu dhabi white marble domes courtyard", desc: "The most beautiful mosque in the UAE. Free entry. Visit at golden hour for the marble reflecting sunset light." },
              { name: "Louvre Abu Dhabi",           query: "louvre abu dhabi dome architecture rain light water",              desc: "Jean Nouvel's masterpiece. AED 63 entry. The dome creates a mesmerising rain of light effect." },
              { name: "Qasr Al Watan",              query: "qasr al watan abu dhabi palace white architecture dome interior", desc: "The Presidential Palace, open since 2019. AED 65 entry for the most ornate building in the UAE." },
              { name: "Corniche Beach",             query: "abu dhabi corniche skyline beach turquoise water cityscape",      desc: "8km of pristine waterfront with the city skyline as backdrop. Free public sections available." },
              { name: "Mangrove National Park",     query: "abu dhabi mangrove kayak nature green water peaceful",            desc: "Kayak through protected mangroves just 15 minutes from downtown. AED 100 for a guided tour." },
            ]}
          />

          {/* ── MOSQUE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="sheikh zayed mosque abu dhabi night illuminated reflections"
              fallback="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=900&q=80"
              alt="Sheikh Zayed Grand Mosque illuminated at night"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Sheikh Zayed Grand Mosque at night. The illumination transforms white marble into a glowing beacon. Free entry, best visited at golden hour through dusk.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting the mosque at midday", desc: "The white marble is blinding at noon and the heat is brutal. Visit at 4–5pm for golden hour or 9am for empty courtyards.", icon: "\uD83D\uDD4C" },
                { title: "Only doing Abu Dhabi as a Dubai day trip", desc: "A rushed 6-hour visit misses Louvre, Saadiyat Beach, and the mosque at golden hour. Give it 2–3 days minimum.", icon: "\u23F0" },
                { title: "Forgetting the dress code", desc: "Shoulders and knees must be covered at the mosque. Women need a headscarf. Free abayas available but the queue to get one can be 20 minutes.", icon: "\uD83D\uDC57" },
                { title: "Skipping Louvre Abu Dhabi", desc: "People go to Abu Dhabi for the mosque and leave. The Louvre is a world-class museum with a building that alone justifies the trip.", icon: "\uD83C\uDFDB\uFE0F" },
                { title: "Not booking theme parks online", desc: "Walk-up prices at Ferrari World and Warner Bros are AED 30–50 more than online. Book 1–2 days ahead for the best rate.", icon: "\uD83C\uDFA2" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\uD83C\uDF05", title: "Mosque Golden Hour", desc: "Arrive at 4–4:30pm, stay through sunset and into the illuminated night. You’ll see three completely different versions of the mosque in 2 hours.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDFDB\uFE0F", title: "Louvre Morning Hack", desc: "Book the 9am slot. By 11am tour groups arrive. The dome’s rain of light effect is strongest in the morning sun.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDE95", title: "DARB Transport Card", desc: "AED 10 for the card + credit. Works on all Abu Dhabi buses (AED 2/ride). Much cheaper than taxis for budget travellers.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDCB0", title: "Free Things in Abu Dhabi", desc: "Sheikh Zayed Mosque (free), Heritage Village (free), Corniche walk (free), Founders Memorial (free), Mangrove Boardwalk (free). Abu Dhabi’s best experiences cost nothing.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDF74", title: "Eat at Al Mina", desc: "The fish market area near the port has the best-value seafood in the city. Pick your catch, pay AED 10–15 cooking fee at the adjacent restaurant.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83D\uDCC5", title: "Abu Dhabi vs Dubai", desc: "Abu Dhabi for culture, architecture, and a genuine Emirati experience. Dubai for shopping, nightlife, and entertainment. They’re 1.5 hours apart and complement each other perfectly.", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want This Planned for You?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Abu Dhabi itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Abu Dhabi Trip {"→"}</button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days do you need in Abu Dhabi?", a: "3 days is ideal. 2 days works as a Dubai extension but you’ll miss the beaches and Yas Island. 4+ days lets you add a desert trip or Sir Bani Yas Island." },
                { q: "Is Abu Dhabi worth visiting if I’ve seen Dubai?", a: "Completely different experience. Abu Dhabi is culturally richer (Sheikh Zayed Mosque, Louvre), less commercial, and more spacious. The Emirati heritage is much more visible here." },
                { q: "How much does a 3-day trip cost?", a: "Budget: AED 750–1,350 ($204–$368). Comfortable: AED 2,000–4,000 ($545–$1,090). Both include accommodation, food, transport and activities." },
                { q: "Do I need a separate visa for Abu Dhabi?", a: "No. The UAE visa covers all emirates. If you have a Dubai visa, you can visit Abu Dhabi freely. Visa-on-arrival for US, UK, EU, AU, CA citizens (30 days free)." },
                { q: "What is the best time to visit?", a: "November–March for outdoor comfort (20–28°C). Abu Dhabi Grand Prix in November is exciting but expensive. May–September is 45°C+ but hotel prices drop 40–60%." },
                { q: "Can I drink alcohol in Abu Dhabi?", a: "Only in licensed hotels, restaurants, and clubs. You cannot buy alcohol from shops without a liquor license. Public intoxication is a criminal offence." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <AffiliateBlock
            destination="Abu Dhabi"
            hotels={[
              { name: "Centro Yas Island", type: "Budget Modern · Yas Island", price: "From AED 180/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/ae/centro-yas-island.html?aid=2820480" },
              { name: "Saadiyat Rotana", type: "Beachfront Resort · Saadiyat", price: "From AED 500/night", rating: "5", badge: "Best value", url: "https://www.booking.com/hotel/ae/saadiyat-rotana.html?aid=2820480" },
              { name: "Emirates Palace", type: "Ultra-Luxury · Corniche", price: "From AED 1,800/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/ae/emirates-palace.html?aid=2820480" },
            ]}
            activities={[
              { name: "Louvre Abu Dhabi Skip-the-Line", duration: "3 hours", price: "From AED 63", badge: "Must do", url: "https://www.getyourguide.com/s/?q=abu-dhabi&partner_id=PSZA5UI" },
              { name: "Mangrove Kayaking Tour", duration: "2 hours", price: "From AED 100", badge: "Nature", url: "https://www.getyourguide.com/s/?q=abu-dhabi&partner_id=PSZA5UI" },
              { name: "Ferrari World Day Pass", duration: "Full day", price: "From AED 295", url: "https://www.getyourguide.com/s/?q=abu-dhabi&partner_id=PSZA5UI" },
              { name: "Sheikh Zayed Mosque Guided Tour", duration: "1.5 hours", price: "Free", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=abu-dhabi&partner_id=PSZA5UI" },
            ]}
          />

          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Middle East Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Dubai — 4 Day Guide", href: "/blog/dubai-4-days" },
                { label: "Muscat, Oman — 3 Day Guide", href: "/blog/muscat-3-days" },
                { label: "Browse All Itineraries", href: "/blog" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View {"→"}</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="abu-dhabi-3-days" />
          <RelatedGuides currentSlug="abu-dhabi-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
