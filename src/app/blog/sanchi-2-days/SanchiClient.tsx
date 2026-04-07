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

const SANCHI_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "monument",  emoji: "🏛️", label: "Monument Guide" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Sanchi 2-Day Travel Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Sanchi in 2 Days — India's oldest stone monuments&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function SanchiClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹3k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹3k–7k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={SANCHI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Sanchi" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="sanchi stupa ancient buddhist monument india gateway"
            fallback="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1600&q=85"
            alt="Great Stupa of Sanchi with carved toranas — oldest Buddhist monument in India"
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
              <span className="text-white/70">Sanchi 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO Archaeological
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Sanchi in 2 Days: India&apos;s Oldest
                <em className="italic text-gold-light"> Stone Monuments &amp; Great Stupa</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3rd century BCE. Four carved stone gateways depicting Buddha&apos;s life without ever showing his face. The national emblem&apos;s original lion capital. And almost no tourists. 46 km from Bhopal.
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
              <span>🇮🇳 Madhya Pradesh</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹1,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              At 6am the Sanchi ridge was empty. I stood in front of the North Torana alone — the most perfectly carved stone gateway in India, made 2,100 years ago. The scenes show Buddha&apos;s previous lives, his enlightenment, Ashoka&apos;s pilgrimage — and nowhere, in any panel, do you see a human face for the Buddha. Just footprints, a wheel, a tree.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Sanchi is one of India&apos;s most undervisited UNESCO sites — and one of the best. The Great Stupa (Stupa 1) was built by Emperor Ashoka in 268 BCE and enlarged by the Satavahanas. The four toranas (gateways) added in the 1st century BCE are the finest narrative stone carving in ancient India — a visual encyclopedia of Buddhist teaching, executed with extraordinary sophistication. Unlike Ajanta/Ellora or Bodh Gaya, Sanchi is genuinely quiet. You can have the monuments almost to yourself on a weekday morning.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🏛️" label="Built" value="3rd Century BCE" />
            <StatCard icon="🌍" label="UNESCO" value="Since 1989" />
            <StatCard icon="🚗" label="From Bhopal" value="46 km" />
            <StatCard icon="⭐" label="Rating" value="4.7★" />
          </div>

          {/* ── PICK YOUR PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Pick Your Plan</h2>
            <p className="text-sm text-muted font-light mb-6">Same 2-day route around Sanchi, two comfort levels. Sanchi is extremely affordable — even the comfortable plan is modest.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stay</td><td className="py-2.5 px-4">Tourist bungalow (₹600–1000)</td><td className="py-2.5 px-4">Better guesthouse + ASI guide</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Train Bhopal–Sanchi (₹20–30)</td><td className="py-2.5 px-4">Taxi from Bhopal (₹800–1000)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Guide</td><td className="py-2.5 px-4">Self-guided with museum visit</td><td className="py-2.5 px-4">ASI-certified guide (₹500–800)</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹3,000</td><td className="py-2.5 px-4 font-medium text-teal">₹3,000–7,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Sanchi complex — Great Stupa, four toranas, Ashoka Pillar, museum. Day 2: Udaygiri Caves, Heliodorus Pillar, Vidisha ruins → return Bhopal.
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
                title="Sanchi Complex — Stupas, Toranas & Museum"
                items={[
                  activeTab === "A"
                    ? "From Bhopal: local train from Bhopal Junction to Sanchi station (46 km, 1 hr, ₹20–30). Trains depart approximately every 2 hours. Get the 7 AM train to arrive for the 6 AM opening of the ASI complex. Alternatively, bus from Bhopal (1.5 hrs, ₹60–80)."
                    : "From Bhopal: private taxi (₹800–1000, 1 hr). Comfortable, flexible timing. Can combine with pickup from hotel. Book through Bhopal's MPTDC (Madhya Pradesh Tourism).",
                  "Sanchi complex entry (₹40 Indians, ₹600 foreigners): The complex is on a flat hill. The main path leads directly to the Great Stupa (Stupa 1). The ASI grounds open at 6 AM — golden hour light on the stupa is exceptional.",
                  "Great Stupa (Stupa 1): Ashoka's original stupa (268 BCE) was a simple hemispherical mound. The Satavahana dynasty enlarged it to the current 36m diameter and 16m height (1st century BCE). The pradakshina (circumambulation) path allows you to view all four toranas in sequence.",
                  "The Four Toranas (Gateways): North, South, East, and West — each carved by artisan guilds in the 1st century BCE. The carvings show Buddha's Jataka tales (past lives), his birth, the Bodhi Tree, the First Sermon, and Ashoka's pilgrimage — all without showing Buddha in human form. The aniconic tradition. The North Torana is the most elaborate.",
                  "Stupa 2 (on a lower terrace, different style) and Stupa 3 (contains relics of two disciples of Buddha — Sariputra and Mahamoggallana, excavated by Alexander Cunningham in 1851 and returned from London in 1952).",
                  "Ashoka Pillar: The broken shaft remains near the South Gateway. The original four-lion capital (now in the Sanchi Museum) became India's national emblem in 1950.",
                  activeTab === "A"
                    ? "Archaeological Museum (₹5 entry, just outside the complex): Houses the original Ashoka Pillar lion capital, Yakshi figures, and the finest Sanchi sculptures. The lion capital alone is worth the visit — one of ancient India's most perfect sculptures. Allow 1 hour."
                    : "ASI-certified guide for the Sanchi complex (₹500–800, book at the gate ticket counter): A good guide transforms the carvings from beautiful patterns into a readable narrative. The best guides can identify individual Jataka tales in each panel.",
                ]}
                cost={activeTab === "A" ? "₹1,500" : "₹3,000–4,500"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Udaygiri Caves, Heliodorus Pillar & Vidisha"
                items={[
                  "Morning: Udaygiri Caves (13 km from Sanchi, taxi ₹400–500 return): 4th-century CE rock-cut caves carved under the Gupta dynasty. The centrepiece is the massive Varaha avatar sculpture — Vishnu as a cosmic boar, 5m tall, rescuing the earth goddess Bhudevi from the cosmic ocean. One of the most powerful images in Indian art.",
                  "The caves also contain the earliest dated Sanskrit inscription (AD 401) referencing Chandragupta II, and shrines to Durga, Shiva, and Vishnu — showing the Buddhist-Hindu religious dialogue of the period.",
                  "Heliodorus Pillar at Vidisha (5 km from Udaygiri): Erected circa 113 BCE by Heliodorus, a Greek ambassador from Taxila, in honour of Vishnu. The inscription makes it the world's oldest known Vaishnava site. A Greek man erected a pillar to an Indian god 2,100 years ago — the cultural implications are extraordinary.",
                  "Besnagar ruins (adjacent to Vidisha): The ancient capital of the Shunga dynasty (185–73 BCE) is largely unexcavated but the Heliodorus Pillar site has ongoing ASI work.",
                  activeTab === "A"
                    ? "Return to Sanchi or directly to Bhopal by local bus or shared auto (Sanchi to Bhopal bus ₹60–80). From Bhopal you can continue to Ujjain (185 km), Indore (180 km), or onward destinations."
                    : "Return to Bhopal by taxi. From Bhopal, consider adding 1 day: Bhimbetka rock art (45 km from Bhopal, 30,000-year-old cave paintings — another UNESCO site), Bhopal's Taj-ul-Masajid (India's largest mosque), and Van Vihar National Park.",
                ]}
                cost={activeTab === "A" ? "₹1,200" : "₹2,500–3,500"}
              />
            </div>
          </section>

          {/* ── MONUMENT GUIDE ── */}
          <section id="monument" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏛️ Sanchi Monument Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The Sanchi ridge has over 50 monuments on a single hill. Here&apos;s what to prioritise and why.
            </p>
            <div className="space-y-4">
              {[
                { name: "Great Stupa (Stupa 1)", period: "268 BCE (Ashoka) + 1st century BCE (enlarged)", note: "The centrepiece. Walk the full pradakshina (circumambulation) to view all four toranas. Stand 40m north-northwest at golden hour for the best compositional photograph — stupa + north torana in single frame.", emoji: "⚪", color: "bg-amber-50 border-amber-200" },
                { name: "The Four Toranas (North, South, East, West)", period: "1st century BCE", note: "The most important Buddhist narrative carvings in existence. Each gateway is approximately 10m tall. The North Torana is the most elaborate — depicting the Maya dream, the Great Departure, and the First Sermon. Bring binoculars for upper-panel details.", emoji: "🏛️", color: "bg-amber-50 border-amber-200" },
                { name: "Ashoka Pillar", period: "268 BCE", note: "The broken shaft stands near the South Gateway. The original four-lion capital (Sarnath Lion Capital) is in the Sanchi Museum — it became India's national emblem. The pillar inscription is one of Ashoka's earliest edicts.", emoji: "🗿", color: "bg-teal-50 border-teal-200" },
                { name: "Stupa 2 & Stupa 3", period: "2nd–1st century BCE", note: "Stupa 3 (smaller, rounder) contains actual relics of two of Buddha's chief disciples — recovered, sent to London, returned in 1952. Stupa 2 is on a lower terrace with a different decorative vocabulary — worth the short walk down.", emoji: "🏺", color: "bg-teal-50 border-teal-200" },
                { name: "Archaeological Museum", period: "Collection: 3rd BCE–11th CE", note: "Entry ₹5 — the best deal in Indian archaeology. The Ashoka Pillar lion capital is here. Also: Yakshi figures, terracotta, coins, and inscriptions. The lion capital is displayed separately — it's among the finest ancient sculptures in India.", emoji: "🏛️", color: "bg-rose-50 border-rose-200" },
                { name: "Temple 17 & Temple 18 (Gupta Period)", period: "5th century CE", note: "Two Gupta-era temples on the ridge — Temple 17 is the earliest known flat-roofed stone temple in India, a prototype for Hindu and Buddhist temple architecture across the subcontinent.", emoji: "🏯", color: "bg-rose-50 border-rose-200" },
              ].map((m) => (
                <div key={m.name} className={`rounded-xl border p-5 ${m.color}`}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{m.emoji}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{m.name}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{m.period}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{m.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── STUPA IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="great stupa ancient stone monument india archaeology"
              fallback="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&q=80"
              alt="The Great Stupa of Sanchi at golden hour — UNESCO World Heritage Site"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Great Stupa at golden hour. The ASI complex opens at 6 AM — arrive then for an empty ridge and perfect photography light.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹3,000", color: "bg-amber-50 border-amber-200",
                  items: [["Transport (Bhopal–Sanchi train)", "₹20–30"], ["Stay (1 night, tourist bungalow)", "₹600–1,000"], ["Complex entry + museum", "₹45"], ["Udaygiri taxi", "₹400–500"], ["Meals (2 days)", "₹600–900"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹3,000–7,000", color: "bg-teal-50 border-teal-200",
                  items: [["Transport (Bhopal–Sanchi taxi)", "₹800–1,000"], ["Stay (1 night, better guesthouse)", "₹1,200–2,000"], ["ASI guide (1 day)", "₹500–800"], ["Udaygiri + Vidisha taxi", "₹600–800"], ["Meals + Bhopal day trip", "₹800–1,500"]] },
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
              * All prices per person. Does not include travel to/from Bhopal. Sanchi has very limited accommodation — book ahead on weekends. The MPTDC Tourist Bungalow is the best-positioned option.
            </p>
          </section>

          <AffiliateBlock destination="Sanchi" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting as a day trip without sunrise photography", desc: "Sanchi can be done as a day trip from Bhopal (46 km), but staying overnight lets you photograph the empty complex at 6 AM. The stupa in golden light with no other visitors is a completely different experience from the midday visit.", icon: "🌅" },
                { title: "Skipping the Sanchi Museum", desc: "The museum is ₹5 and contains the original Ashoka Pillar lion capital — the sculpture that became India's national emblem. It's one of ancient India's most perfect works of art. Don't miss it.", icon: "🏛️" },
                { title: "Not looking for the aniconic Buddha", desc: "The toranas never show Buddha in human form — always footprints, wheel, tree, umbrella, or throne. Understanding this artistic choice transforms the carvings from decorative patterns into a specific theological statement.", icon: "🔍" },
                { title: "Skipping Udaygiri Caves", desc: "13 km from Sanchi, the 4th-century Gupta caves at Udaygiri are extraordinary — the Varaha avatar sculpture alone is worth the detour. Combine with the Heliodorus Pillar at Vidisha (5 km further) for a remarkable half-day add-on.", icon: "🪨" },
                { title: "Coming without a wide-angle lens or binoculars", desc: "The toranas are 10m tall with carvings at every level. A wide-angle lens for the full torana composition and binoculars or a telephoto for upper-panel details are both useful. The upper register carvings are extraordinary but only visible up close with optical aid.", icon: "📷" },
                { title: "Not reading about Ashoka before you go", desc: "Sanchi is inseparable from Ashoka — his transformation from warrior king to Buddhist patron is the reason this place exists. 30 minutes with a Wikipedia article on Ashoka before visiting doubles the depth of the experience.", icon: "📖" },
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
                { icon: "📖", title: "Why No Buddha Face on the Toranas", desc: "The carved gateways (1st century BCE) show Buddha's life through symbols: footprints, wheel, tree, parasol — never his face. This 'aniconic' tradition predates figurative Buddhist art. It's one of the most sophisticated artistic decisions in ancient India.", color: "bg-amber-50 border-amber-200" },
                { icon: "🌅", title: "Best Light on the Stupa", desc: "The Great Stupa faces east and is best photographed at sunrise (golden glow) or the 45 minutes before sunset (side light defines the carved toranas). The ASI grounds open at 6 AM.", color: "bg-amber-50 border-amber-200" },
                { icon: "🎒", title: "Combine with Bhopal", desc: "Bhopal is 46 km (1 hr by train or road). Add 1 day: Bhimbetka rock art (45 km from Bhopal, 30,000-year-old cave paintings), Bhopal's Taj-ul-Masajid (largest mosque in India), and Van Vihar National Park.", color: "bg-teal-50 border-teal-200" },
                { icon: "🏛️", title: "The Ashoka Pillar Capitals", desc: "Sanchi's Ashoka Pillar (broken shaft) originally had a four-lion capital that became India's national emblem. The original capital is in the Sanchi Museum — one of ancient India's most perfect sculptures.", color: "bg-teal-50 border-teal-200" },
                { icon: "🚌", title: "How to Reach Sanchi", desc: "From Bhopal: local train from Bhopal Junction to Sanchi (46 km, 1 hr, ₹20–30). Direct trains from Agra, Jhansi, and Ujjain also stop at Sanchi. By road: taxi from Bhopal ₹800–1000.", color: "bg-rose-50 border-rose-200" },
                { icon: "📷", title: "Photography Tips at Sanchi", desc: "Use a wide-angle lens for the full stupa-torana composition. The best angle: stand 40m north-northwest of Stupa 1 at golden hour. The toranas have extraordinary detail — bring a telephoto or zoom for individual carvings.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates and we&apos;ll plan the full Sanchi + Bhopal + Bhimbetka circuit with train options within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Sanchi Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What is the significance of Sanchi's toranas (gateways)?", a: "The four toranas (north, south, east, west gateways) were built by artisan guilds in the 1st century BCE and carved with the most detailed narrative Buddhist art in existence. They depict Buddha's past lives (Jatakas), his enlightenment, and the spread of Buddhism — all without ever depicting Buddha in human form." },
                { q: "How many Buddhist sites are in the Sanchi area?", a: "Over 50 ancient Buddhist monuments survive in the Sanchi hills alone. Beyond the Great Stupa, there are 3 main stupas (with original relics), 5 temples, several smaller stupas, and the Ashoka pillar — all on one ridge. Nearby: Udaygiri caves (13 km), Vidisha/Besnagar (8 km), and Satdhara (40 km) with more undiscovered stupas." },
                { q: "Can I visit Sanchi as a day trip from Bhopal?", a: "Easily — 46 km (1 hr by train or road). The Sanchi complex itself takes 3–4 hours to explore properly. Add Udaygiri Caves (another 2 hours, 13 km away). Return to Bhopal by evening. However, staying overnight lets you photograph at sunrise — the empty complex at 6 AM is magical." },
                { q: "What did Ashoka have to do with Sanchi?", a: "Emperor Ashoka (268–232 BCE) built the original Great Stupa (much smaller than current), the Ashoka Pillar, and several smaller monasteries at Sanchi. The relics of the Buddha were distributed from Sanchi to stupas across his empire. Sanchi's location (near Vidisha, where Ashoka met his wife Devi) made it personally significant." },
                { q: "How is Sanchi different from other UNESCO Buddhist sites in India?", a: "Sanchi is the oldest and best-preserved Buddhist complex in India (3rd century BCE vs Ajanta's 2nd century BCE caves). Unlike Ajanta/Ellora (rock-cut, inland Maharashtra), Sanchi is free-standing architecture. Unlike Bodh Gaya (active pilgrimage), Sanchi is archaeological — quieter, more scholarly, and often uncrowded." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Explore More Central India</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Bhopal — 2-Day City Guide", href: "/blog/bhopal-2-days" },
                { label: "Bodh Gaya — Where Buddha Found Enlightenment", href: "/blog/bodh-gaya-2-days" },
                { label: "Ujjain — Sacred City & Mahakaleshwar", href: "/blog/ujjain-2-days" },
                { label: "Browse All Madhya Pradesh Guides", href: "/#packages" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="sanchi-2-days" />
          <RelatedGuides currentSlug="sanchi-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
