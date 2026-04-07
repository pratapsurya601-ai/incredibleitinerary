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

const SHIRDI_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "darshan",   emoji: "🛕", label: "Darshan Guide" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Shirdi 2-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Shirdi in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function ShirdiClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹3k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹3k–8k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={SHIRDI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Shirdi" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="shirdi sai baba temple samadhi mandir"
            fallback="https://images.unsplash.com/photo-1565117350842-c15fe4be68af?w=1600&q=85"
            alt="Shirdi Sai Baba Samadhi Mandir temple illuminated"
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
              <span className="text-white/70">Shirdi 2 Days</span>
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
                Shirdi in 2 Days: Sai Baba Darshan,
                <em className="italic text-gold-light"> Kakad Aarti &amp; Shani Shingnapur</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Complete darshan guide with online booking, aarti timings, Dwarkamai, and the no-locks village that will make you rethink everything.
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
              <span>🇮🇳 Maharashtra</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹1,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Kakad Aarti at 4:30am changes something in you. Thousands of pilgrims swaying, voices rising in the half-dark, the temple bells shattering the silence — you don&apos;t need to be a devotee for this to move you.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Shirdi draws over 25,000 visitors on an ordinary day and 60,000 on peak weekends — yet most tourists do it wrong. They skip the 4:30 AM Kakad Aarti, miss Dwarkamai&apos;s sacred fire, and don&apos;t visit Shani Shingnapur (30 km away — a village that has operated without doors or locks for 400 years). This guide fixes all of that.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Best Season" value="Oct–Mar" />
            <StatCard icon="🛕" label="Darshan" value="Free (slots bookable)" />
            <StatCard icon="📍" label="Distance from Pune" value="240 km" />
            <StatCard icon="⭐" label="Rating" value="4.8★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Shirdi can be visited year-round but conditions vary dramatically.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Mar", emoji: "✅", title: "Best Season", desc: "October–November: warm, manageable crowds. December–February: cool mornings (8–22°C) — the Kakad Aarti in cool air is extraordinary. March: pleasant before summer hits.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Apr–Jun", emoji: "🔥", title: "Hot & Crowded", desc: "Temperatures reach 38–42°C in the Nashik belt. The temple complex has minimal shade. Marble floors are scorching by 10 AM. Avoid unless you have no choice.", color: "bg-red-50 border-red-200" },
                { season: "Jul–Sep", emoji: "🌧️", title: "Monsoon", desc: "Shirdi gets moderate rain. The complex can be slippery and crowded. Some prefer this — the greenery is beautiful and crowds thin out on weekdays. September is acceptable.", color: "bg-amber-50 border-amber-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 2-day route, two comfort levels. Shirdi is one of India&apos;s most affordable pilgrimage destinations.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Dharamshala (₹300–500)</td><td className="py-2.5 px-4">Hotel near temple (₹1,500–3,000)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Bus/train + shared jeep</td><td className="py-2.5 px-4">Private auto for day trips</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Darshan</td><td className="py-2.5 px-4">Free online slot</td><td className="py-2.5 px-4">Puja booking + guide</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹3,000</td><td className="py-2.5 px-4 font-medium text-teal">₹3,000–8,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive → Samadhi Mandir darshan → Dwarkamai → Chavadi → Lendi Baug → Evening Dhoop Aarti. Day 2: 4:30 AM Kakad Aarti → Shani Shingnapur day trip → Depart.
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
                title="Arrival, Samadhi Mandir Darshan & Evening Aarti"
                items={[
                  activeTab === "A"
                    ? "Morning: Bus or train from Mumbai (4.5 hrs) or Pune (4 hrs). Check into a dharamshala near the temple complex — clean, basic, ₹300–500 per night."
                    : "Morning: Bus, train, or flight to Shirdi Airport (10 km from town). Check into a hotel near the Samadhi Mandir — ₹1,500–3,000 per night.",
                  "Samadhi Mandir darshan: Book your free slot online at sai.org.in up to 60 days in advance. The marble-domed sanctum houses Sai Baba's tomb. The queue moves steadily but peak hours (10 AM–1 PM) add 2–3 hours of waiting. An online slot cuts this to 30 minutes.",
                  "Dwarkamai Mosque: The old mosque where Sai Baba lived for 60 years. He kept a sacred fire (dhuni) burning continuously — it still burns today. This is arguably more moving than the Samadhi Mandir itself. The fire's warmth and the simple whitewashed walls create an atmosphere no renovated temple can replicate.",
                  "Chavadi: The alternate resting place where Sai Baba slept every other night. Small, intimate, and overlooked by most visitors. Worth 20 minutes.",
                  "Lendi Baug garden: A peaceful garden where Sai Baba used to meditate. The Nanda deep lamp and a small stone platform are still preserved. Good for a quiet moment between the rush of the temple complex.",
                  "5:45 PM Dhoop Aarti: The evening aarti fills the Samadhi Mandir with incense smoke and hundreds of voices. Arrive 30 minutes early for a good position near the main sanctum.",
                ]}
                cost={activeTab === "A" ? "₹1,500" : "₹4,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Kakad Aarti at Dawn & Shani Shingnapur Day Trip"
                items={[
                  "4:00 AM: Wake up and head to the Samadhi Mandir. The Kakad Aarti — the first aarti of the day — begins at 4:30 AM. Arrive early and stand near the main entrance. The complex is half-lit, the crowd dense but reverent, the chanting rising in the cool pre-dawn air. This is what most visitors remember most about Shirdi.",
                  "The Kakad Aarti lasts 30–40 minutes. After it concludes, the complex opens for general darshan. Stay for the post-aarti atmosphere as the first rays of light hit the dome — the quality of silence after 500 voices stop is something to experience.",
                  "Midday: Shani Shingnapur day trip. 30 km from Shirdi, this village has operated without doors or locks for 400 years — not on homes, shops, banks, or even the police station. The belief: Shani (Saturn) himself protects the village from theft. In the recorded history of the shrine, there has been no documented theft.",
                  activeTab === "A"
                    ? "Shared jeep to Shani Shingnapur: ₹80 per person. Return shared jeeps run until 5 PM. The Saturn shrine is open-air — darshan is free."
                    : "Private auto to Shani Shingnapur: ₹400–600 return with waiting. Your driver can wait at the shrine while you explore the village on foot.",
                  "The open-air shrine has a black stone idol believed to be self-manifested. No priest stands between devotees and the deity — anyone can approach and offer oil directly to the stone. The village itself is a walk worth taking: doorless homes, shops with open cash boxes. It challenges everything you assume about how society holds together.",
                  "Return to Shirdi. Collect luggage and depart — bus or train back to Mumbai, Pune, or Nashik.",
                ]}
                cost={activeTab === "A" ? "₹1,200" : "₹3,000"}
              />
            </div>
          </section>

          {/* ── DARSHAN GUIDE ── */}
          <section id="darshan" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🛕 Darshan Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Shirdi receives 25,000–60,000 pilgrims per day. Understanding the system saves hours of queuing and prevents the most common mistakes.
            </p>
            <div className="space-y-4">
              {[
                { rank: "Step 1", item: "Book Online at sai.org.in", where: "Up to 60 days in advance", price: "Free", note: "Navigate to 'Online Darshan Booking'. Select your date, aarti preference, and number of visitors. You receive a QR code. Arrive 15 minutes early at the designated gate. The VIP darshan (₹300) still has a queue — it doesn't mean instant access, just a shorter line.", emoji: "📱", color: "bg-amber-50 border-amber-200" },
                { rank: "Step 2", item: "Aarti Timings", where: "Samadhi Mandir", price: "Free entry", note: "(1) Kakad Aarti 4:30 AM — most atmospheric, recommend. (2) Madhyan Aarti 12:00 PM — midday, crowded. (3) Dhoop Aarti 5:45 PM — evening, good light. (4) Shej Aarti 10:30 PM — the last aarti of the day, intimate and peaceful. Each lasts 30–40 minutes.", emoji: "⏰", color: "bg-amber-50 border-amber-200" },
                { rank: "Step 3", item: "Dress Code", where: "Samadhi Mandir", price: "Mandatory", note: "Saree or salwar kameez for women. Kurta or formal shirt for men. No shorts or sleeveless clothing. Shoes must be removed and deposited at the free cloak room — take the token seriously. The marble walkway is cool in the morning but hot by afternoon.", emoji: "👗", color: "bg-rose-50 border-rose-200" },
                { rank: "Note", item: "Free Prasad Meal (Anna Daan)", where: "Sai Baba Sansthan Trust kitchen", price: "Free", note: "The Trust offers free meals three times daily — morning, noon, and evening. Simple dal-rice-roti. Pilgrims sit on the floor together regardless of background. Even if you&apos;re not hungry, watching the scale of the operation is humbling.", emoji: "🍽️", color: "bg-teal-50 border-teal-200" },
              ].map((f) => (
                <div key={f.item} className={`rounded-xl border p-5 ${f.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{f.emoji}</span>
                      <span className="text-xs font-bold text-gold-dark mt-1 block">{f.rank}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{f.item}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{f.where} · {f.price}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{f.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── TEMPLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="shirdi temple devotees morning aarti"
              fallback="https://images.unsplash.com/photo-1565117350842-c15fe4be68af?w=900&q=80"
              alt="Shirdi Sai Baba temple complex with devotees"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Kakad Aarti at 4:30 AM: thousands of pilgrims, half-darkness, incense smoke, and the sound of temple bells. Book the online slot and arrive 15 minutes early.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹3,000", color: "bg-amber-50 border-amber-200",
                  items: [["Stay (1–2 nights)", "₹600–1,000"], ["Transport (bus/train)", "₹600–900"], ["Shared jeep to Shani Shingnapur", "₹160"], ["Temple offerings (optional)", "₹200–500"], ["Food", "₹400–700"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹3,000–8,000", color: "bg-teal-50 border-teal-200",
                  items: [["Hotel (1–2 nights)", "₹3,000–6,000"], ["Private auto", "₹800–1,200"], ["Puja booking", "₹300–500"], ["Guide (optional)", "₹400–600"], ["Food + restaurants", "₹800–1,500"]] },
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
              * All prices per person. Does not include travel to/from Shirdi. Darshan is free — book online at sai.org.in. The Trust&apos;s free Anna Daan meals can substantially reduce food costs.
            </p>
          </section>

          <AffiliateBlock destination="Shirdi" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Skipping the Kakad Aarti at 4:30 AM", desc: "Most visitors sleep through it. This is the single biggest mistake in Shirdi. The first aarti of the day — with the temple half-lit, the crowd deeply reverent, and the bells echoing in pre-dawn silence — is what transforms Shirdi from a tourist stop into an experience.", icon: "⏰" },
                { title: "Not booking darshan online", desc: "Walk-in queues at peak times (weekends, festivals) can reach 5–8 hours. The free online slot at sai.org.in cuts this to 30 minutes. Book up to 60 days in advance. Slots release at midnight and fill within hours for busy weekends.", icon: "📱" },
                { title: "Skipping Dwarkamai for the Samadhi Mandir", desc: "Most pilgrims rush to the marble Samadhi Mandir and miss Dwarkamai — the small mosque where Sai Baba actually lived and kept the sacred fire burning. The dhuni (fire) has not been extinguished in over 100 years. No renovation has touched this place.", icon: "🔥" },
                { title: "Missing Shani Shingnapur", desc: "30 km away and accessible by shared jeep for ₹80. A village with no doors or locks for 400 years. The Saturn shrine is fascinating on its own terms but the village itself — open shops, doorless banks, unguarded homes — is an anthropological wonder.", icon: "🚐" },
                { title: "Coming on weekends without a plan", desc: "Shirdi on a Saturday or Sunday receives 50,000+ pilgrims. The main road jams from 8 AM. Accommodation doubles in price. Weekday visits (Monday–Thursday) are dramatically calmer. If you must visit on a weekend, book everything — accommodation, darshan slot, transport — at least 2 weeks ahead.", icon: "📅" },
                { title: "Ignoring the dress code", desc: "Saree or salwar for women, kurta for men. No shorts, no sleeveless. Security at the main gate turns people away. The free cloak room for shoes is well-managed — take your token. Don't leave valuables in your shoes.", icon: "👗" },
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
                { icon: "📱", title: "Book Darshan Slot Online", desc: "Book at sai.org.in up to 60 days in advance. Free darshan slots fill within hours of opening. The VIP darshan (₹300) still has queue — doesn't mean instant access.", color: "border-blue-200 bg-blue-50" },
                { icon: "⏰", title: "Kakad Aarti at 4:30 AM", desc: "The first aarti of the day is the most powerful and least crowded. Arrive by 4 AM and stand near the main entrance. This is what most visitors remember most.", color: "border-amber-200 bg-amber-50" },
                { icon: "👗", title: "Dress Code at Samadhi Mandir", desc: "Saree or salwar kameez for women. Kurta or formal shirt for men. No shorts or sleeveless. Shoes must be removed and deposited at the free cloak room.", color: "border-red-200 bg-red-50" },
                { icon: "🚌", title: "How to Reach Shirdi", desc: "Nearest airport: Shirdi Airport (10 km). Train: Sainagar Shirdi station has direct trains from Mumbai (4.5 hrs) and Pune (4 hrs). By road: Nashik is 90 km, Pune is 240 km.", color: "border-green-200 bg-green-50" },
                { icon: "🏨", title: "Accommodation Options", desc: "Sai Baba Sansthan Trust runs its own guest houses (book at saibabatemple.com) — clean, regulated, ₹500–2000. Private hotels cluster around the temple within 1 km.", color: "border-purple-200 bg-purple-50" },
                { icon: "🍽️", title: "Free Prasad Meal", desc: "Sai Baba Sansthan offers free meals (Anna Daan) three times a day — morning, noon, and evening. The prasad is simple dal-rice but deeply moving for pilgrims.", color: "border-orange-200 bg-orange-50" },
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
              Tell us your dates and group — we&apos;ll send a personalised Shirdi itinerary including darshan slot booking help within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Shirdi Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How to book Shirdi darshan online?", a: "Visit sai.org.in → 'Online Darshan Booking' → Select date, preferred aarti, and number of visitors. You'll receive a confirmation with a QR code. Arrive 15 min early at the designated gate." },
                { q: "What is the difference between Samadhi Mandir and Dwarkamai?", a: "Samadhi Mandir houses Sai Baba's marble tomb — this is the main darshan site with the longest queues. Dwarkamai is the old mosque where Sai Baba lived for 60 years, kept a sacred fire, and performed miracles. Both are in the same complex, 200m apart." },
                { q: "Is Shirdi worth visiting for non-devotees?", a: "The atmosphere of faith at Kakad Aarti transcends religion. Even non-devotees often find the experience moving. The Shani Shingnapur day trip (village with no locks for 400 years) is fascinating from an anthropological perspective." },
                { q: "How far is Shirdi from Mumbai?", a: "240 km by road (4–5 hrs on NH60). By train: Sainagar Shirdi station has direct trains from Mumbai CST/LTT (4.5 hrs). By flight: Shirdi Airport has direct flights from Mumbai (30 min), Delhi, Hyderabad." },
                { q: "What are the aarti timings at Shirdi?", a: "(1) Kakad Aarti: 4:30 AM, (2) Madhyan Aarti: 12:00 PM, (3) Dhoop Aarti: 5:45 PM, (4) Shej Aarti: 10:30 PM. Each lasts 30–40 minutes. The Kakad and Shej aartis are the most atmospheric." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Maharashtra Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Nashik — Wine Country & Sula Vineyards", href: "/blog/nashik-2-days", soon: false },
                { label: "Pune — 3 Day City Guide", href: "/blog/pune-3-days", soon: false },
                { label: "Mumbai — 4 Day Complete Guide", href: "/blog/mumbai-4-days", soon: false },
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

          <CombineWith currentSlug="shirdi-2-days" />
          <RelatedGuides currentSlug="shirdi-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
