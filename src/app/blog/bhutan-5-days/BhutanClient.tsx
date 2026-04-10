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

// ── Table of Contents ─────────────────────────────────────────────────────────
const BHUTAN_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Bhutan Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "5-Day Itinerary" },
  { id: "landmarks",  emoji: "🏯",  label: "Landmark Guide" },
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
          href: `mailto:?subject=Bhutan 5-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Bhutan in 5 Days — Tiger%27s Nest, Punakha Dzong and the Himalayan Kingdom&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/bhutan-5-days"
        imageUrl="https://images.unsplash.com/photo-1559564927-f35eae3e4a23?w=1200&q=80"
        description="Bhutan in 5 Days: Tiger&apos;s Nest Monastery, Punakha Dzong, Dochula Pass 108 chortens, and the complete Himalayan Kingdom guide with Indian SDF costs."
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
export default function BhutanClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BHUTAN_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Bhutan" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="bhutan tiger nest monastery paro cliffside himalayas"
            fallback="https://images.unsplash.com/photo-1559564927-f35eae3e4a23?w=1600&q=80"
            alt="Tiger&apos;s Nest Monastery Bhutan perched on a sheer cliff above Paro valley with prayer flags"
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
              <span className="text-white/70">Bhutan 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Himalayan Kingdom
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">15 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Bhutan in 5 Days:
                <em className="italic text-amber-300"> Tiger&apos;s Nest, Punakha Dzong &amp; the Gross National Happiness Kingdom</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The 900-metre cliff monastery, the river-wrapped dzong, 108 chortens at dawn, and a kingdom that counts happiness before GDP. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="15 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇧🇹 Bhutan</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From $250/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Tiger&apos;s Nest Monastery clings to a sheer 900-metre cliff above the Paro Valley — prayer flags snapping in the mountain wind, the sound of bells from inside the temple carried down through pine forests, the entire structure appearing physically impossible against the Himalayan sky.
            </p>
          </blockquote>

          {/* ── WHAT BHUTAN ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Bhutan Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Bhutan is the world&apos;s only carbon-negative country, the only nation that constitutionally mandates 60% forest coverage (currently 71%), and the only country that replaced GDP with Gross National Happiness as its official development measure. It is also, frankly, one of the most physically beautiful places on earth — a kingdom of dzong fortresses, cliff monasteries, rhododendron forests, and Himalayan peaks that include the world&apos;s highest unclimbed mountain.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Bhutan is not cheap for international visitors: the Sustainable Development Fee (SDF) of $100 per person per day is on top of your actual tour costs. But for Indian passport holders, the SDF is just Rs 1,200 per day — making Bhutan dramatically more accessible. And the tourist infrastructure — licensed guides, clean accommodation, excellent roads — means the experience is genuinely comfortable.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Five days is the ideal minimum. You need Day 1 just to arrive, settle, and absorb the altitude at Paro (2,200m). By Day 5, you will understand why people come back to Bhutan for the second, third, and fourth time.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="💵" label="Intl SDF (per day)" value="$100/day" />
              <StatCard icon="🧭" label="Guide Mandatory" value="Licensed Guide" />
              <StatCard icon="😊" label="Development Index" value="Happiness" />
              <StatCard icon="✈️" label="Airport" value="PBH Paro" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Bhutan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Mar–May",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "Rhododendron forests in full bloom across 46 species. Warm days (15–25°C), crystal-clear mountain views before monsoon haze, and Paro Tsechu festival (April) with traditional masked dances. The Tiger&apos;s Nest trail is flanked by pink and crimson blooms. The single best window for first-time visitors.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Oct–Nov",
                  i: "🍂",
                  t: "Autumn — Crystal Views",
                  d: "Post-monsoon clarity gives the sharpest Himalayan views of the year — Gangkhar Puensum (7,570m) visible from Dochula Pass on clear mornings. Harvest season: fields of golden buckwheat and red rice. October is peak season — Thimphu Tshechu festival, vibrant markets. November is quieter and equally beautiful.",
                  b: "Recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Dec–Feb",
                  i: "❄️",
                  t: "Winter — Cold but Peaceful",
                  d: "Dochula Pass may have snow (spectacular, but road access can close temporarily). Paro and Thimphu are cold (0–12°C days). Very few tourists — near-private access to Tiger&apos;s Nest and the dzongs. Clear days produce extraordinary mountain visibility. A viable option for those who prefer solitude over comfort.",
                  b: "For solitude seekers",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Jun–Aug",
                  i: "🌧️",
                  t: "Monsoon — Avoid",
                  d: "Heavy daily rain. Tiger&apos;s Nest frequently obscured by cloud for 8–10 hours a day. Trails muddy, leeches active, mountain views blocked. Dochula Pass panorama (the single best Himalayan viewpoint in Bhutan) is typically cloud-covered. Avoid unless you specifically enjoy monsoon travel.",
                  b: "Not recommended",
                  c: "bg-orange-50 border-orange-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Bhutan</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Bhutan has one international airport — <strong className="font-medium">Paro International (PBH)</strong>. Only Druk Air and Bhutan Airlines are permitted to land there. The Paro approach requires special pilot certification — the aircraft navigates a valley between 5,000-metre peaks in visual flight conditions. It is genuinely one of the world&apos;s most remarkable landings.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly from India (recommended for Indian travellers)",
                  d: "Druk Air and Bhutan Airlines operate direct flights from Delhi, Kolkata, Mumbai, Bangalore, and Guwahati to Paro (PBH). Return fares: $150–400 depending on route and season. The Kolkata–Paro route is typically cheapest. Flight duration: 90 minutes from Kolkata, 2.5 hours from Delhi. Book 4–8 weeks ahead during spring and autumn peak seasons.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚶",
                  t: "Overland via Phuentsholing (Indian travellers)",
                  d: "Indian travellers can enter overland via Phuentsholing — a 4-hour drive from Siliguri (connected to New Jalpaiguri railway station). Phuentsholing is the main land border crossing for Indian visitors. From Phuentsholing to Thimphu: 4.5 hours by road. A practical option for those travelling from West Bengal, Sikkim, or northeast India.",
                  b: "Budget option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "✈️",
                  t: "International connections via Bangkok / Singapore",
                  d: "Druk Air connects Paro to Bangkok (BKK) and Singapore (SIN) — popular routing for international visitors arriving via Southeast Asian hubs. Also connections from Kathmandu (KTM) and Dhaka (DAC). The Bangkok–Paro flight is approximately 3.5 hours.",
                  b: "International gateway",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "📋",
                  t: "Tour operator requirement (mandatory for all visitors)",
                  d: "All visitors — Indian and international — must book through a licensed tour operator. The operator handles your SDF payment, accommodation, guide, and transport. Indian visitors: book through a BTC-registered Indian agent or Bhutanese operator. International visitors: the operator also arranges your visa ($40 fee). Independent travel is not permitted.",
                  b: "Non-negotiable",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Bhutan Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. All costs are in BTN/USD. The SDF ($100/day international, Rs 1,200/day Indian) is additional to the costs shown and is paid to your tour operator.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Paro Arrival · Kyichu Lhakhang · Paro Rinpung Dzong"
                cost="$80–120 total (guide + accommodation + meals, SDF separate)"
                items={[
                  "Arrive at Paro International Airport (PBH) — the world's most dramatic commercial airport approach. The aircraft follows the Paro Valley between 5,000-metre peaks, banking hard left at the last moment. Your licensed guide and driver meet you at arrivals and handle your SDF registration.",
                  "Check in to your accommodation in Paro town (budget guesthouses: $30–50/night, included in most tour packages). Paro sits at 2,200m elevation — take the first few hours slowly. Mild altitude effects (light headache, slight breathlessness) are common; they pass within a day.",
                  "Kyichu Lhakhang (2km from Paro town): one of Bhutan's two oldest temples, built in the 7th century CE by Tibetan emperor Songtsen Gampo to subdue a demoness — 108 such temples were built simultaneously across Tibet and Bhutan. The main Jowo statue dates to the 7th century. Still an active monastery — walk clockwise around the shrine, prayer wheels spinning.",
                  "Paro Rinpung Dzong (Fortress of the Heap of Jewels): the most visually striking dzong in all of Bhutan. A massive whitewashed fortress-monastery above the Paro River, reached via a covered wooden cantilever bridge — one of the last traditional bridges of its type in existence. The dzong is simultaneously the administrative HQ of Paro district and an active monastery.",
                  "Evening in Paro: traditional Bhutanese dinner at a local restaurant ($5–10/person). Try ema datshi (fresh green chillis stewed with soft Bhutanese cheese — the national dish, intensely spicy), red rice (nutty Bhutanese variety, grown at altitude), and puta (buckwheat noodles). Suja (salted yak butter tea) is an acquired taste — try it once.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Paro Taktsang — Tiger&apos;s Nest Trek"
                cost="$30–50 total (monastery entry + meals, guide included in tour)"
                items={[
                  "6:45am — Early breakfast, begin Tiger's Nest hike by 7:00am. This is the single most important time decision in Bhutan travel. The trail faces east and morning light hits the monastery's white walls beautifully. By 9am the light changes; by 10am the viewpoint is crowded with tour groups.",
                  "The hike: 5.5km round trip, approximately 800m elevation gain, 2.5–3 hours to ascend. The path is well-maintained, switchbacking through blue pine and cypress forest draped in Spanish moss and prayer flags. Your guide sets pace — altitude (2,200m base, 3,120m at monastery) means going slowly is smarter than arriving exhausted.",
                  "Tiger's Nest Viewpoint (2 hours in): the first full view of Paro Taktsang Monastery across the gorge is one of the great visual moments in travel. The four-temple complex perches on a sheer granite cliff at 900 metres above the valley floor, appearing to defy gravity. Built in 1692 around the cave where Guru Rinpoche meditated for 3 years, 3 months, and 3 days — having flown here on the back of a tigress.",
                  "Monastery entry ($15–20): cross the bridge over the gorge and climb the final stone steps to the complex. Four temples connected by stairways cut into the rock. Inside: ancient thangka paintings, butter lamps, and the cave of Guru Rinpoche. Photography strictly prohibited inside — leave your camera at the entrance door.",
                  "Descent: 1.5 hours down, easier on lungs but harder on knees. Most guides stop for tea at the midway cafeteria — fresh yak butter tea and biscuits. Afternoon: rest at accommodation. Drink 3 litres of water. This is physiological necessity after altitude hiking, not optional.",
                  "Evening: archery demonstration if your operator can arrange one ($5–10). Bhutanese archery uses traditional bamboo bows with targets 145 metres apart — 10x the Olympic distance. The entire team dances and chants mock-insults when opponents miss. One of the most genuinely Bhutanese experiences possible.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Thimphu — Buddha Dordenma · National Museum · Tashichho Dzong"
                cost="$20–40 total (market + sightseeing + dinner)"
                items={[
                  "Drive Paro to Thimphu (1 hour, 60km, along the Paro River valley — traditional Bhutanese farmhouses, painted eaves, and the river running alongside the entire way).",
                  "Buddha Dordenma: a 51-metre bronze-and-gold Buddha seated on a hillside above Thimphu, visible from the entire capital. The base contains 125,000 smaller Buddha statues. Entry is free; the view of Thimphu valley from the terrace is one of the best in the city.",
                  "National Museum of Bhutan (Ta Dzong, Paro — or visit if you didn't on Day 1): housed in a circular watchtower above Paro Dzong, the museum contains Bhutan's finest collection of traditional art, ancient weapons, natural history exhibits, and religious artefacts. The textile gallery is particularly remarkable.",
                  "Tashichho Dzong (Thimphu): the seat of the Bhutanese government and summer residence of Je Khenpo (head of Bhutanese Buddhism). The whitewashed fortress above the Wang Chhu river — manicured grounds, golden rooftop, mountain backdrop — is the most photographed building in Thimphu. Government offices are inside; the dzong is open to visitors in the afternoon.",
                  "Thimphu weekend market (Friday–Sunday) or Norzin Lam handicraft bazaar: hand-woven kira and gho fabric ($50–300), handmade lokta paper, traditional masks, thangka paintings, and dried mushrooms. Everything sold here is made in Bhutan — the government strictly limits imported tourist goods.",
                  "Dinner in Thimphu: Folk Heritage Restaurant in a converted traditional farmhouse ($8–15/person). Try hoentoe (buckwheat dumplings with turnip and cheese, specific to western Bhutan) and phaksha paa (pork slow-cooked with dried red chillis).",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Punakha Dzong · Chimi Lhakhang · Dochula Pass 108 Chortens"
                cost="$15–30 total (meals + small temple donations)"
                items={[
                  "7:00am — Drive Thimphu to Punakha via Dochula Pass (3,150m, 1 hour from Thimphu). On clear mornings the 108 Druk Wangyal Chortens are arranged across the pass ridge with the Himalayan range behind — peaks of 6,000–7,000m. On exceptional clear days: Gangkhar Puensum (7,570m), the world's highest unclimbed mountain, sacred under Bhutanese law.",
                  "Punakha Dzong (the Palace of Great Happiness, 1637 CE): built at the confluence of the Pho Chhu (Father River) and Mo Chhu (Mother River), surrounded on three sides by water. The white fortress with gold rooftops reflected in the rivers is the most photographed image in Bhutan and among the most beautiful buildings in Asia. The dzong houses the embalmed body of Bhutan's unification leader Zhabdrung Ngawang Namgyal.",
                  "Walk the 180-metre suspension bridge over the Mo Chhu — the longest pedestrian suspension bridge in Bhutan, strung with prayer flags, swaying above turquoise water. The view of the dzong from the bridge midpoint is the best perspective in Punakha.",
                  "Chimi Lhakhang (Temple of the Divine Madman, 1499 CE): a 30-minute walk through rice paddies from Punakha town. Dedicated to Drukpa Kunley, the Buddhist saint who used humour and transgression to convey dharma. The temple is covered with phallus paintings — a Bhutanese fertility and protective symbol associated with this saint. The monk inside blesses visitors with a wooden phallus relic. Utterly, genuinely Bhutanese.",
                  "Lunch near Punakha Dzong ($4–7 for a full Bhutanese meal at a local restaurant). Return to Thimphu or Paro for the night.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Haa Valley (optional) · Dochula Dawn · Paro Departure"
                cost="$10–25 total (market + airport transfer)"
                items={[
                  "Optional early excursion: Haa Valley — one of Bhutan's most remote and least-visited valleys, 2 hours from Paro. Only opened to tourists in 2002. Traditional Bhutanese villages, three ancient lhakhangs (Lhakhang Karpo and Nagpo — the White and Black Temples), and mountain views without another tourist in sight. Requires an early 5:30am departure if doing Haa and catching a Paro afternoon flight.",
                  "If not doing Haa: drive from Thimphu/Paro via Dochula Pass at dawn (leave by 6am). Dawn at Dochula Pass — mist in the valleys below, the first Himalayan peaks catching light above the 108 chortens — is one of the great sunrise viewpoints in the Himalayas.",
                  "Final stop in Paro: the Paro weekend market (Saturday–Sunday) for last shopping. Handmade lokta paper cards ($1–2), Bumthang saffron ($5–10/gram — Bhutan grows its own, genuine and excellent), and dried cordyceps (verify authenticity with your guide — expensive and easily faked).",
                  "Pre-departure: leave at least 3 hours before your Paro flight. The terminal is small, check-in is thorough, and flights occasionally depart early when weather windows open over the valley.",
                  "The Paro departure: the aircraft turns immediately after takeoff, banking between mountain faces. Your final view is snow-capped peaks receding behind the wing as the plane climbs out of the valley — the image that makes the entire trip feel permanent.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Bhutan" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏯 Bhutan Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential sites in order of priority. Entry fees as of 2026 — most dzongs are included in your tour package fee. Tiger&apos;s Nest monastery entry is paid separately at the trailhead.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Paro Taktsang (Tiger&apos;s Nest)",
                  e: "$15–20 entry",
                  d: "The unmissable centrepiece of any Bhutan visit. Guru Rinpoche&apos;s 8th-century meditation cave, surrounded by four 17th-century temples perched on a sheer 900-metre cliff. The hike is 5.5km return with 800m elevation gain — moderate fitness required. Start at 7am for best light and least crowds. Photography prohibited inside.",
                  t: "Must see · 4–5 hrs total",
                },
                {
                  n: "Punakha Dzong",
                  e: "Included in tour",
                  d: "The most beautiful dzong in Bhutan. Built 1637 CE at the confluence of two rivers, the white fortress with gold rooftops reflected in turquoise water is the defining image of Bhutanese architecture. Walk the 180-metre suspension bridge for the best view. Go at sunrise if possible — the river mist rises from the confluence in extraordinary light.",
                  t: "Must see · 2 hrs",
                },
                {
                  n: "Dochula Pass (108 Chortens)",
                  e: "Free",
                  d: "3,150m mountain pass between Thimphu and Punakha. On clear days the 108 Druk Wangyal Chortens stand against a panorama of 6,000–7,000m Himalayan peaks. On exceptional mornings: Gangkhar Puensum (7,570m), the world&apos;s highest unclimbed mountain. Best at dawn before clouds build from 9am. The single greatest Himalayan viewpoint in Bhutan.",
                  t: "Sunrise essential · 30–45 mins",
                },
                {
                  n: "Paro Rinpung Dzong",
                  e: "Included in tour",
                  d: "The most visually striking dzong in Paro district. Massive whitewashed fortress-monastery above the Paro River, accessed via a covered wooden cantilever bridge — one of the last traditional bridges of its type. The annual Paro Tsechu festival (spring) fills the courtyard with spectacular masked dances attended by the entire district.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Buddha Dordenma (Thimphu)",
                  e: "Free",
                  d: "51-metre bronze-and-gold seated Buddha on a hillside above Thimphu, containing 125,000 smaller Buddha statues in its base. The terrace view over Thimphu valley is excellent — one of the best overview viewpoints of the capital. The Buddha is illuminated at night and visible from the entire city.",
                  t: "45 mins",
                },
                {
                  n: "Chimi Lhakhang (Divine Madman Temple)",
                  e: "Small donation",
                  d: "A 30-minute rice paddy walk from Punakha town to a 1499 CE temple covered in phallus paintings — a Bhutanese fertility and protective tradition linked to the saint Drukpa Kunley. The monk blesses visitors with a wooden phallus relic. Most tourists find it unexpected and entirely charming. Genuinely unlike any temple elsewhere.",
                  t: "Unique experience · 1.5 hrs",
                },
                {
                  n: "Haa Valley",
                  e: "Included in tour",
                  d: "Bhutan&apos;s most remote accessible valley, only opened to tourists in 2002. The White and Black Temples (Lhakhang Karpo and Nagpo), traditional Bhutanese villages without tourist infrastructure, and mountain views without crowds. Add a half-day to a 5-day itinerary if your schedule allows — it is the least-visited major destination in Bhutan.",
                  t: "Half-day detour",
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
            title="Bhutan — Dzongs, Monasteries &amp; the Himalayas"
            subtitle="The Himalayan Kingdom&apos;s most extraordinary places and moments."
            spots={[
              {
                name: "Tiger&apos;s Nest Monastery",
                query: "bhutan paro taktsang tiger nest monastery cliffside himalayas prayer flags",
                desc: "Paro Taktsang perched on a 900-metre cliff — four 17th-century temples built around Guru Rinpoche&apos;s meditation cave.",
              },
              {
                name: "Punakha Dzong at Sunrise",
                query: "punakha dzong bhutan river confluence sunrise mist himalaya",
                desc: "The Palace of Great Happiness at the confluence of the Pho Chhu and Mo Chhu rivers — the most beautiful dzong in Bhutan.",
              },
              {
                name: "Dochula Pass 108 Chortens",
                query: "dochula pass bhutan 108 chortens himalaya mountain panorama",
                desc: "108 Druk Wangyal Chortens against the Himalayan range at 3,150m — one of the great mountain viewpoints in Asia.",
              },
              {
                name: "Bhutan Prayer Flags",
                query: "bhutan prayer flags mountain pass himalaya wind",
                desc: "Lungta prayer flags strung across mountain passes and bridges — the wind carries Buddhist prayers across every valley in Bhutan.",
              },
              {
                name: "Paro Valley",
                query: "paro valley bhutan farmhouses rice fields himalaya mountains",
                desc: "The Paro Valley at 2,200m — traditional Bhutanese farmhouses among rice fields with snow-capped peaks above.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              All costs are all-inclusive daily rates (accommodation + food + guide + transport + activities) before the SDF. The SDF is paid separately to your tour operator: $100/day for international visitors, Rs 1,200/day (~$14–15) for Indian passport holders.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Tier</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Accommodation</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Food</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">Transport</th>
                    <th className="p-3.5 text-xs font-medium text-green-300 text-center">All-In Daily</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["💰 Budget (Indian)", "$30–50", "$8–15", "$10–20", "$250+/day (incl. Rs 1,200 SDF)"],
                    ["✨ Mid-Range", "$100–200", "$25–50", "$30–60", "$350–600/day (incl. $100 SDF)"],
                    ["💎 Luxury", "$500–1,200", "$80–200", "$100–400", "$800–2,000+/day (incl. SDF)"],
                  ].map(([tier, ...vals]) => (
                    <tr key={tier} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{tier}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Indian Passport Holders</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">At Rs 1,200/day SDF (~$14–15), Indian visitors pay approximately Rs 6,000 in SDF for a 5-day trip. A full budget tour (guesthouse, meals, licensed guide, transport) runs $250–300/day all-in. This makes Bhutan extraordinary value for Indian travellers versus $540 in SDF alone for international visitors.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 International Visitors</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">$100/day SDF (reduced from $250 in September 2024) plus actual tour costs ($150–400/day depending on tier). A 5-day trip costs $1,250+ in SDF alone. Factor this into your budget — the SDF funds Bhutan&apos;s free education, universal healthcare, and environmental conservation. It is, genuinely, money well spent.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Bhutan</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Most visitors base themselves in Paro (convenient for the Tiger&apos;s Nest hike) with a night or two in Thimphu. Punakha is worth a night during peak season. All accommodation is arranged through your licensed tour operator.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Paro Boutique Guesthouses",
                  type: "Budget-mid · Paro town and valley",
                  price: "From $30–80/night",
                  badge: "Best base",
                  desc: "Traditional Bhutanese architecture, mountain views, and convenient location for the Tiger&apos;s Nest hike. Naksel Boutique Hotel ($80–140/night) and Zhiwa Ling Heritage ($100–180/night) are the best mid-range options in Paro. Basic guesthouses run $30–50 and are clean and comfortable.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Uma by COMO, Paro",
                  type: "Luxury · Paro valley hillside",
                  price: "From $400–700/night",
                  badge: "Best luxury (Paro)",
                  desc: "The most acclaimed luxury property in Paro — contemporary design with traditional Bhutanese elements, panoramic mountain views, an excellent COMO spa, and a dedicated wellness programme. Widely regarded as one of Asia&apos;s finest boutique hotels. The Tiger&apos;s Nest is visible from the hillside location.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Amankora Paro & Punakha",
                  type: "Ultra-luxury · Multiple locations",
                  price: "From $700–1,200/night",
                  badge: "Most prestigious",
                  desc: "The Aman group operates five lodges across Bhutan (Paro, Thimphu, Punakha, Gangtey, Bumthang) as a connected circuit. Traditional stone lodge clusters in blue pine forests. The benchmark for luxury travel in Bhutan — specialist guides, private monastery access, and the best chef&apos;s table experience in the kingdom. Book 6+ months ahead.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Thimphu Hotels",
                  type: "Mid-range · Capital city",
                  price: "From $80–200/night",
                  badge: "Capital base",
                  desc: "For those spending more than a day in Thimphu: Taj Tashi ($200–350, Thimphu&apos;s only 5-star, excellent restaurant), Hotel Phuntsho Pelri ($80–120, well-located, good mid-range option), or Namgay Heritage Hotel ($100–150, traditional architecture in the centre of town). Most 5-day itineraries include 1–2 nights in Thimphu.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Bhutan</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Bhutanese cuisine is built on three pillars: chilli, cheese, and red rice. Ema datshi (the national dish) features in almost every meal. Meals at local restaurants cost $4–10 per person; hotel restaurants are $12–25. Most tour packages include breakfast and some meals.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Ema Datshi — The National Dish",
                  t: "Bhutanese staple · Everywhere",
                  d: "Fresh green or dried red chillis stewed with soft Bhutanese cheese (datshi). Not a side dish — the chilli is the main ingredient. Intensely spicy, deeply savoury, completely addictive. Every restaurant in Bhutan serves it. Every meal benefits from it. If you eat nothing else in Bhutan, eat ema datshi.",
                  b: "Must try",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Phaksha Paa",
                  t: "Bhutanese pork dish · Local restaurants",
                  d: "Pork slow-cooked with dried red chillis — rich, deeply flavoured, smoky. One of the most satisfying dishes in Bhutanese cuisine. Try it at the Folk Heritage Restaurant in Thimphu or at any local Paro restaurant. The dried chillis (not fresh) give it a completely different character from ema datshi.",
                  b: "Best pork dish",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Red Rice (Zow)",
                  t: "Bhutanese staple · All meals",
                  d: "The nutty, slightly sticky red rice grown only at Bhutanese altitude. Available nowhere else in the world at the same quality. Serves as the base for almost every Bhutanese meal. The flavour is distinctly different from white rice — earthier, with a slight chew. Buy a bag to take home from the Paro or Thimphu market.",
                  b: "Take some home",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Momos (Bhutanese Dumplings)",
                  t: "Street food · Markets and cafes",
                  d: "Steamed or fried dumplings filled with pork, beef, or vegetables — Bhutanese momos are slightly different from Tibetan or Nepali versions, typically spicier and smaller. Available at market stalls ($1–2 for 6–8 momos) and at most Thimphu cafes. Try them from a market stall rather than a tourist restaurant for the authentic version.",
                  b: "Great street food",
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
            destination="Bhutan Himalayan Kingdom"
            hotels={[
              {
                name: "Uma by COMO, Paro",
                type: "Luxury boutique · Paro valley hillside",
                price: "From $400/night",
                rating: "5",
                badge: "Best luxury",
                url: "https://www.booking.com/hotel/bt/uma-paro.html?aid=2820480",
              },
              {
                name: "Zhiwa Ling Heritage Hotel",
                type: "Heritage mid-range · Paro",
                price: "From $100/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/bt/zhiwa-ling.html?aid=2820480",
              },
              {
                name: "Taj Tashi Thimphu",
                type: "5-star · Thimphu capital",
                price: "From $200/night",
                rating: "5",
                badge: "Best in Thimphu",
                url: "https://www.booking.com/hotel/bt/taj-tashi.html?aid=2820480",
              },
              {
                name: "Naksel Boutique Hotel",
                type: "Boutique · Paro valley",
                price: "From $80/night",
                rating: "4",
                badge: "Best value",
                url: "https://www.booking.com/hotel/bt/naksel-boutique-hotel-and-spa.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Tiger&apos;s Nest Guided Hike",
                duration: "5 hrs",
                price: "From $40/person",
                badge: "Essential",
                url: "https://www.getyourguide.com/s/?q=bhutan+tigers+nest+hike&partner_id=PSZA5UI",
              },
              {
                name: "Bhutan 5-Day Private Tour",
                duration: "5 days",
                price: "From $250/person",
                badge: "Best value",
                url: "https://www.getyourguide.com/s/?q=bhutan+5+day+tour&partner_id=PSZA5UI",
              },
              {
                name: "Punakha Dzong + Suspension Bridge",
                duration: "4 hrs",
                price: "From $30/person",
                url: "https://www.getyourguide.com/s/?q=punakha+dzong+tour&partner_id=PSZA5UI",
              },
              {
                name: "Bhutan Cultural Cooking Class",
                duration: "3 hrs",
                price: "From $25/person",
                url: "https://www.getyourguide.com/s/?q=bhutan+cooking+class&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Bhutan</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "💵",
                  title: "Underestimating the SDF Fee — It Is Not Optional",
                  desc: "Many first-time visitors discover the SDF cost only after booking flights. For international visitors: $100/day per person on top of your actual tour costs. For a 5-day trip with two people, that is $1,000 in SDF alone before accommodation, food, or activities. For Indian passport holders the SDF is Rs 1,200/day — much more manageable. Budget for the SDF explicitly and upfront, not as an afterthought.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🧍",
                  title: "Trying to Travel Solo or Without a Licensed Guide",
                  desc: "Independent travel in Bhutan is not permitted for any nationality. You cannot arrive in Bhutan and explore independently — a licensed guide accompanies you for all sightseeing. This is non-negotiable Bhutanese tourism policy, not a guideline. Attempting to separate from your guide at sites, skip arranged transport, or explore unsupported areas can result in tour termination. The guide system is also genuinely valuable — your guide&apos;s knowledge of dzongs, monasteries, and Buddhist iconography transforms what you understand.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "📅",
                  title: "Booking Too Late — Bhutan Requires 4–6 Weeks Minimum",
                  desc: "Bhutan is not a destination you can book 2 weeks ahead. International visitors need 4–6 weeks minimum for visa processing through their operator. Indian visitors need 2–3 weeks for SDF registration. During peak seasons (October Tshechu festival, spring rhododendron bloom in April), book 3+ months ahead — quality guides and the best accommodation options book solid early. Spontaneous Bhutan trips do not work.",
                  color: "bg-yellow-50 border-yellow-200",
                },
              ].map((m) => (
                <TipCard key={m.title} {...m} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Bhutan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "⏰",
                  title: "Tiger&apos;s Nest at 7am — Morning Light Beats Midday Crowds",
                  desc: "The mid-mountain viewpoint is at its best from 8:00–9:30am when the sun catches the white monastery walls across the gorge. By 10am, clouds build from the valley floor and often obscure the view by noon. Start hiking at 7am, reach the viewpoint by 8:30am. This schedule captures the best light and avoids the midday groups.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌅",
                  title: "Punakha Dzong at Sunrise — River Mist and Morning Monks",
                  desc: "Punakha Dzong at 7am: river mist rising from the Pho Chhu and Mo Chhu confluence, golden rooftops in the first light, monks crossing the courtyard for morning prayers. A 6am departure from Thimphu reaches Punakha before the light changes. The 180-metre suspension bridge at dawn with the dzong framed upstream is one of the great photographs in the Himalayas.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🏔️",
                  title: "Dochula Pass Before 9am for Mountain Views",
                  desc: "The 108 chortens with the Himalayan range behind is the iconic Bhutan pass photograph. Clouds build from the valley floor from around 9am and typically cover the peaks by 10am. Whether driving to Punakha on Day 4 or making a dedicated dawn trip on Day 5, reach Dochula by 7:00–7:30am for a near-guaranteed mountain panorama.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "💊",
                  title: "Acclimatise Properly — Paro Is at 2,200m",
                  desc: "Bhutan&apos;s main towns (Paro, Thimphu) sit at 2,200–2,400m. Dochula Pass is at 3,150m. Most visitors coming from sea level or low altitudes feel mild altitude effects on Day 1 — slight headache, breathlessness, poor sleep. Drink 3+ litres of water daily, avoid alcohol on Day 1, don&apos;t attempt the Tiger&apos;s Nest hike on your first full day in Bhutan. Day 2 is the right time — 24 hours of acclimatisation makes a significant difference.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "📸",
                  title: "Prayer Flags from Monastery Shops, Not Tourist Stalls",
                  desc: "Bhutan is the world&apos;s most prayer-flag-dense country. If you want to hang flags (a common practice), buy from monastery shops or local markets — the flags are printed on cotton with correct Tibetan prayers, cost $1–3/set, and money goes to the monastery. Tourist stall flags are often lower quality synthetic fabric. Ask your guide to take you to the monastery shop.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🍎",
                  title: "Buy Bhutanese Saffron and Red Rice to Take Home",
                  desc: "Bhutan grows its own saffron in Bumthang — genuine, high-quality, and remarkably cheap at source ($5–10/gram compared to $15–25 imported). Bhutanese red rice is similarly excellent and unavailable outside Bhutan at the same quality. Buy from the Paro weekend market or Thimphu handicraft bazaar rather than airport shops (significantly cheaper, identical quality).",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Bhutan" />

          {/* Combine With */}
          <CombineWith currentSlug="bhutan-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How much cheaper is Bhutan for Indian passport holders?",
                  a: "Significantly cheaper. Indian citizens pay Rs 1,200/person/day SDF (approximately $14–15/day at current rates) and require no visa. International visitors pay $100/day SDF plus a $40 visa fee. For a 5-day trip: an Indian visitor pays approximately Rs 6,000 (~$72) in SDF; an international visitor pays $540 in SDF alone. Accommodation and tour costs are the same for both, but the SDF difference makes Bhutan dramatically more accessible for Indian travellers.",
                },
                {
                  q: "How fit do I need to be for the Tiger&apos;s Nest hike?",
                  a: "Moderate fitness is required — comparable to a 3-hour uphill walk on a maintained trail. The 800m elevation gain starting at 2,200m makes it harder than equivalent sea-level hikes. Most visitors in reasonable walking fitness complete it without difficulty if they go slowly and take breaks. Those with cardiovascular conditions should consult a doctor first. Horses are available for the steepest section ($5–10 one way). Prepare with 2–3 weeks of daily uphill walking before your trip.",
                },
                {
                  q: "What is the best time to visit Bhutan?",
                  a: "March–May (spring) and September–November (autumn) are the two peak seasons. Spring brings 46 species of rhododendron in bloom, warm days, and Paro Tsechu festival (April). Autumn brings the clearest mountain views of the year and the Thimphu Tshechu festival (October). December–February is cold but uncrowded with beautiful clarity. Avoid June–August — monsoon brings daily heavy rain, Tiger's Nest is frequently obscured, and Dochula Pass views are blocked.",
                },
                {
                  q: "Is Bhutan actually carbon negative?",
                  a: "Yes. Bhutan is the world's only carbon-negative country — it absorbs approximately 9.4 million tonnes of CO2 annually (via its 71% forest coverage) while producing only 1.5 million tonnes. The constitution mandates 60% forest coverage in perpetuity. Hydropower generates 99.9% of Bhutan's electricity, with surplus exported to India. These are legally binding commitments, not aspirational targets.",
                },
                {
                  q: "Can I visit Bhutan independently without a tour operator?",
                  a: "No. Independent travel in Bhutan is not permitted for any nationality. All visitors must book through a licensed Bhutanese tour operator (or a registered foreign agent for Indian visitors). The operator arranges your SDF payment, accommodation, licensed guide, and transport. International visitors also receive their visa through the operator. The guide accompanies you for all sightseeing — this is enforced, not optional.",
                },
                {
                  q: "Is Bhutan worth the cost for international visitors?",
                  a: "At $100/day SDF plus $200–400/day tour costs, Bhutan is genuinely expensive for international visitors. The question is whether the experience justifies it. Bhutan offers something no other destination provides: a functioning Buddhist kingdom where traditional culture is lived rather than performed, Himalayan landscapes of extraordinary beauty, dzongs and monasteries built to last millennia, and Tiger's Nest — one of the world's great hikes to one of the world's great buildings. For most people who make the journey, the answer is an unambiguous yes.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto px-0 mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Bhutan trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-bhutan", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/bhutan-trip-cost-indian-passport", label: "Cost for Indians", icon: "💰" },
                { href: "/blog/how-to-reach-bhutan-from-india", label: "How to get there", icon: "✈️" },
                { href: "/blog/bhutan-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="bhutan-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Himalayan &amp; South Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Darjeeling 3 Days — Tea Hills &amp; Tiger Hill", href: "/blog/darjeeling-3-days" },
                { label: "Sikkim 4 Days — Monasteries &amp; Mountains", href: "/blog/sikkim-4-days" },
                { label: "Nepal Kathmandu 4 Days — Temples &amp; Trekking", href: "/blog/nepal-kathmandu-4-days" },
                { label: "Ladakh 5 Days — High Altitude Desert", href: "/blog/ladakh-5-days" },
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
