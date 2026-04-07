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

const KONARK_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "temple",    emoji: "🏛️", label: "Temple Guide" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Konark 2-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Konark Sun Temple in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function KonarkClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹4k total for 2 days", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹4k–10k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KONARK_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Konark" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="konark sun temple odisha chariot wheels"
            fallback="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1600&q=85"
            alt="Konark Sun Temple stone chariot wheels UNESCO Odisha"
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
              <span className="text-white/70">Konark 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO Heritage
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Konark in 2 Days: Sun Temple,
                <em className="italic text-gold-light"> Black Pagoda &amp; Odisha&apos;s UNESCO Gem</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The 13th-century chariot in stone that doubles as a sundial, a beach with zero vendors, and a Puri combination that makes this one of India&apos;s most rewarding short trips.
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
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹1,800/day</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The sun hit the eastern face of the temple just as we arrived. For a moment the stone turned completely gold — and I understood why an entire civilisation built a chariot in stone to chase the light.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Most people visit Konark as a half-day trip from Puri or Bhubaneswar. That&apos;s a mistake. The Sun Temple deserves at least a full day — you need the morning light, the afternoon to read the carvings, and the Sound and Light Show at dusk. Add Puri on Day 2 and you have one of Odisha&apos;s finest short itineraries.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🏛️" label="Built" value="13th Century CE" />
            <StatCard icon="🌍" label="UNESCO" value="Since 1984" />
            <StatCard icon="📍" label="Distance from Bhubaneswar" value="65 km" />
            <StatCard icon="⭐" label="Rating" value="4.7★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Konark has a tropical coastal climate. The timing shapes everything — including what the carvings look like in different light.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Feb", emoji: "✅", title: "Best Season", desc: "Cool and dry (18–28°C). The Chandrabhaga Mela happens in January (Magha Saptami) — pilgrims bathe at sunrise on the beach. The Konark Dance Festival is in December — classical dance against the lit-up temple at night.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Mar–Jun", emoji: "🔥", title: "Hot & Humid", desc: "Temperatures climb to 38–42°C by May. The stone temple radiates heat. Manageable in March, increasingly uncomfortable April–June. The carvings are still fascinating but physical comfort drops.", color: "bg-red-50 border-red-200" },
                { season: "Jul–Sep", emoji: "🌧️", title: "Monsoon", desc: "Heavy rain, high humidity. The temple is dramatic to photograph in the rain — stone darkens and the carvings stand out. Some roads to Chandrabhaga Beach flood. Fewer tourists. Best for photography, not comfort.", color: "bg-amber-50 border-amber-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 2-day route, two comfort levels. Konark is one of Odisha&apos;s most affordable UNESCO destinations.</p>
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
                    <th className="text-left py-3 px-4 text-amber-700 font-medium">Budget</th>
                    <th className="text-left py-3 px-4 text-teal font-medium">Comfortable</th>
                  </tr>
                </thead>
                <tbody className="text-muted font-light">
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">OTDC guest house, budget lodge (₹800–1500)</td><td className="py-2.5 px-4">Konark hotel or Puri resort (₹2000–5000)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">OSRTC bus + shared auto</td><td className="py-2.5 px-4">Hired car or taxi</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Food</td><td className="py-2.5 px-4">Dhabas, local eateries</td><td className="py-2.5 px-4">Restaurants + dhabas</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">₹3,000–4,000</td><td className="py-2.5 px-4 font-medium text-teal">₹6,000–10,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive → Sun Temple complex → Konark Museum → Chandrabhaga Beach → Sound and Light Show. Day 2: Beach sunrise → Puri → Jagannath Temple exterior → Marine Drive → depart.
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
                title="Sun Temple, Konark Museum & Chandrabhaga Beach"
                items={[
                  "Train or bus from Bhubaneswar (65 km, 1.5 hrs) — OSRTC buses run every 30 minutes (₹60). From Puri: shared bus or auto (35 km, ₹100). Arrive mid-morning.",
                  activeTab === "A"
                    ? "Check in to OTDC Panthanivas or a budget lodge near the temple (₹800–1,500/night). Konark has limited mid-range options — book ahead in peak season."
                    : "Check in to a comfortable Konark hotel or OTDC Yatri Nivas. Alternatively, base in Puri (35 km) where hotel options are better — Mayfair Beach Resort, Toshali Sands.",
                  "Sun Temple complex — the 13th-century stone chariot dedicated to Surya, built by King Narasimhadeva I. Buy your entry ticket: ₹40 for Indians, ₹600 for foreigners. No vehicles inside the complex.",
                  "Allow 3 hours. Start at the base: the lower platform has 24 intricately carved wheels — each one a functional sundial. The spokes cast shadows that tell the time precisely. Stand at the edge of a wheel and watch it work.",
                  "The 7 horses (originally) on the western side represent the 7 days of the week. The entire monument is a chariot of the sun god mid-journey — with the temple itself as the body of the chariot.",
                  "The erotic sculptures on the lower platform are more detailed and philosophically layered than Khajuraho. They represent the worldly realm at the base, dance and art in the middle register, and celestial liberation at the top. A guide (₹300–400) explains this framework — worth it.",
                  "Konark Museum (adjacent to the temple, ₹20 entry) — recovered sculptures from the original complex, scale models. Allow 45 minutes.",
                  "Chandrabhaga Beach (3 km from temple — auto ₹50–80) — one of Odisha&apos;s cleanest beaches. No vendors, no plastic chairs. The beach curves beautifully and the water is clear. Best at golden hour.",
                  "Sound and Light Show at the temple campus, 7 PM, ₹100. The temple is illuminated and the history of its construction is narrated. 45 minutes. Worth attending.",
                ]}
                cost={activeTab === "A" ? "₹1,800" : "₹3,500"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Chandrabhaga Sunrise, Puri & Departure"
                items={[
                  "5 AM: Chandrabhaga Beach sunrise. Walk to the beach in the dark — it takes 10 minutes from most hotels. The sunrise at Chandrabhaga is slower and more dramatic than Puri beach. In January (Magha Saptami) thousands of pilgrims come here to bathe at sunrise — the Chandrabhaga Mela.",
                  "If it&apos;s a Saturday, walk to the Konark fish market nearby — local fishermen selling the morning catch. Lively, photogenic, and free.",
                  "Drive to Puri (35 km, shared bus ₹100 or hired auto ₹400 return). Puri has the Jagannath Temple and the longest beach in Odisha.",
                  "Jagannath Temple exterior walk — non-Hindus cannot enter the inner sanctum, but you can walk the outer walls, watch the flagpole mechanism (the flag is changed daily by a priest who free-climbs 65 metres), and see the massive temple kitchen (largest in the world — feeds 10,000+ people daily). The Raghunandan Library nearby has excellent views into the temple complex from its rooftop.",
                  "Puri Beach — long, wide, golden. Much busier than Chandrabhaga but the scale is impressive. The beach has sea horse rides and fishing boat activity in the morning.",
                  "Marine Drive (Puri to Konark road) at sunset — the road runs along the coast with the Bay of Bengal on one side and casuarina forest on the other.",
                  activeTab === "A"
                    ? "Return to Bhubaneswar by OSRTC bus (₹80, 2 hrs) for onward journey. Bhubaneswar airport has flights to major Indian cities."
                    : "Return to Bhubaneswar by hired car (₹1,500 one way) for comfortable onward travel. Flight or train from Bhubaneswar.",
                ]}
                cost={activeTab === "A" ? "₹1,500" : "₹3,000"}
              />
            </div>
          </section>

          {/* ── TEMPLE GUIDE ── */}
          <section id="temple" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏛️ Temple Guide: What to Look For</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The Sun Temple is dense with symbolism. Most visitors spend 45 minutes and leave. These are the details that make the difference between a photograph and an understanding.
            </p>
            <div className="space-y-4">
              {[
                { feature: "The 24 Wheels as Sundials", emoji: "⏱️", desc: "Each of the 24 wheels on the chariot platform is a functioning sundial. The spokes create shadows that indicate the time precisely — hour and half-hour marks are carved into the rim. Stand at the edge of a wheel in morning or afternoon light and you can read the time. This is one of the most sophisticated architectural-astronomical integrations in the world.", color: "bg-amber-50 border-amber-200" },
                { feature: "Three Registers of Carvings", emoji: "📐", desc: "The sculptural programme follows a deliberate hierarchy. Lower register (base): erotic sculptures and daily life — representing worldly existence. Middle register: dance, music, court scenes — the path through life. Upper register: celestial beings, apsaras, divine figures — liberation. The temple teaches a complete philosophy in stone, bottom to top.", color: "bg-purple-50 border-purple-200" },
                { feature: "The Missing Main Tower", emoji: "🏗️", desc: "The main shikhara (tower) collapsed sometime between the 16th and 18th centuries. What stands today is the jagamohana (dance hall) — also called the Black Pagoda by Portuguese sailors who used it as a navigation landmark. The scale of what once stood (the tower was likely 70+ metres) is staggering to imagine.", color: "bg-blue-50 border-blue-200" },
                { feature: "The Chlorite Sculpture of Surya", emoji: "☀️", desc: "Three figures of Surya (the sun god) appear on the north, south, and west faces — each in different postures representing sunrise, noon, and sunset. The figures are carved in green chlorite stone (softer, more detailed than the main sandstone) and show Surya wearing boots — an unusual northern Indian influence in this Orissan temple.", color: "bg-green-50 border-green-200" },
              ].map((f) => (
                <div key={f.feature} className={`rounded-xl border p-5 ${f.color}`}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{f.emoji}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900 mb-1">{f.feature}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── TEMPLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="konark sun temple wheel carving detail odisha"
              fallback="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&q=80"
              alt="Intricate stone carving on the chariot wheel at Konark Sun Temple"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Each chariot wheel at Konark is a functioning sundial — the spokes and rim markings indicate the time of day. The 24 wheels represent 24 hours; the 7 horses, the days of the week.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "₹3,000–4,000", color: "bg-amber-50 border-amber-200",
                  items: [["Accommodation (2 nights)", "₹1,600–3,000"], ["Transport", "₹400–600"], ["Food", "₹600–900"], ["Entry fees", "₹200–700"], ["Sound & Light Show", "₹100"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹6,000–10,000", color: "bg-teal-50 border-teal-200",
                  items: [["Accommodation (2 nights)", "₹4,000–10,000"], ["Transport (hired car)", "₹2,000–3,000"], ["Food", "₹1,000–2,000"], ["Entry fees", "₹200–700"], ["Guide", "₹300–400"]] },
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
              * All prices per person. Does not include travel to/from Odisha. Temple entry: ₹40 Indians, ₹600 foreigners. Konark Museum: ₹20. Sound and Light Show: ₹100.
            </p>
          </section>

          <AffiliateBlock destination="Konark" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Coming as a half-day trip", desc: "Most Bhubaneswar or Puri tourists visit Konark for 2–3 hours and leave. That is not enough. The carvings change completely with different light — morning, afternoon, and the Sound and Light Show at 7 PM each offer a different temple. Stay overnight.", icon: "⏰" },
                { title: "Skipping a guide for the carvings", desc: "The sculptural programme at Konark is not decorative — it is a complete philosophical system. Without a guide (₹300–400), you'll miss the theological framework behind the erotic sculptures, the three-register hierarchy, and why the horses face west. Worth every rupee.", icon: "🗺️" },
                { title: "Ignoring Chandrabhaga Beach", desc: "3 km from the temple, Chandrabhaga is one of Odisha's cleanest beaches — no hawkers, no plastic furniture. Most Konark day-trippers never make it there. Go at sunset on Day 1 and at sunrise on Day 2.", icon: "🏖️" },
                { title: "Visiting in May or June", desc: "Konark in summer is brutal. The stone temple radiates heat by 10 AM and the open complex offers almost no shade. The humidity from the coast makes it worse. October–February is the window.", icon: "🌡️" },
                { title: "Not booking accommodation ahead in December", desc: "The Konark Dance Festival (December 1–5) draws thousands of visitors. Hotels in Konark are limited — they fill up weeks ahead. Book at least a month in advance if visiting during the festival.", icon: "🎭" },
                { title: "Expecting to enter the temple hall", desc: "The jagamohana (dance hall) is sealed — sand was packed inside in 1904 to prevent collapse. You cannot enter the main hall. The entire experience is exterior. This is not a limitation: the exterior is the masterpiece.", icon: "🚫" },
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
                { icon: "🌅", title: "Morning Light on the Temple", desc: "The Sun Temple faces east — designed so the first rays of dawn hit the entrance sanctum. At sunrise, the stone turns golden and the shadows define the carvings perfectly. Arrive by 6 AM.", color: "border-amber-200 bg-amber-50" },
                { icon: "🕐", title: "Allow 3 Hours at the Temple", desc: "The Sun Temple complex has three levels of carvings: erotic sculptures at the base (symbolizing worldly life), dance scenes in the middle (the path), and celestial figures at top (spiritual liberation). A guide (₹300–400) explains this framework well.", color: "border-blue-200 bg-blue-50" },
                { icon: "📐", title: "The Wheels Are Sundials", desc: "All 24 wheels on the chariot base are functional sundials — each spoke creates a shadow that tells the exact time of day. The wheel also represents the cycle of time (12 months, 24 hours). It's one of the most ingenious architectural systems ever built.", color: "border-purple-200 bg-purple-50" },
                { icon: "🏖️", title: "Chandrabhaga Beach Is Underrated", desc: "3 km from the temple, this clean beach has no vendors (unlike Puri Beach). The Chandrabhaga Mela (January, Magha Saptami) sees pilgrims bathing at sunrise — an extraordinary sight of faith.", color: "border-green-200 bg-green-50" },
                { icon: "🚌", title: "How to Reach Konark", desc: "From Bhubaneswar: OSRTC buses every 30 min (₹60, 1.5 hrs). From Puri: bus or auto (35 km, ₹100–150 shared). The Konark temple is a UNESCO site — entry ₹40 (Indians), ₹600 (foreigners). No vehicles inside the complex.", color: "border-orange-200 bg-orange-50" },
                { icon: "🎭", title: "Konark Dance Festival (December)", desc: "The Konark Classical Dance Festival (usually December 1–5) is held against the backdrop of the Sun Temple at night — Odissi, Bharatanatyam, Kathak, and Kuchipudi dancers perform with the lit-up temple as backdrop. One of India's finest cultural events.", color: "border-red-200 bg-red-50" },
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
              Tell us your dates and group — we&apos;ll send a personalised Konark–Puri–Bhubaneswar itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Konark Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Can non-Hindus enter the Konark Sun Temple?", a: "The Sun Temple complex is open to all visitors — it's an archaeological monument managed by ASI, not an active place of worship. The main sanctum is sealed (since 1904, to preserve it) but the entire exterior, natya mandapa (dance hall), and grounds are fully accessible." },
                { q: "What happened to the Konark temple's main tower?", a: "The main shikhara (tower) of the Sun Temple collapsed some time in the 16th–18th century (historians debate when). The dance hall (jagamohana) still stands intact. Sand was packed inside the jagamohana in 1904 by the British to prevent further collapse — so no one can enter the hall." },
                { q: "What is the significance of the 24 wheels?", a: "The 24 wheels represent 24 hours in a day (some say 12 months of the year, in pairs). The 7 horses represent the 7 days of the week. The whole monument is a colossal chariot of the sun god Surya, rendered in stone as if mid-journey across the sky." },
                { q: "How is Konark different from Khajuraho?", a: "Both feature erotic temple sculptures. Konark is in Odisha (coastal, more humid), is a single large temple complex, and is UNESCO-listed. Khajuraho (Madhya Pradesh) has a group of 20+ temples spread across a complex. Konark's erotic sculptures are more subtle — they're friezes at the base, part of a larger theological narrative. Khajuraho's are more prominent and explicit." },
                { q: "Best time to visit Konark?", a: "October to February is ideal — cool weather, the Chandrabhaga Mela in January, and the Dance Festival in December. Avoid May–June (extreme heat, 40°C+). The monsoon (July–September) makes the stone temple dramatic to photograph, though some road sections flood." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Explore More of Odisha &amp; Eastern India</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Bhubaneswar — Temple City Guide", href: "/blog/bhubaneswar-2-days" },
                { label: "Puri — Jagannath Temple & Beach", href: "/blog/puri-2-days" },
                { label: "Chilika Lake — Bird Sanctuary Day Trip", href: "/blog/chilika-lake-1-day" },
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

          <CombineWith currentSlug="konark-2-days" />
          <RelatedGuides currentSlug="konark-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
