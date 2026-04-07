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
import CombineWith from "@/components/blog/CombineWith";
import Breadcrumb from "@/components/blog/Breadcrumb";

const VAISHNODEVI_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "routes",    emoji: "🗺️", label: "Trek Routes" },
  { id: "budget",    emoji: "💰", label: "Budget Breakdown" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Vaishno Devi 3-Day Yatra Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Vaishno Devi in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function VaishnodeviClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹5k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🚁", label: "Comfortable", sub: "₹5k–15k total (helicopter)", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={VAISHNODEVI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Vaishno Devi" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="vaishno devi katra mountain trek pilgrimage jammu india"
            fallback="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=85"
            alt="Vaishno Devi mountain trek through the Trikuta Mountains — Katra, Jammu"
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
              <span className="text-white/70">Vaishno Devi 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Pilgrimage Trek
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Vaishno Devi in 3 Days:
                <em className="italic text-gold-light"> Yatra Routes, Helicopter &amp; Cave Darshan</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The complete guide — RFID registration, old vs new trek route, helicopter booking, Bhairavnath temple, and everything you need before you start from Katra.
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
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹3,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              At 3 AM on the Vaishno Devi trail, in cold mountain air, surrounded by thousands of pilgrims walking in silence — the mountains, the stars, the chanting — something shifts. You understand why eight million people make this journey every year.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Vaishno Devi is one of India&apos;s most visited pilgrimage sites — over 8 million devotees annually trek to the cave shrine of Mata Vaishno Devi at 5,200 feet in the Trikuta Mountains. The base camp is Katra, 45 km from Jammu. The trek is 14 km one way, well-paved, and manageable for most ages. This 3-day guide covers everything: RFID registration, old vs new route, helicopter option, what to expect inside the cave, and where to stay at every budget.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="⛰️" label="Altitude" value="5,200 ft" />
            <StatCard icon="🥾" label="Trek Distance" value="14 km (one way)" />
            <StatCard icon="🚌" label="Distance from Jammu" value="45 km" />
            <StatCard icon="⭐" label="Rating" value="4.9★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The shrine is open year-round. Season affects trek conditions, crowd levels, and temperature at Bhavan (5,200 ft). Plan carefully.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Mar–Jun & Sep–Nov", emoji: "✅", title: "Best Season", desc: "March–June (spring/early summer) and September–November are ideal. Pleasant temperatures, clear mountain air. Navratri (March and October) is the most auspicious but also the most crowded — 40,000+ pilgrims per day.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Dec–Feb", emoji: "❄️", title: "Winter Yatra", desc: "The shrine remains open. Snow on the path from December–January requires ice cleats. Temperatures at Bhavan can drop to -5°C at night. Far less crowded than any other season. Take warm gear seriously.", color: "bg-blue-50 border-blue-200" },
                { season: "Jul–Aug", emoji: "🌧️", title: "Monsoon Caution", desc: "Heavy rain causes landslides on the path — SMVDSB occasionally closes sections for safety. Paths become slippery. July–August is manageable but check conditions before starting. September is significantly safer.", color: "bg-amber-50 border-amber-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same sacred destination, two ways to get there. The trek is the traditional path; the helicopter cuts the journey to 8 minutes.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-5 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
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
                    <th className="text-left py-3 px-4 text-amber-700 font-medium">Budget (Trek)</th>
                    <th className="text-left py-3 px-4 text-teal font-medium">Comfortable (Helicopter)</th>
                  </tr>
                </thead>
                <tbody className="text-muted font-light">
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Dharamshala (₹300–600), Bhavan guesthouse (₹500–800)</td><td className="py-2.5 px-4">SMVDSB guesthouse (₹1,500/night)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Route</td><td className="py-2.5 px-4">Trek (14 km, 5–7 hrs)</td><td className="py-2.5 px-4">Helicopter Katra→Sanjhi Chhat (8 min, ₹2,000–2,200)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Mobility assist</td><td className="py-2.5 px-4">None needed</td><td className="py-2.5 px-4">Pony/palkhi available (₹900–2,000)</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹5,000</td><td className="py-2.5 px-4 font-medium text-teal">₹5,000–15,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive Katra, register RFID. Day 2: Trek to Bhavan, darshan, Bhairavnath, overnight. Day 3: Descend and depart.
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
                title="Arrive Katra, RFID Registration & Acclimatisation"
                items={[
                  activeTab === "A"
                    ? "Fly or take train to Jammu. Bus to Katra (2 hrs, ₹80 per person from Jammu bus stand — frequent departures). Check in to a Katra dharamshala (₹300–600/night)."
                    : "Fly or take train to Jammu. Taxi to Katra (2 hrs, ₹1,200–1,500 per cab). Check in to a Katra hotel (₹1,000–2,000/night). Premium hotels include Katra's Bhawan Inn and The Vaishno Devi Resort.",
                  "RFID Yatra Slip registration is mandatory before starting the trek. Register at the SMVDSB counter near Katra base camp. Carry your Aadhaar card. The slip assigns your check-post timings — you must pass each checkpoint within the time window. Registration is free. You can also register online at maavaishnodevi.org before arriving.",
                  "Evening: Walk Katra market — small shops selling trek gear, warm clothes, walking sticks, and prasad items. A basic walking stick (₹50–100) is genuinely helpful on the steeper sections. Buy rain ponchos if monsoon season.",
                  "Early dinner and sleep by 9 PM. You will need to start trekking by 4–5 AM.",
                ]}
                cost={activeTab === "A" ? "₹1,500" : "₹3,000–4,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="The Yatra — Trek to Bhavan, Cave Darshan & Bhairavnath"
                items={[
                  activeTab === "A"
                    ? "4 AM wake-up. Start trek from Katra base camp. Route: Katra → Banganga (2.5 km) → Charan Paduka (3.5 km) → Adhkwari (6 km, halfway point — rest here) → Sanjhi Chhat (11 km) → Bhavan cave shrine (14 km). Total: 5–7 hours depending on pace and crowd."
                    : "Morning: Helicopter from Katra to Sanjhi Chhat (8 minutes, ₹2,000–2,200 per person). Book on heliyatra.com at least 30 days ahead — without pre-booking, helicopters are sold out. From Sanjhi Chhat, trek the remaining 2.5 km to Bhavan (45–60 minutes, manageable for all fitness levels). Ponies (₹900–1,200) and palkhis (₹1,200–2,000) also available.",
                  "At Bhavan: the cave shrine houses three natural rock formations (pindis) — Mahakali, Mahalakshmi, and Marasaraswati. These are not sculpted idols — they are natural rock formations that take the form of the three goddesses. The original cave requires crawling through a narrow passage. A new, wider artificial cave is available for those who cannot manage the original.",
                  "Darshan queue times: 30 minutes to 3 hours depending on season. Navratri sees queues of 4–6 hours — consider arriving at the cave entrance by 4–5 AM for shortest wait.",
                  "After darshan: 2 km uphill walk to Bhairavnath Temple. The yatra is considered incomplete without visiting Bhairavnath — the guardian of Mata Vaishno Devi. The detour takes 1 hour return and the uphill path is steep but short.",
                  activeTab === "A"
                    ? "Stay overnight at Bhavan — SMVDSB guesthouses (₹500–800/night, book at maavaishnodevi.org). The altitude (5,200 ft) means temperatures drop significantly — carry warm layers."
                    : "Stay at SMVDSB premium guesthouse at Bhavan (₹1,500/night). Book well in advance during Navratri. Blankets provided but bring a fleece.",
                ]}
                cost={activeTab === "A" ? "₹2,000" : "₹5,000–8,000"}
              />

              {/* ── Day 3 ── */}
              <DayCard
                day="Day 3"
                title="Descent to Katra & Departure"
                items={[
                  "Early morning: Optional Bhavan aarti at the cave entrance before descent. The morning ceremony at 4–5 AM is attended by far fewer pilgrims than the main hours — a quieter final darshan opportunity.",
                  activeTab === "A"
                    ? "Descend 14 km back to Katra (4–5 hours). The descent is significantly easier than the ascent — most people complete it in 3–4 hours. Your RFID slip must be shown at check-posts on the way down as well."
                    : "Helicopter back from Sanjhi Chhat to Katra if pre-booked (₹2,000–2,200). Otherwise trek down (4–5 hrs). Book both legs of helicopter simultaneously — one-way return bookings are harder to arrange on the day.",
                  "Katra to Jammu by bus (₹80) or taxi (₹1,200–1,500). Flights from Jammu to Delhi (1 hr), or train (Jammu Tawi is the main station).",
                  "Combine with: Amritsar (4 hrs from Jammu by road/train) makes an excellent addition for a 5-day Jammu-Amritsar circuit. Patnitop (2,300m hill station) is 1.5 hrs from Jammu en route — worth a night stop.",
                ]}
                cost={activeTab === "A" ? "₹1,500" : "₹3,000–4,000"}
              />
            </div>
          </section>

          {/* ── TREK ROUTES ── */}
          <section id="routes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗺️ Trek Routes: Old vs New vs Helicopter</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              There are two walking routes and a helicopter option. Here&apos;s an honest comparison.
            </p>
            <div className="space-y-4">
              {[
                { name: "Old Route (Traditional)", distance: "14 km one way", duration: "5–7 hours", difficulty: "Moderate", note: "Katra → Banganga → Charan Paduka → Adhkwari → Sanjhi Chhat → Bhavan. The traditional pilgrimage path followed for centuries. Well-paved with steps. More crowded. The Adhkwari section has a significant climb that many find tiring. Facilities (food, rest) at regular intervals.", emoji: "🥾", color: "bg-amber-50 border-amber-200" },
                { name: "New Route (Tarakote Marg)", distance: "13 km one way", duration: "4.5–6 hours", difficulty: "Moderate-Steep", note: "Bypasses Adhkwari — cuts distance by 1 km. Less crowded than the old route. Some sections are steeper but the overall elevation gain is better distributed. Good choice if you want fewer crowds. Same facilities.", emoji: "🗺️", color: "bg-blue-50 border-blue-200" },
                { name: "Helicopter (Katra → Sanjhi Chhat)", distance: "8 minutes flight", duration: "Then 2.5 km trek", difficulty: "Easy (post-helicopter)", note: "Cost: ₹2,000–2,200 per person. Book on heliyatra.com — minimum 30 days advance. Without a booking, helicopters are sold out. You still need to trek 2.5 km from Sanjhi Chhat to Bhavan. Ponies and palkhis cover this section. Not allowed for children under 2 years.", emoji: "🚁", color: "bg-teal-50 border-teal-200" },
                { name: "Pony / Palkhi", distance: "Full route or partial", duration: "Varies by selection", difficulty: "Physically easy", note: "Ponies (₹900–1,200 one way) carry you on the trek route. Palkhis/dolis (₹1,200–2,000) are sedan chair-style carriers for those unable to walk. Book from official SMVDSB counter at Katra — avoid freelance operators for safety and fair pricing.", emoji: "🐴", color: "bg-purple-50 border-purple-200" },
              ].map((r) => (
                <div key={r.name} className={`rounded-xl border p-5 ${r.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{r.emoji}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{r.name}</p>
                      <div className="flex gap-3 mt-0.5 mb-2 flex-wrap">
                        <span className="text-[0.65rem] text-gold-dark">{r.distance}</span>
                        <span className="text-[0.65rem] text-muted">·</span>
                        <span className="text-[0.65rem] text-gold-dark">{r.duration}</span>
                        <span className="text-[0.65rem] text-muted">·</span>
                        <span className="text-[0.65rem] text-gold-dark">{r.difficulty}</span>
                      </div>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{r.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── MID ARTICLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="himalayan mountain trek pilgrimage steps india dawn"
              fallback="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80"
              alt="Pilgrims trekking on the Vaishno Devi mountain trail at dawn"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The trail at 4 AM — thousands of pilgrims moving in the same direction, the mountains above, the valley below. Start early: the pre-dawn trek is cooler, less crowded, and genuinely atmospheric.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget (Trek)", emoji: "💰", total: "Under ₹5,000", color: "bg-amber-50 border-amber-200",
                  items: [["Katra dharamshala (2 nights)", "₹600–1,200"], ["Bhavan guesthouse (1 night)", "₹500–800"], ["Katra–Jammu transport", "₹160–300"], ["Food (all 3 days)", "₹600–900"], ["RFID + misc", "₹200–300"]] },
                { plan: "Comfortable (Helicopter)", emoji: "🚁", total: "₹5,000–15,000", color: "bg-teal-50 border-teal-200",
                  items: [["Katra hotel (1–2 nights)", "₹1,000–4,000"], ["Helicopter (return)", "₹4,000–4,400"], ["SMVDSB guesthouse Bhavan", "₹1,500"], ["Food + transport", "₹1,500–2,500"], ["Pony/palkhi if needed", "₹900–2,000"]] },
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
              * All prices per person. Does not include travel to/from Jammu. RFID registration, darshan, and shrine entry are all free. Helicopter prices are per person one way — book return separately.
            </p>
          </section>

          <AffiliateBlock destination="Vaishno Devi" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Starting the trek without RFID registration", desc: "The RFID yatra slip is not optional — pilgrims are turned back at Banganga check-post (first checkpoint, 2.5 km in) without it. Register at Katra before starting, or online at maavaishnodevi.org.", icon: "📋" },
                { title: "Not booking the helicopter in advance", desc: "Helicopter tickets are routinely sold out 2–3 weeks ahead. Last-minute bookings at the helipad rarely succeed. Book on heliyatra.com the moment you confirm your travel dates.", icon: "🚁" },
                { title: "Wearing inappropriate footwear", desc: "The trek involves 14 km of stone steps and paved mountain path. Flip-flops and formal shoes cause falls and blisters. Wear proper trekking shoes or sturdy sports shoes. Walking sticks from Katra market (₹50–100) are worth it.", icon: "🥾" },
                { title: "Underestimating the cold at Bhavan", desc: "Bhavan is at 5,200 ft. Even in October it drops to 8–12°C at night. Pilgrims in summer clothes suffer. Carry a warm fleece or jacket regardless of the season — temperatures drop sharply after sundown.", icon: "🌡️" },
                { title: "Skipping Bhairavnath Temple", desc: "The yatra is traditionally considered incomplete without Bhairavnath darshan. The temple is 2 km uphill from Bhavan — 45–60 minutes return. Many pilgrims skip it due to fatigue. Don't. The deity is the guardian of the shrine and the view from Bhairavnath is the best on the entire route.", icon: "🛕" },
                { title: "Going during Navratri without preparation", desc: "Navratri (March and October) sees 40,000+ pilgrims per day. Queues at the cave can be 4–6 hours. Bhavan accommodation books out months ahead. Go armed with online guesthouse bookings and extremely early start times.", icon: "👥" },
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
                { icon: "📋", title: "RFID Slip Registration is Mandatory", desc: "Register at the Katra counter or online at maavaishnodevi.org. Carry your Aadhaar. The slip has your check-post timings — don't miss them.", color: "border-blue-200 bg-blue-50" },
                { icon: "🚁", title: "Helicopter: Book 30 Days Ahead", desc: "Helicopter from Katra to Sanjhi Chhat (8 min) costs ₹2,000–2,200 per person. Book on heliyatra.com. Without a pre-booking, helicopters are sold out days in advance.", color: "border-green-200 bg-green-50" },
                { icon: "🥾", title: "Trek Route: Old vs New", desc: "Old route (traditional, 14 km): Katra → Banganga → Charan Paduka → Adhkwari → Bhavan. New route (shorter, 13 km): avoids Adhkwari. New route is less crowded but steeper.", color: "border-amber-200 bg-amber-50" },
                { icon: "🌡️", title: "Temperature Drops at Night", desc: "Bhavan sits at 5,200 ft — it can be 5–10°C at night even in October. Carry a fleece or light jacket regardless of season.", color: "border-red-200 bg-red-50" },
                { icon: "🐴", title: "Ponies and Palkhis", desc: "Ponies (₹900–1200 one way) and palkhis/dolis (₹1,200–2,000) are available from Katra for those who can't trek. Book from the official SMVDSB counter — avoid freelance pony-wallahs.", color: "border-purple-200 bg-purple-50" },
                { icon: "🛕", title: "Don't Skip Bhairavnath Temple", desc: "The yatra is considered incomplete without visiting Bhairavnath Temple, 2 km past the main shrine. The downhill descent is easy — budget 1 hour for the detour.", color: "border-orange-200 bg-orange-50" },
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
              Tell us your dates and group — we&apos;ll send a personalised Vaishno Devi yatra plan including helicopter booking guidance within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Vaishno Devi Yatra →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How difficult is the Vaishno Devi trek for beginners?", a: "The 14 km trail is well-paved and gradual — it's doable for most ages. Carry water, wear proper shoes, and start by 4–5 AM to avoid crowds and midday heat. The toughest section is the final climb to Bhavan." },
                { q: "Is Vaishno Devi open in winter (December–February)?", a: "Yes — the shrine is open year-round. Winter means snow on the path, longer trek times, and cold nights. It's actually less crowded than summer. Ice cleats/warm gear required December–January." },
                { q: "What is inside the Vaishno Devi cave?", a: "The original cave shrine houses three natural rock formations (pindis) representing Mahakali, Mahalakshmi, and Marasaraswati. A new artificial cave (Ardh Kunwari) has been built for quicker darshan — the original cave is narrower and requires crawling." },
                { q: "How long does the full yatra take?", a: "Katra to Bhavan takes 5–7 hours trekking (one way). Add 1–2 hours for darshan queues. Most pilgrims do it in one long day; staying overnight at Bhavan is more relaxed." },
                { q: "Best time to visit Vaishno Devi?", a: "March–June and September–November are ideal. July–August has monsoon landslides — SMVDSB sometimes closes sections. The Navratri festival (March and October) is busiest but most auspicious." },
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
                { label: "Amritsar — 2 Day Golden Temple Guide", href: "/blog/amritsar-2-days" },
                { label: "Srinagar — 5 Day Kashmir Guide", href: "/blog/srinagar-5-days" },
                { label: "Dharamsala & McLeod Ganj — 3 Day Guide", href: "/blog/dharamsala-mcleodganj-3-days" },
                { label: "Browse All India Packages", href: "/#packages" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="vaishno-devi-3-days" />
          <RelatedGuides currentSlug="vaishno-devi-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
