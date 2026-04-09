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

const SIKKIM_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "permits",   emoji: "📋", label: "Permits & Prep" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "budget",    emoji: "💰", label: "Budget Breakdown" },
  { id: "altitude",  emoji: "🏔️", label: "Altitude & Health" },
  { id: "food",      emoji: "🥟", label: "Food Guide" },
  { id: "mistakes",  emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",      emoji: "💡", label: "Pro Tips" },
  { id: "faq",       emoji: "❓", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Sikkim 6-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Sikkim in 6 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 font-light leading-relaxed">
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
export default function SikkimClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹18k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹18k–35k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
    { id: "C" as const, emoji: "✨", label: "Premium", sub: "₹35k+ total", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={SIKKIM_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Sikkim" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="sikkim kangchenjunga mountain monastery india"
            fallback="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=85"
            alt="Kangchenjunga mountain view with Buddhist monastery in Sikkim"
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
              <span className="text-white/70">Sikkim 6 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Mountains & Monasteries
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">18 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Sikkim in 6 Days: Gangtok to Pelling
                <em className="italic text-gold-light"> (Budget to Premium, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real costs, permit details, altitude advice, and the honest truths about travelling through India&apos;s cleanest state.
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
              <span>🇮🇳 India</span>
              <span>·</span>
              <span>🗓 6 Days</span>
              <span>·</span>
              <span>💰 From ₹18,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Sikkim is what happens when you mix Tibetan monasteries, Himalayan peaks, and the friendliest people in India. It&apos;s my favourite Indian state and I&apos;m not even being diplomatic.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Most Sikkim guides dump a list of monasteries and call it a day. This guide has actual timings, real costs for 2026, and the stuff nobody tells you — like why you should skip Baba Mandir, which momos to eat in Gangtok, and how to not faint at Nathula Pass.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🏔️" label="Highest Point" value="14,140 ft" />
            <StatCard icon="🗓" label="Duration" value="6 Days" />
            <StatCard icon="💰" label="Budget From" value="₹18,000" />
            <StatCard icon="📋" label="Permit" value="ILP Required" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Timing matters more in Sikkim than most Indian destinations. Get it wrong and you&apos;re staring at clouds instead of Kangchenjunga.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { season: "Mar-Jun", emoji: "🌸", title: "Spring & Early Summer", desc: "Best overall. Rhododendrons bloom March-April, clear skies, roads open. May-June gets warmer but views remain solid. Nathula opens by April.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Sep-Nov", emoji: "🍂", title: "Post-Monsoon", desc: "October is the clearest month for mountain views. November brings cold but the crispest skies. September can still have light rain early on.", color: "bg-amber-50 border-amber-200" },
                { season: "Jul-Aug", emoji: "🌧️", title: "Monsoon", desc: "Avoid. Heavy rain, landslides, road closures. Nathula usually closed. Some roads become genuinely dangerous.", color: "bg-red-50 border-red-200" },
                { season: "Dec-Feb", emoji: "❄️", title: "Winter", desc: "Cold and some roads closed. Nathula usually shut. Gangtok and Pelling accessible but expect 2-5°C. Beautiful if you like snow, but limited.", color: "bg-blue-50 border-blue-200" },
              ].map((s) => (
                <div key={s.season} className={`rounded-xl border p-5 ${s.color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{s.emoji}</span>
                    <span className="text-xs font-semibold tracking-widest uppercase text-muted">{s.season}</span>
                  </div>
                  <p className="font-serif text-base text-ink mb-2">{s.title}</p>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── PICK YOUR PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Pick Your Plan</h2>
            <p className="text-sm text-muted font-light mb-6">Same 6-day route, three different comfort levels. Pick yours and scroll to the itinerary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan →</p>
                </button>
              ))}
            </div>

            {/* Plan comparison */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-parchment-2">
                    <th className="text-left py-3 pr-4 text-muted font-medium uppercase tracking-wider">Category</th>
                    <th className="text-left py-3 px-4 text-amber-700 font-medium">Budget</th>
                    <th className="text-left py-3 px-4 text-teal font-medium">Comfortable</th>
                    <th className="text-left py-3 px-4 text-purple-700 font-medium">Premium</th>
                  </tr>
                </thead>
                <tbody className="text-muted font-light">
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Homestays, hostels</td><td className="py-2.5 px-4">3-star hotels, good homestays</td><td className="py-2.5 px-4">Boutique resorts, Elgin, Mayfair</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Shared jeeps</td><td className="py-2.5 px-4">Private cab (Innova/Swift)</td><td className="py-2.5 px-4">Private SUV, chauffeur</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Food</td><td className="py-2.5 px-4">Local eateries, thukpa stalls</td><td className="py-2.5 px-4">Mix of restaurants + local</td><td className="py-2.5 px-4">Hotel dining, curated meals</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">₹12k-18k</td><td className="py-2.5 px-4 font-medium text-teal">₹18k-35k</td><td className="py-2.5 px-4 font-medium text-purple-700">₹35k-60k</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── PERMITS ── */}
          <section id="permits" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📋 Permits &amp; Preparation</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Sikkim has permit requirements that trip up first-timers. Sort this before anything else.
            </p>

            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-serif text-base text-ink mb-3">Inner Line Permit (ILP) — Indian Nationals</h3>
                <ul className="space-y-2">
                  {[
                    "Required for Nathula Pass, Tsomgo Lake, and areas beyond Gangtok",
                    "Apply online at sikkimtourism.gov.in — free, takes 10 minutes",
                    "Or get it at Rangpo checkpost (Sikkim border) or the tourism office on MG Marg, Gangtok",
                    "Need: 2 passport photos + valid government photo ID (Aadhaar works)",
                    "Processing: 1-2 hours at the counter, instant online (print required)",
                    "Nathula is closed on Mondays and Tuesdays — plan your Tsomgo/Nathula day accordingly",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-700 font-light leading-relaxed">
                      <span className="text-amber-500 mt-0.5 flex-shrink-0">●</span>{item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                <h3 className="font-serif text-base text-ink mb-3">Protected Area Permit (PAP) — Foreign Nationals</h3>
                <ul className="space-y-2">
                  {[
                    "Must be arranged through a registered Sikkim travel agent — you cannot get this on your own",
                    "Need: passport copy, 2 photos, minimum 2 people travelling together",
                    "Your agent handles the paperwork. Budget 3-5 working days for processing",
                    "Foreign nationals can visit Tsomgo Lake but Nathula Pass is restricted to Indian nationals only",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-700 font-light leading-relaxed">
                      <span className="text-purple-400 mt-0.5 flex-shrink-0">●</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Gangtok (2 days) → Tsomgo &amp; Nathula (1 day) → Ravangla (1 day) → Pelling (2 days). Same route for all three plans — the difference is where you sleep and eat.
            </p>

            {/* Plan tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                    activeTab === p.id
                      ? `${p.color} shadow-sm`
                      : "bg-white border border-parchment-2 text-muted hover:border-gold"
                  }`}>
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {/* ── Day 1 ── */}
              <DayCard
                day="Day 1"
                title="Arrive Gangtok — Settle In & MG Marg"
                items={[
                  "Arrive at Bagdogra Airport (IXB) or NJP station. The drive to Gangtok is 4-5 hours through winding mountain roads — sit on the left side for valley views.",
                  activeTab === "A"
                    ? "Shared jeep from Siliguri/NJP to Gangtok: ₹250-300 per person. Leaves when full (usually every 30 min). Cramped but the cheapest option."
                    : activeTab === "B"
                    ? "Pre-booked private cab to Gangtok: ₹3,000-4,000. Your driver meets you at the airport. Comfortable and you can stop for photos."
                    : "Private SUV transfer with hotel pickup: ₹5,000-7,000. Some premium hotels arrange complimentary transfers — ask when booking.",
                  activeTab === "A"
                    ? "Check into a homestay or hostel near MG Marg: ₹400-800/night. Tag-Along Backpackers or Denzong Homestay are solid budget picks."
                    : activeTab === "B"
                    ? "Check into a mid-range hotel: ₹1,800-3,500/night. Hotel Denzong Regency or The Nettle and Fern have good Kangchenjunga views."
                    : "Check into Elgin Nor-Khill or Mayfair Spa Resort: ₹6,000-12,000/night. Heritage property with mountain views and top-tier service.",
                  "Walk MG Marg in the evening — it's Gangtok's pedestrian main street. Clean, well-lit, full of cafes. This is where you realise Sikkim is different from the rest of India.",
                  "Try the momos at The Roll House on MG Marg. The steamed pork momos make Delhi momos taste like cardboard. Not exaggerating.",
                  "Turn in early. Tomorrow is a full day and you need to acclimatize — Gangtok sits at 5,410 feet.",
                ]}
                cost={activeTab === "A" ? "₹1,200-1,800" : activeTab === "B" ? "₹5,500-7,500" : "₹12,000-18,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Gangtok Sightseeing — Monasteries & Viewpoints"
                items={[
                  "Start at Rumtek Monastery (8:30am, 24km from Gangtok). The largest monastery in Sikkim and one of the most important Tibetan Buddhist centres outside Tibet. Allow 1.5 hours.",
                  "Drive to Enchey Monastery — smaller but serene. Built on a ridge with Kangchenjunga views on clear days. 30 minutes is enough.",
                  "Gangtok Ropeway (cable car): ₹150 per person. Three stations — ride the full length for aerial views of the valley. Skip if afraid of heights, obviously.",
                  "Lunch at Taste of Tibet near Lal Bazaar. Their thukpa (Tibetan noodle soup) is the real deal. Budget ₹150-250 per person.",
                  "Afternoon: Namgyal Institute of Tibetology + Do Drul Chorten (stupa). The institute has a phenomenal collection of Tibetan manuscripts and thangka paintings.",
                  "Evening: Walk through Lal Bazaar for local snacks and souvenirs. The dried yak cheese (chhurpi) makes a surprisingly good trail snack.",
                  "Important: This is your acclimatization day. You're going to 14,000+ feet tomorrow. No alcohol tonight. Drink plenty of water.",
                ]}
                cost={activeTab === "A" ? "₹1,500-2,200" : activeTab === "B" ? "₹3,500-5,000" : "₹8,000-12,000"}
              />

              {/* ── Day 3 ── */}
              <DayCard
                day="Day 3"
                title="Tsomgo Lake & Nathula Pass — The Big One"
                items={[
                  "Start EARLY — 7:00am latest. Your permit-registered vehicle picks you up. This is a mandatory local vehicle day; you cannot take your own car.",
                  "Tsomgo Lake (Changu Lake) at 12,313 feet: stunning glacial lake surrounded by steep mountains. The colour changes with seasons — emerald in summer, frozen white in winter.",
                  "Yak rides at Tsomgo: ₹300-500 for photos. Negotiable in off-season. The yaks are patient; the yak owners less so.",
                  "Continue to Nathula Pass at 14,140 feet — the India-China border. Dress warm, walk slow, and don't be the hero who jogs up the steps. Altitude sickness is real and it doesn't care about your gym routine.",
                  "You can see the Chinese soldiers on the other side. The Indian Army maintains a small canteen here — hot tea at 14,000 feet hits different.",
                  "Skip the tourist trap 'Baba Mandir' — it's a 3-hour round trip for a small shrine. Use that time at Tsomgo Lake instead. Every guide pushes Baba Mandir because it extends the trip. You don't need it.",
                  "Back in Gangtok by 4-5pm. Rest. You'll feel the altitude even if you think you don't. Headache and mild fatigue are normal.",
                  "Nathula is closed Mon-Tue and during heavy snow. Have a backup plan: Baba Mandir or extra time at Tsomgo.",
                ]}
                cost={activeTab === "A" ? "₹2,500-3,500 (shared vehicle + permit)" : activeTab === "B" ? "₹4,500-6,000 (private vehicle + permit)" : "₹7,000-9,000 (private SUV + guide)"}
              />

              {/* ── Day 4 ── */}
              <DayCard
                day="Day 4"
                title="Gangtok to Ravangla — Buddha Park & Tea Gardens"
                items={[
                  "Leave Gangtok by 8:00am. The drive to Ravangla is about 3 hours (65km) through some of the best mountain roads in Sikkim.",
                  "Stop at Temi Tea Garden en route — Sikkim's only tea estate. Free to walk through. The organic tea here is genuinely excellent. Buy a packet; it makes a perfect gift.",
                  "Arrive Ravangla by noon. Head straight to Buddha Park (Tathagata Tsal) — a 130-foot Buddha statue with Kangchenjunga as the backdrop. Allow 1-1.5 hours.",
                  activeTab === "A"
                    ? "Stay at a homestay in Ravangla: ₹600-1,000/night. Local families serve home-cooked Sikkimese food — dal bhat, gundruk, local greens."
                    : activeTab === "B"
                    ? "Stay at Mount Narsing Resort or similar: ₹2,000-3,500/night. Good mountain views and clean rooms."
                    : "Stay at a boutique property or the Elgin Mount Pandim: ₹5,000-9,000/night. The views from here on a clear morning are extraordinary.",
                  "Afternoon: Visit Ralang Monastery (12km from Ravangla). Much less touristy than Rumtek, equally beautiful. You might be the only visitor.",
                  "Evening: Walk around Ravangla town. It's tiny, quiet, and surrounded by mountains on all sides. This is the Sikkim that most tourists skip for Instagrammable Gangtok.",
                ]}
                cost={activeTab === "A" ? "₹1,500-2,500" : activeTab === "B" ? "₹4,000-6,000" : "₹9,000-14,000"}
              />

              {/* ── Day 5 ── */}
              <DayCard
                day="Day 5"
                title="Ravangla to Pelling — Waterfalls & Kangchenjunga Views"
                items={[
                  "Leave Ravangla by 8:30am. Drive to Pelling via Namchi (about 4 hours total, 75km). The road has some rough patches but the scenery compensates.",
                  "Optional stop: Namchi Char Dham — massive Shiva statue on a hilltop. 30 minutes if you're interested; it's a modern religious theme park rather than an ancient site.",
                  "Arrive Pelling by 1pm. Drop bags, have lunch, then head to Rimbi Waterfall (7km) and Khecheopalri Lake ('the wish-fulfilling lake'). The lake is sacred and genuinely peaceful.",
                  activeTab === "A"
                    ? "Stay in Pelling: ₹500-1,000/night for guesthouses near the viewpoint. Book a room with a west-facing window — this is non-negotiable."
                    : activeTab === "B"
                    ? "Stay at Hotel Kabur or Norbu Ghang Resort: ₹2,500-4,500/night. Ask for Kangchenjunga-facing rooms specifically."
                    : "Stay at The Elgin Mount Pandim Pelling or Chumbi Mountain Retreat: ₹6,000-12,000/night. Some of the best mountain-view rooms in all of India.",
                  "Pelling on a clear morning with Kangchenjunga filling your window is a top-5 India moment. Emphasis on 'clear morning' — check weather before booking. If the forecast shows clouds for your dates, consider rearranging.",
                  "Sunset from Pelling Helipad Viewpoint (free, walk from town) — wide-open views of the Kangchenjunga range turning gold and pink. Don't miss this.",
                ]}
                cost={activeTab === "A" ? "₹1,500-2,500" : activeTab === "B" ? "₹4,500-7,000" : "₹10,000-16,000"}
              />

              {/* ── Day 6 ── */}
              <DayCard
                day="Day 6"
                title="Pelling Explorations & Departure"
                items={[
                  "Wake up early (5:30-6:00am) for sunrise over Kangchenjunga from your hotel window or the viewpoint. This is the moment. Set your alarm.",
                  "After breakfast: Pemayangtse Monastery (8:30am, 2km from Pelling). One of the oldest monasteries in Sikkim (1705). The top-floor wooden sculpture depicting heaven, earth and hell is unlike anything else in the state.",
                  "Rabdentse Ruins (10 min walk from Pemayangtse) — the old capital of Sikkim. A short forest walk leads to ruins with massive mountain views. Most tourists skip this. Don't.",
                  "Sangachoeling Monastery — 45-minute uphill hike through forest. Rewarding if you're fit. Skip if pressed for time.",
                  "Start your return journey by noon. Drive to Bagdogra/NJP takes 5-6 hours from Pelling. Book an evening flight (after 7pm) or an overnight train.",
                  activeTab === "A"
                    ? "Shared jeep to Siliguri/NJP: ₹350-500. Less frequent than Gangtok jeeps — book a day ahead."
                    : "Private cab to airport/station: ₹4,000-6,000. Your driver can stop at viewpoints along the way. The descent through Jorethang has incredible valley views.",
                  "Alternative: If you have a late departure next morning, stay overnight in Siliguri to break the journey. The Pelling-to-airport drive in one shot is tiring.",
                ]}
                cost={activeTab === "A" ? "₹1,200-2,000" : activeTab === "B" ? "₹4,500-6,500" : "₹8,000-12,000"}
              />
            </div>
          </section>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "₹12,000-18,000", color: "bg-amber-50 border-amber-200",
                  items: [["Stays (6 nights)", "₹3,000-5,000"], ["Transport", "₹3,000-5,000"], ["Food", "₹3,000-4,500"], ["Permits & Entry", "₹500-1,000"], ["Activities", "₹1,500-2,500"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹18,000-35,000", color: "bg-teal-50 border-teal-200",
                  items: [["Stays (6 nights)", "₹10,000-18,000"], ["Transport", "₹5,000-8,000"], ["Food", "₹4,000-6,000"], ["Permits & Entry", "₹1,000-1,500"], ["Activities", "₹2,000-3,500"]] },
                { plan: "Premium", emoji: "✨", total: "₹35,000-60,000+", color: "bg-purple-50 border-purple-200",
                  items: [["Stays (6 nights)", "₹18,000-35,000"], ["Transport", "₹8,000-14,000"], ["Food", "₹6,000-10,000"], ["Permits & Entry", "₹1,500-2,000"], ["Activities", "₹3,000-5,000"]] },
              ].map((b) => (
                <div key={b.plan} className={`rounded-xl border p-5 ${b.color}`}>
                  <div className="text-center mb-4">
                    <span className="text-2xl">{b.emoji}</span>
                    <p className="font-serif text-base text-ink mt-1">{b.plan}</p>
                    <p className="font-serif text-xl text-ink font-medium mt-1">{b.total}</p>
                    <p className="text-xs text-muted uppercase tracking-wider">per person</p>
                  </div>
                  <div className="space-y-2">
                    {b.items.map(([k, v]) => (
                      <div key={k} className="flex justify-between text-xs">
                        <span className="text-muted font-light">{k}</span>
                        <span className="text-ink font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted font-light mt-4 italic">
              * All prices per person. Does not include flights/trains to Bagdogra/NJP. Budget assumes shared transport and local food. Couple sharing a room saves 20-30% on stays.
            </p>
          </section>

          <AffiliateBlock destination="Sikkim" />

          {/* ── ALTITUDE & HEALTH ── */}
          <section id="altitude" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏔️ Altitude &amp; Health</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Nathula Pass sits at 14,140 feet. That&apos;s higher than most people have ever been. Take it seriously.
            </p>
            <div className="space-y-3">
              {[
                { icon: "🫁", title: "Acclimatize in Gangtok first", desc: "Spend at least one full day in Gangtok (5,410 ft) before going to Tsomgo/Nathula. Your body needs time to adjust to lower oxygen levels. Don't rush this.", color: "bg-blue-50 border-blue-200" },
                { icon: "🚶", title: "Walk slowly at altitude", desc: "At Nathula, walk like you're 85 years old. Seriously. Every staircase will feel like ten. Shortness of breath and mild headache are normal. If you feel dizzy or nauseous, descend immediately.", color: "bg-blue-50 border-blue-200" },
                { icon: "💊", title: "Carry Diamox (Acetazolamide)", desc: "Consult your doctor before the trip. Diamox helps prevent altitude sickness if started 1-2 days before ascending. Also carry paracetamol, ORS packets, and basic first aid.", color: "bg-amber-50 border-amber-200" },
                { icon: "🚫", title: "No alcohol before altitude", desc: "Skip the drinks the night before your Nathula day. Alcohol dehydrates you and makes altitude symptoms worse. Hydrate with water and electrolytes instead.", color: "bg-red-50 border-red-200" },
                { icon: "🧥", title: "Layer up properly", desc: "Nathula can be -5°C to 5°C even in April-May. Wear: thermal base layer + fleece + windproof jacket. Gloves, woolen cap, good socks. Rent a jacket in Gangtok if you don't have one (₹100-200/day).", color: "bg-teal-50 border-teal-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── FOOD GUIDE ── */}
          <section id="food" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🥟 Food Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Sikkimese food borrows from Tibetan, Nepali, and Bengali kitchens. The momos alone are worth the trip.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { dish: "Momos", where: "The Roll House, MG Marg, Gangtok", price: "₹80-150", note: "Steamed pork momos here are legendary. The chilli sauce is homemade and fierce. Also try the jhol momos (momos in spicy soup).", emoji: "🥟" },
                { dish: "Thukpa", where: "Taste of Tibet, Lal Bazaar, Gangtok", price: "₹100-200", note: "Tibetan noodle soup that warms you from inside. Perfect after a cold Nathula day. Get the chicken thukpa.", emoji: "🍜" },
                { dish: "Phagshapa", where: "Local eateries in Gangtok & Pelling", price: "₹150-250", note: "Pork belly stewed with radish and dried chillies. The Sikkimese comfort food you didn't know you needed. Ask locals for the best place.", emoji: "🥘" },
                { dish: "Sel Roti", where: "Street stalls, especially mornings", price: "₹20-40", note: "Crispy Nepali rice doughnut. Cheap, sweet, addictive. You'll see them stacked on bamboo sticks near bus stands.", emoji: "🍩" },
                { dish: "Chhang (Millet Beer)", where: "Homestays, local bars", price: "₹50-100", note: "Fermented millet drink served warm in a bamboo mug with a straw. Mildly alcoholic, very warming. A proper Sikkim experience.", emoji: "🍺" },
                { dish: "Gundruk Soup", where: "Homestays, Ravangla & Pelling", price: "₹60-120", note: "Fermented leafy greens in a tangy broth. Sounds strange, tastes phenomenal. The Sikkimese version of kimchi jjigae.", emoji: "🥬" },
              ].map((f) => (
                <div key={f.dish} className="bg-white rounded-xl border border-parchment-2 p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{f.emoji}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{f.dish}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{f.where} · {f.price}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{f.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FOOD IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="tibetan momos steamed dumplings"
              fallback="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=900&q=80"
              alt="Steamed momos with spicy chutney in Gangtok"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Steamed pork momos at a Gangtok hole-in-the-wall: ₹80. The same momos at a tourist restaurant: ₹200. The hole-in-the-wall version is better.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Going to Nathula without acclimatizing", desc: "Arriving in Gangtok and heading to Nathula the next morning is a recipe for altitude sickness. Spend at least one full day in Gangtok first. Your body will thank you.", icon: "🏔️" },
                { title: "Wasting 3 hours on Baba Mandir", desc: "Every local driver and tour operator pushes this as a 'must-visit.' It's a small shrine with a long, bumpy detour. Spend that time at Tsomgo Lake or resting in Gangtok.", icon: "⛩️" },
                { title: "Not checking Nathula closure days", desc: "Nathula is closed on Mondays and Tuesdays. It also closes during heavy snow or political tensions. Confirm before planning your Tsomgo/Nathula day.", icon: "📅" },
                { title: "Booking a west-facing hotel room in Pelling", desc: "Wait — actually DO book a west-facing room. Kangchenjunga is to the west. The mistake is NOT asking for the mountain view. Many hotels charge the same but give you a parking-lot view.", icon: "🏨" },
                { title: "Packing like you're going to Goa", desc: "Even in May, Gangtok can be 8-15°C and Nathula near freezing. Pack layers, a proper jacket, and waterproof shoes. You can rent jackets in Gangtok but good shoes are on you.", icon: "🧳" },
                { title: "Trying to cover North Sikkim in the same trip", desc: "North Sikkim (Lachen, Lachung, Gurudongmar Lake) needs 3-4 extra days and separate permits. Don't try to cram it into a 6-day Gangtok-Pelling trip. Come back for it.", icon: "🗺️" },
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
                { icon: "📱", title: "Download Maps Offline", desc: "Cell coverage drops to zero between towns. Download Google Maps for Sikkim offline before you leave Gangtok. Trust me on this one.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏡", title: "Homestays Over Hotels (Budget)", desc: "Sikkimese homestays serve homemade food and genuine warmth. You'll eat better, spend less, and actually learn about local life. MG Marg hotels are fine but soulless.", color: "bg-amber-50 border-amber-200" },
                { icon: "🚙", title: "Shared Jeeps Are the Move", desc: "Shared Sumo/Bolero jeeps run between all major towns. ₹250-500 per seat. They leave when full, usually by 7-8am. Book a day ahead for guaranteed front seat.", color: "bg-teal-50 border-teal-200" },
                { icon: "☁️", title: "Weather Dictates Everything", desc: "Check weather 3 days ahead. If Pelling is cloudy for your dates, swap your Pelling and Ravangla days. A clear morning in Pelling is worth rearranging for.", color: "bg-teal-50 border-teal-200" },
                { icon: "🍃", title: "Sikkim Is Organic", desc: "India's first fully organic state. The produce is genuinely better here. Eat local, eat fresh. The vegetables at a homestay dinner may be the best you've had.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "💳", title: "Carry Cash", desc: "UPI works in Gangtok and larger towns, but smaller places, homestays, and shared jeeps are cash-only. Withdraw in Gangtok — ATMs get rare after that.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group size and budget — we&apos;ll send a personalised Sikkim itinerary with permits sorted within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Sikkim Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How do I get an Inner Line Permit for Sikkim?", a: "Indian nationals can apply online at sikkimtourism.gov.in (free, 10 min) or get it at the Rangpo checkpost or MG Marg tourism office in Gangtok. Need 2 passport photos and valid ID. Processing takes 1-2 hours. Foreign nationals need a Protected Area Permit through a registered travel agent — minimum 2 people, 3-5 working days." },
                { q: "What is the best time to visit Sikkim?", a: "March to June and September to November. March-April has rhododendron blooms. October is the clearest month for Kangchenjunga views. Avoid July-August (monsoon, landslides, road closures). December-February is cold with some roads shut, but offers snow views." },
                { q: "How much does a 6-day Sikkim trip cost?", a: "Budget: ₹12,000-18,000 per person with shared jeeps, homestays, and local food. Comfortable: ₹18,000-35,000 with private cabs and mid-range hotels. Premium: ₹35,000-60,000+ with luxury stays and private vehicles. Flights to Bagdogra not included." },
                { q: "Is altitude sickness a concern in Sikkim?", a: "Yes, especially at Nathula Pass (14,140 ft) and Tsomgo Lake (12,313 ft). Acclimatize in Gangtok for at least a day before going higher. Walk slowly, stay hydrated, skip alcohol the night before. Carry Diamox after consulting your doctor." },
                { q: "Can I drive my own car in Sikkim?", a: "You can drive to Gangtok, but Tsomgo Lake and Nathula require a local registered vehicle with a local driver. Roads beyond Gangtok are narrow mountain roads. Shared jeeps are the most common and affordable transport between towns." },
                { q: "Is Sikkim safe for solo female travellers?", a: "Sikkim is consistently ranked among India's safest states. Crime rate is exceptionally low. Gangtok and Pelling feel safe at all hours. Homestays are a great option for solo travellers. The main concern is road conditions during monsoon, not personal safety." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Sikkim — Land of Kanchenjunga"
            subtitle="Monasteries, mountain passes, and the world's third-highest peak."
            spots={[
              { name: "Kanchenjunga from Pelling", query: "kanchenjunga pelling sikkim sunrise snow peak himalaya india", desc: "The world's third-highest peak fills your entire horizon from Pelling." },
              { name: "Tsomgo Lake", query: "tsomgo lake changu lake sikkim frozen turquoise mountains india", desc: "A glacial lake at 3,753m — frozen in winter, turquoise in summer." },
              { name: "Rumtek Monastery", query: "rumtek monastery gangtok sikkim buddhist tibetan prayer flags india", desc: "Sikkim's most important Buddhist monastery." },
              { name: "Nathula Pass", query: "nathula pass sikkim india china border snow mountains soldiers", desc: "India-China border at 4,310m — open to Indian citizens only." },
              { name: "MG Marg, Gangtok", query: "mg marg gangtok sikkim pedestrian street clean mountain town india", desc: "India's cleanest pedestrian street — spotless, unlike any other Indian town." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer India Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Leh Ladakh — 7 Day Adventure", href: "/blog/leh-ladakh-7-days", soon: false },
                { label: "Kashmir — 6 Day Paradise", href: "/blog/kashmir-6-days", soon: false },
                { label: "Manali — 5 Day Escape", href: "/blog/manali-5-days", soon: false },
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

          <RelatedGuides currentSlug="sikkim-6-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
