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
import { usePageUrl } from "@/lib/hooks";

const KODAI_TOC = [
  { id: "decision",    emoji: "⚡",  label: "Should You Go?" },
  { id: "highlights",  emoji: "🏔️", label: "Kodai Highlights" },
  { id: "itinerary",   emoji: "📅", label: "2-Day Itinerary" },
  { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
  { id: "honest",      emoji: "🔍", label: "What's Overhyped" },
  { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "💡", label: "Pro Tips" },
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
  const pageUrl = usePageUrl();
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Kodaikanal 2-Day Guide&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Kodaikanal 2-Day Guide&url=${pageUrl}` },
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
          <p className="font-medium text-sm text-stone-900 mb-1">{title}</p>
          <p className="text-xs text-gray-700 font-light leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function KodaikanalClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KODAI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Kodaikanal" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="kodaikanal lake misty hills tamil nadu india morning"
            alt="Kodaikanal lake surrounded by misty green hills Tamil Nadu"
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
              <span className="text-white/70">Kodaikanal 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  South India
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">9 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Kodaikanal 2 Days: The Honest Guide
                <em className="italic text-gold-light"> (Lake, Pillar Rocks &amp; What to Skip)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Kodai Lake, Pillar Rocks, Coaker&apos;s Walk, homemade chocolate — with honest notes on what&apos;s genuinely worth your time and what is purely tourist fog.
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
              <span>{"\uD83D\uDCB0"} From ₹2,500/day</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Kodaikanal at 6am when mist rolls across the lake and you can&apos;t see the far shore — that is what all the brochure photos are trying to capture. Everything else, including Dolphin&apos;s Nose and the famous PT Road chocolates, requires honest expectations. This guide gives you both.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Should You Go?</h2>
            <p className="text-sm text-muted font-light mb-6">Kodai is not for everyone. Here is who will love it and who may leave disappointed.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Go if you want…",
                  emoji: "✅",
                  bg: "bg-teal-50 border-teal-200",
                  th: "text-teal-800",
                  items: [
                    "Mist, pine trees, and cool air (12–20°C)",
                    "A quiet Tamil Nadu hill station, not a theme park",
                    "Cycling around a star-shaped lake",
                    "Long walks without crowds (Coaker's Walk, Bear Shola)",
                    "Budget travel — significantly cheaper than Ooty",
                  ],
                },
                {
                  title: "Skip if you want…",
                  emoji: "❌",
                  bg: "bg-rose-50 border-rose-200",
                  th: "text-rose-800",
                  items: [
                    "Guaranteed clear views — fog makes most viewpoints useless by noon",
                    "Nightlife or a buzzing food scene",
                    "Good roads for beginner bike riders (64 hairpin bends)",
                    "Beach weather — it is a hill station at 2,133m",
                    "Exotic wildlife — it is scenery, not a wildlife destination",
                  ],
                },
              ].map((card) => (
                <div key={card.title} className={`rounded-xl border p-5 ${card.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-3 flex items-center gap-2 ${card.th}`}>
                    <span>{card.emoji}</span>{card.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted font-light">
                        <span className="mt-0.5 flex-shrink-0">{"›"}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mt-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Best time:</strong> April–June for mist and rose blooms (12–20°C), September–November for clear post-monsoon views. Avoid May peak season crowds. Avoid June–August if you hate rain.
              </p>
            </div>
          </section>

          {/* ── HIGHLIGHTS ── */}
          <section id="highlights" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83C\uDFD4\uFE0F"} Kodai Highlights</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Kodaikanal (locals call it Kodai) sits at 2,133m in the Palani Hills of Dindigul district, Tamil Nadu. It is 120km from Madurai and 524km from Chennai — accessible but not quick. Called the &quot;Princess of Hill Stations,&quot; it runs cooler than almost every other Tamil Nadu destination. Here is what it actually has.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                {
                  title: "Must-See Attractions",
                  emoji: "\uD83C\uDF1F",
                  bg: "bg-amber-50 border-amber-200",
                  th: "text-amber-800",
                  rows: [
                    ["Kodai Lake", "Star-shaped, 1863, 5km perimeter, morning mist"],
                    ["Pillar Rocks", "122m granite pillars, best before 10am"],
                    ["Coaker's Walk", "1km cliff-edge walkway, valley views, ₹5"],
                    ["Bryant Park", "Botanical garden, roses & orchids, ₹30"],
                    ["Green Valley View", "Dramatic cliff drop, formerly Suicide Point"],
                  ],
                  note: "Every viewpoint in Kodai is a morning experience — fog consistently rolls in by noon and obliterates views.",
                },
                {
                  title: "Worth the Effort",
                  emoji: "\uD83D\uDDFA\uFE0F",
                  bg: "bg-teal-50 border-teal-200",
                  th: "text-teal-800",
                  rows: [
                    ["Berijam Lake", "21km away, permit ₹300, beautiful forest drive"],
                    ["Bear Shola Falls", "2km from town, seasonal, free, easy walk"],
                    ["Solar Observatory", "Only public solar observatory in India — book ahead"],
                    ["Dolphin's Nose", "30km away, only on clear days — check weather first"],
                    ["PT Road shopping", "Local honey, eucalyptus oil — skip tourist chocolate"],
                  ],
                  note: "Berijam Lake is closed Tuesdays and requires a forest permit. It is genuinely worth the effort — the drive alone is spectacular.",
                },
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

            {/* How to Reach */}
            <div className="bg-white border border-parchment-2 rounded-xl p-5">
              <h3 className="font-serif text-base text-ink mb-3 flex items-center gap-2">
                <span>{"\uD83D\uDE8C"}</span> How to Reach Kodaikanal
              </h3>
              <div className="space-y-2">
                {[
                  { from: "From Madurai", detail: "120km · 3.5 hrs by bus or cab · most common entry point" },
                  { from: "From Coimbatore", detail: "175km · 4 hrs · good option if flying in" },
                  { from: "From Chennai", detail: "524km · overnight bus or fly to Madurai then connect" },
                  { from: "By Train", detail: "No railway to Kodai. Nearest station: Kodai Road (100km) · then bus or cab up the ghat road" },
                ].map((r) => (
                  <div key={r.from} className="flex gap-2 text-xs">
                    <span className="font-medium text-ink/80 w-32 flex-shrink-0">{r.from}</span>
                    <span className="text-muted font-light">{r.detail}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted font-light italic mt-3 pt-3 border-t border-parchment-2">
                {"\uD83D\uDCA1"} The ghat road has 64 hairpin bends. Do not attempt to drive it yourself unless you are very comfortable on mountain roads. Take a bus or hire a local driver.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="2 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="₹2,500/day" />
            <StatCard icon={"\uD83C\uDF21"} label="Best Months" value="Apr – Jun" />
            <StatCard icon={"\uD83D\uDEE3\uFE0F"} label="From Madurai" value="3.5hr Bus" />
          </div>

          {/* ── ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} The 2-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">
              This itinerary is built around one rule: do all viewpoints before 10am. Fog is not a maybe — it is a certainty after noon.
            </p>

            <div className="space-y-4">
              {/* Day 1 banner */}
              <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <span className="text-2xl">{"\uD83C\uDF05"}</span>
                <div>
                  <p className="text-sm font-medium text-amber-800">Day 1 — Arrive, Lake &amp; Town</p>
                  <p className="text-xs text-amber-600 font-light">
                    Arrive by mid-morning {"·"} Kodai Lake {"·"} Bryant Park {"·"} Coaker&apos;s Walk sunset {"·"} Dinner PT Road
                  </p>
                </div>
              </div>

              <DayCard
                day="Day 1"
                title="Lake Circuit, Bryant Park & Coaker's Walk"
                items={[
                  "Arrive Kodaikanal by 10am — either overnight bus from Chennai or morning cab from Madurai. Check in to guesthouse (pick one near the lake for easy walking).",
                  "11am: Head to Kodai Lake. The star-shaped artificial lake was built in 1863. Walk the 5km perimeter path — takes about 1.5 hours at a relaxed pace. Morning mist is often still present, making this genuinely beautiful.",
                  "Rent a cycle at the lake (₹50/hr) and do one full loop on two wheels if you prefer. Or rent a pedal boat (₹200–350/30 min). Honest take: 30 minutes on the lake is enough — the boat ride is pleasant but repetitive.",
                  "1:30pm: Lunch near the lake. Hilltop Towers restaurant is reliable for South Indian meals (₹150–250/person). Several budget dhabas nearby for ₹80–120.",
                  "3pm: Bryant Park — Tamil Nadu's botanical garden in Kodai, known for its rose and orchid collections. Entry ₹30. Best in April–May when roses are in full bloom. Budget 45 minutes.",
                  "5pm: Coaker's Walk — 1km cliff-edge walkway with dramatic valley views. Entry ₹5. This is the best time to catch the valley before evening fog fully settles. Telescope viewpoints available. Budget 45 minutes.",
                  "6:30pm: Dinner on PT Road. Try a local restaurant — avoid the tourist-facing places with laminated menus. Budget ₹150–200 for a good South Indian meal.",
                ]}
                cost="₹800–₹1,400 excluding accommodation"
              />

              {/* Day 2 banner */}
              <div className="flex items-center gap-3 p-4 bg-teal-50 border border-teal-200 rounded-xl mt-2">
                <span className="text-2xl">{"\uD83E\uDEA8"}</span>
                <div>
                  <p className="text-sm font-medium text-teal-800">Day 2 — Pillar Rocks Early, Falls &amp; Shopping</p>
                  <p className="text-xs text-teal-600 font-light">
                    Pillar Rocks 8am {"·"} Bear Shola Falls {"·"} Green Valley View {"·"} PT Road shopping {"·"} Depart afternoon
                  </p>
                </div>
              </div>

              <DayCard
                day="Day 2"
                title="Pillar Rocks, Bear Shola Falls & PT Road Shopping"
                items={[
                  "8am: Pillar Rocks — three vertical granite pillars standing 122m tall. This is the most dramatic viewpoint in Kodai, but only before the fog arrives. Entry ₹10. Aim to reach by 8–8:30am. On clear days you can see the full pillar structure from the viewpoint; by 11am it is usually cloud-wrapped.",
                  "10am: Bear Shola Falls — 2km from town, easy 20-minute walk each way through pine forest. The falls are seasonal (best September–November post-monsoon, but present in April–June too). Entry is free. The forest walk itself is the draw, not just the falls.",
                  "11:30am: Green Valley View (formerly known as Suicide Point) — a valley viewpoint with a dramatic near-vertical drop. Entry ₹5. Do this before noon while some visibility remains. The view into the valley below is genuinely vertigo-inducing on clear days.",
                  "1pm: Lunch — this is your last meal before departure. Try a local rice plate for ₹100–150 rather than the tourist restaurants.",
                  "2pm: PT Road shopping. What to actually buy: local honey (₹150–300/jar, good quality), eucalyptus oil (genuine and cheap here, ₹80–150), and handmade soaps. The 'homemade chocolate' shops are discussed honestly in the Overhyped section below.",
                  "4pm: Depart for Madurai or your next destination. Book your cab in advance — local drivers charge ₹1,800–2,200 for the Madurai run. State buses are ₹100–150 but slower.",
                ]}
                cost="₹700–₹1,200 excluding accommodation"
              />

              {/* Optional: Berijam Lake */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="text-sm font-medium text-purple-800 mb-1">{"\uD83C\uDF32"} Optional Day 2 Extension: Berijam Lake</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">
                  If you have a slow morning on Day 2 and are not rushing to depart, consider Berijam Lake instead of Green Valley View. It is 21km from Kodai town, requires a forest department permit (₹300, get it early morning from the Forest Office), and is closed on Tuesdays. The drive through the Palani Hills forest is one of the best drives in Tamil Nadu. Spotted deer, Nilgiri langurs, and the lake itself make this genuinely worth the effort. Allow 3–4 hours total.
                </p>
              </div>
            </div>
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">{"\uD83C\uDFE8"} Mid-Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (2N)", "₹1,400–₹2,400", "₹5,000–₹8,000"],
                    ["\uD83C\uDF7D Food & Drinks", "₹500–₹800", "₹1,500–₹2,500"],
                    ["\uD83D\uDE95 Transport (local)", "₹300–₹500", "₹800–₹1,200"],
                    ["\uD83C\uDFAF Entry Fees", "₹100–₹200", "₹400–₹600"],
                    ["\uD83D\uDECD Shopping", "₹200–₹500", "₹1,000–₹3,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 2 days)</td>
                    {["₹2,500–₹4,400", "₹8,700–₹15,300"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Kodaikanal is significantly cheaper than Ooty for equivalent accommodation. Budget guesthouses near the lake start at ₹700/night. Mid-range includes a proper hotel with heating (necessary — it gets to 12°C at night even in April).
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Kodaikanal"
            hotels={[
              { name: "Sterling Kodai Lake", type: "Lake-View Resort · Kodaikanal", price: "From ₹3,500/night", rating: "5", badge: "Lake views", url: "https://www.booking.com/hotel/in/sterling-kodai-lake.html?aid=2820480" },
              { name: "Kodai Resort Hotel", type: "Mid-Range · PT Road", price: "From ₹2,000/night", rating: "4", badge: "Central", url: "https://www.booking.com/hotel/in/kodai-resort.html?aid=2820480" },
              { name: "TTDC Hotel Tamil Nadu", type: "Budget Government · Kodaikanal", price: "From ₹800/night", rating: "3", badge: "Budget pick", url: "https://www.booking.com/hotel/in/ttdc-kodaikanal.html?aid=2820480" },
            ]}
            activities={[
              { name: "Kodaikanal Lake Boat Ride", duration: "30 min", price: "From ₹200/boat", badge: "Classic", url: "https://www.getyourguide.com/s/?q=kodaikanal&partner_id=PSZA5UI" },
              { name: "Pillar Rocks & Valley Views Tour", duration: "Half day", price: "From ₹600/person", badge: "Morning only", url: "https://www.getyourguide.com/s/?q=kodaikanal&partner_id=PSZA5UI" },
              { name: "Berijam Lake Forest Drive", duration: "Full day", price: "From ₹1,200 (permit incl.)", badge: "Best for nature", url: "https://www.getyourguide.com/s/?q=kodaikanal+berijam&partner_id=PSZA5UI" },
              { name: "Coaker's Walk & Bryant Park Visit", duration: "2 hours", price: "From ₹300/person", url: "https://www.getyourguide.com/s/?q=kodaikanal&partner_id=PSZA5UI" },
            ]}
            pdfProductId="kodaikanal-2-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Kodaikanal — Must-See Places"
            subtitle="Click each thumbnail to explore Kodai's most iconic spots."
            spots={[
              { name: "Kodai Lake",      query: "kodaikanal lake misty morning star shaped tamil nadu india boats",        desc: "The star-shaped artificial lake built in 1863. The 5km perimeter walk is the best thing to do in Kodai. Morning mist across the surface is what the brochure photos are trying to capture — and it actually looks like that." },
              { name: "Pillar Rocks",    query: "pillar rocks kodaikanal granite pillars vertical tall tamil nadu",         desc: "Three vertical granite pillars rising 122m from the valley floor. The viewpoint gives you the full scale. Go before 10am — by noon the fog is usually complete and there is nothing to see." },
              { name: "Coaker's Walk",   query: "coakers walk kodaikanal cliff walkway valley views misty india",           desc: "A 1km paved walkway along a cliff edge with views down the Palani Hills. Entry ₹5. Best in early morning. The telescope viewpoints let you see Madurai on extremely clear days." },
              { name: "Bryant Park",     query: "bryant park kodaikanal botanical garden roses orchids tamil nadu",         desc: "Tamil Nadu's botanical garden in Kodai. Entry ₹30. The rose collection (200+ varieties) is extraordinary in April–May bloom season. The orchid section runs year-round." },
              { name: "Bear Shola Falls",query: "bear shola falls kodaikanal waterfall forest walk path india",            desc: "A 20-minute walk through pine forest from town. The falls are best September–November but present in April–June. Free entry. The forest walk is the real attraction." },
            ]}
          />

          {/* ── LAKE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="kodaikanal lake morning fog mist boats rowing green hills"
              alt="Kodaikanal lake in morning mist with rowing boats"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Kodai Lake at 7am — the mist is not a weather event, it is almost a daily feature in April–June. Rent a cycle and do the 5km perimeter before the tourist boats fill up.
              </p>
            </div>
          </div>

          {/* ── HONEST SECTION ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDD0D"} What&apos;s Actually Overhyped</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Every travel guide to Kodaikanal reads the same. Here is an honest look at what does not live up to the billing.
            </p>
            <div className="space-y-3">
              {[
                {
                  icon: "\uD83D\uDC2C",
                  title: "Dolphin's Nose — only worth it on clear days",
                  desc: "Dolphin's Nose is a flat rock jutting over the valley 30km from Kodai town, with a famous viewpoint (₹20). The problem: on roughly 70% of days, it is completely fog-shrouded by the time you arrive. That is a 60km round trip for a white wall. Check weather carefully. If you can see Pillar Rocks clearly from town that morning, Dolphin's Nose might be worth it. If not, skip it entirely.",
                  color: "bg-white border-parchment-2",
                },
                {
                  icon: "\uD83C\uDF6B",
                  title: "The famous PT Road chocolate shops",
                  desc: "PT Road's 'homemade chocolate' is the most marketed thing in Kodai. The reality: most of these are commercial operations with tourist pricing, and the chocolate itself is inconsistent — often waxy or too sweet. If you want good chocolate, find one of the small home-based operations off the main road (ask your guesthouse for recommendations). The main PT Road shops sell primarily to tour groups who stop for 20 minutes.",
                  color: "bg-white border-parchment-2",
                },
                {
                  icon: "\uD83D\uDEA3",
                  title: "Extended boat rides at Kodai Lake",
                  desc: "Pedal boats and row boats are rented by the 30-minute slot. Thirty minutes is genuinely enough — you see the lake, you experience the mist, done. Touts will suggest 1-hour or 2-hour rides. The lake does not change that much. Pay for one slot, enjoy it, move on.",
                  color: "bg-white border-parchment-2",
                },
                {
                  icon: "\uD83C\uDF2B",
                  title: "Afternoon viewpoints — all of them",
                  desc: "This cannot be said enough: every viewpoint in Kodaikanal — Pillar Rocks, Coaker's Walk, Green Valley View, Dolphin's Nose, Bear Shola hilltop — becomes pointless after noon when fog rolls in. If you are planning to see any viewpoints after 12pm, adjust your plan. This is not occasional; it is consistent. The morning is everything here.",
                  color: "bg-white border-parchment-2",
                },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} color={m.color} />
              ))}
            </div>
          </section>

          {/* ── PILLAR ROCKS IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="pillar rocks kodaikanal granite cliff viewpoint foggy valley morning india"
              alt="Pillar Rocks viewpoint Kodaikanal granite formations morning"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Pillar Rocks at 8:30am — the granite pillars are fully visible. By 11am this viewpoint is typically cloud-covered. The morning-only rule applies to every sight in Kodai.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  title: "Going to viewpoints after noon",
                  desc: "Fog is not a weather anomaly in Kodai — it is the default afternoon condition. Visiting Pillar Rocks, Coaker's Walk, or any valley viewpoint after 12pm means you will likely see nothing but white. Structure your entire Day 2 around reaching Pillar Rocks before 9am.",
                  icon: "\u23F0",
                },
                {
                  title: "Renting bikes or scooters without experience",
                  desc: "The ghat road has 64 hairpin bends. Every year, accidents happen — mostly visitors who are not used to mountain riding. If you are not an experienced hill-road rider, hire a local driver or take the state bus. The ₹500 saving is not worth it.",
                  icon: "\uD83C\uDFCD\uFE0F",
                },
                {
                  title: "Skipping Berijam Lake to save permit cost",
                  desc: "The ₹300 forest department permit for Berijam Lake puts most visitors off. Do not let it. This is one of the most scenic drives in Tamil Nadu, with excellent wildlife sightings (spotted deer, Nilgiri langur, Malabar giant squirrel) along the forest road. Closed Tuesdays — plan around this.",
                  icon: "\uD83C\uDF32",
                },
                {
                  title: "Not packing warm layers",
                  desc: "Kodai sits at 2,133m. Even in April and May — the summer months — nights drop to 12°C and mornings are cold. A light jacket or fleece is not optional. Many first-time visitors arrive expecting Tamil Nadu heat and find themselves shivering at the lakeside.",
                  icon: "\uD83E\uDDE5",
                },
                {
                  title: "Driving to Dolphin's Nose without checking weather",
                  desc: "30km each way to a viewpoint that is fogged in 70% of the time. Before making this drive, look at Pillar Rocks from town at 8am — if you cannot see them clearly, Dolphin's Nose will be fogged in too. A 5-second check saves a 2-hour wasted drive.",
                  icon: "\uD83D\uDDFA\uFE0F",
                },
                {
                  title: "Staying in town and skipping the forest roads",
                  desc: "Kodai town itself is unremarkable — tea stalls, tourist shops, traffic. The magic is on the roads out of town: the Berijam route through shola forest, the quiet lanes around the lake before 7am, the pine-lined paths to Bear Shola. Do not confine yourself to PT Road.",
                  icon: "\uD83C\uDF33",
                },
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
                { icon: "\uD83C\uDF05", title: "Be at Kodai Lake by 6:30am", desc: "The mist over the lake is at its thickest in the early morning. By 8am it starts to lift. This is the single most atmospheric experience in Kodai and it costs nothing — just an early alarm.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF6F", title: "Buy Honey, Not Chocolate", desc: "Kodai honey is genuinely excellent — wildflower varieties from the Palani Hills, sold by small local operators at ₹150–300/jar. Far better value and quality than the tourist chocolate shops. Ask your guesthouse where the non-commercial sellers are.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDE8C", title: "Take the TNSTC Bus from Madurai", desc: "Tamil Nadu State Transport buses run from Madurai to Kodai for ₹100–150. They are slow (4 hrs vs 3.5 hrs for a cab) but the ghat road views from a bus window seat are spectacular. Book from Mattuthavani bus stand in Madurai.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDD2D", title: "Solar Observatory — Book Ahead", desc: "India's only solar observatory open to the public is in Kodai. It offers limited public tours — call ahead or email to reserve. The Zeiss refractor telescope is genuinely impressive if you have any interest in astronomy.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDF1A", title: "Visit Bryant Park in April–May", desc: "The rose collection in Bryant Park is spectacular during the bloom season (April–May). Over 200 varieties, many of which you will not see elsewhere in India. Entry ₹30. Outside this window the garden is pleasant but less remarkable.", color: "bg-purple-50 border-purple-200" },
                { icon: "\uD83D\uDCF1", title: "Download Maps Offline", desc: "Phone signal in Kodai can be patchy, especially on routes toward Berijam Lake and Dolphin's Nose. Download the Kodaikanal area on Google Maps or Maps.me before you leave town. The forest roads are not always well-signed.", color: "bg-purple-50 border-purple-200" },
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
              Tell us your dates, group size and budget — we&apos;ll send a personalised Kodaikanal itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Kodai Trip {"→"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days are enough for Kodaikanal?",
                  a: "2 days is ideal for a focused Kodai trip — lake circuit, Pillar Rocks, Coaker's Walk, Bear Shola Falls, and shopping. 3 days lets you add Berijam Lake (which deserves its own half-day) and a more relaxed pace. 1 day is possible only if you are coming from Madurai and doing the main sights, but you will feel rushed.",
                },
                {
                  q: "What is the best time to visit Kodaikanal?",
                  a: "April to June is the most popular window — temperatures 12–20°C, mist is atmospheric, roses bloom in Bryant Park. September to November offers the clearest post-monsoon views (best for Pillar Rocks and Dolphin's Nose). Avoid May peak season if you hate crowds. Avoid June–August for heavy rains that make ghat roads slippery.",
                },
                {
                  q: "Is Kodaikanal cheaper than Ooty?",
                  a: "Yes, significantly. Budget guesthouses in Kodai start at ₹700/night compared to ₹1,200+ in Ooty. Meals and entry fees are similar or slightly lower. The main cost difference is accommodation and taxi rates. A budget solo traveller can manage Kodai comfortably for ₹2,500/day including accommodation.",
                },
                {
                  q: "How do I get to Kodaikanal from Chennai?",
                  a: "The most common route is overnight bus from Chennai to Madurai (7–8 hrs, ₹400–700), then onward bus or cab to Kodai (3.5 hrs, ₹100–150 by bus or ₹1,500–2,000 by cab). Total journey 12–14 hrs. Alternatively, fly Chennai to Madurai (1 hr, ₹2,000–5,000) and cab up to Kodai — faster but pricier.",
                },
                {
                  q: "Can I see Pillar Rocks and Dolphin's Nose in the same day?",
                  a: "Only if the weather is very clear and you leave early. Pillar Rocks first (8–9am), then Dolphin's Nose (10–11am). The 30km drive to Dolphin's Nose takes 45–60 minutes on mountain roads. If Pillar Rocks looks foggy at 8am, cancel Dolphin's Nose — it will definitely be fogged in too. Do not make this a must-do; make it a weather-dependent option.",
                },
                {
                  q: "Is it safe to drive on the Kodaikanal ghat road?",
                  a: "For experienced hill-road drivers, yes. For beginners, no. The 64 hairpin bends between Kodai Road (the plains) and Kodaikanal town require confidence on steep inclines and tight corners. Self-drive is fine if you have mountain road experience. Renting scooters or bikes at the top is safer for local sightseeing, but the approach road from Madurai should be done in a bus or with a local driver.",
                },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Exploring South India?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Ooty — 3 Day Guide", href: "/blog/ooty-3-days", soon: false },
                { label: "Madurai — 2 Day Guide", href: "/blog/madurai-2-days", soon: false },
                { label: "Coorg — 3 Days Coffee & Hills", href: "/blog/coorg-3-days", soon: false },
                { label: "Browse All South India Guides", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="kodaikanal-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
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
