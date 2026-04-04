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

const ROME_TOC = [
  { id: "plans",      emoji: "\u26A1", label: "Which Plan Are You?" },
  { id: "practical",  emoji: "\✦", label: "Practical Info" },
  { id: "itineraries", emoji: "\✦", label: "The Itineraries" },
  { id: "budget",     emoji: "\✦", label: "Budget Breakdown" },
  { id: "mistakes",   emoji: "\u274C", label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "\✦", label: "Pro Tips" },
  { id: "faq",        emoji: "\u2753", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Rome 4-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Rome in 4 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
                <span className="text-gold mt-1 flex-shrink-0 text-xs">\u25CF</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">\✦</span>
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
export default function RomeClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\✦", label: "Budget", sub: "\u20AC60\u2013100/day", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\u2728", label: "Mid-Range", sub: "\u20AC120\u2013200/day", color: "border-blue-300 bg-blue-50 text-blue-800" },
    { id: "C" as const, emoji: "\✦", label: "Luxury", sub: "\u20AC300+/day", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={ROME_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Rome" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="rome colosseum ancient architecture italy"
            fallback="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600&q=85"
            alt="Rome Colosseum at golden hour"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          {/* Breadcrumb overlay */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Rome 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  History & Culture
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/30">&middot;</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/30">&middot;</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Rome in 4 Days: The Complete Guide
                <em className="italic text-gold-light"> (Budget to Luxury, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, actual costs in EUR &amp; USD, first-entry Vatican tips &mdash; and the mistakes that ruin most Rome trips.
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
              <span>\✦\✦ Italy</span>
              <span>&middot;</span>
              <span>\✦ 4 Days</span>
              <span>&middot;</span>
              <span>\✦ From \u20AC60/day</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Sistine Chapel at 7:30am first entry vs 2pm general admission is the difference between a spiritual experience and a cattle pen. Book first entry. It&apos;s worth every extra euro.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\u26A1 Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your budget &mdash; jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan &rarr;</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── PRACTICAL INFO ── */}
          <section id="practical" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\✦ Practical Information</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Everything you need to know before booking.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Visa Requirements", emoji: "\✦", bg: "bg-blue-50 border-blue-200", th: "text-blue-800",
                  rows: [["Indian passport", "Schengen visa required \u2014 apply 3 months ahead at VFS Global, \u20AC80 fee, 15 working days processing"],["US / UK / AU / CA","Visa-free for 90 days within any 180-day period"],["Documents","Return flight, hotel booking, travel insurance (\u20AC30k medical minimum), bank statements (3 months)"]],
                  note: "Book your VFS appointment before anything else \u2014 slots fill up 6\u20138 weeks ahead in peak season." },
                { title: "Getting Around", emoji: "\✦", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Metro","2 lines (A + B), \u20AC1.50 single, \u20AC7 day pass. Useful for Termini \u2192 Vatican \u2192 Colosseum"],["Roma Pass","\u20AC52/72hrs: free metro + 2 museum entries + discounts. Worth it for most visitors"],["Walking","Central Rome is walkable \u2014 Colosseum to Vatican is 35 min on foot"],["Airport","Fiumicino \u2192 Termini: Leonardo Express \u20AC14, 32 min. Skip taxis (\u20AC50+)"]],
                  note: "Never take a taxi that doesn\u2019t have a meter running. Fixed rate Fiumicino\u2192city centre is \u20AC50 \u2014 agree before getting in." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/60 w-28 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">\u26A0\uFE0F {area.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Pickpocket warning:</strong> Termini station, Metro line A, Trevi Fountain, and the Colosseum queue are the worst spots. Use a cross-body bag with a zip. Leave your passport in the hotel safe &mdash; carry a photocopy.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="\✦" label="Duration" value="4 Days" />
            <StatCard icon="\✦" label="Budget From" value="\u20AC60/day" />
            <StatCard icon="\✦\uFE0F" label="Best Months" value="Apr\u2013May, Sep\u2013Oct" />
            <StatCard icon="\u2708\uFE0F" label="Airport" value="Fiumicino (FCO)" />
          </div>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\✦ The Itineraries</h2>
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
                  <span className="text-2xl">\✦</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; \u20AC60\u2013100/day ($65\u2013108 USD)</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Hostels near Termini or Trastevere &middot; \u20AC25\u201345/night &middot; Roma Pass recommended</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Colosseum + Roman Forum + Palatine Hill"
                  items={[
                    "Buy the combo ticket online (\u20AC18 / $19.50 USD) \u2014 covers all three, valid 24 hours. Skip-the-line entrance.",
                    "8:30am: Colosseum first entry \u2014 arrive 15 min early. 1.5 hours inside is enough.",
                    "10:30am: Walk directly into Roman Forum + Palatine Hill (same ticket). Palatine has the best views. 2 hours.",
                    "1pm: Lunch near Monti neighbourhood \u2014 supplì (fried rice balls) \u20AC1.50 each. Best cheap lunch in Rome.",
                    "3pm: Trevi Fountain \u2014 arrive mid-afternoon, less crowded than evening. Free.",
                    "4pm: Spanish Steps (free) \u2192 walk down Via dei Condotti for window shopping.",
                    "Dinner: Pizza al taglio in Trastevere \u2014 \u20AC3\u20135 for a filling meal. Eat standing like a Roman."
                  ]}
                  cost="\u20AC35\u201355 / $38\u201360 USD (excl. accommodation)" />
                <DayCard day="Day 2" title="Vatican Museums + Sistine Chapel + St. Peter's"
                  items={[
                    "7:30am FIRST ENTRY to Vatican Museums (\u20AC38 / $41 USD) \u2014 book online weeks ahead. This is the single best ticket in Rome.",
                    "Sistine Chapel is nearly empty at 7:30am. By 10am it\u2019s shoulder-to-shoulder. You have ~90 minutes of relative peace.",
                    "Exit through the door to St. Peter\u2019s Basilica (ask a guard \u2014 this shortcut skips the outside queue entirely).",
                    "St. Peter\u2019s Basilica: free entry. Climb the dome \u20AC8 (stairs) or \u20AC10 (elevator + stairs) for the best view in Rome.",
                    "1pm: Lunch at Pizzarium Bonci near Vatican \u2014 Rome\u2019s best pizza al taglio. \u20AC5\u20138 fills you up.",
                    "3pm: Castel Sant\u2019Angelo (\u20AC17 / $18.50 USD, or free with Roma Pass). Rooftop terrace has incredible Tiber views.",
                    "Evening: Walk Ponte Sant\u2019Angelo at sunset \u2014 one of Rome\u2019s most photogenic spots. Free."
                  ]}
                  cost="\u20AC50\u201370 / $54\u201376 USD (excl. accommodation)" />
                <DayCard day="Day 3" title="Trastevere + Pantheon + Piazza Navona"
                  items={[
                    "9am: Cross into Trastevere \u2014 Rome\u2019s most photogenic neighbourhood. Wander the cobblestone streets.",
                    "10am: Join a free walking food tour or self-guide: try supplì at Supplizio, trapizzino at Trapizzino.",
                    "If the restaurant has picture menus in 6 languages and a guy standing outside waving you in, the food is terrible. Walk two streets deeper.",
                    "1pm: Pantheon (free since 2023 \u2014 now \u20AC5 entry). 15 minutes is enough. The oculus in the rain is unforgettable.",
                    "2pm: Piazza Navona \u2014 Bernini\u2019s Fountain of the Four Rivers. Sit, don\u2019t buy anything from the overpriced terraces.",
                    "3pm: Campo de\u2019 Fiori market (mornings are best, but afternoon has cheaper deals). Fresh fruit, spices, limoncello.",
                    "Evening: Pizza al taglio from a hole-in-the-wall in Trastevere at midnight \u2014 Rome\u2019s best pizza isn\u2019t in restaurants, it\u2019s in shops the size of your bathroom."
                  ]}
                  cost="\u20AC25\u201340 / $27\u201343 USD (excl. accommodation)" />
                <DayCard day="Day 4" title="Borghese Gallery + Villa Borghese + Testaccio"
                  items={[
                    "9am: Borghese Gallery (\u20AC15 / $16 USD) \u2014 MUST pre-book, entry is timed 2-hour slots, sells out weeks ahead. Bernini\u2019s sculptures here are worth the trip to Rome alone.",
                    "11am: Walk through Villa Borghese gardens \u2014 Rome\u2019s Central Park. Rent a rowboat on the lake (\u20AC3/20min). Free entry to gardens.",
                    "1pm: Head to Testaccio \u2014 Rome\u2019s real food neighbourhood, not a tourist zone.",
                    "Testaccio Market: covered market with incredible street food. Trapizzino \u20AC3.50, supplì \u20AC1.50, pasta boxes \u20AC5\u20137.",
                    "3pm: Protestant Cemetery (donation entry) \u2014 Keats and Shelley are buried here. Genuinely peaceful and beautiful.",
                    "4pm: Aventine Hill \u2014 peek through the Knights of Malta keyhole for a perfectly framed St. Peter\u2019s dome. Free, 5-minute queue.",
                    "Last dinner: proper Roman trattoria in Testaccio. Cacio e pepe + artichokes + house wine \u2014 \u20AC20\u201325/person."
                  ]}
                  cost="\u20AC30\u201350 / $32\u201354 USD (excl. accommodation)" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 4-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u20AC240\u2013400 / $260\u2013432 USD including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: MID-RANGE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">\u2728</span>
                  <div>
                    <p className="text-sm font-medium text-blue-800">Mid-Range Plan &mdash; \u20AC120\u2013200/day ($130\u2013216 USD)</p>
                    <p className="text-xs text-blue-600 font-light">Stay: 3-4 star hotel in Centro Storico or Trastevere &middot; \u20AC80\u2013150/night</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Colosseum + Forum + Evening Trastevere"
                  items={[
                    "Colosseum Arena Floor + Underground combo ticket (\u20AC24 / $26 USD) \u2014 the arena floor access lets you stand where gladiators fought. Worth the upgrade.",
                    "8:30am entry, 2 hours for Colosseum underground + arena floor.",
                    "10:30am: Roman Forum + Palatine Hill \u2014 hire an audio guide (\u20AC5.50) or download the free Rick Steves app.",
                    "1pm: Lunch at Roscioli Salumeria \u2014 book ahead. Best carbonara in Rome. \u20AC15\u201320/plate.",
                    "3:30pm: Trevi Fountain \u2192 Spanish Steps \u2192 gelato at Giolitti or Fatamorgana (both authentic, \u20AC3\u20134).",
                    "7pm: Dinner in Trastevere at Da Enzo al 29 \u2014 queue from 6:30pm, no reservations, worth the wait. \u20AC25\u201330/person.",
                    "After dinner: stroll along the Tiber with gelato."
                  ]}
                  cost="\u20AC80\u2013120 / $86\u2013130 USD (excl. accommodation)" />
                <DayCard day="Day 2" title="Vatican First Entry + Castel Sant'Angelo"
                  items={[
                    "7:30am FIRST ENTRY Vatican Museums (\u20AC38 / $41 USD) \u2014 the most important booking of your entire trip.",
                    "Sistine Chapel nearly empty. Spend 20 minutes here before the crowds arrive. Look up \u2014 the Last Judgment on the altar wall is Michelangelo\u2019s masterpiece.",
                    "Use the side exit to St. Peter\u2019s Basilica \u2014 skip the 45-minute outdoor queue.",
                    "Climb St. Peter\u2019s dome (\u20AC10 elevator option) \u2014 the view from the top is the single best panorama in Rome.",
                    "11:30am: Castel Sant\u2019Angelo (\u20AC17 / $18.50 USD). Former papal fortress with incredible rooftop bar.",
                    "1pm: Lunch at Pizzarium Bonci \u2014 the Vatican\u2019s secret weapon for food. \u20AC8\u201312 for a feast.",
                    "Afternoon: Shopping on Via del Corso or rest at hotel.",
                    "Evening: Sunset aperitivo at Hotel Raphael rooftop \u2014 \u20AC15\u201320 for a drink with a view of every dome in Rome."
                  ]}
                  cost="\u20AC90\u2013140 / $97\u2013151 USD (excl. accommodation)" />
                <DayCard day="Day 3" title="Trastevere Food Tour + Pantheon + Campo de' Fiori"
                  items={[
                    "9am: Book a guided Trastevere food tour (\u20AC45\u201365 / $49\u201370 USD) \u2014 4 hours, 6\u20138 stops. Covers supplì, pasta, pizza, wine, gelato. More food than you can handle.",
                    "Alternatively, self-guide: Supplizio for supplì, Tonnarello for cacio e pepe, Da Enzo for artichokes.",
                    "2pm: Pantheon (\u20AC5 entry) \u2014 the best-preserved Roman building. 2,000 years old and the dome still inspires awe.",
                    "3pm: Piazza Navona \u2014 sit at a terrace for one espresso (\u20AC3\u20135 at a table), enjoy the Bernini fountain.",
                    "4pm: Campo de\u2019 Fiori \u2014 morning market is better, but afternoon has character. Browse for gifts: truffle oil, saffron, limoncello.",
                    "7pm: Wine bar dinner at Roscioli \u2014 book ahead. Natural wine + Roman classics. \u20AC40\u201360/person.",
                    "Late: Gelato walk through the illuminated streets. Rome at night is a different city entirely."
                  ]}
                  cost="\u20AC70\u2013110 / $76\u2013119 USD (excl. accommodation)" />
                <DayCard day="Day 4" title="Borghese Gallery + Villa Borghese + Farewell Testaccio"
                  items={[
                    "9am: Borghese Gallery (\u20AC15 / $16 USD) \u2014 book the first slot. Bernini\u2019s Apollo and Daphne will stop you in your tracks.",
                    "11am: Villa Borghese gardens \u2014 rowboat on the lake (\u20AC3), espresso at the Casina del Lago.",
                    "12:30pm: Head to Testaccio for the real Roman food experience.",
                    "Testaccio Market lunch: try everything. Pasta alla gricia, trapizzino, Roman-style pizza. \u20AC12\u201318 total.",
                    "2:30pm: Aventine Hill keyhole \u2014 5-minute queue for the famous framed dome view.",
                    "3pm: Orange Garden (Giardino degli Aranci) \u2014 panoramic view over Rome. Free, rarely crowded.",
                    "Final dinner: traditional Roman feast at Felice a Testaccio \u2014 their tonnarelli cacio e pepe is legendary. Book ahead. \u20AC30\u201345/person."
                  ]}
                  cost="\u20AC65\u2013100 / $70\u2013108 USD (excl. accommodation)" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-blue-700 uppercase tracking-wide">Total 4-Day Cost (per person) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u20AC480\u2013800 / $518\u2013864 USD including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: LUXURY ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">\✦</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Luxury Plan &mdash; \u20AC300+/day ($325+ USD)</p>
                    <p className="text-xs text-purple-600 font-light">Stay: 5-star near Piazza di Spagna or Pantheon &middot; \u20AC250\u2013600/night</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Private Colosseum + Forum + Sunset Aperitivo"
                  items={[
                    "Private guided Colosseum + Forum + Palatine tour (\u20AC80\u2013120 / $86\u2013130 USD per person) \u2014 underground access + arena floor with an archaeologist guide.",
                    "3 hours of expert commentary transforms these ruins from impressive to unforgettable.",
                    "1pm: Lunch at Aroma restaurant with Colosseum terrace view \u2014 \u20AC60\u201390/person. The view alone is worth half the price.",
                    "3:30pm: Trevi Fountain + Spanish Steps + boutique shopping on Via dei Condotti (Gucci, Prada, Valentino).",
                    "7pm: Sunset aperitivo at Terrazza Borromini overlooking Piazza Navona \u2014 \u20AC25 cocktails, million-euro views.",
                    "Dinner: La Pergola (3 Michelin stars, \u20AC250+/person) or Il Pagliaccio (2 stars, \u20AC180+/person). Book months ahead."
                  ]}
                  cost="\u20AC250\u2013450 / $270\u2013486 USD (excl. accommodation)" />
                <DayCard day="Day 2" title="Vatican VIP Early Entry + Private Sistine Chapel"
                  items={[
                    "Book the Vatican VIP experience (\u20AC100\u2013150 / $108\u2013162 USD) \u2014 enter before the general public with a private art historian guide.",
                    "Sistine Chapel with fewer than 50 people is a once-in-a-lifetime experience.",
                    "St. Peter\u2019s Basilica with guide explaining every chapel and artwork. Dome climb for panoramic views.",
                    "12pm: Lunch at Ristorante Roof Garden at Hotel Atlante Star \u2014 St. Peter\u2019s dome fills the entire window.",
                    "3pm: Castel Sant\u2019Angelo private tour (\u20AC40 / $43 USD) \u2014 secret papal escape passages.",
                    "Evening: Private cooking class in a Roman palazzo (\u20AC100\u2013150 / $108\u2013162 USD per person). Learn carbonara and cacio e pepe from a real nonna.",
                    "Dinner is what you cooked \u2014 with unlimited wine pairings."
                  ]}
                  cost="\u20AC300\u2013500 / $324\u2013540 USD (excl. accommodation)" />
                <DayCard day="Day 3" title="Trastevere Private Food Tour + Illuminated Rome"
                  items={[
                    "10am: Private Trastevere food tour with sommelier (\u20AC90\u2013130 / $97\u2013140 USD) \u2014 6 stops, wine pairings at each.",
                    "2pm: Pantheon + Piazza Navona at leisure. Espresso at Caffè Sant\u2019Eustachio \u2014 Rome\u2019s most famous coffee.",
                    "4pm: Campo de\u2019 Fiori for artisan gifts \u2014 truffle products, aged balsamic, hand-painted ceramics.",
                    "6pm: Private Vespa tour of Rome at golden hour (\u20AC80\u2013120 / $86\u2013130 USD) \u2014 hit every major sight in 2 hours.",
                    "Dinner: Roscioli for the ultimate Roman food experience \u2014 wine cellar tasting menu \u20AC80\u2013100/person.",
                    "Night: Private illuminated Rome walking tour (\u20AC60 / $65 USD) \u2014 Colosseum, Trevi, Pantheon all lit up and mostly empty."
                  ]}
                  cost="\u20AC280\u2013450 / $302\u2013486 USD (excl. accommodation)" />
                <DayCard day="Day 4" title="Borghese Gallery + Villa Borghese + Farewell Feast"
                  items={[
                    "9am: Borghese Gallery with private art guide (\u20AC50\u201370 / $54\u201376 USD plus entry). Every Bernini and Caravaggio explained in depth.",
                    "11am: Villa Borghese \u2014 private picnic arranged by hotel (champagne, charcuterie, Roman pastries) on the terrace overlooking the park.",
                    "2pm: Testaccio food market for authentic Roman street food \u2014 even luxury travellers eat here.",
                    "3:30pm: Aventine Hill keyhole + Orange Garden. Simple pleasures that money can\u2019t improve on.",
                    "5pm: Spa session at your hotel or Aqvi Spa (\u20AC80\u2013120 / $86\u2013130 USD).",
                    "8pm: Final dinner at Pierluigi (seafood, outdoor terrace, old-money Rome) \u2014 \u20AC70\u201390/person."
                  ]}
                  cost="\u20AC250\u2013400 / $270\u2013432 USD (excl. accommodation)" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 4-Day Cost (per person) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u20AC1,200\u20132,400+ / $1,296\u20132,592+ USD including accommodation</span>
                </div>
              </div>
            )}
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\✦ Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment">
                    <th className="text-left p-3.5 text-xs font-medium text-muted">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-700 text-center">\✦ Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-700 text-center">\u2728 Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-700 text-center">\✦ Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\✦ Accommodation (4N)", "\u20AC100\u2013180 / $108\u2013194", "\u20AC320\u2013600 / $346\u2013648", "\u20AC1,000\u20132,400 / $1,080\u20132,592"],
                    ["\✦ Food & Drinks", "\u20AC60\u201390 / $65\u201397", "\u20AC120\u2013200 / $130\u2013216", "\u20AC300\u2013500 / $324\u2013540"],
                    ["\✦ Transport", "\u20AC20\u201335 / $22\u201338", "\u20AC30\u201350 / $32\u201354", "\u20AC80\u2013150 / $86\u2013162"],
                    ["\✦ Museums & Tickets", "\u20AC55\u201380 / $59\u201386", "\u20AC80\u2013120 / $86\u2013130", "\u20AC250\u2013400 / $270\u2013432"],
                    ["\✦ Tours & Experiences", "\u20AC0\u201315 / $0\u201316", "\u20AC50\u2013100 / $54\u2013108", "\u20AC200\u2013400 / $216\u2013432"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 4 days)</td>
                    {["\u20AC240\u2013400 / $260\u2013432", "\u20AC480\u2013800 / $518\u2013864", "\u20AC1,200\u20132,400+ / $1,296\u20132,592+"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices in EUR (\u20AC) with USD ($) equivalents at 1 EUR = 1.08 USD. Prices are per person for 2026.
            </p>
          </section>

          {/* ── ROME DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Rome &mdash; Must-See Places"
            subtitle="Click each thumbnail to explore Rome&apos;s most iconic landmarks and hidden gems."
            spots={[
              { name: "Colosseum",           query: "colosseum rome ancient amphitheatre sunset architecture",      desc: "The icon of Rome. Book the combo ticket online for skip-the-line entry to the Colosseum, Forum, and Palatine Hill." },
              { name: "Vatican Museums",      query: "vatican museums gallery ceiling frescoes ornate hallway",      desc: "Home to the Sistine Chapel. First entry at 7:30am is the only civilised way to visit." },
              { name: "Trevi Fountain",       query: "trevi fountain rome baroque sculpture water evening",          desc: "Throw a coin with your right hand over your left shoulder. Best visited early morning or mid-afternoon." },
              { name: "Pantheon",             query: "pantheon rome dome interior oculus ancient temple",             desc: "2,000 years old and still standing. The unreinforced concrete dome is an engineering miracle." },
              { name: "Trastevere Streets",   query: "trastevere rome cobblestone street ivy orange buildings",      desc: "Rome's most photogenic neighbourhood. Best explored on foot with no particular destination in mind." },
            ]}
          />

          {/* ── MID-ARTICLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="roman forum ruins ancient columns italy"
              fallback="https://images.unsplash.com/photo-1555992828-ca4dbe41d294?w=900&q=80"
              alt="Roman Forum ancient ruins"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Roman Forum &mdash; once the centre of the greatest empire in history. Your \u20AC18 combo ticket covers this, the Colosseum and Palatine Hill.
              </p>
            </div>
          </div>

          {/* ── FOOD IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="roman pasta cacio pepe carbonara italian food plate"
              fallback="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=900&q=80"
              alt="Roman cacio e pepe pasta"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Cacio e pepe at a Testaccio trattoria: \u20AC12. Same dish near the Colosseum: \u20AC22. Walk 10 minutes away from any monument &mdash; it matters.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\u274C Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Eating near tourist monuments", desc: "Restaurants within 100m of the Colosseum, Vatican, or Trevi charge 50\u2013100% more for worse food. Walk 10 minutes in any direction for authentic Roman trattorias at half the price.", icon: "\✦" },
                { title: "Visiting Vatican on Monday or Saturday", desc: "Monday = busiest (museums closed Sunday, everyone goes Monday). Saturday = second busiest. Tuesday\u2013Thursday is best. Friday morning works too.", icon: "\✦" },
                { title: "Not booking Borghese Gallery in advance", desc: "Entry is by timed 2-hour slots only. No walk-ups. It sells out weeks ahead in peak season. Book the moment you confirm your Rome dates.", icon: "\✦\uFE0F" },
                { title: "Taking taxis without agreeing on price", desc: "Always use the meter or agree on the fixed rate before getting in. Fiumicino to city centre is a fixed \u20AC50. Never accept a \u2018flat rate\u2019 offered outside the airport.", icon: "\✦" },
                { title: "Drinking cappuccino after 11am", desc: "Italians consider it a breakfast drink only. Order a caff\u00E8 (espresso) or caff\u00E8 macchiato after noon. You won\u2019t get thrown out, but you\u2019ll get a look.", icon: "\u2615" },
                { title: "Wearing shorts or bare shoulders to churches", desc: "St. Peter\u2019s, the Sistine Chapel, and most Roman churches require covered knees and shoulders. Carry a scarf or light jacket \u2014 they will turn you away at the door.", icon: "\✦" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\✦ Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\✦", title: "The 7:30am Vatican Rule", desc: "First entry ticket to Vatican Museums at 7:30am gives you 90 minutes in the Sistine Chapel before the 9am crowds arrive. The single best upgrade in Rome.", color: "bg-amber-50 border-amber-200" },
                { icon: "\✦", title: "Four Roman Pastas", desc: "Carbonara, cacio e pepe, amatriciana, gricia \u2014 these are Rome\u2019s four classic pastas. Order them at trattorias, never at places with English menus on the sidewalk.", color: "bg-amber-50 border-amber-200" },
                { icon: "\✦", title: "Free Water Everywhere", desc: "Rome has 2,500+ nasoni (drinking fountains) with free, clean, cold water. Bring a reusable bottle. Cover the spout hole with your finger and water arcs up for drinking.", color: "bg-teal-50 border-teal-200" },
                { icon: "\✦\uFE0F", title: "Free Museum Sundays", desc: "First Sunday of every month, most state museums are free \u2014 including the Colosseum, Forum, and Borghese. But queues are massive. Only worth it if you arrive before opening.", color: "bg-teal-50 border-teal-200" },
                { icon: "\✦", title: "Cobblestone Shoes", desc: "Rome\u2019s streets destroy fashion shoes. Wear comfortable walking shoes with thick soles. You\u2019ll walk 15\u201320km/day on uneven cobblestones. Blisters ruin trips.", color: "bg-rose-50 border-rose-200" },
                { icon: "\✦", title: "Skip Uber, Use Metro", desc: "Rome\u2019s traffic is terrible. Metro line A (Vatican\u2013Spanish Steps\u2013Termini) and line B (Termini\u2013Colosseum) cover 90% of tourist sights. \u20AC1.50/ride or \u20AC7 day pass.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Rome itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Rome Trip &rarr;
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip &rarr;</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\u2753 Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days do you need in Rome?", a: "4 days is ideal. You can cover the Colosseum, Vatican, Trastevere, and Borghese Gallery without rushing. 3 days is possible but tight. 5+ days lets you add day trips to Pompeii or Tivoli." },
                { q: "How much does a 4-day Rome trip cost?", a: "Budget: \u20AC60\u2013100/day ($65\u2013108 USD). Mid-range: \u20AC120\u2013200/day ($130\u2013216 USD). Luxury: \u20AC300+/day ($325+ USD). This includes accommodation, food, transport and museum entries." },
                { q: "Is the Roma Pass worth it?", a: "The 72-hour Roma Pass (\u20AC52) includes free metro/bus, free entry to 2 museums, and discounts on others. Worth it if you plan to use public transport frequently and visit at least 2 paid attractions. Skip it if you prefer walking everywhere." },
                { q: "Do I need a visa for Italy?", a: "Indian passport holders need a Schengen visa (apply 3 months ahead at VFS Global, \u20AC80 fee). US, UK, Australian, and Canadian citizens can visit visa-free for up to 90 days. No pre-registration required." },
                { q: "What is the best time to visit Rome?", a: "April\u2013May and September\u2013October offer the best balance of weather, crowds, and prices. June\u2013August is hot (35\u00B0C+) and packed. November\u2013March is cheapest but can be rainy." },
                { q: "Should I book Vatican tickets in advance?", a: "Absolutely. Book the 7:30am first entry slot (\u20AC38 / $41 USD) at least 2\u20133 weeks ahead. The regular queue can be 3\u20134 hours in peak season. First entry gives you the Sistine Chapel nearly empty." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Rome"
            hotels={[
              { name: "The Yellow Hostel", type: "Budget Hostel \u00B7 Termini", price: "From \u20AC28/night ($30)", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/it/the-yellow.html?aid=2820480" },
              { name: "Hotel Raphael", type: "Boutique 5-star \u00B7 Piazza Navona", price: "From \u20AC220/night ($238)", rating: "5", badge: "Mid-range pick", url: "https://www.booking.com/hotel/it/raphael.html?aid=2820480" },
              { name: "Hotel de Russie", type: "Luxury 5-star \u00B7 Piazza del Popolo", price: "From \u20AC450/night ($486)", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/it/de-russie.html?aid=2820480" },
            ]}
            activities={[
              { name: "Colosseum + Forum + Palatine Combo Ticket", duration: "Half day", price: "From \u20AC18/person ($19.50)", badge: "Must do", url: "https://www.getyourguide.com/s/?q=rome&partner_id=PSZA5UI" },
              { name: "Vatican Museums First Entry 7:30am", duration: "3 hours", price: "From \u20AC38/person ($41)", badge: "Essential", url: "https://www.getyourguide.com/s/?q=rome&partner_id=PSZA5UI" },
              { name: "Trastevere Street Food Tour", duration: "4 hours", price: "From \u20AC45/person ($49)", url: "https://www.getyourguide.com/s/?q=rome&partner_id=PSZA5UI" },
              { name: "Borghese Gallery Timed Entry", duration: "2 hours", price: "From \u20AC15/person ($16)", url: "https://www.getyourguide.com/s/?q=rome&partner_id=PSZA5UI" },
            ]}
          />

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Italy Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Florence \u2014 3 Day Renaissance Guide", href: "/blog/florence-3-days", soon: false },
                { label: "Amalfi Coast \u2014 4 Day Coastal Paradise", href: "/blog/amalfi-coast-4-days", soon: false },
                { label: "Browse All Travel Guides", href: "/blog", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View &rarr;</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="rome-4-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
