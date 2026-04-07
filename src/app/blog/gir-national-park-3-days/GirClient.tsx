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

const GIR_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "safari",    emoji: "🦁", label: "Lion Safari Guide" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Gir National Park 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Gir National Park — Asiatic Lions Safari Guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function GirClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "₹8k–12k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹15k–25k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={GIR_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Gir National Park" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="asiatic lion gir national park gujarat wildlife"
            fallback="https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1600&q=85"
            alt="Asiatic lion in Gir National Park Gujarat India"
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
              <span className="text-white/70">Gir National Park 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Wildlife Safari
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Gir National Park in 3 Days:
                <em className="italic text-gold-light"> Last Wild Asiatic Lions on Earth</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                674 lions. One forest. The only place on earth where you can see wild Asiatic lions — a distinct subspecies smaller than their African cousins, with a visible belly fold and a different social structure.
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
              <span>💰 From ₹8,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The jeep stopped. Thirty metres ahead, a lion crossed the track slowly — enormous, unbothered. It glanced at us once, then disappeared into the dry teak forest. That was our entire sighting. It was enough for a lifetime.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Gir is the only place in the world where you can see wild Asiatic lions. In 1900 there were fewer than 20 left. In 2023 there were 674. This is conservation&apos;s greatest comeback story, and you can witness it first-hand in one of India&apos;s most rewarding wildlife destinations.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌡️" label="Best Season" value="Dec–Apr" />
            <StatCard icon="🦁" label="Lion Population" value="600+ (2023 census)" />
            <StatCard icon="🌿" label="Area" value="1,412 km²" />
            <StatCard icon="⭐" label="Rating" value="4.7★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The park has a defined season. Getting the timing right massively affects sighting probability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Dec–Apr", emoji: "✅", title: "Peak Season", desc: "Cool and dry (18–30°C). Vegetation thins out making lions easier to spot. December–February is most comfortable. The Konark Dance Festival is in December. Book safaris 30–45 days ahead.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Apr–Jun", emoji: "☀️", title: "Summer — Best Sightings", desc: "Extreme heat (38–42°C) but lions concentrate at waterholes and are visible every safari. Many wildlife photographers specifically visit in May for guaranteed waterhole sightings. Not comfortable, but extraordinary.", color: "bg-amber-50 border-amber-200" },
                { season: "Jul–Oct", emoji: "🚫", title: "Park Closed", desc: "Gir closes mid-June to mid-October for monsoon and lion mating season. The exact dates are October 16 – June 15 for open season. Plan accordingly.", color: "bg-red-50 border-red-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 3-day route, two comfort levels. The core experience — lion safaris — is identical either way.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Budget lodge in Sasan Gir (₹800–1500)</td><td className="py-2.5 px-4">Gir Jungle Lodge or Amidhara Resort (₹4000–8000)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Safari</td><td className="py-2.5 px-4">Shared jeep (₹1,500–2,000/person)</td><td className="py-2.5 px-4">Private jeep + naturalist (₹3,000–5,000/safari)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Devalia</td><td className="py-2.5 px-4">₹600/person (included)</td><td className="py-2.5 px-4">₹600/person (included)</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">₹8,000–12,000</td><td className="py-2.5 px-4 font-medium text-teal">₹15,000–25,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive Sasan Gir → Devalia Zone (guaranteed sightings) → Crocodile centre. Day 2: Two core zone safaris — morning and afternoon. Day 3: Final safari → Somnath Temple → depart.
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
                title="Arrive Sasan Gir & Devalia Zone Safari"
                items={[
                  "Train to Veraval (nearest major railhead, 45 km from Sasan Gir) or flight to Rajkot (160 km, 3 hrs by road). Transfer to Sasan Gir village — the base for all Gir safaris.",
                  activeTab === "A"
                    ? "Check in to a budget lodge in Sasan Gir village (₹800–1,500/night). Several options near the forest gate — Lion Safari Lodge, Gir Lodge. Basic but functional."
                    : "Check in to Gir Jungle Lodge or Amidhara Resort (₹4,000–8,000/night). Both have naturalist staff, forest-facing rooms, and handle safari bookings. The added naturalist knowledge is genuinely valuable.",
                  "Devalia Interpretation Zone safari (open 8 AM–5 PM, ₹600/person by government jeep). Devalia is a 4 km² enclosed area within the core zone boundary — it has resident lions who are permanently visible. Unlike the core zone where sightings depend on luck, Devalia guarantees lion viewing.",
                  "The Devalia experience is different from core zone — less wilderness, more zoo-like in concept — but for first-day arrival, it provides immediate orientation to Asiatic lion behaviour before your core zone safari the next morning.",
                  "Evening: Crocodile breeding centre near Sasan (free, 30 minutes). Mugger crocodiles bred for release into Hiran River. The Hiran River corridor through Gir supports a significant crocodile population.",
                ]}
                cost={activeTab === "A" ? "₹4,000" : "₹7,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Core Zone Safari — Morning & Afternoon"
                items={[
                  "5:30 AM: Core zone jeep safari. Book at girlion.in (the official government portal). Shared jeep: ₹1,500–2,000/person, includes guide. The morning safari is the most productive — lions are active at dawn.",
                  "Core zone: the sanctuary area has the highest lion density. You may see lions walking on tracks, resting under teak trees, or at seasonal waterholes. The landscape is dry deciduous forest — different from East African savanna. Lions here use the forest differently.",
                  "Asiatic lions (Panthera leo persica) differ from African lions: smaller body, prominent belly fold, less-developed manes in males, ears that show through the mane. Their social structure also differs — males and females form separate prides, meeting only for mating. Gir is the entire world population of this subspecies.",
                  "Other wildlife in the core zone: spotted deer (chital), sambar, nilgai (blue bull), Indian leopard (rarer — seen mostly in buffer zones), sloth bears, and 300+ bird species including crested serpent eagles.",
                  activeTab === "A"
                    ? "Afternoon 3 PM: Second core zone safari on a different route. Shared jeep. Two safaris in one day dramatically improves sighting probability — if you miss lions in the morning, the afternoon often delivers."
                    : "Afternoon 3 PM: Private jeep safari with dedicated naturalist (₹3,000–5,000). The naturalist tracks specific prides and knows movement patterns — sighting probability rises significantly. Photography light in the afternoon (3–6 PM golden hour) is excellent.",
                ]}
                cost={activeTab === "A" ? "₹4,000" : "₹8,000"}
              />

              {/* ── Day 3 ── */}
              <DayCard
                day="Day 3"
                title="Final Safari & Somnath Temple"
                items={[
                  "5:30 AM: Final morning safari — core zone. Three safaris over the visit gives a very high cumulative sighting probability, even if any individual safari comes up empty.",
                  "Check out and depart for Somnath Temple (45 km from Sasan Gir, 1 hour drive). Somnath is one of the 12 Jyotirlingas — the most sacred Shiva temples in Hinduism. This temple has been destroyed and rebuilt 7 times by various rulers over 1,200 years.",
                  "The current structure (rebuilt 1951, inaugurated by Sardar Patel) faces the Arabian Sea. The evening aarti at Somnath is powerful — conducted on the ocean-facing terrace with the sound of waves behind the ceremony. One of India's most atmospheric temple experiences.",
                  activeTab === "A"
                    ? "Depart from Veraval station or Diu Airport (65 km from Somnath) for onward travel."
                    : "Diu Island is 65 km from Somnath — Portuguese heritage architecture, clean beaches, relaxed atmosphere. Worth a night if your schedule allows. Fly from Diu Airport.",
                ]}
                cost={activeTab === "A" ? "₹3,000" : "₹5,000"}
              />
            </div>
          </section>

          {/* ── LION SAFARI GUIDE ── */}
          <section id="safari" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🦁 Lion Safari Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Everything you need to know about booking and getting the most from your Gir safari.
            </p>
            <div className="space-y-4">
              {[
                { title: "Booking at girlion.in", emoji: "🖥️", desc: "The official government portal for Gir core zone jeep safaris. Opens 90 days ahead, sells out 30–45 days ahead in peak season. Slots are released daily for same-day cancellations — check at 6 AM for last-minute availability. Book the moment your dates are confirmed.", color: "bg-amber-50 border-amber-200" },
                { title: "Core Zone vs Devalia", emoji: "🗺️", desc: "Core zone: 6 safari routes, jeep-only, strict visitor limits (fewer than 10 vehicles per zone per slot), highest lion density, genuine wilderness experience — sighting not guaranteed. Devalia: small enclosed interpretation zone, government jeeps only, lions always present — guaranteed sighting but less wild. Do both if possible.", color: "bg-blue-50 border-blue-200" },
                { title: "Safari Timings", emoji: "🕐", desc: "Morning slot: 6:00–9:00 AM (check-in 5:30 AM at gate). Evening slot: 3:00–6:00 PM. Morning is better for sightings — lions are active after a night of hunting. Evening is better for photography — golden light. Two safaris per day is the recommended strategy.", color: "bg-green-50 border-green-200" },
                { title: "What to Wear", emoji: "👕", desc: "Earthy colours — khaki, olive, brown. Avoid bright colours and white. Bring a light jacket even in winter — mornings in the open jeep at 6 AM can be cold. Hat, sunscreen, and binoculars are essential. Photography: 300–500mm lens for lion close-ups from the jeep.", color: "bg-purple-50 border-purple-200" },
              ].map((f) => (
                <div key={f.title} className={`rounded-xl border p-5 ${f.color}`}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{f.emoji}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900 mb-1">{f.title}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SAFARI IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="asiatic lion wildlife safari india gir forest"
              fallback="https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=900&q=80"
              alt="Asiatic lion in the dry forest of Gir National Park"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Gir&apos;s Asiatic lions (Panthera leo persica) are a distinct subspecies — the entire world&apos;s wild population lives in this one forest in Gujarat. Recovery from under 20 in 1900 to 674 in 2023.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "₹8,000–12,000", color: "bg-amber-50 border-amber-200",
                  items: [["Accommodation (3 nights)", "₹2,400–4,500"], ["Core zone safaris (3×)", "₹4,500–6,000"], ["Devalia Zone", "₹600"], ["Transport", "₹1,500–2,000"], ["Food", "₹1,000–1,500"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹15,000–25,000", color: "bg-teal-50 border-teal-200",
                  items: [["Accommodation (3 nights)", "₹12,000–24,000"], ["Private jeep safaris (3×)", "₹9,000–15,000"], ["Devalia Zone", "₹600"], ["Transport", "₹3,000–5,000"], ["Food", "₹2,000–3,000"]] },
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
              * All prices per person. Does not include travel to/from Gujarat. Safari bookings at girlion.in. Devalia jeep: ₹600/person (government rate).
            </p>
          </section>

          <AffiliateBlock destination="Gir National Park" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Not booking safaris in advance", desc: "Peak season core zone slots sell out 30–45 days ahead. If you arrive without a booking, you may be limited to Devalia only. Book at girlion.in the moment your trip dates are confirmed.", icon: "📅" },
                { title: "Expecting African savanna-style sightings", desc: "Gir is dry deciduous forest — you won't see lions across open grassland. Sightings are often brief: a lion crossing a track, lying under a tree, glimpsed through vegetation. This is real wildlife, not a game ranch.", icon: "🌳" },
                { title: "Visiting in monsoon (July–October)", desc: "The park is closed. There is no exception. Plan for October 16 – June 15 open season.", icon: "🚫" },
                { title: "Wearing bright colours on safari", desc: "Bright red, orange, or white clothing alerts wildlife. Earthy tones (khaki, olive, tan) are standard. Most lodges will mention this — but arrive prepared.", icon: "👕" },
                { title: "Skipping Devalia", desc: "Many serious wildlife travellers skip Devalia as 'not the real thing.' It isn't — but the up-close lion viewing, particularly for first-timers and families, is excellent. It also provides insurance against a core zone safari without sightings.", icon: "🎯" },
                { title: "Not combining with Somnath", desc: "Somnath Jyotirlinga is 45 km from Sasan Gir. The combination of a wildlife sanctuary and one of India's most significant temples is one of Gujarat's most compelling itineraries. Don't leave without spending 2 hours at Somnath.", icon: "🛕" },
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
                { icon: "🦁", title: "Asiatic vs African Lions", desc: "Gir's lions are a distinct subspecies (Panthera leo persica) — smaller with a prominent belly fold and less-developed manes in males. They're the only wild Asiatic lions on earth (600+ in 2023 census). Their social structure differs too — males and females form separate prides that meet only for mating.", color: "border-amber-200 bg-amber-50" },
                { icon: "📋", title: "Book Safari at girlion.in", desc: "The official government portal is girlion.in. Jeep safaris book out 30–45 days ahead in peak season. Book as soon as your dates are confirmed. The Devalia Zone doesn't need advance booking and guarantees lion sightings.", color: "border-blue-200 bg-blue-50" },
                { icon: "🎯", title: "Devalia for Guaranteed Sightings", desc: "If your core zone safari doesn't yield lion sightings, Devalia (the interpretation zone) guarantees it — it's a 4 km² enclosed area with resident lions. Less 'wild' feeling but great for photography and family visits. Open 8 AM–5 PM.", color: "border-green-200 bg-green-50" },
                { icon: "🌡️", title: "Best Season for Gir", desc: "December–April is ideal. November is good but slightly hot. May–June: extreme heat (42°C) but lions visible at water holes — experienced travelers time their visit here. Park closes mid-June to mid-October (monsoon).", color: "border-orange-200 bg-orange-50" },
                { icon: "🐆", title: "Don't Overlook Leopards", desc: "Gir has a healthy leopard population — often seen in the buffer zone at dusk. Striped hyenas, sloth bears, Indian wolves, and 300+ bird species make Gir more diverse than its lion-centric reputation suggests.", color: "border-purple-200 bg-purple-50" },
                { icon: "🛕", title: "Combine with Somnath", desc: "Somnath Jyotirlinga (45 km from Sasan Gir) is one of India's most significant temples — facing the Arabian Sea, rebuilt 7 times after invasions. The evening aarti with the sea backdrop is powerful. Worth a 3-hour detour on departure day.", color: "border-red-200 bg-red-50" },
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
              Tell us your dates and group — we&apos;ll send a personalised Gir safari itinerary with safari bookings handled, within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Gir Safari →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What are the chances of seeing lions in Gir?", a: "Core zone safaris have a 70–80% sighting probability in peak season. Devalia (interpretation zone) has near-100% sighting probability — lions are resident and regularly visible. Morning safaris have higher sighting rates." },
                { q: "How many Asiatic lions are left in the wild?", a: "The 2023 census counted 674 Asiatic lions in Gir — up from 523 in 2015. This is the entire world population of wild Asiatic lions. The recovery from fewer than 20 lions in 1900 to 674 in 2023 is one of conservation's great success stories." },
                { q: "Is Gir National Park open all year?", a: "No — the park closes mid-June to mid-October for the monsoon and mating season. Open October 16 – June 15. Peak season: December–April." },
                { q: "How to reach Sasan Gir?", a: "Nearest railway: Sasan Gir has its own small station (trains from Veraval, Rajkot, Ahmedabad). Nearest airport: Rajkot (160 km, 3 hrs) or Diu Airport (65 km, faster). From Ahmedabad: 360 km (6 hrs by road) or train (7–9 hrs to Veraval/Sasan)." },
                { q: "What is the difference between the core zone and buffer zone at Gir?", a: "Core zone (sanctuary): jeep safaris only, strictly managed, no human settlements — highest lion density. Buffer zone: surrounding 1,153 km², some villages, less restricted — good for leopard, birds, and secondary wildlife. Devalia is within the core zone boundary but manages as a separate interpretation area." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Gujarat &amp; Wildlife India</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Ahmedabad — Heritage City Guide", href: "/blog/ahmedabad-3-days" },
                { label: "Kutch — Rann of Kutch Festival", href: "/blog/kutch-3-days" },
                { label: "Somnath — Jyotirlinga Day Trip", href: "/blog/somnath-1-day" },
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

          <CombineWith currentSlug="gir-national-park-3-days" />
          <RelatedGuides currentSlug="gir-national-park-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
