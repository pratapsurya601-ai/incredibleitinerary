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

const MAWLYNNONG_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "sights",    emoji: "🌿", label: "Top Sights" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Mawlynnong 2-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Mawlynnong in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function MawlynnongClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹5k total for 2 days", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹5k–12k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MAWLYNNONG_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Mawlynnong" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="living root bridge meghalaya forest green"
            fallback="https://images.unsplash.com/photo-1518639192441-5b9e9eea7faf?w=1600&q=85"
            alt="Living root bridge in the lush green forests of Meghalaya northeast India"
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
              <span className="text-white/70">Mawlynnong 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Eco & Culture
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">9 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Mawlynnong in 2 Days: Asia&apos;s Cleanest Village
                <em className="italic text-gold-light"> &amp; Living Root Bridges</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                A bridge grown over 25 years from a rubber fig tree, a river so clear boats appear to float in air, and a community that has kept its village spotless for generations without anyone telling them to.
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
              <span>🇮🇳 Meghalaya</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹3,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              I stood on the Dawki riverbank watching a wooden boat float six feet above what appeared to be nothing. The water was so clear it was invisible. I could count the pebbles on the riverbed ten feet down. This is the most surreal thing I&apos;ve seen in India.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Northeast India remains underexplored by most Indian travellers, let alone international visitors. Mawlynnong is the reason to change that. It combines three genuinely extraordinary things within 35 km: a village that has maintained a community-driven cleanliness culture for generations, a bridge grown entirely from living tree roots, and a river that defies visual comprehension. Two days from Shillong covers all of it.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌡️" label="Best Season" value="Oct–Apr (avoid Jun–Sep monsoon for travel)" />
            <StatCard icon="🏡" label="Village Pop." value="~100 families" />
            <StatCard icon="🚗" label="Distance from Shillong" value="90 km" />
            <StatCard icon="⭐" label="Rating" value="4.6★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Meghalaya is one of the wettest places on Earth. Timing is everything — the difference between a crystal-clear Dawki and an opaque brown river.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Feb", emoji: "✅", title: "Best Season", desc: "Post-monsoon October–February is the sweet spot: Dawki is crystal clear, root bridge paths are dry, and the jungle is lush without being hazardously wet. November–January sees some cool nights (10–15°C). December can be foggy but atmospheric. Book homestays ahead in peak season.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Mar–May", emoji: "🌤️", title: "Good Season", desc: "March–April is warm (22–28°C) and still clear enough for Dawki. The forest is vivid green. May starts getting humid as pre-monsoon clouds build. A slightly less visited time — good for budget travellers who prefer smaller crowds.", color: "bg-amber-50 border-amber-200" },
                { season: "Jun–Sep", emoji: "🌧️", title: "Avoid (Monsoon)", desc: "Cherrapunji nearby gets 12,000mm annually — some of this rainfall affects Mawlynnong too. Roads can flood, the Dawki turns murky and dangerous, and jungle trekking to the root bridge is slippery. Only experienced trekkers with local guides should visit in monsoon.", color: "bg-red-50 border-red-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 2-day route, two comfort levels. Mawlynnong is one of the most affordable destinations in India given how extraordinary the experience is.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Village homestay, shared room (₹600–1,000)</td><td className="py-2.5 px-4">Better homestay, private room + Dawki camping</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Bus + shared jeep (₹180–200 total)</td><td className="py-2.5 px-4">Private taxi (₹2,000–2,500 for the day)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Food</td><td className="py-2.5 px-4">Homestay meals included</td><td className="py-2.5 px-4">Homestay meals + better accommodation</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹5,000</td><td className="py-2.5 px-4 font-medium text-teal">₹5,000–12,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Shillong to Mawlynnong → village walk → living root bridge → Sky Walk. Day 2: Dawki crystal river → Umngot boat ride → Shnongpdeng → return via Cherrapunji viewpoints.
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
                title="Mawlynnong Village, Living Root Bridge & Sky Walk"
                items={[
                  activeTab === "A"
                    ? "Bus from Shillong to Pynursla (2.5 hrs, ₹100) → Shared taxi Pynursla to Mawlynnong (30 min, ₹80). Total transport cost: ₹180. The route passes through the East Khasi Hills — pine forests, rolling hills, and the occasional village market."
                    : "Private taxi from Shillong covering Mawlynnong + Dawki (₹2,000–2,500 for the full 2-day circuit). Comfortable, flexible, and the driver doubles as a local guide for stops along the way.",
                  activeTab === "A"
                    ? "Check in at a village homestay (₹600–1,000, includes dinner). Book through the village committee — ask your Shillong hotel to help arrange this. Homestays in Mawlynnong are family-run; the hosts speak some English and the food is home-cooked Khasi cuisine."
                    : "Check in at a better homestay with a private room (₹1,200–1,800). The village has around 10–12 homestays at different quality levels. Book the ones closer to the root bridge trailhead for easier early morning access.",
                  "Village walk: Mawlynnong's cleanliness is not performative — it is built into the community's daily routine. Bamboo dustbins are placed at every corner (the design is traditional, not plastic). A stream runs through the village; locals actively clean it. The ban on plastic predates the award by decades.",
                  "Living Root Bridge of Mawlynnong (700m walk from village centre, well-signed): A single-root bridge grown by guiding the aerial roots of a rubber fig (Ficus elastica) tree over a bamboo scaffolding for 25+ years. It is now strong enough to hold 50 people. The Khasi people have been building these for generations — Meghalaya has 70+ root bridges. This one is one of the most accessible.",
                  "Sky Walk: A bamboo observation platform 85 feet high in the forest canopy. On a clear day you can see into Bangladesh — the flat green plains of the Sylhet region visible beyond the steep Khasi Hills escarpment. Bring binoculars if you have them.",
                  "Evening: Homestay dinner — Khasi rice with local chicken curry (or vegetarian pumpkin preparations). Khasi cuisine is simple, warming, and very different from the curries of mainland India. Early night — Day 2 starts before 8 AM.",
                ]}
                cost="₹2,000"
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Dawki Crystal River, Umngot Boat Ride & Shnongpdeng"
                items={[
                  "Morning departure to Dawki (35 km from Mawlynnong, 45 min). The drive descends from the Khasi plateau to the Bangladesh border — the road drops sharply through dense forest with views of the plains opening up below.",
                  "Dawki / Umngot River: The river forms the India-Bangladesh border at this point. The water clarity here is genuinely extraordinary — at its clearest (October–April), the riverbed 30 feet below is perfectly visible. Wooden boats appear to float in mid-air. This is not a photograph trick or editing.",
                  activeTab === "A"
                    ? "Umngot River boat ride (₹500/boat, shared between travellers — usually 4–6 people). The shared boats depart from the Dawki jetty. You drift along the crystal water for 30–45 minutes, watching the border marker in the river. Budget tip: arrive early to share a boat with other groups."
                    : "Private boat ride (₹1,000–1,500/boat for 2 people) with flexibility to stop and take photographs at specific spots. The private boats also go further upstream where the water is even clearer.",
                  "Shnongpdeng (3 km from Dawki jetty): A camping spot on the riverbank popular with adventure travellers. Options: cliff jumping (5m, safe with a guide), kayaking (₹400/hr), zip-lining over the river. Even if you don't do activities, the swimming here is excellent — the river is clean, shallow (1–2m at the swimming area), and warm enough from October onwards.",
                  activeTab === "A"
                    ? "Afternoon: Drive back to Shillong through the Nongstoin route, passing the Cherrapunji viewpoints. The drive back takes 3–3.5 hours. Arrive Shillong by evening. Total Day 2 budget: ₹2,500."
                    : "Optional: Stay overnight at Shnongpdeng camping (₹1,500/person, tents on the riverbank, dinner and breakfast included). Wake up to the river fog lifting off the crystal water. Return to Shillong next morning.",
                ]}
                cost={activeTab === "A" ? "₹2,500" : "₹5,500"}
              />
            </div>
          </section>

          {/* ── TOP SIGHTS ── */}
          <section id="sights" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🌿 Top Sights in Detail</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each sight in this region rewards understanding the context behind it. Here is what you actually need to know.
            </p>
            <div className="space-y-4">
              {[
                { rank: "#1", sight: "Mawlynnong Village", details: "The cleanliness is community-maintained: bamboo dustbins at every junction, a communal cleaning rotation for the stream that runs through the village, and a strictly enforced plastic ban. Discover India magazine awarded it 'Asia's Cleanest Village' in 2003 and again in 2005. The village has 95 households and a literacy rate of 100% — the highest in Meghalaya. No hotels, only homestays.", emoji: "🏡", color: "bg-amber-50 border-amber-200" },
                { rank: "#2", sight: "Living Root Bridge", details: "700m walk from the village centre (well-signed path, takes 15 minutes). The bridge is a single span grown from the roots of a Ficus elastica tree. The Khasi people guide the roots over a bamboo or betel nut palm scaffolding for 15–25 years until the bridge is strong enough to bear weight. The Mawlynnong bridge is approximately 50–60 years old at its thickest root sections. Best photographed in the morning before tour groups arrive.", emoji: "🌿", color: "bg-amber-50 border-amber-200" },
                { rank: "#3", sight: "Sky Walk (Bamboo Viewpoint)", details: "A spiralling bamboo platform 85 feet above ground, built without nails — traditional Khasi construction using bamboo joinery. Entry ₹20. Views on a clear day extend across the Khasi Hills escarpment and into the Sylhet plains of Bangladesh. Best visibility: morning (before 10 AM) and late afternoon (after 3 PM). The platform sways slightly — perfectly safe but worth knowing in advance.", emoji: "🏯", color: "bg-teal-50 border-teal-200" },
                { rank: "#4", sight: "Dawki / Umngot River", details: "The Umngot River drains the Khasi Hills plateau before crossing into Bangladesh at Dawki. The clarity is caused by the absence of silt — the catchment area is mostly forested rock, not agricultural land, so there is very little suspension in the water. Clearest: October–April (dry season). After heavy rain, clarity drops significantly. The border checkpoint is at the Dawki bridge — don't photograph the military installations.", emoji: "🌊", color: "bg-teal-50 border-teal-200" },
                { rank: "#5", sight: "Shnongpdeng", details: "3 km from Dawki on the Indian side of the river. A cluster of eco-campsites on the riverbank used by adventure travellers from Shillong. Cliff jumping: 5m platform into deep water (safe with local guide). Kayaking: ₹400/hr. Ziplining: ₹500. Camping: ₹1,200–1,500/person (tent + meals). The swimming here is the best in Meghalaya — clear water, sand and pebble floor, gentle current.", emoji: "🏕️", color: "bg-rose-50 border-rose-200" },
              ].map((f) => (
                <div key={f.sight} className={`rounded-xl border p-5 ${f.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{f.emoji}</span>
                      <span className="text-xs font-bold text-gold-dark mt-1 block">{f.rank}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{f.sight}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{f.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SIGHTS IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="dawki umngot river crystal clear boats meghalaya"
              fallback="https://images.unsplash.com/photo-1518639192441-5b9e9eea7faf?w=900&q=80"
              alt="Crystal clear Umngot river at Dawki with boats appearing to float in air"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Umngot River at Dawki: the boats are not edited, the water is not cleaned, and the riverbed is genuinely 30 feet below those wooden hulls. October–April is the only window when this is possible.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹5,000", color: "bg-amber-50 border-amber-200",
                  items: [["Transport (bus + shared taxi)", "₹360–500"], ["Homestay (2 nights incl. meals)", "₹1,200–2,000"], ["Dawki boat ride (shared)", "₹500–700"], ["Activities (Sky Walk, etc.)", "₹100–300"], ["Miscellaneous", "₹300–500"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹5,000–12,000", color: "bg-teal-50 border-teal-200",
                  items: [["Private taxi (2-day circuit)", "₹2,000–2,500"], ["Better homestay (private room)", "₹1,200–2,500"], ["Dawki boat ride (private)", "₹1,000–1,500"], ["Shnongpdeng camping", "₹1,200–1,500"], ["Activities + meals", "₹800–1,500"]] },
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
              * All prices per person from Shillong. Does not include travel to Shillong from Guwahati or other cities. Mawlynnong homestays include dinner and breakfast — no additional food budget needed for Day 1.
            </p>
          </section>

          <AffiliateBlock destination="Mawlynnong" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Visiting Dawki after monsoon rain", desc: "The Umngot River's clarity collapses after even moderate rainfall. If it has rained in the past 48 hours, the river will be noticeably murkier. Plan your Dawki visit during a clear weather window — October to April is the only reliable period.", icon: "🌊" },
                { title: "Not booking the homestay in advance", desc: "Mawlynnong has no hotels — only 10–12 family homestays. In peak season (October–February) they fill up a week in advance. Ask your Shillong hotel to help you contact the village committee or use a Meghalaya-focused travel operator.", icon: "🏡" },
                { title: "Relying on Jio or Airtel in the village", desc: "BSNL is the most reliable network in Mawlynnong and the Dawki area. Jio and Airtel have very limited signals. Download offline maps (Maps.me for Mawlynnong + Dawki area) before leaving Shillong.", icon: "📱" },
                { title: "Coming during monsoon (June–September)", desc: "Cherrapunji nearby gets 12,000mm of rain annually and Mawlynnong gets significant overflow. The Dawki river turns opaque brown. Root bridge paths become dangerously slippery. Roads occasionally flood. The experience is entirely different — and not in a good way for first-time visitors.", icon: "🌧️" },
                { title: "Trying to do Mawlynnong and Cherrapunji in one day", desc: "They're 85 km apart. Doing both in one day means doing neither properly. Mawlynnong + Dawki is a full 2-day programme. Cherrapunji (Nohkalikai Falls, Mawsmai Cave, Seven Sisters Falls) is a separate 1–2 day programme from Shillong.", icon: "🗺️" },
                { title: "Photographing border installations at Dawki", desc: "The India-Bangladesh border runs through the Umngot River at Dawki. BSF (Border Security Force) personnel are present. Do not photograph the border checkpoint, the bridge, or any military infrastructure. The river itself and the boats are fine to photograph.", icon: "📷" },
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
                { icon: "🌿", title: "The Root Bridge Takes 25 Years", desc: "The living root bridge in Mawlynnong was grown by guiding rubber fig tree roots over a bamboo frame. It takes 15–25 years to become usable. The Khasi people have been doing this for generations — Meghalaya has 70+ such bridges.", color: "border-green-200 bg-green-50" },
                { icon: "🌊", title: "Dawki: Go on a Clear Day", desc: "The Umngot River's clarity is only spectacular on sunny days. After rain or during monsoon, the water is murky. Visit October–April for best visibility. Arrive before 10 AM to avoid tour groups.", color: "border-blue-200 bg-blue-50" },
                { icon: "🏡", title: "Homestay is the Right Way", desc: "Mawlynnong has no hotels — only family-run homestays. Book ahead through the village committee (ask your Shillong hotel to help). The hosts speak some English and Khasi cooking (rice + local herbs + pork or fish) is excellent.", color: "border-amber-200 bg-amber-50" },
                { icon: "🚌", title: "How to Reach Mawlynnong", desc: "From Shillong: Shillong → Pynursla (bus, 2.5 hrs, ₹100–150) → Mawlynnong (shared taxi, 30 min, ₹60–80). Alternatively, hire a private taxi from Shillong for the day (₹2,000–2,500 covering Mawlynnong + Dawki).", color: "border-purple-200 bg-purple-50" },
                { icon: "📱", title: "Network is Limited", desc: "BSNL works best in Mawlynnong. Airtel and Jio have limited signals — don't rely on Google Maps inside the village. Download offline maps for the Dawki area before leaving Shillong.", color: "border-red-200 bg-red-50" },
                { icon: "🌧️", title: "When NOT to Visit", desc: "Monsoon (June–September) brings extreme rainfall — Cherrapunji nearby gets 12,000mm annually. Roads can flood, Dawki river turns cloudy, and jungle trekking is dangerous. Visit October–April for the best experience.", color: "border-orange-200 bg-orange-50" },
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
              Tell us your dates and we&apos;ll send a personalised Meghalaya itinerary — including the Shillong–Mawlynnong–Dawki–Cherrapunji circuit, homestay bookings, and transport — within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Meghalaya Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Why is Mawlynnong called Asia's Cleanest Village?", a: "Discover India magazine first awarded it the title in 2003. The Khasi community has maintained a self-imposed cleanliness culture for generations — bamboo dustbins on every corner, a stream that flows through the village kept clean by community effort, and a ban on plastic. The award brought tourism, which the village has managed carefully." },
                { q: "Is the Mawlynnong Living Root Bridge double-decker?", a: "No — Mawlynnong has a single-root bridge. The famous double-decker root bridge is in Nongriat (near Cherrapunji, 3 km hike). Both are extraordinary examples of bioengineering. If you can manage the 6 km round-trip hike to Nongriat, it's worth combining both." },
                { q: "Can I swim in the Dawki River?", a: "Yes — the river is clean and shallow (1–3m in most places). Locals swim near Shnongpdeng. However, the border zone is sensitive — stay away from the Bangladesh side and don't photograph border installations." },
                { q: "How far is Mawlynnong from Shillong?", a: "90 km (2.5–3 hrs by road via Pynursla). The route passes through East Khasi Hills — beautiful but winding. Private taxi: ₹2,000–2,500 for the full day (Mawlynnong + Dawki). Shared transport takes longer but costs ₹150–200 total." },
                { q: "What is the best base for exploring Meghalaya?", a: "Shillong is the best base — it has hotels for all budgets, good connectivity, and is central for Mawlynnong (90 km), Cherrapunji (55 km), Dawki (95 km), and Nongkhnum Island (75 km). Most travelers spend 2 nights in Shillong and take day trips." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Mawlynnong — Highlights"
            subtitle="The best of Mawlynnong in photos."
            spots={[
              { name: "Mawlynnong Landscape", query: "mawlynnong india landscape scenic beautiful travel", desc: "The stunning landscapes of Mawlynnong." },
              { name: "Mawlynnong Temple", query: "mawlynnong temple architecture heritage india", desc: "Historic temples and architecture in Mawlynnong." },
              { name: "Mawlynnong Street Scene", query: "mawlynnong street market local culture india", desc: "Local life and culture in Mawlynnong." },
              { name: "Mawlynnong Nature", query: "mawlynnong nature hills forest river india", desc: "Natural beauty around Mawlynnong." },
              { name: "Mawlynnong Sunset", query: "mawlynnong sunset golden hour india travel", desc: "Mawlynnong at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Northeast India Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Shillong — 3 Days in the Scotland of the East", href: "/blog/shillong-3-days" },
                { label: "Cherrapunji — 2 Days at the World's Wettest Place", href: "/blog/cherrapunji-2-days" },
                { label: "Kaziranga — 3 Days with One-Horned Rhinos", href: "/blog/kaziranga-3-days" },
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

          <CombineWith currentSlug="mawlynnong-2-days" />
          <RelatedGuides currentSlug="mawlynnong-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
