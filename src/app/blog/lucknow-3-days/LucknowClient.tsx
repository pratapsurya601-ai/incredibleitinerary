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

const LUCKNOW_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "food",      emoji: "🍢", label: "Food Guide" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Lucknow 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Lucknow in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function LucknowClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹5k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹5k–15k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={LUCKNOW_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Lucknow" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="bara imambara lucknow rumi darwaza nawab heritage"
            fallback="https://images.unsplash.com/photo-1590253230532-a67f5527a593?w=1600&q=85"
            alt="Bara Imambara Lucknow grand facade with Rumi Darwaza in background"
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
              <span className="text-white/70">Lucknow 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Heritage &amp; Food
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Lucknow in 3 Days: The Nawabs,
                <em className="italic text-gold-light"> the Labyrinth &amp; the Galawati Kebab</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                3-day guide to Lucknow&apos;s Nawabi heritage — Bara Imambara&apos;s 489-passage maze, the kebab that melts before you bite it, and the chikan embroidery every visitor carries home.
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
              <span>🇮🇳 Uttar Pradesh</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹3,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The galawati kebab at Tunday Kababi dissolves before you finish chewing. It was invented for a toothless Nawab who still insisted on kebabs. Three hundred years later, the recipe hasn&apos;t changed.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Lucknow is the city that gave India the &apos;dum&apos; cooking technique, chikan embroidery, and the most elaborate code of courtly etiquette in the subcontinent. The Nawabs of Awadh built imambaras with labyrinths that still confuse visitors today. Most tourists do Lucknow as a one-day stop between Agra and Varanasi. Three days lets you actually experience it.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Best Season" value="Oct–Mar" />
            <StatCard icon="🍢" label="Signature Dish" value="Galawati Kebab" />
            <StatCard icon="🚂" label="Distance from Delhi" value="500 km (by train)" />
            <StatCard icon="⭐" label="Rating" value="4.6★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Lucknow has classic north Indian weather — scorching summers, pleasant winters, and a monsoon that soaks the old city.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Mar", emoji: "✅", title: "Best Season", desc: "October–November: warm and dry (20–30°C). December–February: cool (7–20°C) — the food tastes better in the cold and the monuments have fewer visitors. March: comfortable. The old city&apos;s narrow lanes are pleasant to walk.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Apr–Jun", emoji: "🔥", title: "Brutal Summer", desc: "Lucknow hits 42–46°C in May–June. The Bara Imambara&apos;s open courtyards are baking. The bhul-bhulaiya labyrinth is airless and sweltering. Avoid unless your schedule demands it.", color: "bg-red-50 border-red-200" },
                { season: "Jul–Sep", emoji: "🌧️", title: "Monsoon", desc: "High humidity and intermittent rain. The old city lanes flood easily. September starts cooling — barely manageable. The food tour is still excellent indoors.", color: "bg-amber-50 border-amber-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 3-day route, two comfort levels. Lucknow rewards those who eat well and walk slowly.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Old City guesthouse (₹600–1,000)</td><td className="py-2.5 px-4">Hotel near Hazratganj (₹2,000–4,000)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Walk + shared autos</td><td className="py-2.5 px-4">Rickshaw day tours + Ola/Uber</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Food</td><td className="py-2.5 px-4">Street food + Tunday Kababi</td><td className="py-2.5 px-4">Street food + Dastarkhwan restaurant</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹5,000</td><td className="py-2.5 px-4 font-medium text-teal">₹5,000–15,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive → Bara Imambara &amp; bhul-bhulaiya → Rumi Darwaza → Hazratganj evening. Day 2: Chota Imambara → Tunday Kababi lunch → British Residency → Aminabad shopping. Day 3: Zoo → Charbagh departure.
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
                title="Bara Imambara, Rumi Darwaza & Hazratganj"
                items={[
                  activeTab === "A"
                    ? "Arrive by the Lucknow Mail overnight train from Delhi (6–8 hrs, depart evening, arrive morning). Check into an Old City guesthouse near Aminabad — ₹600–1,000 per night."
                    : "Arrive by Shatabdi (4.5 hrs from Delhi) or overnight train. Check into a hotel near Hazratganj — ₹2,000–4,000. Central, walkable, good restaurants within 5 minutes.",
                  "Breakfast: Kachori sabzi at Shree Lassi House near the Husainabad area — a Lucknow morning institution. The kachori here is crisp and the sabzi has a depth you won&apos;t find in Delhi versions.",
                  "Bara Imambara (10 AM): Entry ₹25 for Indians. This 1784 structure has no beams — the arched roof supports itself entirely through interlocking brickwork. The bhul-bhulaiya (labyrinth) inside has 489 identical-looking passages, some ending in open drops. A guide (₹100–150) is worth it for context, but wandering alone is also the point. Allow 2 hours.",
                  "Asafi Mosque: Adjacent to the Imambara — non-Muslims are permitted outside prayer times. The ablution tank is one of the finest in Lucknow.",
                  "Rumi Darwaza: The 18m Turkish gateway (1784) modelled on the Sublime Porte in Istanbul. The best angle for photographs is from the road — step back 50 metres. The architecture is more intricate than any photograph captures.",
                  "Clocktower (Hussainabad): India&apos;s tallest clocktower (67m). The Victorian Gothic structure was built in 1887 — an interesting juxtaposition with the Nawabi architecture surrounding it.",
                  "Evening walk in Hazratganj market: Lucknow&apos;s answer to Connaught Place. Lined with colonial-era buildings, bookshops, coffee houses, and the famous Hazratganj chaat stalls. End the day at a lassi shop near the main road.",
                ]}
                cost={activeTab === "A" ? "₹1,800" : "₹5,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Chota Imambara, Tunday Kababi & British Residency"
                items={[
                  "Chota Imambara (Hussainabad Imambara, 9 AM): Built in 1838, smaller than Bara Imambara but more ornate. Belgian chandeliers, 260 glass lanterns, and a throne with Nawab portraits. The gilded dome is the signature image of Lucknow. Entry ₹25 for Indians.",
                  "Picture Gallery: Adjacent to Chota Imambara — life-size portraits of the Nawabs of Awadh. The Nawab who commissioned the Bara Imambara employed 22,000 labourers and kept them working through a famine — paying them by day and having his family destroy the work at night to preserve employment.",
                  "Hussainabad Baoli (step-well): A 19th-century step-well adjacent to the imambara. Largely ignored by tourists. The symmetry of the descending steps is architecturally elegant.",
                  "Lunch: Tunday Kababi, Aminabad branch (the original, not Hazratganj). Galawati kebab with roomali roti — ₹200 for two. The kebab contains 160 spices and a binding agent that no one fully discloses. It dissolves on your tongue before you finish chewing. This is the defining food experience of Lucknow. Do not skip.",
                  activeTab === "A"
                    ? "Ambedkar Memorial Park: The massive Dalit memorial built under Mayawati — a monument of political assertion as much as architecture. Entry free. The scale is staggering."
                    : "Ambedkar Memorial Park + auto tour of old city landmarks with rickshaw driver who knows the lesser-known corners.",
                  "British Residency (3 PM): Entry ₹25 for Indians. The compound where 3,000 British and Indian loyalists held out for 87 days during the 1857 uprising. Cannon marks are still visible on the walls. The ruins have been preserved exactly as they were — grass growing through collapsed ceilings, bullet holes intact. One of the most honest presentations of colonial history in India.",
                  "Dilkusha Kothi garden: A ruined Georgian hunting lodge from 1800, a short auto ride from the Residency. Largely tourist-free. The atmospheric ruins and gardens make excellent photographs at golden hour.",
                  "Evening: Aminabad market for chikan embroidery shopping. Lucknow&apos;s chikan is a hand-embroidery technique with over 36 different stitch patterns — it takes 3–4 weeks to complete a kurta by hand.",
                ]}
                cost={activeTab === "A" ? "₹1,500" : "₹4,500"}
              />

              {/* ── Day 3 ── */}
              <DayCard
                day="Day 3"
                title="Lucknow Zoo & Departure"
                items={[
                  "Lucknow Zoo (9 AM): One of India&apos;s oldest zoos, established 1921. The resident white tigers are the highlight. Entry ₹80 for adults. Allow 2–2.5 hours. The grounds are well-maintained and shaded — a pleasant morning before departure.",
                  "Nawab Wajid Ali Shah&apos;s Charbagh gardens: A short auto ride from the zoo. The formal Mughal garden style, now partly overgrown, gives a sense of the city&apos;s garden culture.",
                  activeTab === "A"
                    ? "Head to Charbagh station for your departure train. Shatabdi to Delhi (4.5 hrs) or overnight trains to other destinations. The station itself is an architectural highlight — built to resemble a chess board with chess pieces as towers."
                    : "Last meal at Dastarkhwan restaurant near Hazratganj — Awadhi biryani with raita and sheer khurma for dessert. ₹600–800 for two. Then Charbagh station.",
                ]}
                cost={activeTab === "A" ? "₹800" : "₹2,500"}
              />
            </div>
          </section>

          {/* ── FOOD GUIDE ── */}
          <section id="food" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🍢 The Lucknow Food Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Awadhi cuisine is the product of a culture obsessed with refinement. The Nawabs employed thousands of cooks. This is what survived.
            </p>
            <div className="space-y-4">
              {[
                { rank: "#1", dish: "Galawati Kebab", where: "Tunday Kababi, Aminabad (original)", price: "₹100–150/plate", note: "160 spices. Invented for a Nawab who lost his teeth but refused to give up kebabs. The texture is almost liquid — it dissolves before you finish chewing. Order with roomali roti. Skip the Hazratganj branch; go to the original in Aminabad.", emoji: "🍢", color: "bg-amber-50 border-amber-200" },
                { rank: "#2", dish: "Awadhi Biryani", where: "Dastarkhwan, near Hazratganj", price: "₹300–400/plate", note: "Dum-cooked in a sealed pot — the steam cooks the rice and meat simultaneously. The Awadhi biryani is lighter than the Hyderabadi version and more fragrant. Served with raita and salan. Best in the evening.", emoji: "🍚", color: "bg-amber-50 border-amber-200" },
                { rank: "#3", dish: "Kachori Sabzi", where: "Shree Lassi House, Husainabad area", price: "₹60–80", note: "The north Indian breakfast of champions. The kachori is deep-fried, flaky, stuffed with spiced lentils. The sabzi (potato curry) has a sourness that cuts through the richness. Eat it by 9 AM before the good batches are gone.", emoji: "🫓", color: "bg-teal-50 border-teal-200" },
                { rank: "#4", dish: "Shahi Tukda", where: "Royal Cafe or any old city sweet shop", price: "₹60–100", note: "Fried bread soaked in condensed milk and topped with rabri (thickened cream). A Nawabi dessert that has survived 200 years. The bread must be fried, not baked — the texture difference is significant.", emoji: "🍮", color: "bg-teal-50 border-teal-200" },
                { rank: "#5", dish: "Nihari", where: "Wahid Biryani, near Akbari Gate", price: "₹150–250", note: "Slow-stewed mutton shank, cooked overnight, eaten at breakfast. The collagen from the bones creates a thick, unctuous gravy. Served with kulcha. The Wahid branch near Akbari Gate is the most consistent for nihari in Lucknow.", emoji: "🍲", color: "bg-rose-50 border-rose-200" },
                { rank: "#6", dish: "Kulfi Falooda", where: "Lal Babu Chaat Bhandar, Hazratganj", price: "₹80–120", note: "Creamy, dense kulfi on a bed of falooda (vermicelli noodles) and rose syrup. The contrast of cold kulfi against the warm falooda with the sweetness of rose water is the perfect Lucknow summer dessert. Even in winter, this is worth it.", emoji: "🍨", color: "bg-rose-50 border-rose-200" },
              ].map((f) => (
                <div key={f.dish} className={`rounded-xl border p-5 ${f.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{f.emoji}</span>
                      <span className="text-xs font-bold text-gold-dark mt-1 block">{f.rank}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{f.dish}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{f.where} · {f.price}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{f.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FOOD IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="lucknow galawati kebab tunday kababi awadhi food"
              fallback="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=900&q=80"
              alt="Galawati kebab with roomali roti at Tunday Kababi Lucknow"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Galawati kebab at Tunday Kababi: ₹150 per plate. Contains 160 spices. Has been made by the same family since 1905. There is no substitute.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹5,000", color: "bg-amber-50 border-amber-200",
                  items: [["Stay (2 nights)", "₹1,200–2,000"], ["Transport (autos + walk)", "₹500–800"], ["Food (street + Tunday)", "₹1,000–1,500"], ["Entry fees (all sites)", "₹150–300"], ["Shopping (chikan)", "₹500–1,500"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹5,000–15,000", color: "bg-teal-50 border-teal-200",
                  items: [["Hotel Hazratganj (2 nights)", "₹4,000–8,000"], ["Rickshaw day tours", "₹1,000–1,500"], ["Food + Dastarkhwan dinner", "₹2,000–3,000"], ["Entry fees + guide", "₹500–1,000"], ["Chikan shopping", "₹1,000–3,000"]] },
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
              * All prices per person. Does not include travel to/from Lucknow. Entry fees are low across all monuments — Bara Imambara and Chota Imambara are ₹25 each for Indians.
            </p>
          </section>

          <AffiliateBlock destination="Lucknow" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Going to the Hazratganj branch of Tunday Kababi", desc: "The Hazratganj branch is convenient but not the original. The Aminabad branch — cramped, unpretentious, lined with old photographs — is where the recipe was perfected. The galawati there is noticeably better. Go to the original.", icon: "🍢" },
                { title: "Entering the bhul-bhulaiya without understanding it", desc: "The Bara Imambara labyrinth has 489 passages. Some end in open drops. It's designed to confuse — that was its original security purpose. A guide (₹100–150) gives context. If you go alone, mark your entry point and go left consistently. Coming back right-consistently gets you out.", icon: "🌀" },
                { title: "Buying chikan embroidery near monument entrances", desc: "The stalls near Bara Imambara and Rumi Darwaza sell machine-made chikan at hand-embroidered prices. Go to Aminabad's Janpath Market or the UP Handicrafts Emporium in Hazratganj — fixed prices, government-regulated quality, actual craftwork.", icon: "🛍️" },
                { title: "Skipping the British Residency", desc: "Most tourists prioritise the imambaras and skip the Residency. But the 1857 Mutiny siege is the event that most directly shaped modern India. The ruins are preserved exactly as they were — this is one of the most atmospheric history sites in the country.", icon: "🏛️" },
                { title: "Coming in summer (Apr–Jun)", desc: "Lucknow hits 44–46°C in May. The imambara courtyards are exposed marble. The bhul-bhulaiya has no ventilation. October–March only. Even November is warm enough for light layers in the morning.", icon: "🌡️" },
                { title: "Leaving without trying nihari for breakfast", desc: "Nihari — mutton slow-cooked overnight — is traditionally a breakfast food in Lucknow. Wahid Biryani near Akbari Gate opens at 8 AM. If you haven&apos;t eaten nihari with kulcha in a Lucknow lane in the morning, you haven&apos;t done Lucknow properly.", icon: "🍲" },
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
                { icon: "🍢", title: "Galawati Kebab: The Real Thing", desc: "Tunday Kababi (Aminabad — original branch, not Hazratganj) serves the real galawati with 160 spices. Order with roomali roti. Don't skip the sheer khurma at the end. Budget ₹150–200 per person.", color: "border-amber-200 bg-amber-50" },
                { icon: "🌀", title: "Bhul-Bhulaiya: The Labyrinth", desc: "The Bara Imambara's maze has 489 identical-looking passages, some ending in blind drops. A guide (₹100–150) is worth it for context. Entrance ₹25 (Indians).", color: "border-blue-200 bg-blue-50" },
                { icon: "🛍️", title: "Chikan Embroidery Is Lucknow's Pride", desc: "Buy chikan kurtas at Aminabad's Janpath Market or the UP Handicrafts Emporium in Hazratganj — fixed prices, government-regulated quality. Avoid shops near tourist sites (inflated prices).", color: "border-purple-200 bg-purple-50" },
                { icon: "🚂", title: "Best Trains from Delhi", desc: "Shatabdi Express (4.5 hrs), Lucknow Mail (overnight, 6–7 hrs), Humsafar Express (6 hrs). All arrive at Lucknow Junction or Charbagh station — both are central.", color: "border-green-200 bg-green-50" },
                { icon: "🍨", title: "Lucknowi Desserts", desc: "Shahi tukda (fried bread in condensed milk), kulfi at Lal Babu Chaat Bhandar, and the royal biryani's companion — raita with boondi. Hazratganj's Raj Kachori is legendary.", color: "border-orange-200 bg-orange-50" },
                { icon: "🏨", title: "Where to Stay in Lucknow", desc: "Budget: Zostel Lucknow (₹400 dorm), Old City guesthouses (₹600–1,000). Mid-range: Hotel Piccadily or Vivanta Lucknow. For Awadhi experience, a heritage haveli near Hazratganj.", color: "border-red-200 bg-red-50" },
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
              Tell us your dates and group size — we&apos;ll send a personalised Lucknow itinerary including train options from Delhi within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Lucknow Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Is 3 days enough for Lucknow?", a: "3 days covers the major monuments, a food tour, and some shopping. If you're deeply interested in Mughal history or the 1857 uprising, add a 4th day for the Residency and Dilkusha Kothi in detail." },
                { q: "What is the best area to stay in Lucknow?", a: "Hazratganj for shopping and eating (central, safe, well-lit). Old City (near Aminabad) for authentic atmosphere but noisier. Hotels near Charbagh station for early departures." },
                { q: "Is Lucknow safe for solo women travelers?", a: "Lucknow is one of UP's safest cities for travelers. Hazratganj and the monument areas have good police presence. Standard precautions apply — avoid deserted lanes after 10 PM." },
                { q: "What is Awadhi cuisine and where should I eat it?", a: "Awadhi cooking uses the 'dum' technique — slow-cooking in sealed pots. Signature dishes: galawati kebab (melt-in-mouth texture), nihari (slow-stewed mutton), sheermal (sweet bread), and biryani. Best restaurants: Tunday Kababi, Dastarkhwan, Wahid Biryani." },
                { q: "Can I do a day trip from Lucknow to Ayodhya?", a: "Yes — Ayodhya is 130 km (2 hrs by road or 45 min by train). It's manageable as a day trip from Lucknow, leaving by 7 AM and returning by 9 PM. But Ayodhya deserves an overnight stay for the morning darshan and Saryu ghat aarti." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Lucknow — Highlights"
            subtitle="The best of Lucknow in photos."
            spots={[
              { name: "Lucknow Landscape", query: "lucknow india landscape scenic beautiful travel", desc: "The stunning landscapes of Lucknow." },
              { name: "Lucknow Temple", query: "lucknow temple architecture heritage india", desc: "Historic temples and architecture in Lucknow." },
              { name: "Lucknow Street Scene", query: "lucknow street market local culture india", desc: "Local life and culture in Lucknow." },
              { name: "Lucknow Nature", query: "lucknow nature hills forest river india", desc: "Natural beauty around Lucknow." },
              { name: "Lucknow Sunset", query: "lucknow sunset golden hour india travel", desc: "Lucknow at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer UP Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Ayodhya — Ram Mandir & Saryu Ghat", href: "/blog/ayodhya-3-days", soon: false },
                { label: "Varanasi — 4 Day Spiritual Journey", href: "/blog/varanasi-4-days", soon: false },
                { label: "Agra — Taj Mahal & Fatehpur Sikri", href: "/blog/agra-2-days", soon: false },
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

          <CombineWith currentSlug="lucknow-3-days" />
          <RelatedGuides currentSlug="lucknow-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
