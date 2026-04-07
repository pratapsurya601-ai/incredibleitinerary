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

const MATHURA_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "temples",   emoji: "🛕", label: "Temple Guide" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Mathura Vrindavan 2-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Mathura %26 Vrindavan in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function MathuraClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹3k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹3k–8k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MATHURA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Mathura & Vrindavan" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="mathura vrindavan krishna temple india yamuna river holi"
            fallback="https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=1600&q=85"
            alt="Mathura Vrindavan Krishna temple with Yamuna river — India's most sacred pilgrimage"
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
              <span className="text-white/70">Mathura &amp; Vrindavan 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Pilgrimage
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Mathura &amp; Vrindavan in 2 Days:
                <em className="italic text-gold-light"> Krishna&apos;s Birthplace &amp; Sacred Braj</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Krishna Janmabhoomi, Banke Bihari temple, Prem Mandir, Yamuna aarti, and the world-famous Holi — all in two days from Delhi.
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
              <span>💰 From ₹1,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Inside the Banke Bihari temple, the curtain opens and closes every few minutes so the deity doesn&apos;t get tired of being stared at. The crowd surges each time. Something about that theology — the god who needs rest — stays with you.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Mathura and Vrindavan sit just 12 km apart, 150 km south of Delhi on the Yamuna Expressway. Together they form the heart of the Braj region — the landscape where Krishna was born, grew up, played, and became legend. This isn&apos;t just a religious destination. It&apos;s a place with a distinct culture, extraordinary temples, and the most famous Holi celebration on earth. Two days is perfect: one day for Mathura&apos;s ghats and Janmabhoomi complex, one day for Vrindavan&apos;s temple circuit.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌡️" label="Best Season" value="Oct–Mar (Holi: Feb–Mar)" />
            <StatCard icon="🛕" label="Entry" value="Free (most temples)" />
            <StatCard icon="🚆" label="Distance from Delhi" value="150 km" />
            <StatCard icon="⭐" label="Rating" value="4.7★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Mathura-Vrindavan has two peak seasons: Holi (February–March) and Janmashtami (August). Both are extraordinary but crowded. Here&apos;s how to plan.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Mar", emoji: "✅", title: "Best Season", desc: "October–March has pleasant weather (10–25°C) and the key festivals: Diwali, Dev Deepawali, and Holi (February–March). Lathmar Holi at Barsana is the world's most extraordinary colour festival — a week before the main Holi.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Apr–Jun", emoji: "🔥", title: "Brutal Summer", desc: "Temperatures hit 42–45°C. The marble temple floors are extremely hot, walking between ghats becomes exhausting. Only early morning visits are manageable. Avoid unless combining with a covered Agra visit.", color: "bg-red-50 border-red-200" },
                { season: "Jul–Sep", emoji: "🌧️", title: "Janmashtami Season", desc: "August brings Janmashtami — Krishna's birthday — with midnight celebrations, enormous crowds, and a uniquely charged atmosphere. Heavy monsoon but the temples run all-night events. September is calmer.", color: "bg-amber-50 border-amber-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 2-day circuit, two comfort levels. Mathura-Vrindavan is one of India&apos;s most affordable pilgrimage destinations — all major temples are free.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Dharamshala (₹300–600/night)</td><td className="py-2.5 px-4">Hotel (₹1,200–2,000/night)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Shared autos + walking</td><td className="py-2.5 px-4">Hired auto full day (₹600–800)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Food</td><td className="py-2.5 px-4">Ghat stalls + peda</td><td className="py-2.5 px-4">Restaurants + stalls</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹3,000</td><td className="py-2.5 px-4 font-medium text-teal">₹3,000–8,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Mathura — Janmabhoomi, Vishram Ghat, Yamuna aarti. Day 2: Vrindavan — Banke Bihari, ISKCON, Prem Mandir, Nidhivan.
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
                title="Mathura — Janmabhoomi, Vishram Ghat & Yamuna Aarti"
                items={[
                  activeTab === "A"
                    ? "Take a 6 AM train from Delhi (Mathura Junction, 2.5 hrs). Check in to a dharamshala near the ghats (₹300–600/night)."
                    : "Take a 6 AM train from Delhi (Mathura Junction, 2.5 hrs). Check in to a hotel (₹1,200–2,000/night). Hire an auto for the full day (₹600–800).",
                  "Krishna Janmabhoomi complex — the prison cell where Krishna was born to Devaki and Vasudeva, inside a Mughal-era prison. The original stone floor is preserved. The complex also includes the Keshav Deo temple and the adjacent mosque that replaced an earlier structure.",
                  activeTab === "A"
                    ? "Dwarkadhish Temple mangala aarti — if you arrived the previous evening, catch the 5:30 AM mangala aarti. Otherwise the 7:30 AM darshan is perfectly accessible."
                    : "Hire a guide at the Janmabhoomi complex (₹400–600) — the historical and theological context they provide is genuinely fascinating and not obvious from signage alone.",
                  "Vishram Ghat — the ghat where Krishna rested after defeating Kansa. The most important of Mathura's 25 ghats. The steps lead directly to the Yamuna. Priests perform small rituals continuously throughout the day.",
                  "Afternoon: Boat ride on the Yamuna from Vishram Ghat (₹50 per person, 30–40 minutes). You pass under the ghats and see the temples from the river side — a completely different perspective.",
                  "Dusk: Yamuna aarti at Vishram Ghat — smaller and more intimate than Varanasi's Ganga aarti but deeply atmospheric. Oil lamps float on the river. The ceremony starts approximately at sunset.",
                ]}
                cost={activeTab === "A" ? "₹1,200" : "₹2,500–3,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Vrindavan — Banke Bihari, ISKCON, Prem Mandir & Nidhivan"
                items={[
                  activeTab === "A"
                    ? "Auto-rickshaw to Vrindavan (30 min, ₹60–80 shared from Mathura Junction stand)."
                    : "Hired auto to Vrindavan — your auto-wallah from Day 1 will take you as part of the full-day hire.",
                  "7:30 AM: Banke Bihari Temple — arrive as the temple opens. The crowd fills quickly. The deity is a dark image of Krishna playing the flute — the face is considered so captivating that the curtain is pulled every few minutes to prevent worshippers from falling into trance. No photography allowed.",
                  "ISKCON Vrindavan (Krishna Balaram Mandir) — the international Vaishnava community's primary temple in India. Marble construction, English-language kirtan sessions, and an active community of devotees from around the world. Photography allowed in outer areas.",
                  "Prem Mandir — built by Jagadguru Kripalu Maharaj, completed 2012. White Rajasthani marble, elaborately carved exterior, and a 7 PM light show that illuminates the entire structure in colour. If your timing allows, the evening light show is worth staying for.",
                  "Nidhivan — the sacred grove where Radha-Krishna perform the Raas Lila every night according to tradition. The grove is locked at sunset; animals leave of their own accord. Open for visits 7 AM–5 PM. The contorted trees and the silence inside feel genuinely unusual.",
                  "Return to Mathura for dinner. Peda at Brijwasi Royal — the famous milk sweet that is Mathura's most important culinary export. Buy 500g minimum for gifting.",
                ]}
                cost={activeTab === "A" ? "₹900" : "₹1,500–2,000"}
              />
            </div>
          </section>

          {/* ── TEMPLE GUIDE ── */}
          <section id="temples" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🛕 Temple Guide: What to Know Before You Go</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Mathura-Vrindavan has hundreds of temples. Here are the six that matter most, with the essential logistics.
            </p>
            <div className="space-y-4">
              {[
                { name: "Krishna Janmabhoomi", location: "Mathura", timing: "5:30 AM–12 PM, 4–8 PM", note: "Security check mandatory. No camera inside the prison cell sanctum. Audio guide available (₹50). The adjacent mosque is not open to visitors.", emoji: "🏛️", color: "bg-amber-50 border-amber-200" },
                { name: "Dwarkadhish Temple", location: "Mathura", timing: "6:30 AM–10:30 AM, 11:30 AM–6:30 PM, 7–8:30 PM", note: "Mangala aarti at 5:30 AM is the most powerful time. The deity is decorated differently each day. No photography inside the sanctum.", emoji: "🛕", color: "bg-amber-50 border-amber-200" },
                { name: "Banke Bihari Temple", location: "Vrindavan", timing: "7:30 AM–12 PM, 5:30–9 PM", note: "Closed 12–5:30 PM daily without exception. Photography strictly banned — violation results in camera confiscation. The crowd can be very dense — go as early as possible.", emoji: "🎭", color: "bg-rose-50 border-rose-200" },
                { name: "ISKCON Vrindavan", location: "Vrindavan", timing: "4:30 AM–1 PM, 4–8:30 PM", note: "Open most of the day. English-language programs available. Guest accommodation on campus (₹800–2,000/night). Photography allowed in outer temple. Excellent prasad restaurant.", emoji: "🌍", color: "bg-teal-50 border-teal-200" },
                { name: "Prem Mandir", location: "Vrindavan", timing: "5:30 AM–12 PM, 4:30–8:30 PM (light show 7–8 PM)", note: "The exterior carvings are extraordinary — allow 45 minutes to walk around. The 7 PM light and music show is worth coordinating your evening around. Free entry. Photography allowed.", emoji: "💎", color: "bg-teal-50 border-teal-200" },
                { name: "Nidhivan", location: "Vrindavan", timing: "7 AM–5 PM (locked at sunset)", note: "Small entry fee (₹10–20). No one is permitted inside after sunset. The grove's trees are permanently bent and twisted — botanically unusual, spiritually significant. Don't miss it.", emoji: "🌿", color: "bg-green-50 border-green-200" },
              ].map((t) => (
                <div key={t.name} className={`rounded-xl border p-5 ${t.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{t.emoji}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{t.name}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{t.location} · {t.timing}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{t.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── MID ARTICLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="vrindavan temple india krishna devotees colourful"
              fallback="https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=900&q=80"
              alt="Prem Mandir Vrindavan white marble illuminated at night"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Prem Mandir at night during the 7 PM light show — white Rajasthani marble carved with scenes from Krishna&apos;s life. Entry is free. The light show lasts 45 minutes.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹3,000", color: "bg-amber-50 border-amber-200",
                  items: [["Stays (1 night)", "₹300–600"], ["Transport", "₹300–500"], ["Food", "₹500–700"], ["Entry fees", "Mostly free"], ["Peda + shopping", "₹200–400"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹3,000–8,000", color: "bg-teal-50 border-teal-200",
                  items: [["Stays (1 night)", "₹1,200–2,000"], ["Hired auto (full day)", "₹600–800"], ["Food", "₹1,000–1,500"], ["Guide at Janmabhoomi", "₹400–600"], ["Peda + shopping", "₹500–1,000"]] },
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
              * All prices per person. Does not include travel to/from Mathura. All major temples (Banke Bihari, Prem Mandir, ISKCON, Janmabhoomi) are free entry. Mathura-Vrindavan is a strictly vegetarian zone — no non-vegetarian food available anywhere.
            </p>
          </section>

          <AffiliateBlock destination="Mathura" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Arriving at Banke Bihari after 9 AM", desc: "By 9 AM the temple is extremely crowded. The experience at 7:30–8:30 AM is completely different — manageable crowd, more space, better visibility of the deity.", icon: "⏰" },
                { title: "Trying to photograph inside Banke Bihari", desc: "Photography is strictly banned. Phones will be confiscated by temple volunteers if you raise them. ISKCON and Prem Mandir allow cameras in outer areas — plan your photography around those.", icon: "📸" },
                { title: "Arriving at Mathura Cant station instead of Mathura Junction", desc: "Mathura Cant station is further from the temples and ghats. Most trains stop at both but Mathura Junction (Main) is significantly better positioned. Check your ticket carefully.", icon: "🚉" },
                { title: "Expecting non-vegetarian food", desc: "Mathura and Vrindavan are strictly vegetarian cities — no exceptions. Every restaurant, every stall, every guesthouse kitchen is vegetarian. No alcohol either. Plan your meals around this.", icon: "🍛" },
                { title: "Missing the Banke Bihari afternoon closure", desc: "Banke Bihari closes from 12–5:30 PM daily, even in peak season. Many tourists arrive at 2 PM and find it shut. Plan your Vrindavan day to start early and cover Banke Bihari first.", icon: "🕐" },
                { title: "Skipping Mathura and doing only Vrindavan", desc: "Vrindavan gets more tourist attention but Mathura's Janmabhoomi complex, Vishram Ghat, and the Yamuna aarti are the spiritual foundation of the entire Braj story. Do both.", icon: "🗺️" },
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
                { icon: "🎨", title: "Holi in Barsana (March)", desc: "Lathmar Holi at Barsana happens a week before Holi — women beat men with sticks, it's both sacred and extraordinary. Book accommodation 2 months ahead.", color: "border-red-200 bg-red-50" },
                { icon: "🕐", title: "Temple Timings Matter", desc: "Banke Bihari opens at 7:30 AM but closes 12–3 PM daily (even in peak season). ISKCON stays open. Plan around breaks.", color: "border-blue-200 bg-blue-50" },
                { icon: "📸", title: "Photography Rules Differ", desc: "Photography is banned inside Banke Bihari and Krishna Janmabhoomi. ISKCON and Prem Mandir allow cameras. Don't risk confiscation.", color: "border-amber-200 bg-amber-50" },
                { icon: "🚉", title: "Delhi to Mathura Trains", desc: "Mathura Junction is on Delhi–Mumbai and Delhi–Chennai lines — dozens of trains daily. Best: Shatabdi (2 hrs) or Jan Shatabdi. Avoid arriving at Mathura Cant station (further from temples).", color: "border-green-200 bg-green-50" },
                { icon: "🍛", title: "What to Eat", desc: "Peda (milk sweet) at Brijwasi Royal is Mathura's most famous souvenir. Kachori–sabzi at Vishram Ghat stalls. No non-veg anywhere in Mathura–Vrindavan — strict vegetarian city.", color: "border-orange-200 bg-orange-50" },
                { icon: "💡", title: "Combine with Agra", desc: "Agra is 60 km from Mathura. The classic circuit: Delhi → Mathura (Day 1) → Vrindavan (Day 2 morning) → Agra Taj Mahal (Day 2 afternoon) → Delhi.", color: "border-purple-200 bg-purple-50" },
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
              Tell us your dates and group size — we&apos;ll send a personalised Mathura-Vrindavan itinerary with train timings and temple tips within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Mathura Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Is Mathura worth visiting outside Holi season?", a: "Yes — the daily temple aartis and ghats are beautiful year-round. Janmashtami (Krishna's birthday, August) is another peak time with midnight celebrations. Only avoid May–June." },
                { q: "How to reach Mathura from Delhi?", a: "Train: Shatabdi or Jan Shatabdi (2–2.5 hrs, ₹150–450). By road: Yamuna Expressway, 2.5–3 hrs (150 km). Mathura is also on the Delhi–Agra highway." },
                { q: "What is the difference between Mathura and Vrindavan?", a: "Mathura is Krishna's birthplace — more urban, with Yamuna ghats and the Janmabhoomi complex. Vrindavan (12 km away) is where Krishna spent his childhood — more forests, more temples, more ISKCON community. Visit both." },
                { q: "Is the 84 Kos Parikrama pilgrimage route accessible?", a: "The 84-Kos (252 km) circuit around the entire Braj region takes 4–5 days on foot. Most visitors instead do the inner Vrindavan Parikrama (10.5 km, 2–3 hours). It's flat and paved." },
                { q: "What is Nidhivan and why is it locked at sunset?", a: "Nidhivan is a sacred grove in Vrindavan where, according to tradition, Radha-Krishna perform the Raas Lila every night. The grove is locked at sunset, animals leave on their own, and no one stays inside. It's open for visits 7 AM–5 PM." },
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
                { label: "Ayodhya — 3 Day Pilgrimage Guide", href: "/blog/ayodhya-3-days" },
                { label: "Agra — 2 Day Taj Mahal Guide", href: "/blog/agra-2-days" },
                { label: "Varanasi — 4 Day Spiritual Journey", href: "/blog/varanasi-4-days" },
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

          <CombineWith currentSlug="mathura-vrindavan-2-days" />
          <RelatedGuides currentSlug="mathura-vrindavan-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
