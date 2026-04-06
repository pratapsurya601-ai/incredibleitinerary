"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import SmartImage from "@/components/ui/SmartImage";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import RelatedGuides from "@/components/blog/RelatedGuides";
import Breadcrumb from "@/components/blog/Breadcrumb";

const DHARAMSHALA_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "overview",    emoji: "📍", label: "Dharamshala vs McLeodGanj" },
  { id: "itineraries", emoji: "📅", label: "The Itineraries" },
  { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
  { id: "food",        emoji: "🍜", label: "Where to Eat" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Dharamshala 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Dharamshala in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
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
            <span className="text-lg">💰</span>
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
export default function DharamshalaClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹8k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏔", label: "Comfortable", sub: "₹8k–18k", color: "border-teal-300 bg-teal-50 text-teal-800" },
    { id: "C" as const, emoji: "🧘", label: "Spiritual", sub: "₹12k–25k", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={DHARAMSHALA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Dharamshala" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="dharamshala mcleodganj himalaya monastery"
            fallback="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=85"
            alt="McLeodGanj valley with Himalayan peaks and colourful monastery prayer flags"
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
              <span className="text-white/70">Dharamshala 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Mountains & Culture
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Dharamshala &amp; McLeodGanj in 3 Days
                <em className="italic text-gold-light"> — Little Tibet in the Himalayas</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 plans with real costs, honest Triund review, monastery timings, and the Tibetan food spots that locals actually eat at.
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
              <span>🇮🇳 Himachal Pradesh</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹5,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              McLeodGanj is basically Little Tibet — you&apos;ll hear more Tibetan than Hindi on the streets. That&apos;s what makes it unlike any other hill station in India. Most guides oversell the Instagram version. This one tells you what&apos;s actually worth your time and what isn&apos;t.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your style — jump straight to your itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} →</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── DHARAMSHALA VS MCLEODGANJ ── */}
          <section id="overview" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📍 Dharamshala vs McLeodGanj</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              First-timers always confuse the two. Here&apos;s what you actually need to know.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Lower Dharamshala", emoji: "🏙", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Elevation","1,457m"],["Vibe","Regular Himachali town"],["Stay here if","You want the cricket stadium, government offices"],["Tourist interest","Low — most skip this entirely"]],
                  note: "The HPCA cricket stadium here is stunning but that's about it for tourists. Don't book a hotel in Lower Dharamshala thinking it's near McLeodGanj — it's a 30-min winding drive uphill." },
                { title: "McLeodGanj", emoji: "🏔", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  rows: [["Elevation","1,770m"],["Vibe","Tibetan colony, backpacker hub"],["Stay here if","You're a tourist (99% of you)"],["Tourist interest","High — Dalai Lama temple, cafes, treks"]],
                  note: "This is where you want to be. All monasteries, Tibetan food, Triund trailhead, and Dharamkot are here or a short walk away." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/60 w-24 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">⚠️ {area.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Bottom line:</strong> Book your stay in McLeodGanj. If you see &ldquo;Dharamshala&rdquo; in a hotel address, check if it&apos;s Upper Dharamshala (which is McLeodGanj) or Lower Dharamshala (which is the town). This mistake wastes an hour every day on commuting.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Duration" value="3 Days" />
            <StatCard icon="💰" label="Budget From" value="₹5,500" />
            <StatCard icon="🌡" label="Best Months" value="Mar – Jun" />
            <StatCard icon="✈️" label="Airport" value="Gaggal (DHM)" />
          </div>

          {/* ── KEY PLACES IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="tsuglagkhang complex tibetan monastery prayer wheels"
              fallback="https://images.unsplash.com/photo-1574755393849-0b3048024498?w=900&q=80"
              alt="Tsuglagkhang Complex with golden prayer wheels and colourful Buddhist flags"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Tsuglagkhang Complex — the Dalai Lama&apos;s official temple. Free entry, open daily, closes at 6pm. Go early morning to see monks chanting.
              </p>
            </div>
          </div>

          {/* ── ITINERARIES ── */}
          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 The Itineraries</h2>
            <p className="text-sm text-muted font-light mb-6">Click a plan — days are expandable/collapsible.</p>

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
                  <span className="text-2xl">💰</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — McLeodGanj Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Zostel / Hostel · ₹400–₹900/night · Walk everywhere</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="McLeodGanj → Tsuglagkhang → Bhagsu"
                  items={[
                    "Arrive McLeodGanj by morning (overnight Volvo from Delhi reaches by 6am). Drop bags at hostel.",
                    "9am: Walk to Tsuglagkhang Complex (Dalai Lama's temple). Free entry, open 8am–6pm. Spend 1.5hrs — the Tibet Museum inside is genuinely moving.",
                    "11am: Namgyal Monastery next door — watch monks debate in the courtyard. Free, no photos during debates.",
                    "12:30pm: Lunch at a Tibetan joint on Jogiwara Road. Thukpa + momos for ₹150–₹200.",
                    "2pm: Walk to Bhagsu Waterfall (2km from main square). Bhagsu Waterfall in monsoon vs dry season are two completely different experiences — go after rains or don't bother. In dry months it's a trickle.",
                    "4pm: Bhagsu Nag Temple — ancient stone temple, free, 10 minutes.",
                    "Evening: Tibetan market in McLeodGanj. Singing bowls, prayer flags, yak wool shawls. Bargain 40% off first price.",
                    "Dinner: Nick's Italian — surprisingly good wood-fired pizza for ₹250–₹350. Every backpacker ends up here eventually."
                  ]}
                  cost="₹800–₹1,200 (food + transport only)" />
                <DayCard day="Day 2" title="Triund Trek — Full Day"
                  items={[
                    "5:30am wake up. Pack: 2L water minimum, snacks, sunscreen, light jacket (it's cold at the top even in summer).",
                    "6:30am: Start from Galu Devi temple (auto from McLeodGanj ₹50). Don't start from McLeodGanj main square — it adds 3km of road walking.",
                    "First 4km: Easy forest trail through oak and rhododendron. You'll feel overconfident. That changes.",
                    "Last 2km: Steep rocky switchbacks. This is where people quit. Take breaks. It's not a race.",
                    "The Triund trek is overhyped by Instagram but the sunset from the top genuinely delivers. 360° views of the Dhauladhar range on one side, Kangra Valley on the other.",
                    "Spend 2–3 hours at the top. Maggi and chai at the shack costs ₹150–₹200 (they carry supplies on mules, so the markup is fair).",
                    "Start descent by 2pm latest to reach back before dark. Knees will hurt on the way down more than the climb up.",
                    "Evening: You'll be exhausted. Eat at whatever is closest to your hostel. Early sleep."
                  ]}
                  cost="₹600–₹900 (food + auto to trailhead)" />
                <DayCard day="Day 3" title="Dharamkot → Naddi Viewpoint → Departure"
                  items={[
                    "8am: Walk to Dharamkot village (2km uphill from McLeodGanj). Skip the main market restaurants, walk 5 minutes to Dharamkot for better cafes at half the price.",
                    "Breakfast at Trek & Dine or Moonpeak Cafe Dharamkot — pancakes, smoothie bowls, Israeli food. Budget ₹200–₹350.",
                    "10am: Walk through Dharamkot to the viewpoint. Clear mornings give you Dhauladhar peaks without the trek.",
                    "11:30am: Auto to Naddi viewpoint (₹100). Best panoramic view of the valley. 30 minutes here is enough.",
                    "12:30pm: Norbulingka Institute (20 min auto, ₹150). Traditional Tibetan arts — thangka painting, wood carving. Entry ₹100. The temple inside is one of the most beautiful in the region.",
                    "2pm: Lunch at Norbulingka's own restaurant. Decent Tibetan + continental food in a garden setting.",
                    "3:30pm: Head to bus stand or airport for departure."
                  ]}
                  cost="₹700–₹1,100 (food + autos + Norbulingka entry)" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) · </span>
                  <span className="font-serif text-base text-ink font-light">₹5,500–₹8,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: COMFORTABLE ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-teal-50 border border-teal-200 rounded-xl mb-6">
                  <span className="text-2xl">🏔</span>
                  <div>
                    <p className="text-sm font-medium text-teal-800">Comfortable Plan — McLeodGanj Boutique Stay</p>
                    <p className="text-xs text-teal-600 font-light">Stay: Boutique hotel/guesthouse · ₹2,000–₹4,500/night · Taxi for longer distances</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="McLeodGanj → Tsuglagkhang → Bhagsu → Evening Market"
                  items={[
                    "Arrive and check in by 10am. McLeodGanj hotels with mountain views cost only ₹500–₹800 more — always worth it.",
                    "11am: Tsuglagkhang Complex (Dalai Lama's temple). Hire a local guide (₹500–₹700 for 1.5hrs) — they explain the Buddhist symbolism that you'd completely miss otherwise.",
                    "1pm: Lunch at Carpe Diem or Tibet Kitchen — elevated Tibetan food, ₹400–₹600 per person.",
                    "3pm: Walk to Bhagsu Waterfall. Stop at Shiva Cafe above the waterfall — the view is the real draw, food is average. Lemon ginger honey tea ₹80.",
                    "5pm: Back to McLeodGanj. Browse Tibetan market — singing bowls ₹800–₹3,000 depending on size and quality.",
                    "7pm: Dinner at Illiterati Cafe — best ambiance in McLeodGanj, mountain views from the terrace, books everywhere. Budget ₹600–₹900 for two."
                  ]}
                  cost="₹2,500–₹4,000 per person (food + guide + incidentals)" />
                <DayCard day="Day 2" title="Option A: Triund Trek · Option B: Norbulingka + Dharamkot"
                  items={[
                    "OPTION A — TRIUND TREK: Same route as budget plan. With a porter/guide ₹800–₹1,200. Start at 7am from Galu Devi. Return by 4pm. Afternoon chai at a Dharamkot cafe to recover.",
                    "OPTION B — FOR NON-TREKKERS:",
                    "9am: Taxi to Norbulingka Institute (₹300 one way). Watch artisans create thangka paintings and wood carvings. The on-site temple has some of the finest Tibetan murals outside Tibet. Entry ₹100, spend 2 hours.",
                    "12pm: Lunch at Norbulingka restaurant — set Tibetan meal ₹400–₹500.",
                    "2pm: Taxi back to McLeodGanj, walk to Dharamkot (2km). Visit Tushita Meditation Centre — drop-in sessions available some days (check their board). Free.",
                    "4pm: Dharamkot cafes. Morgan's Place for the best baked goods. Sit, read, stare at mountains.",
                    "Evening: Dal Lake (tiny, don't expect much) on the walk back. Dinner at McLLO restaurant — Tibetan-Korean fusion, surprisingly good."
                  ]}
                  cost="₹2,000–₹3,500 per person" />
                <DayCard day="Day 3" title="Kangra Fort + Naddi + Departure"
                  items={[
                    "7:30am: Early taxi to Naddi viewpoint (₹200) — best mountain views at sunrise, before clouds roll in.",
                    "9am: Breakfast in McLeodGanj. Pack and check out.",
                    "10:30am: Taxi to Kangra Fort (₹600–₹800, 25km). One of the oldest forts in India, 3,500 years of history. Entry ₹150. Most tourists skip this — their loss. Budget 1.5hrs.",
                    "1pm: Lunch in Kangra town — local Himachali dham (traditional feast) if you can find a place serving it.",
                    "2:30pm: Masroor Rock Cut Temple (30km further, taxi ₹500) — a mini Ellora carved from a single rock. Entry ₹25. Absolutely worth the detour if you have time before your departure.",
                    "Or head directly to Gaggal Airport / bus stand for departure."
                  ]}
                  cost="₹2,500–₹4,000 per person (taxis + food + entries)" />
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-teal-700 uppercase tracking-wide">Total 3-Day Cost (per person) · </span>
                  <span className="font-serif text-base text-ink font-light">₹13,000–₹24,000 including accommodation</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: SPIRITUAL ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">🧘</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Spiritual Plan — Dharamkot / McLeodGanj Retreat</p>
                    <p className="text-xs text-purple-600 font-light">Stay: Retreat centre or spiritual guesthouse · ₹1,500–₹5,000/night · Meditation + Yoga focus</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive → Tsuglagkhang → Evening Meditation"
                  items={[
                    "Arrive and settle into your retreat centre (Tushita, Vipassana Centre, or private yoga retreat in Dharamkot).",
                    "11am: Tsuglagkhang Complex. Spend extra time at the Tibet Museum — the history of Tibetan exile is the spiritual foundation of everything here.",
                    "1pm: Vegetarian lunch at any Tibetan restaurant — meat-free options are everywhere here, unlike most of India.",
                    "3pm: Attend afternoon prayer session at Namgyal Monastery (check timings at the gate). Sit quietly in the back. No photography.",
                    "5pm: Walk the kora (circumambulation path) around the Tsuglagkhang — locals walk it daily. Takes 20 minutes, deeply meditative.",
                    "7pm: Evening meditation at Tushita Centre (if open for drop-ins) or self-guided sitting at your accommodation.",
                    "Early dinner, early sleep. The mountain air at 1,770m hits different."
                  ]}
                  cost="₹1,500–₹2,500 (food + donations)" />
                <DayCard day="Day 2" title="Morning Yoga + Dharamkot + Contemplative Walk"
                  items={[
                    "6am: Sunrise yoga session — most retreat centres include this. If not, drop-in classes at Dharamkot studios ₹400–₹700.",
                    "8:30am: Breakfast at a Dharamkot cafe. The vegan/health food scene here rivals Ubud, Bali.",
                    "10am: Walk to Gallu Devi Temple through the forest trail. Not the Triund trek — just the first peaceful 2km through deodar forest. Turn back whenever you feel like it.",
                    "12pm: Visit the Tibetan Library of Works & Archives in Gangchen Kyishong (between McLeodGanj and Dharamshala). Philosophy classes, Buddhist texts, small museum. Entry free.",
                    "2pm: Lunch + rest.",
                    "4pm: Cooking class for Tibetan momos at one of the local workshops (₹800–₹1,200, book the previous day). You'll eat what you make for dinner.",
                    "Evening: Journal, meditate, or join a group chanting session if your centre offers one."
                  ]}
                  cost="₹2,000–₹3,500 (yoga + cooking class + food)" />
                <DayCard day="Day 3" title="Norbulingka + Final Practice + Departure"
                  items={[
                    "6am: Final sunrise meditation or yoga.",
                    "8:30am: Breakfast, pack up.",
                    "10am: Taxi to Norbulingka Institute. The artisan workshops here are a form of meditation themselves — thangka painters spend months on a single piece. The temple inside has exquisite murals.",
                    "12:30pm: Lunch at Norbulingka. Peaceful garden setting, proper farewell meal.",
                    "2pm: If time permits, visit the Men-Tsee-Khang (Tibetan Medical & Astrological Institute) in Gangchen Kyishong. Get a Tibetan medicine consultation (₹200–₹400). Fascinating even if you're sceptical.",
                    "3:30pm: Depart for airport or bus stand. Carry prayer flags home — every Tibetan shop sells them."
                  ]}
                  cost="₹2,000–₹3,000 (food + taxi + entries)" />
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-purple-700 uppercase tracking-wide">Total 3-Day Cost (per person) · </span>
                  <span className="font-serif text-base text-ink font-light">₹12,000–₹25,000 including retreat accommodation</span>
                </div>
              </div>
            )}
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment">
                    <th className="text-left p-3.5 text-xs font-medium text-muted">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-700 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-teal-700 text-center">🏔 Comfortable</th>
                    <th className="p-3.5 text-xs font-medium text-purple-700 text-center">🧘 Spiritual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (3N)", "₹1,200–₹2,700", "₹6,000–₹13,500", "₹4,500–₹15,000"],
                    ["🍽 Food & Drinks", "₹1,500–₹2,400", "₹3,500–₹5,500", "₹2,500–₹4,000"],
                    ["🚐 Transport (local)", "₹300–₹600", "₹1,500–₹3,000", "₹1,000–₹2,000"],
                    ["🎯 Activities & Entry", "₹200–₹500", "₹1,000–₹2,500", "₹2,000–₹4,500"],
                    ["🧘 Yoga/Meditation", "₹0 (free sessions)", "₹0–₹700", "₹2,000–₹4,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["₹5,500–₹8,000", "₹13,000–₹24,000", "₹12,000–₹25,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Does not include travel to/from Dharamshala. Overnight Volvo from Delhi: ₹1,200–₹1,800. Flights: ₹3,500–₹7,000.
            </p>
          </section>

          {/* ── FOOD SECTION ── */}
          <section id="food" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍜 Where to Eat</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The food scene here splits into two worlds: Tibetan comfort food on Jogiwara Road, and the Dharamkot cafe scene that feels transplanted from Tel Aviv. Both are excellent. Both are cheap.
            </p>

            <div className="mb-6 rounded-2xl overflow-hidden shadow-md">
              <SmartImage
                query="tibetan momos thukpa steaming bowl himalayan food"
                fallback="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=900&q=80"
                alt="Steaming bowl of Tibetan thukpa noodle soup with momos on a wooden table"
                width={860} height={380}
                className="w-full object-cover h-64"
              />
              <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
                <p className="text-xs text-muted font-light italic text-center">
                  A plate of momos in McLeodGanj: ₹80–₹120. The same in Delhi: ₹200–₹350. Eat as many as you can while you&apos;re here.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🥟", title: "Tibetan Momos & Thukpa", desc: "Jogiwara Road has the highest concentration. Look for the places where Tibetan families are eating, not tourists. Steamed > fried. Tingmo (steamed bread) with shapta (stir-fried meat) is the underrated order.", color: "bg-amber-50 border-amber-200" },
                { icon: "☕", title: "Dharamkot Cafe Scene", desc: "Trek & Dine for Israeli shakshuka. Moonpeak for coffee. Morgan's Place for baked goods. All under ₹300 for a full breakfast. Way better value than McLeodGanj main road cafes.", color: "bg-teal-50 border-teal-200" },
                { icon: "🍕", title: "Nick's Italian Kitchen", desc: "Wood-fired pizza at ₹250–₹350 that's genuinely good. Every backpacker finds this place. Terrace seating upstairs. Queue at peak hours — go at 6pm, not 8pm.", color: "bg-amber-50 border-amber-200" },
                { icon: "📚", title: "Illiterati Cafe", desc: "Best atmosphere in McLeodGanj. Books, mountain view terrace, good coffee. Food is decent, not exceptional. Come for the vibe and view, not specifically the food. Budget ₹400–₹600.", color: "bg-teal-50 border-teal-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Dharamshala"
            hotels={[
              { name: "Zostel McLeodGanj", type: "Budget Hostel · McLeodGanj", price: "From ₹500/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/zostel-mcleodganj.html" },
              { name: "Udechee Huts", type: "Boutique · Dharamkot", price: "From ₹2,500/night", rating: "4.5", badge: "Mountain views", url: "https://www.booking.com/hotel/in/udechee-huts.html" },
              { name: "Chonor House", type: "Heritage · McLeodGanj", price: "From ₹3,500/night", rating: "4.5", badge: "Tibetan heritage", url: "https://www.booking.com/hotel/in/chonor-house.html" },
            ]}
          />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Booking in Lower Dharamshala", desc: "It's 30 minutes and ₹300 by taxi from McLeodGanj. You'll waste an hour daily commuting. Always confirm your hotel is in McLeodGanj or Upper Dharamshala.", icon: "🏨" },
                { title: "Starting Triund after 9am", desc: "Afternoon clouds roll in by 1pm most days. You'll trek 5 hours for zero views. Start by 7am or don't go. The sunset is the reward — plan to be at the top by 4pm.", icon: "⛰" },
                { title: "Visiting Bhagsu Waterfall in dry season", desc: "November to March it's barely a trickle. Don't walk 2km for a disappointing stream. Best after monsoon rains (late August to October).", icon: "💧" },
                { title: "Eating only on the main road", desc: "McLeodGanj main square restaurants charge 30-50% more than places 5 minutes walk away on Jogiwara Road or in Dharamkot. The food is identical or worse.", icon: "🍽" },
                { title: "Travelling during monsoon (Jul–Aug)", desc: "Landslides regularly close the highway. Roads get washed out. Triund trail becomes dangerously slippery. It's not 'off-season pricing' — it's genuinely dangerous.", icon: "🌧" },
                { title: "Packing too light for evening", desc: "McLeodGanj is at 1,770m. Even in May, evenings drop to 10-15°C. Bring a proper jacket, not just a hoodie. You'll sit on rooftop cafes regretting it otherwise.", icon: "🧥" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🏔", title: "Dharamkot Over McLeodGanj", desc: "Skip the main market restaurants, walk 5 minutes to Dharamkot for better cafes at half the price. Better views too. This is where long-term travellers eat.", color: "bg-amber-50 border-amber-200" },
                { icon: "🧘", title: "Free Meditation Sessions", desc: "Tushita Meditation Centre offers free drop-in sessions on some days (check noticeboard). Dhamma Sikhara has 10-day Vipassana courses (free, donations accepted). Book 2 months ahead.", color: "bg-purple-50 border-purple-200" },
                { icon: "📱", title: "Cash Over UPI Here", desc: "Network is unreliable in McLeodGanj. Many small Tibetan shops and street food stalls are cash only. Withdraw ₹5,000–₹8,000 in Lower Dharamshala where ATMs actually work.", color: "bg-rose-50 border-rose-200" },
                { icon: "🙏", title: "Dalai Lama Teachings", desc: "Public teachings happen a few times a year (usually March, October). Check dalailama.com for the schedule. Register 2 days before at the Security Office with your passport. It's free.", color: "bg-purple-50 border-purple-200" },
                { icon: "🥾", title: "Triund Camping Permits", desc: "Overnight camping at Triund now requires a forest department permit (₹200–₹400). Tent rental at the top: ₹800–₹1,500/night. Book through your hostel, not random touts.", color: "bg-amber-50 border-amber-200" },
                { icon: "☀️", title: "Best Month by Month", desc: "Mar–Apr ✅ best views, snow peaks | May–Jun ⚠️ warm, crowded | Jul–Aug 🌧 avoid (landslides) | Sep–Oct ✅ clear skies, few tourists | Nov–Feb ❄️ cold but stunning", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Dharamshala itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Dharamshala Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What is the best time to visit Dharamshala?", a: "March to June and September to November are ideal. March-April gives you clear skies and snow-capped Dhauladhar peaks. July-August monsoon brings heavy rain, landslides, and road closures — avoid entirely. September-October has the clearest post-monsoon air." },
                { q: "How difficult is the Triund Trek?", a: "Moderate. 9km from McLeodGanj, 6km from Galu Devi temple. Takes 4-5 hours up, 2.5-3 hours down. First 4km are easy forest trail, last 2km are steep rocky switchbacks. Anyone with basic fitness can complete it. Carry 2 litres of water minimum." },
                { q: "How much does a 3-day trip cost?", a: "Budget solo: ₹5,500-₹8,000 with hostel. Comfortable mid-range: ₹13,000-₹24,000 per person with boutique hotel. Spiritual retreat: ₹12,000-₹25,000 including yoga/meditation courses. All prices include accommodation, food, transport and activities." },
                { q: "How do I get from Delhi to Dharamshala?", a: "Best option: HRTC Volvo overnight bus from Delhi ISBT (12hrs, ₹1,200-₹1,800), arrives 6am. Flights to Gaggal Airport (DHM) take 1.5hrs but are expensive and often delayed by weather. Train to Pathankot + 3hr bus is the budget option but takes longest." },
                { q: "Is it safe for solo travellers?", a: "McLeodGanj is one of the safest destinations in India, especially for solo women. Large international community, well-lit main areas, strong police presence. Dharamkot is particularly popular with solo travellers. Standard mountain-road precautions apply at night." },
                { q: "What's the difference between Dharamshala and McLeodGanj?", a: "Dharamshala (Lower) is the main town at 1,457m — regular Himachali town with cricket stadium. McLeodGanj (Upper) is 9km uphill at 1,770m — the Dalai Lama's residence, all Tibetan culture, and where 95% of tourists stay. Book in McLeodGanj, not Lower Dharamshala." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer India Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Goa — 3 Day Beach Guide", href: "/blog/goa-3-days", soon: false },
                { label: "Rajasthan — 7 Day Royal Circuit", href: "/blog/rajasthan-7-days", soon: true },
                { label: "Golden Triangle — Delhi, Agra, Jaipur", href: "/blog/golden-triangle-7-days", soon: true },
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

          <RelatedGuides currentSlug="dharamshala-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
