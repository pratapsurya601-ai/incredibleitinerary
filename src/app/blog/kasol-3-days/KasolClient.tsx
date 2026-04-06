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

const KASOL_TOC = [
  { id: "decision",    emoji: "⚡", label: "Which Plan Are You?" },
  { id: "valley",      emoji: "🏔️", label: "Parvati Valley Map" },
  { id: "itineraries", emoji: "📅", label: "The Itineraries" },
  { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
  { id: "trek",        emoji: "🥾", label: "Kheerganga Trek" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Kasol %26 Kheerganga 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Kasol %26 Kheerganga in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function KasolClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">("B");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹5k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🎒", label: "Backpacker", sub: "₹5k–12k", color: "border-emerald-300 bg-emerald-50 text-emerald-800" },
    { id: "C" as const, emoji: "🏡", label: "Comfortable", sub: "₹10k–20k", color: "border-sky-300 bg-sky-50 text-sky-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KASOL_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Kasol & Kheerganga" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="kasol parvati valley himachal mountains river india"
            alt="Parvati Valley mountains and river near Kasol Himachal Pradesh"
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
              <span className="text-white/70">Kasol & Kheerganga</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Mountain & Trek
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Kasol & Kheerganga in 3 Days
                <em className="italic text-gold-light"> (Budget to Comfortable, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3 complete plans with real trek timings, actual costs, cafe picks — and why Tosh might be the better base.
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
              <span>💰 From ₹4,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Kasol is India&apos;s backpacker capital and it&apos;s not subtle about it — Israeli cafes, trance music, and the Parvati River running through it all. This guide gets you past the main street tourist trap and into the valley that actually earns the hype.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your style — jump straight to your itinerary.</p>
            <div className="grid grid-cols-3 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} →</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── PARVATI VALLEY MAP ── */}
          <section id="valley" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏔️ Understanding Parvati Valley</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Everything in this guide is strung along one river — the Parvati. Know the layout and you won&apos;t waste time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Lower Valley (Easy Access)", emoji: "🏘️", bg: "bg-emerald-50 border-emerald-200", th: "text-emerald-800",
                  rows: [["Kasol","Main backpacker hub, cafes, market"],["Chalal","20-min walk from Kasol along river"],["Manikaran","Gurudwara, hot springs, 4km from Kasol"],["Jari","Junction town, gateway to Malana"]],
                  note: "The walk from Kasol to Chalal (20 min along the river) is the best free activity in the entire valley." },
                { title: "Upper Valley (Worth the Climb)", emoji: "⛰️", bg: "bg-sky-50 border-sky-200", th: "text-sky-800",
                  rows: [["Tosh","Quieter village, stunning views, 30 min up"],["Barshaini","Road head, Kheerganga trek starts here"],["Kheerganga","Hot springs at 3,050m, 12km trek"],["Malana","Ancient village, strict customs, day trip"]],
                  note: "Tosh is better than Kasol now — quieter, better views, 30 minutes up the hill. Go before it gets as crowded as Kasol." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/80 w-20 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">💡 {area.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Smart move:</strong> Base yourself in Kasol for Day 1, then move up to Tosh or do Kheerganga. The valley rewards you the higher you go — fewer tourists, better views, cleaner air.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Duration" value="3 Days" />
            <StatCard icon="💰" label="Budget From" value="₹4,500" />
            <StatCard icon="🌡" label="Best Months" value="Mar–Jun, Sep–Nov" />
            <StatCard icon="🏔️" label="Peak Altitude" value="3,050m" />
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

            {/* ── PLAN A: Budget ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">💰</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Kasol Base (Dorm Beds & Dhabas)</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Hostels / dorm beds · ₹300–₹600/night · All meals at dhabas</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Arrive, Explore Kasol & Chalal"
                  items={[
                    "Overnight bus from Delhi arrives Bhuntar by 8am. Local bus to Kasol ₹50 (1hr). Don't take a taxi unless you're splitting with others.",
                    "Check into hostel — Hosteller Kasol or similar dorm (₹300–₹600/night). Drop bags, eat.",
                    "Late morning: Walk along Kasol main market. Grab a falafel plate at one of the Israeli cafes — ₹150–₹200.",
                    "Afternoon: Walk to Chalal village (20 min along the Parvati River). The trail starts behind the market. No map needed, follow the river.",
                    "Chalal has quieter cafes and riverside spots. Spend 2–3 hours here. Lunch at a riverside cafe ₹100–₹200.",
                    "Evening: Walk to Manikaran (4km, 45 min walk or ₹20 bus). Visit Manikaran Sahib Gurudwara — free langar dinner. Hot springs are right there.",
                    "Walk back or hitch a ride. Early sleep — Kheerganga tomorrow."
                  ]}
                  cost="₹600–₹1,000 (excluding bus to Kasol)" />
                <DayCard day="Day 2" title="Kheerganga Trek (The Main Event)"
                  items={[
                    "5:30am wake up. Pack light — 1 change of clothes, water (2L), snacks, rain jacket.",
                    "Bus to Barshaini from Kasol (₹30, 45 min). Trek starts from Barshaini.",
                    "12km trek to Kheerganga — 5–7 hours depending on pace. Two routes: via Nakthan (easier, longer) or via Kalga (steeper, shorter).",
                    "Trail has chai stops every 2–3km — Maggi ₹50, chai ₹20. Don't carry too much food.",
                    "Reach Kheerganga by 2–3pm. The hot springs at the summit are real — natural hot water at 3,050m after a 12km hike. It's earned.",
                    "Camp overnight — tent rental ₹300–₹500, or basic room ₹400–₹600. Dinner at campsite ₹150–₹250.",
                    "Sunset from Kheerganga meadow is unforgettable. Stars at night with zero light pollution."
                  ]}
                  cost="₹800–₹1,400 (transport + food + camping)" />
                <DayCard day="Day 3" title="Descend, Tosh Visit & Depart"
                  items={[
                    "6am: Sunrise soak in the hot springs. Worth waking up for.",
                    "7:30am: Start descent. Takes 3–4 hours back to Barshaini.",
                    "From Barshaini, take shared auto to Tosh (₹20, 15 min). Tosh village — 30 minutes of wandering, mountain views on all sides.",
                    "Lunch in Tosh — one of the cafes with valley views. ₹150–₹250.",
                    "Back to Kasol by 3pm. Collect bags, last walk through market.",
                    "4–5pm bus from Kasol to Bhuntar, then overnight Volvo back to Delhi."
                  ]}
                  cost="₹500–₹800" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) · </span>
                  <span className="font-serif text-base text-ink font-light">₹3,500–₹5,000 excluding Delhi–Kasol transport</span>
                </div>
              </div>
            )}

            {/* ── PLAN B: Backpacker ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-6">
                  <span className="text-2xl">🎒</span>
                  <div>
                    <p className="text-sm font-medium text-emerald-800">Backpacker Plan — Kasol + Tosh Base</p>
                    <p className="text-xs text-emerald-600 font-light">Stay: Private guesthouse rooms · ₹800–₹1,500/night · Cafe meals</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Kasol Immersion + Chalal + Manikaran"
                  items={[
                    "Arrive Bhuntar, taxi to Kasol ₹800–₹1,000 (split with fellow travellers for ₹200 each).",
                    "Check into guesthouse — private room with river view ₹800–₹1,500/night.",
                    "Brunch at Evergreen Cafe or Jim Morrison Cafe — shakshuka, hummus plate, coffee. ₹300–₹500.",
                    "Walk to Chalal (20 min) — the trail along the Parvati River is genuinely beautiful. No rush.",
                    "Chalal village: riverside cafes, hammocks, afternoon spent doing nothing productive.",
                    "4pm: Walk or bus to Manikaran Sahib. Gurudwara visit, hot springs, free langar if timing works.",
                    "Dinner back in Kasol — try Moon Dance Cafe or Little Italy. Israeli–Indian fusion. ₹400–₹600.",
                    "Night walk along Kasol riverside — the sound of the Parvati is the best thing about this town."
                  ]}
                  cost="₹1,500–₹2,500" />
                <DayCard day="Day 2" title="Kheerganga Trek — Full Day"
                  items={[
                    "6am departure. Taxi to Barshaini ₹600–₹800 (split with others).",
                    "Trek starts 7am from Barshaini. Take the Nakthan route up — more gradual, better forest cover.",
                    "Chai stops along the way — Maggi + chai ₹80. Budget 3 stops.",
                    "Reach Kheerganga by 1–2pm. Drop bags at a proper tent camp — ₹500–₹800 with mattress and blankets.",
                    "Hot springs — two pools, one hotter than the other. The top pool is less crowded. Soak earned.",
                    "Afternoon: Explore the Kheerganga meadow. Walk to the Shiva temple at the far end.",
                    "Dinner at camp — dal rice, roti sabzi. Simple and warm. ₹200–₹350.",
                    "Night: No phone signal, no wifi. Stars and campfire conversations."
                  ]}
                  cost="₹1,800–₹3,000 (transport + food + camping)" />
                <DayCard day="Day 3" title="Descend to Tosh + Valley Exploration"
                  items={[
                    "Sunrise hot spring soak. Breakfast at camp ₹150–₹250.",
                    "8am: Descend via Kalga route (different from the way up — steeper but faster, 3 hours).",
                    "Auto to Tosh from Barshaini (₹20). Tosh has the best mountain views in the entire valley.",
                    "Extended lunch at a Tosh cafe with Himalayan views — ₹300–₹500. This is the real Kasol experience.",
                    "Walk around Tosh village — traditional Himachali wooden houses, apple orchards, zero crowds.",
                    "3pm: Back to Kasol. Quick market walk — pick up Kullu shawls, local honey, dried fruit.",
                    "Evening bus from Kasol or Bhuntar back to Delhi."
                  ]}
                  cost="₹1,200–₹2,000" />
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-emerald-700 uppercase tracking-wide">Total 3-Day Cost (solo) · </span>
                  <span className="font-serif text-base text-ink font-light">₹7,000–₹12,000 excluding Delhi–Kasol transport</span>
                </div>
              </div>
            )}

            {/* ── PLAN C: Comfortable ── */}
            {activeTab === "C" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-sky-50 border border-sky-200 rounded-xl mb-6">
                  <span className="text-2xl">🏡</span>
                  <div>
                    <p className="text-sm font-medium text-sky-800">Comfortable Plan — Best Stays + Guided Trek</p>
                    <p className="text-xs text-sky-600 font-light">Stay: Boutique guesthouses · ₹2,000–₹4,000/night · Restaurant dining + guided trek</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Kasol + Tosh + Valley Cafes"
                  items={[
                    "Private taxi from Bhuntar (or Chandigarh if flying) — ₹1,500–₹3,000 depending on pickup point.",
                    "Check into a boutique guesthouse in Kasol or Tosh — river-facing room, hot water, good bedding. ₹2,000–₹4,000/night.",
                    "Late breakfast at one of Kasol's top cafes — Evergreen or German Bakery. Proper coffee, fresh bread. ₹400–₹600.",
                    "Drive up to Tosh (30 min). Walk the village, photograph traditional Himachali architecture.",
                    "Lunch in Tosh — Pink Floyd Cafe or Boom Shiva Cafe. Valley views with your meal. ₹500–₹700.",
                    "Afternoon: Chalal village walk from Kasol (20 min). Riverside, zero effort, maximum peace.",
                    "Evening: Manikaran Sahib visit — the hot springs and Gurudwara are worth seeing regardless of budget.",
                    "Dinner at a Kasol restaurant — wood-fired pizza, Israeli thali, or Himachali trout. ₹600–₹900."
                  ]}
                  cost="₹3,500–₹6,000" />
                <DayCard day="Day 2" title="Guided Kheerganga Trek"
                  items={[
                    "Guided trek option — local guide ₹1,500–₹2,500/day. They know the shortcuts and carry extra water.",
                    "Private taxi to Barshaini trailhead ₹1,000–₹1,200.",
                    "Trek with guide — better pace management, local stories, hidden viewpoints off the main trail.",
                    "Premium camp at Kheerganga — proper tent with sleeping bag, hot meals included. ₹1,500–₹2,500.",
                    "Hot springs in the afternoon — the guide knows the quieter pool times.",
                    "Dinner at camp — thali + chai. Camp bonfire in the evening.",
                    "Night camping at 3,050m. Clear skies, Milky Way visible on moonless nights."
                  ]}
                  cost="₹5,000–₹8,000 (guide + transport + premium camp)" />
                <DayCard day="Day 3" title="Descend + Malana Day Trip Option + Depart"
                  items={[
                    "Morning soak and sunrise. Packed breakfast from camp.",
                    "8am descent — 3–4 hours back to Barshaini with guide.",
                    "Option A: Taxi to Jari, then 4km trek to Malana village (1.5hrs each way). Strict customs — don't touch anything, respect the rules. Guide essential.",
                    "Option B: Extended Tosh lunch + Kasol market shopping + relax before departure.",
                    "Lunch: ₹500–₹800 at a valley cafe.",
                    "Private taxi back to Bhuntar for evening bus/flight. ₹1,500–₹2,000."
                  ]}
                  cost="₹3,000–₹5,000" />
                <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-sky-700 uppercase tracking-wide">Total 3-Day Cost (solo) · </span>
                  <span className="font-serif text-base text-ink font-light">₹14,000–₹20,000 excluding Delhi–Kasol transport</span>
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
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-emerald-700 text-center">🎒 Backpacker</th>
                    <th className="p-3.5 text-xs font-medium text-sky-700 text-center">🏡 Comfortable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (3N)", "₹900–₹1,800", "₹2,400–₹4,500", "₹6,000–₹12,000"],
                    ["🍽 Food & Drinks", "₹900–₹1,500", "₹2,000–₹3,500", "₹3,500–₹5,500"],
                    ["🚌 Local Transport", "₹200–₹400", "₹800–₹1,500", "₹2,500–₹4,000"],
                    ["🥾 Trek & Activities", "₹500–₹800", "₹800–₹1,500", "₹2,500–₹4,500"],
                    ["🛍 Shopping & Misc", "₹0–₹500", "₹500–₹1,000", "₹1,000–₹2,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["₹3,500–₹5,000","₹7,000–₹12,000","₹14,000–₹20,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026 peak season. Excludes Delhi–Kasol overnight bus (₹800–₹1,500 one way). Off-season (Sep–Oct) prices drop 20–30%.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Kasol"
            hotels={[
              { name: "The Hosteller Kasol", type: "Budget Hostel · Kasol", price: "From ₹400/night", rating: "4", badge: "Budget pick", url: "https://www.booking.com/hotel/in/the-hosteller-kasol.html?aid=2820480" },
              { name: "Tosh Valley Homestay", type: "Guesthouse · Tosh", price: "From ₹1,500/night", rating: "4", badge: "Valley views", url: "https://www.booking.com/hotel/in/tosh-valley.html?aid=2820480" },
              { name: "Kasol Riverside Cottage", type: "Boutique · Kasol", price: "From ₹3,000/night", rating: "5", badge: "Comfort pick", url: "https://www.booking.com/hotel/in/kasol-riverside.html?aid=2820480" },
            ]}
            activities={[
              { name: "Kheerganga Trek with Guide", duration: "2 days", price: "From ₹2,500/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=kasol&partner_id=PSZA5UI" },
              { name: "Malana Village Day Trek", duration: "Full day", price: "From ₹1,500/person", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=kasol&partner_id=PSZA5UI" },
              { name: "Parvati Valley Cafe Walk", duration: "Half day", price: "From ₹500/person", url: "https://www.getyourguide.com/s/?q=kasol&partner_id=PSZA5UI" },
              { name: "Tosh & Chalal Village Walk", duration: "Half day", price: "Free – Self-guided", url: "https://www.getyourguide.com/s/?q=kasol&partner_id=PSZA5UI" },
            ]}
            pdfProductId="kasol-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Parvati Valley — Must-See Places"
            subtitle="Click each thumbnail to explore the valley's most iconic spots."
            spots={[
              { name: "Kheerganga Hot Springs", query: "kheerganga hot springs mountain meadow himachal camping trekking nature",  desc: "Natural hot water pools at 3,050m elevation. The reward at the end of a 12km trek through pine forests and waterfalls." },
              { name: "Tosh Village",           query: "tosh village himachal pradesh mountain valley wooden houses snow peaks",  desc: "A quiet Himachali village 30 minutes above Kasol with panoramic valley views and traditional wooden architecture." },
              { name: "Manikaran Sahib",        query: "manikaran sahib gurudwara hot springs himachal pradesh temple steam",     desc: "Sacred Gurudwara with natural hot springs where rice cooks in the geothermal water. Free langar for all visitors." },
              { name: "Chalal Village",         query: "chalal village kasol riverside trail pine forest parvati river nature",   desc: "A 20-minute riverside walk from Kasol through pine forests. The quieter, prettier alternative to Kasol's main strip." },
              { name: "Parvati River",          query: "parvati river kasol valley turquoise water rocks pine trees mountain",    desc: "The emerald-green river that runs through the entire valley. Best viewed from the Kasol bridge or along the Chalal trail." },
            ]}
          />

          {/* ── VALLEY IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="tosh village himachal pradesh mountain valley snow peaks wooden houses landscape"
              alt="Tosh village with Himalayan mountain views"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Tosh village — 30 minutes above Kasol, better views, fewer tourists. The valley&apos;s best-kept not-so-secret.
              </p>
            </div>
          </div>

          {/* ── KHEERGANGA TREK DETAIL ── */}
          <section id="trek" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🥾 Kheerganga Trek — What You Need to Know</h2>
            <div className="bg-white rounded-xl border border-parchment-2 p-6 space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Distance", value: "12 km one way" },
                  { label: "Elevation", value: "1,700m → 3,050m" },
                  { label: "Time Up", value: "5–7 hours" },
                  { label: "Time Down", value: "3–4 hours" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-serif text-base text-ink font-light">{s.value}</p>
                    <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-parchment-2 pt-4">
                <p className="text-sm text-muted font-light leading-relaxed mb-3">
                  <strong className="text-ink font-medium">Two routes from Barshaini:</strong> Via Nakthan (easier, longer, better for ascent) or via Kalga (steeper, shorter, better for descent). Go up one way, come down the other.
                </p>
                <p className="text-sm text-muted font-light leading-relaxed mb-3">
                  <strong className="text-ink font-medium">What to carry:</strong> 2L water minimum, rain jacket (weather changes fast), warm layer for summit, basic snacks, power bank (no charging at top), cash only above Barshaini.
                </p>
                <p className="text-sm text-muted font-light leading-relaxed">
                  <strong className="text-ink font-medium">Don&apos;t carry:</strong> Heavy backpack (leave at Kasol guesthouse), laptop, anything you can&apos;t get wet. Travel light — chai stops have Maggi and water every 2–3 km.
                </p>
              </div>
            </div>
          </section>

          {/* ── CAFE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="himalayan mountain cafe terrace food plate valley view wooden table outdoor dining"
              alt="Mountain cafe in Parvati Valley with Himalayan views"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Parvati Valley cafe culture — Israeli food, Italian coffee, Himachali trout, all served with mountain views and zero urgency.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Starting Kheerganga trek after 9am", desc: "You need 5–7 hours up. Start after 9am and you're finishing in the dark or rushing the last 3km. Leave Barshaini by 7am.", icon: "⏰" },
                { title: "Staying only on Kasol main street", desc: "The main strip is noisy and overpriced. Walk 20 min to Chalal or 30 min up to Tosh — the actual valley experience is off the main road.", icon: "🏘️" },
                { title: "Not carrying cash above Barshaini", desc: "No ATMs, no UPI, no card machines above Barshaini. Carry ₹2,000–₹3,000 in small notes for the trek, camps, and chai stops.", icon: "💵" },
                { title: "Trekking in sandals or slip-ons", desc: "Kheerganga trail has river crossings, mud, and loose rock. Proper hiking shoes or at least sturdy sports shoes. Sandals = blisters and falls.", icon: "👟" },
                { title: "Visiting during monsoon (Jul–Aug)", desc: "Landslides close roads regularly. Trails become dangerously slippery. Leeches everywhere. The valley is genuinely unsafe — not just unpleasant.", icon: "🌧️" },
                { title: "Littering the trail", desc: "Kheerganga has a waste problem. Carry a bag for your trash, bring it back down. The hot springs are threatened by overtourism — don't contribute to it.", icon: "🗑️" },
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
                { icon: "🏔️", title: "Tosh Over Kasol", desc: "Tosh is better than Kasol now — quieter, better views, 30 minutes up the hill. Go before it gets as crowded as Kasol. Consider basing yourself there.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "🥾", title: "Two Routes Strategy", desc: "Go up Kheerganga via Nakthan, come down via Kalga (or vice versa). Different scenery both ways. Most people don't know there are two trails.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "🍳", title: "Israeli Food Scene", desc: "Kasol's Israeli cafes serve genuinely good Middle Eastern food — shakshuka, hummus, falafel. It's not a gimmick. The recipes came with the backpackers who stayed.", color: "bg-sky-50 border-sky-200" },
                { icon: "🌊", title: "Chalal River Walk", desc: "The walk from Kasol to Chalal (20 min along the river) is the best free activity in the entire valley. Go in the afternoon when light hits the water.", color: "bg-sky-50 border-sky-200" },
                { icon: "📱", title: "Phone Signal Reality", desc: "BSNL works best in the valley. Jio and Airtel are patchy past Kasol and nonexistent above Barshaini. Download offline maps before you go.", color: "bg-amber-50 border-amber-200" },
                { icon: "📆", title: "Best Month by Month", desc: "Mar–Apr ✅ wildflowers, snowmelt | May–Jun ⚠️ peak season, crowded | Jul–Aug ❌ monsoon, avoid | Sep–Oct ✅ best weather | Nov ❄️ cold but clear", color: "bg-amber-50 border-amber-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Kasol & Kheerganga itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Kasol Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How difficult is the Kheerganga trek?", a: "Moderate. 12km one way with 1,500m elevation gain. Anyone with basic fitness can complete it. The first half is easy forest walking, the second half gets steep. Carry at least 2 litres of water and start by 7am. No technical climbing involved." },
                { q: "What is the best time to visit Kasol?", a: "March to June and September to November. March–April has wildflowers and snowmelt. May–June is peak season with warm days. July–August monsoon brings landslides — avoid entirely. September–October has clear skies and fewer crowds. November onwards it gets very cold." },
                { q: "How much does a 3-day Kasol trip cost?", a: "Budget solo: ₹3,500–₹5,000 excluding transport from Delhi. Backpacker: ₹7,000–₹12,000 with guesthouse rooms and cafe meals. Comfortable with guided trek: ₹14,000–₹20,000. Add ₹1,600–₹3,000 for return Delhi–Kasol bus." },
                { q: "Is Kasol safe for solo travellers?", a: "Yes — one of India's safest backpacker destinations including for solo women. The community is welcoming and the village is small. Standard precautions: don't trek alone after dark, tell your guesthouse your plans, keep your phone charged. BSNL has the best signal." },
                { q: "How do I get from Delhi to Kasol?", a: "Overnight Volvo bus from Delhi ISBT to Bhuntar (10–12 hours, ₹800–₹1,500). From Bhuntar, local bus to Kasol (₹50, 1 hour) or shared taxi (₹200 per person). You can also fly to Bhuntar (Kullu-Manali Airport) and taxi to Kasol in 1 hour." },
                { q: "Can I visit Malana from Kasol?", a: "Yes, as a day trip. Drive to Jari, then trek 4km (1.5 hours each way) to Malana. The village has strict customs — don't touch walls, structures, or people. Photography restrictions apply. Go with a local guide and respect all rules. Budget a full day." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning More in Himachal?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Manali — 5 Day Adventure Guide", href: "/blog/manali-5-days", soon: true },
                { label: "Spiti Valley — 7 Day Road Trip", href: "/blog/spiti-7-days", soon: true },
                { label: "Goa in 3 Days — Beach Guide", href: "/blog/goa-3-days", soon: false },
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

          <RelatedGuides currentSlug="kasol-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
