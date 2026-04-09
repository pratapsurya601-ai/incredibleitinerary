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

const PERIYAR_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "safari",    emoji: "🐘", label: "Safari & Activities" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Periyar Wildlife 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Periyar Thekkady in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function PeriyarClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹8k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹8k–20k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={PERIYAR_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Periyar (Thekkady)" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="periyar lake elephant kerala wildlife sanctuary thekkady"
            fallback="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&q=85"
            alt="Elephants at Periyar Lake Thekkady Kerala wildlife sanctuary"
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
              <span className="text-white/70">Periyar 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Wildlife & Spice
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Periyar Wildlife Sanctuary in 3 Days:
                <em className="italic text-gold-light"> Lake Safari, Elephants &amp; Spice Estates</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                A bamboo raft on a misty lake with elephants on the shore. A night patrol through the buffer zone with forest guards. Fresh cardamom picked off the plant. Periyar is Kerala&apos;s most layered wildlife destination.
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
              <span>🇮🇳 Kerala</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹5,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              We were on the bamboo raft at 6 AM when the mist cleared and five elephants appeared at the shoreline. They didn&apos;t run. We didn&apos;t speak. For twenty minutes, the lake was completely silent except for the sound of their drinking.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Periyar Tiger Reserve (Thekkady) is Kerala&apos;s most complete wildlife experience. The 26 km² Periyar Lake creates a unique habitat — elephants come to the water&apos;s edge, crocodiles bask on the banks, and the bamboo raft puts you level with the animals. Add the Night Patrol, the Kumily spice estates, and the Tiger Trail trek, and you have 3 days that move between forest, water, and spice garden unlike anywhere else in India.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌿" label="Best Season" value="Oct–May" />
            <StatCard icon="💧" label="Lake Area" value="26 km²" />
            <StatCard icon="🚗" label="Distance from Kochi" value="190 km" />
            <StatCard icon="⭐" label="Rating" value="4.7★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Periyar is open year-round but wildlife sightings and safari quality vary significantly by season.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Feb", emoji: "✅", title: "Best Season", desc: "Post-monsoon greenery with active wildlife. Elephants visible in large numbers at the lake. Cool temperatures (18–26°C). Excellent for birding — migratory species arrive. Bamboo rafting is at its best.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Mar–May", emoji: "🐘", title: "Peak Elephant Season", desc: "As the lake recedes, elephant herds concentrate at the water's edge — sometimes 20+ animals at once. Hotter (28–34°C) but the wildlife spectacle compensates. Book bamboo rafting 2+ weeks ahead.", color: "bg-amber-50 border-amber-200" },
                { season: "Jun–Sep", emoji: "🌧️", title: "Monsoon", desc: "Periyar stays open during monsoon but boat sightings drop significantly as elephants retreat into dense forest. Heavy rain, leeches on trails, some activities suspended. The forest is lush but wildlife is elusive.", color: "bg-red-50 border-red-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 3-day Periyar experience, two comfort levels. The bamboo rafting, Night Patrol, and spice walks are available to both.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Guesthouse in Kumily (₹700–1200)</td><td className="py-2.5 px-4">Shalimar Spice Garden or Spice Village (CGH Earth)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Safari</td><td className="py-2.5 px-4">Shared motorboat + bamboo raft</td><td className="py-2.5 px-4">Private naturalist + bamboo raft</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Food</td><td className="py-2.5 px-4">Local Kerala meals restaurants</td><td className="py-2.5 px-4">Resort dining + Kerala cooking class</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (3 days)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹8,000</td><td className="py-2.5 px-4 font-medium text-teal">₹8,000–20,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive Kumily + afternoon lake boat safari (elephants at the shore). Day 2: Tiger Trail trek + bamboo rafting + Night Patrol. Day 3: Spice garden + departure.
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
                title="Arrive Kumily + Periyar Lake Boat Safari"
                items={[
                  "Bus from Kochi (4 hrs, KSRTC ₹180) or Munnar (3 hrs, ₹150 shared taxi). The road from Munnar descends through cardamom plantation country — one of Kerala's most scenic drives.",
                  activeTab === "A"
                    ? "Check in to a Kumily guesthouse near the spice market (₹700–1200/night). The town is compact — most sights are within walking distance."
                    : "Check in to Shalimar Spice Garden Resort (₹4,000–8,000) or Spice Village (CGH Earth, ₹8,000–15,000) — both are set within working spice gardens with naturalist-guided walks included.",
                  "Afternoon: Periyar Lake bamboo raft safari — book at periyartigerreserve.com (₹300–600/person for 1.5 hr shared motorboat). Watch elephants come to the water's edge, monitor lizards on the banks, fishing eagles, and otters. The lake is 26 km² — you cover significant distance.",
                  "Dusk: The elephant herds often appear in larger numbers in the late afternoon, especially near the inlet channels. Alert your boat guide to position for the best angle.",
                  "Evening: Kumily spice market walk — the main bazaar has estate shops selling fresh cardamom, black pepper, cinnamon, and cloves. Smell and taste the difference between estate-fresh and supermarket spices. Dinner at a local Kerala meals restaurant.",
                ]}
                cost={activeTab === "A" ? "₹2,500" : "₹5,000–8,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Tiger Trail Trek + Bamboo Rafting + Night Patrol"
                items={[
                  "Morning: Tiger Trail — a 3 km guided trek inside the reserve (₹1,000–1,500/person including guide). You enter the Periyar buffer zone on foot with a trained naturalist. Species encountered: gaur, sambar deer, Nilgiri langur, giant Malabar squirrel, and a huge range of birds. Tiger sightings are rare but pug marks are commonly found.",
                  "Cardamom estate walk in Kumily (10:30 AM, numerous estates welcome visitors, ₹100–200 entry). See cardamom growing under forest shade, black pepper climbing the support trees, and nutmeg with its mace-covered seed. Buy directly from the estate — 50–70% cheaper than airport shops.",
                  activeTab === "A"
                    ? "Afternoon: Full bamboo rafting (4-hr safari on bamboo raft — book at periyartigerreserve.com, ₹1,200/person, limited to 12/day). Quieter than the motorboat, gets closer to wildlife, and is the most authentic Periyar experience. Book at least 2 days in advance."
                    : "Afternoon: Bamboo rafting (₹1,200/person) followed by a private naturalist-guided lake session arranged through your resort. The Spice Village naturalist can provide species identification and photography guidance.",
                  "Night Patrol (7–10 PM, with forest guards, ₹600/person — book at Eco Tourism Centre by 3 PM same day). 6 visitors + 2 forest guards, torches only, through the buffer zone trails. Nocturnal wildlife: giant flying squirrels, Malabar civet, Indian giant Malabar squirrel, gaur. One of Periyar's most unusual offerings.",
                ]}
                cost={activeTab === "A" ? "₹3,500" : "₹4,500–7,000"}
              />

              {/* ── Day 3 ── */}
              <DayCard
                day="Day 3"
                title="Spice Garden + Departure to Alleppey or Kochi"
                items={[
                  "Morning: Visit a working spice garden (Green View Plantation or Abraham's Spice Garden, ₹100–200 entry). A guided walk through cardamom, black pepper, cinnamon, cloves, vanilla, and nutmeg growing together — the entire spice rack in one garden.",
                  "Buy spices directly from the estate before leaving: cardamom (₹600–800/100g vs ₹1,500+ in cities), peppercorns, cinnamon sticks. Look for 'Idukki cardamom' — the finest grade, grown at 1,500m altitude.",
                  activeTab === "A"
                    ? "Depart by noon. Bus to Alleppey (3 hrs, ₹180) or Kochi (4 hrs). Book the overnight houseboat on Alleppey backwaters for the night."
                    : "Depart with private taxi (₹2,500–3,500 to Alleppey). Stop at Sabarimala viewpoint en route. Check into an Alleppey houseboat (₹6,000–15,000/night) — the perfect Kerala triangle completes here.",
                  "The Kerala triangle: Kochi → Munnar (tea) → Periyar (wildlife + spice) → Alleppey (backwaters) → Kochi. 6–7 days total, one of India's finest slow travel circuits.",
                ]}
                cost={activeTab === "A" ? "₹2,000" : "₹3,000–5,000"}
              />
            </div>
          </section>

          {/* ── SAFARI GUIDE ── */}
          <section id="safari" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🐘 Safari & Activities Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Periyar has more activity options than any other Kerala wildlife destination. Here&apos;s how to prioritise.
            </p>
            <div className="space-y-4">
              {[
                { rank: "Bamboo Rafting", icon: "🎋", where: "Book at periyartigerreserve.com", price: "₹1,200/person (4 hrs, max 12/day)", note: "The most authentic Periyar experience — half a day on a traditional bamboo raft, silent, low on the water. Gets closer to wildlife than the motorboat. Only 12 spots per day. Book 2+ days ahead. Mornings (7 AM start) are best.", color: "bg-amber-50 border-amber-200" },
                { rank: "Motorboat Safari", icon: "⛵", where: "KTDC boats from Thekkady Boat Jetty", price: "₹300–600/person (1.5 hrs)", note: "The standard Periyar experience — covers more lake distance, good for first-time visitors. See elephants, crocodiles, monitor lizards, and waterbirds. Multiple departure times 7 AM–3 PM. No advance booking needed (mostly) but arrive 30 min early.", color: "bg-amber-50 border-amber-200" },
                { rank: "Night Patrol", icon: "🌙", where: "Eco Tourism Centre, Kumily (book by 3 PM)", price: "₹600/person (7–10 PM, 6 visitors max)", note: "Forest guards take you through buffer zone paths in darkness. Nocturnal wildlife: giant flying squirrel, Malabar civet, gaur, porcupine. Rare but memorable. Book in person at the Eco Tourism Centre on the same day — sometimes available at periyartigerreserve.com.", color: "bg-teal-50 border-teal-200" },
                { rank: "Tiger Trail Trek", icon: "🥾", where: "Departs from Eco Tourism Centre, 7 AM", price: "₹1,000–1,500/person (3 km, guided)", note: "3 km guided trek through the Periyar buffer zone with a certified naturalist. Gaur and sambar commonly encountered. Tiger pug marks often found. Limited group size. Suitable for moderate fitness. Book the day before at the forest office.", color: "bg-teal-50 border-teal-200" },
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

          {/* ── SAFARI IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="bamboo raft lake kerala wildlife elephant mist"
              fallback="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=900&q=80"
              alt="Bamboo raft on Periyar Lake with elephants in the mist"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Periyar bamboo raft: 4 hours, 12 people maximum, completely silent on the water. The motorboat is good; the bamboo raft is extraordinary. Book it first.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹8,000", color: "bg-amber-50 border-amber-200",
                  items: [["Accommodation (3 nights)", "₹2,100–3,600"], ["Boat/raft safaris", "₹1,500–1,800"], ["Night patrol + Tiger Trail", "₹1,600–2,100"], ["Food (3 days)", "₹900–1,500"], ["Transport Kochi–Thekkady", "₹180–500"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹8,000–20,000", color: "bg-teal-50 border-teal-200",
                  items: [["Spice Village/Shalimar (3 nights)", "₹12,000–45,000"], ["Private naturalist", "₹2,000–3,000/day"], ["Bamboo raft + activities", "₹1,500–3,000"], ["Private taxi Kochi–Thekkady", "₹2,500–3,500"], ["Ayurvedic treatment", "₹2,000–5,000"]] },
              ].map((b) => (
                <div key={b.plan} className={`rounded-xl border p-5 ${b.color}`}>
                  <div className="text-center mb-4">
                    <span className="text-2xl">{b.emoji}</span>
                    <p className="font-serif text-base text-ink mt-1">{b.plan}</p>
                    <p className="font-serif text-xl text-ink font-medium mt-1">{b.total}</p>
                    <p className="text-xs text-muted uppercase tracking-wider">per person (3 days)</p>
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
              * Budget assumes guesthouse accommodation in Kumily and shared safaris/activities. Comfortable assumes resort accommodation per person (divide couple rates by 2). Does not include travel from your origin city to Kochi.
            </p>
          </section>

          <AffiliateBlock destination="Periyar" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Booking only the motorboat and skipping bamboo rafting", desc: "Most visitors take the motorboat (1.5 hrs) and think they've done Periyar. The bamboo rafting (4 hrs, 12 people max) is a completely different experience — silent, slow, at water level. Book it first, everything else around it.", icon: "🎋" },
                { title: "Not booking bamboo rafting in advance", desc: "Only 12 spots per day total. Bamboo rafting at periyartigerreserve.com fills up 2–5 days ahead in peak season (October–March). Book before you leave for Thekkady.", icon: "📅" },
                { title: "Skipping the Night Patrol", desc: "The Night Patrol is Periyar's most unusual and underrated offering. Most tourists don't know it exists. Book at the Eco Tourism Centre by 3 PM on the day. Giant flying squirrels and Malabar civets are worth the 3-hour evening investment.", icon: "🌙" },
                { title: "Buying spices from the main road tourist shops", desc: "The main Kumily road has shops selling 'fresh spices' at tourist prices. Go to the actual estates (Green View Plantation, Abraham's Spice Garden) where you taste the spices growing, understand what you're buying, and pay estate prices — 50–70% less.", icon: "🌿" },
                { title: "Visiting only in monsoon", desc: "Periyar stays open in monsoon but elephant sightings on the lake drop sharply as animals retreat into forest. If your only option is June–August, lower your wildlife expectations and focus on the spice estates and trekking instead.", icon: "🌧️" },
                { title: "Underestimating Thekkady's altitude", desc: "Thekkady/Kumily sits at 900m elevation. Even in 'summer', evenings can be cool. Bring a light layer. The misty mornings on the lake are cold — especially on the bamboo raft.", icon: "🌡️" },
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
                { icon: "🎋", title: "Bamboo Rafting vs Motorboat Safari", desc: "The motorboat safari (KTDC, 1.5 hrs) is cheaper and covers more distance. The bamboo raft (half-day, 4 hrs) is quieter, gets closer to wildlife, and is the most authentic Periyar experience. Book bamboo rafting at least 2 days ahead — only 12 people per trip.", color: "bg-amber-50 border-amber-200" },
                { icon: "🐘", title: "Best Time for Elephant Sightings", desc: "March–May, as the Periyar Lake's water level drops, elephants congregate at the shoreline in larger numbers. The dry-season herds (sometimes 20+ animals) are extraordinary. October–November is next best. Monsoon sees elephants in dense forest — boat sightings drop.", color: "bg-amber-50 border-amber-200" },
                { icon: "🌙", title: "Night Patrol: Underrated Experience", desc: "The 2-hour Night Patrol with forest guards (6 of you + 2 guards, torches only) through the buffer zone is Periyar's most unusual offering. Nocturnal wildlife: giant flying squirrels, Malabar civet, giant Malabar squirrel, gaur. Book at the forest office by 3 PM same day.", color: "bg-teal-50 border-teal-200" },
                { icon: "🌿", title: "Spice Estate Walk", desc: "The area around Kumily is densely planted with cardamom, black pepper, cinnamon, cloves, and nutmeg. Most estates offer guided walks (₹100–200) where you taste fresh spices off the plant. Buy spices directly from the estate — 50–70% cheaper than airport shops.", color: "bg-teal-50 border-teal-200" },
                { icon: "🚌", title: "How to Reach Periyar Thekkady", desc: "From Kochi: bus (KSRTC, 4 hrs, ₹180) or taxi (₹2,500–3,000). From Munnar: taxi/bus (3 hrs, ₹150 bus). From Madurai: 3 hrs. Periyar is Kerala's most central wildlife destination — equidistant from Kochi, Munnar, and Madurai.", color: "bg-rose-50 border-rose-200" },
                { icon: "🛍️", title: "What to Buy in Kumily", desc: "Fresh spices from estate shops (not tourist shops): cardamom (₹600–800/100g, vs ₹1,500+ in cities), black pepper, cinnamon sticks. Look for 'Idukki cardamom' — the finest grade, from 1,500m altitude estates. Also: Periyar Tiger Reserve themed handicrafts (profits go to tribals).", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates and group — we&apos;ll send a personalised Periyar + Kerala circuit itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Periyar Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What wildlife can I see in Periyar?", a: "Elephant (most commonly seen from boats), tiger (rarely, they avoid the lake), leopard (buffer zone night patrol), gaur (Indian bison), sambar deer, wild boar, Nilgiri langur, lion-tailed macaque, giant Malabar squirrel, and 266+ bird species. The Periyar Lake boat/raft offers unique elephant and waterbird viewing." },
                { q: "How is Periyar different from Nagarhole for wildlife?", a: "Nagarhole has higher tiger and leopard density and the spectacular Kabini elephant crossing. Periyar offers a unique lake-based wildlife experience (bamboo rafting), stronger spice estate culture, and better accessibility from both Kerala coasts. Nagarhole is better for pure big-cat safari; Periyar is better for the complete Kerala eco-experience." },
                { q: "Is the night patrol at Periyar safe?", a: "Yes — the Night Patrol is led by trained forest guards carrying torches and first aid. You stay on established paths. The most common encounters are with gaur (intimidating but not aggressive if approached quietly), porcupines, and giant flying squirrels. Bear encounters are rare; tigers are very rarely seen." },
                { q: "Can I combine Periyar with Munnar and Alleppey?", a: "The classic Kerala triangle: Kochi → Munnar (2 days tea estates, 4 hrs from Kochi) → Periyar/Thekkady (2 days wildlife, 3 hrs from Munnar) → Alleppey houseboat (1 night, 3 hrs from Thekkady) → Kochi (2.5 hrs). 6–7 days total — one of India's best road trips." },
                { q: "What is the Periyar Tiger Reserve Night Patrol booking process?", a: "At the Eco Tourism Centre in Kumily, book in person on the day (opens 9 AM). The patrol goes from approximately 7–10 PM. Limited to 6–8 visitors per group, 2 groups per night. Cost: approximately ₹600/person. Sometimes available to book online at periyartigerreserve.com — check in advance." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Periyar Wildlife — Highlights"
            subtitle="The best of Periyar Wildlife in photos."
            spots={[
              { name: "Periyar Wildlife Landscape", query: "periyar wildlife india landscape scenic beautiful travel", desc: "The stunning landscapes of Periyar Wildlife." },
              { name: "Periyar Wildlife Temple", query: "periyar wildlife temple architecture heritage india", desc: "Historic temples and architecture in Periyar Wildlife." },
              { name: "Periyar Wildlife Street Scene", query: "periyar wildlife street market local culture india", desc: "Local life and culture in Periyar Wildlife." },
              { name: "Periyar Wildlife Nature", query: "periyar wildlife nature hills forest river india", desc: "Natural beauty around Periyar Wildlife." },
              { name: "Periyar Wildlife Sunset", query: "periyar wildlife sunset golden hour india travel", desc: "Periyar Wildlife at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning the Full Kerala Circuit?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Munnar — 3 Days in the Tea Estates", href: "/blog/munnar-3-days" },
                { label: "Alleppey — 3 Days on the Backwaters", href: "/blog/alleppey-3-days" },
                { label: "Nagarhole — 3 Days Kabini Safari", href: "/blog/nagarhole-3-days" },
                { label: "Browse All Kerala Guides", href: "/#packages" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="periyar-wildlife-3-days" />
          <RelatedGuides currentSlug="periyar-wildlife-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
