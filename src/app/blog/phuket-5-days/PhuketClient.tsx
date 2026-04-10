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
const PHUKET_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Phuket Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "5-Day Itinerary" },
  { id: "beaches",     emoji: "🏖️", label: "Beach & Landmark Guide" },
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
          href: `mailto:?subject=Phuket 5-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Phuket in 5 Days — islands, beaches and the complete itinerary&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/phuket-5-days"
        imageUrl="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1200&q=80"
        description="Phuket in 5 Days: Phi Phi Islands, Phang Nga Bay, Old Phuket Town, Big Buddha and hidden beaches — complete travel guide with budget breakdown."
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
export default function PhuketClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={PHUKET_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Phuket" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="phuket phi phi islands turquoise water limestone cliffs thailand"
            fallback="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1600&q=80"
            alt="Phi Phi Islands limestone cliffs rising from turquoise Andaman Sea waters near Phuket"
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
              <span className="text-white/70">Phuket 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Islands &amp; Beaches
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">18 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Phuket in 5 Days:
                <em className="italic text-amber-300"> Islands, Temples &amp; the Real Andaman Coast</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Phi Phi&apos;s limestone cliffs at dawn, Phang Nga Bay by kayak, Old Phuket Town&apos;s Sino-Portuguese streets, Big Buddha at sunset and seafood markets where locals actually eat. The complete guide with real timings, costs in THB &amp; USD, and the mistakes that ruin most Phuket trips.
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
              <span>🇹🇭 Thailand</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From ฿1,200/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Phi Phi from the speedboat as you approach &mdash; the limestone cliffs rising from turquoise water &mdash; is one of those views that genuinely makes you gasp. Phuket is worth the trip for that moment alone, but there&apos;s so much more if you know where to look. Old Town&apos;s shophouses, Phang Nga&apos;s hidden lagoons, Rawai&apos;s seafood market at dusk. This guide tells you exactly when to be where.
            </p>
          </blockquote>

          {/* ── WHAT PHUKET ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Phuket Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Phuket is Thailand&apos;s largest island, roughly 50km long and 20km wide, connected to the mainland by two bridges. The west coast faces the Andaman Sea with long sandy beaches; the east coast is quieter with mangroves and local fishing villages. The island has been a trading hub for centuries &mdash; tin mining, rubber, and Sino-Portuguese merchant culture shaped its identity long before tourism arrived.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The tourism reality: Patong Beach on the west coast is heavily developed, loud, and geared toward nightlife. It&apos;s worth one evening for the spectacle but not five nights. The real Phuket &mdash; Sino-Portuguese shophouses in Old Town, quiet southern beaches around Rawai and Nai Harn, hilltop temples with panoramic views &mdash; still exists if you know where to look. The trick is the same as everywhere: get away from the main tourist strip.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Five days is the sweet spot. You can cover the two signature island day trips (Phi Phi and Phang Nga Bay), explore Old Town, visit Big Buddha and Wat Chalong, and still have time for beaches and a cooking class. Seven days lets you add the Similan Islands or a Krabi side trip.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="HKT (Phuket)" />
              <StatCard icon="🌡️" label="Best Season" value="Nov–Apr" />
              <StatCard icon="🏖️" label="Beaches" value="30+" />
              <StatCard icon="💰" label="Budget From" value="฿1,200/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Phuket</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Nov–Jan",
                  i: "☀️",
                  t: "Peak Dry Season — Best Weather",
                  d: "26–31°C with virtually no rain. The Andaman Sea is calm, visibility for snorkelling is at its best, and all island tours operate daily. December–January is peak tourist season with highest accommodation prices (30–60% above average). Book Phi Phi tours 2–3 days ahead during Christmas/New Year. The best weather of the year but the biggest crowds.",
                  b: "Best weather, highest prices",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Feb–Apr",
                  i: "🌅",
                  t: "Late Dry Season — Best Overall",
                  d: "27–33°C with minimal rain and slightly fewer tourists than peak season. February and March offer excellent value with dry weather. April sees rising humidity and occasional showers but prices drop. Songkran (Thai New Year, 13–15 April) is a fantastic time to visit for the water festival celebrations, though book early.",
                  b: "Recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "May–Jul",
                  i: "🌧️",
                  t: "Early Monsoon — Good Value",
                  d: "28–33°C with afternoon showers most days, usually lasting 1–2 hours. Mornings are often clear and sunny. Hotel prices drop 30–50%. Phi Phi tours still operate most days but may cancel in heavy weather. Seas are rougher. Excellent value if you can handle the occasional rainy afternoon. The island is noticeably less crowded.",
                  b: "Best value",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Aug–Oct",
                  i: "🌧️",
                  t: "Peak Monsoon — Cheapest",
                  d: "27–32°C with the heaviest rainfall, especially September–October. Some boat tours (Similan Islands, Phi Phi) may be cancelled for days at a time due to rough seas. Prices are at their lowest. The upside: waterfalls are at full power, the landscape is lush green, and you might have entire beaches to yourself.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Phuket</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Phuket International Airport (HKT) is in the north of the island. Most beach areas are 30–60 minutes south by car. <strong className="font-medium">Indian passport holders need an eVisa or Visa on Arrival (฿2,000 for 15-day VOA).</strong> Most Western passports get 30–60 days visa-free.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Flights from India",
                  d: "IndiGo flies direct from Delhi and Mumbai to Phuket (4–5 hours). AirAsia connects via Kuala Lumpur or Bangkok with cheap layover fares. Return flights: ₹12,000–₹22,000 booked 2–3 months ahead. A Bangkok layover adds flexibility — you can fly Bangkok to Phuket for ฿1,200–2,500 on AirAsia, Nok Air, or Thai Lion Air (1.5 hours).",
                  b: "Best from India",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "From Bangkok & SE Asia",
                  d: "Bangkok to Phuket is the most common domestic route — flights hourly on AirAsia, Nok Air, Thai Lion Air, and Thai Smile. ฿1,200–3,500 one way (1.5 hours). Singapore to Phuket: 2 hours, $60–$140. Kuala Lumpur to Phuket: 1.5 hours, $40–$100. Budget airlines make Phuket one of the cheapest Southeast Asian islands to reach.",
                  b: "Cheapest flights",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Airport transfers",
                  d: "Grab from HKT airport to Patong: ฿500–700 (45 min). To Kata/Karon: ฿600–800 (50 min). To Rawai: ฿700–900 (60 min). The airport taxi counter charges ฿650–1,000 for the same routes. Airport minibus: ฿200–300/person to Patong/Kata. Do not negotiate with the touts inside arrivals — walk to the car park and use the Grab app.",
                  b: "Use Grab",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚐",
                  t: "Getting around the island",
                  d: "Phuket has almost no useful public transport. Songthaews (shared pickup trucks) run limited routes on the west coast for ฿30–60. Grab and Bolt are your main transport — download both before landing. Scooter rental: ฿200–300/day but requires an International Driving Permit; police checkpoints are frequent and the fine is ฿500.",
                  b: "Grab + Bolt",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Phuket Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary covers mid-range spending (฿3,000–5,000/day, ~$85–140). Each day card is expandable. The route bases you in Kata or Rawai for the full trip &mdash; both are well-positioned for every activity. Budget and luxury alternatives are noted in the cost estimates.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrive, Old Phuket Town & Promthep Cape Sunset"
                cost="฿1,500–2,800 (~$42–79) excluding accommodation"
                items={[
                  "Airport → Kata/Rawai: pre-booked Grab (฿600–800, ~$17–23, 50 min). Airport minibus ฿200–300 to Patong/Kata. Skip the taxi touts inside arrivals — they charge ฿1,000+ for the same ride.",
                  "Check in to your hotel. Budget: guesthouse in Kata (฿400–1,000/night, ~$11–28). Mid-range: 3–4 star resort in Kata Noi or Rawai (฿1,500–3,500/night, ~$42–99). Luxury: Trisara or Banyan Tree (฿8,000–30,000/night, ~$225–845).",
                  "2pm: Grab to Old Phuket Town (฿200–350 from Kata). Walk Soi Romanee — the most photogenic street with pastel Sino-Portuguese shophouses, street art, and excellent cafes. Continue to Thalang Road for more architecture and local shops.",
                  "Coffee at One Chun Cafe (inside a 100-year-old shophouse) — ฿80–120. Try khanom chin (Thai rice noodles with curry) for a late lunch — ฿50–80 at any of the Old Town shophouses.",
                  "5:30pm: Drive to Promthep Cape — Phuket's most famous sunset viewpoint. Free entry. Arrive 30 min before sunset. The lighthouse viewpoint is less crowded than the main platform.",
                  "7:30pm: Dinner at Raya Restaurant (Old Town) — famous Phuketian cuisine in a colonial mansion. Crab curry ฿350, moo hong (Phuket braised pork belly) ฿250, stir-fried sataw beans ฿180.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Phi Phi Islands — Maya Bay, Pileh Lagoon & Snorkelling"
                cost="฿2,000–3,500 (~$56–99) all-inclusive tour"
                items={[
                  "6:30am pickup — book a speedboat tour the night before. Mid-range: ฿2,500–3,500/person for a premium small-group tour (max 20 people, better boat, quality lunch, snorkel gear, national park fees included). Budget: ฿1,500–2,000 for shared big-group tours.",
                  "First stop: Pileh Lagoon before the crowds — an enclosed turquoise lagoon surrounded by limestone cliffs. The most vivid turquoise water you will ever swim in. Arrive early and you might have it to yourself.",
                  "Maya Bay — the filming location of The Beach. Limited daily entry to protect the ecosystem (฿400 national park fee usually included in tour price). Worth seeing early morning before the crowds build.",
                  "Snorkelling stop at Shark Point or Bamboo Island — clearer water and better coral than the main Phi Phi stops. Gear provided with tour.",
                  "Lunch on Phi Phi Don island — included in tour. Walk up to the viewpoint trail (30 min uphill) for the iconic two-bay panorama if time allows.",
                  "Back by 4:30pm. Sunburn recovery evening. Aloe vera gel from 7-Eleven: ฿50. Dinner at your hotel or walk to Kata Beach for grilled seafood on the strip — ฿150–300/dish.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Big Buddha, Wat Chalong & Beach Hopping"
                cost="฿800–1,600 (~$23–45) excluding accommodation"
                items={[
                  "9am: Grab to Wat Chalong (฿150–250 from Kata) — Phuket's most important Buddhist temple. Free entry. Beautiful architecture with a three-storey chedi, peaceful grounds, and temple murals. 30 min visit.",
                  "10:30am: Drive to Big Buddha (10 min from Wat Chalong) — the 45-metre white marble Burmese jade Buddha visible from across southern Phuket. Free entry (donations welcome). Panoramic views of the island. Dress code: cover shoulders and knees; free sarongs available at the entrance.",
                  "12pm: Lunch at a local restaurant near Big Buddha — khao pad (fried rice) ฿60–80, som tam (green papaya salad) ฿50–70, pad thai ฿70–100.",
                  "1:30pm: Kata Noi Beach — smaller and quieter than Kata, with excellent swimming. Rent a sun lounger: ฿100–200.",
                  "3:30pm: Drive to Karon Viewpoint (Khao Sam Haad) — the iconic three-bay panorama showing Kata Noi, Kata, and Karon beaches. Free. Best light in the afternoon.",
                  "5pm: Nai Harn Beach — locals' favourite beach in the south. Less developed than the west coast tourist beaches. Calm water, good for swimming.",
                  "7pm: Dinner at The Boathouse Wine & Grill, Kata Beach — upscale beachfront dining with Thai and international dishes. Mains ฿350–600. Or Kata night market for budget options — grilled prawns ฿200, whole fish ฿150, mango sticky rice ฿60.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Phang Nga Bay — James Bond Island, Sea Caves & Kayaking"
                cost="฿2,000–4,000 (~$56–113) all-inclusive tour"
                items={[
                  "7am pickup — book a Phang Nga Bay tour. Mid-range: ฿2,500–4,000/person including speedboat, sea kayaking, James Bond Island, Koh Panyee floating village, and lunch. Budget: ฿1,200–1,800 for shared longtail boat tours.",
                  "Sea kayaking through limestone cave systems and hongs (hidden lagoons inside collapsed karst islands) — the highlight of the day for most people. Utterly surreal landscape. Your guide paddles you through low cave entrances into enclosed lagoons.",
                  "James Bond Island (Ko Tapu) — the iconic tilted limestone rock from The Man with the Golden Gun. The island itself is tiny and touristy, but the surrounding bay scenery is jaw-dropping.",
                  "Koh Panyee — a floating Muslim fishing village built entirely on stilts. Lunch here (included in tour). Walk around the village for 30 min to see the floating football pitch and the mosque.",
                  "Some premium tours include sunset kayaking on the return — worth the extra ฿500 if available.",
                  "Evening: Rest at hotel or Rawai Seafood Market — buy fresh catch at the beachfront market (฿200–400/kg for prawns, ฿300–500/kg for crab), then walk to the cooking restaurants behind it. They cook your seafood for ฿100/dish. Best seafood deal on the island.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Thai Cooking Class, Freedom Beach & Farewell"
                cost="฿1,800–3,200 (~$51–90) excluding accommodation"
                items={[
                  "9am: Thai cooking class — ฿1,500–2,500/person for a half-day class. Phuket Thai Cooking Academy or Blue Elephant (in the 1903 governor's mansion). Market tour + 4–5 dishes including green curry, pad thai, tom yum, and mango sticky rice. You eat everything you cook.",
                  "1pm: Freedom Beach — crystal clear water in a tiny hidden cove. Longtail boat from Patong pier: ฿200–300 per person (10 min). Or walk down the steep jungle path from the car park (10 min, free). One of Phuket's best-kept open secrets with far fewer tourists than the main beaches.",
                  "3pm: Last beach time at Kata or Karon. Walk Karon Beach — wider sand, fewer tourists than Kata. Rent a final sun lounger and soak in the Andaman light.",
                  "Alternatively: massage at Let's Relax Spa — ฿500–800 for a Thai massage. Or Oasis Spa for a premium treatment — ฿1,500–2,500.",
                  "Final dinner: Suay Restaurant in Old Town — modern Thai fine-casual in a beautifully restored shophouse. Mains ฿300–500. Or Ka Jok See (Old Town) — dinner party atmosphere with Thai food, live music, and dancing; reservations required, ฿1,500–2,500/person.",
                  "Airport: 40–50 min from Kata. Allow extra time during high season — the single road north gets congested between 5–7pm. Pre-book a Grab to avoid last-minute surcharges.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Phuket" onPlanTrip={() => setModalOpen(true)} />

          {/* ── BEACH & LANDMARK GUIDE ── */}
          <section id="beaches" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏖️ Beach &amp; Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important beaches, temples and landmarks in order of priority. Entry fees are as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Phi Phi Islands (Koh Phi Phi Don & Leh)",
                  e: "฿400 national park fee (~$11)",
                  d: "Limestone cliffs rising from turquoise Andaman water. Maya Bay (The Beach filming location) now has daily visitor limits to protect the recovered ecosystem. Pileh Lagoon is the real highlight — an enclosed turquoise pool between towering cliffs. Best reached via speedboat day trip from Phuket (1.5 hours). Go as early as possible.",
                  t: "Must see · Full day · Day trip",
                },
                {
                  n: "Phang Nga Bay & James Bond Island",
                  e: "฿300 national park fee (~$8.50)",
                  d: "Towering limestone karsts jutting from emerald water. Sea kayaking through hidden hongs (collapsed cave lagoons) is the highlight. James Bond Island (Ko Tapu) is the iconic tilted rock. Koh Panyee floating fishing village is worth the lunch stop. Book a tour that includes kayaking — it transforms the experience.",
                  t: "Must see · Full day · Day trip",
                },
                {
                  n: "Big Buddha (Phra Phutta Ming Mongkol Akenakkiri)",
                  e: "Free (donations welcome)",
                  d: "45-metre white marble and Burmese jade Buddha statue sitting atop Nakkerd Hill, visible from across southern Phuket. Panoramic 360-degree views of the island. Cover shoulders and knees — free sarongs at the entrance. Best visited in the morning for clear views or late afternoon for golden light.",
                  t: "Must see · 1 hr · Free",
                },
                {
                  n: "Wat Chalong",
                  e: "Free",
                  d: "Phuket's most revered Buddhist temple, dating to the early 19th century. The three-storey Grand Pagoda houses a splinter of the Buddha's bone. Beautiful murals depicting the life of Buddha. The grounds are peaceful and well-maintained. A 20–30 min visit pairs perfectly with Big Buddha (10 min drive).",
                  t: "Must see · 30 min · Free",
                },
                {
                  n: "Old Phuket Town",
                  e: "Free",
                  d: "Sino-Portuguese shophouses from the tin mining era, colourful street art, excellent cafes and some of the best local food on the island. Walk Soi Romanee (most photogenic), Thalang Road, and Phang Nga Road. Sunday Walking Street Market (4–9pm) is the best market in Phuket. Budget at least half a day here.",
                  t: "Must see · Half day · Free",
                },
                {
                  n: "Freedom Beach",
                  e: "Free (longtail ฿200–300)",
                  d: "Hidden cove with crystal-clear water, accessible by longtail boat from Patong (10 min) or a steep jungle trail from the car park (10 min walk). Far fewer tourists than the main beaches. The water clarity rivals the Similan Islands. Bring your own water and snacks — there is one small bar with inflated prices.",
                  t: "Hidden gem · 2–3 hrs",
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
            title="Phuket — Islands, Temples &amp; Coastline"
            subtitle="Andaman coast limestone karsts, turquoise lagoons and one of the most dramatic island landscapes in Southeast Asia."
            spots={[
              {
                name: "Phi Phi Islands",
                query: "phi phi islands limestone cliffs turquoise lagoon aerial thailand",
                desc: "Limestone cliffs rising from turquoise water. The speedboat approach is one of Southeast Asia's most dramatic moments.",
              },
              {
                name: "Phang Nga Bay",
                query: "phang nga bay james bond island limestone karst emerald water thailand",
                desc: "Towering limestone karsts jutting from emerald water. Sea kayaking through hidden caves and lagoons is the highlight.",
              },
              {
                name: "Old Phuket Town",
                query: "old phuket town sino portuguese colorful shophouses street art",
                desc: "Sino-Portuguese architecture, street art, and the best coffee on the island. Walk Soi Romanee and Thalang Road.",
              },
              {
                name: "Big Buddha at Sunset",
                query: "phuket big buddha white marble statue hilltop panoramic sunset",
                desc: "45-metre marble Buddha visible from across southern Phuket. Free entry, panoramic views, peaceful atmosphere.",
              },
              {
                name: "Maya Bay, Phi Phi Leh",
                query: "maya bay phi phi leh turquoise water cliff enclosed beach thailand",
                desc: "The Beach filming location. Now with limited daily visitors to protect the recovering ecosystem. Book early.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Phuket is mid-range by Southeast Asian standards — cheaper than Bali&apos;s luxury scene but pricier than mainland Thailand. Budget travellers can manage ฿1,200–2,000/day ($34–56), mid-range ฿3,000–5,000/day ($85–140), and luxury ฿8,000+/day ($225+). All prices in Thai Baht (฿) and USD at ~฿35.5 = $1.
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
                    ["🏨 Accommodation (5N)", "฿2,000–5,000 ($56–141)", "฿7,500–17,500 ($211–493)", "฿40,000–150,000 ($1,127–4,225)"],
                    ["🍜 Food & Drinks", "฿1,500–2,500 ($42–70)", "฿4,000–8,000 ($113–225)", "฿15,000–35,000 ($423–986)"],
                    ["🚗 Transport", "฿800–1,500 ($23–42)", "฿2,000–4,000 ($56–113)", "฿5,000–15,000 ($141–423)"],
                    ["🎯 Tours & Activities", "฿3,000–5,000 ($85–141)", "฿8,000–15,000 ($225–423)", "฿40,000–80,000 ($1,127–2,254)"],
                    ["🛒 Shopping & Extras", "฿0–1,000 ($0–28)", "฿2,000–5,000 ($56–141)", "฿5,000–20,000 ($141–563)"],
                    ["TOTAL (per person)", "฿6,000–10,000 ($169–282)", "฿15,000–25,000 ($423–704)", "฿40,000+ ($1,127+)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (฿1,200–2,000/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in guesthouses or hostels (฿400–1,000/night), eat at local markets and street food stalls (฿60–120/meal), use songthaews and shared tours. Phuket is doable on a tight budget if you stay in Kata or Karon rather than Patong.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">✨ Mid-Range (฿3,000–5,000/day)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">3–4 star resorts with pool (฿1,500–3,500/night), a mix of local food and restaurant dining, Grab transport, and premium small-group tours. The sweet spot for comfort and value. You eat well, see everything, and stay comfortable.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (฿8,000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">5-star pool villas at Trisara, Banyan Tree, or Amanpuri (฿8,000–30,000/night), private boat charters, Michelin-starred dining, and world-class spa treatments. Phuket luxury rivals the Maldives at a fraction of the price.</p>
              </div>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices Thai Baht (฿) 2026. USD conversions approximate at ฿35.5 = $1. International flights not included.
            </p>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Phuket</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key decision is which area to base yourself. Patong for nightlife and first-timer energy (but noisy). Kata/Karon for families, couples, and better beaches. Rawai for authentic Thai vibes and the seafood market. Old Town for culture and food. Most 5-day trips do best in Kata or Rawai &mdash; central enough for everything, quiet enough to sleep.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "The Shore at Katathani",
                  type: "Boutique Resort · Kata Noi",
                  price: "From ฿4,500/night (~$127)",
                  badge: "Mid-range pick",
                  desc: "Boutique all-villa resort on Kata Noi Beach with private plunge pools and direct beach access. Quieter than Kata, excellent service, and one of the best beach locations in Phuket. The sunset views from the hillside villas are extraordinary. Consistently rated as one of Phuket's best mid-range options.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Trisara Phuket",
                  type: "Luxury Pool Villa · Nai Thon",
                  price: "From ฿18,000/night (~$507)",
                  badge: "Luxury pick",
                  desc: "Private pool villas cascading down a hillside to a secluded beach. Home to PRU, Phuket's only Michelin-starred restaurant (farm-to-table with ingredients from their own organic farm). The spa, the infinity pools, and the seclusion make this feel like a private island. Worth the splurge for at least one night.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Lub d Phuket Patong",
                  type: "Design Hostel · Patong",
                  price: "From ฿500/night (~$14)",
                  badge: "Best budget",
                  desc: "Thailand's best hostel chain — modern design, clean pods, excellent common areas, and a rooftop pool. 5 min walk from Patong Beach and Bangla Road. If you want the Patong nightlife experience without paying resort prices, this is the move. Also great for solo travellers looking to meet people.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Casa Blanca Boutique Hotel",
                  type: "Heritage Boutique · Old Town",
                  price: "From ฿2,000/night (~$56)",
                  badge: "Best for culture",
                  desc: "Restored Sino-Portuguese mansion in the heart of Old Phuket Town, walking distance to the best street food, cafes, and the Sunday Walking Street Market. Beautifully designed rooms with heritage character. The trade-off: 30 min from the beaches by Grab, but you gain the most atmospheric neighbourhood on the island.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Rawai guesthouses & villas",
                  type: "Budget–Mid · Rawai",
                  price: "฿600–2,500/night (~$17–70)",
                  badge: "Best local vibes",
                  desc: "Rawai is where Phuket residents and long-stay visitors live. Dozens of guesthouses and small villas with pools, all within walking distance of the Rawai Seafood Market, local restaurants, and Nai Harn Beach. Quieter and more authentically Thai than the west coast tourist beaches. Look on Booking.com for 8+ rated options.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Phuket</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Phuket has its own distinct cuisine &mdash; Phuketian food blends Thai, Chinese, and Malay influences from centuries of trade. Moo hong (braised pork belly), oh tao (oyster omelette), and Hokkien noodles are local specialities you won&apos;t find in Bangkok. The rule is the same as everywhere: walk away from the tourist strip and prices drop 60%.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Raya Restaurant",
                  t: "Classic Phuketian · Old Town",
                  d: "The most famous restaurant in Old Phuket Town, set inside a gorgeous colonial mansion. The crab curry is the signature dish and it is genuinely exceptional — rich, aromatic, and unlike anything you will find in mainland Thailand. Moo hong (Phuket braised pork belly) ฿250, crab curry ฿350, stir-fried sataw beans ฿180. Lunch is less crowded than dinner.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Rawai Seafood Market",
                  t: "Fresh seafood market · Rawai",
                  d: "Buy fresh seafood at the beachfront market — prawns ฿200–400/kg, crab ฿300–500/kg, squid ฿150–250/kg, whole fish ฿200–350/kg. Walk to any of the cooking restaurants behind the market and they prepare it for ฿100/dish. The freshest and cheapest seafood on the island. Go at 5–6pm when the day's catch arrives.",
                  b: "Best seafood deal",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "One Chun Cafe",
                  t: "Heritage cafe · Old Town",
                  d: "Set inside a 100-year-old Sino-Portuguese shophouse, this is where locals go for Phuketian breakfast and lunch. Khanom chin (rice noodles with curry) ฿50–80, dim sum ฿40–80, excellent coffee ฿80–120. The interior is packed with antiques and vintage Phuket photographs. More character per square metre than anywhere else on the island.",
                  b: "Best cafe",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Suay Restaurant",
                  t: "Modern Thai · Old Town",
                  d: "Chef Tammasak's modern Thai fine-casual restaurant in a beautifully restored shophouse. Creative interpretations of southern Thai dishes using local ingredients. The presentation is beautiful without being pretentious. Mains ฿300–500, cocktails ฿250–350. Book for dinner on weekends — it fills up. One of the best dining experiences on the island.",
                  b: "Best mid-range",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Kata Night Market & beach strip",
                  t: "Street food · Kata",
                  d: "The evening street food stalls along Kata Beach and the small night market serve solid Thai food at tourist prices that are still reasonable. Grilled prawns ฿200, whole grilled fish ฿150, pad thai ฿80–120, green curry ฿100–150, mango sticky rice ฿60. Not the cheapest food in Phuket, but convenient and the quality is reliable.",
                  b: "Convenient",
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
            destination="Phuket Thailand"
            hotels={[
              {
                name: "Lub d Phuket Patong",
                type: "Design Hostel · Patong",
                price: "From ฿500/night (~$14)",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/hotel/th/lub-d-phuket-patong.html?aid=2820480",
              },
              {
                name: "The Shore at Katathani",
                type: "Boutique Resort · Kata Noi",
                price: "From ฿4,500/night (~$127)",
                rating: "5",
                badge: "Mid-range pick",
                url: "https://www.booking.com/hotel/th/the-shore-at-katathani.html?aid=2820480",
              },
              {
                name: "Trisara Phuket",
                type: "Luxury Pool Villa · Nai Thon",
                price: "From ฿18,000/night (~$507)",
                rating: "5",
                badge: "Luxury pick",
                url: "https://www.booking.com/hotel/th/trisara.html?aid=2820480",
              },
              {
                name: "Casa Blanca Boutique Hotel",
                type: "Heritage Boutique · Old Town",
                price: "From ฿2,000/night (~$56)",
                rating: "4",
                badge: "Best culture",
                url: "https://www.booking.com/hotel/th/casa-blanca-boutique.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Phi Phi Island Speedboat Day Trip",
                duration: "Full day",
                price: "From ฿1,500/person (~$42)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=phuket+phi+phi&partner_id=PSZA5UI",
              },
              {
                name: "Phang Nga Bay & James Bond Island",
                duration: "Full day",
                price: "From ฿1,200/person (~$34)",
                badge: "Popular",
                url: "https://www.getyourguide.com/s/?q=phuket+phang+nga&partner_id=PSZA5UI",
              },
              {
                name: "Thai Cooking Class with Market Tour",
                duration: "Half day",
                price: "From ฿1,000/person (~$28)",
                badge: "Cultural",
                url: "https://www.getyourguide.com/s/?q=phuket+cooking+class&partner_id=PSZA5UI",
              },
              {
                name: "Similan Islands Snorkelling Day Trip",
                duration: "Full day",
                price: "From ฿2,500/person (~$70)",
                url: "https://www.getyourguide.com/s/?q=phuket+similan&partner_id=PSZA5UI",
              },
            ]}
            pdfProductId="phuket-5-days-pdf"
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🏖️",
                  title: "Staying in Patong for the whole trip",
                  desc: "Patong is great for one evening — Bangla Road is a spectacle worth seeing once. Staying there means noise until 3am, inflated prices, and zero authentic Thai experience. Base in Kata, Karon, or Rawai instead. Visit Patong, don't live there.",
                },
                {
                  icon: "💸",
                  title: "Booking tours at the hotel front desk",
                  desc: "Hotel tour desks charge 30–50% more than booking directly online or at street agencies. Compare prices on Klook or GetYourGuide the night before. The same Phi Phi speedboat tour varies from ฿1,500 to ฿3,500 depending on where you book.",
                },
                {
                  icon: "☀️",
                  title: "Skipping sunscreen on boat days",
                  desc: "Equatorial sun plus water reflection equals severe burns in 45 minutes. Reef-safe SPF50, reapply every 90 min. Buy in advance — island shops and boat vendors charge 3x mainland prices. Bring a rash guard for extended snorkelling.",
                },
                {
                  icon: "🛵",
                  title: "Renting a scooter without a licence",
                  desc: "Thailand requires an International Driving Permit for scooters. Police checkpoints on Phuket's hill roads are common — the fine is ฿500 and your travel insurance is void if you crash without one. Phuket's hills are steep and the roads are winding. Use Grab instead.",
                },
                {
                  icon: "🌊",
                  title: "Visiting Phi Phi in peak monsoon",
                  desc: "June–October seas can be very rough on the Andaman side. Speedboat tours are regularly cancelled. If you must go in shoulder season, book flexible options and check weather the morning of departure. Similan Islands close entirely from mid-May to mid-October.",
                },
                {
                  icon: "🏘️",
                  title: "Skipping Old Phuket Town",
                  desc: "Most tourists do islands and beaches and miss Old Town entirely. It has more character than most Southeast Asian cities — Sino-Portuguese architecture, incredible local food, art galleries, and the Sunday Walking Street market. Budget at least half a day.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Phuket</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "📱",
                  title: "Get Grab + Bolt immediately",
                  desc: "Both ride-hailing apps work in Phuket. The island has no useful public transport — no metro, no buses on useful routes. Grab and Bolt are your lifeline. Download both before landing and buy a local SIM at the airport (฿200–300 for 10–20GB data, TrueMove or AIS).",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🦞",
                  title: "Rawai Seafood Market hack",
                  desc: "Buy fresh seafood at the Rawai beachfront market (฿200–400/kg for prawns, ฿300–500/kg for crab), then walk to any of the restaurants behind it — they cook it for ฿100/dish. The freshest and best-value seafood meal on the island. Go at 5–6pm when the day's catch arrives.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌅",
                  title: "Promthep Cape sunset",
                  desc: "Arrive 30 min before sunset. Bring your own drinks. The lighthouse viewpoint is less crowded than the main platform and has a better angle. Free entry. Best sunset on the island — the combination of ocean, sky, and the southern island silhouettes is extraordinary.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "💧",
                  title: "Monsoon means savings",
                  desc: "May–October means lower hotel prices (30–50% off), fewer tourists, and still plenty of sunny mornings. Afternoon showers usually clear by sunset. Just skip boat trips in rough weather and have a backup plan for rainy afternoons — Old Town, cooking class, spa day.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🏊",
                  title: "Freedom Beach for free",
                  desc: "Most tourists pay ฿1,500 for a longtail from Patong. Walk down the jungle path from the car park (steep, 10 min) for free. Or take a longtail from the southern side — ฿200–300. The water clarity here rivals the Similan Islands with a fraction of the visitors.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "🙏",
                  title: "Big Buddha etiquette",
                  desc: "Free entry but strictly enforced dress code — cover shoulders and knees. Free sarongs available at the entrance. Go early morning for fewest tourists and best light. The construction is ongoing and funded by donations. The views from the hilltop are the best panoramic viewpoint on the island.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Phuket" />

          {/* Combine With */}
          <CombineWith currentSlug="phuket-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days do you need in Phuket?",
                  a: "5 days is ideal to cover Phi Phi Islands, Phang Nga Bay, Old Phuket Town, Big Buddha, beaches and a cooking class. 3 days works if you pick either Phi Phi or Phang Nga. 7 days lets you add Similan Islands, a Krabi day trip, or more beach time.",
                },
                {
                  q: "How much does a 5-day Phuket trip cost?",
                  a: "Budget solo: ฿6,000–10,000 ($169–282) including accommodation, food, transport and activities. Mid-range: ฿15,000–25,000 ($423–704). Luxury: ฿40,000+ ($1,127+). International flights not included. Phuket offers excellent value at the mid-range level.",
                },
                {
                  q: "Do Indian passport holders need a visa for Thailand?",
                  a: "Yes. The easiest option is an eVisa — apply online at thaievisa.go.th (5–7 business days, single entry, up to 60 days). Visa on Arrival at HKT airport gives you 15 days for a ฿2,000 fee — carry ฿10,000 cash as proof of funds. Most Western passports (USA, UK, EU, Australia, Canada) get 30–60 days visa-free.",
                },
                {
                  q: "What is the best time to visit Phuket?",
                  a: "November–April is dry season with calm seas and the best weather. December–January is peak with highest prices. February–April is the sweet spot — dry, slightly cheaper, fewer crowds. May–October is monsoon with lower prices but rougher seas and some tour cancellations.",
                },
                {
                  q: "Patong or Kata Beach — which is better?",
                  a: "Patong for nightlife, shopping, and first-timer energy. Kata/Karon for families, couples, and anyone who values sleep. Rawai for authentic Thai food and local vibes. Our recommendation: stay in Kata or Rawai, visit Patong for one evening to see Bangla Road.",
                },
                {
                  q: "Is the Phi Phi Island day trip worth it?",
                  a: "Absolutely. The limestone cliffs as you approach by speedboat are genuinely breathtaking. Tours (฿1,500–3,500/person) cover Phi Phi Don, Maya Bay, Pileh Lagoon and snorkelling. Book a smaller group tour and go as early as possible to beat the crowds at Maya Bay.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Phuket trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-phuket", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/phuket-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-phuket", label: "How to get there", icon: "✈️" },
                { href: "/blog/phuket-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="phuket-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Thailand &amp; Southeast Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Bangkok &mdash; 4 Day Temple &amp; Food Guide", href: "/blog/bangkok-4-days" },
                { label: "Chiang Mai &mdash; 4 Day Culture Guide", href: "/blog/chiang-mai-4-days" },
                { label: "Bali &mdash; 5 Day Island Guide", href: "/blog/bali-5-days" },
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
