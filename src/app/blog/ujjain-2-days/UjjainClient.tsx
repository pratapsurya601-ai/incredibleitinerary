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
import { usePageUrl } from "@/lib/hooks";

const UJJAIN_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "bhasma",    emoji: "🛕", label: "Bhasma Aarti Guide" },
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
  const pageUrl = usePageUrl();
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Ujjain 2-Day Guide&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Ujjain in 2 Days guide&url=${pageUrl}` },
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
export default function UjjainClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹3k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹3k–7k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={UJJAIN_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Ujjain" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="mahakaleshwar temple ujjain dawn ghats"
            fallback="https://images.unsplash.com/photo-1576467757232-fd5fc0e09f6c?w=1600&q=85"
            alt="Mahakaleshwar temple Ujjain at dawn with Ram Ghat in background"
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
              <span className="text-white/70">Ujjain 2 Days</span>
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
                Ujjain in 2 Days: Bhasma Aarti,
                <em className="italic text-gold-light"> Ram Ghat &amp; the Only Such Ritual in India</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Complete guide to Mahakaleshwar Bhasma Aarti booking, Kal Bhairav temple, Kshipra boat ride, and the Mahakal Lok corridor — with two budget plans.
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
              <span>💰 From ₹1,200</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              At 4 AM in Ujjain, a priest worships Shiva with ash from funeral pyres. This is the only ritual of its kind anywhere in India. Mahakaleshwar doesn&apos;t ask you to believe — it just asks you to be present.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Ujjain is one of the seven sacred cities of Hinduism, host to the Kumbh Mela every 12 years, home to one of the 12 Jyotirlingas, and the city through which the ancient Prime Meridian of India once ran. Most visitors do it in a day trip from Indore and see almost nothing. This 2-day guide ensures you get the Bhasma Aarti, the Ram Ghat evening aarti, Kal Bhairav temple, and the new Mahakal Lok corridor.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Best Season" value="Oct–Mar" />
            <StatCard icon="🔥" label="Bhasma Aarti" value="4 AM (book online)" />
            <StatCard icon="📍" label="Distance from Indore" value="55 km" />
            <StatCard icon="⭐" label="Rating" value="4.8★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Ujjain is on the Malwa Plateau — hot summers, mild winters, and a monsoon that fills the Kshipra river.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Mar", emoji: "✅", title: "Best Season", desc: "October–February: 10–25°C. The Bhasma Aarti at 4 AM in December or January — when the air is crisp and cold — is extraordinary. March warms quickly but is still manageable.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Apr–Jun", emoji: "🔥", title: "Extreme Heat", desc: "Ujjain hits 40–44°C in May–June. The Mahakal Lok corridor has no shade. The Kshipra runs low. The Bhasma Aarti is at 4 AM so it's bearable, but the rest of the day is brutal.", color: "bg-red-50 border-red-200" },
                { season: "Jul–Sep", emoji: "🌧️", title: "Monsoon", desc: "The Kshipra fills and the ghats become beautiful. Moderate rain — not torrential. The city is green. Weekday visits in August or September are underrated.", color: "bg-amber-50 border-amber-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 2-day route, two comfort levels. Ujjain is one of India&apos;s most affordable pilgrimage cities.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Dharamshala on Ram Ghat (₹300–500)</td><td className="py-2.5 px-4">Hotel near Mahakal (₹1,500–2,500)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Train + walk + e-rickshaw</td><td className="py-2.5 px-4">Auto-rickshaw/Ola + guide</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Bhasma Aarti</td><td className="py-2.5 px-4">Free online booking</td><td className="py-2.5 px-4">Free online booking + guide (₹600)</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹3,000</td><td className="py-2.5 px-4 font-medium text-teal">₹3,000–7,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive → Mahakaleshwar afternoon darshan → Ram Ghat evening aarti → Kal Bhairav Temple → Mahakal Lok corridor at night. Day 2: 3 AM wake-up → 4 AM Bhasma Aarti → temple circuit → Kshipra boat ride → Depart.
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
                title="Arrive, Mahakaleshwar Darshan & Ram Ghat Evening Aarti"
                items={[
                  activeTab === "A"
                    ? "Train from Indore (1 hr, ₹50–100) or Bhopal (3 hrs). Check into a dharamshala on Ram Ghat — basic, clean, ₹300–500. Wake up to the sound of the Kshipra."
                    : "Train or taxi from Indore Airport or Bhopal. Check into a hotel near Mahakaleshwar — ₹1,500–2,500. Request an upper floor room if possible.",
                  "Mahakaleshwar Temple afternoon darshan: Book a free slot online at mahakaleshwar.org.in. The Jyotirlinga is in the lowest level of the three-storey temple — the south-facing lingam is unique among all 12 Jyotirlingas. Arrive 15 minutes before your slot at the designated entry gate.",
                  "Ram Ghat: Arrive by 5:30 PM for the Kshipra river aarti at 6 PM. The priests perform the aarti with large diyas on the stone steps while the river catches the last light. The Kshipra is considered as sacred as the Ganga — pilgrims believe a dip here liberates seven generations. The ghats are active from early morning until late night.",
                  "Kal Bhairav Temple: Walk or take an e-rickshaw (₹20) from Ram Ghat. The deity at Kal Bhairav is unique in all of India — liquor (sharaab) is offered as prasad. Priests offer the bottle to the deity's lips and the bottle empties. Rationalists have tried to explain it for decades. Just watch. The temple is open late and the atmosphere after dark is otherworldly.",
                  activeTab === "A"
                    ? "Mahakal Lok corridor: The 900m marble promenade connecting the main gate to the temple opened in 2022. 108 pillars, statues of Shiva's 108 avatars, lit up beautifully after sunset. Budget 45 minutes. Entry free. Walk the full length after the Kal Bhairav visit — it's stunning at night."
                    : "Mahakal Lok corridor at night with a guide (₹600 for full day): The 108 Shiva avatars have detailed histories that a guide brings to life. At night the corridor is especially beautiful — marble glowing under warm lights, the main temple silhouetted at the far end.",
                ]}
                cost={activeTab === "A" ? "₹1,200" : "₹3,500"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Bhasma Aarti at 4 AM & Temple Circuit"
                items={[
                  "3:00 AM: Wake up. This is not negotiable. The Bhasma Aarti begins at 4 AM and entry closes before that. You must arrive by 3:45 AM at the designated entry point. The aarti is limited to approximately 200 people — your booking QR code gets you in.",
                  "4:00 AM Bhasma Aarti: Shiva is worshipped with bhasma — sacred ash, traditionally from funeral pyres. The priest applies the ash to the Jyotirlinga in intricate patterns while devotional music fills the inner sanctum. This is the only such ritual in India. Male devotees must wear dhoti (available at the temple counter for ₹50). Women in traditional attire. The experience lasts 40 minutes and is genuinely unlike anything else in India.",
                  "Post-aarti: The temple complex is quiet and the morning air is cool. Spend 30 minutes in the courtyard before the general darshan crowd arrives.",
                  "Harsiddhi Temple (8:30 AM): One of the 51 Shakti Peethas. The two massive oil-lamp towers (diya stambha) lit during Navratri are famous across Madhya Pradesh. Even unlit, their scale is impressive.",
                  "Chintaman Ganesh Temple: The oldest Ganesh shrine in Ujjain, located outside the main city near the Shipra river. A 10-minute auto ride. Quiet, ancient, and largely tourist-free.",
                  activeTab === "A"
                    ? "Kshipra boat ride (₹60): The 30-minute boat ride from Ram Ghat gives you a view of all the ghats, the Mahakaleshwar temple dome, and the river's full breadth at noon. Worth it. Then depart by afternoon train."
                    : "Kshipra boat ride + Kali Mata Temple + Sandipani Ashram (where Krishna studied) before afternoon departure. The Kali Mata temple near the old city is atmospheric and free.",
                ]}
                cost={activeTab === "A" ? "₹1,000" : "₹3,000"}
              />
            </div>
          </section>

          {/* ── BHASMA AARTI GUIDE ── */}
          <section id="bhasma" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🛕 Bhasma Aarti Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The Mahakaleshwar Bhasma Aarti is the only ritual of its kind in India. Getting it right requires planning — it fills fast and the rules are strict.
            </p>
            <div className="space-y-4">
              {[
                { rank: "Step 1", item: "Book at mahakaleshwar.org.in", where: "15 days or more in advance", price: "Free", note: "Navigate to 'Darshan Booking' → select Bhasma Aarti (4 AM slot). Approximately 200 spots per day. The slot opens 15 days before the date and fills within hours on weekends. Receive a QR code confirmation — screenshot it as network connectivity near the temple can be poor.", emoji: "📱", color: "bg-amber-50 border-amber-200" },
                { rank: "Step 2", item: "Dress Code — Strictly Enforced", where: "Mahakaleshwar Temple entry", price: "Dhoti ₹50 at counter", note: "Male devotees must wear dhoti — no exceptions. Dhoti can be rented at the temple counter (₹50). Women must wear saree or salwar kameez — no jeans, no leggings. Security at the Bhasma Aarti entry gate will turn you away if incorrectly dressed, regardless of your booking.", emoji: "👗", color: "bg-amber-50 border-amber-200" },
                { rank: "Step 3", item: "Arrive by 3:45 AM", where: "Bhasma Aarti entry gate", price: "On time", note: "The gate closes before 4 AM. There is no grace period. Your QR code is scanned at the entry point and verified against your booking. Mobile phones may be restricted inside the inner sanctum during the ritual — check current rules at the time of booking.", emoji: "⏰", color: "bg-rose-50 border-rose-200" },
                { rank: "Note", item: "What Happens During the Aarti", where: "Inner sanctum", price: "40 minutes", note: "The priest bathes the Jyotirlinga, then applies bhasma (sacred ash) in intricate patterns while chanting Vedic mantras. The ash symbolises that Shiva is the lord of death and beyond it — destruction that precedes creation. The lingam is the only south-facing Jyotirlinga in India, a form considered uniquely powerful in Shaiva tradition.", emoji: "🔥", color: "bg-teal-50 border-teal-200" },
              ].map((f) => (
                <div key={f.item} className={`rounded-xl border p-5 ${f.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{f.emoji}</span>
                      <span className="text-xs font-bold text-gold-dark mt-1 block">{f.rank}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{f.item}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{f.where} · {f.price}</p>
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
              query="ujjain ram ghat kshipra river evening aarti"
              fallback="https://images.unsplash.com/photo-1576467757232-fd5fc0e09f6c?w=900&q=80"
              alt="Ram Ghat Ujjain with evening aarti on the Kshipra river"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Ram Ghat at the evening aarti: the Kshipra river, lit diyas, and a crowd that has been coming to this spot for 2,500 years.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹3,000", color: "bg-amber-50 border-amber-200",
                  items: [["Stay (1–2 nights)", "₹600–1,000"], ["Transport (train + e-rickshaw)", "₹300–500"], ["Bhasma Aarti (free)", "₹0"], ["Dhoti rental", "₹50"], ["Boat ride + food", "₹300–500"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹3,000–7,000", color: "bg-teal-50 border-teal-200",
                  items: [["Hotel (1–2 nights)", "₹3,000–5,000"], ["Auto-rickshaw (all day)", "₹500–800"], ["Bhasma Aarti (free)", "₹0"], ["Guide (full day)", "₹600"], ["Restaurants + activities", "₹500–1,000"]] },
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
              * All prices per person. Does not include travel to/from Ujjain. Bhasma Aarti is free — book at mahakaleshwar.org.in. Indore is 55 km away and can be combined on the same trip.
            </p>
          </section>

          <AffiliateBlock destination="Ujjain" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Not booking the Bhasma Aarti 15 days ahead", desc: "The 200 spots fill within hours on weekends. Weekday slots are more available but even those go fast during festival periods (Shravan month, Navratri, Maha Shivratri). Book as early as possible — the booking window opens 15 days before.", icon: "📱" },
                { title: "Skipping the dress code check", desc: "The Bhasma Aarti entry gate has strict dress enforcement. Male devotees turned away for wearing jeans or shorts even with a valid booking. Dhoti is available at the counter for ₹50 — rent it before joining the queue.", icon: "👗" },
                { title: "Doing Ujjain as a half-day trip from Indore", desc: "Ujjain is 55 km from Indore. Most day-trippers arrive at noon, see the temple, and leave. They miss the Bhasma Aarti (4 AM), the Ram Ghat evening aarti (6 PM), and Kal Bhairav temple (best at night). Two days is the minimum to experience Ujjain properly.", icon: "⏰" },
                { title: "Missing Kal Bhairav Temple", desc: "Most pilgrims focus entirely on Mahakaleshwar and miss the Kal Bhairav temple (15 minutes away). The liquor-offering ritual is one of the most unusual religious experiences in India and cannot be replicated anywhere else. Go after dark.", icon: "🍺" },
                { title: "Visiting during Simhastha (Kumbh) without planning a year ahead", desc: "Ujjain's Kumbh Mela (Simhastha) occurs every 12 years. The next one is 2028. If you're planning to attend, book accommodation 12–18 months ahead. The city hosts 75+ million people over 30 days — hotels within 100 km fill completely.", icon: "📅" },
                { title: "Ignoring the Mahakal Lok corridor", desc: "The 900m promenade with 108 Shiva avatar statues opened in 2022. Most older guidebooks don't mention it. Walk it at night — the lighting design is excellent and the scale is impressive. It's free and takes 45 minutes.", icon: "🌅" },
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
                { icon: "🔥", title: "Bhasma Aarti: Book 15 Days Ahead", desc: "Book at mahakaleshwar.org.in. Male devotees must wear dhoti (provided at counter, ₹50). Women in traditional attire. The aarti happens at 4 AM and involves Shiva being worshipped with sacred ash — it's the only such ritual in India.", color: "border-orange-200 bg-orange-50" },
                { icon: "🌊", title: "Kshipra Ghat Aarti at Dusk", desc: "Ram Ghat holds the evening aarti at 6 PM daily. The Kshipra is considered as sacred as Ganga — pilgrims believe a dip here liberates 7 generations.", color: "border-blue-200 bg-blue-50" },
                { icon: "🍺", title: "Kal Bhairav Temple is Unique", desc: "The deity at Kal Bhairav Temple accepts liquor as prasad — priests offer it and the bottle empties (no one can fully explain how). The temple is open late and is one of Ujjain's strangest, most memorable experiences.", color: "border-amber-200 bg-amber-50" },
                { icon: "🚂", title: "How to Reach Ujjain", desc: "Nearest airport: Devi Ahilya Airport, Indore (55 km, taxi ₹700–1000). Train: Ujjain Junction is well-connected to Mumbai, Delhi, Bhopal, and Indore. From Indore: 1 hr by train or 1.5 hrs by road.", color: "border-green-200 bg-green-50" },
                { icon: "🏕️", title: "Kumbh Mela Ujjain (Simhastha)", desc: "Ujjain hosts Kumbh Mela every 12 years (Simhastha), when Jupiter enters Leo. The next Simhastha is 2028. If you're planning ahead, this is one of humanity's largest gatherings.", color: "border-purple-200 bg-purple-50" },
                { icon: "🌅", title: "Mahakal Lok Corridor", desc: "A 900m marble corridor opened in 2022 connects the main gate to the temple with 108 pillars, statues of Shiva's 108 avatars, and lit up beautifully at night. Budget 45 minutes for it.", color: "border-red-200 bg-red-50" },
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
              Tell us your dates — we&apos;ll send a personalised Ujjain itinerary including Bhasma Aarti booking guidance within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Ujjain Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How to book Mahakaleshwar Bhasma Aarti online?", a: "Go to mahakaleshwar.org.in → 'Darshan Booking' → select Bhasma Aarti (4 AM slot). It's free. Male devotees must wear a dhoti (available at the temple). The aarti is limited to ~200 people — it fills fast." },
                { q: "What is the significance of the Bhasma Aarti?", a: "Mahakaleshwar is the only Jyotirlinga where Shiva is worshipped in 'vama' form (south-facing) and is offered bhasma (sacred ash from funeral pyres). This ritual symbolizes that death is not the end — it's Shiva's cosmic dance." },
                { q: "Is Ujjain safe for solo female travelers?", a: "Yes — Ujjain is a pilgrimage city with a large police presence near all ghats and major temples. The Mahakal Lok corridor is well-lit and patrolled. The city is generally conservative — dress modestly." },
                { q: "Can I combine Ujjain and Indore in one trip?", a: "Easily. Indore is 55 km (1 hr by road). The ideal combination: Day 1 Indore food tour (best street food in MP — Sarafa Bazaar, Chappan Dukan), Day 2–3 Ujjain. Or vice versa." },
                { q: "What are the 12 Jyotirlingas and why is Mahakaleshwar special?", a: "The 12 Jyotirlingas are Shiva's most sacred shrines across India. Mahakaleshwar is one of only two 'Swayambhu' (self-manifested) Jyotirlingas — the lingam was not installed by humans. It's also the only Jyotirlinga in the 'vama' (south-facing) form, considered uniquely powerful." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Ujjain — Highlights"
            subtitle="The best of Ujjain in photos."
            spots={[
              { name: "Ujjain Landscape", query: "ujjain india landscape scenic beautiful travel", desc: "The stunning landscapes of Ujjain." },
              { name: "Ujjain Temple", query: "ujjain temple architecture heritage india", desc: "Historic temples and architecture in Ujjain." },
              { name: "Ujjain Street Scene", query: "ujjain street market local culture india", desc: "Local life and culture in Ujjain." },
              { name: "Ujjain Nature", query: "ujjain nature hills forest river india", desc: "Natural beauty around Ujjain." },
              { name: "Ujjain Sunset", query: "ujjain sunset golden hour india travel", desc: "Ujjain at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Madhya Pradesh Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Indore — Best Street Food in MP", href: "/blog/indore-2-days", soon: false },
                { label: "Omkareshwar — Another Jyotirlinga", href: "/blog/omkareshwar-1-day", soon: false },
                { label: "Pachmarhi — Hill Station of MP", href: "/blog/pachmarhi-3-days", soon: false },
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

          <CombineWith currentSlug="ujjain-2-days" />
          <RelatedGuides currentSlug="ujjain-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
