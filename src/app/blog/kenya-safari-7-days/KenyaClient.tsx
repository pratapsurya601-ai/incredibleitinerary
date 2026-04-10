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
const KENYA_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What a Kenya Safari Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "7-Day Itinerary" },
  { id: "wildlife",    emoji: "🦁",  label: "Park & Wildlife Guide" },
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
          href: `mailto:?subject=Kenya Safari 7-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Kenya Safari in 7 Days — Masai Mara, Amboseli and the Great Migration&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/kenya-safari-7-days"
        imageUrl="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80"
        description="Kenya Safari in 7 Days: Masai Mara Great Migration, Amboseli elephants against Kilimanjaro, hot air balloon sunrise, Diani Beach — complete safari guide with real costs in KES and USD."
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
export default function KenyaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KENYA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Kenya" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="kenya masai mara safari lion elephants africa savanna"
            fallback="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80"
            alt="Lion pride resting on the golden Masai Mara savanna during Kenya safari at sunrise"
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
              <span className="text-white/70">Kenya Safari 7 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Safari &amp; Wildlife
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">18 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Kenya Safari in 7 Days:
                <em className="italic text-amber-300"> Masai Mara, Amboseli &amp; the Great Migration</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Wildebeest river crossings at dawn, elephant herds beneath Kilimanjaro, hot air balloon sunrise over the Mara, and sundowners on the savanna. The complete guide with real timings, costs in KES &amp; USD, and the mistakes that ruin most Kenya safaris.
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
              <span>🇰🇪 Kenya</span>
              <span>·</span>
              <span>🗓 7 Days</span>
              <span>·</span>
              <span>💰 From $150/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              There is a moment on the Masai Mara &mdash; when the dawn light turns the savanna gold, a pride of lions watches the wildebeest massing at the Mara River, and a hot-air balloon drifts silently overhead &mdash; that reminds you why Kenya has been the world&apos;s definitive safari destination for over a century. Seven days lets you do it properly.
            </p>
          </blockquote>

          {/* ── WHAT A KENYA SAFARI ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What a Kenya Safari Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Kenya sits on the equator in East Africa, bordered by Tanzania to the south, Uganda to the west, Ethiopia to the north, and the Indian Ocean to the southeast. The country&apos;s landscape ranges from snow-capped mountains and the Great Rift Valley to vast open savannas, tropical coastline, and dense highland forests. The Masai Mara ecosystem alone supports one of the highest densities of large predators anywhere on earth.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The safari reality: Kenya is not a single park you drive through in a day. The major reserves &mdash; Masai Mara, Amboseli, Tsavo, Samburu, Lake Nakuru &mdash; are spread across the country and connected by internal flights or long road transfers. A 7-day trip works best with two or three parks maximum, giving you enough game-drive time to move past the checklist mentality and into genuine observation. The animals operate on their own schedule. Patience and repetition are what separate an average safari from a life-changing one.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Seven days covers Nairobi&apos;s wildlife experiences, Amboseli&apos;s elephants framed by Mount Kilimanjaro, and three full days in the Masai Mara for the Great Migration and big-cat encounters. Add a final day on the coast at Diani Beach if your schedule allows.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="NBO (Jomo Kenyatta)" />
              <StatCard icon="🌡️" label="Best Season" value="Jul–Oct" />
              <StatCard icon="🦁" label="Big Five" value="All Present" />
              <StatCard icon="💰" label="Budget From" value="$150/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Kenya</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Jul–Oct",
                  i: "🦬",
                  t: "Great Migration Season — Peak",
                  d: "Dry season with warm days (22-28°C) and cool mornings. The wildebeest migration crosses the Mara River between July and October — the most dramatic wildlife spectacle on earth. Peak tourist season with highest lodge prices, but this is when Kenya delivers its most iconic experience. Book lodges and camps 6-12 months ahead.",
                  b: "Best for migration",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jan–Feb",
                  i: "☀️",
                  t: "Dry Season — Excellent Game Viewing",
                  d: "Hot and dry (25-32°C) with excellent visibility. Animals concentrate around water sources making them easier to spot. The Mara is uncrowded, prices are lower than migration season, and the big cats are still very active. Amboseli is at its best with clear Kilimanjaro views. Outstanding value for money.",
                  b: "Best value + wildlife",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Nov–Dec",
                  i: "🌧️",
                  t: "Short Rains — Green Season",
                  d: "Brief afternoon showers, lush green landscapes, and dramatically fewer tourists. Prices drop 20-40% across all lodges. The Mara is verdant and beautiful, migratory birds arrive, and the light for photography is exceptional after the rain clears. Roads remain passable. An underrated window for experienced safari-goers.",
                  b: "Budget-friendly",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Apr–Jun",
                  i: "🌧️",
                  t: "Long Rains — Lowest Prices",
                  d: "Heavy rains, especially April and May. Some Mara camps close, roads can become difficult, and game viewing is less predictable. However, prices are at their lowest, the landscape is at its most dramatic, and birding is exceptional. June transitions into dry season and offers good value with improving conditions.",
                  b: "Cheapest rates",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Kenya</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Nairobi Jomo Kenyatta International Airport (NBO) is the main gateway. All nationalities require an <strong className="font-medium">e-Visa ($51)</strong> applied online at evisa.go.ke before travel. Visa on arrival was discontinued in 2024.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "From India",
                  d: "Kenya Airways flies direct from Mumbai to Nairobi (5.5 hours, from ₹25,000-₹45,000 return). Ethiopian Airlines via Addis Ababa is often cheaper (₹20,000-₹35,000). Air India Express and IndiGo have seasonal direct routes. Book 2-3 months ahead for the best fares. The Mumbai-Nairobi direct flight departs late evening and arrives at dawn — perfect for connecting to a morning safari transfer.",
                  b: "Direct from Mumbai",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "From Europe & Americas",
                  d: "Kenya Airways direct from London Heathrow (8.5 hours), Amsterdam, and Paris. British Airways from London. Emirates and Qatar via Gulf hubs. Budget option: Turkish Airlines via Istanbul often has the lowest fares from Europe ($400-700 return). From the US: Kenya Airways direct from New York JFK (15 hours) or connect via London, Dubai, or Doha.",
                  b: "Many direct options",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "✈️",
                  t: "Internal flights to safari parks",
                  d: "SafariLink and AirKenya operate daily flights from Nairobi Wilson Airport to Masai Mara (45 min, $120-240 one-way), Amboseli (45 min, $120-180), and Samburu (1 hr, $150-220). These small bush planes save 4-6 hours of road travel each way. The views from the air — Rift Valley escarpment, Lake Magadi, Kilimanjaro — are spectacular. Book well ahead in migration season.",
                  b: "Saves 4-6 hrs vs road",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚗",
                  t: "Driving between parks",
                  d: "Nairobi to Amboseli: 4 hours on tarmac. Amboseli to Masai Mara: 5-6 hours via Narok (mixed roads). Nairobi to Masai Mara direct: 5 hours. Roads are generally decent but deteriorate in the rainy season. Most safari operators include road transfers in their packages. Self-driving is possible but not recommended for first-time visitors — navigation in parks requires local knowledge.",
                  b: "Budget option",
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

          {/* ── 7-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 7-Day Kenya Safari Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary covers mid-range spending ($250-400/day). Each day card is expandable. The route runs Nairobi (1 night) → Amboseli (2 nights) → Lake Nakuru (1 night) → Masai Mara (2 nights) → Diani Beach or departure. All costs in KES &amp; USD at ~KES 155 = $1.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Nairobi — Elephants, Giraffes & the Carnivore"
                cost="KES 12,000-17,000 (~$80-110) excl. accommodation"
                items={[
                  "Arrive Nairobi Jomo Kenyatta International Airport (NBO). Take the Nairobi Express Rail Link to Nairobi West (KES 300/$2, 15 min) or a metered taxi (KES 2,300-3,100/$15-20 to Westlands or Kilimani). Pre-arrange a pickup with your hotel — most offer airport transfers for KES 1,500-2,300 ($10-15).",
                  "Check into your Nairobi base. Budget: Wildebeest Eco Camp in Karen (KES 3,800-5,400/$25-35 per night). Mid-range: Hemingways Nairobi (KES 28,000-39,000/$180-250 per night). The Karen suburb is closest to all the wildlife attractions.",
                  "David Sheldrick Wildlife Trust Elephant Orphanage in Karen (KES 4,650/$30 entry, book online at sheldrickwildlifetrust.org). Visiting hours are 11am only, 1 hour. Baby elephants orphaned by poaching or drought are raised by keepers until they can be reintegrated into the wild. One of the most moving wildlife experiences in Africa.",
                  "Giraffe Centre (KES 2,300/$15 entry) — the African Fund for Wildlife Conservation breeding centre for the endangered Rothschild giraffe. You stand at head height on the feeding platform and feed pellets directly to giraffes. Open 9am-5pm. Exceptional photographs.",
                  "Karen Blixen Museum (KES 1,550/$10) — the Danish author's farmhouse preserved exactly as it was, with the Ngong Hills forming the backdrop.",
                  "Dinner at Carnivore Restaurant (KES 5,400-7,000/$35-45 per person) — Nairobi's most famous restaurant since 1980. A rotating spit of game meats (crocodile, ostrich, hartebeest, camel) plus conventional cuts, served by carvers at your table until you raise the flag to stop. Book ahead.",
                ]}
              />
              <DayCard
                day="Days 2-3"
                title="Amboseli — Elephants Against Kilimanjaro"
                cost="KES 31,000-43,000 (~$200-280) both days incl. park fees"
                items={[
                  "Shared shuttle Nairobi to Amboseli (approximately 4 hours, KES 3,100-3,900/$20-25 per person). The road passes through Kajiado area and Maasai grazing land — you will see Maasai herdsmen with their cattle long before you enter the park.",
                  "Amboseli National Park entrance fee: KES 14,000/$90 per person per day (conservancy fee included). Paid at the gate. Budget for this carefully — park fees are a major cost component that many first-time visitors underestimate.",
                  "Amboseli's defining image: elephant families walking beneath the snow-capped peak of Mount Kilimanjaro (5,895m, Tanzania) across the marshes. The mountain is best visible at dawn and late afternoon — cloud builds around the summit by midday. Wake at 5:30am on both mornings.",
                  "Game drives Day 2 and Day 3: Amboseli has Kenya's highest density of elephants — herds of 50-100 animals are common. The park also supports lions, cheetah, buffalo, zebra, wildebeest, and over 370 bird species including flamingos in the swamp areas.",
                  "Maasai village visit (KES 3,100-4,650/$20-30 per person, arranged through your operator). Includes warrior jumping dances, bead jewellery-making, and traditional homestead tour. The money goes directly to the community.",
                  "Observation Hill at sunset — a short walk from most lodges with panoramic views of the swamps, elephant herds, and Kilimanjaro in the last light. Free and one of the best photographic positions in Amboseli.",
                  "Budget accommodation: Amboseli Sopa Lodge (KES 12,400-20,200/$80-130 per person including meals) or KWS campsites (KES 4,650-7,750/$30-50 per person). Bring food from Nairobi if camping.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Lake Nakuru — Flamingos & Rhino Sanctuary"
                cost="KES 18,600-27,900 (~$120-180) incl. park fees"
                items={[
                  "Transfer from Amboseli to Lake Nakuru (6-7 hours by road via Nairobi, or fly Amboseli to Nairobi Wilson then drive 3 hours northwest). Lake Nakuru sits in the Great Rift Valley at 1,750m elevation.",
                  "Lake Nakuru National Park entrance fee: KES 9,300/$60 per person per day. The park is a rhino sanctuary — both black and white rhinoceros are present and relatively easy to spot compared to other Kenyan parks.",
                  "The lake was historically famous for millions of flamingos creating a pink rim on the water. Water-level changes in recent years have reduced flamingo numbers at Nakuru, but they have moved to nearby Lake Bogoria. Your guide will confirm the current situation and adjust the route if needed.",
                  "Afternoon game drive: Nakuru supports lion, leopard, buffalo, waterbuck, baboon, and the Rothschild giraffe. The park is smaller and more contained than the Mara — excellent for close-range wildlife photography.",
                  "Baboon Cliff viewpoint — a dramatic overlook of the entire lake and Rift Valley floor. The late afternoon light from this viewpoint, with flamingos visible on the water below and the escarpment behind, is one of the most photographed scenes in the Rift Valley.",
                  "Accommodation: Lake Nakuru Sopa Lodge (KES 12,400-18,600/$80-120 per person full board) or Lake Nakuru Lodge (KES 15,500-23,250/$100-150 per person). Both are inside the park.",
                ]}
              />
              <DayCard
                day="Days 5-6"
                title="Masai Mara — Great Migration & Big Cats"
                cost="KES 46,500-62,000 (~$300-400) both days incl. park fees & camp"
                items={[
                  "Transfer Lake Nakuru to Masai Mara (approximately 5 hours by road via Narok). Stop in Narok for lunch and supplies (KES 775-1,250/$5-8 at a local restaurant).",
                  "Masai Mara park fee: KES 15,500/$100 per person per day. Two days = KES 31,000/$200 in park fees alone. This is Kenya's most expensive park and worth every dollar — the Mara ecosystem supports the world's highest density of large carnivores.",
                  "The Great Migration (July-October): 1.5 to 2 million wildebeest, plus 200,000 zebra and gazelle, cross from Tanzania's Serengeti into Kenya's Masai Mara. The Mara River crossings are the most dramatic wildlife event on earth. Crossing points are unpredictable — your driver will position at the most likely point. Bring water, snacks, sunscreen, and patience.",
                  "Big Five game drives: the Mara has all Big Five. Lions are abundant — unusual to not see at least one pride per day. Leopards are most reliably spotted in the Leopard Gorge area. Cheetahs hunt in the open grass with best viewing between 7-10am.",
                  "Full day format: depart camp 6am for dawn light, return for breakfast at 9am, rest midday, afternoon drive 3pm-7pm. Six hours of driving per day is standard.",
                  "Sundowner drinks on the plain (arranged by your lodge): a table set up in the bush at sunset with cold Tusker beer (KES 465/$3), G&Ts, and the savanna horizon. The single most scenically pleasant way to enjoy a drink anywhere in the world.",
                  "Mid-range camp options: Sarova Mara Game Camp (KES 34,100-54,250/$220-350 per person per night full board) or Mara Serena Safari Lodge (KES 31,000-49,600/$200-320 per person per night). Both include all meals and game drives.",
                ]}
              />
              <DayCard
                day="Day 7"
                title="Diani Beach or Return to Nairobi"
                cost="KES 12,400-20,150 (~$80-130) transport + activities"
                items={[
                  "Option A — Diani Beach: fly Masai Mara to Mombasa/Ukunda via Nairobi Wilson (KES 27,900-37,200/$180-240 per person). Diani Beach on the south coast is Kenya's finest beach — white sand, warm Indian Ocean, and excellent snorkelling. A perfect decompression day after six days on safari.",
                  "Diani Beach activities: snorkelling at Kisite-Mpunguti Marine Park (KES 7,750-12,400/$50-80 day trip), beach relaxation, dhow sailing at sunset. Budget beach lodges from KES 4,650/$30 per night; mid-range resorts from KES 15,500/$100.",
                  "Option B — Return to Nairobi: depart Masai Mara camp at 7am for the 5-hour drive back. Arrive by midday for afternoon flights or evening departure.",
                  "Nairobi National Park game drive en route to the airport — the only national park immediately adjacent to a capital city skyline. From inside the park you can photograph buffalo and giraffe with the Nairobi CBD tower blocks behind them. Entry: KES 9,300/$60 per person, 2-hour drive sufficient.",
                  "Duty free at JKIA departures: Kenyan coffee is exceptional and makes an excellent gift (KES 1,250-1,850/$8-12 for a 250g bag of single-origin highland roast). Maasai shukas, beaded jewellery, and carved soapstone items are available at reasonable prices.",
                  "If departing late: the Sarova Stanley in central Nairobi (KES 12,400-20,150/$80-130 per night) is East Africa's grand colonial hotel, in continuous operation since 1902.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Kenya" onPlanTrip={() => setModalOpen(true)} />

          {/* ── PARK & WILDLIFE GUIDE ── */}
          <section id="wildlife" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🦁 Park &amp; Wildlife Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Kenya&apos;s major national parks and reserves in order of priority for a 7-day safari. Park fees are as of early 2026 and are payable in USD at the gate or via the KWS eCitizen portal.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Masai Mara National Reserve",
                  e: "$100/day",
                  d: "Kenya's flagship reserve and the northern terminus of the Great Migration. 1,510 sq km of open grassland supporting lion, leopard, cheetah, elephant, buffalo, hippo, and enormous herds of wildebeest and zebra. The highest density of big cats in Africa. Three days minimum recommended for meaningful game-drive coverage.",
                  t: "Must visit · Big Five · 3+ days",
                },
                {
                  n: "Amboseli National Park",
                  e: "$90/day",
                  d: "392 sq km of savanna and marshland at the foot of Mount Kilimanjaro. Famous for enormous elephant herds — this is the best park in East Africa for elephant photography. Clear Kilimanjaro views at dawn and late afternoon. Also supports lion, cheetah, buffalo, and over 370 bird species. Two days recommended.",
                  t: "Must visit · Elephants · 2 days",
                },
                {
                  n: "Lake Nakuru National Park",
                  e: "$60/day",
                  d: "Rift Valley soda lake ringed by a compact 188 sq km park. A rhino sanctuary with both black and white rhino. Historically famous for millions of flamingos — numbers fluctuate with water levels. Also supports lion, leopard, buffalo, waterbuck, and the Rothschild giraffe. One day is sufficient.",
                  t: "Rhino sanctuary · 1 day",
                },
                {
                  n: "Nairobi National Park",
                  e: "$60/day",
                  d: "The only national park on the edge of a major capital city. 117 sq km of savanna just 7km from the CBD. Lion, buffalo, giraffe, rhino, and over 400 bird species — all photographable with the Nairobi skyline behind them. A good half-day option en route to or from JKIA airport.",
                  t: "Half-day option · Urban wildlife",
                },
                {
                  n: "Ol Pejeta Conservancy",
                  e: "$90/day",
                  d: "Private conservancy 4 hours north of Nairobi. Home to the last two northern white rhinoceros on earth, a chimpanzee sanctuary, and strong populations of all Big Five. Night game drives are permitted here (not in most national parks). An excellent add-on if rhino is a priority on your checklist.",
                  t: "Optional · Rhino specialist · 1 day",
                },
                {
                  n: "Tsavo National Parks (East & West)",
                  e: "$52/day",
                  d: "Combined area of 22,000 sq km — Kenya's largest park system. Tsavo East is flat and arid with dramatic red-dusted elephants. Tsavo West is more scenic with volcanic landscapes and the Mzima Springs. Less visited than the Mara and Amboseli, meaning far fewer vehicles. Best combined with a Mombasa coast itinerary.",
                  t: "Optional · Off-beaten-path · 2 days",
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
            title="Kenya — Savanna, Wildlife &amp; the Great Migration"
            subtitle="From Kilimanjaro sunrises to Mara River crossings, Kenya delivers the definitive African safari."
            spots={[
              {
                name: "Masai Mara Wildebeest Crossing",
                query: "masai mara wildebeest river crossing great migration kenya",
                desc: "Thousands of wildebeest plunging into the crocodile-filled Mara River — the most dramatic wildlife spectacle on earth.",
              },
              {
                name: "Amboseli Elephants & Kilimanjaro",
                query: "amboseli elephants kilimanjaro kenya safari sunrise",
                desc: "Elephant herds silhouetted against the snow-capped peak of Mount Kilimanjaro at dawn — Amboseli's defining image.",
              },
              {
                name: "Lion Pride on the Mara",
                query: "lion pride masai mara kenya safari golden savanna",
                desc: "The Mara supports the highest density of lions in Africa — encounters with prides resting in the golden grass are daily occurrences.",
              },
              {
                name: "Hot Air Balloon Sunrise",
                query: "hot air balloon masai mara kenya sunrise savanna",
                desc: "Drifting silently 30-100 metres above the savanna at dawn, watching wildlife below — one of the great travel experiences on earth.",
              },
              {
                name: "Diani Beach Coastline",
                query: "diani beach kenya white sand indian ocean palm trees",
                desc: "Kenya's finest beach — white sand and warm Indian Ocean waters, the perfect safari decompression.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Kenya safari costs vary dramatically by tier. Park fees are a major fixed cost at every budget level. All prices in Kenya Shillings (KES) and USD at ~KES 155 = $1. Budget travellers can manage $150-250/day; mid-range $350-600/day; luxury $800-3,000+/day.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category (7 days)</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">💎 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (7N)", "KES 21,700-54,250 ($140-350)", "KES 155,000-310,000 ($1,000-2,000)", "KES 775,000-2,170,000 ($5,000-14,000)"],
                    ["🍽 Food & Drinks", "KES 21,700-37,200 ($140-240)", "KES 43,400-86,800 ($280-560)", "KES 108,500-217,000 ($700-1,400)"],
                    ["🚗 Transport", "KES 27,100-43,400 ($175-280)", "KES 62,000-108,500 ($400-700)", "KES 155,000-310,000 ($1,000-2,000)"],
                    ["🎫 Park Fees (5 days)", "KES 62,000 ($400)", "KES 62,000 ($400)", "KES 62,000 ($400)"],
                    ["🎯 Activities", "KES 15,500-31,000 ($100-200)", "KES 62,000-124,000 ($400-800)", "KES 155,000-310,000 ($1,000-2,000)"],
                    ["TOTAL (per person)", "KES 155,000-232,500 ($1,000-1,500)", "KES 387,500-620,000 ($2,500-4,000)", "KES 1,240,000+ ($8,000+)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($150-250/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Group safari vehicles, budget camps and guesthouses, shared transfers. Park fees are the same for everyone — they are the largest single budget item. Legitimate budget operators include park fees, meals, and a knowledgeable driver-guide.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">✨ Mid-Range ($350-600/day)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">Private or semi-private safari vehicles, well-established lodges and tented camps with en-suite facilities, internal flights between parks. The sweet spot for comfort, guiding quality, and value. Most international visitors fall in this range.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($800-3,000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Private conservancy lodges, charter flights, dedicated expert guides, balloon safaris, bush dinners, and night game drives. Properties like Angama Mara and Giraffe Manor deliver world-class hospitality in extraordinary settings.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Kenya</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Safari accommodation ranges from basic campsites to some of the finest lodges in the world. Most safari operators include accommodation in their packages — always confirm what is included before booking. Here are standout options at each tier and location.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Wildebeest Eco Camp",
                  type: "Budget eco-lodge · Nairobi Karen",
                  price: "From KES 3,800/night (~$25)",
                  badge: "Budget pick",
                  desc: "An eco-conscious budget camp in the Karen suburb, close to the Sheldrick Elephant Orphanage and Giraffe Centre. Clean rooms, good communal atmosphere, and excellent safari booking assistance. Popular with independent travellers starting a Kenya trip. Airport transfers available for KES 1,550 ($10).",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Amboseli Serena Safari Lodge",
                  type: "Mid-range lodge · Amboseli",
                  price: "From KES 27,900/night (~$180) full board",
                  badge: "Mid-range Amboseli",
                  desc: "Well-positioned lodge with Kilimanjaro views from the pool and dining room. Full-board rates include all meals. Game-drive vehicles available from the lodge. The mountain is best visible at dawn from the observation deck — set an alarm for 5:30am.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Sarova Mara Game Camp",
                  type: "Mid-range tented camp · Masai Mara",
                  price: "From KES 34,100/night (~$220) full board",
                  badge: "Mid-range Mara",
                  desc: "Well-established camp with en-suite tented accommodation, a swimming pool, and experienced game-drive guides. Full board includes all meals, morning and afternoon game drives. Centrally located in the reserve for good access to migration crossing points.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Angama Mara",
                  type: "Luxury lodge · Masai Mara escarpment",
                  price: "From KES 186,000/night (~$1,200) all-inclusive",
                  badge: "Luxury pick",
                  desc: "Built on the cliff of the Great Rift Valley escarpment overlooking the entire Mara valley below. Private decks with 300-metre views down over the reserve. Specialist guides, private vehicles, night game drives on the conservancy, bush dinners, and a photography studio. Consistently rated among East Africa's finest lodges.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Budget safari camps (Mara)",
                  type: "Budget · Masai Mara",
                  price: "From KES 9,300/night (~$60) full board",
                  badge: "Best budget Mara",
                  desc: "Camps like Ngare Ndare Bush Camp (KES 9,300-14,000/$60-90 per person) and Fig Tree Camp (KES 12,400-17,000/$80-110 per person) offer basic but clean tented accommodation with all meals included. The game driving is the same Mara ecosystem — you just sleep in a simpler tent at night.",
                  color: "border-green-200 bg-green-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Kenya</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Kenyan cuisine centres on nyama choma (grilled meat), ugali (maize flour staple), sukuma wiki (collard greens), and fresh tropical fruit. In the safari parks, your lodge or camp provides all meals. In Nairobi, the restaurant scene is dynamic and genuinely excellent.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Carnivore Restaurant",
                  t: "Game meat grill · Nairobi Langata",
                  d: "Nairobi's most famous restaurant since 1980. Unlimited rounds of grilled meats brought on swords by carvers — from conventional lamb, chicken, and beef to game meats including crocodile, ostrich, hartebeest, and camel. You raise the white paper flag on your table when you surrender. KES 5,400-7,000 ($35-45) per person all-inclusive. Book the outdoor terrace for atmosphere. Go hungry.",
                  b: "Nairobi institution",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Talisman Restaurant",
                  t: "Pan-African fine dining · Nairobi Karen",
                  d: "One of Nairobi's best restaurants, set in a lush garden compound in Karen. Pan-African cuisine with Kenyan ingredients: Mombasa coconut prawn curry, nyama choma grilled lamb, and ugali for the authentic Kenya experience. KES 6,200-9,300 ($40-60) per person. Reservations recommended, especially on weekends.",
                  b: "Best dinner in Nairobi",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Nyama Choma at a local joint",
                  t: "Grilled meat · Across Kenya",
                  d: "Nyama choma (Swahili for roast meat) is Kenya's national dish — slow-charcoal-grilled goat or beef, served with ugali and kachumbari (tomato-onion salsa). Every town has local nyama choma joints. In Nairobi, the Kenyatta Market and Ngong Road joints are excellent. KES 500-1,200 ($3-8) for a generous serving. Eat with your hands for the full experience.",
                  b: "Must try",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Safari Lodge Dining",
                  t: "All-inclusive · Safari parks",
                  d: "Most mid-range and luxury safari camps include all meals in their rates. Expect a buffet or set-menu format: fresh tropical fruits, English-style cooked breakfast, soup and salad lunch, and a 3-course dinner. The food quality at camps like Sarova Mara and Angama Mara is genuinely excellent — far better than most travellers expect from a bush camp. Sundowner drinks and bush breakfasts are highlights.",
                  b: "Included in most lodges",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  n: "Mama Oliech",
                  t: "Local Kenyan · Nairobi",
                  d: "A Nairobi institution for authentic Kenyan food. Tilapia fish from Lake Victoria is the specialty — deep-fried whole with ugali and sukuma wiki. Simple open-air setting, massive portions, and the kind of cooking that locals queue for. KES 600-1,000 ($4-7) per person. In the Kilimani area, easy to reach by taxi.",
                  b: "Best local food",
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
            destination="Kenya Safari"
            hotels={[
              {
                name: "Wildebeest Eco Camp",
                type: "Budget Eco-Lodge · Nairobi Karen",
                price: "From KES 3,800/night (~$25)",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/hotel/ke/wildebeest-eco-camp.html?aid=2820480",
              },
              {
                name: "Amboseli Serena Safari Lodge",
                type: "Mid-Range Lodge · Amboseli",
                price: "From KES 27,900/night (~$180)",
                rating: "5",
                badge: "Mid-range pick",
                url: "https://www.booking.com/hotel/ke/amboseli-serena-safari-lodge.html?aid=2820480",
              },
              {
                name: "Sarova Mara Game Camp",
                type: "Tented Camp · Masai Mara",
                price: "From KES 34,100/night (~$220)",
                rating: "5",
                badge: "Mara pick",
                url: "https://www.booking.com/hotel/ke/sarova-mara-game-camp.html?aid=2820480",
              },
              {
                name: "Hemingways Nairobi",
                type: "Luxury Boutique · Nairobi Karen",
                price: "From KES 28,000/night (~$180)",
                rating: "5",
                badge: "Luxury pick",
                url: "https://www.booking.com/hotel/ke/hemingways-nairobi.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Masai Mara Safari 3-Day Package",
                duration: "3 days",
                price: "From KES 46,500/person (~$300)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=masai+mara+safari&partner_id=PSZA5UI",
              },
              {
                name: "Nairobi Elephant & Giraffe Day Tour",
                duration: "Full day",
                price: "From KES 12,400/person (~$80)",
                badge: "City wildlife",
                url: "https://www.getyourguide.com/s/?q=nairobi+elephant+giraffe+tour&partner_id=PSZA5UI",
              },
              {
                name: "Hot Air Balloon Safari Masai Mara",
                duration: "4 hours",
                price: "From KES 69,750/person (~$450)",
                badge: "Once in a lifetime",
                url: "https://www.getyourguide.com/s/?q=masai+mara+balloon+safari&partner_id=PSZA5UI",
              },
              {
                name: "Amboseli National Park Day Trip",
                duration: "Full day",
                price: "From KES 23,250/person (~$150)",
                url: "https://www.getyourguide.com/s/?q=amboseli+safari+day+trip&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "📅",
                  title: "Visiting outside migration season without knowing what to expect",
                  desc: "Kenya has excellent wildlife year-round, but the Great Migration wildebeest river crossings happen July-October only. Visiting in March or May gives superb game viewing with fewer tourists and lower prices, but no crossings. This is not a problem if you know it in advance. Research your visit month against what will be happening in the specific parks.",
                },
                {
                  icon: "💊",
                  title: "Not taking malaria prophylaxis",
                  desc: "Kenya has malaria across all its national parks including the Masai Mara, Amboseli, and areas around Nairobi. Buy prophylaxis from your home country before departure — Malarone or Doxycycline, your travel doctor will advise. Starting tablets 1-2 days before arrival is standard protocol. This is not optional precautionary advice.",
                },
                {
                  icon: "🧮",
                  title: "Underestimating park fees in your budget",
                  desc: "Masai Mara: $100/person/day. Amboseli: $90/person/day. Lake Nakuru: $60/person/day. Three days in the Mara plus two in Amboseli plus one at Nakuru = $540 per person just in park fees. Build park fees into your spreadsheet before anything else. Budget operators typically include park fees — always confirm this explicitly in writing.",
                },
                {
                  icon: "🦁",
                  title: "Booking the cheapest safari without research",
                  desc: "A 7-day safari that costs $300 total is almost certainly a scam or an experience you will regret. Legitimate budget safaris with park fees, decent accommodation, meals, and a knowledgeable guide cost $150-250/day at absolute minimum. Check operators on TripAdvisor and SafariBookings.com before paying any deposit.",
                },
                {
                  icon: "🐘",
                  title: "Skipping Nairobi's wildlife experiences",
                  desc: "Many travellers treat Nairobi as a transit city and head straight to the parks. The David Sheldrick Elephant Orphanage and the Giraffe Centre are among the finest wildlife experiences in Kenya and cost only $30 and $15 respectively. You must book Sheldrick in advance for the specific day. More visitors regret missing these than almost any other activity.",
                },
                {
                  icon: "📷",
                  title: "Bringing only a phone camera",
                  desc: "Wildlife photography requires focal length. Animals are often 30-80 metres from the vehicle and a phone camera cannot fill the frame with a lion at that distance. Bring or rent a 200-500mm telephoto lens. If you only have a phone, ask your driver-guide to position the vehicle as close as safely permitted — they know the buffer distances for each species.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Kenya</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌊",
                  title: "Book the September river crossing drive",
                  desc: "August and September are peak crossing months at the Mara River. Ask your safari operator to position at Crossing Point 4 or 7 (historically most active). Arrive by 7am and be prepared to wait up to 4 hours. Bring food, water, and a full camera battery. When a crossing starts — thousands of animals in the water at once, crocodiles rolling — nothing prepares you for the scale.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🎈",
                  title: "The balloon sunrise is a life experience",
                  desc: "At $450-550 per person, the Masai Mara balloon safari is expensive. It is also one of the genuinely transformative travel experiences available on earth. You drift silently above the savanna as the sun rises, watching lions and elephants below. The champagne breakfast served on linen tables in the bush afterward is worth the cost alone. Budget for it or regret it.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "📸",
                  title: "Camera lens length matters more than body",
                  desc: "Wildlife photography is limited by lens focal length. Bring or rent a 300-500mm telephoto lens. A beanbag camera rest for vehicle window shooting replaces a tripod on safari. Bring twice as many memory cards and batteries as you think you need — 500+ images on a good crossing day. A sealed camera bag protects against the Mara's destructive dry-season dust.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🥩",
                  title: "Carnivore for game meat is non-negotiable",
                  desc: "Carnivore Restaurant has been serving rotating game meats since 1980. Unlimited rounds of grilled meats on swords — from lamb and beef to crocodile, ostrich, and camel — until you raise the white flag. KES 5,400-7,000 ($35-45) per person. Book the outdoor terrace. Go hungry. One of East Africa's great dining experiences.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🌆",
                  title: "Spend a real evening in Nairobi",
                  desc: "Nairobi is a dynamic East African capital with a sophisticated restaurant scene, excellent cocktail bars, and a contemporary art gallery circuit. Westlands and Kilimani have the best dining. The Railway Museum gives 2 hours of excellent colonial history context. An evening at Talisman or Carnivore with cold Tusker beer is a perfect first or last night.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🦟",
                  title: "DEET and long sleeves at dusk",
                  desc: "Malaria mosquitoes are most active at dusk and dawn. Apply DEET repellent (50%+ concentration) to exposed skin from 4pm onwards. Wear long sleeves and trousers at dinner in the bush. All safari camps provide mosquito nets — use them every night without exception. These are simple precautions that make prophylaxis significantly more effective.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Kenya" />

          {/* Combine With */}
          <CombineWith currentSlug="kenya-safari-7-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "What exactly is the Great Migration?",
                  a: "The Great Migration is the annual movement of approximately 1.5-2 million wildebeest (plus 200,000 zebra and gazelle) in a clockwise circuit between Tanzania's Serengeti and Kenya's Masai Mara, following the seasonal rains. The Mara River crossings between July and October — where thousands of wildebeest plunge into crocodile-filled water simultaneously — are the most dramatic wildlife event on earth.",
                },
                {
                  q: "What is the best month to visit Kenya?",
                  a: "July-October for the Great Migration river crossings. January-February for excellent dry-season game viewing at lower prices. November-December for green landscapes and 20-40% lower lodge rates. There is no truly bad month for wildlife in Kenya — animals are present year-round.",
                },
                {
                  q: "What is the malaria risk in Kenya?",
                  a: "Malaria is present in all of Kenya's national parks and coastal areas. The risk is low in Nairobi city (above 1,500m altitude) but significant in the Mara, Amboseli, and the coast. Prophylaxis with Malarone or Doxycycline reduces risk by approximately 95% when taken correctly. Buy prophylaxis from your home country before travel. Sleep under mosquito nets and apply DEET repellent at dusk.",
                },
                {
                  q: "Is Kenya safe for tourists?",
                  a: "Kenya's national parks and safari circuits are generally very safe. Nairobi requires standard urban precautions: avoid walking in unfamiliar areas at night, use reputable taxis (Uber operates well). The coastline (Mombasa, Diani) is safe for tourists. Areas near the Somali border are not recommended and are not part of a standard safari itinerary. Check your country's travel advisory 2 weeks before travel.",
                },
                {
                  q: "What is the likelihood of seeing the Big Five?",
                  a: "In the Masai Mara during July-October: lion (very high), leopard (high, Leopard Gorge area), elephant (very high), buffalo (high). Rhino is best seen at Ol Pejeta Conservancy or Lake Nakuru. In Amboseli: elephant (exceptional density), cheetah (high), lion (moderate). Booking 3 nights in the Mara plus 2 in Amboseli plus 1 at Nakuru gives the best Big Five probability.",
                },
                {
                  q: "Do I need a visa for Kenya?",
                  a: "Yes — all nationalities require an e-Visa ($51) applied online at evisa.go.ke before travel. Visa on arrival was discontinued in 2024. Processing takes 48-72 hours typically. Apply at least 5 business days before departure. If combining with Uganda and Rwanda, the East Africa Tourist Visa ($100) allows multiple entries across all three countries for 90 days.",
                },
                {
                  q: "Can I climb Kilimanjaro from Kenya?",
                  a: "Kilimanjaro is in Tanzania, not Kenya, though it is visible from Amboseli. To climb, you cross the border at Namanga into Tanzania and travel to Moshi or Arusha. A Kenya safari combined with a Kilimanjaro climb makes an excellent 14-day East Africa itinerary — safari first, then cross for the mountain.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Kenya safari</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-kenya", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/kenya-safari-cost", label: "Safari cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-kenya", label: "How to get there", icon: "✈️" },
                { href: "/blog/kenya-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="kenya-safari-7-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Africa Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Tanzania Safari &mdash; 7 Day Guide", href: "/blog/tanzania-safari-7-days" },
                { label: "Rwanda Gorilla Trekking &mdash; 5 Days", href: "/blog/rwanda-gorilla-5-days" },
                { label: "Morocco &mdash; 7 Day Itinerary", href: "/blog/morocco-7-days" },
                { label: "South Africa Safari &mdash; 7 Days", href: "/blog/south-africa-safari-7-days" },
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
