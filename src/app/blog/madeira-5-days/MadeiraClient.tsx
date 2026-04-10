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
const MADEIRA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Madeira Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "5-Day Itinerary" },
  { id: "landmarks",  emoji: "🏔️", label: "Landmark Guide" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",        emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",   emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "💡",  label: "Pro Tips" },
  { id: "faq",        emoji: "❓",  label: "FAQ" },
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
          href: `mailto:?subject=Madeira 5-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Madeira in 5 Days — levada walks, Pico do Arieiro &amp; the Monte toboggan&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/madeira-5-days"
        imageUrl="https://images.unsplash.com/photo-1548625361-58a9d86b2b8b?w=1200&q=80"
        description="Madeira in 5 Days: levada walks, Pico do Arieiro, Funchal Old Town, Monte toboggan, and Cabo Girao skywalk — complete travel guide."
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
export default function MadeiraClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MADEIRA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Madeira" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="madeira island portugal levada walk tropical laurel forest ocean views"
            fallback="https://images.unsplash.com/photo-1548625361-58a9d86b2b8b?w=1600&q=80"
            alt="Madeira island levada walk through laurel forest with ocean views"
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
              <span className="text-white/70">Madeira 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-teal-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Portugal Atlantic Island
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Madeira in 5 Days:
                <em className="italic text-amber-300"> Levada Walks, Volcanic Peaks &amp; the Monte Toboggan</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                A volcanic island draped in laurel forest, laced with 2,500 km of levada trails, and fringed by cliffs so vertical the cable cars aren&apos;t optional. The complete 5-day guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="14 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🏝️ Madeira, Portugal</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💶 From €60/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Madeira is the Atlantic island that rewrites your expectations of Europe — a volcanic peak draped in laurel forest, laced with 2,500 km of levada irrigation channels that double as hiking trails, and fringed by cliffs so vertical that the cable cars are not optional.
            </p>
          </blockquote>

          {/* ── WHAT MADEIRA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Madeira Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Madeira is a Portuguese autonomous region sitting in the Atlantic Ocean 520 km west of Morocco — closer to Africa than to Lisbon. It is not a beach destination in the conventional sense: the island is volcanic, steep, and overwhelmingly vertical. What it has is a year-round mild climate (18–24°C), a network of ancient irrigation channels (levadas) that form 2,500 km of ready-made hiking trails, dramatic sea cliffs, and one of Europe&apos;s most distinctive food and wine cultures built around sugarcane spirits, black scabbardfish, and the famous Madeira wine.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Funchal, the capital, is a surprisingly sophisticated city with Michelin-starred restaurants, a vibrant Old Town of hand-painted tile facades, and an excellent market. The island&apos;s highest peak, Pico Ruivo at 1,862m, is reached by a ridge trail from Pico do Arieiro (1,818m) — a walk so dramatic it feels designed by a film director. And the Monte toboggan ride, where two pilots in white suits steer a wicker basket sled down 2 km of cobblestone from Monte village to Funchal, is the most gloriously absurd transport experience in Europe.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Five days is enough to see the full range: sea-level seafood and summit snowfields, tropical gardens and black volcanic beaches, Michelin dining and €2 poncha cocktails in an Old Town adega — all within an island you can drive end-to-end in two hours.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="From Lisbon" value="1.5 hrs" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Jun / Sep–Oct" />
              <StatCard icon="🏔️" label="Highest Peak" value="1,862m" />
              <StatCard icon="💶" label="Budget From" value="€60/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Madeira</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌸",
                  t: "Spring — Best for Hiking",
                  d: "18–23°C at sea level, clear summit conditions for Pico do Arieiro and the PR1 ridge trail. The levadas are green and full after winter rains. Fewer crowds than summer. The Flower Festival in May fills Funchal with colour. Ideal for most travellers.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Autumn — Excellent Conditions",
                  d: "20–25°C, sea water still warm from summer (22°C), lower crowds than August, stable weather for hiking. September is particularly good — long daylight hours, clear summits, and shoulder-season hotel prices. One of the two best windows.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "☀️",
                  t: "Summer — Peak Season",
                  d: "22–27°C, sunny and dry. The busiest months with peak hotel prices. Pico do Arieiro summit can be crowded by 10am. Levada trails are excellent in early morning. Good for families, beach days at Porto Moniz lava pools, and the Festival of the Assumption (Aug 15). Book everything ahead.",
                  b: "Book ahead",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Mar",
                  i: "🌧️",
                  t: "Winter — Quiet &amp; Affordable",
                  d: "14–18°C, occasional mountain rain and cloud. The New Year&apos;s Eve fireworks in Funchal (one of the world&apos;s largest, covering the entire hillside) are spectacular. Madeira&apos;s carnival in February is vivid. Mountain weather is less predictable. Hotel prices drop 30–50%. Great for wine estates and city culture.",
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

          {/* ── HOW TO REACH ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Madeira</h2>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-teal-800 font-light">
                <strong className="font-medium">Key detail:</strong> Madeira&apos;s airport is <strong className="font-medium">Cristiano Ronaldo International Airport (FNC)</strong>, 22 km east of Funchal. From the airport to Funchal city centre: public Aerobus €5, city bus 20/53 €2, or taxi €20–25 (20 minutes). A hire car can be collected at the airport — useful for days 2–4.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Flight from Lisbon (recommended)",
                  d: "TAP Air Portugal, Ryanair, easyJet: 1.5 hours, €30–80 return depending on season. Multiple daily departures. The cheapest way to reach Madeira from mainland Portugal or as a connection hub for international arrivals.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Direct flights from UK / Europe",
                  d: "easyJet, Jet2, TUI fly direct from London Gatwick, Manchester, Bristol, and other UK airports (3.5–4 hrs). Ryanair flies from multiple European cities. TAP connects from Paris, Frankfurt, Amsterdam via Lisbon. Good options for European travellers.",
                  b: "Good option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "✈️",
                  t: "From India / International",
                  d: "No direct flights from India. Connect via Lisbon (TAP, Air India codeshare) or via London, Amsterdam, or Frankfurt. Lisbon is the natural hub — fly Mumbai/Delhi to Lisbon, then the 1.5-hour hop to FNC. Total journey 14–18 hours with connection.",
                  b: "Via Lisbon",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  i: "🚢",
                  t: "Ferry from Porto Santo",
                  d: "Porto Santo Line operates a 2.5-hour ferry between Porto Santo island and Funchal (€55–70 return). The ferry route from mainland Portugal does not operate year-round. Porto Santo makes an excellent add-on for beach lovers — 9 km of golden sand.",
                  b: "Island hop",
                  c: "bg-blue-50 border-blue-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Madeira Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is ordered to get the big hikes done in the clearest morning light — summit conditions on Pico do Arieiro deteriorate after 10am, even in spring.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Funchal Old Town · Rua de Santa Maria · Poncha &amp; First Dinner"
                cost="€35–45 (bus, hostel/hotel, dinner, drinks)"
                items={[
                  "14:00 — Arrive FNC airport; take the Aerobus (€5) or city bus 20/53 (€2) into Funchal centre — taxis charge €20–25 for the same 20-minute ride. Check in to a guesthouse or hotel in the Old Town zona velha (€25–130/night depending on tier).",
                  "15:30 — Walk the Old Town: the Rua de Santa Maria tile door art project has turned every doorway into a painted canvas — 200+ doors each with a different artist commissioned. This is Funchal&apos;s most distinctive cultural offering and it&apos;s free. Allow 90 minutes to walk the full street slowly.",
                  "17:30 — Walk to the Mercado dos Lavradores (Funchal&apos;s covered market): the most colourful market in Portugal. Ground floor has tropical flowers; upper floor has exotic fruits (custard apple, passion fruit, tabaibo, pitanga) and the fish hall with the terrifying black scabbardfish. Free to browse.",
                  "19:30 — Dinner at a local taberna in the Old Town: espetada (beef skewer on a bay laurel stick, €12–14) with bolo do caco (bread fried with garlic butter). Avoid the tourist restaurants on the seafront promenade — walk two streets back for the real thing.",
                  "21:00 — First poncha at a traditional adega: the Madeiran sugarcane spirit (aguardente) mixed with honey and lemon, stirred with a wooden caralhinho. Costs €2–3. Try Taberna Ruel on Rua de Santa Maria for the most traditional version. This is the best €3 you will spend on the island.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Levada do Caldeiro Verde · Queimadas Forest Park · Funchal Fish Market"
                cost="€30–40 (bus, food, dinner)"
                items={[
                  "08:00 — Take bus 56 from Funchal to Queimadas park (€4.50 each way, 1.5 hours) — book the return journey time with the driver as buses are infrequent in the north. Bring a head torch: this levada has four tunnels, two of them over 100m long.",
                  "10:00 — Levada do Caldeiro Verde: a 13 km round-trip walk through UNESCO Laurisilva laurel forest (Madeira&apos;s ancient cloud forest, 30+ million years old) to a 100m waterfall at the end. Free entry. The forest is genuinely primeval — ancient trees draped in ferns, mosses on the levada walls, and complete silence except for water. Allow 4–5 hours.",
                  "14:30 — Picnic lunch on the levada wall: pack food the night before from Funchal&apos;s mercado — local bread, sheep cheese (queijo fresco), and passion fruit for €5–7. There are no restaurants near Queimadas.",
                  "17:30 — Return bus to Funchal. Dinner at Mercado do Peixe (the fish market restaurant on Rua Dom Carlos I, €10–14): grilled black scabbardfish (espada preta) served with banana is Madeira&apos;s signature dish — the pairing sounds strange but is genuinely excellent.",
                  "20:00 — Evening stroll along Funchal marina; espresso at a pastelaria for €0.80. Rest — tomorrow is the big mountain day.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Pico do Arieiro · PR1 Ridge Trail to Pico Ruivo · Santana Village"
                cost="€55–65 (car rental, petrol, food)"
                items={[
                  "07:00 — Rent a small car for the day (€25–35 from local agencies in Funchal; avoid airport rentals which cost 40% more). You need a car for Madeira&apos;s mountain roads — buses don&apos;t reach the summit.",
                  "09:00 — Drive to Pico do Arieiro (1,818m), Madeira&apos;s third-highest peak — 45 minutes from Funchal. The summit is often above the clouds: from up here you look down on a sea of white with peaks floating above it. Bring a warm jacket even in June — it can be 5–8°C with wind while Funchal is 23°C.",
                  "09:30 — Start the PR1 ridge trail to Pico Ruivo (1,861m): a 9 km one-way trail with metal stairways, tunnels blasted through the rock, exposed ridge sections with Atlantic views on both sides, and rock arches that look constructed rather than natural. Allow 3–4 hours one way. This is the finest walk in Madeira and one of the best in all of Europe.",
                  "14:00 — Drive down via Santana village: see the traditional palheiro thatched houses — triangular A-frame structures unique to Madeira, with the thatched roof reaching almost to the ground. Entirely authentic and genuinely unusual architecture.",
                  "17:00 — Stop at Ribeiro Frio viewpoint: one of the best levada junction views on the island, with terraced hillsides dropping into deep valleys. The trout farm here has been here since the 1940s. Free.",
                  "19:30 — Return to Funchal; budget dinner: the island&apos;s version of the Portuguese francesinha sandwich for €8, or grilled chicken at a local churrasqueira.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Monte Cable Car · Monte Toboggan · Monte Palace Tropical Garden · Eastern Madeira"
                cost="€50–80 (cable car, toboggan, garden, food)"
                items={[
                  "09:00 — Cable car from Funchal seafront (Teleférico da Madeira) up to Monte village: €13 one way, €22 return. The 15-minute ride climbs from sea level to 550m with views across Funchal bay, the Old Town rooftops, and the Atlantic horizon.",
                  "10:00 — Monte toboggan ride: two carreiros (sledge pilots in traditional white suits and straw hats) steer a wicker basket toboggan 2 km down the old cobblestone road from Monte to Livramento. €30 per sled, fits two people. This has been running since 1850 — it is absurd, joyful, and completely unique. Book at the departure point near Monte church.",
                  "11:30 — Monte Palace Tropical Garden (€12.50 entry): 70,000 sqm of exotic plants from five continents, massive azulejo tile panels illustrating Portuguese history, and a lake with Japanese koi. The tiles alone are worth the entry — some panels are 10m tall. Madeira&apos;s best garden.",
                  "13:30 — Walk down from Monte to Funchal on foot (free) via the old pilgrims&apos; staircase — 45 minutes downhill through terraced gardens with good views. Or take the cable car back (€13).",
                  "15:00 — Drive east to Ponta de São Lourenço: Madeira&apos;s stark eastern peninsula, geologically completely different from the green west — arid red-ochre volcanic cliffs, sea stacks, and eroded formations. The PR8 trail (3 km each way) hugs the cliff edge with views of the Atlantic on both sides.",
                  "19:30 — Dinner: Armazém do Sal (Rua da Alfândega 135, €35/pp) — creative Madeiran cuisine in a converted 16th-century salt warehouse with original stone floors. Reserve ahead.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Cabo Girao Skywalk · Porto Moniz Lava Pools · Blandy&apos;s Wine Lodge · Departure"
                cost="€40–60 (car, pools, wine tour, food)"
                items={[
                  "09:00 — Drive west to Cabo Girao: Europe&apos;s second-highest sea cliff at 580m. The glass-floor skywalk platform extends over the void — you stand on transparent panels above a 580m drop to the sea. The cliff farmers&apos; terraces below (tended via cable baskets) are visible on clear days. Free entry. Arrive before 10am to beat tour buses.",
                  "11:00 — Continue west to Porto Moniz: natural seawater pools on the northwest tip, formed by ancient lava flows creating interconnected black volcanic basalt pools. Entry €1.50. The clarity of the water is extraordinary — swimming here with ocean swells washing over the outer rocks is one of Madeira&apos;s best experiences.",
                  "13:00 — Lunch at one of the restaurants overlooking Porto Moniz pools: lapas (limpets grilled with lemon and garlic butter, €8–10) are Madeira&apos;s essential coastal snack. Order espada if it&apos;s on the menu.",
                  "15:00 — Drive the ER101 north coast road back toward Funchal via São Vicente with its basalt sea caves (€5 entry). The north coast road runs through tunnels and along cliff edges with sea views — one of the most dramatic coastal drives in Europe.",
                  "17:00 — Blandy&apos;s Wine Lodge (Avenida Arriaga, Funchal, €10 for standard tour): the most accessible of Madeira&apos;s historic wine companies, located in a 17th-century lodge in central Funchal. The 45-minute tour covers the history of Madeira wine, the solera ageing system, and finishes with a tasting of three wines including a 10-year-old Malmsey. Essential for wine lovers.",
                  "19:00 — Return hire car; final poncha in the Old Town. Flight departs or extend to Porto Santo island for the beach.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Madeira" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏔️ Madeira Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Prices as of 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Pico do Arieiro & PR1 Ridge Trail",
                  e: "Free trail (€5 bus or car needed)",
                  d: "Madeira&apos;s third-highest peak (1,818m) and the starting point for the PR1 ridge trail to Pico Ruivo (1,861m). Nine kilometres of exposed ridgeline walking with tunnels, metal stairways, and Atlantic views on both sides. The finest mountain walk in Madeira. Summit access requires a car or taxi.",
                  t: "Must do · 4–6 hrs",
                },
                {
                  n: "Levada do Caldeiro Verde",
                  e: "Free (bus €4.50 each way)",
                  d: "A 13 km round-trip levada walk through UNESCO Laurisilva laurel forest to a 100m waterfall. Four tunnels requiring a head torch. The most atmospheric of Madeira&apos;s levada walks — genuinely ancient forest with no modern intrusion.",
                  t: "Must do · 4–5 hrs",
                },
                {
                  n: "Monte Toboggan Ride",
                  e: "€30 per sled (2 people)",
                  d: "Two carreiros in white suits steer a wicker basket toboggan 2 km down cobblestone from Monte to Livramento — a tradition since 1850. Absolutely unique to Madeira. Departs from near Monte church, 15 minutes by cable car above Funchal.",
                  t: "Unmissable · 15 mins",
                },
                {
                  n: "Cabo Girao Skywalk",
                  e: "Free",
                  d: "Europe&apos;s second-highest sea cliff at 580m with a glass-floor platform over the void. The perspective is genuinely vertiginous. Arrive before 9:30am to avoid tour buses. The cliff terrace farmers below still tend their plots by cable basket.",
                  t: "Must see · 30 mins",
                },
                {
                  n: "Monte Palace Tropical Garden",
                  e: "€12.50",
                  d: "70,000 sqm of exotic plants, historical azulejo tile panels up to 10m tall, Japanese garden with koi lake, and a museum of minerals and African sculptures. The tile panels alone justify the entry fee. Far superior to any other garden on the island.",
                  t: "Allow 2 hrs",
                },
                {
                  n: "Porto Moniz Natural Lava Pools",
                  e: "€1.50",
                  d: "Natural seawater pools on the northwest tip of the island, formed by ancient lava creating interconnected basalt rock pools. Swimming in clear Atlantic water surrounded by black volcanic rock with ocean swells breaking on the outer edge. The best swim in Madeira.",
                  t: "Must do · 2 hrs",
                },
                {
                  n: "Blandy&apos;s Wine Lodge",
                  e: "€10 (standard tour)",
                  d: "The historic Blandy family wine lodge in central Funchal, operating since 1811. The 45-minute tour covers the solera ageing system for Madeira wine (a wine that ages for decades to centuries), the historic pipe cellars, and ends with a tasting. Book online to guarantee a spot.",
                  t: "Wine lovers · 1 hr",
                },
                {
                  n: "Funchal Old Town (Zona Velha)",
                  e: "Free",
                  d: "The historic heart of Funchal — cobbled streets, 200+ hand-painted tile doors on Rua de Santa Maria, the oldest churches on the island, traditional poncha adegas, and the city&apos;s best restaurants. The tile door project was started in 2011 and commissions a new artist for each door.",
                  t: "Allow 2–3 hrs",
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
            title="Madeira — Volcanic Peaks, Levadas &amp; the Atlantic"
            subtitle="Madeira&apos;s extraordinary range: from sea-cliff skywalk to ancient laurel forest."
            spots={[
              {
                name: "Pico do Arieiro Summit",
                query: "pico do arieiro madeira summit above clouds volcanic peak portugal",
                desc: "The summit of Pico do Arieiro (1,818m) above the clouds — the starting point for the PR1 ridge trail to Pico Ruivo.",
              },
              {
                name: "Levada Walk Laurel Forest",
                query: "levada walk madeira laurel forest laurisilva green tunnel portugal",
                desc: "A levada irrigation channel cutting through Madeira&apos;s ancient Laurisilva forest — the world&apos;s largest surviving laurel forest.",
              },
              {
                name: "Cabo Girao Sea Cliff",
                query: "cabo girao madeira sea cliff skywalk atlantic ocean portugal",
                desc: "Cabo Girao&apos;s glass-floor skywalk, 580m above the Atlantic — Europe&apos;s second-highest sea cliff.",
              },
              {
                name: "Funchal Old Town Tile Doors",
                query: "funchal old town rua santa maria tile doors painted portugal madeira",
                desc: "The Rua de Santa Maria tile door project in Funchal — 200+ doors each painted by a different artist.",
              },
              {
                name: "Porto Moniz Lava Pools",
                query: "porto moniz natural lava pools madeira atlantic volcanic basalt swimming",
                desc: "Porto Moniz&apos;s natural seawater pools formed by ancient lava — the best swimming on Madeira.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Madeira is mid-range by European standards — more affordable than the Canary Islands in most tiers. The main cost variable is accommodation: Funchal has everything from €18 dorm beds to Reid&apos;s Palace at €500+/night.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Tier</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Accommodation</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Food</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">Transport</th>
                    <th className="p-3.5 text-xs font-medium text-green-300 text-center">Total/day</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🎒 Backpacker", "€18–25 (dorm)", "€10–18 (self-catering)", "€3–8 (public bus)", "€40–55/day"],
                    ["💰 Budget", "€25–35 (guesthouse)", "€18–25 (tabernas)", "€8–15 (bus + car share)", "€60–80/day"],
                    ["✨ Mid-Range", "€90–130 (4-star cliff hotel)", "€40–60 (restaurants + wine)", "€45–55 (hire car)", "€120–170/day"],
                    ["💎 Luxury", "€250–600 (Reid&apos;s Palace)", "€100–200 (Michelin + wine)", "€60–300 (private driver)", "€300–500+/day"],
                    ["👪 Family", "€100–160 (apartment)", "€50–70 (self-catering + dining)", "€40–55 (hire car)", "€130–180/day"],
                  ].map(([tier, acc, food, transport, total]) => (
                    <tr key={tier} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{tier}</td>
                      <td className="p-3.5 text-xs text-muted font-light text-center">{acc}</td>
                      <td className="p-3.5 text-xs text-muted font-light text-center">{food}</td>
                      <td className="p-3.5 text-xs text-muted font-light text-center">{transport}</td>
                      <td className="p-3.5 text-xs font-medium text-ink text-center">{total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget tip: Levadas are free</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">All of Madeira&apos;s levada walks are free — the island&apos;s best activity costs nothing except getting there. A hire car for 3 days (€35–55/day) unlocks 80% of the best experiences at a fraction of tour costs. Self-catering from the Mercado dos Lavradores cuts food bills in half.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Worth splashing on</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">The Monte toboggan (€30) is non-negotiable — there is nothing else like it in Europe. The Monte Palace Tropical Garden (€12.50) and Blandy&apos;s Wine Lodge tour (€10) are both worth the entry. If your budget allows one splurge, dinner at Armazém do Sal (€35/pp) or Il Gallo d&apos;Oro (Michelin star) is the one to choose.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Madeira</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Funchal has three main areas: the Old Town (zona velha) for atmosphere and the best restaurants; the Lido strip for sea-view hotels and resort facilities; and the hills above Funchal for quiet and panoramic views. For a 5-day active trip, the Old Town or hillside is the best base.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Reid&apos;s Palace (Belmond)",
                  type: "Grand luxury · Clifftop, Funchal",
                  price: "From €350/night",
                  badge: "Most iconic",
                  desc: "The pink clifftop palace that has defined Madeira luxury since 1891. Winston Churchill painted here. The afternoon tea tradition (€65/pp) overlooking the Atlantic is a Madeira institution. Five pools, two Michelin-starred restaurants, and the finest clifftop position in Funchal. The benchmark for the island.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Quinta do Lago & Casa Velha do Palheiro",
                  type: "Heritage quinta · Palheiro Ferreiro estate",
                  price: "From €150/night",
                  badge: "Most atmospheric",
                  desc: "A 19th-century manor house hotel on the Palheiro Ferreiro estate 5 km above Funchal, surrounded by 12 hectares of English landscape gardens. Far quieter than city hotels. The estate&apos;s camellia collection is one of the most extensive in the world. Complimentary entry to the Quinta do Palheiro gardens.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "The Vine Hotel",
                  type: "Design boutique · City centre, Funchal",
                  price: "From €110/night",
                  badge: "Best city option",
                  desc: "A contemporary design hotel in the heart of Funchal, 5 minutes from the Old Town and the cable car. Rooftop pool with city and ocean views. Smart rooms, good restaurant, and the most central location for exploring on foot. The best mid-range option in Funchal proper.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Old Town Guesthouses (zona velha)",
                  type: "Budget-mid · Funchal Old Town",
                  price: "€30–70/night",
                  badge: "Best location for budget",
                  desc: "Several small guesthouses and apartments on or near Rua de Santa Maria. Basic but clean, with the best restaurant and bar access on the island directly outside. Ideal for solo travellers and couples who want the full Funchal experience without a resort hotel bill.",
                  color: "border-parchment-2 bg-white",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Madeira</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Madeira has a distinctive food culture built around black scabbardfish (espada preta), beef espetada on bay laurel skewers, limpets (lapas) grilled with lemon and butter, bolo do caco garlic bread, and poncha cocktails. The Old Town and the streets behind it have the best restaurants at every price point.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Armazém do Sal",
                  t: "Contemporary Madeiran · Old Town, Funchal",
                  d: "Creative Madeiran cuisine in a converted 16th-century salt warehouse with original stone floors and ceiling beams. The menu uses local fish, Madeiran wine, and seasonal vegetables in ways that feel genuinely modern without being pretentious. Mains €18–28. Reserve ahead — it fills up most evenings. One of the best restaurant settings in Portugal.",
                  b: "Best overall",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "O Celeiro",
                  t: "Traditional Madeiran · Rua dos Aranhas, Funchal",
                  d: "A long-running Funchal institution serving espetada (beef skewer on a bay laurel stick, hung from a hook over your table), bolo do caco, and traditional Madeiran dishes. The espetada is the best version in Funchal — the beef is locally sourced and the bay laurel smoke is essential. €12–18/pp. No reservations, queue forms quickly at dinner.",
                  b: "Best espetada",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Il Gallo d&apos;Oro",
                  t: "Michelin starred · Cliff Bay Hotel, Funchal",
                  d: "One Michelin star. The lunch tasting menu (€38) is the most accessible way to experience the highest level of Madeiran cooking: the black scabbardfish with seasonal vegetables and the passion fruit dessert are consistent standouts. Dinner tasting menu €75–95. Reserve at least a week ahead in summer.",
                  b: "Splurge",
                  c: "bg-rose-50 border-rose-200",
                },
                {
                  n: "Mercado do Peixe",
                  t: "Fish market restaurant · Rua Dom Carlos I, Funchal",
                  d: "A market-style fish restaurant next to Funchal&apos;s fish market. The daily catch is displayed on ice at the entrance — point to what you want and it comes back grilled with olive oil, lemon, and boiled potatoes. Espada preta (black scabbardfish) with banana is the Madeiran signature. €10–14 for a full meal. Lunch only.",
                  b: "Best value fish",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Taberna Ruel",
                  t: "Traditional adega · Rua de Santa Maria, Old Town",
                  d: "The most authentic poncha adega in Funchal — a tiny tile-walled bar on Rua de Santa Maria serving traditional Madeiran poncha (€2–3), local snacks, and the island&apos;s best version of the honey-lemon-aguardente cocktail. Standing room only after 9pm. The correct first stop on any Madeira trip.",
                  b: "Best poncha",
                  c: "bg-green-50 border-green-200",
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
            destination="Madeira Portugal"
            hotels={[
              {
                name: "Reid&apos;s Palace (Belmond)",
                type: "Grand luxury clifftop hotel since 1891",
                price: "From €350/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/pt/reids-palace.html?aid=2820480",
              },
              {
                name: "The Vine Hotel",
                type: "Design boutique · Funchal city centre",
                price: "From €110/night",
                rating: "4",
                badge: "Best city location",
                url: "https://www.booking.com/hotel/pt/the-vine.html?aid=2820480",
              },
              {
                name: "Casa Velha do Palheiro",
                type: "Heritage quinta · Palheiro estate",
                price: "From €150/night",
                rating: "5",
                badge: "Most atmospheric",
                url: "https://www.booking.com/hotel/pt/casa-velha-do-palheiro.html?aid=2820480",
              },
              {
                name: "Funchal Old Town Guesthouse",
                type: "Budget-mid · zona velha location",
                price: "From €35/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/searchresults.html?ss=Funchal+Old+Town&aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Madeira Levada Walk Guided Tour",
                duration: "5–6 hrs",
                price: "From €35/person",
                badge: "Best seller",
                url: "https://www.getyourguide.com/s/?q=Madeira+levada+walk&partner_id=PSZA5UI",
              },
              {
                name: "Pico do Arieiro to Pico Ruivo Trek",
                duration: "4–5 hrs",
                price: "From €45/person",
                badge: "Best hike",
                url: "https://www.getyourguide.com/s/?q=Madeira+Pico+Arieiro&partner_id=PSZA5UI",
              },
              {
                name: "Madeira Whale & Dolphin Watching",
                duration: "3 hrs",
                price: "From €45/person",
                badge: "Top rated",
                url: "https://www.getyourguide.com/s/?q=Madeira+whale+watching&partner_id=PSZA5UI",
              },
              {
                name: "Funchal City & Old Town Tour",
                duration: "2–3 hrs",
                price: "From €20/person",
                url: "https://www.getyourguide.com/s/?q=Funchal+city+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Madeira</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚌",
                  title: "Relying only on public buses",
                  desc: "Madeira&apos;s public buses are cheap but infrequent and do not reach most levada trailheads, the mountain summits, Cabo Girao, or Porto Moniz. A hire car for at least 3 of 5 days (€35–55/day from local agencies) unlocks 80% of the island&apos;s best experiences. Book in advance in July and August.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🌧️",
                  title: "Not checking the mountain weather",
                  desc: "Madeira&apos;s north side can be overcast when the south is sunny, and Pico do Arieiro can be in cloud by 11am even on a clear day. Check the IPMA Portuguese weather forecast and plan summit hikes for early morning. The island has a microclimate in every valley — sea level and summit weather are completely independent.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏨",
                  title: "Staying on the Lido tourist strip",
                  desc: "Funchal&apos;s seafront Lido area hotels are convenient but characterless — generic resort blocks with nothing walkable. Stay in the Old Town for atmosphere and real restaurants, or in the hills above Funchal for cliff views. Both are 15 minutes by bus from the Lido. The Lido is for one specific reason only: the sea pools.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🥾",
                  title: "Underestimating the levada tunnels",
                  desc: "The Caldeiro Verde and several other levada walks involve long unlit tunnels — the Caldeiro Verde has four, including one 700m stretch that is completely dark, low-ceilinged, and knee-deep in water after rain. Bring a head torch (not a phone torch), waterproof jacket, and trail shoes. These are not easy nature walks.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🐳",
                  title: "Missing whale watching",
                  desc: "Madeira has year-round cetacean watching among the best in Europe — sperm whales, pilot whales, bottlenose dolphins, and occasional blue whales are all seen regularly off the south coast. A 3-hour catamaran trip from Funchal marina costs €45. Most visitors only discover this on their last day. Book by Day 2.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🍷",
                  title: "Skipping the Madeira wine",
                  desc: "Madeira wine is one of the world&apos;s great fortified wines — deliberately oxidised and heated during production, which makes it virtually indestructible (open bottles last months). Blandy&apos;s Wine Lodge tour (€10) gives the full context. Don&apos;t leave without trying a 10-year Malmsey or a dry Verdelho. It is completely different from port.",
                  color: "bg-amber-50 border-amber-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Madeira</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🍋",
                  title: "Order poncha the traditional way",
                  desc: "Poncha is Madeira&apos;s soul in a glass — aguardente (sugarcane spirit), honey, and lemon juice, stirred with a wooden caralhinho. Order it at a traditional adega in the Old Town, never at a tourist bar on the seafront. The best costs €2–3 and comes with a side of local honey cake. Book Madeira activities at getyourguide.com with partner_id=PSZA5UI.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🌊",
                  title: "Swim at Porto Moniz, not Funchal",
                  desc: "Funchal&apos;s pebble beach is unremarkable and crowded. Porto Moniz&apos;s natural lava pools on the northwest tip have extraordinary water clarity, natural basalt architecture, and the drama of Atlantic swells breaking on the outer rocks. Entry is €1.50 and they are at their best at mid-tide on a sunny day.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🌅",
                  title: "Time Cabo Girao for a weekday morning",
                  desc: "Europe&apos;s second-highest sea cliff gets overrun by tour buses after 10am every day. Arrive before 9:30am on a weekday for the glass-floor skywalk with no queue and the full sense of void beneath your feet. The light is also better for photography before the midday haze sets in.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🏔️",
                  title: "Pack for four seasons in one day",
                  desc: "Funchal seafront can be 23°C while Pico do Arieiro summit is 5°C with wind and horizontal rain. Always carry a waterproof jacket and a warm layer in your day pack, regardless of the morning weather. The island&apos;s altitude range from sea level to 1,862m creates extraordinary climate variation within a 30-minute drive.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🚗",
                  title: "Book your hire car from a local agency",
                  desc: "Airport rental companies in Madeira charge a significant premium — sometimes 40–60% more than local Funchal agencies for the same car category. Book with a local agency (Moinho, Auto Jardim, or Sixt Funchal city office) and take the free shuttle. Full insurance is worth paying for given Madeira&apos;s mountain roads.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "📅",
                  title: "Hike PR1 on your clearest day",
                  desc: "The Pico do Arieiro to Pico Ruivo ridge trail (PR1) requires clear summit conditions to be fully rewarding. Watch the IPMA forecast for 3–4 days before your trip and hold this hike for the clearest window. Cloud-covered ridges with no views are a missed opportunity on Madeira&apos;s finest walk.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Madeira" />

          {/* Combine With */}
          <CombineWith currentSlug="madeira-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Madeira a good destination for non-hikers?",
                  a: "Absolutely. While Madeira&apos;s levada walks are the island&apos;s most famous feature, there is an enormous amount to do without hiking: the Monte toboggan ride, Monte Palace Tropical Garden, Blandy&apos;s Wine Lodge, whale watching from Funchal marina, the Old Town tile doors, the Mercado dos Lavradores, whale watching, and scenic drives on the north coast road. Non-hikers can fill five days very easily.",
                },
                {
                  q: "Do I need a visa to visit Madeira with an Indian passport?",
                  a: "Yes. Madeira is a Portuguese autonomous territory and part of the Schengen Area. Indian passport holders need a Schengen visa (Type C). Apply at the Portuguese Consulate or VFS Global, 6–8 weeks before travel. The fee is €80 and you will need hotel bookings, return flights, travel insurance, and 3 months of bank statements. Madeira is Portuguese territory — the same Schengen visa applies as for mainland Portugal.",
                },
                {
                  q: "What is the best month to visit Madeira?",
                  a: "Madeira has a mild climate year-round (18–24°C), but April–June and September–October offer the best hiking conditions: clear summit weather, lower humidity, and fewer crowds than August. December–January is the quietest with good hotel deals, though mountain weather is less predictable. The New Year&apos;s Eve fireworks in Funchal (covering the entire hillside) are among the largest in the world.",
                },
                {
                  q: "How much does the Monte toboggan ride cost and is it worth it?",
                  a: "The Monte toboggan ride costs €30 per sled, which fits two people (€15 each). It runs from Monte village (reached by cable car for €13 one way from Funchal) down 2 km of cobblestone to Livramento. The ride takes 10–15 minutes. It is absolutely worth it — this is a unique Madeiran tradition since 1850, and two pilots in white suits and straw hats genuinely steering a wicker basket down an old cobblestone road is an experience that exists nowhere else on earth.",
                },
                {
                  q: "How do I get from Madeira to Porto Santo island?",
                  a: "Porto Santo is Madeira&apos;s sandy sister island with a 9 km golden beach. The Porto Santo Line ferry takes 2.5 hours each way and costs €55–70 round trip. The 30-minute flight on SATA Air Açores costs €70–120 each way. Porto Santo makes an excellent day trip or overnight extension if you want a proper sandy beach — Madeira itself has very few sandy beaches.",
                },
                {
                  q: "Is a hire car essential in Madeira?",
                  a: "Not essential for every day, but highly recommended for at least 3 of 5 days. Public buses are cheap but do not reach Pico do Arieiro, most levada trailheads, Cabo Girao, Porto Moniz, or Ponta de São Lourenço. A local agency hire car (€35–55/day with full insurance) unlocks the best 80% of the island. Book from a Funchal city agency rather than at the airport to save 40%.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Madeira trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-madeira", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/madeira-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-madeira", label: "How to get there", icon: "✈️" },
                { href: "/blog/madeira-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="madeira-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Island Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Azores in 5 Days — Volcanic Islands", href: "/blog/azores-5-days" },
                { label: "Lisbon in 4 Days — Trams &amp; Tiles", href: "/blog/lisbon-4-days" },
                { label: "Porto in 3 Days — Wine &amp; Bridges", href: "/blog/porto-3-days" },
                { label: "Santorini in 4 Days — Caldera Views", href: "/blog/santorini-4-days" },
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
