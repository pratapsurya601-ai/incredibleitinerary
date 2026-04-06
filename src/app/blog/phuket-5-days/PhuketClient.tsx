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
import InlineCTA from "@/components/blog/InlineCTA";

const PHUKET_TOC = [
  { id: "plans",      emoji: "⚡", label: "Which Plan Are You?" },
  { id: "visa",       emoji: "\uD83D\uDCCB", label: "Visa & Entry" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",     emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "mistakes",   emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "\uD83D\uDCA1", label: "Pro Tips" },
  { id: "faq",        emoji: "❓", label: "FAQ" },
];

/* ── Reading-progress bar ─────────────────────────────────────────────── */
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

/* ── Share bar ─────────────────────────────────────────────────────────── */
function ShareBar() {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      {[
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Phuket 5-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Phuket in 5 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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

/* ── Stat card ─────────────────────────────────────────────────────────── */
function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="font-serif text-lg font-light text-ink">{value}</p>
      <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  );
}

/* ── Day card ──────────────────────────────────────────────────────────── */
function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors">
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

/* ── Tip card ──────────────────────────────────────────────────────────── */
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

/* ── FAQ accordion ─────────────────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors">
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

/* ══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════════════════ */
export default function PhuketClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget",    sub: "\u0E3F1,200–2,000/day", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "✨",        label: "Mid-Range", sub: "\u0E3F3,000–5,000/day", color: "border-blue-300 bg-blue-50 text-blue-800" },
    { id: "C" as const, emoji: "\uD83D\uDC8E",  label: "Luxury",   sub: "\u0E3F8,000+/day",           color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={PHUKET_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Phuket" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="phuket phi phi islands turquoise water thailand"
            alt="Phi Phi Islands turquoise water and limestone cliffs"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Phuket 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Islands &amp; Beaches
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">18 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Phuket in 5 Days: Islands, Beaches &amp; Beyond
                <em className="italic text-gold-light"> (Budget to Luxury, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans covering Phi Phi, Phang Nga Bay, Old Phuket Town, and beaches you won&apos;t find on Instagram.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE BODY ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>{"\uD83C\uDDF9\uD83C\uDDED"} Thailand</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDDD3"} 5 Days</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDCB0"} From \u0E3F1,200/day</span>
            </div>
          </div>

          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Phi Phi from the speedboat as you approach &mdash; the limestone cliffs rising from turquoise water &mdash; is one of those views that genuinely makes you gasp. Phuket is worth the trip for that moment alone, but there&apos;s so much more if you know where to look.
            </p>
          </blockquote>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="5 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="\u0E3F1,200/day" />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Nov – Apr" />
            <StatCard icon={"\u2708\uFE0F"} label="Airport" value="HKT" />
          </div>

          {/* ── VISA & ENTRY ── */}
          <section id="visa" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCCB"} Visa &amp; Entry Info</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">Same rules as all Thailand entry points. Phuket International Airport (HKT) has VOA counters.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border p-5 bg-amber-50 border-amber-200">
                <h3 className="font-serif text-lg font-normal mb-3 flex items-center gap-2 text-amber-800">
                  <span>{"\uD83C\uDDEE\uD83C\uDDF3"}</span> Indian Passport Holders
                </h3>
                <div className="space-y-2">
                  {[
                    ["eVisa", "Apply online at thaievisa.go.th — 5–7 business days. Single entry, up to 60 days."],
                    ["VOA", "15-day stay, \u0E3F2,000 fee at Phuket airport. Carry \u0E3F10,000 cash (individual) or \u0E3F20,000 (family) as proof of funds."],
                    ["Tourist Visa", "Apply at Thai embassy. 60-day stay, extendable 30 more days at Phuket immigration (\u0E3F1,900)."],
                    ["Tip", "eVisa is strongly recommended over VOA. Phuket VOA queue can be 60–90 min during peak season."],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-2 text-xs">
                      <span className="font-medium text-ink/80 w-24 flex-shrink-0">{k}</span>
                      <span className="text-muted font-light">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border p-5 bg-teal-50 border-teal-200">
                <h3 className="font-serif text-lg font-normal mb-3 flex items-center gap-2 text-teal-800">
                  <span>{"\uD83C\uDF0D"}</span> Most Western Passports
                </h3>
                <div className="space-y-2">
                  {[
                    ["Visa-Free", "30–60 days depending on nationality. USA, UK, EU, Australia, Canada all get 60 days."],
                    ["Extension", "Extend 30 more days at Phuket Town immigration office for \u0E3F1,900."],
                    ["Documents", "Passport valid 6+ months, return ticket, hotel booking. Airlines may check before boarding."],
                    ["Health", "No mandatory vaccinations. Travel insurance with medical cover highly recommended."],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-2 text-xs">
                      <span className="font-medium text-ink/80 w-24 flex-shrink-0">{k}</span>
                      <span className="text-muted font-light">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── WHICH PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your budget level &mdash; jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan {"→"}</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} The Itineraries</h2>
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

            {/* ── BUDGET PLAN ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDCB0"}</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; Kata Beach / Karon Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Hostels / guesthouses {"·"} \u0E3F400–\u0E3F1,000/night {"·"} Transport: Songthaews + Grab</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Patong Beach, Bangla Road"
                  items={[
                    "Arrive at HKT — airport minibus to Kata/Karon \u0E3F200 or Grab \u0E3F500–700. Don’t take the metered taxi touts (\u0E3F800+).",
                    "Check in, settle. Walk to Kata Beach by 3pm — less crowded than Patong, better sand, actual Thai food on the beachfront.",
                    "5pm: Songthaew to Patong (\u0E3F40–60). Walk Patong Beach to see the main tourist strip. Good for people-watching, bad for wallet.",
                    "7pm: Bangla Road — Phuket’s famous nightlife street. Walk it for the spectacle. Skip if nightlife isn’t your thing; Kata has better dinner options.",
                    "Rawai beats Patong for anyone who wants actual sleep and real Thai food instead of Irish pubs. Keep that in mind for accommodation.",
                    "Dinner on Bangla side streets — pad thai \u0E3F60–80, green curry \u0E3F80–120. Main Bangla Road prices are 3x inflated.",
                  ]}
                  cost="\u0E3F800–1,400 (~$23–40) excl. accommodation" />
                <DayCard day="Day 2" title="Phi Phi Island Speedboat Day Trip"
                  items={[
                    "6:30am pickup — book a shared speedboat tour the night before. Budget \u0E3F1,500–2,000/person all-inclusive (lunch, snorkel gear, national park fee).",
                    "Phi Phi from the speedboat as you approach — the limestone cliffs rising from turquoise water — is one of those views that genuinely makes you gasp.",
                    "Stops: Maya Bay (The Beach filming location, now limited entry), Pileh Lagoon (swim in the most vivid turquoise water you’ve ever seen), Monkey Beach (view from boat, don’t feed monkeys).",
                    "Snorkelling stop — gear provided. Coral isn’t the best in Thailand but the fish life is good.",
                    "Lunch on Phi Phi Don island — included in tour. Walk the narrow strip between the two bays.",
                    "Back by 5pm. Collapse at hotel. Sunburn recovery evening. Aloe vera from 7-Eleven: \u0E3F50.",
                  ]}
                  cost="\u0E3F1,500–2,200 (~$42–62) all-inclusive tour" />
                <DayCard day="Day 3" title="Old Phuket Town, Big Buddha, Wat Chalong"
                  items={[
                    "9am: Grab or songthaew to Old Phuket Town (\u0E3F100–200). Walk Thalang Road — Sino-Portuguese shophouses, street art, excellent cafes.",
                    "Coffee at Bookhemian cafe — \u0E3F80–120. Browse the Sunday Walking Street market if you’re there on a Sunday (4–9pm).",
                    "11am: Drive to Wat Chalong (\u0E3F60 songthaew) — Phuket’s most important Buddhist temple. Free entry. Beautiful architecture, peaceful grounds.",
                    "12:30pm: Big Buddha — 45-metre white marble Buddha visible from most of southern Phuket. Free entry (donation welcome). Panoramic island views. Dress respectfully.",
                    "Lunch at a local restaurant near Big Buddha — khao pad (fried rice) \u0E3F60, som tam (papaya salad) \u0E3F50.",
                    "Evening: Kata Beach sunset + dinner at a beachside restaurant. Grilled fish with rice \u0E3F120–200.",
                  ]}
                  cost="\u0E3F600–1,000 (~$17–28) excl. accommodation" />
                <DayCard day="Day 4" title="James Bond Island / Phang Nga Bay"
                  items={[
                    "7am pickup — book Phang Nga Bay tour. Budget option: shared longtail boat tour \u0E3F1,200–1,800/person (includes lunch, kayaking, James Bond Island).",
                    "James Bond Island (Ko Tapu) — the famous leaning rock from The Man with the Golden Gun. Tiny island, very touristy, but the bay scenery is incredible.",
                    "Sea kayaking through limestone caves and mangrove tunnels — usually included in the tour. Highlight of the day for most people.",
                    "Koh Panyee — floating Muslim fishing village built on stilts. Lunch here (included). Walk around the village for 30 min.",
                    "Back by 4pm. Evening: night market near your hotel for dinner — budget \u0E3F150–250.",
                  ]}
                  cost="\u0E3F1,200–2,000 (~$34–56) all-inclusive tour" />
                <DayCard day="Day 5" title="Kata/Karon Beach, Thai Cooking Class"
                  items={[
                    "Morning: Kata Beach relaxation. Rent a sun lounger \u0E3F100–200. Swim, read, recover from 4 days of activity.",
                    "11am: Thai cooking class — \u0E3F1,000–1,500/person for half-day class. Learn green curry, pad thai, tom yum, and mango sticky rice. Market visit usually included. You eat everything you cook.",
                    "Alternatively: Karon Viewpoint (free) for the iconic three-bay panorama photo, then Freedom Beach (\u0E3F200 longtail from Patong, hidden gem with crystal water).",
                    "4pm: Last beach time. Walk Karon Beach — less touristy than Kata, wider sand.",
                    "Final dinner: seafood BBQ at the Kata night market — grilled prawns \u0E3F200, whole fish \u0E3F150, mango sticky rice \u0E3F50.",
                  ]}
                  cost="\u0E3F1,200–1,800 (~$34–50) excl. accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 5-Day Cost (solo) {"·"} </span>
                  <span className="font-serif text-base text-ink font-light">\u0E3F6,000–\u0E3F10,000 (~$170–$280) including accommodation</span>
                </div>
              </div>
            )}

            {/* ── MID-RANGE PLAN ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">{"✨"}</span>
                  <div>
                    <p className="text-sm font-medium text-blue-800">Mid-Range Plan &mdash; Kata Noi / Rawai Base</p>
                    <p className="text-xs text-blue-600 font-light">Stay: 3–4 star resort {"·"} \u0E3F1,500–\u0E3F3,500/night {"·"} Transport: Grab + tours</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive, Patong Orientation, Sunset"
                  items={[
                    "Airport transfer: pre-booked hotel shuttle \u0E3F500–800 or Grab \u0E3F600–900. Smoother than negotiating at arrivals.",
                    "Check in, pool time until 3pm. Let the island pace settle in.",
                    "4pm: Drive to Promthep Cape — Phuket’s most famous sunset viewpoint. Free. Arrive 30 min before sunset for a good spot.",
                    "6pm: Dinner at After Beach Bar, Kata — elevated Thai food with sea views. Mains \u0E3F250–450.",
                    "Optional evening: Visit Patong and Bangla Road for the spectacle. One evening is enough — it’s loud and touristy but quintessentially Phuket.",
                    "Rawai beats Patong for anyone who wants actual sleep and real Thai food instead of Irish pubs.",
                  ]}
                  cost="\u0E3F1,500–2,500 (~$42–70) excl. accommodation" />
                <DayCard day="Day 2" title="Phi Phi Island Premium Speedboat"
                  items={[
                    "Book a premium speedboat tour — \u0E3F2,500–3,500/person. Smaller groups (max 20 vs 40), better boat, quality lunch, snorkel equipment included.",
                    "7am pickup. First stop: Pileh Lagoon before the crowds — absolutely stunning enclosed turquoise lagoon. Best swim of your life.",
                    "Maya Bay (limited entry, \u0E3F400 national park fee usually included). The Beach filming location. Worth it early morning.",
                    "Snorkelling at Shark Point or Bamboo Island — clearer water, better coral than the main Phi Phi stops.",
                    "Lunch on Phi Phi Don at a beachfront restaurant. Walk the viewpoint trail (30 min uphill) for the iconic two-bay panorama.",
                    "Return by 4:30pm. Evening: quiet dinner at your resort or Rawai seafood market — buy fresh catch, restaurants cook it for \u0E3F100 per dish.",
                  ]}
                  cost="\u0E3F2,500–3,800 (~$70–107) all-inclusive" />
                <DayCard day="Day 3" title="Old Phuket Town, Big Buddha, Wat Chalong"
                  items={[
                    "9am: Grab to Old Phuket Town. Walk Soi Romanee (most photogenic street), Thalang Road, and the Sino-Portuguese architecture district.",
                    "Coffee at One Chun Cafe (inside a 100-year-old shophouse) — \u0E3F100–150. Try khanom chin (Thai rice noodles) for brunch.",
                    "11am: Wat Chalong — most important temple in Phuket. Free entry, beautiful grounds, 20–30 min visit.",
                    "12pm: Big Buddha — the 45m marble statue dominates the southern skyline. Free. Dress code: cover shoulders and knees.",
                    "Lunch at Raya Restaurant (Old Town) — famous Phuketian cuisine in a colonial mansion. Crab curry \u0E3F350, moo hong (Phuket pork belly) \u0E3F250.",
                    "Afternoon: pool time or Kata Noi beach (smaller, quieter than Kata).",
                  ]}
                  cost="\u0E3F1,800–3,000 (~$50–85) excl. accommodation" />
                <DayCard day="Day 4" title="James Bond Island / Phang Nga Bay"
                  items={[
                    "Book Phang Nga Bay premium tour — \u0E3F2,500–4,000/person. Includes speedboat, sea kayaking, James Bond Island, Koh Panyee, lunch.",
                    "Sea kayaking through limestone cave systems and hongs (hidden lagoons inside karst islands) — the highlight. Utterly surreal landscape.",
                    "James Bond Island (Ko Tapu) — iconic tilted rock. Crowded but the surrounding bay is jaw-dropping.",
                    "Lunch at Koh Panyee floating village — fresh seafood, views of limestone karsts from every angle.",
                    "Some tours include sunset kayaking — worth the premium if available.",
                    "Evening: celebratory dinner at Suay Restaurant, Old Town — modern Thai fine-casual. Mains \u0E3F300–500.",
                  ]}
                  cost="\u0E3F2,500–4,500 (~$70–127) all-inclusive tour" />
                <DayCard day="Day 5" title="Beach Day, Thai Cooking Class, Farewell"
                  items={[
                    "Morning: Kata Beach or pool. Slow start — you’ve earned it.",
                    "11am: Thai cooking class — \u0E3F1,800–2,500/person. Phuket Thai Cooking Academy or Blue Elephant Phuket (in a colonial governor’s mansion). Market tour + 4–5 dishes + recipes to take home.",
                    "3pm: Last stop — Freedom Beach (longtail from Patong \u0E3F200–300, 10 min). Crystal clear water, tiny hidden cove. One of Phuket’s best-kept open secrets.",
                    "Alternatively: Karon Viewpoint for the three-bay panorama photo, then massage at Let’s Relax Spa (\u0E3F500–800 for Thai massage).",
                    "Final dinner: seafood at Rawai Seafood Market — choose your fish/prawns/crab live, they cook it. Budget \u0E3F400–700 for a feast.",
                  ]}
                  cost="\u0E3F2,800–4,200 (~$79–118) excl. accommodation" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-blue-700 uppercase tracking-wide">Total 5-Day Cost (per person) {"·"} </span>
                  <span className="font-serif text-base text-ink font-light">\u0E3F15,000–\u0E3F25,000 (~$420–$700) including accommodation</span>
                </div>
              </div>
            )}

            {/* ── LUXURY PLAN ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDC8E"}</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Luxury Plan &mdash; Banyan Tree / Trisara Base</p>
                    <p className="text-xs text-purple-600 font-light">Stay: 5-star resort with pool villa {"·"} \u0E3F8,000–\u0E3F30,000/night {"·"} Transport: Hotel car</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive, Private Beach, Sunset Dinner"
                  items={[
                    "Airport: hotel limousine transfer. Check into your pool villa. Most luxury Phuket resorts are experiences unto themselves.",
                    "2pm: Private beach access at your resort — Trisara, Amanpuri, and The Surin all have secluded beach areas.",
                    "4pm: In-villa spa treatment. Banyan Tree Spa has been rated Asia’s best — 2-hour Rainforest Experience from \u0E3F6,500.",
                    "6:30pm: Sunset dinner at La Gritta, Amari Phuket — Italian-Thai fusion on a clifftop. Mains \u0E3F600–1,200.",
                    "Or Siam Supper Club for steaks and jazz in a 1950s Americana setting. Mains \u0E3F800–1,500.",
                  ]}
                  cost="\u0E3F8,000–15,000 (~$225–$420) excl. accommodation" />
                <DayCard day="Day 2" title="Private Phi Phi Charter"
                  items={[
                    "Private speedboat charter to Phi Phi — \u0E3F15,000–25,000/boat (fits 6–8). Your schedule, your stops, no crowds. Depart 7am to reach Maya Bay before the tours.",
                    "Pileh Lagoon private swim — arriving before 9am means you might have it to yourself. Surreal turquoise enclosed lagoon.",
                    "Snorkelling at Bamboo Island or Hin Klang — better coral reefs than main tourist stops.",
                    "Chef-prepared lunch on the boat or beachside at a private section of Phi Phi Don.",
                    "Return via Khai Islands for a final swim. Back by 4pm.",
                    "Evening: Acqua Restaurant (Old Town) — Italian fine dining in a restored Sino-Portuguese mansion. Tasting menu \u0E3F3,500.",
                  ]}
                  cost="\u0E3F12,000–20,000 (~$340–$560) for charter" />
                <DayCard day="Day 3" title="Heritage Tour, Spa Day, Fine Dining"
                  items={[
                    "9am: Private Old Phuket Town heritage tour with a historian guide — \u0E3F3,000–5,000/person. Covers Sino-Portuguese architecture, hidden temples, local food spots.",
                    "11am: Big Buddha and Wat Chalong — with private guide context that makes the visits 3x richer.",
                    "1pm: Lunch at Blue Elephant Phuket — royal Thai cuisine in the 1903 governor’s mansion. Set lunch \u0E3F1,500–2,500.",
                    "3pm: Full afternoon spa at your resort. The Banyan Tree Spa signature treatments are world-class.",
                    "7pm: Dinner at PRU at Trisara (1 Michelin star) — farm-to-table with ingredients from their own farm. Tasting menu \u0E3F4,500.",
                  ]}
                  cost="\u0E3F10,000–18,000 (~$280–$505) excl. accommodation" />
                <DayCard day="Day 4" title="Phang Nga Bay Private Experience"
                  items={[
                    "Private Phang Nga Bay yacht or longtail charter — \u0E3F12,000–20,000/boat. Explore at your own pace.",
                    "Sea kayaking through hidden hongs (collapsed cave lagoons) with a private guide. Completely different experience from group tours.",
                    "James Bond Island early morning visit — arrive before the tour boats. Stunning without the crowds.",
                    "Lunch on a private beach or aboard the boat. Fresh seafood prepared by on-board chef.",
                    "Sunset cruise back through the bay — the limestone karsts at golden hour are otherworldly.",
                    "Evening: In-villa private BBQ dinner arranged by the resort. \u0E3F5,000–8,000 for two.",
                  ]}
                  cost="\u0E3F15,000–25,000 (~$420–$700) for private charter" />
                <DayCard day="Day 5" title="Cooking Class, Beach, Farewell"
                  items={[
                    "9am: Private cooking class at Blue Elephant or Mom Tri’s Kitchen — \u0E3F3,500–5,000/person. Market visit + 5 dishes in a stunning setting.",
                    "1pm: Pool villa afternoon. Or helicopter scenic flight over Phang Nga Bay — \u0E3F15,000–20,000 for 30 min. Bucket list stuff.",
                    "3pm: Last swim at Freedom Beach or your resort’s private beach.",
                    "Farewell dinner: Ka Jok See (Old Town) — dinner party atmosphere, Thai food, live music, dancing. Reservations mandatory. \u0E3F1,500–2,500/person.",
                    "Phuket’s luxury scene rivals anywhere in Southeast Asia at a fraction of Maldives or Bali five-star prices.",
                  ]}
                  cost="\u0E3F8,000–15,000 (~$225–$420) excl. accommodation" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 5-Day Cost (per person) {"·"} </span>
                  <span className="font-serif text-base text-ink font-light">\u0E3F40,000+ (~$1,125+) including accommodation</span>
                </div>
              </div>
            )}
          </section>

          {/* ── INLINE CTA ── */}
          <InlineCTA destination="Phuket" onPlanTrip={() => setModalOpen(true)} />

          {/* ── GALLERY ── */}
          <DestinationGallery
            title="Phuket &mdash; Must-See Places"
            subtitle="Click each thumbnail to explore Phuket&apos;s most stunning islands, temples and coastline."
            spots={[
              { name: "Phi Phi Islands",    query: "phi phi islands limestone cliffs turquoise lagoon aerial thailand",     desc: "Limestone cliffs rising from turquoise water. The speedboat approach is one of Southeast Asia’s most dramatic moments." },
              { name: "Phang Nga Bay",       query: "phang nga bay james bond island limestone karst thailand",              desc: "Towering limestone karsts jutting from emerald water. Sea kayaking through hidden caves and lagoons is the highlight." },
              { name: "Old Phuket Town",     query: "old phuket town sino portuguese colorful shophouses street",            desc: "Sino-Portuguese architecture, street art, and the best coffee on the island. Walk Soi Romanee and Thalang Road." },
              { name: "Big Buddha",          query: "phuket big buddha white marble statue hilltop panoramic",               desc: "45-metre white marble Buddha visible from across southern Phuket. Free entry, panoramic views, peaceful atmosphere." },
              { name: "Maya Bay",            query: "maya bay phi phi turquoise water cliff enclosed beach thailand",         desc: "The Beach filming location. Now with limited daily visitors to protect the recovering ecosystem. Book early." },
            ]}
          />

          {/* ── MID-ARTICLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="phang nga bay limestone karst kayak emerald water thailand"
              alt="Sea kayaking through Phang Nga Bay limestone karsts"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Sea kayaking through Phang Nga Bay&apos;s hidden hongs &mdash; collapsed cave lagoons accessible only at the right tide. Surreal doesn&apos;t begin to cover it.
              </p>
            </div>
          </div>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Phuket"
            hotels={[
              { name: "Lub d Phuket Patong", type: "Budget Hostel · Patong", price: "From \u0E3F500/night (~$14)", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/th/lub-d-phuket-patong.html?aid=2820480" },
              { name: "The Shore at Katathani", type: "Boutique Resort · Kata Noi", price: "From \u0E3F4,500/night (~$127)", rating: "5", badge: "Mid-range pick", url: "https://www.booking.com/hotel/th/the-shore-at-katathani.html?aid=2820480" },
              { name: "Trisara Phuket", type: "Luxury Pool Villa · Nai Thon", price: "From \u0E3F18,000/night (~$507)", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/th/trisara.html?aid=2820480" },
            ]}
            activities={[
              { name: "Phi Phi Island Speedboat Day Trip", duration: "Full day", price: "From \u0E3F1,500/person (~$42)", badge: "Must do", url: "https://www.getyourguide.com/s/?q=phuket&partner_id=PSZA5UI" },
              { name: "Phang Nga Bay & James Bond Island", duration: "Full day", price: "From \u0E3F1,200/person (~$34)", badge: "Popular", url: "https://www.getyourguide.com/s/?q=phuket&partner_id=PSZA5UI" },
              { name: "Thai Cooking Class with Market Tour", duration: "Half day", price: "From \u0E3F1,000/person (~$28)", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=phuket&partner_id=PSZA5UI" },
              { name: "Similan Islands Snorkelling Day Trip", duration: "Full day", price: "From \u0E3F2,500/person (~$70)", url: "https://www.getyourguide.com/s/?q=phuket&partner_id=PSZA5UI" },
            ]}
            pdfProductId="phuket-5-days-pdf"
          />

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">{"✨"} Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">{"\uD83D\uDC8E"} Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (5N)", "\u0E3F2,000–5,000",   "\u0E3F7,500–17,500",  "\u0E3F40,000–150,000"],
                    ["\uD83C\uDF5C Food & Drinks",       "\u0E3F1,500–2,500",   "\u0E3F4,000–8,000",   "\u0E3F15,000–35,000"],
                    ["\uD83D\uDE8C Transport",            "\u0E3F800–1,500",     "\u0E3F2,000–4,000",   "\u0E3F5,000–15,000"],
                    ["\uD83C\uDFAF Tours & Activities",   "\u0E3F3,000–5,000",   "\u0E3F8,000–15,000",  "\u0E3F40,000–80,000"],
                    ["\uD83D\uDED2 Shopping & Extras",    "\u0E3F0–1,000",       "\u0E3F2,000–5,000",   "\u0E3F5,000–20,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 5 days)</td>
                    {["\u0E3F6,000–10,000 (~$170–280)", "\u0E3F15,000–25,000 (~$420–700)", "\u0E3F40,000+ (~$1,125+)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices Thai Baht (\u0E3F) 2026. USD conversions approximate at \u0E3F35.5 = $1. International flights not included.
            </p>
          </section>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Staying in Patong for the whole trip", desc: "Patong is great for one evening. Staying there means noise until 3am, inflated prices, and zero authentic Thai experience. Base in Kata, Karon, or Rawai instead.", icon: "\uD83C\uDFD6\uFE0F" },
                { title: "Booking island tours at the hotel desk", desc: "Hotel tour desks charge 30–50% more than booking directly online or at street agencies. Compare prices on Klook or GetYourGuide the night before.", icon: "\uD83D\uDCB8" },
                { title: "Skipping sunscreen on boat days", desc: "Equatorial sun + water reflection = severe burns in 45 minutes. Reef-safe SPF50, reapply every 90 min. Buy in advance — island shops charge 3x.", icon: "\u2600\uFE0F" },
                { title: "Renting a scooter without a licence", desc: "Thailand requires an International Driving Permit for scooters. Police checkpoints on Phuket’s hills are common — fine is \u0E3F500 and your insurance is void if you crash.", icon: "\uD83D\uDEF5" },
                { title: "Visiting Phi Phi in monsoon season", desc: "May–October seas can be very rough. Speedboat tours are regularly cancelled. If you must go in shoulder season, book flexible and check weather the morning of.", icon: "\uD83C\uDF0A" },
                { title: "Only doing islands and skipping Old Town", desc: "Old Phuket Town has more character than most Southeast Asian cities. Sino-Portuguese architecture, incredible local food, art galleries — budget at least half a day.", icon: "\uD83C\uDFD8\uFE0F" },
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
                { icon: "\uD83D\uDCF1", title: "Get Grab + Bolt", desc: "Both ride-hailing apps work in Phuket. Phuket has no public transport worth using — no BTS, no buses on useful routes. Grab and Bolt are your lifeline.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83E\uDDED", title: "Rawai Seafood Market", desc: "Buy fresh seafood at the Rawai beachfront market (\u0E3F200–400/kg), then walk to any of the restaurants behind it — they cook it for \u0E3F100/dish. Best seafood deal on the island.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF05", title: "Promthep Cape Sunset", desc: "Arrive 30 min before sunset. Bring your own drinks. The lighthouse viewpoint is less crowded than the main platform. Best sunset on the island.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDCA7", title: "Monsoon = Savings", desc: "May–October means lower hotel prices (30–50% off), fewer tourists, and still plenty of sunny mornings. Afternoon showers usually clear by sunset. Just skip boat trips in rough weather.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDFCA", title: "Freedom Beach Hack", desc: "Most tourists pay \u0E3F1,500 for a longtail from Patong. Walk down the jungle path from the car park (steep, 10 min) for free. Or take a longtail from the southern end — \u0E3F200–300.", color: "bg-blue-50 border-blue-200" },
                { icon: "\uD83D\uDE4F", title: "Big Buddha Etiquette", desc: "Free entry but strictly enforced dress code — cover shoulders and knees. Free sarongs available at the entrance. Go early morning for fewest tourists and best light.", color: "bg-blue-50 border-blue-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA (dark) ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Phuket itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Phuket Trip {"→"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Phuket?", a: "5 days is ideal to cover beaches, Phi Phi Island, Phang Nga Bay, Old Town and a cooking class. 3 days works if you pick either Phi Phi or Phang Nga. 7 days lets you add Similan Islands or Krabi." },
                { q: "What is the best time to visit Phuket?", a: "November–April is dry season with calm seas. December–January is peak with highest prices. May–October is monsoon — lower prices but rougher seas and possible tour cancellations." },
                { q: "How much does a 5-day Phuket trip cost?", a: "Budget: \u0E3F6,000–10,000 ($170–280) for 5 days including accommodation. Mid-range: \u0E3F15,000–25,000 ($420–700). Luxury: \u0E3F40,000+ ($1,125+). International flights not included." },
                { q: "Do Indian passport holders need a visa?", a: "Yes. eVisa (apply online, 60-day stay), Visa on Arrival at HKT airport (15-day stay, \u0E3F2,000 fee), or Tourist Visa from Thai embassy (60 days). Most Western passports get 30–60 days visa-free." },
                { q: "Patong or Kata Beach — which is better?", a: "Patong for nightlife, shopping, first-timer energy. Kata/Karon for families, couples, and anyone who wants sleep. Rawai for authentic Thai food and local vibes. Our recommendation: stay Kata or Rawai, visit Patong for one evening." },
                { q: "Is the Phi Phi Island day trip worth it?", a: "Absolutely. The limestone cliffs as you approach are genuinely breathtaking. Speedboat trips (\u0E3F1,500–3,500) cover Phi Phi Don, Maya Bay, Pileh Lagoon and snorkelling. Go as early as possible to beat the crowds." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Thailand Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Bangkok — 4 Day Temple & Food Guide", href: "/blog/bangkok-4-days", soon: false },
                { label: "Chiang Mai — 4 Day Culture Guide", href: "/blog/chiang-mai-4-days", soon: false },
                { label: "Browse All Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View {"→"}</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="phuket-5-days" />
          <RelatedGuides currentSlug="phuket-5-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
