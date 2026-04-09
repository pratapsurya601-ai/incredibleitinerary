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

const GUWAHATI_TOC = [
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Guwahati 2-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Guwahati in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function GuwahatiClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹4k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹4k–10k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={GUWAHATI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Guwahati" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="kamakhya temple guwahati assam hilltop shrine brahmaputra"
            fallback="https://images.unsplash.com/photo-1518639192441-5b9e9eea7faf?w=1600&q=85"
            alt="Kamakhya Temple on Nilachal Hill Guwahati Assam with Brahmaputra in the background"
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
              <span className="text-white/70">Guwahati 2 Days</span>
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
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Guwahati in 2 Days: Kamakhya Temple,
                <em className="italic text-gold-light"> Brahmaputra &amp; Northeast Gateway</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                India&apos;s most powerful tantric temple. A river so wide you can&apos;t see the other bank. Golden langurs on a mid-river island. Guwahati is the Northeast India most people never take seriously enough.
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
              <span>🇮🇳 Assam</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹2,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Kamakhya is the only temple in India where the goddess&apos;s menstruation is celebrated as a festival. Thousands of tantric practitioners gather. The temple closes for 3 days, then reopens. Whatever your beliefs, walking those stone steps at dawn changes something.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Guwahati is where most Northeast India journeys begin — and most travellers spend as little time here as possible, rushing to Shillong or Kaziranga. That&apos;s a mistake. 2 days in Guwahati gives you Kamakhya (one of India&apos;s most powerful Shakti temples), Umananda Island (golden langurs on the Brahmaputra), the Ahom dynasty&apos;s finest museum, and Assam&apos;s singular Muga silk. It&apos;s worth slowing down for.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌿" label="Best Season" value="Oct–Apr" />
            <StatCard icon="🛕" label="Kamakhya Ambubachi" value="June (most sacred)" />
            <StatCard icon="🚗" label="Distance from Shillong" value="100 km" />
            <StatCard icon="⭐" label="Rating" value="4.5★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Guwahati is a year-round city but climate and the Kamakhya festival calendar matter.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Mar", emoji: "✅", title: "Best Season", desc: "Cool, dry, and comfortable (12–26°C). Ideal for temple visits, river cruises, and museum days. Winter mornings bring mist over the Brahmaputra — atmospheric and beautiful.", color: "bg-emerald-50 border-emerald-200" },
                { season: "June", emoji: "🛕", title: "Ambubachi Mela", desc: "The Kamakhya Ambubachi festival — celebrating the goddess's annual menstruation — draws hundreds of thousands of pilgrims and tantric practitioners. Extraordinary if you can handle the crowds. Plan 3 months ahead for accommodation.", color: "bg-amber-50 border-amber-200" },
                { season: "Apr–Sep", emoji: "🌧️", title: "Hot & Monsoon", desc: "April–May gets hot (32–38°C). June–September brings the monsoon — Brahmaputra flooding is real and significant. Infrastructure can be disrupted. Not ideal but manageable with planning.", color: "bg-red-50 border-red-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 2-day Guwahati itinerary, two comfort levels. Most sights have very low or no entry fees.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Guesthouse near Fancy Bazaar (₹700–1200)</td><td className="py-2.5 px-4">Hotel near GS Road (₹2000–4000)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Local bus + auto-rickshaw</td><td className="py-2.5 px-4">Private car for Kamakhya + Brahmaputra</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Food</td><td className="py-2.5 px-4">Local Assamese dhabas</td><td className="py-2.5 px-4">Brahmaputra dinner cruise</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (2 days)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹4,000</td><td className="py-2.5 px-4 font-medium text-teal">₹4,000–10,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Fly in → Kamakhya Temple → Brahmaputra sunset cruise. Day 2: Umananda Island → Assam State Museum → Kalakshetra → Fancy Bazaar shopping.
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
                title="Kamakhya Temple + Brahmaputra Sunset Cruise"
                items={[
                  "Fly into Guwahati (LGBI Airport — the major Northeast hub, connected to Delhi, Mumbai, Kolkata, Chennai, and all Northeast state capitals). Or arrive by overnight train from Kolkata (Kamrup Express, 17 hrs) or Delhi (via Dibrugarh Town Express).",
                  activeTab === "A"
                    ? "Check in to a guesthouse near Fancy Bazaar (₹700–1200/night) — the commercial heart of Guwahati, close to the Brahmaputra ghats and ferry services."
                    : "Check in to a hotel near GS Road (₹2,000–4,000/night) — Guwahati's modern commercial strip with better restaurants and easier access to a private car.",
                  "Kamakhya Temple (Nilachal Hill, 8 km from city centre): the most powerful of India's 51 Shakti Peethas. The temple enshrines the yoni (womb) of Sati — no idol, just a naturally occurring rock cleft draped in red cloth. The Ambubachi Mela (June) celebrates the goddess's annual menstruation — one of India's most unusual and powerful festivals. Non-Hindus can visit the outer areas but not the inner sanctum.",
                  "Allow 2–3 hours at Kamakhya. The queue for the inner sanctum can stretch 2–3 hours. Go early (7–8 AM) or book VIP darshan (₹300) to bypass the queue. The hilltop has multiple subsidiary shrines, each significant in different tantric traditions.",
                  "Evening: Brahmaputra Cruise from Kachari Ghat (₹200–400, 1.5 hrs sunset cruise). At Guwahati the Brahmaputra is 1–1.5 km wide — at your eye level it feels endless. The sunset reflected in the river is one of India's great civic spectacles.",
                  activeTab === "B"
                    ? "Comfortable option: Book the Brahmaputra dinner cruise from Uzanbazar Ghat (₹600–1,200 including dinner) — floating restaurants with live Bihu music on weekends."
                    : "After the cruise: dinner at a local Assamese restaurant near Fancy Bazaar — try masor tenga (sour fish curry with tomato and lemon), duck curry, or bamboo shoot dishes.",
                ]}
                cost={activeTab === "A" ? "₹2,000" : "₹4,000–6,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Umananda Island + Museums + Silk Shopping"
                items={[
                  "Umananda Temple ferry from Fancy Bazaar Ghat (₹50 return, 10-minute crossing). Umananda is described as the smallest inhabited river island in the world — a rocky outcrop in the middle of the Brahmaputra with a Shiva temple at its centre.",
                  "The golden langur (Trachypithecus geei) — one of India's most endangered primates — inhabits Umananda's rock faces. The troop is often visible from the ferry approach. Striking: bright golden fur, black face. A wildlife encounter in the middle of a major city river.",
                  "Assam State Museum (1 hr) — exceptional collection of Ahom dynasty artifacts, stone sculptures from the Kamrupa kingdom, and tribal art. One of Northeast India's best museums. Entry ₹10. Closed Mondays.",
                  "Srimanta Sankardeva Kalakshetra (12 acres of Assamese cultural heritage). A complex dedicated to the 15th-century saint-reformer who founded Vaishnavism in Assam, revolutionised Sattriya dance and theatre, and created the first Assamese literature. Museums of tribal heritage, traditional weaving (watch handloom weavers), gallery of Assam's 5 riverine communities. Entry ₹25. Open Tuesday–Sunday, 10 AM–5 PM.",
                  activeTab === "A"
                    ? "Afternoon: Fancy Bazaar for Muga silk shopping. Assam's unique Muga silk (natural golden colour, more durable than regular silk) is available at Fancy Bazaar shops. A mekhela-chadar (traditional Assamese dress set) costs ₹1,500–6,000 depending on silk grade."
                    : "Afternoon: Sualkuchi (30 km from Guwahati, 45 min — the silk-weaving hub of Assam) for a direct-from-loom Muga silk shopping experience. Prices 20–30% lower than Guwahati shops. Watch weavers on traditional handlooms.",
                  "Guwahati Planetarium (near the museum complex) — worth a visit if it's running a show (₹30, check schedule). India's only planetarium with a Zeiss projector.",
                ]}
                cost={activeTab === "A" ? "₹2,000" : "₹4,000–6,000"}
              />
            </div>
          </section>

          {/* ── TEMPLE GUIDE ── */}
          <section id="temples" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🛕 Guwahati Temple Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Guwahati sits at the confluence of Hindu, tantric, and Vaishnavite traditions. Each major temple is theologically distinct.
            </p>
            <div className="space-y-4">
              {[
                { rank: "Kamakhya Temple", icon: "🛕", where: "Nilachal Hill, 8 km from city", price: "Free entry (VIP darshan ₹300)", note: "The most powerful of the 51 Shakti Peethas. No idol — just a naturally occurring rock cleft representing the goddess's yoni. Non-Hindus welcome in outer areas. Queue: 2–3 hours (bypass with VIP darshan). Go early (7–8 AM). Adjacent Bhairav temple performs goat sacrifice — the atmosphere is extraordinary and unlike any other temple in India.", color: "bg-amber-50 border-amber-200" },
                { rank: "Umananda Temple", icon: "🌊", where: "Mid-river island, Brahmaputra", price: "Ferry ₹50 return from Fancy Bazaar Ghat", note: "Shiva temple on a river island described as the smallest inhabited river island in the world. Accessible only by ferry. The golden langur troop on the rocks is the wildlife highlight. The 10-minute ferry crossing is itself scenic. Open daily, 6 AM–5 PM.", color: "bg-amber-50 border-amber-200" },
                { rank: "Navagraha Temple", icon: "⭐", where: "Chitrachal Hill", price: "Free entry", note: "Temple of the nine planetary deities (navagraha) — unique in India for housing all nine in a single shrine complex. The hilltop position gives views over Guwahati city and the Brahmaputra. Quieter than Kamakhya and often missed by tourists.", color: "bg-teal-50 border-teal-200" },
                { rank: "Vasishtha Ashram", icon: "🌿", where: "North Guwahati (across the river)", price: "Free entry", note: "The ashram of sage Vasishtha on the bank of three streams (triveni) in a forest setting 18 km from the city. Sacred bathing tanks, quiet forest path, peacocks. Good half-hour detour if you cross to the north bank.", color: "bg-teal-50 border-teal-200" },
              ].map((f) => (
                <div key={f.rank} className={`rounded-xl border p-5 ${f.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{f.icon}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{f.rank}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{f.where} · {f.price}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{f.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── HERO IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="brahmaputra river guwahati assam sunset wide river"
              fallback="https://images.unsplash.com/photo-1518639192441-5b9e9eea7faf?w=900&q=80"
              alt="Brahmaputra River at sunset from Guwahati"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Brahmaputra at Guwahati: 1–1.5 km wide, one of the world&apos;s great rivers. The sunset cruise is one of the finest things you can do for ₹200 in all of India.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹4,000", color: "bg-amber-50 border-amber-200",
                  items: [["Accommodation (2 nights)", "₹1,400–2,400"], ["Local transport", "₹400–600"], ["Entry fees", "₹100–200"], ["Food (2 days)", "₹600–1,000"], ["Brahmaputra cruise", "₹200–400"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹4,000–10,000", color: "bg-teal-50 border-teal-200",
                  items: [["Hotel GS Road (2 nights)", "₹4,000–8,000"], ["Private car (2 days)", "₹2,000–3,500"], ["Brahmaputra dinner cruise", "₹1,200–2,400"], ["Silk shopping (Sualkuchi)", "₹1,500–6,000"], ["Entry fees", "₹200–400"]] },
              ].map((b) => (
                <div key={b.plan} className={`rounded-xl border p-5 ${b.color}`}>
                  <div className="text-center mb-4">
                    <span className="text-2xl">{b.emoji}</span>
                    <p className="font-serif text-base text-ink mt-1">{b.plan}</p>
                    <p className="font-serif text-xl text-ink font-medium mt-1">{b.total}</p>
                    <p className="text-xs text-muted uppercase tracking-wider">per person (2 days)</p>
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
              * Does not include flights or train travel to/from Guwahati. Kamakhya Temple and Umananda Temple entry is free. VIP darshan at Kamakhya (₹300) saves 2+ hours of queuing and is recommended.
            </p>
          </section>

          <AffiliateBlock destination="Guwahati" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Treating Guwahati as just a transit city", desc: "Most Northeast visitors spend one rushed night in Guwahati and leave. 2 full days covers Kamakhya, Umananda, the Brahmaputra, and the Kalakshetra. The city is genuinely worth the time.", icon: "🏙️" },
                { title: "Arriving at Kamakhya without VIP darshan in peak season", desc: "On weekends and festivals, the Kamakhya queue can be 3–4 hours long. VIP darshan (₹300) bypasses the queue entirely. Worth every rupee. Book at the temple counter on arrival.", icon: "🛕" },
                { title: "Skipping the Umananda ferry", desc: "The golden langur is one of India's rarest primates and you can see it from a ₹50 ferry in the middle of a city river. Most tourists don't know this. Don't be that tourist.", icon: "🌊" },
                { title: "Missing the Kalakshetra", desc: "Srimanta Sankardeva Kalakshetra is one of the finest cultural museums in Northeast India and barely known. The traditional weaving section alone — watch artisans on handlooms producing Muga silk — is worth 45 minutes.", icon: "🏛️" },
                { title: "Not budgeting time for the Brahmaputra", desc: "The sunset cruise on the Brahmaputra is ₹200–400 and one of the finest things you can do in all of Northeast India. Don't fill your Day 1 schedule so tightly that you miss the 5 PM departure.", icon: "🌊" },
                { title: "Buying Muga silk from airport shops", desc: "Muga silk at Guwahati airport costs 40–60% more than Fancy Bazaar or Sualkuchi. Buy from the weaving cooperative at Kalakshetra or directly from Sualkuchi if you want both authenticity and price.", icon: "🧵" },
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
                { icon: "🛕", title: "Kamakhya Temple: What Non-Hindus Can See", desc: "The inner sanctum (the rock cleft representing the goddess's yoni) is restricted to Hindus. Non-Hindus can visit the outer temple, the Nilachal Hill viewpoint, and the processional path. The atmosphere — thousands of devotees, incense, marigolds, goat sacrifice at the Bhairab temple — is extraordinary.", color: "bg-amber-50 border-amber-200" },
                { icon: "🦁", title: "Golden Langurs at Umananda", desc: "The golden langur (Trachypithecus geei) is one of India's most endangered primates, found only in western Assam. Umananda Island's resident troop can often be spotted on the ferry approach. Striking — bright golden fur, black faces.", color: "bg-amber-50 border-amber-200" },
                { icon: "🌊", title: "Brahmaputra at Guwahati", desc: "At Guwahati, the Brahmaputra is 1–1.5 km wide. Sunset cruises from Kachari Ghat or the floating restaurants at Uzanbazar Ghat offer views of both banks and the islands. Book the cruise for 5 PM to catch the golden hour.", color: "bg-teal-50 border-teal-200" },
                { icon: "🎭", title: "Ambubachi Mela: June", desc: "Kamakhya's annual Ambubachi festival celebrates the goddess's annual menstruation (June, 3–4 days). Tens of thousands of pilgrims and tantric practitioners gather. The temple closes for 3 days; on the 4th day it reopens with extraordinary fervour. Plan around it or specifically for it.", color: "bg-teal-50 border-teal-200" },
                { icon: "🛍️", title: "Assam Silk: Muga Gold", desc: "Guwahati's Fancy Bazaar and Sualkuchi (30 km, the silk-weaving hub) sell Assam's unique Muga silk — natural golden colour, extremely durable, more valuable than regular silk. Prices: ₹1,500–6,000 for a mekhela-chadar (traditional Assamese dress set).", color: "bg-rose-50 border-rose-200" },
                { icon: "🚌", title: "Guwahati as Northeast Gateway", desc: "All Northeast states are accessible from Guwahati: Shillong (2 hrs), Kaziranga (2.5 hrs), Cherrapunji (3.5 hrs), Dibrugarh (7 hrs/45 min fly), Imphal (45 min fly), Kohima (6 hrs). Plan your Northeast India routing through Guwahati.", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Planning a Northeast India Trip?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates and interests — we&apos;ll send a personalised Northeast India itinerary routing through Guwahati within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Northeast Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What is Kamakhya Temple famous for?", a: "Kamakhya is one of India's most powerful tantric temples and the most important of the 51 Shakti Peethas (sites where Sati's body parts fell). The sanctum enshrines a rock cleft representing the goddess's yoni — there is no statue. The temple celebrates the goddess's menstruation (Ambubachi Mela, June), making it unique in world religions. Tantric practices including animal sacrifice are performed here." },
                { q: "Is Guwahati safe for tourists?", a: "Yes — Guwahati is Assam's capital and a major commercial city. Tourist areas (Fancy Bazaar, Kamakhya Hill, Brahmaputra ghats) are safe. Standard urban precautions apply. Assam's political situation has been stable in recent years; check advisories before travel." },
                { q: "How do I get an ILP (Inner Line Permit) for Northeast states from Guwahati?", a: "If traveling to Arunachal Pradesh, Nagaland, Mizoram, or Manipur from Guwahati, you need an ILP. For Nagaland and Manipur: get online at respective state portals. For Arunachal Pradesh: apply at Commissioner's Office, Guwahati (1–2 days processing). Meghalaya, Sikkim, and Assam itself don't require ILP for Indians." },
                { q: "What is Srimanta Sankardeva Kalakshetra?", a: "A 12-acre cultural complex dedicated to the 15th-century Assamese saint-reformer Srimanta Sankardeva, who revolutionized Assamese society through Vaishnavism, literature, and Sattriya dance/theatre. The complex includes a museum of Assamese tribal heritage, performance venues, traditional weaving units, and galleries of Assam's 5 major riverine communities. Open Tuesday–Sunday, 10 AM–5 PM, ₹25 entry." },
                { q: "How many days should I spend in Guwahati?", a: "1–2 days is ideal if using Guwahati as a transit hub for Northeast travel. 2 full days covers Kamakhya, Umananda, the Brahmaputra cruise, and the cultural museums. Don't try to see everything in one day — Kamakhya queue alone can take 2–3 hours during peak times." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Guwahati — Highlights"
            subtitle="The best of Guwahati in photos."
            spots={[
              { name: "Guwahati Landscape", query: "guwahati india landscape scenic beautiful travel", desc: "The stunning landscapes of Guwahati." },
              { name: "Guwahati Temple", query: "guwahati temple architecture heritage india", desc: "Historic temples and architecture in Guwahati." },
              { name: "Guwahati Street Scene", query: "guwahati street market local culture india", desc: "Local life and culture in Guwahati." },
              { name: "Guwahati Nature", query: "guwahati nature hills forest river india", desc: "Natural beauty around Guwahati." },
              { name: "Guwahati Sunset", query: "guwahati sunset golden hour india travel", desc: "Guwahati at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Continuing Your Northeast India Journey?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Shillong — 3 Days in the Scotland of the East", href: "/blog/shillong-3-days" },
                { label: "Kaziranga — 3 Days with the One-Horned Rhino", href: "/blog/kaziranga-3-days" },
                { label: "Mawlynnong — Asia's Cleanest Village", href: "/blog/mawlynnong-2-days" },
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

          <CombineWith currentSlug="guwahati-2-days" />
          <RelatedGuides currentSlug="guwahati-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
