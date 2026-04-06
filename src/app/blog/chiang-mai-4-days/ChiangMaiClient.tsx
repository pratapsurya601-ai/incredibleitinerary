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

const CHIANGMAI_TOC = [
  { id: "plans",      emoji: "\u26A1", label: "Which Plan Are You?" },
  { id: "visa",       emoji: "\uD83D\uDCCB", label: "Visa & Entry" },
  { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
  { id: "budget",     emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "mistakes",   emoji: "\u274C", label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "\uD83D\uDCA1", label: "Pro Tips" },
  { id: "faq",        emoji: "\u2753", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Chiang Mai 4-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Chiang Mai in 4 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">{"\u25CF"}</span>
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
          <p className="font-medium text-sm text-ink mb-1">{title}</p>
          <p className="text-xs text-muted font-light leading-relaxed">{desc}</p>
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
export default function ChiangMaiClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget",    sub: "\u0E3F600\u20131,200/day", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\u2728",        label: "Mid-Range", sub: "\u0E3F1,500\u20133,000/day", color: "border-blue-300 bg-blue-50 text-blue-800" },
    { id: "C" as const, emoji: "\uD83D\uDC8E",  label: "Luxury",   sub: "\u0E3F5,000+/day",           color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={CHIANGMAI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Chiang Mai" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="chiang mai doi suthep temple golden thailand"
            alt="Chiang Mai Doi Suthep golden temple on the mountainside"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Chiang Mai 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Temples &amp; Culture
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">15 min read</span>
                <span className="text-white/50">{"\u00B7"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Chiang Mai in 4 Days: Temples, Mountains &amp; Markets
                <em className="italic text-gold-light"> (Budget to Luxury, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real timings, costs in Thai Baht, ethical elephant experiences &mdash; and why this might be Thailand&apos;s best-kept secret.
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
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDDD3"} 4 Days</span>
              <span>{"\u00B7"}</span>
              <span>{"\uD83D\uDCB0"} From \u0E3F600/day</span>
            </div>
          </div>

          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Sunday Night Market food crawl is a mile long and you&apos;ll want to eat at every stall. Budget \u0E3F500 and pace yourself. Chiang Mai is the kind of place that makes you extend your trip and come back every year.
            </p>
          </blockquote>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="4 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="\u0E3F600/day" />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Nov \u2013 Feb" />
            <StatCard icon={"\u2708\uFE0F"} label="Airport" value="CNX" />
          </div>

          {/* ── VISA & ENTRY ── */}
          <section id="visa" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCCB"} Visa &amp; Entry Info</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">Same rules as all Thailand entry points. Chiang Mai International Airport (CNX) has VOA counters.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border p-5 bg-amber-50 border-amber-200">
                <h3 className="font-serif text-lg font-normal mb-3 flex items-center gap-2 text-amber-800">
                  <span>{"\uD83C\uDDEE\uD83C\uDDF3"}</span> Indian Passport Holders
                </h3>
                <div className="space-y-2">
                  {[
                    ["eVisa", "Apply online at thaievisa.go.th \u2014 5\u20137 business days. Single entry, up to 60 days."],
                    ["VOA", "15-day stay, \u0E3F2,000 fee. CNX airport VOA queue is usually shorter than Bangkok."],
                    ["Tourist Visa", "Apply at Thai embassy. 60-day stay, extendable 30 more at Chiang Mai immigration (\u0E3F1,900)."],
                    ["Tip", "Many travellers fly Bangkok \u2192 Chiang Mai domestically. Visa is checked at your international arrival point, not CNX."],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-2 text-xs">
                      <span className="font-medium text-ink/60 w-24 flex-shrink-0">{k}</span>
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
                    ["Visa-Free", "30\u201360 days depending on nationality. USA, UK, EU, Australia, Canada all get 60 days."],
                    ["Extension", "Extend 30 more days at Chiang Mai Promenada immigration for \u0E3F1,900. Arrive early, bring passport photos."],
                    ["Domestic", "If flying from Bangkok, no additional visa needed. Your Thailand entry stamp covers the whole country."],
                    ["Health", "No mandatory vaccinations. Mosquito repellent recommended especially Nov\u2013Feb (cooler but mosquitoes still active)."],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-2 text-xs">
                      <span className="font-medium text-ink/60 w-24 flex-shrink-0">{k}</span>
                      <span className="text-muted font-light">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── WHICH PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\u26A1"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your budget level &mdash; jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan {"\u2192"}</p>
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
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; Old City Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Hostels / guesthouses {"\u00B7"} \u0E3F200\u2013\u0E3F600/night {"\u00B7"} Transport: Songthaews + bicycle</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Old City Temples Walk, Sunday Night Market"
                  items={[
                    "Arrive CNX \u2014 shared songthaew to Old City \u0E3F40\u201360/person. Red trucks (songthaews) are Chiang Mai\u2019s public transport \u2014 wave one down, tell them your destination, pay when you exit.",
                    "Check in, rent a bicycle for the day (\u0E3F50\u201380/day). The Old City is perfectly sized for cycling \u2014 everything within the moat is walkable or bikeable.",
                    "2pm: Temple walk \u2014 Wat Chedi Luang (14th-century partially ruined chedi, free), Wat Phra Singh (Chiang Mai\u2019s most important temple, \u0E3F40), Wat Chiang Man (oldest temple in the city, free). Budget 2.5 hours for all three.",
                    "5pm: Tha Phae Gate \u2014 the iconic old city entrance. Best photos at golden hour.",
                    "If Sunday: Sunday Night Market (Walking Street) starts at 4pm on Ratchadamnoen Road. The Sunday Night Market food crawl is a mile long and you\u2019ll want to eat at every stall. Budget \u0E3F500 and pace yourself.",
                    "If not Sunday: Night Bazaar (daily) on Chang Khlan Road \u2014 less authentic but still fun. Khao soi at Cowboy Hat Lady stall \u0E3F40.",
                  ]}
                  cost="\u0E3F400\u2013800 (~$11\u201323) excl. accommodation" />
                <DayCard day="Day 2" title="Doi Suthep Temple, Nimmanhaemin Road Cafes"
                  items={[
                    "8am: Songthaew from Old City to Doi Suthep \u2014 \u0E3F60/person from Tha Phae Gate area. Or share a red truck from Chiang Mai University main gate (\u0E3F40).",
                    "Wat Phra That Doi Suthep \u2014 306 steps up the Naga staircase (or take the cable car \u0E3F50). Entry \u0E3F30 (~$1). Golden chedi, panoramic views of the entire city. Best in morning before clouds roll in.",
                    "10:30am: Back down the mountain. Grab lunch at Khao Soi Khun Yai \u2014 famous for Chiang Mai\u2019s signature dish. \u0E3F50 for a bowl that will change your life.",
                    "1pm: Nimmanhaemin Road (Nimman) \u2014 Chiang Mai\u2019s hip neighbourhood. CAMP cafe (free co-working with coffee purchase), Ristr8to (award-winning latte art, \u0E3F80\u2013120).",
                    "Walk the sois (side streets) of Nimman \u2014 boutique shops, art galleries, and more cafes per square metre than anywhere in Thailand.",
                    "Evening: Nimman night market or Soi 9 for dinner. Pad kra pao \u0E3F45, mango sticky rice \u0E3F40.",
                  ]}
                  cost="\u0E3F400\u2013700 (~$11\u201320) excl. accommodation" />
                <DayCard day="Day 3" title="Ethical Elephant Sanctuary, Thai Cooking Class"
                  items={[
                    "Full day: Ethical elephant sanctuary \u2014 budget options from \u0E3F1,500\u20132,000/person (half-day) or \u0E3F2,500\u20133,000 (full day, includes lunch and transport).",
                    "Elephant riding is cruel \u2014 ethical sanctuaries let you feed, bathe, and walk WITH them. The experience is better AND ethical. Look for Elephant Jungle Sanctuary or similar certified operations.",
                    "Activities: Feed elephants sugar cane and bananas, walk alongside them through jungle trails, mud bath and river bathing with the elephants. No riding, no chains, no bullhooks.",
                    "Back by 2\u20133pm. Rest and freshen up.",
                    "4pm: Half-day Thai cooking class \u2014 \u0E3F800\u20131,200/person. Mama Noi or Thai Farm Cooking School. Market visit + 5 dishes. You eat everything you cook.",
                    "Evening: you\u2019re full from cooking class. Night cap at a rooftop bar on Nimman.",
                  ]}
                  cost="\u0E3F2,300\u20133,200 (~$65\u201390) all-inclusive" />
                <DayCard day="Day 4" title="Sticky Waterfall OR White Temple Day Trip"
                  items={[
                    "OPTION A \u2014 Sticky Waterfall (Bua Tong): 60km north of Chiang Mai. Songthaew tour \u0E3F300\u2013500/person or Grab \u0E3F600\u2013800 each way (split with travellers). The limestone surface is naturally sticky so you can walk UP the waterfall barefoot. Free entry. Truly unique.",
                    "OPTION B \u2014 White Temple (Wat Rong Khun): 200km in Chiang Rai. Budget bus \u0E3F130\u2013200 one way (3 hours) or day trip tour \u0E3F800\u20131,200/person all-inclusive. Surreal white temple covered in mirrors \u2014 Instagram gold. Entry \u0E3F100.",
                    "If doing White Temple: combine with Blue Temple (Wat Rong Suea Ten, free) and Black House (Baan Dam Museum, \u0E3F80) \u2014 all in Chiang Rai province.",
                    "Back by late afternoon. Final evening: Huen Phen restaurant (Old City) for authentic Northern Thai dinner. Khantoke set meal \u0E3F200 \u2014 the traditional Lanna feast.",
                    "Last market run: pick up Thai handicrafts, hill tribe textiles, and handmade soap as souvenirs. Much cheaper than Bangkok prices.",
                  ]}
                  cost="\u0E3F500\u20131,400 (~$14\u201340) excl. accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 4-Day Cost (solo) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">\u0E3F2,400\u2013\u0E3F4,800 (~$68\u2013$135) including accommodation</span>
                </div>
              </div>
            )}

            {/* ── MID-RANGE PLAN ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\u2728"}</span>
                  <div>
                    <p className="text-sm font-medium text-blue-800">Mid-Range Plan &mdash; Nimman / Old City Boutique</p>
                    <p className="text-xs text-blue-600 font-light">Stay: Boutique hotel {"\u00B7"} \u0E3F800\u2013\u0E3F2,000/night {"\u00B7"} Transport: Grab + tours</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Old City Temple Circuit, Sunday Walking Street"
                  items={[
                    "Arrive CNX \u2014 Grab to hotel \u0E3F150\u2013250. Check in, settle.",
                    "2pm: Guided Old City temple tour \u2014 \u0E3F500\u2013800/person for a 3-hour walking tour covering 5\u20137 temples with a local guide who explains the Lanna history.",
                    "Must-see temples: Wat Chedi Luang (massive 14th-century chedi), Wat Phra Singh (gold-topped and housing Chiang Mai\u2019s most revered Buddha image), Wat Chiang Man (the city\u2019s oldest, from 1296).",
                    "5pm: Tha Phae Gate area for photos and coffee.",
                    "Sunday: Sunday Walking Street market \u2014 the best night market in Thailand. A full kilometre of food, crafts, and live music. Budget \u0E3F500\u2013800 for food and souvenirs.",
                    "Not Sunday: Saturday Night Market on Wualai Road (slightly less crowded, equally good) or Night Bazaar (daily).",
                  ]}
                  cost="\u0E3F1,000\u20131,800 (~$28\u201350) excl. accommodation" />
                <DayCard day="Day 2" title="Doi Suthep, Nimman Cafe Crawl, Sunset Dinner"
                  items={[
                    "7:30am: Private Grab to Doi Suthep \u2014 \u0E3F300\u2013400. Beat the tour groups.",
                    "Wat Phra That Doi Suthep \u2014 climb the 306-step Naga staircase for the full experience. Golden chedi, monks chanting, panoramic city views. \u0E3F30 entry.",
                    "9:30am: Side trip to Doi Suthep\u2013Pui National Park \u2014 Hmong hill tribe village (15 min further up the mountain). Small market with handmade textiles.",
                    "11am: Back to city. Brunch at Graph Cafe (Nimman) \u2014 specialty coffee + eggs benedict \u0E3F200\u2013350.",
                    "Afternoon: Nimman cafe crawl \u2014 Ristr8to (competition latte art), CAMP at Maya Mall (workspace vibes), Rustic & Blue (garden setting). Chiang Mai has the best cafe scene in Southeast Asia.",
                    "7pm: Dinner at Dash! Restaurant \u2014 upscale Northern Thai in a beautiful colonial house. Mains \u0E3F250\u2013450. Reservation recommended.",
                  ]}
                  cost="\u0E3F1,200\u20132,000 (~$34\u201356) excl. accommodation" />
                <DayCard day="Day 3" title="Ethical Elephant Sanctuary, Evening Cooking Class"
                  items={[
                    "Full day at an ethical elephant sanctuary \u2014 \u0E3F2,500\u20133,500/person for premium operators like Elephant Nature Park or Patara Elephant Farm. Includes hotel pickup, lunch, and full-day programme.",
                    "Elephant Nature Park is the gold standard \u2014 rescue and rehabilitation centre where elephants roam freely. You feed them, walk with them, and help with bathing. No riding.",
                    "The experience: prepare food baskets for the elephants, walk alongside them through meadows and river areas, learn each elephant\u2019s rescue story from the guides. Emotional and unforgettable.",
                    "Back by 3pm. Rest and shower.",
                    "5pm: Evening Thai cooking class at Pantawan Cooking School \u2014 \u0E3F1,200\u20131,500/person. Flower market visit + 5 dishes including khao soi. More intimate than morning classes.",
                    "You eat everything you cook. No need for dinner reservations.",
                  ]}
                  cost="\u0E3F3,700\u20135,000 (~$104\u2013$140) all-inclusive" />
                <DayCard day="Day 4" title="Sticky Waterfall OR White Temple, Farewell"
                  items={[
                    "OPTION A \u2014 Sticky Waterfall (Bua Tong): Half-day tour \u0E3F800\u20131,200/person with hotel transfer. Walk up the mineral-coated limestone waterfall barefoot. Completely surreal. Combine with Mae Sa Waterfall and orchid farm.",
                    "OPTION B \u2014 White Temple Day Trip: Full-day tour to Chiang Rai \u0E3F1,500\u20132,500/person. Covers Wat Rong Khun (White Temple), Blue Temple, Black House Museum, and Golden Clock Tower. Lunch included.",
                    "If staying in town: Royal Park Rajapruek (botanical garden, \u0E3F200 entry), then Thai massage at Fah Lanna Spa (\u0E3F600\u2013900 for 2-hour treatment).",
                    "4pm: Last cafe stop at Akha Ama Coffee (Old City) \u2014 ethically sourced Akha hill tribe coffee. \u0E3F80\u2013120. The story behind the brand is worth asking about.",
                    "Final dinner: SP Chicken (Soi 1, Nimman) \u2014 famous rotisserie chicken. Half chicken + sticky rice \u0E3F150. Queue expected, worth it.",
                  ]}
                  cost="\u0E3F1,200\u20132,800 (~$34\u201379) excl. accommodation" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-blue-700 uppercase tracking-wide">Total 4-Day Cost (per person) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">\u0E3F6,000\u2013\u0E3F12,000 (~$170\u2013$340) including accommodation</span>
                </div>
              </div>
            )}

            {/* ── LUXURY PLAN ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDC8E"}</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Luxury Plan &mdash; Four Seasons / Dhara Dhevi Base</p>
                    <p className="text-xs text-purple-600 font-light">Stay: 5-star resort {"\u00B7"} \u0E3F5,000\u2013\u0E3F20,000/night {"\u00B7"} Transport: Hotel car + private tours</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Private Temple Tour, Lanna Immersion, Fine Dining"
                  items={[
                    "Airport: hotel limousine. Check into your resort \u2014 Four Seasons Chiang Mai (rice paddy setting), Dhara Dhevi (Lanna palace recreation), or Anantara.",
                    "2pm: Private guided temple tour with art historian \u2014 \u0E3F3,000\u20135,000/person. Deep dive into Lanna architecture, symbolism, and Buddhist art across 5\u20137 temples.",
                    "Hidden gems your guide will show: Wat Umong (underground tunnel temple), Wat Lok Molee (lantern-draped and usually empty).",
                    "5pm: Traditional Lanna Khantoke dinner experience at Old Chiang Mai Cultural Centre \u2014 \u0E3F1,200/person. Traditional dance performance + Northern Thai feast.",
                    "Or dinner at David\u2019s Kitchen \u2014 French-Thai fine dining. Tasting menu from \u0E3F2,500. Chiang Mai\u2019s most acclaimed restaurant.",
                  ]}
                  cost="\u0E3F5,000\u201310,000 (~$140\u2013$280) excl. accommodation" />
                <DayCard day="Day 2" title="Doi Suthep Private Tour, Royal Project, Spa"
                  items={[
                    "7am: Private car to Doi Suthep before crowds. Your guide explains the Naga legend as you climb the 306 steps.",
                    "9am: Continue to Doi Pui Hmong village \u2014 private tour of the hill tribe community with cultural context your guide provides.",
                    "10:30am: Royal Project at Doi Suthep \u2014 the King\u2019s agricultural programme. Beautiful gardens, organic produce, incredible views.",
                    "12pm: Lunch at Meena Rice Based Cuisine \u2014 organic Northern Thai in a teak house surrounded by rice paddies. Mains \u0E3F200\u2013400.",
                    "2pm: Full afternoon spa at your resort. Four Seasons Lanna Spa treatments from \u0E3F4,500. Dhara Dhevi\u2019s colonial spa complex is otherworldly.",
                    "7pm: Private dinner at Blackitch Artisan Kitchen \u2014 10-seat chef\u2019s counter, seasonal tasting menu \u0E3F2,800. Book 2 weeks ahead.",
                  ]}
                  cost="\u0E3F8,000\u201315,000 (~$225\u2013$420) excl. accommodation" />
                <DayCard day="Day 3" title="Exclusive Elephant Experience, Cooking Masterclass"
                  items={[
                    "Full day: Patara Elephant Farm \u2014 \u0E3F5,800/person. The most exclusive elephant experience in Chiang Mai. One elephant assigned per visitor. You become the elephant\u2019s caretaker for the day.",
                    "Activities: health check the elephant, prepare food, walk through the jungle, river bathing. No riding. Full veterinary education component.",
                    "Gourmet lunch included in jungle setting.",
                    "3pm: Private cooking masterclass with a chef \u2014 \u0E3F3,000\u20135,000/person at Dhara Dhevi Cooking Academy or Pantawan VIP class. Market tour in a tuk-tuk, 6\u20137 dishes, wine pairing.",
                    "You eat everything you cook. The recipes alone are worth the price.",
                  ]}
                  cost="\u0E3F8,800\u201310,800 (~$248\u2013$304) all-inclusive" />
                <DayCard day="Day 4" title="Day Trip, Artisan Experience, Farewell Feast"
                  items={[
                    "OPTION A \u2014 Doi Inthanon (Thailand\u2019s highest peak): Private tour \u0E3F4,000\u20136,000/person. Twin pagodas, Karen hill tribe village, cloud forest trail. Stunning in cool season.",
                    "OPTION B \u2014 White Temple private day trip: Chiang Rai in a luxury van with guide. \u0E3F5,000\u20138,000/person all-inclusive.",
                    "If staying local: Baan Tawai handicraft village (master wood carvers), then private silk-weaving workshop at a local artisan\u2019s home.",
                    "3pm: Traditional Thai massage at Oasis Spa Lanna \u2014 2-hour signature treatment \u0E3F2,500. Beautiful Lanna garden setting.",
                    "Farewell dinner: The Dining Room at 137 Pillars House \u2014 colonial Chiang Mai fine dining. Tasting menu from \u0E3F3,500. The building alone is worth visiting.",
                  ]}
                  cost="\u0E3F6,000\u201312,000 (~$170\u2013$340) excl. accommodation" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 4-Day Cost (per person) {"\u00B7"} </span>
                  <span className="font-serif text-base text-ink font-light">\u0E3F20,000+ (~$565+) including accommodation</span>
                </div>
              </div>
            )}
          </section>

          {/* ── INLINE CTA ── */}
          <InlineCTA destination="Chiang Mai" onPlanTrip={() => setModalOpen(true)} />

          {/* ── GALLERY ── */}
          <DestinationGallery
            title="Chiang Mai &mdash; Must-See Places"
            subtitle="Click each thumbnail to explore Chiang Mai&apos;s most iconic temples, mountains and cultural experiences."
            spots={[
              { name: "Doi Suthep",          query: "doi suthep chiang mai golden chedi temple mountain stairs",          desc: "The golden temple on the mountain. 306 steps up the Naga staircase for panoramic city views. Best visited before 9am." },
              { name: "Old City Temples",     query: "chiang mai old city wat chedi luang ancient brick temple",           desc: "Over 30 temples within the moat walls. Wat Chedi Luang, Wat Phra Singh, and Wat Chiang Man are the essential three." },
              { name: "Sunday Night Market",  query: "chiang mai sunday walking street night market lanterns crafts",      desc: "A full kilometre of food stalls, handmade crafts, and live music every Sunday on Ratchadamnoen Road." },
              { name: "Elephant Sanctuary",   query: "thailand elephant sanctuary jungle river bathing ethical nature",     desc: "Ethical sanctuaries where elephants roam freely. Feed, bathe, and walk with them \u2014 no riding, no chains." },
              { name: "Sticky Waterfall",     query: "bua tong sticky waterfall chiang mai limestone cascade jungle",      desc: "A limestone waterfall you can walk up barefoot. The mineral surface is naturally adhesive. Truly unique experience." },
            ]}
          />

          {/* ── MID-ARTICLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="chiang mai sunday night market lanterns street food stalls overhead"
              alt="Chiang Mai Sunday Night Market with lanterns and street food"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Sunday Night Market food crawl stretches a full mile. Khao soi \u0E3F40, sai ua (Northern sausage) \u0E3F30, mango sticky rice \u0E3F40. Pace yourself.
              </p>
            </div>
          </div>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Chiang Mai"
            hotels={[
              { name: "Stamps Hostel", type: "Budget Hostel \u00B7 Old City", price: "From \u0E3F250/night (~$7)", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/th/stamps-hostel.html?aid=2820480" },
              { name: "Ping Nakara", type: "Boutique Heritage \u00B7 Old City", price: "From \u0E3F2,500/night (~$70)", rating: "5", badge: "Mid-range pick", url: "https://www.booking.com/hotel/th/ping-nakara.html?aid=2820480" },
              { name: "Four Seasons Chiang Mai", type: "Luxury Resort \u00B7 Mae Rim", price: "From \u0E3F12,000/night (~$340)", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/th/four-seasons-resort-chiang-mai.html?aid=2820480" },
            ]}
            activities={[
              { name: "Ethical Elephant Sanctuary Half Day", duration: "Half day", price: "From \u0E3F1,500/person (~$42)", badge: "Must do", url: "https://www.getyourguide.com/s/?q=chiang-mai&partner_id=PSZA5UI" },
              { name: "Thai Cooking Class with Market Tour", duration: "Half day", price: "From \u0E3F800/person (~$23)", badge: "Popular", url: "https://www.getyourguide.com/s/?q=chiang-mai&partner_id=PSZA5UI" },
              { name: "Doi Suthep & Doi Pui Temple Tour", duration: "Half day", price: "From \u0E3F500/person (~$14)", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=chiang-mai&partner_id=PSZA5UI" },
              { name: "White Temple Chiang Rai Day Trip", duration: "Full day", price: "From \u0E3F800/person (~$23)", url: "https://www.getyourguide.com/s/?q=chiang-mai&partner_id=PSZA5UI" },
            ]}
            pdfProductId="chiang-mai-4-days-pdf"
          />

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment">
                    <th className="text-left p-3.5 text-xs font-medium text-muted">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-700 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-700 text-center">{"\u2728"} Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-700 text-center">{"\uD83D\uDC8E"} Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (4N)", "\u0E3F800\u20132,400",   "\u0E3F3,200\u20138,000",   "\u0E3F20,000\u201380,000"],
                    ["\uD83C\uDF5C Food & Drinks",       "\u0E3F600\u20131,200",   "\u0E3F2,000\u20134,000",   "\u0E3F8,000\u201320,000"],
                    ["\uD83D\uDE8C Transport",            "\u0E3F300\u2013600",     "\u0E3F800\u20131,600",     "\u0E3F3,000\u20138,000"],
                    ["\uD83C\uDFAF Tours & Activities",   "\u0E3F2,500\u20134,500", "\u0E3F5,000\u201310,000",  "\u0E3F20,000\u201340,000"],
                    ["\uD83D\uDED2 Shopping & Extras",    "\u0E3F0\u2013500",       "\u0E3F1,000\u20133,000",   "\u0E3F3,000\u201310,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 4 days)</td>
                    {["\u0E3F2,400\u20134,800 (~$68\u2013135)", "\u0E3F6,000\u201312,000 (~$170\u2013340)", "\u0E3F20,000+ (~$565+)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices Thai Baht (\u0E3F) 2026. USD conversions approximate at \u0E3F35.5 = $1. International/domestic flights not included. Chiang Mai is one of the cheapest destinations in Southeast Asia.
            </p>
          </section>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting in March\u2013April (burning season)", desc: "Farmers burn crop residue and the air quality becomes hazardous. AQI regularly exceeds 200. Visibility drops, temples disappear in haze. Avoid these months completely if possible.", icon: "\uD83D\uDCA8" },
                { title: "Riding elephants", desc: "Elephant riding causes spinal damage to the animals. Ethical sanctuaries offer feeding, bathing, and walking WITH elephants \u2014 the experience is genuinely better and doesn\u2019t cause harm. Ask if they use chains or bullhooks.", icon: "\uD83D\uDC18" },
                { title: "Only eating on Nimman Road", desc: "Nimman has great cafes but tourist-priced food. Walk 10 minutes to the local markets near Chiang Mai University for khao soi at \u0E3F40 instead of \u0E3F150. Chang Phuak Gate night stalls are legendary.", icon: "\uD83C\uDF5C" },
                { title: "Taking tuk-tuks without negotiating", desc: "Chiang Mai tuk-tuks and red trucks are not metered. Agree on the price BEFORE getting in. Short rides within Old City should be \u0E3F40\u201360/person. Use Grab for fixed prices.", icon: "\uD83D\uDE95" },
                { title: "Visiting Doi Suthep after 10am", desc: "Tour buses arrive at 10am and the temple gets crowded. Go at 7:30\u20138am for peaceful photos and monk chanting. The morning light through the golden chedi is spectacular.", icon: "\u26EA" },
                { title: "Missing the Sunday Walking Street", desc: "Plan your trip to include a Sunday if at all possible. The Sunday Night Market on Ratchadamnoen Road is the best market experience in Thailand \u2014 better than any Bangkok market.", icon: "\uD83C\uDF1F" },
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
                { icon: "\uD83C\uDF5C", title: "Khao Soi Is Life", desc: "Chiang Mai\u2019s signature dish: coconut curry noodles with crispy noodle topping. Best bowls: Khao Soi Khun Yai (\u0E3F50), Khao Soi Mae Sai (\u0E3F45), Khao Soi Lam Duan (\u0E3F55). Try all three \u2014 you\u2019ll have a favourite.", color: "bg-amber-50 border-amber-200" },
                { icon: "\u2615", title: "Cafe Capital of Thailand", desc: "Chiang Mai has more specialty coffee shops per square km than Bangkok. Akha Ama (hill tribe coffee), Ristr8to (latte art champion), and Graph Cafe are essential stops.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDEB2", title: "Rent a Bicycle in Old City", desc: "The Old City (inside the moat) is perfectly flat and everything is within 1km. Bicycle rental \u0E3F50\u201380/day. Better than Grab for short hops and you can stop anywhere.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDCF1", title: "Grab Works Perfectly Here", desc: "Unlike Phuket, Grab works really well in Chiang Mai. Fixed prices, no negotiating, AC. Use for anything outside the Old City. Songthaews (red trucks) for ultra-budget.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDFB6", title: "Zoe in Yellow for Nightlife", desc: "The intersection around Zoe in Yellow bar on the east side of Old City is Chiang Mai\u2019s nightlife hub. Open-air bars, live music, backpacker crowd. Not wild like Bangkok \u2014 more chill and friendly.", color: "bg-blue-50 border-blue-200" },
                { icon: "\uD83E\uDDE5", title: "Bring Layers for Cool Season", desc: "November\u2013February nights can drop to 12\u201318\u00B0C, especially at Doi Suthep and Doi Inthanon. Bring a jacket. Most tourists pack only for tropical heat and freeze at temples.", color: "bg-blue-50 border-blue-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA (dark) ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/55 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Chiang Mai itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Chiang Mai Trip {"\u2192"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"\u2192"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Chiang Mai?", a: "4 days is ideal for Old City temples, Doi Suthep, elephant sanctuary, cooking class, and markets. 3 days works if you skip a day trip. 5\u20137 days lets you add Doi Inthanon, Pai, or a multi-day trek." },
                { q: "What is the best time to visit Chiang Mai?", a: "November\u2013February: cool season (15\u201328\u00B0C), clear skies, perfect weather. March\u2013April: AVOID \u2014 burning season, hazardous air quality. May\u2013October: rainy season with lush greenery and lower prices." },
                { q: "How much does a 4-day Chiang Mai trip cost?", a: "Budget: \u0E3F2,400\u20134,800 ($68\u2013135) total. Mid-range: \u0E3F6,000\u201312,000 ($170\u2013340). Luxury: \u0E3F20,000+ ($565+). All include accommodation, food, transport and activities. One of the cheapest destinations in Southeast Asia." },
                { q: "Do I need a visa for Chiang Mai?", a: "Indian passports: eVisa (online, 60 days), VOA at CNX (\u0E3F2,000, 15 days), or Tourist Visa from embassy (60 days). Most Western passports: 30\u201360 days visa-free. If flying from Bangkok, no additional visa needed." },
                { q: "Are elephant sanctuaries ethical?", a: "Not all. Avoid any offering rides, using chains, or bullhooks. Ethical ones let you feed, bathe, and walk with elephants freely. Elephant Nature Park is the gold standard. The experience is genuinely better and doesn\u2019t cause harm." },
                { q: "What is the best area to stay?", a: "Old City (inside the moat): walkable, temple access, best for first-timers. Nimman Road: cafes, boutiques, modern vibe. Riverside: quiet, boutique. Old City is our recommendation for 4 days." },
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
                { label: "Bangkok \u2014 4 Day Temple & Food Guide", href: "/blog/bangkok-4-days", soon: false },
                { label: "Phuket \u2014 5 Day Island Guide", href: "/blog/phuket-5-days", soon: false },
                { label: "Browse All Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View {"\u2192"}</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="chiang-mai-4-days" />
          <RelatedGuides currentSlug="chiang-mai-4-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
