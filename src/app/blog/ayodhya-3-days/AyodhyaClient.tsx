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

const AYODHYA_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "darshan",   emoji: "🛕", label: "Darshan Guide" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Ayodhya 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Ayodhya in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function AyodhyaClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹4k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹4k–10k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={AYODHYA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Ayodhya" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="ayodhya ram mandir temple india spiritual pilgrimage"
            fallback="https://images.unsplash.com/photo-1599030781658-4ad54a9d7261?w=1600&q=85"
            alt="Ram Mandir Ayodhya illuminated at dusk — India's most significant new temple"
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
              <span className="text-white/70">Ayodhya 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Pilgrimage
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Ayodhya in 3 Days: Ram Mandir,
                <em className="italic text-gold-light"> Saryu Aarti &amp; Sacred Temples</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The complete pilgrimage guide — Ram Mandir darshan booking, Hanuman Garhi, Kanak Bhawan, Saryu ghat aarti, and where to stay for every budget.
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
              <span>💰 From ₹2,000</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Ram Mandir at dawn — white marble glowing saffron in the early light, the smell of incense, the sound of the Saryu flowing nearby — is something you carry with you.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Ayodhya is not just a pilgrimage site — it&apos;s one of the seven sacred cities of Hinduism and the birthplace of Lord Ram. The newly consecrated Ram Mandir (January 2024) has transformed this already significant city into one of India&apos;s most-visited destinations. Whether you&apos;re a pilgrim or a curious traveller, 3 days is the perfect amount of time to absorb the temples, the ghats, and the extraordinary devotion that flows through every street.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌡️" label="Best Season" value="Oct–Mar" />
            <StatCard icon="🛕" label="Entry" value="Free (Ram Mandir)" />
            <StatCard icon="🚆" label="Distance from Delhi" value="700 km" />
            <StatCard icon="⭐" label="Rating" value="4.8★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Ayodhya&apos;s weather is typical of the Gangetic plains — hot summers, mild winters, and a brief monsoon. Plan around the festivals for the most extraordinary experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Mar", emoji: "✅", title: "Best Season", desc: "October–March is ideal — temperatures 10–25°C, Ram Lila performances, and the spectacular Diwali when 10 lakh diyas are lit on the Saryu ghats. November brings the Dev Deepawali celebrations.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Apr–Jun", emoji: "🔥", title: "Brutal Summer", desc: "Temperatures regularly hit 42–45°C. The marble parikrama path at Ram Mandir becomes extremely hot. Avoid unless you have no alternative. Early morning is the only tolerable time.", color: "bg-red-50 border-red-200" },
                { season: "Jul–Sep", emoji: "🌧️", title: "Monsoon", desc: "Warm and humid with heavy rains. The Saryu can flood the lower ghats. Janmashtami (August) and Navratri see heavy crowds. September is acceptable. Avoid peak monsoon weeks.", color: "bg-amber-50 border-amber-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 3-day spiritual journey, two comfort levels. Ayodhya is one of India&apos;s most affordable pilgrimage destinations.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Dharamshala (₹400–800/night)</td><td className="py-2.5 px-4">Hotel (₹1,500–2,500/night)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Walk + shared autos</td><td className="py-2.5 px-4">Auto-rickshaw, private taxi</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Food</td><td className="py-2.5 px-4">Chaat shops + prasad</td><td className="py-2.5 px-4">Restaurants + chaat</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹4,000</td><td className="py-2.5 px-4 font-medium text-teal">₹4,000–10,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive, Hanuman Garhi &amp; Saryu aarti. Day 2: Ram Mandir darshan, Kanak Bhawan &amp; boat ride. Day 3: Gulab Bari &amp; departure.
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
                title="Arrival, Hanuman Garhi & Saryu Ghat Aarti"
                items={[
                  activeTab === "A"
                    ? "Arrive at Katra Bus Stand or Ayodhya Junction → Check in to a dharamshala (₹400–800/night). Kaushalya Bhawan near Ram Janmabhoomi and the Hanuman Garhi dharamshala (₹300–500) are clean options."
                    : "Arrive at Ayodhya Junction → Check in to a hotel (₹1,500–2,500/night). Hotel Ramayan View offers good proximity to the main temples and decent facilities.",
                  "Walk the Ram Janmabhoomi Parikrama Path — the 5 km circumambulation route around the birthplace complex. The path is landscaped, well-lit, and passes through the entire pilgrimage area.",
                  "Evening: Climb the 76 steps to Hanuman Garhi — the hilltop fortress-temple dedicated to Hanuman. Arrive by 5:30 PM for the evening aarti. The views of Ayodhya at dusk from the top are exceptional.",
                  "6 PM: Saryu Ghat evening aarti at Ram Paidi Ghat — 51 lamps lit simultaneously by priests, synchronized devotional singing, the river glowing with diyas. Arrive by 5:30 PM for a front row position. This is free and open to all.",
                  "Dinner: Kachori and jalebi from the chaat shops near Ram Paidi Ghat. Simple, inexpensive, and genuinely good. Most streets around the ghats have stalls open until 9 PM.",
                ]}
                cost={activeTab === "A" ? "₹800–1,200" : "₹2,500–3,500"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Ram Mandir Darshan, Kanak Bhawan & Saryu Boat Ride"
                items={[
                  "5 AM: Ram Mandir darshan — book your slot online at srjbtkshetra.up.gov.in at least 2 weeks ahead for the 5–7 AM slot. Pre-booked entry bypasses the walk-in queue (which can be 3–5 hours). Deposit your phone, bags, and non-essential items at the cloak room before entering.",
                  "The Ram Mandir interior — Nagara-style white granite temple — is extraordinary. The sanctum sanctorum with Ram Lalla idol is the culmination of the pilgrimage. Take your time in the mandapa before darshan.",
                  activeTab === "A"
                    ? "Walk to Kanak Bhawan (15 minutes from Ram Mandir) — the temple gifted to Sita by Kaikeyi. The interior is ornate with gold and silver decoration. Morning darshan is quieter than evenings."
                    : "Hire a guide (₹800) at Ram Mandir and add the special puja service (₹500) for a closer darshan experience. Then proceed to Kanak Bhawan — the guide will provide historical context for all the temples.",
                  "Dashrath Mahal — the palace of King Dashrath, father of Ram. The current structure is a later construction but the site is ancient and significant.",
                  "Nageshwarnath Temple — established by Kush, Lord Ram's son. One of the oldest temples in Ayodhya, dedicated to Lord Shiva. The contrast with the Ram temples is interesting.",
                  "Afternoon: Ram Katha Park — a landscaped park with 14 scenes from the Ramayana depicted in sculpture. Good for a calm afternoon walk.",
                  "Evening: Boat ride on the Saryu river (₹50 per person, from Ram Paidi Ghat). The riverside view of Ayodhya — temples, ghats, and the lit Ram Mandir in the background — is the best panorama of the city.",
                  "Ram Lila walk along the ghats after the boat ride — street performances and devotional processions happen most evenings near the main ghats.",
                ]}
                cost={activeTab === "A" ? "₹600–900" : "₹2,000"}
              />

              {/* ── Day 3 ── */}
              <DayCard
                day="Day 3"
                title="Gulab Bari, Tulsi Smarak & Departure"
                items={[
                  "Morning: Gulab Bari — the rose garden and tomb complex of Nawab Shuja-ud-Daula. A quiet, beautiful contrast to the busy temple circuit. Best visited at 8–9 AM when the roses are fresh.",
                  "Tulsi Smarak Bhawan — the memorial to Goswami Tulsidas, who composed the Ramcharitmanas in Ayodhya. The library here holds rare Ramayan manuscripts worth seeing for literature enthusiasts.",
                  activeTab === "A"
                    ? "Head to the bus stand or Ayodhya Junction for departure. Buses run frequently to Lucknow (2.5 hrs, ₹120) and Varanasi (4 hrs, ₹250)."
                    : "Lunch at a proper restaurant before departure. Taxi transfer to Ayodhya Junction (₹300–400). Direct trains to Lucknow, Varanasi, or Delhi via Vande Bharat.",
                ]}
                cost={activeTab === "A" ? "₹500" : "₹1,500"}
              />
            </div>
          </section>

          {/* ── DARSHAN GUIDE ── */}
          <section id="darshan" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🛕 Ram Mandir Darshan Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The darshan process at Ram Mandir is well-organised but requires advance planning. Here&apos;s exactly what to expect.
            </p>
            <div className="space-y-4">
              {[
                { step: "Step 1", title: "Book Online", desc: "Visit srjbtkshetra.up.gov.in. Register with Aadhaar, select your date, and choose the 5–7 AM slot for the shortest queues. Print or save the QR code — it's your entry pass.", emoji: "📱", color: "bg-blue-50 border-blue-200" },
                { step: "Step 2", title: "Dress Appropriately", desc: "Full-length clothing is mandatory — no shorts, sleeveless tops, or ripped jeans for any gender. Women: dupatta or head cover recommended. Traditional Indian clothing (kurta-pajama, saree) is preferred.", emoji: "👗", color: "bg-amber-50 border-amber-200" },
                { step: "Step 3", title: "Deposit Belongings", desc: "Phones, cameras, smartwatches, bags, belts, and leather items must be deposited at the cloak room (free, numbered token). Carry only wallet, ID, and a small water bottle.", emoji: "🎒", color: "bg-red-50 border-red-200" },
                { step: "Step 4", title: "Security Check", desc: "Multiple security checkpoints with CRPF personnel. The process is thorough but efficient. Pre-booked ticket holders have a separate, faster lane.", emoji: "🔒", color: "bg-green-50 border-green-200" },
                { step: "Step 5", title: "The Darshan", desc: "Proceed through the main gate and the mandapa to the sanctum. The Ram Lalla idol (installed January 2024) is in a seated posture. You'll have approximately 30–60 seconds of direct view before being guided forward.", emoji: "🛕", color: "bg-orange-50 border-orange-200" },
              ].map((s) => (
                <div key={s.step} className={`rounded-xl border p-5 ${s.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{s.emoji}</span>
                      <span className="text-xs font-bold text-gold-dark mt-1 block">{s.step}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{s.title}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-1">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── MID ARTICLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="saryu river ghat ayodhya evening aarti diyas"
              fallback="https://images.unsplash.com/photo-1599030781658-4ad54a9d7261?w=900&q=80"
              alt="Saryu Ghat evening aarti with diyas at Ram Paidi, Ayodhya"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The Saryu Ghat evening aarti — 51 lamps lit at 6 PM sharp. Arrive 30 minutes early. It&apos;s free, it&apos;s open to all, and it&apos;s one of the most moving rituals in India.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹4,000", color: "bg-amber-50 border-amber-200",
                  items: [["Stays (2 nights)", "₹800–1,600"], ["Transport", "₹400–600"], ["Food", "₹600–900"], ["Entry fees", "Free"], ["Boat ride + misc", "₹200–300"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹4,000–10,000", color: "bg-teal-50 border-teal-200",
                  items: [["Stays (2 nights)", "₹3,000–5,000"], ["Transport", "₹1,000–1,800"], ["Food", "₹1,500–2,500"], ["Guide + puja service", "₹1,300"], ["Misc + shopping", "₹500–1,000"]] },
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
              * All prices per person. Does not include travel to/from Ayodhya. Ram Mandir, all temples, and Saryu aarti are free entry. Budget excludes train/bus fares to reach Ayodhya.
            </p>
          </section>

          <AffiliateBlock destination="Ayodhya" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Going to Ram Mandir without online booking", desc: "The walk-in queue can be 3–5 hours on weekdays and longer on weekends. Pre-book your slot at srjbtkshetra.up.gov.in at least 2 weeks ahead. The 5–7 AM slot is shortest.", icon: "📱" },
                { title: "Carrying your phone into Ram Mandir", desc: "Phones are not allowed inside the temple premises — not even switched off. The cloak room is efficient but adds 20–30 minutes to your entry process. Know this before you queue.", icon: "📵" },
                { title: "Ignoring dress code", desc: "The Ram Mandir has strict dress code enforcement. Visitors in shorts, sleeveless tops, or ripped clothes are turned away at the gate. Dress conservatively — full-length clothing for all genders.", icon: "👗" },
                { title: "Missing the Saryu aarti timing", desc: "The evening aarti at Ram Paidi Ghat starts exactly at 6 PM. Arrive 30 minutes early to get a good position near the river. Arriving at 6 PM means you're watching from far back.", icon: "🕐" },
                { title: "Visiting in peak summer (May–June)", desc: "Ayodhya in May–June is brutal — 43–45°C with high humidity. The marble parikrama path radiates heat, and queues in the sun become exhausting. October–March is the only sensible window.", icon: "🌡️" },
                { title: "Skipping Bhairavnath Temple and Nageshwarnath", desc: "Most visitors do only Ram Mandir and Hanuman Garhi. The lesser-visited Kanak Bhawan, Dashrath Mahal, and Nageshwarnath each take only 20–30 minutes and complete the Ayodhya picture.", icon: "🛕" },
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
                { icon: "🕐", title: "Book Ram Mandir Darshan Online", desc: "srjbtkshetra.up.gov.in — book 2 weeks ahead for morning slots (5–7 AM). The line for walk-ins can be 3–5 hours.", color: "border-blue-200 bg-blue-50" },
                { icon: "👗", title: "Dress Code is Strict", desc: "Full-length clothing for all genders inside Ram Mandir. No shorts, sleeveless tops, or ripped jeans. Dupatta/head cover for women.", color: "border-amber-200 bg-amber-50" },
                { icon: "📱", title: "No Phones Inside Ram Mandir", desc: "Phones, cameras, and bags must be deposited at the cloak room. Carry only your wallet, ID, and water.", color: "border-red-200 bg-red-50" },
                { icon: "🌅", title: "Saryu Aarti Timing", desc: "Evening aarti at Ram Paidi Ghat happens at 6 PM sharp. Arrive 30 min early for a seat near the front. It's free and open to all.", color: "border-orange-200 bg-orange-50" },
                { icon: "🚂", title: "Best Train: Vande Bharat Lucknow–Ayodhya", desc: "Takes 2 hours. Ayodhya Cantonment station is 3 km from Ram Mandir. Most trains stop at Ayodhya Junction (closer).", color: "border-green-200 bg-green-50" },
                { icon: "🏨", title: "Where to Stay", desc: "Dharamshalas near Ram Janmabhoomi: Kaushalya Bhawan (free), Hanuman Garhi dharamshala (₹300–500). Hotels: Hotel Ramayan View (₹1800/night).", color: "border-purple-200 bg-purple-50" },
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
              Tell us your dates and group — we&apos;ll send a personalised Ayodhya itinerary including trains and darshan booking help within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Ayodhya Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Is Ram Mandir open for darshan in 2026?", a: "Yes — Ram Mandir is open daily 7 AM–11 PM with breaks for aarti. Online darshan slot booking at srjbtkshetra.up.gov.in is strongly recommended. Entry is free." },
                { q: "How do I reach Ayodhya from Delhi?", a: "Best option: Vande Bharat Express (Lucknow–Ayodhya, 2 hrs from Lucknow) or Ayodhya Dham Express from Delhi (direct, 7–8 hrs). By road, NH27 from Lucknow takes 2 hrs." },
                { q: "Can non-Hindus visit Ram Mandir?", a: "Yes — Ram Mandir is open to all visitors regardless of religion. Dress modestly, follow the code of conduct, and respect the sanctity." },
                { q: "What are Ayodhya's five must-visit temples?", a: "(1) Ram Mandir — new temple, (2) Hanuman Garhi — 76-step hilltop fortress, (3) Kanak Bhawan — ornate gold/silver interior, (4) Dashrath Mahal — King Dashrath's palace, (5) Nageshwarnath — oldest temple, established by Lord Ram's son Kush." },
                { q: "What is the best time to visit Ayodhya?", a: "October to March is ideal — cool weather, Ram Lila season, and Diwali (when 10 lakh diyas are lit on the ghats). Avoid May–June (extreme heat, 45°C+)." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer India Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Varanasi — 4 Day Spiritual Journey", href: "/blog/varanasi-4-days" },
                { label: "Mathura & Vrindavan — 2 Day Guide", href: "/blog/mathura-vrindavan-2-days" },
                { label: "Prayagraj — 2 Day Guide", href: "/blog/prayagraj-2-days" },
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

          <CombineWith currentSlug="ayodhya-3-days" />
          <RelatedGuides currentSlug="ayodhya-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
