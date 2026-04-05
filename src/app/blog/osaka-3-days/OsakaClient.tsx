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

const OSAKA_TOC = [
  { id: "decision",    emoji: "\u26A1", label: "Which Plan Are You?" },
  { id: "food",        emoji: "\uD83C\uDF5C", label: "The Food Guide" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",      emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "mistakes",    emoji: "\u274C", label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "\uD83D\uDCA1", label: "Pro Tips" },
  { id: "faq",         emoji: "\u2753", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Osaka 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Osaka in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function OsakaClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "\u00A57,000\u201310,000/day ($47\u201367)", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\u2728", label: "Mid-Range", sub: "\u00A512,000\u201318,000/day ($80\u2013120)", color: "border-orange-300 bg-orange-50 text-orange-800" },
    { id: "C" as const, emoji: "\uD83D\uDC8E", label: "Luxury", sub: "\u00A530,000+/day ($200+)", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={OSAKA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Osaka" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="osaka dotonbori canal neon signs japan night"
            alt="Osaka Dotonbori canal neon signs at night"
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
              <span className="text-white/70">Osaka 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Food & City
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">\u00B7</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">\u00B7</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Osaka in 3 Days: The Only Guide You Need
                <em className="italic text-gold-light"> (Budget to Luxury, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, costs in yen, street food crawls &mdash; and why Osaka might be the best eating city on the planet.
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
              <span>\u00B7</span>
              <span>\uD83D\uDDD3 3 Days</span>
              <span>\u00B7</span>
              <span>\uD83D\uDCB0 From \u00A57,000/day ($47)</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Osaka is Japan&apos;s stomach and it&apos;s proud of it. Budget more for food here than Tokyo &mdash; you&apos;ll spend it and you won&apos;t regret a single yen. Osakans are the loudest, funniest, most welcoming people in Japan and the vibe here is completely different from Tokyo&apos;s polished coolness.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\u26A1 Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your budget &mdash; jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} \u2192</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── THE FOOD GUIDE ── */}
          <section id="food" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\uD83C\uDF5C The Osaka Food Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Osaka&apos;s motto is &ldquo;kuidaore&rdquo; &mdash; eat until you drop. These are the dishes you cannot leave without trying.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Street Food Essentials", emoji: "\uD83C\uDF62", bg: "bg-orange-50 border-orange-200", th: "text-orange-800",
                  rows: [["Takoyaki","\u00A5500\u2013800 ($3\u20135) \u2014 crispy octopus balls, the city\u2019s soul food"],["Okonomiyaki","\u00A5800\u20131,200 ($5\u20138) \u2014 savoury pancake, Osaka-style is the original"],["Kushikatsu","\u00A5100\u2013300/skewer ($1\u20132) \u2014 deep-fried everything on sticks"],["Gyoza","\u00A5400\u2013600 ($3\u20134) \u2014 pan-fried dumplings, Osaka\u2019s are crispier"]],
                  note: "Dotonbori has the most famous stalls but locals eat in Shinsekai and Tenma." },
                { title: "Sit-Down Must-Eats", emoji: "\uD83C\uDF7D\uFE0F", bg: "bg-red-50 border-red-200", th: "text-red-800",
                  rows: [["Kani Doraku","Dotonbori \u2014 crab specialist since 1960. Set meals from \u00A54,000 ($27)"],["Kuromon Market","Morning sashimi + grilled seafood breakfast. Budget \u00A52,000\u20133,500"],["Rikuro\u2019s Cheesecake","Namba \u2014 \u00A5965 ($6). The jiggly souffl\u00E9 cheesecake. Queue moves fast."],["Ichiran Ramen","Private booth ramen. \u00A5980 ($7). Customize everything on a paper form."]],
                  note: "Book Kani Doraku ahead for weekend dinner. Walk-in lunch is usually fine." },
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
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">\uD83D\uDCA1 {area.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="\uD83D\uDDD3" label="Duration" value="3 Days" />
            <StatCard icon="\uD83D\uDCB0" label="Budget From" value="\u00A57,000/day" />
            <StatCard icon="\uD83C\uDF38" label="Best Months" value="Mar\u2013May, Oct\u2013Nov" />
            <StatCard icon="\uD83D\uDE85" label="From Kyoto" value="29 min" />
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
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; \u00A57,000\u201310,000/day ($47\u201367)</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Hostel in Namba or Shinsaibashi &middot; \u00A53,000\u20134,500/night ($20\u201330)</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Osaka Castle, Dotonbori, Shinsaibashi"
                  items={[
                    "9am: Osaka Castle \u2014 \u00A5600 ($4) entry to the museum inside. The castle grounds and park are free and stunning, especially during cherry blossom season.",
                    "11am: Walk through the castle park to Temmabashi area. Street food at Tenma market \u2014 cheaper and more local than Dotonbori.",
                    "Lunch: Okonomiyaki at a Tenma hole-in-the-wall \u2014 \u00A5800\u20131,000 ($5\u20137). Watch the chef cook it on the griddle in front of you.",
                    "3pm: Shinsaibashi-suji shopping arcade \u2014 free to browse, 600m covered shopping street. Uniqlo, Don Quijote (tax-free shopping).",
                    "5pm: Dotonbori \u2014 the neon-lit canal. Glico Running Man sign photo. Walk both sides of the canal as lights come on.",
                    "Dinner: Takoyaki at Wanaka or Kukuru (\u00A5500\u2013700/$3\u20135) + okonomiyaki at Mizuno (\u00A5900\u20131,200/$6\u20138). Street-eat your way through.",
                    "Late night: Walk Hozenji Yokocho \u2014 atmospheric stone-paved alley with a moss-covered Buddha. Free, beautiful after dark."
                  ]}
                  cost="\u00A57,500\u201310,000 ($50\u201367) including transport" />
                <DayCard day="Day 2" title="Kuromon Market, Shinsekai, Tsutenkaku, Amerikamura"
                  items={[
                    "8am: Kuromon Market (Osaka\u2019s Kitchen) \u2014 fresh sashimi on rice \u00A51,500 ($10), grilled scallops \u00A5500, tamago \u00A5200. Eat breakfast like a local.",
                    "10:30am: Walk south to Shinsekai \u2014 retro neon district built in 1912. Feels like stepping back in time. Free to walk.",
                    "11am: Tsutenkaku Tower \u2014 \u00A5900 ($6). Osaka\u2019s Eiffel Tower. The neighbourhood around it is more interesting than the tower itself.",
                    "Lunch: Kushikatsu in Shinsekai \u2014 Daruma is the most famous chain. \u00A5100\u2013300 per skewer. Order 8\u201310 skewers for \u00A51,500\u20132,000 ($10\u201313). Rule: no double-dipping in the communal sauce.",
                    "3pm: Amerikamura (American Village) \u2014 Osaka\u2019s youth culture hub. Vintage shops, street art, Big Step mall. Free to explore.",
                    "5pm: Triangle Park in Amerikamura for people-watching. Grab a melon pan ice cream sandwich \u00A5400.",
                    "Evening: Namba area for dinner \u2014 gyoza at Chao Chao (\u00A5500\u2013700) or ramen at Kamukura (\u00A5850)."
                  ]}
                  cost="\u00A57,000\u20139,500 ($47\u201363) including transport" />
                <DayCard day="Day 3" title="Universal Studios OR Sumiyoshi Taisha + Namba Food Crawl"
                  items={[
                    "Option A \u2014 Universal Studios Japan: Full day. \u00A58,600 ($57) standard ticket. Express pass \u00A57,800+ extra. Arrive at opening 8:30am.",
                    "Super Nintendo World is the headline \u2014 get there first. Harry Potter area second. Budget \u00A512,000\u201318,000 ($80\u2013120) total with food.",
                    "Option B \u2014 Sumiyoshi Taisha + Namba: Morning at Osaka\u2019s oldest shrine (free, built 211 AD). The arched Taikobashi bridge is iconic.",
                    "Walk from Sumiyoshi through local neighbourhoods to Namba \u2014 45 min walk or 15 min train.",
                    "Namba food crawl: Start at Kuromon for any stalls you missed, then Dotonbori for round two of takoyaki, then finish at Shinsekai for kushikatsu.",
                    "Afternoon: Den Den Town (Osaka\u2019s Akihabara) \u2014 retro games, anime, manga. Free to browse. 15 min walk from Shinsekai.",
                    "Final dinner: Splurge on yakiniku (Japanese BBQ) \u2014 budget spots from \u00A52,000 ($13) per person in Tsuruhashi area."
                  ]}
                  cost="\u00A57,000\u201318,000 ($47\u2013120) depending on Universal" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u00A521,000\u201330,000 ($140\u2013200) including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: MID-RANGE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-orange-50 border border-orange-200 rounded-xl mb-6">
                  <span className="text-2xl">\u2728</span>
                  <div>
                    <p className="text-sm font-medium text-orange-800">Mid-Range Plan &mdash; \u00A512,000\u201318,000/day ($80\u2013120)</p>
                    <p className="text-xs text-orange-600 font-light">Stay: Business hotel in Namba or Shinsaibashi &middot; \u00A57,000\u201312,000/night ($47\u201380)</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Osaka Castle, Dotonbori Food Tour, Shinsaibashi"
                  items={[
                    "9am: Osaka Castle \u2014 \u00A5600 entry. Explore the museum (8 floors of history) and the expansive castle grounds. 2 hours.",
                    "11am: Walk to Tenmabashi \u2014 stop at Nakanoshima Rose Garden (free, beautiful May\u2013Jun) along the river.",
                    "12:30pm: Lunch at Hokkyokusei in Shinsaibashi \u2014 the restaurant that invented omurice (rice omelette) in 1925. \u00A51,200\u20131,800 ($8\u201312).",
                    "2pm: Shinsaibashi shopping \u2014 Daimaru department store depachika (basement food hall). Free tastings, buy bento for later \u00A51,000\u20131,500.",
                    "5pm: Dotonbori canal walk as the neon comes alive. Tombori River Cruise \u2014 \u00A51,000 ($7), 20 min.",
                    "Dinner: Kani Doraku for crab (book ahead) \u2014 lunch sets \u00A54,000\u20136,000 ($27\u201340). Or okonomiyaki at Chibo \u2014 \u00A51,500\u20132,500 ($10\u201317).",
                    "Late night: Hozenji Yokocho alley, then cocktails at a Namba rooftop bar."
                  ]}
                  cost="\u00A513,000\u201318,000 ($87\u2013120) including transport" />
                <DayCard day="Day 2" title="Kuromon Market, Shinsekai, Tsutenkaku, Amerikamura"
                  items={[
                    "8am: Kuromon Market premium breakfast \u2014 A5 wagyu skewer (\u00A52,000/$13), uni (sea urchin) \u00A51,500, grilled king crab leg \u00A52,000. Budget \u00A54,000\u20136,000.",
                    "10:30am: Shinsekai district \u2014 explore the retro atmosphere. Spa World onsen (\u00A51,500/$10) if you want a unique bathing experience.",
                    "12pm: Kushikatsu lunch at Yaekatsu (slightly upscale from Daruma) \u2014 \u00A52,500\u20134,000 ($17\u201327) for a full set.",
                    "2pm: Tsutenkaku Tower (\u00A5900) for neighbourhood views, then walk to Tennoji Park \u2014 Keitakuen Garden \u00A5150 ($1). Hidden gem.",
                    "4pm: Amerikamura for vintage shopping and street culture. Big Step mall, Orange Street for indie boutiques.",
                    "6pm: Ura-Namba (behind Namba) \u2014 the local dining district. Izakaya hopping with \u00A52,000\u20133,000 ($13\u201320) per spot. 2\u20133 spots is ideal."
                  ]}
                  cost="\u00A514,000\u201319,000 ($93\u2013127) including transport" />
                <DayCard day="Day 3" title="Universal Studios OR Sumiyoshi + Food Crawl"
                  items={[
                    "Option A \u2014 Universal Studios: \u00A58,600 standard ticket + Express Pass \u00A57,800 ($52) for skipping queues. Budget \u00A520,000\u201328,000 total.",
                    "Super Nintendo World first (opens with park). Power-Up Band \u00A54,200 ($28) for interactive games. Harry Potter second.",
                    "Option B \u2014 Culture day: Sumiyoshi Taisha shrine (free, 9am). Then Abeno Harukas \u2014 Japan\u2019s tallest building, observation deck \u00A51,500 ($10).",
                    "Lunch: Tsuruhashi Korean Town \u2014 yakiniku lunch sets from \u00A51,500\u20133,000 ($10\u201320). Osaka\u2019s Korean district is vibrant.",
                    "3pm: Den Den Town for electronics, retro games, and anime shops. Mandarake for vintage manga.",
                    "5pm: Final Dotonbori sunset walk. Rikuro\u2019s cheesecake (\u00A5965/$6) as a farewell souvenir.",
                    "Farewell dinner: Yakiniku-M in Namba for premium wagyu \u2014 \u00A55,000\u20138,000 ($33\u201353). Worth the splurge on the last night."
                  ]}
                  cost="\u00A512,000\u201328,000 ($80\u2013187) depending on Universal" />
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-orange-700 uppercase tracking-wide">Total 3-Day Cost &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u00A536,000\u201354,000 ($240\u2013360) including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: LUXURY ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">\uD83D\uDC8E</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Luxury Plan &mdash; \u00A530,000+/day ($200+)</p>
                    <p className="text-xs text-purple-600 font-light">Stay: The St. Regis Osaka or Conrad Osaka &middot; \u00A540,000\u201380,000/night ($267\u2013533)</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Osaka Castle VIP, Dotonbori, Michelin Dinner"
                  items={[
                    "9am: Osaka Castle with a private guide \u2014 \u00A515,000\u201320,000 ($100\u2013133). Guide covers samurai history and hidden details most miss.",
                    "11am: River cruise on the Okawa River \u2014 \u00A55,000 ($33) for a private charter. Cherry blossom season makes this unforgettable.",
                    "1pm: Lunch at Fujiya 1935 (1 Michelin star, innovative Japanese-Spanish) \u2014 \u00A510,000\u201315,000 ($67\u2013100). Book 1 month ahead.",
                    "3pm: Shinsaibashi \u2014 Hermes, Louis Vuitton, Daimaru luxury floor. Tax-free shopping for international visitors.",
                    "5pm: Dotonbori private food tour with a chef guide \u2014 \u00A515,000\u201320,000 ($100\u2013133). 3 hours, 8+ tastings, hidden spots.",
                    "Dinner: Koryu \u2014 Osaka\u2019s finest kappo cuisine. \u00A520,000\u201335,000 ($133\u2013233). Counter seating, chef\u2019s choice. Book 2 months ahead."
                  ]}
                  cost="\u00A570,000\u2013100,000 ($467\u2013667) including transport" />
                <DayCard day="Day 2" title="Kuromon Premium, Shinsekai, Private Experiences"
                  items={[
                    "8am: Kuromon Market VIP food tour \u2014 \u00A510,000\u201315,000 ($67\u2013100). Guide takes you to stalls tourists miss. Premium tastings included.",
                    "11am: Private cooking class \u2014 learn to make takoyaki and okonomiyaki from scratch. \u00A510,000\u201315,000 ($67\u2013100). 2 hours.",
                    "2pm: Spa World premium floor \u2014 \u00A53,000 ($20) for the VIP area. Multiple themed baths from around the world.",
                    "4pm: Abeno Harukas observation deck (\u00A51,500) \u2014 Japan\u2019s tallest building. VIP floor with champagne service.",
                    "6pm: Cocktails at Conrad Osaka \u2019s 40th floor bar \u2014 floor-to-ceiling windows, river views. \u00A53,000\u20135,000.",
                    "Dinner: Hajime (3 Michelin stars) \u2014 \u00A535,000\u201350,000 ($233\u2013333). Osaka\u2019s most acclaimed restaurant. Book 3 months ahead."
                  ]}
                  cost="\u00A575,000\u2013110,000 ($500\u2013733) including transport" />
                <DayCard day="Day 3" title="Universal VIP OR Sumiyoshi + Luxury Food Crawl"
                  items={[
                    "Option A \u2014 Universal Studios VIP Experience: \u00A530,000\u201340,000 ($200\u2013267). Includes Express Pass, priority entry, guided access.",
                    "Private photo session at Super Nintendo World available through VIP program. Lunch at park\u2019s premium restaurant.",
                    "Option B \u2014 Sumiyoshi Taisha private tour (\u00A510,000) + rickshaw ride through historical Sakai district (\u00A515,000).",
                    "Lunch: Premium wagyu at Matsusaka Beef M \u2014 \u00A515,000\u201325,000 ($100\u2013167). Some of Japan\u2019s finest beef.",
                    "3pm: Nakanoshima Museum of Art (\u00A51,500) \u2014 excellent collection, stunning modern building.",
                    "Final dinner: Taian (2 Michelin stars) \u2014 tempura omakase. \u00A520,000\u201330,000 ($133\u2013200). Seasonal ingredients at their peak."
                  ]}
                  cost="\u00A570,000\u2013110,000 ($467\u2013733) including transport" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 3-Day Cost &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u00A5330,000\u2013560,000 ($2,200\u20133,733) including accommodation</span>
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
                  <tr className="bg-parchment">
                    <th className="text-left p-3.5 text-xs font-medium text-muted">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-700 text-center">\uD83D\uDCB0 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-orange-700 text-center">\u2728 Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-700 text-center">\uD83D\uDC8E Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "\u00A59,000\u201313,500 ($60\u201390)", "\u00A521,000\u201336,000 ($140\u2013240)", "\u00A5120,000\u2013240,000 ($800\u20131,600)"],
                    ["\uD83C\uDF5C Food & Drinks", "\u00A58,000\u201312,000 ($53\u201380)", "\u00A518,000\u201328,000 ($120\u2013187)", "\u00A580,000\u2013150,000 ($533\u20131,000)"],
                    ["\uD83D\uDE89 Transport", "\u00A52,000\u20133,500 ($13\u201323)", "\u00A53,500\u20135,500 ($23\u201337)", "\u00A510,000\u201320,000 ($67\u2013133)"],
                    ["\uD83C\uDFAF Activities", "\u00A52,000\u20139,000 ($13\u201360)", "\u00A55,000\u201315,000 ($33\u2013100)", "\u00A560,000\u2013100,000 ($400\u2013667)"],
                    ["\uD83C\uDF7A Extras", "\u00A51,000\u20132,000 ($7\u201313)", "\u00A53,000\u20135,000 ($20\u201333)", "\u00A510,000\u201320,000 ($67\u2013133)"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (3 days)</td>
                    {["\u00A521,000\u201330,000 ($140\u2013200)","\u00A536,000\u201354,000 ($240\u2013360)","\u00A5330,000\u2013560,000 ($2,200\u20133,733)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices in \u00A5 (Japanese Yen), 2026. USD equivalent at ~\u00A5150/$1. Excludes travel to Osaka from other cities.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Osaka"
            hotels={[
              { name: "The Dorm Hostel Osaka", type: "Design Hostel \u00B7 Shinsaibashi", price: "From \u00A53,000/night ($20)", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/jp/the-dorm-hostel-osaka.html?aid=2820480" },
              { name: "Cross Hotel Osaka", type: "Boutique \u00B7 Namba", price: "From \u00A510,000/night ($67)", rating: "4", badge: "Mid-range pick", url: "https://www.booking.com/hotel/jp/cross-hotel-osaka.html?aid=2820480" },
              { name: "The St. Regis Osaka", type: "Luxury \u00B7 Midosuji", price: "From \u00A550,000/night ($333)", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/jp/the-st-regis-osaka.html?aid=2820480" },
            ]}
            activities={[
              { name: "Dotonbori Street Food Tour", duration: "3 hours", price: "From \u00A57,000 ($47)", badge: "Must do", url: "https://www.getyourguide.com/s/?q=osaka&partner_id=PSZA5UI" },
              { name: "Osaka Castle Guided Tour", duration: "2 hours", price: "From \u00A54,000 ($27)", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=osaka&partner_id=PSZA5UI" },
              { name: "Universal Studios Japan Ticket", duration: "Full day", price: "From \u00A58,600 ($57)", url: "https://www.getyourguide.com/s/?q=osaka&partner_id=PSZA5UI" },
              { name: "Osaka Cooking Class (Takoyaki)", duration: "2.5 hours", price: "From \u00A56,000 ($40)", url: "https://www.getyourguide.com/s/?q=osaka&partner_id=PSZA5UI" },
            ]}
            pdfProductId="osaka-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Osaka \u2014 Must-See Places"
            subtitle="Click each thumbnail to explore Osaka\u2019s most iconic spots."
            spots={[
              { name: "Dotonbori Canal",     query: "dotonbori osaka canal neon signs night reflection japan",        desc: "Osaka\u2019s neon-lit heart. The Glico Running Man sign, giant crab, and canal reflections make this Japan\u2019s most photographed street." },
              { name: "Osaka Castle",         query: "osaka castle japan spring cherry blossom park architecture",     desc: "16th-century castle surrounded by moats and parks. The museum inside covers Osaka\u2019s samurai history. Entry \u00A5600." },
              { name: "Kuromon Market",       query: "kuromon market osaka japan seafood stalls food covered street",  desc: "Osaka\u2019s Kitchen \u2014 a 600m covered market selling fresh sashimi, grilled seafood, wagyu, and everything in between since 1902." },
              { name: "Shinsekai",            query: "shinsekai osaka japan neon retro tower tsutenkaku night",        desc: "Retro entertainment district built in 1912. Tsutenkaku Tower, kushikatsu restaurants, and a time-warp atmosphere." },
              { name: "Sumiyoshi Taisha",     query: "sumiyoshi taisha osaka shrine bridge traditional architecture",   desc: "Osaka\u2019s oldest shrine, founded in 211 AD. The iconic arched Taikobashi bridge over the sacred pond. Free entry." },
            ]}
          />

          {/* ── MID-ARTICLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="osaka street food takoyaki cooking stall japan"
              alt="Takoyaki being cooked at a street food stall in Osaka"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Takoyaki \u2014 crispy octopus balls cooked in cast-iron moulds. \u00A5500&ndash;800 ($3&ndash;5) for 8 pieces. The unofficial currency of Osaka.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\u274C Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Under-budgeting for food", desc: "Osaka is Japan\u2019s food capital. Budget more for food here than any other Japanese city. You\u2019ll want to eat 4\u20135 times a day and you should. That\u2019s not a mistake \u2014 under-eating in Osaka is.", icon: "\uD83C\uDF5C" },
                { title: "Only eating in Dotonbori", desc: "Dotonbori is touristy and 20\u201330% more expensive. The best food is in Shinsekai (kushikatsu), Tenma (local izakayas), Tsuruhashi (Korean BBQ), and Ura-Namba (hidden restaurants behind Namba).", icon: "\uD83D\uDCCD" },
                { title: "Skipping Kuromon Market morning", desc: "The market is best 8\u201310am when everything is fresh. By afternoon, popular stalls sell out. Go hungry, eat standing, graze through every aisle.", icon: "\u23F0" },
                { title: "Buying Universal tickets at the gate", desc: "Universal Studios sells out on weekends and holidays. Buy tickets online at least 1 week ahead. Express Pass is essential on busy days \u2014 it halves your wait times.", icon: "\uD83C\uDFA2" },
                { title: "Ignoring Shinsekai", desc: "Many tourists stick to Dotonbori and miss Shinsekai entirely. It\u2019s Osaka\u2019s most characterful neighbourhood: retro neon, \u00A5100 kushikatsu skewers, and zero tourist polish. Don\u2019t skip it.", icon: "\uD83C\uDFEE" },
                { title: "Not carrying cash", desc: "Same as everywhere in Japan \u2014 many of Osaka\u2019s best food stalls, market vendors, and small restaurants are cash-only. Withdraw \u00A520,000\u201330,000 ($133\u2013200) at a 7-Eleven ATM.", icon: "\uD83D\uDCB4" },
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
                { icon: "\uD83C\uDF62", title: "The Takoyaki Rule", desc: "Never eat takoyaki from the first stall you see. The best stalls always have a small queue of locals, not tourists. Wanaka, Kukuru, and Aizuya are consistently excellent.", color: "bg-orange-50 border-orange-200" },
                { icon: "\uD83D\uDE89", title: "Osaka Metro Day Pass", desc: "\u00A5820 ($5) for unlimited rides on all Osaka Metro and city bus lines. Includes discount coupons for attractions. Buy at any station.", color: "bg-orange-50 border-orange-200" },
                { icon: "\uD83C\uDF7A", title: "Ura-Namba for Locals", desc: "The streets behind Namba Station are where Osakans actually eat and drink. No English menus, no tourist prices. Point at what looks good and say \u2018kore kudasai\u2019 (this please).", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDFEE", title: "Shinsekai Kushikatsu Rules", desc: "No double-dipping in the communal sauce. Take cabbage from the shared bowl to scoop sauce instead. Breaking this rule will get you scolded by the chef.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDED2", title: "Tax-Free Shopping", desc: "Spend over \u00A55,000 ($33) at one store and get 10% tax refund. Bring your passport. Don Quijote, Bic Camera, and department stores all offer this.", color: "bg-purple-50 border-purple-200" },
                { icon: "\uD83D\uDE82", title: "Day Trip to Kobe or Himeji", desc: "Kobe: 22 min by train, famous for Kobe beef and harbour views. Himeji: 50 min, home to Japan\u2019s most spectacular castle (\u00A51,000/$7). Both make excellent half-day trips.", color: "bg-purple-50 border-purple-200" },
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
              Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Osaka itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Osaka Trip \u2192
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip \u2192</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\u2753 Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days do you need in Osaka?", a: "3 days is perfect for the highlights: Osaka Castle, Dotonbori, Kuromon Market, and a choice of Universal Studios or deeper neighbourhood exploration. 2 days works if you skip Universal." },
                { q: "What is the best time to visit Osaka?", a: "Late March to May for cherry blossoms and pleasant weather, or October to November for autumn colours. Summer (June\u2013August) is hot and humid. Avoid Golden Week (late April to early May)." },
                { q: "How much does a 3-day Osaka trip cost?", a: "Budget: \u00A521,000\u201330,000 ($140\u2013200). Mid-range: \u00A536,000\u201354,000 ($240\u2013360). Luxury: \u00A5330,000+ ($2,200+). All figures exclude travel to Osaka and include accommodation, food, transport and activities." },
                { q: "Is Osaka worth visiting if I\u2019m already going to Tokyo?", a: "Absolutely. Osaka has a completely different energy \u2014 louder, funnier, more food-obsessed. The street food alone justifies the 2.5-hour bullet train ride. It pairs perfectly with Kyoto (only 29 minutes away)." },
                { q: "What food must I try in Osaka?", a: "Takoyaki (octopus balls) and okonomiyaki (savoury pancakes) are the two essentials. Also try kushikatsu (deep-fried skewers in Shinsekai), a Kuromon Market breakfast, Rikuro\u2019s cheesecake, and yakiniku in Tsuruhashi." },
                { q: "How do I get from Kyoto to Osaka?", a: "JR Special Rapid: 29 minutes, \u00A5580 ($4). Hankyu Railway: 43 minutes, \u00A5410 ($3). Both are covered by IC cards. No bullet train needed for this short distance." },
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
                { label: "Tokyo \u2014 5 Day City Guide", href: "/blog/tokyo-5-days", soon: false },
                { label: "Kyoto \u2014 4 Day Temple Guide", href: "/blog/kyoto-4-days", soon: false },
                { label: "Goa \u2014 3 Day Beach Guide", href: "/blog/goa-3-days", soon: false },
                { label: "Browse All Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon \u2192" : "View \u2192"}</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="osaka-3-days" />
          <RelatedGuides currentSlug="osaka-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
