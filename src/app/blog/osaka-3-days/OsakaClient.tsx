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
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "food",        emoji: "\uD83C\uDF5C", label: "The Food Guide" },
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
export default function OsakaClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "\u00A57,000–10,000/day ($47–67)", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "✨", label: "Mid-Range", sub: "\u00A512,000–18,000/day ($80–120)", color: "border-orange-300 bg-orange-50 text-orange-800" },
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
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
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
              <span>·</span>
              <span>\uD83D\uDDD3 3 Days</span>
              <span>·</span>
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

          {/* ── THE FOOD GUIDE ── */}
          <section id="food" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\uD83C\uDF5C The Osaka Food Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Osaka&apos;s motto is &ldquo;kuidaore&rdquo; &mdash; eat until you drop. These are the dishes you cannot leave without trying.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Street Food Essentials", emoji: "\uD83C\uDF62", bg: "bg-orange-50 border-orange-200", th: "text-orange-800",
                  rows: [["Takoyaki","\u00A5500–800 ($3–5) — crispy octopus balls, the city’s soul food"],["Okonomiyaki","\u00A5800–1,200 ($5–8) — savoury pancake, Osaka-style is the original"],["Kushikatsu","\u00A5100–300/skewer ($1–2) — deep-fried everything on sticks"],["Gyoza","\u00A5400–600 ($3–4) — pan-fried dumplings, Osaka’s are crispier"]],
                  note: "Dotonbori has the most famous stalls but locals eat in Shinsekai and Tenma." },
                { title: "Sit-Down Must-Eats", emoji: "\uD83C\uDF7D\uFE0F", bg: "bg-red-50 border-red-200", th: "text-red-800",
                  rows: [["Kani Doraku","Dotonbori — crab specialist since 1960. Set meals from \u00A54,000 ($27)"],["Kuromon Market","Morning sashimi + grilled seafood breakfast. Budget \u00A52,000–3,500"],["Rikuro’s Cheesecake","Namba — \u00A5965 ($6). The jiggly soufflé cheesecake. Queue moves fast."],["Ichiran Ramen","Private booth ramen. \u00A5980 ($7). Customize everything on a paper form."]],
                  note: "Book Kani Doraku ahead for weekend dinner. Walk-in lunch is usually fine." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/80 w-28 flex-shrink-0">{k}</span>
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
            <StatCard icon="\uD83C\uDF38" label="Best Months" value="Mar–May, Oct–Nov" />
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
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; \u00A57,000–10,000/day ($47–67)</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Hostel in Namba or Shinsaibashi &middot; \u00A53,000–4,500/night ($20–30)</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Osaka Castle, Dotonbori, Shinsaibashi"
                  items={[
                    "9am: Osaka Castle — \u00A5600 ($4) entry to the museum inside. The castle grounds and park are free and stunning, especially during cherry blossom season.",
                    "11am: Walk through the castle park to Temmabashi area. Street food at Tenma market — cheaper and more local than Dotonbori.",
                    "Lunch: Okonomiyaki at a Tenma hole-in-the-wall — \u00A5800–1,000 ($5–7). Watch the chef cook it on the griddle in front of you.",
                    "3pm: Shinsaibashi-suji shopping arcade — free to browse, 600m covered shopping street. Uniqlo, Don Quijote (tax-free shopping).",
                    "5pm: Dotonbori — the neon-lit canal. Glico Running Man sign photo. Walk both sides of the canal as lights come on.",
                    "Dinner: Takoyaki at Wanaka or Kukuru (\u00A5500–700/$3–5) + okonomiyaki at Mizuno (\u00A5900–1,200/$6–8). Street-eat your way through.",
                    "Late night: Walk Hozenji Yokocho — atmospheric stone-paved alley with a moss-covered Buddha. Free, beautiful after dark."
                  ]}
                  cost="\u00A57,500–10,000 ($50–67) including transport" />
                <DayCard day="Day 2" title="Kuromon Market, Shinsekai, Tsutenkaku, Amerikamura"
                  items={[
                    "8am: Kuromon Market (Osaka’s Kitchen) — fresh sashimi on rice \u00A51,500 ($10), grilled scallops \u00A5500, tamago \u00A5200. Eat breakfast like a local.",
                    "10:30am: Walk south to Shinsekai — retro neon district built in 1912. Feels like stepping back in time. Free to walk.",
                    "11am: Tsutenkaku Tower — \u00A5900 ($6). Osaka’s Eiffel Tower. The neighbourhood around it is more interesting than the tower itself.",
                    "Lunch: Kushikatsu in Shinsekai — Daruma is the most famous chain. \u00A5100–300 per skewer. Order 8–10 skewers for \u00A51,500–2,000 ($10–13). Rule: no double-dipping in the communal sauce.",
                    "3pm: Amerikamura (American Village) — Osaka’s youth culture hub. Vintage shops, street art, Big Step mall. Free to explore.",
                    "5pm: Triangle Park in Amerikamura for people-watching. Grab a melon pan ice cream sandwich \u00A5400.",
                    "Evening: Namba area for dinner — gyoza at Chao Chao (\u00A5500–700) or ramen at Kamukura (\u00A5850)."
                  ]}
                  cost="\u00A57,000–9,500 ($47–63) including transport" />
                <DayCard day="Day 3" title="Universal Studios OR Sumiyoshi Taisha + Namba Food Crawl"
                  items={[
                    "Option A — Universal Studios Japan: Full day. \u00A58,600 ($57) standard ticket. Express pass \u00A57,800+ extra. Arrive at opening 8:30am.",
                    "Super Nintendo World is the headline — get there first. Harry Potter area second. Budget \u00A512,000–18,000 ($80–120) total with food.",
                    "Option B — Sumiyoshi Taisha + Namba: Morning at Osaka’s oldest shrine (free, built 211 AD). The arched Taikobashi bridge is iconic.",
                    "Walk from Sumiyoshi through local neighbourhoods to Namba — 45 min walk or 15 min train.",
                    "Namba food crawl: Start at Kuromon for any stalls you missed, then Dotonbori for round two of takoyaki, then finish at Shinsekai for kushikatsu.",
                    "Afternoon: Den Den Town (Osaka’s Akihabara) — retro games, anime, manga. Free to browse. 15 min walk from Shinsekai.",
                    "Final dinner: Splurge on yakiniku (Japanese BBQ) — budget spots from \u00A52,000 ($13) per person in Tsuruhashi area."
                  ]}
                  cost="\u00A57,000–18,000 ($47–120) depending on Universal" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u00A521,000–30,000 ($140–200) including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: MID-RANGE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-orange-50 border border-orange-200 rounded-xl mb-6">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="text-sm font-medium text-orange-800">Mid-Range Plan &mdash; \u00A512,000–18,000/day ($80–120)</p>
                    <p className="text-xs text-orange-600 font-light">Stay: Business hotel in Namba or Shinsaibashi &middot; \u00A57,000–12,000/night ($47–80)</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Osaka Castle, Dotonbori Food Tour, Shinsaibashi"
                  items={[
                    "9am: Osaka Castle — \u00A5600 entry. Explore the museum (8 floors of history) and the expansive castle grounds. 2 hours.",
                    "11am: Walk to Tenmabashi — stop at Nakanoshima Rose Garden (free, beautiful May–Jun) along the river.",
                    "12:30pm: Lunch at Hokkyokusei in Shinsaibashi — the restaurant that invented omurice (rice omelette) in 1925. \u00A51,200–1,800 ($8–12).",
                    "2pm: Shinsaibashi shopping — Daimaru department store depachika (basement food hall). Free tastings, buy bento for later \u00A51,000–1,500.",
                    "5pm: Dotonbori canal walk as the neon comes alive. Tombori River Cruise — \u00A51,000 ($7), 20 min.",
                    "Dinner: Kani Doraku for crab (book ahead) — lunch sets \u00A54,000–6,000 ($27–40). Or okonomiyaki at Chibo — \u00A51,500–2,500 ($10–17).",
                    "Late night: Hozenji Yokocho alley, then cocktails at a Namba rooftop bar."
                  ]}
                  cost="\u00A513,000–18,000 ($87–120) including transport" />
                <DayCard day="Day 2" title="Kuromon Market, Shinsekai, Tsutenkaku, Amerikamura"
                  items={[
                    "8am: Kuromon Market premium breakfast — A5 wagyu skewer (\u00A52,000/$13), uni (sea urchin) \u00A51,500, grilled king crab leg \u00A52,000. Budget \u00A54,000–6,000.",
                    "10:30am: Shinsekai district — explore the retro atmosphere. Spa World onsen (\u00A51,500/$10) if you want a unique bathing experience.",
                    "12pm: Kushikatsu lunch at Yaekatsu (slightly upscale from Daruma) — \u00A52,500–4,000 ($17–27) for a full set.",
                    "2pm: Tsutenkaku Tower (\u00A5900) for neighbourhood views, then walk to Tennoji Park — Keitakuen Garden \u00A5150 ($1). Hidden gem.",
                    "4pm: Amerikamura for vintage shopping and street culture. Big Step mall, Orange Street for indie boutiques.",
                    "6pm: Ura-Namba (behind Namba) — the local dining district. Izakaya hopping with \u00A52,000–3,000 ($13–20) per spot. 2–3 spots is ideal."
                  ]}
                  cost="\u00A514,000–19,000 ($93–127) including transport" />
                <DayCard day="Day 3" title="Universal Studios OR Sumiyoshi + Food Crawl"
                  items={[
                    "Option A — Universal Studios: \u00A58,600 standard ticket + Express Pass \u00A57,800 ($52) for skipping queues. Budget \u00A520,000–28,000 total.",
                    "Super Nintendo World first (opens with park). Power-Up Band \u00A54,200 ($28) for interactive games. Harry Potter second.",
                    "Option B — Culture day: Sumiyoshi Taisha shrine (free, 9am). Then Abeno Harukas — Japan’s tallest building, observation deck \u00A51,500 ($10).",
                    "Lunch: Tsuruhashi Korean Town — yakiniku lunch sets from \u00A51,500–3,000 ($10–20). Osaka’s Korean district is vibrant.",
                    "3pm: Den Den Town for electronics, retro games, and anime shops. Mandarake for vintage manga.",
                    "5pm: Final Dotonbori sunset walk. Rikuro’s cheesecake (\u00A5965/$6) as a farewell souvenir.",
                    "Farewell dinner: Yakiniku-M in Namba for premium wagyu — \u00A55,000–8,000 ($33–53). Worth the splurge on the last night."
                  ]}
                  cost="\u00A512,000–28,000 ($80–187) depending on Universal" />
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-orange-700 uppercase tracking-wide">Total 3-Day Cost &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u00A536,000–54,000 ($240–360) including accommodation</span>
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
                    <p className="text-xs text-purple-600 font-light">Stay: The St. Regis Osaka or Conrad Osaka &middot; \u00A540,000–80,000/night ($267–533)</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Osaka Castle VIP, Dotonbori, Michelin Dinner"
                  items={[
                    "9am: Osaka Castle with a private guide — \u00A515,000–20,000 ($100–133). Guide covers samurai history and hidden details most miss.",
                    "11am: River cruise on the Okawa River — \u00A55,000 ($33) for a private charter. Cherry blossom season makes this unforgettable.",
                    "1pm: Lunch at Fujiya 1935 (1 Michelin star, innovative Japanese-Spanish) — \u00A510,000–15,000 ($67–100). Book 1 month ahead.",
                    "3pm: Shinsaibashi — Hermes, Louis Vuitton, Daimaru luxury floor. Tax-free shopping for international visitors.",
                    "5pm: Dotonbori private food tour with a chef guide — \u00A515,000–20,000 ($100–133). 3 hours, 8+ tastings, hidden spots.",
                    "Dinner: Koryu — Osaka’s finest kappo cuisine. \u00A520,000–35,000 ($133–233). Counter seating, chef’s choice. Book 2 months ahead."
                  ]}
                  cost="\u00A570,000–100,000 ($467–667) including transport" />
                <DayCard day="Day 2" title="Kuromon Premium, Shinsekai, Private Experiences"
                  items={[
                    "8am: Kuromon Market VIP food tour — \u00A510,000–15,000 ($67–100). Guide takes you to stalls tourists miss. Premium tastings included.",
                    "11am: Private cooking class — learn to make takoyaki and okonomiyaki from scratch. \u00A510,000–15,000 ($67–100). 2 hours.",
                    "2pm: Spa World premium floor — \u00A53,000 ($20) for the VIP area. Multiple themed baths from around the world.",
                    "4pm: Abeno Harukas observation deck (\u00A51,500) — Japan’s tallest building. VIP floor with champagne service.",
                    "6pm: Cocktails at Conrad Osaka ’s 40th floor bar — floor-to-ceiling windows, river views. \u00A53,000–5,000.",
                    "Dinner: Hajime (3 Michelin stars) — \u00A535,000–50,000 ($233–333). Osaka’s most acclaimed restaurant. Book 3 months ahead."
                  ]}
                  cost="\u00A575,000–110,000 ($500–733) including transport" />
                <DayCard day="Day 3" title="Universal VIP OR Sumiyoshi + Luxury Food Crawl"
                  items={[
                    "Option A — Universal Studios VIP Experience: \u00A530,000–40,000 ($200–267). Includes Express Pass, priority entry, guided access.",
                    "Private photo session at Super Nintendo World available through VIP program. Lunch at park’s premium restaurant.",
                    "Option B — Sumiyoshi Taisha private tour (\u00A510,000) + rickshaw ride through historical Sakai district (\u00A515,000).",
                    "Lunch: Premium wagyu at Matsusaka Beef M — \u00A515,000–25,000 ($100–167). Some of Japan’s finest beef.",
                    "3pm: Nakanoshima Museum of Art (\u00A51,500) — excellent collection, stunning modern building.",
                    "Final dinner: Taian (2 Michelin stars) — tempura omakase. \u00A520,000–30,000 ($133–200). Seasonal ingredients at their peak."
                  ]}
                  cost="\u00A570,000–110,000 ($467–733) including transport" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 3-Day Cost &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u00A5330,000–560,000 ($2,200–3,733) including accommodation</span>
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
                    <th className="p-3.5 text-xs font-medium text-orange-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">\uD83D\uDC8E Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "\u00A59,000–13,500 ($60–90)", "\u00A521,000–36,000 ($140–240)", "\u00A5120,000–240,000 ($800–1,600)"],
                    ["\uD83C\uDF5C Food & Drinks", "\u00A58,000–12,000 ($53–80)", "\u00A518,000–28,000 ($120–187)", "\u00A580,000–150,000 ($533–1,000)"],
                    ["\uD83D\uDE89 Transport", "\u00A52,000–3,500 ($13–23)", "\u00A53,500–5,500 ($23–37)", "\u00A510,000–20,000 ($67–133)"],
                    ["\uD83C\uDFAF Activities", "\u00A52,000–9,000 ($13–60)", "\u00A55,000–15,000 ($33–100)", "\u00A560,000–100,000 ($400–667)"],
                    ["\uD83C\uDF7A Extras", "\u00A51,000–2,000 ($7–13)", "\u00A53,000–5,000 ($20–33)", "\u00A510,000–20,000 ($67–133)"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (3 days)</td>
                    {["\u00A521,000–30,000 ($140–200)","\u00A536,000–54,000 ($240–360)","\u00A5330,000–560,000 ($2,200–3,733)"].map((v, i) => (
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
              { name: "The Dorm Hostel Osaka", type: "Design Hostel · Shinsaibashi", price: "From \u00A53,000/night ($20)", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/jp/the-dorm-hostel-osaka.html?aid=2820480" },
              { name: "Cross Hotel Osaka", type: "Boutique · Namba", price: "From \u00A510,000/night ($67)", rating: "4", badge: "Mid-range pick", url: "https://www.booking.com/hotel/jp/cross-hotel-osaka.html?aid=2820480" },
              { name: "The St. Regis Osaka", type: "Luxury · Midosuji", price: "From \u00A550,000/night ($333)", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/jp/the-st-regis-osaka.html?aid=2820480" },
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
            title="Osaka — Must-See Places"
            subtitle="Click each thumbnail to explore Osaka’s most iconic spots."
            spots={[
              { name: "Dotonbori Canal",     query: "dotonbori osaka canal neon signs night reflection japan",        desc: "Osaka’s neon-lit heart. The Glico Running Man sign, giant crab, and canal reflections make this Japan’s most photographed street." },
              { name: "Osaka Castle",         query: "osaka castle japan spring cherry blossom park architecture",     desc: "16th-century castle surrounded by moats and parks. The museum inside covers Osaka’s samurai history. Entry \u00A5600." },
              { name: "Kuromon Market",       query: "kuromon market osaka japan seafood stalls food covered street",  desc: "Osaka’s Kitchen — a 600m covered market selling fresh sashimi, grilled seafood, wagyu, and everything in between since 1902." },
              { name: "Shinsekai",            query: "shinsekai osaka japan neon retro tower tsutenkaku night",        desc: "Retro entertainment district built in 1912. Tsutenkaku Tower, kushikatsu restaurants, and a time-warp atmosphere." },
              { name: "Sumiyoshi Taisha",     query: "sumiyoshi taisha osaka shrine bridge traditional architecture",   desc: "Osaka’s oldest shrine, founded in 211 AD. The iconic arched Taikobashi bridge over the sacred pond. Free entry." },
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
                Takoyaki — crispy octopus balls cooked in cast-iron moulds. \u00A5500&ndash;800 ($3&ndash;5) for 8 pieces. The unofficial currency of Osaka.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Under-budgeting for food", desc: "Osaka is Japan’s food capital. Budget more for food here than any other Japanese city. You’ll want to eat 4–5 times a day and you should. That’s not a mistake — under-eating in Osaka is.", icon: "\uD83C\uDF5C" },
                { title: "Only eating in Dotonbori", desc: "Dotonbori is touristy and 20–30% more expensive. The best food is in Shinsekai (kushikatsu), Tenma (local izakayas), Tsuruhashi (Korean BBQ), and Ura-Namba (hidden restaurants behind Namba).", icon: "\uD83D\uDCCD" },
                { title: "Skipping Kuromon Market morning", desc: "The market is best 8–10am when everything is fresh. By afternoon, popular stalls sell out. Go hungry, eat standing, graze through every aisle.", icon: "\u23F0" },
                { title: "Buying Universal tickets at the gate", desc: "Universal Studios sells out on weekends and holidays. Buy tickets online at least 1 week ahead. Express Pass is essential on busy days — it halves your wait times.", icon: "\uD83C\uDFA2" },
                { title: "Ignoring Shinsekai", desc: "Many tourists stick to Dotonbori and miss Shinsekai entirely. It’s Osaka’s most characterful neighbourhood: retro neon, \u00A5100 kushikatsu skewers, and zero tourist polish. Don’t skip it.", icon: "\uD83C\uDFEE" },
                { title: "Not carrying cash", desc: "Same as everywhere in Japan — many of Osaka’s best food stalls, market vendors, and small restaurants are cash-only. Withdraw \u00A520,000–30,000 ($133–200) at a 7-Eleven ATM.", icon: "\uD83D\uDCB4" },
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
                { icon: "\uD83C\uDF7A", title: "Ura-Namba for Locals", desc: "The streets behind Namba Station are where Osakans actually eat and drink. No English menus, no tourist prices. Point at what looks good and say ‘kore kudasai’ (this please).", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDFEE", title: "Shinsekai Kushikatsu Rules", desc: "No double-dipping in the communal sauce. Take cabbage from the shared bowl to scoop sauce instead. Breaking this rule will get you scolded by the chef.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDED2", title: "Tax-Free Shopping", desc: "Spend over \u00A55,000 ($33) at one store and get 10% tax refund. Bring your passport. Don Quijote, Bic Camera, and department stores all offer this.", color: "bg-purple-50 border-purple-200" },
                { icon: "\uD83D\uDE82", title: "Day Trip to Kobe or Himeji", desc: "Kobe: 22 min by train, famous for Kobe beef and harbour views. Himeji: 50 min, home to Japan’s most spectacular castle (\u00A51,000/$7). Both make excellent half-day trips.", color: "bg-purple-50 border-purple-200" },
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
              Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Osaka itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Osaka Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days do you need in Osaka?", a: "3 days is perfect for the highlights: Osaka Castle, Dotonbori, Kuromon Market, and a choice of Universal Studios or deeper neighbourhood exploration. 2 days works if you skip Universal." },
                { q: "What is the best time to visit Osaka?", a: "Late March to May for cherry blossoms and pleasant weather, or October to November for autumn colours. Summer (June–August) is hot and humid. Avoid Golden Week (late April to early May)." },
                { q: "How much does a 3-day Osaka trip cost?", a: "Budget: \u00A521,000–30,000 ($140–200). Mid-range: \u00A536,000–54,000 ($240–360). Luxury: \u00A5330,000+ ($2,200+). All figures exclude travel to Osaka and include accommodation, food, transport and activities." },
                { q: "Is Osaka worth visiting if I’m already going to Tokyo?", a: "Absolutely. Osaka has a completely different energy — louder, funnier, more food-obsessed. The street food alone justifies the 2.5-hour bullet train ride. It pairs perfectly with Kyoto (only 29 minutes away)." },
                { q: "What food must I try in Osaka?", a: "Takoyaki (octopus balls) and okonomiyaki (savoury pancakes) are the two essentials. Also try kushikatsu (deep-fried skewers in Shinsekai), a Kuromon Market breakfast, Rikuro’s cheesecake, and yakiniku in Tsuruhashi." },
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
                { label: "Tokyo — 5 Day City Guide", href: "/blog/tokyo-5-days", soon: false },
                { label: "Kyoto — 4 Day Temple Guide", href: "/blog/kyoto-4-days", soon: false },
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

          <CombineWith currentSlug="osaka-3-days" />
          <RelatedGuides currentSlug="osaka-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
