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
const NEPAL_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Nepal Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "7-Day Itinerary" },
  { id: "landmarks",   emoji: "🏔️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Nepal 7-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Nepal in 7 Days — temples, Himalayan sunrises and jungle safaris&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/nepal-7-days"
        imageUrl="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80"
        description="Nepal in 7 Days: Kathmandu temples, Pokhara Himalayan sunrise, Chitwan wildlife safari — complete travel guide with budget breakdown from $25/day."
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
export default function NepalClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={NEPAL_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Nepal" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="nepal kathmandu everest base camp himalayas sunrise"
            fallback="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&q=80"
            alt="Nepal Himalayas sunrise with Annapurna peaks reflected in Phewa Lake Pokhara"
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
              <span className="text-white/70">Nepal 7 Days</span>
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
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Nepal in 7 Days:
                <em className="italic text-amber-300"> Kathmandu, Pokhara &amp; Himalayan Sunrise</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Ancient Hindu cremation ghats, the world&apos;s largest Buddhist stupa, a life-changing Himalayan sunrise over Annapurna, and rhinos in the wild — all for less per day than a coffee shop in London.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="16 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇳🇵 Nepal</span>
              <span>·</span>
              <span>🗓 7 Days</span>
              <span>·</span>
              <span>💰 From $25/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Nepal is the only country on earth where you can eat a two-dollar meal at dawn with the world&apos;s tallest peaks filling the horizon behind you. Seven days gets you ancient cremation ghats, the world&apos;s largest stupa, a Himalayan sunrise that redefines what mountains can look like, and one-horned rhinos in the wild.
            </p>
          </blockquote>

          {/* ── WHAT NEPAL ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Nepal Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Nepal is a landlocked country wedged between India and China that contains eight of the world&apos;s fourteen peaks above 8,000 metres, including Everest at 8,849m. But the country is far more than mountains. The Kathmandu Valley alone holds seven UNESCO World Heritage Sites within a 25-kilometre radius — a concentration of ancient Hindu and Buddhist architecture unmatched anywhere in South Asia.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Pashupatinath is the most sacred Hindu cremation site outside Varanasi. Boudhanath is the largest Buddhist stupa in the world. Swayambhunath has been a place of worship since the 5th century. And all three are in a single city — Kathmandu — where you can visit them in one day for under $15 in entry fees combined.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The 7-day Nepal circuit — Kathmandu, Pokhara, Chitwan — is one of the most rewarding week-long itineraries in Asia. You move from ancient temple cities to Himalayan lakeside towns to subtropical jungle in seven days, spending less per day than almost anywhere else in the world. The infrastructure is well-established, the people are genuinely welcoming, and the food — particularly dal bhat with unlimited refills for $2 — is outstanding.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Fly Into" value="KTM" />
              <StatCard icon="🌡️" label="Best Season" value="Oct–Nov" />
              <StatCard icon="🏔️" label="8,000m Peaks" value="8 of 14" />
              <StatCard icon="💰" label="Budget From" value="$25/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Nepal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Oct–Nov",
                  i: "☀️",
                  t: "Autumn — Best Season",
                  d: "Post-monsoon clear skies, 15–25°C in Kathmandu and Pokhara. Mountain visibility is at its absolute best — Annapurna, Machapuchare, and Dhaulagiri are razor-sharp against deep blue skies. Lush green landscape from recent rains. Peak trekking season. The single best window for a Nepal trip.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar–Apr",
                  i: "🌸",
                  t: "Spring — Second Best",
                  d: "Rhododendron forests in full bloom (Nepal&apos;s national flower). 18–28°C in the valley. Good mountain visibility before pre-monsoon haze builds. Slightly fewer tourists than autumn. Excellent for the Kathmandu–Pokhara–Chitwan circuit and shorter treks like Poon Hill.",
                  b: "Great alternative",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Dec–Feb",
                  i: "❄️",
                  t: "Winter — Cold but Clear",
                  d: "Mountain views can be spectacular on clear days, but Kathmandu drops to 2–10°C and high-altitude treks are closed by snow. Chitwan is pleasant (15–25°C). Budget hotels often lack heating. Good for low-altitude cultural trips if you pack warm layers.",
                  b: "Cultural trips only",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Jun–Sep",
                  i: "🌧️",
                  t: "Monsoon — Avoid for Mountains",
                  d: "Heavy rainfall across the country — Kathmandu and Pokhara receive 80% of annual rain in these months. Mountain views are obscured by cloud for weeks at a time. Trails become muddy and leeches are common. Chitwan floods. Not recommended for a 7-day trip unless you specifically want off-season rates and solitude.",
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

          {/* ── HOW TO REACH ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Nepal</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Nepal&apos;s only international airport is <strong className="font-medium">Tribhuvan International Airport (KTM)</strong> in Kathmandu. All international flights land here. Indian nationals can also enter visa-free via open land borders at Sunauli, Raxaul-Birgunj, Kakarbhitta, and Banbasa.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Direct flights from India",
                  d: "Delhi, Mumbai, Bangalore, Kolkata, and Varanasi all have direct flights to Kathmandu (KTM). Flight time 1.5–3 hours. Budget airlines (IndiGo, SpiceJet) from $80–$150 return. Nepal Airlines and Buddha Air also operate India–Kathmandu routes. The mountain views during descent into the Kathmandu Valley are extraordinary on clear days.",
                  b: "Most convenient",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🌍",
                  t: "International flights",
                  d: "Direct connections from Dubai, Doha, Bangkok, Singapore, Kuala Lumpur, Seoul, and several Chinese cities. Qatar Airways, Oman Air, Thai Smile, and Malaysia Airlines serve KTM. No direct flights from Europe or North America — connect via Delhi, Dubai, or Bangkok.",
                  b: "Via Gulf or Asia",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Overland from India",
                  d: "The Sunauli–Bhairahawa border (near Gorakhpur, UP) is the most popular land crossing. Buses from Varanasi and Gorakhpur connect to the border. From Bhairahawa, tourist buses run to Kathmandu (8–10 hrs, $8–12) and Pokhara (6–7 hrs, $6–10). Indian nationals need only a passport or Aadhaar — no visa required.",
                  b: "Budget option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "From Darjeeling / Sikkim",
                  d: "Cross at Kakarbhitta (near Siliguri) in eastern Nepal. From Kakarbhitta, direct buses run to Kathmandu (12–14 hrs) or fly from nearby Bhadrapur airport. Good option for combining a Nepal trip with Darjeeling or Sikkim.",
                  b: "East India route",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 7-Day Nepal Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The classic Kathmandu–Pokhara–Chitwan circuit. Each day card is expandable. This itinerary works at any budget level — the route is the same, only the accommodation and dining tier changes.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Kathmandu — Pashupatinath · Boudhanath · Thamel"
                cost="$15–$30"
                items={[
                  "Morning: Pashupatinath Temple (NPR 1,000 / ~$7.50 for foreigners, free for Hindus). The holiest Hindu site in Nepal and the most sacred cremation ghats outside Varanasi. Arrive at 6am for the first cremations of the day on the Bagmati River. The morning atmosphere — incense, bells, sadhus, river prayers — is one of the most visceral spiritual experiences in Asia.",
                  "Afternoon: Boudhanath Stupa (NPR 400 / ~$3). The largest stupa in the world — a vast white dome with the painted eyes of Buddha gazing in four directions. Walk the kora (circumambulation path) clockwise with Tibetan monks and pilgrims. At dusk, butter lamps are lit and monks begin evening chanting from the surrounding monasteries.",
                  "Evening: Thamel neighbourhood (free). Kathmandu&apos;s tourist district — labyrinthine alleys packed with gear shops, thangka painting studios, bookstores, and rooftop restaurants. Eat your first plate of momos (NPR 150–300 / $1–2) at a street stall. Try buff (buffalo) momos — Nepal&apos;s signature filling.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Kathmandu — Swayambhunath · Durbar Square · Patan"
                cost="$15–$25"
                items={[
                  "Early morning: Swayambhunath (Monkey Temple, NPR 200 / ~$1.50, 365 steps). Climb before 7am for panoramic Kathmandu Valley views and fewer crowds. The hilltop stupa is surrounded by shrines, prayer flags, and genuinely bold monkeys. The 360-degree view over the entire valley is the best aerial perspective of Kathmandu available without a flight.",
                  "Late morning: Kathmandu Durbar Square (UNESCO, NPR 1,000 / ~$7.50 for foreigners). Ancient royal palaces, the living goddess Kumari&apos;s palace, Taleju Temple, Kasthamandap. The square was damaged in the 2015 earthquake — ongoing restoration makes it a living document of heritage recovery. A guide (NPR 500–1,000) makes the history accessible.",
                  "Afternoon: Patan Durbar Square (5km south of Kathmandu, NPR 1,000 / ~$7.50). Outstanding bronze metalwork and the finest traditional Newari architecture in the valley. Visit the Patan Museum ($5) — arguably the best museum in Nepal, housed in a restored palace. Allow 2–3 hours for Patan.",
                  "Evening: Dal bhat dinner at a local restaurant ($2–4, unlimited refills of lentil soup, rice, curries, greens, and pickles). It is the best-value complete meal in Asia.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Bhaktapur Day Trip · Nagarkot Sunset"
                cost="$20–$35"
                items={[
                  "Morning: Bhaktapur (12km east of Kathmandu, NPR 1,800 / ~$13.50 entry). The most intact medieval Newari city in Nepal — better preserved than Kathmandu&apos;s Durbar Square. Pottery Square (watch potters working in the open), 55-Window Palace, Nyatapola Temple (the tallest five-tiered pagoda in Nepal), and the Peacock Window. Allow 4–5 hours.",
                  "Lunch: Juju Dhau (king curd) in Bhaktapur — Nepal&apos;s famous thick yoghurt, sold in clay pots for NPR 50–100. A Bhaktapur specialty you cannot get anywhere else in the same quality.",
                  "Late afternoon: Drive to Nagarkot (32km from Kathmandu, 1.5 hours by taxi NPR 3,000–4,000 round trip). The hilltop ridge at 2,175m gives a panoramic Himalayan view from Everest in the east to Dhaulagiri in the west. The sunset light on the white peaks is extraordinary. Stay overnight at a mountain-view lodge ($15–80) or return to Kathmandu.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Kathmandu to Pokhara · Phewa Lake"
                cost="$15–$130 (depending on transport)"
                items={[
                  "Travel: Kathmandu to Pokhara by tourist bus ($8–12, 6–7 hours through spectacular hill country) or domestic flight ($80–120, 25 minutes with mountain views). Budget travellers take the bus — the mountain highway scenery is an experience in itself. Book the flight if time matters.",
                  "Afternoon arrival: Pokhara lakeside at Phewa Lake (free). Rent a rowboat at sunset (NPR 500–800/hour) or sit at a lakeside restaurant watching the last light on Annapurna and Machapuchare (Fish Tail peak). The reflection of the Annapurna massif on the calm lake surface is one of Nepal&apos;s signature images.",
                  "Evening: Lakeside restaurants — dal bhat for NPR 300–500, momos for NPR 150–250, an Everest beer for NPR 300 ($2). Pokhara lakeside has among the lowest restaurant prices of any tourist destination in Asia.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Pokhara — Sarangkot Sunrise · World Peace Pagoda"
                cost="$10–$100 (depending on activities)"
                items={[
                  "5:00am: Sarangkot sunrise (taxi from lakeside NPR 800–1,000 / $6–7). The viewpoint at 1,592m gives an unobstructed panorama of Annapurna I (8,091m), Machapuchare (6,993m), Dhaulagiri, and Manaslu at sunrise. On a clear October or November morning, this is one of the most extraordinary mountain views on earth — accessible to any level of fitness with a short 20-minute walk from the road.",
                  "Morning return: World Peace Pagoda (45-minute hike from lakeside, free). The white Buddhist stupa above Phewa Lake with Annapurna as backdrop. Stunning panoramic views over the entire Pokhara valley.",
                  "Afternoon option: Paragliding tandem flight from Sarangkot ($80–100 for 30 minutes). Pokhara is consistently ranked among the world&apos;s top 5 paragliding destinations due to reliable thermals and the Himalayan backdrop. Or: Davis Falls (NPR 50) + Gupteshwor Cave (NPR 200) — a waterfall that disappears into an underground cavern with a Shiva shrine.",
                  "Alternative: Everest mountain flight from Pokhara or Kathmandu ($170–210, 1 hour, Buddha Air or Yeti Airlines). A scenic flight circling Everest, Lhotse, Makalu, and Kangchenjunga at 30,000 feet — the ultimate bucket-list activity for those not trekking to base camp.",
                ]}
              />
              <DayCard
                day="Day 6"
                title="Chitwan National Park — Jungle Safari"
                cost="$30–$60"
                items={[
                  "Travel: Pokhara to Chitwan by tourist bus (4–5 hours, $8–10) through the lush Terai lowlands. Most itineraries go direct Pokhara–Chitwan via Prithvi Highway. Arrive by early afternoon.",
                  "Afternoon: Jeep safari in Chitwan National Park ($25–50 for a 3-hour game drive in the park buffer zone). One-horned rhinoceroses (the most densely populated rhino habitat in Asia), spotted deer, wild boars, langur monkeys, and — with extraordinary luck — Bengal tigers. Afternoon drives between 3–6pm offer the best wildlife activity.",
                  "Evening: Tharu cultural show (NPR 500 / ~$3.75). The Tharu people are indigenous to the Terai — their stick dance and cultural programs run nightly at local cultural centres in Sauraha village. Authentic, unhurried, and genuinely interesting.",
                  "Accommodation: Budget jungle lodges in Sauraha from $10–25/night. Mid-range options with meals and activities included from $60–120/night (Barahi Jungle Lodge, Temple Tiger). The lodge package deals that include safari, canoe ride, and cultural show are the best value.",
                ]}
              />
              <DayCard
                day="Day 7"
                title="Chitwan Morning Safari · Return to Kathmandu"
                cost="$20–$45"
                items={[
                  "Early morning: Jungle walk with a naturalist guide ($10–15, 2–3 hours). Chitwan&apos;s 952km² of Terai forest is UNESCO-listed. The walks take you past crocodile-filled rivers, gharial breeding centres (rare, critically endangered fish-eating crocodiles), and remarkable birdlife (over 540 species recorded in the park).",
                  "Mid-morning: Canoe ride on the Rapti River (NPR 500–800 / $4–6). Float silently past mugger crocodiles sunning on sandbanks and gharials in the shallows. The birdlife at the water&apos;s edge — kingfishers, egrets, storks — is exceptional.",
                  "Afternoon: Return to Kathmandu by tourist bus (5–6 hours, $8–10) or domestic flight from Bharatpur airport ($80–100, 25 minutes). Last-minute shopping in Thamel — thangka paintings, pashmina shawls, singing bowls, and Nepali tea make excellent souvenirs.",
                  "Final dinner: Krishnarpan Restaurant at Dwarika&apos;s Hotel for a splurge (up to 22-course traditional Nepali dinner, $40–80/person) or a rooftop dal bhat in Thamel for $3. Both are perfect endings.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Nepal" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏔️ Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites across the 7-day circuit. Entry fees as of early 2026 — carry small NPR bills as change is often unavailable at temple ticket counters.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Pashupatinath Temple",
                  e: "NPR 1,000 (~$7.50) foreigners / Free for Hindus",
                  d: "The holiest Hindu temple in Nepal and the most important cremation site outside Varanasi. The golden-roofed pagoda on the banks of the Bagmati River has been the site of continuous Hindu worship for over 1,500 years. The cremation ghats, the sadhus, and the evening aarti ceremony are unforgettable.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Boudhanath Stupa",
                  e: "NPR 400 (~$3)",
                  d: "The largest Buddhist stupa in the world. The massive white dome with Buddha&apos;s painted eyes is the centre of Tibetan Buddhism in Nepal. The kora (circumambulation) at dusk — with butter lamps, incense, monks chanting, and prayer wheels spinning — is one of the most peaceful spiritual experiences in Asia.",
                  t: "Must see · 1.5–2 hrs",
                },
                {
                  n: "Swayambhunath (Monkey Temple)",
                  e: "NPR 200 (~$1.50)",
                  d: "A hilltop Buddhist stupa with origins in the 5th century. The 365-step climb is worth it for the panoramic Kathmandu Valley views alone. Monkeys are everywhere and genuinely bold — secure your belongings. Best visited at dawn for the light and the quiet.",
                  t: "Must see · 1–1.5 hrs",
                },
                {
                  n: "Kathmandu Durbar Square",
                  e: "NPR 1,000 (~$7.50) foreigners",
                  d: "The historic royal palace complex with ancient temples, the living goddess Kumari&apos;s residence, and the 2015 earthquake recovery in progress. The architecture spans centuries of Newari craftsmanship. A guide is recommended to understand the history and iconography.",
                  t: "Must see · 1.5–2 hrs",
                },
                {
                  n: "Bhaktapur",
                  e: "NPR 1,800 (~$13.50) foreigners",
                  d: "The best-preserved medieval Newari city in Nepal. Nyatapola Temple (five-tiered pagoda), 55-Window Palace, Pottery Square, and the famous Peacock Window. Better architecture and fewer crowds than Kathmandu Durbar Square. Allow a full day.",
                  t: "Full day · Must see",
                },
                {
                  n: "Sarangkot Viewpoint",
                  e: "Free",
                  d: "The premier Himalayan sunrise viewpoint in the Pokhara area. The panorama of Annapurna I, Machapuchare, Dhaulagiri, and Manaslu at dawn is widely considered one of the finest mountain views on earth. A 20-minute walk from the road. Best in October–November.",
                  t: "Sunrise · Life-changing",
                },
                {
                  n: "Chitwan National Park",
                  e: "$25–50 per safari activity",
                  d: "A 952km² UNESCO-listed subtropical wilderness in the Terai lowlands. Home to one-horned rhinoceros, Bengal tiger, gharial crocodile, and over 540 bird species. Jeep safaris, jungle walks, and canoe rides are the standard activities. The best wildlife viewing in Nepal.",
                  t: "Full day · Must see",
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
            title="Nepal — Temples, Peaks &amp; Jungle"
            subtitle="From Kathmandu&apos;s ancient stupas to the Himalayan sunrise over Annapurna."
            spots={[
              {
                name: "Boudhanath Stupa at Dusk",
                query: "boudhanath stupa kathmandu nepal buddhist temple evening",
                desc: "The world&apos;s largest Buddhist stupa — butter lamps and evening chanting as monks walk the kora at sunset.",
              },
              {
                name: "Annapurna Sunrise from Sarangkot",
                query: "annapurna himalaya sunrise sarangkot pokhara nepal mountain",
                desc: "The Annapurna massif and Machapuchare in amber dawn light from the Sarangkot viewpoint above Pokhara.",
              },
              {
                name: "Pashupatinath Cremation Ghats",
                query: "pashupatinath temple kathmandu nepal hindu cremation ghats",
                desc: "The sacred cremation ghats on the Bagmati River — the holiest Hindu site in Nepal.",
              },
              {
                name: "Phewa Lake Pokhara",
                query: "phewa lake pokhara nepal annapurna reflection boats",
                desc: "Phewa Lake with the Annapurna range reflected on its surface — Nepal&apos;s most photographed landscape.",
              },
              {
                name: "Chitwan One-Horned Rhinoceros",
                query: "chitwan national park nepal one horned rhinoceros wildlife",
                desc: "A one-horned rhinoceros in Chitwan National Park — the most densely populated rhino habitat in Asia.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Nepal is one of the cheapest countries in Asia to travel. The main costs are entry fees to temples and national parks. Accommodation, food, and local transport are extraordinarily affordable at every level.
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
                    ["🏨 Accommodation", "$5–12/night", "$40–70/night", "$200–500/night"],
                    ["🍽 Food", "$6–12/day", "$20–35/day", "$60–150/day"],
                    ["🚌 Transport", "$3–8/day", "$15–25/day", "$50–100/day"],
                    ["🎫 Activities & Entry", "$8–15/day", "$20–40/day", "$80–200/day"],
                    ["TOTAL (per person)", "$25–45/day", "$80–160/day", "$300–1,000+/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($25–45/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Guesthouses in Thamel and Lakeside ($5–12/night), dal bhat twice daily ($2–4 each), tourist buses between cities, walking tours. Nepal&apos;s budget infrastructure is excellent — backpackers eat well, sleep comfortably, and see everything.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($80–160/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique hotels ($40–70/night), domestic flights, private guides, cooking classes, and paragliding. The sweet spot for comfort without losing the Nepal atmosphere. Temple Tree Resort in Pokhara is an excellent mid-range base.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($300–1,000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Dwarika&apos;s Hotel in Kathmandu ($250–400/night), Pavilions Himalayas in Pokhara, Meghauli Serai in Chitwan. Private helicopter transfers, Everest mountain flights, and Krishnarpan&apos;s 22-course dinner. Nepal luxury is extraordinary value compared to Bhutan or the Maldives.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Nepal</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Each of the three destinations has well-established accommodation at every budget level. Kathmandu&apos;s Thamel district is the main tourist hub, Pokhara&apos;s lakeside strip has the mountain views, and Chitwan&apos;s Sauraha village is the safari base.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Dwarika&apos;s Hotel (Kathmandu)",
                  type: "Heritage luxury · Battisputali",
                  price: "From $250/night",
                  badge: "Nepal&apos;s finest",
                  desc: "The finest heritage hotel in Nepal, built from salvaged medieval Newari woodcarvings. Every room is a piece of architectural history. Courtyard dining by candlelight, Himalayan herb spa, and Krishnarpan Restaurant with up to 22-course traditional Nepali tasting menus.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Temple Tree Resort (Pokhara)",
                  type: "Boutique mid-range · Lakeside",
                  price: "From $60/night",
                  badge: "Best mid-range",
                  desc: "Beautifully designed lakeside boutique hotel with mountain-view rooms, garden restaurant, and excellent service. Walking distance to the lakefront, boat hire, and Pokhara&apos;s best restaurants. The standard recommendation for mid-range travellers in Pokhara.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Zostel Nepal (Kathmandu & Pokhara)",
                  type: "Hostel · Thamel & Lakeside",
                  price: "From $5/night (dorm)",
                  badge: "Best budget",
                  desc: "Clean, social, well-run hostel chain with locations in both Kathmandu Thamel and Pokhara Lakeside. Private rooms from $15/night. Good common areas, reliable Wi-Fi, and the kind of traveller community that makes solo backpacking easy.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Barahi Jungle Lodge (Chitwan)",
                  type: "Mid-range jungle lodge · Sauraha",
                  price: "From $80/night (inc. meals & safari)",
                  badge: "Best Chitwan value",
                  desc: "All-inclusive jungle lodge with safari drives, canoe rides, cultural shows, and three meals included in the rate. Set in gardens on the edge of the national park. The package deals make this the best value way to experience Chitwan without arranging activities separately.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Nepal</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Nepal&apos;s food scene is anchored by dal bhat — the national dish of lentil soup, rice, and seasonal curries with unlimited refills ($2–4). Momos (dumplings) are everywhere. Thamel in Kathmandu and Lakeside in Pokhara have hundreds of restaurants from budget to fine dining.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Krishnarpan at Dwarika&apos;s (Kathmandu)",
                  t: "Fine dining · Traditional Nepali tasting menu",
                  d: "Up to 22 courses of traditional Nepali regional recipes rarely seen in restaurants. Each course is served in handmade brass and copper vessels with explanation. The most celebrated Nepali dining experience in the country. $40–80/person. Reservations required.",
                  b: "Must visit (splurge)",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Thamel House Restaurant (Kathmandu)",
                  t: "Traditional Newari · Heritage building in Thamel",
                  d: "A 100-year-old restored Newari house serving traditional Nepali and Newari cuisine. The Newari set meal with beaten rice, buffalo curry, and fermented vegetables is excellent. $8–15/person. One of the few restaurants in Thamel serving authentic Nepali food rather than tourist-menu pasta.",
                  b: "Best authentic",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Momos on Freak Street (Kathmandu)",
                  t: "Street food · Freak Street area",
                  d: "The original backpacker street from the 1960s–70s still has some of Kathmandu&apos;s best momo shops. Buff (buffalo) momos steamed or fried with spicy tomato chutney — NPR 150–300 ($1–2) for a plate of 10. The area around New Road and Basantapur also has excellent street momos.",
                  b: "Best street food",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Busy Bee Cafe (Pokhara Lakeside)",
                  t: "Multi-cuisine · Lakeside strip",
                  d: "Reliable lakeside restaurant with mountain views from the terrace, good dal bhat (NPR 350–500), momos, and a broad menu. Everest beer NPR 300 ($2). The lakeside strip has dozens of similar restaurants — walk the strip and pick whichever has the best Annapurna view that evening.",
                  b: "Best lakeside views",
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
            destination="Nepal"
            hotels={[
              {
                name: "Dwarika&apos;s Hotel Kathmandu",
                type: "Heritage luxury · Salvaged medieval woodcarvings",
                price: "From $250/night",
                rating: "5",
                badge: "Nepal&apos;s finest",
                url: "https://www.booking.com/hotel/np/dwarikas.html?aid=2820480",
              },
              {
                name: "Temple Tree Resort Pokhara",
                type: "Boutique mid-range · Lakeside with mountain views",
                price: "From $60/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/np/temple-tree-resort-spa.html?aid=2820480",
              },
              {
                name: "Hotel Yak &amp; Yeti Kathmandu",
                type: "Heritage 5-star · Durbar Marg",
                price: "From $120/night",
                rating: "5",
                badge: "Classic luxury",
                url: "https://www.booking.com/hotel/np/yak-yeti.html?aid=2820480",
              },
              {
                name: "Meghauli Serai (Taj) Chitwan",
                type: "Luxury jungle lodge · Rapti River",
                price: "From $300/night",
                rating: "5",
                badge: "Best Chitwan",
                url: "https://www.booking.com/hotel/np/meghauli-serai-a-taj-safari-chitwan.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Kathmandu Valley Temples Full Day Tour",
                duration: "8 hrs",
                price: "From $50/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=kathmandu+valley+temple+tour&partner_id=PSZA5UI",
              },
              {
                name: "Pokhara Paragliding Tandem Flight",
                duration: "30 min",
                price: "From $80/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=pokhara+paragliding&partner_id=PSZA5UI",
              },
              {
                name: "Chitwan National Park Jungle Safari",
                duration: "Full day",
                price: "From $25/person",
                badge: "Wildlife",
                url: "https://www.getyourguide.com/s/?q=chitwan+national+park+safari&partner_id=PSZA5UI",
              },
              {
                name: "Everest Scenic Mountain Flight",
                duration: "1 hr",
                price: "From $200/person",
                url: "https://www.getyourguide.com/s/?q=everest+mountain+flight+kathmandu&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🏙️",
                  title: "Skipping Bhaktapur",
                  desc: "Most travellers spend all their Kathmandu time in Thamel and the main Durbar Square. Bhaktapur — 12km east — is the most authentic medieval Newari city in existence, better preserved than Kathmandu itself. The NPR 1,800 entry fee keeps crowds lower. Allow a full day.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🌄",
                  title: "Missing Sarangkot Sunrise",
                  desc: "Every traveller who goes to Pokhara and sleeps past 5am regrets it for years. The Sarangkot sunrise over the Annapurna arc is one of the truly life-changing travel experiences in Asia. It requires a 5am taxi ($6) and 20-minute walk. It is free. It is extraordinary. Clear mornings are most likely in Oct–Nov and Mar–Apr.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🍛",
                  title: "Not Eating Dal Bhat",
                  desc: "Dal bhat is Nepal&apos;s national dish and the best travel meal value in the world — lentil soup, rice, seasonal curries, pickles, and unlimited refills for $2–4. Travellers who stick to Western tourist-menu food in Thamel spend 3x more, eat worse, and miss the most important culinary experience Nepal offers.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "⛰️",
                  title: "Attempting Everest Base Camp in 7 Days",
                  desc: "EBC trek takes 14–16 days minimum from Kathmandu, costs $550+ in permits alone, and altitude acclimatisation cannot be rushed. People who try to compress this to a week risk Acute Mountain Sickness, which can be fatal. A 7-day trip can include an Everest mountain flight ($200) or Sarangkot sunrise — both extraordinary alternatives.",
                  color: "bg-pink-50 border-pink-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Nepal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Sarangkot at 5am — $6 that changes your life",
                  desc: "Hire a taxi from Pokhara Lakeside at 4:45–5:00am (NPR 800–1,000 one way). Walk 20 minutes to the viewpoint. The Annapurna massif at sunrise — Annapurna I, II, III, IV, Gangapurna, Machapuchare, Dhaulagiri — fills the entire northern horizon in amber light. Clear skies almost guaranteed in Oct–Nov and Mar–Apr.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🕯️",
                  title: "Boudhanath Kora at Dusk",
                  desc: "The circumambulation around Boudhanath Stupa at dusk is one of the most peaceful spiritual experiences in Asia. Tibetan monks spinning prayer wheels, butter lamps lit around the base, incense rising from every shrine, and chanting from surrounding monasteries. Walk clockwise with the pilgrims. NPR 400 entry, stays open until dark.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "📋",
                  title: "TIMS Card for Any Trekking",
                  desc: "The Trekkers Information Management System card (NPR 2,000 / ~$15) is required for all trekking outside the Kathmandu Valley. Get it at the Nepal Tourism Board office in Kathmandu or Pokhara — bring two passport photos. Even the short Poon Hill trek requires TIMS plus the Annapurna Conservation Area Permit (NPR 3,000).",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "💵",
                  title: "Carry NPR Cash Everywhere",
                  desc: "Credit cards are accepted at upscale hotels and some Thamel restaurants, but most of Nepal runs on cash. ATMs in Kathmandu and Pokhara dispense NPR (max NPR 35,000 per withdrawal). Carry small bills — temple ticket counters and local shops rarely have change for NPR 1,000 notes.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🧥",
                  title: "Layer for Altitude Shifts",
                  desc: "Nepal&apos;s 7-day circuit spans 200m (Chitwan) to 2,175m (Nagarkot). Temperature can vary by 15–20°C between destinations on the same day. Pack layers: a warm fleece for Nagarkot sunrise, light clothes for Chitwan jungle. Pokhara and Kathmandu are mild in Oct–Nov (15–25°C).",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🙏",
                  title: "Temple Etiquette Matters",
                  desc: "Remove shoes before entering any Hindu or Buddhist temple. Walk clockwise around stupas and shrines. Ask before photographing cremation ceremonies at Pashupatinath. Dress conservatively (cover shoulders and knees) at all religious sites. These are active places of worship, not tourist attractions.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Nepal" />

          {/* Combine With */}
          <CombineWith currentSlug="nepal-7-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Do Indians need a visa for Nepal?",
                  a: "No. Indian citizens have unconditional visa-free access to Nepal with no prior application, no fee, and no time limit. Simply carry your Indian passport or Aadhaar card. This applies at all airports and land border crossings including Sunauli, Raxaul-Birgunj, Kakarbhitta, and Banbasa.",
                },
                {
                  q: "What is the best time of year for Himalayan views in Nepal?",
                  a: "October–November is the best window: post-monsoon clear skies, excellent mountain visibility, lush green landscape, and temperatures ideal for sightseeing (15–25°C in the valley). March–April is the second best period with spring rhododendron blooms. June–September monsoon season obscures mountain views for weeks at a time.",
                },
                {
                  q: "How much does the Everest Base Camp trek cost?",
                  a: "The classic EBC trek takes 12–16 days from Lukla. Costs include: Kathmandu–Lukla flights ($180–220 return), Sagarmatha National Park permit (NPR 3,000), TIMS card (NPR 2,000), guide ($30–50/day), teahouse accommodation ($5–15/night), and food ($15–25/day at altitude). Total: $800–1,500+ excluding international flights. It cannot be safely done in less than 12 days due to altitude acclimatisation.",
                },
                {
                  q: "Kathmandu or Pokhara — which is better?",
                  a: "They serve completely different purposes and a 7-day itinerary should include both. Kathmandu (3 nights) is for ancient temples, UNESCO heritage, and culture — Pashupatinath, Boudhanath, Bhaktapur. Pokhara (2 nights) is for mountain views, lakes, and adventure — the Sarangkot sunrise, paragliding, Phewa Lake. The three-destination circuit including Chitwan is the established route for good reason.",
                },
                {
                  q: "Is Nepal safe for solo travellers?",
                  a: "Nepal is one of the safest countries in Asia for solo travel. The tourist infrastructure in Kathmandu, Pokhara, and Chitwan is well-established. Standard precautions apply: use registered taxis, avoid unlit areas at night, keep valuables secured. For trekking, hiring a guide is recommended for safety and navigation. The backpacker community is large and welcoming, particularly in Thamel and Pokhara Lakeside.",
                },
                {
                  q: "Nepal vs Bhutan — what is the difference for travellers?",
                  a: "The cost difference is enormous. Nepal has no tourist fee — you pay standard visa costs and your own expenses from $25/day. Bhutan charges a mandatory Sustainable Development Fee of $100/person/day plus guide and accommodation fees. Nepal offers more geographic variety, better trekking diversity, and is accessible on any budget. Bhutan is more exclusive and controlled. Both are extraordinary — Nepal is for independent budget-to-luxury travel, Bhutan is for curated premium experiences.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Nepal trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-nepal", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/nepal-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-nepal", label: "How to get there", icon: "✈️" },
                { href: "/blog/nepal-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="nepal-7-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Sri Lanka 7 Days — Temples &amp; Beaches", href: "/blog/sri-lanka-7-days" },
                { label: "Bhutan 5 Days — Himalayan Kingdom", href: "/blog/bhutan-5-days" },
                { label: "India Rajasthan 7 Days — Forts &amp; Palaces", href: "/blog/india-rajasthan-7-days" },
                { label: "Maldives 5 Days — Islands &amp; Reefs", href: "/blog/maldives-5-days" },
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
