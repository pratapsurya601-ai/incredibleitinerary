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

const MEENAKSHI_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "temple",    emoji: "🛕", label: "Temple Guide" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Meenakshi Temple Madurai 2-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Meenakshi Temple Madurai in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function MeenakshiClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹4k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹4k–10k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MEENAKSHI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Madurai" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="meenakshi temple madurai gopuram colorful"
            fallback="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1600&q=85"
            alt="Meenakshi Amman Temple gopurams rising above Madurai"
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
              <span className="text-white/70">Meenakshi Temple 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Temple & Heritage
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Meenakshi Temple Madurai in 2 Days:
                <em className="italic text-gold-light"> South India&apos;s Greatest Temple</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                14 gopurams, 33,000 sculptures, a Hall of 1000 musical pillars, and a nightly bedchamber ceremony that has continued uninterrupted for centuries. Two days here changes how you see ancient India.
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
              <span>🇮🇳 Tamil Nadu</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹2,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              I&apos;ve stood inside the Hall of a Thousand Pillars in the evening, when a priest struck one of the musical pillars and a single clear note rang through the granite colonnades. Nothing in 20 years of travel prepared me for that sound.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Most people heading to South India go to Kerala and stop there. Madurai is 6 hours from Kochi and it contains one of the most extraordinary structures ever built by human hands. The Meenakshi Amman Temple is not just a religious site — it is a 14-acre city within a city, built over 2,000 years, with 985 individually carved pillars, 14 towering gopurams covered in 33,000 sculptures, and a ceremony that has been performed every single night for centuries.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌤️" label="Best Season" value="Oct–Mar" />
            <StatCard icon="🏛️" label="Complex Size" value="14.57 acres" />
            <StatCard icon="🛕" label="Temple Gopurams" value="14 (tallest 170 ft)" />
            <StatCard icon="⭐" label="Rating" value="4.9★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Madurai is at its most walkable in winter. The temple is spectacular year-round but the heat can be punishing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Mar", emoji: "✅", title: "Best Season", desc: "October–March is ideal (25–32°C). Cool enough to explore the massive complex on foot. The Chithirai Festival in April–May is the biggest event — the celestial wedding procession — but be prepared for crowds.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Apr–Jun", emoji: "🔥", title: "Hot & Festive", desc: "Temperatures reach 38–42°C. The Chithirai Festival (April–May) is unmissable for culture but the heat is serious. Carry water. Start temple visits before 8 AM. Afternoon sightseeing should be minimised.", color: "bg-red-50 border-red-200" },
                { season: "Jul–Sep", emoji: "🌧️", title: "Monsoon", desc: "Northeast monsoon hits Tamil Nadu in October–December, not the southwest monsoon. July–September is pre-monsoon — hot and dry. The temple operates normally but temple floors can be slippery after rain.", color: "bg-amber-50 border-amber-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 2-day circuit, two comfort levels. Madurai is an affordable city — even the comfortable plan is very manageable.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Guesthouse near temple (₹600–1000)</td><td className="py-2.5 px-4">Hotel with rooftop temple view (₹2000–4000)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Walk + auto (most sights within 3 km)</td><td className="py-2.5 px-4">Auto hire or private cab</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Food</td><td className="py-2.5 px-4">Murugan Idli, street stalls, Bismi</td><td className="py-2.5 px-4">Same + Tam Brahm cooking class</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹4,000</td><td className="py-2.5 px-4 font-medium text-teal">₹4,000–10,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive → Temple circuit → Hall of 1000 Pillars → 9 PM bedchamber ceremony. Day 2: Thirumalai Nayakkar Palace → Gandhi Museum → second temple visit → Madurai food.
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
                title="Temple Circuit, Hall of Pillars & the 9 PM Ceremony"
                items={[
                  "Fly or take an express train to Madurai. From Chennai: 8.5 hrs by train. From Coimbatore: 4 hrs. From Bangalore: 6 hrs. The Madurai airport has direct flights from all major cities.",
                  activeTab === "A"
                    ? "Check in to a guesthouse near the temple (₹600–1000). The area around the East Tower has multiple budget options. Proximity matters — you'll be walking to the temple multiple times."
                    : "Check in to a hotel near the temple with rooftop views (₹2000–4000). Some heritage hotels on Madurai's West Masi Street have direct sightlines to the southern gopuram — worth the upgrade.",
                  "Afternoon: Head to the Meenakshi Amman Temple. Start with the eastern gopuram — at 170 feet, it's one of the tallest in India. The surface is covered in 1,500+ sculptures painted in vivid colours. Stand back and count the tiers.",
                  "Enter the temple complex. Non-Hindus can access the outer corridors, the four entrances, and the main corridor frescoes. Camera entry ₹50. The inner sanctuaries of Meenakshi and Sundareswarar are restricted to Hindus.",
                  "Potramarai Kulam — the golden lotus tank at the temple's heart. In Dravidian architecture, the tank is sacred and marks the axis of the complex. The gopuram reflections in the water at golden hour are extraordinary.",
                  "Hall of a Thousand Pillars (actually 985 pillars, each carved differently — no two are alike). The 22 musical pillars are the highlight: carved from a single block of granite, each produces a distinct musical note when struck lightly. The sound resonates through the entire hall. Photography allowed.",
                  "Temple kitchen — the largest in Tamil Nadu, feeding 9,000 people daily as prasad. The scale of the operation is staggering. Ask a temple staff member to show you the kitchen entrance.",
                  "Evening: Return to your hotel and rest. Dinner at Murugan Idli Shop (the chain started here in Madurai — the idlis are extraordinary, soft, pillowy, eaten with 6 different chutneys). Or try kothu parotta at street stalls on West Masi Street.",
                  "9 PM: Return to the temple for the Arulmigu Meenakshi Sundareswar ceremony. Arrive by 8:30 PM. Priests carry a silver image of Lord Sundareswarar in a gold-decorated palanquin to Meenakshi's bedchamber for the night. Devotees crowd every entrance. The ceremony lasts 20 minutes and has been performed without interruption for centuries.",
                ]}
                cost={activeTab === "A" ? "₹2,000" : "₹4,000–5,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Palaces, Museums & Madurai Street Food"
                items={[
                  "Morning: Thirumalai Nayakkar Palace (17th century, Indo-Saracenic architecture, built by King Thirumalai Nayak). The central courtyard is 248 feet long with 40-foot columns. One of the most impressive royal halls in South India. Entry ₹30 (Indians). Allow 1.5 hours.",
                  "Gandhi Memorial Museum (one of India's finest Gandhi museums — the exhibition includes the bloodstained dhoti Gandhi was wearing when he was assassinated). The museum puts the temple city in its modern historical context. Essential. Allow 1.5 hours.",
                  "Afternoon: Return to the Meenakshi Temple for a second visit in different light. The corridors look completely different in afternoon sun versus evening. Explore the sections you missed — the gopurams on the north and west sides, the outer corridors.",
                  "Vaigai riverfront walk — the Vaigai River runs through Madurai. In the afternoon, the ghats come alive with vendors, fishermen, and locals. A different, quieter face of the city.",
                  "Kazimar Big Mosque (near the temple) — one of the oldest mosques in Tamil Nadu, built in the 13th century. The coexistence of this mosque with the temple complex 200m away is one of Madurai's quiet stories.",
                  "Food: Bismi Hotel for mutton biryani on banana leaf (a Madurai institution — the biryani here is cooked in the Tamil style, different from Hyderabadi). Jigarthanda for dessert — a Madurai-specific drink: sarsaparilla, almond gum, nannari syrup, reduced milk. Indigenous to this city.",
                  activeTab === "B"
                    ? "Evening: Tam Brahm cooking class (can be arranged through your hotel). Learn to make rasam, kootu, and filter coffee in a traditional Madurai kitchen. A completely different way to end a temple trip."
                    : "Evening: Street stalls on Town Hall Road for kothu parotta and filter coffee before departure.",
                ]}
                cost={activeTab === "A" ? "₹1,800" : "₹3,000–5,000"}
              />
            </div>
          </section>

          {/* ── TEMPLE GUIDE ── */}
          <section id="temple" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🛕 Temple Guide: What to See</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The Meenakshi complex is so large that most visitors see only 30% of it. Here&apos;s a priority ranking.
            </p>
            <div className="space-y-4">
              {[
                { rank: "#1", item: "The 9 PM Bedchamber Ceremony", where: "Inner sanctum corridor, 9 PM daily", access: "All visitors", note: "The most important thing you can witness here. The silver image of Sundareswarar is carried in a palanquin to Meenakshi's bedchamber every single night. It has happened every night for centuries. Arrive by 8:30 PM.", emoji: "🌙", color: "bg-amber-50 border-amber-200" },
                { rank: "#2", item: "Hall of a Thousand Pillars", where: "East side of complex", access: "All visitors", note: "985 individually carved pillars — no two alike. The 22 musical pillars carved from single granite blocks and producing musical notes when struck are the highlight. One of the finest examples of Dravidian stone-carving.", emoji: "🏛️", color: "bg-amber-50 border-amber-200" },
                { rank: "#3", item: "Potramarai Kulam (Golden Lotus Tank)", where: "Central temple tank", access: "All visitors", note: "The sacred tank reflecting the gopurams. At golden hour, this is one of the most photographed spots in South India. The tank is said to be the mythological birthplace of Meenakshi.", emoji: "💧", color: "bg-teal-50 border-teal-200" },
                { rank: "#4", item: "The 14 Gopurams", where: "All four directions", access: "All visitors (exterior)", note: "Stand at the far end of each mada street to see the gopuram in full. The southern gopuram at 45m is the tallest. Each has 1,500–2,000 sculptures. The repainting happens every 12 years — colours are vivid and intentional.", emoji: "🛕", color: "bg-teal-50 border-teal-200" },
                { rank: "#5", item: "Inner Sanctum (Meenakshi & Sundareswarar)", where: "Central shrine", access: "Hindus only", note: "Non-Hindus cannot enter. If you are Hindu, the garbhagriha of Meenakshi (the goddess with fish-shaped eyes) is the spiritual heart of the entire complex. Queue early morning to avoid the longest lines.", emoji: "🙏", color: "bg-rose-50 border-rose-200" },
                { rank: "#6", item: "Temple Kitchen", where: "North section", access: "With permission", note: "The largest temple kitchen in Tamil Nadu feeds 9,000 people daily free prasad. Ask at the temple office for permission to view the kitchen operation. The scale — the massive vessels, the conveyor systems for chapati — is humbling.", emoji: "🍛", color: "bg-rose-50 border-rose-200" },
              ].map((f) => (
                <div key={f.item} className={`rounded-xl border p-5 ${f.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{f.emoji}</span>
                      <span className="text-xs font-bold text-gold-dark mt-1 block">{f.rank}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{f.item}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{f.where} · {f.access}</p>
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
              query="meenakshi temple hall thousand pillars granite carvings"
              fallback="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=900&q=80"
              alt="Hall of a Thousand Pillars at Meenakshi Temple Madurai"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Hall of 1000 Pillars: 985 pillars, each carved differently, over 2,000 years of continuous craftsmanship. The 22 musical pillars carved from single granite blocks produce distinct notes when struck.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹4,000", color: "bg-amber-50 border-amber-200",
                  items: [["Accommodation (1–2 nights)", "₹600–1,000/night"], ["Local transport", "₹200–400"], ["Food (2 days)", "₹600–900"], ["Temple camera fee", "₹50"], ["Palace + Museum entry", "₹60"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹4,000–10,000", color: "bg-teal-50 border-teal-200",
                  items: [["Hotel with temple view (1–2 nights)", "₹2,000–4,000/night"], ["Private auto / cab", "₹600–1,000"], ["Restaurants + cooking class", "₹1,500–3,000"], ["Entry fees + guided tour", "₹300–600"], ["Shopping (textiles, spices)", "₹500–2,000"]] },
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
              * All prices per person. Does not include travel to/from Madurai. The temple entry itself is free — camera fee is ₹50. Temple is open 5 AM–12:30 PM and 4 PM–10 PM daily.
            </p>
          </section>

          <AffiliateBlock destination="Madurai" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Missing the 9 PM Bedchamber Ceremony", desc: "This is the single most important thing to witness here. Most tourists don't know it exists. Every night at 9 PM, Sundareswarar is carried to Meenakshi's chamber. Arrive by 8:30 PM. Don't be the tourist who leaves at 7 PM.", icon: "🌙" },
                { title: "Not checking temple opening hours", desc: "The Meenakshi Temple closes 12:30–4 PM every day for noon prayers. Planning arrival at 2 PM means you'll wait 2 hours outside. Morning visits (5–10 AM) are best — quietest and most atmospheric.", icon: "⏰" },
                { title: "Expecting to enter the inner sanctum as a non-Hindu", desc: "Non-Hindus cannot access the main shrines. Accept this gracefully — the outer complex alone is breathtaking. The Hall of Pillars, Potramarai Tank, gopurams, and the evening ceremony are all accessible to everyone.", icon: "🛕" },
                { title: "Skipping Thirumalai Nayakkar Palace", desc: "Most one-day visitors skip it. Wrong call. The central courtyard with its 40-foot pillars is one of the finest royal halls in South India, and it's only 1 km from the temple. Allow 90 minutes.", icon: "🏛️" },
                { title: "Visiting in May–June without preparation", desc: "Temperatures hit 38–42°C in summer. The temple's marble floors are scalded. Carry water, wear cotton, start visits before 8 AM, take rest during 12–4 PM closure. October–March is far more comfortable.", icon: "🌡️" },
                { title: "Ignoring Madurai's food", desc: "Madurai has one of South India's strongest regional food identities. Kothu parotta, Murugan Idli's rice cakes, Bismi's banana leaf biryani, and jigarthanda (a drink indigenous to Madurai) are not optional side notes.", icon: "🍛" },
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
                { icon: "🛕", title: "Non-Hindu Access to Meenakshi Temple", desc: "Non-Hindus cannot enter the inner sanctuaries, but can access the outer corridors, Hall of 1000 Pillars, Potramarai tank, and the temple kitchen. The most spectacular parts — gopurams, tank, corridor frescoes — are accessible to all.", color: "bg-amber-50 border-amber-200" },
                { icon: "⏰", title: "Temple Timings and Busiest Hours", desc: "Open 5 AM–12:30 PM and 4 PM–10 PM daily (closed 12:30–4 PM for noon prayers). Busiest: 7–10 AM and 6–8 PM. Quietest and most atmospheric: 5–6 AM and after 9 PM for the evening ceremony.", color: "bg-amber-50 border-amber-200" },
                { icon: "🎵", title: "The Musical Pillars", desc: "In the Hall of 1000 Pillars, 22 musical pillars carved from single stone produce distinct musical notes when struck. The sound resonance is due to precise granite density variations. Touching the pillars lightly to hear the sound is permitted.", color: "bg-teal-50 border-teal-200" },
                { icon: "🌙", title: "The 9 PM Bedchamber Ceremony", desc: "Every night at 9 PM, priests carry a silver image of Sundareswarar in a palanquin to Meenakshi's golden bedroom chamber. Arrive by 8:30 PM to secure a position. It lasts 20 minutes and has been performed without interruption for centuries.", color: "bg-teal-50 border-teal-200" },
                { icon: "🍛", title: "Madurai Food Must-Tries", desc: "Kothu parotta (shredded layered bread stir-fried with egg and vegetables, best near West Masi Street), Murugan Idli's soft rice cakes, Bismi's mutton biryani on banana leaf, and jigarthanda (sarsaparilla + almond gum + milk dessert, indigenous to Madurai).", color: "bg-rose-50 border-rose-200" },
                { icon: "🚗", title: "Getting Around Madurai", desc: "The temple and most attractions are within 3 km. Walk or take auto (negotiate, ₹50–100 within city). Full-day auto hire: ₹600–800. The airport is 12 km from the temple. Ola and Uber operate in Madurai.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates and group — we&apos;ll send a personalised Madurai itinerary including the 9 PM ceremony logistics within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Madurai Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Can non-Hindus enter Meenakshi Temple?", a: "Non-Hindus can access the temple's outer corridors, all 4 entrances, the Potramarai tank area, the Hall of 1000 Pillars, and the temple museum. The innermost sanctuaries (garbhagriha) of Meenakshi and Sundareswarar are restricted to Hindus only. This still gives access to roughly 80% of the complex." },
                { q: "What are the 14 gopurams of Meenakshi Temple?", a: "Gopurams are the ornate gateway towers covered in thousands of brightly painted sculptures. The 14 gopurams at Meenakshi range from 45m (southern gopuram, tallest) to smaller inner ones. They depict scenes from Hindu mythology. The colors are repainted every 12 years — the current paint was done recently." },
                { q: "How many sculptures does Meenakshi Temple have?", a: "The temple complex has approximately 33,000 sculptures. The 985 pillars in the Hall of Pillars alone have over 4,500 individual sculptures. The gopurams add thousands more. The entire complex took 2,000 years to build (starting 6th century CE) under successive Pandya and Nayak dynasties." },
                { q: "What is the best time to visit Madurai?", a: "October to March is most comfortable (25–32°C). The Chithirai Festival (April–May) is the biggest annual celebration — the celestial wedding of Meenakshi and Sundareswarar, with processions through all 4 madas (streets). Avoid May–June (hottest, 38–42°C)." },
                { q: "How far is Madurai from Chennai and Coimbatore?", a: "Chennai: 460 km (7 hrs by road, 8.5 hrs by express train). Coimbatore: 210 km (4 hrs). Trichy: 135 km (3 hrs). Madurai has its own airport with direct flights from Chennai, Bangalore, Mumbai, Delhi, and Coimbatore." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Meenakshi — Highlights"
            subtitle="The best of Meenakshi in photos."
            spots={[
              { name: "Meenakshi Landscape", query: "meenakshi india landscape scenic beautiful travel", desc: "The stunning landscapes of Meenakshi." },
              { name: "Meenakshi Temple", query: "meenakshi temple architecture heritage india", desc: "Historic temples and architecture in Meenakshi." },
              { name: "Meenakshi Street Scene", query: "meenakshi street market local culture india", desc: "Local life and culture in Meenakshi." },
              { name: "Meenakshi Nature", query: "meenakshi nature hills forest river india", desc: "Natural beauty around Meenakshi." },
              { name: "Meenakshi Sunset", query: "meenakshi sunset golden hour india travel", desc: "Meenakshi at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Continue Exploring South India</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Rameshwaram — Ramayana Circuit (170 km)", href: "/blog/rameswaram-2-days" },
                { label: "Kodaikanal — Hill Station Escape (120 km)", href: "/blog/kodaikanal-3-days" },
                { label: "Kochi — Kerala Gateway", href: "/blog/kochi-3-days" },
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

          <CombineWith currentSlug="meenakshi-temple-2-days" />
          <RelatedGuides currentSlug="meenakshi-temple-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
