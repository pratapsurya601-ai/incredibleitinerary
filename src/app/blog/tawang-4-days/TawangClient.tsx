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


const TAWANG_TOC = [
  { id: "decision",    emoji: "\u26A1", label: "Which Plan Are You?" },
  { id: "getting",     emoji: "\uD83D\uDE97", label: "Getting There" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Tawang 4-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Tawang in 4 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function TawangClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under \u20B912k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83C\uDFD4", label: "Comfortable", sub: "\u20B912k\u201325k", color: "border-sky-300 bg-sky-50 text-sky-800" },
    { id: "C" as const, emoji: "\uD83D\uDC51", label: "Premium", sub: "\u20B925k\u201340k", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TAWANG_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Tawang" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="tawang monastery arunachal pradesh mountains snow india"
            fallback="https://images.unsplash.com/photo-1609766857041-2924cf3a8ede?w=1600&q=85"
            alt="Tawang Monastery perched on a hillside with snow-capped Himalayan peaks"
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
              <span className="text-white/70">Tawang 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Mountain &amp; Monastery
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/30">&middot;</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/30">&middot;</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Tawang in 4 Days: The Complete Guide
                <em className="italic text-gold-light"> (Budget to Premium, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 plans with Tawang Monastery, Sela Pass at 13,700 feet, Madhuri Lake, the India-China border at Bumla, and the things most guides don&apos;t tell you.
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
              <span>\uD83C\uDDEE\uD83C\uDDF3 India</span>
              <span>&middot;</span>
              <span>\uD83D\uDDD3 4 Days</span>
              <span>&middot;</span>
              <span>\uD83D\uDCB0 From \u20B910,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Tawang Monastery is India&apos;s largest Buddhist monastery and the drive to reach it &mdash; through Sela Pass at 13,700 feet with prayer flags snapping in frozen wind &mdash; is itself worth the entire trip. This guide covers everything from permits to the China border at Bumla.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\u26A1 Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your budget &mdash; jump straight to your itinerary.</p>
            <div className="grid grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} &rarr;</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── ILP PERMIT WARNING ── */}
          <div className="mb-10 bg-amber-50 border border-amber-300 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">\u26A0\uFE0F</span>
              <div>
                <p className="font-medium text-sm text-amber-900 mb-1">Inner Line Permit &mdash; Apply Before You Leave</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">
                  The Inner Line Permit for Arunachal Pradesh takes 2 days to process &mdash; apply online before you leave. Don&apos;t show up without it. Indian citizens apply at arunachalilp.com. Foreign nationals need a Protected Area Permit (PAP) which takes longer &mdash; apply through a registered tour operator at least 4 weeks in advance.
                </p>
              </div>
            </div>
          </div>

          {/* ── GETTING THERE ── */}
          <section id="getting" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">\uD83D\uDE97 Getting to Tawang</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              There&apos;s no airport or railway at Tawang. Every route is a mountain drive &mdash; and that&apos;s part of the point.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Guwahati \u2192 Tawang (2 days)", emoji: "\uD83D\uDE99", bg: "bg-sky-50 border-sky-200", th: "text-sky-800",
                  rows: [["Distance","450km, 12\u201314 hours total"],["Break At","Dirang or Bomdila overnight"],["Shared Sumo","\u20B9800\u2013\u20B91,200 per person (Tezpur\u2013Tawang)"],["Private SUV","\u20B98,000\u2013\u20B912,000 one way from Guwahati"]],
                  note: "Never attempt the full drive in one day. The road after Bomdila gets treacherous at night and Sela Pass in darkness is dangerous. Break at Dirang \u2014 it deserves a stop anyway." },
                { title: "Tezpur \u2192 Tawang (Shorter)", emoji: "\uD83D\uDE9A", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Distance","320km, 10\u201312 hours"],["Route","Tezpur \u2192 Bomdila \u2192 Dirang \u2192 Sela Pass \u2192 Tawang"],["Shared Sumo","\u20B9800\u2013\u20B91,200 from Tezpur"],["Best Tip","Fly Guwahati, cab to Tezpur (4hrs), saves half a day"]],
                  note: "Tezpur is the last proper town before the mountains. Stock up on cash (no reliable ATMs after Bomdila), medicines, and snacks here." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/60 w-20 flex-shrink-0">{k}</span>
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
            <StatCard icon="\uD83D\uDDD3" label="Duration" value="4 Days" />
            <StatCard icon="\uD83D\uDCB0" label="Budget From" value="\u20B910,000" />
            <StatCard icon="\uD83C\uDF21" label="Best Months" value="Mar\u2013Jun, Sep\u2013Oct" />
            <StatCard icon="\u2708\uFE0F" label="Nearest Airport" value="Guwahati (GAU)" />
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
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; Under \u20B912,000</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Guesthouses / homestays &middot; \u20B9500\u2013\u20B91,200/night &middot; Shared Sumos for transport</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Guwahati/Tezpur \u2192 Dirang (Overnight Halt)"
                  items={[
                    "Start early from Tezpur (or take a dawn flight from Guwahati + cab to Tezpur). Shared Sumo from Tezpur bus stand \u20B9600\u2013\u20B9800.",
                    "Route passes through lush Assam plains into the foothills \u2014 landscape shifts dramatically after Bhalukpong checkpoint (ILP verified here).",
                    "Lunch at Bomdila \u2014 small market town at 8,500ft. Try thukpa and momos at any local eatery for \u20B980\u2013\u20B9150.",
                    "Quick stop at Bomdila Monastery \u2014 colourful Tibetan-style gompa with valley views. Free entry, 20 minutes.",
                    "Reach Dirang by 4\u20135pm. Check into a homestay (\u20B9500\u2013\u20B9800/night). Dirang is warmer than Tawang and a good acclimatisation stop.",
                    "Evening walk along Dirang Chu river. Hot stone bath at Dirang Dzong area if available (\u20B9200\u2013\u20B9300).",
                    "Dinner at homestay or local dhaba \u2014 dal-rice-sabzi with local herbs. \u20B9100\u2013\u20B9180."
                  ]}
                  cost="\u20B91,200\u2013\u20B91,800 excluding accommodation" />
                <DayCard day="Day 2" title="Dirang \u2192 Sela Pass \u2192 Tawang"
                  items={[
                    "Leave Dirang by 6am. The 100km to Tawang takes 5\u20136 hours with stops. Shared Sumo \u20B9300\u2013\u20B9500.",
                    "Sela Pass (13,700ft) \u2014 the gateway to Tawang. Stop for photos at Sela Lake. Prayer flags everywhere, snow-capped peaks, frozen wind. Free.",
                    "The drive through Sela Pass with prayer flags snapping in frozen wind is itself worth the entire trip. Carry warm layers even in April.",
                    "Tea and Maggi at Sela Pass dhaba \u2014 the most satisfying \u20B950 meal you\u2019ll ever eat at 13,700 feet.",
                    "Stop at Jaswant Garh war memorial \u2014 tribute to Jaswant Singh Rawat of the 1962 war. Maintained by the Indian Army. Free, 15 min.",
                    "Reach Tawang by 1\u20132pm. Check into guesthouse near the main market (\u20B9600\u2013\u20B91,000/night).",
                    "4pm: Walk to Tawang Monastery (Galden Namgey Lhatse) \u2014 India\u2019s largest Buddhist monastery, founded in the 17th century. Entry \u20B950. Allow 2 hours.",
                    "Evening: Explore old market area. Dinner at a local Monpa restaurant \u2014 zan (barley porridge) and yak butter tea. \u20B9100\u2013\u20B9200."
                  ]}
                  cost="\u20B91,000\u2013\u20B91,600 excluding accommodation" />
                <DayCard day="Day 3" title="Madhuri Lake + PTSO Lake + War Memorial + Nuranang Falls"
                  items={[
                    "7am: Hire a shared cab for the day circuit \u2014 Madhuri Lake, PTSO Lake, War Memorial (\u20B9500\u2013\u20B9800 per person shared).",
                    "Madhuri Lake (Sangetsar Tso) \u2014 named after a Bollywood film shot here, and the marketing worked. It\u2019s genuinely one of the most beautiful high-altitude lakes in India. \u20B950 entry.",
                    "The lake sits at 12,000ft surrounded by snow peaks and dead tree stumps rising from turquoise water. 45 minutes to walk around.",
                    "PTSO Lake \u2014 smaller, quieter, and often frozen in early season. Prayer flags and yak sightings common. Free entry.",
                    "1pm: Tawang War Memorial \u2014 honouring soldiers of the 1962 Sino-Indian war. Light and sound show in the evening (6pm, free). Daytime visit is sobering and well-maintained.",
                    "3pm: Nuranang Falls (Jang Falls) \u2014 100m waterfall near Jang, 30km from Tawang. \u20B920 entry. The mist soaks you \u2014 carry a rain jacket.",
                    "Return to Tawang by 5pm. Evening at the monastery for sunset prayers if timing works out.",
                    "Dinner: Thukpa and steamed momos at Dragon Restaurant near the market. \u20B9120\u2013\u20B9200."
                  ]}
                  cost="\u20B91,200\u2013\u20B91,800 excluding accommodation" />
                <DayCard day="Day 4" title="Bumla Pass (Optional) + Return to Dirang/Bomdila"
                  items={[
                    "Option A \u2014 Bumla Pass: Get the military permit through your guesthouse the day before (\u20B9200\u2013\u20B9300 processing). Shared jeep \u20B9600\u2013\u20B9900 per head.",
                    "Bumla Pass (15,200ft) is the actual India-China border. You can see Chinese observation towers and bunkers from the Indian side. Surreal experience.",
                    "Standing at Bumla looking at Chinese observation towers is surreal. Photos allowed on the Indian side only. Army personnel are welcoming and share stories.",
                    "Option B \u2014 If Bumla is closed or permits unavailable, revisit the monastery for morning prayers and explore Urgelling Monastery (birthplace of the 6th Dalai Lama). Free.",
                    "12pm: Begin the return drive to Dirang or Bomdila (\u20B9300\u2013\u20B9500 shared Sumo). One last stop at Sela Pass.",
                    "Reach Dirang/Bomdila by 6pm. Overnight here before continuing to Guwahati/Tezpur next morning.",
                    "Pack snacks for the drive \u2014 food options between Tawang and Bomdila are limited to army canteens and roadside Maggi stalls."
                  ]}
                  cost="\u20B91,500\u2013\u20B92,200 excluding accommodation" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 4-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u20B910,000\u2013\u20B912,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: COMFORTABLE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-sky-50 border border-sky-200 rounded-xl mb-6">
                  <span className="text-2xl">\uD83C\uDFD4</span>
                  <div>
                    <p className="text-sm font-medium text-sky-800">Comfortable Plan &mdash; \u20B912,000\u2013\u20B925,000</p>
                    <p className="text-xs text-sky-600 font-light">Stay: Mid-range hotels &middot; \u20B91,500\u2013\u20B93,500/night &middot; Private cab for sightseeing</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Guwahati/Tezpur \u2192 Dirang via Bomdila"
                  items={[
                    "Pre-arranged private cab from Tezpur (\u20B94,000\u2013\u20B95,000 one way to Dirang). Start by 6am for a comfortable pace.",
                    "Bhalukpong checkpoint \u2014 ILP verification. Keep printed copies. 15\u201330 min wait typical.",
                    "Bomdila: Visit the craft centre and Bomdila Monastery. Lunch at a decent restaurant \u2014 \u20B9200\u2013\u20B9350 for thukpa and momos.",
                    "Side stop: Apple orchards between Bomdila and Dirang (September\u2013October) \u2014 buy fresh apples directly from farmers.",
                    "Reach Dirang by 3\u20134pm. Check into Hotel Pemaling or Dirang Boutique Cottages (\u20B91,500\u2013\u20B92,500/night).",
                    "Visit Dirang Dzong (old stone fort) and the hot water springs nearby. The springs are natural and free.",
                    "Dinner at hotel restaurant or Café Dirang \u2014 decent Indian and Monpa cuisine. \u20B9300\u2013\u20B9500."
                  ]}
                  cost="\u20B92,500\u2013\u20B94,000 excluding accommodation" />
                <DayCard day="Day 2" title="Dirang \u2192 Sela Pass \u2192 Tawang Monastery"
                  items={[
                    "6am departure. Private cab continues to Tawang (\u20B93,000\u2013\u20B94,000 Dirang\u2013Tawang). Driver waits at all stops.",
                    "Sela Pass (13,700ft): Extended stop for photos at Sela Lake. Carry thermos of hot tea from the hotel \u2014 your driver will appreciate it too.",
                    "The new Sela Tunnel (if operational) bypasses the pass \u2014 but take the old road for the experience. The tunnel is for bad weather days only.",
                    "Jaswant Garh memorial stop \u2014 the army jawans here tell the story of Jaswant Singh\u2019s single-handed stand in 1962. Moving and well-maintained.",
                    "Reach Tawang by 1pm. Check into Hotel Tawang Heights or Hotel Zambala (\u20B92,000\u2013\u20B93,500/night). Ask for a monastery-view room.",
                    "3pm: Tawang Monastery (Galden Namgey Lhatse) \u2014 explore the main prayer hall, the 8-metre-tall golden Buddha, the library of ancient manuscripts. Entry \u20B950.",
                    "The monastery houses 450+ monks and the evening prayer chanting echoes across the entire valley. Try to be there by 5pm.",
                    "Dinner: Hotel restaurant or Shangrila near the market. Local dishes and Indian standards. \u20B9350\u2013\u20B9600."
                  ]}
                  cost="\u20B92,000\u2013\u20B93,500 excluding accommodation" />
                <DayCard day="Day 3" title="Madhuri Lake + PTSO Lake + War Memorial + Nuranang Falls"
                  items={[
                    "Full day circuit in your private cab. Start 7am to cover everything comfortably.",
                    "Madhuri Lake (Sangetsar Tso, 12,000ft) \u2014 turquoise water, submerged tree stumps, snow peaks behind. Entry \u20B950. Spend 1 hour minimum.",
                    "PTSO Lake \u2014 quieter alternative, often partially frozen. Yak herders graze nearby. Pack a hot breakfast from the hotel.",
                    "11am: Tawang War Memorial \u2014 the most tastefully done war memorial in India. A wall of names, eternal flame, and mountain backdrop. 1 hour.",
                    "Light and sound show at 6pm is excellent if you return in the evening (free, 45 minutes).",
                    "2pm: Nuranang Falls (Jang Falls) \u2014 100-metre cascade near Jang. The steps down are steep but worth it. \u20B920 entry. Carry a rain jacket.",
                    "4pm: Return via Urgelling Monastery \u2014 birthplace of the 6th Dalai Lama. Small, peaceful, and historically significant. Free.",
                    "Evening: Walk the Tawang market strip for local handicrafts \u2014 hand-woven Monpa shawls (\u20B9500\u2013\u20B91,500) and wooden masks."
                  ]}
                  cost="\u20B92,500\u2013\u20B94,000 excluding accommodation" />
                <DayCard day="Day 4" title="Bumla Pass + Return Journey Begins"
                  items={[
                    "6am: Bumla Pass excursion \u2014 permit arranged by hotel the previous day (\u20B9300\u2013\u20B9500). Your private cab drives you up.",
                    "Bumla Pass (15,200ft) \u2014 the India-China border. Army guides walk you through the observation area. Chinese bunkers visible across the valley.",
                    "The road to Bumla passes Y Junction and several high-altitude lakes. Allow 4\u20135 hours for the full round trip.",
                    "Return to Tawang by 11am. Quick monastery visit for morning prayers if missed earlier.",
                    "12pm: Begin return drive to Bomdila/Dirang. Stop at Sela Pass one final time \u2014 the light is different heading south.",
                    "Reach Bomdila or Dirang by 6pm. Overnight before onward journey to Guwahati.",
                    "Dinner at Bomdila or Dirang \u2014 \u20B9300\u2013\u20B9500. Rest well for the 6\u20137 hour Guwahati drive tomorrow."
                  ]}
                  cost="\u20B92,000\u2013\u20B93,500 excluding accommodation" />
                <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-sky-700 uppercase tracking-wide">Total 4-Day Cost (per person) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u20B915,000\u2013\u20B925,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: PREMIUM ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">\uD83D\uDC51</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Premium Plan &mdash; \u20B925,000\u2013\u20B940,000</p>
                    <p className="text-xs text-purple-600 font-light">Stay: Best available hotels &middot; \u20B94,000\u2013\u20B98,000/night &middot; Private SUV + local guide</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Guwahati \u2192 Dirang (Scenic Luxury Route)"
                  items={[
                    "Pre-arranged Mahindra Thar or Toyota Fortuner from Guwahati (\u20B910,000\u2013\u20B912,000 one way with experienced mountain driver).",
                    "Stop at Nameri National Park area near Tezpur for a riverside brunch. Driver carries packed breakfast from Guwahati.",
                    "Bhalukpong: ILP check. Your driver knows the process \u2014 takes 10 minutes with an organised tour operator.",
                    "Bomdila Monastery with a local guide who explains the Mahayana Buddhist traditions. 30\u201345 minutes.",
                    "Reach Dirang by 3pm. Check into Norling Dirang or a heritage homestay (\u20B94,000\u2013\u20B96,000/night).",
                    "Private hot stone bath experience arranged by the hotel \u2014 traditional Monpa healing ritual. \u20B9500\u2013\u20B9800.",
                    "Dinner: Multi-course Monpa meal at the hotel \u2014 yak cheese, local greens, arak (rice wine) tasting. \u20B9800\u2013\u20B91,200."
                  ]}
                  cost="\u20B95,000\u2013\u20B98,000 excluding accommodation" />
                <DayCard day="Day 2" title="Sela Pass + Tawang Monastery + Private Evening Tour"
                  items={[
                    "6am departure with packed breakfast. Driver takes the old road over Sela Pass for the full experience.",
                    "Sela Pass (13,700ft): Extended photography stop. Your guide knows the angles and timing for the best shots of the lake and prayer flags.",
                    "Hot chai at the army canteen near Sela \u2014 the jawans are friendly and share border stories over tea.",
                    "Jaswant Garh \u2014 your guide narrates the full 1962 battle history here. Deeply moving with a knowledgeable local.",
                    "Reach Tawang by 1pm. Check into Hotel Tawang Heights or MTDC Resort (\u20B94,000\u2013\u20B98,000/night).",
                    "3pm: Private guided tour of Tawang Monastery \u2014 the guide takes you to areas regular visitors miss, including the butter sculpture room and manuscript library.",
                    "5pm: Evening prayer ceremony \u2014 sit inside the main hall as 450 monks chant. An unforgettable acoustic experience.",
                    "Dinner: Best restaurant in Tawang \u2014 Shangrila or Dragon with local specialties. \u20B9600\u2013\u20B91,000."
                  ]}
                  cost="\u20B94,000\u2013\u20B96,500 excluding accommodation" />
                <DayCard day="Day 3" title="Bumla Pass + Madhuri Lake + War Memorial"
                  items={[
                    "5:30am departure for Bumla Pass \u2014 permit pre-arranged by hotel. Your SUV handles the high-altitude terrain comfortably.",
                    "Bumla Pass (15,200ft): The actual India-China border. Army guides give a detailed briefing about the border situation.",
                    "Standing there looking at Chinese observation towers is surreal. The army offers chai and biscuits at the post.",
                    "Return via Madhuri Lake (Sangetsar Tso) \u2014 your guide arranges a lakeside packed brunch. Entry \u20B950.",
                    "PTSO Lake stop \u2014 if yak herders are around, your guide can arrange a brief interaction (they speak Monpa).",
                    "2pm: Tawang War Memorial with guided commentary on the 1962 battle of Tawang. The evening light and sound show (6pm) is also recommended.",
                    "4pm: Ani Gompa (nunnery) \u2014 a quieter spiritual experience away from the main monastery. Rarely visited. Free.",
                    "Farewell dinner at the hotel \u2014 request a traditional Monpa thali with all local specialties. \u20B9800\u2013\u20B91,200."
                  ]}
                  cost="\u20B94,500\u2013\u20B97,000 excluding accommodation" />
                <DayCard day="Day 4" title="Nuranang Falls + Return to Bomdila"
                  items={[
                    "8am: Visit Nuranang Falls on the way out of Tawang \u2014 the 100-metre waterfall is best in morning light. \u20B920 entry.",
                    "Stop at the Tawang market for last-minute handicrafts \u2014 hand-woven Monpa textiles and carved wooden masks.",
                    "10am: Depart Tawang. Leisurely drive with photography stops at Sela Pass and Jung Falls viewpoint.",
                    "Lunch at a scenic army canteen or Dirang restaurant. \u20B9400\u2013\u20B9700.",
                    "Optional: Sangti Valley detour near Dirang \u2014 black-necked crane habitat (winter) and beautiful valley walk. 1 hour.",
                    "Reach Bomdila by 5pm. Overnight at a comfortable hotel (\u20B93,000\u2013\u20B95,000/night) before Guwahati the next day.",
                    "Evening: Bomdila sunset from the upper monastery \u2014 the entire Himalayan range lights up in pink. A quiet farewell to Arunachal."
                  ]}
                  cost="\u20B94,000\u2013\u20B96,000 excluding accommodation" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 4-Day Cost (per person) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">\u20B925,000\u2013\u20B940,000 including accommodation</span>
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
                    <th className="p-3.5 text-xs font-medium text-sky-700 text-center">\uD83C\uDFD4 Comfortable</th>
                    <th className="p-3.5 text-xs font-medium text-purple-700 text-center">\uD83D\uDC51 Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (4N)", "\u20B92,000\u2013\u20B94,000", "\u20B96,000\u2013\u20B914,000", "\u20B916,000\u2013\u20B932,000"],
                    ["\uD83C\uDF5D Food & Drinks", "\u20B91,500\u2013\u20B92,500", "\u20B93,000\u2013\u20B95,500", "\u20B95,000\u2013\u20B99,000"],
                    ["\uD83D\uDE97 Transport", "\u20B92,500\u2013\u20B94,000", "\u20B98,000\u2013\u20B912,000", "\u20B914,000\u2013\u20B920,000"],
                    ["\uD83C\uDFAF Activities & Permits", "\u20B9800\u2013\u20B91,500", "\u20B91,500\u2013\u20B93,000", "\u20B93,000\u2013\u20B95,000"],
                    ["\uD83D\uDECD Handicrafts & Souvenirs", "\u20B9500\u2013\u20B91,000", "\u20B91,000\u2013\u20B92,500", "\u20B92,000\u2013\u20B94,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["\u20B910,000\u2013\u20B912,000","\u20B915,000\u2013\u20B925,000","\u20B925,000\u2013\u20B940,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Peak season (Apr\u2013May, Oct) may be 15\u201325% higher for accommodation. Flights to Guwahati not included.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Tawang"
            hotels={[
              { name: "Dirang Boutique Cottages", type: "Budget Homestay \u00B7 Dirang", price: "From \u20B9800/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/dirang-boutique-cottages.html?aid=2820480" },
              { name: "Hotel Tawang Heights", type: "Mid-range \u00B7 Tawang Centre", price: "From \u20B92,500/night", rating: "4", badge: "Mid-range pick", url: "https://www.booking.com/hotel/in/tawang-heights.html?aid=2820480" },
              { name: "Norling Dirang", type: "Premium Resort \u00B7 Dirang Valley", price: "From \u20B95,000/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/in/norling-dirang.html?aid=2820480" },
            ]}
            activities={[
              { name: "Tawang Monastery Guided Tour", duration: "3 hours", price: "From \u20B9500/person", badge: "Must do", url: "https://www.getyourguide.com/tawang-l32337/?partner_id=PSZA5UI" },
              { name: "Bumla Pass Border Excursion", duration: "5 hours", price: "From \u20B91,000/person", badge: "Unique", url: "https://www.getyourguide.com/tawang-l32337/?partner_id=PSZA5UI" },
              { name: "Madhuri Lake & PTSO Lake Circuit", duration: "4 hours", price: "From \u20B9800/person", url: "https://www.getyourguide.com/tawang-l32337/?partner_id=PSZA5UI" },
              { name: "Sela Pass Photography Tour", duration: "Full day", price: "From \u20B92,000/person", url: "https://www.getyourguide.com/tawang-l32337/?partner_id=PSZA5UI" },
            ]}
            pdfProductId="tawang-4-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Tawang \u2014 Must-See Places"
            subtitle="Click each thumbnail to explore the jewel of Arunachal Pradesh."
            spots={[
              { name: "Tawang Monastery",         query: "tawang monastery galden namgey lhatse buddhist prayer hall arunachal pradesh",     desc: "India\u2019s largest Buddhist monastery at 10,000ft. The 17th-century gompa houses 450 monks, an 8-metre golden Buddha, and a library of priceless manuscripts." },
              { name: "Sela Pass",                query: "sela pass 13700 feet prayer flags snow mountains frozen lake arunachal",           desc: "The gateway to Tawang at 13,700ft. Sela Lake reflects snow peaks and prayer flags. The drive across the pass is one of the most dramatic mountain roads in India." },
              { name: "Madhuri Lake",             query: "madhuri lake sangetsar tso turquoise water dead trees snow mountains tawang",      desc: "A turquoise high-altitude lake at 12,000ft with submerged tree stumps and snow-capped peaks. Named after a Bollywood film, but the beauty is all natural." },
              { name: "Tawang War Memorial",      query: "tawang war memorial 1962 sino indian war arunachal pradesh mountains eternal flame", desc: "The most moving war memorial in India. A wall of 2,420 names, an eternal flame, and the Himalayan range as backdrop. The evening light and sound show is not to be missed." },
              { name: "Nuranang Falls",           query: "nuranang falls jang falls waterfall cascade mist rocks arunachal pradesh",          desc: "A 100-metre waterfall near Jang that crashes into a rocky pool below. The mist drenches everything within 50 metres \u2014 carry a rain jacket and keep your camera dry." },
            ]}
          />

          {/* ── SELA PASS IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="sela pass prayer flags frozen lake snow mountains high altitude road arunachal pradesh"
              fallback="https://images.unsplash.com/photo-1609766857041-2924cf3a8ede?w=900&q=80"
              alt="Sela Pass at 13,700 feet with prayer flags and frozen lake"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Sela Pass at 13,700 feet &mdash; the prayer flags snap in frozen wind and the lake below mirrors the snow peaks. This is the gateway to Tawang.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\u274C Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Showing up without an Inner Line Permit", desc: "The ILP for Arunachal Pradesh takes 2 days to process online. You will be turned back at Bhalukpong checkpoint without it. Apply at arunachalilp.com before you leave home.", icon: "\uD83D\uDCDD" },
                { title: "Driving Guwahati to Tawang in one day", desc: "It\u2019s 450km of mountain roads. Attempting this in a single stretch is exhausting and dangerous, especially after Bomdila. Break the journey at Dirang \u2014 it\u2019s a beautiful town that deserves at least an evening.", icon: "\uD83D\uDE97" },
                { title: "Not carrying cash", desc: "There are no reliable ATMs after Bomdila. The Tawang ATM works intermittently. Carry enough cash for your entire stay \u2014 \u20B95,000\u2013\u20B910,000 minimum beyond what you\u2019ve pre-paid.", icon: "\uD83D\uDCB3" },
                { title: "Underestimating altitude sickness", desc: "Sela Pass is 13,700ft and Bumla is 15,200ft. Drink plenty of water, avoid alcohol on the first two days, and carry Diamox if you\u2019re prone to altitude issues. Acclimatise in Dirang (5,500ft) before climbing higher.", icon: "\uD83C\uDFD4" },
                { title: "Visiting in monsoon (Jul\u2013Aug)", desc: "Roads become impassable. Landslides block the Bomdila\u2013Tawang stretch regularly. Sela Pass can close for days. Even locals avoid this period.", icon: "\uD83C\uDF27\uFE0F" },
                { title: "Skipping the War Memorial light and sound show", desc: "Most tourists visit the memorial during the day and leave. The 6pm light and sound show is free, deeply moving, and the mountain backdrop at dusk makes it unforgettable.", icon: "\uD83C\uDF05" },
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
                { icon: "\uD83D\uDCF1", title: "Mobile & Internet", desc: "Only BSNL and Airtel (postpaid) work in Tawang, and even those are patchy. Jio and Vi have zero coverage. Download offline maps and tell people you\u2019ll be unreachable for 4 days. It\u2019s liberating.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83E\uDDE5", title: "Packing for Altitude", desc: "Even in April\u2013May, Sela Pass drops below freezing. Pack thermals, a windproof jacket, gloves, and a beanie. Tawang itself is pleasant during the day (15\u201320\u00B0C) but cold at night (2\u20138\u00B0C).", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF75", title: "Try the Local Food", desc: "Monpa cuisine is underrated. Try zan (roasted barley flour), thukpa, gyapa khazi (Monpa cheese pancakes), and butter tea. The yak cheese at Tawang market is excellent and travels well as a souvenir.", color: "bg-sky-50 border-sky-200" },
                { icon: "\uD83D\uDCF8", title: "Photography Permits", desc: "No special permit for photography at most places. But at Bumla Pass, photos are allowed only on the Indian side. At the monastery, ask permission before photographing monks during prayers. No drones anywhere in Arunachal.", color: "bg-sky-50 border-sky-200" },
                { icon: "\u26FD", title: "Fuel Up at Tezpur", desc: "The last reliable petrol station is at Tezpur (before the mountains) and Bomdila (intermittently). If driving your own vehicle, fill up completely at Tezpur and carry a spare can. Tawang has one pump that sometimes runs out.", color: "bg-purple-50 border-purple-200" },
                { icon: "\uD83D\uDCC6", title: "Best Time Month by Month", desc: "Mar \u2705 roads open, cold | Apr \u2705 best overall | May \u2705 rhododendrons bloom | Jun \u26A0\uFE0F pre-monsoon | Jul\u2013Aug \uD83C\uDF27\uFE0F avoid | Sep \u2705 post-monsoon clarity | Oct \u2705 snow-dusted peaks | Nov\u2013Feb \u26A0\uFE0F roads may close", color: "bg-purple-50 border-purple-200" },
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
              Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Tawang itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Tawang Trip &rarr;
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip &rarr;</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">\u2753 Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Tawang?", a: "4 days is the sweet spot covering Tawang Monastery, Sela Pass, Madhuri Lake, the War Memorial, and Bumla Pass. 3 days works if you skip Bumla. 5\u20136 days allows adding Dirang sightseeing, Sangti Valley, and PTSO Lake at a relaxed pace." },
                { q: "What is the best time to visit Tawang?", a: "March to June and September to October. April\u2013May has the best weather with clear skies and blooming rhododendrons. October offers post-monsoon clarity with snow-dusted peaks. Avoid July\u2013August (landslides) and December\u2013February (roads may close due to heavy snowfall at Sela Pass)." },
                { q: "Do I need an Inner Line Permit?", a: "Yes, mandatory for all Indian citizens. Apply online at arunachalilp.com at least 2 days before travel. You need passport-size photos and an ID proof. Foreign nationals need a Protected Area Permit (PAP) through a registered tour operator \u2014 apply at least 4 weeks in advance." },
                { q: "Is Bumla Pass safe to visit?", a: "Yes, Bumla Pass is an official tourist spot with Indian Army supervision. You need a separate military permit obtained through your hotel or tour operator in Tawang. The army guides you through the observation area. Open April to October, weather permitting. The drive is on maintained military roads." },
                { q: "How do I reach Tawang from Guwahati?", a: "Drive via Tezpur and Bomdila \u2014 450km, 12\u201314 hours. Break the journey overnight at Dirang or Bomdila. Shared Sumos run from Tezpur (\u20B9800\u2013\u20B91,200). Private SUV from Guwahati costs \u20B98,000\u2013\u20B912,000 one way. No railway or airport at Tawang." },
                { q: "Is there mobile network in Tawang?", a: "Only BSNL and Airtel postpaid have intermittent coverage. Jio, Vi, and prepaid SIMs do not work. Wi-Fi is available at some hotels but slow. Download offline maps, inform family about limited connectivity, and enjoy being off the grid." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Northeast India Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Meghalaya \u2014 5 Day Guide", href: "/blog/meghalaya-5-days", soon: false },
                { label: "Sikkim \u2014 6 Day Guide", href: "/blog/sikkim-6-days", soon: false },
                { label: "Darjeeling \u2014 4 Day Guide", href: "/blog/darjeeling-4-days", soon: false },
                { label: "Browse All India Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon \u2192" : "View \u2192"}</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="tawang-4-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
