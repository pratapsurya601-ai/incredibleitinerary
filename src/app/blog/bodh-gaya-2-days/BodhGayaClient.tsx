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

const BODHGAYA_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "temples",   emoji: "🛕", label: "Temples & Monasteries" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Bodh Gaya 2-Day Travel Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Bodh Gaya in 2 Days — where Buddha found enlightenment&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function BodhGayaClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹4k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹4k–10k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BODHGAYA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Bodh Gaya" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="mahabodhi temple bodh gaya buddhist pilgrimage india"
            fallback="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1600&q=85"
            alt="Mahabodhi Temple in Bodh Gaya — the holiest site in Buddhism"
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
              <span className="text-white/70">Bodh Gaya 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Spiritual & Heritage
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Bodh Gaya in 2 Days:
                <em className="italic text-gold-light"> Where Buddha Found Enlightenment</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The Bodhi Tree. The 55m Mahabodhi Temple. 17 international monasteries from 12 countries within 2 km. The site where Buddhism began — and where meditating at 5am still changes something in you.
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
              <span>🇮🇳 Bihar</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹1,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              I arrived at the Mahabodhi Temple at 5am not expecting much. Monks from eight countries were already chanting — Tibetan, Thai, Burmese, Japanese, Sri Lankan, all simultaneously but somehow harmoniously. The Bodhi Tree was lit by a single lamp. I sat for two hours without thinking of anything else.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            You don&apos;t need to be Buddhist for Bodh Gaya to affect you. This is the place where an Indian prince sat under a tree 2,500 years ago and figured out something important about suffering and its end. The tree is still there — a direct propagated descendant of the original. The temple Ashoka built around it is still standing. And monks from seventeen countries come here to sit in exactly the same spot, generation after generation. That continuity is staggering.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌸" label="Best Season" value="Oct–Mar" />
            <StatCard icon="🏛️" label="UNESCO" value="Since 2002" />
            <StatCard icon="🚗" label="From Gaya" value="13 km" />
            <StatCard icon="⭐" label="Rating" value="4.8★" />
          </div>

          {/* ── PICK YOUR PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Pick Your Plan</h2>
            <p className="text-sm text-muted font-light mb-6">Same 2-day route around Bodh Gaya, two comfort levels. Even the budget plan covers everything essential.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stay</td><td className="py-2.5 px-4">Dharamshala or budget guesthouse</td><td className="py-2.5 px-4">International monastery guesthouse</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Cycle rental (₹60/day) + auto</td><td className="py-2.5 px-4">Auto + occasional taxi for day trips</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Day Trip</td><td className="py-2.5 px-4">Sujata Kuti by auto</td><td className="py-2.5 px-4">Rajgir + Nalanda (full day)</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹4,000</td><td className="py-2.5 px-4 font-medium text-teal">₹4,000–10,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Mahabodhi Temple + Bodhi Tree + evening candlelight ceremony. Day 2: International monasteries + Buddha statue + Sujata Kuti + optional Rajgir.
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
                title="Mahabodhi Temple, Bodhi Tree & Evening Ceremony"
                items={[
                  "Train to Gaya Junction: Gaya has direct trains from Delhi (Mahabodhi Express, 12–14 hrs overnight), Patna (1.5 hrs), Kolkata (6 hrs), and Varanasi (3 hrs). From Gaya Junction, take an auto or e-rickshaw to Bodh Gaya (13 km, ₹200–300 auto or ₹50 shared e-rickshaw).",
                  activeTab === "A"
                    ? "Check in to a dharamshala or budget guesthouse near the temple (₹300–600/night). Several temples run guesthouses: the Bhutanese Monastery offers clean rooms at ₹500–800/night."
                    : "Check in to Tergar Monastery guesthouse (₹800–1200, serene atmosphere with meditation garden) or the Tibetan Om Hotel (₹1500–2500). Monastery guesthouses require modest dress and quiet behaviour.",
                  "Mahabodhi Temple complex: The 55m spire temple was built by the Pala dynasty but on Ashokan foundations. It is one of the earliest brick structures in India and the architectural model for temples across Southeast Asia. Entry is free. Remove shoes at the gate.",
                  "The Bodhi Tree: A direct propagated descendant of the original tree under which Siddhartha Gautama attained enlightenment around 528 BCE. The current tree was grown from a cutting sent to Sri Lanka by Ashoka (288 BCE), then returned here. Meditating under it with a cushion from 5–7 AM is transformative.",
                  "The Diamond Throne (Vajrasana): The red sandstone platform placed by Ashoka to mark the exact spot of Buddha's meditation. Sit near it. No charge, no queue in the early morning.",
                  activeTab === "A"
                    ? "Evening candlelight ceremony (6 PM): Hundreds of devotees light butter lamps around the temple perimeter. The chanting from multiple monastic traditions simultaneously is extraordinary. Join the circumambulation (pradakshina) around the main stupa."
                    : "Evening candlelight ceremony followed by dinner at one of Bodh Gaya's better Tibetan or Thai restaurants near the temple. Tibetan thukpa (noodle soup) and momos are recommended.",
                ]}
                cost={activeTab === "A" ? "₹1,500" : "₹3,000–5,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="International Monasteries, Buddha Statue & Day Trips"
                items={[
                  "Morning (5 AM): Return to the Mahabodhi Temple for early morning puja. Monks from a dozen nationalities chant simultaneously. The golden light through the Bodhi Tree canopy at sunrise is one of India's most beautiful visual experiences.",
                  "17 International Monasteries circuit: All within 2 km of the Mahabodhi Temple. Rent a bicycle (₹60/day) or walk. Key stops: Thai Monastery (Wat Thai Buddhagaya — grand golden facade), Japanese Daijokyo Temple (serene garden), Tibetan Tergar Monastery (largest), Chinese Temple (ornate red and gold), Bhutanese Monastery (excellent dragon iconography), Sri Lankan Mahamuni Temple.",
                  "80ft Great Buddha Statue (1989): The largest Buddha statue in India at the time of construction. Serene expression, surrounded by smaller Bodhisattva figures. Entry ₹100, photography allowed.",
                  activeTab === "A"
                    ? "Sujata Kuti (6 km, auto ₹100–150 return): The site where village girl Sujata offered Buddha a bowl of kheer (rice pudding) before his enlightenment — breaking his period of extreme fasting. The ruined stupa marks the spot. Simple but historically important."
                    : "Full day trip to Rajgir (80 km, 2 hrs by taxi ₹1500–2000 return): Vulture's Peak (Griddhakuta) where Buddha preached the Heart Sutra — take the ropeway (₹120). Nalanda ruins (12 km from Rajgir) — the world's first residential university, 427–1197 CE. Shanti Stupa. A packed but extraordinary day.",
                  "Dungeshwari Cave (25 km, optional): Where Buddha practiced extreme asceticism for six years before abandoning it for the Middle Way. A living pilgrimage site — local monks maintain it.",
                  "Evening meditation in the Mahabodhi complex: The temple is open until 9 PM. Find a spot under the Bodhi Tree for final meditation. The quiet after the tour groups leave is profound.",
                ]}
                cost={activeTab === "A" ? "₹2,000" : "₹4,000–7,000"}
              />
            </div>
          </section>

          {/* ── TEMPLES & MONASTERIES ── */}
          <section id="temples" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🛕 Temples &amp; Monasteries Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Bodh Gaya has the highest concentration of international Buddhist monuments anywhere outside Southeast Asia. Most are within 2 km of each other.
            </p>
            <div className="space-y-4">
              {[
                { name: "Mahabodhi Temple", entry: "Free", note: "The 55m UNESCO spire temple marks the site of Buddha's enlightenment. Open 5 AM–9 PM. The early morning session (5–7 AM) before tour groups arrive is by far the best time. Guided audio tours available at the gate.", emoji: "🏛️", color: "bg-amber-50 border-amber-200" },
                { name: "The Bodhi Tree & Vajrasana", entry: "Free (within complex)", note: "The tree is a direct descendant of the original. The Vajrasana (red sandstone) beneath it marks the exact spot of enlightenment. Bring a meditation cushion. Photography restricted during puja hours (ask guards).", emoji: "🌳", color: "bg-amber-50 border-amber-200" },
                { name: "Tergar Monastery (Tibetan)", entry: "Free", note: "The largest Tibetan monastery in Bodh Gaya. The prayer hall has a massive gilded Buddha statue. Morning puja (6–8 AM) is open to visitors. The monastery guesthouse is the best value accommodation in Bodh Gaya.", emoji: "🔔", color: "bg-teal-50 border-teal-200" },
                { name: "Thai Monastery (Wat Thai Buddhagaya)", entry: "Free", note: "The most architecturally striking monastery in Bodh Gaya — traditional Thai temple style with golden Naga serpents and colourful murals. Photography welcomed. Best exterior shots from across the street.", emoji: "🏯", color: "bg-teal-50 border-teal-200" },
                { name: "80ft Great Buddha Statue", entry: "₹100", note: "Inaugurated by the Dalai Lama in 1989. Surrounded by 10 smaller Bodhisattva statues and a garden. A good meditative stop between monastery circuits.", emoji: "🗿", color: "bg-rose-50 border-rose-200" },
                { name: "Sujata Kuti (6 km)", entry: "Free", note: "Ruined stupa marking where Sujata offered kheer to the starving Siddhartha — the moment he abandoned extreme asceticism. Simple site but historically the turning point leading to enlightenment.", emoji: "🏺", color: "bg-rose-50 border-rose-200" },
              ].map((t) => (
                <div key={t.name} className={`rounded-xl border p-5 ${t.color}`}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{t.emoji}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{t.name}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">Entry: {t.entry}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{t.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── TEMPLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="buddhist monks meditation temple sunrise india"
              fallback="https://images.unsplash.com/photo-1545389336-cf090694435e?w=900&q=80"
              alt="Buddhist monks in meditation near the Mahabodhi Temple at sunrise"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Mahabodhi Temple opens at 5 AM. Monks from twelve nationalities chant simultaneously during morning puja — the most extraordinary confluence of traditions in one place.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹4,000", color: "bg-amber-50 border-amber-200",
                  items: [["Stay (1 night, dharamshala)", "₹300–600"], ["Auto (Gaya–Bodh Gaya)", "₹200–300"], ["Cycle rental (1 day)", "₹60"], ["Meals (2 days)", "₹600–1,000"], ["Entry fees (statue etc.)", "₹100–200"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹4,000–10,000", color: "bg-teal-50 border-teal-200",
                  items: [["Stay (1 night, monastery)", "₹800–1,500"], ["Auto + taxi (day trips)", "₹1,000–2,500"], ["Rajgir + Nalanda day trip", "₹1,500–2,000"], ["Meals (restaurants)", "₹1,000–2,000"], ["Meditation retreat (optional)", "₹500–2,000"]] },
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
              * All prices per person. Does not include train fare to/from Gaya. The Mahabodhi Temple complex itself has no entry fee. International monastery guesthouses are the best value accommodation in any price category.
            </p>
          </section>

          <AffiliateBlock destination="Bodh Gaya" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Arriving at the temple after 8am", desc: "The Mahabodhi complex opens at 5 AM. By 8 AM, tour groups from Varanasi and Patna arrive. The pre-dawn and early morning hours under the Bodhi Tree are a completely different experience from the crowded midday visit.", icon: "⏰" },
                { title: "Dressing inappropriately", desc: "The Mahabodhi Temple requires covered legs and shoulders. Remove shoes at the entrance. Several other monasteries have similar requirements. Bring a sarong or long pants — this is a place of active worship, not a museum.", icon: "👗" },
                { title: "Skipping the international monasteries", desc: "Most visitors spend all their time at the Mahabodhi Temple and miss the extraordinary diversity of the surrounding monasteries. The Thai, Tibetan, Japanese, and Bhutanese temples are all architecturally distinct and deeply beautiful.", icon: "🌍" },
                { title: "Not doing the Rajgir day trip", desc: "Rajgir (80 km, 2 hrs) combines Vulture's Peak, the ropeway to Shanti Stupa, and Nalanda university ruins in one day. It's the best day trip from Bodh Gaya and transforms a spiritual visit into a full Buddhist Circuit experience.", icon: "🗺️" },
                { title: "Coming in peak summer (May–Jun)", desc: "Bihar in May–June hits 42–46°C. The marble walkways burn your feet and outdoor meditation is impossible. October–March is the only sensible time. November is the sweetest spot — the Kagyu Monlam festival brings thousands of monks.", icon: "🌡️" },
                { title: "Photography near the Bodhi Tree during puja", desc: "Photography is restricted near the Vajrasana and Bodhi Tree during morning and evening puja hours. Respect this. The security guards enforce it politely but firmly. Photograph the 55m spire from the outer perimeter instead.", icon: "📸" },
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
                { icon: "🧘", title: "Meditate Under the Bodhi Tree", desc: "The Bodhi Tree in the Mahabodhi complex is a direct propagated descendant of the original. The area around it is open for meditation from 5 AM–9 PM. Arrive at 5 AM for silence — by 8 AM, tour groups fill the space.", color: "bg-amber-50 border-amber-200" },
                { icon: "🌍", title: "The 17 Monasteries Circuit", desc: "Walk or rent a cycle (₹60/day) to visit the Thai, Japanese, Tibetan, Chinese, Bhutanese, Burmese, Sri Lankan, and Vietnamese monasteries — all within 2 km. Each has unique architecture and welcomes visitors respectfully dressed.", color: "bg-amber-50 border-amber-200" },
                { icon: "🚂", title: "Best Train from Delhi", desc: "Mahabodhi Express (New Delhi to Gaya, direct, 12–14 hrs overnight). Gaya Junction to Bodh Gaya: 13 km by auto (₹200–300) or e-rickshaw (₹50 shared).", color: "bg-teal-50 border-teal-200" },
                { icon: "⏰", title: "Temple Opens at 5 AM", desc: "The Mahabodhi Temple complex opens at 5 AM and closes at 9 PM. The early morning puja is extraordinary — monks from a dozen nationalities chant simultaneously. Arrive before 6 AM.", color: "bg-teal-50 border-teal-200" },
                { icon: "🏨", title: "Where to Stay in Bodh Gaya", desc: "Best value: international monastery guesthouses (Tergar Monastery ₹800–1200, Bhutanese Monastery ₹500–800 — clean, serene, meditation atmosphere). Budget: dharamshalas near the temple (₹200–500). Hotels: Royal Residency (₹2000–3000).", color: "bg-rose-50 border-rose-200" },
                { icon: "🕊️", title: "Buddhist Circuit Day Trips", desc: "Rajgir (80 km, 2 hrs): Vulture's Peak where Buddha preached, Nalanda ruins, ropeway to Shanti Stupa. Nalanda (90 km): 9th-century university ruins (the world's first residential university). Vaishali (150 km): last sermon site.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates and we&apos;ll send a personalised Bodh Gaya + Buddhist Circuit itinerary with train options from your city within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Bodh Gaya Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What is the significance of the Bodhi Tree in Bodh Gaya?", a: "This tree is a propagated descendant of the original Bodhi Tree under which Siddhartha Gautama attained enlightenment around 528 BCE. The original tree was destroyed several times; the current tree was grown from a branch sent to Sri Lanka by Emperor Ashoka in 288 BCE, then returned to Bodh Gaya in 1881. It is the holiest living object in Buddhism." },
                { q: "Can non-Buddhists visit the Mahabodhi Temple?", a: "Yes — the Mahabodhi Temple is open to all visitors regardless of religion. Remove shoes, dress modestly (no shorts, cover shoulders), and maintain silence inside. Photography is allowed in some areas but prohibited near the Bodhi Tree during meditation hours." },
                { q: "What is the Diamond Throne (Vajrasana)?", a: "The Vajrasana is the red sandstone platform placed by Emperor Ashoka to mark the exact spot where Buddha sat in meditation. It sits beneath the Bodhi Tree. Meditating on or near this stone, Buddhists believe, connects you with the moment of enlightenment." },
                { q: "How far is Bodh Gaya from Varanasi and Kolkata?", a: "Varanasi: 250 km (5 hrs by road). Kolkata: 450 km (8 hrs by road or train). Patna: 130 km (3 hrs). Gaya has direct trains from Delhi, Kolkata, Patna, and Varanasi — making it easy to include in a Northeast India loop." },
                { q: "What is the best time for meditation retreats in Bodh Gaya?", a: "October–March is peak spiritual season. The Kagyu Monlam festival (November) and Tibetan New Year celebrations attract thousands. Several monasteries and the Root Institute offer 3-day to 10-day Vipassana and Buddhist meditation courses — book 2–3 months ahead." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Bodh Gaya — Highlights"
            subtitle="The best of Bodh Gaya in photos."
            spots={[
              { name: "Bodh Gaya Landscape", query: "bodh gaya india landscape scenic beautiful travel", desc: "The stunning landscapes of Bodh Gaya." },
              { name: "Bodh Gaya Temple", query: "bodh gaya temple architecture heritage india", desc: "Historic temples and architecture in Bodh Gaya." },
              { name: "Bodh Gaya Street Scene", query: "bodh gaya street market local culture india", desc: "Local life and culture in Bodh Gaya." },
              { name: "Bodh Gaya Nature", query: "bodh gaya nature hills forest river india", desc: "Natural beauty around Bodh Gaya." },
              { name: "Bodh Gaya Sunset", query: "bodh gaya sunset golden hour india travel", desc: "Bodh Gaya at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Explore India&apos;s Buddhist Circuit</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Varanasi — 4-Day Spiritual Journey", href: "/blog/varanasi-4-days" },
                { label: "Prayagraj — 2-Day Triveni Sangam Guide", href: "/blog/prayagraj-2-days" },
                { label: "Sarnath — 1-Day First Sermon Site", href: "/blog/sarnath-1-day" },
                { label: "Browse All Bihar & Buddhist Guides", href: "/#packages" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="bodh-gaya-2-days" />
          <RelatedGuides currentSlug="bodh-gaya-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
