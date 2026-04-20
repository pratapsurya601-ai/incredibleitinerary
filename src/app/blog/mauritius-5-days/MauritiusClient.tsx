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
const MAURITIUS_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Mauritius Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "5-Day Itinerary" },
  { id: "beaches",    emoji: "🏖️", label: "Beach &amp; Lagoon Guide" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",        emoji: "🍽️", label: "Where to Eat" },
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
          href: `mailto:?subject=Mauritius 5-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Mauritius in 5 Days — underwater waterfall, lagoons and island cuisine&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/mauritius-5-days"
        imageUrl="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80"
        description="Mauritius in 5 Days: Ile aux Cerfs, underwater waterfall, Chamarel Seven Coloured Earths, Black River Gorges — complete travel guide with budget breakdown."
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
export default function MauritiusClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MAURITIUS_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Mauritius" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="mauritius beach lagoon underwater waterfall ile aux cerfs turquoise"
            fallback="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1600&q=80"
            alt="Mauritius turquoise lagoon with underwater waterfall illusion and tropical beach"
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
              <span className="text-white/70">Mauritius 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Indian Ocean Island
                </span>
                <span className="text-white/60 text-xs">January 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Mauritius in 5 Days:
                <em className="italic text-amber-300"> Lagoons, Waterfalls &amp; Island Cuisine</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                An underwater waterfall that isn&apos;t actually a waterfall, seven cuisines on one island, and beaches where the Indian Ocean goes turquoise to cobalt in 10 metres. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="January 2026" readTime="13 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇲🇺 Mauritius</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From $130/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              An underwater waterfall that isn&apos;t actually a waterfall (it&apos;s a sand and silt optical illusion that looks perfect from above), beaches where the Indian Ocean gradient goes from turquoise to cobalt in 10 metres, a cuisine so multicultural it has seven distinct traditions on one island, and dodo-shaped everything in memory of the bird that made Mauritius famous before being eaten to extinction.
            </p>
          </blockquote>

          {/* ── WHAT MAURITIUS ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Mauritius Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Mauritius is a volcanic island in the Indian Ocean, 2,000 kilometres off the south-east coast of Africa. It&apos;s small — 65 kilometres long and 45 kilometres wide — but packs an extraordinary amount of diversity into that space. The coastline is almost entirely ringed by coral reef, creating calm lagoons with the kind of turquoise water that doesn&apos;t look real in photographs. The interior rises to volcanic peaks, tropical forest, and the Black River Gorges National Park.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              What makes Mauritius genuinely unusual is the cultural mix. The population is roughly 48% Indo-Mauritian, 27% Creole, 3% Sino-Mauritian, and 2% Franco-Mauritian — and each community brought its own cuisine, festivals, and temples. The result is an island where you can eat dholl puri for breakfast, dim sum for lunch, and Creole rougaille for dinner, all within a 20-minute drive. Port Louis Central Market is the best place to see this in action.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The famous &quot;underwater waterfall&quot; near Le Morne is actually a sand and silt cascade over an underwater shelf — from above it looks exactly like a waterfall plunging into the ocean abyss. You need a helicopter to see it ($150-250/person). It&apos;s the single most dramatic aerial view in the Indian Ocean.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="MRU" />
              <StatCard icon="🌡️" label="Best Season" value="May–Nov" />
              <StatCard icon="🏝️" label="Coastline" value="330 km" />
              <StatCard icon="💰" label="Budget From" value="$130/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Mauritius</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Sep",
                  i: "☀️",
                  t: "Winter — Best Season",
                  d: "22–26°C, low humidity, calm seas on the west coast. This is the dry season and the most comfortable time for exploring. June and July can bring strong south-east trade winds to the east coast — stay on the west (Flic en Flac, Le Morne) if wind bothers you. Water visibility peaks for snorkelling and diving.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Oct–Nov",
                  i: "🌅",
                  t: "Spring — Sweet Spot",
                  d: "25–28°C, warming up but still dry. Widely considered the best two months: warm enough for swimming, not yet humid, and before the December holiday crowds. Whale-watching season runs September to November — humpback whales migrate through Mauritian waters.",
                  b: "Best overall",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Dec–Mar",
                  i: "🌧️",
                  t: "Summer — Hot, Humid, Cyclone Risk",
                  d: "28–33°C with high humidity. This is cyclone season — a direct hit is rare but possible (Cyclone Freddy caused major disruption in 2023). Rain comes in short, heavy bursts. The upside: water is warmest, and resorts often have lower rates outside the December-January peak.",
                  b: "Insurance essential",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Apr",
                  i: "🌊",
                  t: "Autumn — Transitional",
                  d: "26–29°C, the island is settling after summer. Humidity drops noticeably by mid-April. Occasional late-season rain but cyclone risk is essentially over. A good shoulder month with fewer tourists than peak winter season. Prices drop.",
                  b: "Good value",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Mauritius</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Sir Seewoosagur Ramgoolam International Airport (MRU) is in the south-east of the island, roughly 45 minutes from Grand Baie in the north and 30 minutes from Flic en Flac on the west coast. Airport taxi to Grand Baie costs around MUR 1,500 (~$35). Pre-book through your hotel for the best rate.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Direct flights from major hubs",
                  d: "Air Mauritius flies direct from London (12 hrs), Paris (11 hrs), Mumbai (6.5 hrs), Delhi (7.5 hrs), Dubai (6 hrs), and Johannesburg (4 hrs). Emirates, British Airways, and Air France also serve MRU. From India, direct Air Mauritius flights from Mumbai and Delhi start around $350-450 return if booked early.",
                  b: "Most common",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🔄",
                  t: "Via Reunion Island or Madagascar",
                  d: "Air Austral connects Mauritius with Reunion Island (45 min flight) and Madagascar (2 hrs). If you&apos;re island-hopping the Indian Ocean, this is the route. Reunion is a French overseas department with spectacular volcanic hiking — it pairs perfectly with a Mauritius beach holiday.",
                  b: "For island hoppers",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚕",
                  t: "Getting around the island",
                  d: "Rent a car ($30-40/day) for maximum flexibility — the island is small enough to drive anywhere in under 90 minutes. Public buses exist but are slow and unreliable outside main routes. Taxis are metered but always agree on the fare before starting. Uber does not operate in Mauritius.",
                  b: "Car recommended",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "⛴️",
                  t: "Ferries and boat transfers",
                  d: "No international ferry service to Mauritius. Within the island, boats run to Ile aux Cerfs from Trou d&apos;Eau Douce (MUR 1,500 return for private speedboat, or MUR 400 for shared boat). Catamaran day cruises to offshore islands cost $60-100/person including lunch.",
                  b: "For day trips",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Mauritius Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary covers the north, east, south-west, and central areas of the island — designed so you spend minimal time in the car and maximum time in the water.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrive &mdash; Port Louis &amp; Grand Baie"
                cost="$80–150"
                items={[
                  "Arrive at MRU Airport in the south-east. Pre-booked taxi to Grand Baie (MUR 1,500, ~$35, 60 minutes) or take the Airport Express Bus (MUR 250, ~$6) if on a budget. Drive north through sugarcane fields with the Moka mountain range on your left.",
                  "Check in to your accommodation in Grand Baie — the most popular base for first-time visitors. Budget: guesthouse from $50/night. Mid-range: Veranda Grand Baie from $150/night. Luxury: LUX Grand Gaube from $400/night.",
                  "Afternoon: Walk La Cuvette public beach in Grand Baie — calm water, shaded by casuarina trees, and far less crowded than the main Grand Baie beach. Free entry. The water is warm year-round (23-28°C).",
                  "Late afternoon: Drive or taxi to Port Louis (25 minutes south). Walk the Caudan Waterfront — the colonial harbour area with cafes, shops, and views across to the Citadel. If you arrive before 5pm, the Port Louis Central Market is unmissable — spices, saris, vanilla, street food.",
                  "Dinner: Chez Tino in Grand Baie — a local institution for Creole seafood. Try the octopus vindaye (curry with mustard and turmeric) or the grilled camarons (freshwater prawns). MUR 800-1,200 (~$18-28) for a full meal with drinks.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Ile aux Cerfs &mdash; Best Lagoon Day"
                cost="$60–120"
                items={[
                  "Morning: Drive to Trou d&apos;Eau Douce on the east coast (40 minutes from Grand Baie). Take a boat to Ile aux Cerfs — shared boat MUR 400 (~$9) or private speedboat MUR 1,500 (~$35) return. The boat ride itself is beautiful, crossing the turquoise lagoon.",
                  "Ile aux Cerfs has the most stunning lagoon in Mauritius — shallow turquoise water over white sand, surrounded by reef. The island is large enough to find quiet spots even when it&apos;s busy. Head to the far side away from the main landing area for the best snorkelling.",
                  "Rent snorkel gear on the island (MUR 350, ~$8) and explore the reef from the shore. The coral is healthy and you&apos;ll see parrotfish, butterflyfish, and if you&apos;re lucky, small reef sharks in the channels between sandbars.",
                  "Lunch on the island: BBQ grilled fish with rice and rougaille (Creole tomato sauce) from one of the beachside restaurants — MUR 600-900 (~$14-21). Or bring a picnic from Grand Baie for a budget option.",
                  "Afternoon: Take the free shuttle boat between the island&apos;s beaches. The eastern beach has the best swimming; the northern tip has the most dramatic view across the lagoon to the mountains. Return to Trou d&apos;Eau Douce by 4pm.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Chamarel &mdash; Seven Coloured Earths &amp; Black River Gorges"
                cost="$50–100"
                items={[
                  "Full day in south-west Mauritius — the most scenic part of the island. Drive or hire a car ($30-40/day) from Grand Baie. The drive south through Curepipe and the central plateau takes about 75 minutes.",
                  "First stop: Chamarel Seven Coloured Earths (entry MUR 200, ~$5). A geological anomaly — volcanic earth in seven distinct mineral pigments (red, brown, violet, green, blue, purple, yellow) that never mix despite rainfall. Best photographed in the morning when shadows define the colour bands.",
                  "Chamarel Waterfall: a short walk from the Coloured Earths entrance. The highest single-drop waterfall in Mauritius (100 metres), surrounded by dense tropical forest and black lava cliff faces. Beautiful after rain.",
                  "Rhumerie de Chamarel: the island&apos;s premier rum distillery, 5 minutes from the Coloured Earths. Guided tour and tasting of aged Mauritian agricultural rum (MUR 650, ~$15). The XO rum is exceptional and significantly cheaper to buy here than anywhere else on the island.",
                  "Afternoon: Black River Gorges National Park — free entry. Drive to the main viewpoints (Gorges Viewpoint, Black River Peak viewpoint) or hike one of the trails through endemic tropical forest. Spot the Mauritius kestrel (the world&apos;s rarest bird of prey, back from near-extinction), pink pigeon, and echo parakeet.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Le Morne &amp; Blue Bay Marine Park"
                cost="$70–250"
                items={[
                  "Morning: Le Morne Brabant — the UNESCO World Heritage mountain on the south-west peninsula. The mountain was a refuge for runaway slaves in the 18th and 19th centuries, and its history is deeply moving. Walk the coastal trail at its base (free, 1 hour) for dramatic views of the lagoon.",
                  "Optional: Helicopter flight over Le Morne to see the underwater waterfall illusion from above ($150-250/person, 15-30 minutes). The &apos;waterfall&apos; is a sand and silt cascade over an underwater shelf that from the air looks like water pouring into the abyss. Worth every dollar.",
                  "Drive to Blue Bay Marine Park on the south-east coast (45 minutes from Le Morne). The best snorkelling in Mauritius — a UNESCO-protected reef with 50+ coral species, sea turtles, and spectacular visibility exceeding 20 metres. Glass-bottom boat tours run from the beach (MUR 400, ~$9).",
                  "Lunch at Chez Tino Mahebourg (a different location from the Grand Baie branch) — waterfront Creole restaurant with fresh seafood. Try the fish vindaye or prawn curry with achards (pickled vegetables). MUR 600-900 (~$14-21).",
                  "Late afternoon: Drive along the south coast road back to your base. Stop at Gris Gris — the only point on the Mauritian coast without a protective reef, where the Indian Ocean crashes directly onto the cliffs. Dramatic and atmospheric, especially at sunset.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Pamplemousses, Central Market &amp; Depart"
                cost="$40–80"
                items={[
                  "Morning: Sir Seewoosagur Ramgoolam Botanical Garden in Pamplemousses (15 minutes south of Grand Baie). Entry MUR 200 (~$5). One of the oldest botanical gardens in the Southern Hemisphere — the giant Victoria amazonica water lilies (leaves up to 3 metres across) are the highlight. Also: talipot palms, baobab trees, giant tortoises, and spice gardens.",
                  "Mid-morning: Port Louis Central Market — the beating heart of Mauritius. Spices, vanilla (buy here, it&apos;s the best quality and price on the island), saris, street food, tropical fruit. Try a dholl puri from one of the stalls — the national street food, a thin flatbread with yellow split pea filling, served with curry and chutney, for MUR 15-25 (~$0.50).",
                  "Lunch at La Clef des Champs in Chamouny — elevated Creole cuisine in a garden setting. Their smoked marlin salad and palm heart dishes are iconic. MUR 800-1,400 (~$18-32) per person.",
                  "Browse the Caudan Waterfront for last-minute souvenir shopping — vanilla, Mauritian rum, model dodo birds, local spice blends.",
                  "Afternoon transfer to MRU airport for departure. Allow 60-90 minutes from Grand Baie, 30-45 minutes from Flic en Flac.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Mauritius" onPlanTrip={() => setModalOpen(true)} />

          {/* ── BEACH & LAGOON GUIDE ── */}
          <section id="beaches" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏖️ Beach &amp; Lagoon Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Mauritius is almost entirely ringed by coral reef, creating calm lagoons along most of the coast. The best beaches depend on the season: the west coast is calmer May to October, while the east coast is sheltered year-round.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Ile aux Cerfs",
                  e: "Boat from Trou d&apos;Eau Douce (MUR 400-1,500)",
                  d: "The most famous lagoon in Mauritius — shallow turquoise water over white sand, excellent reef snorkelling, and enough space to find quiet spots. Go early on weekdays to avoid tour groups. The far northern tip of the island has the best swimming and the least crowds.",
                  t: "Must visit · Half day",
                },
                {
                  n: "Le Morne Beach",
                  e: "Free · South-west coast",
                  d: "A long stretch of white sand beneath the dramatic Le Morne Brabant mountain (UNESCO). The lagoon here is wide and calm, excellent for kitesurfing (Mauritius&apos;s best spot) and SUP. The mountain turns gold at sunset — one of the most atmospheric settings in the Indian Ocean.",
                  t: "Best views · Sunset",
                },
                {
                  n: "Flic en Flac",
                  e: "Free · West coast",
                  d: "The longest public beach on the west coast — fine white sand, calm water, and spectacular sunsets over Tamarin Bay. Popular with locals and tourists alike. The reef here is good for snorkelling directly from shore. Best May to October when the west coast is calmest.",
                  t: "Best sunset beach",
                },
                {
                  n: "Blue Bay Marine Park",
                  e: "Free · South-east coast",
                  d: "The best snorkelling in Mauritius — a UNESCO-protected reef with 50+ coral species, sea turtles, and visibility exceeding 20 metres. Arrive early on weekdays for the best experience. Glass-bottom boat tours (MUR 400) are an alternative if you don&apos;t want to swim.",
                  t: "Best snorkelling · Half day",
                },
                {
                  n: "Trou aux Biches",
                  e: "Free · North-west coast",
                  d: "A sheltered crescent beach with some of the calmest water on the island. The snorkelling directly from shore is excellent — coral starts just 30 metres from the beach. Less developed than Grand Baie and quieter. Several excellent restaurants along the beachfront.",
                  t: "Best for families",
                },
                {
                  n: "Belle Mare",
                  e: "Free · East coast",
                  d: "A long sweep of white sand on the east coast with consistently calm lagoon water thanks to the outer reef. Several luxury resorts (One&Only Le Saint Geran, LUX Belle Mare) line this stretch. The public beach access is good and the sand quality is arguably the best on the island.",
                  t: "Most pristine · East coast",
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
            title="Mauritius &mdash; Lagoons, Mountains &amp; Coloured Earth"
            subtitle="The Indian Ocean&apos;s most diverse island."
            spots={[
              {
                name: "Ile aux Cerfs Lagoon",
                query: "ile aux cerfs mauritius turquoise lagoon white sand beach aerial",
                desc: "The stunning turquoise lagoon of Ile aux Cerfs — shallow water over white sand with reef snorkelling.",
              },
              {
                name: "Chamarel Seven Coloured Earths",
                query: "chamarel seven coloured earths mauritius volcanic geological",
                desc: "Seven distinct mineral pigments in the volcanic earth at Chamarel — a geological anomaly that never mixes despite rainfall.",
              },
              {
                name: "Le Morne Brabant",
                query: "le morne brabant mauritius mountain lagoon unesco beach sunset",
                desc: "The UNESCO-listed Le Morne Brabant mountain rising above the turquoise lagoon on the south-west peninsula.",
              },
              {
                name: "Underwater Waterfall Aerial",
                query: "mauritius underwater waterfall aerial le morne illusion ocean",
                desc: "The famous underwater waterfall illusion near Le Morne — a sand cascade that looks like a waterfall from above.",
              },
              {
                name: "Black River Gorges",
                query: "black river gorges national park mauritius tropical forest viewpoint",
                desc: "Black River Gorges National Park — tropical forest, endemic birds, and panoramic viewpoints across south-west Mauritius.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Mauritius ranges from surprisingly affordable (budget guesthouses and street food) to eye-wateringly luxurious (One&amp;Only Le Saint Geran, Shangri-La Le Touessrok). The biggest variable is accommodation — activities and food scale less dramatically.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation/night", "$50–70", "$150–200", "$400–700+"],
                    ["🍽 Food/day", "$20–30", "$50–70", "$80–150"],
                    ["🚗 Transport/day", "$15–25", "$30–50", "$80–150"],
                    ["🏖️ Activities/day", "$20–40", "$60–100", "$150–300"],
                    ["📊 Total/day (couple)", "$130–185", "$300–430", "$710–1,300"],
                    ["📊 Total 5 days (couple)", "$650–925", "$1,500–2,150", "$3,550–6,500"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($130–185/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in Grand Baie guesthouses ($50-70/night), eat dholl puri from stalls and Creole meals at local restaurants, take shared boats and public buses. Very comfortable — Mauritius has good budget infrastructure.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($300–430/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">3-4 star beachfront hotels (Veranda Grand Baie, Coin de Mire Attitude), private boat transfers, guided tours, and proper restaurant meals. The sweet spot for most couples visiting Mauritius.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($710–1,300/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">One&amp;Only Le Saint Geran, Shangri-La Le Touessrok, Shanti Maurice — private beach villas, helicopter tours, private catamaran charters, and fine dining. Mauritius luxury rivals the Maldives at roughly 60% of the cost.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Mauritius</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The north coast (Grand Baie) is the most social and touristy. The east coast (Belle Mare, Trou d&apos;Eau Douce) is calm and reef-protected year-round. The west coast (Flic en Flac) has the best sunsets. The south-west (Le Morne) is the most dramatic. Choose your coast based on what matters most to you.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "One&Only Le Saint Geran",
                  type: "Ultra-luxury resort · Belle Mare, east coast",
                  price: "From $700/night",
                  badge: "Most iconic",
                  desc: "The original Mauritius luxury resort — a private peninsula with its own beach, Michelin-level dining, and flawless service. The lagoon here is one of the most beautiful on the island. The resort that put Mauritius on the luxury travel map.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Shanti Maurice Resort &amp; Spa",
                  type: "Luxury wellness · South coast",
                  price: "From $450/night",
                  badge: "Best wellness",
                  desc: "A world-class wellness resort on the quieter south coast with one of the largest spas in the Indian Ocean. The Nira Spa offers Ayurvedic treatments, and the resort&apos;s private beach is secluded and beautiful. Excellent for couples seeking relaxation over activity.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "LUX Grand Gaube",
                  type: "5-star resort · Grand Gaube, north-east",
                  price: "From $350/night",
                  badge: "Best design",
                  desc: "A beautifully designed resort by Kelly Hoppen with a contemporary aesthetic unusual for Mauritius. Two beaches, excellent restaurants, and a more design-conscious vibe than the traditional resort brands. The north-east location means calm water year-round.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Veranda Grand Baie",
                  type: "Mid-range · Grand Baie, north coast",
                  price: "From $150/night",
                  badge: "Best mid-range",
                  desc: "Walking distance to Grand Baie&apos;s restaurants and nightlife. Pool, beach access, and the convenience of the north coast location. The best value option for travellers who want a proper hotel without resort prices.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Mauritius</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Mauritius has one of the most extraordinary food cultures in the world — Indian, Chinese, Hakka, French, Creole, and more, all evolved into something distinctly Mauritian. The street food alone is worth the flight. Do not eat exclusively at your resort.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "La Clef des Champs",
                  t: "Elevated Creole · Chamouny, south",
                  d: "Widely considered the best Creole restaurant in Mauritius. Set in a garden in the south, it serves refined versions of traditional dishes — smoked marlin salad, palm heart gratin, venison in Creole sauce. Reservations essential. MUR 1,200-2,000 (~$28-46) per person with wine.",
                  b: "Best restaurant",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Chez Tino",
                  t: "Creole seafood · Grand Baie &amp; Mahebourg",
                  d: "Two locations — both excellent. Known for octopus vindaye (mustard and turmeric curry), grilled camarons (freshwater prawns), and fish rougaille. Casual atmosphere, generous portions, and genuinely local. MUR 600-1,000 (~$14-23) per person.",
                  b: "Most authentic",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Port Louis Central Market stalls",
                  t: "Street food · Port Louis",
                  d: "The best value food on the island. Dholl puri (MUR 15-25), gato piment (chilli cakes, MUR 10), mine frit (fried noodles, MUR 40-60), and fresh tropical fruit juice. The market is busiest at lunchtime — follow the queue to find the best stalls.",
                  b: "Best value",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Chateau de Bel Ombre",
                  t: "Fine dining · South coast",
                  d: "A restored colonial plantation house serving French-Mauritian fine dining in a spectacular setting. Tasting menus start around MUR 3,500 (~$80) per person. The wine list is the best on the island. Reserve at least a week ahead during peak season.",
                  b: "Fine dining",
                  c: "bg-purple-50 border-purple-200",
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
            destination="Mauritius"
            hotels={[
              {
                name: "One&Only Le Saint Geran",
                type: "Ultra-luxury resort · Belle Mare peninsula",
                price: "From $700/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/mu/one-only-le-saint-geran.html?aid=2820480",
              },
              {
                name: "Shanti Maurice Resort &amp; Spa",
                type: "Luxury wellness · South coast",
                price: "From $450/night",
                rating: "5",
                badge: "Best spa",
                url: "https://www.booking.com/hotel/mu/shanti-maurice.html?aid=2820480",
              },
              {
                name: "LUX Grand Gaube",
                type: "5-star design hotel · North-east coast",
                price: "From $350/night",
                rating: "5",
                badge: "Best design",
                url: "https://www.booking.com/hotel/mu/lux-grand-gaube.html?aid=2820480",
              },
              {
                name: "Veranda Grand Baie",
                type: "Mid-range beachfront · Grand Baie",
                price: "From $150/night",
                rating: "4",
                badge: "Best value",
                url: "https://www.booking.com/hotel/mu/veranda-grand-baie.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Ile aux Cerfs Catamaran Cruise",
                duration: "Full day",
                price: "From $65/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=mauritius+ile+aux+cerfs+catamaran&partner_id=PSZA5UI",
              },
              {
                name: "Underwater Waterfall Helicopter Tour",
                duration: "30 mins",
                price: "From $150/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=mauritius+helicopter+underwater+waterfall&partner_id=PSZA5UI",
              },
              {
                name: "Chamarel &amp; Black River Gorges Tour",
                duration: "8 hrs",
                price: "From $55/person",
                url: "https://www.getyourguide.com/s/?q=mauritius+chamarel+seven+coloured+earths&partner_id=PSZA5UI",
              },
              {
                name: "Blue Bay Snorkelling Trip",
                duration: "3 hrs",
                price: "From $30/person",
                url: "https://www.getyourguide.com/s/?q=mauritius+blue+bay+snorkelling&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Mauritius</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🛵",
                  title: "Rent a car or scooter for the south and west",
                  desc: "Public buses in Mauritius are slow and have limited coverage outside major towns. To reach Chamarel, Black River Gorges, Blue Bay, and Flic en Flac comfortably, rent a car ($30-40/day) or scooter ($15/day). The island is small — nothing is more than 90 minutes away.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🍛",
                  title: "Eat dholl puri for breakfast — it costs MUR 15",
                  desc: "Dholl puri is Mauritius&apos;s national street food: a thin, flaky flatbread made with split pea flour, served with curry and chutney. Every Mauritian eats it. Find a stall (especially in the central plateau towns or Port Louis) and pay MUR 15-25 (~$0.50) for a breakfast that beats any hotel buffet.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🤿",
                  title: "Go to Blue Bay Marine Park on a weekday morning",
                  desc: "Blue Bay Marine Park is the best snorkelling in Mauritius but gets very busy on weekends. Arrive at 8am on a Tuesday or Wednesday and you&apos;ll have the coral gardens nearly to yourself. The visibility and coral diversity rivals the Maldives at a fraction of the cost.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🏔️",
                  title: "Visit Le Morne Brabant at dusk for the light",
                  desc: "Le Morne Brabant is a UNESCO-listed mountain and one of the most atmospheric places in Mauritius — its history as a refuge for escaped slaves is deeply moving. The mountain glows orange at dusk against the turquoise lagoon below. Stop here on your drive back from Chamarel.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🚁",
                  title: "Book the helicopter flight — it&apos;s worth the cost",
                  desc: "The underwater waterfall near Le Morne is only visible from the air. A helicopter flight costs $150-250/person for 15-30 minutes. It&apos;s the most dramatic aerial view in the Indian Ocean. Do not book a boat trip expecting to see it — from sea level it&apos;s invisible. Several operators at the airport and in Grand Baie.",
                  color: "bg-indigo-50 border-indigo-200",
                },
                {
                  icon: "🌊",
                  title: "Choose your coast based on the season",
                  desc: "The east coast (Grand Gaube, Trou d&apos;Eau Douce) is calm and protected year-round. The west coast (Flic en Flac) is better May to October. The south-west (Le Morne) gets windiest June-August. Grand Baie in the north is the all-rounder. The island is only 65km long but coastal conditions vary dramatically.",
                  color: "bg-green-50 border-green-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Mauritius" />

          {/* Combine With */}
          <CombineWith currentSlug="mauritius-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do Indian passport holders need a visa for Mauritius?",
                  a: "No. Indian passport holders receive a free visitor permit on arrival for 60 days — one of the most generous visa-free arrangements available to Indian passport holders anywhere in the world. Bring a return ticket and proof of accommodation. Mauritius is one of the few Indian Ocean islands offering 60 days to Indian travellers.",
                },
                {
                  q: "What is the best time to visit Mauritius?",
                  a: "May to November is the dry season — warm (22-28\u00B0C), low humidity, calm seas. December to April is hot and humid with the occasional cyclone. October and November are widely considered the sweet spot: warm enough for swimming, not yet humid, and before the holiday crowds. June and July can bring strong trade winds to the east coast.",
                },
                {
                  q: "How do I see the underwater waterfall in Mauritius?",
                  a: "The underwater waterfall is a sand and silt optical illusion visible only from the air near Le Morne on the south-west coast. Book a helicopter flight from any operator in Mauritius ($150-250/person, 15-30 minutes). Some operators combine it with a tour of Black River Gorges and Chamarel from the air. Do not book a boat trip — you cannot see it from sea level.",
                },
                {
                  q: "Is Mauritius or Maldives better for a beach holiday?",
                  a: "Different strengths. Maldives has more dramatic over-water bungalow experiences and arguably more pristine reefs for diving. Mauritius has far more to do on land — national parks, multicultural cities, rum distilleries, waterfalls, and incredible food. Mauritius is also significantly more affordable. For first-timers wanting variety, Mauritius often wins.",
                },
                {
                  q: "Is Mauritius safe for tourists?",
                  a: "Mauritius is one of the safest countries in Africa and the Indian Ocean for tourists. Crime against visitors is rare. Standard precautions apply: don&apos;t leave valuables on the beach unattended, use hotel safes, and be cautious in Port Louis at night. The island has a well-functioning police force and a stable democratic government.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Mauritius trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/mauritius-5-days/best-time", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/mauritius-5-days/couples-guide", label: "Couples guide", icon: "💑" },
                { href: "/blog/mauritius-5-days/packing-list", label: "Packing list", icon: "🧳" },
                { href: "/blog/mauritius-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="mauritius-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Island &amp; Beach Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Seychelles in 5 Days &mdash; Granite &amp; Beaches", href: "/blog/seychelles-5-days" },
                { label: "Maldives 5 Days &mdash; Overwater Villas", href: "/blog/maldives-5-days" },
                { label: "Zanzibar 5 Days &mdash; Spice Island", href: "/blog/zanzibar-5-days" },
                { label: "Sri Lanka 7 Days &mdash; Temples &amp; Tea", href: "/blog/sri-lanka-7-days" },
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
