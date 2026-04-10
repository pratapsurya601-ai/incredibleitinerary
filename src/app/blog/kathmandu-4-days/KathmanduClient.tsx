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
const KATHMANDU_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Kathmandu Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",  emoji: "🛕",  label: "Landmark Guide" },
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
          href: `mailto:?subject=Kathmandu 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Kathmandu in 4 Days — Pashupatinath, Boudhanath, and the Himalayan skyline&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/kathmandu-4-days"
        imageUrl="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80"
        description="Kathmandu in 4 Days: Pashupatinath, Boudhanath Stupa, Swayambhunath, Durbar Squares, Himalayan views, dal bhat and momos — complete travel guide with budget breakdown."
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
export default function KathmanduClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KATHMANDU_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Kathmandu" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="kathmandu nepal boudhanath stupa himalaya prayer flags tibet"
            fallback="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&q=80"
            alt="Boudhanath Stupa rising above Kathmandu with prayer flags and Himalayan peaks in the distance"
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
              <span className="text-white/70">Kathmandu 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  7 UNESCO World Heritage Sites
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Kathmandu in 4 Days:
                <em className="italic text-amber-300"> Temples, Stupas &amp; the Himalayan Skyline</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Pashupatinath&apos;s burning ghats at dawn, Boudhanath prayer wheels at sunset, medieval Durbar Squares, dal bhat with unlimited refills, and momos from a Patan street stall. The complete 4-day guide.
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
              <span>🛕 Nepal</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From $25/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Kathmandu is one of the last cities on earth where you can stand in a 2,000-year-old temple courtyard, watch cremation fires burn at a sacred river at dawn, and then sit in a trekking-gear cafe sipping masala tea before a flight toward Everest. The valley holds seven UNESCO World Heritage Sites within a 20 km radius. Nothing else on earth is quite like it.
            </p>
          </blockquote>

          {/* ── WHAT KATHMANDU ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Kathmandu Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Kathmandu Valley has been continuously inhabited for at least 2,000 years and was a critical node on the ancient trade routes between India and Tibet. The Newari civilization that built it created some of the finest religious architecture in Asia — the pagoda temple form that spread across East and Southeast Asia is believed to have originated here. The city you walk through today has been layered up over centuries of Hindu and Buddhist patronage, earthquake, restoration, and constant ritual use.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The 2015 earthquake damaged or destroyed hundreds of heritage structures, and reconstruction continues. Some temples are scaffolded. Some Durbar Square buildings remain closed. This is part of Kathmandu now — a city actively rebuilding its medieval identity, which makes visiting in 2026 feel meaningful rather than purely touristic.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Thamel, the tourist district, is chaotic, colourful, and unavoidable. It&apos;s also genuinely useful — cheap guesthouses, licensed trekking gear shops, money changers, and every kind of restaurant within a 500-metre radius. Use it as a base. Don&apos;t mistake it for Kathmandu.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="KTM" />
              <StatCard icon="🌡️" label="Best Season" value="Oct–Nov / Mar–Apr" />
              <StatCard icon="🛕" label="UNESCO Sites" value="7 in Valley" />
              <StatCard icon="💰" label="Budget From" value="$25/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Kathmandu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Oct–Nov",
                  i: "☀️",
                  t: "Post-Monsoon — Best Season",
                  d: "15–25°C in the valley, crystal-clear Himalayan skies washed clean by months of rain. Mountain flights and helicopter trips to Everest Base Camp have the highest success rate. October is also the Dashain and Tihar festival season — the most colourful time to visit. The absolute peak window.",
                  b: "Strongly recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar–Apr",
                  i: "🌸",
                  t: "Spring — Second Best",
                  d: "12–22°C and generally clear skies before pre-monsoon haze builds. Rhododendron forests bloom across the valley ridges. Trekking season peaks and mountain flights are still reliable. A strong alternative to autumn if you can&apos;t travel October–November.",
                  b: "Recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Dec–Feb",
                  i: "❄️",
                  t: "Winter — Clear but Cold",
                  d: "2–14°C, cold nights in the valley and freezing above 2,000m. Mountain views are exceptional — the best photography light of the year. Far fewer tourists than autumn. Thamel stays warm with heaters; temples are breezy. Pack layers. A good choice for those who prefer quiet travel.",
                  b: "Good for views",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Jun–Aug",
                  i: "🌧️",
                  t: "Monsoon — Avoid for Flights",
                  d: "Kathmandu receives 80% of its annual rainfall June through August. Mountain flights are cancelled most days, trekking trails become leech-infested mud, and Himalayan views are hidden behind clouds for weeks. Heritage sites get greener and are less crowded — fine for temple-only visits, poor for mountain experiences.",
                  b: "Not for mountain flights",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Kathmandu</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Kathmandu&apos;s <strong className="font-medium">Tribhuvan International Airport (KTM)</strong> is located 6 km east of Thamel. The official prepaid taxi counter in arrivals charges <strong className="font-medium">NPR 700–900 ($5–7)</strong> to Thamel — use this counter to avoid the touts who approach before you exit arrivals.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "By Air (all international visitors)",
                  d: "Kathmandu has direct flights from Delhi (1 hr 45 min, ~$70–140 return), Mumbai (3 hrs, ~$120–200), Kolkata (1 hr 10 min, ~$60–130), and major hubs including Dubai, Doha, Singapore, and Bangkok. IndiGo, Air India, SpiceJet, Nepal Airlines, and Buddha Air operate the India routes. Book at least 3 weeks ahead for competitive fares.",
                  b: "Only option from abroad",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "Overland from India — Sunauli Border (Gorakhpur)",
                  d: "Train from Delhi or Varanasi to Gorakhpur (6–12 hrs), then a shared taxi or bus to Sunauli border crossing (~3 hrs, ₹150–₹300). Cross on foot, then board a direct bus to Kathmandu (8–9 hrs, NPR 1,000–1,500). Total Delhi–Kathmandu: 20–24 hrs. Cheaper but very long. Favoured by backpackers and travellers with no visa rush.",
                  b: "Budget overland route",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Overland from India — Raxaul–Birgunj Border",
                  d: "Train to Raxaul from Patna or Varanasi (5–7 hrs), cross into Birgunj on foot, then a 5–6 hr bus to Kathmandu (NPR 600–1,000). Less used than Sunauli but faster from Patna or eastern UP. Good for travellers combining a Bodh Gaya or Varanasi trip with Kathmandu.",
                  b: "Alternative border",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Airport to Thamel",
                  d: "Prepaid taxi counter inside arrivals: NPR 700–900 (~$5–7), journey 20–40 mins depending on traffic. Ride-hailing apps Pathao and InDrive are available once you have a local SIM (Ncell or Nepal Telecom, available in arrivals, ~NPR 200 for 10 GB data). Avoid touts in the arrivals hall.",
                  b: "20–40 min from airport",
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

          {/* ── 4-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Kathmandu Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary moves from the most atmospheric dawn sites first to the medieval cities of Patan and Bhaktapur on Day 3. Day 4 adds the Nagarkot Himalayan sunrise option. Adjust for your budget tier using the notes inside each card.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Pashupatinath at Dawn · Boudhanath · Thamel Orientation"
                cost="$18–25 (entry fees, meals, local transport)"
                items={[
                  "Arrive Kathmandu and check in to a Thamel guesthouse. Budget options (Zostel Kathmandu, various hostels on Paknajol Road) run $8–15/night for a dorm or basic private room. Mid-range hotels in Thamel with hot water and WiFi from $30–60.",
                  "07:00 — Pashupatinath Temple at dawn (entry NPR 1,000 / ~$7.50 for non-Hindus — Indian nationals enter free). Arrive before 8am to see the Bagmati River ghats at their most atmospheric: cremation fires burning continuously on the stone platforms, orange-robed sadhus meditating on the steps, priests chanting the morning puja inside the inner sanctum that non-Hindus approach from the east bank. This is one of the most intense religious experiences in Asia.",
                  "The Pashupatinath complex is far larger than the main ghat area — explore the Mrigasthali deer park, the Gorakhnath temple complex behind the main shrine, and the rows of Shiva lingams along the riverbank. Budget 2 hours minimum.",
                  "10:00 — Walk 20 minutes or take a shared tempo (NPR 20) to Boudhanath Stupa (entry NPR 400 / ~$3). One of the world&apos;s largest Buddhist stupas, the 36-metre-high mandala base is circled clockwise by Tibetan pilgrims spinning copper prayer wheels. Climb the steps of any surrounding monastery (most allow visitors for a small donation) for a rooftop view of the stupa&apos;s painted Buddha eyes looking across the valley.",
                  "13:00 — Lunch at a Tibetan cafe around Boudhanath circuit: a bowl of thukpa noodle soup with yak butter tea costs NPR 300–400 (~$2.50–3). The area has dozens of Tibetan-owned restaurants that also serve excellent momos and tingmo (steamed bread).",
                  "15:30 — Share a taxi back to Thamel (NPR 200–300) and orient yourself: Thamel Marg is the main street with trekking gear shops, the Garden of Dreams entrance is nearby, and the old bazaar district of Ason is a 15-minute walk east — plan to explore it in the morning light on Day 2.",
                  "19:00 — Dinner in Thamel: a full dal bhat set (lentil soup, rice, curried vegetables, pickle, papad) at a local restaurant costs NPR 350–500 (~$3–4) and comes with unlimited refills. This is Nepal&apos;s national dish and the best calories-per-dollar meal in the country.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Swayambhunath · Kathmandu Durbar Square · Ason Bazaar"
                cost="$20–28 (entry fees, meals, transport)"
                items={[
                  "07:30 — Swayambhunath Monkey Temple at sunrise (entry NPR 200 / ~$1.50): climb 365 steps to the hilltop stupa where resident rhesus macaques roam freely among the shrines and prayer flags. The four sides of the central stupa tower carry the famous all-seeing Buddha eyes, each facing a cardinal direction over the valley. At sunrise the light on the painted eyes is exceptional and the crowd is minimal.",
                  "The Swayambhunath complex is genuinely ancient — the hilltop has been a Buddhist pilgrimage site since at least the 5th century AD, though the current stupa form dates to later rebuilds. Walk the full circuit around the stupa base: Tibetan monasteries, a collection of small Hindu shrines, and a hilltop view of Kathmandu spreading below in all directions. Budget 1.5 hours.",
                  "10:00 — Kathmandu Durbar Square (entry NPR 1,500 / ~$11 for foreigners, Indian nationals free) — the historic palace complex of the Malla and Shah kings. Key sites: Kumari Chowk (residence of the living goddess Kumari — audience times 9–11am on the ornate carved balcony), the reconstructed Kasthamandap pavilion (the building that gave Kathmandu its name), and the Taleju Temple. Note: the 2015 earthquake caused significant damage; some structures are under restoration.",
                  "12:30 — Dal bhat at Thakali Kitchen near New Road (NPR 350–450 / ~$3): one of the best budget Thakali sets in the old city; queue with office workers and students at this unpretentious canteen where the food is genuinely excellent.",
                  "14:30 — Walk the old bazaars of Ason Chowk and Indrachowk: brass idol shops, spice merchants, bead vendors, and Newari jewellery stalls line streets that have functioned as trade routes since the 14th century. The smell of incense and cooking oil, the vendor calls, and the medieval scale of the alleys make this one of the most atmospheric urban walks in South Asia.",
                  "18:30 — Rooftop sunset drinks at a Thamel guesthouse terrace. A bottle of local Everest or Gorkha beer costs NPR 200–300 (~$1.50–2.50). On clear October and November evenings the silhouette of the Himalayan foothills is visible from higher vantage points in Thamel.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Patan Durbar Square · Bhaktapur · Juju Dhau"
                cost="$25–35 (entry fees, meals, transport)"
                items={[
                  "09:00 — Taxi to Patan (NPR 400–500 / ~$3) for Patan Durbar Square (entry NPR 1,000 / ~$7.50 for foreigners). Patan — the second-largest city in the valley — contains arguably the finest collection of Newari religious architecture anywhere. The Krishna Mandir temple, built entirely of stone in 1637, has 21 roof pinnacles and a surrounding courtyard of carved stone deities. The adjacent Patan Museum (inside the royal palace complex, entry included) holds the world&apos;s finest collection of Nepali and Tibetan bronze sculptures.",
                  "The Patan Durbar Square is far less damaged by the 2015 earthquake than Kathmandu&apos;s own Durbar Square. The proportions of the courtyard — lined with temples, a royal fountain, and carved wooden balconies on the palace — are perfect. Budget 2 hours for the square and museum together.",
                  "12:00 — Lunch at Cafe Swotha adjacent to Patan Durbar Square (NPR 300–450): steamed beef and vegetable momos for $2.50–3, one of the best courtyard lunch settings in the valley. The Mahakali restaurant nearby offers a full Newari set lunch for NPR 600.",
                  "14:00 — Shared bus or taxi to Bhaktapur (NPR 200–300 / ~$1.50–2.50 by share, NPR 800 by private taxi): a 30-minute drive through the valley to Nepal&apos;s best-preserved medieval city. Bhaktapur Durbar Square entry NPR 1,500 / ~$11 — the most complained-about fee in the valley, but it funds a city that has been maintained better than anywhere else in Asia. The 55-Window Palace, the Golden Gate (Sungdhoka), and the Nyatapola pagoda — a 5-tiered structure built in 1702 and undamaged by the 2015 earthquake — are all within a 10-minute walk.",
                  "17:00 — Juju dhau (king curd) in Bhaktapur from a clay pot vendor near Taumadhi Square (NPR 100–150 / ~$0.80): the richest, thickest curd in Nepal, set in fired clay pots and sold fresh each day. A Bhaktapur speciality for centuries and unlike any dairy product you will taste elsewhere in the world.",
                  "19:00 — Return to Kathmandu by local bus (NPR 60–80 / ~$0.50) and dinner in Thamel or Bouddha. OR2K restaurant in Thamel (NPR 800–1,200 per person) serves Middle Eastern and Nepali fusion on a cushioned rooftop terrace — one of Kathmandu&apos;s most reliable mid-range dinner options.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Nagarkot Sunrise · Garden of Dreams · Departure"
                cost="$22–30 (Nagarkot trip, meals, airport taxi)"
                items={[
                  "05:00 — Pre-arranged jeep to Nagarkot hill station (NPR 2,000–2,500 / ~$15 round trip shared, or NPR 5,000–6,000 private): a 32 km drive east of Kathmandu to a ridge at 2,175m altitude. On clear October–November mornings the Himalayan panorama from Nagarkot is extraordinary — Everest (8,849m) is visible 130 km away, along with Cho Oyu, Lhotse, Makalu, Langtang, and the Annapurna range. The mountain silhouette appears in the pre-dawn darkness and gradually turns gold at sunrise.",
                  "08:30 — Breakfast at Nagarkot hilltop cafes (NPR 250–400): Tibetan bread with honey and black tea, or a full omelette breakfast at one of the guesthouses that serve pre-dawn arrivals. Nagarkot has several simple hotels for those who want to overnight for the sunrise without the pre-dawn drive.",
                  "11:00 — Return to Kathmandu and visit the Garden of Dreams (Swapna Bagaicha) near Thamel (entry NPR 400 / ~$3): a restored 1920s Edwardian pleasure garden built by Field Marshal Kaiser Shamsher Rana, with six pavilions, fountains, and carefully maintained lawns. In the middle of a chaotic city, it is surreally peaceful — the best 45-minute quiet stop in Kathmandu before departure.",
                  "13:00 — Last momo lunch at a Thamel street stall (NPR 150–200 / ~$1.50 for 8 fried momos with chilli dipping sauce): fried momos are the superior version, crisped in oil after steaming. Find any stall with a steamer in the window and a queue of locals.",
                  "14:30 — Checkout and taxi to Tribhuvan International Airport (NPR 700–900 / ~$5–7 from Thamel, 20–40 mins). Allow extra time for traffic on the Arniko Highway during afternoon hours. The airport is small but functional; allow 2.5 hrs for international departures.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Kathmandu" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🛕 Kathmandu Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees as of early 2026. The UNESCO multi-site pass (~$35) covers all seven UNESCO sites for a week and saves money versus buying individually if you plan to visit Kathmandu Durbar, Patan, Bhaktapur, Pashupatinath, Boudhanath, Swayambhunath, and Changu Narayan separately.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Pashupatinath Temple",
                  e: "NPR 1,000 (~$7.50) — foreigners; free — Indian nationals",
                  d: "The holiest Hindu temple in Nepal and one of the most sacred Shaivite sites in the world. Non-Hindus view the main sanctum and ghats from the east bank of the Bagmati. The dawn cremation rituals and morning puja are the most vivid 90 minutes you will spend in Kathmandu. Arrive before 7:30am.",
                  t: "Must see · Dawn visit · 2 hrs",
                },
                {
                  n: "Boudhanath Stupa",
                  e: "NPR 400 (~$3)",
                  d: "One of the world&apos;s largest Buddhist stupas, the centre of Tibetan Buddhism outside Tibet itself. The 36-metre stupa sits on a massive mandala base circled by pilgrims. The surrounding monastery circuit has more than 50 Tibetan Buddhist monasteries — any will allow quiet visitors for a small donation. Best at dawn and at dusk when butter lamps are lit.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Swayambhunath (Monkey Temple)",
                  e: "NPR 200 (~$1.50)",
                  d: "A hilltop stupa dating to the 5th century AD, reached by 365 steps lined with prayer wheels, Buddhas, and resident monkeys. The four painted Buddha eyes on the stupa tower are the iconic image of Kathmandu. Sunrise light on the eyes is exceptional. The hilltop also has a Tibetan monastery, Hindu shrines, and panoramic valley views.",
                  t: "Must see · Sunrise · 1.5 hrs",
                },
                {
                  n: "Patan Durbar Square",
                  e: "NPR 1,000 (~$7.50)",
                  d: "The finest intact Durbar Square in the valley — less earthquake damage than Kathmandu&apos;s own square. The 17th-century Krishna Mandir, the Vishwanath Temple, the Patan Museum (world&apos;s finest collection of Nepali bronze deities), and the carved royal palace courtyards. Budget 2.5 hours including the museum.",
                  t: "Must see · 2.5 hrs",
                },
                {
                  n: "Bhaktapur Durbar Square",
                  e: "NPR 1,500 (~$11)",
                  d: "Nepal&apos;s best-preserved medieval city — a living museum of Newari architecture with the 55-Window Palace, the Golden Gate, and the Nyatapola pagoda (5 tiers, built 1702, survived the 2015 earthquake intact). The pottery square and traditional bread bakeries give Bhaktapur a lived-in feel absent from the other Durbar Squares.",
                  t: "Must see · Half day",
                },
                {
                  n: "Kathmandu Durbar Square",
                  e: "NPR 1,500 (~$11) — foreigners; free — Indian nationals",
                  d: "The historic palace square of the Malla kings, now partially under restoration after 2015. The Kumari Bahal (living goddess residence), Hanuman Dhoka palace museum, and Kasthamandap pavilion are the anchors. The earthquake damage is visible but does not diminish the power of the setting. Best visited on Day 2 after Swayambhunath.",
                  t: "2 hrs",
                },
                {
                  n: "Changu Narayan Temple",
                  e: "NPR 300 (~$2.50)",
                  d: "Nepal&apos;s oldest temple, dating to at least the 4th century AD, perched on a hilltop 12 km north of Bhaktapur. The Licchavi-era stone sculptures in the courtyard — a 5th-century Vishnu Vikrantha, a Garuda in flight — are among the finest stone carvings in South Asia. Easily combined with Bhaktapur on Day 3.",
                  t: "Underrated · 1 hr",
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
            title="Kathmandu — Temples, Stupas &amp; the Himalayan Valley"
            subtitle="Seven UNESCO World Heritage Sites within a 20 km radius."
            spots={[
              {
                name: "Boudhanath Stupa",
                query: "boudhanath stupa kathmandu nepal prayer flags tibetan buddhism",
                desc: "The all-seeing Buddha eyes of Boudhanath — one of the world&apos;s largest stupas, the spiritual heart of Tibetan Buddhism outside Tibet.",
              },
              {
                name: "Pashupatinath Ghats",
                query: "pashupatinath temple ghats bagmati river kathmandu nepal dawn cremation",
                desc: "The burning ghats of Pashupatinath at dawn — one of the most sacred and visually intense experiences in all of South Asia.",
              },
              {
                name: "Swayambhunath Sunrise",
                query: "swayambhunath monkey temple kathmandu nepal stupa sunrise hilltop",
                desc: "The 365-step hilltop stupa at sunrise, with the Kathmandu Valley spreading below and the painted Buddha eyes facing every horizon.",
              },
              {
                name: "Bhaktapur Nyatapola Pagoda",
                query: "bhaktapur nyatapola pagoda temple nepal medieval city durbar square",
                desc: "The five-tiered Nyatapola pagoda rising above Bhaktapur&apos;s Taumadhi Square — built in 1702 and one of Nepal&apos;s finest medieval structures.",
              },
              {
                name: "Patan Durbar Square",
                query: "patan durbar square nepal newari architecture krishna mandir temple",
                desc: "The finest intact Durbar Square in the Kathmandu Valley — the 17th-century Krishna Mandir temple and royal palace courtyards of Lalitpur.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Kathmandu offers genuinely excellent value at the budget level — dal bhat with unlimited refills for $3, guesthouses for $8, and a full day of temple visits for $10–15 in entry fees. The costs jump significantly if you add a mountain flight ($179) or helicopter to Everest Base Camp ($950+).
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
                    ["🏨 Accommodation (4 nights)", "$32–60", "$160–280", "$720–1,400"],
                    ["🍽️ Food (4 days)", "$24–40", "$80–140", "$240–480"],
                    ["🚕 Transport (airport + local)", "$8–20", "$40–80", "$80–160"],
                    ["🛕 Entry fees (4 days)", "$40–55", "$40–55", "$40–55"],
                    ["🗺️ Guided tours / activities", "$0", "$80–160", "$600–1,200"],
                    ["TOTAL (per person, 4 days)", "$100–175", "$400–715", "$1,680–3,295"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($25–40/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay at Zostel Kathmandu or a Thamel guesthouse (dorm $8–10, private $15–20), eat dal bhat and momos at local restaurants, use shared tempos and local buses. The full UNESCO site circuit costs $40–55 in entry fees regardless of tier.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($80–130/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Hotel Yak &amp; Yeti or similar 4-star ($100–180/night), guided half-day tours, dinner at OR2K or Roadhouse Cafe, private taxi for Bhaktapur day trip. The cooking class ($35) and Nagarkot sunrise jeep ($15) both excellent additions at this tier.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($250–500/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Dwarika&apos;s Hotel ($300–500/night) or Hyatt Regency Kathmandu ($200–350), private helicopter to Everest Base Camp ($950+ shared), Krishnarpan 22-course royal banquet ($45), and private cultural guides for every site.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Kathmandu</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Thamel is the default base for most visitors — central, safe, and dense with guesthouses, restaurants, and gear shops. The Bouddha area (near Boudhanath Stupa) is quieter and more atmospheric for those who prioritise the Buddhist circuit. Luxury heritage hotels are scattered across the old city.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Dwarika&apos;s Hotel",
                  type: "Heritage luxury · Old city / Battisputali",
                  price: "From $300/night",
                  badge: "Most unique",
                  desc: "Kathmandu&apos;s most celebrated heritage property, built entirely around rescued Newari wood-carved architectural elements from the 14th–19th centuries. Each room is individually designed with original carved windows, doors, and roof struts from medieval buildings. The Krishnarpan restaurant is Nepal&apos;s finest. A genuinely extraordinary place to stay.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hotel Yak &amp; Yeti",
                  type: "Luxury 5-star · Durbar Marg",
                  price: "From $150/night",
                  badge: "Best location",
                  desc: "Kathmandu&apos;s grandest classic hotel, built in a restored Rana palace with modern wing additions. 270 rooms, multiple restaurants, pool, spa, and the central location on Durbar Marg makes it the most convenient luxury base for reaching all heritage sites. A Kathmandu institution since 1961.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Hyatt Regency Kathmandu",
                  type: "Luxury 5-star · Bouddha area",
                  price: "From $180/night",
                  badge: "Best for Bouddha circuit",
                  desc: "Set on 37 acres in the Bouddha neighbourhood, the Hyatt is the closest luxury hotel to Boudhanath Stupa. The Kantipur Temple House annexe preserves original Newari architecture within a heritage wing. Pool, spa, and the best hotel bar view in Kathmandu from the rooftop.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Zostel Kathmandu",
                  type: "Hostel · Thamel",
                  price: "From $8/night (dorm) · $20 (private)",
                  badge: "Best budget",
                  desc: "The most social and well-run hostel in Thamel, with clean dorms, a rooftop terrace, and a community of trekkers and solo travellers. Excellent notice board for finding trekking partners, sharing taxis, and locating trusted gear rental shops. The social events and traveller connections make it especially valuable for first-time visitors.",
                  color: "border-parchment-2 bg-white",
                },
              ].map((stay) => (
                <div key={stay.name} className={`rounded-xl p-4 border ${stay.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900" dangerouslySetInnerHTML={{ __html: stay.name }} />
                      <p className="text-xs text-muted font-light">{stay.type}</p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Kathmandu</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Kathmandu&apos;s food scene spans from NPR 150 street momos to a 22-course royal Nepali banquet. The local food — dal bhat, momo dumplings, Newari choila, thukpa noodle soup — is uniformly good and very cheap. Tourist restaurants in Thamel serve decent international food at 2–3x local prices.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Bhojan Griha",
                  t: "Heritage Newari cuisine · Dilli Bazaar",
                  d: "A 250-year-old traditional Newari mansion with classical Nepali music, oil-lamp lighting, and a 10-course Newari banquet served by staff in traditional dress. One of the most atmospheric dining experiences in Asia. NPR 2,500–3,500 per person (~$18–26). Book in advance. This is the dinner to save for your last night in Kathmandu.",
                  b: "Most atmospheric",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "OR2K",
                  t: "Middle Eastern-Nepali fusion · Thamel",
                  d: "One of Kathmandu&apos;s longest-running expat favourites — cushioned floor seating, rooftop terrace, and a menu that combines excellent mezze platters with Nepali staples. The hummus and shakshuka are outstanding. NPR 700–1,200 per person (~$5–9). Good vegetarian options throughout. Open until midnight.",
                  b: "Best mid-range",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Roadhouse Cafe",
                  t: "Pizza and grill · Thamel",
                  d: "Kathmandu&apos;s most popular pizza restaurant — wood-fired pizzas, pasta, craft beer, and a lively atmosphere on two floors in the heart of Thamel. The most reliable dinner option for groups with mixed food preferences. NPR 600–1,000 per person (~$4.50–7.50). Also serves breakfast.",
                  b: "Best for groups",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Krishnarpan (at Dwarika&apos;s Hotel)",
                  t: "Royal Nepali banquet · Battisputali",
                  d: "Nepal&apos;s most refined dining experience: a 7-course set menu (NPR 4,000 / ~$30) or the full 22-course royal banquet (NPR 6,000 / ~$45) presenting dishes from all 75 districts of Nepal, served in a torchlit courtyard by staff in Newari ceremonial dress. One meal here changes how you understand Nepali cuisine.",
                  b: "Best fine dining",
                  c: "bg-purple-50 border-purple-200",
                },
                {
                  n: "Local dal bhat at Thakali Kitchen",
                  t: "Thakali meals · Near New Road",
                  d: "The best budget thakali set in the old city area — NPR 350–450 (~$3) for a complete meal of dal, bhat (rice), tarkari (vegetable curry), achaar (pickle), papad, and a small meat side. Refills are automatic and free. Queue with office workers and students at this no-frills lunch canteen near New Road — no English signage but easy to find by the queue.",
                  b: "Best value",
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
            destination="Kathmandu Nepal"
            hotels={[
              {
                name: "Dwarika&apos;s Hotel",
                type: "Heritage luxury · Built from rescued Newari architecture",
                price: "From $300/night",
                rating: "5",
                badge: "Most unique",
                url: "https://www.booking.com/hotel/np/dwarikas.html?aid=2820480",
              },
              {
                name: "Hotel Yak &amp; Yeti",
                type: "Classic 5-star · Durbar Marg",
                price: "From $150/night",
                rating: "5",
                badge: "Most historic",
                url: "https://www.booking.com/hotel/np/yak-yeti.html?aid=2820480",
              },
              {
                name: "Hyatt Regency Kathmandu",
                type: "Luxury resort · Bouddha area",
                price: "From $180/night",
                rating: "5",
                badge: "Best resort",
                url: "https://www.booking.com/hotel/np/hyatt-regency-kathmandu.html?aid=2820480",
              },
              {
                name: "Zostel Kathmandu",
                type: "Social hostel · Thamel",
                price: "From $8/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/np/zostel-kathmandu.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Kathmandu Valley UNESCO Day Tour",
                duration: "8 hrs",
                price: "From $35/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Kathmandu+UNESCO+tour&partner_id=PSZA5UI",
              },
              {
                name: "Pashupatinath & Boudhanath Guided Tour",
                duration: "4 hrs",
                price: "From $20/person",
                badge: "Best morning",
                url: "https://www.getyourguide.com/s/?q=Pashupatinath+Boudhanath+tour&partner_id=PSZA5UI",
              },
              {
                name: "Mountain Flight — Everest Panorama",
                duration: "1 hr",
                price: "From $179/person",
                badge: "Most dramatic",
                url: "https://www.getyourguide.com/s/?q=Kathmandu+mountain+flight+Everest&partner_id=PSZA5UI",
              },
              {
                name: "Newari Cooking Class Kathmandu",
                duration: "3 hrs",
                price: "From $35/person",
                url: "https://www.getyourguide.com/s/?q=Kathmandu+cooking+class&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Kathmandu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🗓️",
                  title: "Visiting in June–August (Monsoon Season)",
                  desc: "Kathmandu receives 80% of its annual rainfall June through August. Mountain flights are cancelled most days, trekking trails become leech-infested mud, and the Himalayan views that define the destination disappear behind cloud for weeks. The best months are October–November and March–April.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "💸",
                  title: "Changing Money at the Airport",
                  desc: "Airport exchange desks offer rates 8–12% worse than Thamel money changers. Take just $20–30 worth of NPR at the airport for your taxi, then change money in bulk at licensed exchange houses on Thamel Marg where rates are competitive and official receipts are provided.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🧳",
                  title: "Buying Trekking Gear Without Checking Quality",
                  desc: "Thamel is flooded with counterfeit branded gear alongside genuine Nepali outdoor brands. Check zippers (YKK is a sign of quality), seam taping, and stitching before buying. Budget NPR 3,000–5,000 ($25–40) for quality locally-made gear rather than NPR 800 for a logo-only fake that will fail in the mountains.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🛕",
                  title: "Skipping Bhaktapur to Save the Entry Fee",
                  desc: "At NPR 1,500 ($11), Bhaktapur&apos;s entry fee is the most complained-about charge in the valley — but it funds a medieval city preserved better than anywhere else in Nepal. The Nyatapola pagoda, the pottery square, and a clay pot of juju dhau alone justify the cost. Do not skip it.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🍽️",
                  title: "Eating Only in Thamel Tourist Restaurants",
                  desc: "Thamel restaurants serve passable but sanitised Nepali food at 3x local prices. For authentic dal bhat with unlimited refills, Newari choila and bara, and local raksi spirit, walk 10–15 minutes to Asan Chowk, Indrachowk, or the Bouddha neighbourhood where locals actually eat.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🕌",
                  title: "Disrespecting Temple Dress Codes",
                  desc: "Pashupatinath requires shoulders and knees covered for all visitors regardless of nationality. Non-Hindus are restricted to the outer precincts — do not attempt to enter the inner sanctum. Swayambhunath and Boudhanath are more relaxed but shoes must be removed before entering any shrine building. Carry a light scarf as a cover-up.",
                  color: "bg-teal-50 border-teal-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Kathmandu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌄",
                  title: "Buy the Multi-Site UNESCO Pass First",
                  desc: "The Kathmandu Valley multi-site pass (~$35, available at any Durbar Square entry booth) covers all seven UNESCO heritage sites for one week. It costs less than buying Kathmandu Durbar Square, Patan, Bhaktapur, Pashupatinath, and Boudhanath separately. Buy it at the first site you visit and keep the receipt.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🏔️",
                  title: "Book Mountain Flights for the Earliest Slot",
                  desc: "Himalayan mountain views are clearest before 9am year-round. By 11am, clouds build around the peaks daily — this is not weather, it is thermal physics. Mountain flights depart 6–8am from Kathmandu Airport. Book the earliest available slot and confirm the day before for weather clearance. October and November have the highest success rates.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🥟",
                  title: "Learn the Momo Hierarchy",
                  desc: "Momos in Kathmandu range from NPR 150 street-stall steamed dumplings to NPR 700 restaurant fusion versions. The best momos are typically found at neighbourhood shops in Patan and Bhaktapur with no English signage. Look for a steamer in the window, a queue of locals, and order the jhol momo (in spicy soup broth) if available.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "📱",
                  title: "Get a Nepali SIM Card in Arrivals",
                  desc: "Ncell and Nepal Telecom both have counters in the arrivals hall at Tribhuvan Airport. A tourist SIM costs NPR 200–400 (~$1.50–3) with 10–15 GB data included. Essential for Pathao and InDrive ride-hailing, Google Maps navigation through the old city lanes, and WhatsApp contact with guesthouses and guides.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🧘",
                  title: "Arrive at Pashupatinath Before 7:30am",
                  desc: "The dawn atmosphere at Pashupatinath — cremation fires on the Bagmati ghats, morning puja bells ringing from the inner sanctum, sadhus in meditation on the stone steps — is the most powerful 90-minute experience in Kathmandu. By 9:30am the tour groups arrive and the atmosphere dilutes significantly. Set the alarm and go early.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "🚕",
                  title: "Use Pathao or InDrive for Local Taxis",
                  desc: "Street taxis in Kathmandu frequently overcharge tourists — the meter is rarely used. Pathao and InDrive show the fare before you book, drivers are rated, and payment is clear. Download both before you arrive, register with a local SIM number in the airport, and use them throughout your stay. Trips within Thamel are typically NPR 200–400.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Kathmandu" />

          {/* Combine With */}
          <CombineWith currentSlug="kathmandu-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Kathmandu safe for solo travellers including women?",
                  a: "Kathmandu is generally safe for solo travellers including solo women. Thamel is well-lit, patrolled, and has a large international backpacker community. Most guesthouses have 24-hour security desks. Take standard urban precautions: use licensed taxis or ride-hailing apps Pathao and InDrive, avoid poorly lit back alleys after midnight, keep a photocopy of your passport rather than the original when out exploring. The Nepali people are extraordinarily friendly and helpful toward visitors.",
                },
                {
                  q: "Do I need altitude sickness medication for Kathmandu?",
                  a: "Kathmandu city sits at 1,400m above sea level — well below the altitude where acclimatisation becomes necessary (typically above 3,000m). Most visitors feel no symptoms in the city itself. If you plan to take a mountain flight to Everest Base Camp (5,364m), your time at high altitude is brief (under 30 minutes) and the risk is low. Consult a doctor before any actual trekking above 3,500m, and always ascend gradually if heading into the Himalayas.",
                },
                {
                  q: "What is the best way to get from Kathmandu Airport to Thamel?",
                  a: "Use the official prepaid taxi counter inside the arrivals hall — NPR 700–900 (~$5–7) to Thamel, journey 20–40 minutes. This avoids negotiation and the touts who approach before you exit arrivals. Once you have a local SIM, Pathao and InDrive ride-hailing apps are reliable and price-transparent alternatives for all subsequent Kathmandu trips.",
                },
                {
                  q: "When is the best time to visit Kathmandu for clear Himalayan views?",
                  a: "October and November are the best months — crystal-clear post-monsoon skies with visibility extending to Everest on most days. The air is washed clean by months of rain and temperatures are 15–25°C in the valley. March and April are the second-best window before pre-monsoon haze builds. December through February is cold but produces excellent mountain photography light. June through August is the worst window — clouds obscure mountain views for weeks.",
                },
                {
                  q: "Do Indian passport holders need a visa for Nepal?",
                  a: "No. Indian citizens do not require a visa for Nepal and can enter freely at all land borders and Tribhuvan International Airport using a valid Indian passport or government-issued photo ID including a Voter ID card. Indian nationals are treated as domestic travellers under the 1950 India-Nepal Treaty of Peace and Friendship. Entry fees at most heritage sites are also free or lower for Indian nationals.",
                },
                {
                  q: "What trekking permits do I need if I add a trek after Kathmandu?",
                  a: "For the classic Everest Base Camp trek you need a TIMS card (Trekkers&apos; Information Management System, NPR 2,000 / ~$15) and a Sagarmatha National Park entry permit (NPR 3,000 / ~$22). Both are obtained in Kathmandu at the Nepal Tourism Board office on Bhrikutimandap Road or at the park entrance gate in Monjo. For the Annapurna Circuit you need a TIMS card and ACAP permit (NPR 3,000). Permits have increased in recent years — verify current fees at the Nepal Tourism Board website before travel.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Kathmandu trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/nepal-7-days", label: "Nepal 7-day itinerary", icon: "🗓️" },
                { href: "/blog/india-budget-guide", label: "Nepal budget guide", icon: "💰" },
                { href: "/blog/leh-ladakh-7-days", label: "Himalayan alternatives", icon: "✈️" },
                { href: "/blog/varanasi-3-days", label: "Varanasi 3 days", icon: "📋" },
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
          <RelatedGuides currentSlug="kathmandu-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Himalayan &amp; South Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Nepal 7 Days — Full Country Itinerary", href: "/blog/nepal-7-days" },
                { label: "Varanasi 3 Days — Ghats &amp; the Ganges", href: "/blog/varanasi-3-days" },
                { label: "Delhi 3 Days — Old &amp; New City", href: "/blog/delhi-3-days" },
                { label: "Bhutan 5 Days — Kingdom of Happiness", href: "/blog/bhutan-5-days" },
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
