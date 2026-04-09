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

const KOHIMA_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "history",   emoji: "⚔️", label: "WWII History & Culture" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Kohima 3-Day Travel Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Kohima in 3 Days — WWII, Naga Culture and Dzükou Valley&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function KohimaClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹8k for 3 days", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹8k–20k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KOHIMA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Kohima" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="northeast india mountains tribal culture misty hills"
            fallback="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85"
            alt="Kohima Nagaland misty hills and tribal cultural heritage"
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
              <span className="text-white/70">Kohima 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Heritage & Culture
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Kohima in 3 Days: WWII Battleground,
                <em className="italic text-gold-light"> Naga Culture &amp; Dzükou Valley</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The &apos;Stalingrad of the East&apos;, 16 Naga tribes, a valley of sub-alpine lilies, and food unlike anything else in India. The Northeast destination most Indian travellers have never considered.
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
              <span>🇮🇳 Nagaland</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹6,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Kohima War Cemetery stopped me completely. 1,421 graves on the ridge where the Battle of Kohima was fought in 1944 — the battle that stopped the Japanese invasion of India. The epitaph reads: &apos;When you go home, tell them of us and say, for your tomorrow, we gave our today.&apos;
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Kohima is the least-visited state capital in India — and one of the most rewarding. Three days here gives you the most significant WWII site in Asia, an introduction to 16 distinct Naga tribal cultures, the dramatic Dzükou Valley trek, and a cuisine so distinctive it bears no resemblance to anything else called &apos;Indian food.&apos; The ILP requirement (a simple permit) keeps casual tourists away — which is exactly why it&apos;s special.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌸" label="Best Season" value="Oct–Apr" />
            <StatCard icon="🎺" label="Hornbill Festival" value="Dec 1–10" />
            <StatCard icon="⛰️" label="Altitude" value="1,444 m" />
            <StatCard icon="⭐" label="Rating" value="4.6★" />
          </div>

          {/* ── PICK YOUR PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Pick Your Plan</h2>
            <p className="text-sm text-muted font-light mb-6">Same 3-day route through Kohima, two comfort levels. Local guides add enormous depth to both plans.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stay</td><td className="py-2.5 px-4">Budget guesthouse (₹700–1200)</td><td className="py-2.5 px-4">Nagaland Tourism homestay (₹2000–4000)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Guide</td><td className="py-2.5 px-4">Self-guided (ILP required)</td><td className="py-2.5 px-4">Local cultural guide (₹800–1200/day)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Dzükou</td><td className="py-2.5 px-4">Day trek only</td><td className="py-2.5 px-4">Overnight in forest rest house</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹8,000</td><td className="py-2.5 px-4 font-medium text-teal">₹8,000–20,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive Dimapur → ILP → War Cemetery. Day 2: Naga Heritage Village → Dzükou Valley → local dinner. Day 3: Touphema eco village → market → depart.
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
                title="Arrive via Dimapur → ILP → War Cemetery"
                items={[
                  "Fly to Dimapur (the nearest airport, 74 km from Kohima). Dimapur has flights from Kolkata, Guwahati, Delhi (via Kolkata), and Imphal. Alternatively, overnight train from Guwahati to Dimapur (7 hrs).",
                  "ILP (Inner Line Permit): Mandatory for all non-Nagaland Indian citizens. Get it online at nagalanditr.com (₹100, valid 15 days, instant digital permit) before you arrive, or collect the physical permit at the Dimapur airport/railway station checkpoint. Do not enter Nagaland without it — police checks are frequent.",
                  activeTab === "A"
                    ? "Shared taxi Dimapur → Kohima (74 km, 2 hrs, ₹400–600 per person). The road climbs dramatically through the Naga hills — views improve as you ascend. Check in to a budget guesthouse in Kohima town (₹700–1200/night)."
                    : "Private transfer Dimapur → Kohima (₹1500–2000). Check in to a Nagaland Tourism property or mid-range hotel. The Nagaland Tourism Circuit House (₹2000–3000) has excellent views and good food.",
                  "Kohima War Cemetery: 1,421 Allied graves on the ridge where the most brutal WWII battle in Asia was fought in April–June 1944. The battle for Kohima stopped the Japanese advance toward India — historians call it the 'Stalingrad of the East.' The graves are impeccably maintained by the Commonwealth War Graves Commission.",
                  "The Tennis Court marker: The actual garden of the British Deputy Commissioner's bungalow where the most intense phase of the battle was fought. The Japanese and Allied forces were sometimes 10 metres apart across the tennis court.",
                  "Evening: Walk Kohima's main market for your first taste of Naga street food. Look for smoked pork stalls and fried momos.",
                ]}
                cost={activeTab === "A" ? "₹2,500" : "₹4,500–6,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Naga Heritage Village → Dzükou Valley Trek"
                items={[
                  "Naga Heritage Village (Kisama, 8 km from Kohima): 16 traditional Naga tribal house replicas in a single heritage complex. Each tribe's morung (men's dormitory), spears, skull trophies, traditional weaving, and architectural style are distinct. This is the Hornbill Festival venue — worth visiting even outside festival season.",
                  "State Museum (Kohima): The finest collection of Naga warrior artifacts in existence — traditional dress, headhunting implements, WWII memorabilia, tribal musical instruments. Allow 1.5 hours. Entry ₹20.",
                  "Kohima Cathedral: One of the largest cathedrals in Asia, reflecting Nagaland's majority Christian population. The architecture blends Naga traditional motifs with Christian iconography.",
                  activeTab === "A"
                    ? "Dzükou Valley day trek: Start by 8 AM for the 9 km one-way trek (3–4 hrs up, 2.5 hrs down). The path climbs 700m through sub-alpine meadows to the valley at 2,400m. Dzükou River, natural caves, and extraordinary views. Return to Kohima by evening. Trekking shoes are essential."
                    : "Dzükou Valley overnight option: Trek in the afternoon and stay at the forest rest house (₹200–400, basic). Wake up in the valley at dawn with no other trekkers. The morning light on the meadows is extraordinary. A guide from Kohima (₹800–1200) is recommended for overnight visits.",
                  "Local Naga dinner in Kohima: Try smoked pork with bamboo shoot (anishi), akhuni chutney with steamed rice, and Naga curry with local greens. Warn the restaurant about your chili tolerance — even 'mild' Naga food is fiery. Rice beer (zutho) is the traditional accompaniment.",
                ]}
                cost={activeTab === "A" ? "₹2,500" : "₹4,000–6,000"}
              />

              {/* ── Day 3 ── */}
              <DayCard
                day="Day 3"
                title="Touphema Village → Kohima Market → Depart"
                items={[
                  "Touphema Tourist Village (41 km from Kohima): An authentic Naga eco-village community that offers homestays and cultural experiences. Traditional longhouses, Naga cuisine, weaving demonstrations, and folk music. Even a half-day visit is worthwhile.",
                  "Kohima local market: The largest Naga chili (Bhut Jolokia / ghost pepper) market in India. Also: smoked meats, fermented bamboo shoots, akhuni (fermented soybean), local greens, handwoven Naga shawls (₹500–3000 depending on quality and tribe), and spears as souvenirs.",
                  activeTab === "A"
                    ? "Shared taxi back to Dimapur (₹400–600, 2 hrs) for your evening flight or onward train to Guwahati."
                    : "Private transfer back to Dimapur. If Hornbill Festival timing, consider extending 1–2 more days — the festival (December 1–10 at Kisama) is one of India's most extraordinary cultural events.",
                ]}
                cost={activeTab === "A" ? "₹2,000" : "₹3,000–5,000"}
              />
            </div>
          </section>

          {/* ── WWII HISTORY & CULTURE ── */}
          <section id="history" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚔️ WWII History &amp; Naga Culture</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Understanding these two layers makes Kohima infinitely more rewarding than just ticking off sights.
            </p>
            <div className="space-y-4">
              {[
                { title: "The Battle of Kohima (1944)", desc: "April–June 1944: Japanese forces besieged Kohima, attempting to cut off the Allied supply line to China and invade India through Assam. The siege was broken in brutal close-quarters combat. Victory here ended Japan's last major offensive in the Asian theatre. The Commonwealth War Graves Commission maintains 1,421 graves — many of soldiers in their teens and twenties.", emoji: "⚔️", color: "bg-amber-50 border-amber-200" },
                { title: "The Kohima Epitaph", desc: "The cemetery bears one of the most famous inscriptions in military history: 'When you go home, tell them of us and say, for your tomorrow, we gave our today.' Written by John Maxwell Edmonds in 1916, it was adopted specifically for Kohima. Stand in front of it alone if possible.", emoji: "📜", color: "bg-amber-50 border-amber-200" },
                { title: "The 16 Naga Tribes", desc: "Nagaland's 16 tribes are not merely cultural subdivisions — each has a distinct language, weaving pattern, headgear, architectural style, and oral tradition. The Angami (Kohima region), Ao, Lotha, Sumi, and Konyak (famous for tattooed headhunters) are among the most documented. The Hornbill Festival brings all 16 together.", emoji: "🏺", color: "bg-teal-50 border-teal-200" },
                { title: "Naga Headhunting Heritage", desc: "Headhunting was practiced by Naga tribes until the early 20th century — a ritualistic tradition tied to male coming-of-age, agricultural cycles, and spiritual protection. The Konyak tribe's last headhunters (now elderly) live near Mon, northern Nagaland. The practice ended with Christianization but the cultural memory is preserved in morungs and artifacts.", emoji: "💀", color: "bg-teal-50 border-teal-200" },
              ].map((h) => (
                <div key={h.title} className={`rounded-xl border p-5 ${h.color}`}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{h.emoji}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{h.title}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{h.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── HILLS IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="dzukou valley northeast india alpine meadow trekking"
              fallback="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80"
              alt="Dzükou Valley trekking trail in Nagaland sub-alpine meadows"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Dzükou Valley at 2,400m — 9 km trek from the trailhead. The Dzükou lily (Lilium nobilissimum) blooms July–August.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹8,000", color: "bg-amber-50 border-amber-200",
                  items: [["Flights (Guwahati–Dimapur)", "₹1,500–3,000"], ["Stay (2 nights)", "₹1,400–2,400"], ["Transport (local)", "₹1,200–2,000"], ["Meals (3 days)", "₹900–1,500"], ["ILP + entry fees", "₹200–500"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹8,000–20,000", color: "bg-teal-50 border-teal-200",
                  items: [["Flights (Delhi–Dimapur)", "₹4,000–8,000"], ["Stay (2 nights, tourism property)", "₹4,000–8,000"], ["Local guide (2 days)", "₹1,600–2,400"], ["Dzükou overnight", "₹500–1,000"], ["Meals + market shopping", "₹1,500–3,000"]] },
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
              * All prices per person. During Hornbill Festival (Dec 1–10), accommodation costs 2–3x normal rates and must be booked 3 months ahead. Entry to Hornbill Festival: ₹200–500/day.
            </p>
          </section>

          <AffiliateBlock destination="Kohima" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Arriving without an ILP", desc: "Police checkpoints between Dimapur and Kohima are serious. Get your Inner Line Permit from nagalanditr.com before you travel. ₹100, instant, valid 15 days. Don't risk a fine and turning back.", icon: "📜" },
                { title: "Skipping the War Cemetery", desc: "Every visitor to Kohima should spend at least an hour at the War Cemetery. It's one of the most moving places in India and the historical context transforms every other experience in the city.", icon: "⚔️" },
                { title: "Treating Dzükou as a casual walk", desc: "The 9 km trek has a 700m elevation gain. Wear proper trekking shoes (not sandals or sneakers), carry 2 litres of water, and start by 8 AM to complete the return in daylight. The descent is particularly slippery in wet weather.", icon: "🥾" },
                { title: "Being timid about Naga food", desc: "Naga cuisine is extraordinary — don't stick to 'safe' Indian options. The smoked pork with bamboo shoot, akhuni chutney, and rice is one of the most distinctive food experiences in all of India. Tell the restaurant your spice level honestly.", icon: "🌶️" },
                { title: "Visiting during July–August without planning", desc: "July–August is Dzükou lily season but also heavy monsoon. The trek becomes genuinely slippery. Roads can close. The War Cemetery is less accessible. Go October–April or December for Hornbill.", icon: "🌧️" },
                { title: "Not hiring a local guide for cultural sites", desc: "The Naga Heritage Village and local markets need context. A local guide (₹800–1200/day) transforms the experience from looking at artifacts to understanding living culture. Many are from the tribes whose heritage they explain.", icon: "🧭" },
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
                { icon: "📜", title: "ILP (Inner Line Permit) is Mandatory", desc: "Non-Nagaland Indian citizens need an Inner Line Permit to enter Nagaland. Get it online at nagalanditr.com (₹100, available instantly) or at Dimapur entry checkpoint. Foreigners need additional RAP (Restricted Area Permit). Don't enter without ILP — police checks are thorough.", color: "bg-amber-50 border-amber-200" },
                { icon: "⚔️", title: "Battle of Kohima Context", desc: "In April–June 1944, Japanese forces besieged Kohima in an attempt to invade India through Burma. The Allied defense on the tennis court was the turning point of the entire Asia-Pacific war. The famous Kohima Epitaph: 'When you go home, tell them of us and say, for your tomorrow, we gave our today.'", color: "bg-amber-50 border-amber-200" },
                { icon: "🌶️", title: "Naga Chili: Bhut Jolokia", desc: "The Bhut Jolokia (ghost pepper) from Nagaland is one of the world's hottest chilies (1,000,000+ Scoville units). Naga cuisine uses it in everything. Tell restaurants your heat tolerance. Even 'mild' Naga food is very spicy by Indian standards.", color: "bg-teal-50 border-teal-200" },
                { icon: "🎺", title: "Hornbill Festival (December 1–10)", desc: "The annual Naga cultural festival showcases all 16 Naga tribes simultaneously: folk dances, traditional games, morungs, rock music competition, and Naga food. It's the most accessible window into Naga culture. Book flights and hotels 3 months ahead.", color: "bg-teal-50 border-teal-200" },
                { icon: "🥾", title: "Dzükou Valley Trek", desc: "The 9 km trek (one way) to Dzükou Valley (2,400m) passes through some of Northeast India's finest sub-alpine meadows. The valley has a river, natural cave, and Dzükou lily (blooms July–August). Stay overnight in the forest rest house for the full experience.", color: "bg-rose-50 border-rose-200" },
                { icon: "🍖", title: "Naga Food Guide", desc: "Must-tries: smoked pork with bamboo shoot (anishi), steamed rice with akhuni chutney, Naga curry with local greens, and rice beer (zutho). The Kohima local market sells all ingredients — go early for the freshest produce.", color: "bg-rose-50 border-rose-200" },
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
              We&apos;ll handle your ILP, book the accommodation, arrange local guides, and send your full Kohima itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Kohima Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Is Nagaland safe for tourists?", a: "Kohima and the main tourist areas are safe. The Northeast has complex history, but tourist violence is extremely rare. Local communities are generally welcoming. Avoid restricted areas near the Myanmar border (NAC zones) unless you have specific permits. The Nagaland government actively promotes tourism." },
                { q: "When is the Hornbill Festival and how do I attend?", a: "Hornbill Festival runs December 1–10 every year at Kisama Heritage Village (12 km from Kohima). Entry: ₹200–500/day. Features all 16 Naga tribes' cultural performances. Book accommodation in Kohima 3 months ahead — rooms fill completely. December is also the most pleasant time weather-wise." },
                { q: "What is the ILP (Inner Line Permit) and where do I get it?", a: "The ILP is required for all non-Nagaland Indian citizens entering Nagaland. Get it online at nagalanditr.com (₹100, valid 15 days, instant). You can also get it at Dimapur airport/railway station entry points. Foreign tourists need an additional RAP from the Ministry of Home Affairs." },
                { q: "How hard is the Dzükou Valley trek?", a: "Moderate difficulty. The 9 km path (one way) has a 700m elevation gain. It takes 3–4 hours up and 2.5 hours down. The terrain is rocky, with a steep final climb. Good trekking shoes essential. Guides available in Kohima (₹800–1200/day). July–August: the Dzükou lily blooms. June–July: excellent views but trail can be slippery." },
                { q: "What is unique about Naga cuisine?", a: "Naga food is unlike any other Indian regional cuisine — heavy use of smoked meats (pork, beef, dog), fermented ingredients (akhuni soybean, bamboo shoot), Bhut Jolokia chilies, and boiled/steamed preparation (not oily). It's protein-heavy and deeply umami. Most Nagas are Christian, so beef and pork are common (unlike much of India)." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Kohima — Highlights"
            subtitle="The best of Kohima in photos."
            spots={[
              { name: "Kohima Landscape", query: "kohima india landscape scenic beautiful travel", desc: "The stunning landscapes of Kohima." },
              { name: "Kohima Temple", query: "kohima temple architecture heritage india", desc: "Historic temples and architecture in Kohima." },
              { name: "Kohima Street Scene", query: "kohima street market local culture india", desc: "Local life and culture in Kohima." },
              { name: "Kohima Nature", query: "kohima nature hills forest river india", desc: "Natural beauty around Kohima." },
              { name: "Kohima Sunset", query: "kohima sunset golden hour india travel", desc: "Kohima at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Explore More Northeast India</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Guwahati — 2-Day Gateway Guide", href: "/blog/guwahati-2-days" },
                { label: "Kaziranga — One-Horned Rhino Safari", href: "/blog/kaziranga-3-days" },
                { label: "Imphal — Manipur History & Culture", href: "/blog/imphal-3-days" },
                { label: "Browse All Northeast India Guides", href: "/#packages" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="kohima-3-days" />
          <RelatedGuides currentSlug="kohima-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
