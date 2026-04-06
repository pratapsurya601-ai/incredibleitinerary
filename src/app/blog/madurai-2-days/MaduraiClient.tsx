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

const MADURAI_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "why",         emoji: "\uD83C\uDFDB\uFE0F", label: "Why Madurai Needs 2 Days" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",      emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "food",        emoji: "\uD83C\uDF5B", label: "Food Trail" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Madurai 2-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Madurai in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function MaduraiClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under ₹4k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83C\uDFDB\uFE0F", label: "Heritage", sub: "₹5k–12k total", color: "border-orange-300 bg-orange-50 text-orange-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MADURAI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Madurai" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="meenakshi temple madurai gopuram tamil nadu india"
            fallback="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1600&q=85"
            alt="Meenakshi Amman Temple gopurams towering over Madurai"
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
              <span className="text-white/70">Madurai 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Temple & Heritage
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Madurai in 2 Days: Temples, Markets & the Best
                <em className="italic text-gold-light"> Food in Tamil Nadu</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                2 complete plans with real timings, actual costs — and why doing Madurai as a day trip is the biggest mistake travellers make in South India.
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
              <span>{"\uD83C\uDDEE\uD83C\uDDF3"} India</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDDD3"} 2 Days</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDCB0"} From ₹3,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Most tourists do Madurai as a day trip from other places. That&apos;s a mistake. Spend 2 nights &mdash; the city comes alive after dark.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your style &mdash; jump straight to your itinerary.</p>
            <div className="grid grid-cols-2 gap-3">
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

          {/* ── WHY 2 DAYS ── */}
          <section id="why" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83C\uDFDB\uFE0F"} Why Madurai Needs 2 Days</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Madurai is one of the oldest continuously inhabited cities in the world &mdash; over 2,500 years old. Rushing it in a day trip means missing everything that makes it extraordinary.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Day Trippers Miss", emoji: "❌", bg: "bg-red-50 border-red-200", th: "text-red-800",
                  rows: [["Morning puja","The 5am temple ceremony that defines Madurai"],["Flower market","Only happens 4–6am — gone by breakfast"],["Night temple","The evening palanquin procession at 9pm"],["Food trail","Jigarthanda, kothu parotta — best after dark"]],
                  note: "A day trip gives you a rushed 3 hours at the temple and nothing else." },
                { title: "2 Nights Gets You", emoji: "\u2705", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  rows: [["Dawn puja","Meenakshi Temple waking up at 5am"],["Markets","Flower market at 4am + banana market"],["Heritage","Palace, museum, Pudhu Mandapam"],["Rooftop views","Temple gopurams lit up at golden hour"]],
                  note: "Two nights means you experience Madurai at dawn, dusk, and after dark." },
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
                <strong className="font-medium text-ink">The truth:</strong> Madurai&apos;s food is aggressively underrated &mdash; the Jigarthanda at Famous Jigarthanda near the temple is worth the trip to Tamil Nadu by itself.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="2 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"₹3,500"} />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Oct – Mar" />
            <StatCard icon={"\u2708\uFE0F"} label="Nearest Airport" value="Madurai (IXM)" />
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

            {/* ── PLAN A: Budget ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDCB0"}</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; Temple Town Walkable Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Lodge near Meenakshi Temple {"·"} {"₹"}500{"–"}{"₹"}1,200/night {"·"} Walk + auto: {"₹"}200{"–"}{"₹"}400/day</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Meenakshi Temple, Palace & Heritage Walk"
                  items={[
                    "5am: Meenakshi Amman Temple morning puja — the sound of bells echoing through the 14 gopurams as the temple wakes up is the most powerful spiritual experience in South India. Camera not allowed inside, phone is fine. Free entry.",
                    "7:30am: Breakfast at Murugan Idli Shop (East Masi St) — idli, vada, filter coffee. ₹80–₹120.",
                    "9am: Thirumalai Nayakkar Palace — ₹50 entry, 1hr. Stunning Indo-Saracenic pillars, largely empty in morning.",
                    "11am: Gandhi Museum — ₹5 entry. The blood-stained cloth Gandhi wore during his assassination is here. Genuinely moving, 1.5hrs.",
                    "1pm: Banana leaf lunch at any local ‘mess’ — unlimited rice, sambar, rasam, 3 sides. ₹80–₹120.",
                    "3pm: Pudhu Mandapam (hall opposite temple) — centuries-old cloth market inside a 17th-century pillared hall. Free.",
                    "5pm: Rooftop views of temple gopurams from nearby hotels/restaurants along West Tower St. Best light at golden hour.",
                    "9pm: Evening puja ceremony — Lord Sundareswarar carried in palanquin to Meenakshi’s chamber. Don’t miss this."
                  ]}
                  cost={"₹600–₹900 excluding accommodation"} />
                <DayCard day="Day 2" title="4am Flower Market, Banana Market & Food Trail"
                  items={[
                    "4am: Flower market (Mattuthavani area) — mountains of jasmine, marigold, and lotus being loaded onto trucks. It’s chaos and it’s beautiful. Auto from temple area ₹60–80.",
                    "5:30am: Walk through banana market adjacent — hundreds of banana varieties stacked floor to ceiling. Free.",
                    "7am: Filter coffee + early tiffin at local stall near market. ₹50–70.",
                    "9am: Re-visit Meenakshi Temple — morning light hits the corridors differently. Explore the Hall of 1000 Pillars, museum section ₹50.",
                    "11:30am: Jigarthanda at Famous Jigarthanda (near East Tower) — ₹60–80. This cold drink is unique to Madurai and worth the trip.",
                    "1pm: Lunch — try Madurai-style non-veg biryani at Kumar Mess or Sree Sabarees. ₹120–₹180.",
                    "3pm: Vandiyur Mariamman Teppakulam (temple tank) — massive 17th-century tank, free, 30 min. Good for photos.",
                    "Depart evening or stay for one last kothu parotta at a night stall. ₹60–80."
                  ]}
                  cost={"₹500–₹800 excluding accommodation"} />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 2-Day Cost (solo) {"·"} </span>
                  <span className="font-serif text-base text-ink font-light">{"₹"}3,500{"–"}{"₹"}4,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: Heritage ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-orange-50 border border-orange-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83C\uDFDB\uFE0F"}</span>
                  <div>
                    <p className="text-sm font-medium text-orange-800">Heritage Plan &mdash; Guided Temples + Food Walk</p>
                    <p className="text-xs text-orange-600 font-light">Stay: Heritage hotel like Heritage Madurai or Royal Court {"·"} {"₹"}2,500{"–"}{"₹"}5,000/night {"·"} Cab: {"₹"}800{"–"}{"₹"}1,200/day</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Guided Temple Deep-Dive & Palace"
                  items={[
                    "5am: Meenakshi Temple morning puja with a local guide (₹800–₹1,500 for 2–3hrs). The guide explains 2,500 years of history, symbolism of every gopuram sculpture, and takes you to corners tourists never find.",
                    "8:30am: Breakfast at hotel or Amma Mess on Masi Street — proper South Indian spread. ₹200–₹350 for two.",
                    "10am: Thirumalai Nayakkar Palace — guided visit. ₹50 entry. The Sound & Light show runs evenings (₹50).",
                    "12pm: Pudhu Mandapam — explore the textile merchants trading in the 400-year-old pillared hall.",
                    "1pm: Lunch at Sree Sabarees — Madurai-style biryani, filter coffee. ₹350–₹500 for two.",
                    "3pm: Gandhi Museum — ₹5 entry. Spend 2 hours here if you’re interested in Indian independence history.",
                    "5:30pm: Rooftop tea at a West Tower St hotel overlooking Meenakshi Temple gopurams. Best golden hour in Tamil Nadu.",
                    "7pm: Guided food walk (₹500–₹1,000/person) — Jigarthanda, kothu parotta, filter coffee, banana chips, all the Madurai specialities.",
                    "9pm: Evening puja ceremony at the temple."
                  ]}
                  cost={"₹2,500–₹4,500 for two (excl. accommodation)"} />
                <DayCard day="Day 2" title="Flower Market Dawn & Temple Tank"
                  items={[
                    "4am: Flower market with your hotel car — the driver knows exactly where to go. Spend 1.5 hours walking through the jasmine, marigold and lotus wholesale section.",
                    "5:30am: Banana market next door — 200+ banana varieties, wholesale chaos, incredible photo opportunities (no faces needed — the produce tells the story).",
                    "7am: Return to hotel for breakfast.",
                    "9:30am: Meenakshi Temple re-visit — Hall of 1000 Pillars museum (₹50), the temple art gallery, and the golden lotus tank in different morning light.",
                    "11:30am: Famous Jigarthanda — the original shop. ₹60–80 per glass. Get the special with extra almond gum.",
                    "12:30pm: Vandiyur Mariamman Teppakulam — the massive temple tank. Free entry, 45 min.",
                    "1:30pm: Final banana leaf meal at a proper Madurai mess. ₹150–₹250 for two.",
                    "3pm: Kazimar Big Mosque and Goripalayam Dargah — Madurai’s Islamic heritage, 10 min from temple. Free.",
                    "Depart by evening. Pick up jasmine garlands and Madurai halwa from Nagapathi Halwa near temple as souvenirs."
                  ]}
                  cost={"₹2,000–₹3,500 for two (excl. accommodation)"} />
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-orange-700 uppercase tracking-wide">Total 2-Day Cost (for two) {"·"} </span>
                  <span className="font-serif text-base text-ink font-light">{"₹"}5,000{"–"}{"₹"}12,000 including accommodation</span>
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
                    <th className="p-3.5 text-xs font-medium text-orange-700 text-center">{"\uD83C\uDFDB\uFE0F"} Heritage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (2N)", "₹1,000–₹2,400", "₹5,000–₹10,000"],
                    ["\uD83C\uDF5B Food & Drinks", "₹400–₹600", "₹1,200–₹2,500"],
                    ["\uD83D\uDE95 Transport", "₹200–₹400", "₹800–₹1,200"],
                    ["\uD83C\uDFAF Activities & Entry", "₹100–₹200", "₹1,500–₹3,000"],
                    ["\uD83D\uDECD\uFE0F Souvenirs", "₹100–₹200", "₹300–₹500"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total</td>
                    {["₹3,500–₹4,000 (solo)","₹5,000–₹12,000 (for two)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Madurai is one of the most affordable cities in South India &mdash; you genuinely struggle to spend money here.
            </p>
          </section>

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Madurai &mdash; Must-See Places"
            subtitle="Click each thumbnail to explore Madurai&apos;s most iconic temples, markets and heritage sites."
            spots={[
              { name: "Meenakshi Amman Temple",    query: "meenakshi amman temple madurai gopuram colorful sculptures architecture",    desc: "2,500 years old with 14 towering gopurams covered in thousands of sculptures. Visit at 5am for morning puja or 9pm for the evening palanquin ceremony." },
              { name: "Thirumalai Nayakkar Palace", query: "thirumalai nayakkar palace madurai pillars indo saracenic architecture",     desc: "17th-century palace with towering Indo-Saracenic pillars. ₹50 entry, usually empty in the morning. The Sound & Light show runs evenings." },
              { name: "Flower Market at Dawn",      query: "flower market india wholesale jasmine marigold lotus piles colorful dawn",   desc: "Wholesale flower trading at 4am — mountains of jasmine and marigold in a sensory overload. Gone by 7am." },
              { name: "Pudhu Mandapam",             query: "pudhu mandapam madurai pillared hall ancient market textile",                desc: "A 400-year-old pillared hall directly opposite the temple, now home to textile merchants trading among centuries-old carvings." },
              { name: "Vandiyur Mariamman Tank",    query: "vandiyur mariamman teppakulam temple tank madurai water architecture",       desc: "A massive 17th-century temple tank connected to the Vaigai River by underground channels. Free entry, best light in late afternoon." },
            ]}
          />

          {/* ── TEMPLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="meenakshi temple madurai corridor pillars ancient stone architecture"
              fallback="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80"
              alt="Ancient stone corridor inside Meenakshi Temple Madurai"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Meenakshi Temple at 5am during morning puja &mdash; the sound of bells echoing through the 14 gopurams as the temple wakes up is the most powerful spiritual experience in South India.
              </p>
            </div>
          </div>

          {/* ── FOOD TRAIL ── */}
          <section id="food" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83C\uDF5B"} The Madurai Food Trail</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Madurai&apos;s food scene is one of the most underrated in India. Every dish here is bolder, spicier, and more honest than what you get anywhere else in Tamil Nadu.
            </p>
            <div className="space-y-3">
              {[
                { icon: "\uD83E\uDD64", title: "Jigarthanda at Famous Jigarthanda", desc: "Madurai’s signature cold drink — milk, almond gum, sarsaparilla syrup and ice cream. The original shop is near East Tower of Meenakshi Temple. ₹60–80. Go after 11am when it’s freshly made.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83E\uDD5E", title: "Idli at Murugan Idli Shop", desc: "The softest idli in Tamil Nadu. East Masi Street branch is the original. Idli + vada + filter coffee = ₹80–120. Opens 6:30am.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF5A", title: "Banana Leaf Meal at Any ‘Mess’", desc: "Unlimited rice, sambar, rasam, kootu, poriyal, papad, pickle — all on a banana leaf. ₹80–120. Best between 12–1pm when everything is fresh.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDF2F", title: "Kothu Parotta (After 8pm)", desc: "Shredded parotta tossed on a hot griddle with egg, spices and curry. The rhythmic chopping sound is iconic. Best at street stalls after dark. ₹60–80.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDF57", title: "Madurai Biryani at Kumar Mess", desc: "Madurai-style biryani uses seeraga samba rice — smaller grains, more flavour. Non-veg biryani ₹120–180. Sree Sabarees is the other top option.", color: "bg-orange-50 border-orange-200" },
                { icon: "\u2615", title: "Filter Coffee Everywhere", desc: "Tamil Nadu filter coffee is a religion. Brass tumbler, frothy pour from height. ₹20–40 at any stall. Don’t overthink it — every corner shop makes it well.", color: "bg-orange-50 border-orange-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── FLOWER MARKET IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="india wholesale flower market jasmine marigold piles baskets dawn"
              fallback="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80"
              alt="Piles of jasmine and marigold at Madurai flower market before dawn"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The flower market at 4am is Madurai&apos;s best-kept secret &mdash; mountains of jasmine, marigold, and lotus being loaded onto trucks. It&apos;s chaos and it&apos;s beautiful.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Doing Madurai as a day trip", desc: "You’ll see the temple for 2 hours and leave. You’ll miss the 5am puja, 4am flower market, night ceremony, and every great meal. 2 nights minimum.", icon: "\u23F0" },
                { title: "Visiting the temple at 11am", desc: "Peak crowd and peak heat. Go at 5am for morning puja (magical, empty) or 4pm when afternoon crowds thin out. 9pm evening puja is the other unmissable slot.", icon: "\uD83C\uDFDB\uFE0F" },
                { title: "Skipping the flower market", desc: "It’s at 4am, so most tourists skip it. This is the single most sensory experience in Madurai. Set the alarm.", icon: "\uD83C\uDF3A" },
                { title: "Eating only at restaurants", desc: "The best food in Madurai is at ‘mess’ shops and street stalls. Banana leaf meals for ₹80, kothu parotta for ₹60. Restaurants charge 3x for the same food.", icon: "\uD83C\uDF5B" },
                { title: "Not trying Jigarthanda", desc: "This cold drink exists only in Madurai. Famous Jigarthanda near the temple is the original — every local will point you there. ₹60–80.", icon: "\uD83E\uDD64" },
                { title: "Wearing shoes inside the temple", desc: "Meenakshi Temple requires bare feet. Leave shoes at the designated counter (₹5) outside. The stone floor gets hot after 10am — another reason to go early.", icon: "\uD83D\uDC5F" },
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
                { icon: "\uD83D\uDCF1", title: "Camera Rules at Meenakshi", desc: "Cameras are banned inside the temple. Phones are allowed. Don’t bring a DSLR — they’ll make you check it at the entrance and the queue to collect it is long.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF3A", title: "Buy Jasmine at the Market", desc: "Madurai jasmine (malli) is famous across Tamil Nadu. Buy a string for ₹20–40 at the flower market. It’ll perfume your entire hotel room.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDE95", title: "Walk, Don’t Auto", desc: "The temple, palace, Pudhu Mandapam, and food stalls are all within 1km of each other. You only need an auto for the flower market (4am) and Vandiyur tank.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDF19", title: "The Temple After Dark", desc: "The evening puja at 9pm is when Sundareswarar is carried to Meenakshi’s chamber. The procession with drums and bells through the lit corridors is unforgettable.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDC5A", title: "Dress Code", desc: "Cover shoulders and knees for temple entry. Both men and women. Keep a light shawl or scarf in your bag — useful for sun protection too.", color: "bg-orange-50 border-orange-200" },
                { icon: "\uD83D\uDCC6", title: "Best Month by Month", desc: "Oct–Nov ✓ best value | Dec–Jan ✓ best weather | Feb–Mar ✓ sweet spot | Apr–May \u26A0\uFE0F Chithirai Festival (spectacular but 40°C+) | Jun–Sep \uD83C\uDF27\uFE0F occasional rain", color: "bg-orange-50 border-orange-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Madurai"
            hotels={[
              { name: "Hotel Park Plaza", type: "Budget · Near Temple", price: "From ₹800/night", rating: "3", badge: "Budget pick", url: "https://www.booking.com/hotel/in/park-plaza-madurai.html?aid=2820480" },
              { name: "Heritage Madurai", type: "Heritage Resort", price: "From ₹4,000/night", rating: "5", badge: "Heritage pick", url: "https://www.booking.com/hotel/in/heritage-madurai.html?aid=2820480" },
              { name: "GRT Regency", type: "Mid-range · Central", price: "From ₹2,200/night", rating: "4", badge: "Value", url: "https://www.booking.com/hotel/in/grt-regency-madurai.html?aid=2820480" },
            ]}
            activities={[
              { name: "Meenakshi Temple Guided Tour", duration: "3 hours", price: "From ₹800/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=madurai&partner_id=PSZA5UI" },
              { name: "Madurai Food Walking Tour", duration: "3 hours", price: "From ₹500/person", badge: "Foodie", url: "https://www.getyourguide.com/s/?q=madurai&partner_id=PSZA5UI" },
              { name: "Dawn Flower Market Visit", duration: "2 hours", price: "From ₹600/person", url: "https://www.getyourguide.com/s/?q=madurai&partner_id=PSZA5UI" },
              { name: "Full Day Madurai Heritage Tour", duration: "8 hours", price: "From ₹1,500/person", url: "https://www.getyourguide.com/s/?q=madurai&partner_id=PSZA5UI" },
            ]}
            pdfProductId="madurai-2-days-pdf"
          />

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Madurai itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Madurai Trip {"→"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Madurai?", a: "2 days is ideal. Day 1 covers Meenakshi Temple, Thirumalai Nayakkar Palace, Gandhi Museum and the food trail. Day 2 covers the 4am flower market, banana market, Pudhu Mandapam and temple revisit. A single day trip misses everything that makes Madurai special." },
                { q: "What is the best time to visit Madurai?", a: "October to March is best — cooler weather (25–32°C) and frequent temple festivals. April–May has the spectacular Chithirai Festival but brutal 40°C+ heat. July–September brings occasional rain but the city is lush and uncrowded." },
                { q: "How much does a 2-day Madurai trip cost?", a: "Budget solo: ₹3,500–₹4,000 including accommodation. Heritage plan for two: ₹5,000–₹12,000 including heritage hotel, guides and food walk. Madurai is one of the most affordable cities in South India." },
                { q: "Is the flower market worth waking up at 4am?", a: "Absolutely. Mountains of jasmine, marigold and lotus traded wholesale before dawn. By 7am the best stock is gone. Go between 4–5:30am for the full experience. It’s the single most sensory experience in Madurai." },
                { q: "What food should I try in Madurai?", a: "Jigarthanda at Famous Jigarthanda (near temple) is the must-try — a cold drink unique to Madurai. Also: idli at Murugan Idli Shop, banana leaf meals at any ‘mess’, kothu parotta at night stalls, Madurai biryani at Kumar Mess, and filter coffee everywhere." },
                { q: "Can I visit Meenakshi Temple during evening puja?", a: "Yes. The evening puja around 9–9:30pm is extraordinary — Lord Sundareswarar is carried in a palanquin to Meenakshi’s chamber. Temple hours: 5am–12:30pm and 4pm–9:30pm. Morning puja at 5am is equally powerful with fewer crowds." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Exploring More of South India?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Pondicherry — 3 Day Guide", href: "/blog/pondicherry-3-days", soon: false },
                { label: "Kerala Backwaters — 5 Day Guide", href: "/blog/kerala-5-days", soon: false },
                { label: "Mysore — 3 Day Heritage Trail", href: "/blog/mysore-3-days", soon: false },
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

          <RelatedGuides currentSlug="madurai-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
