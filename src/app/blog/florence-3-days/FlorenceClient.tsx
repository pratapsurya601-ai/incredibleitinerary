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

const FLORENCE_TOC = [
  { id: "plans",      emoji: "\u26A1", label: "Which Plan Are You?" },
  { id: "booking",    emoji: "\✦", label: "What to Book Ahead" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Florence 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Florence in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function FlorenceClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\✦", label: "Budget", sub: "\u20AC70\u2013110/day", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\u2728", label: "Mid-Range", sub: "\u20AC130\u2013220/day", color: "border-blue-300 bg-blue-50 text-blue-800" },
    { id: "C" as const, emoji: "\✦", label: "Luxury", sub: "\u20AC350+/day", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={FLORENCE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Florence" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="florence duomo cathedral dome tuscany italy"
            fallback="https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=1600&q=85"
            alt="Florence Duomo cathedral dome at sunrise"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Florence 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Art & Renaissance
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/30">&middot;</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/30">&middot;</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Florence in 3 Days: The Complete Guide
                <em className="italic text-gold-light"> (Budget to Luxury, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, actual costs in EUR &amp; USD, advance booking tips &mdash; and the mistakes that ruin most Florence trips.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>\✦\✦ Italy</span>
              <span>&middot;</span>
              <span>\✦ 3 Days</span>
              <span>&middot;</span>
              <span>\✦ From \u20AC70/day</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              EVERYTHING needs advance booking. Uffizi, Accademia, Dome climb &mdash; if you show up without a ticket in summer you&apos;ll wait 3 hours or get turned away. I learned this the hard way so you don&apos;t have to.
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

          {/* ── WHAT TO BOOK AHEAD ── */}
          <section id="booking" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\✦ What to Book in Advance</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Florence is small but wildly popular. Without advance tickets, you will waste half your trip in queues.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Must Book (Sells Out)", emoji: "\✦", bg: "bg-red-50 border-red-200", th: "text-red-800",
                  rows: [["Uffizi Gallery", "\u20AC20\u201325 / $22\u201327 \u2014 book 1\u20132 weeks ahead. Timed entry only."],["Accademia (David)", "\u20AC16 / $17 \u2014 morning slots sell out first. Book 1 week ahead."],["Dome Climb", "\u20AC30 / $32 (Brunelleschi Pass) \u2014 463 steps, timed slots, book 3\u20135 days ahead."]],
                  note: "In summer (June\u2013August), book everything 2\u20133 weeks ahead. Walk-ups are essentially impossible." },
                { title: "Recommended to Book", emoji: "\✦", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Pitti Palace", "\u20AC16 / $17 \u2014 less crowded than Uffizi but still benefits from timed entry."],["Chianti Wine Tour", "\u20AC60\u2013120 / $65\u2013130 \u2014 half-day or full-day. Book 2\u20133 days ahead."],["Cooking Class", "\u20AC60\u201390 / $65\u201397 \u2014 learn pasta-making with a local chef. Popular, book early."]],
                  note: "Boboli Gardens and Piazzale Michelangelo are free/walk-up \u2014 no booking needed." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/60 w-32 flex-shrink-0">{k}</span>
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
            <StatCard icon="\✦" label="Duration" value="3 Days" />
            <StatCard icon="\✦" label="Budget From" value="\u20AC70/day" />
            <StatCard icon="\✦\uFE0F" label="Best Months" value="Apr\u2013May, Sep\u2013Oct" />
            <StatCard icon="\u2708\uFE0F" label="Airport" value="Peretola (FLR)" />
          </div>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\✦ The Itineraries</h2>
            <p className="text-sm text-muted font-light mb-6">Click a plan &mdash; days are expandable/collapsible.</p>

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
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; \u20AC70\u2013110/day ($76\u2013119 USD)</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Hostels or B&amp;Bs near Santa Maria Novella &middot; \u20AC30\u201350/night</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Duomo Complex + Piazza Signoria + Uffizi"
                  items={[
                    "8:15am: Dome climb (Brunelleschi Pass \u20AC30 / $32 USD, pre-booked). 463 steps, no elevator. The view from the top of Brunelleschi\u2019s dome is the defining Florence moment.",
                    "10am: Explore the Duomo exterior, Baptistery doors (free to admire from outside), Giotto\u2019s Bell Tower (included in Brunelleschi Pass).",
                    "12pm: Lunch at Mercato Centrale \u2014 ground floor. Lampredotto sandwich (\u20AC3.50 / $3.80 USD) from a street cart. Florence\u2019s real signature dish, not the overpriced bistecca. Fight me.",
                    "2pm: Walk to Piazza della Signoria \u2014 free outdoor sculpture gallery. Palazzo Vecchio exterior, copy of David, Loggia dei Lanzi.",
                    "3pm: Uffizi Gallery (\u20AC20 / $22 USD, pre-booked timed entry). Botticelli\u2019s Birth of Venus and Primavera are here. Budget 2\u20132.5 hours.",
                    "6pm: Gelato at Vivoli (\u20AC2.50\u20133.50) or La Sorbettiera \u2014 both authentic, neither near the Duomo.",
                    "Dinner: Trattoria Mario \u2014 communal tables, cash only, arrives at noon or queue. \u20AC10\u201315/person for a full meal."
                  ]}
                  cost="\u20AC55\u201375 / $59\u201381 USD (excl. accommodation)" />
                <DayCard day="Day 2" title="Ponte Vecchio + Pitti Palace + Piazzale Michelangelo Sunset"
                  items={[
                    "9am: Cross Ponte Vecchio \u2014 the medieval bridge lined with jewellery shops. Free to walk across. Best photos from the bridge downstream (Ponte Santa Trinita).",
                    "10am: Pitti Palace (\u20AC16 / $17 USD, or skip interior and just do Boboli). Renaissance palace with Palatine Gallery.",
                    "12pm: Boboli Gardens (\u20AC10 / $11 USD, or \u20AC22 / $24 combo with Pitti). Huge Renaissance garden with grottoes and fountains. Budget 1.5 hours.",
                    "2pm: Lunch in Oltrarno neighbourhood \u2014 the artisan quarter. Panini at All\u2019Antico Vinaio (\u20AC5\u20137). Expect a 15-min queue, move fast.",
                    "3:30pm: Wander Oltrarno\u2019s artisan workshops \u2014 leather, paper, metalwork. Buy direct from makers.",
                    "5:30pm: Walk up to Piazzale Michelangelo (20 min uphill from Ponte Vecchio). Piazzale Michelangelo at sunset with the entire Florence skyline below you and a glass of Chianti \u2014 this is the most beautiful urban view in Europe and it\u2019s free.",
                    "Dinner: Grab pizza at Gusta Pizza (Oltrarno) \u2014 \u20AC5\u20138, tiny shop, incredible pizza."
                  ]}
                  cost="\u20AC40\u201365 / $43\u201370 USD (excl. accommodation)" />
                <DayCard day="Day 3" title="San Lorenzo Market + Accademia (David) + Chianti Option"
                  items={[
                    "8:30am: San Lorenzo leather market \u2014 outdoor stalls around the church. Bargain hard \u2014 first price is 40\u201360% inflated. Leather bags, belts, journals.",
                    "10am: Mercato Centrale upper floor for brunch \u2014 \u20AC8\u201312 for excellent options. Lower floor for ingredients and gifts.",
                    "11:30am: Accademia Gallery (\u20AC16 / $17 USD, pre-booked). Michelangelo\u2019s David is here. The real thing is astonishing in a way photos can\u2019t capture. 45\u201360 minutes is enough.",
                    "1pm: Optional \u2014 Chianti wine day trip (\u20AC60\u201380 / $65\u201386 USD for a half-day). 2\u20133 wineries, tastings included. Back by 6pm.",
                    "Alternatively: Basilica di Santa Croce (\u20AC8 / $8.60 USD) \u2014 final resting place of Michelangelo, Galileo, and Machiavelli.",
                    "5pm: Final gelato at Gelateria della Passera in Oltrarno \u2014 small, local, excellent.",
                    "Last dinner: Trattoria Sostanza \u2014 butter chicken (pollo al burro) is legendary. Cash only. \u20AC15\u201320/person."
                  ]}
                  cost="\u20AC45\u201390 / $49\u201397 USD (excl. accommodation, varies with Chianti option)" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u20AC210\u2013330 / $227\u2013356 USD including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: MID-RANGE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">\u2728</span>
                  <div>
                    <p className="text-sm font-medium text-blue-800">Mid-Range Plan &mdash; \u20AC130\u2013220/day ($140\u2013238 USD)</p>
                    <p className="text-xs text-blue-600 font-light">Stay: 3-4 star hotel in Centro or Oltrarno &middot; \u20AC90\u2013160/night</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Duomo + Dome Climb + Uffizi + Evening Passeggiata"
                  items={[
                    "8:15am: Brunelleschi\u2019s Dome climb (\u20AC30 / $32 USD). Inside the dome, look up at Vasari\u2019s Last Judgment fresco as you spiral upward. The final panorama from the lantern is breathtaking.",
                    "10am: Baptistery (\u20AC15 / $16 combined or Brunelleschi Pass). Ghiberti\u2019s \u2018Gates of Paradise\u2019 doors are a Renaissance masterpiece.",
                    "11:30am: Giotto\u2019s Bell Tower (414 steps, included in Pass). Different angle of the dome from the top.",
                    "1pm: Lunch at Buca Mario \u2014 classic Florentine trattoria since 1886. Ribollita (Tuscan bread soup) \u2014 \u20AC12\u201318/person.",
                    "3pm: Uffizi Gallery (\u20AC25 / $27 USD timed entry). Highlight route: Botticelli rooms \u2192 Leonardo \u2192 Raphael \u2192 Caravaggio. 2.5 hours.",
                    "6pm: Walk through Piazza della Signoria for the evening passeggiata (Italian promenade tradition).",
                    "Dinner: Il Latini \u2014 boisterous, traditional, excellent bistecca alla fiorentina. \u20AC35\u201350/person with wine. Book ahead."
                  ]}
                  cost="\u20AC90\u2013130 / $97\u2013140 USD (excl. accommodation)" />
                <DayCard day="Day 2" title="Ponte Vecchio + Pitti Palace + Boboli + Sunset Piazzale"
                  items={[
                    "9am: Ponte Vecchio morning walk \u2014 less crowded before 10am. Browse the goldsmith shops.",
                    "10am: Pitti Palace + Boboli Gardens combo (\u20AC22 / $24 USD). Palatine Gallery has Raphael, Titian, and Caravaggio.",
                    "12:30pm: Boboli Gardens \u2014 bring a water bottle, the gardens are vast. The Grotto of Buontalenti and Amphitheatre are highlights.",
                    "2pm: Lunch at Trattoria Cambi in Oltrarno \u2014 locals\u2019 favourite, ribollita and tagliata. \u20AC15\u201322/person.",
                    "3:30pm: Oltrarno artisan walk. Visit a leather workshop, watch a paper marbler, browse antique shops on Via Maggio.",
                    "5:30pm: Piazzale Michelangelo sunset. Bring a bottle of Chianti (\u20AC5\u20138 from any enoteca). The panoramic terrace has the full Florence skyline.",
                    "Dinner: Trattoria Cammillo \u2014 refined Tuscan cooking. \u20AC35\u201350/person. Book 2\u20133 days ahead."
                  ]}
                  cost="\u20AC80\u2013120 / $86\u2013130 USD (excl. accommodation)" />
                <DayCard day="Day 3" title="San Lorenzo + Accademia (David) + Chianti Wine Day Trip"
                  items={[
                    "8:30am: San Lorenzo Market for leather shopping + Mercato Centrale brunch (\u20AC10\u201315).",
                    "10:30am: Accademia Gallery (\u20AC16 / $17 USD). Stand in front of David for as long as you need. Michelangelo carved this from a single block of marble that two other sculptors had abandoned.",
                    "12:30pm: Quick lunch at Mercato Centrale or sandwich at All\u2019Antico Vinaio.",
                    "1:30pm: Chianti wine region half-day tour (\u20AC80\u2013120 / $86\u2013130 USD). Visit 2\u20133 estates, olive oil + wine tastings, often includes a light lunch. Rolling Tuscan hills are unforgettable.",
                    "6pm: Return to Florence. Freshen up at hotel.",
                    "Final dinner: Enoteca Pinchiorri (if splurging, \u20AC100+/person) or Buca Lapi (underground vault, bistecca, \u20AC40\u201360/person).",
                    "Post-dinner: Gelato walk along the Arno at night. Ponte Vecchio illuminated is magical."
                  ]}
                  cost="\u20AC120\u2013180 / $130\u2013194 USD (excl. accommodation)" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-blue-700 uppercase tracking-wide">Total 3-Day Cost (per person) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u20AC390\u2013660 / $421\u2013713 USD including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: LUXURY ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">\✦</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Luxury Plan &mdash; \u20AC350+/day ($378+ USD)</p>
                    <p className="text-xs text-purple-600 font-light">Stay: 5-star palazzo or boutique hotel &middot; \u20AC300\u2013700/night</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Private Duomo + Uffizi After-Hours + Michelin Dinner"
                  items={[
                    "8am: Private Duomo complex tour with art historian (\u20AC80\u2013120 / $86\u2013130 per person). Dome climb + exclusive Baptistery + Bell Tower with expert commentary.",
                    "11am: Private Uffizi skip-the-line with guide (\u20AC70\u2013100 / $76\u2013108 per person). Focus on Botticelli, Leonardo, and Caravaggio with deep art historical context.",
                    "1:30pm: Lunch at Ora d\u2019Aria \u2014 1 Michelin star, contemporary Tuscan. \u20AC50\u201370/person.",
                    "3:30pm: Private leather-making workshop in Oltrarno (\u20AC60\u201390 / $65\u201397). Make your own Florentine leather goods to take home.",
                    "5:30pm: Aperitivo on the terrace of Hotel Continentale overlooking the Arno. \u20AC15\u201320 for a Negroni (invented in Florence).",
                    "8pm: Dinner at Enoteca Pinchiorri (3 Michelin stars, \u20AC200+/person) or Santa Elisabetta (\u20AC150+/person in a medieval tower)."
                  ]}
                  cost="\u20AC300\u2013500 / $324\u2013540 USD (excl. accommodation)" />
                <DayCard day="Day 2" title="Pitti + Boboli + Private Cooking Class + Piazzale Sunset"
                  items={[
                    "9am: Pitti Palace private tour (\u20AC50\u201380 / $54\u201386 per person). The Palatine Gallery\u2019s Raphaels and Titians with an expert guide.",
                    "11am: Boboli Gardens private horticultural tour \u2014 Renaissance garden design explained.",
                    "1pm: Private cooking class in a Tuscan villa (\u20AC120\u2013180 / $130\u2013194 per person). Fresh pasta, seasonal sauces, tiramisu. Lunch is what you cook, with wine pairings.",
                    "4pm: Oltrarno artisan experiences \u2014 watch a master goldsmith on Ponte Vecchio, visit the Antico Setificio Fiorentino (silk workshop, by appointment only).",
                    "5:30pm: Private sunset experience at Piazzale Michelangelo \u2014 arrange champagne and charcuterie through your hotel concierge.",
                    "Dinner: Il Palagio at Four Seasons (1 Michelin star) \u2014 \u20AC100\u2013150/person in a Renaissance garden."
                  ]}
                  cost="\u20AC350\u2013550 / $378\u2013594 USD (excl. accommodation)" />
                <DayCard day="Day 3" title="Accademia + Private Chianti Estate + Farewell Feast"
                  items={[
                    "9am: Accademia private tour (\u20AC40\u201360 / $43\u201365 per person plus entry). Michelangelo\u2019s David with an art historian explaining the political context and sculpting technique.",
                    "11am: San Lorenzo \u2014 Medici Chapels (\u20AC9 / $10 USD). Michelangelo\u2019s final sculptural masterpieces. Often overlooked.",
                    "12:30pm: Private Chianti estate visit with sommelier (\u20AC150\u2013250 / $162\u2013270 per person). Visit a single exceptional estate, barrel tasting, private vineyard tour, multi-course lunch with wine pairings.",
                    "5pm: Return to Florence. Spa treatment at your hotel or the historic Officina Profumo-Farmaceutica di Santa Maria Novella (oldest pharmacy in the world).",
                    "Final dinner: Cibreo \u2014 Fabio Picchi\u2019s legendary restaurant. No pasta on the menu. \u20AC60\u201380/person. Book well ahead."
                  ]}
                  cost="\u20AC350\u2013550 / $378\u2013594 USD (excl. accommodation)" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 3-Day Cost (per person) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u20AC1,050\u20132,100+ / $1,134\u20132,268+ USD including accommodation</span>
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
                    ["\✦ Accommodation (3N)", "\u20AC90\u2013150 / $97\u2013162", "\u20AC270\u2013480 / $292\u2013518", "\u20AC900\u20132,100 / $972\u20132,268"],
                    ["\✦ Food & Drinks", "\u20AC45\u201370 / $49\u201376", "\u20AC100\u2013160 / $108\u2013173", "\u20AC250\u2013400 / $270\u2013432"],
                    ["\✦ Transport", "\u20AC10\u201320 / $11\u201322", "\u20AC20\u201340 / $22\u201343", "\u20AC60\u2013120 / $65\u2013130"],
                    ["\✦ Museums & Tickets", "\u20AC60\u201380 / $65\u201386", "\u20AC80\u2013110 / $86\u2013119", "\u20AC150\u2013250 / $162\u2013270"],
                    ["\✦ Tours & Experiences", "\u20AC0\u201360 / $0\u201365", "\u20AC80\u2013150 / $86\u2013162", "\u20AC250\u2013450 / $270\u2013486"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 3 days)</td>
                    {["\u20AC210\u2013330 / $227\u2013356", "\u20AC390\u2013660 / $421\u2013713", "\u20AC1,050\u20132,100+ / $1,134\u20132,268+"].map((v, i) => (
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

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Florence &mdash; Must-See Places"
            subtitle="Click each thumbnail to explore Florence&apos;s most iconic Renaissance landmarks."
            spots={[
              { name: "The Duomo",            query: "florence duomo santa maria fiore dome detail architecture",        desc: "Brunelleschi's dome is an engineering marvel. Book the 463-step climb for the defining Florence experience." },
              { name: "Uffizi Gallery",        query: "uffizi gallery florence interior paintings renaissance art",       desc: "Home to Botticelli's Birth of Venus, Raphael, and Caravaggio. Pre-book timed entry or face 3-hour queues." },
              { name: "Ponte Vecchio",         query: "ponte vecchio bridge florence arno river medieval shops",          desc: "The only Florence bridge to survive WWII. Lined with goldsmiths since the 16th century." },
              { name: "Piazzale Michelangelo", query: "piazzale michelangelo florence panoramic sunset skyline terrace", desc: "The best urban view in Europe. Free. Walk up at sunset with a bottle of Chianti." },
              { name: "Boboli Gardens",        query: "boboli gardens florence renaissance garden statues fountains",    desc: "Sprawling Renaissance gardens behind Pitti Palace. Bring water and comfortable shoes for 1.5 hours of exploration." },
            ]}
          />

          {/* ── MID-ARTICLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="ponte vecchio florence medieval bridge arno river sunset"
              fallback="https://images.unsplash.com/photo-1543429257-3eb0b65d9c58?w=900&q=80"
              alt="Ponte Vecchio bridge at sunset"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Ponte Vecchio at golden hour &mdash; the medieval bridge that Hitler reportedly ordered spared during the WWII retreat from Florence.
              </p>
            </div>
          </div>

          {/* ── FOOD IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="tuscan food ribollita lampredotto florentine cuisine plate"
              fallback="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=900&q=80"
              alt="Traditional Florentine food"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The lampredotto sandwich from a street cart is Florence&apos;s real signature dish, not the overpriced bistecca. \u20AC3.50 at a market stall vs \u20AC45 at a tourist restaurant.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\u274C Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Not booking tickets in advance", desc: "Uffizi, Accademia, and the Dome climb all require advance booking in peak season. Walk-up queues are 2\u20133 hours or sold out. Book everything the day you confirm your flights.", icon: "\✦" },
                { title: "Eating on Piazza della Signoria", desc: "Any restaurant directly on a famous piazza charges a 40\u201360% tourist premium. Walk one street back and the same quality costs half. Always.", icon: "\✦" },
                { title: "Spending all your time in museums", desc: "Florence\u2019s magic is in the streets, markets, and trattorias. Don\u2019t museum-hop to exhaustion. One museum per morning, wander in the afternoon.", icon: "\✦\uFE0F" },
                { title: "Ordering bistecca without checking the price", desc: "Bistecca alla fiorentina is priced per kilo, not per plate. A steak for two can easily be \u20AC60\u201380. Always ask the weight before ordering. Great restaurants post the per-kilo price clearly.", icon: "\✦" },
                { title: "Ignoring Oltrarno", desc: "Most tourists stay north of the Arno. Oltrarno (south side) has better trattorias, authentic artisan workshops, and Piazzale Michelangelo. Cross the bridge.", icon: "\✦" },
                { title: "Buying leather at the first stall", desc: "San Lorenzo market has hundreds of leather stalls. Quality varies enormously. Check stitching, smell the leather (real leather smells rich, not chemical), and bargain \u2014 first price is always 40%+ inflated.", icon: "\✦" },
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
                { icon: "\✦", title: "Piazzale Michelangelo Sunset", desc: "Walk up 30 minutes before sunset. Bring Chianti (\u20AC5 from an enoteca) and a snack. The most beautiful urban view in Europe, completely free.", color: "bg-amber-50 border-amber-200" },
                { icon: "\✦", title: "The Lampredotto Secret", desc: "Florence\u2019s true street food is lampredotto (tripe sandwich), not bistecca. \u20AC3.50 from a cart at Mercato Centrale or Sant\u2019Ambrogio. It sounds unappealing \u2014 it tastes incredible.", color: "bg-amber-50 border-amber-200" },
                { icon: "\✦", title: "Chianti by Glass, Not Tour", desc: "If short on time, skip the day trip. Every enoteca in Florence serves excellent Chianti by the glass (\u20AC4\u20138). Same wine, no travel time. Save the day trip for a longer stay.", color: "bg-teal-50 border-teal-200" },
                { icon: "\✦", title: "Cobblestone Warning", desc: "Florence\u2019s cobblestones destroy inappropriate shoes. Comfortable walking shoes with thick soles are non-negotiable. You\u2019ll walk 12\u201318km/day.", color: "bg-teal-50 border-teal-200" },
                { icon: "\✦", title: "Free David Copies", desc: "There are two free copies of David \u2014 one in Piazza della Signoria, one at Piazzale Michelangelo. The real one in the Accademia is worth \u20AC16, but if money is tight, the copies are excellent.", color: "bg-rose-50 border-rose-200" },
                { icon: "\u2615", title: "Drink at the Bar", desc: "In Italian cafes, standing at the bar costs \u20AC1\u20131.50 for espresso. Sitting at a table costs \u20AC3\u20135 for the same coffee. Drink standing like a Florentine and save \u20AC10+/day.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Florence itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Florence Trip &rarr;
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip &rarr;</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\u2753 Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days do you need in Florence?", a: "3 days is perfect. You can cover the Duomo, Uffizi, Accademia, Ponte Vecchio, and Piazzale Michelangelo without rushing. Add a 4th day for a Chianti wine country day trip." },
                { q: "How much does a 3-day Florence trip cost?", a: "Budget: \u20AC70\u2013110/day ($76\u2013119 USD). Mid-range: \u20AC130\u2013220/day ($140\u2013238 USD). Luxury: \u20AC350+/day ($378+ USD). This includes accommodation, food, transport and museum entries." },
                { q: "Do I need to book Uffizi tickets in advance?", a: "Absolutely. In peak season the queue can be 2\u20133 hours. Book online at least a week ahead. Timed entry (\u20AC20\u201325) saves you hours of standing in line." },
                { q: "What is the best time to visit Florence?", a: "April\u2013May and September\u2013October are ideal \u2014 warm weather, manageable crowds, moderate prices. Summer is hot and extremely crowded. Winter is cheapest but some attractions have reduced hours." },
                { q: "Is Florence walkable?", a: "Extremely walkable. The historic centre is compact \u2014 Duomo to Pitti Palace is 15 minutes on foot. No metro exists. Comfortable walking shoes are the only transport you need within the centre." },
                { q: "Can I do a Chianti wine day trip from Florence?", a: "Yes. Chianti is 30\u201360 minutes away. Organised tours (\u20AC60\u2013120 / $65\u2013130) visit 2\u20133 wineries with tastings and lunch. Book a tour so nobody has to be the designated driver." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Florence"
            hotels={[
              { name: "Plus Florence", type: "Budget Hostel \u00B7 Santa Maria Novella", price: "From \u20AC32/night ($35)", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/it/plus-florence.html?aid=2820480" },
              { name: "Hotel Davanzati", type: "Boutique 4-star \u00B7 Centro", price: "From \u20AC130/night ($140)", rating: "5", badge: "Mid-range pick", url: "https://www.booking.com/hotel/it/davanzati.html?aid=2820480" },
              { name: "Portrait Firenze", type: "Luxury 5-star \u00B7 Ponte Vecchio", price: "From \u20AC500/night ($540)", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/it/portrait-firenze.html?aid=2820480" },
            ]}
            activities={[
              { name: "Uffizi Gallery Timed Entry Ticket", duration: "2\u20133 hours", price: "From \u20AC20/person ($22)", badge: "Must do", url: "https://www.getyourguide.com/s/?q=florence&partner_id=PSZA5UI" },
              { name: "Accademia Gallery (David) Entry", duration: "1 hour", price: "From \u20AC16/person ($17)", badge: "Essential", url: "https://www.getyourguide.com/s/?q=florence&partner_id=PSZA5UI" },
              { name: "Chianti Wine & Olive Oil Day Trip", duration: "Half day", price: "From \u20AC60/person ($65)", url: "https://www.getyourguide.com/s/?q=florence&partner_id=PSZA5UI" },
              { name: "Tuscan Cooking Class with Market Visit", duration: "4 hours", price: "From \u20AC65/person ($70)", url: "https://www.getyourguide.com/s/?q=florence&partner_id=PSZA5UI" },
            ]}
          />

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Italy Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Rome \u2014 4 Day History & Culture Guide", href: "/blog/rome-4-days", soon: false },
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

          <RelatedGuides currentSlug="florence-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
