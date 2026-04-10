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
import InlineCTA from "@/components/blog/InlineCTA";
import PhotoCta from "@/components/blog/PhotoCta";
import AuthorByline from "@/components/blog/AuthorByline";
import InlineSignup from "@/components/email/InlineSignup";
import PinterestSaveButton from "@/components/ui/PinterestSaveButton";
import { usePageUrl } from "@/lib/hooks";

// ── Table of Contents ─────────────────────────────────────────────────────────
const BALI_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Bali Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "5-Day Itinerary" },
  { id: "temples",     emoji: "🛕",  label: "Temple & Cultural Guide" },
  { id: "budget",      emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",         emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",    emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "💡",  label: "Pro Tips" },
  { id: "faq",         emoji: "❓",  label: "FAQ" },
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
        className="h-full bg-amber-600 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ── Share Bar ─────────────────────────────────────────────────────────────────
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
        {
          label: "Email",
          color: "bg-ink text-white",
          href: `mailto:?subject=Bali 5-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Bali in 5 Days — temples, rice terraces and the complete itinerary&url=${pageUrl}`,
        },
      ].map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}
        >
          {s.label}
        </a>
      ))}
      <button
        onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted"
      >
        {copied ? "✓ Copied" : "Copy Link"}
      </button>
      <PinterestSaveButton
        pageUrl="https://www.incredibleitinerary.com/blog/bali-5-days"
        imageUrl="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80"
        description="Bali in 5 Days: Tegallalang Rice Terraces, Uluwatu Temple, Nusa Penida, Ubud temples and beach clubs — complete travel guide with budget breakdown."
      />
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
function DayCard({
  day,
  title,
  items,
  cost,
}: {
  day: string;
  title: string;
  items: string[];
  cost: string;
}) {
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
                <span className="text-amber-500 mt-1 flex-shrink-0 text-xs">●</span>
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
function TipCard({
  icon,
  title,
  desc,
  color,
}: {
  icon: string;
  title: string;
  desc: string;
  color: string;
}) {
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

// ── FAQ Accordion ─────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-600 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function BaliClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BALI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Bali" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="bali uluwatu temple cliff sunset indonesia ocean"
            fallback="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=80"
            alt="Uluwatu Temple perched on dramatic cliff above the Indian Ocean at sunset in Bali"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Bali 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Temples &amp; Rice Terraces
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">18 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Bali in 5 Days:
                <em className="italic text-amber-300"> Temples, Terraces &amp; the Real Island</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Tegallalang at dawn, Uluwatu&apos;s cliff-edge Kecak dance, Nusa Penida&apos;s T-Rex cliff, sacred water temples and warungs serving Rp35k meals. The complete guide with real timings, costs in IDR &amp; USD, and the mistakes that ruin most Bali trips.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="18 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇮🇩 Indonesia</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From Rp300k/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Tegallalang at 6:30am before the Instagram armies arrive is a genuinely spiritual moment — mist rising off thousand-year-old rice terraces, the subak irrigation channels trickling, and not a single selfie stick in sight. By 10am it&apos;s a photoshoot queue. Set one alarm. This guide tells you exactly when to set it for every single stop.
            </p>
          </blockquote>

          {/* ── WHAT BALI ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Bali Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Bali is a Hindu island in a Muslim-majority country, roughly 140km across, with a volcanic spine running through its centre and some of the most elaborate temple architecture in Southeast Asia. The Balinese practice a unique form of Hinduism that blends Indian Hindu traditions with local animist beliefs — you will see daily offerings (canang sari) on literally every pavement, doorstep, and dashboard on the island. There are over 20,000 temples in Bali, more than there are homes.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The tourism reality: the south coast (Kuta, Seminyak, Canggu) is heavily developed, traffic-choked, and increasingly expensive. The real Bali — the one with the rice terraces, the quiet temples, the dawn ceremonies and the Rp35k nasi campur — still exists in Ubud&apos;s interior, Sidemen valley, and the east coast villages. The trick to a good Bali trip is getting the ratio right: enough south-coast beach clubs and sunset bars to have fun, enough interior temple and terrace time to understand why people keep coming back.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Five days is tight but workable. You can cover Ubud (temples, terraces, culture), Uluwatu (clifftop temples, Kecak dance, beaches), and a Nusa Penida day trip. If you have seven days, add Sidemen valley — it is what most people imagined Bali would be before they arrived.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="DPS (Ngurah Rai)" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Oct" />
              <StatCard icon="🛕" label="Temples" value="20,000+" />
              <StatCard icon="💰" label="Budget From" value="Rp300k/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Bali</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "☀️",
                  t: "Early Dry Season — Best Overall",
                  d: "25–30°C with low humidity. Rice terraces are green from recent rains, waterfalls are still flowing strong, and peak-season crowds haven't arrived yet. May and June are arguably the best months in Bali — perfect weather, good prices, and manageable tourist numbers at all the major sites.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul–Sep",
                  i: "🌅",
                  t: "Peak Dry Season — Busiest",
                  d: "26–31°C, virtually no rain. This is peak tourist season — Ubud, Uluwatu and Seminyak are at their busiest and prices for accommodation increase 30–60%. The weather is excellent, but you will queue at Tegallalang, fight for Kecak dance seats, and pay premium rates for everything. Book well ahead.",
                  b: "Great weather, highest prices",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Oct–Nov",
                  i: "🌧️",
                  t: "Shoulder Season — Good Value",
                  d: "27–32°C with occasional afternoon showers. October is still largely dry with lower prices. November sees more rain but the landscape is at its most lush. Excellent value if you don't mind the occasional 1–2 hour afternoon downpour. Terraces are vivid green.",
                  b: "Best value",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Dec–Mar",
                  i: "🌧️",
                  t: "Wet Season — Cheapest",
                  d: "27–33°C with high humidity and daily rain, usually in heavy 1–2 hour afternoon bursts. Prices drop 30–50% across the board. Rice terraces are at their absolute greenest, waterfalls at full power. Mornings are often clear. Pack a rain jacket and adjust your timing — this is still very much worth visiting.",
                  b: "Budget travellers",
                  c: "bg-blue-50 border-blue-200",
                },
              ].map((s) => (
                <div key={s.s} className={`rounded-xl p-4 border ${s.c}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.i}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{s.s} — {s.t}</p>
                      <p className="text-[0.65rem] font-medium text-teal">{s.b}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── GETTING THERE ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Bali</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Bali&apos;s Ngurah Rai International Airport (DPS) is in the south of the island, near Kuta. Ubud is 1.5 hours north by car. <strong className="font-medium">Visa on arrival is free for Indian passport holders (30 days).</strong> Most Western passports also get 30 days visa-free.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Direct flights from India",
                  d: "IndiGo and AirAsia fly direct from Delhi, Mumbai and Bangalore to Bali (DPS). Flight time: 6–8 hours. Fares: ₹12,000–₹25,000 return if booked 2–3 months ahead. Kuala Lumpur and Singapore are common layover cities with cheap connecting flights on AirAsia or Scoot. A KL layover can save ₹5,000–₹8,000 versus a direct flight.",
                  b: "Best from India",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "From Southeast Asia",
                  d: "Budget airlines (AirAsia, Lion Air, Scoot) connect Bali to Singapore (2.5 hrs, $50–$120), Kuala Lumpur (3.5 hrs, $40–$100), Bangkok (4 hrs, $60–$130), and Jakarta (1.5 hrs, $30–$80). If island-hopping through SE Asia, the cheapest route is often KL → Bali on AirAsia.",
                  b: "Cheapest flights",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Airport to Ubud",
                  d: "Pre-book a Grab or Gojek from the airport car park exit (Rp180k–250k, ~$11–16, 1.5 hours). The airport taxi counter charges Rp350k–500k for the same ride. Do not negotiate with the taxi touts inside the arrivals hall — walk through to the car park and book via the app. Private hotel transfers cost Rp350k–450k (~$22–28).",
                  b: "Use Grab/Gojek",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚗",
                  t: "Airport to Uluwatu / Seminyak",
                  d: "Uluwatu is 45 minutes from the airport (Rp100k–150k by Grab, ~$6–10). Seminyak is 30 minutes (Rp80k–120k, ~$5–8). Kuta is 15 minutes (Rp50k–80k, ~$3–5). Traffic in the south can double these times between 4–8pm. For Uluwatu, consider staying there first and moving to Ubud later to avoid the long Day 1 drive.",
                  b: "30–45 min",
                  c: "bg-parchment border-parchment-2",
                },
              ].map((t) => (
                <div key={t.t} className={`rounded-xl p-4 border ${t.c}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{t.i}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p className="font-semibold text-sm text-ink">{t.t}</p>
                        <span className="text-xs bg-white/70 text-muted px-2.5 py-1 rounded-full border border-white/50">{t.b}</span>
                      </div>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{t.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 5-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Bali Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary covers mid-range spending (Rp800k–1.5M/day, ~$50–95). Each day card is expandable. The route runs Ubud (2 nights) → Uluwatu (2 nights) → Seminyak/departure. Budget and luxury alternatives are noted in the cost estimates.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Ubud — Arrive, Rice Terraces & Monkey Forest"
                cost="Rp700k–1.1M (~$44–70) excluding accommodation"
                items={[
                  "Airport → Ubud: pre-booked Grab or private driver (Rp180k–450k, ~$11–28 depending on service). The drive takes 1.5 hours through increasingly green countryside as you climb away from the south coast. Airport taxi touts will try to charge double — walk past them to the car park exit and use the app.",
                  "Check in to Ubud accommodation. Budget: guesthouse with rice-paddy views (Rp150k–350k/night, ~$9–22). Mid-range: boutique villa with private pool (Rp500k–1M/night, ~$32–63). Luxury: Four Seasons Sayan or COMO Uma Ubud (Rp3M–8M/night, ~$190–506).",
                  "3pm: Tegallalang Rice Terraces (Rp25k entry, ~$1.60). Afternoon light is golden and crowds thin significantly after 3pm. The terraces use a thousand-year-old irrigation system called subak, UNESCO-recognised since 2012. Hire a local guide (Rp100k, ~$6) for the hidden walking paths most tourists miss entirely. Budget tip: bring your own water — the terrace cafes charge 3x normal prices.",
                  "5pm: Ubud Monkey Forest (Rp80k, ~$5). 700+ long-tailed macaques in a 12-hectare forest with ancient temple ruins. Secure your sunglasses, water bottles and anything loose — the monkeys will grab them. Don't make eye contact and don't smile showing teeth (they interpret it as aggression).",
                  "7pm: Dinner at Warung Biah Biah — authentic Balinese food in a traditional setting. Nasi campur Rp35k–60k (~$2–4). This is the real Bali eating experience: local ingredients, family recipes, and prices that haven't been inflated for tourists.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Ubud — Sacred Water Temple, Volcano Views & Coffee Plantations"
                cost="Rp800k–1.3M (~$50–82) excluding accommodation"
                items={[
                  "7am: Sunrise yoga at Yoga Barn (Rp130k–150k, ~$8–10). Book the day before — morning classes fill up. Alternatively: free YouTube session on your guesthouse terrace overlooking the rice paddies, which is honestly just as good.",
                  "9:30am: Tirta Empul Water Temple (Rp50k entry, ~$3). Bring a sarong or rent one for Rp10k. Participate in the purification ritual at the 13 sacred fountains — genuinely moving even if you're not religious. Each fountain has a different spiritual purpose. A guide (Rp150k, ~$10) explains the ceremony and ensures you follow the correct sequence.",
                  "12pm: Drive to Kintamani (40 min from Ubud). Mount Batur volcano viewpoint is free from the roadside. Order a coffee at a local warung (Rp25k, ~$1.60) and enjoy the caldera view. Skip the overpriced tourist buffet restaurants that line the rim — they charge Rp150k+ for mediocre food with the same view you get free from the road.",
                  "1:30pm: Stop at a coffee plantation on the drive back to Ubud. Free tastings of luwak coffee and regular Balinese varieties. Buy regular Bali arabica coffee (Rp50k–80k/pack, ~$3–5) — it is excellent. Skip the luwak coffee (Rp300k+/cup) unless you specifically want to try it; the ethics of production are questionable and the taste difference is overstated.",
                  "3pm: Tukad Cepung Waterfall (Rp20k entry, ~$1.30). Light beams through the cave roof in the early afternoon — arrive between 1–3pm for the best light. The walk down takes 15 minutes. Wear shoes you don't mind getting wet.",
                  "5pm: Ubud Art Market for souvenirs. Bargain hard — start at 30% of asking price. Best for silk scarves, wooden carvings, incense, and batik textiles. The morning market (before 9am) is for local produce; the afternoon market is for tourists.",
                  "7pm: Dinner at Locavore To — modern Balinese fine dining at mid-range prices. Rp200k–350k/person (~$13–22). Alternatively: Hujan Locale in a colonial-era building (Rp200k–300k, ~$13–19).",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Uluwatu — Cliffs, Beaches & Kecak Fire Dance"
                cost="Rp1M–1.5M (~$63–95) excluding accommodation"
                items={[
                  "Check out of Ubud. Drive to Uluwatu (2–2.5 hours via the coast road, or 1.5 hours via the toll road). Stop at Tegenungan Waterfall en route if desired (Rp20k entry, ~$1.30). The waterfall is best before 10am when the light hits the pool.",
                  "Check in to Uluwatu area accommodation. Budget: guesthouse in Pecatu (Rp150k–250k/night, ~$10–16). Mid-range: villa with pool in Uluwatu (Rp600k–1M/night, ~$38–63). Luxury: Alila Villas Uluwatu or Six Senses (Rp5M–15M/night, ~$317–949).",
                  "1pm: Lunch at Single Fin beach club — clifftop views over the surf break, decent food, great for photos. Rp150k–250k/person (~$10–16). Budget alternative: warungs in Pecatu village (Rp30k–50k).",
                  "3pm: Padang Padang Beach — the small, dramatic cove from the film Eat Pray Love. Free entry. The beach is tiny but the rock formations are extraordinary. Thomas Beach nearby is less crowded if Padang Padang is packed.",
                  "5pm: Uluwatu Temple (Rp50k entry, ~$3). Watch the monkeys — they are bolder here than at Monkey Forest. Secure sunglasses and hats. The temple sits on a 70-metre cliff above the Indian Ocean. The late-afternoon light on the stone and the ocean below is extraordinary.",
                  "6pm: Kecak Fire Dance at Uluwatu (Rp150k, ~$9.50). Book online or arrive 45 minutes early for good seats. 50+ men chanting in concentric circles as the sun sets behind the performers into the Indian Ocean — this is the single most atmospheric cultural performance in Bali and arguably in all of Southeast Asia.",
                  "8pm: Dinner at Jimbaran Bay — grilled-to-order seafood on the beach. Choose your fish at the market stalls, they grill it on the sand. Rp200k–350k/person (~$13–22) for a full seafood spread with rice and sambal.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Nusa Penida Day Trip — Kelingking, Angel's Billabong & Broken Beach"
                cost="Rp1.2M–1.8M (~$76–114) excluding accommodation"
                items={[
                  "6am: Grab to Sanur harbour (Rp80k–250k from Uluwatu area, ~$5–16 depending on where you're staying). The drive takes 45–60 minutes.",
                  "7:30am: Fast boat to Nusa Penida (Rp200k–300k return, ~$13–19). Book online the night before or at the harbour. The crossing takes 30–45 minutes and can be rough in swell — sit at the back if prone to seasickness.",
                  "Hire a private driver on Nusa Penida (Rp600k–800k/day, ~$38–50, split 2–4 people). Do not scooter on Nusa Penida unless you are an experienced rider — the roads are steep, unpaved in places, have no barriers, and serious accidents happen weekly. The driver also knows which viewpoints are open and which roads are passable.",
                  "Kelingking Beach viewpoint — free. The famous T-Rex cliff. The view from the top is one of the most dramatic coastal vistas in Indonesia. Climbing down to the beach is possible but only recommended for very fit hikers (steep descent, no railing, 40 minutes each way).",
                  "Angel's Billabong — natural infinity pool on the cliff edge. Free. Swim only at low tide; the waves at high tide are genuinely dangerous. Check tide times before visiting.",
                  "Broken Beach — dramatic natural arch with turquoise water below. Free. 5-minute walk from Angel's Billabong. The two sites are always done together.",
                  "If time allows: Crystal Bay for snorkelling or relaxing on a calmer beach. Good chance of seeing manta rays September–May.",
                  "4pm: Boat back to Sanur → return to Uluwatu area. Evening: sunset drinks at a clifftop bar or rest before the final day.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Seminyak / Canggu — Beach Clubs, Shopping & Departure"
                cost="Rp600k–1M (~$38–63) excluding accommodation"
                items={[
                  "Move to Seminyak or Canggu area (45 min from Uluwatu). Or stay in Uluwatu and drive directly to the airport later — it's only 45 minutes from the south.",
                  "Morning: Batu Bolong Beach in Canggu — decent surf, laid-back atmosphere. Rent a board (Rp50k/hr, ~$3) or take a lesson (Rp350k, ~$22). Budget brunch at Warung Local (Rp30k–50k for nasi goreng with a juice).",
                  "11am: Potato Head Beach Club — day pass is free with minimum spend on food and drinks. Infinity pool, excellent music, and the building itself is architecturally stunning (made from reclaimed shutters). A mid-range afternoon here costs Rp300k–500k (~$19–32) including pool access, a meal and a couple of drinks.",
                  "3pm: Last-minute shopping at Seminyak Square or the boutiques on Jl. Kayu Aya for higher-end Balinese fashion and homewares. For budget souvenirs: Kuta Art Market.",
                  "5:30pm: Final sunset from Double Six Beach (Seminyak) with a Bintang beer (Rp35k–50k, ~$2–3). The wide beach, the surf, and the Balinese sunset — a proper ending.",
                  "Airport: 20–30 min from Seminyak, 45 min from Canggu. Allow extra time — Bali traffic between 4–8pm is severe, especially around Kuta and the airport approach road. Pre-book a Grab to avoid the airport taxi surcharge.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Bali" onPlanTrip={() => setModalOpen(true)} />

          {/* ── TEMPLE & CULTURAL GUIDE ── */}
          <section id="temples" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🛕 Temple &amp; Cultural Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important temples and cultural sites in order of priority. A sarong is required at all temples — buy one for Rp30k–50k at any market, or rent at the gate for Rp10k–20k. Entry fees are as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Uluwatu Temple (Pura Luhur Uluwatu)",
                  e: "Rp50k (~$3)",
                  d: "Clifftop sea temple 70 metres above the Indian Ocean, dating to the 11th century. One of Bali's six key spiritual pillars (sad kahyangan). The Kecak fire dance at sunset (Rp150k, 6pm daily) is an absolute must — 50 men chanting in concentric circles as the sun drops behind them into the sea. Arrive at 4:30pm for the temple, 5:15pm for Kecak seating.",
                  t: "Must see · Sunset · 2.5 hrs",
                },
                {
                  n: "Tirta Empul Water Temple",
                  e: "Rp50k (~$3)",
                  d: "Sacred water temple with 13 purification fountains fed by natural springs. Balinese Hindus come here for spiritual cleansing — visitors are welcome to participate. The ritual involves walking through each fountain in sequence while offering a prayer. Genuinely moving even if you're not religious. Best visited 9–11am before large tour groups arrive.",
                  t: "Must see · Ritual · 1.5 hrs",
                },
                {
                  n: "Tegallalang Rice Terraces",
                  e: "Rp25k (~$1.60)",
                  d: "The most photographed landscape in Bali — terraced rice paddies carved into a steep valley using the traditional subak irrigation system (UNESCO-recognised). Visit at 6:30am for mist and silence, or after 3pm for golden light. Between 9am and 3pm it becomes an Instagram queue with swing operators shouting at you.",
                  t: "Must see · Dawn/Dusk · 1.5 hrs",
                },
                {
                  n: "Tanah Lot Temple",
                  e: "Rp60k (~$4)",
                  d: "Bali's most iconic sea temple, perched on a rock formation surrounded by the ocean at high tide. The sunset silhouette is spectacular and one of the most-photographed scenes in Indonesia. Arrive 1 hour before sunset. The temple itself cannot be entered by non-Hindus, but the setting and the view are the draw.",
                  t: "Sunset · 1.5 hrs",
                },
                {
                  n: "Ubud Monkey Forest (Mandala Suci Wenara Wana)",
                  e: "Rp80k (~$5)",
                  d: "Sacred forest with 700+ long-tailed macaques, ancient temple ruins, and enormous banyan trees. The monkeys are bold — secure all loose items. The forest is a genuinely atmospheric experience in the late afternoon when the light filters through the canopy. Three temples inside the forest date to the 14th century.",
                  t: "Must see · 1–1.5 hrs",
                },
                {
                  n: "Besakih Temple (Pura Besakih)",
                  e: "Rp60k (~$4)",
                  d: "Bali's holiest and largest temple complex — the mother temple, sitting on the slopes of Mount Agung at 1,000 metres elevation. 86 temples spread across the mountain. The scale is extraordinary but it is heavily touristed and aggressive local guides try to charge Rp300k+ for mandatory tours (they are not mandatory). Best visited on a clear morning when Agung is visible.",
                  t: "Optional · Half day",
                },
              ].map((place) => (
                <div key={place.n} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-stone-900">{place.n}</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs text-teal font-medium bg-teal/10 px-2 py-0.5 rounded-full">{place.e}</span>
                      <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">{place.t}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{place.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <DestinationGallery
            title="Bali — Temples, Terraces &amp; Coastline"
            subtitle="The island of 20,000 temples and one of the most dramatic coastlines in Southeast Asia."
            spots={[
              {
                name: "Tegallalang Rice Terraces",
                query: "tegallalang rice terraces bali green paddy fields morning mist",
                desc: "Ubud's most iconic landscape — a thousand-year-old subak irrigation system, UNESCO-recognised, best seen at dawn before the crowds.",
              },
              {
                name: "Uluwatu Temple at Sunset",
                query: "uluwatu temple bali clifftop ocean sunset stone gate",
                desc: "Dramatic clifftop temple 70 metres above the Indian Ocean — the setting for the nightly Kecak fire dance at sunset.",
              },
              {
                name: "Kelingking Beach, Nusa Penida",
                query: "kelingking beach nusa penida cliff turquoise water aerial",
                desc: "The T-Rex cliff — one of the most photographed spots in Indonesia. The viewpoint alone is worth the Nusa Penida day trip.",
              },
              {
                name: "Tirta Empul Water Temple",
                query: "tirta empul water temple bali sacred spring pool stone",
                desc: "Sacred water temple where Balinese Hindus come for purification at the 13 holy fountains.",
              },
              {
                name: "Tanah Lot Temple",
                query: "tanah lot temple bali sea rock sunset silhouette",
                desc: "Bali's most iconic sea temple — best visited at sunset when the silhouette against the sky is spectacular.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Bali is one of the best-value destinations in Southeast Asia at every price level. Budget travellers can live well on $20–35/day, mid-range on $50–95/day, and luxury on $200+/day. All prices in Indonesian Rupiah (IDR) and USD at ~Rp15,800 = $1.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category (5 days)</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">💎 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (5N)", "Rp750k–1.75M ($47–110)", "Rp2.5M–5M ($158–317)", "Rp15M–40M ($949–2,532)"],
                    ["🍽 Food & Drinks", "Rp500k–1M ($32–63)", "Rp2M–3.5M ($127–221)", "Rp5M–10M ($317–633)"],
                    ["🚗 Transport", "Rp500k–1M ($32–63)", "Rp1.5M–2.5M ($95–158)", "Rp3M–5M ($190–317)"],
                    ["🎯 Activities & Temples", "Rp400k–800k ($25–50)", "Rp1.5M–2.5M ($95–158)", "Rp5M–8M ($317–506)"],
                    ["🏝️ Nusa Penida Trip", "Rp350k–600k ($22–38)", "Rp600k–1M ($38–63)", "Rp2.5M–4M ($158–253)"],
                    ["TOTAL (per person)", "Rp2.5M–4M ($158–253)", "Rp6.5M–10M ($411–633)", "Rp30M–50M ($1,900–3,165)"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (Rp300k–600k/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in guesthouses and hostels (Rp150k–350k/night), eat at local warungs (Rp25k–60k/meal), rent a scooter (Rp70k–80k/day), and use Grab for longer trips. Bali is one of the cheapest destinations in Asia at this level.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">✨ Mid-Range (Rp800k–1.5M/day)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">Boutique villas with pool (Rp500k–1M/night), a mix of warung meals and restaurant dining, private drivers for temple days (Rp600k/day), and beach club afternoons. The sweet spot for comfort and value.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (Rp2.5M+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">5-star resorts (Rp3M–15M/night), private transfers, spa days, fine dining, and experiences like private Kecak viewings or Mount Batur sunrise treks. Bali is one of the world's best luxury-value destinations — $300/night gets you what would cost $800+ in Europe.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Bali</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key decision is which area to base yourself. Ubud for temples, culture and rice terraces. Uluwatu for cliff temples, beaches and the Kecak dance. Seminyak for beach clubs and nightlife. Canggu for surf culture and digital nomads. Most 5-day trips split between Ubud (2 nights) and the south coast (2–3 nights).
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Bisma Eight",
                  type: "Boutique jungle villa · Ubud",
                  price: "From Rp1.2M/night (~$76)",
                  badge: "Mid-range pick",
                  desc: "Stunning jungle-edge boutique hotel on Jl. Bisma with an infinity pool overlooking the Campuhan valley. The rooms are beautifully designed, breakfast is excellent, and the location is perfect — 10 minutes walk from central Ubud but completely quiet. The best mid-range option in Ubud by a significant margin.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Alila Villas Uluwatu",
                  type: "Luxury clifftop resort · Uluwatu",
                  price: "From Rp5M/night (~$317)",
                  badge: "Luxury pick",
                  desc: "Dramatic clifftop resort with one of the most spectacular infinity pools in Asia — cantilevered over the cliff edge, 100 metres above the ocean. The architecture (WOHA architects) is extraordinary. Private cabanas, world-class spa, and a 15-minute drive to Uluwatu Temple. Worth the splurge for at least one night.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Puri Garden Hotel",
                  type: "Budget guesthouse · Ubud",
                  price: "From Rp200k/night (~$13)",
                  badge: "Best budget",
                  desc: "Clean, well-maintained guesthouse with garden setting, pool, and a 5-minute walk to central Ubud. Rooms include breakfast. The staff are exceptionally helpful with transport and temple bookings. The kind of place that makes budget travel in Bali feel luxurious compared to anywhere else in Asia.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "The Layar (Seminyak)",
                  type: "Designer villa · Seminyak",
                  price: "From Rp2.5M/night (~$158)",
                  badge: "Best design",
                  desc: "Private designer villas with angular architecture, private pools, and a 10-minute walk to Seminyak Beach. Each villa has its own kitchen, living area, and a pool surrounded by tropical gardens. Ideal for couples or small groups who want the beach club scene without the resort crowd.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Budget guesthouses in Pecatu / Uluwatu",
                  type: "Budget · South Bali",
                  price: "Rp150k–300k/night (~$10–19)",
                  badge: "Value south coast",
                  desc: "The Uluwatu and Pecatu area has dozens of small guesthouses and homestays run by local families. Clean rooms, often with breakfast included, and a 10-minute scooter ride to Uluwatu Temple and the beaches. Look on Booking.com for options rated 8+ — there are many excellent ones that don't appear on the first page.",
                  color: "border-purple-200 bg-purple-50",
                },
              ].map((stay) => (
                <div key={stay.name} className={`rounded-xl p-4 border ${stay.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{stay.name}</p>
                      <p className="text-xs text-muted font-light">{stay.type}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs bg-white/80 text-ink px-2.5 py-1 rounded-full border border-white/60">{stay.price}</span>
                      <span className="text-xs bg-gold/15 text-gold-dark px-2 py-0.5 rounded-full font-medium">{stay.badge}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{stay.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHERE TO EAT ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Bali</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The single most important food rule in Bali: walk 200 metres off any main tourist street and prices drop by 60–70%. A nasi campur at a warung on Jl. Monkey Forest costs Rp80k+; the same meal at a local warung two streets away is Rp25k–40k and often tastes better. Here are the spots worth seeking out.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Warung Biah Biah",
                  t: "Authentic Balinese · Ubud",
                  d: "The real Balinese eating experience. Family-run warung serving traditional recipes — nasi campur, lawar (mixed vegetables with grated coconut and spices), sate lilit (minced seafood satay), and babi guling (suckling pig) on certain days. Everything is cooked fresh. Rp35k–60k for a full meal (~$2–4). No Instagram decor, no smoothie bowls — just excellent local food at local prices.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Locavore To",
                  t: "Modern Balinese fine dining · Ubud",
                  d: "The casual sibling of Locavore (Asia's 50 Best). Modern interpretations of Balinese dishes using hyper-local ingredients — everything sourced within Bali. The tasting menu format is excellent value for the quality. Rp200k–350k/person (~$13–22). Book a day ahead in peak season. This is where Ubud's food scene gets genuinely world-class.",
                  b: "Best mid-range",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Warung Local (Canggu)",
                  t: "Budget Indonesian · Canggu",
                  d: "A Canggu institution for budget travellers. Nasi goreng, mie goreng, gado-gado, and fresh juices at prices that feel impossible given the quality. Rp30k–50k for a full meal with a drink (~$2–3). The portions are generous and the cooking is genuinely good. Open from 8am — solid breakfast option too.",
                  b: "Best budget Canggu",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Single Fin (Uluwatu)",
                  t: "Clifftop beach club · Uluwatu",
                  d: "Perched on the cliff overlooking the Uluwatu surf break. The food is decent (not exceptional), but the view is one of the best lunch settings in Bali. Burgers, bowls, and cocktails. Rp150k–250k/person (~$10–16). Come for the view, stay for the sunset. Sunday sessions with live DJs are popular.",
                  b: "Best view",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Jimbaran Bay Seafood",
                  t: "Beachfront grilled seafood · Jimbaran",
                  d: "A row of seafood warungs on Jimbaran Beach where you pick your fish, prawns, squid, and lobster from the display, and it is grilled on the sand in front of you. Served with rice, sambal, and vegetables. Rp200k–350k/person (~$13–22) for a full seafood spread. Go at sunset — the atmosphere with candles on the beach and the smell of charcoal is unforgettable.",
                  b: "Iconic dinner",
                  c: "bg-parchment border-parchment-2",
                },
              ].map((r) => (
                <div key={r.n} className={`rounded-xl p-4 border ${r.c}`}>
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{r.n}</p>
                      <p className="text-xs text-muted font-light">{r.t}</p>
                    </div>
                    <span className="text-xs bg-white/80 text-amber-700 px-2.5 py-1 rounded-full border border-amber-200 font-medium">{r.b}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{r.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate Block */}
          <AffiliateBlock
            destination="Bali Indonesia"
            hotels={[
              {
                name: "Puri Garden Hotel",
                type: "Budget Guesthouse · Ubud",
                price: "From Rp200k/night (~$13)",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/hotel/id/puri-garden-ubud.html?aid=2820480",
              },
              {
                name: "Bisma Eight",
                type: "Boutique Jungle Villa · Ubud",
                price: "From Rp1.2M/night (~$76)",
                rating: "5",
                badge: "Mid-range pick",
                url: "https://www.booking.com/hotel/id/bisma-eight-ubud.html?aid=2820480",
              },
              {
                name: "Alila Villas Uluwatu",
                type: "Luxury Clifftop Resort · Uluwatu",
                price: "From Rp5M/night (~$317)",
                rating: "5",
                badge: "Luxury pick",
                url: "https://www.booking.com/hotel/id/alila-villas-uluwatu.html?aid=2820480",
              },
              {
                name: "The Layar Designer Villas",
                type: "Private Villas · Seminyak",
                price: "From Rp2.5M/night (~$158)",
                rating: "5",
                badge: "Best design",
                url: "https://www.booking.com/hotel/id/the-layar-designer-villas.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Nusa Penida Day Trip + Snorkelling",
                duration: "Full day",
                price: "From Rp350k/person (~$22)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=nusa+penida+day+trip&partner_id=PSZA5UI",
              },
              {
                name: "Uluwatu Kecak Fire Dance",
                duration: "2 hours",
                price: "From Rp150k/person (~$9.50)",
                badge: "Cultural",
                url: "https://www.getyourguide.com/s/?q=uluwatu+kecak+dance&partner_id=PSZA5UI",
              },
              {
                name: "Mount Batur Sunrise Trek",
                duration: "8 hours",
                price: "From Rp500k/person (~$32)",
                badge: "Adventure",
                url: "https://www.getyourguide.com/s/?q=mount+batur+sunrise+trek&partner_id=PSZA5UI",
              },
              {
                name: "Ubud Rice Terrace & Temple Tour",
                duration: "10 hours",
                price: "From Rp400k/person (~$25)",
                url: "https://www.getyourguide.com/s/?q=ubud+rice+terrace+temple+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🏨",
                  title: "Staying only in Kuta",
                  desc: "Kuta is noisy, overdeveloped and not representative of Bali at all. It's fine for one night near the airport. Stay in Ubud (culture), Uluwatu (cliffs and temples) or Seminyak (beach clubs) instead. Kuta was Bali's first tourist area in the 1970s and has been in decline for two decades.",
                },
                {
                  icon: "🌾",
                  title: "Visiting Tegallalang after 9am",
                  desc: "By 10am it's a photoshoot queue with swing operators shouting at you. Arrive at 6:30am for mist and genuine beauty, or after 4pm for golden light and thinning crowds. The difference between 7am and 10am Tegallalang is the difference between two completely different places.",
                },
                {
                  icon: "🛵",
                  title: "Not renting a scooter (if experienced)",
                  desc: "Bali without a scooter is 3x more expensive and half as flexible. Rental is Rp70k–80k/day (~$4–5). Get an international driving permit before you go — police checkpoints are common and the fine is Rp500k without one. That said, if you've never ridden before, Bali traffic is not the place to learn.",
                },
                {
                  icon: "⚠️",
                  title: "Scootering Nusa Penida without experience",
                  desc: "Roads are steep, unpaved in sections, and have no barriers on cliff edges. Serious accidents happen weekly to tourists. Hire a driver on Nusa Penida (Rp600k–800k/day split between passengers) unless you are a confident, experienced scooter rider. This is not overcautious advice — hospital evacuations from Nusa Penida are complicated and expensive.",
                },
                {
                  icon: "🍜",
                  title: "Eating only on tourist strips",
                  desc: "Tourist-strip warungs on Jl. Monkey Forest and Jl. Hanoman charge 3x local prices for the same food. Walk 200m off any main road and a full nasi campur is Rp25k–40k (~$1.50–2.50) instead of Rp80k+. Ask your guesthouse staff where they eat — that's where the real food is.",
                },
                {
                  icon: "🏞️",
                  title: "Skipping Sidemen Valley",
                  desc: "Most tourists hit Ubud, Uluwatu, and Canggu. Sidemen has the same rice terraces with Mount Agung towering behind them, zero crowds, and the most authentic village atmosphere left in Bali. If you have 7 days, spend 2 in Sidemen. It is what most people imagined Bali would be before they arrived.",
                },
              ].map((m) => (
                <TipCard
                  key={m.title}
                  icon={m.icon}
                  title={m.title}
                  desc={m.desc}
                  color="bg-white border-parchment-2"
                />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Bali</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "The 6:30am rule",
                  desc: "Every major Bali attraction is a completely different place before 7am. Tegallalang, Campuhan Ridge Walk, Tirta Empul, Tanah Lot — arrive at opening for the Bali that actually exists beyond Instagram. Set one alarm. It is worth it every single time.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "💱",
                  title: "Cash is king",
                  desc: "Carry Rupiah for warungs, temples, parking, and small shops. ATMs charge Rp30k–50k withdrawal fees. Best exchange rates at licensed money changers in Ubud or Seminyak (NOT the airport). Avoid unlicensed changers who use rigged calculators — they are common on Jl. Legian.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🧣",
                  title: "Pack a sarong",
                  desc: "Required at every temple. Buy one at any market for Rp30k–50k (~$2–3) — it will be higher quality than the rental ones and you use it repeatedly. Renting at temple gates costs Rp10k–20k each time with shared, damp sarongs. Having your own also works as a beach towel, blanket, and bag cover.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "📱",
                  title: "Grab and Gojek over taxis",
                  desc: "Grab and Gojek are 50–70% cheaper than metered taxis. Airport pickups require walking to the car park exit (follow signs to the 4th floor). Download both apps before you land and buy a local SIM at the airport (Rp50k–100k for 10–20GB data). Telkomsel has the best coverage island-wide.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🌊",
                  title: "Wet season is underrated",
                  desc: "November–March rain comes in short 1–2 hour afternoon bursts — mornings are often clear. Prices drop 30–50%, rice terraces are at their greenest, and waterfalls at full power. The light after the rain clears is extraordinary. Pack a light rain jacket and adjust your timing to mornings.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "🙏",
                  title: "Respect Nyepi (Day of Silence)",
                  desc: "Bali's Day of Silence (usually March) means no lights, no travel, no noise for 24 hours. The airport closes. Check dates before booking flights. The night before Nyepi, the Ogoh-Ogoh parade through every village — giant demon effigies carried through the streets — is one of the most spectacular cultural events in Bali.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Bali" />

          {/* Combine With */}
          <CombineWith currentSlug="bali-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days do you need in Bali?",
                  a: "5 days is ideal to cover Ubud (2 nights), Uluwatu (2 nights) and a Nusa Penida day trip. 3 days works if you pick either Ubud or the south coast. 7–10 days lets you add Sidemen valley, Amed for diving, or the Gili Islands. Most first-time visitors wish they had booked 7 days.",
                },
                {
                  q: "How much does a 5-day Bali trip cost?",
                  a: "Budget solo: Rp2.5M–4M ($158–253) including accommodation, food, transport and activities. Mid-range: Rp6.5M–10M ($411–633). Luxury: Rp30M–50M ($1,900–3,165). Bali is one of the best value destinations in the world at every price level — the mid-range experience here rivals luxury in most countries.",
                },
                {
                  q: "Do I need a visa for Bali?",
                  a: "Indian passport holders get a free 30-day visa on arrival — no fee, no pre-application needed. Most Western passports (USA, UK, EU, Australia, Canada and 80+ countries) also get 30 days visa-free. If you want to stay longer than 30 days, pay the Rp500,000 (~$32) VOA on arrival instead of the free entry — only the paid VOA is extendable by another 30 days at immigration.",
                },
                {
                  q: "What is the best time to visit Bali?",
                  a: "April–October is dry season and best overall. May–June and September offer the best balance of good weather and reasonable prices. July–August is peak season with highest prices and biggest crowds. November–March is wet season but still warm (27–33°C), with prices 30–50% lower and the greenest landscapes of the year.",
                },
                {
                  q: "Is Ubud or Seminyak better?",
                  a: "Ubud for temples, rice terraces, yoga, art galleries and spiritual experiences — it is the cultural heart of Bali. Seminyak for beach clubs, surfing, nightlife and restaurant dining. They are completely different experiences. The best approach is to split your time: 2–3 nights in Ubud for culture, then move south for beaches and sunset bars.",
                },
                {
                  q: "Is Nusa Penida worth a day trip?",
                  a: "Absolutely. Kelingking Beach (the T-Rex cliff), Angel's Billabong (natural infinity pool), and Broken Beach (dramatic natural arch) are among the most dramatic coastal scenery in all of Southeast Asia. The fast boat from Sanur takes 30–45 minutes. Hire a driver on the island (Rp600k–800k split between passengers) rather than scootering — the roads are dangerous for inexperienced riders.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto px-6 md:px-8 mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Bali trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-bali", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/bali-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-bali", label: "How to get there", icon: "✈️" },
                { href: "/blog/bali-travel-tips", label: "Travel tips", icon: "📋" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-parchment border border-parchment-2 rounded-xl hover:border-gold hover:shadow-sm transition-all text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-ink leading-tight">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Guides */}
          <RelatedGuides currentSlug="bali-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Southeast Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Ubud Deep Dive &mdash; 3 Day Guide", href: "/blog/ubud-3-days" },
                { label: "Lombok &mdash; 4 Day Island Guide", href: "/blog/lombok-4-days" },
                { label: "Bangkok &mdash; 4 Day Guide", href: "/blog/bangkok-4-days" },
                { label: "Vietnam &mdash; 10 Day Itinerary", href: "/blog/vietnam-10-days" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group"
                >
                  <span
                    className="text-sm text-ink font-light group-hover:text-teal transition-colors"
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  />
                  <span className="text-xs text-muted">Read →</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
